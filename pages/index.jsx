
const Landing = () => (
    <>
        <div className="section landing">
            <img className="hero"></img>
            <div className="text">
                <h1 className="title">fries, decentralized</h1>
                <div className="desc">creating a community driven fast food franchise empire, built on the Ethereum blockchain and governed by the friesDAO</div>
            </div>
        </div>
        <style jsx>{`
            .landing {
                height: calc(100vh - 80px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 48px;
                padding: 0 max(calc(50vw - 500px), var(--side)) 80px max(calc(50vw - 550px), var(--side));
            }

            .hero {
                width: 100%;
                height: 100%; /* temporary */
                max-width: 900px;
                max-height: 500px;
                border: 1px solid #000000; /* temporary */
            }

            .text {
                width: 620px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 20px;
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

            @media only screen and (max-width: 600px) {
                .text {
                    width: auto;
                }

                .title {
                    font-size: 2.8rem;
                }
            }
        `}</style>
    </>
)

const About = () => (
    <>
        <div className="section about">
            <h2 className="title">what is friesDAO?</h2>

            <div className="split">
                <img className="graphic" src="/friesdao.png" />
                
                <div className="right">
                    <h2 className="step">raise funds</h2>
                    <div className="details">gather USDC from community contributions in a public fundraiser and distribute the $FRIES governance token proportionally to contributors</div>

                    <h2 className="step">purchase franchises</h2>
                    <div className="details">negotiate with franchise owners to acquire well-known profitable fast food franchises using the friesDAO community treasury</div>

                    <h2 className="step">reacquire $FRIES</h2>
                    <div className="details">using franchise revenue, buy back governance tokens for the friesDAO treasury controlled by community governance</div>
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

const Buy = () => (
    <>
        <div className="section buy">

        </div>

        <style jsx>{`
            .buy {
                background-color: #ffebeb;
            }
        `}</style>
    </>
)

// Home page

const Home = () => (
    <>
        <Landing />
        <About />
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