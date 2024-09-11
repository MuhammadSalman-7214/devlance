import axios from 'axios';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountrySelection = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    // Enable button when both a country is selected and terms are agreed
    setIsFormValid(selectedCountry !== null && agreedToTerms);
  }, [selectedCountry, agreedToTerms]);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-start p-4 shadow-md">
        <h1 className="text-3xl font-bold text-themeColor">
          De<span className="font-extrabold text-themeColor1">&gt;</span>lance
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-3xl p-6 bg-white text-left">
          <form>
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
                onChange={setSelectedCountry}
              />
            </div>

            {/* Terms of Service */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label className="text-gray-600 text-sm" htmlFor="terms">
                Yes, I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy.
              </label>
            </div>

            {/* Sign Up Button */}
            <Link to="/tell-us">
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-themeColor text-white font-bold rounded-lg ${
                  isFormValid ? 'hover:bg-themeColor1 hover:text-themeColor' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
              >
                Create Account
              </button>
            </Link>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/signIn" className="text-themeColor1 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CountrySelection;
