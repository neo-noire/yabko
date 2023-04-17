import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useIsItemInCart = (itemId) => {
    const cart = useSelector(state => state.cart.items)
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        const item = cart.find(el => el.id === itemId)
        if (item) {
            setIsInCart(true)
        }
    }, [cart, itemId])

    return isInCart
}
