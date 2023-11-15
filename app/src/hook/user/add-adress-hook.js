import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../Components/Util/notify';
import { createAdress } from '../../Redux/actions/adressAction'
import { NoSsr } from '@mui/material';

const AddAdressHook = () => {
    const dispatch = useDispatch();
      
    const [loading, setLoading] = useState(true);

    const [press, setPress] = useState(false);

    const [alias, setAlias] = useState('');
    const [details, setDetails] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const onChangeAlias = (e) => {
        setAlias(e.target.value);
    };
    
    const onChangeDetails = (e) => {
        setDetails(e.target.value);
    };
    
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    
    const onChangeCity = (e) => {
        setCity(e.target.value);
    };
    
    const onChangePostalCode = (e) => {
        setPostalCode(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (alias === "" || details === "" || phone === "" || city === "" || postalCode === "") {
            notify("برجاء اكمال البيانات", "error");
            return ;
        }
        setLoading(true);
        setPress(true);
        await dispatch(createAdress({
            alias,
            details,
            phone,
            city,
            postalCode
        }));
        setLoading(false);
    };

    const res =  useSelector(state => state.adressReducer.createAdress);

    useEffect(() => {
        if (loading === false) {
            if(res && res.status === 200){
                notify("تم اضافة العنوان بنجاح", "success");
                setAlias("");
                setCity("");
                setDetails("");
                setPhone("");
                setPostalCode("");
            }else if (res && res.status === 401) {
                notify("سجل الدخول اولا قبل انشاء عنوان او انشئ حساب جديد", "warning");
            }
        }
    }, [loading]);

    return [press, loading, alias, details, phone, city, postalCode, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, onChangePostalCode, onSubmit];
}

export default AddAdressHook
