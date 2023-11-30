import React from 'react'
import LoginSections from './LoginSections'

const LoginContainer = ({ email, password, handleEmail, handlePassword, loading, press, onSubmit }) => {
  return (
        <>
            <LoginSections email={email} password={password} handleEmail={handleEmail} handlePassword={handlePassword} loading={loading} press={press} onSubmit={onSubmit} />
        </>
  )
}

export default LoginContainer
