import React from 'react';
import { Link } from 'react-router-dom';

const SignUpQuestion = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header Section */}
      <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-between p-4 shadow-md">
        <h1 className="text-3xl font-bold text-themeColor">
          De<span className="font-extrabold text-themeColor1">&gt;</span>lance
        </h1>
        <i className="fa-regular fa-circle-user text-3xl"></i>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center flex-1 p-6 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-10">

        {/* Left Text Section */}
        <div className="lg:w-1/3 w-full text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready for your next big opportunity?
          </h1>

          {/* Steps */}
          <div className="mb-8 mt-10 lg:mt-20 space-y-4">
            <div className="flex items-center justify-center lg:justify-start">
              <i className="fa-regular fa-user text-xl mr-4 text-themeColor1"></i>
              <p className="inline">Answer a few questions and start building your profile</p>
            </div>
            <hr />
            <div className="flex items-center justify-center lg:justify-start">
              <i className="fa-solid fa-envelope-open-text text-xl mr-4 text-themeColor1"></i>
              <p className="inline">Apply for open roles or list services for clients to buy</p>
            </div>
            <hr />
            <div className="flex items-center justify-center lg:justify-start">
              <i className="fa-solid fa-circle-dollar-to-slot text-xl mr-4 text-themeColor1"></i>
              <p className="inline">Get paid safely and know we're there to help</p>
            </div>
            <hr />
          </div>

          {/* Button and Info */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
            <Link to="/tell-about-yourself">
              <button
                type="submit"
                className="py-2 px-6 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1 hover:text-themeColor w-full lg:w-auto"
              >
                Get Started
              </button>
            </Link>
            <div className="text-gray-500 text-sm text-center lg:text-left">
              <p>It only takes 5-10 minutes or you can edit it later.</p>
              <p>We'll save as you go.</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="../images/signUpQuestion.png"
            alt="Sign Up"
            className="max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpQuestion;
