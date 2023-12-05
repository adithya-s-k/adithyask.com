'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { Card } from '../components/card';
import { GreenColor } from '../components/neongreencolor';
import ExperienceItem from '../components/experienceItem';
import Skills from '../components/skills';

type Props = {};

const experiences = [
  {
    role: 'Research Intern',
    company: 'Indian Institute of Science Bengaluru',
    duration: 'August 2023 - Present',
  },
  {
    role: 'Generative AI Developer',
    company: 'Mandelbulb Technologies Jaipur',
    duration: 'May 2023 - August 2023',
  },
  {
    role: 'Generative AI Research Intern',
    company: 'Answer Cloud Technologies Pvt Ltd Mumbai',
    duration: 'June 2023 - July 2023',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'PES Venture Labs Bangalore',
    duration: 'April 2023 - May 2023',
  },
  {
    role: 'Software Developer',
    company: 'PocketCoach - pcsports.in Bangalore',
    duration: 'Nov 2022 - April 2023',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Enable Upcycling - enableupcycling.com Bangalore',
    duration: 'Sept 2022 - Dec 2022',
  },
  {
    role: 'UI/UX Designer',
    company: 'Interra Bangalore',
    duration: 'April 2022 - December 2022',
  },
  {
    role: 'Major Project Intern',
    company: 'IEEE RAS PES University',
    duration: 'April 2022 - Present',
  },
];

export default function Aboutme({}: Props) {
  const initialVisibleItems = 3;
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

  const showMoreItems = () => setVisibleItems(Infinity);
  const showLessItems = () => setVisibleItems(initialVisibleItems);
  return (
    <>
      <div
        id="AboutMe"
        className=" min-h-screen w-full bg-gradient-to-tl from-zinc-400/10 via-zinc-400/10 to-zinc-400/10 text-sm"
      >
        <div className="w-full p-10 md:px-18 lg:p-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-fit lg:h-full sm:h-full">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  About Me
                </h2>
                <p className="mt-4 leading-8  duration-150 text-zinc-500 group-hover:text-zinc-300">
                  Hi There 👋🏼, I'm Adithya S Kolavi, a 19-year-old whole loves
                  to bring ideas to life through code.
                  <br />
                  I specialize in building AI driven applications with Language
                  Models (LLMs) and Diffusion Models. With experience in
                  full-stack web development, DevOps, and Cloud deployments, I
                  create robust and scalable solutions. I also contribute to
                  open-source projects and continuously adapt to the latest
                  technology.
                  <br />
                </p>
                <br />
              </article>
            </Card>

            <Card>
              <article className="relative w-full h-full p-4 md:p-8 space-y-6">
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Experience
                </h2>
                <div className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 space-y-6">
                  <AnimatePresence initial={false}>
                    {Array.from({
                      length: Math.min(visibleItems, experiences.length),
                    }).map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ExperienceItem {...experiences[index]} />
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {visibleItems < experiences.length ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <button
                        className="text-zinc-400 hover:text-zinc-300"
                        onClick={showMoreItems}
                      >
                        See More
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <button
                        className="text-zinc-400 hover:text-zinc-300"
                        onClick={showLessItems}
                      >
                        Show Less
                      </button>
                    </motion.div>
                  )}
                </div>
              </article>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display w-full text-center"
                >
                  My Skills
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 w-full text-center">
                  I'm always on the lookout for new and exciting ideas in
                  computer science and web development, and
                  <br />I love applying these concepts to tackle real-world
                  challenges. I find joy in exploring and mastering various
                  technologies along the way.
                </p>
                <div className="flex w-full justify-center mt-2 md:mt-4">
                  <Skills />
                </div>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
