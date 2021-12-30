// Files and modules

import Layout from "../components/Layout"
import Head from "next/head"
import Error from "next/error"

// Site metadata

const Metadata = ({ page }) => {
    const title = `friesDAO${page ? ` - ${page}` : ""}`
    return (
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width"></meta>
            <meta name="description" content=""></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content="/friesdao.png"></meta>
            <meta property="og:description" content=""></meta>
            <title>{title}</title>
            <link rel="icon" href="/friesdao.png"></link>
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
            <Layout>
                <Component {...pageProps}></Component>
            </Layout>
            <style jsx global>{`
                :root {
                    --black: #16191E;
                }

                * {
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