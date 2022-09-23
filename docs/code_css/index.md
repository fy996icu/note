---
title: 文本处理
toc: menu
order: 0
---

<BackTop></BackTop>

# 文本处理

## 文本省略

当文本内容长度超过容器最大宽度时，通过 [-webkit-line-clamp](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp) 可以自动省略多余的文本。

```tsx
/**
 * title: 超过两行就显示省略号
 * desc: -webkit-line-clamp:2 可以设置多行
 */
import React, { CSSProperties } from 'react'

const boxStyle: CSSProperties = {
	display: ' -webkit-box',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	WebkitLineClamp: '2',
	WebkitBoxOrient: 'vertical',
}
const Demo: React.FC = () => {
	return (
		<>
			<div style={boxStyle}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, assumenda ea? Distinctio assumenda veniam quam, reprehenderit sequi
				perspiciatis vel enim dolorem architecto vero dolores nesciunt suscipit sint, temporibus labore animi?Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Similique, assumenda ea? Distinctio assumenda veniam quam, reprehenderit sequi perspiciatis vel enim dolorem architecto vero
				dolores nesciunt suscipit sint, temporibus labore animi?
			</div>
		</>
	)
}

export default Demo
```
```css
.ellipsis{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 超过 2 行就显示省略号 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

## 彩色文字

本实例主要使用了 `CSS3` 中的 [linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient) 函数，该函数用于创建一个线性渐变的图像。

```tsx
import React, { CSSProperties } from 'react'

const textStyle: CSSProperties = {
	color: 'transparent',
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	backgroundImage: 'linear-gradient(180deg,#ffb6ff,#b344ff)',
	fontWeight: 'bold',
	fontSize: '6rem',
	lineHeight: '1',
	margin: '0',
	fontFamily: 'SF Pro SC,SF Pro Display,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif',
}
const Demo: React.FC = () => {
	return (
		<>
			<h1 style={textStyle}>DUMI</h1>
		</>
	)
}
export default Demo
```
```css
.colorText{
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(180deg,#ffb6ff,#b344ff);
}
```

## 文字阴影

主要通过 [text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow) 实现。

```tsx
import React, { CSSProperties } from 'react'

const textStyle: CSSProperties = {
	color: '#b344ff',
	textShadow: 'rgb(179 68 255 / 36%) 0px 8px 10px',
	fontWeight: 'bold',
	fontSize: '6rem',
	lineHeight: '1',
	margin: '0',
	fontFamily: 'SF Pro SC,SF Pro Display,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif',
}
const Demo: React.FC = () => {
	return (
		<>
			<h1 style={textStyle}>DUMI</h1>
		</>
	)
}
export default Demo
```
```css
.textShadow {
  text-shadow: rgb(179 68 255 / 36%) 0px 8px 10px;
}
```
