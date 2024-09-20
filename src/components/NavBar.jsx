import React, { useState } from 'react';
import '../index.css';
import '../navbar.css';
import image from '../assets/images/logo.webp';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
   <nav className="navbar">
  <div className="menu-icon" onClick={toggleMenu}>
    <div className={`line ${isOpen ? 'open' : ''}`}></div>
    <div className={`line ${isOpen ? 'open' : ''}`}></div>
    <div className={`line ${isOpen ? 'open' : ''}`}></div>
  </div>
  <li className="navbar-logo" onClick={() => handleLinkClick('#portfolio')} style={{ cursor: 'pointer' }}>
    <img src={image} alt="Logo" className="logo" />
    <span className="logo-text">Anders Flæng</span>
  </li>
  <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
    <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleLinkClick('#portfolio'); }}>Forside</a></li>
    <li><a href="#om-mig" onClick={(e) => { e.preventDefault(); handleLinkClick('#om-mig'); }}>Om mig</a></li>
    <li><a href="#projekter" onClick={(e) => { e.preventDefault(); handleLinkClick('#projekter'); }}>Projekter</a></li>
    <li><a href="#kontakt" onClick={(e) => { e.preventDefault(); handleLinkClick('#kontakt'); }}>Kontakt</a></li>
  </ul>
</nav>
  );
};

export default NavBar;
