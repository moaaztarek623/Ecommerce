import { FaUserAlt } from "react-icons/fa"; 
import { Card, Typography } from '@material-tailwind/react';
import React from 'react'
import { Link } from "react-router-dom";

const SideBarUser = ({ actives }) => {
  return (
    <Card className="h-[calc(60vh-2rem)] w-full max-w-[15rem] p-4 flex items-center">
      <div className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-blue-gray-700">
        <Link to="/user/allOrders" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "1" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>ادارة الطلبات</Link>
        <Link to="/user/favProducts"   className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "2" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>المنتجات المفضله</Link>
        <Link to="/user/allAdress" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "3" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>العناوين</Link>
        <Link to="/user/profile" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "4" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>الملف الشخصي</Link>
      </div>
    </Card>
  )
}

export default SideBarUser
