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

