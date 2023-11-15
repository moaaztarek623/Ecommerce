import { useEditData } from '../../Hooks/useEditData';
import useGetData from '../../Hooks/useGetData';
import useGetDataToken from '../../Hooks/useGetDataToken';
import { useInsertData } from '../../Hooks/useInsertData';
import { CREATE_NEW_USER, LOGIN, LOGGED_USER, FORGET_PASSWORD, RESETE_CODE, RESETE_PASSWORD } from '../types/type'

export const createNewUser = (data) => async (dispatch) => {
    try {
        const res = await useInsertData('/api/v1/auth/signup', data);

        dispatch({
            type: CREATE_NEW_USER,
            payload: res,
            load: true
        });
        console.log(res);
        
    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response
        });
        console.log(e.response);
    }
};

export const login = (data) => async (dispatch) => {
    try {
        const res = await useInsertData('/api/v1/auth/login', data);

        dispatch({
            type: LOGIN,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: LOGIN,
            payload: e.response
        });
        console.log(e.response);
    }
};

export const getLoggedUser = () => async (dispatch) => {
    try {
        const res = await useGetDataToken('/api/v1/users/getMe');

        dispatch({
            type: LOGGED_USER,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: LOGGED_USER,
            payload: e.response
        });
        console.log(e.response);
    }
};

export const forgetPassword = (email) => async (dispatch) => {
    try {
        const res = await useInsertData('/api/v1/auth/forgotPasswords', email);

        dispatch({
            type: FORGET_PASSWORD,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response
        });
        console.log(e.response);
    }
};

export const reseteCode = (code) => async (dispatch) => {
    try {
        const res = await useInsertData('/api/v1/auth/verifyResetCode', code);

        dispatch({
            type: RESETE_CODE,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: RESETE_CODE,
            payload: e.response
        });
        console.log(e.response);
    }
};

export const resetePassword = (data) => async (dispatch) => {
    try {
        const res = await useEditData('/api/v1/auth/resetPassword', data);

        dispatch({
            type: RESETE_PASSWORD,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: RESETE_PASSWORD,
            payload: e.response
        });
        console.log(e.response);
    }
};
