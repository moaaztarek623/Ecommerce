import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import CategoryHeader from '../../Components/category/CategoryHeader'
import ProductDetailsContainer from '../../Components/Products/ProductDetailsContainer'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../hook/products/view-product-details-hook';

const ProdutDetails = () => {
  return (
    <div className="min-h-screen relative">
      <Navbarr/>
      <CategoryHeader />
      <ProductDetailsContainer />
      <Footer/>
    </div>
  )
}

export default ProdutDetails
