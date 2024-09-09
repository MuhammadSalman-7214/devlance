import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ImagesBanner = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="w-full md:w-8/12">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-center mb-4 text-themeColor">
              Talent you <strong className='text-themeColor1'>want</strong>
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          {/* Image 1 */}
          <div className="w-full sm:w-1/4 p-2">
            <div className="relative" data-aos="fade-right" data-aos-duration="1000">
              <img
                src="../images/graphic.webp"
                alt="Graphic"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Image 2 */}
          <div className="w-full sm:w-1/2 p-2">
            <div className="flex flex-wrap h-full">
              <div className="w-7/12 p-1" data-aos="fade-up" data-aos-duration="1000">
                <div className="relative">
                  <img
                    src="../images/developement.jpg"
                    alt="Development"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-5/12 p-1" data-aos="zoom-in" data-aos-duration="1000">
                <div className="relative">
                  <img
                    src="../images/finance.jpg"
                    alt="Finance"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-5/12 p-1" data-aos="flip-left" data-aos-duration="1000">
                <div className="relative">
                  <img
                    src="../images/editing.webp"
                    alt="Editing"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-7/12 p-1" data-aos="flip-right" data-aos-duration="1000">
                <div className="relative">
                  <img
                    src="../images/seo.webp"
                    alt="SEO"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Image 3 */}
          <div className="w-full sm:w-1/4 p-2">
            <div className="relative" data-aos="zoom-out" data-aos-duration="1000">
              <img
                src="../images/digitalMarketing.webp"
                alt="Digital Marketing"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesBanner;
