import React, { useEffect, useState } from 'react'
import ProductsGallery from './ProductsGallery'
import ProductTextsDetails from './ProductTextsDetails'
import RateContainer from '../Rate/RateContainer'
import HomeProducts from '../Home/HomeProducts'
import ViewProductDetailsHook from '../../hook/products/view-product-details-hook';
import { useParams } from 'react-router';

const ProductDetailsContainer = () => {
  
  const { id } = useParams();

  const [idPage, setidPage] = useState(id);

    useEffect(() => {
      setidPage(id)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id])
  
  const [item, catItem, brandItem, price, loadingProduct, loadingCat, loadingBrand, productLikeItem, catName, brandName, cat, brand] = ViewProductDetailsHook(idPage);

  return (
    <div className = "container mx-auto">
        <div className='flex gap-8 p-6'>
            <ProductsGallery  />
            <ProductTextsDetails price={price} item={item} title={item.title} catName={catName} brandName={brandName} />
        </div>
        <RateContainer rateResults={item.ratingsQuantity} rateQty={item.ratingsAverage} />
        <div className='pb-[8rem]'>
            <HomeProducts sub_title={"منتجات قد تعجبك"} items={productLikeItem} loading={loadingProduct} />
        </div>
    </div>
  )
}

export default ProductDetailsContainer
