import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryPage } from '../../Redux/actions/categoryAction';

const AllCategoryHook = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getAllCategoryPage(8, 1));
    }, []);
  
    const category = useSelector(state => state.allCategory.category);
    const loading = useSelector(state => state.allCategory.load);

    let numberOfPages = 0
    if (category.paginationResult) {
        numberOfPages = category.paginationResult.numberOfPages;
    }

    const getPage = (page) => {
      dispatch(getAllCategoryPage(8, page));
    }

    return [category, loading, numberOfPages, getPage]
  
}

export default AllCategoryHook
