import { AiFillStar } from "react-icons/ai"; 
import React from 'react'


const RateTitle = ({ title, rateQty, rateResults, classTitle, reviewsCount }) => {
  return (
    <div className="flex gap-1 items-center">
      <h1 className={"font-bold"+" "+classTitle}>{title}</h1>
      <span className="flex items-center gap-1 flex-row-reverse text-yellow-700 font-bold text-xl"><span className="text-sm">{rateQty ? rateQty : '0'}</span> <AiFillStar className="text-yellow-700"/></span>
      {
        reviewsCount !== "no" ?
        (<span className="text-gray-500 text-xs">({rateResults ? rateResults : '0'}) تقييمات</span>)
        : null
      }
    </div>
  )
}

export default RateTitle
