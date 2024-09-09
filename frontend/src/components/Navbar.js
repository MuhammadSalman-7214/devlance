import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b border-3 border-grey-600 py-4 bg-white'>
        <div className='lg:mx-110 flex justify-between'>
            <div>
                <h1 className='text-3xl font-bold text-themeColor'>
                    De<span className='font-extrabold text-themeColor1'>&gt;</span>lance
                </h1>
            </div>
            <div className='flex gap-2'>
                <p className='px-3 py-1 font-semibold text-gray-600'>Sign in</p>
                <p className='border border-themeColor1 px-4 py-1 font-semibold rounded-lg text-gray-600'>Register</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
