---
title: React 顶层 API
toc: menu
order: 50
---

<BackTop></BackTop>

# React 顶层 API

## React.Fragment

React 中的一个常见模式是一个组件返回多个元素。`Fragments` 允许你将子列表分组，而无需向 DOM 添加额外节点。

**常规用法：**

```jsx | pure
import React, { Fragment } from 'react';

const Wrap = () => {
  return <Fragment>不需要包裹额外的DOM节点</Fragment>;
};

export default Wrap;
```

**短语法：**

使用 `<> </>` 包裹。

```jsx | pure
import React from 'react';

const Wrap = () => {
  return <>不需要包裹额外的DOM节点</>;
};

export default Wrap;
```

**两者之间的区别：**

`Fragments` 可以使用 `key`，但是 `<> </>` 不能使用。

## React.lazy

`React.lazy()` 允许你定义一个动态加载的组件。这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件。

```js
// 这个组件是动态加载的
const SomeComponent = React.lazy(() => import('./SomeComponent'));
```

请注意，渲染 `lazy` 组件依赖该组件渲染树上层的 `<React.Suspense>` 组件。这是指定加载指示器（loading indicator）的方式。

## React.Suspense

`React.Suspense` 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件。目前，懒加载组件是 `<React.Suspense>` 支持的唯一用例：

```jsx | pure
// 该组件是动态加载的
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // 显示 <Spinner> 组件直至 OtherComponent 加载完成
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```

`lazy` 组件可以位于 `Suspense` 组件树的深处——它不必包装树中的每一个延迟加载组件。最佳实践是将 `<Suspense>` 置于你想展示加载指示器（loading indicator）的位置，而 `lazy()` 则可被放置于任何你想要做代码分割的地方。

## React.memo

详情点击 [React.memo](/react/hook#usememo)

## React.createRef

`React.createRef` 创建一个能够通过 ref 属性附加到 React 元素的 ref。

```jsx | pure
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}
```

## React.forwardRef

`React.forwardRef` 会创建一个 React 组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。这种技术并不常见，但在以下两种场景中特别有用：

- [转发 refs 到 DOM 组件](/react/ref_dom)。

- [在高阶组件中转发 refs](https://react.docschina.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components)。

## React.PureComponent

`React.PureComponent` 与 `React.Component` 很相似。两者的区别在于 `React.Component` 并未实现 `shouldComponentUpdate()`，而 `React.PureComponent` 中以浅层对比 `prop` 和 `state` 的方式来实现了该函数。

如果赋予 React 组件相同的 props 和 state，`render()` 函数会渲染相同的内容，那么在某些情况下使用 `React.PureComponent` 可提高性能。

:::warning 注意 `React.PureComponent` 中的 `shouldComponentUpdate()` 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用 `React.PureComponent`，或者在深层数据结构发生变化时调用 `forceUpdate()` 来确保组件被正确地更新。你也可以考虑使用 `immutable` 对象加速嵌套数据的比较。

此外，`React.PureComponent` 中的 `shouldComponentUpdate()` 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件 :::

## 更多 API

[点击直达官放文档查看完整 API](https://react.docschina.org/docs/react-api.html)
