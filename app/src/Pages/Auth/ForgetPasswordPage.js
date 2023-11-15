import React from 'react';
import Navbarr from '../../Components/Util/Navbarr';
import Footer from '../../Components/Util/Footer';
import SpinnerContainer from '../../Components/Util/Spinner';
import { ToastContainer } from 'react-toastify';
import ForgetPasswordContainer from '../../Components/Auth/ForgetPasswordContainer';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';

const ForgetPasswordPage = () => {

  const [email, handleEmail, press, loading, onSubmit] = ForgetPasswordHook();

  return (
    <div className='min-h-screen relative'>
      {press ? loading ? <div className="flex h-full w-full justify-center items-center absolute top-0 left-0 bg-opacity-50 bg-black z-50"><SpinnerContainer /></div> : null : null}
      <Navbarr />
      <div className="flex flex-col items-center py-10 min-h-full">
        <ForgetPasswordContainer email={email} handleEmail={handleEmail} onSubmit={onSubmit} />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default ForgetPasswordPage
