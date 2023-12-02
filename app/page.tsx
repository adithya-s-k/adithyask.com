import React from 'react';
import HeroSection from './sections/Hero';
import Aboutme from './sections/Aboutme';

export default function Home() {
  return (
    <>
      <div className="h-fit">
        <div className="h-screen w-full">
          <HeroSection />
        </div>
        <div className="h-screen w-full">
          <Aboutme />
        </div>
      </div>
    </>
  );
}
