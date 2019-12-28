import { combineReducers } from 'redux';
import currentUser from './currentUser';
import products from './products';
import errors from './errors';

const rootReducer = combineReducers({
    currentUser,
    products,
    errors
});

export default rootReducer;