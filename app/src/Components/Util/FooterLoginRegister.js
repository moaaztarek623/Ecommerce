import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterLoginRegister = ({not, nameLink, path, className}) => {
  return (
    <>
        <Typography color="gray" className={`mt-4 text-center font-normal ${className}`}>
            {not}
            <Link to={path} className="font-bold text-gray-900 text-sm transition-colors hover:text-blue-700 px-1 hover:underline hover:underline-offset-4">
                {nameLink}
            </Link>
        </Typography>
    </>
  )
}

export default FooterLoginRegister
