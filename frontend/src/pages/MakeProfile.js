import axios from 'axios';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MakeProfile() {
  const [educationFields, setEducationFields] = useState([{ title: '', institute: '', year: '', marks: '' }]);
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [hourlyRate, setHourlyRate] = useState('');
  

  useEffect(() => {
    // Fetch countries from API on component mount
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryOptions = response.data.map(country => ({
          value: country.name.common,
          label: country.name.common
        }));
        setCountries(countryOptions);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);


  };

  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
  ];

  const subCategoryOptions = {
    development: [
      { value: 'frontend', label: 'Frontend' },
      { value: 'backend', label: 'Backend' },
      { value: 'fullstack', label: 'Full Stack' },
    ],
    design: [
      { value: 'graphic', label: 'Graphic Design' },
      { value: 'uiux', label: 'UI/UX Design' },
    ],
    marketing: [
      { value: 'social_media', label: 'Social Media' },
      { value: 'seo', label: 'SEO' },
    ],
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    // Set the subcategories based on the selected category
    setSubCategories(subCategoryOptions[selectedOption.value] || []);
    setSelectedSubCategory(null); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (selectedOption) => {
    setSelectedSubCategory(selectedOption);
  };

  const skillsOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'node', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'design', label: 'Design' },
    { value: 'seo', label: 'SEO' },
    // Add more skills as necessary
  ];

  const handleSkillsChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  const languagesOptions = [
    { value: 'english', label: 'English' },
    { value: 'urdu', label: 'Urdu' },
    { value: 'franch', label: 'Franch' },
    { value: 'italic', label: 'Italic' },
    { value: 'chinease', label: 'Chinease' },
    { value: 'arabic', label: 'Arabic#' },
    { value: 'turkish', label: 'Turkish' },
    // Add more skills as necessary
  ];

  const handleLanguagesChange = (selectedOptions) => {
    setSelectedLanguages(selectedOptions);
  };


  const handleHourlyRateChange = (e) => {
    setHourlyRate(e.target.value);
  };

  const handleAddEducationField = () => {
    setEducationFields([...educationFields, { title: '', institute: '', year: '', marks: '' }]);
  };

  const handleDeleteEducationField = (index) => {
    const newEducationFields = [...educationFields];
    newEducationFields.splice(index, 1);
    setEducationFields(newEducationFields);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducationFields = [...educationFields];
    newEducationFields[index][name] = value;
    setEducationFields(newEducationFields);
  };

  const handleBack = () => {
    navigate(-1)
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
        {/* Main Form */}
        <div className="p-6 w-full mx-auto bg-white">
            <form>
            {/* Personal Info */}
            <div className="mb-6">
            <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">Profile Information</h3>
            <div className="p-6 bg-gray-100 rounded-b-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-3 flex items-center">
                  <img
                    className="w-24 h-24 rounded-full object-cover mr-4"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="avatar"
                  />
                  <input type="file" className="ml-4" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Date of Birth</label>
                  <input type="date" className="w-full p-2 border border-themeColor1 rounded-md text-gray-400" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Phone Number</label>
                  <input type="text" className="w-full p-2 border border-themeColor1 rounded-md" placeholder="Enter Phone Number" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Country</label>
                  <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    placeholder="Select Country"
                    isSearchable
                    styles={{
                        control: (base) => ({
                        ...base,
                        borderColor: '#e7a50b', // Change the border color here
                        padding: '2px',
                        }),
                    }}
                    className='w-full rounded-md text-left'
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">City</label>
                  <input type="text" className="w-full p-2 border border-themeColor1 rounded-md" placeholder="Enter Your City" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Province/State</label>
                  <input type="text" className="w-full p-2 border border-themeColor1 rounded-md" placeholder="Enter Your Province" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">ZIP/Postal Code</label>
                  <input type="text" className="w-full p-2 border border-themeColor1  rounded-md" placeholder="Enter Zip/postal code" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Street Address</label>
                  <input type="text" className="w-full p-2 border border-themeColor1  rounded-md" placeholder="Enter Address" />
                </div>
              </div>
            </div>
          </div>
            {/* Work Type */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">What kind of work are you here to do?</h3>
                <div className="p-6 bg-gray-100 rounded-b-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 text-left">Category</label>
                        <Select
                            options={categories}
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            placeholder="Select Category"
                            isSearchable
                            styles={{
                                control: (base) => ({
                                ...base,
                                borderColor: '#e7a50b', // Change the border color here
                                padding: '2px',
                                }),
                            }}
                            className='w-full rounded-md text-left'
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2 text-left">Sub-Category</label>
                        <Select
                            options={subCategories}
                            value={selectedSubCategory}
                            onChange={handleSubCategoryChange}
                            placeholder="Select Sub-Category"
                            isSearchable
                            isDisabled={!selectedCategory}
                            styles={{
                                control: (base) => ({
                                ...base,
                                borderColor: '#e7a50b', // Change the border color here
                                padding: '2px',
                                }),
                            }}
                            className='w-full rounded-md text-left'
                        />
                    </div>
                </div>
                </div>
            </div>
            {/* Skills */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">Your Skills</h3>
                <div className="p-6 bg-gray-100 rounded-b-md">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Add Your Skills</label>
                  <Select
                    isMulti
                    options={skillsOptions}
                    value={selectedSkills}
                    onChange={handleSkillsChange}
                    placeholder="Add Skills"
                    isSearchable
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: '#e7a50b', // Change the border color here
                        padding: '2px',
                      }),
                    }}
                    className='w-full rounded-md text-left'
                  />
              </div>
                </div>
                </div>
            </div>
            {/* Languages */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">Languages</h3>
                <div className="p-6 bg-gray-100 rounded-b-md">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">Add Your Languages</label>
                  <Select
                    isMulti
                    options={languagesOptions}
                    value={selectedLanguages}
                    onChange={handleLanguagesChange}
                    placeholder="Add Languages"
                    isSearchable
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: '#e7a50b', // Change the border color here
                        padding: '2px',
                      }),
                    }}
                    className='w-full rounded-md text-left'
                  />
              </div>
                </div>
                </div>
            </div>
          {/* Hourly Rate */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">Hourly Rate</h3>
            <div className="p-6 bg-gray-100 rounded-b-md">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Hourly Rate ($)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-themeColor1 rounded-md"
                    value={hourlyRate}
                    onChange={handleHourlyRateChange}
                  />
                </div>
              </div>
            </div>
          </div>
            {/* Work Title */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">Skills Title</h3>
                <div className="p-6 bg-gray-100 rounded-b-md">
                <div>
                    <label className="block text-gray-700 font-medium mb-2 text-left">Title</label>
                    <input type="text" className="w-full p-2 border border-themeColor1 rounded-md" />
                    </div>
                </div>
            </div>
            {/* About Bio */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">About Me</h3>
                <div className="p-6 bg-gray-100 rounded-b-md">
                <div>
                    <label className="block text-gray-700 font-medium mb-2 text-left">About Me</label>
                    <textarea type="text" className="w-full p-2 border border-themeColor1 rounded-md" />
                    </div>
                </div>
            </div>
            {/* Education */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-white bg-themeColor p-3 rounded-t-md">Education</h3>
                <div className="p-6 bg-gray-100 rounded-b-md">
                    {educationFields.map((field, index) => (
                    <div key={index} className="mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Title</label>
                            <input
                            type="text"
                            className="w-full p-2 border border-themeColor1 rounded-md"
                            name="title"
                            value={field.title}
                            onChange={(e) => handleEducationChange(index, e)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Institute</label>
                            <input
                            type="text"
                            className="w-full p-2 border border-themeColor1 rounded-md"
                            name="institute"
                            value={field.institute}
                            onChange={(e) => handleEducationChange(index, e)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Year</label>
                            <input
                            type="text"
                            className="w-full p-2 border border-themeColor1 rounded-md"
                            name="year"
                            value={field.year}
                            onChange={(e) => handleEducationChange(index, e)}
                            />
                        </div>
                        {index > 0 && (
                            <div className="md:col-span-3 flex justify-end mt-2">
                            <button
                                type="button"
                                className="px-4 py-2 border border-2 border-themeColor1 text-themeColor font-semibold rounded-md"
                                onClick={() => handleDeleteEducationField(index)}
                            >
                                Delete
                            </button>
                            </div>
                        )}
                        </div>
                    </div>
                    ))}
                    <button
                    type="button"
                    className="px-4 py-2 bg-themeColor1 text-themeColor font-semibold rounded-md "
                    onClick={handleAddEducationField}
                    >
                    <i class="fa-solid fa-plus"></i> Add More Education
                    </button>
                </div>
            </div>
            
            <div className="text-center">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">Save Profile</button>
            </div>
            </form>
        </div>
        {/* Footer Navigation Buttons */}
      <div className="flex justify-between w-full p-4 md:p-6 bg-white fixed bottom-0 left-0 right-0 shadow-md">
        <button
          onClick={handleBack}
          className="py-2 px-3 md:px-4 bg-gray-200 text-gray-700 font-bold rounded-lg disabled:opacity-50"
        >
          Back
        </button>
        
        <div className="flex">
            <Link to="/previewProfile"><button
              
              className="py-2 px-3 md:px-4 bg-themeColor text-white font-bold rounded-lg hover:bg-themeColor1 hover:text-themeColor"
            >
              Next
            </button></Link>
        </div>
      </div>
    </div>
  );
}

export default MakeProfile;
