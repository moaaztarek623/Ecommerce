import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartItems, updateCartItemQuantity } from '../../Redux/actions/cartAction';

const UpdateCartItemQuantityHook = (id, itemCount) => {

    const dispatch = useDispatch();

    const [count, setCount] = useState(1);

    const handleAddCount = () => {
        setCount(count + 1);
    };

    const handleMinCount = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        setCount(itemCount);
    }, []);


    const [loading, setLoading] = useState(true);

    const get = async () => {
        await dispatch(getAllCartItems());
    };

    const onSubmit = async () => {
        setLoading(true);
        await dispatch(updateCartItemQuantity(id, {
            count
        }))
        setLoading(false);
    };

    const res =  useSelector(state => state.cartReducer.updateCartItemQuantity);

    useEffect(() => {
    if (loading === false) {
        if (res.status === 200) {
            get();
        }
    }
    }, [loading])

    return [onSubmit, handleAddCount, handleMinCount, count]
}

export default UpdateCartItemQuantityHook
