import React, { useEffect, useState } from 'react';
import CategoryCard from '../category/CategoryCard';
import SubTitle from '../Util/SubTitle';
import Paginations from '../Pagination/Paginations';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../Redux/actions/categoryAction";
import { Spinner } from '@material-tailwind/react';
import AllCategoryHook from '../../hook/category/all-category-hook';

const AllCategory = () => {

  const [category, loading, numberOfPages, getPage] = AllCategoryHook()
    
  return (
    <div className = "container mx-auto">
        <SubTitle title={"كل التصنيفات"}/>
        <div className={"grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full py-10"+" "+(loading === false ? "xl:grid-cols-6" : "xl:grid-cols-1")}>
        {
            loading === false ? (
              category.data ? 
                category.data.slice(0, 8).map((item) => {
                  return (<CategoryCard img={item.image} title={item.name} />)
                })
               : <div>لا توجد تصنيفات</div>) : (<div className='w-full flex items-center justify-center'>
                  <Spinner color='gray' className="h-8 w-8 text-gray-900" />
               </div>)
            }
        </div>
        {
          numberOfPages > 1 ? (<Paginations classPagination={"pb-[8rem] py-10"} pageCount={numberOfPages} onPress={getPage} />) : null
        }
    </div>
  )
}

export default AllCategory
