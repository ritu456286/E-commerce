import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { useSelector } from "react-redux";
const CartDropdown = () => {
    const hidden = useSelector((state) => state.cart.hidden);
    if(hidden) return null;

    return(
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )    
}

export default CartDropdown;