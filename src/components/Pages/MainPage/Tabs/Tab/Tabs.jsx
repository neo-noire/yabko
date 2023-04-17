import React, { useEffect, useState } from 'react'
import { TabCarousel } from '../TabCarousel/TabCarousel'
import './Tabs.scss'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSanityFetch } from '../../../../../hooks/useSanityFetch';

export const Tabs = () => {
    const mobile = useMediaQuery('(min-width:600px)');
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [productsCards, setProductsCards] = useState([])
    const { data, loading, error } = useSanityFetch(`*[_type == "tabs"]
      {tabs, _id, items[]->{name,_id,"category":category[0]->.category,filtering,colors, image[]{...,image{asset->}},colors[]{color_hash,color_name,color_img[]{alt,image{asset->}}}}}`)


    useEffect(() => {
        data && setCategories(data)
        data && setSelectedCategory(data[0]?.tabs)
    }, [data])

    useEffect(() => {
        if (selectedCategory) {
            setProductsCards(...categories?.filter(el => el?.tabs === selectedCategory))
        }
    }, [selectedCategory])

    if (loading) return <div>Loading...</div>

    return (
        <>
            <div className='tabs'>
                <ul>
                    {
                        categories && categories.map((el) =>
                            <li key={el._id}>
                                <input id={el.tabs} type='radio' name='tabs'
                                    defaultChecked={selectedCategory === el.tabs ? true : false}
                                    onChange={() => setSelectedCategory(el.tabs)} />
                                <label htmlFor={el.tabs}>
                                    {el.tabs}
                                </label>
                            </li>
                        )
                    }
                </ul>
            </div>

            <TabCarousel productsCards={productsCards} />
        </>
    )
}
