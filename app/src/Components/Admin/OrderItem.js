import { GrCircleInformation } from "react-icons/gr"; 
import { MdOutlineRemoveShoppingCart } from "react-icons/md"; 
import React, { useEffect, useRef, useState } from 'react';
import mobile from '../../images/mobile-02.png'
import PriceAndRemove from "../Util/PriceAndRemove";

const OrderItem = ({ title, icon, path }) => {    
  return (
    <div>
        <div className='flex p-4 border border-gray-200 justify-between rounded-xl'>
            <div className='flex gap-3 w-full'>
                <img className='max-w-[10rem] scale-90' src={mobile} alt='img'></img>
                <div className='flex flex-col gap-3'>
                    <span className="font-bold text-gray-600 text-sm">طلب رقم #<span className="text-gray-900 font-extrabold">1432</span></span>
                    <div>
                        <h1 className='font-bold text-[1rem] text-gray-500'>
                        النوع
                        </h1>
                        <p className='text-sm'>آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس</p>
                    </div>
                    <div className = "flex gap-1 items-center">
                        <h1 className='font-bold text-[1rem] text-gray-500'>الماركة: </h1>
                        <p className='font-bold'>Apple</p>
                    </div>
                    <div>
                    <ul className='flex gap-2 items-center'>
                        <li className={'w-6 h-6 rounded-full border cursor-default border-gray-300 bg-white'}></li>
                        <li className={'w-6 h-6 rounded-full border cursor-default border-gray-300 bg-red-500'}></li>
                    </ul>
                    </div>
                    <div className = "flex gap-2 flex-col">
                        <h1 className='font-bold text-[1rem] text-gray-500'>الكميه</h1>
                        <div className = "flex gap-1 items-center">
                        <div  className='rounded-md border border-gray-300 p-1 w-14 focus:border-gray-500 text-center' style={{ direction: "ltr !important" }} >{1}</div>
                        </div>
                    </div>
                </div>
            </div>
            <PriceAndRemove price={"15,000"} details={"yes"} title={title} icon={icon} path={path}/>
        </div>
    </div>
  )
}

export default OrderItem
