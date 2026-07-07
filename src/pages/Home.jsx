import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import MarqueeTicker from '../components/MarqueeTicker';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import ContactCTA from '../components/ContactCTA';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 0);
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="JSHub Agency | Premium Web & Mobile Development"
        description="JSHub is a premium digital agency engineering scalable web applications, mobile apps, video editing, and UI/UX design to accelerate your business growth."
        path="/"
      />
      <Hero />
      <Services />
      <Stats />
      <MarqueeTicker />
      <FeaturedProjects />
      <Testimonials />
      <About />
      <ContactCTA />
      <ContactSection />
      <Footer />
    </>
  );
}