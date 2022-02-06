import { useState, useEffect } from "react"

function useProgress(Sale, BN) {
    const [ totalPurchased, setTotalPurchased ] = useState(0)
    const [ totalCap, setTotalCap ] = useState(0)

    useEffect(() => {
        updateData()
        const interval = setInterval(updateData, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    async function updateData() {
        await Promise.all([
            Sale.methods.totalPurchased().call()
                .then(purchased => setTotalPurchased(BN(purchased))),
            Sale.methods.totalCap().call()
                .then(cap => setTotalCap(BN(cap)))
        ])
    }

    return {
        totalPurchased,
        totalCap
    }
}

export default useProgress