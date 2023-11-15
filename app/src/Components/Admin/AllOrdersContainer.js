import React from 'react'
import SideBar from '../Util/SideBar';
import SubTitle from '../Util/SubTitle';
import Paginations from '../Pagination/Paginations';
import OrderItem from './OrderItem'
import { GrCircleInformation } from "react-icons/gr"; 

const AllOrdersContainer = () => {
  return (
    <div className='container mx-auto pb-[8rem]'>
        <div className='flex gap-8'>
            <SideBar actives={"2"} />
            <div className='flex flex-col gap-4 basis-full'>
                <SubTitle title={"ادارة جميع الطلبات"} classDiv={"py-4 px-0"}/>
                <div className='flex flex-col gap-3'>
                  <OrderItem title={"تفاصيل"} icon={<GrCircleInformation />} path={`/admin/order/${1432}`}/>
                </div>
                <Paginations classPagination={"pt-10"} />
            </div>
        </div>
    </div>
  )
}

export default AllOrdersContainer
