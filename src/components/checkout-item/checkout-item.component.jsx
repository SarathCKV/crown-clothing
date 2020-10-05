import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = (props) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img
          src={props.cartItem.imageUrl}
          alt={props.cartItem.name}
          title={props.cartItem.name}
        />
      </div>
      <span className="name">{props.cartItem.name}</span>
      <span className="quantity">{props.cartItem.quantity}</span>
      <span className="price">{props.cartItem.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
