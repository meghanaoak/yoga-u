import React, { useState } from 'react'
import Logo1 from "../../assets/img/Logo1.png";
import "../Header/header.css";



const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo1} alt="" />
        
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        

      </div>
    </nav>
  )
}

export default Header