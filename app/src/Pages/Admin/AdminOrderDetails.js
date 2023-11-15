import React from 'react'
import Footer from '../../Components/Util/Footer';
import Navbarr from '../../Components/Util/Navbarr';
import OrderDetails from '../../Components/Admin/OrderDetails';

const AdminOrderDetails = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <OrderDetails />
      <Footer />
    </div>
  )
}

export default AdminOrderDetails
