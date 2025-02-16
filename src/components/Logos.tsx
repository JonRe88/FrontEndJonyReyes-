import React from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import Title from './Title';

const logosLinks = [
  {
    name: 'JONY REYES',
    imageSrc: 'public/Logo Jony Reyes.png',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Solucontas RP',
    imageSrc: 'public/LOGO SOLUCONTAS.jpg',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Creativo',
    imageSrc: 'public/Creativo.png',
    color: 'hover:text-blue-600',
  },
  {
    name: 'GRIYAC',
    imageSrc: 'public/GRIYAC.png',
    color: 'hover:text-blue-600',
  },
];

export default function Logos() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title text="Logos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {logosLinks.map((link) => (
            <a
              key={link.name}

              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white-900 p-6 border-2 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                <div className={`flex flex-col items-center space-y-4 ${link.color}`}>
                <img src={link.imageSrc} alt={link.name} className="w-30 h-30 transition-colors" />
                  <span className="text-white text-lg font-medium" style={{textShadow: '1px 1px 1px white, 1 0 1em blue, 0 0 0.2em pink'}}>{link.name} </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
