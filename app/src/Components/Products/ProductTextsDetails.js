import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { Button } from '@material-tailwind/react'
import React from 'react'
import AddProductToCartHook from "../../hook/cart/add-product-to-cart-hook";
import { useParams } from "react-router";

const ProductTextsDetails = ({ item, price, title, catName, brandName, priceAfterDiscount }) => {

    const { id } = useParams();
    
    const [chooseColor, colorIndex, onSubmit, loading] = AddProductToCartHook(id, item)
  return (
        <div className='flex flex-col w-3/4 justify-center p-3'>
            <div className='flex flex-col p-2'>
                <p className='font-bold text-gray-600 pb-1'>
                    عنوان المنتج: 
                </p>
                <div className='text-gray-800 text-[1rem]'>
                    {title}
                </div>
            </div>
            <div className='flex flex-col p-2'>
                <p className='font-bold text-gray-600 flex gap-1 items-center pb-1'>
                    <span className='font-bold'>التصنيف:</span> 
                    <span className='font-bold !text-gray-900 !text-lg'>{catName}</span>
                </p>
            </div>
            <div className='flex flex-col p-2'>
                <h1 className='font-bold text-gray-600 flex gap-1 items-center pb-1'>
                <span className='font-bold'>الماركة:</span> 
                <span className='font-bold !text-gray-900 !text-lg'>{brandName}</span>
                </h1>
            </div>
            <div className='flex flex-col p-2'>
                        <h1 className='font-bold text-gray-600 pb-1'>
                            الالوان المتاحه: 
                        </h1>
                <ul className="flex gap-2 items-center">
                {
                    item.availableColors?.length > 0 ? item.availableColors.map((color, index) => { return (
                        <li key={index} className={`w-8 h-8 rounded-full cursor-pointer ${index === colorIndex ? "border-[3px] border-blue-700" : "border-gray-300 border"}`} style={{ backgroundColor: color }} onClick={() => chooseColor(color, index)} />
                    )
                    }) : <p>لا يوجد هناك الوان للمنتج</p>
                }
                </ul>
            </div>
            <div className='flex flex-col p-2'>
                <p className='font-bold text-gray-600 flex gap-1 items-center pb-1'>
                    <span className='font-bold'>الكمية المتاحة:</span> 
                    <span className='font-bold !text-black !text-lg'>{item?.quantity}</span>
                </p>
            </div>
            <div className='flex flex-col p-2 pb-4'>
                <h1 className='font-bold text-gray-600 pb-1'>
                    وصف المنتج بالكامل: 
                </h1>
                <div className='text-gray-800 text-[1rem]'>
                    {item?.description}
                </div>
            </div>
            <div className='p-3 flex pt-4 items-center gap-2 border-t border-t-gray-100'>
                <Button onClick={onSubmit} color="green" className="flex items-center gap-1 text-sm hover:!shadow-none py-3 px-6 hover:bg-green-400">اضف للعربه<AiOutlineShoppingCart className="text-lg"/></Button>
                <p className=" text-sm rounded-lg  bg-gray-200 text-gray-800 py-3 px-6 flex items-center gap-1"> <span className="!font-sans font-bold" style={{fontFamily: "serif !important"}}>{item?.priceAfterDiscount >=1 ? <div className="flex items-center gap-2"><span className="line-through text-opacity-60 font-normal text-sm">{price}</span><span className="font-bold text-[1rem] !text-black">{item?.priceAfterDiscount?.toLocaleString()}</span></div> : <span>{price}</span>}</span><span>جنيه مصري </span></p>
            </div>
        </div> 
  )
}

export default ProductTextsDetails
