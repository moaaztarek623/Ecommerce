import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reseteCode } from '../../Redux/actions/authAction';
import {notify} from '../../Components/Util/notify'
import { useNavigate } from 'react-router';

const ReseteCodeHook = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [code, setCode] = useState("");

  const res = useSelector(state => state.auth.reseteCode);

  const handleCode = e => {
    setCode(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (code === "") {
      notify("برجاء ادخال الكود", "error");
      return ;
    }
    setLoading(true)
    setPress(true)
    await dispatch(reseteCode({
      resetCode: code,
    }))
    setPress(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.status === 200 && res.data.status === "Success") {
          notify("الكود صحيح سوف يتم تحويلك الى صفحة تعيين كلمة سر جديده", "success");
          setTimeout(() => {
            navigate('/auth/resete-password')
          }, 3000);
        }else if (res.status === 400 && res.data.status === "fail") {
            notify("الكود المدخل غير صحيح", "error");
        }
      }
    }
  }, [loading])

  return [code, handleCode, press, loading, onSubmit];

}

export default ReseteCodeHook