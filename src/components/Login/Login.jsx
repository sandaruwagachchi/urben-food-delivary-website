import React, { useState } from 'react';
import './Login.css';
import cros_icon from '../../assets/cros_icon.png';
import { useNavigate } from 'react-router';

const Login = ({ setShowLogin }) => { 
  const navigate = useNavigate();
  const [currState, setCurrState] = useState("Login");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/home'); 
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cros_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <>
              <input type="text" placeholder='Enter your name' required />
              <input type="tel" placeholder='Enter your phone number' required />
              <input type="text" placeholder='Enter your address' required />
            </>
          )}
          <input type="email" placeholder='Enter your email' required />
          <input type="password" placeholder='Enter your password' required />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;
