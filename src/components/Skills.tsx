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
        <h2 className="text-4xl md:text-7xl font-thin text-center text-white mb-12"
            style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}>
          Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillIcons.map((skill, index) => (
            <div key={index} className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <img 
                src={skill.src} 
                alt={skill.alt}
                className="w-20 h-20 md:w-24 md:h-24 mb-4"
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