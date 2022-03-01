// Files and modules

import Link from "next/link"
import constants from "../data/constants.json"

// Navigation link component

const NavLink = ({ href, external, margin, disabled, children }) => (
    <>
        
        { disabled ? (
            <div className="link">
                {children}
            </div>
        ) : external ? (
            <a className="link" href={href} target="_blank">
                {children}
            </a>
        ) : (
            <Link href={href}>
                <a className="link">
                    {children}
                </a>
            </Link>
        )}
        <style jsx>{`
            .link {
                font-size: 1.1rem;
                color: var(--${disabled ? "gray" : "black"});
                margin: ${margin || "0 0 0 48px"};
                user-select: ${disabled ? "none" : "all"};
                border-bottom: 1px solid transparent;
            }

            .link:hover {
                border-bottom: ${disabled ? "1px solid transparent" : "1px solid #000000"};
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
            <NavLink href={`https://discord.gg/friesdao`} external margin="0 0 0 auto">
                <div className="app-link">
                    join discord
                    <div className="arrow">➔</div>
                </div>
            </NavLink>
        </nav>
        <style jsx>{`
            .nav {
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0 max(calc(50vw - 500px), var(--side));
            }

            .icon {
                height: 3rem;
            }

            .title {
                font-size: 1.5rem;
                margin-left: 0.7rem;
                margin-top: 0.2rem;
                font-weight: 600;
            }

            .app-link {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                color: inherit;
                cursor: inherit;
            }

            .app-link:hover .arrow {
                left: 0.15rem;
            }

            .app-link:active {
                user-select: none;
            }

            .arrow {
                position: relative;
                left: 0;
                display: inline-block;
                color: inherit;
                transition-duration: 300ms;
                margin-left: 0.5rem;
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
            <a href="https://friesdao.gitbook.io/friesdao-docs/" target="_blank">
                <img className="icon" src="/docs.svg"></img>
            </a>
            <a href="https://www.linkedin.com/company/friesdao/" target="_blank">
                <img className="icon" src="/linkedin.svg"></img>
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
                padding: 0 max(calc(50vw - 500px), var(--side));
                border-top: 1px solid var(--title);
            }

            .icon {
                height: 24px;
            }

            @media only screen and (max-width: 700px) {                
                .footer {
                    gap: 30px;
                    justify-content: center;
                }
            }
        `}</style>
    </>
)

// Layout component

const Layout = ({ children }) => (
    <>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
    </>
)

// Exports

export default Layout