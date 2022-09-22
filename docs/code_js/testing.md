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
