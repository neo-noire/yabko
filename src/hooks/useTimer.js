import React, { useEffect, useState } from 'react'

export const useTimer = (data, stopTimer) => {
    const [timer, setTimer] = useState(0)
    const [tabs, setTabs] = useState([])
    const [selectedTab, setSelectedTab] = useState('')


    useEffect(() => {
        data && setTabs(data)
    }, [data])

    useEffect(() => {
        if (stopTimer) return
        const timerId = setTimeout(() => {
            setTimer(timer === tabs.length - 1 ? 0 : timer + 1)
            setSelectedTab(tabs[timer]?.tabs)
        }, 1000)
        return () => {
            clearTimeout(timerId)
        }
    }, [timer, tabs])

    useEffect(() => {

    }, [timer])

    return selectedTab
}
