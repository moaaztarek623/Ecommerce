import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/actions/productsAction'

const ViewAllProductHook = () => {
   
    const loading = useSelector(state => state.allProducts.load)

    const products = useSelector(state => state.allProducts.allProducts);

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

    return [items, loading, pagination]

}

export default ViewAllProductHook
