import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrandPage } from '../../Redux/actions/brandAction';

const AllBrandHook = () => {

    const limit = 4;

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getAllBrandPage(limit, 1));
    }, []);
  
    const brand = useSelector(state => state.allBrand.brand);
    const loading = useSelector(state => state.allBrand.load);

    let numberOfPages = 0
    if (brand.paginationResult) {
        numberOfPages = brand.paginationResult.numberOfPages;
    }

    const getPage = (page) => {
      dispatch(getAllBrandPage(limit, page));
    }

    return [brand, loading, numberOfPages, getPage, limit]
  
}

export default AllBrandHook
