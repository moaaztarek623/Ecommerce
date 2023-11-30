import { ADD_TO_CART, APLLY_COUPPON_TO_CART, DELETE_ALL_CART_ITEMS, DELETE_ONE_CART_ITEM, GET_ALL_CART_ITEMS, UPDATE_CART_ITEM_QUANTITY } from "../types/type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/useGetDataToken";
import useDeleteData from '../../Hooks/useDeleteData'
import { useEditData } from "../../Hooks/useEditData";

export const addProductToCart = (data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/cart`, data);

        dispatch({
            type: ADD_TO_CART,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: ADD_TO_CART,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const getAllCartItems = () => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/cart`);

        dispatch({
            type: GET_ALL_CART_ITEMS,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GET_ALL_CART_ITEMS,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const removeAllCartItems = () => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/cart`);

        dispatch({
            type: DELETE_ALL_CART_ITEMS,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: DELETE_ALL_CART_ITEMS,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const removeOneCartItems = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/cart/${id}`);

        dispatch({
            type: DELETE_ONE_CART_ITEM,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: DELETE_ONE_CART_ITEM,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const updateCartItemQuantity = (id, data) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/cart/${id}`, data);

        dispatch({
            type: UPDATE_CART_ITEM_QUANTITY,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: UPDATE_CART_ITEM_QUANTITY,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const applyCouponToCart = (coupon) => async (dispatch) => {
    try {
        const res = await useEditData(`/api/v1/cart/applyCoupon`, coupon);

        dispatch({
            type: APLLY_COUPPON_TO_CART,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: APLLY_COUPPON_TO_CART,
            payload: e.response
        });
        console.error(e.response);
    }
};