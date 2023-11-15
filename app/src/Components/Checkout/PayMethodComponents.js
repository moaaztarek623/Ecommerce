import { BsCashStack } from "react-icons/bs"; 
import { MdPayment } from "react-icons/md"; 
import { Radio } from '@material-tailwind/react'
import React from 'react'

const PayMethod = () => {
  return (
    <div className="flex gap-1 flex-col font-bold">
      <Radio name="type" label={<p className="flex gap-2 items-center flex-row-reverse !text-gray-900"><BsCashStack /> الدفع عند الاستلام</p>} />
      <Radio name="type" label={<p className="flex gap-2 items-center flex-row-reverse !text-gray-900"><MdPayment/> الدفع اونلاين</p>} defaultChecked/>
    </div>
  )
}

export default PayMethod
