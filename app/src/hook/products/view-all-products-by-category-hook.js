import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getAllProductsByCategory} from '../../Redux/actions/productsAction'
import { getOneCategory } from '../../Redux/actions/categoryAction';

const ViewAllProductsByCategoryHook = (id) => {

    const cat = useSelector(state => state.allCategory.oneCategory);

    const products = useSelector(state => state.allProducts.allProductsByCategory);

    const [loading, setLoading] = useState(true)
    const limit = 2;

    const dispatch = useDispatch();

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getOneCategory(id));
            await dispatch(getAllProductsByCategory(limit, 1, id));
            setLoading(false);
        }
        get();
    }, [])


    const onPress = async (page) => {
        await dispatch(getAllProductsByCategory(limit, page, id));
    };

    let items = [];
    
    try {
        if (products) {
            if(products.data){
                items = products ? products.data : null;
            }
        }else {
            items = []
        }
    } catch (e) {
        console.error('Error', e)
    }

    let pagination = [];

    try{
        if (products) {
            if (products.paginationResult) {
                pagination = products ? products.paginationResult : [];
            }
        } else {
            pagination = [];
        }
    } catch (e) {
        console.error('Error', e);
    }

    return [items, loading, pagination, onPress, cat];
}

export default ViewAllProductsByCategoryHook
