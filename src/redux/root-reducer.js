import { combineReducers } from 'redux';
import { userActionTypes } from './user/user.types';

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});