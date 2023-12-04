'use client';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import { MouseEventHandler, PropsWithChildren } from 'react';

export const GreenColor: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-lime-800/5 group md:gap-8 hover:border-lime-600/30 border-lime-500/25 lg:border-zinc-800`}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className={`absolute inset-0 z-10  bg-gradient-to-br opacity-0  via-lime-800/70  transition duration-1000 group-hover:opacity-30`}
          style={style}
        />
        <motion.div
          className={`absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100`}
          style={style}
        />
      </div>
      <div className={`text-lime-600 lg:text-zinc-300/50 hover:text-lime-300`}>
        {children}
      </div>
    </div>
  );
};
