import React from 'react';
import NavBar from '../components/NavBar';
import OmMig from '../components/OmMig';
import PortfolioPage from '../components/PortfolioPage';
import Arrow from '../components/Arrow';
import Projekter from '../components/Projekter';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="page">
      <section id="portfolio">
        <NavBar /> {}
        <Arrow />
        <PortfolioPage /> {}
      </section>
      <section id="om-mig">
        <OmMig /> {}
      </section>
      <section id="projekter">
        <Projekter /> {}
      </section>
      <section id="kontakt">
        <Footer /> {}
      </section>
    </div>
  );
}
