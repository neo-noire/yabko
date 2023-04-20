import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './Card.scss'
import { addToCart } from '../../store/cartSlice/cartSlice'
import { useIsItemInCart } from '../../hooks/useIsItemInCart'

export const Card = ({ data, category }) => {
    const [children, setChildren] = useState([])
    const dispatch = useDispatch()
    const [item, setItem] = useState({
        id: data?._id,
        name: data?.name,
        color: data?.colors[0]?.color_name,
        type: [data?.filtering[0]?.value, data?.filtering[0]?.shortcut],
        price: {
            new: data?.filtering[0]?.price[0]?.new,
            old: data?.filtering[0]?.price[0]?.old
        },
        filter_index: 0,
        img: data?.colors[0]?.color_img[0]?.image?.asset?.url,
        quantity: 1,
    })
    const [image, setImage] = useState({ src: data?.image[0]?.image?.asset?.url, alt: data?.image[0]?.alt })
    const addToCartHandler = () => {
        dispatch(addToCart(item))
    }

    const isInCart = useIsItemInCart(data._id)
    // const handleEvent = (event) => {
    //     const bounds = event.currentTarget.getBoundingClientRect();
    //     const x = event.clientX - bounds.left;
    //     const y = event.clientY - bounds.top;
    //     // Now x and y are the relative coordinates.
    //     setChildren([{ x, y }])
    // }
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
                            {data?.name}  {data?.filtering && data?.filtering[0]?.value}{data?.filtering && data?.filtering[0]?.shortcut}
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
                                    <div
                                        onMouseOver={() => setImage({ src: el.color_img[0].image.asset.url, alt: el.color_img[0].alt })}
                                        key={el.color_hash}
                                        className="color" style={{ backgroundColor: `${el.color_hash}` }}></div>)
                            }
                        </div>
                        <div className="buttons">
                            {/* <button className="fast">Fast Buy</button> */}
                            {
                                isInCart
                                    ? <NavLink to={'/cart'}>
                                        <button className="cart">Go to Cart</button>
                                    </NavLink>
                                    : <button
                                        onMouseMove={(e) => handleEvent(e)}

                                        // onClick={addToCartHandler}
                                        className="cart">
                                        {/* {
                                            children && children?.map(el =>
                                                <div key={el.x + el.y} className='circle' style={{ position: "absolute", left: `${el.x - 20}px`, top: `${el.y - 20}px` }}>
                                                </div>)
                                        } */}
                                        Add to Cart</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
