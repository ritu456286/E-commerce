import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const hidden = useSelector((state) => state.cart.hidden);
    const cartItems = useSelector((state) => state.cart.cartItems);
    
    if(hidden) return null;

    return(
        <div className="cart-dropdown">
            <div className="cart-items" >
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )    
}

export default CartDropdown;