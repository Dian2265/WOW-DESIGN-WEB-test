import React from 'react';
import { 
  FileText, MessageCircle, Crown, Star, 
  Video, Gamepad2, Camera, Cloud, 
  ScanFace, Radio 
} from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';

const brands = [
  { id: 1, name: '像素蛋糕', icon: FileText, color: 'text-blue-500', link: 'https://www.pixcakeai.com/', image: '/images/brands/pixcake.png' },
  { id: 2, name: '像素蛋糕移动端', icon: MessageCircle, color: 'text-white', link: 'https://www.pixcakeai.com/', image: '/images/brands/pixcake-mobile.png' },
  { id: 3, name: '像素苏打', icon: Crown, color: 'text-red-500', link: 'https://www.pixcakeai.com/', image: '/images/brands/pixsoda.png' },
  { id: 4, name: '像素曲奇', icon: Star, color: 'text-yellow-400', link: 'https://www.pixcakeai.com/', image: '/images/brands/pixcookie.png' },
  { id: 5, name: '像素芝士', icon: Video, color: 'text-pink-500', link: 'https://www.pixcakeai.com/', image: '/images/brands/pixcheese.png' },
  { id: 6, name: '像素吐司', icon: Gamepad2, color: 'text-amber-500', link: 'https://www.pixcakeai.com/', image: '/images/brands/pixtoast.png' },
  { id: 7, name: 'Evoto', icon: Camera, color: 'text-rose-500', link: 'https://www.pixcakeai.com/', image: '/images/brands/evoto.png' },
  { id: 8, name: 'Evoto移动端', icon: Cloud, color: 'text-sky-500', link: 'https://www.pixcakeai.com/', image: '/images/brands/evoto-mobile.png' },
  { id: 9, name: 'E-Video', icon: ScanFace, color: 'text-emerald-500', link: 'https://www.pixcakeai.com/', image: '/images/brands/e-video.png' },
  { id: 10, name: 'Evoto Instant', icon: Radio, color: 'text-slate-200', link: 'https://www.pixcakeai.com/', image: '/images/brands/evoto-instant.png' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 bg-[#0c0c0c] text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-medium tracking-[0.2em] text-gray-500 mb-4 uppercase">EST . XIAMEN</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight">
            INNOVATION
          </h3>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            我们不仅创造视觉体验，更在加速重塑 AI 时代的设计工作。<br/>
            We don't just create visual experiences; we accelerate the reshaping of design work in the AI era.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((item) => (
            <a 
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-full block rounded-[1.75rem] border-[0.75px] border-white/5 p-2 group"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-4 rounded-3xl bg-wow-black/80 p-8 shadow-sm overflow-hidden aspect-square transition-colors group-hover:bg-white/[0.03]">
                <div className="w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="p-4 rounded-2xl bg-white/5 transition-all duration-300 group-hover:bg-white/10">
                      <item.icon size={36} className={`transition-colors duration-300 ${item.color}`} strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                
                <span className="text-base font-medium text-gray-400 text-center transition-colors duration-300 group-hover:text-white">
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;