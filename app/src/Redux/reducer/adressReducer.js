import { ADD_ADRESS, EDIT_ADRESS, GET_ALL_ADRESSES, GET_ONE_ADRESS, REMOVE_ADRESS } from '../types/type';

const initial = {
    createAdress: [],
    allAdresses: [],
    removeAdress: [],
    oneAdress: [],
    editAdress: [],
    load: true
};

const adressReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_ADRESS:
            return {
                ...state,
                createAdress: action.payload,
                load: false
            };         
        case GET_ALL_ADRESSES:
            return {
                ...state,
                allAdresses: action.payload,
                load: false
            };         
        case REMOVE_ADRESS:
            return {
                ...state,
                removeAdress: action.payload,
                load: false
            };         
        case GET_ONE_ADRESS:
            return {
                ...state,
                oneAdress: action.payload,
                load: false
            };         
        case EDIT_ADRESS:
            return {
                ...state,
                editAdress: action.payload,
                load: false
            };         
        default:
            return state;
    }
};

export default adressReducer;