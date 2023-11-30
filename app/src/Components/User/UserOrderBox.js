import React from "react";
import UserOrderItem from "./UserOrderItem";
import PriceAndRemove from "../Util/PriceAndRemove";

const UserOrderBox = ({ item }) => {

  return (
    <div className="flex flex-col gap-2 border rounded-xl p-4 bg-white">
      <div className="flex items-center gap-3">
        <span className="font-bold text-gray-600 text-sm">
            <span>طلب رقم</span>
            <span className="!font-body bg-yellow-400 text-black font-bold">#{item.id}</span>
        </span>
        <span className="font-bold text-gray-600 text-sm">
            <span>عدد المنتجات </span>
            <span className="!font-body bg-yellow-400 text-black font-bold">#{item.cartItems?.length}</span>
        </span>
        <span className="font-bold text-gray-600 text-sm">
            <span>تاريخ الطلب </span>
            <span className="!font-body bg-yellow-400 text-black font-bold">{item.createdAt.match(/\d{4}-\d{2}-\d{2}/)}</span>
        </span>
      </div>
        {
            item.cartItems?.map((item_2, index_2) => {
                return <UserOrderItem key={index_2} item={item_2} />;
            })
        }
      <div className="flex items-center gap-3">
        <span className="font-bold text-gray-600 text-sm flex items-center gap-1">
            طريقة الدفع:
            <span className="text-gray-900 font-extrabold ">{item.paymentMethodType === "cash" ? "كاش" : "اونلاين (credit card)"}</span>
        </span>
        <span className="font-bold text-gray-600 text-sm flex items-center gap-1">
            حالة الدفع:
            <span className="text-gray-900 font-extrabold ">{item.isPaid === false ? "لم يتم الدفع" : "تم الدفع"}</span>
        </span>
        <span className="font-bold text-gray-600 text-sm flex items-center gap-1">
            حالة التوصيل:
            <span className="text-gray-900 font-extrabold ">{item.isDelivered === true ? 'تم التوصيل' : ' لم يتم التوصيل'}</span>
        </span>
        <span className="font-bold text-gray-600 text-sm flex items-center gap-1">
            اجمالي سعر الطلب:
            <span className="text-gray-900 font-extrabold ">{item?.totalOrderPrice?.toLocaleString()}</span>
        </span>
      </div>
    </div>
  );
};

export default UserOrderBox;
