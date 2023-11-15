import React from 'react'
import PriceAndRemove from '../Util/PriceAndRemove';
import mobile from '../../images/mobile-02.png'

const UserOrderItem = ({ title, icon, path }) => {
  return  (
  <div className="flex justify-between border-b border-b-gray-200 p-4 last-of-type:!border-b-0">
      <div className="flex gap-3 w-full">
        <img className="max-w-[8rem] scale-90 object-center" src={mobile} alt="img" />
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="font-bold text-[1rem] text-gray-500">النوع</h1>
            <p className="text-sm">
              آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-[1rem] text-gray-500">الماركة: </h1>
            <p className="font-bold">Apple</p>
          </div>
          <div>
            <ul className="flex gap-2 items-center">
              <li className={"w-6 h-6 rounded-full border cursor-default border-gray-300 bg-white"} />
              <li className={"w-6 h-6 rounded-full border cursor-default border-gray-300 bg-red-500"} />
            </ul>
          </div>
          <div className="flex gap-2 flex-col">
            <h1 className="font-bold text-[1rem] text-gray-500">الكميه</h1>
            <div className="flex gap-1 items-center">
              <div className="rounded-md border border-gray-300 p-1 w-14 focus:border-gray-500 text-center" style={{ direction: "ltr !important" }}>
                {1}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PriceAndRemove details={"no"} remove={"no"} price={"18,000"} classDiv={"!justify-end"}/>
    </div>
  )
}

export default UserOrderItem
