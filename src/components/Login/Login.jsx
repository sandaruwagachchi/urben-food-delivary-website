import React, { useState } from 'react';
import './Login.css';
import cros_icon from '../../assets/cros_icon.png';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login = ({ setShowLogin }) => { 
  const navigate = useNavigate();
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:8081/api/customer/login', { email, password });
      if (response.data) {
        navigate('/home');
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); 
    const customerData = { customerName, phone, address, email, password };
    try {
      const response = await axios.post('http://localhost:8081/api/customer/register', customerData);
      if (response.data) {
        setCurrState("Login");
      }
    } catch (err) {
      setError("Error registering user");
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={currState === "Sign Up" ? handleRegister : handleLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cros_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)} 
                required 
              />
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
              <input 
                type="text" 
                placeholder="Enter your address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
            </>
          )}
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="login-conditions">
          <input className="check" type="checkbox" required />
          <p className="para">By continuing, I agree to the terms and conditions</p>
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {currState === "Login" ? (
          <p className="para2">
            Create a new account? 
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p className="para2">
            Already have an account? 
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
