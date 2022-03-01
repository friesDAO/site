import Raise from "../components/Raise.jsx"
import useProgress from "../state/useProgress.js"
import useRaise from "../state/useRaise.js"
import { useContext, useEffect } from "react"
import { parse, unparse, format, formatNumber } from "../components/number.js"
import EthereumContext from "../state/EthereumContext.js"
import constants from "../data/constants.json"
import Zooming from "../public/zooming.min.js"
import Marquee from "react-fast-marquee";

// Landing section

const Landing = () => {
    const { enabled, account, USDC, Sale, BN, toWei, fromWei } = useContext(EthereumContext)
    const raiseProgress = useProgress(Sale, BN, toWei, fromWei)
    return (
        <>
            <div className="section landing">
                <img className="hero" src="/restaurant.png"></img>
                <div className="text">
                    <h1 className="title">we're buying fast food places</h1>
                    <div className="desc">a decentralized social experiment where a crypto community builds and governs a fast food franchise empire</div>
                    
                    <div className="progress">
                        <div className="amount">
                            ${formatNumber(parse(raiseProgress.totalPurchased, 6))} raised
                        </div>
                        <div className="bar">
                            
                        </div>

                        <div className="notch n-top"></div>
                        <div className="notch n-bottom">
                            {/* <div className="notch-text">min</div> */}
                        </div>
                    </div>

                    <a className="discord" href="#raise">
                        claim $FRIES tokens
                        <div className="arrow">➔</div>
                    </a>
                </div>
            </div>
            <style jsx>{`
                .landing {
                    min-height: calc(100vh - 80px);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    padding: 0 max(calc(50vw - 500px), var(--side)) 80px max(calc(50vw - 550px), var(--side));
                }

                .hero {
                    width: 350px;
                    margin-top: 12px;
                }

                .text {
                    max-width: 620px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 10px;
                    text-align: center;
                }

                .title {
                    width: 100%;
                    font-size: 2.75rem;
                    font-weight: bold;
                    text-align: center;
                }
                
                .desc {
                    width: 100%;
                    font-size: 1.5rem;
                    text-align: center;
                }

                .discord {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--orange);
                    padding: 0.6rem 2rem;
                    color: white;
                    border-radius: 10px;
                    font-size: 1.5rem;
                    margin-top: 4px;
                    font-weight: 600;
                }

                .discord:hover .arrow {
                    left: 0.5rem;
                }

                .arrow {
                    position: relative;
                    left: 0;
                    display: inline;
                    color: inherit;
                    transition-duration: 250ms;
                    margin-left: 0.5rem;
                }

                @media only screen and (max-height: 900px) {
                    .landing {
                        gap: 16px;
                        padding: 0 max(calc(50vw - 500px), var(--side)) 40px max(calc(50vw - 550px), var(--side));
                    }

                    .hero {
                        width: 300px;
                    }

                    .text {
                        gap: 16px;
                    }
                }

                .progress {
                    border: 2px solid var(--gray);
                    width: 100%;
                    height: 56px;
                    border-radius: 10px;
                    margin-bottom: 0px;
                    position: relative;
                    max-width: 450px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: ${100 * parse(raiseProgress.totalPurchased, 6) / parse(raiseProgress.totalCap, 6)}%;
                    padding: 0 10px 0 0;
                    background-color: #7A83EA;
                    height: 100%;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    border: 2px solid white;
                }

                .amount {
                    font-size: 1.6rem;
                    z-index: 99;
                    color: var(--black);
                    font-weight: 700;
                    text-shadow: -1px 1px 2px #fff,
                    1px 1px 2px #fff,
                    1px -1px 2px #fff,
                    -1px -1px 2px #fff,
                    -1px 1px 2px #fff,
                    1px 1px 2px #fff,
                    1px -1px 2px #fff,
                    -1px -1px 2px #fff,
                    -1px 1px 2px #fff,
                    1px 1px 2px #fff,
                    1px -1px 2px #fff,
                    -1px -1px 2px #fff,
                    -1px 1px 2px #fff,
                    1px 1px 2px #fff,
                    1px -1px 2px #fff,
                    -1px -1px 2px #fff,
                    -1px 1px 2px #fff,
                    1px 1px 2px #fff,
                    1px -1px 2px #fff,
                    -1px -1px 2px #fff;
                }

                .notch {
                    position: absolute;
                    left: ${(constants.raiseMin * 100) / parse(raiseProgress.totalCap, 6)}%;
                    height: 10px;
                    width: 2px;
                    background-color: #7A83EA;
                }    

                .notch-text {
                    position: absolute;
                    bottom: 0px;
                    font-size: 1.2rem;
                    color: #7A83EA;
                    text-align: center;
                    left: 50%;
                    line-height: 1em;
                    padding-top: 1px;
                    border-top: 3px solid #7A83EA;
                    transform: translate(-50%, 100%);
                }

                @media only screen and (max-height: 750px) {
                    .hero {
                        width: 250px;
                    }
                }

                @media only screen and (max-width: 500px) {
                    .landing {
                        gap: 32px;
                        height: unset;
                        min-height: calc(100vh - 80px);
                        padding: 0 max(calc(50vw - 500px), var(--side)) 40px max(calc(50vw - 550px), var(--side));
                    }

                    .hero {
                        width: 200px;
                    }

                    .text {
                        gap: 16px;
                    }

                    .title {
                        font-size: 2.8rem;
                    }
                }
            `}</style>
        </>
    )
}

// Media coverage section
const Coverage = () => (
    <>
        <div className="section coverage">
            <Marquee speed={50} gradientWidth={40}>
                <a target="_blank" href="https://www.coindesk.com/business/2022/01/28/friesdao-wants-to-start-a-crypto-crowdfunded-fast-food-franchise/"><img src="/coindesk.png"></img></a>
                <a target="_blank" href="https://www.investing.com/news/cryptocurrency-news/friesdao-bags-13m-usdc-in-first-48-hours-of-ongoing-whitelist-sale-2753354"><img src="/investing.png"></img></a>
                <a target="_blank" href="https://www.yahoo.com/now/friesdao-crypto-community-mission-acquire-093005643.html"><img src="/yahoo.png"></img></a>
                <a target="_blank" href="https://hackernoon.com/restaurant-focussed-dao-called-friesdao-is-raising-$969-million-to-run-a-fast-food-enterprise"><img src="/hackernoon.png"></img></a>
                <a target="_blank" href="https://thespoon.tech/it-started-as-a-meme-now-friesdao-is-on-track-to-buy-a-restaurant-after-raising-over-4m-selling-nfts/"><img src="/spoon.png"></img></a>
                <a target="_blank" href="https://www.coinspeaker.com/friesdao-seeks-acquire-fast-food-restaurants/"><img src="/coinspeaker.png"></img></a>
                <a target="_blank" href="https://techstartups.com/2022/01/28/crypto-community-friesdao-wants-acquire-fast-food-restaurants/"><img src="/techstartups.png"></img></a>
                <a target="_blank" href="https://www.theblockcrypto.com/post/135610/friesdao-raises-5-4-million-with-plan-to-buy-fast-food-restaurants"><img src="theblock.svg"></img></a>
                <a target="_blank" href="https://www.thestreet.com/investing/friesdao-crypto-enthusiasts-want-to-buy-mcdonalds-subway"><img src="/thestreet.png"></img></a>
                <a target="_blank" href="https://decrypt.co/92591/former-dominos-pizza-vp-joins-friesdao-advisor"><img src="./decrypt.png"></img></a>
                <a target="_blank" href="https://www.nrn.com/quick-service/are-daos-new-restaurant-franchising-fundraising-model"><img src="./nrn.jpg"></img></a>
                <a target="_blank" href="https://cointelegraph.com/news/friesdao-scoops-up-fast-food-franchises-as-part-of-its-crypto-governance-experiment"><img src="./cointelegraph.png"></img></a>
                <a target="_blank" href="https://news.bitcoin.com/a-project-called-fries-dao-raises-5-4-million-to-purchase-fast-food-restaurants/"><img src="./bitcoincom.png"></img></a>
                <a target="_blank" href="https://cryptonews.com/news/9-daos-pay-attention-right-now.htm"><img src="./cryptonews.png"></img></a>
                <a target="_blank" href="https://bitcoinist.com/daos-are-having-a-moment-but-are-they-ready-for-the-mainstream/"><img src="./bitcoinist.png"></img></a>
            </Marquee>
        </div>
        <style jsx>{`
            .coverage {
                padding: 40px 0px;
                border-top: 3px solid var(--orange);
                border-bottom: 3px solid var(--orange);
                overflow: hidden;
            }

            .coverage a {
                height: 30px;
            }

            .coverage img {
                height: 100%;
                margin: 0px 30px;
            }
        `}</style>
    </>
)

// About friesDAO section

const About = () => {

    useEffect(() => {
        new Zooming().listen('#flowchart')
    }, [])

    return (
        <>
            <div className="section about">
                <h2 className="title">what's friesDAO doing?</h2>

                <div className="split">
                    <img className="graphic" id="flowchart" src="/flowchart.svg" data-action="zoom" data-original="/flowchart.svg" />
                    
                    <div className="right">
                        <h2 className="step">form a treasury</h2>
                        <div className="details">gather USDC contributions (on Ethereum) from  community donors and distribute $FRIES governance tokens</div>

                        <h2 className="step">purchase franchises</h2>
                        <div className="details">negotiate with franchise owners and brands to buy well-known fast food stores using the friesDAO community treasury</div>

                        <h2 className="step">expand the empire</h2>
                        <div className="details">create a reproducible framework for community governance to influence store improvements or expansions</div>

                        <h2 className="step">shape the utility</h2>
                        <div className="details">participate in serious yet memeworthy discussions like prioritizing jobs for ourselves and getting NFT coupons for free food</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about {
                    background-color: #fff5f0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 50px;
                    border-bottom: 4px solid var(--orange)
                }

                .split {
                    width: 100%;
                    display: flex;
                    gap: 64px;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                
                .right {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .title {
                    font-size: 4rem;
                    font-weight: bold;
                    color: var(--title);
                    text-align: center;
                }

                .graphic {
                    width: 500px;
                }
                
                .step {
                    font-size: 2.25rem;
                    color: var(--title);
                    margin-bottom: 10px;
                    text-align: center;
                }
                
                .details {
                    font-size: 1.3rem;
                    margin-bottom: 40px;
                }

                .details:last-child {
                    margin-bottom: 0;
                }

                @media only screen and (max-width: 1000px) {
                    .split {
                        gap: 50px;
                    }

                    .graphic {
                        width: 400px;
                    }

                    .details {
                        margin-bottom: 30px;
                    }
                }

                @media only screen and (max-width: 800px) {
                    .graphic {
                        width: 300px;
                    }
                }

                @media only screen and (max-width: 700px) {
                    .split {
                        flex-direction: column;
                    }

                    .graphic {
                        width: 500px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .title {
                        font-size: 2.8rem;
                    }
                    
                    .about {
                        gap: 40px;
                    }

                    .graphic {
                        width: 350px;
                    }
                }

                @media only screen and (max-width: 400px) {
                    .graphic {
                        width: 300px;
                    }
                }
            `}</style>
        </>
    )
}

// graphic section

const Graphic = () => (
    <>
        <div className="section graphic">
            {/* <img className="graphic-img" src="/banner.png" /> */}
        </div>

        <style jsx>{`
            .graphic {
                width: 100%;
                height: 30vh;
                position: relative;
                background-image: url("/banner2.png");
                background-attachment: fixed;
                background-position: right;
                background-repeat: no-repeat;
                background-size: cover;
                filter: opacity(0.35) saturate(1) sepia(0.4);
            }

            .graphic-img {
                position: fixed;
                width: 100%;
                top: 0;
                left: 0;
            }

            @media only screen and (max-width: 550px) {
                .graphic {
                    background-image: url("/banner1.png");
                    background-position: center;
                }
            }
        `}</style>
    </>
)

// FAQ section

const FAQ = () => (
    <>
        <div className="section faq">
            <h2 className="title">FAQs</h2>

            <div className="list">
                <h2 className="question">why are we doing this?</h2>
                <div className="answer">A crypto community wondered if we could actually buy a McDonald's, the favorite employer of rekt traders. DAOs have recently began buying real world things, and we want to prove that we can bridge blockchain with fast food.</div>

                <h2 className="question">will we actually pull this off?</h2>
                <div className="answer">Turns out some community members have lots of experience in the franchising world and have now offered advisement on how we can do this properly. Once we buy the first store successfully, the game plan will be shared so that any execution team can form within the DAO in a decentralized manner to request from the treasury to reproduce the process. If we fail to acquire a store in 1 year, your contribution is refundable (minus any treasury expenditures to date).</div>

                <h2 className="question">do I get anything for donating?</h2>
                <div className="answer">$FRIES tokens, which are symbolic recognition of your contribution, that provide you with membership participatory or governance rights.</div>

                <h2 className="question">do I own the stores?</h2>
                <div className="answer">Due to regulations there is no ownership stake in the stores or its profits, but rather ownership in governance that impacts how we collectively grow and expand stores with those profits (stored in a public multisig wallet). As a decentralized community, we'll be exploring ways to create regulation compliant value accrual.</div>

                <h2 className="question">what's the grand vision?</h2>
                <div className="answer">Imagine a major fast food store in every major city, materialized because of your vote. Go to one near you, flash your barcoded friesDAO NFT, and get that free burger. Fist-bump that dude next to you who did the same. Tell him you liked that $FRIES defi strategy he posted in Discord the other day. We're going to make history.</div>
            </div>

            <a className="docs" href="https://friesdao.gitbook.io/friesdao-docs/" target="_blank">
                    read documentation
                    <div className="arrow">➔</div>
            </a>
        </div>

        <style jsx>{`
            .faq {
                background-color: #fff0f0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 50px;
                border-top: 4px solid var(--orange)
            }

            .list {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
            }

            .title {
                font-size: 4rem;
                font-weight: bold;
                color: var(--title);
                white-space: nowrap;
            }

            .question {
                font-size: 2.25rem;
                color: var(--title);
                margin-bottom: 10px;
            }
            
            .answer {
                font-size: 1.3rem;
                margin-bottom: 40px;
            }

            .answer:last-child {
                margin-bottom: 0;
            }

            .docs {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: var(--orange);
                padding: 0.6rem 2rem;
                color: white;
                border-radius: 10px;
                font-size: 1.5rem;
                margin-top: 24px;
                font-weight: 600;
            }

            .docs:hover .arrow {
                left: 0.5rem;
            }

            .arrow {
                position: relative;
                left: 0;
                display: inline;
                color: inherit;
                transition-duration: 250ms;
                margin-left: 0.5rem;
            }

            @media only screen and (max-width: 1000px) {
                .answer {
                    margin-bottom: 30px;
                }
            }
        `}</style>
    </>
)

// NFT section
const NFT = () => (
    <>
        <div className="section faq">
            <h2 className="title">NFT memberships</h2>
            <h3 className="subtitle">We're seeking to evolve NFT membership cards, complete with beautiful art and assorted traits, into perks such as food or discounts at our friesDAO network stores.</h3>

            <div className="nft-list">
                <div className="nft-container pre-release">
                    <div className="nft-name">pre-release edition</div>
                    <div className="nft-count">200 total</div>
                    <img className="nft-img" src="nft.png" />
                    <div className="nft-price">0 ETH</div>
                    <div className="nft-rarity">for whitelist contributors</div>
                </div>

                <div className="nft-container limited">
                    <div className="nft-name">limited edition</div>
                    <div className="nft-count">350 total</div>
                    <img className="nft-img" src="nft.png" />
                    <div className="nft-price">0.03 ETH</div>
                    <div className="nft-rarity">for general contributors</div>
                </div>

                <div className="nft-container genesis">
                    <div className="nft-name">genesis edition</div>
                    <div className="nft-count">450 total</div>
                    <img className="nft-img" src="nft.png" />
                    <div className="nft-price">0.06 ETH</div>
                    <div className="nft-rarity">for early participants</div>
                </div>

                <div className="nft-container standard">
                    <div className="nft-name">standard edition</div>
                    <div className="nft-count">6969 total</div>
                    <img className="nft-img" src="nft.png" />
                    <div className="nft-price">via staking</div>
                    <div className="nft-rarity">for all participants</div>
                </div>
            </div>

            <h3 className="subsubtitle">Minting will be made available shortly after raise completes.</h3>
        </div>

        <style jsx>{`
            .faq {
                background-color: #fcf6ff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 24px;
            }

            .nft-list {
                display: flex;
                flex-direction: row;
                gap: 20px;
                justify-content: center;
                width: 100%;
                flex-wrap: wrap;
            }

            .title {
                font-size: 4rem;
                font-weight: bold;
                color: var(--text);
                text-align: center;
            }

            .subtitle {
                font-size: 1.75rem;
                color: var(--text);
                font-weight: 400;
                text-align: center;
            }

            .subsubtitle {
                font-size: 1.25rem;
                color: var(--text);
                font-weight: 400;
                text-align: center;
            }

            .nft-container {
                display: flex;
                flex-direction: column;
                text-align: center;
                color: var(--text);
                border: 3px solid var(--orange);
                border-radius: 10px;
                padding: 24px 40px;
                background-color: white;
            }

            .nft-img {
                height: 185px;
                margin: 24px 0;
            }

            .nft-name {
                font-size: 1.65rem;
                font-weight: bold;
                color: var(--orange);
                line-height: 1em;
            }

            .nft-count {
                font-size: 1.5rem;
                line-height: 1em;
                margin-top: 8px;
            }

            .nft-price {
                font-size: 1.5rem;
                line-height: 1em;
                font-weight: bold;
            }

            .nft-rarity {
                font-size: 1.5rem;
                line-height: 1em;
                margin-top: 4px;
            }

            .standard > .nft-img {
                filter: drop-shadow(0 0 8px #ff4747)
            }

            .genesis > .nft-img {
                filter: drop-shadow(0 0 10px #479aff)
            }

            .limited > .nft-img {
                filter: drop-shadow(0 0 12px #944dff)
            }

            .pre-release > .nft-img {
                animation: 3s infinite alternate cycle
            }

            @keyframes cycle {
                0% { filter: drop-shadow(0 0 16px #944dff) }
                17% { filter: drop-shadow(0 0 16px #479aff) }
                33% { filter: drop-shadow(0 0 16px #47ffb8) }
                50% { filter: drop-shadow(0 0 16px #d7ff47) }
                67% { filter: drop-shadow(0 0 16px #fc782b) }
                83% { filter: drop-shadow(0 0 16px #ff4747) }
                100% { filter: drop-shadow(0 0 16px #ff47f9) }
            }

            @media only screen and (max-width: 400px) {
                .nft-container {
                    width: 95%;
                }

                .nft-img {
                    height: auto;
                    width: 95%;
                }
            }
        `}</style>
    </>
)

// Raise $FRIES section

const RaiseContainer = () => (
    <>
        <div className="section raise-container" id="raise">
            <h2 className="title">treasury raise</h2>
            <div className="notice">raise has ended, claiming is open</div>
            <div className="content">
                <Raise />
            </div>
        </div>

        <style jsx>{`
            .notice > a {
                text-decoration: underline;
            }

            .raise-container {
                // height: 100vh; /* temporary */
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                // background-color: #ffebeb;
            }

            .title {
                font-size: 4rem;
                font-weight: bold;
                // color: var(--title);
                text-align: center;
            }

            .content {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 6px;
                font-size: 2rem;
            }

            .message {
                font-weight: bold;
            }

            .notice {
                margin-bottom: 50px;
                font-size: 1.5rem;
                text-align: center;
            }

            @media only screen and (max-width: 600px) {
                .title {
                    font-size: 3.2rem;
                }
            }
        `}</style>
    </>
)

// Home page

const Home = () => (
    <>
        <Landing />
        <Coverage />
        <About />
        <Graphic />
        <FAQ />
        <NFT />
        <RaiseContainer />
        <style jsx global>{`
            .section {
                width: 100%;
                height: auto;
                padding: 10vh max(calc(50vw - 500px), var(--side)) calc(10vh + var(--side)) max(calc(50vw - 500px), var(--side));
            }

            @media only screen and (max-width: 700px) {
                .section {
                    padding: 5vh max(calc(50vw - 500px), var(--side)) calc(5vh + var(--side)) max(calc(50vw - 500px), var(--side));
                }
            }
        `}</style>
    </>
)

// Exports

export default Home