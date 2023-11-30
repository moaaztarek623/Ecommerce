import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../Redux/actions/orderAction'

const GetAllOrderHook = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const [numOfOrders, setNumOfOrders] = useState(0);

    const [paginate, setPaginate] = useState("");

    const [orderData, setOrderData] = useState({});

    const get = async () => {
        setLoading(true);
        await dispatch(getAllOrder(1, 3));
        setLoading(false);
    };

    useEffect(() => {
        get();
    }, []);

    const onPress = async (page) => {
        setLoading(true)
        await dispatch(getAllOrder(page, 3))
        setLoading(false)
    };

    const allOrder = useSelector(state => state.orderReducer.allOrder);

    useEffect(() => {
        if (loading === false) {
            if (allOrder) {
                if (allOrder?.results)
                    setNumOfOrders(allOrder?.results);
                if (allOrder?.paginationResult)
                    setPaginate(allOrder?.paginationResult)
                if (allOrder?.data)
                    setOrderData(allOrder?.data)    
            }
            console.log(allOrder);
        }
    }, [loading]);

    return [loading, allOrder, numOfOrders, paginate, orderData, onPress];

}

export default GetAllOrderHook
