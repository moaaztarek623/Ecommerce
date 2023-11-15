import React, { useEffect, useState } from 'react'

const NavigationColor = ({ classColor, mapCount }) => {
  const arr = [];

    for (let i = 0; i < mapCount; i++) {
      arr.push(i);
    }
    
    const arrayClass = (i) => {
       return classColor[i]
    }
    
  return (
    <ul className='flex gap-2'>
        {
          arr.length <= mapCount ?
            arr.map((item, index) => {
                return (
                    <li key={index} className={'w-6 h-6 rounded-full cursor-pointer border border-gray-300'+" "+arrayClass(index)}></li>
                )
            }) : null
        }
    </ul>
  )
}

export default NavigationColor
