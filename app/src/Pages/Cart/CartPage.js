import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import CartContainer from '../../Components/Cart/CartContainer'

const CartPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbarr />
      <CartContainer />
      <Footer />
    </div>
  )
}

export default CartPage
