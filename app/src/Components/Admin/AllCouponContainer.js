import React from 'react'
import AdressItem from '../User/AdressItem';
import EditRemove from '../Util/EditRemove';
import CouponCardHook from '../../hook/coupon/coupon-card-hook';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner } from '@material-tailwind/react';

const AllCouponContainer = ({ coupon, formatDate }) => {
    const [open, handleOpen, loadingRemove, handleRemoveCoupon] = CouponCardHook(coupon);
    const dateString = coupon.expire;

  return (
    <div className="flex border border-gray-300 rounded-xl p-4 justify-between items-start">
        <Dialog open={open} handler={handleOpen} size='xs'>
            <DialogHeader>حذف الكوبون</DialogHeader>
            <DialogBody divider>
                هل انت متاكد انك تريد حذف الكوبون: <span>{coupon.name}</span>
            </DialogBody>
            <DialogFooter className='flex justify-between items-center'>
            <Button variant="text" color="gray" onClick={handleOpen} className="mr-1">
              <span>الغاء</span>
            </Button>
            <Button type="submit" className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" onClick={() => handleRemoveCoupon(coupon._id)}>
                {loadingRemove === true ? <span className='flex gap-1 items-center'>جاري الحذف <Spinner color='gray'/></span> : <span>تاكيد الحذف</span>}
            </Button>
            </DialogFooter>
        </Dialog>
        <div className="flex flex-col gap-2">
            <AdressItem title={"اسم الكوبون"} description={coupon.name} />
            <AdressItem title={"تاريخ الانتهاء"} description={formatDate(dateString)} />
            <AdressItem title={"نسبة الخصم"} description={`%${coupon.discount}`} />
        </div>
        <EditRemove onClickRemove={handleOpen} pathEdit={`/admin/editCoupon/${coupon._id}`} />
    </div>
  )
}

export default AllCouponContainer
