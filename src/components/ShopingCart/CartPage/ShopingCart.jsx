import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BreadCrumps } from '../../BreadCrumps/BreadCrumps'
import s from './ShopingCart.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CiSquareMinus, CiSquarePlus, CiSquareRemove } from 'react-icons/ci'
import { deleteFromCart, minusOneFromCart, plusOneToCart } from '../../../store/cartSlice/cartSlice'
import { Loader } from '../../Loader/Loader'

export const ShopingCart = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart.items)
    const sum = cart.reduce((acc, val) => acc += (val.quantity * val.price.new), 0)

    const increaseProductToOne = (e) => {
        dispatch(plusOneToCart(e))
    }
    const decreaseProductToOne = (e) => {
        dispatch(minusOneFromCart(e))
    }
    const removeFromCart = (e) => {
        dispatch(deleteFromCart(e))
    }

    useEffect(() => {
        if (cart.length > 0) return
        navigate('/')
    }, [cart])

    const cartHandler = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${import.meta.env.VITE_FETCH_URL}`, cart, { headers: { 'Access-Control-Allow-Origin': '*' } })
            const url = res.data.url
            window.location.assign(url)
            const timer = setTimeout(() => {
                setLoading(false)
            }, 1000);
            return clearTimeout(timer)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    if (loading) return <div className='loader'><Loader /></div>

    return (
        <div className={s.container}>
            <BreadCrumps data={["Cart"]} />
            <div className={s.cart_content}>
                <div className={s.order}>
                    <h1>
                        Order
                    </h1>
                    {
                        cart.map(el =>
                            <div key={el.name} className={s.item}>
                                <div className={s.item_img}>
                                    <img src={el.img} alt={el.name} />
                                </div>
                                <div className={s.item_info}>
                                    <div className={s.item_top}>
                                        <div className={s.item_name}>
                                            {el.name} {`${el.type[0]}${el.type[1]}`} ({el.color})
                                        </div>
                                        <div className={s.item_price}>
                                            {el.price.new * el.quantity} $
                                        </div>
                                    </div>
                                    <div className={s.quantity_block}>
                                        <div onClick={() => decreaseProductToOne(el.id)} className={s.icon}>
                                            <CiSquareMinus size={24} />
                                        </div>
                                        <div className={s.quantity}>
                                            {el.quantity}
                                        </div>
                                        <div onClick={() => increaseProductToOne(el.id)} className={s.icon}>
                                            <CiSquarePlus size={24} />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(el.id)} type='button'>
                                    <CiSquareRemove size={24} />
                                </button>
                            </div>
                        )
                    }
                </div>
                <div className={s.checkout}>
                    <div className={s.sum}>
                        Total :
                        <span>
                            {sum} $
                        </span>
                    </div>
                    <div className={s.buttons}>
                        <button onClick={cartHandler} className={s.fast}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
