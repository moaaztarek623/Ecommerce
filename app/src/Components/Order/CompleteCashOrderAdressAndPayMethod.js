import React from 'react'
import AsideDiscount from './AsideDiscount';
import SubTitle from '../Util/SubTitle';
import GetAllCartItemsHook from '../../hook/cart/get-all-cart-items-hook';

const CompleteCashOrderAdressAndPayMethod = () => {
  const [, , , , , , , , , , totalPrice] = GetAllCartItemsHook();
  return (
    <div className="container mx-auto flex flex-col items-center bg-gray-100 rounded-3xl rounded-ss-none rounded-se-none p-6">
      <SubTitle title="اكمال الطلب" classDiv={"!pb-4"} />
      <AsideDiscount totalPrice={totalPrice} />
    </div>
  )
}

export default CompleteCashOrderAdressAndPayMethod
