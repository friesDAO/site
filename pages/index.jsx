
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
                padding: 0 max(calc(50vw - 500px), 20px) 80px max(calc(50vw - 550px), 20px);
            }

            .hero {
                width: 900px;
                height: 500px; /* temporary */
                border: 1px solid #000000; /* temporary */
            }

            .text {
                width: 60%;
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
            }
            
            .desc {
                width: 100%;
                font-size: 1.5rem;
                text-align: center;
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
                    <h2 className="step">Raise</h2>
                    <div className="details">blah blah this is my text for raise we will raise so much money and be very rich richer than jeff bozos from scamazon</div>

                    <h2 className="step">Purchase</h2>
                    <div className="details">blah blah this is my text for purchase we will buy all of the franchises we will buy the entire earth and every subway on it we will buy out subway itself</div>

                    <h2 className="step">Distribute</h2>
                    <div className="details">blah blah this is my text for distribute token holders will get richer than richard heart and his hex scam $60 billion market cap</div>
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
                padding: 0 max(calc(50vw - 500px), 20px) 40px max(calc(50vw - 500px), 20px);
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
        <Buy />
        <style jsx global>{`
            .section {
                width: 100%;
                height: 100vh;
                padding: 0 max(calc(50vw - 550px), 20px);
            }
        `}</style>
    </>
)

// Exports

export default Home