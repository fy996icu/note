---
title: 滚动操作
toc: menu
order: 3
---

<BackTop></BackTop>

# 滚动操作

## 平滑滚动到指定元素位置

```tsx
import { Button } from 'antd'
import React, { CSSProperties, useRef } from 'react'

const wrapStyle: CSSProperties = {
	display: 'inline-block',
	height: '300px',
	overflowY: 'auto',
	padding: '20px',
	marginTop: '20px',
	boxSizing: 'border-box',
	border: '1px solid #ddd',
}
const boxStyle: CSSProperties = {
	height: 'auto',
}
const childStyle: CSSProperties = {
	width: '60px',
	height: '60px',
	background: '#eee',
}

const list: string[] = []
for (let i = 0; i < 30; i++) {
	list.push('平滑滚动到灰色盒子' + i)
}
const Demo: React.FC = () => {
	const boxEl = useRef<HTMLDivElement>(null)

	/**
	 * 平滑滚动到指定元素位置
	 * @param ele 滚动到目标元素的DOM
	 */
	const smoothScroll = (ele: HTMLElement): void => {
		ele.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const scrollBox = () => {
		smoothScroll(boxEl.current!)
	}
	return (
		<>
			<div>
				<Button type="primary" onClick={scrollBox}>
					滚动到灰色盒子
				</Button>
			</div>
			<div style={wrapStyle}>
				<div style={boxStyle}>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						{list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<div style={childStyle} ref={boxEl}></div>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						{list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Demo
```
```ts
/**
 * 平滑滚动到指定元素位置
 * @param ele 滚动到目标元素的DOM
 */
const smoothScroll = (ele: HTMLElement): void => {
  ele.scrollIntoView({
    behavior: 'smooth',
  })
}
```
