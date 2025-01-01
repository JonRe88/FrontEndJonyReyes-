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
  position 
}: ProjectCardProps) {
  

  return (
    <div className="card bg-gray-800 p-10 relative">
      <div 
        className="circle" 
        style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}
      />
      <div className="relative z-10">
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
          {title}
        </h2>
        <p className="text-gray-400">
          {description}
        </p>
        <a 
          href={demoLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          Ver proyecto →
        </a>
      </div>
    </div>
  );
}