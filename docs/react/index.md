---
title: React基础
toc: menu
order: 0
---
# React基础

>由于工作中主要以函数式组件为主，所以以下案例大多采用函数式组件为例。

## React描述

用于动态构建用户界面的 JavaScript 库(只关注于视图)。

## React特点

1. 声明式编码。
2. 组件化编码。
3. 高效（拥有优秀的Diffing算法）。

## React的基本使用

### 相关核心库

1. `react.js`:React核心库。
2. `react-dom.js`:提供操作DOM的React扩展库。
3. `babel.min.js`:解析JSX语法代码转化为JS代码库。



### JSX

1. `JSX`全称：`JavaScript XML`。
2. React定义的一种类似于`XML`的JS扩展语法: JS + XML本质是：`React.createElement(component, props, ...children)`方法的语法糖。
3. 作用：简化创建虚拟DOM。
