import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search icon.png'
import cart from '../../assets/cart icon.png'
import './Navbar.css'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active":""}>Home</li>
        <li onClick={()=>setMenu("menu")}className={menu === "menu" ? "active":""}>Menu</li>
        <li onClick={()=>setMenu("contact-us")}className={menu === "contact-us" ? "active":""}>Contact Us</li>
        <li onClick={()=>setMenu("about-us")}className={menu === "about-us" ? "active":""}>About Us</li>
      </ul>
      <div className="navbar-right">
         <div className="search-icon">
           <img src={search} alt="" />
      </div>
          <div className="cart-icon">
            <img src={cart} alt="" />
            <div className="dot"></div>
          </div>
      <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
