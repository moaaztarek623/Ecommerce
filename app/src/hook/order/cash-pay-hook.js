import React, { useEffect, useState } from 'react'
import UserViewAllAdressHook from '../user/user-view-all-adress-hook';
import { useDispatch, useSelector } from 'react-redux';
import { createCashOrder } from '../../Redux/actions/orderAction'
import { notify } from '../../Components/Util/notify';

const CashPayHook = (CartId) => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [press, setPress] = useState(false);
    
    const [, , allAdresses] = UserViewAllAdressHook();

    const [oneAdress, setOneAdress] = useState({});

    useEffect(() => {
        if (allAdresses?.data?.length > 0) {
            allAdresses?.data?.filter((item, index) => {
                if (index === 0) {
                    setOneAdress(item);
                }
            })
        }
       
    }, [allAdresses]);

    const onSelectAdress = (e) => {
        allAdresses?.data?.filter((item, index) => {
          if (item._id === e.target.value) {
            setOneAdress(item);
          }
        });
    };

    const OnSubmit = async () => {
        setPress(true);
        setLoading(true);
        await dispatch(createCashOrder(CartId, {
            shippingAddress:{
                details: oneAdress?.details,
                phone: oneAdress?.phone,
                city: oneAdress?.city,
                postalCode: oneAdress?.postalCode
            }
        }))
        setLoading(false);
    };

    const res = useSelector(state => state.orderReducer.createCashOrder);

    useEffect(() => {
        if (loading === false) {
            console.log(res); 
            if (res && res.status === 201) {
                console.log('done');
            }
            if (res && res.status === 404) {
               notify("لا يوجد منتجات في عربة التسوق", "error")
            }  
        }
    }, [loading]);
    console.log(oneAdress);

    return [onSelectAdress, allAdresses, OnSubmit, loading, press];
}

export default CashPayHook
