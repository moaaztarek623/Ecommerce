import React from 'react'

const DiscountSection = ({title, img}) => {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-between rounded-lg p-4 bgDiscount px-20">
        <p className='font-bold text-white'>{title}</p>
        <img src={img} alt="discount" className='w-[14rem]'></img>
      </div>
    </div>
  )
}

export default DiscountSection
