import React from 'react'
import { Card } from '../../../../Card/Card';
import './TabCarousel.scss'

export const TabCarousel = ({ productsCards }) => {

    return (
        <div className='tab-carousel' >
            {
                productsCards && productsCards?.items?.map(el =>
                    <div key={el?._id} className='card-container'>
                        <Card data={el} category={el?.category} />
                    </div>
                )
            }
        </div>
    )
}
