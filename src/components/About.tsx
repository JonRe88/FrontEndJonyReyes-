import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { gsap, Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface QuoteTextProps {
  willChange: boolean;
}

const QuoteText: FC<QuoteTextProps> = ({ willChange }) => (
  <div className="font-medium text-3xl sm:text-4xl md:text-6xl">
    <h1
      className="text-4xl md:text-7xl font-thin text-center mb-8 text-white"
      style={{
        textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue',
      }}
    >
      Sobre Mi
    </h1>
    <p
      className={`about-1 leading-tight ${
        willChange ? 'will-change-opacity' : ''
      }`}
    >
      Un desarrollador frontend junior entusiasta y orientado a los detalles con conocimientos competentes en HTML y CSS, así como en bibliotecas de terceros.
    </p>
    <p
      className={`about-2 leading-tight ${
        willChange ? 'will-change-opacity' : ''
      }`}
    >
      Teniendo como prioridad la creacion de una buena experiencia de usuario,
      utilizando una arquitectura moderna.
    </p>
  </div>
);

const AboutSection: FC = () => {
  const quoteRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [willChange, setWillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement | null>,
    targetSection: MutableRefObject<HTMLDivElement | null>
  ): ScrollTrigger | undefined => {
    if (!quoteRef.current || !targetSection.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector('.about-1'),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector('.about-1'), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector('.about-2'),
        { opacity: 0.2 },
        { opacity: 1 },
        '<'
      )
      .to(quoteRef.current.querySelector('.about-2'), {
        opacity: 0.2,
        delay: 1,
      });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: 'center 80%',
      end: 'center top',
      scrub: 0.3,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });

    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(
      quoteRef,
      targetSection
    );

    return () => {
      if (aboutScrollTriggerInstance) aboutScrollTriggerInstance.kill();
    };
  }, []);

  return (
    <section ref={targetSection} className="about-section">
      <div ref={quoteRef}>
        <QuoteText willChange={willChange} />
      </div>
    </section>
  );
};

export default AboutSection;
