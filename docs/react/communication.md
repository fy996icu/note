---
title: 组件间通信
toc: menu
order: 5
---
# 组件间通信

在使用 React 的过程中，不可避免的需要组件间进行消息传递（通信），组件间通信大体有下面几种情况：
- 父组件向子组件通信
- 子组件向父组件通信
- 跨级组件之间通信
- 非嵌套组件间通信

## 父组件向子组件通信

<Alert type="info">
父组件向子组件通信，这是最简单也是最常用的一种通信方式：父组件通过向子组件传递 props，子组件得到 props 后进行相应的处理。
</Alert>

**详细示例：**

```jsx | pure
import React from 'react';

// 子组件
const Child = (props) => {
  return (
    <div>
      {/* 输出：输出：我的名字是父亲起的，我叫：张三 */}
      <h2>我的名字是父亲起的，我叫：{props.name}</h2>
    </div>
  );
};

// 父组件
const Father = () => {
  return (
    <div>
      <Child name="张三" />
    </div>
  );
};

export default Father;
```

## 子组件向父组件通信

<Alert type="info">
  子组件向父组件通信，利用回调函数，可以实现子组件向父组件通信：父组件将一个函数作为 props 传递给子组件，子组件调用该回调函数，便可以向父组件通信。
</Alert>

**详细示例：**

```jsx | pure
import React, { useState } from 'react';

// 子组件
const Child = (props) => {
  const { getMsg } = props;
  const setMsg = () => {
    // 向父组件getMsg函数传递值
    getMsg('没钱了，打点钱来');
  };
  return (
    <div>
      <button onClick={setMsg}>给父亲发消息</button>
    </div>
  );
};

// 父组件
const Father = () => {
  const [msg, setMsg] = useState();

  // 定义需要传递给子组件的函数，value为接收子组件传递的数据
  const getMsg = (value) => {
    setMsg(value);
  };
  return (
    <div>
      {/* 输出： 儿子对父亲说：没钱了，打点钱来*/}
      <h2>儿子对父亲说：{msg}</h2>
      {/* 将 getMsg函数作为props传递给子组件*/}
      <Child getMsg={getMsg} />
    </div>
  );
};

export default Father;
```

## 跨级组件通信

所谓跨级组件通信，就是父组件向子组件的子组件通信，向更深层的子组件通信。跨级组件通信可以采用下面两种方式：
- 中间组件层层传递 props
- 使用 context 对象

对于第一种方式，如果父组件结构较深，那么中间的每一层组件都要去传递 `props`，增加了复杂度，并且这些 `props` 并不是这些中间组件自己所需要的。不过这种方式也是可行的，当组件层次在三层以内可以采用这种方式，当组件嵌套过深时，采用这种方式就需要斟酌了。

使用 `context` 是另一种可行的方式，`context` 相当于一个全局变量，是一个大容器，我们可以把要通信的内容放在这个容器中，这样一来，不管嵌套有多深，都可以随意取用。

**详细示例：**

```jsx | pure
import React, { useContext, createContext } from 'react';

// 父亲有一颗糖-通过Provider问自己的儿子和孙子谁要吃
const sugar = '大白兔';
const MyContext = createContext();
const { Provider } = MyContext;

// 父组件
const Father = () => {
  return (
    <div>
      {/* 通过Provider包裹，后代组件就能通过context获取到数据 */}
      <Provider value={sugar}>
        <Child />
      </Provider>
    </div>
  );
};

// 子组件
const Child = () => {
  return (
    <div>
      <Grandson />
    </div>
  );
};

// 孙组件
const Grandson = () => {
  {
    /* 孙子举手表示自己要吃爷爷的糖 */
  }
  const context = useContext(MyContext);
  return (
    <div>
      {/* 输出：得到爷爷的糖：一颗大白兔 */}
      <h2>得到爷爷的糖：一颗{context}</h2>
    </div>
  );
};

export default Father;
```

## 非嵌套组件间通信

非嵌套组件，就是没有任何包含关系的组件，包括兄弟组件以及不在同一个父级中的非兄弟组件。对于非嵌套组件，可以采用下面两种方式：
- 利用二者共同父组件的 context 对象进行通信
- pubsub-js实现发布/订阅
- Redux实现数据共享

方法一：不好使，增加耦合度。`不推荐`

方法二：还可以，但是需要借助`pubsub-js`插件实现。情况不复杂的话`推荐`

方法三：太麻烦，用着还行。情况很复杂的时候`推荐`

**[pubsub-js](https://www.npmjs.com/package/pubsub-js)实现发布/订阅**

```bash
$ yarn add pubsub-js
```

实现示例：

```jsx | pure
import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js';
// 实现组件1与组件2兄弟节点之间的通信--组件1有颗糖给组件2

// 父组件
const Father = () => {
  return (
    <div>
      <Child1 />
      <Child2 />
    </div>
  );
};

// 子组件1
const Child1 = () => {
  const sugar = '大白兔';
  const sentSugar = ()=>{
    // 发布一个名为getSugar的消息
    PubSub.publish('getSugar', sugar);
  }
  return (
    <div>
      <h2>子组件1有一颗{sugar}，现在要给子组件2</h2>
      <button onClick={sentSugar}>给兄弟一颗糖</button>
    </div>
  );
};

// 子组件2
const Child2 = () => {
  const [sugar, setSugar] = useState();
  // 组件挂载完成就订阅getSugar消息
  useEffect(()=>{
    const pub = PubSub.subscribe('getSugar', (_, value) => {
      setSugar(value)
    });
    return ()=>{
      // 组件卸载取消订阅
      PubSub.unsubscribe(pub)
    }
  },[])
  return (
    <div>
      {/* 输出：子组件2得到子组件1给的大白兔 */}
      <h2>子组件2得到子组件1给的{sugar}</h2>
    </div>
  );
};

export default Father;
```

**Redux实现数据共享**

```bash
# 安装依赖
$ yarn add redux

$ yarn add react-redux

# 用于支持异步action
$ yarn add redux-thunk

# 用于devtools调试
$ yarn add redux-devtools-extension
```

Redux目录：

```sh
├── public
└── src
    ├── router          
    └── redux               # redux文件夹
        ├── actions         # action文件夹
        │   └── xxx.js      # action模块
        ├── reducers        # reducer文件夹
        │   ├── index.js    # 合并reducer
        │   └── xxx.js      # reducer模块
        ├── constans.js     # 常量
        └── store.js        # 全局store
```

以全局loading为例：实现一个全局加载效果。

1.新建`constans.js`文件，定义打开加载和关闭加载的常量。

```js
// constans.js
// action中type常量
export const OPENLOADING = "openLoading";
export const CLOSELOADING = "closeLoading";
```

2.新建`reducers`文件夹，新建`loading.js`文件和`index.js`文件。

`loading.js`
```js
// loading.js
import { OPENLOADING, CLOSELOADING } from "../constans";  // 引入常量
// 初始化state
const initStatus = {
  spinning: false,
  tip: "加载中..."
};

// 处理不同的action type
export default (preState = initStatus, action) => {
  const { type, data } = action;
  switch (type) {
    case OPENLOADING:
      return { ...preState, ...data, spinning: true };
    case CLOSELOADING:
      return { ...preState, ...data, spinning: false };
    default:
      return preState;
  }
};
```

`index.js`
```js
// 合并reducer
import { combineReducers } from "redux";
// 全局loading
import loading from "./loading";

// 将所有reducer汇总为一个reducer
export default combineReducers({ loading });
```

3.新建`actions`文件夹，新建`loading.js`文件。

`loading.js`
```js
import { OPENLOADING, CLOSELOADING } from "../constans";

export const openLoading = data => ({ type: OPENLOADING, data });
export const closeLoading = data => ({ type: CLOSELOADING, data });
```

4.新建`store.js`文件

`store.js`

```js
// 创建store对象
import { applyMiddleware, createStore } from "redux";

// 引入reducer
import reducers from "./reducers";

// 引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";

// 引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

// 暴露store
export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
```

5.修改入口`index.js`文件。

```jsx | pure
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// 引入store
import store from "./redux/store";
import App from "./App";
ReactDOM.render(
    // 向子组件传递store
    <Provider store={store}>
      <App />
    </Provider>
  document.getElementById("root")
);
```
6.使用redux修改共享数据。

```js
// 引入store和常量
import store from "../redux/store";
import { OPENLOADING, CLOSELOADING } from "../redux/constans";

// 打开loading加载
store.dispatch({ type: OPENLOADING, data: "玩儿命加载中..." });

// 关闭loading加载
store.dispatch({ type: CLOSELOADING });
```
