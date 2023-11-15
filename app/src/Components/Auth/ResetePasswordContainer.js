import React from 'react'
import TitleLoginRegister from '../Util/TitleLoginRegister';
import { Card } from '@material-tailwind/react';
import OnSubmit from '../Util/OnSubmit';
import { useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';

const ResetePasswordContainer = ({ newPassword, confirmNewPassword, handleNewPassword, handleConfirmNewPassword, onSubmit }) => {

    const [eyeOpen, seteyeOpen] = useState("true");
    const [type, setType] = useState("password");

  return (
    <div>
        <Card color="transparent" shadow={false} className="flex flex-col items-center w-screen">
            <TitleLoginRegister bigTitle={"تغيير كلمة السر"} smallTitle={'ادخل كلمة سر جديده لتغييرها .. يجب ان تتذكرها بعد ذالك !'}/>
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                <form className="mb-4 flex flex-col gap-6">
                    <div className="relative flex w-full ">
                        <input value={newPassword} onChange={handleNewPassword} className='rounded-lg px-3 py-2 border border-gray-300 w-full focus:border-gray-600' placeholder='كلمة السر الجديده...' ></input>
                        <button type="button" className='cursor-pointer absolute left-2 top-1/2 -translate-y-1/2' id='1' onClick={(e) => { eyeOpen === "true" ? setType("string") : setType("password")
                        eyeOpen === "true" ? seteyeOpen("false") : seteyeOpen("true");}}>{eyeOpen === "true" ? <AiOutlineEyeInvisible color='gray' /> : <BsEye color='gray' />}</button>
                    </div>
                    <div className="relative flex w-full ">
                        <input value={confirmNewPassword} onChange={handleConfirmNewPassword} className='rounded-lg px-3 py-2 border border-gray-300 w-full focus:border-gray-600' placeholder='تاكيد كلمة السر الجديده...' ></input>
                        <button type="button" className='cursor-pointer absolute left-2 top-1/2 -translate-y-1/2' onClick={() => { eyeOpen === "true" ? setType("string") : setType("password")
                        eyeOpen === "true" ? seteyeOpen("false") : seteyeOpen("true");}}>{eyeOpen === "true" ? <AiOutlineEyeInvisible color='gray' /> : <BsEye color='gray' />}</button>
                    </div>
                    <OnSubmit onSubmit={onSubmit} title={'تغيير  '} />
                </form>
            </div>
        </Card>
    </div>
  )
}

export default ResetePasswordContainer
