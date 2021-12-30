// Files and modules

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
            <meta name="description" content="we're pooling funds to buy a franchise or two"></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content="/friesdao.png"></meta>
            <meta property="og:description" content="we're pooling funds to buy a franchise or two"></meta>
            <title>{title}</title>
            <link rel="icon" href="/friesdao-square.png"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
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
                }

                * {
                    font-family: "Nunito", sans-serif;
                    color: var(--black);
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                }

                h1 {
                    font-size: initial;
                    margin: 0;
                }
    
                h2 {
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
            `}</style>
        </>
    )
}

// Exports

export default App