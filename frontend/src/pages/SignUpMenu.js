import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpMenu = () => {
  const [role, setRole] = useState('');
  const [buttonText, setButtonText] = useState('Create Account');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    setButtonText(selectedRole ? `Join as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}` : 'Create Account');
    setIsButtonDisabled(!selectedRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signUp', { state: { role } });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Heading */}
      <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-start p-4 shadow-md">
        <h1 className="text-3xl font-bold text-themeColor">
          De<span className="font-extrabold text-themeColor1">&gt;</span>lance
        </h1>
      </div>

      {/* Centered Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg p-8 bg-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">Join as a Freelancer or Client</h2>
          <form onSubmit={handleSubmit}>
            {/* Radio Cards */}
            <div className="flex space-x-4 mb-6">
              <label className="flex-1 flex items-start cursor-pointer relative">
                <input
                  type="radio"
                  name="role"
                  value="freelancer"
                  checked={role === 'freelancer'}
                  onChange={handleRoleChange}
                  className="hidden"
                />
                <div
                  className={`flex-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform ${
                    role === 'freelancer'
                      ? 'border-themeColor bg-gray-100 shadow-lg'
                      : 'border-gray-300 bg-white'
                  } hover:border-themeColor hover:bg-gray-50`}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-full h-full">
                      <div className="absolute top-2 right-2 flex items-center justify-center">
                        <div
                          className={`w-4 h-4 border-2 rounded-full ${
                            role === 'freelancer' ? 'bg-themeColor1 border-themeColor' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      <div className="flex items-center justify-center h-full p-6">
                        <span className="text-lg font-medium">Freelancer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
              <label className="flex-1 flex items-start cursor-pointer relative">
                <input
                  type="radio"
                  name="role"
                  value="client"
                  checked={role === 'client'}
                  onChange={handleRoleChange}
                  className="hidden"
                />
                <div
                  className={`flex-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform ${
                    role === 'client'
                      ? 'border-themeColor bg-gray-100 shadow-lg'
                      : 'border-gray-300 bg-white'
                  } hover:border-themeColor hover:bg-gray-50`}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-full h-full">
                      <div className="absolute top-2 right-2 flex items-center justify-center">
                        <div
                          className={`w-4 h-4 border-2 rounded-full ${
                            role === 'client' ? 'bg-themeColor1 border-themeColor' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      <div className="flex items-center justify-center h-full p-6">
                        <span className="text-lg font-medium">Client</span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors duration-300 ease-in-out ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-themeColor hover:bg-themeColor1 hover:text-themeColor'}`}
            >
              {buttonText}
            </button>
          </form>

          {/* Already have an account */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account? <a href="/login" className="text-themeColor1 hover:underline">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMenu;
