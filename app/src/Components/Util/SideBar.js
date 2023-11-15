import { Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'
import React from 'react'
import { MdAdminPanelSettings } from 'react-icons/md'
import { Link } from "react-router-dom";

const SideBar = ({ actives }) => {
  return (
    <Card className="h-[calc(60vh-2rem)] w-full max-w-[15rem] p-4 flex items-center">
      <div className="mb-2 p-2">
        <Typography variant="h5" className="flex gap-1 items-center border-b border-b-gray-300 pb-2" color="blue-gray" >
          صفحة الادمن <MdAdminPanelSettings />
        </Typography>
      </div>
      <div className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-blue-gray-700">
        <Link to="/admin/allProducts" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "1" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>ادارة المنتجات</Link>
        <Link to="/admin/allOrders" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "2" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>ادارة الطلبات</Link>
        <Link to="/admin/addBrand" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "3" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>اضافة ماركه</Link>
        <Link to="/admin/addCategory" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "4" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>اضافة تصنيف</Link>
        <Link to="/admin/addSubCategory" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "5" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>اضافة تصنيف فرعي</Link>
        <Link to="/admin/addProducts" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "6" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>اضافة منتج</Link>
        <Link to="/admin/addCoupon" className={'items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 outline-none flex justify-center font-bold text-[0.9rem] !p-2'+" "+(actives == "7" ? "bg-blue-gray-50 bg-opacity-80 text-blue-gray-900" : "")}>الكوبونات</Link>
      </div>
    </Card>
  )
}

export default SideBar
