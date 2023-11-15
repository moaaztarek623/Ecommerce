import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from '../types/type';

const initial = {
    subcategory: [],
    load: true,
};

const subcategoryReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_SUB_CATEGORY:
            return {
                subcategory: action.payload,
                load: false
            }    
        case GET_SUB_CATEGORY:
            return {
                subcategory: action.payload,
                load: false
            }    
        case GET_ERROR:
            return{
                subcategory: action.payload,
                load: true
            }    
        default:
            return state;
    }
};

export default subcategoryReducer;