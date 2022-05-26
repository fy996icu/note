---
title: 简介
toc: menu
order: 0
---

# 简介

`Pinia` 是 `Vue` 新一代的轻量级状态管理库，相当于 `Vuex`，也是 `Vue` 核心团队推荐的状态管理库。

支持 `Vue2` 和 `Vue3`，未来很有可能替代 `Vuex`，比 `Vuex` 更容易上手。

## 名字

`Pinia` 是西班牙语中菠萝一词最相似的英语发音：`piña`。菠萝实际上是一组单独的果实，它们结合在一起形成一个水果。与 `store` 类似，每个 `store` 都是单独存在的，但它们最终都是相互关联的。它也是一种美味的热带水果，原产于南美洲。

## 诞生

`Pinia` 从 2019 年 11 月左右，开始尝试重新使用 [Composition API](/vue3/start/composition-api) 设计 `Vue Store`。

`Pinia` 试图尽可能接近 `Vuex` 的理念，旨在测试 `Vuex` 下一次迭代的一个方案。目前，`Vuex 5` 的 [open RFC API](https://github.com/vuejs/rfcs/discussions/270)与 `Pinia` 的 API 非常相似，这说明 `Pinia` 成功了。

注意，`Pinia` 的作者([Eduardo](https://github.com/posva))，也是 `Vue.js` 核心团队的一员，积极参与 `Router` 和 `Vuex` 等 API 的设计。设计 `Pinia` 的目的是想重新设计使用 `store` 的体验，同时保持 `Vue` 的容易理解的理念。将 `Pinia` 的 API 与 `Vuex` 保持尽可能的接近，因为它不断向前发展，使人们能够方便地迁移到 `Vuex`，甚至在未来融合两个项目。

资源来自掘金社区：[俄小法](https://juejin.cn/user/993614678466078)

## 特性

`Pinia` 有如下特点：

- 完整的 `typescript` 的支持。

- 足够轻量，压缩后的体积只有约 `1kb`，甚至感觉不到它的存在。

- 去除 `mutations`，只有 `state`，`getters`，`actions`。

- `actions` 支持同步和异步。

- 没有模块嵌套，只有 `store` 的概念，`store` 之间可以自由使用，更好的代码分割。

- 无需手动添加 `store`，`store` 一旦创建便会自动添加。

- `Pinia` 与 `Vue devtools` 挂钩，为您提供增强的 `Vue 2` 和 `Vue 3` 开发体验。

## 对比 `Vuex`

**图解 Pinia**

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/pinia-01.png)

**对比 Vuex**

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/pinia-02.png)
