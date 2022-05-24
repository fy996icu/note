---
title: 媒体播放器
toc: menu
order: 3
---

# 媒体播放器

## 西瓜播放器

```bash
$ yarn add xgplayer
```

**插件名称：** [xgplayer](https://www.npmjs.com/package/xgplayer)

**在线示例：** [点击查看示例](https://v2.h5player.bytedance.com/)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/xgplayer.png)

## Plyr H5 媒体播放器

```bash
$ yarn add plyr
```

**插件名称：** [Plyr](https://www.npmjs.com/package/plyr)

**在线示例：** [点击查看示例](https://plyr.io/)

**插件简介：** Plyr 是一个简单、轻量级、可访问和可定制的 HTML5、YouTube 和 Vimeo 媒体播放器，支持现代浏览器。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/plyr.png)

## Flv 媒体播放器

```bash
$ yarn add flv.js
```

**插件名称：** [flv.js](https://www.npmjs.com/package/flv.js)

**在线示例：** [点击查看示例](https://bilibili.github.io/flv.js/)

**插件简介：** bilibili 开源的 html5 flash 视频播放器，使浏览器在不借助 flash 插件的情况下可以播放 flv，目前主流的直播、点播解决方案。

**基本用法：**

```js
<video autoplay controls width="100%" height="500" id="myVideo"></video>;

import flvjs from 'flv.js';

// 页面渲染完成后执行
if (flvjs.isSupported()) {
  var myVideo = document.getElementById('myVideo');
  var flvPlayer = flvjs.createPlayer({
    type: 'flv',
    url: 'http://localhost:8080/test.flv', // 视频 url 地址
  });
  flvPlayer.attachMediaElement(myVideo);
  flvPlayer.load();
  flvPlayer.play();
}
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/flvjs.png)
