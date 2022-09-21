---
title: 设备判断
toc: menu
order: 6
---

<BackTop></BackTop>

# 设备判断

## 检测移动浏览器

```jsx
import React, { useEffect, useState } from 'react'
const Demo = () => {
	const [isMobileStatus, setIsMobileStatus] = useState(false)
	const style = {
		padding: '20px',
		textAlign: 'center',
	}
	useEffect(() => {
		setIsMobileStatus(isMobile())
	}, [])

	/**
	 * 检测移动浏览器
	 * @returns 是否是移动端 true-移动端；false-非移动端
	 */
	const isMobile = () => {
		const match = window.matchMedia('(pointer:coarse)')
		return match && match.matches
	}
	return (
		<>
			<div style={style}>
				<h3 style={{ margin: 0 }}>是否是移动端：{isMobileStatus ? 'true' : 'false'}</h3>
			</div>
		</>
	)
}

export default Demo
```

检查浏览器是否支持 `pointer:coarse` 媒体查询：

```js
/**
 * 检测移动浏览器
 * @returns 是否是移动端 true-移动端；false-非移动端
 */
const isMobile = () => {
  const match = window.matchMedia('(pointer:coarse)')
  return match && match.matches
}
```


