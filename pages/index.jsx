import Raise from "../components/Raise.jsx"

// Landing section

const Landing = () => (
    <>
        <div className="section landing">
            <img className="hero" src="/restaurant.png"></img>
            <div className="text">
                <h1 className="title">we're buying fast food places</h1>
                <div className="desc">a decentralized social experiment where a crypto community will build and govern a fast food franchise empire</div>
                <a className="discord" href="#raise-container">
                    contribute
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
                gap: 22px;
                padding: 0 max(calc(50vw - 500px), var(--side)) 80px max(calc(50vw - 550px), var(--side));
            }

            .hero {
                width: 350px;
                margin-top: 20px;
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
                // white-space: nowrap;
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
                margin-top: 24px;
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
                    gap: 32px;
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

// About friesDAO section

const About = () => (
    <>
        <div className="section about">
            <h2 className="title">what's friesDAO doing?</h2>

            <div className="split">
                <img className="graphic" src="/friesdao.png" />
                
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
            }

            .split {
                width: 100%;
                display: flex;
                gap: 80px;
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
                white-space: nowrap;
            }

            .graphic {
                width: 400px;
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
                    width: 300px;
                }

                .details {
                    margin-bottom: 30px;
                }
            }

            @media only screen and (max-width: 800px) {
                .graphic {
                    width: 250px;
                }
            }

            @media only screen and (max-width: 700px) {
                .split {
                    flex-direction: column;
                }

                .graphic {
                    width: 300px;
                }
            }

            @media only screen and (max-width: 600px) {
                .title {
                    font-size: 2.8rem;
                }
                
                .about {
                    gap: 40px;
                }
            }

            @media only screen and (max-width: 400px) {
                .graphic {
                    width: 250px;
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

                <h2 className="question">will you actually pull this off?</h2>
                <div className="answer">Turns out some community members have lots of experience in the franchising world and have now offered advisement on how we can do this properly. Once we buy the first store successfully, the gameplan will be shared so that any execution team can form within the DAO in a decentralized manner to request from the treasury to reproduce the process.</div>

                <h2 className="question">do I get anything for donating?</h2>
                <div className="answer">$FRIES tokens, which are symbolic recognition of your contribution, that provide you with membership participatory or governance rights. Each token represents a contribution of $0.04168.</div>

                <h2 className="question">do I own the stores?</h2>
                <div className="answer">Due to regulations there is no ownership stake in the stores or its profits, but rather ownership in governance that impacts how we collectively grow and expand stores with those profits. As a decentralized community, we'll be exploring ways to create regulation compliant value accrual.</div>

                <h2 className="question">what's the grand vision?</h2>
                <div className="answer">Imagine a major fast food store in every major city, materialized because of your vote. Go to one near you, flash your barcoded friesDAO NFT, and get that free burger. Fist-bump that dude next to you who did the same. Tell him you liked that $FRIES defi strategy he posted in Discord the other day. We're going to make history.</div>
            </div>

            <a className="docs" href="https://friesdao.gitbook.io/friesdao-docs/" target="_blank">
                    learn more
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

// Raise $FRIES section

const RaiseContainer = () => (
    <>
        <div className="section buy" id="raise-container">
            <h2 className="title">contribute to treasury</h2>
            <div className="content">
                <Raise />
            </div>
        </div>

        <style jsx>{`
            .buy {
                // height: 100vh; /* temporary */
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                gap: 50px;
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

            @media only screen and (max-width: 600px) {
                .title {
                    font-size: 3.2rem;
                }

                .buy {
                    gap: 32px;
                }
            }
        `}</style>
    </>
)

// Home page

const Home = () => (
    <>
        <Landing />
        <About />
        <FAQ />
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