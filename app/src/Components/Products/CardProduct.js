import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { AiTwotoneStar } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, Typography, IconButton, Button, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom"
import EditRemove from "../Util/EditRemove";
import { useDispatch, useSelector } from 'react-redux';
import { addProductToWishList, gitAllProductWishList, removeProductFromWishList } from '../../Redux/actions/wishAction'
import {notify} from '../Util/notify'

const CardProduct = ({ price, rate, img, path, rateTrue, chil, title, addToCartButton, pointer, onClickEdit, onClickRemove, pathEdit, item }) => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    
    const [favProd, setFavProd] = useState([]);

    const res = useSelector(state => state.wishReducer.allWishList);

    let fav = favProd.some(favi => favi === item._id);

    const [isFav, setisFav] = useState(fav);

    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const git = async () => {
            setLoading(true)
            await dispatch(gitAllProductWishList())
            setLoading(false)
        }
        git();
    }, [toggle]);

    useEffect(() => {
        if (loading === false) {
            if (res.data.length >= 1) {
                setFavProd(res.data.map(item => item._id))
            } else{
                setFavProd([])
            }
        }
    }, [loading])

    useEffect(() => {
        setisFav(favProd.some(favi => favi === item._id))
    }, [favProd])

    const handleToggle = () => {
        console.log(favProd);
        if (isFav) {
            handleAddProductToWishList();
            
        }else {

            handleRemoveProductFromWishList();
        }
        setToggle(!toggle)
    }
    
    useEffect(() => {
        if (isFav) {
            setToggle(true);
        }else {
            setToggle(false);
        }
    }, [isFav])


  const [loadingAdd, setLoadingAdd] = useState(true);

  const [loadingRemove, setLoadingRemove] = useState(true);

  const handleAddProductToWishList = async () => {
    localStorage.setItem("favProductsLength", res?.data?.length-1);
    setLoadingRemove(true)
    await dispatch(removeProductFromWishList(item._id))
    setLoadingRemove(false)
  };

  const handleRemoveProductFromWishList = async () => {
    localStorage.setItem("favProductsLength", res?.data?.length+1);
    setLoadingAdd(true)
    await dispatch(addProductToWishList({
        productId: item._id
    }));
    setLoadingAdd(false)
  };

  const resAdd = useSelector(state => state.wishReducer.addToWishList);

  useEffect(() => {
    if (loadingAdd === false) {
        if(resAdd)
        console.log(resAdd);
        if (resAdd && resAdd.status === 200) {
            notify("تمت اضافة المنتج لقائمة المفضلات", "success");
        }
    }
  }, [loadingAdd]);

  const resRemove = useSelector(state => state.wishReducer.removeFromWishList);

  useEffect(() => {
    if (loadingRemove === false) {
        if(resRemove)
        console.log(resRemove);
        if (resRemove && resRemove.status === "success") {
            notify("تم حذف المنتج من المفضلات", "success");
        }
    }
  }, [loadingRemove])
    
  return (
    <Card className="w-full max-w-[30rem] shadowCards flex flex-col gap-2 p-2 justify-between" dir="rtl">
            <CardHeader floated={false} color="blue-gray" className="!bg-transparent !shadow-none" >
                <div className="flex justify-end items-center w-full absolute z-50"><Chip value="جديد" className="w-fit bg-[#36fa88] text-white">جديد</Chip></div>
                {/* <div className="flex justify-end items-center w-full"><Chip value="الاكثر مبيعا" className="w-fit bg-[#fa7e36] text-white"></Chip></div> */}
                { chil === "moaaz" ? <EditRemove className={"pb-2"} pathEdit={pathEdit} onClickEdit={onClickEdit} onClickRemove={onClickRemove} /> : null }
                <Link to={path} >
                    <img src={img} className="h-60 w-full scale-90 object-contain object-center hover:scale-100 cursor-pointer" alt="laptop" />
                </Link>
                <div className = "flex w-full items-center pb-2 justify-end">
                    {rateTrue === true ?  (
                    <IconButton onClick={handleToggle} size="sm" color="red" variant="text" className="rounded-full" >
                        {toggle === false ? (<AiOutlineHeart className="text-3xl" color="gray" />) : (<AiFillHeart className="text-3xl" />)}
                    </IconButton> ) : null
                    }
                </div>
            </CardHeader>
            <div className="flex items-center text-ellipsis overflow-hidden !p-2">
                <Typography className="pb-2 font-bold text-gray-900">
                    {title}
                </Typography>
            </div>
            <div>
                <div className="flex items-center justify-between !p-2">
                    <Typography color="blue-gray" className="text-yellow-700 flex items-center gap-1 font-extrabold">
                    <AiTwotoneStar className="text-yellow-700 text-2xl"/>
                        {rate}
                    </Typography>
                    <Typography variant="h5" color="gray" className="font-bold text-black flex items-center gap-1 flex-row-reverse">
                        <span className="text-xs text-gray-600">ج.م</span> {price.toLocaleString()}
                    </Typography>                    
                </div>
            </div>
            {addToCartButton === true ?
            <div className="p-2">
                <Button color="green" className="flex items-center gap-1 text-sm hover:!shadow-none py-3 px-6 hover:bg-green-400 w-full justify-center">اضف للعربه<AiOutlineShoppingCart className="text-lg"/></Button>
            </div> : null}
  </Card>
  )
}

export default CardProduct
