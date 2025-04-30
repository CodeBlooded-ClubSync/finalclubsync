// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Login from "./components/Login"
import Signup from "./components/Signup";
import CalendarPage from "./components/CalenderPage";
import SingleEventPage from './components/SingleEventPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Calendar" element={<CalendarPage/>}/>
        <Route path="/event/:id" element={<SingleEventPage />} />

        

        {/* Add other routes like <Route path="/events" element={<Events />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

