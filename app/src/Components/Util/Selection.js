import { AiOutlineCloseCircle } from "react-icons/ai"; 
import { BiCheckCircle } from "react-icons/bi"; 
import { BiNetworkChart } from "react-icons/bi"; 
import { MdAdminPanelSettings } from "react-icons/md"; 
import { GrUserAdmin } from "react-icons/gr"; 
import { FaUser } from "react-icons/fa"; 
import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { Button, Option, Select } from "@material-tailwind/react";

const Selection = ({ title, show, color, widthClass, linkTrue }) => {

  const [login, setlogin] = useState("")

  return (
    <div className={"w-[16rem] relative py-10"+" "+widthClass}>

        <p className='absolute right-0 text-sm text-gray-700 bottom-1/2 -translate-y-1/2 font-normal pb-2'>{title}</p>
        <div className="flex flex-row items-center gap-4">
        {
          show === "true" ?
          (<Select variant="standard">
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("user")}>مستخدم <FaUser /></Option>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("admin")}>ادمن <MdAdminPanelSettings /></Option>
          </Select>) : show === "false" ? 
          <Select variant="standard" color={color}>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("!")}>قيد التنفيذ <BiNetworkChart /></Option>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("!")}>تم الانتهاء <BiCheckCircle /></Option>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("!")}>الغاء<AiOutlineCloseCircle /></Option>
          </Select>
           : show === "addSubCategory" ? 
          <Select variant="standard" color={color}>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("!")}>التصنيف الاول</Option>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("!")}>التصنيف الثاني</Option>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("!")}>التصنيف الثالث</Option>
            <Option className="flex items-center justify-between bg-transparent" onClick={() => setlogin("!")}>التصنيف الرابع</Option>
          </Select>
           : null
        }
        {
          linkTrue === "true" ?
            <Link to={login === "user" ? "/user/allOrders" : login === "admin" ? "/admin/allProducts" : null} ><Button ripple={false} color={color} className="hover:!shadow-none" disabled={!login} >تأكيد</Button></Link>
          : null
        }
        </div>
    </div>
  )
}

export default Selection
