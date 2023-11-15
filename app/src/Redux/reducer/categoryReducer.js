import { CREATE_CATEGORY, GET_ALL_CTEGORY, GET_ERROR, GET_ONE_CATEGORY } from '../types/type';

const initial = {
    category: [],
    oneCategory: [],
    load: true,
};

const categoryReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_CTEGORY:
            return {
                ...state,
                category: action.payload,
                load: false
            }
        case CREATE_CATEGORY:
            return {
                category: action.payload,
                load: false
            }    
        case GET_ONE_CATEGORY:
            return {
                ...state,
                oneCategory: action.payload,
                load: false
            }    
        case GET_ERROR:
            return{
                category: action.payload,
                load: true
            }    
        default:
            return state;
    }
};

export default categoryReducer;