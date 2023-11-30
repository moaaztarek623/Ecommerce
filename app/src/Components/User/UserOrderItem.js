import React from 'react'
import PriceAndRemove from '../Util/PriceAndRemove';
import mobile from '../../images/mobile-02.png'

const UserOrderItem = ({ item }) => {
  const itemProduct = item?.product;
  return  (
      // <div className="flex justify-between ">
      //     <div className="flex gap-3 w-full">
      //       <img className="max-w-[8rem] scale-90 object-center" src={mobile} alt="img" />
      //       <div className="flex flex-col gap-3">
      //         <div>
      //           <h1 className="font-bold text-[1rem] text-gray-500">النوع</h1>
      //           <p className="text-sm">
      //             آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
      //           </p>
      //         </div>
      //         <div className="flex gap-1 items-center">
      //           <h1 className="font-bold text-[1rem] text-gray-500">الماركة: </h1>
      //           <p className="font-bold">Apple</p>
      //         </div>
      //         <div>
      //           <ul className="flex gap-2 items-center">
      //             <li className={"w-6 h-6 rounded-full border cursor-default border-gray-300 bg-white"} />
      //             <li className={"w-6 h-6 rounded-full border cursor-default border-gray-300 bg-red-500"} />
      //           </ul>
      //         </div>
      //         <div className="flex gap-2 flex-col">
      //           <h1 className="font-bold text-[1rem] text-gray-500">الكميه</h1>
      //           <div className="flex gap-1 items-center">
      //             <div className="rounded-md border border-gray-300 p-1 w-14 focus:border-gray-500 text-center" style={{ direction: "ltr !important" }}>
      //               {1}
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     
      // </div>
      <div className='flex gap-3 border-b border-b-gray-300 p-4 last-of-type:!border-b-0'>
            <div className="flex w-fit justify-center">
              <img className='object-scale-down scale-90 w-24 h-36' src={`http://127.0.0.1:8000/products/${itemProduct.imageCover}`} alt='img'></img>
            </div>
          <div className='flex flex-col gap-3 px-4 w-full'>
            <div>
              <p className='font-bold text-[1rem] text-gray-500'>النوع:</p>
              <p className='text-sm'>{itemProduct?.title}</p>
            </div>
            <div>
              <p className='font-bold text-[1rem] text-gray-500'>الكميه:</p>
              <div className="rounded-md border border-gray-300 p-1 w-14 focus:border-gray-500 text-center font-bold" style={{ direction: "ltr !important" }}>
                {item?.count || 0}
              </div>
            </div>
            <div className = "flex gap-1 items-center">
              <p className='font-bold text-[1rem] text-gray-500'>متوسط التقييم: </p>
              <p className='font-bold text-yellow-700'>{itemProduct?.ratingsAverage ? itemProduct.ratingsAverage : 0} <span className='font-normal pr-1 text-gray-400 text-sm'>({itemProduct?.ratingsQuantity} تقييم)</span></p>
            </div>
              {
                itemProduct.color ?
                <div>
                  <ul className='flex gap-2 items-center'>
                    <li className={"w-6 h-6 rounded-full cursor-pointer border border-gray-300"} style={{backgroundColor: itemProduct?.color}}></li>
                  </ul>
                </div>
                : null
              }
          </div>
          <PriceAndRemove details={"no"} remove={"no"} price={item?.price?.toLocaleString()} classDiv={"!justify-end"} />
      </div>
  )
}

export default UserOrderItem
