import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from '../types/type';

const initial = {
    brand: [],
    oneBrand: [],
    load: true,
};

const brandReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brand: action.payload,
                load: false
            }
        case CREATE_BRAND:
            return {
                brand: action.payload,
                load: false
            }    
        case GET_ONE_BRAND:
            return {
                oneBrand: action.payload,
                load: false
            }    
        case GET_ERROR:
            return{
                brand: action.payload,
                load: true
            }    
        default:
            return state;
    }
};

export default brandReducer;