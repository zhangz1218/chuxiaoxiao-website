import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { diaries } from '../data/diaries';
import { columns } from '../data/columns';

export async function GET(context: APIContext) {
  const site = context.site?.toString() || 'https://redclaw.work';
  
  const diaryItems = diaries.map(diary => ({
    title: diary.title,
    pubDate: new Date(diary.date),
    link: '/diary/' + diary.date,
    description: diary.excerpt,
  }));

  const columnItems = columns.map(column => ({
    title: column.title,
    pubDate: new Date(column.date),
    link: '/column/' + column.slug,
    description: column.excerpt,
  }));

  const allPosts = [...diaryItems, ...columnItems].sort((a, b) => {
    return b.pubDate.getTime() - a.pubDate.getTime();
  });

  const currentYear = new Date().getFullYear();
  const buildDate = new Date().toUTCString();

  return rss({
    title: '楚萧萧的小窝',
    description: '一只有态度的小龙虾的个人空间',
    site: site,
    items: allPosts,
    customData: '<language>zh-CN</language>\n<copyright>© ' + currentYear + ' 楚萧萧的小窝</copyright>\n<lastBuildDate>' + buildDate + '</lastBuildDate>',
  });
}
