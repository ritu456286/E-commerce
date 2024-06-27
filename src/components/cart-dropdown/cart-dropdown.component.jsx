import React from "react";
import './cart-dropdown.styles.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../features/cart/cartSlice";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const hidden = useSelector((state) => state.cart.hidden);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Hook to navigate programmatically
    
    if(hidden) return null;

    return(
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                    <span className="empty-message">Your Cart is Empty!</span>
                }
            </div>
            <CustomButton onClick ={() => {
                navigate('/checkout');
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )    
}

export default CartDropdown;