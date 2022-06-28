---
title: Redux 持久化
toc: menu
order: 7
---

<BackTop></BackTop>

# Redux 持久化

## Redux 刷新数据丢失

在使用 Redux 的时候我们发现 `state` 中的数据一旦刷新页面就还原成了初始化的状态，如果我们学过 Vue 的话，应该到都知道 Vue 中的 [Vuex](/vueconfig/vuex#vuex-持久化) 也是如此，无法持久保存 `Vuex` 中 `state` 数据的状态，那么我们该怎么解决这个问题呢？

我们一般都是采用的数据持久化插件，`Vuex` 中我们一般采用 `vuex-persist` 或者 `vuex-persistedstate` 持久化插件，Redux 中我们可以使用 [redux-persist](https://www.npmjs.com/package/redux-persist) 插件来实现 Redux 数据的持久化。

## 安装

```bash
$ yarn add redux-persist
```

## 配置 Store

```js
// redux/store.js

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';

// 引入持久化插件
import { persistStore, persistReducer } from 'redux-persist';

//导入需要配置的数据源，可以选择，storage、cookie、session等
import storage from 'redux-persist/lib/storage';

// 引入汇总之后的reducer
import reducers from './reducers';

// 使用调试工具
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

// 引入redux-promise-middleware，用于支持异步promise风格的action
import reduxPromiseMiddleware from 'redux-promise-middleware';

//定义持久化配置
const persistConfig = {
  key: 'cache_redux',
  storage,
  // whitelist: [] // 白名单，只允许数组中的数据持久化
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxPromiseMiddleware)),
);

const persistor = persistStore(store);

export { store, persistor };
```

`persistConfig` 可以添加一些持久化的配置：

- `key`：数据存放在本地储存的的键名。

- `storage`：储存数据的方式，可以选择 storage、cookie、session 等，默认是 `localStorage`。

- `blacklist<Array>`：黑名单，只允许数组中的数据不持久化。

- `whitelist<Array>`：白名单，只允许数组中的数据持久化。

## 配置根组件

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store, persistor } from './redux/store';

// Redux 数据持久化
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
```

打开浏览器控制台查看本地储存，发现在 `localStorage` 中有了名为 `persist:cache_redux` 的数据，我们刷新页面就会发现数据不会丢失了。

<Badge>注意</Badge> 我们会发现 `persist:cache_redux` 中储存了 `count` 和 `user` 两个 Reducer。也就是说 `redux-persist` 是默认储存所有的 Reducer 的，但是我们只需要储存 `user` 这个 Reducer，这时候我们就可以配置白名单(`whitelist`) 或者 黑名单(`blacklist`)。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/redux-persist.png)

## 白名单

`redux-persist` 中 可以在 `persistConfig` 中配置白名单(`whitelist`)来选择性的持久化部分数据。被放在 `whitelist<Array>` 中的 Reducer 都将会持久化。

```js
//定义持久化配置
const persistConfig = {
  key: 'cache_redux',
  storage,
  whitelist: ['user'], // 白名单，只持久化 user 这个 Reducer
};
```

打开浏览器控制台查看本地储存，发现在 `localStorage` 中只缓存了 `user` 一个 Reducer。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/redux-persist-whitelist.png)

## 黑名单

`redux-persist` 中 可以在 `persistConfig` 中配置黑名单(`blacklist`)来选择不被持久化的数据。被放在 `blacklist<Array>` 中的 Reducer 都将不会被持久化。

```js
//定义持久化配置
const persistConfig = {
  key: 'cache_redux',
  storage,
  blacklist: ['user'], // 黑名单，不持久化 user 这个 Reducer
};
```

打开浏览器控制台查看本地储存，发现在 `localStorage` 中只缓存了 `count` 一个 Reducer，而黑名单中的 `user` Reducer 将不会被缓存。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/redux-persist-blacklist.png)

## 完整配置

```js
// redux/store.js

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';

// 引入持久化插件
import { persistStore, persistReducer } from 'redux-persist';

//导入需要配置的数据源，可以选择，storage、cookie、session等
import storage from 'redux-persist/lib/storage';

// 引入汇总之后的reducer
import reducers from './reducers';

// 使用调试工具
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

// 引入redux-promise-middleware，用于支持异步promise风格的action
import reduxPromiseMiddleware from 'redux-promise-middleware';

//定义持久化配置
const persistConfig = {
  key: 'cache_redux',
  storage,
  whitelist: ['user'], // 白名单，只允许数组中的数据持久化，持久化 user Reducer
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxPromiseMiddleware)),
);

const persistor = persistStore(store);

export { store, persistor };
```

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store, persistor } from './redux/store';

// Redux 数据持久化
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
```
