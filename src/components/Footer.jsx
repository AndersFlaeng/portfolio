import React from 'react';
import '../index.css';
import '../footer.css';
import logo from '../assets/images/logo.webp';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Kontakt mig på</h4>
        <p>Telefon: +45 51155440</p>
        <p>Email: andersflaeng@hotmail.com</p>
        <p>Adresse: Thit Jensens Gade 10, 6th</p>
        <ul className='sociale-ikoner'>
          <li><a href="https://www.facebook.com/profile.php?id=100005340975060" title="Besøg min facebook"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://www.linkedin.com/in/anders-fl%C3%A6ng-336952209/" title="Besøg min LinkedIn"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
      <div className="footer-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <a href="#forside">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="footer-navbar">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#portfolio">Forside</a></li>
          <li><a href="#om-mig">Om mig</a></li>
          <li><a href="#projekter">Projekter</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
