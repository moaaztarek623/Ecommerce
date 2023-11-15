import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import PageProductsContainer from '../../Components/Products/PageProductsContainer'

const ProductsPage = () => {
  return (
    <div className="min-h-screen relative pb-[4rem]">
        <Navbarr />
        <PageProductsContainer />
        <Footer />
    </div>
  )
}

export default ProductsPage
