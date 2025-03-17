import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import twitter from '../../assets/x_icon.png'
import github from '../../assets/github_icon.png'
import linkedIn from '../../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              
               <p>UrbanFood is an online marketplace connecting urban farmers and local producers with consumers.
                 Explore a variety of fresh vegetables, fruits, dairy products, baked goods, and handmade crafts,
                  delivered right to your doorstep</p>
               <div className="footer-social-icons">
                <img src={github} alt="" />
                <img src={linkedIn} alt="" />
                <img src={twitter} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>Urban Foods</h2>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                 <h2>Contact us</h2>
                 <ul>
                    <li>+94 41 2356 293</li>
                    <li>urbanfoods@gmail.com</li>
                 </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
            Copyright 2025 © UrbanFoods.lk - All Right Reserved
        </p>
    </div>
  )
}

export default Footer