import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = (props) => {
  const priceForStripe = props.price * 100;
  const publishableKey =
    'pk_test_51HjztKFg20adUlILW8KQsqLoZ6OtGPk65FrZ0EAyjvDnVqV6dejbe7Pm3rztfeV0ujMPjGucuuuar49j7quU0KXT00cX0rkLAT';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ₹${props.price}`}
      currency="INR"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
