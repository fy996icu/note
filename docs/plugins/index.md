---
title: Vue插件
toc: menu
order: 0
---

<BackTop></BackTop>

# Vue 插件

## Hooks 库

### VueUse

基于 Vue 组合实用程序的集合。

```bash
# npm
npm i @vueuse/core

# yarn
yarn add @vueuse/core

# pnpm
pnpm add @vueuse/core
```

**插件名称：** [VueUse](https://www.npmjs.com/package/@vueuse/core)

**在线示例：** [点击查看示例](https://vueuse.org/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vueuse.png)

### vue-composable

这个库的目标是成为许多现实世界可组合函数的一站式商店，通过积极的 tree-shaking 来让你的最终代码保持清晰。

```bash
# npm
npm i vue-composable

# yarn
yarn add vue-composable

# pnpm
pnpm add vue-composable
```

**插件名称：** [vue-composable](https://www.npmjs.com/package/vue-composable)

**在线示例：** [点击查看示例](https://pikax.me/vue-composable/#introduction)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-composable.png)

## 数字滚动

### vue-count-to

```bash
# npm
npm i vue-count-to

# yarn
yarn add vue-count-to

# pnpm
pnpm add vue-count-to
```

**插件名称：** [vue-count-to](https://www.npmjs.com/package/vue-count-to)

**在线示例：** [点击查看示例](http://panjiachen.github.io/countTo/demo/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-count-to.png)

## 图片裁剪

### vue-cropper

```bash
# npm
npm i vue-cropper

# yarn
yarn add vue-cropper

# pnpm
pnpm add vue-cropper
```

**插件名称：** [vue-cropper](https://www.npmjs.com/package/vue-cropper)

**在线示例：** [点击查看示例](https://codepen.io/xyxiao001/pen/wxwKGz)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-cropper.png)

## 银行账号识别

### bankcardinfo

通过银行卡号查询银行类型和银行卡类型

```bash
# npm
npm i bankcardinfo

# yarn
yarn add bankcardinfo

# pnpm
pnpm add bankcardinfo
```

**插件名称：** [bankcardinfo](https://www.npmjs.com/package/bankcardinfo/v/2.0.1?activeTab=versions)

## 代码差异对比

### v-code-diff

```bash
# npm
npm i v-code-diff

# yarn
yarn add v-code-diff

# pnpm
pnpm add v-code-diff

# Vue2 用户需要额外安装 composition-api
yarn add @vue/composition-api
```

**插件名称：** [v-code-diff](https://www.npmjs.com/package/v-code-diff)

**在线示例：** [点击查看示例](https://www.vue365.cn/code_demo.php?id=4920)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/v-code-diff.png)

## 拾色器

### vue-color

```bash
# npm
npm i vue-color

# yarn
yarn add vue-color

# pnpm
pnpm add vue-color
```

**插件名称：** [vue-color](https://www.npmjs.com/package/vue-color)

**在线示例：** [点击查看示例](http://xiaokaike.github.io/vue-color/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-color.png)

## 图像查看器

### v-viewer

```bash
# npm
npm i v-viewer

# yarn
yarn add v-viewer

# pnpm
pnpm add v-viewer
```

**插件名称：** [v-viewer](https://www.npmjs.com/package/v-viewer)

**在线示例：** [点击查看示例](https://mirari.cc/v-viewer/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/v-viewer.png)

## 图像比较

### img-comparison-slider

```bash
# npm
npm i img-comparison-slider

# yarn
yarn add img-comparison-slider

# pnpm
pnpm add img-comparison-slider
```

**插件名称：** [img-comparison-slider](https://www.npmjs.com/package/img-comparison-slider)

**在线示例：** [点击查看示例](https://img-comparison-slider.sneas.io/examples.html)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/img-comparison-slider.png)

## 3D 模型查看器

### vue-3d-model

```bash
# npm
npm i vue-3d-model

# yarn
yarn add vue-3d-model

# pnpm
pnpm add vue-3d-model
```

**插件名称：** [vue-3d-model](https://www.npmjs.com/package/vue-3d-model)

**在线示例：** [点击查看示例](https://hujiulong.github.io/vue-3d-model/#/demo-basic)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-3d-model.png)

## 配置环境变量

### process

`vue cli`测试环境，开发环境，正式环境配置。

```bash
# npm
npm i process

# yarn
yarn add process

# pnpm
pnpm add process
```

- .env.test 测试环境
- .env.devlopment 开发环境
- .env.production 正式环境

文件里配置全局变量参数 注意：必须使用 `VUE_APP_` 开头。

```bash
VUE_APP_BASE_URL=http://www.baidu.com/
```

```js
console.log(process.env.VUE_APP_BASE_URL); // http://www.baidu.com/
```

**插件名称：** [process](https://www.npmjs.com/package/process)

```json
// package.json 修改

"scripts": {
  "serve": "vue-cli-service serve --mode devlopment",
  "pro": "vue-cli-service build --mode production",
  "start": "vue-cli-service serve --mode devlopment",
  "test": "vue-cli-service build --mode test",
  "dev": "vue-cli-service build --mode devlopment",
  "lint": "vue-cli-service lint"
}
// 其中 --mode 后，对应的就是文件 .env 后的名字
```

## 拖动和缩放

### Vue.Draggable

```bash
# npm
npm i vuedraggable

# yarn
yarn add vuedraggable

# pnpm
pnpm add vuedraggable
```

**插件名称：** [Vue.Draggable](https://www.npmjs.com/package/vuedraggable)

**在线示例：** [点击查看示例](https://sortablejs.github.io/Sortable/#shared-lists)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/sortablejs.png)


### VueDraggableResizable

```bash
# npm
npm i vue-draggable-resizable

# yarn
yarn add vue-draggable-resizable

# pnpm
pnpm add vue-draggable-resizable
```

**插件名称：** [VueDraggableResizable 2](https://www.npmjs.com/package/vue-draggable-resizable)

**在线示例：** [点击查看示例](https://mauricius.github.io/vue-draggable-resizable/?path=/story/basic--basic-component)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/VueDraggableResizable.png)

## 全屏滚动

### Vue-fullpage

```bash
# npm
npm i vue-fullpage.js

# yarn
yarn add vue-fullpage.js

# pnpm
pnpm add vue-fullpage.js
```

**插件名称：** [Vue-fullpage.js](https://www.npmjs.com/package/vue-fullpage.js)

**在线示例：** [点击查看示例](https://alvarotrigo.com/vue-fullpage/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-fullpage.png)

## 长按指令

### vue-long-click

```bash
# npm
npm i vue-long-click

# yarn
yarn add vue-long-click

# pnpm
pnpm add vue-long-click
```

**插件名称：** [vue-long-click](https://www.npmjs.com/package/vue-long-click)

**在线示例：** [点击查看示例](https://ittus.github.io/vue-long-click/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-long-click.png)

## 地区标志

### vueflags

```bash
# npm
npm i @growthbunker/vueflags

# yarn
yarn add @growthbunker/vueflags

# pnpm
pnpm add @growthbunker/vueflags
```

**插件名称：** [vueflags](https://www.npmjs.com/package/@growthbunker/vueflags)

**在线示例：** [点击查看示例](https://www.growthbunker.dev/vueflags/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vueflags.png)

## 签名绘图

### v-perfect-signature

```bash
# npm
npm i v-perfect-signature

# yarn
yarn add v-perfect-signature

# pnpm
pnpm add v-perfect-signature
```

**插件名称：** [v-perfect-signature](https://www.npmjs.com/package/v-perfect-signature)

**在线示例：** [点击查看示例](https://wobsoriano.github.io/v-perfect-signature/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/v-perfect-signature.png)

### Vue Signature Pad

```bash
# npm
npm i vue-signature-pad

# yarn
yarn add vue-signature-pad

# pnpm
pnpm add vue-signature-pad
```

**插件名称：** [Vue Signature Pad](https://www.npmjs.com/package/vue-signature-pad)

**在线示例：** [点击查看示例](https://codesandbox.io/s/n5qjp3oqv4?file=/src/App.vue)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-signature-pad.png)

## 时钟

### vue-clock2

```bash
# npm
npm i vue-clock2

# yarn
yarn add vue-clock2

# pnpm
pnpm add vue-clock2
```

**插件名称：** [vue clock2](https://www.npmjs.com/package/vue-clock2)

**在线示例：** [点击查看示例](https://bestvist.github.io/vue-clock2/docs/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-clock2.png)

## 文件上传

### Vue-Core-Image-Upload

vue-core-image-upload 是一款轻量级的 Vue.js 上传插件，它可以支持的图片的上传，裁剪，压缩。它同样也支持在移动端的图片处理，它定义了诸多上传周期，你可以自由的进行流程控制。

```bash
# npm
npm i vue-core-image-upload

# yarn
yarn add vue-core-image-upload

# pnpm
pnpm add vue-core-image-upload
```

**插件名称：** [Vue-Core-Image-Upload](https://www.npmjs.com/package/vue-core-image-upload)

**在线示例：** [点击查看示例](http://vanthink-ued.github.io/vue-core-image-upload/index.html#/cn/home)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-core-image-upload.png)

## 粒子特效

### vue-particles

类似于星座图的点和线，是由 vue-particles 生成的，不仅自己动，而且能与用户鼠标事件产生互动。

```bash
# npm
npm i vue-particles

# yarn
yarn add vue-particles

# pnpm
pnpm add vue-particles
```

**插件名称：** [vue-particles](https://www.npmjs.com/package/vue-particles)

**在线示例：** [点击查看示例](https://vue-particles.netlify.app/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-particles.png)

## 滚屏切换

### mv-full-page

一款兼容 PC 端移动端的 Vue 全屏滚动组件。

```bash
# npm
npm i mv-full-page

# yarn
yarn add mv-full-page

# pnpm
pnpm add mv-full-page
```

**插件名称：** [mv-full-page](https://www.npmjs.com/package/mv-full-page)

**在线示例：** [点击查看示例](http://null_639_5368.gitee.io/v-full-page/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/mv-full-page.png)

## 新手指引

### Vue Tour

Vue Tour 是轻巧、简单且可自定义的新手指引插件，可与 Vue.js 一起使用。它提供了一种快速简便的方法来指导用户使用您的应用程序。

```bash
# npm
npm i vue-tour

# yarn
yarn add vue-tour

# pnpm
pnpm add vue-tour
```

**插件名称：** [Vue Tour](https://www.npmjs.com/package/vue-tour)

**在线示例：** [点击查看示例](https://pulsardev.github.io/vue-tour/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-tour.png)

## 设置滚动驱动的交互

### Vue Scrollama

一个 Vue 组件，可轻松设置滚动驱动的交互（又称滚动讲演）。

```bash
# npm
npm i vue-scrollama

# yarn
yarn add vue-scrollama

# pnpm
pnpm add vue-scrollama
```

**插件名称：** [Vue Scrollama](https://www.npmjs.com/package/vue-scrollama)

**在线示例：** [点击查看示例](https://vue-scrollama.vercel.app/#/basic)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-scrollama.png)

## 页面布局

### vue-grid-layout

一个类似于 Gridster 的栅格布局系统, 适用于 Vue.js。灵感源自于[React-Grid-Layout](/doc/plugin/expand/react插件.html#栅格布局系统)。

```bash
# npm
npm i vue-grid-layout

# yarn
yarn add vue-grid-layout

# pnpm
pnpm add vue-grid-layout
```

**插件名称：** [vue-grid-layout](https://www.npmjs.com/package/vue-grid-layout)

**在线示例：** [点击查看示例](https://jbaysolutions.github.io/vue-grid-layout/zh/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-grid-layout.png)

## 可视化图表

### vue-chartjs

使用 Chart.js 和 Vue.js 的简单漂亮的图表。

```bash
# npm
npm i vue-chartjs chart.js

# yarn
yarn add vue-chartjs chart.js

# pnpm
pnpm add vue-chartjs chart.js
```

**插件名称：** [vue-chartjs](https://www.npmjs.com/package/vue-chartjs)

**在线示例：** [点击查看示例](https://vue-chartjs.org/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-chartjs.png)

## 关系图谱

### relation-graph

这是一个 Vue 关系图谱组件，可以展示如组织机构图谱、股权架构图谱、集团关系图谱等知识图谱，可提供多种图谱布局，包括树状布局、中心布局、力学布局自动布局等，可以实现类似企查查那样的关系图谱。

```bash
# npm
npm i relation-graph

# yarn
yarn add relation-graph

# pnpm
pnpm add relation-graph
```

**插件名称：** [relation-graph](https://www.npmjs.com/package/relation-graph)

**在线示例：** [点击查看示例](http://relation-graph.com/#/docs/start)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/relation-graph.png)

## 页面 meta 属性

### vue-meta

基于 Vue 2.0 的 vue-meta 插件，主要用于管理 HMTL 头部标签，同时也支持 SSR。vue-meta 有以下特点：

- 在组件内设置 metaInfo，便可轻松实现头部标签的管理。

- metaInfo 的数据都是响应的，如果数据变化，头部信息会自动更新。

```bash
# npm
npm i vue-meta

# yarn
yarn add vue-meta

# pnpm
pnpm add vue-meta
```

**插件名称：** [vue-meta](https://www.npmjs.com/package/vue-meta)

**在线示例：** [点击查看示例](https://vue-meta.nuxtjs.org/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-meta.png)

## Vuex 持久化

### vuex-persistedstate

Vuex 状态机制，一刷新就会重置，解决问题的方式一般都是存储起来(session/local Storage)，vuex-persistedstate 插件帮我们集成了这些功能。

<Badge>注意</Badge>：此插件已经停止更新。

推荐使用 `vuex-persist` 替代。

```bash
# npm
npm i vuex-persistedstate

# yarn
yarn add vuex-persistedstate

# pnpm
pnpm add vuex-persistedstate
```

**插件名称：** [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)

**在线示例：** [点击查看示例](https://github.com/robinvdvleuten/vuex-persistedstate#readme)


### vuex-persist

一个支持 Typescript 的 Vuex 插件，使您能够将应用程序的状态保存到持久存储中，例如 Cookies 或 localStorage。

```bash
# npm
npm i vuex-persist

# yarn
yarn add vuex-persist

# pnpm
pnpm add vuex-persist
```

**插件名称：** [vuex-persist](https://www.npmjs.com/package/vuex-persist)

**在线示例：** [点击查看示例](https://github.com/championswimmer/vuex-persist#readme)

## 二维码

### VueQrcode

 一个用 qrcode 生成二 ​​ 维码的 Vue 组件。

```bash
# npm
npm i vue-qrcode

# yarn
yarn add vue-qrcode

# pnpm
pnpm add vue-qrcode
```

**插件名称：** [VueQrcode](https://www.npmjs.com/package/vue-qrcode#usage)

**在线示例：** [点击查看示例](https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode)

## 虚拟滚动

### vue-virtual-scroller

快速滚动任意数量的数据。

```bash
# npm
npm i vue-virtual-scroller

# yarn
yarn add vue-virtual-scroller

# pnpm
pnpm add vue-virtual-scroller
```

**插件名称：** [vue-virtual-scroller](https://www.npmjs.com/package/vue-virtual-scroller)

**在线示例：** [点击查看示例](https://akryum.github.io/vue-virtual-scroller/#/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-virtual-scroller.png)

## 关键词高亮

### vue3-highlight

实现了一个句子根据查询字词进行高亮显示的功能，查询的字词的输入格式为数组（为了 兼容分词查询功能），根据字词数组的内容进行多个词的高亮展示。使用模板差值 `{{ }}` 和 `v-text`，而不是`v-html` 进行高亮字词的展示，减少 `XSS` 攻击的风险。

```bash
# npm
npm i vue3-highlight

# yarn
yarn add vue3-highlight

# pnpm
pnpm add vue3-highlight
```

**插件名称：** [vue3-highlight](https://www.npmjs.com/package/vue3-highlight/v/0.2.4)

**在线示例：** [点击查看示例](https://mooncom.github.io/vue3-highlight/dist/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue3-highlight.png)

### v-highlight-component

实现了一个句子根据查询字词进行高亮显示的功能，查询的字词的输入格式为数组（为了 兼容分词查询功能），根据字词数组的内容进行多个词的高亮展示。使用模板差值 `{{ }}` 和 `v-text`，而不是`v-html` 进行高亮字词的展示，减少 `XSS` 攻击的风险。

```bash
# npm
npm i v-highlight-component

# yarn
yarn add v-highlight-component

# pnpm
pnpm add v-highlight-component
```

**插件名称：** [v-highlight-component](https://www.npmjs.com/package/v-highlight-component)

**在线示例：** [点击查看示例](https://mooncom.github.io/vue3-highlight/dist/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue3-highlight.png)


### vue-search-highlight

Vue 文本关键字高亮组件，v1.1.0 开始支持 HTML 内容跨标签匹配关键字。

```bash
# npm
npm i vue-search-highlight

# yarn
yarn add vue-search-highlight

# pnpm
pnpm add vue-search-highlight
```

**插件名称：** [vue-search-highlight](https://www.npmjs.com/package/vue-search-highlight)

**在线示例：** [点击查看示例](https://wintc.top/laboratory/#/search-highlight)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-search-highlight.png)

## PDF查看器

### Pdfvuer

Vue 的 PDF 查看器，使用 Mozilla 的 PDF.js，支持 Vue2 和 Vue3。

```bash
# Vue2
# npm
npm i pdfvuer

# yarn
yarn add pdfvuer

# pnpm
pnpm add pdfvuer

# Vue3
# npm
npm i pdfvuer@next

# yarn
yarn add pdfvuer@next

# pnpm
pnpm add pdfvuer@next
```

**插件名称：** [Pdfvuer](https://www.npmjs.com/package/pdfvuer)

**在线示例：** [点击查看示例](https://arkokoley.github.io/pdfvuer/)

```html
<template>
  <pdf src="./static/relativity.pdf" :page="1">
    <template slot="loading"> loading content here... </template>
  </pdf>
</template>

<script>
  import pdf from 'pdfvuer';
  import 'pdfjs-dist/build/pdf.worker.entry'; // not needed since v1.9.1

  export default {
    components: {
      pdf,
    },
  };
</script>
```
