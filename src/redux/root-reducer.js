import { combineReducers } from 'redux';
import { userActionTypes } from './user/user.types';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});