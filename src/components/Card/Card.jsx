import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './Card.scss'
import { addToCart } from '../../store/cartSlice/cartSlice'
import { useIsItemInCart } from '../../hooks/useIsItemInCart'

export const Card = ({ data, category }) => {
    const dispatch = useDispatch()
    const [item, setItem] = useState({
        id: data?._id,
        name: data?.name,
        color: data?.colors[0].color_name,
        type: [data?.filtering[0].value, data?.filtering[0].shortcut],
        price: {
            new: data?.filtering[0].price[0].new,
            old: data?.filtering[0].price[0].old
        },
        filter_index: 0,
        img: data?.colors[0].color_img[0].image.asset.url,
        quantity: 1,
    })
    const [image, setImage] = useState({ src: data?.image[0]?.image?.asset?.url, alt: data?.image[0]?.alt })
    const addToCartHandler = () => {
        dispatch(addToCart(item))
    }

    const isInCart = useIsItemInCart(data._id)
    return (
        <div className='card'>
            <div className='card-img'>
                <NavLink to={`/${category}/${data?.name}`}>
                    <img src={image?.src} alt={image?.alt} />
                </NavLink>
            </div>
            <div className='card-content'>
                <a>
                    <div className='card-link'>
                        <span className='card-title'>
                            {data?.name} <br /> {data?.filtering && data?.filtering[0]?.value}{data?.filtering && data?.filtering[0]?.shortcut}
                        </span>
                    </div>
                </a>

                <div className='expandable'>
                    <div className='price'>
                        <div className='price__discount'>{data?.filtering[0]?.price[0]?.old} USD</div>
                        <div className='price__current'> {data?.filtering[0]?.price[0]?.new} USD</div>
                    </div>

                    <div className='slide-out-block'>
                        <div className="color-palette">
                            {
                                data?.colors?.map(el =>
                                    <div onMouseOver={() => setImage({ src: el.color_img[0].image.asset.url, alt: el.color_img[0].alt })} key={el._key} className="color" style={{ backgroundColor: `${el.color_hash}` }}></div>)
                            }
                        </div>
                        <div className="buttons">
                            <button className="fast">Fast Buy</button>
                            {
                                isInCart
                                    ? <NavLink to={'/cart'}>
                                        <button className="cart">Go to Cart</button>
                                    </NavLink>
                                    : <button
                                        onClick={addToCartHandler}
                                        className="cart">Add to Cart</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
