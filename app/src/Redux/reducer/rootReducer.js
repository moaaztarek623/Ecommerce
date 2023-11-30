import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from './subcategoryReducer';
import productsReducer from './productsReducer'
import authReducer from './authReducer'
import reviewReducer from './reviewReducer';
import wishReducer from './wishReducer';
import couponReducer from './couponReducer';
import adressReducer from './adressReducer';
import profileReducer from './profileReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

export default combineReducers ({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    createSubcategory: subcategoryReducer,
    allProducts: productsReducer,
    auth: authReducer,
    createReview: reviewReducer,
    wishReducer: wishReducer,
    couponReducer: couponReducer,
    adressReducer: adressReducer,
    profileReducer: profileReducer,
    cartReducer: cartReducer,
    orderReducer: orderReducer,
})