import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE } from '../types/type';

const initial = {
    product: [],
    allProducts: [],
    oneProduct: [],
    productLike: [],
    deleteProduct: [],
    editProduct: [],
    load: true,
};

const productsReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                load: false
            }    
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                load: false
            }    
        case GET_PRODUCT_DETAILS:
            return {
                oneProduct: action.payload,
                load: false
            }    
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                load: false
            }    
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload,
                load: false
            }    
        case EDIT_PRODUCT:
            return {
                ...state,
                editProduct: action.payload,
                load: false
            }    
        case GET_ERROR:
            return{
                product: action.payload,
                load: true
            }    
        default:
            return state;
    }
};

export default productsReducer;