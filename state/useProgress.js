import { useState, useEffect } from "react"
import constants from "../data/constants.json"

function useProgress(Sale, BN) {
    const [ totalPurchased, setTotalPurchased ] = useState(0)
    const [ totalCap, setTotalCap ] = useState(0)
    const [ maxCap, setMaxCap ] = useState(0)

    useEffect(() => {
        updateData()
        const interval = setInterval(updateData, 5000)

        updateCap()
        const interval2 = setInterval(() => updateCap(), 1000)

        return () => {
            clearInterval(interval)
            clearInterval(interval2)
        }
    }, [])

    async function updateCap() {
        const raiseEndEpoch = new Date(constants.raiseEnd).getTime()
        const dripStartEpoch = new Date(constants.dripStart).getTime()
        const duration = raiseEndEpoch - dripStartEpoch;
        const elapsed = raiseEndEpoch - Date.now()
        const remaining = (Number(fromWei("9696969000000", "mwei")) - constants.raiseMin) * (elapsed/duration)
        const remainingCap = Number(toWei(constants.raiseMin.toString(), "mwei")) + Number(toWei(remaining.toFixed(0), "mwei"))
        setTotalCap(BN(remainingCap))
    }

    async function updateData() {
        await Promise.all([
            Sale.methods.totalPurchased().call()
                .then(purchased => setTotalPurchased(BN(purchased))),
            Sale.methods.totalCap().call()
                .then(cap => setMaxCap(BN(cap)))
        ])
    }

    return {
        totalPurchased,
        totalCap,
        maxCap
    }
}

export default useProgress