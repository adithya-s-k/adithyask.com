import React from 'react';
import HeroSection from './sections/Hero';
import Aboutme from './sections/Aboutme';
import Footer from './sections/Footer';
import Websites from './sections/Websites';

export default function Home() {
  return (
    <>
      <div className="h-fit">
        <div className="min-h-screen h-fit w-full">
          <HeroSection />
        </div>
        <div className="min-h-screen h-fit w-full">
          <Aboutme />
        </div>
        {/* <div className="min-h-screen h-fit w-full">
          <Websites />
        </div> */}
        <div className="h-fit w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
