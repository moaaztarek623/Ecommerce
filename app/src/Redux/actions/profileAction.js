import { EDIT_PASSWORD, EDIT_PROFILE } from "../types/type";
import {useEditData} from '../../Hooks/useEditData'

export const editProfile = (data) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/users/updateMe`, data);

        dispatch({
            type: EDIT_PROFILE,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: EDIT_PROFILE,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const editPassword = (data) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/users/changeMyPassword`, data);

        dispatch({
            type: EDIT_PASSWORD,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: EDIT_PASSWORD,
            payload: e.response
        });
        console.error(e.response);
    }
};
