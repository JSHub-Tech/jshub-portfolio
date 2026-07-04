import React from 'react';
import Navbar from './Navbar';
import Cursor from './Cursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-transparent text-text-white font-sans overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;