import Raise from "../components/Raise.jsx"

// Landing section

const Landing = () => (
    <>
        <div className="section landing">
            <img className="hero" src="/restaurant.png"></img>
            <div className="text">
                <h1 className="title">fries, decentralized</h1>
                <div className="desc">creating a community driven fast food franchise empire, built on the Ethereum blockchain and governed by the friesDAO</div>
                <a className="discord" href="https://discord.com/invite/friesdao" target="_blank">
                    join the community
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
                font-size: 4rem;
                font-weight: bold;
                text-align: center;
                white-space: nowrap;
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
            <h2 className="title">what is friesDAO?</h2>

            <div className="split">
                <img className="graphic" src="/friesdao.png" />
                
                <div className="right">
                    <h2 className="step">raise funds</h2>
                    <div className="details">gather USDC contributions from the community in a public fundraiser and distribute the $FRIES governance token proportionally to contributors</div>

                    <h2 className="step">purchase franchises</h2>
                    <div className="details">negotiate with franchise owners to acquire well-known profitable fast food franchises using the friesDAO community treasury</div>

                    <h2 className="step">expand.</h2>
                    <div className="details">any operating profits will go towards store improvements or expansion with additional stores, as the DAO sees fit</div>
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

// Buy $FRIES section

const Buy = () => (
    <>
        <div className="section buy">
            <h2 className="title">public raise</h2>
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
                white-space: nowrap;
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
        <Buy />
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