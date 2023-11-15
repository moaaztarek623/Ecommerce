import useGetData from "../../Hooks/useGetData";
import { useInsertData, useInsertImage } from "../../Hooks/useInsertData";
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../types/type";

export const getAllBrand = (limit) => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/brands?limit=${limit}`)

        dispatch({
            type: GET_ALL_BRAND,
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

export const getHomeBrand = () => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/brands`)

        dispatch({
            type: GET_ALL_BRAND,
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

export const getAllBrandPage = (limit, page) => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`)

        dispatch({
            type: GET_ALL_BRAND,
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

export const createBrand = (formData) => async (dispatch) => {
    try {
       const res = await useInsertImage('/api/v1/brands', formData);
       
        dispatch({
            type: CREATE_BRAND,
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

export const getOneBrand = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands/${id}`);

        dispatch({
            type: GET_ONE_BRAND,
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