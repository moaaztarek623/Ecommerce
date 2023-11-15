import { Button } from '@material-tailwind/react';
import React from 'react'
import { GrCircleInformation } from 'react-icons/gr';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom"

const PriceAndRemove = ({ price, details, path, title, icon, remove, classDiv }) => {
  return (
        <div className={"flex flex-col justify-between items-center"+" "+classDiv}>
            {
              remove !== "no" ?
            <Button color='red' className='flex items-center gap-1 hover:!shadow-none !p-2 text-sm' variant="text">ازالة<MdOutlineRemoveShoppingCart className="text-sm"/></Button>
            : null
            }
            { details === "yes" ?
            (<Link to={path}> <Button className="w-fit flex gap-1 items-center hover:bg-gray-100 hover:!shadow-none bg-transparent border border-gray-300 shadow-none text-gray-600" color="white">{title}{icon}</Button> </Link>)
            : null
            }
            <div className="flex gap-1 items-center">
                <p className="!font-sans font-bold text-gray-800 text-[1.1rem]">{price}</p>
                <p>جنيه</p>
            </div>
        </div>
  )
}

export default PriceAndRemove
