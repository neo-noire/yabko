import React from 'react'
import { NavLink } from 'react-router-dom'
import './CategoryCard.scss'

export const CategoryCard = ({ data }) => {

    return (
        <div className='banner'>
            <NavLink to={`/${data.category}`}>
                <img src={data.category_image} alt={data.category} />
            </NavLink>
        </div>
    )
}
