import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
