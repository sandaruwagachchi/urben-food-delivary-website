import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Welcome.css';
import CLogin from '../../components/Login/CLogin';  
import Login from '../../components/Login/Login';  

const Welcome = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);

  const handleUserTypeClick = (type) => {
    setUserType(type);
  };

  return (
    <div className="welcome-containers">
      <h1>Urban Foods</h1>
      <p className="desc">Your trusted market place for fresh and local products!</p>
      
      <div className="btn-groups">
        <button onClick={() => handleUserTypeClick("customer")}>Customer</button>
        <button onClick={() => handleUserTypeClick("supplier")}>Supplier</button>
      </div>
      
      {userType === "customer" && (
        <Login setShowLogin={setUserType} />
      )}
      {userType === "supplier" && (
        <CLogin setShowLogin={setUserType} />
      )}
    </div>
  );
};

export default Welcome;
