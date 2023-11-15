import React, { useEffect } from 'react'
import CategoryHeader from '../category/CategoryHeader'
import SearchCountHeader from '../Util/SearchCountHeader'
import AsideFilter from '../Util/AsideFilter'
import CardProduct from './CardProduct'
import Paginations from '../Pagination/Paginations'
import SpinnerContainer from '../Util/Spinner'
import ViewAllProductHook from '../../hook/products/view-all-products-hook'
import { getAllProductsPage, getAllProductsSearch } from '../../Redux/actions/productsAction';
import { useDispatch } from 'react-redux';
import ViewProductSearchHook from '../../hook/products/view-product-search-hook';

const PageProductsContainer = () => {

  const [items, loading, pagination, getProducts, onPress, results] = ViewProductSearchHook();

  console.log(pagination);

  const limit = 4;

  return (
    <div>
      <CategoryHeader />
      <div className="container min-h-screen mx-auto">
        <SearchCountHeader onClick={getProducts} searchCount={results} onPress={onPress} pageCount={pagination.numberOfPages} />
        <div className="flex flex-row items-start">
           <div className='basis-1/6'>
              <AsideFilter />
           </div>
           <div className='h-full'>
            <div className= "grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 basis-full justify-center w-full">
                  {
                    loading === false ? (
                     items ?
                        items.slice(0, limit).map((item, index) => {
                            return (<CardProduct item={item} addToCartButton={true} key={index} title={item.title} price={item.price} rate={item.ratingsAverage} img={item.imageCover} path={`/products/${item._id}`} rateTrue={true}/>)
                          }): <p>لا يوجد منتجات لعرضها</p>) : (<SpinnerContainer />)
                  }
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default PageProductsContainer
