---
title: 打包分析
toc: menu
order: 5
---

<BackTop></BackTop>

# 打包分析

可视化并分析构建包，查看哪些模块占用空间大小，以及模块的依赖关系，根据分析结果来优化我们的项目。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/rollup-plugin-visualizer.png)

## 安装插件

```bash
# npm
npm i rollup-plugin-visualizer -D

# yarn
yarn add rollup-plugin-visualizer -D

# pnpm
pnpm add rollup-plugin-visualizer -D
```

## 配置插件

在 `vite.config.ts` 中配置插件：

```ts
// vite.config.ts

// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'

// 当前的执行命令
const lifecycle = process.env.npm_lifecycle_event

// 插件数组
const plugins = [
  vue(),
  vueJsx(),
]

// visualizer 命令显示打包分析
if (lifecycle === 'visualizer') {
  plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true }))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 配置less
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4569D4', // 设置antd主题色
        },
      },
    },
  },
})
```

在 `package.json` 中配置打包分析命令：`"visualizer": "vite build --mode visualizer"`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
   +"visualizer": "vite build --mode visualizer",
    "preview": "vite preview --port 4173",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit",
  },
}
```

## 参数说明

`visualizer(options)` 函数接收一个对象参数，可以配置打包分析样式、文件名等。

options 常用参数说明：

| 参数 | 默认值 | 说明 |
| :-: | --- | --- |
| `filename` | `stats.html` | 在项目根目录生成打包信息网页的名字。 |
| `title` | `Rollup Visualizer` | 打包信息网页的 title。 |
| `open` | `false` | 是否自动打开。 |
| `openOptions` | 详情可以看插件类型提示 | 自动打开的配置信息。 |
| `template` | `treemap` | 可视化的样式模板。可选值："sunburst"、"treemap"、"network"、"raw-data"、"list"; |
| `gzipSize` | `false` | 显示 gzip 压缩的文件大小 |
| `brotliSize` | `false` | 显示 brotli 压缩的文件大小 |
| `sourcemap` | `false` | 使用 sourcemap 来计算模块的大小 |





## 查看分析

配置好插件后我们执行 `npm run visualizer` 命令，当打包完成后就会自动在项目跟目录下生成一个名为 `stats.html` 的网页，并自动用浏览器打开，显示内容就是我们项目各种依赖分析。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vite-visualizer.png)


## 样式展示

当 `template: 'treemap'`：

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vite-visualizer-treemap.png)

当 `template: 'network'`：

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vite-visualizer-network.png)

当 `template: 'sunburst'`：

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vite-visualizer-sunburst.png)
