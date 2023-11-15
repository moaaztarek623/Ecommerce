import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { BiCart } from "react-icons/bi"; 
import { Button, Chip, Spinner, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import NavigationColor from "../Util/NavigationColor";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/products/view-product-details-hook";

const ProductTextsDetails = ({ item, price, title, catName, brandName}) => {

    // const { id } = useParams();

    // const [idPage, setidPage] = useState(id)

    // useEffect(() => {
    //     setidPage(id)
    // }, [id])

    // window.onload =() =>{
    //     setidPage(id)
    // }

    // const [item, catItem, brandItem, price, loadingProduct, loadingCat, loadingBrand, productLikeItem, catName, brandName, cat, brand] = ViewProductDetailsHook(idPage);

    // console.log([item, catItem, brandItem, price, loadingProduct, loadingCat, loadingBrand, productLikeItem]);
    
  return (
    <>

    <div className='flex flex-col w-3/4 justify-center'>
        <div className='flex flex-col p-3'>
            <h1 className='font-bold text-gray-600 pb-1'>
                عنوان المنتج: 
            </h1>
            <div className='text-gray-800 text-[1rem]'>
                {title}
            </div>
        </div>
        <div className='flex flex-col p-3'>
            <h1 className='font-bold text-gray-600 pb-1'>
                التصنيف:  
            </h1>
            <div className='text-gray-800 text-[1rem]'>
                {catName}
            </div>
        </div>
        <div className='flex flex-col p-3'>
            <h1 className='font-bold text-gray-600 flex gap-1 items-center pb-1'>
            <span className='font-bold'>الماركة:</span> 
            <span className='font-bold !text-gray-900 !text-lg'>{brandName}</span>
            </h1>
        </div>
        <div className='flex flex-col p-3'>
            <h1 className='font-bold text-gray-600 pb-1'>
                الالوان المتاحه: 
            </h1>
            <ul className="flex gap-2 items-center pb-2">
            {
                item.availableColors ? item.availableColors.map((color, index) => { return (
                    <li key={index} className={"w-8 h-8 rounded-full border cursor-pointer border-gray-300"} style={{ backgroundColor: color }} />
                )
                }) : null
            }
            </ul>
        </div>

        <div className='flex flex-col p-3'>
            <h1 className='font-bold text-gray-600 pb-1'>
                المميزات: 
            </h1>
            <div className='text-gray-800 text-[1rem]'>
                {item.description}
            </div>
        </div>
        <div className='p-3 flex items-center gap-2 '>
            <Button color="green" className="flex items-center gap-1 text-sm hover:!shadow-none py-3 px-6 hover:bg-green-400">اضف للعربه<AiOutlineShoppingCart className="text-lg"/></Button>
            <p className=" text-sm rounded-lg  bg-gray-200 text-gray-800 py-3 px-6 flex items-center gap-1"> <span className="!font-sans font-bold" style={{fontFamily: "serif !important"}}>{price}</span><span className="">جنيه مصري </span></p>
        </div>
    </div> 
    </>
  )
}

export default ProductTextsDetails
