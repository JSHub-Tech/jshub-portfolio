import React from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from './Navbar';
import ParticlesBackground from './ParticlesBackground';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#0f1114] text-text-white font-sans overflow-x-hidden relative">
      {/* Global Fixed Starfield */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas>
          <ParticlesBackground />
        </Canvas>
      </div>

      <Navbar />
      <main className="w-full relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;