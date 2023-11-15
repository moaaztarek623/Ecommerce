import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHomeBrand } from '../../Redux/actions/brandAction';

const HomeBrandHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getHomeBrand());
    }, []);
  
    const brandRedux = useSelector(state => state.allBrand.brand);
    const loading = useSelector(state => state.allBrand.load)

    let brand = [];

    if (brandRedux) {
      if (brandRedux.data) {
        brand = brandRedux ? brandRedux.data : null
      }
    }
    return [brand, loading]
}

export default HomeBrandHook
