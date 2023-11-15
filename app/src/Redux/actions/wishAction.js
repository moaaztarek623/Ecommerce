import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_PRODUCT_TO_WISHLIST, GIT_ALL_PRODUCTS_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from "../types/type";
import useDeleteData from '../../Hooks/useDeleteData'
import useGetData from '../../Hooks/useGetData'
import useGetDataToken from '../../Hooks/useGetDataToken'

export const addProductToWishList = (data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/wishlist`, data);

        dispatch({
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const removeProductFromWishList = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/wishlist/${id}`);

        dispatch({
            type: REMOVE_PRODUCT_FROM_WISHLIST,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: REMOVE_PRODUCT_FROM_WISHLIST,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const  gitAllProductWishList = () => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/wishlist`);

        dispatch({
            type: GIT_ALL_PRODUCTS_WISHLIST,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GIT_ALL_PRODUCTS_WISHLIST,
            payload: e.response
        });
        console.error(e.response);
    }
};

