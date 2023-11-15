import React, { useEffect, useState } from 'react'
import ViewProductSearchHook from '../products/view-product-search-hook';
import { useNavigate } from 'react-router-dom';


const NavBarSearchHook = () => {
    
    const [items, loading, pagination, getProducts, onPress] = ViewProductSearchHook();

    const [searchWord, setsearchWord] = useState("");

    const navigate = useNavigate();
    
    const onChangeSearch = (e) => {
        if (window.location.pathname === '/products') {
            localStorage.setItem("searchWord", e.target.value)
            setsearchWord(e.target.value);
        }else {
            navigate('/products')
        }
    }
    
    useEffect(() => {
        setTimeout(() => {
            getProducts(searchWord);
        }, 1000);
    }, [searchWord])

    
    return [searchWord, onChangeSearch]
}

export default NavBarSearchHook
