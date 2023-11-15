import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import UserEditAdress from '../../Components/User/UserEditAdress';

const UserEditAdressPage = () => {
  return (
    <div className="min-h-screen relative">
      <Navbarr />
      <UserEditAdress />
      <Footer />
    </div>
  )
}

export default UserEditAdressPage
