import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // Redirect to another page, e.g., dashboard
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Email Sign-In Error:', error);
      alert('Sign-in failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/google-signin`, {
        token: credentialResponse.credential,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // Redirect to another page, e.g., dashboard
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert('Sign-in failed. Please try again.');
    }
  };

  const handleGoogleError = (error) => {
    console.error('Google Sign-In Failed:', error);
    alert('Sign-in failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
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
              <div className="w-full mb-6">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  className="w-full py-2 px-4 bg-white text-themeColor font-bold rounded-full flex items-center justify-between border-2 hover:bg-gray-200"
                >
                  <div>Continue with Google</div>
                  <div className="w-10">
                    <img src="../images/google.png" alt="Google" />
                  </div>
                </GoogleLogin>
              </div>

              {/* Separator */}
              <div className="text-center mb-6">
                <span className="text-gray-600">or</span>
              </div>

              {/* Email and Password Form */}
              <form onSubmit={handleEmailSignIn}>
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

                {/* Sign In Button */}
                <button
                  type="submit"
                  className={`w-full py-2 px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1 hover:text-themeColor ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
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
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignIn;
