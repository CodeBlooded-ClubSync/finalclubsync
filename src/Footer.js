
import React from 'react';
import logo from './kmit.png'; // Replace with the actual path to your logo

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        {/* Left-side content: Copyright */}
        <p className="mb-0">&copy; 2025 ClubSync. All Rights Reserved.</p>

        {/* Right-side content: Links and Logo */}
        <div className="d-flex align-items-center">
          <ul className="d-flex list-unstyled mb-0 mx-3">
            <li className="mx-2">
              <a href="/privacy" className="text-white">Privacy Policy</a>
            </li>
            <li className="mx-2">
              <a href="/terms" className="text-white">Terms of Service</a>
            </li>
            <li className="mx-2">
              <a href="/contact" className="text-white">Contact</a>
            </li>
          </ul>
          
          {/* Logo and Name */}
          <div className="d-flex align-items-center">
            <img src={logo} alt="Kmit Logo" className="logo-img" style={{ height: '40px', marginRight: '10px' }} />
            {/* <span className="text-white">Kmit</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
