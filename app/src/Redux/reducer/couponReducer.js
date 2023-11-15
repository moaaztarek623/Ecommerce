import { CREATE_COUPON, DELETE_COUPON, EDIT_COUPON, GET_ALL_COUPONS, GET_ONE_COUPON } from '../types/type';

const initial = {
    createCoupon: [],
    allCoupon: [],
    deleteCoupon: [],
    oneCoupon: [],
    editCoupon: [],
    load: true
};

const couponReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_COUPON:
            return {
                ...state,
                createCoupon: action.payload,
                load: false
            }           
        case GET_ALL_COUPONS:
            return {
                ...state,
                allCoupon: action.payload,
                load: false
            }           
        case DELETE_COUPON:
            return {
                ...state,
                deleteCoupon: action.payload,
                load: false
            }           
        case GET_ONE_COUPON:
            return {
                ...state,
                oneCoupon: action.payload,
                load: false
            }           
        case EDIT_COUPON:
            return {
                ...state,
                editCoupon: action.payload,
                load: false
            }           
        default:
            return state;
    }
};

export default couponReducer;