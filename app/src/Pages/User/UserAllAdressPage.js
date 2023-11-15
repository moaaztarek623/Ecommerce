import React from 'react'
import Navbarr from '../../Components/Util/Navbarr';
import Footer from '../../Components/Util/Footer';
import UserAllAdress from '../../Components/User/UserAllAdress';

const UserAllAdressPage = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <UserAllAdress />
      <Footer />
    </div>
  )
}

export default UserAllAdressPage
