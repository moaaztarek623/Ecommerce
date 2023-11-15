import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../Components/Util/notify';
import { getAllAdresses } from '../../Redux/actions/adressAction';

const UserViewAllAdressHook = () => {
    const dispatch = useDispatch();
      
    const [loading, setLoading] = useState(true);

    const [press, setPress] = useState(false);

    const res =  useSelector(state => state.adressReducer.allAdresses);

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            setPress(true);
            await dispatch(getAllAdresses());
            setLoading(false);
        };
        get();
    }, []);

    var allAdresses = "";

    try {
        if (res && res.status === "success") {
            allAdresses = res;
        }else {
            allAdresses = "";
        }
    } catch (e) {
        console.error('Error', e)
    }
    

    useEffect(() => {
        if (loading === false) {
            if(res)
            console.log(res);
        }
    }, [loading]);

    return [loading, press, allAdresses];

}

export default UserViewAllAdressHook
