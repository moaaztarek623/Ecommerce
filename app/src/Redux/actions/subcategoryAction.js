import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../types/type";

export const createSubcategory = (data) => async (dispatch) => {
    try {
       const res = await useInsertData('/api/v1/subcategories', data);

        dispatch({
            type: CREATE_SUB_CATEGORY,
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

export const getSubcategory = (id) => async (dispatch) => {
    try {
       const res = await useGetData(`/api/v1/categories/${id}/subcategories`);

        dispatch({
            type: GET_SUB_CATEGORY,
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
