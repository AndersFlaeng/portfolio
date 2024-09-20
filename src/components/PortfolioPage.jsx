import React from 'react';
import '../index.css';
import '../portfoliopage.css';

const PortfolioPage = () => {
  const scrollToSection = () => {
    const element = document.getElementById("om-mig");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>
      <h2 className="anders-flaeng">Anders Flæng</h2>
      {}
      <div className="scroll-down" onClick={scrollToSection}>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default PortfolioPage;
