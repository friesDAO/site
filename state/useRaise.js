import { useState, useEffect } from "react"
import constants from "../data/constants.json"
import { makeLeaf, makeTree } from "../util/merkle.js"
const fetch = require("node-fetch")
const whitelist = require(`../data/${constants.whitelist}.json`)

const tree = makeTree(whitelist)

function useRaise(account, Sale, BN, toWei, fromWei) {
    const [ whitelistSaleActive, setWhitelistSaleActive ] = useState(false)
    const [ publicSaleActive, setPublicSaleActive ] = useState(false)
    const [ redeemActive, setRedeemActive ] = useState(false)

    const [ salePrice, setSalePrice ] = useState(0)
    const [ totalPurchased, setTotalPurchased ] = useState(0)
    const [ totalCap, setTotalCap ] = useState(0)

    const [ amountPurchased, setAmountPurchased ] = useState(0)
    const [ whitelistMax, setWhitelistMax ] = useState(0)
    const [ nftsRemaining, setNftsRemaining] = useState(0)
    const [ nftReserved, setNftReserved ] = useState(false)


    useEffect(() => {
        updateData()
        const interval = setInterval(updateData, 5000)

        updateNFTsRemaining()
        const interval2 = setInterval(updateNFTsRemaining, 20000)
        return () => {
            clearInterval(interval)
            clearInterval(interval2)
        }
    }, [account])

    async function updateData() {
        let salePriceValue
        let purchasedValue
        await Promise.all([
            Sale.methods.whitelistSaleActive().call()
                .then(setWhitelistSaleActive),
            Sale.methods.publicSaleActive().call()
                .then(setPublicSaleActive),
            Sale.methods.redeemActive().call()
                .then(setRedeemActive),
            Sale.methods.salePrice().call()
                .then(price => {
                    setSalePrice(+price)
                    salePriceValue = price
                }),
            Sale.methods.totalPurchased().call()
                .then(purchased => setTotalPurchased(BN(purchased))),
            Sale.methods.totalCap().call()
                .then(cap => setTotalCap(BN(cap))),
            account ? Sale.methods.purchased(account).call()
                .then(amount => {
                    setAmountPurchased(BN(amount))
                        purchasedValue = amount
                }) : null
        ])
        const whitelistEntry = whitelist.find(e => e[0].toLowerCase() == account)
        if (whitelistEntry?.length > 0) {
            setWhitelistMax(Math.max(Number(BN(toWei(whitelistEntry[1].toString())).div(BN(salePriceValue))) - Number(fromWei(purchasedValue)) / constants.salePrice, 0))
        } else {
            setWhitelistMax(0)
        }
    }

    async function updateNFTsRemaining() {
        const logs = await fetch(`https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=${constants.startBlock}&toBlock=latest&address=${constants.usdc}&topic0=${constants.purchaseTopic}&topic2=${constants.treasuryTopic}&apikey=${constants.etherscanAPI}`).then(res => res.json())
        if (logs.status == 1) {
            const contributions = {

            }
            
            const addresses = []

            for (const log of logs.result) {
                const address = log.topics[1]
                if (!addresses.includes(address)) {
                    addresses.push(address)
                }
                const amount = parseInt(log.data, 16)
                if (contributions[address]) {
                    contributions[address] += Number(fromWei(amount.toString(), "mwei"))
                } else {
                    contributions[address] = Number(fromWei(amount.toString(), "mwei"))
                }
            }

            for (const [address, amount] of Object.entries(contributions)) {
                if (amount < constants.nftAmountCutoff) {
                    delete contributions[address]
                }
            }

            const remaining = constants.currentNFTAmount - Object.keys(contributions).length

            setNftsRemaining(remaining > 0 ? remaining : 0)


            const formattedAddresses = addresses.slice(0, constants.currentNFTAmount).map(a => a.slice(26).toLowerCase())
            console.log(formattedAddresses)
            console.log(account?.slice(2).toLowerCase())

            if (account && formattedAddresses.includes(account.slice(2).toLowerCase())) {
                setNftReserved(true)
            } else {
                setNftReserved(false)
            }
        }
    }

    return {
        whitelistSaleActive,
        publicSaleActive,
        redeemActive,
        salePrice,
        totalPurchased,
        totalCap,
        amountPurchased,
        setAmountPurchased,
        whitelistMax,
        tree,
        nftsRemaining,
        nftReserved
    }
}

export default useRaise