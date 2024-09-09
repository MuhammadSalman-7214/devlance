import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='border-b border-3 border-grey-600 shadow-md py-4 bg-white'>
        <div className='lg:mx-110 mx-2 flex justify-between'>
            <div>
                <h1 className='text-3xl font-bold text-themeColor'>
                    De<span className='font-extrabold text-themeColor1'>&gt;</span>lance
                </h1>
            </div>
            <div className='flex gap-2'>
                <Link to="/signIn"><p className='px-3 py-1 font-semibold text-gray-600'>Sign in</p></Link>
                <Link to="/signUpMenu"><p className='border border-themeColor1 px-4 py-1 font-semibold rounded-lg text-gray-600'>Register</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
