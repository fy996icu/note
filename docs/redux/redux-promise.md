---
title: redux-promise
toc: menu
order: 5
---

<BackTop></BackTop>

# redux-promise

`redux-promise` 和 `redux-thunk`一样，能让我们在 Redux 中做异步请求。

## 安装

```bash
$ yarn add redux-promise
```

## 对比

`redux-promise` 和 `redux-thunk` 一样，都是用来解决 `Redux` 中异步请求问题，`redux-thunk` 通过 `Action` 返回一个函数解决异步请求问题，而 `redux-promise` 则是通过 `Action` 返回一个 `promise` 来解决异步请求问题。

### redux-thunk

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

### redux-promise

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

// 定义getUserListAsync方法，async 返回一个 Promise对象
export const getUserListAsync = async (params, callback) => {
  console.log('请求参数：', params); // 输出：请求参数： {id: '001'}
  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';
  const res = await axios.get(url);
  if (res.data.code === 200) {
    callback(); // 请求成功就触发回调事件
    return getUserList(res.data.data);
  }
};
```

## 修改 Store

在 store 中应用 `redux-promise` 中间件：修改 `store.js`:

```js
// redux/store.js

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';

// 引入汇总之后的reducer
import reducers from './reducers';

// 引入redux-promise，用于支持异步promise风格的action
import promiseMiddleware from 'redux-promise';

// 暴露store-应用redux-thunk、redux-promise中间件
export default createStore(reducers, applyMiddleware(promiseMiddleware));
```

## 修改 Action

修改 `redux/actions/user.js` 中的 `getUserListAsync` 函数，此函数返回值必须是一个 `Promise` 对象。

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

// 定义getUserListAsync方法，async 返回一个 Promise对象
export const getUserListAsync = async (params, callback) => {
  console.log('请求参数：', params); // 输出：请求参数： {id: '001'}
  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';
  const res = await axios.get(url);
  if (res.data.code === 200) {
    callback(); // 请求成功就触发回调事件
    return getUserList(res.data.data);
  }
};
```

## 修改组件

无需修改组件，同 `redux-thunk` 方式的使用方法一致。
