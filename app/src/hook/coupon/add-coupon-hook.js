import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCoupon, getAllCoupon } from '../../Redux/actions/couponAction';
import { notify } from '../../Components/Util/notify';

const AddCouponHook = () => {

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString('en-GB')
    }
    
    const dispatch = useDispatch();
      
    const [loading, setLoading] = useState(true);

    const [press, setPress] = useState(false);

    const [couponName, setCouponName] = useState('');
    const [couponDate, setCouponDate] = useState('');
    const [couponNumber, setCouponNumber] = useState('');

    const onChangeCouponName = (e) => {
        setCouponName(e.target.value);
    };

    const onChangeCouponDate = (e) => {
        setCouponDate(e.target.value);
    };

    const onChangeCouponNumber = (e) => {
        setCouponNumber(e.target.value);
    };

    const res = useSelector(state => state.couponReducer.createCoupon);

    const get = async () => {
        await dispatch(getAllCoupon())
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (couponName === "" && couponNumber === "" && couponDate === "") {
            notify("برجاء اكمال البيانات", "error");
            return ;
        }
        setPress(true)
        setLoading(true);
        await dispatch(createCoupon({
            name: couponName,
            expire: couponDate,
            discount: couponNumber
        }));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            if (res && res.status === 201) {
                notify("تم اضافة الكوبون بنجاح", "success");
                setCouponDate('');
                setCouponName('');
                setCouponNumber('');
                get();
            }else if (res && res.status === 400) {
                notify("هذا الكوبون موجود من قبل ", "error")
            }
        }
    }, [loading]);

    const allCoupon = useSelector(state => state.couponReducer.allCoupon)

    useEffect(() => {
        get();
    }, []);

    return [press, loading, couponName, couponDate, couponNumber, onChangeCouponName, onChangeCouponDate, onChangeCouponNumber, onSubmit, allCoupon, formatDate];
}

export default AddCouponHook
