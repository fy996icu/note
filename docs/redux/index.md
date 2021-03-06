---
title: 认识Redux
toc: menu
order: 0
---

<BackTop></BackTop>

# 认识 Redux

## 简介

`Redux` 是 JavaScript 状态容器，提供可预测化的状态管理。

可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。不仅于此，它还提供 超爽的开发体验，比如有一个时间旅行调试器可以编辑后实时预览。

`Redux` 除了和 [React](/react/) 一起用外，还支持其它界面库，如果你愿意，你可以把 `Redux` 用在你的 Vue 项目，用于替代 `Vuex`。当然 [Vue3.x](/vue3) 更推荐使用 [Pinia](/pinia/)。

## 来源

`Redux` 由 [Flux](http://facebook.github.io/flux/) 演变而来，但受 Elm 的启发，避开了 Flux 的复杂性。 不管你有没有使用过它们，只需几分钟就能上手 Redux。

## 优点

**1. Redux 使状态可预测**

在 `Redux` 中，状态始终是可预测的。如果将相同的状态和动作传递给 `Reducer`，则总是会产生相同的结果，因为 `Reducer` 是 [纯函数](/redux/core_concept#纯函数)。状态也是不可变的，永远不会改变。这使得执行诸如无限撤消和重做之类的艰巨任务成为可能。还可以在之前的状态之间来回移动并实时查看结果。

**2. Redux 是可维护的**

`Redux` 对代码的组织方式很严格，这使得具有 `Redux` 知识的人更容易理解任何 `Redux` 应用程序的结构。这通常使维护更容易。这也有助于用户将业务逻辑与组件树分离。对于大型应用程序，保持应用程序更具可预测性和可维护性至关重要。

**3. Redux 调试简单**

`Redux` 使调试应用程序变得容易。通过记录操作和状态，很容易理解编码错误、网络错误和生产过程中可能出现的其他形式的错误。

除了日志记录，它还有很棒的 `DevTools`，允许时间旅行操作、页面刷新时的持久操作等。对于中型和大型应用程序，调试比实际开发功能花费更多的时间。`Redux DevTools` 使您可以轻松利用 `Redux` 提供的所有功能。

**4. 性能优势**

我们可能会假设保持应用程序的状态全局会导致一些性能下降。在很大程度上，情况并非如此，因为 `React Redux` 在内部实现了许多性能优化，因此我们自己的连接组件仅在实际需要时才重新渲染。

**5. 易于测试**

由于函数用于更改纯函数的状态(`Reducer` 是纯函数)，因此测试 `Redux` 应用程序很容易。

**6. 状态持久化**

我们可以将应用程序的一些状态持久化到本地存储并在刷新后恢复它。

## 缺点

1. `Redux` 核心是 `不可变对象`，在 `Reducer` 中的操作都要比较小心，注意不能修改到 `state` 的属性。

2. `Redux` 中写法固定，模板代码较多。

3. 流畅太繁琐，需要写各种 `Action`，`Reducer`。

4. 要想完成异步数据，得配合其他库([Redux-thunk](https://www.npmjs.com/package/redux-thunk) 或者 [Redux-Promise](https://www.npmjs.com/package/redux-promise) 中间件)。

## 使用场景

- 组件需要根据状态发生显示变化。

- `state` 并不总是以单向的方式线性流动。

- 存在组件需要更新全局状态。

- 存在组件需要更新另一个组件的状态（跨组件传递）。

- 存在状态以许多不同的方式更新。

- 态树结构复杂。

- 某个状态需要在全局使用或共享（例如角色权限等信息）。

## 什么时候使用

<Alert type="info">
  当你组件间传递数据变得困难，甚至不知道该怎么传递了，就可以使用 Redux 了。
</Alert>

## 安装

```bash
# NPM
npm install redux

# Yarn
yarn add redux
```
