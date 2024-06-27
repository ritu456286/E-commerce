import React from 'react';
import { selectCartItems, selectTotalCartPrice } from '../../features/cart/cartSelectors'
import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectTotalCartPrice);

    return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        

        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }

        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        
    </div>
    )
}

export default CheckoutPage;