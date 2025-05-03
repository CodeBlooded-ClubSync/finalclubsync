
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
import AddEventPage from "./components/AddEventPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";


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
        <Route path="/AddEventPage" element={<AddEventPage />} />
        <Route path="/AboutUS" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />

        

        {/* Add other routes like <Route path="/events" element={<Events />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

