import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { applyCouponToCart, getAllCartItems } from '../../Redux/actions/cartAction';
import { notify } from '../../Components/Util/notify';

const GetAllCartItemsHook = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const [itemsNum, setItemsNum] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    const [discount, setDiscount] = useState(0);

    const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);

    const [priceDiscount, setTotalPriceDiscount] = useState(0);

    const [couponName, setCouponName] = useState("");

    const [couponState, setCouponState] = useState(false);

    useEffect(() => {
        setDiscount(+localStorage.getItem("discount"));
        const get = async () => {
            setLoading(true);
            await dispatch(getAllCartItems());
            setLoading(false);
        };
        get();
    }, []);

    const items = useSelector(state => state.cartReducer.allCartItems);

    useEffect(() => {
        if (loading === false) {
            if (items && items.status === "success") {
                setItemsNum(items.numOfCartItems);
                if (items?.data?.totalAfterDiscount) {
                    setCouponState(true);
                    setCouponName(items?.data?.coupon);
                    setTotalPrice(items?.data?.totalAfterDiscount);
                }else {
                    setCouponName("");
                    setCouponState(false);
                    setTotalPrice(items?.data?.totalCartPrice);
                }
            }else {
                setItemsNum(0);
            }
        }
    }, [loading]);

    useEffect(() => {
        setPriceAfterDiscount(items?.data?.totalAfterDiscount);
    }, [items?.data?.totalAfterDiscount]);
    useEffect(() => {
        setTotalPriceDiscount(items?.data?.totalCartPrice);
    }, [items?.data?.totalCartPrice]);

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getAllCartItems());
            setLoading(false);
        };
        get();
    }, [items?.numOfCartItems]);

    useEffect(() => {
        if (items?.data?.totalAfterDiscount) {
            setCouponState(true);
            setCouponName(items?.data?.coupon);
            setTotalPrice(items?.data?.totalAfterDiscount);
        }else {
            setCouponName("");
            setCouponState(false);
            setTotalPrice(items?.data?.totalCartPrice);
        }
        const get = async () => {
            setLoading(true);
            await dispatch(getAllCartItems());
            setLoading(false);
        };
        get();
    }, [items?.data?.totalCartPrice]);

    //apply coupon

    const [disabledState, setDisabledState] = useState(true);

    useEffect(() => {
        if (couponName.length >= 4) {
          setDisabledState(false);
        }else {
          setDisabledState(true);
        }
      }, [couponName]);  

    const onChangeCouponName = (e) => {
        setCouponName(e.target.value);
    };

    const [loadingCoupon, setLoadingCoupon] = useState(true);

    const onSubmitCoupon = async () => {
        setLoadingCoupon(true);
        await dispatch(applyCouponToCart({
            couponName,
        }));
        setLoadingCoupon(false);
    };

    const resCoupon = useSelector(state => state.cartReducer.applyCouponToCart);

    useEffect(() => {
        if (loadingCoupon === false) {
            if (resCoupon && resCoupon.status === 200) {
                setTotalPrice(resCoupon.data?.data?.totalAfterDiscount);
                if (resCoupon.data) {
                    if (resCoupon.data.data) {
                        setTotalPriceDiscount(resCoupon.data?.data?.totalCartPrice);
                        if (resCoupon.data.data.totalAfterDiscount) {
                            setPriceAfterDiscount(resCoupon.data?.data?.totalAfterDiscount);
                        }
                    }
                }
                console.log(priceDiscount, priceAfterDiscount);
                setDiscount(((priceDiscount - priceAfterDiscount) / priceDiscount) * 100);
                if (discount !== 0)
                localStorage.setItem("discount", discount);
                notify("تم تطبيق كوبون الخصم بنجاح", "success");
                setDisabledState(true);
                setCouponState(true);
            }else if (resCoupon && resCoupon.status === 400) {
                notify("الكوبون المدخل غير صحيح او منتهي الصلاحيه", "error");
                setCouponName("");
                setCouponState(false);
                setTotalPrice(items?.data?.totalCartPrice);
            }
        }
    }, [loadingCoupon]);

    useEffect(() => {
        setPriceAfterDiscount(resCoupon.data?.data?.totalAfterDiscount);
    }, [resCoupon.data?.data?.totalAfterDiscount]);


    return [itemsNum, items, couponName, onChangeCouponName, loadingCoupon, onSubmitCoupon, disabledState, couponState, priceAfterDiscount, discount, totalPrice];
}

export default GetAllCartItemsHook
