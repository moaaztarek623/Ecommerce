import { CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW, GIT_ALL_REVIEW_PRODUCT } from '../types/type';

const initial = {
    createReview: [],
    allReview: [],
    deleteReview: [],
    editReview: [],
    load: true
};

const reviewReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                createReview: action.payload,
                load: false
            }      
        case GIT_ALL_REVIEW_PRODUCT:
            return {
                ...state,
                allReview: action.payload,
                load: false
            }      
        case DELETE_REVIEW:
            return {
                ...state,
                deleteReview: action.payload,
                load: false
            }      
        case EDIT_REVIEW:
            return {
                ...state,
                editReview: action.payload,
                load: false
            }      
        default:
            return state;
    }
};

export default reviewReducer;