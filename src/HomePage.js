// HomePage.js
import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      
      <main className="p-10 text-center mt-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ClubSync!</h1>
        <p className="text-lg text-gray-600">
          A centralized portal to manage and participate in your college club events with ease.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
