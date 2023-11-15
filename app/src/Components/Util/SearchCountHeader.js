import { BiSortDown } from "react-icons/bi"; 
import React, { useState } from 'react';
import 'react-dropdown/style.css';
import Paginations from "../Pagination/Paginations";
import UnopDropdown from "unop-react-dropdown";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const SearchCountHeader = ({ searchCount, pageCount, onPress, onClick }) => {

  const clickMenu = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
    console.log(key);
  }

  const handler = () => {

  }

  const arrayOptions = [
    {title: 'بدون ترتيب'},
    {title: 'الاعلى سعر'},
    {title: 'الاقل سعر'},
    {title: 'الاكثر مبيعا'},
    {title: 'الاقل مبيعا'},
    {title: 'الاعلى تقييما'},
    {title: 'الاقل تقييما'},
  ]

  const [active, setActive] = useState(0);

  return (
    <div className='flex justify-between relative py-5 items-center'>
      <div><h1 className='font-bold text-gray-600 text-xl'>{searchCount} نتيجة بحث...</h1></div>
      <Paginations classPagination={"py-4"} onPress={onPress} pageCount={pageCount} />
        <Menu allowHover={true} >
          <MenuHandler>
            <button className={'flex gap-1 text-gray-600 font-bold items-center hover:text-gray-900'} >الترتيب حسب <BiSortDown /></button>
          </MenuHandler>
          <MenuList>
            {arrayOptions.map((item, index) => {
              return (<MenuItem className={`${active === index ? "bg-blue-gray-50 text-blue-gray-900 bg-opacity-80" : active === -1 ? "" : "" }`} onClick={() => {clickMenu(item.title);setActive(index)}}>{item.title}</MenuItem>)
            })}
          </MenuList>
        </Menu>
    </div>
  )
}

export default SearchCountHeader
