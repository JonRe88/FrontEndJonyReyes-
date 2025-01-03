import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  demoLink: string;
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export default function ProjectCard({ 
  image, 
  title, 
  description, 
  demoLink,

}: ProjectCardProps) {
  

  return (
    <div className="card">
      <div 
        className="circle" 
        style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}
      />
      <div className="relative z-10">
        <h2>{title} </h2>
        <p>{description}</p>
        <a 
          href={demoLink} 
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto →
        </a>
      </div>
    </div>
  );
}