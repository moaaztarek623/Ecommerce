import { CREATE_CASH_ORDER, GET_ALL_ORDER } from "../types/type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/useGetDataToken";


export const createCashOrder = (id, data) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/orders/${id}`, data);

        dispatch({
            type: CREATE_CASH_ORDER,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: CREATE_CASH_ORDER,
            payload: e.response
        });
        console.error(e.response);
    }
};

export const getAllOrder = (page, limit) => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`);

        dispatch({
            type: GET_ALL_ORDER,
            payload: res,
            load: true
        });
        
    } catch (e) {
        dispatch({
            type: GET_ALL_ORDER,
            payload: e.response
        });
        console.error(e.response);
    }
};
