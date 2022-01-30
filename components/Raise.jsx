// Files and modules

import SaleABI from "../abis/FriesDAOTokenSale.json"
import tokenABI from "../abis/IFriesDAOToken.json"
import useRaise from "../state/useRaise"
import EthereumContext from "../state/EthereumContext.js"
import constants from "../data/constants.json"
import { makeLeaf, makeTree } from "../util/merkle.js"
const whitelist = require(`../data/${constants.whitelist}.json`)
import { parse, unparse, format, formatNumber } from "../components/number.js"
import { useState, useEffect, useContext, useRef } from "react"

const Contribute = () => {
    const { enabled, account, USDC, Sale, BN, toWei, fromWei } = useContext(EthereumContext)
    const raise = useRaise(account, Sale, BN, toWei, fromWei)

    function inputMax() {
        document.getElementById("amount").value = raise.whitelistMax
    }

    async function contribute() {
        if (!enabled) return
        if (!account) {
            return ethereum.request({
                method: "eth_requestAccounts"
            })
        }
        const chainId = await ethereum.request({ method: "eth_chainId" })
        console.log(chainId)
        if (chainId !== constants.chainId) {
            return ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: constants.chainId }]
            })
        }

        if (isNaN(+document.getElementById("amount").value)) return
        const amount = BN(unparse(document.getElementById("amount").value))
        if (amount.isZero()) return

        const approved = BN(await USDC.methods.allowance(account, Sale._address).call())
        if (approved.lt(amount)) {
            console.log("asking for an approve")
            console.log(USDC.methods.approve(Sale._address, BN(2).pow(BN(256)).sub(BN(1))).encodeABI())
            return ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: account,
                    to: USDC._address,
                    data: USDC.methods.approve(Sale._address, BN(2).pow(BN(256)).sub(BN(1))).encodeABI()
                }]
            })
        }

        if (raise.publicSaleActive) {
            ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: account,
                    to: Sale._address,
                    data: Sale.methods.buyFries(toWei(amount.toString(), "mwei")).encodeABI()
                }]
            })
        } else {
            let friesAmount = BN(amount.toString()).mul(BN(raise.salePrice.toString()))
            const whitelistedAmount = whitelist.find(e => e[0].toLowerCase() == account)[1]

            console.log("LEAF CONTENTS:", account, whitelistedAmount, false)
            const leaf = makeLeaf(account, whitelistedAmount, false, 18)
            console.log("LEAF:", leaf, Buffer.from(leaf).toString("hex"))

            const proof = raise.tree.getHexProof(leaf)

            ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: account,
                    to: Sale._address,
                    data: Sale.methods.buyWhitelistFries(
                        toWei(amount, "mwei"),
                        toWei(whitelistedAmount.toString()),
                        false,
                        proof
                    ).encodeABI()
                }]
            })
        }
        
    }

    return (
        <>
            <div className="progress">
                <div className="bar"><div className="percent outside">{formatNumber(100 * parse(raise.totalPurchased, 6) / 9696969)}%</div></div>
            </div>

            <div className="balance">whitelist max: {raise.whitelistMax} USDC</div>
            <div className="amount">
                <input id="amount" className="input" placeholder="amount (USDC)"></input>
                <button className="max" onClick={inputMax}>max</button>
            </div>

            <button className="action" onClick={contribute}>contribute</button>
        </>
    )
}

const Redeem = () => {
    const { enabled, account, USDC, Sale, BN, toWei, fromWei } = useContext(EthereumContext)
    const raise = useRaise(account, Sale, BN, toWei, fromWei)

    async function redeem() {
        if (!enabled) return
        if (!account) {
            return ethereum.request({
                method: "eth_requestAccounts"
            })
        }
        ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: account,
                to: Sale._address,
                data: Sale.methods.redeemFries().encodeABI()
            }]
        })
    }

    return (
        <>
            <div className="balance">redeem amount: 0 $FRIES</div>

            <button className="action" onClick={redeem}>redeem</button>
        </>
    )
}

const Refund = () => {
    return (
        <></>
    )
}

// Layout component

const Raise = () => {
    const { enabled, account, USDC, Sale, BN, toWei, fromWei } = useContext(EthereumContext)
    const raise = useRaise(account, Sale, BN, toWei, fromWei)

    const raiseStartEpoch = new Date(constants.raiseStart).getTime()
    const raiseEndEpoch = new Date(constants.raiseEnd).getTime()
    const [ timeRemaining, setTimeRemaining ] = useState(raiseEndEpoch - Date.now())
    const [ sectionActive, setSectionActive ] = useState("raise")
    
    useEffect(() => {
        setInterval(() => {
            setTimeRemaining(raiseEndEpoch - Date.now())
        }, 2000)
    })

    function formatTimeRemaining(time) {
        time = Math.abs(time)
        const days = Math.floor(time / (24 * 60 * 60 * 1000))
        const hours = Math.floor(time / (60 * 60 * 1000)) - (days * 24)
        if (days == 0) {
            const minutes = Math.floor(time / (60 * 1000)) - (hours * 60)
            return `${hours} hours, ${minutes} minutes`
        }
        return `${days} days, ${hours} hours`
    }

    return (
        <>
            <div className="container">
                <div className="stats subcontainer">
                    <h2 className="title">stats</h2>
                    
                    <div className="stats-list">
                        <div className="column">
                            <h3 className="name">total raised</h3>
                            <div className="value">${format(parse(raise.totalPurchased, 6))}</div>

                            <h3 className="name">target</h3>
                            <div className="value">${format(parse(raise.totalCap, 6))}</div>

                            
                        </div>

                        <div className="column">
                        <h3 className="name">{timeRemaining > 0 ? "remaining" : "raise starts"}</h3>
                            <div className="value">{formatTimeRemaining(timeRemaining)}</div>

                            <h3 className="name">your tokens</h3>
                            <div className="value">{format(parse(raise.amountPurchased))} FRIES</div>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="raise subcontainer">
                        <div className="options">
                            <div className={"option active"} onClick={() => setSectionActive("raise")}>raise</div>
                            <div className={"option disabled"} onClick={() => setSectionActive("redeem")}>redeem</div>
                            <div className={"option disabled"} onClick={() => setSectionActive("refund")}>refund</div>
                        </div>

                        <div className="inner">
                            {sectionActive === "raise" ? <Contribute /> : sectionActive == "redeem" ? <Redeem /> : <Refund />}
                        </div>
                        
                    </div>
                    
                    <div className="banner">
                        <video className="video" autoPlay loop muted playsInline>
                            <source src="grid200x.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                
                
            </div>

            {/* display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 32px; */}

            <style jsx>{`
                .container {
                    height: 100%;
                    width: 100%;
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-template-rows: 1fr;
                    grid-gap: 28px;
                }

                .subcontainer {
                    height: 100%;
                    padding: 56px 50px;
                    background-color: #ffffff;
                    border: 1px solid var(--gray);
                    box-shadow: 0 0 9px -2px var(--gray);
                    border-radius: 10px;
                }

                .stats {
                    grid-area: 1 / 1 / 2 / 2;
                    display: flex;
                    flex-direction: column;
                }

                .title {
                    font-size: 2.5rem;
                    text-align: center;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    width: 100%;
                    border-bottom: 1px solid var(--orange);
                }

                .name {
                    font-weight: 600;
                    font-size: 1.75rem;
                }

                .value {
                    font-size: 1.5rem;
                    margin-bottom: 16px;
                }

                .column:last-child > .value:last-child {
                    margin-bottom: 0 !important;
                }

                .options {
                    background-color: white;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    font-size: 1.75rem;
                    width: 100%;
                }

                .option {
                    width: 100%;
                    text-align: center;
                    padding: 5px 20px;
                    border: 2px solid var(--gray);
                }

                .option.active {
                    background-color: var(--orange);
                    border-color: var(--orange);
                    color: white;
                    display: block;
                }

                .option.disabled {
                    color: var(--gray);
                    cursor: not-allowed;
                    pointer-events: none;
                }

                .option:not(:first-child):not(:last-child) {
                    border-left: none;
                    border-right: none;
                }

                .option:first-child {
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }

                .option:last-child {
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    gap: 28px;
                }

                .raise {
                    background-color: #ffffff;
                    border: 1px solid var(--gray);
                    box-shadow: 0 0 9px -2px var(--gray);
                    width: 100%;
                    border-radius: 10px;
                    padding: 32px 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: auto;
                }

                .banner {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    background-size: cover;
                    border-radius: 10px;
                    background-color: #FAC4A4;
                    position: relative;
                    border: 1px solid var(--gray);
                    box-shadow: 0 0 8px -3px var(--gray);
                }

                .video {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    min-width: 100%; 
                    min-height: 100%;
                    width: 100%;
                    height: 100%;
                }

                .inner {
                    padding: 16px 25px;
                    border: 2px solid var(--gray);
                    border-radius: 10px;
                    margin: 20px 0;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }

                @media only screen and (max-width: 850px) {
                    .buy {
                        gap: 32px;
                    }

                    .container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 24px;
                    }

                    .banner {
                        display: none;
                    }

                    .stats {
                        padding: 24px 50px;
                    }

                    .stats-list {
                        display: flex;
                    }

                    .stats-list > div > .value {
                        white-space: nowrap;
                    }

                    .column {
                        flex: 50%;
                        padding: 0 20px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .raise {
                        padding: 32px 0;
                        width: 100%;
                    }

                    .right {
                        width: 100%;
                    }

                    .raise > div {
                        width: 85%;
                    }

                    .option.disabled {
                        display: none;
                    }

                   

                    .stats {
                        width: 100%;
                    }
                }

                @media only screen and (max-width: 480px) {
                    .stats-list {
                        flex-direction: column;
                    }

                    .stats {
                        align-items: center;
                    }
                }

                @media only screen and (max-width: 400px) {
                    .inner {
                        padding: 16px 12px;
                    }
                }
            `}</style>

            <style jsx global>{`
                .progress {
                    border: 2px solid var(--gray);
                    width: 100%;
                    height: 42px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    position: relative;
                }

                .bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0%;
                    padding: 0 10px 0 0;
                    background-color: var(--orange);
                    height: 100%;
                    border-radius: 10px;
                    font-size: 1.25rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    border: 2px solid white;
                }

                .percent {
                    color: white;
                    font-weight: 600;
                }

                .percent.outside {
                    transform: translateX(calc(100% + 18px));
                    color: var(--text);
                }

                .balance {
                    color: var(--gray);
                    font-size: 1.2rem;
                    margin-bottom: 2px;
                    margin-left: 5px;
                }

                .amount {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .input {
                    border-radius: 10px;
                    border: 2px solid var(--gray);
                    font-size: 1.5rem;
                    padding: 8px 16px; 
                    width: 100%;
                    outline: none;
                    transition: 0.2s border;     
                }

                .input:focus {
                    border: 2px solid var(--orange);
                }

                .max {
                    height: 100%;
                    background-color: var(--orange);
                    padding: 10px 16px;
                    border-radius: 10px;
                    margin-left: 8px;
                    color: white;
                    font-size: 1.25rem;                  
                }

                .action {
                    background-color: var(--orange);
                    font-size: 1.75rem;
                    padding: 8px 48px;
                    color: white;
                    border-radius: 10px;
                    margin-top: 20px;
                }

                .action.disabled {
                    background-color: var(--gray);
                    cursor: not-allowed;
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}

// Exports

export default Raise