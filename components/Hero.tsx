import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Developer', 'Designer', 'Freelancer'],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <h1>
              <span>{text}</span>
              <Cursor />
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
