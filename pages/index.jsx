// Home page

const Home = () => (
    <>
        <div className="section landing">
            <img className="hero"></img>
            <div className="text">
                <h1 className="title">fries, decentralized</h1>
                <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta non massa sed lacinia. Curabitur pellentesque, neque cursus ultricies eleifend, est lacus placerat metus, non pulvinar neque diam a metus.</div>
            </div>
        </div>
        <style jsx>{`
            .section {
                width: 100%;
                height: 100vh;
            }

            .landing {
                height: calc(100vh - 80px);
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding-bottom: 80px;
            }

            .hero {
                width: 500px;
                height: 500px; /* temporary */
                border: 1px solid #000000; /* temporary */
                margin-right: 40px;
            }

            .text {
                width: calc(100% - 540px);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 20px;
            }

            .title {
                font-size: 4rem;
                font-weight: bold;
            }
            
            .desc {
                font-size: 1.5rem;
            }
        `}</style>
    </>
)

// Exports

export default Home