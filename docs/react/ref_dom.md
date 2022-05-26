---
title: Ref & DOM
toc: menu
order: 9
---

<BackTop></BackTop>

# Ref & DOM

`Refs` 提供了一种方式，允许我们访问 `DOM` 节点或在 `render` 方法中创建的 React 元素。

## 注意

- 勿过度使用 Refs。
- 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
- 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
- 不能在函数组件上使用 ref 属性，因为他们没有实例。
- 如果你目前还在使用 `this.refs.textInput` 这种方式访问 refs ，我们建议用 `回调函数` 或 `createRef API` 的方式代替。

## 创建 Refs

创建 `Refs` 的三种方式：

- 使用 `字符串refs` 创建。(即将在未来版本移除，不推荐使用。)
- 使用 `React.createRef()` 创建。
- 使用 `回调 Refs` 创建。

<Alert type="warning">
  字符串refs创建（不推荐）
</Alert>

<Alert type="error">
  在React新版本，在函数式组件中使用这种方式会报错的喔。
</Alert>

### 字符串 refs 创建

字符串形式创建的 refs，可以通过 `this.refs.xxx` 访问 refs。

```jsx
import React, { Component } from 'react';

export default class Wrap extends Component {
  // 获取input的value值
  getInputValue = () => {
    // 通过this.refs.inputEl的方式获取
    alert(this.refs.inputEl.value);
  };
  render() {
    return (
      <div>
        {/* 通过字符串的方式创建refs */}
        <input ref="inputEl" type="text" placeholder="请输入" />
        <button onClick={this.getInputValue}>获取值</button>
      </div>
    );
  }
}
```

### 使用 React.createRef()创建

函数式组件使用 `React.createRef()`

```jsx
import React from 'react';

const Wrap = () => {
  const myRef = React.createRef(null);
  const getInputValue = () => {
    // 通过this.myRef.current的方式获取DOM
    alert(myRef.current.value);
  };
  return (
    <div>
      {/* 通过this.myRef的方式绑定到DOM元素 */}
      <input ref={myRef} type="text" placeholder="请输入" />
      <button onClick={getInputValue}>获取值</button>
    </div>
  );
};

export default Wrap;
```

类式组件使用 `React.createRef()`。

当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 `current` 属性中被访问。

```jsx
import React, { Component } from 'react';

export default class Wrap extends Component {
  // 通过React.createRef()的方式创建refs
  myRef = React.createRef(null);
  // 获取input的value值
  getInputValue = () => {
    // 通过this.myRef.current的方式获取DOM
    alert(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        {/* 通过this.myRef的方式绑定到DOM元素 */}
        <input ref={this.myRef} type="text" placeholder="请输入" />
        <button onClick={this.getInputValue}>获取值</button>
      </div>
    );
  }
}
```

## 回调方式创建

<Alert type="warning">
  只能在类式组件中用回调方式创建Refs。
</Alert>

不同于传递 `createRef()` 创建的 `ref` 属性，你会传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。

```jsx
import React, { Component } from 'react';

export default class Wrap extends Component {
  // 获取input的value值
  getInputValue = () => {
    // 通过this.myRef的方式获取DOM
    alert(this.myRef.value);
  };
  render() {
    return (
      <div>
        {/* 通过回调的方式绑定到DOM元素 */}
        <input ref={(el) => (this.myRef = el)} type="text" placeholder="请输入" />
        <button onClick={this.getInputValue}>获取值</button>
      </div>
    );
  }
}
```

## 关于回调 refs 的说明

如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

## 函数式组件创建 Refs

函数式组件可以使用 `useRef` 这个内置 `hook` 实现创建 refs。

```jsx
import React, { useRef } from 'react';

const Wrap = () => {
  const myRef = useRef(null);
  const // 获取input的value值
    getInputValue = () => {
      // 通过myRef.current的方式获取DOM
      console.log(myRef.current);
      alert(myRef.current.value);
    };
  return (
    <div>
      <input ref={myRef} type="text" placeholder="请输入" />
      <button onClick={getInputValue}>获取值</button>
    </div>
  );
};

export default Wrap;
```
