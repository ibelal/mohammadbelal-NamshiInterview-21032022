import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";


const rootReducer = {
    reducer: {
        products: [],
        cart: cartSlice
    }
}

const store = configureStore(rootReducer)

export default store