import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../Components/Util/notify';
import { editAdress, getOneAdress } from '../../Redux/actions/adressAction';

const EditAdressHook = (id) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const [loadingEdit, setLoadingEdit] = useState(true);

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

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getOneAdress(id))
            setLoading(false);
        };
        get();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (alias === "" || details === "" || phone === "" || city === "" || postalCode === "") {
            notify("برجاء اكمال البيانات", "error");
            return ;
        }
        setPress(true);
        setLoadingEdit(true);
        await dispatch(editAdress(id, {
            alias,
            details,
            phone,
            city,
            postalCode
        }))
        setLoadingEdit(false);
    };

    const oneAdress =  useSelector(state => state.adressReducer.oneAdress);

    const editedAdress = useSelector(state => state.adressReducer.editAdress);

    useEffect(() => {
        if (loading === false) {
            if(oneAdress.status === 'success'){
                console.log(oneAdress);
                const oneData = oneAdress.data;

                setAlias(oneData.alias);
                setCity(oneData.city);
                setDetails(oneData.details);
                setPhone(oneData.phone);
                setPostalCode(oneData.postalCode);
            }
        }
    }, [loading]);

    useEffect(() => {
        if(loadingEdit === false){
            if(editedAdress && editedAdress.status === 200){
                notify("تم تعديل العنوان بنجاح", "success");
                setAlias("");
                setCity("");
                setDetails("");
                setPhone("");
                setPostalCode("");
            }else if (editedAdress && editedAdress.status === 401) {
                notify("سجل الدخول اولا قبل تعديل عنوان او انشئ حساب جديد", "warning");
            }
        }
    }, [loadingEdit])

    return [press, loadingEdit, loading, alias, details, phone, city, postalCode, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, onChangePostalCode, onSubmit];

}

export default EditAdressHook;