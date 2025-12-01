import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Articles from './components/Articles';
import About from './components/About';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'articles':
        return <Articles />;
      case 'about':
        return <About />;
      case 'home':
      default:
        return (
          <main>
            {/* Hero sits at the bottom (z-0) and stays sticky */}
            <Hero />
            
            {/* 
              Content Wrapper (The "Mask/Cover") 
              - z-10: Sits on top of Hero
              - bg-wow-black: Ensures opacity so Hero is hidden as we scroll
              - rounded-t-3xl: Adds a slight curve to the top of the "sheet" for a modern feel
              - shadow: Adds depth to separate it from the hero
            */}
            <div className="relative z-10 bg-wow-black rounded-t-[2.5rem] shadow-[0_-20px_80px_-20px_rgba(0,0,0,1)] border-t border-white/10 mt-[-1px]">
              {/* Philosophy is now the first section after scrolling */}
              <Philosophy />
              <Services />
              <Careers />
              <Contact />
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-wow-black text-wow-white selection:bg-pink-500 selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderContent()}
    </div>
  );
};

export default App;