import React from 'react';
import Layout from './components/Layout';
import VortexAnimation from './components/VortexAnimation';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-100px)] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24">
        
        {/* Left Side: Hero Text */}
        <div className="z-10 w-full lg:w-1/2 flex flex-col justify-center mt-12 lg:mt-0">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            JSHUB AGENCY: <br/> CRAFTING <br/> 
            <span className="text-white">DISTINGUISHED DIGITAL EXPERIENCES.</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-lg font-light tracking-wide">
            Modern web & mobile solutions for a connected world.
          </p>
          
          <div>
            <button className="bg-accent-red/10 text-accent-red border border-accent-red hover:bg-accent-red hover:text-white hover:shadow-[0_0_25px_rgba(211,47,47,0.6)] transition-all duration-300 font-bold py-4 px-10 rounded-lg tracking-wider text-sm">
              START YOUR PROJECT
            </button>
          </div>
        </div>

        {/* Right Side: Vortex Animation */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center">
            <VortexAnimation />
        </div>
        
      </section>
      
      {/* Services Section Placeholder */}
      <section className="min-h-screen border-t border-white/5 px-8 lg:px-24 py-24 bg-gradient-to-b from-background-main to-[#15171a]">
         <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center tracking-widest text-white/90">OUR SERVICES</h2>
             {/* We will build the vertical service cards here next */}
             <div className="text-center text-white/30 border border-dashed border-white/20 p-20 rounded-2xl glass-panel">
                 [Services Grid will go here]
             </div>
         </div>
      </section>
    </Layout>
  )
}

export default App;
