import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search icon.png'
import cart from '../../assets/cart icon.png'
import { useNavigate } from 'react-router'
import './Navbar.css'
import { Link } from 'react-router'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/customer/logout', {
        method: 'POST',
      });

      if (response.ok) {
        alert("Logged out successfully");
        navigate('/'); 
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error occurred during logout");
    }
  };

  return (
    <div className='navbar'>
      <Link to="home"><img src={logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='home' onClick={()=>setMenu("home")} className={menu === "home" ? "active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu === "menu" ? "active":""}>Menu</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu === "contact-us" ? "active":""}>Contact Us</a>
        <a href='#footer' onClick={()=>setMenu("about-us")}className={menu === "about-us" ? "active":""}>About Us</a>
      </ul>
      <div className="navbar-right">
         <div className="search-icon">
           <img src={search} alt="" />
         </div>
          <div className="cart-icon">
            <Link to='/cart'> <img src={cart} alt="" /></Link>
            <div className="dot"></div>
          </div>
          <div className="cart-icon">
            <button onClick={handleLogout}>Log Out</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
