import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryOptions = response.data.map(country => ({
          value: country.cca2.toLowerCase(),
          label: country.name.common
        }));
        setCountries(countryOptions);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar-like header */}
      <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-start p-4 shadow-md">
        <h1 className="text-3xl font-bold text-themeColor">
          De<span className="font-extrabold text-themeColor1">&gt;</span>lance
        </h1>
      </div>

      {/* Google Sign-Up Button */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl p-6 bg-white text-left">
          <div className="text-center mb-6">
            <Link to="/select-country"><button
              type="button"
              className="w-full py-2 px-4 bg-white text-themeColor font-bold rounded-full flex items-center justify-between border-2 hover:bg-gray-200"
            >
              <div>Continue with Gmail</div>
              <div className="w-10">
                <img src="../images/google.png" alt="Google" />
              </div>
            </button></Link>
          </div>

          {/* Separator */}
          <div className="text-center mb-6">
            <span className="text-gray-600">or</span>
          </div>

          {/* Form */}
          <form>
            <div className="flex w-full mb-4">
              {/* First Name */}
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="first-name">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Last Name */}
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

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

            {/* Country */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="country">
                Country
              </label>
              <Select
                id="country"
                options={countries}
                className="w-full"
                placeholder="Select your country"
                isSearchable
              />
            </div>

            {/* Terms of Service */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
              />
              <label className="text-gray-600 text-sm" htmlFor="terms">
                Yes, I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy.
              </label>
            </div>

            {/* Sign Up Button */}
            <Link to='/tell-us'>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1 hover:text-themeColor"
              disabled
            >
              Create Account
            </button>
            </Link>
            <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account? <a href="/login" className="text-themeColor1 hover:underline"><Link to="/signIn">Log In</Link></a>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
