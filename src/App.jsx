import React from 'react';
import Layout from './components/Layout';
import VortexAnimation from './components/VortexAnimation';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Team from './components/Team';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 overflow-hidden">

        {/* Left Side: Hero Text */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center pt-32">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            JSHUB AGENCY: <br/> CRAFTING <br/>
            <span className="bg-gradient-to-r from-white via-white/90 to-accent-cyan text-transparent bg-clip-text">DISTINGUISHED DIGITAL EXPERIENCES.</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-lg font-light tracking-wide">
            Modern web &amp; mobile solutions for a connected world.
          </p>
          <div>
            <button className="bg-accent-red/10 text-accent-red border border-accent-red hover:bg-accent-red hover:text-white hover:shadow-[0_0_25px_rgba(211,47,47,0.6)] transition-all duration-300 font-bold py-4 px-10 rounded-lg tracking-wider text-sm">
              START YOUR PROJECT
            </button>
          </div>
        </div>

        {/* Right Side: Vortex Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center min-h-[600px]">
          <VortexAnimation />
        </div>

      </section>
      
      <Services />
      <FeaturedProjects />
      <Team />
      
      {/* Simple Footer */}
      <footer className="border-t border-white/10 bg-[#121417] px-8 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-8 md:mb-0">
             <img src="/WebsiteLogo.svg" alt="JSHub Logo" className="h-8 opacity-80" />
             <span className="text-white/60 font-bold tracking-widest">| JSHub Agency</span>
          </div>
          <div className="flex gap-8 text-sm text-white/50 font-semibold tracking-wider">
              <a href="#" className="hover:text-accent-cyan transition-colors">Home</a>
              <a href="#" className="hover:text-accent-red transition-colors">Services</a>
              <a href="#" className="hover:text-accent-yellow transition-colors">Portfolio</a>
              <a href="#" className="hover:text-accent-teal transition-colors">About</a>
          </div>
          <div className="text-white/30 text-xs mt-8 md:mt-0 tracking-widest">
              Copyright 2026 JSHub Agency. All rights reserved.
          </div>
      </footer>
    </Layout>
  )
}

export default App;
