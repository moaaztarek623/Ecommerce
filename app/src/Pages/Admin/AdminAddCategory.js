import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import AddCategory from '../../Components/Admin/AddCategory';

const AdminAddCategory = () => {
  return (
    <div className="min-h-screen relative">
        <Navbarr />
        <AddCategory />
        <Footer />
    </div>
  )
}

export default AdminAddCategory
