import React from 'react'
import { NavLink } from 'react-router-dom'
import './CategoryCard.scss'

export const CategoryCard = ({ data }) => {
    return (
        <div className='banner'>
            <NavLink to={`/${data.title}`}>
                <img src={data.img} alt={data.title} />
            </NavLink>
        </div>
    )
}
