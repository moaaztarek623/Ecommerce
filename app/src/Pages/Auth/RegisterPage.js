import React from "react";
import Navbarr from "../../Components/Util/Navbarr";
import Footer from "../../Components/Util/Footer";
import RegisterContainer from "../../Components/Auth/RegisterContainer";
import RegisterHook from '../../hook/auth/register-hook'
import SpinnerContainer from "../../Components/Util/Spinner";

const RegisterPage = () => {

  const [name, email, phone, password, passwordConfirm, handleName, handleEmail, handlePhone, handlePassword, handleConfirmPassword, onSubmit, loading, press] = RegisterHook();
  
  return (
    <div className="min-h-screen relative">
      {press ? loading ? <div className="flex h-full w-full justify-center items-center absolute top-0 left-0 bg-opacity-50 bg-black z-50"><SpinnerContainer /></div> : null : null}
      <Navbarr />
      <divs className="flex flex-col items-center py-10 min-h-full">
        <RegisterContainer name={name} email={email} phone={phone} password={password} passwordConfirm={passwordConfirm} onSubmit={onSubmit} handleName={handleName} loading={loading} press={press} handleEmail={handleEmail} handlePhone={handlePhone} handlePassword={handlePassword} handleConfirmPassword={handleConfirmPassword}/>
      </divs>
      <Footer />
    </div>
  );
};

export default RegisterPage;
