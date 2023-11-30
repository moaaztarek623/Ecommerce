import { BiDownArrowAlt, BiLeftArrowAlt } from "react-icons/bi"; 
import { IoIosRemoveCircleOutline } from "react-icons/io"; 
import { MdCloudDone, MdYoutubeSearchedFor } from "react-icons/md"; 
import React from 'react'
import SubTitle from '../Util/SubTitle';
import CartItems from './CartItems'
import GetAllCartItemsHook from '../../hook/cart/get-all-cart-items-hook';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner } from '@material-tailwind/react';
import { Link } from "react-router-dom";
import RemoveAllCartItemHook from "../../hook/cart/remove-all-cart-item-hook";
import { GiConfirmed } from "react-icons/gi";

const CartContainer = () => {
  const [open, handleOpen, loadingRemove, handleRemoveAllCartItems] = RemoveAllCartItemHook();
  const [itemsNum, items, couponName, onChangeCouponName, loadingCoupon, onSubmitCoupon, disabledState, couponState, priceAfterDiscount, discount, totalPrice] = GetAllCartItemsHook();

  var sum = 0;
  items?.data?.products?.map((item, index) => sum+=item.count);


  console.log(items);

  return (
    <div className="container mx-auto pb-[8rem] flex ">
        <Dialog open={open} handler={handleOpen} size='xs'>
            <DialogHeader>حذف العربة</DialogHeader>
            <DialogBody divider>
                هل انت متاكد انك تريد حذف جميع عناصر هذه العربة
            </DialogBody>
            <DialogFooter className='flex justify-between items-center'>
              <Button variant="text" color="gray" onClick={handleOpen} className="mr-1">
                <span>الغاء</span>
              </Button>
              <Button type="submit" className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" onClick={handleRemoveAllCartItems} >
                  {loadingRemove === true ? <span className='flex gap-1 items-center'>جاري الحذف <Spinner color='gray'/></span> : <span>تاكيد الحذف</span>}
              </Button>
            </DialogFooter>
        </Dialog>
        <div className="p-4 flex flex-col gap-4 w-full">
          <SubTitle title={"عربة التسوق"} classTitle={"!text-2xl"} classDiv={"!py-5"}/>
            {
              items?.data?.products?.length >= 1 ?
              <Button onClick={handleOpen} color="red" className="!w-fit !p-2 !px-4 flex gap-1 items-center !text-sm border border-red-700" variant="text">مسح العربة <IoIosRemoveCircleOutline /></Button>
              : null
            }
          <div className="flex gap-4 justify-between w-full">
            <div className={`flex flex-col gap-4 w-full ${items?.data?.products?.length >= 1 ? "" : "justify-center items-center"}`}>
                {
                  items?.data?.products?.length >= 1 ? items.data?.products.map((item, index) => {
                    return <CartItems key={index} item={item.product} itemTwo={item} />
                  }): (<div className="flex items-center gap-3 w-full justify-center">
                        <h3>لا يوجد منتجات في عربة التسوق </h3>
                        <Link to="/products"><Button className="flex items-center gap-1">تصفح المنتجات من هنا<MdYoutubeSearchedFor size={20} /></Button></Link>
                      </div>)
                }
            </div>
            <div className="flex flex-col gpa-3">
                {
                  items?.data?.products?.length >= 1 ?
                  <div>
                    <div className="sticky flex flex-col gap-3 p-4">
                        {couponState ? <span className="flex items-center gap-1 text-green-500">تم تفعيل الكوبون<MdCloudDone /></span> : null}
                        {couponState ? <span className="flex items-center gap-1 text-gray-600">نسبة خصم الكوبون: <span className="font-bold text-blue-500">%{discount.toFixed()}</span></span> : null}
                        <div className = {`flex justify-between ${couponState === true ? "border-[1.5px] border-green-500" : `border border-gray-300`}`}>
                          <input value={couponName} className='rounded-lg px-3 py-2 placeholder:text-sm' onChange={onChangeCouponName} placeholder='كود الخصم'></input>
                          <Button className='hover:!shadow-none hover:bg-opacity-90 rounded-none border border-gray-300' onClick={onSubmitCoupon} disabled={disabledState}>تطبيق</Button>
                        </div>
                        <h6 className="font-bold flex items-center gap-1">المجموع <BiDownArrowAlt /></h6>
                        <div className="flex gap-1 items-center border border-gray-200 rounded-lg p-2 justify-center">
                          <p className="!font-sans font-bold">{totalPrice?.toLocaleString() || 0}</p>
                          <p>جنيه</p>
                        </div>
                        <Link to={`/user/completeOrder/adress&&paymethod/${items?.data?._id}`} className="flex"><Button color="green" className="flex w-full items-center gap-1 text-sm hover:!shadow-none py-3 px-6 hover:bg-green-400 justify-center" >اتمام الشراء <GiConfirmed /></Button></Link> 
                    </div>
                      <div className="flex flex-col gap-3 p-4">
                        <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-300">
                          <p className="flex items-center gap-1 text-gray-600"> اجمالي عدد المنتجات في العربة <BiLeftArrowAlt /></p>
                          <span className="font-bold">{sum}</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-300">
                          <p className="flex items-center gap-1 text-gray-600">اجمالي عدد العناصر في العربة <BiLeftArrowAlt /></p>
                          <span className="font-bold">{itemsNum}</span>
                        </div>
                      </div>
                  </div>
                  : null
                }
            </div>
          </div>
              {/* <Paginations /> */}
        </div>
    </div>
  )
}

export default CartContainer
