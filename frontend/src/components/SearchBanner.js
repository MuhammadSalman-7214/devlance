import React from 'react';

const SearchBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(../images/searchbanner.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '440px',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
      className='flex items-center justify-center rounded-xl'
    >
    <div
      style={{
        background: 'linear-gradient(78deg, rgba(39, 61, 121, 0.8), rgba(39, 61, 121, 0.8))',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}
    />

      <div
        className='text-center px-10 py-6 my-auto'
        style={{ position: 'absolute', left: '0', right: '0', zIndex: 2 }}
      >
        <h3 className='text-white text-4xl font-semibold mb-10 mx-auto'>
          Find the right <span className='text-themeColor1'>freelance</span> service, right away
        </h3>
        <form className='relative lg:mx-110'>
          <input
            type="text"
            placeholder="Search for any service..."
            className='px-4 py-3 rounded-xl w-full pr-12 text-grey-200'
          />
          <button
            type="submit"
            className='absolute right-0 me-2 top-1/2 transform -translate-y-1/2 px-3 py-2 text-white rounded-lg bg-themeColor1 font-bold hover:text-black'
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBanner;
