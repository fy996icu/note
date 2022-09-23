---
title: 检测校验
toc: menu
order: 4
---

<BackTop></BackTop>

# 检测校验

## 检测 IE 浏览器

```jsx
import React, { useEffect, useState } from 'react'
const Demo = () => {
	const [ie, setIe] = useState(false)
	const style = {
		padding: '20px',
		textAlign: 'center',
	}
	useEffect(() => {
		setIe(isIe())
	}, [])

	/**
	 * 检测 Internet Explorer 浏览器
	 * @returns 是否IE浏览器 true|false
	 */
	const isIe = function () {
		const ua = window.navigator.userAgent
		return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1
	}
	return (
		<>
			<div style={style}>
				<h3 style={{ margin: 0 }}>当前是否是IE浏览器：{ie ? 'true' : 'false'}</h3>
			</div>
		</>
	)
}

export default Demo
```

```js
/**
 * 检测 Internet Explorer 浏览器
 * @returns 是否IE浏览器 true|false
 */
const isIe = function () {
  const ua = window.navigator.userAgent
  return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1
}
```

我们也可以依靠 `document.documentMode`。该属性表示文档的文档兼容模式，在 `IE 5-11` 中为整数。其他浏览器返回 `undefined`。

```js
const isIE = !!document.documentMode;
```

## 检测大写锁定是否打开

**支持 `Shift` 键**

```tsx
/**
 * title: 检测大写锁定是否打开
 * desc: 试着切换一下大小写再输入
 */
import React, { useState, useRef, useEffect, CSSProperties } from 'react'
import { Input } from 'antd'
import type { InputProps, InputRef } from 'antd'
const style: CSSProperties = {
	padding: '20px',
	width: '60%',
}

const tips: CSSProperties = {
	opacity: '0',
	color: 'red',
	margin: '10px 0 0 0',
}

const Demo: React.FC = () => {
	const inputEl = useRef<InputRef>(null)
	const [status, setStatus] = useState<InputProps['status']>('')

	useEffect(() => {
		testCapsLock(inputEl.current!.input as HTMLInputElement)
	}, [])

	/**
	 * 检测大写锁定是否打开
	 * @param ele 输入框
	 */
	const testCapsLock = (ele: HTMLInputElement | HTMLTextAreaElement) => {
		const messageEle: HTMLElement | null = document.getElementById('capsLockTips')
		ele!.addEventListener('keypress', (e: Event) => {
			const keyCode = (e as KeyboardEvent).keyCode || (e as KeyboardEvent).which
			const shiftKey = (e as KeyboardEvent).shiftKey || keyCode === 16
			const s = String.fromCharCode(keyCode)
			const capsLockOn = (s.toUpperCase() === s && s.toLowerCase() !== s) || (s.toUpperCase() !== s && s.toLowerCase() === s && shiftKey)
			if (capsLockOn) setStatus('error')
			else setStatus('')
			messageEle!.style.opacity = capsLockOn ? '1' : '0'
		})
	}

	return (
		<div style={style}>
			<form>
				<Input.Password ref={inputEl} allowClear status={status} placeholder="请输入密码" autoComplete="off" />
			</form>
			<p id="capsLockTips" style={tips}>
				大写锁定已打开
			</p>
		</div>
	)
}

export default Demo
```

```ts
/**
 * 检测大写锁定是否打开
 * @param ele 输入框DOM
 */
const testCapsLock = (ele: HTMLInputElement | HTMLTextAreaElement) => {
  const messageEle: HTMLElement | null = document.getElementById('capsLockTips')
  ele!.addEventListener('keypress', (e: Event) => {
    const keyCode = (e as KeyboardEvent).keyCode || (e as KeyboardEvent).which
    const shiftKey = (e as KeyboardEvent).shiftKey || keyCode === 16
    const s = String.fromCharCode(keyCode)
    const capsLockOn = (s.toUpperCase() === s && s.toLowerCase() !== s) || (s.toUpperCase() !== s && s.toLowerCase() === s && shiftKey)
    if (capsLockOn) console.log('大写锁定已打开')
    else console.log('大写锁定已关闭')
  })
}
```

## 检测鼠标是否在元素内

检测鼠标是否落在一个块级元素内部。

```tsx
/**
 * title: 检测鼠标是否落在一个块级元素内部。
 * desc: 试试将鼠标放在灰色盒子内
 */
import React, { CSSProperties, useEffect, useRef, useState } from 'react'

const boxStyle: CSSProperties = {
	padding: '20px',
	background: '#eee',
}

const wrapStyle: CSSProperties = {
	padding: '3rem',
	border: '1px solid #ddd',
}

const Demo: React.FC = () => {
	const [inStatus, setInStatus] = useState<Boolean>(false)
	const boxEl = useRef<HTMLDivElement>(null)
	const wrapEl = useRef<HTMLDivElement>(null)

	useEffect(() => {
		wrapEl.current?.addEventListener('mousemove', (e: MouseEvent) => {
			setInStatus(checkMouseInBox(boxEl.current!))
		})
	}, [])

	/**
	 * 检测鼠标是否落在一个块级元素内部
	 * @param ele 需要检测鼠标是否在内部的DOM
	 * @returns true-在内部；false-不在内部
	 */
	const checkMouseInBox = (ele: HTMLElement) => {
		// 鼠标相对屏幕横坐标
		const x = Number((window?.event as MouseEvent).clientX)
		// 鼠标相对屏幕纵坐标
		const y = Number((window?.event as MouseEvent).clientY)
		// ele相对屏幕的横坐标
		const div_x = Number(ele.getBoundingClientRect().left)
		// ele相对屏幕的横坐标+width
		const div_x_width = Number(ele.getBoundingClientRect().left + ele.clientWidth)
		// ele相对屏幕的纵坐标
		const div_y = Number(ele.getBoundingClientRect().top)
		// ele相对屏幕的纵坐标+height
		const div_y_height = Number(ele.getBoundingClientRect().top + ele.clientHeight)
		return x > div_x && x < div_x_width && y > div_y && y < div_y_height
	}
	return (
		<>
			<div style={wrapStyle} ref={wrapEl}>
				<div style={boxStyle} ref={boxEl}>
					<h3>鼠标是否在容器内：{inStatus ? 'true' : 'false'}</h3>
				</div>
			</div>
		</>
	)
}

export default Demo
```
```ts
/**
 * 检测鼠标是否落在一个块级元素内部
 * @param ele 需要检测鼠标是否在内部的DOM
 * @returns true-在内部；false-不在内部
 */
const checkMouseInBox = (ele: HTMLElement) => {
  // 鼠标相对屏幕横坐标
  const x = Number((window?.event as MouseEvent).clientX)
  // 鼠标相对屏幕纵坐标
  const y = Number((window?.event as MouseEvent).clientY)
  // ele相对屏幕的横坐标
  const div_x = Number(ele.getBoundingClientRect().left)
  // ele相对屏幕的横坐标+width
  const div_x_width = Number(ele.getBoundingClientRect().left + ele.clientWidth)
  // ele相对屏幕的纵坐标
  const div_y = Number(ele.getBoundingClientRect().top)
  // ele相对屏幕的纵坐标+height
  const div_y_height = Number(ele.getBoundingClientRect().top + ele.clientHeight)
  return x > div_x && x < div_x_width && y > div_y && y < div_y_height
}
```
