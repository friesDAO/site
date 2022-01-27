import { useState, useEffect } from "react"

function useRaise(account, Sale, BN) {
    const [ whitelistSaleActive, setWhitelistSaleActive ] = useState(false)
    const [ publicSaleActive, setPublicSaleActive ] = useState(false)
    const [ redeemActive, setRedeemActive ] = useState(false)

    const [ salePrice, setSalePrice ] = useState(0)
    const [ totalPurchased, setTotalPurchased ] = useState(0)
    const [ totalCap, setTotalCap ] = useState(0)

    const [ amountPurchased, setAmountPurchased ] = useState(0)
    const [ whitelistMax, setWhitelistMax ] = useState(0)

    useEffect(() => {
        updateData()
        const interval = setInterval(updateData, 5000)
        return () => clearInterval(interval)
    }, [account])

    async function updateData() {
        console.log(await Sale.methods.FRIES().call())
        await Promise.all([
            Sale.methods.whitelistSaleActive().call()
                .then(setWhitelistSaleActive),
            Sale.methods.publicSaleActive().call()
                .then(setPublicSaleActive),
            Sale.methods.redeemActive().call()
                .then(setRedeemActive),
            Sale.methods.salePrice().call()
                .then(price => setSalePrice(+price)),
            Sale.methods.totalPurchased().call()
                .then(purchased => setTotalPurchased(BN(purchased))),
            Sale.methods.totalCap().call()
                .then(cap => setTotalCap(BN(cap))),
            account ? Sale.methods.purchased(account).call()
                          .then(amount => setAmountPurchased(BN(amount))) : null,
            account ? Sale.methods.whitelist(account).call()
                          .then(amount => setWhitelistMax(BN(amount))) : null
        ])
    }

    return {
        whitelistSaleActive,
        publicSaleActive,
        redeemActive,
        salePrice,
        totalPurchased,
        totalCap,
        amountPurchased,
        setAmountPurchased
    }
}

export default useRaise