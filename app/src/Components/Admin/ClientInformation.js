import React from 'react'
import SubTitle from '../Util/SubTitle';
import Selection from '../Util/Selection';
import { MdAdminPanelSettings } from 'react-icons/md';
import { Option } from '@material-tailwind/react';

const ClientInformation = () => {
  return (
    <div className="flex flex-col gap-6 p-4 border border-gray-200 justify-between rounded-xl">
        <SubTitle title={"معلومات العميل"} classDiv={"!py-0 !px-0"} classTitle={"text-xl"}/>
        <div className = "flex flex-col gap-3">
            <div className="flex gap-1 justify-start rounded-full border border-gray-200 p-2">
                <p className='text-gray-900 text-[1rem] font-bold'>الاسم:</p>
                <span className="text-gray-600 ">معاذ طارق محمود احمد</span>
            </div>
            <div className="flex gap-1 justify-start rounded-full border border-gray-200 p-2">
                <p className='text-gray-900 text-[1rem] font-bold'>رقم الموبايل:</p>
                <span className="text-gray-600 " style={{ direction: "ltr" }}>+20 101 095 0727</span>
            </div>
            <div className="flex gap-1 justify-start rounded-full border border-gray-200 p-2">
                <p className='text-gray-900 text-[1rem] font-bold'>الايميل:</p>
                <span className="text-gray-600 " style={{ direction: "ltr" }}>moaaz@gmail.com</span>
            </div>
            <div className="font-bold text-white rounded-full p-2 bg-green-500 text-center">
                 المجموع 12,000 جنيه
            </div>
            <Selection classDiv="w-full" show={"false"} title={"حالة الطلب"} color={"green"} widthClass={"w-full"} linkTrue={"true"}/>
        </div>
    </div>
  )
}

export default ClientInformation
