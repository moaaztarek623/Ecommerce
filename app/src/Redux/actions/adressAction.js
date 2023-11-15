import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_ADRESS, EDIT_ADRESS, GET_ALL_ADRESSES, GET_ONE_ADRESS, REMOVE_ADRESS } from "../types/type";
import useDeleteData from '../../Hooks/useDeleteData'
import {useEditData} from '../../Hooks/useEditData'
import useGetDataToken from '../../Hooks/useGetDataToken'

export const createAdress = (data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/addresses`, data);

        dispatch({
            type: ADD_ADRESS,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: ADD_ADRESS,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const getAllAdresses = () => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/addresses`);

        dispatch({
            type: GET_ALL_ADRESSES,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GET_ALL_ADRESSES,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const removeAdress = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/addresses/${id}`);

        dispatch({
            type: REMOVE_ADRESS,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: REMOVE_ADRESS,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const getOneAdress = (id) => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/addresses/${id}`);

        dispatch({
            type: GET_ONE_ADRESS,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GET_ONE_ADRESS,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const editAdress = (id, data) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/addresses/${id}`, data);

        dispatch({
            type: EDIT_ADRESS,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: EDIT_ADRESS,
            payload: e.response
        });
        console.error(e.response);
    }
};

