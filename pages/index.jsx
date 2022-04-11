import Raise from "../components/Raise.jsx"
import useProgress from "../state/useProgress.js"
import useRaise from "../state/useRaise.js"
import { useContext, useEffect } from "react"
import { parse, unparse, format, formatNumber } from "../components/number.js"
import EthereumContext from "../state/EthereumContext.js"
import constants from "../data/constants.json"
import Zooming from "../public/zooming.min.js"
import Marquee from "react-fast-marquee";
import { useState } from "react"
import JoinModal from "../components/JoinModal"

// Landing section

const Landing = () => {
	return (
		<>
			<div className="section landing">
				<img className="hero" src="/restaurant.png"></img>
				<div className="text">
					<h1 className="title">we're buying fast food places</h1>
					<div className="desc">a decentralized social experiment where a crypto community builds and governs a fast food franchise empire via wisdom of the crowd</div>

					<div className="jump-links">
						<a className="jump-link" href="#about">
							for members
							<i className="arrow fas fa-arrow-down"></i>
						</a>

						<a className="jump-link" href="#franchisees">
							for franchisees
							<i className="arrow fas fa-arrow-down"></i>
						</a>
					</div>
				</div>
			</div>
			<style jsx>{`
                .landing {
                    min-height: calc(100vh - 80px);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 32px;
                    padding: 0 max(calc(50vw - 500px), var(--side)) 40px max(calc(50vw - 550px), var(--side));
                }

                .hero {
                    width: 350px;
                    margin-top: 25px;
                }

                .text {
                    max-width: 620px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
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

				.jump-links {
					display: flex;
					flex-direction: row;
					gap: 10px;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
				}

                .jump-link {
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

                .jump-link:hover .arrow {
                    top: 0.3rem;
                }

                .arrow {
                    position: relative;
                    top: 0;
                    display: inline;
                    color: inherit;
					transition: 0.25s top;
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
                        width: 250px;
                    }

                    .text {
                        gap: 8px;
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
	const [ modalActive, setModalActive ] = useState(false)

	useEffect(() => {
		new Zooming().listen('#flowchart')
	}, [])

	return (
		<>
			<JoinModal modalActive={modalActive} setModalActive={setModalActive} />
			<div className="section about" id="about">
				<h2 className="title">what is friesDAO?</h2>

				<div className="split">
					<img className="graphic" id="flowchart" src="/flowchart.svg" data-action="zoom" data-original="/flowchart.svg" />

					<div className="right">
						<h2 className="step">buy franchises</h2>
						<div className="details">we're a decentralized community that's pooled $5.4M to buy and/or finance a global network of fast food stores</div>

						<h2 className="step">make connections</h2>
						<div className="details">from crypto enthusiasts to restaurant veterans, we're developing both friendships and business relationships</div>

						<h2 className="step">enjoy perks</h2>
						<div className="details">receive NFT-enabled perks at our stores in addition to rights to decide on which brands to franchise under</div>

						<h2 className="step">create value</h2>
						<div className="details">discover the power of network effects in real world decision-making to lay the foundations of the next DeFi evolution</div>
					</div>
				</div>

				<button className="jump-link" onClick={() => {setModalActive(true)}}>
					join friesDAO
					<div className="arrow">➔</div>
				</button>
			</div>

			<style jsx>{`
                .about {
                    background-color: #fff5f0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 50px;
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

				.jump-link {
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

                .jump-link:hover .arrow {
                    left: 0.5rem;
                }

                .arrow {
                    position: relative;
                    left: 0;
                    display: inline;
                    color: inherit;
					transition: 0.25s left;
					transform: translateY(2px);
                    margin-left: 0.5rem;
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

// franchisees section

const Franchisees = () => {
	const [ copied, setCopied ] = useState(false)

	function copyTextToClipboard(text) {
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true)
			setTimeout(() => {
				setCopied(false)
			}, 2000)
		})
	}

	return (
		<>
			<div className="section franchisees" id="franchisees">
				<h2 className="title">for franchisees</h2>

				<div className="list">
					<div className="detail">We can provide you with a rapid injection of capital as a faster, informal alternative to commercial lenders. Simply undergo a brief online interview and submit a simple budget plan that will be reviewed by the community for approval. No credit checks are necessary.
						<br></br><br></br>
						There are two paths you can take for friesDAO to help you acquire a store:</div>

					<h2 className="point">conditional ownership</h2>
					<div className="detail">If there is an existing store in your area for sale, we can help you acquire it and provide advice from seasoned franchise operators. In exchange, we will have decision making rights to a portion of the business's profits for a period of time. After we recuperate the initial amount, you will be "gifted" full ownership of the store.</div>

					<h2 className="point">0% fee cash advance</h2>
					<div className="detail">Apply for up to a $1M merchant cash advance in exchange for some free food promos to our community. To qualify for this offer, you will need to become a friesDAO store community member by purchasing vested FRIES tokens over the duration of the repayment period.</div>
				</div>

				<button className="inquire" onClick={() => { copyTextToClipboard("friesdao@protonmail.com") }} href="https://friesdao.gitbook.io/friesdao-docs/">
					{copied ? "email copied!" : "inquire now"}
					<i className="copy-icon fas fa-copy"></i>
				</button>
			</div>

			<style jsx>{`
            .franchisees {
                // background-color: #fff0f0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
				border-top: 4px solid var(--orange);
            }

            .list {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
            }

            .title {
                font-size: 4rem;
                font-weight: bold;
                color: var(--black);
				margin-bottom: 50px;
                text-align: center;
            }

            .point {
                font-size: 2.25rem;
                color: var(--black);
                margin-bottom: 10px;
            }
            
            .detail {
                font-size: 1.3rem;
                margin-bottom: 40px;
            }

            .detail:last-child {
                margin-bottom: 20px;
            }

            .inquire {
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

			.copy-icon {
				color: white;
				margin-left: 0.5em;
			}

            @media only screen and (max-width: 1000px) {
                .answer {
                    margin-bottom: 30px;
                }
            }
        `}</style>
		</>
	)
}

// NFT section
const NFT = () => (
	<>
		<div className="section nft">
			<h2 className="title">NFT memberships</h2>
			<h3 className="subtitle">access special perks such as food or discounts at our friesDAO network stores</h3>

			<div className="nft-list">
				<div className="nft-container pre-release">
					<div className="nft-name">founders edition</div>
					<div className="nft-count">200 total</div>
					<img className="nft-img" src="nft.png" />
					<div className="nft-price">0 ETH</div>
					<div className="nft-rarity">for whitelist contributors</div>
				</div>

				<div className="nft-container limited">
					<div className="nft-name">genesis edition</div>
					<div className="nft-count">350 total</div>
					<img className="nft-img" src="nft.png" />
					<div className="nft-price">0.03 ETH</div>
					<div className="nft-rarity">for general contributors</div>
				</div>

				<div className="nft-container genesis">
					<div className="nft-name">limited edition</div>
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

			<h3 className="subsubtitle">minting is available in our <a href="https://app.fries.fund/">member app</a></h3>
		</div>

		<style jsx>{`
            .nft {
				border-bottom: 4px solid var(--orange);
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
				margin-top: 20px;
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

			.subsubtitle > a {
				text-decoration: underline;
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
				width: 325px;
            }

            .nft-img {
                width: 100%;
                margin: 24px 0;
            }

            .nft-name {
                font-size: 1.4rem;
                font-weight: bold;
                color: var(--orange);
                line-height: 1em;
            }

            .nft-count {
                font-size: 1.25rem;
                line-height: 1em;
                margin-top: 8px;
            }

            .nft-price {
                font-size: 1.3rem;
                line-height: 1em;
                font-weight: bold;
            }

            .nft-rarity {
                font-size: 1.3rem;
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
		<NFT />
		<Graphic />
		<Franchisees />

		{/* <RaiseContainer /> */}
		<style jsx global>{`
            .section {
                width: 100%;
                height: auto;
                padding: 10vh max(calc(50vw - 500px), var(--side)) 60px max(calc(50vw - 500px), var(--side));
            }

            @media only screen and (max-width: 700px) {
                .section {
                    padding: 5vh max(calc(50vw - 500px), var(--side)) 40px max(calc(50vw - 500px), var(--side));
                }
            }
        `}</style>
	</>
)

// Exports

export default Home