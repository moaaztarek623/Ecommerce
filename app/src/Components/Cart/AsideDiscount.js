import { GiConfirmed } from "react-icons/gi"; 
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PayMethodComponents from "../Checkout/PayMethodComponents";

const AsideDiscount = () => {
    const [discount, setdiscount] = useState("");

    const [select, setselect] = useState(true);

  return (
    <div className = "flex flex-col gap-3 p-4">
      <div className = "flex border border-gray-300">
        <input className=' rounded-lg px-3 py-2 placeholder:text-sm' onChange={(e) => setdiscount(e.currentTarget.value)} placeholder='كود الخصم'></input>
        <Button className='hover:!shadow-none hover:bg-opacity-90 rounded-none border border-gray-300' disabled={!discount}>تطبيق</Button>
      </div>
        <div className="flex gap-1 items-center border border-gray-200 rounded-lg p-2 justify-center">
          <p className="!font-sans font-bold">30000</p>
          <p>جنيه</p>
        </div>
        <PayMethodComponents />
       <Link to="/paymethod" className="flex "><Button color="green" className="flex w-full items-center gap-1 text-sm hover:!shadow-none py-3 px-6 hover:bg-green-400 justify-center" >اتمام الشراء <GiConfirmed /></Button></Link>
    </div>
  )
}

export default AsideDiscount
