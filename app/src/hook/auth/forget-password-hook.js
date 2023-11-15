import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../Redux/actions/authAction';
import {notify} from '../../Components/Util/notify'
import { useNavigate } from 'react-router';

const ForgetPasswordHook = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [email, setEmail] = useState("");

  const res = useSelector(state => state.auth.forgetPassword);

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      notify("برجاء ادخال الايميل", "error");
      return ;
    }
    if (!email.match(validRegex)) {
      notify("برجاء ادخال ايميل صحيح مثل user234@gmail.com", "error");
      return ;
    }
    setLoading(true)
    setPress(true)
    await dispatch(forgetPassword({
        email,
    }))
    setPress(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.status === 200 && res.data.message === "Reset code sent to your email") {
          localStorage.setItem("emailSended", email)
          notify("تم ارسال الكود بنجاح", "success");
          setTimeout(() => {
            navigate('/auth/resete-code')
          }, 2000);
        }else if (res.status === 404 && res.data.status === "fail") {
          localStorage.removeItem("emailSended")
          notify("هذا الايميل غير موجود", "error");
        }
      }
    }
  }, [loading])

  return [email, handleEmail, press, loading, onSubmit];

}

export default ForgetPasswordHook
