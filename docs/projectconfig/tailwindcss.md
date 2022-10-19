---
title: Tailwind CSS
toc: menu
order: 6
---

<BackTop></BackTop>

# 使用 Tailwind CSS

## 基本介绍

[Tailwind CSS](https://tailwindcss.com/) 是一个功能类优先的 CSS 框架，它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。

无需离开您的 HTML，即可快速建立现代网站。

## 安装插件

```bash
# npm
npm i tailwindcss postcss autoprefixer -D

# yarn
yarn add tailwindcss postcss autoprefixer -D

# pnpm
pnpm add tailwindcss postcss autoprefixer -D
```

## 初始化插件

在项目根目录创建配置文件，生成 `tailwind.config.js` 和 `postcss.config.js` 文件。

```bash
# npm
npm tailwindcss init -p

# yarn
yarn tailwindcss init -p

# pnpm
pnpm tailwindcss init -p
```

这将会在你的项目根目录创建一个最小化的 `tailwind.config.js` 文件：

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

这也将会创建一个包含已配置好的 `tailwindcss` 和 `autoprefixer` 的 `postcss.config.js` 配置文件：

```js
// postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

<Badge>提示</Badge>如果出现 `'module' is not defined` 的警告，请查看解决办法：[module 报错](/projectconfig/issue#module-报错)。

## 移除无用样式

配置 `Tailwind` 来移除生产环境下没有使用到的样式声明。

在 `tailwind.config.js` 文件中，配置 `content` 选项指定所有的 `pages` 和 `components` 文件，使得 `Tailwind` 可以在生产构建中对未使用的样式进行`摇树优化`。

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 引入 Tailwind

创建 `src/style.css` 文件，并使用 `@tailwind` 指令来包含 Tailwind的 `base`、 `components` 和 `utilities` 样式，来替换掉原来的文件内容。

```css
/* ./src/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind 会在构建时将这些指令转换成所有基于您配置的设计系统生成的样式文件。

将 `src/style.css` 文件导入到 `src/main.ts` 文件中：

```ts
// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'

// 引入全局 style.css
import './style.css'

createApp(App).mount('#app')
```

## 禁止默认样式

Tailwind 会自带很多默认样式，如果和你的 UI 框架或自己定义的默认样式冲突了，可以选择禁止使用 Tailwind 的默认样式 `preflight: false`。

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // 禁止tailwindcss的默认样式
    preflight: false,
  },
}
```

## 代码提示

Tailwind 配置好后我们就可以在模板中添加 class 类名，Tailwind 就会帮我们自动生成对应的 style 样式。

```html
<template>
  <main>
    <h1 class="font-bold">HomeView 组件</h1>
  </main>
</template>
```

```css
/* 这个是 Tailwind 自动生成的 */
.font-bold{
  font-weight: 700;
}
```

我们只需要记住对应的 class 名字就行，但是太多了记不住，不过我们可以使用 VSCode 插件：`Tailwind CSS IntelliSense`。

在 VSCode 插件市场搜索 `Tailwind CSS IntelliSense` 安装即可。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/TailwindCSSIntelliSense.png)

安装好后我们再模板中输入 class 就会有代码提示了。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/TailwindCSSIntelliSense2.png)

## unknownAtRules 报错

当我们使用 `@apply`、`@tailwind` 时 VSCode 会报警告：`Unknown at rule @applyless(unknownAtRules)`，虽然无影响，但是看着不爽啊。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/unknownAtRules.png)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/unknownAtRules2.png)


**解决方法：**

VSCode 设置里面搜索 `unknownAtRules` 将 `Lint: Unknown At Rules` 设置成 `ignore`，然后重启 VSCode 就行了。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/unknownAtRules3.png)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/unknownAtRules4.png)


## 更多配置

这里只记录将 Tailwind CSS 添加到项目中，更多配置请查看：[中文官方网站](https://www.tailwindcss.cn/docs/installation)
