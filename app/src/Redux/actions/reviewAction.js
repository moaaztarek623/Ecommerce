import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW, GIT_ALL_REVIEW_PRODUCT } from "../types/type";
import useDeleteData from '../../Hooks/useDeleteData'
import {useEditData} from '../../Hooks/useEditData'

export const createReview = (id, data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/products/${id}/reviews`, data);

        dispatch({
            type: CREATE_REVIEW,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: CREATE_REVIEW,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const viewAllReviewProduct = (id, limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products/${id}/reviews?limit=${limit}&page=${page}`);

        dispatch({
            type: GIT_ALL_REVIEW_PRODUCT,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GIT_ALL_REVIEW_PRODUCT,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const deleteReview = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/reviews/${id}`);

        dispatch({
            type: DELETE_REVIEW,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: DELETE_REVIEW,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const editReview = (id, data) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/reviews/${id}`, data);

        dispatch({
            type: EDIT_REVIEW,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: EDIT_REVIEW,
            payload: e.response
        });
        console.error(e.response);
    }
};