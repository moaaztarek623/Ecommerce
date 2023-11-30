import React, { useEffect, useState } from 'react'
import { getAllCartItems, removeAllCartItems } from '../../Redux/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import {notify} from '../../Components/Util/notify'

const RemoveAllCartItemHook = () => {
    const dispatch = useDispatch();

    const [loadingRemove, setLoadingRemove] = React.useState(false);

    const get = async () => {
        await dispatch(getAllCartItems());
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () =>{
        setOpen(!open);
    };

    const handleRemoveAllCartItems = async () => {
        setLoadingRemove(true);
        await dispatch(removeAllCartItems());
        setLoadingRemove(false);
    };

    const res =  useSelector(state => state.cartReducer.removeAllCartItems);

    useEffect(() => {
        if (loadingRemove === false) {
            if (res === "") {
                console.log("removed");
                notify("تم حذف العربة", "success");
                get();
                handleOpen();
            }
        }
    }, [loadingRemove])

    return [open, handleOpen, loadingRemove, handleRemoveAllCartItems];
}

export default RemoveAllCartItemHook
