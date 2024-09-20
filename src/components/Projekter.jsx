import React, { useEffect, useState } from 'react';
import '../index.css';
import '../projekter.css';
import '../handball.css';
import image1 from '../assets/images/FourAmigos1.webp';
import image5 from '../assets/images/fouramigos-labtop.webp';
import image6 from '../assets/images/fouramigos-mobil.webp';
import image2 from '../assets/images/steno1.webp';
import image8 from '../assets/images/steno-mobil.webp';
import image7 from '../assets/images/steno-labtop.webp';
import image3 from '../assets/images/mr.mums.webp';
import image11 from '../assets/images/mr.mums-labtop.webp';
import image12 from '../assets/images/mr.mums-mobil.webp';
import image4 from '../assets/images/nippon.webp';
import image9 from '../assets/images/nippon-labtop.webp';
import image10 from '../assets/images/nippon-mobil.webp';
import Handball from './Handball';

const Projekterpage = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);
  const [currentImage4, setCurrentImage4] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  const sliderImages1 = [image1, image5, image6];
  const sliderImages2 = [image2, image7, image8];
  const sliderImages3 = [image3, image11, image12];
  const sliderImages4 = [image4, image9, image10];

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.image-container');
      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          image.classList.add('visible');
        } else {
          image.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const interval1 = setInterval(() => {
      setCurrentImage1(prevImage => (prevImage + 1) % sliderImages1.length);
    }, 3000);
    const interval2 = setInterval(() => {
      setCurrentImage2(prevImage => (prevImage + 1) % sliderImages2.length);
    }, 3000);
    const interval3 = setInterval(() => {
      setCurrentImage3(prevImage => (prevImage + 1) % sliderImages3.length);
    }, 3000);
    const interval4 = setInterval(() => {
      setCurrentImage4(prevImage => (prevImage + 1) % sliderImages4.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [sliderImages1.length, sliderImages2.length, sliderImages3.length, sliderImages4.length]);

  useEffect(() => {
    const projekterSection = document.querySelector('#projekter');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimationStarted(true);
          }, 3000); 
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (projekterSection) {
      observer.observe(projekterSection);
    }

    return () => {
      if (projekterSection) {
        observer.unobserve(projekterSection);
      }
    };
  }, []);

  return (
    <div>
      <div className={`projekter-heading ${animationStarted ? 'animate' : ''}`}>
        <h2 className={`projekter-part1 ${animationStarted ? 'animate' : ''}`}>Mine Responsive</h2>
        <h2 className='projekter-part2'>Projekter</h2>
      </div>

      {}
      <section id="projekter" className="image-section">
        <div className="image-container from-left">
          <a href="https://fouramigos.xn--enflngihimlen-6fb.dk/index.html" target="_blank" rel="noopener noreferrer">
            <img src={sliderImages1[currentImage1]} alt={`FourAmigos-projekt ${currentImage1 + 1}`} />
            <div className="overlay">Klik for at besøge siden</div>
          </a>
        </div>
        <div className="image-container from-right">
          <a href="https://atombomben.mikkelruby.dk/index.html" target="_blank" rel="noopener noreferrer">
            <img src={sliderImages2[currentImage2]} alt={`Steno-projekt ${currentImage2 + 1}`} />
            <div className="overlay">Klik for at besøge siden</div>
          </a>
        </div>
        <div className="image-container from-left">
          <a href="https://nippon.mikkelruby.dk/index.html" target="_blank" rel="noopener noreferrer">
            <img src={sliderImages3[currentImage3]} alt={`Nippon-projekt ${currentImage3 + 1}`} />
            <div className="overlay">Klik for at besøge siden</div>
          </a>
        </div>
        <div className="image-container from-right">
          <a href="https://mobile-first.xn--enflngihimlen-6fb.dk/index.html" target="_blank" rel="noopener noreferrer">
            <img src={sliderImages4[currentImage4]} alt={`Mobile-first-projekt ${currentImage4 + 1}`} />
            <div className="overlay">Klik for at besøge siden</div>
          </a>
        </div>
      </section>

      <section className='handball-section'>
        <div className='text-and-handball'>
          <h3 className='projekterh3'>Lyder vi som et match?</h3>
          <div className='handball-container'>
            <Handball />
          </div>
        </div>
        <p className='projekterp'>Tøv ikke med at kontakte mig hvis du har spørgsmål eller andet</p>
      </section>
    </div>
  );
};

export default Projekterpage;
