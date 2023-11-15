import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reseteCode, resetePassword } from '../../Redux/actions/authAction';
import {notify} from '../../Components/Util/notify'
import { useNavigate } from 'react-router';

const ResetePasswordHook = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  if (localStorage.getItem("emailSended") !== null) {
    var email = localStorage.getItem("emailSended");
  }else {
    email = "";
  }

  const res = useSelector(state => state.auth.reseteCode);

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newPassword === "") {
      notify("برجاء ادخال كلمة السر", "error");
      return ;
    }
    if (confirmNewPassword !== newPassword) {
      notify("يجب ان يكون كلمة السر متطابقة", "error");
      return ;
    }
    if (email === "") {
      notify("برجاء ارسال الرمز مره اخرى الى البريدc", "error");
      return ;
    }
    setLoading(true)
    setPress(true)
    await dispatch(resetePassword({
        email: email,
        newPassword: newPassword
    }))
    setPress(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.status === 200) {
          notify("تم تغيير كلمة السر بنجاح", "success");
          setTimeout(() => {
            navigate('/')
          }, 3000);
        }else if (res.status === 404) {
            notify("هذا الايميل غير مسجل من قبل", "error");
        }
      }
    }
  }, [loading])

  return [newPassword, confirmNewPassword, handleNewPassword, handleConfirmNewPassword, press, loading, onSubmit];

}

export default ResetePasswordHook