import { TiCancel } from "react-icons/ti"; 
import { BiCalendarCheck } from "react-icons/bi"; 
import { BsFillHddNetworkFill } from "react-icons/bs"; 
import React from 'react'
import { FaTruckLoading, FaUser } from 'react-icons/fa';
import { Option } from '@material-tailwind/react';

const SelectionItems = () => {
  return (
    <>
        <Option className="flex items-center justify-between bg-transparent">قيد التنفيذ <BsFillHddNetworkFill /></Option>
        <Option className="flex items-center justify-between bg-transparent">تم الانتهاء<BiCalendarCheck /></Option>
        <Option className="flex items-center justify-between bg-transparent">الغاء<TiCancel /></Option>
    </>
  )
}

export default SelectionItems
