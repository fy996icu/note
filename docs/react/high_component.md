---
title: 高阶组件
toc: menu
order: 8
---
# 高阶组件

## 介绍

高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

**高阶组件是参数为组件，返回值为新组件的函数。**

组件是将 `props` 转换为 UI，而高阶组件是将组件转换为另一个组件。

## 注意

- 不要改变原始组件。使用组合。
- 将不相关的 props 传递给被包裹的组件。
- 最大化可组合性。
- 包装显示名称以便轻松调试。
- 不要在 render 方法中使用 HOC。
- 务必复制静态方法。
- Refs 不会被传递。

## 示例

**示例：封装一个高阶函数，用于获取屏幕宽高。**

```jsx
import React, { useState, useEffect } from 'react';

// 定义一个高阶组件withClientWidth，接收一个WrappedComponent组件
const withClientWidth = (WrappedComponent) => {
  const NewComponent = () => {
    const [state, setState] = useState({ clientWidth: 0, clientHeight: 0 });

    // 获取屏幕宽高的方法
    const getWidthHeight = () => {
      let clientWidth = document.documentElement.clientWidth;
      let clientHeight = document.documentElement.clientHeight;
      setState({ clientWidth, clientHeight });
    };

    useEffect(() => {
      // 组件挂载完成，获取屏幕宽高，并绑定resize事件
      getWidthHeight();
      window.addEventListener('resize', getWidthHeight);
      return () => {
        // 组件将要卸载时移除resize事件
        window.removeEventListener('resize', getWidthHeight);
      };
    }, []);

    return <WrappedComponent {...state} />;
  };
  // 返回新的组件
  return NewComponent;
};

const Header = (props) => {
  return (
    <div>
      <h1>Header组件：</h1>
      <h2>屏幕宽：{props.clientWidth}</h2>
      <h2>屏幕高：{props.clientHeight}</h2>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <h1>Footer组件：</h1>
      <h2>屏幕宽：{props.clientWidth}</h2>
      <h2>屏幕高：{props.clientHeight}</h2>
    </div>
  );
};

const HocHeader = withClientWidth(Header);
const HocFooter = withClientWidth(Footer);

// 使用高阶组件
const Wrap = () => {
  return (
    <>
      <HocHeader />
      <hr />
      <HocFooter />
    </>
  );
};

export default Wrap;
```
<!-- ![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/HocExample.png) -->

**返回的组件含有props**

需要将 `props` 传给 `WrappedComponent` 组件。

```jsx
import React, { useState, useEffect } from 'react';

// 定义一个高阶组件withClientWidth，接收一个WrappedComponent组件
const withClientWidth = (WrappedComponent) => {
  // 新组件拥有自己的props
  const NewComponent = (props) => {
    const [state, setState] = useState({ clientWidth: 0, clientHeight: 0 });

    // 获取屏幕宽高的方法
    const getWidthHeight = () => {
      let clientWidth = document.documentElement.clientWidth;
      let clientHeight = document.documentElement.clientHeight;
      setState({ clientWidth, clientHeight });
    };

    useEffect(() => {
      // 组件挂载完成，获取屏幕宽高，并绑定resize事件
      getWidthHeight();
      window.addEventListener('resize', getWidthHeight);
      return () => {
        // 组件将要卸载时移除resize事件
        window.removeEventListener('resize', getWidthHeight);
      };
    }, []);

    // 将新组件的state和props传递给组件
    return <WrappedComponent {...state} {...props} />;
  };
  // 返回新的组件
  return NewComponent;
};

const Header = (props) => {
  return (
    <div>
      <h1>Header组件：</h1>
      <h2>我的名字是：{props.name}</h2>
      <h2>屏幕宽：{props.clientWidth}</h2>
      <h2>屏幕高：{props.clientHeight}</h2>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <h1>Footer组件：</h1>
      <h2>我的名字是：{props.name}</h2>
      <h2>屏幕宽：{props.clientWidth}</h2>
      <h2>屏幕高：{props.clientHeight}</h2>
    </div>
  );
};

const HocHeader = withClientWidth(Header);
const HocFooter = withClientWidth(Footer);

// 使用高阶组件
const Wrap = () => {
  return (
    <>
      <HocHeader name="Header" />
      <hr />
      <HocFooter name="Footer" />
    </>
  );
};

export default Wrap;
```

<!-- ![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/HocExample2.png) -->

**给高阶组件设置displayName**

- 使用高阶组件的存在的问题：得到的组件名称会相同。
- 原因：默认情况下，React使用 `组件名称` 作为 `displayName`。
- 解决方式：为高阶组件设置 `displayName` 便于调试时区分不同的组件。
- `displayName` 的作用：同于设置调试信息（ `React Developer Tools` 信息）。

最常见的方式是用 `HOC` 包住被包装组件的显示名称。比如高阶组件名为 `withSubscription`，并且被包装组件的显示名称为 `CommentList`，显示名称应该为 `WithSubscription(CommentList)`：

```js
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}

  // 调用getDisplayName方法设置displayName
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

  return WithSubscription;
}
// 定义设置displayName的方法
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```
