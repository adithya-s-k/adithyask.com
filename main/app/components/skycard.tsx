'use client';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import { MouseEventHandler, PropsWithChildren } from 'react';

export const SkyColor: React.FC<PropsWithChildren> = ({ children }) => {
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
      className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-900/10 group md:gap-8  border-zinc-950 lg:border-zinc-900/5`}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className={`absolute inset-0 z-10  bg-gradient-to-br opacity-0  via-cyan-500/60  transition duration-1000 group-hover:opacity-50`}
          style={style}
        />
        <motion.div
          className={`absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100`}
          style={style}
        />
      </div>
      <div className={`lg:text-zinc-300/50 `}>{children}</div>
    </div>
  );
};
