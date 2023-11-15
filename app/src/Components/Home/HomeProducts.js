import React, { useEffect, useState } from 'react'
import SubTitle from '../Util/SubTitle';
import { Spinner } from '@material-tailwind/react';
import ViewHomeProductHook from '../../hook/products/view-home-product-hook';
import CardProduct from '../Products/CardProduct';

const HomeProducts = ({ sub_title, items, loading }) => {
  return (
    <div className="container mx-auto px-4">
      <SubTitle title={sub_title} btnTitle="المزيد" path={"products"}/>
        <div className={"grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full"+" "+(loading === false ? "xl:grid-cols-4" : "xl:grid-cols-1")}>
            {
              loading === false ? (
                items ? 
                  items.slice(0, 4).map((item, index) => {
                  return (<CardProduct item={item} key={index} title={item.title} price={item.price} img={item.imageCover} path={`/products/${item._id}`} rateTrue={true} rate={item.ratingsQuantity} priceBefore={item.priceBefore} />)
                })
               : null) : (<div className='w-full flex items-center justify-center gap-1'>
                  <Spinner color='gray' className="h-8 w-8 text-gray-900" />
                  <span>جاري التحميل...</span>
               </div>)
            }
      </div>
    </div>
  )
}

export default HomeProducts
