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
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portfolio</h1>
        <h2 className="anders-flaeng">Anders Flæng</h2>
      </div>

      <button type="button" className="scroll-down" onClick={scrollToSection} aria-label="Scroll til Om mig sektionen">
        <span className="scroll-arrow" />
      </button>
    </div>
  );
};

export default PortfolioPage;
