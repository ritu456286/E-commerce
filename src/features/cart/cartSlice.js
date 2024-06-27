import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hidden: true,
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartHidden(state, action){
            state.hidden = !state.hidden; 
        },

        addItem(state, action) {
            const existingCartItem = state.cartItems.find(
                cartItem => cartItem.id === action.payload.id
            );

            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        clearItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
        },

        removeItemFromCart(state, action) {
            const existingCartItem = state.cartItems.find(
                cartItem => cartItem.id === action.payload.id
            );

            if (existingCartItem) {
                if (existingCartItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(
                        cartItem => cartItem.id !== action.payload.id
                    );
                } else {
                    existingCartItem.quantity -= 1;
                }
            }
        }


    },
});


export const { toggleCartHidden, addItem, clearItemFromCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;