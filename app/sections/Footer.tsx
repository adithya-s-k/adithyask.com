'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkyColor } from '../components/skycard';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div
        id="Footer"
        className="w-full bg-gradient-to-tl from-zinc-400/10 via-zinc-400/10 to-zinc-400/10 text-zinc-300 lg:text-zinc-300/50"
      >
        <div className="w-full rounded-tl-3xl rounded-tr-3xl">
          <SkyColor>
            <div className="w-full h-fit flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 p-10">
              <div className=" hidden lg:block hover:text-purple-300 hover:scale-110">
                <a
                  href="http://adithyask.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adithya S Kolavi
                </a>
              </div>
              <div className="h-fit flex flex-row justify-center items-center gap-3 flex-wrap">
                <div className="hover:text-purple-300 hover:scale-110">
                  <Link href="/projects" target="_blank">
                    Projects
                  </Link>
                </div>
                <Link href="/" target="_blank">
                  <div className="hover:text-purple-300 hover:scale-110">
                    Resume
                  </div>
                </Link>
                <Link href="https://adithyask.medium.com/">
                  <div className="hover:text-purple-300 hover:scale-110">
                    Blog
                  </div>
                </Link>
                <Link href="/contact" target="_blank">
                  <div className="hover:text-purple-300 hover:scale-110">
                    Contact
                  </div>
                </Link>
              </div>
              <div className="w-fit">
                <div>
                  <div className="flex flex-row justify-center items-center gap-3">
                    <div className="  hover:text-purple-300 hover:scale-110">
                      <Link
                        href="https://github.com/adithya-s-k"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </Link>
                    </div>
                    <div className="  hover:text-purple-300 hover:scale-110">
                      <Link
                        href="https://www.linkedin.com/in/adithya-s-kolavi/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                    </div>
                    <div className="  hover:text-purple-300 hover:scale-110">
                      <Link
                        href="https://twitter.com/adithya_s_k"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                    </div>
                    <div className="  hover:text-purple-300 hover:scale-110">
                      <Link
                        href="https://adithyask.medium.com/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-pen"
                        >
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SkyColor>
        </div>
      </div>
    </>
  );
};

export default Footer;
