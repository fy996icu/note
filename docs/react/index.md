---
title: React基础
toc: menu
order: 0
---

<BackTop></BackTop>

# React 基础

> 由于工作中主要以函数式组件为主，所以以下案例大多采用函数式组件为例。

## React 描述

用于动态构建用户界面的 JavaScript 库(只关注于视图)。

## React 特点

1. 声明式编码。
2. 组件化编码。
3. 高效（拥有优秀的 Diffing 算法）。

## React 的基本使用

### 相关核心库

1. `react.js`:React 核心库。
2. `react-dom.js`:提供操作 DOM 的 React 扩展库。
3. `babel.min.js`:解析 JSX 语法代码转化为 JS 代码库。

### JSX

1. `JSX`全称：`JavaScript XML`。
2. React 定义的一种类似于`XML`的 JS 扩展语法: JS + XML 本质是：`React.createElement(component, props, ...children)`方法的语法糖。
3. 作用：简化创建虚拟 DOM。
