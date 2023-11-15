import { useInsertImage } from "../../Hooks/useInsertData";
import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE } from "../types/type";
import useGetData from '../../Hooks/useGetData'
import useDeleteData from "../../Hooks/useDeleteData";
import { useEditDataWithImage } from "../../Hooks/useEditData";

export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertImage('/api/v1/products', formData);

        dispatch({
            type: CREATE_PRODUCT,
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

export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}`);

        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res,
            load: true
        });

    } catch (e) {
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const getAllProductsPage = (limit, page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);

        dispatch({
            type: GET_ALL_PRODUCTS,
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

export const getAllProductsSearch = (query) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?${query}`);

        dispatch({
            type: GET_ALL_PRODUCTS,
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

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products/${id}`);

        dispatch({
            type: GET_PRODUCT_DETAILS,
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

export const getProductLike = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?category=${id}`);

        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: res,
            load: true
        });

        console.log(res);

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/products/${id}`);

        dispatch({
            type: DELETE_PRODUCT,
            payload: res,
            load: true
        });

        console.log(res);

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};

export const editProduct = (id, formData) => async (dispatch) => {
    try {
        const res = await useEditDataWithImage(`/api/v1/products/${id}`, formData);

        dispatch({
            type: EDIT_PRODUCT,
            payload: res,
            load: true
        });

        console.log(res);

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        });
        console.error("Error" + e);
    }
};

