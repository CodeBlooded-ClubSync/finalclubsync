// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">ClubSync</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           {/* Left-aligned links */}
//           <ul className="navbar-nav me-auto">
            
//             <li className="nav-item">
//               <Link className="nav-link" to="/events">Events</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/calendar">Calendar</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/aboutus">About Us</Link>
//             </li>
//           </ul>

//           {/* Right-aligned links */}
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login/SignUp</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import logo from './clublogo.png'; // Replace with actual path to your logo
import Login from './components/Login';
import Signup from './components/Signup'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">

        {/* Logo and Brand Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="ClubSync Logo"
            style={{ height: '30px', marginRight: '10px' }}
          />
          ClubSync
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left-aligned links */}
          <ul className="navbar-nav me-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">Calendar/Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
          </ul>

          {/* Right-aligned links */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

