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

## 镂空文字

实现文字的镂空效果主要应用了 CSS3 中的 [-webkit-text-stroke](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-text-stroke)属性，通过该属性可以设置文字的描边效果。

```tsx
import React, { CSSProperties } from 'react'

const textStyle: CSSProperties = {
	color: '#b344ff',
	WebkitTextStroke: '4px #b344ff',
	WebkitTextFillColor: 'transparent',
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
.strokeText {
  color: rgb(179, 68, 255);
  -webkit-text-stroke: 4px rgb(179, 68, 255);
  -webkit-text-fill-color: transparent;
}
```

## 垂直显示

实现以垂直方式从右向左显示文本主要应用了 CSS 中的 [writing-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode )属性。该属性定义了文本在水平或垂直方向上如何排布。该属性主要有3个属性值，各个属性值的说明如下所示。`horizontal-tb`：默认值，表示水平方向从上到下的书写方式。`vertical-rl`：表示垂直方向从右向左的书写方式。`vertical-lr`：表示垂直方向从左向右的书写方式。

```tsx
import React, { CSSProperties } from 'react'

const textStyle: CSSProperties = {
	fontFamily: '华文楷体',
	fontSize: '22px',
	textAlign: 'center',
	lineHeight: '1.6',
	letterSpacing: '6px',
	writingMode: 'vertical-rl',
}
const Demo: React.FC = () => {
	return (
		<>
			<div style={textStyle}>
				<h5 style={{ margin: 0, paddingBottom: '20px' }}>《清平调》其一</h5>
				<p>
					云想衣裳花想容，
					<br />
					春风拂槛露华浓。
					<br />
					若非群玉山头见，
					<br />
					会向瑶台月下逢。
				</p>
			</div>
		</>
	)
}
export default Demo
```
```css
.verticalText {
  font-family: 华文楷体;
  font-size: 22px;
  text-align: center;
  line-height: 1.6;
  letter-spacing: 6px;
  writing-mode: vertical-rl;
}
```

## 灯光效果

主要使用了 CSS3 中的 [linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient) 函数实现文字颜色的线性渐变，并使用 [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation) 属性实现灯光照射的动态效果。 

```tsx
import React, { CSSProperties } from 'react'

import styled from 'styled-components'

const textStyle: CSSProperties = {
	fontSize: '22px',
}
const TextWrap = styled.h2`
	margin: 0;
	display: inline-block;
	background: linear-gradient(90deg, #ffe100, #ff4444) 0 0 no-repeat;
	background-size: 120px;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: rgb(0 0 0 / 15%);
	animation: shine 4s infinite ease-in-out;
	@keyframes shine {
		0% {
			background-position: -50% 0;
		}
		100% {
			background-position: 150% 100%;
		}
	}
`
const Demo: React.FC = () => {
	return (
		<>
			<div style={textStyle}>
				<TextWrap>无人做你的光芒就自己照亮前方</TextWrap>
			</div>
		</>
	)
}
export default Demo
```
```css
.lightingText {
  margin: 0;
  display: inline-block;
  background: linear-gradient(90deg, #ffe100, #ff4444) 0 0 no-repeat;
  background-size: 120px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgb(0 0 0 / 15%);
  animation: shine 4s infinite ease-in-out;
}

@keyframes shine {
  0% {
    background-position: -50% 0;
  }
  100% {
    background-position: 150% 100%;
  }
}
```

## 虚线文字

为了实现空心虚线线条文字的效果，这里使用 [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG), 需要对 `text` 标签的 `fill`、`stroke` 和 `stroke-dasharray` 这几个属性进行设置。

- `fill`：为文字或图形填充颜色或图案。

- `stroke`：用于定义文本或元素的轮廓颜色。

- `stroke-dasharray`：用于创建虚线。该属性值是一个数列，既可以是普通数字也可以是百分比。数值之间可以用逗号或者空格分隔。当使用一个数值时，该数值表示一段虚线的长度和每段虚线之间的间距。当使用两个数值时，第一个数值表示虚线的长度，第二个数值表示虚线之间的间距。当使用奇数个数值时，则数列重复一次，从而变成偶数个数值。

```tsx
import React from 'react'

import styled from 'styled-components'

const TextWrap = styled.text`
	font-size: 120px;
	font-weight: bolder;
	fill: transparent;
	stroke: #b344ff;
	stroke-dasharray: 10, 5;
`
const Demo: React.FC = () => {
	return (
		<>
			<div>
				<svg width="320" height="160">
					<TextWrap x="0" y="120">
						DUMI
					</TextWrap>
				</svg>
			</div>
		</>
	)
}
export default Demo
```
```css
text {
  font-size: 120px;
  font-weight: bolder;
  fill: transparent;
  stroke: #b344ff;
  stroke-dasharray: 10, 5;
}
```
```html
<svg width="320" height="160">
  <text x="0" y="120">
    DUMI
  </text>
</svg>
```
