import { AiOutlineLogin } from "react-icons/ai"; 
import { AiOutlineEyeInvisible } from "react-icons/ai"; 
import { Button, Card, Checkbox, Input, Radio, Spinner, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import TitleLoginRegister from "../Util/TitleLoginRegister";
import FooterLoginRegister from "../Util/FooterLoginRegister";
import RegisterHook from "../../hook/auth/register-hook";
import { ToastContainer } from "react-toastify";
import SpinnerContainer from "../../Components/Util/Spinner"
import OnSubmit from "../Util/OnSubmit";

const RegisterContainer = ({ name, email, phone, password, passwordConfirm, handleName, handleEmail, handlePhone, handlePassword, handleConfirmPassword, onSubmit, loading, press }) => {

    const [eyeOpen, seteyeOpen] = useState("true");
    const [type, setType] = useState("password");
        
  return (
        <Card color="transparent" shadow={false} className="flex flex-col items-center w-screen">
            <TitleLoginRegister bigTitle={"انشاء حساب جديد"} smallTitle={"ادخل بياناتك لانشاء الحساب"}/>
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                <form  method="POST" className="mb-4 flex flex-col gap-6">
                    <input name="txtUserName" id="txtUserName" onChange={handleName} value={name} type="text" className='rounded-lg px-3 py-2 border-2 border-gray-300 w-full focus:border-gray-600' placeholder='اسم المستخدم...'></input>
                    <input onChange={handleEmail} value={email} type="email" className='rounded-lg px-3 py-2 border-2 border-gray-300 w-full focus:border-gray-600' placeholder='الايميل...'></input>
                    <input onChange={handlePhone} value={phone} type="number" className='rounded-lg px-3 py-2 border-2 border-gray-300 w-full focus:border-gray-600' placeholder='رقم الموبايل...'></input>
                    <div className="relative flex w-full ">
                        <input onChange={handlePassword} value={password} type={type} className='rounded-lg px-3 py-2 border-2 border-gray-300 w-full focus:border-gray-600' placeholder='كلمة السر...'></input>
                        <button type="button" className='cursor-pointer absolute left-2 top-1/2 -translate-y-1/2' onClick={() => { eyeOpen === "true" ? setType("string") : setType("password")
                        eyeOpen === "true" ? seteyeOpen("false") : seteyeOpen("true");}}>{eyeOpen === "true" ? <AiOutlineEyeInvisible color='gray' /> : <BsEye color='gray' />}</button>
                    </div>
                    <div className="relative flex w-full ">
                        <input onChange={handleConfirmPassword} value={passwordConfirm} type={type} className='rounded-lg px-3 py-2 border-2 border-gray-300 w-full focus:border-gray-600' placeholder='تاكيد كلمة السر..'></input>
                        <button type="button" className='cursor-pointer absolute left-2 top-1/2 -translate-y-1/2' onClick={() => { eyeOpen === "true" ? setType("string") : setType("password")
                        eyeOpen === "true" ? seteyeOpen("false") : seteyeOpen("true");}}>{eyeOpen === "true" ? <AiOutlineEyeInvisible color='gray' /> : <BsEye color='gray' />}</button>
                    </div>
                    <div className="flex gap-10">
                        <Radio name="type" label="ذكر" defaultChecked />
                        <Radio name="type" label="انثى" />
                    </div>
                    <OnSubmit title={'انشاء حساب جديد'} onSubmit={onSubmit} />
                </form>
                <FooterLoginRegister not={"لديك حساب بالفعل؟ "} nameLink={"أضغط هنا"} path={"/login"}/>
            </div>
            <ToastContainer />
        </Card>
  )
}

export default RegisterContainer
