import React, { useRef, useEffect } from 'react';
import { useCardAnimation } from '../hooks/useCardAnimation';
import { CardData } from '../types/card';

const cards: CardData[] = [
  {
    id: 1,
    title: "FreeCodeCamp",
    description: "Diseño web Responsivo.",
    image: "/CertificadoFreeCodeCamp.png"
  },
  {
    id: 2,
    title: "Microsoft Learn",
    description: "Desarrollo Web",
    image: "/CertificadoMicrosoft.png"
  },
  {
    id: 3,
    title: "AluraLatam",
    description: "Frontend",
    image: "/CertificadoFrontEnd.png"
  },
  {
  id: 4,
  title: "AluraLatam",
  description: "JavaScript",
  image: "/CertificadoAluraJava.png"
},
  {
    id: 5,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge Portafolio",
    image: "/Badge-Portfólio.png"
  },
  {
    id: 6,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge AluraGeek",
    image: "/Badge-AluraGeek.png"
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
    description: "Oracle One",
    image: '/JonyReyesPérez.PNG';
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
        <h1 className="text-4xl md:text-7xl font-thin text-center text-white" 
            style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}>
          Formación
        </h1>
      </header>
      
      <main className="w-full max-w-7xl mx-auto px-4">
        <ul id="cards" ref={cardsWrapperRef} className="cards-container flex flex-col items-center space-y-8">
          {cards.map((card) => (
            <li key={card.id} id={`card_${card.id}`} className="card w-full">
              <div className="card__content bg-gray-800 border-2 rounded-xl overflow-hidden flex flex-col md:flex-row" 
                   style={{boxShadow: '1px 1px 0px white, 1px 0 .5em blue, 0 0 .5em pink'}}>
                <div className="p-5 md:p-8 md:w-1/2">
                  <h2 className="uppercase text-2xl md:text-3xl font-thin text-white mb-4"
                      style={{textShadow: '1px 1px 2px white, 0 0 1em blue'}}>
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg" 
                     style={{textShadow: '0px 1px 0px white, 0 0 1em blue, 0 0 0.2em blue'}}
                     dangerouslySetInnerHTML={{ __html: card.description }}>
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
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