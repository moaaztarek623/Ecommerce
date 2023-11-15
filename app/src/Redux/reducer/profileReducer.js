import { EDIT_PASSWORD, EDIT_PROFILE } from '../types/type';

const initial = {
    editProfile: [],
    editPassword: [],
    load: true
};

const profileReducer = (state = initial, action) => {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                ...state,
                editProfile: action.payload,
                load: false
            };                 
        case EDIT_PASSWORD:
            return {
                ...state,
                editPassword: action.payload,
                load: false
            };                 
        default:
            return state;
    }
};

export default profileReducer;