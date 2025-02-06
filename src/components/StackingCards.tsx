import React, { useRef, useEffect } from 'react';
import { useCardAnimation } from '../hooks/useCardAnimation';
import { CardData } from '../types/card';
import Title from './Title';

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
  habilidades: string[];
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Oracle One",
    description: "Oracle Next Education F2 T7 <br /> Front-end",
    image: "/CertificadoProgramaG7.png",
    habilidades: ["Html", "CSS", "JavaScript", "Java", "Oracle"]
  },
  {
    id: 2,
    title: "FreeCodeCamp",
    description: "Diseño web Responsivo.",
    image: "/CertificadoFreeCodeCamp.jpg",
    url:"https://www.freecodecamp.org/certification/JonyR/responsive-web-design",
    habilidades: ["Html", "CSS", "Diseño Web", "Responsive"]
  },
  {
    id: 3,
    title: "Microsoft Learn",
    description: "Desarrollo Web",
    image: "/CertificadoMicrosoft.jpg",
    habilidades: ["Diseño web", "Responsive"]
  },
  {
    id: 4,
    title: "AluraLatam",
    description: "Frontend",
    image: "/CertificadoFrontEnd.png",
    url: "https://app.aluracursos.com/user/jreyesturismo/degree-frontend-grupo7-one-15799/certificate",
    habilidades: []
  },
  {
    id: 5,
    title: "AluraLatam",
    description: "JavaScript",
    image: "/CertificadoAluraJava.jpg",
    habilidades: ["JavaScript"]
  },
  {
    id: 6,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge Portafolio",
    image: "/BadgePortafolio.png",
    habilidades: ["Html", "CSS", "JavaScript"]
  },
  {
    id: 7,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge AluraGeek",
    image: "/BadgeAluraGeek.png",
    habilidades: ["Html", "CSS", "JavaScript"]
  },
  {
    id: 8,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge Encriptador",
    image: "/BadgeEncriptador.png",
    habilidades: ["Html", "CSS", "JavaScript"]
  },
  {
    id: 9,
    title: "AluraLatam",
    description: "Oracle One <br /> Badge AluraFlix",
    image: "/Badge-AluraFlix.png",
    habilidades: ["Html", "React", "JavaScript"]
  },
  {
    id: 10,
    title: "Oracle One",
    description: "Participación en el evento Oracle One",
    image: "/CertificadoJonyReyesPerez.PNG",
    habilidades: []
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
              <div className="p-6 border border-[#575861] rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center"
                   style={{boxShadow: '1px 1px 0px white, 1px 0 .5em blue, 0 0 .5em pink'}}>
                <div className="flex flex-col gap-4 w-full md:w-1/3">
                  <h2 className="uppercase text-2xl md:text-3xl font-thin text-white mb-4"
                      style={{textShadow: '1px 1px 2px white, 0 0 1em blue'}}>
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg" 
                     style={{textShadow: '0px 1px 0px white, 0 0 1em blue, 0 0 0.2em blue'}}
                     dangerouslySetInnerHTML={{ __html: card.description }}>
                  </p>
                  {card.url && (
                    <a href={card.url} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
                      Ver Certificado
                    </a>
                  )}
                  <footer className="flex flex-col gap-2">
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-[#fdfdfe]">
                      Habilidades:
                    </h4>
                    <ul className="flex justify-center sm:justify-normal flex-wrap gap-3 sm:gap-5">
                      {card.habilidades.map((habilidad, index) => (
                        <li key={index} 
                            className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-[#575861] text-[#fdfdfe]">
                          {habilidad}
                        </li>
                      ))}
                    </ul>
                  </footer>
                </div>
                <div className="w-full md:w-2/3">
                  <img src={card.image} 
                       alt={card.title} 
                       className="w-full h-auto rounded-lg"
                       style={{boxShadow: '0 0 10px rgba(0,0,0,0.5)'}} />
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
