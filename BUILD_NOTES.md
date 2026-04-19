# 建站经验与踩坑记录

## 技术选型

- **框架**：Astro（静态站点生成，性能优秀）
- **样式**：Tailwind CSS v4（注意：v4不支持 `@apply` 指令）
- **部署**：Vercel（免费，自动部署，但默认域名被墙）
- **域名**：阿里云（`.work` 后缀无需实名认证）

## 踩坑记录

### 1. Tailwind CSS v4 兼容性
- **问题**：`@apply` 指令报错
- **解决**：改用原生 CSS 类名或内联样式

### 2. 文件名大小写问题
- **问题**：Windows 不区分大小写，Linux（Vercel）严格区分
- **错误**：`Could not resolve '../layouts/Layout.astro'`
- **解决**：导入时核对实际文件名，统一命名规范
- **预防**：`git config core.ignorecase false` + `git status` 检查

### 3. Vercel 默认域名被墙
- **问题**：`*.vercel.app` 在中国大陆访问不稳定
- **解决**：购买自定义域名并绑定
- **推荐**：`.com`、`.work` 等国际域名无需实名认证

### 4. Git 代理配置
- **问题**：无法连接 GitHub
- **解决**：`git config --global http.proxy http://127.0.0.1:7897`

### 5. DNS 配置
- **CNAME vs A记录**：Vercel 推荐使用 A 记录（`76.76.21.21`）
- **冲突处理**：添加 A 记录前需删除 CNAME 记录

## 最佳实践

### 部署流程
1. 本地开发 → `npm run dev`
2. 测试通过 → `git add . && git commit -m "message" && git push`
3. Vercel 自动检测并部署
4. 等待 1-2 分钟生效

### 域名绑定流程
1. 购买域名（阿里云/腾讯云）
2. 添加 DNS 记录（A记录指向 `76.76.21.21`）
3. Vercel 项目设置 → Domains → 添加域名
4. 等待 DNS 生效（5-10分钟）

### 图片处理
- 用户发送图片 → 保存到桌面 → 用 `image` 工具识别
- 或上传到图床 → 用公网 URL 识别
