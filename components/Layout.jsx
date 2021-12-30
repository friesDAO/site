// Navigation bar component

const NavBar = () => (
    <>
        <nav className="nav">
            <img className="icon" src="/friesdao.png"></img>
            <div className="title">friesDAO</div>
        </nav>
        <style jsx>{`
            .nav {
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0 max(calc(50vw - 550px), 20px);
            }

            .icon {
                height: 2.5rem;
            }

            .title {
                font-size: 1.5rem;
                margin-left: 20px;
            }
        `}</style>
    </>
)

// Footer component

const Footer = () => (
    <></>
)

// Layout component

const Layout = ({ children }) => (
    <>
        <NavBar></NavBar>
        <div className="content">
            {children}
        </div>
        <Footer></Footer>
        <style jsx>{`
            .content {
                width: 100%;
                padding: 0 max(calc(50vw - 550px), 20px);
            }
        `}</style>
    </>
)

// Exports

export default Layout