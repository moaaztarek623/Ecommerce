import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editCoupon, getOneCoupon } from '../../Redux/actions/couponAction';
import { notify } from '../../Components/Util/notify';

const EditCouponHook = (id) => {

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString('en-GB')
    }

    const dispatch = useDispatch();

    const editedCoupon = useSelector(state => state.couponReducer.editCoupon);

    const oneCoupon = useSelector(state => state.couponReducer.oneCoupon);

    const [loading, setLoading] = useState(true);

    const [loadingEdit, setLoadingEdit] = useState(true);

    const [press, setPress] = useState(false);

    const [couponName, setCouponName] = useState('');

    const [couponDate, setCouponDate] = useState('');

    const [couponNumber, setCouponNumber] = useState('');

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getOneCoupon(id));
            setLoading(false)
        };
        get();
    }, []);

    useEffect(() => {
        if (loading === false) {
            if(oneCoupon){
                console.log(oneCoupon);
                setCouponName(oneCoupon.data.name);
                setCouponDate(oneCoupon.data.expire.match(/\d{4}-\d{2}-\d{2}/));
                setCouponNumber(oneCoupon.data.discount);
            }
        }
    }, [loading]);

    useEffect(() => {
        if (loadingEdit === false) {
            if (editedCoupon && editedCoupon.status === 200) {
                notify("تم تعديل الكوبون بنجاح", "success");
                setCouponName("");
                setCouponDate("")
                setCouponNumber("");
            }
        }
    }, [loadingEdit])

    const onSubmit = async (e) => {
        e.preventDefault();
        if (couponName === "" && couponNumber === "" && couponDate === "") {
            notify("برجاء اكمال البيانات", "error");
            return ;
        }
        setLoadingEdit(true);
        setPress(true)
        await dispatch(editCoupon(id, {
            "name": couponName,
            "expire": couponDate,
            "discount": couponNumber
        }))
        setLoadingEdit(false);
    };

    const onChangeCouponName = (e) => {
        setCouponName(e.target.value);
    };

    const onChangeCouponDate = (e) => {
        setCouponDate(e.target.value);
    };

    const onChangeCouponNumber = (e) => {
        setCouponNumber(e.target.value);
    };


    return [press, loadingEdit, loading, editedCoupon, couponName, couponDate, couponNumber, onSubmit, onChangeCouponName, onChangeCouponDate, onChangeCouponNumber, formatDate];

}

export default EditCouponHook
