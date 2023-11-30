import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import AllProductsByBrandContainer from '../../Components/Products/AllProductsByBrandContainer';

const ProductsByBrandPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbarr />
      <AllProductsByBrandContainer />
      <Footer />
    </div>
  )
}

export default ProductsByBrandPage
