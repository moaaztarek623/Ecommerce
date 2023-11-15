import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import AddSubCategory from '../../Components/Admin/AddSubCategory';

const AdminAddSubCategory = () => {
  return (
    <div className="min-h-screen relative">
        <Navbarr />
        <AddSubCategory />
        <Footer />
    </div>
  )
}

export default AdminAddSubCategory
