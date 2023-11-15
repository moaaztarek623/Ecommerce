import { MdOutlineRemoveShoppingCart } from "react-icons/md"; 
import React, { useEffect, useRef, useState } from 'react';
import mobile from '../../images/mobile-02.png'
import NavigationColor from '../Util/NavigationColor';
import { Button } from '@material-tailwind/react';
import PriceAndRemove from "../Util/PriceAndRemove";

const CartItems = () => {

  const [count, setcount] = useState(1);
  
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = count;
  }, [count])
  
  return (
    <div className='flex p-4 border border-gray-200 justify-between rounded-xl'>
      <div className='flex gap-3 '>
        <div className='overflow-hidden rounded-lg bg-cover flex basis-1/6'>
          <img className='object-cover' src={mobile} alt='img'></img>
        </div>
        <div className='flex flex-col gap-3'>
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
            <li className={'w-6 h-6 rounded-full cursor-pointer border border-gray-300 bg-white'}></li>
            <li className={'w-6 h-6 rounded-full cursor-pointer border border-gray-300 bg-red-500'}></li>
          </ul>
          </div>
          <div>
            <h1 className='font-bold text-[1rem] text-gray-500'>الكميه: </h1>
            <div className = "flex gap-1 items-center">
              <Button color='green' className='!p-2 !px-4 !text-lg' variant='text' onClick={() => count <= 20 - 1 ? setcount(count + 1) : null}>+</Button>
              <div  className='rounded-md border border-gray-300 p-1 w-14 focus:border-gray-500 text-center' style={{ direction: "ltr !important" }} ref={inputRef} >{count}</div>
              <Button color="red" className='!p-2 !px-4 !text-lg' variant='text' onClick={() => count > 1 ? setcount(count - 1) : null}>-</Button>
            </div>
          </div>
        </div>
      </div>
<PriceAndRemove price={"15,000"}/>
    </div>
  )
}

export default CartItems
