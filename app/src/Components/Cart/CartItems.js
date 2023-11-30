import { TbTransferOut } from "react-icons/tb"; 
import { IoMdDoneAll } from "react-icons/io"; 
import { MdOutlineRemoveShoppingCart } from "react-icons/md"; 
import React, { useEffect, useRef, useState } from 'react';
import mobile from '../../images/mobile-02.png'
import NavigationColor from '../Util/NavigationColor';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner } from '@material-tailwind/react';
import PriceAndRemove from "../Util/PriceAndRemove";
import RemoveOneCartItemHook from "../../hook/cart/remove-one-cart-item-hook";
import UpdateCartItemQuantityHook from "../../hook/cart/update-cart-item-quantity-hook";
import { Link } from "react-router-dom";

const CartItems = ({ item, itemTwo }) => {
  
  const [openTwo, handleOpenTwo, loadingRemoveTwo, handleRemoveOneCartItem] = RemoveOneCartItemHook(itemTwo._id);

  const [onSubmit, handleAddCount, handleMinCount, count] = UpdateCartItemQuantityHook(itemTwo._id, itemTwo.count);

  return (
    <div className='flex p-4 border border-gray-200 justify-between rounded-xl max-h-[19rem]'>
          <Dialog open={openTwo} handler={handleOpenTwo} size='xs'>
            <DialogHeader>حذف العناصر من العربة</DialogHeader>
            <DialogBody divider>
                هل انت متاكد انك تريد حذف العنصر: <span className="font-bold">{item.title}</span>
            </DialogBody>
            <DialogFooter className='flex justify-between items-center'>
              <Button variant="text" color="gray" onClick={handleOpenTwo} className="mr-1">
                <span>الغاء</span>
              </Button>
              <Button type="submit" className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" onClick={handleRemoveOneCartItem} >
                  {loadingRemoveTwo === true ? <span className='flex gap-1 items-center'>جاري الحذف <Spinner color='gray'/></span> : <span>تاكيد الحذف</span>}
              </Button>
            </DialogFooter>
        </Dialog>
        <div className='flex gap-3'>
            <div className="flex w-fit justify-center" style={{flex: '0 0 12rem'}}>
              <img className='object-scale-down scale-90' src={`http://127.0.0.1:8000/products/${item.imageCover}`} alt='img'></img>
            </div>
          <div className='flex flex-col gap-3 px-4 w-full'>
            <div>
              <h1 className='font-bold text-[1rem] text-gray-500'>
                النوع:
              </h1>
              <p className='text-sm'>{item.title}</p>
            </div>
            <div className = "flex gap-1 items-center">
              <h1 className='font-bold text-[1rem] text-gray-500'>الماركة: </h1>
              <p className='font-bold'>{item.brand.name}</p>
            </div>
            <div className = "flex gap-1 items-center">
              <h1 className='font-bold text-[1rem] text-gray-500'>التصنيف: </h1>
              <p className='font-bold'>{item.category.name}</p>
            </div>
            <div className = "flex gap-1 items-center">
              <h1 className='font-bold text-[1rem] text-gray-500'>متوسط التقييم: </h1>
              <p className='font-bold text-yellow-700'>{item.ratingsAverage ? item.ratingsAverage : 0}</p>
            </div>
              {
                itemTwo.color ?
                <div>
                  <ul className='flex gap-2 items-center'>
                    <li className={"w-6 h-6 rounded-full cursor-pointer border border-gray-300"} style={{backgroundColor: itemTwo.color}}></li>
                  </ul>
                </div>
                : null
              }
            <div className="flex items-center gap-3">
              <h6 className='font-bold text-[1rem] text-gray-500'>الكميه: </h6>
              <div className = "flex gap-1 items-center">
                <Button color='green' className='!p-2 !px-4 !text-lg' variant='text' onClick={() => count <= 20 ? handleAddCount() : null}>+</Button>
                <div className='rounded-md border border-gray-300 p-1 w-14 focus:border-gray-500 text-center' style={{ direction: "ltr !important" }} >{count}</div>
                {/* <input value={count} className='rounded-md border border-gray-300 p-1 w-14 focus:border-gray-500 text-center' style={{ direction: "ltr !important" }} ></input> */}
                <Button color="red" className='!p-2 !px-4 !text-lg' variant='text' onClick={() => count > 1 ? handleMinCount() : null}>-</Button>
              </div>
              <Button onClick={onSubmit} color="deep-orange" className='hover:!shadow-none hover:bg-opacity-90 borderborder-gray-300 !shadow-none flex items-center gap-1'> تطبيق الكمية<IoMdDoneAll /></Button>
              <Link to={`/products/${item._id}`}>
                <Button color="gray" className="hover:!shadow-none hover:bg-opacity-90 borderborder-gray-300 !shadow-none flex items-center gap-1">الذهاب للمنتج <TbTransferOut /></Button>
              </Link>
            </div>
          </div>
        </div>
        <PriceAndRemove price={itemTwo.price.toLocaleString()} onClickRemove={handleOpenTwo} />
    </div>
  )
}

export default CartItems
