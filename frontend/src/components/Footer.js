import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-themeColor text-white py-12 ">
      <div className="lg:mx-110 mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Single Widget */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div className="space-y-6">
              {/* Footer Logo */}
              <p className="text-white">
                Appland is completely creative, lightweight, clean app landing page.
              </p>
              {/* Footer Social Area */}
              <div className="flex space-x-4">
                {/* <a href="#" className="text-gray-400 hover:text-white" title="Facebook"><i className="fa fa-facebook" /></a>
                <a href="#" className="text-gray-400 hover:text-white" title="Pinterest"><i className="fa fa-pinterest" /></a>
                <a href="#" className="text-gray-400 hover:text-white" title="Skype"><i className="fa fa-skype" /></a>
                <a href="#" className="text-gray-400 hover:text-white" title="Twitter"><i className="fa fa-twitter" /></a> */}
              </div>
            </div>
          </div>
          {/* Single Widget */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="text-xl font-semibold mb-4 text-themeColor1">About</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">About Us</a></li>
              <li><a href="#" className="text-white hover:text-white">Corporate Sale</a></li>
              <li><a href="#" className="text-white hover:text-white">Terms &amp; Policy</a></li>
              <li><a href="#" className="text-white hover:text-white">Community</a></li>
            </ul>
          </div>
          {/* Single Widget */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="text-xl font-semibold mb-4 text-themeColor1">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">Help</a></li>
              <li><a href="#" className="text-white hover:text-white">Support</a></li>
              <li><a href="#" className="text-white hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-white">Term &amp; Conditions</a></li>
              <li><a href="#" className="text-white hover:text-white">Help &amp; Support</a></li>
            </ul>
          </div>
          {/* Single Widget */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="text-xl font-semibold mb-4 text-themeColor1">Contact</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">Call Centre</a></li>
              <li><a href="#" className="text-white hover:text-white">Email Us</a></li>
              <li><a href="#" className="text-white hover:text-white">Term &amp; Conditions</a></li>
              <li><a href="#" className="text-white hover:text-white">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
