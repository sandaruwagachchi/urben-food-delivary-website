import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search icon.png'
import cart from '../../assets/cart icon.png'
import './Navbar.css'
import { Link } from 'react-router'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu === "menu" ? "active":""}>Menu</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu === "contact-us" ? "active":""}>Contact Us</a>
        <a href='#footer' onClick={()=>setMenu("about-us")}className={menu === "about-us" ? "active":""}>About Us</a>
      </ul>
      <div className="navbar-right">
         <div className="search-icon">
           <img src={search} alt="" />
      </div>
          <div className="cart-icon">
            <img src={cart} alt="" />
            <div className="dot"></div>
          </div>
      <button onClick={()=>setShowLogin(true)}> Customer</button>
      <button onClick={()=>setShowLogin(true)}>Supplier</button>
      </div>
    </div>
  )
}

export default Navbar
