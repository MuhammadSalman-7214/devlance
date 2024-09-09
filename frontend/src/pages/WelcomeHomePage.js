import React from 'react'
import SearchBanner from '../components/SearchBanner'
import Navbar from '../components/Navbar'
import SignUpBanner from '../components/SignUpBanner'
import WhyUs from '../components/whyUs'
import Footer from '../components/Footer'
import ImagesBanner from '../components/ImagesBanner'

const WelcomeHomePage = () => {
  return (
    <div>
    <div className='sticky top-0 start-0 end-0 z-10'><Navbar/></div>
      <div className='lg:mx-110 mt-10'>
        <SearchBanner/>
        <ImagesBanner/>
        <SignUpBanner/>
        <WhyUs/>
      </div>
      <Footer/>
    </div>
  )
}

export default WelcomeHomePage