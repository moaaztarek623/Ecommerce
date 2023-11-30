import { BsCashStack } from "react-icons/bs"; 
import { MdPayment } from "react-icons/md"; 
import { Radio } from '@material-tailwind/react'
import React from 'react'

const PayMethod = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-600">اختيار وسيلة دفع</p>
      <div className="flex gap-4 flex-col font-bold">
        <div className="border !bg-white p-2 rounded-lg"><Radio name="type" label={<p className="flex gap-2 items-center flex-row-reverse !text-black"><BsCashStack /> الدفع عند الاستلام</p>} /></div>
        <div className="border !bg-white p-2 rounded-lg"><Radio name="type" label={<p className="flex gap-2 items-center flex-row-reverse !text-black"><MdPayment/> الدفع اونلاين</p>} defaultChecked/></div>        
      </div>
    </div>
  )
}

export default PayMethod
