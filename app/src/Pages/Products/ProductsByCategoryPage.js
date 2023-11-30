import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import AllProductsByCategoryContainer from '../../Components/Products/AllProductsByCategoryContainer';
import Footer from '../../Components/Util/Footer'

const ProductsByCategoryPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbarr />
      <AllProductsByCategoryContainer />
      <Footer />
    </div>
  )
}

export default ProductsByCategoryPage
