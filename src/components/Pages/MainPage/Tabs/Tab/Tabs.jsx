import React, { useEffect, useState } from 'react'
import { TabCarousel } from '../TabCarousel/TabCarousel'
import './Tabs.scss'


export const Tabs = ({ data, loading }) => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [productsCards, setProductsCards] = useState([])

    useEffect(() => {
        data?.tabs && setCategories(data?.tabs)
        data?.tabs && setSelectedCategory(data?.tabs[0]?.tabs)
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
                            <li
                                key={el._id}>
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
