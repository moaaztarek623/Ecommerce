import { Button, Card } from '@material-tailwind/react'
import React from 'react'
import TitleLoginRegister from "../Util/TitleLoginRegister";
import OnSubmit from '../Util/OnSubmit';

const ForgetPasswordContainer = ({ email, handleEmail, onSubmit }) => {
  return (
    <div>
        <Card color="transparent" shadow={false} className="flex flex-col items-center w-screen">
            <TitleLoginRegister bigTitle={"نسيت كلمة السر"} smallTitle={"ادخل ايميلك لارسال رمز لتغيير كلمة السر"}/>
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                <form className="mb-4 flex flex-col gap-6">
                    <input autoFocus value={email} onChange={handleEmail} className='rounded-lg px-3 py-2 border border-gray-300 w-full focus:border-gray-600' type="email" placeholder='الايميل...'></input>
                    <OnSubmit onSubmit={onSubmit} title={'ارسال الرمز'} />
                </form>
            </div>
        </Card>
    </div>
  )
}

export default ForgetPasswordContainer
