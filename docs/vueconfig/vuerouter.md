---
title: VueRouter配置
toc: menu
order: 1
---

# VueRouter 配置

## 基本配置

```js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = []; // 存放路由配置信息

const router = new VueRouter({
  routes,
});

// 暴露路由
export default router;
```

## 路由懒加载

好处：不需要一次性加载完所有路由信息，只会加载当前需要的路由。

方法：

```js
component: () => import("@/views/index/index.vue"),
```

具体配置：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
// 导入需要初始化就加载的组件
import Layout from '../views/layout.vue';

Vue.use(VueRouter);
// 解决路由控制台警告信息
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => {
    error;
  });
};

// 配置路由表
const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout, // 加载初始化的组件
    redirect: '/index', // 路由重定向
    children: [
      // 子路由配置
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index.vue'), // 路由懒加载
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
```
