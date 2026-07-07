import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Home from './pages/Home';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './pages/AllProjects';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout>
      {/*
        Site-wide fallback meta tags. React 19 hoists <title>/<meta>/<link>
        rendered anywhere in the tree to <head> automatically, and de-dupes
        by tag identity — so a page rendering its own <SEO /> (see
        src/components/SEO.jsx) further down the tree will take over from
        this fallback once it mounts.
      */}
      <title>JSHub Agency | Premium Web & Mobile Development</title>
      <meta
        name="description"
        content="JSHub is a premium digital agency engineering scalable web applications, mobile apps, video editing, and UI/UX design to accelerate your business growth."
      />
      <link rel="canonical" href="https://jshub.agency/" />

      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;