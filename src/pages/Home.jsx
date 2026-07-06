import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import MarqueeTicker from '../components/MarqueeTicker';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
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
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <Layout>
      <Hero />
      <Services />
      <Stats />
      <MarqueeTicker />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
      <ContactSection />
      <Team />
      <Footer />
    </Layout>
  );
}
