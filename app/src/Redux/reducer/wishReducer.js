import { ADD_PRODUCT_TO_WISHLIST, GIT_ALL_PRODUCTS_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from '../types/type';

const initial = {
    addToWishList: [],
    removeFromWishList: [],
    allWishList: [],
    load: true
};

const wishReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_WISHLIST:
            return {
                ...state,
                addToWishList: action.payload,
                load: false
            }         
        case REMOVE_PRODUCT_FROM_WISHLIST:
            return {
                ...state,
                removeFromWishList: action.payload,
                load: false
            }         
        case GIT_ALL_PRODUCTS_WISHLIST:
            return {
                ...state,
                allWishList: action.payload,
                load: false
            }         
        default:
            return state;
    }
};

export default wishReducer;