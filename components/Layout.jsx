// Files and modules

import Link from "next/link"
import constants from "../data/constants.json"
import { useState } from "react"
import JoinModal from "./JoinModal"

// Navigation bar component

const NavBar = () => {
	const [ modalActive, setModalActive ] = useState(false)
	const [ dropdownExpanded, setDropdownExpanded ] = useState(false)

	return (
		<>
			<JoinModal modalActive={modalActive} setModalActive={setModalActive} />
			<nav className="nav">
				<div className="logo-title">
					<img className="icon" src="/friesdao.png"></img>
					<div className="title">friesDAO</div>
				</div>



				<div className="dropdown">
					<i className={`dropdown-button fas fa-bars${dropdownExpanded ? " active" : ""}`} onClick={() => setDropdownExpanded(!dropdownExpanded)}></i>
					<div className={`dropdown-contents${dropdownExpanded ? " shown" : ""}`}>
						<div className="dropdown-link" onClick={() => {setModalActive(true)}}>join friesDAO<div className="arrow">➔</div></div>

						<a href="https://app.fries.fund/" className="dropdown-link disabled">member app<div className="arrow">➔</div></a>

						<a href="https://friesdao.gitbook.io/friesdao-docs/" target="_blank" className="dropdown-link">documentation<div className="arrow">➔</div></a>
					</div>
				</div>
			</nav>
			<style jsx>{`
            .nav {
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 0 max(calc(50vw - 500px), var(--side));
            }

			.logo-title {
				display: flex;
				flex-direction: row;
				align-items: center;
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
                transition-duration: 0.25s;
                margin-left: 0.5rem;
            }

			.dropdown-button {
				font-size: 1.75em;
				transition: 0.25s color;
				cursor: pointer;
			}

			.dropdown-button.active {
				color: var(--orange);
			}

			.dropdown {
				position: relative
			}

			.dropdown-link.disabled {
				color: var(--gray);
				pointer-events: none;
			}

			.dropdown-link.disabled > .arrow {
				color: var(--gray);
			}

			.dropdown-contents {
				box-shadow: 0 0 7px -2px var(--gray);
				border: 1px solid gray;
				background-color: #FDFDFD;
				padding: 20px 40px;
				border-radius: 10px;
				position: absolute;
				top: calc(100% + 10px);
				right: 0;
				display: none;
				flex-direction: column;
			}

			.dropdown-contents.shown {
				display: flex;
			}

			.dropdown-link {
				font-size: 1.4em;
				border-bottom: 1px solid var(--gray);
				padding: 10px 0;
				display: flex;
				flex-direction: row;
			}

			.dropdown-link:last-child {
				border-bottom: none;
			}

			.dropdown-link:hover .arrow {
				left: 0.5rem;
			}

			@media only screen and (max-width: 700px) {                
                .dropdown-contents {
					padding: 10px 32px;
				}
            }
        `}</style>
		</>
	)
}

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

			@media only screen and (max-width: 400px) {
				.footer {
					gap: 20px;
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