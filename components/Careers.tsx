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

        <div className="flex justify-center">
          <img 
            src="/images/careers-team.jpg" 
            alt="加入我们的团队" 
            className="rounded-2xl w-full max-w-5xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;