import { MdKeyboardReturn } from "react-icons/md"; 
import React from 'react'
import SideBar from '../Util/SideBar';
import SubTitle from '../Util/SubTitle';
import OrderItem from './OrderItem';
import Paginations from '../Pagination/Paginations';
import ClientInformation from './ClientInformation';

const OrderDetails = () => {
  return (
    <div className='container mx-auto pb-[8rem]'>
        <div className='flex gap-8'>
            <SideBar actives={"2"} />
            <div className='flex flex-col gap-4 basis-full'>
                <SubTitle title={"تفاصيل الطلب رقم #1432"} classDiv={"py-4 px-0"}/>
                <div className='flex flex-col gap-3'>
                  <OrderItem title={"رجوع"} icon={<MdKeyboardReturn />} path={"/admin/allOrders"}/>
                </div>
                <ClientInformation />
            </div>
        </div>
    </div>
  )
}

export default OrderDetails
