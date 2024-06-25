import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../features/cartSlice";

const CartIcon = () => {
    const dispatch = useDispatch();

    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
    );
};

export default CartIcon;
