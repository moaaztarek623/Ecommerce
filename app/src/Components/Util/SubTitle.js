import { MdExposurePlus1 } from "react-icons/md"; 
import { Button, IconButton } from '@material-tailwind/react'
import React from 'react'
import { Link } from "react-router-dom";

const SubTitle = ({title, btnTitle, path, classTitle, classDiv}) => {
  return (
    <div className={"w-full py-10 px-[2rem] flex justify-between items-center relative"+" "+classDiv}>
        <p className={'font-bold relative text-2xl text-gray-800'+" "+classTitle}>{title}</p>
        {
            btnTitle ? (
              <Link to={`/${path}`}>     
                  <Button variant="text" color='green' className='font-bold border border-green-500 flex gap-1 items-center flex-row-reverse ' >
                    <span color="green font-bold">+99</span>
                    {btnTitle}
                  </Button>
              </Link>
            ) : null
        }
    </div>
  )
}

export default SubTitle
