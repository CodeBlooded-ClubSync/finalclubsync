// src/components/Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../AllCss/Signup.css"; // Optional: For styling

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState(""); // Optional: Add name for the user
  const navigate = useNavigate();

  // Handle email/password signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      // Sign up the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      

      // Store user info in Firestore (create a user document)
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "user", // Set default role (you can change based on logic)
        name: name || "New User", // Store the user's name, default if empty
      });

      // Navigate to the user dashboard after successful signup
      navigate("/user-dashboard");
    } catch (err) {
      setError("Error signing up: " + err.message); // Handle signup errors
    }
  };

  // Handle Google Authentication signup
  const handleGoogleSignup = async () => {
    try {
      // Google sign-in
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user info in Firestore (create a user document)
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "user", // Default role for Google signups
        name: user.displayName || "Google User", // Use Google Display Name
      });

      // Navigate to the user dashboard after successful Google signup
      navigate("/user-dashboard");
    } catch (err) {
      setError("Error with Google Signup: " + err.message); // Handle Google signup errors
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
        {error && <p className="signup-error">{error}</p>}
      </form>

      {/* Google Signup Button */}
      <button onClick={handleGoogleSignup} className="google-signup-button">
        Sign Up with Google
      </button>
    </div>
  );
};

export default Signup;



// src/components/Signup.js

