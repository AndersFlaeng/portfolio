import React, { useState, useEffect } from 'react';
import '../index.css';
import '../ommig.css';
import image from '../assets/images/kold.jpg';
import image10 from '../assets/images/andersflaeng.webp'
import image11 from '../assets/images/html.svg';
import image4 from '../assets/images/css.svg';
import image9 from '../assets/images/js.svg';
import image8 from '../assets/images/react.svg';
import image7 from '../assets/images/ps.svg';
import image3 from '../assets/images/ai.svg';
import image5 from '../assets/images/github.svg';

const OmMig = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.intro-box');
      const ommigSection = document.querySelector('#om-mig');
      if (element && ommigSection) {
        const rect = ommigSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          if (!hasBeenInView) {
            setAnimationClass('fade-in');
            setHasBeenInView(true);
            setTimeout(() => {
              setAnimationClass('fade-out');
            }, 1000);
          }
        } else {
          setHasBeenInView(false);
          setAnimationClass('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasBeenInView]);

  return (
    <div className="page-container">
      {}
      <div className={`intro-box ${animationClass}`}>
        <p>Tryk her for at lære mere om mig</p>
      </div>

      <div className={`ommig-container ${isFlipped ? 'flipped' : ''}`}>
        <button className="flip-button" onClick={handleFlip}>
          ↻
        </button>

        <div className="ommig-content">
    <img src={image} alt="Billede af mig" className="ommig-image" />
    <div className="ommig-text-content">
    <h1>Multimediedesigner med smag for kodning</h1>
    <p>Hej, mit navn er Anders, og jeg er en multimediedesigner med en stor passion for kodning og digitale løsninger. Med forcer i HTML, CSS, JavaScript og React.</p>
    <p>Jeg elsker at bringe idéer til livs gennem kodning og sikre et responsivt design, så alle kan være med, uanset skærmstørrelse.</p>
      <h2 className="ommig-subheading">Personlige kompetencer</h2>
      <ul className="ommig-competencies">
        <li>Hjælpsom</li>
        <li>Arbejdsom</li>
        <li>Læringsparat</li>
        <li>Ansvarsbevidst</li>
      </ul>
      <ul className="ommig-competencies1">
        <li>Løsningsorienteret</li>
        <li>Teamplayer</li>
        <li>Smilende</li>
        <li>Selvstændig</li>
      </ul>

      <h2 className="ommig-subheading">Kompetencer</h2>
      <div className="google-icons">
        <div className="icon-item">
          <img src={image11} alt="html 5" />
          <p>html 5</p>
        </div>
        <div className="icon-item">
          <img src={image4} alt="css" />
          <p>css</p>
        </div>
        <div className="icon-item">
          <img src={image9} alt="Javascript" />
          <p>Javascript</p>
        </div>
        <div className="icon-item">
          <img src={image8} alt="React" />
          <p>React</p>
        </div>
        <div className="icon-item">
          <img src={image7} alt="Photoshop" />
          <p>Photoshop</p>
        </div>
        <div className="icon-item">
          <img src={image3} alt="Illustrator" />
          <p>Illustrator</p>
        </div>
        <div className="icon-item">
          <img src={image5} alt="Github" />
          <p>Github</p>
        </div>
      </div>
    </div>
  </div>

  <div className={`ommig-back ${isExpanded ? 'expanded' : ''}`}>
    <div className="ommig-back-content">
      <h1>Mere end bare en multimediedesigner</h1>
      <ul>
        <li><strong>Alder:</strong> 22 år</li>
      </ul>
      <p> Jeg har altid haft en aktiv livsstil og de sidste par år har den stået på håndbold. Hvor jeg ligenu spiller håndbold for 1. divisions klubben Rækker Mølle Håndbold.</p>
      <p> Håndbolden for mig er ikke kun en hobby, men giver mig derimod også en følelse af teamwork og fællesskab, som man ikke finder mange andre steder. Dette er alt sammen noget som jeg også bringer med ind i mit professionelle liv.</p>
      <p>Jeg ser mig selv som en udadvendt og omsorgsfuld person, der er vant til at arbejde i teams og tror på vigtigheden af et godt samarbejde.</p>
      <p>Når jeg ikke er på håndboldbanen, sidder jeg ofte foran computeren eller tilbringer tid med mine venner.</p>

    </div>
    <img src={image10} alt="Billede af mig" className="ommig-image" />
  </div>
      </div>
    </div>
  );
};

export default OmMig;
