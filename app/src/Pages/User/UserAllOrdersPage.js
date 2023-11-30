import React from 'react'
import Navbarr from '../../Components/Util/Navbarr';
import Footer from '../../Components/Util/Footer';
import UserAllOrder from '../../Components/User/UserAllOrder';

const UserAllOrdersPage = () => {
  return (
    <div className="min-h-screen relative bg-gray-50">
      <Navbarr />
      <UserAllOrder />
      <Footer />
    </div>
  )
}

export default UserAllOrdersPage
