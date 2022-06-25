---
title: react-redux
toc: menu
order: 3
---

<BackTop></BackTop>

# react-redux

`React-Redux` 是 Redux 官方的绑定库，能够让我们在组件中更好的读取和操作 Redux 保存的状态。

## 安装

```bash
$ yarn add react-reduct
```

## 解决问题

1. 每次 state 变化页面都不会主动更新，必须要使用 [subscribe()](/redux/base_use#subscribe) 监听器来监听 state 的变化从而更新页面，页面在卸载时还需要 [unsubscribe()](/redux/base_use#unsubscribe) 取消监听，过程相当繁琐。

2. 冗余代码太多，每次都需要在使用 `getState()` 函数获取最新的 state。

3. 操作 store 的代码过于分散。

## Provider

`<Provider store>` 使组件层级中的 `connect()` 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 `<Provider>` 中才能使用 `connect()` 方法。

### 属性

- `store`：应用程序中唯一的 Redux store 对象，所有被 `Provider` 包裹的后代容器组件都能接收到 store。

- `children`：这是一个 `ReactElement` 类型的组件层级根组件。

### 使用

在入口文件，导入 `react-redux` 中的 `Provider` 组件包裹 `<App />` 组件并向后代组件传递 `store`。

```jsx | pure
// index.ts

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 导入 react-redux中的 Provider
import { Provider } from 'react-redux';

// 导入 store
import store from './redux/store';

ReactDOM.render(
  /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```

经过上面一系列的操作，我们就可以通过 `react-redux` 提供的 `connect()` 函数连接 React 组件与 Redux store。

<Alert type="info">连接操作不会改变原来的组件，而是返回一个新的已与 Redux store 连接的组件。</Alert>

## connect

`connect()` 函数用于连接 React 组件与 Redux store。

```ts
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]);
```

### 参数

- `[mapStateToProps(state, [ownProps]): stateProps] `：<Badge>Function</Badge> 类型。

  如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，`mapStateToProps` 函数就会被调用。该回调函数必须返回一个 `纯对象`，这个对象会与组件的 `props` 合并。如果你省略了这个参数，你的组件将不会监听 Redux store。如果指定了该回调函数中的第二个参数 `ownProps`，则该参数的值为传递到组件的 `props`，而且只要组件接收到新的 `props`，`mapStateToProps` 也会被调用（例如，当 props 接收到来自父组件一个小小的改动，那么你所使用的 `ownProps` 参数，`mapStateToProps` 都会被重新计算）。

- `[mapDispatchToProps(dispatch, [ownProps]): dispatchProps]`：<Badge>Object or Function</Badge> 类型。

  如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 `Redux action creator`，对象所定义的方法名将作为属性名；每个方法将返回一个 `新的函数`，函数中 `dispatch` 方法会将 `action creator` 的返回值作为参数执行。这些属性会被合并到组件的 `props` 中。

- `[mergeProps(stateProps, dispatchProps, ownProps): props] `：<Badge>Function</Badge> 类型。

  如果指定了这个参数，`mapStateToProps()` 与 `mapDispatchToProps()` 的执行结果和组件自身的 `props` 将传入到这个回调函数中。该回调函数返回的对象将作为 `props` 传递到被包装的组件中。你也许可以用这个回调函数，根据组件的 `props` 来筛选部分的 `state` 数据，或者把 `props` 中的某个特定变量与 action creator 绑定在一起。如果你省略这个参数，默认情况下返回 `Object.assign({}, ownProps, stateProps, dispatchProps)` 的结果。

- `[options]`：<Badge>Object</Badge> 类型。

  如果指定这个参数，可以定制 connector 的行为。

  - `[pure = true]` (Boolean): 如果为 `true`，connector 将执行 `shouldComponentUpdate` 并且浅对比 `mergeProps` 的结果，避免不必要的更新，前提是当前组件是一个“纯”组件，它不依赖于任何的输入或 `state` 而只依赖于 `props` 和 Redux store 的 `state`。默认值为 `true`。

  - `[withRef = false]` (Boolean): 如果为 `true`，connector 会保存一个对被包装组件实例的引用，该引用通过 `getWrappedInstance()` 方法获得。默认值为 `false`。

<Alert type="info">参数有点多，但是平时基本只会用到 mapStateToProps 和 mapDispatchToProps。</Alert>

### 应用 <Badge>重要</Badge>

```jsx | pure
// User 组件

import React from 'react';

// 导入connect
import { connect } from 'react-redux';

// 导入 action
import { setUserInfo } from '../../redux/actions/user';
import { increment } from '../../redux/actions/count';

const User = (props) => {
  // props 中会包含 count、userInfo、incrementHandler、setUserInfoHandler
  console.log(props);
  const { count, userInfo, incrementHandler, setUserInfoHandler } = props;
  return (
    <div>
      <h1>User组件</h1>
      <h2>计数器：{count}</h2>
      <button onClick={incrementHandler}>计数器累加</button>
      <hr />
      <ul>
        <li>姓名：{userInfo.name}</li>
        <li>年龄：{userInfo.age}</li>
      </ul>
      <button onClick={setUserInfoHandler}>修改信息</button>
    </div>
  );
};

// mapStateToProps方法：告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state) => {
  console.log(state); // 输出：{count: 0, user:{userInfo:{name:'张三', age: 30}, userList:[]}}
  return {
    count: state.count,
    userInfo: state.user.userInfo,
  };
};

// mapStateToProps方法：告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapDispatchToProps = (dispatch) => {
  return {
    incrementHandler() {
      // 执行increment这个action，并传递参数
      dispatch(increment(1));
    },
    setUserInfoHandler() {
      // 执行setUserInfo这个action，并传递参数
      dispatch(setUserInfo({ name: '李四', age: 50 }));
    },
  };
};

// 通过 connect 函数将 User 组件与 mapStateToProps 和 mapDispatchToProps 方法关联
export default connect(mapStateToProps, mapDispatchToProps)(User);
```

在 `mapStateToProps` 中的 state 会包括 `count` Reducer 和 `user` Reducer。

执行 `incrementHandler()` 或者 `setUserInfoHandler()` 方法，既可以操作 Redux Store，同时又更新了页面。不需要我们添加监听器和取消监听器了。

## 异步问题

从上述的例子来看，我们都是执行的同步 `Action`，也就是说 `Action` 的值是一个普通对象，不包含异步请求，如果包含异步请求，就会发现我们写不下去了：

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
      // dispatch函数接收的是一个对象，但是我们需要接收的是一个函数，完了！！！写不下去了
      // dispatch(getUserListAsync({ id: "001" })); // 不能这样写，dispatch不能接收函数
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
```

`dispatch()` 函数在默认情况下只能接收一个对象，这就导致我们的异步请求数据只能放在 UI 组件里面。怎么将异步数据请求放在 Redux 中呢，我们可以使用中间件 `redux-thunk` 或者 `Redux-promise`。
