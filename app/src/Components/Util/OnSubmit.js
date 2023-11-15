import { Button } from '@material-tailwind/react';
import React from 'react'

const OnSubmit = ({ onSubmit, title, className }) => {
  return (
    <Button type="submit" onClick={onSubmit} variant="filled" className={`hover:!shadow-none !shadow-none ${className}`} color="green" >{title}</Button>
  )
}

export default OnSubmit
