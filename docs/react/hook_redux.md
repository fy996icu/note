---
title: Hook替代Redux
toc: menu
order: 13
---

<BackTop></BackTop>

# Hook 替代 Redux

函数式组件替代 `Redux` 需要使用 `useReducer` 、`useContext`、`React.createContext`。

**步骤：**

1. 将数据集中在一个 `store` 对象。

2. 将所有操作集中在 `reducer`。

3. 创建一个 `MyContext`。

4. 创建对数据的读取 API（`useReducer(reducer, store)`）。

5. 用 `MyContext.Provider` 将 `MyContext` 提供给所有组件。

6. 将读取数据的 API 通过 `MyContext.Provider` 的 `value` 属性传递给所有组件。

7. 各个组件用 `useContext` 获取读写 API。

```jsx
import React, { useReducer, useContext, createContext } from 'react';

// 1. 将数据集中在一个 store 对象。
const store = {
  count: 0,
};

// 2. 将所有操作集中在 reducer(必须是纯函数)
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'JIA':
      return { ...state, count: state.count + payload };
    case 'JIAN':
      return { ...state, count: state.count - payload };
    default:
      throw new Error();
  }
};

// 3. 创建一个 MyContext;
const MyContext = createContext(null);

const Header = () => {
  // 7. 各个组件用 useContext 获取读写API。
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Header组件：</h2>
      <div>计数器：{state.count}</div>
    </div>
  );
};

const Body = () => {
  // 7. 各个组件用 useContext 获取读写API。
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Body组件：</h2>
      <div>计数器：{state.count}</div>
    </div>
  );
};

const Footer = () => {
  // 7. 各个组件用 useContext 获取读写API。
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Footer组件：</h2>
      <div>计数器：{state.count}</div>
    </div>
  );
};

const Wrap = () => {
  // 4. 创建对数据的读取 API
  const [state, dispatch] = useReducer(reducer, store);

  // 加操作
  const jiaCount = () => {
    // 传入type操作类型，payload参数
    dispatch({ type: 'JIA', payload: 1 });
  };

  // 减操作
  const jianCount = () => {
    // 传入type操作类型，payload参数
    dispatch({ type: 'JIAN', payload: 1 });
  };
  return (
    <div>
      {/* 5. 用 MyContext.Provider 将 MyContext 提供给所有组件。 */}

      {/* 6. 将读取数据的 API 通过 MyContext.Provider 的 value 属性传递给所有组件。 */}

      <MyContext.Provider value={{ state, dispatch }}>
        <Header />
        <hr />
        <Body />
        <hr />
        <Footer />
        <hr />
        <button onClick={jiaCount}>所有计数器加</button>
        <button onClick={jianCount}>所有计数器减</button>
      </MyContext.Provider>
    </div>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useReducer-redux.png)
