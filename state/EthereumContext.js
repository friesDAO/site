// Files and modules

import constants from "../data/constants.json"
import { createContext, useEffect, useState } from "react"
import Web3 from "web3"

// Ethereum context

const web3 = new Web3(constants.provider)
const BN = n => new web3.utils.BN(n)

const EthereumContext = createContext({
    web3,
    BN
})

// Ethereum context provider

const EthereumContextProvider = ({ children }) => {
    // Default Ethereum application state

    const [ enabled, setEnabled ] = useState(false)
    const [ chainId, setChainId ] = useState("0x1")
    const [ account, setAccount ] = useState()

    // Update active chain

    async function updateChain() {
        if (typeof ethereum === "undefined") return
        setChainId(await ethereum.request({ method: "eth_chainId" }))
    }
    
    // Update active account

    async function updateAccount() {
        if (typeof ethereum === "undefined") return
        setAccount((await ethereum.request({ method: "eth_accounts" }))[0])
    }

    // Update client side Ethereum state

    async function updateEthereumState() {
        setEnabled(typeof ethereum !== "undefined")
        updateChain()
        updateAccount()
    }

    // Update client side data on loop

    useEffect(() => {
        updateEthereumState()
        setTimeout(updateEthereumState, 500)
        setTimeout(updateEthereumState, 1000)
        const interval = setInterval(updateEthereumState, 3000)
        return () => clearInterval(interval)
    }, [])

    // Set MetaMask listeners

    useEffect(() => {
        if (typeof ethereum !== "undefined") {
            ethereum.on("chainChanged", updateChain)
            ethereum.on("accountsChanged", updateAccount)
        }
        return () => {
            if (typeof ethereum !== "undefined") {
                ethereum.removeListener("chainChanged", updateChain)
                ethereum.removeListener("accountsChanged", updateAccount)
            }
        }
    }, [])

    // Component

    return (
        <EthereumContext.Provider value={{
            web3,
            enabled,
            chainId,
            account,
            BN
        }}>
            {children}
        </EthereumContext.Provider>
    )
}

// Exports

export { EthereumContextProvider }
export default EthereumContext