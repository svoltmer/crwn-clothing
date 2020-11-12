import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { toggleCartHidden } from './../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HbneJFXMwWDST8j2MzELaRYRjj08mTHwRv13IkaMQLv5vk5WWPbARDg5YoXargXX66LptPkzNAyx5VsI8P97I2100jExSN4IA";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesfull");
  }
 
  return (
      <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
      )
};

export default StripeCheckoutButton;
