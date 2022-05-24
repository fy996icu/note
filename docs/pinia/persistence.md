---
title: 数据持久化
toc: menu
order: 5
---

# 数据持久化

`Pinia` 和 `Vuex` 同样存在 `store` 中数据在页面刷新后会被重置，`Pinia` 中解决这个问题我们可以使用插件 `pinia-plugin-persist` 。

## 安装

```bash
# yarn
$ yarn add pinia-plugin-persist

# npm
$ npm i pinia-plugin-persist
```

## 使用

改造之前示例代码，方便后面是案例：

新建 `/src/store/index.ts` 文件：

```ts
// src/store/index.ts

import { createPinia } from 'pinia'
// 导入 pinia 数据持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'

// 创建 store
const store = createPinia()

// 使用插件
store.use(piniaPluginPersist)

export default store
```

修改 `/src/main.ts` 文件：

```ts
// src/main.ts
import { createApp } from 'vue'
// 导入 store
import store from './store'
import App from './App.vue'

createApp(App).use(store).mount('#app')
```

## 开启数据持久化

开启数据持久化只需要在对应的 `store` 中开启 `persist` 即可。

```ts
// user.ts
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 0,
    }
  },
  actions: {
    // 实现 count 加 payload
    increment(payload: number) {
      this.count += payload
    },
  },
  // 开启数据持久化
  persist: {
    enabled: true,
  },
})
```

当我们操作过 `store` 数据后，就可以在本地储存中看到储存的数据了。

数据默认存在 `sessionStorage` 里，并且会以 `store` 的 `id` 作为 `key`。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/pinia-persist.png)

## 自定义 `key`

数据默认存在 `sessionStorage` 里，并且会以 `store` 的 `id` 作为 `key`，你也可以在 `strategies` 里自定义 `key` 值，并将存放位置由 `sessionStorage` 改为 `localStorage`。

```ts
// user.ts
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 0,
    }
  },
  actions: {
    // 实现 count 加 payload
    increment(payload: number) {
      this.count += payload
    },
  },
  // 开启数据持久化
  persist: {
    enabled: true,
    strategies: [
      {
        // 修改存储的 key 为 pinia_user
        key: 'pinia_user',
        // 将储存的地方改为 localStorage
        storage: localStorage,
      },
    ],
  },
})
```
此时我们能看到储存的方式和 key 都发生了改变：

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/pinia-persist2.png)


## 持久化部分 `State`

默认所有 `state` 都会进行缓存，有时候我们只需要缓存一部分数据，可以通过 `paths` 指定要持久化的字段，其他的则不会进行持久化。

```ts
// user.ts
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 0,
    }
  },
  actions: {
    // 实现 count 加 payload
    increment(payload: number) {
      this.count += payload
    },
  },
  // 开启数据持久化
  persist: {
    enabled: true,
    strategies: [
      {
        // 修改存储的 key 为 pinia_user
        key: 'pinia_user',
        // 将储存的地方改为 localStorage
        storage: localStorage,
        // 持久化指定数据-title、userInfo
        paths: ['title', 'userInfo'],
      },
    ],
  },
})
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/pinia-persist3.png)

上面我们只持久化 `title` 和 `userInfo`，没有持久化 `count`，如果其状态发生更改，页面刷新时 `count` 将会丢失，重新回到初始状态，而 `title` 和 `userInfo` 则不会。
