---
title: Fragments
toc: menu
order: 7
---

<BackTop></BackTop>

# Fragments

React 中的一个常见模式是一个组件返回多个元素。`Fragments` 允许你将子列表分组，而无需向 DOM 添加额外节点。

## 常规用法

```jsx | pure
import React, { Fragment } from 'react';

const Wrap = () => {
  return <Fragment>不需要包裹额外的DOM节点</Fragment>;
};

export default Wrap;
```

## 短语法

使用 `<> </>` 包裹。

```jsx | pure
import React from 'react';

const Wrap = () => {
  return <>不需要包裹额外的DOM节点</>;
};

export default Wrap;
```

## 两者之间的区别

`Fragments` 可以使用 `key`，但是 `<> </>` 不能使用。
