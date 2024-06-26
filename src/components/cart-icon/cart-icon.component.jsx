import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../features/cart/cartSlice";
import { selectCartItemsCount } from "../../features/cart/cartSelectors";

const CartIcon = () => {
    const dispatch = useDispatch();
    const itemCount = useSelector(selectCartItemsCount); //no need to pass the state, useSelector automatically handles passing the state from this page to the cartSelectors.js
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
    );
};

export default CartIcon;
