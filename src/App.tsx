import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-base text-slate-primary overflow-x-hidden selection:bg-emerald/30 selection:text-white">
      <Navbar />

      <main id="main-content" role="main">
        <Hero />

        {/* Section Divider with subtle emerald glow */}
        <div className="relative h-px mx-auto max-w-5xl" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald/25 to-transparent" />
        </div>

        <About />

        <div className="relative h-px mx-auto max-w-5xl" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <Skills />

        <div className="relative h-px mx-auto max-w-5xl" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
        </div>

        <Projects />

        <div className="relative h-px mx-auto max-w-5xl" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <Journey />

        <div className="relative h-px mx-auto max-w-5xl" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
