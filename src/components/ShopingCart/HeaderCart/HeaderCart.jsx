import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import s from './HeaderCart.module.scss'
import { FaShoppingCart } from 'react-icons/fa'


export const HeaderCart = () => {
    const cart = useSelector(state => state.cart.items)

    return (
        <div className={s.cart_container} >
            <NavLink className={s.cart} to={cart.length > 0 && '/cart'}>
                <FaShoppingCart size={20} />
                <span>
                    Cart
                </span>
                {
                    cart.length > 0 &&
                    <div className={s.counter}>{cart.length}</div>
                }
            </NavLink>
            {
                !cart.length > 0 &&
                <div className={s.busket_empty}>
                    <div className={s._message}>
                        Your buscket is empty
                    </div>
                </div>
            }
        </div>
    )
}
