---
title: Webpack插件
toc: menu
order: 10
---

<BackTop></BackTop>

# webpack 插件库

## 进度条

### progress-bar-webpack-plugin

```bash
$ yarn add progress-bar-webpack-plugin -D
```

```js
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  plugins: [new ProgressBarWebpackPlugin()],
};
```

**插件名称：** [progress-bar-webpack-plugin](https://www.npmjs.com/package/progress-bar-webpack-plugin)

**在线示例：** [点击查看示例](https://github.com/clessg/progress-bar-webpack-plugin#readme)

**插件简介：** webpack 打包的时候使用的进度条插件。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/progress-bar-webpack-plugin.gif)

### webpackbar

```bash
$ yarn add webpackbar -D
```

```js
const WebpackBar = require('webpackbar');

module.exports = {
  plugins: [new WebpackBar()],
};
```

**插件名称：** [webpackbar](https://www.npmjs.com/package/webpackbar)

**在线示例：** [点击查看示例](https://www.npmjs.com/package/webpackbar)

**插件简介：** Webpack 的优雅 ProgressBar 和 Profiler。

- 在构建或观看时显示优雅的进度条。

- 支持多个并发构建（对 SSR 有用）。

- 漂亮的打印文件名和加载器。

- Windows 兼容。

- 高级构建分析器。

- 使用完全可定制。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/webpackbar.gif)

## 打包分析

```bash
$ yarn add webpack-bundle-analyzer -D
```

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [new BundleAnalyzerPlugin()],
};
```

**插件名称：** [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

**在线示例：** [点击查看示例](https://github.com/webpack-contrib/webpack-bundle-analyzer)

**插件简介：** 使用交互式可缩放树形图可视化 webpack 输出文件的大小。打包文件分析工具我们就可以优化我们的项目。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/webpack-bundle-analyzer.png)

## 按需组件自动导入

```bash
$ yarn add unplugin-vue-components -D
```

**插件名称：** [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

**在线示例：** [点击查看示例](https://github.com/antfu/unplugin-vue-components)

**插件简介：** Vue 的按需组件自动导入。

```html
<template>
  <div>
    <!-- 无需导入，直接用 -->
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>
```

## 自动导入 API

```bash
$ yarn add unplugin-auto-import -D
```

**插件名称：** [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)

**在线示例：** [点击查看示例](https://github.com/antfu/unplugin-auto-import#readme)

**插件简介：** 自动导入 Vite、Webpack、Rollup 和 esbuild 的 API。支持 TypeScript。

```js
/* Vue */

// without
import { computed, ref } from 'vue';
const count = ref(0);
const doubled = computed(() => count.value * 2);

// with
const count = ref(0);
const doubled = computed(() => count.value * 2);

/* React */

// without
import { useState } from 'react';
export function Counter() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}

// with
export function Counter() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}
```
