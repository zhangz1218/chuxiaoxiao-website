// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    cacheDir: 'node_modules/.vite'
  },

  integrations: [react(), sitemap()],

  // 重定向配置
  redirects: {
    '/calendar': '/mood'
  },

  // 构建配置
  build: {
    // 内联样式，提升性能
    inlineStylesheets: 'auto'
  },

  // 缓存目录配置（避免跨盘 rename 错误）
  cacheDir: 'node_modules/.astro-cache',

  // 站点配置
  site: 'https://redclaw.work'
});
