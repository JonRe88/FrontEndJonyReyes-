import React from 'react';
import Title from './Title';

const Skills = () => {
  const skillIcons = [
    { src: "/icons8-html-5.svg", alt: "HTML5" },
    { src: "/icons8-css3.svg", alt: "CSS3" },
    { src: "/icons8-javascript.svg", alt: "JavaScript" },
    { src: "/icons8-bootstrap.svg", alt: "Bootstrap" },
    { src: "/icons8-react-native.svg", alt: "React" }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <Title text="Habilidades" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillIcons.map((skill, index) => (
            <div key={index} className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <img 
                src={skill.src} 
                alt={skill.alt}
                className="w-24 h-24 md:w-28 md:h-28 mb-4"
              />
              <span className="text-white text-lg">{skill.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;