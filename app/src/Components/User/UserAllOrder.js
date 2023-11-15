import React from 'react'
import SideBar from '../Util/SideBar';
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle'
import Paginations from '../Pagination/Paginations';
import UserOrderItem from './UserOrderItem';

const UserAllOrder = () => {
  return <div className="container mx-auto pb-[8rem]">
      <div className="flex gap-8">
        <SideBarUser actives={"1"} />
        <div className="flex flex-col gap-4 basis-full">
          <SubTitle title={"ادارة جميع الطلبات"} classDiv={"py-4 !px-0"} />
          <div className="flex flex-col gap-3">
            <div className = "flex flex-col gap-2 border border-gray-200 rounded-xl p-4 ">
              <span className="font-bold text-gray-600 text-sm">
                طلب رقم #<span className="text-gray-900 font-extrabold">
                  1432
                </span>
              </span>
              <UserOrderItem />
              <UserOrderItem />
              <span className="font-bold text-gray-600 text-sm">
               الحالة <span className="text-gray-900 font-extrabold "> قيد التنفيذ</span>
              </span>
            </div>
            <div className = "flex flex-col gap-2 border border-gray-200 rounded-xl p-4 ">
              <span className="font-bold text-gray-600 text-sm">
                طلب رقم #<span className="text-gray-900 font-extrabold">
                  1432
                </span>
              </span>
              <UserOrderItem />
              <UserOrderItem />
              <span className="font-bold text-gray-600 text-sm">
               الحالة <span className="text-gray-900 font-extrabold "> قيد التنفيذ</span>
              </span>
            </div>
            <div className = "flex flex-col gap-2 border border-gray-200 rounded-xl p-4 ">
              <span className="font-bold text-gray-600 text-sm">
                طلب رقم #<span className="text-gray-900 font-extrabold">
                  1432
                </span>
              </span>
              <UserOrderItem />
              <UserOrderItem />
              <span className="font-bold text-gray-600 text-sm">
               الحالة <span className="text-gray-900 font-extrabold "> قيد التنفيذ</span>
              </span>
            </div>
          </div>
          <Paginations classPagination={"pt-10"} />
        </div>
      </div>
    </div>;
}

export default UserAllOrder
