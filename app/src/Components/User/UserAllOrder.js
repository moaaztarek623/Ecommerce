import React from 'react'
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle'
import Paginations from '../Pagination/Paginations';
import UserOrderItem from './UserOrderItem';
import GetAllOrderHook from '../../hook/order/get-all-order-hook';
import UserOrderBox from './UserOrderBox';

const UserAllOrder = () => {

  const [loading, allOrder, numOfOrders, paginate, orderData, onPress] = GetAllOrderHook();

  return (
      <div className="container mx-auto pb-[8rem]">
          <div className="flex gap-8">
            <SideBarUser actives={"1"} />
            <div className="flex flex-col gap-4 basis-full">
            <div className='flex items-center gap-3'>
              <SubTitle title={<><span>عدد الطلبات </span><span className='!font-body bg-yellow-400'>#{numOfOrders || 0}</span></>} classDiv={"!py-4 !px-0"} />
            </div>
              { paginate?.numberOfPages >= 2 ? <Paginations onPress={onPress} pageCount={paginate?.numberOfPages ? paginate?.numberOfPages : 0} /> : null }
              <div className="flex flex-col gap-8">
                  {orderData?.length >= 1 ?
                    orderData?.map((item, index) => {
                      return (
                          <UserOrderBox key={index} item={item} />
                      )
                    })
                  : <h3 className='w-full flex justify-center items-center font-bold text-red-500'>لا يوجد طلبات حتى الان</h3>}
              </div>
            </div>
          </div>
      </div>
    )
}

export default UserAllOrder
