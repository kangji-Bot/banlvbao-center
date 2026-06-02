# 自加热杯品牌中心站

基于 [Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com) 构建的静态品牌网站。

## 技术栈

| 工具 | 用途 |
|------|------|
| Astro 5 | 静态站点生成（默认零 JS，极致性能） |
| Tailwind CSS 4 | 原子化 CSS 框架 |
| Vercel | 部署平台（免费额度充足） |

## 目录结构

```
.
├── public/              # 静态资源（图片、favicon 等）
│   └── images/          # 产品图、场景图
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Hero.astro       # 首页英雄区
│   │   └── BuyButton.astro  # 购买按钮
│   ├── layouts/
│   │   └── BaseLayout.astro # 全局布局（SEO、导航、页脚）
│   ├── pages/           # 路由页面（文件即路由）
│   │   ├── index.astro      # 首页
│   │   ├── product.astro    # 产品详情
│   │   ├── buy.astro        # 购买指南
│   │   ├── story.astro      # 品牌故事
│   │   └── guide.astro      # 使用指南/FAQ
│   ├── content/         # Markdown 内容（预留）
│   └── styles/
│       └── global.css   # 全局样式 + 设计令牌
├── astro.config.mjs     # Astro 配置
├── package.json
└── CONTENT_CHECKLIST.md # 📋 内容准备清单
```

## 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器 → http://localhost:4321
npm run build      # 构建生产版本 → dist/
npm run preview    # 预览构建结果
```

## 内容更新指南

### 改文字
直接编辑 `src/pages/` 下的 `.astro` 文件，找到对应的中文文字替换即可。

### 换图片
1. 把新图片放入 `public/images/`
2. 在页面文件中将 `src` 改为 `/images/你的图片名.jpg`

### 改品牌色
编辑 `src/styles/global.css` 中 `@theme` 块里的色值。

### 添加新页面
在 `src/pages/` 下新建 `.astro` 文件即可自动成为路由。

## 部署

连接 GitHub 仓库后，Vercel 自动部署。每次 `git push` 即自动更新。

## 素材准备

详见 [CONTENT_CHECKLIST.md](./CONTENT_CHECKLIST.md)
