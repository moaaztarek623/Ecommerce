import { Button } from '@material-tailwind/react';
import React from 'react'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import EditRemove from '../Util/EditRemove';

const AdressItem = ({ title, description, dir }) => {
  return (
    <div className="flex gap-1 items-center text-sm border-b border-b-gray-200 last:!border-b-0 p-2 pb-3">
        <div>
          <p className='font-bold text-gray-900'>{title}: </p>
        </div>
        <div>
          <p className="text-blue-gray-900" style={{direction: `${dir}`}}>{description}</p>
        </div>
    </div>
  )
}

export default AdressItem
