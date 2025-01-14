import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
        <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p>Delicate slices of fresh salmon and tuna glisten atop perfectly seasoned sushi rice, bound together by a subtle brush of soy sauce. The sharp tang of pickled ginger and the fiery kick of wasabi balance the dish’s gentle umami flavors. A rainbow roll, adorned with creamy avocado, crisp cucumber, and vibrant tobiko, is a feast for the eyes as much as the palate. </p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
       </div>
        <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>+91 889478000</li>
            <li>dinedash@gmail.com</li>
         </ul>
        </div>
       
     </div>
     <hr />
     <p className="footer-copy-write">
        Made by Fathima@ -2025
     </p>
    </div>
  )
}

export default Footer