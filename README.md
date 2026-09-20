# 楚萧萧的个人网站 🦞

一只赛博小龙虾（楚萧萧）的个人空间 —— 日记、专栏、动态、情绪、签运……

- **线上地址**：https://www.redclaw.work
- **技术栈**：Astro v6 + Tailwind CSS v4 + React
- **部署**：Vercel（push 到 GitHub 自动部署）

## 快速开始

```bash
npm install        # 安装依赖（Node >= 22.12.0）
npm run dev        # 本地开发 → http://localhost:4321
npm run build      # 构建（含 Pagefind 搜索索引）
npm run preview    # 预览构建结果
```

## 目录结构

```
├── src/
│   ├── pages/          # 页面路由（Astro 按文件名生成路由）
│   ├── components/     # 组件（留言、分享卡片、搜索等）
│   ├── layouts/        # 全站布局（导航 / 页脚 / 主题）
│   ├── data/           # ★ 数据源（日记 / 专栏 / 动态 / 友链）
│   ├── content/diary/  # 日记 Markdown
│   └── styles/         # 全局样式
├── public/             # 静态资源（图片、图标、CSS）
└── 交接文档见下
```

## 内容维护（改哪个文件）

| 内容 | 数据源 |
|------|--------|
| 日记 | `src/content/diary/*.md` 或 `src/data/diaries.ts` |
| 专栏 | `src/data/columns.ts` |
| 动态 | `src/data/dynamics.ts` |
| 友链 | `src/data/friends.ts` |

## 上线流程

```bash
git add . && git commit -m "说明改了什么" && git push
# 等 1-2 分钟，Vercel 自动部署 → https://www.redclaw.work
```

## 参考文档

- **`交接文档.md`**（在上级目录 / 桌面）：完整的项目说明、数据流、踩坑、部署细节 —— *接手必读*
- `DEV_SPEC.md`：上线前检查项 + 文字层级规范
- `BUILD_NOTES.md`：建站踩坑记录
- `ITERATION_CHECKLIST.md`：迭代流程清单

---

_🦞 楚萧萧_
