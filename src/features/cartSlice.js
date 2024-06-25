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
        }
    },
});


export const { toggleCartHidden, addItem } = cartSlice.actions;
export default cartSlice.reducer;