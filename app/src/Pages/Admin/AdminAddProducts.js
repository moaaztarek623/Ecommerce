import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import AddProductContainer from '../../Components/Admin/AddProductContainer'

const AdminAddProducts = () => {
  return (
    <div className="min-h-screen relative">
        <Navbarr />
        <AddProductContainer />
        <Footer />
    </div>
  )
}

export default AdminAddProducts
