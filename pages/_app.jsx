// Files and modules

import constants from "../data/constants.json"
import Layout from "../components/Layout.jsx"
import { EthereumContextProvider } from "../state/EthereumContext.js"
import Head from "next/head"
import Error from "next/error"

// Site metadata

const Metadata = ({ page }) => {
    const title = `friesDAO${page ? ` - ${page}` : ""}`
    return (
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width"></meta>
            <meta name="description" content="a decentralized social experiment where a crypto community builds and governs a fast food franchise empire via wisdom of the crowd"></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content={`https://${constants.host}/friesdao.png`}></meta>
            <meta property="og:description" content="we're pooling funds to buy a fast food franchise or two"></meta>

            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content="@friesdao"></meta>
            <meta name="twitter:title" content={title}></meta>
            <meta name="twitter:description" content="a decentralized social experiment where a crypto community builds and governs a fast food franchise empire via wisdom of the crowd"></meta>
            <meta name="twitter:image" content={`https://${constants.host}/friesdao.png`}></meta>
            <meta name="twitter:creator" content="@friesdao"></meta>

            <title>{title}</title>
            <link rel="icon" href="/friesdao-square.png"></link>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}

// Site content

const App = ({ Component, pageProps }) => {
    // Error page

    if (pageProps.statusCode) {
        return <Error statusCode={pageProps.statusCode}></Error>
    }

    // Component

    return (
        <>
            <Metadata page={pageProps.page}></Metadata>
            <EthereumContextProvider>
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </EthereumContextProvider>
            <style jsx global>{`
                :root {
                    --black: #16191E;
                    --title: #5B2100;
                    --gray: #afafaf;
                    --orange: #E36911;
                    --side: 40px;
                }

                * {
                    font-family: "Nunito", sans-serif;
                    color: var(--black);
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    background-color: #FDFDFD;
                }

                h1, h2, h3 {
                    font-size: initial;
                    margin: 0;
                }
    
                p {
                    margin: 0;
                }
    
                a {
                    color: initial;
                    text-decoration: initial;
                    cursor: pointer;
                }
    
                button {
                    cursor: pointer;
                    background-color: transparent;
                    border: none;
                    padding: 0;
                }

                @media only screen and (max-width: 1000px) {
                    html {
                        font-size: 14px;
                    }
                }

                @media only screen and (max-width: 700px) {
                    html {
                        font-size: 13px;
                    }

                    :root {
                        --side: 20px;
                    }
                }

                @media only screen and (max-width: 400px) {
                    html {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    )
}

// Exports

export default App