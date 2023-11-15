import { AiOutlineEyeInvisible } from "react-icons/ai"; 
import { Card } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import TitleLoginRegister from "../Util/TitleLoginRegister";
import FooterLoginRegister from "../Util/FooterLoginRegister";
import OnSubmit from '../Util/OnSubmit';

const LoginSections = ({ email, password, handleEmail, handlePassword, loading, press, onSubmit }) => {
    const [eyeOpen, seteyeOpen] = useState("true");
    const [type, setType] = useState("password");
    
  return (
        <Card color="transparent" shadow={false} className="flex flex-col items-center w-screen">
                <TitleLoginRegister bigTitle={"تسجيل الدخول"} smallTitle={"ادخل بياناتك للدخول الى الحساب"}/>
                <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                    <form onSubmit={onSubmit} method="POST" className="mb-4 flex flex-col gap-6">
                        <input value={email} onChange={handleEmail} className='rounded-lg px-3 py-2 border-2 border-gray-300 w-full focus:border-gray-600' type="email" placeholder='الايميل...'></input>
                        <div className="relative flex w-full ">
                            <input value={password} onChange={handlePassword} type={type} className='rounded-lg px-3 py-2 border-2 border-gray-300 w-full focus:border-gray-600' placeholder='كلمة السر...'></input>
                            <button type="button" className='cursor-pointer absolute left-2 top-1/2 -translate-y-1/2' onClick={() => { eyeOpen === "true" ? setType("string") : setType("password")
                            eyeOpen === "true" ? seteyeOpen("false") : seteyeOpen("true");}}>{eyeOpen === "true" ? <AiOutlineEyeInvisible color='gray' /> : <BsEye color='gray' />}</button>
                        </div>
                        <OnSubmit title={'تسجيل الدخول'} onSubmit={onSubmit} />
                    </form>
                    <FooterLoginRegister not={"ليس لديك حساب؟ "} nameLink={"انشاء حساب"} path={"/register"}/>
                    <FooterLoginRegister not={"هل نسيت كلمة السر؟"} nameLink={"اضغط هنا"} path={"/auth/forget-password"} />
                </div>
        </Card>
  )
}

export default LoginSections
