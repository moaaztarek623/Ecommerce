import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoupon, removeCoupon } from '../../Redux/actions/couponAction';
import {notify} from '../../Components/Util/notify'

const CouponCardHook = (coupon) => {

    const dispatch = useDispatch();

    const [loadingRemove, setloadingRemove] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const get = async () => {
        await dispatch(getAllCoupon())
    }

    const handleOpen = () =>{
        setOpen(!open);
    };

    const couponRemoved = useSelector(state => state.couponReducer.deleteCoupon)

    const handleRemoveCoupon = async (id) => {
        setloadingRemove(true);
        await dispatch(removeCoupon(id));
        setloadingRemove(false);
    }

    useEffect(() => {
        if (loadingRemove === false) {
            if (couponRemoved === "") {
                get();
                setOpen(!open)
                notify("تم حذف الكوبون", "success");
            }
        }
    }, [loadingRemove])

    return [open, handleOpen, loadingRemove, handleRemoveCoupon];
}

export default CouponCardHook
