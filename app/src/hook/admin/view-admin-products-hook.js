import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions/productsAction'

const ViewAdminAllProductHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (products) {
            console.log(products);
        }
    }, [])
    
    const loading = useSelector(state => state.allProducts.load)

    const products = useSelector(state => state.allProducts.allProducts);

    let items = [];

    if (products) {
        if(products.data){
            items = products ? products.data : [];
        }
    }else {
        items = []
    }

    let pagination = [];

    if (products) {
        if (products.paginationResult) {
            pagination = products ? products.paginationResult : [];
        }
    } else {
        pagination = [];
    }

    return [items, loading, pagination]

}

export default ViewAdminAllProductHook