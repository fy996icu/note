---
title: 生成二维码
toc: menu
order: 8
---

<BackTop></BackTop>

# 生成二维码

## node-qrcode

```bash
$ yarn add qrcode
```

**插件名称：** [node-qrcode](https://www.npmjs.com/package/qrcode)

**在线示例：** [点击查看示例](https://github.com/soldair/node-qrcode)

**插件简介：** 二维码/二维条码生成器。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/qrcode.png)

## QRious

```bash
$ yarn add qrious
```

```html
<!DOCTYPE html>
<html>
  <body>
    <canvas id="qr"></canvas>

    <script src="/path/to/qrious.js"></script>
    <script>
      (function () {
        var qr = new QRious({
          element: document.getElementById('qr'),
          value: 'https://github.com/neocotic/qrious',
        });
      })();
    </script>
  </body>
</html>
```

**插件名称：** [QRious](https://www.npmjs.com/package/qrious)

**在线示例：** [点击查看示例](https://github.com/neocotic/qrious)

**插件简介：** QRious 是一个纯 JavaScript 库，用于使用 HTML5 画布生成 QR 码。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/qrious.png)
