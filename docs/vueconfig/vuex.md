---
title: Vuex配置
toc: menu
order: 2
---

<BackTop></BackTop>

# Vuex 配置

## Vuex 持久化

原始问题：页面刷新后导致`state`数据被初始化还原。

插件解决：`vuex-persistedstate`

```bash
yarn add vuex-persistedstate
```

## mutations 修改日志

作用：可以在控制台查看提交`mutations`的情况。

模块：`vuex/dist/logger`

```js
import createLogger from 'vuex/dist/logger';
```

## 模块化

目录结构：

```text
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    └── modules           # 模块文件夹
        ├── global.js     # 购物车模块
        └── products.js   # 产品模块
```

index.js 配置：

```js
import Vue from 'vue';
import Vuex from 'vuex';
// 模块
import global from './modules/global';
Vue.use(Vuex);
export default new Vuex.Store({
  // 添加模块
  modules: {
    global,
  },
});
```

模块文件配置：

```js
// global.js
const state = () => ({
  // 数据仓库
  // menu宽度
  menuSize: 180,
  // menu是否展开
  isCollapse: false,
});

// 模块getters
const getters = {};
// 模块actions
const actions = {};
// 模块mutations
const mutations = {
  // 切换menu宽度
  changeMenuSize(state, payload) {
    if (payload) {
      state.menuSize = 180;
      state.isCollapse = false;
    } else {
      state.menuSize = 64;
      state.isCollapse = true;
    }
  },
};

export default {
  namespaced: true, // 开启命名空间
  // 导出
  state,
  getters,
  actions,
  mutations,
};
```

## 完整配置

```js
// index.js

import Vue from 'vue';
import Vuex from 'vuex';
// 引入持久化插件
import createPersistedstate from 'vuex-persistedstate';
// 模块
import global from './modules/global';
// 打印修改日志
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);

// 判断是否为开发环境--开发环境debug为true
const debug = process.env.NODE_ENV !== 'production';

// 缓存配置
const createPersisted = createPersistedstate({
  key: 'cache-vuex', // 本都存放的key名
  storage: window.sessionStorage, // 存放的地方sessionStorage或者localStorage
  reducer(state) {
    return {
      global: {
        // 模块global--这样才能存放开启了命名空间的模块
        menuSize: state.global.menuSize, // 需要缓存的数据
        isCollapse: state.global.isCollapse,
      },
    };
  },
});

export default new Vuex.Store({
  // 添加模块
  modules: {
    global,
  },
  // 添加插件--是否开启开发环境修改日志插件
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted],
});
```
