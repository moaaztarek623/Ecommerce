import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {notify} from '../../Components/Util/notify'
import { createReview, viewAllReviewProduct } from '../../Redux/actions/reviewAction';

const AddRateHook = (id) => {
  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(true);

  const [rateText, setRateText] = useState("");

  const [rateValue, setRateValue] = useState(2.5);

  const onChangeRateText = (e) => {
    setRateText(e.target.value)
  };

  const onChangeRateValue = (value) => {
    setRateValue(value)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (rateText === "") {
        notify("لا يمكن كتابة تعليق فارغ", "error")
        return ;
    }
    if (rateValue < 1) {
        notify("لا يمكن تقييم المنتج باقل من نجمة واحدة", "error");
        return ;
    }
    setLoading(true);
    await dispatch(createReview(id, {
        review: rateText,
        rating: rateValue
    }))
    await dispatch(viewAllReviewProduct(id, 2, 1))
    setLoading(false);
  }

  useEffect(() => {
    if (loading === false) {
        setRateText("")
        if (res.status && res.status === 201) {
            notify("تمت اضافة التعليق بنجاح", "success")
        }else if (res.data.errors && res.status && res.data.errors[0].msg === "You already added review on this product" && res.status === 400) {
            notify("لا يمكن اضافة اكثر من تقييم للمنتج", "error")
        }else if (res.status && res.status === 403) {
            notify("ليس للادمن صلاحيه لعمل تقييم", "error")
        }else if (res.status && res.status === 401) {
            notify("يجب تسجيل الدخول لكي تتمكن من تقييم المنتج", "error")
        }
    }
  }, [loading])

  const res = useSelector(state => state.createReview.createReview);

  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
        setUser(JSON.parse(localStorage.getItem("user")));
    }else {
        setUser("");
    }    
  }, [localStorage.getItem("user")])

  return [rateText, rateValue, onChangeRateText, onChangeRateValue, onSubmit, user];
}

export default AddRateHook
