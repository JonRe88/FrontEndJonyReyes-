import React from 'react';
import { MousePointerClick } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import Typewriter from './Typewriter';

export default function Hero() {
  const { layersRef } = useParallax();

  const titleTexts = ['Jony Reyes', 'Developer', 'Diseñador', 'Frontend'];
  const subtitleTexts = [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div ref={layersRef} className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp"
          loading="eager"
          alt="Background layer 1"
          data-parallax-layer="1"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
          loading="eager"
          alt="Background layer 2"
          data-parallax-layer="2"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          data-parallax-layer="4"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <Typewriter
              texts={titleTexts}
              className="text-8xl font-thin text-white mb-4"
              typingSpeed={200}
              delayBetweenTexts={3000}
              loop={true}
            />
            <Typewriter
              texts={subtitleTexts}
              className="text-5xl text-blue-300"
              typingSpeed={150}
              delayBetweenTexts={2000}
              loop={true}
            />
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
          loading="eager"
          alt="Background layer 4"
          data-parallax-layer="1"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <MousePointerClick className="text-white w-8 h-8 mx-auto animate-bounce" />
        <span className="text-white text-sm block mt-2">Scroll Down</span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none" />
    </div>
  );
}
