import React from 'react'
import Navbarr from '../../Components/Util/Navbarr';
import Footer from '../../Components/Util/Footer';
import UserProfile from '../../Components/User/UserProfile';

const UserProfilePage = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <UserProfile />
      <Footer />
    </div>
  )
}

export default UserProfilePage
