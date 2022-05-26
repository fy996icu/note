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

接着我们初始化 `State` 和创建 `Reducer` 函数：始终要记住 Reducer 是一个 [纯函数](/redux/core_concept#纯函数)。

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
export default function userReducer(preState = initState, action) {
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
}
```

之所以将这样的函数称之为 `reducer`，是因为这种函数与被传入 `Array.prototype.reduce(reducer, ?initialValue)` 里的回调函数属于相同的类型。保持 `reducer` 纯净非常重要。永远不要在 `reducer` 里做这些操作：

- 修改传入参数。

- 执行有副作用的操作，如 API 请求和路由跳转。

- 调用非纯函数，如 `Date.now()` 或 `Math.random()`。

### 合并 `Reducer`

随着项目的功能越来越多，我们为功能模块创建对应 `reducer`，这样有助于我们分类和管理。

我们可以通过 Redux 提供的 `combineReducers()` 函数，将多个 `reducer` 合并成一个总的 `Reducer`，并暴露给 `Store`。

在 `reducers` 文件夹下创建 `index.js`，用于合并 reducer。

```js
// reducers/index.js

// 引入combineReducers，用于合并多个reducer
import { combineReducers } from 'redux';
// 计数相关reducer
import count from './count';
// 用户相关reducer
import user from './user';
// 合并所有的reducer变为一个总的reducer
export default combineReducers({
  count,
  user,
});
```

### 注意

需要注意 `reducer` 一定要保持纯净。**只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。**

## Store

### 说明

`Redux` 应用只有一个单一的 `Store`。当需要拆分数据处理逻辑时，你应该使用 `Reducer` 组合，而不是创建多个 `Store`。

### 职责

Store 有以下职责：

- 维持应用的 State。

- 提供 `getState()` 方法获取 State。

- 提供 `dispatch(action)` 方法更新 State。

- 通过 `subscribe(listener)` 注册监听器。

- 通过 `subscribe(listener)` 返回的函数注销监听器。

### 创建 `Store`

根据已有的 Reducer 来创建 Store 是非常容易的。我们已经使用 Redux 提供的 `combineReducers()` 将多个 Reducer 合并成为一个。现在我们将其导入，并传递 `createStore()`。

```js
// redux/store.js

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore } from 'redux';

// 引入汇总之后的reducer
import reducers from './reducers';

// 暴露store
export default createStore(reducers);
```

### getState

我们将 `Action`、`Reducer`、`Store` 都创建好了，接下来我们在 UI 组件中试试，通过 `getState()` 函数获取 `State`。

新建 `User.jsx` 组件，并导入 `store`:

```jsx | pure
import React from 'react';

// 导入 store
import store from '../../redux/store';

const User = () => {
  // 获取所有的 State
  console.log(store.getState());
  /* 
    控制台输出：{
      count: 0,
      user:{
        userInfo:{name:'张三', age: 30},
        userList:[]
      }
    }
  */
  return (
    <div>
      <h1>User组件</h1>
    </div>
  );
};

export default User;
```

查看控制台的输出内容我们可知，通过 `store.getState()` 我们可以获取到 Store 中的所有数据：

- `count` reducer 中的数据：

  ```js
  count: 0;
  ```

- `user` reducer 中的数据：

  ```js
  user:{
    userInfo:{name:'张三', age: 30},
    userList:[]
  }
  ```

### dispatch

我们可以通过 `store.dispatch(action)` 来发起 `Action` 更新 `State`:

更改 userInfo 为：`{name: '李四', age: 50}`：

```jsx | pure
// User 组件

import React, { useState, useEffect } from 'react';
import store from '../../redux/store';
// 导入 action
import { setUserInfo } from '../../redux/actions/user';

const User = () => {
  // 初始化 state
  const [state, setState] = useState({
    name: '',
    age: 0,
  });
  // 修改信息-发起名为 setUserInfo 的Action，并传递参数更改 State
  const changeUserInfo = () => {
    store.dispatch(setUserInfo({ name: '李四', age: 50 }));
  };
  // 组件挂载完毕就获取 store中的state，并赋值
  useEffect(() => {
    const { user } = store.getState();
    setState(user.userInfo);
  }, []);
  return (
    <div>
      <h1>User组件</h1>
      <ul>
        <li>姓名：{state.name}</li>
        <li>年龄：{state.age}</li>
      </ul>
      <button onClick={changeUserInfo}>修改信息</button>
    </div>
  );
};

export default User;
```

<Badge>注意</Badge>：初始化进入页面正常显示：`姓名：张三；年龄：30`，但是点击 `修改信息` 按钮会发现页面并没有更新，并不是我们发起的 Action 错误，确实是修改了 State 的，只是页面没有重新获取到最新的值来更新页面。

此时我们可以通过 `store.subscribe()` 来监听 Store 的变化，从而更新页面。

### subscribe

`subscribe(listener)` 是一个变化监听器，每当我们通过 `store.dispatch(action)` 的时候就会执行，`state` 树中的一部分可能已经变化。你可以在回调函数里调用 `getState()` 来拿到当前 `state`。

通过 `subscribe()` 监听 `state` 的变化拿到最新的 `state`，再通过 `setState(state)` 更新页面，从而解决我们之前修改了 state 页面不更新的问题：

```jsx | pure
// User 组件

import React, { useState, useEffect } from 'react';
import store from '../../redux/store';
// 导入 action
import { setUserInfo } from '../../redux/actions/user';

const User = () => {
  // 初始化 state
  const [state, setState] = useState({
    name: '',
    age: 0,
  });

  // 修改信息-发起名为 setUserInfo 的Action，并传递参数更改 State
  const changeUserInfo = () => {
    store.dispatch(setUserInfo({ name: '李四', age: 50 }));
  };

  // 组件挂载完毕就获取 store中的state，并赋值，再添加一个监听器
  useEffect(() => {
    const { user } = store.getState();
    setState(user.userInfo);
    // 监听器-发起action将会监听执行
    store.subscribe(() => {
      const { user } = store.getState();
      setState(user.userInfo);
    });
  }, []);

  return (
    <div>
      <h1>User组件</h1>
      <ul>
        <li>姓名：{state.name}</li>
        <li>年龄：{state.age}</li>
      </ul>
      <button onClick={changeUserInfo}>修改信息</button>
    </div>
  );
};

export default User;
```

<Badge>注意</Badge>：这样我们在点击 `修改信息` 按钮之后就能正确赋值，而且页面也会随之更新了，但是我们的 `subscribe()` 监听器会一直存在，不会随着组件的卸载而取消监听，所以我们需要在组件卸载时取消监听。

### unsubscribe

上面的例子存在一个问题就是监听器会一直存在，不会随着组件的卸载而取消监听，所以我们需要在组件卸载时取消监听。

`subscribe()` 函数执行时会返回一个函数，这个函数就是取消监听器的函数，我更愿意称它为 `unsubscribe()` 函数。

取消监听的方法：

```jsx | pure
import React, { useState, useEffect } from 'react';
import store from '../../redux/store';
// 导入 action
import { setUserInfo } from '../../redux/actions/user';

const User = () => {
  // 初始化 state
  const [state, setState] = useState({
    name: '',
    age: 0,
  });
  // 修改信息-发起名为 setUserInfo 的Action，并传递参数更改 State
  const changeUserInfo = () => {
    store.dispatch(setUserInfo({ name: '李四', age: 50 }));
  };
  // 组件挂载完毕就获取 store中的state，并赋值，再添加一个监听器
  useEffect(() => {
    const { user } = store.getState();
    setState(user.userInfo);

    // 监听器-发起action将会监听执行
    const unsubscribe = store.subscribe(() => {
      const { user } = store.getState();
      setState(user.userInfo);
    });

    // 页面卸载时-取消监听
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>User组件</h1>
      <ul>
        <li>姓名：{state.name}</li>
        <li>年龄：{state.age}</li>
      </ul>
      <button onClick={changeUserInfo}>修改信息</button>
    </div>
  );
};

export default User;
```

这样每当页面挂载就会添加一个监听器，组件卸载时取消这个监听器。

但是每次这样添加监听器，卸载监听器确实很麻烦，有没有什么插件可以解决这个问题呢？有！那就是[react-redux](/redux/react-redux)。
