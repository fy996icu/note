---
title: 数字处理
toc: menu
order: 5
---

<BackTop></BackTop>

# 数字处理

## 格式化数字

```bash
$ yarn add numeral
```

**插件名称：** [Numeral.js](https://www.npmjs.com/package/numeral)

**在线示例：** [点击查看示例](http://numeraljs.com/)

**插件简介：** 用于格式化和操作数字的 javascript 库。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/numeral.png)

## 可读文件大小字符串

```bash
$ yarn add filesize
```

**插件名称：** [filesize.js](https://www.npmjs.com/package/filesize)

**在线示例：** [点击查看示例](https://filesizejs.com/)

**插件简介：** filesize.js 提供了一种从数字（浮点数或整数）或字符串中获取人类可读文件大小字符串的简单方法。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/filesize.png)

## 精确的加减乘除

```bash
$ yarn add number-precision
```

```js
import NP from 'number-precision';
NP.strip(0.09999999999999998); // = 0.1
NP.plus(0.1, 0.2); // = 0.3, not 0.30000000000000004
NP.plus(2.3, 2.4); // = 4.7, not 4.699999999999999
NP.minus(1.0, 0.9); // = 0.1, not 0.09999999999999998
NP.times(3, 0.3); // = 0.9, not 0.8999999999999999
NP.times(0.362, 100); // = 36.2, not 36.199999999999996
NP.divide(1.21, 1.1); // = 1.1, not 1.0999999999999999
NP.round(0.105, 2); // = 0.11, not 0.1
```

**插件名称：** [number-precision](https://www.npmjs.com/package/number-precision)

**在线示例：** [点击查看示例](https://github.com/nefe/number-precision)

**插件简介：** 使用 javascript 精确执行加减乘除运算，解决精度丢失问题。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/number-precision.png)

## 任意精度 Decimal 类型

```bash
$ yarn add decimal.js
```

**插件名称：** [decimal.js](https://www.npmjs.com/package/decimal.js)

**在线示例：** [点击查看示例](https://github.com/MikeMcl/decimal.js#readme)

**插件简介：** JavaScript 的任意精度 Decimal 类型。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/decimal.png)

## 任意精度十进制算术

```bash
$ yarn add big.js
```

```js
var x = new Big(0.1);
// 加法
var y = x.plus(0.2);
// 转换
console.log(+y); // 0.3
console.log(Number(y)); // 0.3
```

**插件名称：** [big.js](https://www.npmjs.com/package/big.js)

**在线示例：** [点击查看示例](https://github.com/MikeMcl/big.js#readme)

**插件简介：** 一个用于任意精度十进制算术的小型快速 JavaScript 库。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/bigjs.png)
