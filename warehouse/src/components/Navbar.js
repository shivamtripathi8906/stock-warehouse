import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "../css/Navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";


function Navbar() {
  return (
    <div>
      <div className='navbarMainContainer page-width'>
        <div className='navbarChildContainer'>
          <div className='logoContainer'>
            <Link to = "/home">
              <img src={logo} alt="logo"/>
            </Link>
          </div>
          <div className='linkContainer'>
            <div className='linkContainerChild'>
              <Link to="/home">
                <p>Products</p>
              </Link> 
            </div>
            <div className='linkContainerChild'>
              <Link to="/home">
                <p>Network</p>
              </Link>
            </div>
            <div className='linkContainerChild'>
              <Link to="/home">
                <p>Services</p>
                <MdKeyboardArrowDown size="1.3rem"/>
              </Link>
            </div>
            <div className='linkContainerChild'>
              <Link to="/home">
                <p>Resources</p>
                <MdKeyboardArrowDown size="1.3rem"/>
              </Link>
            </div>
          </div>
          <div className='buttonContainer'>
            <div className='buttonLogIn'>
              <Link to="/home">
               <p>Log In</p>
              </Link>
            </div>
            <div className='buttonSignUp'>
              <Link to="/home">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar