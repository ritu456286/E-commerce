import { createSelector } from "@reduxjs/toolkit";

//input selector which returns just a piece of state
const selectCart = state => state.cart;

//these are output selectors, which are memoized
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (totalQuantity, cartItem) =>
                totalQuantity + cartItem.quantity,
            0
        )
)