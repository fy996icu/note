---
title: 组件生命周期
toc: menu
order: 3
---

# 组件生命周期

## 旧的组件生命周期

1. **初始化阶段**：由`ReactDOM.render()`触发--初次渲染。
   - `constructor()`：构造器初始化状态。
   - `componentWillMount()`：组件将要挂载。
   - `render()`：组件渲染。
   - `componentDidMount()`：组件挂载完毕。
2. **更新阶段**：由组件内部`this.setState()`或父组件重新`render`触发。
   - `shouldComponentUpdate()`：控制组件更新的"阀门"。
   - `componentWillUpdate()`：组件将要更新。
   - `render()`：组件渲染。
   - `componentDidUpdate()`：组件更新完毕。
3. **卸载阶段**：由`ReactDOM.unmountComponentAtNode()`触发。
   - `componentWillUnmount()`：组件将要卸载。做一些收尾工作，清除定时器、取消订阅等。



**<font v-pre color="#d63200">即将过时的生命周期</font>**

| 即将过时的生命周期      | 继续使用方法-加前缀       |
| -------------------- | --------------------------- |
| componentWillMount() | UNSAFE_componentWillMount() |
| componentWillUpdate()| UNSAFE_componentWillUpdate()|
| componentWillReceiveProps() | UNSAFE_componentWillReceiveProps()|

<Alert type="warning">
  现在使用会出现警告，下一个大版本需要加上 <font color='red'>UNSAFE_</font> 前缀才能使用，以后可能会被彻底废弃，不建议使用。
</Alert>


## 新的组件生命周期

[查看生命周期图谱](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

1. **初始化阶段：** 由`ReactDOM.render()`触发--初次渲染。

   - `constructor()`：构造器初始化状态。

   - `getDerivedStateFromProps()`：若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps。

     ```react
     static getDerivedStateFromProps(props,state){
       console.log('getDerivedStateFromProps',props,state);
       return null
     }
     ```

   - `render()`：组件渲染。

   - `componentDidMount()`：组件挂载完毕。

2. **更新阶段**：由组件内部`this.setState()`或父组件重新`render`触发。

   - `getDerivedStateFromProps()`

   - `shouldComponentUpdate()`：控制组件更新的"阀门"。
   - `render()`：组件渲染。
   - `getSnapshotBeforeUpdate()`：在更新之前获取快照。
   - `componentDidUpdate()`：组件更新完毕。

3. **卸载阶段**：由`ReactDOM.unmountComponentAtNode()`触发。

   - `componentWillUnmount()`：组件将要卸载。做一些收尾工作，清除定时器、取消订阅等。



## 常用的生命周期函数

1. `render`：初始化渲染或更新渲染调用。
2. `componentDidMount`：开启监听，发送`ajax`请求。
3. `componentWillUnmount`：做一些收尾工作，清除定时器、取消订阅等。



## 处理错误

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- `static getDerivedStateFromError()`
- `componentDidCatch()`



## `constructor`

```react
constructor(props)
```



在React中，构造函数仅用于以下两种情况：

1. 通过给`this.state`赋值来初始化内部`state`。
2. 为事件处理函数绑定示例（`this`）。



**如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。**

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 `super(props)`。否则，`this.props` 在构造函数中可能会出现未定义的 bug。



在 `constructor()` 函数中**不要调用 `setState()` 方法**。如果你的组件需要使用内部 state，请直接在构造函数中为 **`this.state` 赋值初始 state**：

```js
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```


  只能在构造函数中直接为 `this.state` 赋值。如需在其他方法中赋值，你应使用 `this.setState()` 替代。

  **避免将 props 的值复制给 state！这是一个常见的错误：**
  ```js
  constructor(props) {
  super(props);
  // 不要这样做
  this.state = { color: props.color };
  }
  ```
  如此做毫无必要（你可以直接使用 `this.props.color`），同时还产生了 bug（更新 prop 中的 `color` 时，并不会影响 state）。



## `shouldComponentUpdate`

根据 `shouldComponentUpdate()` 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。



当 props 或 state 发生变化时，`shouldComponentUpdate()` 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 `forceUpdate()` 时不会调用该方法。



```js
//控制组件更新的“阀门”
shouldComponentUpdate(){
  console.log('Count---shouldComponentUpdate');
  return true	// 返回true则更新，调用该函数如果不返回或者返回false则不更新
}
```
