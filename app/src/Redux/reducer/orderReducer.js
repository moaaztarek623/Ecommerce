import { CREATE_CASH_ORDER, GET_ALL_ORDER } from '../types/type';

const initial = {
    createCashOrder: [],
    allOrder: [],
    load: true
};

const orderReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_CASH_ORDER:
            return {
                ...state,
                createCashOrder: action.payload,
                load: false
            };                                                                 
        case GET_ALL_ORDER:
            return {
                ...state,
                allOrder: action.payload,
                load: false
            };                                                                 
        default:
            return state;
    }
};

export default orderReducer;