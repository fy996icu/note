---
title: Vue插件
toc: menu
order: 0
---

<BackTop></BackTop>

# Vue 插件

## 组合实用程序

```bash
$ yarn add @vueuse/core
```

**插件名称：** [VueUse](https://www.npmjs.com/package/@vueuse/core)

**在线示例：** [点击查看示例](https://vueuse.org/)

**插件简介：** 基本 Vue 组合实用程序的集合。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vueuse.png)

## 数字滚动插件

```bash
$ yarn add vue-count-to
```

**插件名称：** [vue-count-to](https://www.npmjs.com/package/vue-count-to)

**在线示例：** [点击查看示例](http://panjiachen.github.io/countTo/demo/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-count-to.png)

## 图片裁剪插件

```bash
$ yarn add vue-cropper
```

**插件名称：** [vue-cropper](https://www.npmjs.com/package/vue-cropper)

**在线示例：** [点击查看示例](https://codepen.io/xyxiao001/pen/wxwKGz)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-cropper.png)

## 根据银行账号识别开户行

通过银行卡号查询银行类型和银行卡类型

```bash
$ yarn add bankcardinfo
```

**插件名称：** [bankcardinfo](https://www.npmjs.com/package/bankcardinfo/v/2.0.1?activeTab=versions)

## 代码差异对比

```bash
$ yarn add v-code-diff

# Vue2 用户需要额外安装 composition-api
$ yarn add @vue/composition-api
```

**插件名称：** [v-code-diff](https://www.npmjs.com/package/v-code-diff)

**在线示例：** [点击查看示例](https://www.vue365.cn/code_demo.php?id=4920)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/v-code-diff.png)

## 多功能颜色选择器

```bash
$ yran add vue-color
```

**插件名称：** [vue-color](https://www.npmjs.com/package/vue-color)

**在线示例：** [点击查看示例](https://www.vue365.cn/code_demo.php?id=3456)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-color.png)

## 图像查看器

```bash
$ yarn add v-viewer
```

**插件名称：** [v-viewer](https://www.npmjs.com/package/v-viewer)

**在线示例：** [点击查看示例](https://mirari.cc/v-viewer/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/v-viewer.png)

## 图像比较滑块

```bash
$ yarn add img-comparison-slider
```

**插件名称：** [img-comparison-slider](https://www.npmjs.com/package/img-comparison-slider)

**在线示例：** [点击查看示例](https://img-comparison-slider.sneas.io/examples.html)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/img-comparison-slider.png)

## 3D 模型查看器

```bash
$ yarn add vue-3d-model
```

**插件名称：** [vue-3d-model](https://www.npmjs.com/package/vue-3d-model)

**在线示例：** [点击查看示例](https://hujiulong.github.io/vue-3d-model/#/demo-basic)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-3d-model.png)

## 配置环境变量插件

`vue cli`测试环境，开发环境，正式环境配置。

```bash
$ yarn add process
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

## 拖拽排序

```bash
$ yarn add vuedraggable
```

**插件名称：** [Vue.Draggable](https://www.npmjs.com/package/vuedraggable)

**在线示例：** [点击查看示例](https://sortablejs.github.io/Sortable/#shared-lists)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/sortablejs.png)

## 全屏滚动插件

```bash
$ yarn add vue-fullpage.js
```

**插件名称：** [Vue-fullpage.js](https://www.npmjs.com/package/vue-fullpage.js)

**在线示例：** [点击查看示例](https://alvarotrigo.com/vue-fullpage/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-fullpage.png)

## 拖动和缩放元素

```bash
$ yarn add vue-draggable-resizable
```

**插件名称：** [VueDraggableResizable 2](https://www.npmjs.com/package/vue-draggable-resizable)

**在线示例：** [点击查看示例](https://mauricius.github.io/vue-draggable-resizable/?path=/story/basic--basic-component)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/VueDraggableResizable.png)

## 长按指令

```bash
$ yarn add vue-long-click
```

**插件名称：** [vue-long-click](https://www.npmjs.com/package/vue-long-click)

**在线示例：** [点击查看示例](https://ittus.github.io/vue-long-click/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-long-click.png)

## 国家地区标志

```bash
$ yarn add @growthbunker/vueflags
```

**插件名称：** [vueflags](https://www.npmjs.com/package/@growthbunker/vueflags)

**在线示例：** [点击查看示例](https://www.growthbunker.dev/vueflags/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vueflags.png)

## 签名绘图

```bash
$ yarn add v-perfect-signature
```

**插件名称：** [v-perfect-signature](https://www.npmjs.com/package/v-perfect-signature)

**在线示例：** [点击查看示例](https://wobsoriano.github.io/v-perfect-signature/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/v-perfect-signature.png)

## 签名板

```bash
$ yarn add vue-signature-pad
```

**插件名称：** [Vue Signature Pad](https://www.npmjs.com/package/vue-signature-pad)

**在线示例：** [点击查看示例](https://codesandbox.io/s/n5qjp3oqv4?file=/src/App.vue)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-signature-pad.png)

## 时钟

```bash
$ yarn add vue-clock2
```

**插件名称：** [vue clock2](https://www.npmjs.com/package/vue-clock2)

**在线示例：** [点击查看示例](https://bestvist.github.io/vue-clock2/docs/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-clock2.png)

## 轻量级图片上传

```bash
$ yarn add vue-core-image-upload
```

**插件名称：** [Vue-Core-Image-Upload](https://www.npmjs.com/package/vue-core-image-upload)

**在线示例：** [点击查看示例](http://vanthink-ued.github.io/vue-core-image-upload/index.html#/cn/home)

**插件简介：** vue-core-image-upload 是一款轻量级的 Vue.js 上传插件，它可以支持的图片的上传，裁剪，压缩。它同样也支持在移动端的图片处理，它定义了诸多上传周期，你可以自由的进行流程控制。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-core-image-upload.png)

## 粒子特效

```bash
$ yarn add vue-particles
```

**插件名称：** [vue-particles](https://www.npmjs.com/package/vue-particles)

**在线示例：** [点击查看示例](https://vue-particles.netlify.app/)

**插件简介：** 类似于星座图的点和线，是由 vue-particles 生成的，不仅自己动，而且能与用户鼠标事件产生互动。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-particles.png)

## 滚屏切换

```bash
$ yarn add mv-full-page
```

**插件名称：** [mv-full-page](https://www.npmjs.com/package/mv-full-page)

**在线示例：** [点击查看示例](http://null_639_5368.gitee.io/v-full-page/)

**插件简介：** 一款兼容 PC 端移动端的 Vue 全屏滚动组件。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/mv-full-page.png)

## 新手指引

```bash
$ yarn add vue-tour
```

**插件名称：** [Vue Tour](https://www.npmjs.com/package/vue-tour)

**在线示例：** [点击查看示例](https://pulsardev.github.io/vue-tour/)

**插件简介：** Vue Tour 是轻巧、简单且可自定义的新手指引插件，可与 Vue.js 一起使用。它提供了一种快速简便的方法来指导用户使用您的应用程序。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-tour.png)

## 设置滚动驱动的交互

```bash
$ yarn add vue-scrollama
```

**插件名称：** [Vue Scrollama](https://www.npmjs.com/package/vue-scrollama)

**在线示例：** [点击查看示例](https://vue-scrollama.vercel.app/#/basic)

**插件简介：** 一个 Vue 组件，可轻松设置滚动驱动的交互（又称滚动讲演）。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-scrollama.png)

## 栅格布局系统

```bash
$ yarn add vue-grid-layout
```

**插件名称：** [vue-grid-layout](https://www.npmjs.com/package/vue-grid-layout)

**在线示例：** [点击查看示例](https://jbaysolutions.github.io/vue-grid-layout/zh/)

**插件简介：** 一个类似于 Gridster 的栅格布局系统, 适用于 Vue.js。灵感源自于[React-Grid-Layout](/doc/plugin/expand/react插件.html#栅格布局系统)。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-grid-layout.png)

## Chart 图表库

```bash
$ yarn add vue-chartjs chart.js
```

**插件名称：** [vue-chartjs](https://www.npmjs.com/package/vue-chartjs)

**在线示例：** [点击查看示例](https://vue-chartjs.org/)

**插件简介：** 使用 Chart.js 和 Vue.js 的简单漂亮的图表。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-chartjs.png)

## HTML meta 管理器

```bash
$ yarn add vue-meta
```

**插件名称：** [vue-meta](https://www.npmjs.com/package/vue-meta)

**在线示例：** [点击查看示例](https://vue-meta.nuxtjs.org/)

**插件简介：** 基于 Vue 2.0 的 vue-meta 插件，主要用于管理 HMTL 头部标签，同时也支持 SSR。vue-meta 有以下特点：

- 在组件内设置 metaInfo，便可轻松实现头部标签的管理。

- metaInfo 的数据都是响应的，如果数据变化，头部信息会自动更新。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue-meta.png)

## Vuex 持久化状态

```bash
$ yarn add vuex-persistedstate
```

**插件名称：** [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)

**在线示例：** [点击查看示例](https://github.com/robinvdvleuten/vuex-persistedstate#readme)

**插件简介：** Vuex 状态机制，一刷新就会重置，解决问题的方式一般都是存储起来(session/local Storage)，vuex-persistedstate 插件帮我们集成了这些功能。

## 二维码生成器

```bash
$ yarn add vue-qrcode
```

**插件名称：** [VueQrcode](https://www.npmjs.com/package/vue-qrcode#usage)

**在线示例：** [点击查看示例](https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode)

**插件简介：** 一个用 qrcode 生成二 ​​ 维码的 Vue 组件。
