import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsSearch } from '../../Redux/actions/productsAction';

const ViewProductSearchHook = () => {

    const arrayOptions = [
        {title: 'بدون ترتيب'},
        {title: 'الاعلى سعر'},
        {title: 'الاقل سعر'},
        {title: 'الاكثر مبيعا'},
        {title: 'الاقل مبيعا'},
        {title: 'الاعلى تقييما'},
        {title: 'الاقل تقييما'},
      ]

    const limit = 4;
    
    let searchWord, sortType, sorT, queryCat, queryBrand, priceFrom, priceTo, priceFromStr, priceToStr = "";

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem("searchWord")
        localStorage.removeItem("sortType")
        localStorage.removeItem("priceFrom")
        localStorage.removeItem("priceTo")
        getProducts('');
    }, [])

    const getProducts = async (word) => {
        if(word === undefined)
            word = '';
        if(sorT === undefined)
            sorT = '';    

        if(localStorage.getItem("queryCat") !== null) 
            queryCat = localStorage.getItem("queryCat");
        if(localStorage.getItem("queryBrand") !== null) 
            queryBrand = localStorage.getItem("queryBrand");
        if(localStorage.getItem("priceFrom") !== null) 
            priceFrom = localStorage.getItem("priceFrom");
        if(localStorage.getItem("priceTo") !== null) 
            priceTo = localStorage.getItem("priceTo");

        if (priceFrom === "" || priceFrom < 0 || priceFrom === undefined) {
            priceFromStr = ""
        }else {
            priceFromStr = `price[gt]=${priceFrom}`
        }

        if (priceTo === "" || priceTo <= 0 || priceTo === undefined) {
            priceToStr = ""
        }else {
            priceToStr = `price[lte]=${priceTo}`
        }    
        
        sortData();

        await dispatch(getAllProductsSearch(`sort=${sorT}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}&${priceFromStr}&${priceToStr}`));
    }

    const loading = useSelector(state => state.allProducts.load)

    const products = useSelector(state => state.allProducts.allProducts);

    let items = [];
    let results = 0;
    
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

    try {
        if (products) {
            if(products.results){
                results = products ? products.results : null;
            }
        }else {
            results = 0
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

    if (localStorage.getItem("searchWord") !== null) {
        searchWord = localStorage.getItem("searchWord");
    }else {
        searchWord = ""
    }

    const onPress = async (page) => {
        if(sorT === undefined)
            sorT = '';    

        if(localStorage.getItem("queryCat") !== null) 
            queryCat = localStorage.getItem("queryCat");
        
        sortData();

        await dispatch(getAllProductsSearch(`sort=${sorT}&limit=${limit}&page=${page}&keyword=${searchWord}&${queryCat}&${queryBrand}${priceFromStr}${priceToStr}`));
    }

    const sortData = () => {
        if (localStorage.getItem("sortType") !== null) {
            sortType = localStorage.getItem('sortType')
        } else {
            sortType = "";
        }

        if (sortType === arrayOptions[1].title) {
            sorT = '-price'
        }
        else if (sortType === arrayOptions[2].title) {
            sorT = '+price'
        }
        else if (sortType === arrayOptions[3].title) {
            sorT = '-sold'
        }
        else if (sortType === arrayOptions[4].title) {
            sorT = '+sold'
        }
        else if (sortType === 'بدون ترتيب'){
            sorT = ''
        }

    }

    return [items, loading, pagination, getProducts, onPress, results]
}

export default ViewProductSearchHook
