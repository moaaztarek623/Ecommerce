import { BsFacebook, BsGithub, BsLinkedin, BsPhone } from "react-icons/bs"; 
import { BsWhatsapp } from "react-icons/bs"; 
import React from 'react'
import { Typography } from "@material-tailwind/react";
import { GithubIcon } from './GithubIcon';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="mx-auto w-full max-w-7xl px-8" >
        <div className=" flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-8 md:flex-row md:justify-between ">
          <Typography variant="small" className="mb-4 text-center font-bold text-gray-700 md:mb-0">
             <span className='font-bold text-gray-700'> تم التصميم والبرمجه بواسطة المهندس  </span> &copy; {currentYear} <span><a href='google.com' className='cursor-pointer hover:underline underline-offset-2 hover:text-blue-500'> Moaaz Tarek </a></span>
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center items-center">
          <Typography as="a" href="tel:+201010950727" className="flex items-center gap-1 opacity-70 transition-opacity hover:opacity-100 flex-row-reverse" title="phone">
                  <BsPhone size={18} />
                  <span className="font-bold text-sm">01010950727</span>
            </Typography>
            <Typography as="a" href="#" className="opacity-70 transition-opacity hover:opacity-100" title="facebook">
                  <BsFacebook size={18} />
            </Typography>
            <Typography as="a" href="#" className="opacity-70 transition-opacity hover:opacity-100" title="github">
                  <BsGithub size={18} />
            </Typography>
            <Typography as="a" href="#" className="opacity-70 transition-opacity hover:opacity-100" title="whatsapp">
                  <BsWhatsapp size={18} />
            </Typography>
            <Typography as="a" href="#" className="opacity-70 transition-opacity hover:opacity-100" title="linkedin">
                  <BsLinkedin size={18} />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
