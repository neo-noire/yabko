import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.items.push(payload)
        },
        plusOneToCart: (state, { payload }) => {
            const item = state.items.find(el => el.id === payload)
            item.quantity += 1;
        },
        minusOneFromCart: (state, { payload }) => {
            const item = state.items.find(el => el.id === payload)
            item.quantity -= 1;
            if (item.quantity === 0) {
                state.items = state.items.filter(el => el.id !== payload)
            }
        },
        deleteFromCart: (state, { payload }) => {
            state.items = state.items.filter(el => el.id !== payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, plusOneToCart, minusOneFromCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer