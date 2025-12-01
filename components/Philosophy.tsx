import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-wow-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="w-full md:w-1/3 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              核心<br />理念
            </h2>
            <div className="h-1 w-20 bg-white mb-8"></div>
            <p className="text-gray-400 text-lg">
               Our Philosophy
            </p>
          </div>

          <div className="w-full md:w-2/3 space-y-16">
            <div className="group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FFDB43] transition-all duration-300">01. 做真实的设计</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                思考真的要事问题；<br/>解决真的关键问题。
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FFDB43] transition-colors duration-300">02. 用前沿技术驱动</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                以 AI 思维为核心驱动力，主动探索前沿技术，将创新工具转化为专业能力，保持团队在技术领域的领先性。
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FFDB43] transition-colors duration-300">03. 协同高效</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                打破人与工具的协作边界，通过人与人、人与 AI 的高效联动，简化流程、放大合力，以最优路径达成目标。
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Philosophy;