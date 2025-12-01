
import React, { useState } from 'react';
import { X } from 'lucide-react';

const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{id: number, image: string, color: string} | null>(null);

  // Generate 30 mock items for the grid
  const gridItems = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/photo-${[
      '1534528741775-53994a69daeb',
      '1517841905240-472988babdf9',
      '1506794778202-cad84cf45f1d',
      '1531746020798-e6953c6e8e04',
      '1524504388940-b1c1722653e1',
      '1507003211169-0a1dd7228f2d',
      '1544005313-94ddf0286df2',
      '1438761681033-6461ffad8d80',
      '1529626455594-4ff0802cfb7e',
      '1513956589380-bad6acb9b9d4'
    ][i % 10]}?q=80&w=500&auto=format&fit=crop`,
    color: [
      'bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500',
      'bg-pink-500', 'bg-indigo-500', 'bg-orange-500', 'bg-teal-500', 'bg-cyan-500'
    ][i % 10]
  }));

  const renderSpotlightModal = () => {
    if (!selectedImage) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setSelectedImage(null)}
      >
        <div
          className="relative max-w-lg w-full bg-wow-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[2/3]">
            <img
              src={selectedImage.image}
              alt={`Member ${selectedImage.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Member {selectedImage.id}</h3>
              <p className="text-gray-300 text-lg">Senior Designer</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/10"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-wow-black pt-28 lg:pt-0 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Sticky Info */}
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center space-y-10">
              {/* Title Removed as requested */}

              <div className="space-y-6 animate-fade-in-up">
                <div className="w-16 h-1 bg-white/20 mb-8"></div>
                <p className="text-white text-3xl md:text-4xl font-display font-bold leading-tight">
                  我们是一群对影像设计、AI 创新充满激情的设计师
                </p>
                <p className="text-gray-500 text-base leading-relaxed pt-4 border-t border-white/5">
                  在这个快速变化的数字世界中，我们坚守设计的本质。我们相信，伟大的设计不仅仅是视觉的享受，更是解决问题的钥匙。每一个像素，每一行代码，都承载着我们对完美的执着追求。
                </p>
              </div>

              <div className="hidden lg:block pt-12">
                 <div className="text-sm text-gray-600 uppercase tracking-widest mb-4">Established</div>
                 {/* Year removed */}
                 <div className="text-white text-xl font-display">Xiamen</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Stream */}
          <div className="w-full lg:w-2/3 space-y-16 lg:pt-32">
            
            {/* Team Hero Image - Local File Reference */}
            <div className="w-full relative rounded-2xl overflow-hidden aspect-video border border-white/10 group shadow-2xl">
               <img 
                  src="/team-collage.png" 
                  alt="Team Collage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
               />
            </div>

            {/* Team Grid */}
            <div>
              <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                <h2 className="text-2xl font-display font-bold text-white">The Team</h2>
                <span className="text-gray-500 text-sm font-mono">30 MEMBERS</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {gridItems.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setSelectedImage(item)}
                    className="group relative aspect-[2/3] overflow-hidden rounded-xl bg-white/5 border border-white/5 cursor-pointer"
                  >
                    <img 
                      src={item.image} 
                      alt={`Team Member ${item.id}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Member {item.id}</span>
                      <span className="text-gray-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Designer</span>
                    </div>

                    <div className={`absolute top-0 right-0 w-2 h-2 ${item.color} rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                ))}
                
                {/* Join Us Card */}
                <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-white/5 border border-white/10 border-dashed flex flex-col items-center justify-center text-center p-6 group hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    <span className="text-2xl">+</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Join Us</h3>
                  <p className="text-sm text-gray-400">Be the next extraordinary member.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {renderSpotlightModal()}
    </div>
  );
};

export default About;
