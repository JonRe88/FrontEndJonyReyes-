import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
  {
    image: "/public/hotelreserva.png",
    title: "Hotel Reserva",
    description: "Sistema Básico para Reservaciones de Habitaciones de Hotel. Realizado en REACT y deployado en Azure Deploy",
    demoLink: "https://jolly-beach-0988d891e.4.azurestaticapps.net/",
    position: 'topRight' as const
  },
  {
    image: "/Omelette.png",
    title: "Front-end coding challenge ",
    description: "from @frontendmentor!",
    demoLink: "https://jonre88.github.io/Simple-Omelette-Recipe/",
    position: 'topLeft' as const
  },
  {
    image: "/PIEDRA.png",
    title: "Piedra, Papel o Tijeras",
    description: "Clasico juego de piedra papel o tijera, pero con un extra mas. Da click y diviertete",
    demoLink: "https://stackblitz.com/edit/piedrapapeltijeras?file=index.html",
    position: 'bottomRight' as const
  },
  {
    image: "/Social.png",
    title: "Social link profile",
    description: "from @frontendmentor!",
    demoLink: "https://jonre88.github.io/Social-Links-Profile/",
    position: 'bottomLeft' as const
  }
];

export default function Projects2() {
  return (
    <section className="py-24 px-4 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">

        <div className="grid-offer text-left grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}