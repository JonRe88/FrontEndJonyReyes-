import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: "/ProyectoEncriptador.png",
    title: "Encriptador",
    description: "Proyecto realizado para AluraLatam.",
    demoLink: "https://encriptador-unicode.vercel.app/",
    position: 'topRight' as const
  },
  {
    image: "/ProyectoAluraGeek.png",
    title: "AluraGeek",
    description: "Un proyecto más de los challenge de AluraLatam en cual se desarrolla una aplicación para listar, registrar y eliminar productos usando HTML, CSS y JavaScript.",
    demoLink: "https://jonre88.github.io/challenge-AluraGeek/",
    position: 'topLeft' as const
  },
  {
    image: "/ProyectoBios3.png",
    title: "Bios3LAB",
    description: "Desarrollo de la empresa Bios3LAB la cual se dedica a la creación de biocápsulas.",
    demoLink: "https://bio-s3-lab.vercel.app/",
    position: 'bottomRight' as const
  },
  {
    image: "/ProyectoAluraFlix.png",
    title: "AluraFlix",
    description: "Proyecto realizado para AluraLatam.",
    demoLink: "https://alura-flix-challenge-7llf.vercel.app/",
    position: 'bottomLeft' as const
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-4xl md:text-7xl font-thin text-center text-white mb-12"
          style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}
        >
          Portafolio de Proyectos
        </h1>
        <div className="grid-offer text-left grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}