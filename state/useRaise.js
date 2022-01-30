import { useState, useEffect } from "react"
import constants from "../data/constants.json"
import { makeLeaf, makeTree } from "../util/merkle.js"
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


    useEffect(() => {
        updateData()
        const interval = setInterval(updateData, 5000)
        return () => clearInterval(interval)
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
        tree
    }
}

export default useRaise