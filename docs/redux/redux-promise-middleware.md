---
title: redux-promise-middleware
toc: menu
order: 6
---

<BackTop></BackTop>

# redux-promise-middleware

`redux-promise-middleware` 和 `redux-promise` 一样，能让我们在 Redux 中做异步请求。

action 中包含 `payload`，中间件将行为分离为 `pending`，`fulfilled`, `rejected` 三个行为，来表示异步行为的状态。

## 安装

```bash
$ yarn add redux-promise-middleware
```

## 基本使用

<Alert type="warning">
  注意，<strong>payload</strong> 是固定名，不能修改。
</Alert>

```js
const asyncAction = () => ({
  type: 'PROMISE',
  payload: new Promise(...),
})
```

## 注意事项

在触发了一个 `Action` 时，我们在 `Reducer` 函数中的 `type` 判断时需要添加 `_PENDING` 、`_FULFILLED` 、`_REJECTED`后缀，分别表示加载中、加载成功、加载失败。

```js
// Action

const asyncAction = () => ({
  type: 'PROMISE',
  payload: new Promise(...),
})


// Reducer

export default function userReducer(preState = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case "PROMISE_PENDING":
      console.log("Promise加载中...");
      return preState;

    case "PROMISE_FULFILLED":
      console.log("Promise加载完成...");
      return { ...preState, ...payload };

    case "PROMISE_REJECTED":
      return preState;
    default:
      return preState;
  }
}
```

## Store

在 store 中应用 `redux-promise-middleware` 中间件：修改 `store.js`:

```js
// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';

// 引入汇总之后的reducer
import reducers from './reducers';

// 引入redux-promise-middleware，用于支持异步promise风格的action
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducers, applyMiddleware(reduxPromiseMiddleware));
```

## Action

修改 `redux/actions/user.js` 中的 `getUserListAsync` 函数：

### 对象方式

`payload` 为一个对象，接收一个 `Promise` 对象。

```js
import axios from 'axios';
import { SET_USER_LIST } from '../constants';

// 定义getUserListAsync方法
export const getUserListAsync = (params, callback) => {
  console.log('请求参数：', params); // 输出：请求参数： {id: '001'}
  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';
  return {
    type: SET_USER_LIST,
    payload: new Promise((resolve) => {
      axios
        .get(url)
        .then((res) => {
          callback(); // 请求成功就触发回调事件
          resolve(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }),
  };
};
```

这里的 `payload` 这个 key 值是不允许修改的，只能叫 `payload`，这个是用来处理异步请求的，如果请求成功那么会将请求到的数据放在 `resolve()` 里面。

### 函数方式

`payload` 为一个 `async` 修饰的函数。

```js
import axios from 'axios';
import { SET_USER_LIST } from '../constants';

// 定义getUserListAsync方法
export const getUserListAsync = (params, callback) => {
  console.log('请求参数：', params); // 输出：请求参数： {id: '001'}
  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';
  return {
    type: SET_USER_LIST,
    async payload() {
      const res = await axios.get(url);
      if (res.data.code === 200) {
        callback(); // 请求成功就触发回调事件
        return res.data.data;
      }
    },
  };
};
```

## Reducers

修改 `redux/reducers/user.js` 中的 `userReducer` 函数：

```js
// 导入Action type 常量
import { SET_USER_LIST } from '../constants';

// 初始化 State
const initState = {
  userList: [],
};

// 创建 Reducer
export default function userReducer(preState = initState, action) {
  const { type, payload } = action;
  switch (type) {
    // 获取用户列表
    case SET_USER_LIST + '_PENDING':
      console.log('Promise加载中...');
      return preState;
    // 获取用户列表
    case SET_USER_LIST + '_FULFILLED':
      console.log('Promise加载完成...');
      return { ...preState, userList: payload };
    default:
      return preState;
  }
}
```

<Alert type="warning">
  注意，在判断 <strong>type</strong> 时，一定要记得拼接上后缀！
</Alert>

## 组件中使用

无需修改组件，同 `redux-thunk` 方式的使用方法一致。

## 最终执行效果

当我们点击 `获取用户列表` 按钮时，会正常发送网络请求获取到用户列表数据，并渲染页面。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/redux-promise-middleware.png)
