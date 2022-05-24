---
title: 完整配置
toc: menu
order: 50
---

# 完整配置

## 说明

本文档介绍了 `Pinia` 一些基本用法，它的功能还远不止这些，更多内容可以继续探索 [Pinia官方文档](https://pinia.vuejs.org/)

## 完整配置

**`/src/main.ts` 文件：** 导入 `store` 并作为插件使用。

```ts
// main.ts
import { createApp } from 'vue'
// 导入 store
import store from './store'
import App from './App.vue'

createApp(App).use(store).mount('#app')
```

**`/src/store/index.ts` 文件：** 创建 `store`。

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

**`/src/store/user.ts` 文件：** 定义 `store`，可以有多个 `store` 文件。

```ts
// /src/store/user.ts
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

**组件中使用**

```html
<!-- Father组件 -->
<template>
  <!-- 点击按钮后 count 每次累加 5 -->
  <h1>计数器：{{ count }}</h1>
  <button @click="increment(5)">点击计数器加5</button>
</template>
<script setup lang="ts">
// 用于解构获取 state
import { storeToRefs } from 'pinia'
import useUserStore from '../store/user'

// 保证 state 的响应式，相当于创建了一个ref
const { count } = storeToRefs(useUserStore())

// 解构得到 action
const { increment } = useUserStore()
</script>
```
