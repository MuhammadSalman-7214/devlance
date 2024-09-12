import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Link, useNavigate, useLocation  } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8011';
const ClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [countries, setCountries] = useState([]);

  const location = useLocation();
  const role = location.state?.role;
  
  const navigate = useNavigate();

  console.log('Received role:', role);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryOptions = response.data.map((country) => ({
          value: country.cca2.toLowerCase(),
          label: country.name.common,
        }));
        setCountries(countryOptions);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('You must accept the terms of service');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
        country,
        role,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/addProfile');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('Sign-up failed. Please try again.');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google-signin`, {
        token: credentialResponse.credential,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/addProfile');
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleGoogleError = (error) => {
    console.error('Google Sign-In Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={ClientID}>
      <div className="flex flex-col min-h-screen">
        <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-start p-4 shadow-md">
          <h1 className="text-3xl font-bold text-themeColor">
            De<span className="font-extrabold text-themeColor1">&gt;</span>lance
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-3xl p-6 bg-white text-left">
            <div className="text-center mb-6">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                className="w-full"
              />
            </div>

            <div className="flex items-center mb-6">
              <hr className="flex-grow border-gray-300"/>
              <span className="text-gray-600 mx-4">or</span>
              <hr className="flex-grow border-gray-300"/>
            </div>


            <form onSubmit={handleSubmit}>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  onChange={(selectedOption) => setCountry(selectedOption?.value || '')}
                />
              </div>

              {/* Terms of Service */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label className="text-gray-600 text-sm" htmlFor="terms">
                  Yes, I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy.
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1 hover:text-themeColor"
              >
                Create Account
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already have an account? <a href="/signIn" className="text-themeColor1 hover:underline">Log In</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;