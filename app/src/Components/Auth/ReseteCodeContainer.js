import { Button, Card } from '@material-tailwind/react'
import React from 'react'
import TitleLoginRegister from "../Util/TitleLoginRegister";
import OnSubmit from '../Util/OnSubmit';

const ReseteCodeContainer = ({ code, handleCode, onSubmit }) => {
    let emailSended = "";
    if (localStorage.getItem("emailSended") !== null) {
        emailSended = localStorage.getItem("emailSended");
    }else {
        emailSended = "";
    }
  return (
    <div>
        <Card color="transparent" shadow={false} className="flex flex-col items-center w-screen">
            <TitleLoginRegister bigTitle={"نسيت كلمة السر"} smallTitle={`ادخل الكود المكون من 6 ارقام المرسل الى ${emailSended} لتعيين كلمة سر جديده`}/>
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                <form className="mb-4 flex flex-col gap-6">
                    <input autoFocus value={code} onChange={handleCode} className='rounded-lg px-3 py-2 border border-gray-300 w-full focus:border-gray-600' type="number" placeholder='الكود...'></input>
                    <OnSubmit onSubmit={onSubmit} title={'تسجيل الرمز'} />
                </form>
            </div>
        </Card>
    </div>
  )
}

export default ReseteCodeContainer
