import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PreviewProfile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-between p-4 shadow-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-themeColor">
          De<span className="font-extrabold text-themeColor1">&gt;</span>lance
        </h1>
        <i className="fa-regular fa-circle-user text-2xl md:text-3xl"></i>
      </div>

      {/* Profile Section */}
      <div className='p-6 w-full mx-auto bg-white'>
        <div className='border border-themeColor rounded-lg p-4 mb-6 text-left'>
          <div className='flex items-center mb-4'>
            <img src='https://via.placeholder.com/200' alt='Profile Pic' className='rounded-full w-24 h-24' />
            <div className='ml-4'>
              <h2 className='text-xl font-semibold'>UserName</h2>
              <span className='flex items-center mt-2'>
                <i className="fa-solid fa-location-dot mr-2"></i>
                <p>Address</p>
              </span>
            </div>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Skill Title</h2>
            <p>Bio About</p>
          </div>
        </div>

        <div className='border border-themeColor rounded-lg p-4 mb-6 text-left'>
          <h2 className='text-xl font-semibold'>Skills</h2>
          <p>Skills in row</p>
        </div>

        <div className='border border-themeColor rounded-lg p-4 mb-6 text-left'>
          <h2 className='text-xl font-semibold'>Education</h2>
          <p>All educations separately</p>
        </div>

        <div className='flex justify-end'>
          <button className='bg-themeColor text-white rounded-xl py-2 px-4'>
            Submit Profile
          </button>
        </div>
      </div>

      {/* Footer Navigation Buttons */}
      <div className="flex justify-between w-full p-4 md:p-6 bg-white fixed bottom-0 left-0 right-0 shadow-md">
        <button
          onClick={handleBack}
          className="py-2 px-4 bg-gray-200 text-gray-700 font-bold rounded-lg disabled:opacity-50"
        >
          Back
        </button>
        <Link to="/previewProfile">
          <button
            className="py-2 px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1 hover:text-themeColor"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PreviewProfile;
