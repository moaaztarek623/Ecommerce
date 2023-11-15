import React from 'react'
import Navbarr from '../../Components/Util/Navbarr'
import Footer from '../../Components/Util/Footer'
import LoginContainer from '../../Components/Auth/LoginContainer'
import LoginHook from '../../hook/auth/login-hook';
import SpinnerContainer from '../../Components/Util/Spinner';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {

  const [email, password, handleEmail, handlePassword, loading, press, onSubmit] = LoginHook();

  return (
    <div className='min-h-screen relative'>
        {press ? loading ? <div className="flex h-full w-full justify-center items-center absolute top-0 left-0 bg-opacity-50 bg-black z-50"><SpinnerContainer /></div> : null : null}
        <Navbarr />
        <div className="flex flex-col items-center py-10 min-h-full">
            <LoginContainer email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} loading={loading} press={press} onSubmit={onSubmit} />
        </div>
        <Footer />
        <ToastContainer />
    </div>
  )
}

export default LoginPage
