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
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold p-2">Hi,👋 I am Adithya S K</h1>
            <h1>I help bring Ideas to life</h1>

            <div>
              <span className="text-2xl font-bold">
                {"Whether you're looking for a "}
              </span>
              <span className="text-5xl font-bold">{text}</span>
              <span className="text-5xl font-bold">
                <Cursor />
              </span>
            </div>
            <p className="py-6">{'I have the skills to help you succeed.'}</p>
            <button className="btn btn-primary m-3">Download CV</button>
            <button className="btn btn-primary m-3">Suprise me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
