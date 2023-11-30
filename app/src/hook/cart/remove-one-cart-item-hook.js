import React, { useEffect, useState } from 'react'
import { getAllCartItems, removeOneCartItems } from '../../Redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import {notify} from '../../Components/Util/notify'
const RemoveOneCartItemHook = (id) => {
    const dispatch = useDispatch();

    const [loadingRemoveTwo, setLoadingRemoveTwo] = React.useState(false);

    const get = async () => {
        await dispatch(getAllCartItems());
    };

    const [openTwo, setOpenTwo] = React.useState(false);

    const handleOpenTwo = () =>{
        setOpenTwo(!openTwo);
    };

    const handleRemoveOneCartItem = async () => {
        setLoadingRemoveTwo(true);
        await dispatch(removeOneCartItems(id));
        setLoadingRemoveTwo(false);
    };

    const res =  useSelector(state => state.cartReducer.removeOneCartItem);

    useEffect(() => {
        if (loadingRemoveTwo === false) {
            if (res && res.status === "success") {
                notify("تم حذف العنصر من العربة", "success");
                get();
                handleOpenTwo();
            }
        }
    }, [loadingRemoveTwo])

    return [openTwo, handleOpenTwo, loadingRemoveTwo, handleRemoveOneCartItem];
}

export default RemoveOneCartItemHook
