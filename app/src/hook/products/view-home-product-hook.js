import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getArap } from '../../Redux/actions/productsAction'

const ViewHomeProductHook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(""))
    }, [])
    
    const loading = useSelector(state => state.allProducts.load)

    const products = useSelector(state => state.allProducts.allProducts);

    let items = [];

    if (products) {
        if(products.data){
            items = products ? products.data : null;
        }
    }else {
       items = [];
    }

    return [items, loading]
}

export default ViewHomeProductHook
