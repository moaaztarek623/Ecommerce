import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import CompleteCashOrderAdressAndPayMethod from '../../Components/Order/CompleteCashOrderAdressAndPayMethod';

const CompleteCashOrderAdressAndPayMethodPage = () => {
  return (
    <div className='min-h-screen relative'>
      <Navbarr />
      <CompleteCashOrderAdressAndPayMethod />
      <Footer />
    </div>
  )
}

export default CompleteCashOrderAdressAndPayMethodPage
