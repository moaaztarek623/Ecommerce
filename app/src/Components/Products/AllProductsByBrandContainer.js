import React from 'react'
import { useParams } from 'react-router';
import ViewAllProductsByBrandHook from '../../hook/products/view-all-products-by-brand-hook';
import Paginations from '../Pagination/Paginations';
import CardProduct from './CardProduct';
import { Spinner } from '@material-tailwind/react';

const AllProductsByBrandContainer = () => {
    const limit = 2;

    const { id } = useParams();

    const [items, loading, pagination, onPress, brand] = ViewAllProductsByBrandHook(id);
  return (
    <div className="py-8">
        <div className="container min-h-screen mx-auto">
            <h1 className='text-lg pb-3'>جميع المنتجات لماركة: <span className='font-bold'>{brand?.data?.name}</span></h1>
            {pagination.numberOfPages > 1 ? <Paginations onPress={onPress} pageCount={pagination.numberOfPages} classPagination={'pb-4'} /> : null}
            <div className='h-full'>
                <div className= {`grid gap-4 ${items.length >= 1 ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"} basis-full justify-center w-full`}>
                    {
                        loading === false ? (
                            items.length >= 1 ?
                                items.slice(0, limit).map((item, index) => {
                                    return (<CardProduct item={item} addToCartButton={true} key={index} title={item.title} price={item.price} rate={item.ratingsAverage} img={item.imageCover} path={`/products/${item._id}`} rateTrue={true}/>)
                                }): <div className='flex items-center justify-center font-bold text-red-600'>لا يوجد منتجات لعرضها</div>) : (
                                        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-opacity-30 bg-black z-50"><Spinner color='gray' className="h-8 w-8 text-gray-900" /></div>
                                    )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProductsByBrandContainer;
