---
title: 核心概念
toc: menu
order: 1
---

<BackTop></BackTop>

# 核心概念

## 三大核心概念

`Redux` 有三大核心概念分别是：`Store` 保存数据、`Action` 描述动作、`Reducer` 关联 Store 和 Action，更新状态。

## 三大核心原则

### 单一数据源

- 整个应用程序的 `State` 只存储在一个 `Store` 中。

- `Redux` 并没有强制让我们不能创建多个 `Store`，但是那样做并不利于数据的维护。

- 单一的数据源可以让整个应用程序的 `State` 变得方便维护、追踪、修改。

### `State` 是只读的

- 唯一修改 `State` 的方法一定是触发 `Action`，不要试图在其他地方通过任何的方式来修改 `State`。

- 这样就确保了 `View` 或 `网络请求` 都不能直接修改 `State`，它们只能通过 `Action` 来描述自己想要如何修改 `State`。

### 使用纯函数来执行修改

- 通过 `Reducer` 将旧 `State` 和 `Action` 联系在一起，并且返回一个新的 `State`。

- 随着应用程序的复杂度增加，我们可以将 `Reducer` 拆分成多个小的 `Reducers`，分别操作不同 `State tree` 的一部分。

- 但是所有的 `Reducer` 都应该是 `纯函数`，不能产生任何的副作用。

## 纯函数

### 定义

什么是纯函数，纯函数有两个重要的标准，违反任何一个都不是纯函数：

1. 函数的返回结果只依赖于它传入的参数。

2。函数执行过程里面没有副作用。

### 优点

1. 可复用性

纯函数仅依赖于传入的参数，这意味着你可以随意将这个函数移植到别的代码中，只需要提供它需要的参数即可。

2. 可测试性

纯函数非常容易进行单元测试，因为不需要考虑上下文环境，只需要考虑输入和输出。

3. 并行代码

纯函数是健壮的，改变执行次序不会对系统造成影响，因此纯函数的操作可以并行执行。

### 示例

函数的返回结果只依赖于它的参数。

```js
// 非纯函数，依赖了外部变量a
var a = 1;
function add(b) {
  return a + b;
}

add(1); // 2

// 非纯函数，依赖系统时间
function now() {
  return new Date();
}

// 非纯函数，依赖随机数
function random() {
  return Math.random();
}

//非纯函数，设置外部 cookie
function setCookie() {
  document.cookie = 'name=Porco';
}

// 是纯函数
function add(a, b) {
  return a + b;
}

add(1, 2); // 3
```

函数执行过程中没有副作用。

```js
// 非纯函数，有副作用，改变obj里面的a
var obj = { a: 1 };
function mul(obj) {
  return (obj.a *= 2);
}

mul(obj); // 2
obj.a; // 2

// 是纯函数
var obj = { a: 1 };
function mul(a) {
  return (a *= 2);
}

mul(obj.a); // 2
obj.a; // 1
```

### 总结

1. 纯函数很严格，也就是说你几乎除了计算数据以外什么都不能干，计算的时候还不能依赖除了函数参数以外的数据。

2. 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。
