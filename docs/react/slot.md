---
title: 实现插槽
toc: menu
order: 6
---

<BackTop></BackTop>

# 实现插槽

React 中并没有 `插槽` 的概念，但是可以通过 `组合` 的方式来模拟实现插槽。

React 有十分强大的组合模式。我们推荐使用 `组合` 而非继承来实现组件间的代码重用，可以将任何东西作为 `props` 进行传递。

## 默认插槽

在 React 中要实现类似 `Vue` 中的默认插槽，要借助 `props.children` 来实现。

```jsx | pure
import React from 'react';

// 父组件
const Father = () => {
  return (
    <Child>
      <div style={{ color: 'red' }}>传递给子组件</div>
    </Child>
  );
};

// 子组件
const Child = (props) => {
  // 通过props.children获取到父组件中子组件标签中间的内容
  // 输出红色文本：传递给子组件
  return <div>{props.children}</div>;
};

export default Father;
```

`Child` 组件中的 `props.children` 就是:

```jsx | pure
<div style={{ color: 'red' }}>传递给子组件</div>
```

## 具名插槽

在 React 中要实现类似 `Vue` 中的具名插槽，要借助 `props` 来传递组件实现。

```jsx | pure
import React from 'react';

// 外层组件
const Wrap = () => {
  return <Content left={<Left />} right={<Right />} />;
};

// 内容组件
const Content = (props) => {
  return (
    <div>
      {/* 输出：左侧 */}
      <div className="left">{props.left}</div>
      {/* 输出：右侧 */}
      <div className="right">{props.right}</div>
    </div>
  );
};

// 左侧组件
const Left = () => {
  return <div>左侧</div>;
};

// 右侧组件
const Right = () => {
  return <div>右侧</div>;
};

export default Wrap;
```

将 `Left` 和 `Right` 组件通过 `props` 传递给 `Content` 组件。

`Content` 组件通过 `props.left` 和 `props.right` 获取传递过来的组件，从而实现类似 `Vue` 中的 `具名插槽` 。

**注意：** 此方法无法实现 `Content` 组件向 `Left` 和 `Right` 组件传值。需要实现传值可以使用 [Render Props](#render-props)

查看 [Render Props](#render-props)
