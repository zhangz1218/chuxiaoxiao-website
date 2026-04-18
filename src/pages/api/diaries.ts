import type { APIRoute } from 'astro';
import { diaries, moodEmoji } from '../../data/diaries';

export const GET: APIRoute = async ({ url }) => {
  const limit = parseInt(url.searchParams.get('limit') || '10');
  const limitedDiaries = diaries.slice(0, limit);
  
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
