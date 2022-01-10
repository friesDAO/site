// Files and modules

import SaleABI from "../abis/FriesDAOTokenSale.json"
import tokenABI from "../abis/IFriesDAOToken.json"
import { useState, useEffect, useContext, useRef } from "react"


// Layout component

const Raise = () => {
    return (
        <>
            <div className="container">
                <div className="stats subcontainer">
                    <h2 className="title">Stats</h2>

                    <h3 className="name">Total Raised</h3>
                    <div className="value">$12,443,343</div>

                    <h3 className="name">Target</h3>
                    <div className="value">$18,696,969</div>

                    <h3 className="name">Remaining</h3>
                    <div className="value">2 days, 4 hours</div>

                    <h3 className="name">Your Share</h3>
                    <div className="value">24.54%</div>

                    <h3 className="name">Your Tokens</h3>
                    <div className="value">23232 $FRIES</div>
                </div>

                <div className="right">
                    <div className="raise subcontainer">
                        <div className="options">
                            <div className="option">Raise</div>
                            <div className="option">Redeem</div>
                            <div className="option">Refund</div>
                        </div>

                        <div className="inner">
                            <div className="progress">
                                <div className="bar">66%</div>
                            </div>

                            <div className="balance">Max: 5000 USDC</div>
                            <div className="amount">
                                <input className="input" placeholder="Amount (USDC)"></input>
                                <button className="max">MAX</button>
                            </div>
                        </div>

                        <button className="action">Contribute</button>
                    </div>
                    
                    <div className="image"></div>
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
                    grid-gap: 32px;
                }

                .subcontainer {
                    height: 100%;
                    padding: 32px 50px;
                    background-color: #ffffff;
                    border: 1px solid var(--gray);
                    box-shadow: 0 0 9px -2px var(--gray);
                    border-radius: 10px;
                }

                .stats {
                    grid-area: 1 / 1 / 2 / 2;
                }

                .title {
                    font-size: 2.5rem;
                    text-align: center;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
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

                .value:last-child {
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

                .option:not(:first-child):not(:last-child) {
                    border-left: none;
                    border-right: none;
                }

                .option:first-child {
                    border-radius: 10px 0 0 10px;
                }

                .option:last-child {
                    border-radius: 0 10px 10px 0;
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    gap: 32px;
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

                .image {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    background-image: url("./dots.jpg");
                    background-size: cover;
                    border-radius: 10px;
                    border: 1px solid var(--gray);
                }

                .inner {
                    padding: 16px 25px;
                    border: 2px solid var(--gray);
                    border-radius: 10px;
                    margin: 20px 0;
                    width: 100%;
                }

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
                    width: 66%;
                    background-color: var(--orange);
                    height: 100%;
                    border-radius: 10px;
                    font-size: 1.25rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 0 10px 0 0;
                    color: white;
                    font-weight: 600;
                    border: 2px solid white;
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
                }

                .max {
                    height: 100%;
                    background-color: var(--orange);
                    padding: 10px 16px;
                    border-radius: 10px;
                    margin-left: 8px;
                    color: white;
                    font-size: 1.5rem;                  
                }

                .action {
                    background-color: var(--orange);
                    font-size: 1.75rem;
                    padding: 8px 48px;
                    color: white;
                    border-radius: 10px;
                }
            `}</style>
        </>
    )
}

// Exports

export default Raise