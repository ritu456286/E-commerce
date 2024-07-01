import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    //stripe accepts prices in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51PXgPhEN88M8dMUV3TO6TqMoRvLdYSxxl3ihoakXUNlMrxoSaGdShyPqepBosiQCvTgrMX0ejNX3M4Bf1VWW0cBh003sc7OYEz';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='../../assets/crown.svg.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;