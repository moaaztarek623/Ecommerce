import React, { useEffect, useState } from "react";
import { notify } from "../../Components/Util/notify";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, login } from "../../Redux/actions/authAction";
import { useNavigate } from "react-router";

const LoginHook = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const res = useSelector(state => state.auth.login);

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const emptyAfterLogin = () => {
    setEmail("");
    setPassword("");
  }

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
        notify("برجاء ادخال بيانات", "error");
        return ;
    }
    if (email === "") {
        notify("برجاء ادخال الايميل", "error");
        return ;
      }else if (!email.match(validRegex)) {
        notify("برجاء ادخال ايميل صحيح مثل user234@gmail.com", "error");
        return ;
    }
    if (password === "") {
        notify("برجاء ادخال كلمة السر", "error");
        return ;
    }
    setLoading(true);
    setPress(true);
    await dispatch(login({
      email,
      password
    }))
    setPress(false);
    setLoading(false);
  }

  useEffect(() => {
    if (loading === false) {
        if (res) {
          if (res.status === 200) {   
              if (res.data) {
                  if (res.data.token) {
                      localStorage.setItem("token", res.data.token);
                      localStorage.setItem("user", JSON.stringify(res.data.data));
                      emptyAfterLogin();
                      notify("تم تسجيل الدخول", "success");
                  }
              }
          }else{
            localStorage.removeItem("token");
          }

          setLoading(true);

          if (res.data.message) {
              if (res.data.message === "Incorrect email or password")
                notify("كلمة السر او الايميل خطأ", "error");
          }
        }
    }
  }, [loading])

  return [email, password, handleEmail, handlePassword, loading, press, onSubmit]

};

export default LoginHook;
