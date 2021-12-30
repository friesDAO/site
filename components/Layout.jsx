// Files and modules

import Link from "next/link"
import constants from "../data/constants.json"

// Navigation link component

const NavLink = ({ name, href, external, margin }) => (
    <>
        {external ? (
            <a className="link" href={href} target="_blank">{name}</a>
        ) : (
            <Link href={href}>
                <a className="link">{name}</a>
            </Link>
        )}
        <style jsx>{`
            .link {
                font-size: 1.1rem;
                color: var(--black);
                margin: ${margin || "0 0 0 48px"};
            }

            .link:hover {
                text-decoration: underline;
            }
        `}</style>
    </>
)

// Navigation bar component

const NavBar = () => (
    <>
        <nav className="nav">
            <img className="icon" src="/friesdao.png"></img>
            <div className="title">friesDAO</div>
            <NavLink name="launch app ➔" href={`https://app.${constants.host}`} external margin="0 0 0 auto"></NavLink>
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
                font-size: 1.3rem;
                margin-left: 20px;
            }
        `}</style>
    </>
)

// Footer component

const Footer = () => (
    <>
        <footer className="footer">
            <a href="https://twitter.com/friesDAO" target="_blank">
                <img className="icon" src="/twitter.svg"></img>
            </a>
            <a href="https://discord.gg/friesdao" target="_blank">
                <img className="icon" src="/discord.svg"></img>
            </a>
            <a href="https://github.com/friesDAO" target="_blank">
                <img className="icon" src="/github.svg"></img>
            </a>
        </footer>
        <style jsx>{`
            .footer {
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: 48px;
                padding: 0 max(calc(50vw - 550px), 20px);
            }

            .icon {
                height: 1.5rem;
            }
        `}</style>
    </>
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