import React from 'react'
import SideBar from '../../Components/Util/SideBar';
import Navbarr from '../../Components/Util/Navbarr';
import Footer from '../../Components/Util/Footer';
import AllOrdersContainer from '../../Components/Admin/AllOrdersContainer';

const AdminAllOrders = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <AllOrdersContainer />
      <Footer />
    </div>
  )
}

export default AdminAllOrders
