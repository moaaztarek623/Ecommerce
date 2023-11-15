import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import AddBrand from '../../Components/Admin/AddBrand';

const AdminAddBrand = () => {
  return (
    <div className="min-h-screen relative">
        <Navbarr />
        <AddBrand />
        <Footer />
    </div>
  )
}

export default AdminAddBrand
