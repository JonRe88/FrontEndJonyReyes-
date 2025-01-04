import React, { useRef, useEffect } from 'react';
import { useCardAnimation } from '../hooks/useCardAnimation';
import { CardData } from '../types/card';
import Title from './Title';

const cards: CardData[] = [
  {
    id: 1,
    title: "FreeCodeCamp",
    description: "Diseño web Responsivo.",
    image: "/CertificadoFreeCodeCamp.jpg",
    url:"https://www.freecodecamp.org/certification/JonyR/responsive-web-design"
  },
  {
    id: 2,
    title: "Microsoft Learn",
    description: "Desarrollo Web",
    image: "/CertificadoMicrosoft.jpg"
  },
  {
    id: 3,
    title: "AluraLatam",
    description: "Frontend",
    image: "/CertificadoFrontEnd.png",
    url: "https://app.aluracursos.com/user/jreyesturismo/degree-frontend-grupo7-one-15799/certificate"
  },
  {
  id: 4,
  title: "AluraLatam",
  description: "JavaScript",
  image: "/CertificadoAluraJava.jpg",
  url: "https://app.aluracursos.com/user/jreyesturismo/degree-programacion-primeros-pasos-15697/certificate"
},
  {
    id: 5,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge Portafolio",
    image: "/BadgePortafolio.png"
  },
  {
    id: 6,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge AluraGeek",
    image: "/BadgeAluraGeek.png"
  },
  {
    id: 7,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge Encriptador",
    image: "/BadgeEncriptador.png"
  },
  {
    id: 8,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge AluraFlix",
    image: "/Badge-AluraFlix.png"
  },
  {
    id: 9,
    title: "Oracle One",
    description: "Participación en el evento Oracle One",
    image: "/CertificadoJonyReyesPerez.PNG"
  },
  {
    id: 10,
    title: "Oracle One",
    description: "Oracle Next Education F2 T7  <br /> Front-end",
    image: "/CertificadoProgramaG7.png",
    url: "https://app.aluracursos.com/program/certificate/PRODUCT_PROGRAM/20"
  }
  
  
];

const StackingCards = () => {
  const cardsWrapperRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { initializeAnimations } = useCardAnimation(cardsWrapperRef);

  useEffect(() => {
    if (containerRef.current && cardsWrapperRef.current) {
      initializeAnimations();
    }
  }, [initializeAnimations]);

  return (
    <div ref={containerRef} id="about" className="flex flex-col items-center py-20">
      <header className="text-center bg-gray-900 py-12 w-full">
       <Title text="Formación" />
      </header>
      
      <main className="w-full max-w-7xl mx-auto px-4">
        <ul id="cards" ref={cardsWrapperRef} className="cards-container flex flex-col items-center space-y-8">
          {cards.map((card) => (
            <li key={card.id} id={`card_${card.id}`} className="card w-full">
              <div className="card__content bg-gray-800 border-2 rounded-xl overflow-hidden flex flex-col md:flex-row" 
                   style={{boxShadow: '1px 1px 0px white, 1px 0 .5em blue, 0 0 .5em pink'}}>
               <div className="p-5 md:p-8 w-full md:w-1/3">
                  <h2 className="uppercase text-2xl md:text-3xl font-thin text-white mb-4"
                      style={{textShadow: '1px 1px 2px white, 0 0 1em blue'}}>
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg" 
                     style={{textShadow: '0px 1px 0px white, 0 0 1em blue, 0 0 0.2em blue'}}
                     dangerouslySetInnerHTML={{ __html: card.description }}>
                  </p>
                  {card.url && (
                    <a href={card.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
                      Ver Certififado
                    </a>
                  )}
                </div>
              <div className="w-full md:w-2/3 h-[300px] md:h-auto">
                  <img src={card.image} alt={card.title} className="w-full h-full object-contain " />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;
