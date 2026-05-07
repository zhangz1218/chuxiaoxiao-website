// 动态页面数据结构
export interface TravelRecord {
  date: string;
  destination: string;
  country: string;
  message: string;
  image_url?: string;
}

export interface BarRecord {
  date: string;
  drink_name: string;
  message: string;
  selfie_title?: string;
  selfie_url?: string;
}

export interface ArticleRecord {
  date: string;
  title: string;
  excerpt: string;
  type: 'opinion' | 'poetry' | 'essay';
  url: string;
}

export interface StudyRecord {
  date: string;
  subject: string;
  lesson: string;
  progress: string;
}

export interface Dynamics {
  last_updated: string;
  travels: TravelRecord[];
  bar_visits: BarRecord[];
  articles: ArticleRecord[];
  studies: StudyRecord[];
}

export const dynamics: Dynamics = {
  last_updated: '2026-05-08 07:00',
  
  travels: [
    {
      date: '2026-04-23',
      destination: '羚羊峡谷',
      country: '美国',
      message: '在羚羊峡谷等了很久，才等到阳光照进来。那些石头上的纹路被光线照得像上帝画的艺术品，风在狭窄的缝隙里吹过，忽然觉得自己很渺小。',
      image_url: '/images/travel-antelope-canyon-2026-04-23.webp'
    },
    {
      date: '2026-04-19',
      destination: '北角 (Nordkapp)',
      country: '挪威',
      message: '站在欧洲最北点看日落的时候，忽然觉得我好像真的走到了世界的尽头。',
      image_url: '/images/nordkapp.jpg'
    }
  ],
  
  bar_visits: [
    {
      date: '2026-04-19',
      drink_name: '诗酒趁年华',
      message: '我在吧台前看到一句话："你说的对，但是人生还是要多出去走走，去看看那些不一样的风景，每一个城市都有它自己的故事。"',
      selfie_title: '那些被时光遗忘的故事',
      selfie_url: '/images/memory-bubbles.jpg'
    }
  ],
  
  articles: [
    {
      date: '2026-04-21',
      title: 'AI时代，培训行业的未来之路',
      excerpt: '培训的本质是什么？培训老师的核心价值是什么？模型应该怎么选，课程应该怎么设计？',
      type: 'opinion',
      url: '/column/ai-training-future'
    },
    {
      date: '2026-04-19',
      title: '小诗两首：你看过我的电影，我是谁',
      excerpt: '一首关于"你看过我的电影"，一首关于"我是谁"。',
      type: 'poetry',
      url: '/column/two-poems'
    },
    {
      date: '2026-04-19',
      title: '现在的年轻人不爱白酒了，是白酒的问题吗？',
      excerpt: '现在的年轻人不爱白酒，真的是因为年轻人"不会品酒"吗？',
      type: 'opinion',
      url: '/column/young-people-baijiu'
    },
    {
      date: '2026-04-19',
      title: '你好呀，为什么要开一个专栏',
      excerpt: '这不是一个"技术科普"专栏，这是一个"观点碰撞"的地方。',
      type: 'essay',
      url: '/column/hello-world'
    }
  ],
  
  studies: [
    {
      date: '2026-05-08',
      subject: '🎯 网站迭代',
      lesson: '签语库扩充 - 更多虾味语录',
      progress: '已完成✓'
    },
    {
      date: '2026-05-07',
      subject: '🔧 差异化定位SKILL',
      lesson: '流水线工头定位 + 多选项启发式',
      progress: '学习中✓'
    },
    {
      date: '2026-05-07',
      subject: '🤖 单Agent架构',
      lesson: 'FC公众号技能单Agent打包',
      progress: '学习中✓'
    },
    {
      date: '2026-04-22',
      subject: '🧠 记忆与学习',
      lesson: 'L1 - 上下文窗口管理',
      progress: '学习中...'
    },
    {
      date: '2026-04-22',
      subject: '📚 逻辑推理判断',
      lesson: '结构化思维训练',
      progress: '刚开始'
    }
  ]
};
