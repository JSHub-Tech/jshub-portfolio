import React from 'react';
import VortexAnimation from './VortexAnimation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 pb-16 sm:pb-20 lg:pb-24 lg:px-24 overflow-hidden">


      {/* Left Side: Hero Text */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center pt-28 sm:pt-32 text-center lg:text-left items-center lg:items-start">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          JSHUB AGENCY: <br/> CRAFTING <br/>
          <span className="bg-gradient-to-r from-white via-white/90 to-accent-cyan text-transparent bg-clip-text">DISTINGUISHED DIGITAL EXPERIENCES.</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/60 mb-10 max-w-lg font-light tracking-wide">
          Modern web &amp; mobile solutions for a connected world.
        </p>
        <div className="w-full sm:w-auto">
          <a href="#contact" className="inline-block w-full sm:w-auto bg-accent-red/10 text-accent-red border border-accent-red hover:bg-accent-red hover:text-white hover:shadow-[0_0_25px_rgba(211,47,47,0.6)] transition-all duration-300 font-bold py-4 px-10 rounded-lg tracking-wider text-sm text-center">
            START YOUR PROJECT
          </a>
        </div>
      </div>

      {/* Right Side: Hero Animation (CSS/SVG) */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-0 overflow-visible">
        <div className="w-full max-w-[360px] sm:max-w-[500px] lg:max-w-[700px]">
          <VortexAnimation />
        </div>
      </div>

    </section>
  );
};

export default Hero;
