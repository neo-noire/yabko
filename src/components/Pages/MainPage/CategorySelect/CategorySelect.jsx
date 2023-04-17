import React from 'react'
import { CategoryCard } from './CategoryCard/CategoryCard'
const categories = [
    {
        title: 'iPhone',
        img: 'https://jabko.ua/image/cache/cataloge-2/homepage-new/mobile/iphone-800x476.jpeg'
    },
    {
        title: 'Mac',
        img: 'https://jabko.ua/image/cache/cataloge-2/homepage-new/mobile/mac-800x476.jpeg'
    },
    {
        title: 'AppleWatch',
        img: 'https://jabko.ua/image/cache/cataloge-2/homepage-new/mobile/watch-800x476.jpeg'
    },
    {
        title: 'iPad',
        img: 'https://jabko.ua/image/cache/cataloge-2/homepage-new/mobile/ipad-800x476.jpeg'
    },
]
export const CategorySelect = () => {
    return (
        <>
            {
                categories.map((el, idx) => <CategoryCard data={el} key={idx} />)
            }
        </>
    )
}
