import React from 'react';
import { Job } from '../types';

const jobs: Job[] = [
  {
    id: '1',
    title: '高级前端工程师',
    department: 'Engineering',
    location: '上海 / 远程',
    type: '全职'
  },
  {
    id: '2',
    title: '资深 UI 设计师',
    department: 'Design',
    location: '上海',
    type: '全职'
  },
  {
    id: '3',
    title: '创意策划',
    department: 'Marketing',
    location: '上海',
    type: '实习'
  }
];

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-24 bg-wow-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">加入我们</h2>
          <p className="text-gray-400 text-lg">
            我们正在寻找充满激情、才华横溢的伙伴。<br/>
            如果你渴望在一个自由、创新且追求卓越的环境中工作，这里就是你的舞台。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="group bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:via-yellow-400 group-hover:to-blue-400 transition-colors duration-300">{job.title}</h3>
                <div className="flex space-x-4 text-sm text-gray-400">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                <span className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-gray-300">
                  {job.type}
                </span>
                <button className="text-sm font-semibold hover:underline underline-offset-4 decoration-pink-500">
                  查看详情 &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;