import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar-like header */}
      <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-start p-4 shadow-md">
        <h1 className="text-3xl font-bold text-themeColor">
          De<span className="font-extrabold text-themeColor1">&gt;</span>lance
        </h1>
      </div>

      {/* Google Sign-In and Email Sign-In */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl p-6 bg-white text-left">
          <div className="text-center mb-6">

            {/* Google Sign-In Button */}
            <button
              type="button"
              className="w-full py-2 px-4 bg-white text-themeColor font-bold rounded-full flex items-center justify-between border-2 hover:bg-gray-200"
            >
              <div>Continue with Gmail</div>
              <div className="w-10">
                <img src="../images/google.png" alt="Google" />
              </div>
            </button>
          </div>

          {/* Separator */}
          <div className="text-center mb-6">
            <span className="text-gray-600">or</span>
          </div>

          {/* Email and Password Form */}
          <form>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1 hover:text-themeColor"
            >
              Sign In
            </button>
            <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account? <span className="text-themeColor1 hover:underline"><Link to="/signUp">Sign up</Link></span>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
