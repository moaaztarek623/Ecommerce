import React, { useEffect, useState } from 'react'
import SideBar from '../Util/SideBar'
import SubTitle from '../Util/SubTitle'
import CardProduct from './CardProduct';
import Paginations from '../Pagination/Paginations';
import ViewAdminAllProductHook from '../../hook/admin/view-admin-products-hook';
import SpinnerContainer from '../Util/Spinner'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsPage , deleteProduct} from '../../Redux/actions/productsAction';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Spinner } from "@material-tailwind/react";
import {notify} from '../Util/notify'
import { ToastContainer } from 'react-toastify';

const AllProductsContainer = () => {

  const [open, setOpen] = React.useState(false);

  const [titleRemove, settitleRemove] = useState("");

  const [idRemove, setIdRemove] = useState("");

  const [index, setindex] = useState(0);

  const [loadingRemove, setloadingRemove] = useState(false);

  const [param, setparam] = useState(0)
 
  const handleOpen = () => setOpen(!open);

    const dispatch = useDispatch();

    const [items, loading, pagination] = ViewAdminAllProductHook();

    useEffect(() => {
        dispatch(getAllProductsPage(4, 1))
      }, [])
      
    const onPress = async (page) => {
      await dispatch(getAllProductsPage(4, page))
    }

    const res = useSelector(state => state.allProducts.deleteProduct)

    const handleRemoveProduct = async () => {
      setloadingRemove(true);
      await dispatch(deleteProduct(idRemove));
      setTimeout(() => {
        setloadingRemove(false);
      }, 2000);      
    }
    
    useEffect(() => {
      if (loadingRemove === false) {
        if (res === "") {
          const get = async () => {await dispatch(getAllProductsPage(4, 1));};
          get();
          notify("تم الحذف بنجاح", "success");
          handleOpen();
          setparam(0);
      }
    }
    }, [loadingRemove])

  return (
    <div className='container mx-auto pb-[8rem]'>
      <Dialog open={open} handler={handleOpen} size='xs'>
        <DialogHeader>حذف المنتج</DialogHeader>
        <DialogBody divider>
          هل انت متاكد انك تريد حذف المنتج: <span className='font-bold'>{titleRemove}</span>
        </DialogBody>
        <DialogFooter className='flex justify-between items-center'>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>الغاء</span>
          </Button>
          <Button type="submit" className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" onClick={() => handleRemoveProduct()}>
              {loadingRemove === true ? <span className='flex gap-1 items-center'>جاري الحذف <Spinner color='gray'/></span> : <span>تاكيد الحذف</span>}
          </Button>
        </DialogFooter>
      </Dialog>
        <div className='flex gap-8'>
            <SideBar actives={"1"} />
            <div className='flex flex-col gap-4'>
                <SubTitle title={"ادارة جميع المنتجات"} classDiv={"py-4 px-0"}/>
                 <Paginations classPagination={"py-0"} pageCount={pagination.numberOfPages} onPress={onPress} param={param} />
                <div className= "grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 basis-full justify-center w-full">
                    {loading === false ? items ? items.map((item, index) => {
                        return (<CardProduct item={item} pathEdit={`/admin/editProduct/${item._id}`} onClickRemove={() => {handleOpen(); settitleRemove(item.title); setIdRemove(item._id); setindex(index)}} key={index} pointer={false} title={item.title} price={item.price} rate={item.ratingsAverage} img={item.imageCover} rateTrue={false} chil={"moaaz"} path={`/products/${item._id}`} />)
                    }) : <h1>لم يتم اضافة منتجات </h1> : <SpinnerContainer />}
                 </div>
            </div>
        </div>
      <ToastContainer />
    </div>
  )
}

export default AllProductsContainer
