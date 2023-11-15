import React from 'react'
import NotfoundContainer from '../../Components/pagenotfound/NotfoundContainer'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'

const PageNotFound = () => {
  return (
    <div className='min-h-screen relative'>
      <Navbarr/>
      <NotfoundContainer/>
      <Footer/>
    </div>
  )
}

export default PageNotFound
