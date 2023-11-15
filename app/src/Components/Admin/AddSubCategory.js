import React, { useEffect, useState } from 'react'
import SideBar from '../Util/SideBar';
import SubTitle from '../Util/SubTitle';
import { Button, Option, Select, Spinner } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrandPage } from '../../Redux/actions/brandAction';
import { getAllCategoryPage, getHomeCategory } from '../../Redux/actions/categoryAction';
import { notify } from '../Util/notify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createSubcategory } from '../../Redux/actions/subcategoryAction'
import AddSubCategoryHook from '../../hook/subcategory/add-subcategory-hook';

const AddSubCategory = () => {

  const [name, loading, select, handleSelect, handleSubmit, category, subcategory, press, handleName] = AddSubCategoryHook()

  return (
    <div className="container mx-auto pb-[8rem]">
    {press ? loading ? <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-opacity-30 bg-black z-50"><Spinner color='gray' className="h-8 w-8 text-gray-900" /></div> : null : null}
        <div className="flex gap-8">
          <SideBar actives={"5"} />
          <div className="flex flex-col gap-4 basis-full">
            <SubTitle title={"اضافة تصنيف فرعي"} classDiv={"py-4 pb-6 !px-0"} />
            <div className="flex flex-col gap-3">
            <form onSubmit={handleSubmit} method="POST">
                <div className = "flex flex-col gap-3">
                  <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" value={name} onChange={handleName} placeholder="اسم التصنيف الفرعي" />
                  <div className={"w-[16rem] relative py-10 !w-full"}>
                      <p className='absolute right-0 text-sm text-gray-700 bottom-1/2 -translate-y-1/2 font-normal pb-2'>اختيار تصنيف فرعي</p>
                      <div className="flex flex-row items-center gap-4">
                        <Select variant="standard" color="green">
                          {
                            category.data ? category.data.map((item, index) => {
                              return (
                                <Option className="flex items-center justify-between bg-transparent" key={item._id} onClick={() => handleSelect(item._id)} >{item.name}</Option>
                              )
                            })  : null
                          }
                        </Select>
                      </div>
                  </div>
                  <Button type="submit" className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" >
                    اضافة تصنيف فرعي
                  </Button>
                </div>
            </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
  )
}

export default AddSubCategory
