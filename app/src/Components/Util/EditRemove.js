import { Button } from '@material-tailwind/react';
import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdOutlineRemoveShoppingCart, MdRemove } from 'react-icons/md';
import { Link } from 'react-router-dom';

const EditRemove = ({ className, remove, onClickEdit, onClickRemove, pathEdit }) => {
  return (
    <div className={"flex items-center justify-between"+" "+className}>
    <Link to={pathEdit}>
      <Button color='gray' className='flex items-center gap-1 hover:!shadow-none !p-2 text-sm' variant="text" onClick={onClickEdit}>تعديل<FaEdit className="text-sm"/></Button>
    </Link>
      {
        remove !== "no" ? <Button color='red' className='flex items-center gap-1 hover:!shadow-none !p-2 text-sm' variant="text" onClick={onClickRemove}>ازالة<MdOutlineRemoveShoppingCart className="text-sm"/></Button> : null
      }
    </div>
  )
}

export default EditRemove
