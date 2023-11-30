import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getAllProductsByBrand, getAllProductsByCategory} from '../../Redux/actions/productsAction'
import { getOneBrand } from '../../Redux/actions/brandAction';

const ViewAllProductsByCategoryHook = (id) => {
    const brand = useSelector(state => state.allBrand.oneBrand);

    const products = useSelector(state => state.allProducts.allProductsByBrand);

    const [loading, setLoading] = useState(true);

    const limit = 4;

    const dispatch = useDispatch();

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getOneBrand(id));
            await dispatch(getAllProductsByBrand(limit, 1, id));
            setLoading(false);
        }
        get();
    }, [])


    const onPress = async (page) => {
        await dispatch(getAllProductsByBrand(limit, page, id));
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

    return [items, loading, pagination, onPress, brand];
}

export default ViewAllProductsByCategoryHook
