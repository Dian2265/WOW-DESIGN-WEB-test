export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string; // 图片文件名，例如: 'member-1.png'
  color: string; // 用于卡片装饰的颜色
}

// 团队成员数据
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dian',
    position: 'UI设计师',
    image: 'member-1.png',
    color: 'bg-red-500'
  },
  {
    id: 2,
    name: '乌鸦',
    position: 'UI设计师',
    image: 'member-2.png',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    name: '陈俊鸿',
    position: 'UI设计师',
    image: 'member-3.png',
    color: 'bg-yellow-500'
  },
  {
    id: 4,
    name: '米菲',
    position: 'UI设计师',
    image: 'member-4.png',
    color: 'bg-green-500'
  },
  {
    id: 5,
    name: '焖鱼',
    position: '体验设计师',
    image: 'member-5.png',
    color: 'bg-purple-500'
  },
  {
    id: 6,
    name: '阿祖',
    position: 'UI设计师',
    image: 'member-6.png',
    color: 'bg-pink-500'
  },
  {
    id: 7,
    name: '任梓宾',
    position: 'UI设计师',
    image: 'member-7.png',
    color: 'bg-indigo-500'
  },
  {
    id: 8,
    name: '小饼干',
    position: '体验设计师',
    image: 'member-8.png',
    color: 'bg-orange-500'
  },
  {
    id: 9,
    name: '蔡彦奇',
    position: 'UI设计师',
    image: 'member-9.png',
    color: 'bg-teal-500'
  },
  {
    id: 10,
    name: '华子',
    position: 'UI设计师',
    image: 'member-10.png',
    color: 'bg-cyan-500'
  },
  {
    id: 11,
    name: '邱柏安',
    position: 'UI设计师',
    image: 'member-11.png',
    color: 'bg-red-500'
  },
  {
    id: 12,
    name: '浪花',
    position: 'UI设计师',
    image: 'member-12.png',
    color: 'bg-blue-500'
  },
  {
    id: 13,
    name: '陈蓉',
    position: 'UI设计师',
    image: 'member-13.png',
    color: 'bg-yellow-500'
  },
  {
    id: 14,
    name: '刘嘉慧',
    position: 'UI设计师',
    image: 'member-14.png',
    color: 'bg-green-500'
  },
  {
    id: 15,
    name: 'Lena',
    position: '品牌运营设计师',
    image: 'member-15.png',
    color: 'bg-purple-500'
  },
  {
    id: 16,
    name: 'tansi',
    position: '平面设计师',
    image: 'member-16.png',
    color: 'bg-pink-500'
  },
  {
    id: 17,
    name: '杨洋',
    position: '平面设计师',
    image: 'member-17.png',
    color: 'bg-indigo-500'
  },
  {
    id: 18,
    name: '羚羊',
    position: '设计项目经理',
    image: 'member-18.png',
    color: 'bg-orange-500'
  },
  {
    id: 19,
    name: '烧酒',
    position: '品牌运营设计师',
    image: 'member-19.png',
    color: 'bg-teal-500'
  },
  {
    id: 20,
    name: '番茄',
    position: '品牌运营设计师',
    image: 'member-20.png',
    color: 'bg-cyan-500'
  },
  {
    id: 21,
    name: '铁雨',
    position: '品牌运营设计师',
    image: 'member-21.png',
    color: 'bg-red-500'
  },
  {
    id: 22,
    name: '野味',
    position: 'UI设计师',
    image: 'member-22.png',
    color: 'bg-blue-500'
  },
  {
    id: 23,
    name: '王雅琪',
    position: 'UI设计师',
    image: 'member-23.png',
    color: 'bg-yellow-500'
  },
  {
    id: 24,
    name: '李壮',
    position: 'UI设计师',
    image: 'member-24.png',
    color: 'bg-green-500'
  },
  {
    id: 25,
    name: '静怡',
    position: 'UI设计师',
    image: 'member-25.png',
    color: 'bg-purple-500'
  },
  {
    id: 26,
    name: 'Niel',
    position: 'UI设计师',
    image: 'member-26.png',
    color: 'bg-pink-500'
  },
  {
    id: 27,
    name: '鱼摆摆',
    position: 'UI设计师',
    image: 'member-27.png',
    color: 'bg-indigo-500'
  },
  {
    id: 28,
    name: '落月',
    position: 'UI设计师',
    image: 'member-28.png',
    color: 'bg-orange-500'
  },
  {
    id: 29,
    name: '迎庆',
    position: 'UI设计师',
    image: 'member-29.png',
    color: 'bg-teal-500'
  },
  {
    id: 30,
    name: '竹子',
    position: 'UI设计师',
    image: 'member-30.png',
    color: 'bg-cyan-500'
  },
  {
    id: 31,
    name: '汪雨晴',
    position: '视觉设计师',
    image: 'member-31.png',
    color: 'bg-red-500'
  }
];

// 可用的颜色选项
export const availableColors = [
  'bg-red-500',
  'bg-blue-500', 
  'bg-yellow-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-orange-500',
  'bg-teal-500',
  'bg-cyan-500'
];

