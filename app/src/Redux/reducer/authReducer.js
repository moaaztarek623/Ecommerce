import { CREATE_NEW_USER, FORGET_PASSWORD, LOGGED_USER, LOGIN, RESETE_CODE, RESETE_PASSWORD } from '../types/type';

const initial = {
    newUser: [],
    login: [],
    loggedUser: [],
    forgetPassword: [],
    reseteCode: [],
    resetePassword: [],
    load: true,
};

const authReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                newUser: action.payload,
                load: false
            }   
        case LOGIN:
            return {
                ...state,
                login: action.payload,
            }   
        case LOGGED_USER:
            return {
                ...state,
                loggedUser: action.payload,
            }   
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }   
        case RESETE_CODE:
            return {
                ...state,
                reseteCode: action.payload,
            }   
        case RESETE_PASSWORD:
            return {
                ...state,
                resetePassword: action.payload,
            }   
        default:
            return state;
    }
};

export default authReducer;