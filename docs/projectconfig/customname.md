---
title: 自定义组件名
toc: menu
order: 4
---

<BackTop></BackTop>

# 自定义组件名

在 Vue3 的 `script setup` 语法糖下，组件的 name 默认就是组件的文件名。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/script-setup-com-name.png)

## 双 script 修改组件名

在 Vue3 的 `script setup` 语法糖下，组件的 name 默认就是组件的文件名，我们不能直接修改自定义组件的名字，但是也可以用双 `script` 的方法设置：

在组件中多写一个 `script` 标签，用来设置组件的 name：

```html
<!-- 文件名为 HomeView.vue 的组件 -->
<script>
export default {
  // 将组件名修改为 HomePage
  name: 'HomePage',
}
</script>

<script setup lang="ts"></script>

<template>
  <main>
    <h1>HomeView 组件</h1>
  </main>
</template>
```

通过 `Vue DevTools` 工具可以看到组件名从 `HomeView` 改成了 `HomePage`。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/script-setup-com-name2.png)

但是这样写非常的不优雅不好看，而且多一个 `script` 容易和 `script setup` 混淆，把代码写错到 `script` 里面。

## 插件修改组件名

我们可以借助 `vite-plugin-vue-setup-extend` 插件优雅的自定义组件名。

### 安装插件

```bash
# npm
npm i vite-plugin-vue-setup-extend -D

# yarn
yarn add vite-plugin-vue-setup-extend -D

# pnpm
pnpm add vite-plugin-vue-setup-extend -D
```

### 配置插件

在 `vite.config.ts` 中配置插件：

```ts
// vite.config.ts

// 自定义组件名插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

export default defineConfig({
  plugins: [
    VueSetupExtend()
  ],
})
```

### 设置组件名

配置好插件后在组件中我们可以在 `script setup` 上面添加一个 `name` 属性，这就是设值组件名的地方。

```html
<!-- HomeView.vue -->

<!-- 将组件名改为 HomePageCustom -->
<script setup lang="ts" name="HomePageCustom">
// 自定义组件名
</script>

<template>
  <main>
    <h1>HomeView 组件</h1>
  </main>
</template>
```

通过 `Vue DevTools` 工具可以看到组件名从 `HomeView` 改成了 `HomePageCustom`。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/script-setup-com-name3.png)

### 插件问题

这个插件有一个 BUG，就是当 `script setup` 里面什么内容都没有的时候即使设置了 name，也不会起作用，虽然里面没内容的情况少，但是如果遇到了我们可以在里面添加一行注释信息来解决这个 BUG 。 

```html
<script setup lang="ts" name="HomePageCustom">
// ...
</script>
```
