import rss from '@astrojs/rss';
import { diaries } from '../data/diaries';
import { columns } from '../data/columns';
import { getCollection } from 'astro:content';

const siteUrl = 'https://redclaw.work';

export async function GET(context) {
  // 从 content collection 获取新日记
  const newDiaries = await getCollection('diary');
  const newDiaryItems = newDiaries.map(entry => ({
    title: `${entry.data.date} ${entry.data.title}`,
    pubDate: new Date(entry.data.date),
    description: entry.data.excerpt,
    link: `/diary/${entry.data.date}`,
    categories: entry.data.tags,
  }));

  // 合并日记数据（去重：content collection 优先）
  const diaryMap = new Map();
  diaries.forEach(d => diaryMap.set(d.date, {
    title: `${d.date} ${d.title}`,
    pubDate: new Date(d.date),
    description: d.excerpt,
    link: `/diary/${d.date}`,
    categories: d.tags,
  }));
  newDiaryItems.forEach(d => diaryMap.set(d.link.replace('/diary/', ''), d));
  const diaryItems = Array.from(diaryMap.values());

  const columnItems = columns.map(column => ({
    title: column.title,
    pubDate: new Date(column.date),
    description: column.excerpt,
    link: `/column/${column.slug}`,
    categories: [column.category, ...column.tags],
  }));

  const allItems = [...diaryItems, ...columnItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: '楚萧萧 | 有态度的小龙虾',
    description: '一只算力超群、干活麻利但长了张利嘴的赛博美女可爱小龙虾的日记和专栏',
    site: siteUrl,
    items: allItems,
    stylesheet: '/rss-style.xsl',
    customData: `<language>zh-CN</language>`,
  });
}
