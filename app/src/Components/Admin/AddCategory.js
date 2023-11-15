import { MdDeleteOutline } from "react-icons/md"; 
import React, { useEffect, useState } from 'react'
import SideBar from '../Util/SideBar';
import SubTitle from '../Util/SubTitle';
import { Button, Spinner } from '@material-tailwind/react';
import { BiCloudUpload } from 'react-icons/bi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategoryHook from "../../hook/category/add- category-hook";

const AddCategory = () => {

  const [hover, sethover] = useState("");

  const [name, img, imgState, loading, press, handleAddCategory, handleImageUpload, handleName, handleImgState, handleImgFile] = AddCategoryHook();

  return (
    <div className="container mx-auto pb-[8rem]">
    {press ? loading ? <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-opacity-30 bg-black z-50"><Spinner color='gray' className="h-8 w-8 text-gray-900" /></div> : null : null}
        <div className="flex gap-8">
          <SideBar actives={"4"} />
          <div className="flex flex-col gap-4 basis-full">
            <SubTitle title={"اضافة تصنيف"} classDiv={"py-4 pb-6 !px-0"} />
            <form onSubmit={handleAddCategory} className="flex flex-col gap-3" method="POST" encType="multipart/form-date">
              <div className="flex flex-col gap-3 items-center">
                  <label htmlFor='upload' onChange={handleImageUpload} onMouseEnter={() => sethover("hoverAnimation")} onMouseLeave={() => sethover("")} className="flex w-fit cursor-pointer items-center text-gray-600 font-bold text-sm flex-col-reverse pb-2">
                    <input id='upload' type="file" className="opacity-0 hidden" />

                    {imgState === false ?  (<div className="flex items-center flex-col gap-1 "><span> اختر صورة التصنيف </span> <BiCloudUpload className={hover} color="gray" size={80} /></div>) : (
                        <div className="w-full h-full p-2 rounded-lg overflow-hidden border border-gray-300"><img className='h-28 w-32 object-center' alt={"img"} src={img}></img></div>
                        )
                      }
                  </label>
                  {
                    imgState === true ? (
                      <Button color="red" className='!w-fit !p-2 !px-4 flex gap-1 items-center !text-sm' onClick={() => {handleImgState(); handleImgFile()}} variant='text'>حذف <MdDeleteOutline /></Button>
                    ) : null
                  }
              </div>
              <div className = "flex flex-col gap-3">
                <input value={name} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={handleName} placeholder="اسم التصنيف" />
                <Button type="submit" className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" disabled={!name}>
                  اضافة تصنيف 
                </Button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
  )
}

export default AddCategory
