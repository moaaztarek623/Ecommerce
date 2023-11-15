import useGetData from "../../Hooks/useGetData";
import { useInsertData, useInsertImage } from "../../Hooks/useInsertData";
import { CREATE_CATEGORY, GET_ALL_CTEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../types/type";

export const getAllCategory = (limit) => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/categories?limit=${limit}`)

        dispatch({
            type: GET_ALL_CTEGORY,
            payload: res
        });

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};

export const getHomeCategory = () => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/categories`)

        dispatch({
            type: GET_ALL_CTEGORY,
            payload: res
        });

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};

export const getAllCategoryPage = (limit, page) => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)

        dispatch({
            type: GET_ALL_CTEGORY,
            payload: res
        });

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};

export const createCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertImage('/api/v1/categories', formData);

        dispatch({
            type: CREATE_CATEGORY,
            payload: res,
            load: true
        });

        
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};

export const getOneCategory = (id) => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/categories/${id}`)

        dispatch({
            type: GET_ONE_CATEGORY,
            payload: res,
            load: true,
        });

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};