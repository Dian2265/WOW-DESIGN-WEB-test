import React from 'react';
import { ArrowDown } from 'lucide-react';
import { MorphingText } from './ui/LiquidText';

const Hero: React.FC = () => {
  return (
    // Changed: sticky top-0, h-screen, z-0 to allow content to slide over it
    <section id="home" className="sticky top-0 left-0 w-full h-screen z-0 flex flex-col justify-center items-center px-6 overflow-hidden bg-wow-black">
      
      <div className="relative z-20 text-center space-y-8 max-w-7xl mx-auto w-full pointer-events-none">
        <p className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] animate-fade-in-up">
          EST . Xiamen
        </p>
        
        <div className="animate-fade-in-up delay-100 py-4">
          <MorphingText 
            texts={[
              "WOW DESIGN",
              "DIGITAL ART",
              "CREATIVE", 
              "INNOVATION"
            ]} 
            className="text-white text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter"
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
          我们不仅创造视觉体验，更在加速重塑 AI 时代的设计工作。<br />
          We don't just create visual experiences; we accelerate the reshaping of design work in the AI era.
        </p>
      </div>

      <div className="absolute bottom-12 animate-bounce cursor-pointer z-20 pointer-events-auto">
        <a href="#philosophy" className="text-gray-500 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;