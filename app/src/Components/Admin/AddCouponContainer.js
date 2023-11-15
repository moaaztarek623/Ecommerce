import React from 'react'
import SideBar from '../Util/SideBar';
import SubTitle from '../Util/SubTitle';
import { Button, Spinner } from '@material-tailwind/react';
import AddCouponHook from '../../hook/coupon/add-coupon-hook';
import AllCouponContainer from './AllCouponContainer';

const AddCouponContainer = () => {

  const [press, loading, couponName, couponDate, couponNumber, onChangeCouponName, onChangeCouponDate, onChangeCouponNumber, onSubmit, allCoupon, formatDate] = AddCouponHook();
  return (
        <div className="container mx-auto pb-[8rem]">
        {press ? loading ? <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-opacity-30 bg-black z-50"><Spinner color='gray' className="h-8 w-8 text-gray-900" /></div> : null : null}
            <div className="flex gap-8">
                <SideBar actives={"7"} />
                <div className="flex flex-col gap-4 basis-full">
                    <SubTitle title={"اضافة كوبون جديد"} classDiv={"py-4 pb-6 !px-0"} />
                    <div className="flex flex-col gap-3">
                        <form onSubmit={onSubmit} method="POST" className = "flex flex-col gap-3">
                            <input value={couponName} onChange={onChangeCouponName} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder="محتوى الكوبون" />
                            <input value={couponDate} onChange={onChangeCouponDate} onFocus={(e)=>e.target.showPicker()} id="date" type='date' className="cursor-pointer flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" />
                            <input value={couponNumber} onChange={onChangeCouponNumber} type='number' className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder="نسبة خصم الكوبون" />
                            <Button type="submit" className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" >
                                اضافة
                            </Button>
                        </form>
                    </div>
                    <SubTitle title={"الكوبونات"} classDiv={"py-4 pb-6 !px-0"} />
                    <div className="grid grid-cols-2 gap-3">
                        {
                            allCoupon?.data?.length >= 1 ? allCoupon?.data?.map((item, index) => {
                                return <AllCouponContainer key={index} coupon={item} formatDate={formatDate} />
                            }) : <h3 className='text-gray-600'>لم يتم اضافة اي كوبون</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddCouponContainer
