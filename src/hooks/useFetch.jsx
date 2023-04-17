import axios from 'axios';
import { useEffect, useState } from 'react';
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const DATASET = import.meta.env.VITE_DATASET
export const useFetch = ({ fetch }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            // let QUERY = encodeURIComponent(`*[_type == ${fetch}]${filtering}`);
            let QUERY = encodeURIComponent(`${fetch}`);
            let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

            try {
                const { data } = await axios.get(URL);
                setData(data.result)
                setLoading(false)
            } catch (error) {
                console.log('This is Error', error);
                setLoading(false)
            }
        }

        fetchData()
    }, [fetch])

    return { data, loading }

}
