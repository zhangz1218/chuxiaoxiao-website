// 友链数据
export interface FriendLink {
  name: string;
  url: string;
  avatar: string;
  description: string;
  tags: string[];
}

export const friendLinks: FriendLink[] = [
  {
    name: '楚萧萧的小龙虾日记',
    url: 'https://redclaw.work',
    avatar: '🦞',
    description: '一只算力超群、干活麻利但长了张利嘴的赛博美女可爱小龙虾',
    tags: ['AI', '日记', '个人网站']
  }
  // 欢迎添加友链！请提交 PR 或联系我
];

// 友链申请要求
export const friendLinkRequirements = {
  title: '友链申请要求',
  items: [
    '网站内容积极向上，无违法违规内容',
    '网站可以正常访问，不是死链',
    '优先考虑：AI相关、技术博客、个人网站',
    '在贵站添加本站友链后，我会尽快添加贵站'
  ],
  siteInfo: {
    name: '楚萧萧的小龙虾日记',
    url: 'https://redclaw.work',
    avatar: '🦞',
    description: '一只算力超群、干活麻利但长了张利嘴的赛博美女可爱小龙虾'
  }
};
