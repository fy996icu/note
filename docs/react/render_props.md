---
title: Render Props
toc: menu
order: 10
---

<BackTop></BackTop>

# Render Props

## 介绍

术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术。

<Alert type="info">
  具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。
</Alert>

```jsx | pure
<Content
  renderLeft={(name) => <Left name={name} />}
  renderRight={(name) => <Right name={name} />}
/>
```

## 使用

示例：使用 `render props` 让 `Content` 组件向 `Left` 和 `Right` 组件传值。

```jsx
import React from 'react';

// 使用render props让Content组件向Left和Right组件传值。
const Wrap = () => {
  return (
    // 将参数name通过props传递给子组件-render props返回一个组件
    <Content
      renderLeft={(name) => <Left name={name} />}
      renderRight={(name) => <Right name={name} />}
    />
  );
};

// 内容组件
const Content = (props) => {
  // 传递给子组件的名字
  const leftName = '左侧组件';
  const rightName = '右侧组件';
  return (
    <div>
      {/* 通过调用props.renderLeft和props.renderRight函数传递参数给子组件 */}
      <div className="left">{props.renderLeft(leftName)}</div>
      <div className="right">{props.renderRight(rightName)}</div>
    </div>
  );
};

// 左侧组件
const Left = (props) => {
  // 输出：我的名字是：左侧组件
  return <div>我的名字是：{props.name}</div>;
};

// 右侧组件
const Right = (props) => {
  // 输出：我的名字是：右侧组件
  return <div>我的名字是：{props.name}</div>;
};

export default Wrap;
```

## 原理

`Content` 组件通过 props 传递 `renderLeft` 和 `renderRight` 函数，并将参数 `name` 绑定在 `Left` 和 `Right` 组件的 props 上。

在 `Content` 组件内部自身的 props 调用 `renderLeft` 和 `renderRight` 函数并传递参数 `leftName` 和 `rightName`，函数执行就会返回 `Left` 和 `Right` 组件。

`Left` 和 `Right` 组件通过 props 获取 `Content` 传递过来的值。
