import React, { useState } from 'react'

const BrandCard = ({ img, title }) => {

  return (
    <div className="relative flex justify-center items-center h-[10rem] rounded-xl border-y border-y-gray-300" title={title}>
      <img src={img} alt='cat1' className={'w-24 scale-110 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'}></img>
    </div>
  )
}

export default BrandCard
