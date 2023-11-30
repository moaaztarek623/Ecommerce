import React, { useEffect, useState } from 'react'
import PayMethodComponents from "./PayMethodComponents";
import { Link, useParams } from 'react-router-dom';
import { Button, Spinner } from '@material-tailwind/react';
import { GiConfirmed } from 'react-icons/gi';
import CashPayHook from '../../hook/order/cash-pay-hook';

const AsideDiscount = ({ totalPrice }) => {
  const { id } = useParams();
  const [onSelectAdress, allAdresses, OnSubmit, loading, press] = CashPayHook(id);
return (
      <div className="flex flex-col gap-3 p-4 w-2/3">
          <PayMethodComponents />
          <div className="flex flex-col gap-2 py-3">
            <p className="text-gray-600">اختيار عنوان للشحن</p>
            <select onChange={onSelectAdress} className="!outline-none p-3 rounded-lg border border-gray-200 focus:outline-none cursor-pointer w-full">
              {
                allAdresses?.data?.length >= 1 ? 
                  allAdresses?.data?.map((item, index) => {
                    return <option selected={index === 0 ? true : false} key={index} value={item._id}>{item.alias}</option>
                  })
                : <option value={'1'} disabled>لا يوجد عناوين شخصية حتى الان</option>
              }
            </select>
          </div>
          <div className="flex items-center gap-3">
            <div onClick={OnSubmit} className="flex basis-2/3">
              <Button color="green" className="flex w-full items-center gap-1 text-sm hover:!shadow-none  hover:bg-green-400 justify-center" >
                {press ? loading ? <span className='flex items-center gap-2'>جاري اكمال الطلب <Spinner color='gray' className="h-5 w-5 text-gray-900" /></span>  : <span className='flex items-center gap-1'>اكمال الطلب <GiConfirmed /></span> : <span className='flex items-center gap-1'>اكمال الطلب <GiConfirmed /></span>}
              </Button>
            </div>
            <div className="flex text-[0.9rem] gap-1 items-center border !bg-white rounded-lg py-3 px-6 justify-center basis-1/3">
              <p className="!font-sans  font-bold">{totalPrice?.toLocaleString() || 0}</p>
              <p>جنيه مصري</p>
            </div>
          </div>
      </div>
  )
}

export default AsideDiscount
