import React from 'react'
import SubTitle from '../Util/SubTitle';
import CartItems from './CartItems'
import AsideDiscount from './AsideDiscount';
import Paginations from '../Pagination/Paginations';

const CartContainer = () => {
  return (
    <div className="container mx-auto pb-[8rem] flex ">
        <div className="p-4 flex flex-col gap-4">
            <SubTitle title={"عربة التسوق"} classTitle={"!text-2xl"} classDiv={"!py-5"}/>
          <div className = "flex gap-4">
            <div className = "flex flex-col gap-4">
              <CartItems />
              <CartItems />
              <CartItems />
              <CartItems />
            </div>
            <AsideDiscount />
          </div>
              <Paginations />
        </div>
    </div>
  )
}

export default CartContainer
