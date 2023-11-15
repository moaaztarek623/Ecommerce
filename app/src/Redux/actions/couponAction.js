import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_COUPON, DELETE_COUPON, EDIT_COUPON, GET_ALL_COUPONS, GET_ONE_COUPON } from "../types/type";
import useDeleteData from '../../Hooks/useDeleteData'
import {useEditData} from '../../Hooks/useEditData'
import useGetDataToken from '../../Hooks/useGetDataToken'

export const createCoupon = (data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/coupons`, data);

        dispatch({
            type: CREATE_COUPON,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: CREATE_COUPON,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const getAllCoupon = () => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/coupons`);

        dispatch({
            type: GET_ALL_COUPONS,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GET_ALL_COUPONS,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const removeCoupon = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/coupons/${id}`);

        dispatch({
            type: DELETE_COUPON,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: DELETE_COUPON,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const getOneCoupon = (id) => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/coupons/${id}`);

        dispatch({
            type: GET_ONE_COUPON,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GET_ONE_COUPON,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const editCoupon = (id, data) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/coupons/${id}`, data);

        dispatch({
            type: EDIT_COUPON,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: EDIT_COUPON,
            payload: e.response
        });
        console.error(e.response);
    }
};
