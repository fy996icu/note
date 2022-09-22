---
title: 工具函数
toc: menu
order: 0.5
---

<BackTop></BackTop>

# 工具函数

## 将文本复制到剪贴板

```tsx
/**
 * title: 将文本复制到剪贴板
 * desc: 点击按钮可将当前行文本复制到剪贴板
 */
import React, { useState, CSSProperties } from 'react'
import { Typography, Tooltip, message } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const style: CSSProperties = {
	padding: '20px',
}

const copyStyle: CSSProperties = {
	color: '#4569d4',
	cursor: 'pointer',
}

const Demo: React.FC = () => {
	const [text] = useState<string>('云想衣裳花想容，春风拂槛露华浓。')
	const [text2] = useState<string>('若非群玉山头见，会向瑶台月下逢。')

	/**
	 * 将文本复制到剪贴板
	 * @param text 需要复制到剪贴板的文字
	 */
	const copyText = (text: string): void => {
		const textAreaEle = document.createElement('textarea')
		textAreaEle.style.border = '0'
		textAreaEle.style.padding = '0'
		textAreaEle.style.margin = '0'
		textAreaEle.style.position = 'absolute'
		textAreaEle.style.left = '-9999px'
		textAreaEle.style.top = `${document.documentElement.scrollTop}px`
		textAreaEle.value = text
		document.body.appendChild(textAreaEle)
		textAreaEle.focus()
		textAreaEle.select()
		try {
			document.execCommand('copy')
			message.success('已复制到剪贴板')
		} catch (err) {
			alert('复制失败')
		} finally {
			document.body.removeChild(textAreaEle)
		}
	}
	return (
		<div style={style}>
			<Paragraph>
				<span>{text}</span>
				<Tooltip title="点击复制">
					<CopyOutlined style={copyStyle} onClick={() => copyText(text)} />
				</Tooltip>
			</Paragraph>
			<Paragraph>
				<span>{text2}</span>
				<Tooltip title="点击复制">
					<CopyOutlined style={copyStyle} onClick={() => copyText(text2)} />
				</Tooltip>
			</Paragraph>
		</div>
	)
}

export default Demo
```
```ts
/**
 * 将文本复制到剪贴板
 * @param text 需要复制到剪贴板的文字
 */
const copyText = (text: string): void => {
  const textAreaEle = document.createElement('textarea')
  textAreaEle.style.border = '0'
  textAreaEle.style.padding = '0'
  textAreaEle.style.margin = '0'
  textAreaEle.style.position = 'absolute'
  textAreaEle.style.left = '-9999px'
  textAreaEle.style.top = `${document.documentElement.scrollTop}px`
  textAreaEle.value = text
  document.body.appendChild(textAreaEle)
  textAreaEle.focus()
  textAreaEle.select()
  try {
    document.execCommand('copy')
  } catch (err) {
    alert('复制失败')
  } finally {
    document.body.removeChild(textAreaEle)
  }
}
```
