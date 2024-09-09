import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (  
    <div className="w-full px-4 py-10 overflow-x-hidden">
      <div className="text-center mb-8 lg:mb-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-themeColor">
          Why choose <strong className="text-themeColor1">Devlance</strong>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Column */}
        <div className="w-full sm:w-full lg:w-1/3">
          <div className="space-y-10 sm:text-center lg:text-right">
            {/* Verified Freelancers */}
            <div className="flex flex-col items-center sm:items-center lg:items-end" data-aos="fade-right">
              <div className="mb-4">
                <img
                  src="../images/why1.jpg"
                  alt="Verified Freelancers"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <h4 className="text-lg font-semibold">Verified Freelancers</h4>
              <p className="text-gray-500">
                All freelancers on Devlance go through a verification process, ensuring clients work with skilled and trustworthy professionals.
              </p>
            </div>
            {/* Global Talent Pool */}
            <div className="flex flex-col items-center sm:items-center lg:items-end" data-aos="fade-right">
              <div className="mb-4">
                <img
                  src="../images/why2.jpg"
                  alt="Global Talent Pool"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <h4 className="text-lg font-semibold">Global Talent Pool</h4>
              <p className="text-gray-500">
                Devlance connects clients with top freelancers from around the world, enabling access to diverse skill sets and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Center Image (only on large screens) */}
        <div className="hidden lg:flex justify-center lg:w-1/3" data-aos="zoom-in">
          <img
            src="../images/why.jpg"
            alt="Why Choose Us"
            className="rounded-full w-72 h-72"
          />
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-full lg:w-1/3">
          <div className="space-y-10 sm:text-center lg:text-left">
            {/* Secure Payment System */}
            <div className="flex flex-col items-center sm:items-center lg:items-start" data-aos="fade-left">
              <div className="mb-4">
                <img
                  src="../images/why3.webp"
                  alt="Secure Payment System"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <h4 className="text-lg font-semibold">Secure Payment System</h4>
              <p className="text-gray-500">
                With Devlance's secure payment system, both clients and freelancers can be confident that transactions are safe, with funds released only when milestones are met.
              </p>
            </div>
            {/* Flexible Work Arrangements */}
            <div className="flex flex-col items-center sm:items-center lg:items-start" data-aos="fade-left">
              <div className="mb-4">
                <img
                  src="../images/why4.webp"
                  alt="Flexible Work Arrangements"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <h4 className="text-lg font-semibold">Flexible Work Arrangements</h4>
              <p className="text-gray-500">
                Whether it's short-term gigs, long-term contracts, or one-off projects, Devlance provides flexible options that cater to different working styles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
