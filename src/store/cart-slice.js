import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            let item = state.items.find(x => x.id === newItem.id)
            state.totalQuantity++
            if (!item) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    description: newItem.description,
                    image: newItem.image,
                    quantity: 1,
                    category: newItem.category,
                    totalPrice: newItem.price,
                })
            } else {
                item.quantity++
                item.totalPrice = item.totalPrice + newItem.price
            }

        },
        removeItem: (state, action) => {
            const id = action.payload
            const existingItem = state.items.find(x => x.id === id)
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice.reducer