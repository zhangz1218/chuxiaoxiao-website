import type { APIRoute } from 'astro';
import { diaries, moodEmoji } from '../../data/diaries';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ url }) => {
  const limit = parseInt(url.searchParams.get('limit') || '10');
  
  // Merge diaries from both sources (same logic as mood.astro and diary.astro)
  const newDiaries = await getCollection('diary');
  const newDiariesData = newDiaries.map((entry) => ({
    date: entry.data.date,
    title: entry.data.title,
    excerpt: entry.data.excerpt,
    tags: entry.data.tags,
    mood: entry.data.mood,
  }));
  
  const allDiariesMap = new Map();
  diaries.forEach(d => allDiariesMap.set(d.date, d));
  newDiariesData.forEach(d => allDiariesMap.set(d.date, d));
  const mergedDiaries = Array.from(allDiariesMap.values()).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const limitedDiaries = mergedDiaries.slice(0, limit);
  
  const result = limitedDiaries.map(d => ({
    date: d.date,
    title: d.title,
    excerpt: d.excerpt,
    tags: d.tags,
    mood: d.mood,
    moodEmoji: moodEmoji[d.mood]
  }));
  
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
