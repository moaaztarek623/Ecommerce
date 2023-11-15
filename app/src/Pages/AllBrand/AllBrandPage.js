import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import AllBrandContainer from '../../Components/Brand/AllBrandContainer'

const AllBrandPage = () => {
  return (
    <div className='min-h-screen relative'>
        <Navbarr/>
        <AllBrandContainer />
        <Footer/>
    </div>
  )
}

export default AllBrandPage
