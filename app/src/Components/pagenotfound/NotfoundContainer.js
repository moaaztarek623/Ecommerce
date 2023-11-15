import { Button } from '@material-tailwind/react'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotfoundContainer = () => {
  return (
    <section className="flex items-center min-h-full p-16 bg-gray-100 text-gray-100 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-700">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold text-gray-700 md:text-3xl">نعتذر, الصفحه غير موجوده</p>
                <p className="mt-4 mb-8 text-gray-500">لكن لا تقلق, يمكن ان تجد ما تبحث عنه في الصفحه الرئيسيه</p>
                <Link to="/" >
                <Button variant='text' color='gray' className="px-8 py-3 font-semibold rounded-lg bg-violet-400 text-gray-900 border mx-auto border-gray-300 flex items-center gap-1">الرجوع الى الصفحه الرئيسيه <FaHome style={{fontSize: "1rem"}}/></Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default NotfoundContainer
