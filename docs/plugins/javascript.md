---
title: JavaScript插件
toc: menu
order: 2
---

<BackTop></BackTop>

# JavaScript 插件

## uuid 生成

`nanoid库` 和 `uuid库`一样都可以生成 uuid，但是 nanoid 相比 uuid 要更轻量级。

```bash
$ yarn add nanoid
```

**插件名称：** [Nano ID](https://www.npmjs.com/package/dayjs)

**在线示例：** [点击查看示例](https://dayjs.fenxianglu.cn/)

```js
import { nanoid } from 'nanoid';
model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
```

## JavaScript 实用工具库

`Lodash` 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：

- 遍历 array、object 和 string
- 对值进行操作和检测
- 创建符合功能的函数

```bash
$ yarn add lodash
```

**插件名称：** [Lodash](https://www.npmjs.com/package/lodash)

**在线示例：** [点击查看示例](https://www.lodashjs.com/)

## 微信官方 js-sdk

```bash
$ yarn add weixin-js-sdk
```

**插件名称：** [weixin-js-sdk](https://www.npmjs.com/package/weixin-js-sdk)

**在线示例：** [点击查看示例](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

```js
wx.config({
  debug: false, // 开启调试模式,
  appId: data.appId, //必填，企业号的唯一标识，此处企业号corpid
  timestamp: data.timestamp, //必填，生成签名的时间戳
  nonceStr: data.nonceStr, //必填，生成签名的随机串
  signature: data.signature, //必填，签名，见附录1
  jsApiList: ['chooseImage'], //必填，需要使用的JS接口列表JS接口列表见附录2
});
```

## 移动端 PDF 预览

```bash
$ yarn add pdfh5
```

**插件名称：** [pdfh5.js](https://www.npmjs.com/package/pdfh5)

**在线示例：** [点击查看示例](https://www.gjtool.cn/pdfh5/pdf.html?file=https://www.gjtool.cn/pdfh5/git.pdf)

## 富文本编辑器

Typescript 开发的 Web 富文本编辑器， 轻量、简洁、易用、开源免费。

```bash
$ yarn add wangeditor
```

**插件名称：** [wangEditor](https://www.npmjs.com/package/wangeditor)

**在线示例：** [点击查看示例](https://www.wangeditor.com/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/wangeditor.png)

## 生成随机数据

生成随机数据，拦截 `Ajax` 请求。

```bash
$ yarn add mockjs -D
```

**插件名称：** [Mock.js](https://www.npmjs.com/package/mockjs)

**在线示例：** [点击查看示例](http://mockjs.com/examples.html)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/mockjs.png)

## 下载文件

```bash
$ yarn add downloadjs
```

**插件名称：** [download](https://www.npmjs.com/package/downloadjs)

**在线示例：** [点击查看示例](http://danml.com/download.html)

```js
// text string
download('hello world', 'dlText.txt', 'text/plain');

// text dataURL
download('data:text/plain,hello%20world', 'dlDataUrlText.txt', 'text/plain');

// text blob
download(new Blob(['hello world']), 'dlTextBlob.txt', 'text/plain');
```

## 拖拽库

功能强大的 JavaScript 拖拽库。

```bash
$ yarn add sortablejs
```

**插件名称：** [Sortable](https://www.npmjs.com/package/sortablejs)

**在线示例：** [点击查看示例](http://www.sortablejs.com/index.html)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/sortablejs.png)

## 全屏滚动插件

```bash
$ yarn add fullpage.js
```

**插件名称：** [fullPage.js](https://www.npmjs.com/package/fullpage.js)

**在线示例：** [点击查看示例](https://alvarotrigo.com/vue-fullpage/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/fullpage.png)

## 图片灯箱

```bash
$ yarn add @fancyapps/ui
```

**插件名称：** [Fancyapps UI](https://www.npmjs.com/package/@fancyapps/ui)

**在线示例：** [点击查看示例](https://fancyapps.com/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/fancyapps.png)

## 可视化网络分析图

```bash
$ yarn add cytoscape
```

**插件名称：** [Cytoscape.js](https://www.npmjs.com/package/cytoscape)

**在线示例：** [点击查看示例](https://js.cytoscape.org/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/cytoscape.png)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/cytoscape2.png)

## 交互式图表

用于快速构建交互式图表的 Web 框架。

```bash
$ yarn add gojs
```

**插件名称：** [GoJS](https://www.npmjs.com/package/gojs)

**在线示例：** [点击查看示例](https://gojs.net/latest/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/gojs.png)

## 数字滚动

CountUp.js 是一个无依赖的轻量级 JavaScript 类，可用于快速创建以更有趣的方式显示数字数据的动画。

```bash
$ yarn add countup.js
```

**插件名称：** [CountUp.js](https://www.npmjs.com/package/countup.js)

**在线示例：** [点击查看示例](https://inorganik.github.io/countUp.js/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/countup.png)

## 生成 HTML 截图

```bash
$ yarn add html2canvas
```

**插件名称：** [html2canvas](https://www.npmjs.com/package/html2canvas)

**在线示例：** [点击查看示例](https://html2canvas.hertzen.com/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/html2canvas.png)

## BetterScroll

```bash
$ yarn add better-scroll
```

**插件名称：** [better-scroll](https://www.npmjs.com/package/better-scroll)

**在线示例：** [点击查看示例](https://better-scroll.github.io/examples/#/)

```js
import BScroll from 'better-scroll';

const bs = new BScroll('.wrapper', {
  pullUpLoad: true,
  scrollbar: true,
  pullDownRefresh: true,
  // and so on
});
```

## 代码高亮美化

```bash
$ yarn add highlight.js
```

**插件名称：** [highlight.js](https://www.npmjs.com/package/highlight.js)

**在线示例：** [点击查看示例](https://highlightjs.org/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/highlight.png)

## 汉字拼音笔画

```bash
$ yarn add cnchar

# 按需安装功能库：

$ yarn add cnchar-poly cnchar-order cnchar-trad cnchar-draw cnchar-idiom cnchar-xhy cnchar-radical
```

**插件名称：** [cnchar](https://www.npmjs.com/package/cnchar)

**在线示例：** [点击查看示例](https://theajack.gitee.io/cnchar/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/cnchar.png)

## H5 互动游戏

```html
<script src="hilo-standalone.js"></script>
```

**插件名称：** [Hilo](http://hiloteam.github.io/index.html)

**在线示例：** [点击查看示例](http://hiloteam.github.io/examples/index.html)

**插件简介：** 阿里巴巴出品的免费开源 H5 游戏引擎，轻巧无依赖，适合用来开发营销互动小游戏，今天推荐一个适合用来做营销小游戏的 H5 游戏引擎，轻量简单容易上手，快速上线提前下班靠它了。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/hilo.png)

## 图像转换

```bash
$ yarn add image-conversion
```

**插件名称：** [image-conversion](https://www.npmjs.com/package/image-conversion)

**在线示例：** [点击查看示例](https://github.com/WangYuLue/image-conversion)

**压缩图片：** [查看压缩示例](https://demo.wangyulue.com/image-conversion/)

**插件简介：** image-conversion 是一个简单易用的 JS 图片转换工具，提供了多种 Image、Canvas、File 和 dataURL 之间的转换方法。另外，image-conversion 可以指定大小来压缩图片。

## 新用户引导

```bash
$ yarn add driver.js
```

**插件名称：** [Driver.js](https://www.npmjs.com/package/driver.js)

**在线示例：** [点击查看示例](https://kamranahmed.info/driver.js/)

**插件简介：** Driver.js 是一款轻量的、没有依赖普通的 javascript 引擎，目的是为了方便引导用户浏览网站的功能。其实是一款 web 端分步引导用户查看功能的库。可以让用户更快地更方便地知道你的网站有什么样的功能或者新增了什么功能。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/loaders.png)

## 在线表格

```bash
$ yarn add luckysheet
```

**插件名称：** [luckysheet](https://www.npmjs.com/package/luckysheet)

**在线示例：** [点击查看示例](https://mengshukeji.github.io/LuckysheetDocs/zh/)

**插件简介：** 一款纯前端类似 excel 的在线表格，功能强大、配置简单、完全开源。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/luckysheet.png)

## 测量网页元素间距

```bash
$ yarn add spacingjs
```

**插件名称：** [Spacing JS](https://www.npmjs.com/package/spacingjs)

**在线示例：** [点击查看示例](https://spacingjs.com/)

**插件简介：** 用于测量网页上元素之间间距的 ​​JavaScript 实用程序

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/spacingjs.png)

## favico 图标

```bash
$ yarn add favico.js
```

**插件名称：** [favico.js](https://www.npmjs.com/package/favico.js)

**在线示例：** [点击查看示例](http://lab.ejci.net/favico.js/)

**插件简介：** 使用带有徽章、图像或视频的网站图标。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/favicojs.png)

## 用户终端信息检测

```bash
$ yarn add ua-device
```

**插件名称：** [favico.js](https://www.npmjs.com/package/ua-device)

**在线示例：** [点击查看示例](http://fex-team.github.io/ua-device/)

**插件简介：** ua-device.js 是由 Baidu WebFE(FEX)团队开发的一个用于解析 UA 来得到用户终端信息的 JS 框架。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/uadevice.png)

## 触摸手势

```bash
$ yarn add hammerjs
```

**插件名称：** [Hammer.js](https://www.npmjs.com/package/hammerjs)

**在线示例：** [点击查看示例](http://hammerjs.github.io/)

**插件简介：** Hammer 是一个开源库，可以识别由触摸、鼠标和指针事件做出的手势。它没有任何依赖关系，而且很小，只有 7.34 kB 压缩 + gzip 压缩！

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/hammerjs.png)

## H5 下拉刷新

```bash
$ yarn add mescroll.js
```

**插件名称：** [mescroll](https://www.npmjs.com/package/mescroll.js)

**在线示例：** [点击查看示例](http://www.mescroll.com/)

**插件简介：** 一款精致的、在 H5 端运行的下拉刷新和上拉加载插件，主要用于列表分页、刷新等场景。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/mescroll.png)

## 创建浮动元素

```bash
$ yarn add @floating-ui/dom
```

**插件名称：** [@floating-ui/dom](https://www.npmjs.com/package/@floating-ui/dom)

**在线示例：** [点击查看示例](https://floating-ui.com/)

**插件简介：** Floating UI 是一个用于创建浮动元素的低级工具包。工具提示、弹出框、下拉菜单、菜单等。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/floating-ui.png)

## 图片灯箱

```bash
$ yarn add @fancyapps/ui
```

**插件名称：** [Fancyapps UI](https://www.npmjs.com/package/@fancyapps/ui)

**在线示例：** [点击查看示例](https://fancyapps.com/)

**插件简介：** 可重用的 JavaScript UI 组件库，面向任务的组件的集合，这些组件将使您更有效率。包含您和您的客户会喜欢的功能。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/fancyapps-ui.png)

## 工具提示和弹出框定位引擎

```bash
$ yarn add @popperjs/core
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Popper Tutorial</title>
  </head>
  <body>
    <button id="button" aria-describedby="tooltip">My button</button>
    <div id="tooltip" role="tooltip">My tooltip</div>

    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script>
      const button = document.querySelector('#button');
      const tooltip = document.querySelector('#tooltip');

      const popperInstance = Popper.createPopper(button, tooltip);
    </script>
  </body>
</html>
```

**插件名称：** [Popper](https://www.npmjs.com/package/@popperjs/core)

**在线示例：** [点击查看示例](https://popper.js.org/)

**插件简介：** 给定一个元素，例如一个按钮，以及一个描述它的工具提示元素，Popper 会自动将工具提示放在按钮附近的正确位置。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/popper.png)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/popper2.png)
