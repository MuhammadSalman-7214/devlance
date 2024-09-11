import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const SuccessSignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 400,
      spread: 200,
      origin: { y: 0.6 }
    });
  }, []);

  const handleNext = () => {
    navigate('/next-page'); // Replace with your desired route
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Success Message */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg text-center z-10">
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-16 bg-themeColor text-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-themeColor1">
              <path d="M1 12l5 5L23 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-themeColor mb-2">Success!</h1>
        <p className="text-themeColor1 mb-4">Your account has been created successfully.</p>
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-themeColor text-white rounded-lg shadow hover:bg-themeColor1 hover:text-themeColor transition duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessSignUp;
