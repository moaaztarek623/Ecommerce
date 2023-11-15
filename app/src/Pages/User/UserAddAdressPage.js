import React from 'react'
import Navbarr from '../../Components/Util/Navbarr';
import Footer from '../../Components/Util/Footer';
import UserAddAdress from '../../Components/User/UserAddAdress';

const UserAddAdressPage = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <UserAddAdress />
      <Footer />
    </div>
  )
}

export default UserAddAdressPage
