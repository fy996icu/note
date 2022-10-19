---
title: 常见问题
toc: menu
order: 100
---

<BackTop></BackTop>

# 常见问题

## vue-tsc 报错

VSCode 在编辑 vue 组件的时候底部导航显示 `1 known issue` 这样的信息，打开后显示 `❗ vue-tsc version different`，这是由于 `Volar` 插件和项目的 `vue-tsc` 插件版本不匹配导致的。可以下载匹配的 `Volar` 插件，也可以更新 `vue-tsc` 插件：

```bash
# npm
npm i vue-tsc@latest -D

# yarn
yarn add vue-tsc@latest -D

# pnpm
pnpm add vue-tsc@latest -D
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue3-config-knownissue.png)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue3-config-knownissue2.png)
