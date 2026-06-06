import React from 'react';
import '../index.css';
import '../ommig.css';
import image from '../assets/images/andersflaeng1.webp';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
  SiGithub,
} from 'react-icons/si';

const OmMig = () => {
  const technologies = [
    { Icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
    { Icon: SiCss3, label: 'CSS', color: '#1572B6' },
    { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
    { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
    { Icon: SiReact, label: 'React', color: '#61DAFB' },
    { Icon: SiNextdotjs, label: 'Next.js', color: '#111111' },
    { Icon: SiNodedotjs, label: 'Node.js', color: '#5FA04E' },
    { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
    { Icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
    { Icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
    { Icon: SiGithub, label: 'GitHub', color: '#181717' },
  ];

  return (
    <section className="om-section">
      <div className="om-section-header">
        <h1>Om mig</h1>
      </div>

      <div className="om-card om-main-card">
        <div className="om-media">
          <img src={image} alt="Billede af Anders" className="om-image" />
          <div className="om-cta-group">
            <a href="#kontakt" className="om-cta-btn">Kontakt mig</a>
            <a href="CV.pdf" className="om-cta-btn om-cta-btn-secondary" target="_blank" rel="noopener noreferrer">Se CV</a>
          </div>
        </div>
        <div className="om-text-content">
          <h2>Passion for kode, design og den fulde stack</h2>
          <p>Hej, jeg hedder Anders. Jeg er uddannet multimediedesigner og studerer nu videre til webudvikler. Jeg brænder for at omsætte idéer til digitale løsninger med fokus på brugervenlighed, performance og responsive oplevelser i HTML, CSS, JavaScript og React.</p>
          <p>Jeg elsker at bringe idéer til livs gennem kodning og sikre et responsivt design, så alle kan være med, uanset skærmstørrelse.</p>
          <p>Ved siden af studiet bruger jeg meget tid på håndbold i 1. Divisions klubben Rækker Mølle Håndbold. Det har styrket min evne til samarbejde, disciplin og fokus under pres, og jeg er vant til at planlægge min tid struktureret i forhold til både studie, sport og arbejde.</p>
        </div>
      </div>

      <div className="tech-line" aria-label="Teknologier jeg arbejder med">
        <div className="tech-line-track">
          <div className="tech-line-motion">
            {[...technologies, ...technologies].map((technology, index) => (
              <div className="tech-line-item" key={`${technology.label}-${index}`}>
                <technology.Icon className="tech-line-icon" style={{ color: technology.color }} aria-hidden="true" />
                <span>{technology.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmMig;
