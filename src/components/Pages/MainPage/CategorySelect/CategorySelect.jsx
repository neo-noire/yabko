import React from 'react'
import { CategoryCard } from './CategoryCard/CategoryCard'


export const CategorySelect = ({ data, loading }) => {

    return (
        <>
            {
                data && data?.map((el, idx) => <CategoryCard data={el} key={idx} />)
            }
        </>
    )
}
