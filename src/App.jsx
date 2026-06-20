import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GameModes from './components/GameModes';
import Features from './components/Features';

import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white overflow-x-hidden selection:bg-brand-accent selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <GameModes />
      <Features />

      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
