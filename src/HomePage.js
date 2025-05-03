// // HomePage.js
// import React from "react";
// import Navbar from "./Navbar";
// import CalendarPage from "./components/CalenderPage";
// import welcomeImage from "./image.avif"; // Import the image

// const HomePage = () => {
//   return (
//     <div>
//       <Navbar />
      
//       <main className="p-10 text-center mt-5">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ClubSync!</h1>
//         <p className="text-lg text-gray-600">
//           A centralized portal to manage and participate in your college club events with ease.
//         </p>
        
//         {/* Add the image */}
//         <img
//           src={welcomeImage} // Import the image
//           alt="Welcome"
//           className="mt-5 rounded-lg shadow-lg"
//           style={{ width: "100%", maxWidth: "600px" }} // Adjust styling as needed
//         />
//       </main>
//       {/* <CalendarPage/> */}
//     </div>
//   );
// };

// export default HomePage;

// HomePage.js
import React from "react";
import Navbar from "./Navbar";
import CalendarPage from "./components/CalenderPage";
import welcomeImage from "./image.avif"; // Import your image

const HomePage = () => {
  return (
    <div>
      <Navbar />
      
      <main 
        className="p-10 text-center mt-5 flex-fill pt-5"
        style={{
          backgroundImage: `url(${welcomeImage})`, // Set the background image
          backgroundSize: "cover", // Make the image cover the entire area
          backgroundPosition: "center", // Center the image
          backgroundAttachment: "fixed", // Keep the image fixed while scrolling
          minHeight: "100vh", // Make the container take the full height of the viewport
          color: "white", // Set text color to white for contrast
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to ClubSync!</h1>
        <p className="text-lg">
          A centralized portal to manage and participate in your college club events with ease.
        </p>
      </main>
      {/* <CalendarPage/> */}
    </div>
  );
};

export default HomePage;