import React from 'react';
import { connect } from 'react-redux';

import Button from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';


import './cart-dropdown.style.scss';


const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown"> 
    <div className="cart-items">
    {
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>Go To Checkotut</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);