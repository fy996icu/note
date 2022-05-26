---
title: 入门
toc: menu
order: 1
---

<BackTop></BackTop>

# 入门

## 安装

```bash
$ yarn add pinia

# 或者

$ npm install pinia
```

在 `src/main.ts` 文件，使用 `Vue.use()` 方法将 `pinia` 作为插件使用：

```ts
import { createApp } from 'vue';
// 导入 pinia 的 createPinia方法
import { createPinia } from 'pinia';
import App from './App.vue';

createApp(App).use(createPinia()).mount('#app');
```

## 创建 `Store`

新建 `src/store` 目录并在其下面创建 `user.ts`：

### `defineStore`

`Pinia` 是通过 `defineStore()` 这个方法来定义的，它的第一个参数为当前 `store` 的 `id`（store 名称），**需要保证唯一**。

```ts
import { defineStore } from 'pinia';
// user 相当于id，要唯一
export default defineStore('user', {
  // 其他配置
});
```

### `useStore`

通过 `import` 导入 `javascript` 模块的方式引入，引入后，直接使用变量接收即可。

```html
<!-- Father组件 -->
<template>
  <h1>Pinia</h1>
</template>
<script setup lang="ts">
  // 导入 user 模块
  import useUserStore from '../store/user';

  // 使用 useUserStore
  const user = useUserStore();
</script>
```

## 三大核心概念

`Pinia` 有三大核心概念：`State`、`Getters`、`Actions`。

- [State](/pinia/state)：存放数据的地方，是一个函数。

- [Getters](/pinia/getters)：相当于计算属性，接收 `state` 作为第一个参数。

- [Actions](/pinia/actions)：相当于组件中的方法，用于修改 `state`，支持同步和异步。

下面将一一介绍。
