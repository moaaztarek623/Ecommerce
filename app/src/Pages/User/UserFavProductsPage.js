import React from 'react'
import Navbarr from '../../Components/Util/Navbarr';
import Footer from '../../Components/Util/Footer';
import UserFavPrducts from '../../Components/User/UserFavPrducts';
const UserFavProductsPage = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <UserFavPrducts />
      <Footer />
    </div>
  )
}

export default UserFavProductsPage
