---
title: 安装路由
toc: menu
order: 1
---

<BackTop></BackTop>

# 安装路由

## 安装 Vue Router

```bash
# npm
npm i vue-router

# yarn
yarn add vue-router

# pnpm
pnpm add vue-router
```

## 创建路由文件

在 `src` 目录下新建 `router` 目录，并新建 `index.ts`。

```ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView/HomeView.vue';
const routes: Array<RouteRecordRaw> = [
  {
    name: 'HomeView',
    path: '/',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

## 使用路由

在 `main.ts` 中引入 `router`，再在 `App.vue` 中添加 `RouterView` 组件：

**main.ts**

```ts
import { createApp } from 'vue';
import router from './router';

import './style.css';

import App from './App.vue';

createApp(App).use(router).mount('#app');
```

**App.vue**

```html
<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style scoped></style>
```
