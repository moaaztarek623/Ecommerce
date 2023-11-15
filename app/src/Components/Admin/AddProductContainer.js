import { TiDelete } from "react-icons/ti"; 
import { CgClose } from "react-icons/cg"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { Avatar, Button, Card, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Option, Select, Spinner, Tooltip, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi';
import SubTitle from '../Util/SubTitle';
import SideBar from '../Util/SideBar';
import MultiSelectComponents from "../Util/MultiSelectComponents";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MdDeleteOutline } from "react-icons/md";
import { SketchPicker } from 'react-color'
import { FaEdit } from "react-icons/fa";
import AddProductHook from "../../hook/products/add-product-hook";
import DialogImg from "../Util/DialogImg";

const AddProductContainer = () => {

  const [opens, setOpens] = React.useState(false);

  const handleOpens = (srcDialog) => {
    setOpens((cur) => !cur);
    setsrcDialog(srcDialog);
  };

  const [srcDialog, setsrcDialog] = useState("");

  const [handleName, handleDiscription, handleImgState, handleAddProduct, handleBrandSelect,
    handleColors, handleImageUpload, handleNumperOfProducts, handleOpen, handlePrice,
    handlePriceBefore, handleSelect, handleHover, handleImgs, handleActive, active, onSelectMultiSelect, multiselected,
    subcategoryOptions, brand, category, arrayColor, removeColor, removeImg, handleColor, color, imgState, imgUrls, hover,
    priceBefore, price, NumberOfProducts, open, description, name, loading, press, handleActiveBrand, activeBrand] = AddProductHook()

  return (
        <div className="container mx-auto pb-[8rem]">
          <DialogImg srcDialog={srcDialog} opens={opens} handleOpens={handleOpens} />
            {press ? loading ? <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-opacity-30 bg-black z-50"><Spinner color='gray' className="h-8 w-8 text-gray-900" /></div> : null : null}
            <div className="flex gap-8">
              <SideBar actives={"6"} />
              <div className="flex flex-col gap-4 basis-full">
                <SubTitle title={"اضافة منتج جديد"} classDiv={"py-4 pb-6 !px-0"} />
                <form onSubmit={handleAddProduct} className="flex flex-col gap-3" method="POST">
                  <div className="flex flex-col gap-3 items-center">
                      {imgState === true ? <span className="pt-4 font-bold text-gray-600">
                            تم اختيار {imgUrls.length} صور
                          </span> : null}
                    {imgState === true ?
                      <div className="w-fit h-full rounded-lg overflow-hidden border border-gray-300 flex gap-3 items-center flex-wrap">
                          {imgState === true ? imgUrls.map((imgUrl, index) => {
                              return (<div key={index} className="relative"><TiDelete onClick={() => removeImg(imgUrl)} color="red" className="cursor-pointer absolute top-2 z-50 left-2" size={20} /><img onClick={() => handleOpens(imgUrl)} loading="lazy" className="relative max-h-60 w-44 object-center border-r border-r-gray-300 first:border-r-transparent p-2 backdrop-brightness-50 brightness-50" alt={"img"} src={imgUrl} /></div>);
                          }) : null}
                      </div> : null }
                  {imgState === true ? 
                  <div className="flex items-center gap-3">
                    <label htmlFor="upload" onChange={handleImageUpload} onMouseEnter={() => handleHover("hoverAnimation")} onMouseLeave={() => handleHover("")} className="flex w-fit cursor-pointer items-center text-gray-600 font-bold text-sm flex-col-reverse">
                        <input id="upload" multiple type="file" className="opacity-0 hidden" />
                        {imgState === false ? <div className="flex items-center flex-col gap-1 ">
                              <span>
                                {" "}اختر صور المنتج{" "}
                              </span> <BiCloudUpload className={hover} color="gray" size={80} />
                            </div> : null}
                        {imgState === true ?
                          <span color="gray" className="hover:bg-gray-200 !w-fit !p-2 rounded-md !px-4 flex gap-1 items-center !text-sm" variant="text">
                                تعديل <FaEdit className="text-sm" />
                          </span> : null}   
                      </label>
                      {imgState === true ?
                          <Button color="red" className="!w-fit !p-2 !px-4 flex gap-1 items-center !text-sm" onClick={() => { handleImgState(false); handleImgs([]);}} variant="text">
                          حذف {imgUrls.length > 1 ? <span>الكل</span> : <span>الصورة</span>} <MdDeleteOutline />
                          </Button> : null}
                  </div> : null }
                  {imgState === false ?
                  <>
                        <label htmlFor="upload" onChange={handleImageUpload} onMouseEnter={() => handleHover("hoverAnimation")} onMouseLeave={() => handleHover("")} className="flex w-fit cursor-pointer items-center text-gray-600 font-bold text-sm flex-col-reverse">
                            <input id="upload" multiple type="file" className="opacity-0 hidden" />
                            {imgState === false ? <div className="flex items-center flex-col gap-1 ">
                                  <span>
                                    {" "}اختر صور المنتج{" "}
                                  </span> <BiCloudUpload className={hover} color="gray" size={80} />
                                </div> : null}
                            {imgState === true ?
                              <span color="gray" className="hover:bg-gray-200 !w-fit !p-2 rounded-md !px-4 flex gap-1 items-center !text-sm" variant="text">
                                    تعديل <FaEdit className="text-sm" />
                              </span> : null}   
                        </label>
                        {imgState === true ? <Button color="red" className="!w-fit !p-2 !px-4 flex gap-1 items-center !text-sm" onClick={() => { handleImgState(false); handleImgs([]);}} variant="text"> حذف الكل <MdDeleteOutline /> </Button>: null} 
                  </> : null}
                  </div>
                  <div className="flex flex-col gap-3">
                    <input className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder="اسم المنتج" onChange={handleName} value={name} />
                    <textarea placeholder="وصف المنتج" className="resize-none rounded-xl p-4 focus:border-gray-600 outline-none focus:outline-none border border-gray-200 w-full" value={description} onChange={(e) => handleDiscription(e.target.value)} />
                    <input type="number" value={priceBefore !== 0 ? priceBefore : ""} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder="السعر قبل الخصم" onChange={(e) => handlePriceBefore(e)} />
                    <input type="number" value={price !== 0 ? price : ""} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder="السعر بعد الخصم" onChange={(e) => handlePrice(e)} />
                    <input type="number" value={NumberOfProducts !== 0 ? NumberOfProducts : ""} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder="الكمية المتاحة" onChange={(e) => handleNumperOfProducts(e)} />
                    <div className={"w-[16rem] relative py-10 !w-full"}>
                      <p className="absolute right-0 text-sm text-gray-700 bottom-1/2 -translate-y-1/2 font-normal pb-2">
                        اختيار التصنيف
                      </p>
                      <div className="flex flex-row items-center gap-4">
                          <Select variant="standard" color="green">
                            {category.data ? category.data.map((item, index) => {
                                  return <Option className={"flex items-center justify-between bg-transparent" + " " + (active === index ? "bg-blue-gray-50" : active === -1 ? "" : "" )} key={item._id} onClick={() => {
                                        handleSelect(item._id)
                                        handleActive(index);
                                      }}>
                                      {item.name}
                                    </Option>;
                                }) : null}
                          </Select> 
                      </div>
                    </div>
                    <MultiSelectComponents options={subcategoryOptions} onSelect={onSelectMultiSelect} selectedValues={multiselected} />
                    <div className={"w-[16rem] relative py-10 !w-full"}>
                      <p className="absolute right-0 text-sm text-gray-700 bottom-1/2 -translate-y-1/2 font-normal pb-2">
                        اختيار الماركة
                      </p>
                      <div className="flex flex-row items-center gap-4">
                        <Select variant="standard" color="green">
                          {brand.data ? brand.data.map((item, index) => {
                                return <Option className={"flex items-center justify-between bg-transparent" + " " + (activeBrand === index ? "bg-blue-gray-50" : activeBrand === -1 ? "" : "" )} key={item._id} onClick={() => {
                                      handleBrandSelect(item._id);
                                      handleActiveBrand(index);
                                    }}>
                                    {item.name}
                                  </Option>;
                              }) : null}
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                    <p className="text-gray-600 font-bold text-lg">الالوان المتاحه</p>
                    <ul className="flex gap-2 items-center pb-2">
                      {arrayColor.length >= 1 ? arrayColor.map((color, index) => {
                            return <li key={index} onClick={() => removeColor(color)} className={"w-8 h-8 rounded-full border cursor-pointer border-gray-300"} style={{ backgroundColor: color }} />;
                          }) : null}
                      <Tooltip content="اضافة لون للمنتج" placement="top">
                        <button type="button" className={"w-8 h-8 rounded-full border cursor-pointer border-gray-300 flex justify-center items-center text-gray-600"} onClick={() => handleOpen("md")}>
                          <AiOutlinePlus />
                        </button>
                      </Tooltip>
                    </ul>
                    </div>
                    <Dialog open={open} size={"md"} handler={handleOpen}>
                      <DialogHeader className="justify-between flex items-center flex-row-reverse">
                        <Typography variant="h5" color="blue-gray">
                          اضافة لون للمنتج
                        </Typography>
                        <IconButton color="blue-gray" size="sm" variant="text" onClick={handleOpen}>
                          <CgClose size={20} />
                        </IconButton>
                      </DialogHeader>
                      <DialogBody divider className="flex items-center justify-center">
                        <SketchPicker width={400} color={color} onChange={colorUpdated => handleColor(colorUpdated)} />
                      </DialogBody>
                      <DialogFooter>
                        <Button variant="filled" color="green" className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" onClick={() => {
                            handleColors();
                          }}>
                          <span>تاكيد اختيار اللون</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                    <Button type="submit" className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green">
                      اضافة المنتج
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <ToastContainer />
          </div>
    );
}

export default AddProductContainer
