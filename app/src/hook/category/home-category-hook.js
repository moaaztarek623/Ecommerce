import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHomeCategory } from '../../Redux/actions/categoryAction';

const HomeCategoryHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getHomeCategory());
    }, []);
  
    const category = useSelector(state => state.allCategory.category);
    const loading = useSelector(state => state.allCategory.load);

    let itemCat = [];

    if (category) {
      if (category.data) {
        itemCat = category ? category.data : null
      }
    }

    return [itemCat, loading]
}

export default HomeCategoryHook
