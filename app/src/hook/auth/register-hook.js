import React, { useEffect, useState } from 'react'
import {notify} from '../../Components/Util/notify'
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from '../../Redux/actions/authAction'
import { useNavigate } from 'react-router';

const RegisterHook = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const emptyAfterSinUp = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  }

  const res = useSelector(state => state.auth.newUser)

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" && email === "" && password === "" && phone === "") {
      notify("برجاء ادخال بيانات", "error");
      return ;
    }
    if (name === "") {
      notify("برجاء ادخال اسم المستخدم", "error");
      return ;
    }else if (name.length <= 4) {
      notify(`برجاء ادخال اسم عدد احرفه اكبر من 4 \n ${name}128 :اقتراح`, "error");
      return ;
    }
    if (email === "") {
      notify("برجاء ادخال الايميل", "error");
      return ;
    }else if (!email.match(validRegex)) {
      notify("برجاء ادخال ايميل صحيح مثل user234@gmail.com", "error");
      return ;
    }
    if (phone === "") {
      notify("برجاء ادخال رقم الهاتف", "error");
      return ;
    };
    if (password === "") {
      notify("برجاء ادخال كلمة السر", "error");
      return ;
    }
    if (passwordConfirm !== password) {
      notify("يرجى التاكد من كلمة السر حيث يجب ان تكون الكلمتين متطابقتين", "error");
      return ;
    }
    setLoading(true);
    setPress(true);
    await dispatch(createNewUser({
      name,
      email,
      password,
      passwordConfirm,
      phone,
    }));	
    setLoading(false);
  }

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.status === 201) {
          if (res.data) {
            if (res.data.token) { 
              localStorage.setItem("token", res.data.token);  
              emptyAfterSinUp();
              notify("تم انشاء الحساب بنجاح", "success");
              setTimeout(() => {
                navigate('/login')
              }, 3000);
            }
          }
        }
          if (res.data.errors) {
            console.log(res.data.errors[0].msg);
              if (res.data.errors[0].msg === "E-mail already in use")
                  notify("هذا الايميل مسجل من قبل", "error");
          }
          if (res.data.errors) {
              if (res.data.errors[0].msg === "accept only egypt phone numbers" || phone.length !== 11)
                  notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error")
          }

          if (res.data.errors) {
              if (res.data.errors[0].msg === "must be at least 6 chars")
                  notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error")
          }

      }
    }
  }, [loading])
  
  return [name, email, phone, password, passwordConfirm, handleName, handleEmail, handlePhone, handlePassword, handleConfirmPassword, onSubmit, loading, press];
}

export default RegisterHook
