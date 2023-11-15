import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import AddCouponContainer from '../../Components/Admin/AddCouponContainer';

const AdminAddCouponPage = () => {
  return (
    <div className='min-h-screen relative'>
      <Navbarr />
      <AddCouponContainer />
      <Footer />
    </div>
  )
}

export default AdminAddCouponPage
