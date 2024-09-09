import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpQuestion1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  // Questions array
  const questions = [
    {
      id: 1,
      question: "A few quick questions: first, have you freelanced before?",
      options: ["I am brand new to this", "I have some experience", "I am an expert"],
    },
    {
      id: 2,
      question: "Got it. What's your biggest goal for freelancing?",
      options: ["To earn my main income", "To make money on the side", "To get experience, for a full-time job", "I don't have a goal in my mind"],
    },
    {
      id: 3,
      question: "And how would you like to work?",
      options: ["I'd like to find opportunities myself", "I'd like to package up my work for clients to buy"],
    },
  ];

  // Handler to move to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(''); // Reset selection for the new question
    }
  };

  // Handler to move to the previous question
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handler for selecting an option
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex flex-col min-h-screen'>

      {/* Header Section */}
      <div className="bg-white sticky top-0 left-0 right-0 z-10 flex items-center justify-between p-4 shadow-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-themeColor">
            De<span className="font-extrabold text-themeColor1">&gt;</span>lance
        </h1>
        <i className="fa-regular fa-circle-user text-2xl md:text-3xl"></i>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center items-center">
        
        {/* Question */}
        <h2 className="text-xl md:text-3xl font-bold mb-10 md:mb-20 text-center">{questions[currentQuestion].question}</h2>

        {/* Radio Options with custom styling */}
        <div className="flex flex-col gap-4 justify-center mb-10 md:mb-20 w-full md:flex-row">
          {questions[currentQuestion].options.map((option, index) => (
            <label
              key={index}
              className={`flex-1 flex items-start cursor-pointer relative border-2 rounded-lg transition-all duration-300 ease-in-out transform ${
                selectedOption === option ? 'border-themeColor bg-gray-100 shadow-lg' : 'border-gray-300 bg-white'
              } hover:border-themeColor hover:bg-gray-50`}
              onClick={() => handleOptionChange(option)}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="hidden"
              />
              <div className="flex items-center justify-center h-full w-full p-4 md:p-6">
                <span className="text-sm md:text-lg font-medium text-center">{option}</span>
              </div>
              <div className="absolute top-2 right-2 flex items-center justify-center">
                <div
                  className={`w-3 h-3 md:w-4 md:h-4 border-2 rounded-full ${
                    selectedOption === option ? 'bg-themeColor1 border-themeColor' : 'border-gray-300'
                  }`}
                />
              </div>
            </label>
          ))}
        </div>

        {/* Pager with Numbers */}
        <div className="relative w-full mb-6 mt-10 md:mt-20 flex justify-center gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-1 md:h-2 w-6 md:w-8 rounded-full transition-all ${currentQuestion >= index ? 'bg-themeColor' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
        <div className="flex justify-center text-xs md:text-sm text-gray-500 mt-2 gap-2">
          {questions.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer ${currentQuestion === index ? 'font-bold text-themeColor' : 'text-gray-500'}`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
      
      {/* Footer Navigation Buttons */}
      <div className="flex justify-between w-full p-4 md:p-6 bg-white fixed bottom-0 left-0 right-0 shadow-md">
        <Link to="/tell-us">
        <button
          onClick={handleBack}
          className="py-2 px-3 md:px-4 bg-gray-200 text-gray-700 font-bold rounded-lg disabled:opacity-50"
        >
          Back
        </button>
        </Link>
        
        <div className="flex">
          <button
            onClick={handleNext}
            className="py-2 px-3 md:px-4 me-3 bg-white text-themeColor font-bold rounded-lg disabled:opacity-50"
          >
            Skip
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={() => alert('Form Submitted')}
              className="py-2 px-3 md:px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="py-2 px-3 md:px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpQuestion1;
