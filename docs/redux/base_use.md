---
title: 基本应用
toc: menu
order: 2
---

# 基本应用

## Action

### 简介

`Action` 是把数据从应用传到 `Store` 的有效载荷。它是 `Store` 数据的唯一来源。一般来说你会通过 `store.dispatch(action)` 将 `Action` 传到 `Store`。

### 目录

在 `src` 目录下创建 `redux` 目录，再其下分别创建 `actions`、`reducers`、`constants` 目录，具体结构如下：

```text
.
├─ node_modules
├─ public
├─ src
│  ├─ redux
│  │  ├─ actions
│  │  ├─ reducers
|  |  ├─ constants
│  │  └─ store.js
│  ├─ pages
│  ├─ App.jsx
│  ├─ index.js
│  └─ ...
├─ package.json
├─ README.md
```

### 创建 `Action`

我们尝试新建一个 `action`，它是一个 JavaScript 对象，这个对象包含两个属性，分别是：

- `type`: 会被定义成字符串常量，表示将要执行的动作。

- `data`: 传递给 `Reducer` 的数据。

```js
// 将type定义为常量，编辑器有代码提示，可以避免type书写错误，
const USER_INFO = 'USER_INFO';

// 定义一个名为user_info_action的Action
const user_info_action = {
  type: USER_INFO,
  data: {
    name: '张三',
    age: 30,
  },
};
```

上面的创建方法在实际开发中很少使用，使用更多的是函数生成 `Action`。

### 函数生成 `Action`

函数生成 `Action` 更容易被移植和测试。

随着项目的增大，为了更方便的管理我们的 `Action`，我们可以将 `Action` 分成对应功能的模块。在 `actions` 目录下创建 `user.js` 文件，专门用于管理我们用户相关的 `Action`。

在 `constants` 目录下创建 `index.js` 文件用于管理我们 `Action` 中的 `type` 常量。

**`constants/index.js` 代码如下：**

```js
// constants/index.js

// 定义设置用户信息的action type
export const SET_USER_INFO = 'SET_USER_INFO';

// 定义添加用户的action type
export const ADD_USER = 'ADD_USER';
```

**`actions/user.js` 代码如下：**

```js
// actions/user.js

// 导入常量
import { SET_USER_INFO, ADD_USER } from '../constants';

// 定义一个设置用户信息的 Action 并导出
export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  data,
});

// 定义一个添加用户的 Action 并导出
export const addUserToList = (data) => ({
  type: ADD_USER,
  data,
});
```

我们将 `Action` 生成并导出，将在 `Reducer` 中使用它。

## Reducer

### 说明

`Reducers` 指定了应用状态的变化如何响应 `Action` 并发送到 `Store` 的，记住 `Action` 只是描述了有事情发生了这一事实，并没有描述应用如何更新 `State`。

### State

在 Redux 应用中，所有的 `State` 都被保存在一个单一对象中。建议在写代码前先想一下这个对象的结构。如何才能以最简的形式把应用的 `State` 用对象描述出来。

例如我们需要更改用户信息和添加用户，我们则需要定义我们的 `State` 结构：

```js
// 初始化我们的 State
const State = {
  userInfo: {
    name: '张三',
    age: 30,
  },
  userList: [],
};
```

### 创建 `Reducer`

在 `reducers` 文件夹下创建 `user.js` 文件。

接着我们初始化 `State` 和创建 `Reducer` 函数：始终要记住 Reducer 是一个 [纯函数](/doc/document/redux/核心概念.html#纯函数)。

`Reducer` 函数接收两个参数：`state` 和 `action`，返回一个 **新的 State**。

我们将以指定 `State` 的初始状态作为开始。Redux 首次执行时，`State` 为 `undefined`，此时我们可借机设置并返回应用的初始 `State`。

在 `default` 情况下返回旧的 `State`。遇到未知的 `Action` 时，一定要返回旧的 `State`。

```js
// 导入Action type 常量
import { SET_USER_INFO, ADD_USER } from '../constants';

// 初始化 State
const initState = {
  userInfo: {
    name: '张三',
    age: 30,
  },
  userList: [],
};

// 创建 Reducer
export default userReducer = (preState = initState, action) => {
  // 解构出 Action 中的 type 和 传递过来的数据
  const { type, data } = action;
  switch (type) {
    // 处理设置用户信息
    case SET_USER_INFO:
      return { ...preState, userInfo: data };

    // 处理添加用户
    case ADD_USER:
      return { ...preState, userInfo: [...preState.userList, data] };
    default:
      return preState;
  }
};
```

之所以将这样的函数称之为 `reducer`，是因为这种函数与被传入 `Array.prototype.reduce(reducer, ?initialValue)` 里的回调函数属于相同的类型。保持 `reducer` 纯净非常重要。永远不要在 `reducer` 里做这些操作：

- 修改传入参数。

- 执行有副作用的操作，如 API 请求和路由跳转。

- 调用非纯函数，如 `Date.now()` 或 `Math.random()`。

### 注意

需要注意 `reducer` 一定要保持纯净。**只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。**

## Store

`Redux` 应用只有一个单一的 `Store`。当需要拆分数据处理逻辑时，你应该使用 `Reducer` 组合，而不是创建多个 `Store`。
