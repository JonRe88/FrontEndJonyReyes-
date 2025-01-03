import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 
      className="text-4xl md:text-7xl font-thin text-center mb-8 text-white"
      style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}
    >
      {text}
    </h1>
  );
};

export default Title;