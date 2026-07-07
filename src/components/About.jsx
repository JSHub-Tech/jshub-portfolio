import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-background-main relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Bold Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent-cyan uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-accent-cyan"></span>
              About JSHub
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              We Engineer <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">
                Scalable Solutions
              </span> <br/>
              for ambitious brands.
            </h3>
          </motion.div>

          {/* Right Side: Mission & Capabilities */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              <p>
                At JSHub Agency, we don't just write code. We partner with visionaries to craft digital solutions designed to accelerate business growth, optimize operations, and dominate the modern web.
              </p>
              <p>
                From highly scalable enterprise architectures to breathtaking mobile experiences, our expertise lies in bridging the gap between cutting-edge technology and real-world business results.
              </p>
            </div>
            
            {/* Stats/Highlight Boxes */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 bg-background-sidebar rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-colors">
                <div className="text-3xl font-bold text-white mb-2">Scalable</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Web & Mobile Apps</div>
              </div>
              <div className="p-6 bg-background-sidebar rounded-2xl border border-white/5 hover:border-accent-red/30 transition-colors">
                <div className="text-3xl font-bold text-white mb-2">Growth</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Driven Architecture</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
