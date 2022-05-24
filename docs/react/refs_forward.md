---
title: Refs 转发
toc: menu
order: 11
---

# Refs 转发

Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。

## 转发 refs 到 DOM 组件

考虑这个渲染原生 DOM 元素 `button` 的 `FancyButton` 组件：

```jsx | pure
function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}
```

React 组件隐藏其实现细节，包括其渲染结果。其他使用 `FancyButton` 的组件通常不需要获取内部的 DOM 元素 button 的 ref。这很好，因为这防止组件过度依赖其他组件的 DOM 结构。

虽然这种封装对类似 `FeedStory` 或 `Comment` 这样的应用级组件是理想的，但其对 `FancyButton` 或 `MyTextInput` 这样的高可复用“叶”组件来说可能是不方便的。这些组件倾向于在整个应用中以一种类似常规 DOM `button` 和 `input` 的方式被使用，并且访问其 DOM 节点对管理焦点，选中或动画来说是不可避免的。

<Alert type="info">
Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。
</Alert>

在下面的示例中，`FancyButton` 使用 `React.forwardRef` 来获取传递给它的 `ref`，然后转发到它渲染的 DOM `button`：

```jsx
import React, { useRef, useEffect } from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const Wrap = () => {
  // 可以直接获取 DOM button 的 ref：
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, []);

  // 获取FancyButton按钮文本
  const handleBtn = () => {
    alert(ref.current.innerHTML)
  }
  return (
    <>
      <p>F12查看FancyButton按钮DOM</p>
      <FancyButton ref={ref}>FancyButton按钮</FancyButton>
      <button type="button" onClick={handleBtn}>获取FancyButton按钮文本</button>
    </>
  );
};

export default Wrap;
```

这样，使用 `FancyButton` 的组件可以获取底层 DOM 节点 `button` 的 ref ，并在必要时访问，就像其直接使用 DOM `button` 一样。

以下是对上述示例发生情况的逐步解释：

1. 我们通过调用 `useRef` 创建了一个 React ref 并将其赋值给 `ref` 变量。
2. 我们通过指定 `ref` 为 JSX 属性，将其向下传递给 `<FancyButton ref={ref}>`。
3. React 传递 `ref` 给 `forwardRef` 内函数 `(props, ref) => ...`，作为其第二个参数。
4. 我们向下转发该 `ref` 参数到 `<button ref={ref}>`，将其指定为 JSX 属性。
5. 当 ref 挂载完成，`ref.current` 将指向 `<button>` DOM 节点。

## 注意

第二个参数 `ref` 只在使用 `React.forwardRef` 定义组件时存在。常规函数和 class 组件不接收 `ref` 参数，且 `props` 中也不存在 `ref`。

Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。
