import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">🚀</span>
            Amplify Bengaluru
          </Link>

          <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/signup" 
              className={`nav-link ${isActive('/signup') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <Link 
              to="/login" 
              className={`nav-link btn btn-primary nav-cta ${isActive('/login') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}></span>
            <span className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}></span>
            <span className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;