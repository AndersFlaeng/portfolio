import React from 'react';
import '../index.css';
import '../projekter.css';
import '../handball.css';
import image1 from '../assets/images/FourAmigos1.webp';
import image2 from '../assets/images/steno1.webp';
import image3 from '../assets/images/mr.mums.webp';
import image4 from '../assets/images/nippon.webp';
import Handball from './Handball';

const Projekterpage = () => {
  const projects = [
    {
      name: 'Four Amigos',
      link: 'https://fouramigos.xn--enflngihimlen-6fb.dk/index.html',
      image: image1,
    },
    {
      name: 'Steno',
      link: 'https://atombomben.mikkelruby.dk/index.html',
      image: image2,
    },
    {
      name: 'Mr. Mums',
      link: 'https://nippon.mikkelruby.dk/index.html',
      image: image3,
    },
    {
      name: 'Nippon',
      link: 'https://mobile-first.xn--enflngihimlen-6fb.dk/index.html',
      image: image4,
    },
  ];

  return (
    <section className="projekter-section">
      <div className="projekter-heading">
        <h2>Projekter</h2>
        <p>Udvalgte responsive projekter</p>
      </div>

      <div className="projekter-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={project.image} alt={`${project.name} preview`} />
              <div className="project-overlay">Besøg projekt</div>
            </a>
            <h3>{project.name}</h3>
          </article>
        ))}
      </div>

      <div className="projekter-cta">
        <div className="projekter-cta-top">
          <h3>Lyder vi som et match?</h3>
          <div className="projekter-handball">
            <Handball />
          </div>
        </div>
        <a href="#kontakt" className="projekter-cta-btn">Kontakt mig</a>
      </div>
    </section>
  );
};

export default Projekterpage;
