import React from 'react';

const SignUpBanner = () => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}
      className='flex items-center justify-between bg-themeColor rounded-xl mb-10 w-full min-h-[530px] sm:min-h-[400px] md:min-h-[310px]'
    >
      {/* Left Side Text */}
      <div className='text-left px-10 py-1'>
        <h2 className='text-themeColor1 text-3xl font-bold italic'>Join Today</h2>
        <p className='text-white text-5xl my-8 italic'>
          Freelance services at your <span className='text-themeColor1'>fingertips!</span>
        </p>
        <button className='px-4 py-2 rounded-sm text-md font-bold bg-themeColor1 text-white'>
          Sign Up
        </button>
      </div>

      {/* Right Side Image - Hidden on small screens */}
      <div className='hidden md:block w-80'>
        <img
          src='../images/1.png'
          alt='Sign Up Banner'
          className='object-cover w-full h-full rounded-xl'
        />
      </div>
    </div>
  );
};

export default SignUpBanner;
