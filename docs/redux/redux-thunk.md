---
title: redux-thunk
toc: menu
order: 4
---

<BackTop></BackTop>

# redux-thunk

`redux-thunk` 能让我们在 Redux 中做异步请求。

## 安装

```bash
$ yarn add redux-thunk
```

## 作用

- 异步数据既然要保存到 Redux 中, 所以获取异步数据也应该是 Redux 的一部分，`redux-thunk` 能将异步请求封装到 Redux 中。

- 默认情况下 `dispatch` 只能接收一个对象，有了 `redux-thunk` 后 `dispatch` 可以接收一个函数。

- 通过 `dispatch` 派发一个函数的时候能够去执行这个函数, 而不是执行 `reducer` 函数。

## 使用

- 在创建 `store` 时应用 `redux-thunk` 中间件。

- 在 `action` 中获取网络数据。

- 在组件中派发 `action`。

## 修改 Store

在 store 中应用 `redux-thunk` 中间件：修改 `store.js`:

```js
// redux/store.js

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';

// 引入汇总之后的reducer
import reducers from './reducers';

// 引入redux-thunk，用于支持异步action
import thunkMiddleware from 'redux-thunk';

// 暴露store-应用redux-thunk中间件
export default createStore(reducers, applyMiddleware(thunkMiddleware));
```

`applyMiddleware` 就是 Redux 的一个原生方法，将所有中间件组成一个数组，依次执行。

## 修改 Action

修改 `redux/actions/user.js` 中的 `getUserListAsync` 函数，此函数会得到一个 `dispatch` 参数，在数据请求成功的回调函数中可以使用它来派发同步 action 任务。

```jsx | pure
// redux/actions/user.js

// 导入常量
import axios from 'axios';
import { SET_USER_LIST } from '../constants';

// 用户列表 Action
export const getUserList = (data) => ({
  type: SET_USER_LIST,
  data,
});

// 定义getUserListAsync方法，在这个方法中发送网络请求并派发同步action任务
export const getUserListAsync = (params) => (dispatch) => {
  console.log('请求参数：', params); // 输出：请求参数： {id: '001'}
  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';
  axios.get(url).then((res) => {
    if (res.data.code === 200) {
      // 派发同步action任务
      dispatch(getUserList(res.data.data));
    }
  });
};
```

当 `axios` 发送网络请求成功返回数据后立即使用 `dispatch` 派发同步 action 任务。

## 修改组件

默认情况下 `dispatch` 只能接收一个对象，有了 `redux-thunk` 后 `dispatch` 可以接收一个函数。

```jsx | pure
// User 组件

import React from 'react';

// 导入connect
import { connect } from 'react-redux';

// 导入 action
import { getUserListAsync } from '../../redux/actions/user';

const User = (props) => {
  const { userList, getUserListHandler } = props;
  console.log('用户列表:', userList);
  return (
    <div>
      <h1>User组件-用户列表</h1>
      <ul>
        {userList.map((item) => (
          <li key={item.id}>
            姓名：{item.chineseName}—— 年龄：{item.age}—— 城市：{item.city}
          </li>
        ))}
      </ul>
      <button onClick={getUserListHandler}>获取用户列表</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    userList: user.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // 定义getUserListAsync这个异步action，并且是一个函数
    getUserListHandler() {
      // 使用 redux-thunk 后 dispatch 接收的是一个函数并传递参数
      dispatch(getUserListAsync({ id: '001' }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
```

当我们点击 `获取用户列表` 按钮时，会正常发送网络请求获取到用户列表数据，并渲染页面。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/redux-thunk-01.png)

## 请求成功回调事件

因为我们将网络请求封装在 Redux 中，我们在组件中就无法知道网络请求什时候成功，就无法添加 loading 效果，所以我们可以通过添加回调函数的方式知道网络请求成功的时机。

向 `getUserListAsync` 方法中传递一个回调函数：`dispatch(getUserListAsync({ id: "001" }, callback));`:

```jsx | pure
// redux/actions/user.js

// 导入常量
import axios from 'axios';
import { SET_USER_LIST } from '../constants';

// 用户列表 Action
export const getUserList = (data) => ({
  type: SET_USER_LIST,
  data,
});

// 定义getUserListAsync方法，在这个方法中发送网络请求并派发同步action任务
export const getUserListAsync = (params, callback) => (dispatch) => {
  console.log('请求参数：', params); // 输出：请求参数： {id: '001'}
  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';
  axios.get(url).then((res) => {
    if (res.data.code === 200) {
      callback(); // 请求成功就触发回调事件
      // 派发同步action任务
      dispatch(getUserList(res.data.data));
    }
  });
};
```

```jsx | pure
// User 组件

import React from 'react';

// 导入connect
import { connect } from 'react-redux';

// 导入 action
import { getUserListAsync } from '../../redux/actions/user';

const User = (props) => {
  const { userList, getUserListHandler } = props;
  console.log('用户列表:', userList);

  // 获取用户数据的点击事件
  const getUserData = () => {
    getUserListHandler(() => {
      // 请求成功，回调函数被执行
      console.log('获取用户数据成功');
    });
  };
  return (
    <div>
      <h1>User组件-用户列表</h1>
      <ul>
        {userList.map((item) => (
          <li key={item.id}>
            姓名：{item.chineseName}—— 年龄：{item.age}—— 城市：{item.city}
          </li>
        ))}
      </ul>
      <button onClick={getUserData}>获取用户列表</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    userList: user.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // 定义getUserListAsync这个异步action，并且是一个函数
    getUserListHandler(callback) {
      // 使用 redux-thunk 后 dispatch 接收的是一个函数并传递参数
      dispatch(getUserListAsync({ id: '001' }, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
```

于是乎，我们就可以在 `回调函数` 中添加 loading 等效果了。
