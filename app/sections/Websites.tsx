'use client';

import Link from 'next/link';
import React from 'react';
import Particles from '../components/particles';
import { Navigation } from '../components/nav';
import { useInView } from 'react-intersection-observer';
import { Card } from '../components/card';

type Props = {};

function Websites({}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
  });
  return (
    <>
      <div
        id="Websites"
        className="flex flex-col items-center justify-start w-screen  overflow-hidden bg-gradient-to-tl from-zinc-400/10 via-zinc-400/10 to-zinc-400/10 px-10 md:px-18 lg:p-24"
      >
        <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display w-full text-center">
          Websites I have built
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-fit mt-10">
          <Card>
            <div className="lg:opacity-20 hover:opacity-75 duration-500">
              <img src="./enable.webp" alt="" />
            </div>
            <div className="text-2xl font-medium relative w-full p-4 md:p-8 text-zinc-400">
              Enableupcycling.com
              <div className="text-sm">A website for a startup</div>
              <div className="text-sm">Github</div>
            </div>
          </Card>
          <Card>
            <div className="lg:opacity-20 hover:opacity-75 duration-500">
              <img src="./enable.webp" alt="" />
            </div>
            <div className="text-2xl font-medium relative w-full p-4 md:p-8 text-zinc-400">
              Enableupcycling.com
              <div className="text-sm">A website for a startup</div>
              <div className="text-sm">Github</div>
            </div>
          </Card>
          <Card>
            <div className="lg:opacity-20 hover:opacity-75 duration-500">
              <img src="./enable.webp" alt="" />
            </div>
            <div className="text-2xl font-medium relative w-full p-4 md:p-8 text-zinc-400">
              Enableupcycling.com
              <div className="text-sm">A website for a startup</div>
              <div className="text-sm">Github</div>
            </div>
          </Card>
          <Card>
            <div className="lg:opacity-20 hover:opacity-75 duration-500">
              <img src="./enable.webp" alt="" />
            </div>
            <div className="text-2xl font-medium relative w-full p-4 md:p-8 text-zinc-400">
              Enableupcycling.com
              <div className="text-sm">A website for a startup</div>
              <div className="text-sm">Github</div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Websites;
