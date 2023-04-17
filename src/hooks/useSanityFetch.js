import React, { useEffect, useState } from 'react'
import sanityClient from '../sanityClient/client'

export const useSanityFetch = (query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setData([])
        setLoading(true)
        sanityClient
            .fetch(query)
            .then((res) => setData(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [query])

    return { data, loading, error }
}
