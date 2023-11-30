import { ADD_TO_CART, APLLY_COUPPON_TO_CART, DELETE_ALL_CART_ITEMS, DELETE_ONE_CART_ITEM, GET_ALL_CART_ITEMS, UPDATE_CART_ITEM_QUANTITY } from '../types/type';

const initial = {
    addProductToCart: [],
    allCartItems: [],
    removeAllCartItems: [],
    removeOneCartItem: [],
    updateCartItemQuantity: [],
    applyCouponToCart: [],
    load: true
};

const cartReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addProductToCart: action.payload,
                load: false
            };                                 
        case GET_ALL_CART_ITEMS:
            return {
                ...state,
                allCartItems: action.payload,
                load: false
            };                                 
        case DELETE_ALL_CART_ITEMS:
            return {
                ...state,
                removeAllCartItems: action.payload,
                load: false
            };                                 
        case DELETE_ONE_CART_ITEM:
            return {
                ...state,
                removeOneCartItem: action.payload,
                load: false
            };                                 
        case UPDATE_CART_ITEM_QUANTITY:
            return {
                ...state,
                updateCartItemQuantity: action.payload,
                load: false
            };                                 
        case APLLY_COUPPON_TO_CART:
            return {
                ...state,
                applyCouponToCart: action.payload,
                load: false
            };                                 
        default:
            return state;
    }
};

export default cartReducer;