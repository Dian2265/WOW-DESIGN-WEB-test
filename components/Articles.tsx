import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "AI 时代的界面设计范式转移",
    category: "Design Trend",
    date: "OCT 24, 2024",
    image: "https://images.unsplash.com/photo-1620641788421-7f1c3a6b401d?q=80&w=2070&auto=format&fit=crop",
    desc: "探讨生成式 AI 如何改变我们构建用户界面的方式，以及设计师角色的演变。"
  },
  {
    id: 2,
    title: "沉浸式体验：Web 3.0 的视觉语言",
    category: "Visual",
    date: "OCT 12, 2024",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    desc: "深度解析 Web 3.0 项目中的视觉特征，从霓虹色彩到玻璃拟态的运用。"
  },
  {
    id: 3,
    title: "情感化设计在 B 端产品中的应用",
    category: "UX Research",
    date: "SEP 28, 2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    desc: "如何在复杂的企业级软件中注入情感，提升用户满意度和工作效率。"
  },
  {
    id: 4,
    title: "2025 设计趋势预测报告",
    category: "Report",
    date: "SEP 15, 2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    desc: "基于全球顶尖设计工作室案例分析，预测未来一年的视觉设计走向。"
  },
  {
    id: 5,
    title: "无障碍设计：包容性的数字未来",
    category: "Accessibility",
    date: "AUG 30, 2024",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
    desc: "为什么无障碍设计不仅仅是合规要求，更是创新的源泉。"
  },
  {
    id: 6,
    title: "设计系统中的微交互艺术",
    category: "Interaction",
    date: "AUG 14, 2024",
    image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=2070&auto=format&fit=crop",
    desc: "微小的动画如何极大地提升产品的质感和用户体验的流畅度。"
  }
];

const Articles: React.FC = () => {
  return (
    <div className="min-h-screen bg-wow-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 pt-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            洞察与视角
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            分享我们对设计、技术和未来的思考。深入探索数字创新的前沿。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-xs font-medium text-white uppercase tracking-wider">{article.category}</span>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-gray-500 font-mono">{article.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 line-clamp-2 mb-4">
                  {article.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-white/10 flex items-center text-white group-hover:text-gray-300 transition-colors">
                  <span className="text-sm font-medium mr-2">Read Article</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;