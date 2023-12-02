'use client';

import Link from 'next/link';
import React from 'react';
import Particles from '../components/particles';
import ConnectButton from '../components/letsconnectbutton';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: 'https://medium.com/@adithyask' },
  { name: 'Contact', href: '/contact' },
];

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      {/* <div
        id="Home"
        className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
      > */}
      <div
        id="Home"
        className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-zinc-400/10"
      >
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                target={item.href.startsWith('https') ? '_blank' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Adithya S Kolavi
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 px-5">
            Founder{' '}
            <Link
              target="_blank"
              href="https://www.cognitivelab.tech/"
              className="underline duration-500 hover:text-zinc-300"
            >
              @CognitiveLab
            </Link>{' '}
            | AI Researcher | Full Stack & Cloud Developer
            <br />
            Building Generative AI solutions at scale.
          </h2>
        </div>
        {/* <div className="animate-fade-in">
          <ConnectButton />
        </div> */}
        <div className="mouse  scale-[.4]  animate-fade-in"></div>
      </div>
    </>
  );
};

export default Hero;
