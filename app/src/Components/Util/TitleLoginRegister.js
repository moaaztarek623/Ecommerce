import { Typography } from '@material-tailwind/react'
import React from 'react'

const TitleLoginRegister = ({bigTitle, smallTitle}) => {
  return (
    <>
      <Typography variant='h4' color='blue-gray'>
        {bigTitle}
      </Typography>
      <Typography color='gray' className='mt-1 font-normal text-[0.9rem]'>
        {smallTitle}
      </Typography>
    </>
  )
}

export default TitleLoginRegister
