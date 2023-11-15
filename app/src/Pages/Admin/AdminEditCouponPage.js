import React from 'react'
import Footer from '../../Components/Util/Footer'
import Navbarr from '../../Components/Util/Navbarr'
import EditCouponContainer from '../../Components/Admin/EditCouponContainer';

const AdminEditCouponPage = () => {
  return (
    <div className='min-h-screen relative'>
      <Navbarr />
      <EditCouponContainer />
      <Footer />
    </div>
  )
}

export default AdminEditCouponPage
