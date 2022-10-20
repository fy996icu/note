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


## module 报错

我们在配置 `postcss.config.js` 或者 `tailwind.config.js` 文件的时候出现 `'module' is not defined` 的警告。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/module-error.png)

我们需要配置 `.eslintrc.cjs` 文件，设置 `node: true`，警告就会立马消失。

```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
```

## 驼峰命名报错

有时候我们创建组件会使用 `src/components/SvgIcon/index.vue` 这种命名方式，ESLint 会报错，`index.vue` 必须使用驼峰命名：报错提示 <font color="red">error Component name “index“ should always be multi-word vue/multi-word-component-names</font>

**报错原因：**

原因是 `eslint-plugin-vue` 版本更新了，相较之前版本，`@8` 版本中新增了不少规则，第一条就是 `'vue/multi-word-component-names': 'error'`, 要求组件名称以 `驼峰格式` 命名，所以 `index.vue` 会报错。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/components-name-error.png)

**解决方案：**

- 按照规则，使用驼峰命名，例如：SvgIcon.vue。

- 在 `.eslintrc.js` 文件中关闭命名规则，或者配置 `ignores` 忽略掉指定的组件名字。

```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 组件驼峰命名
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], //需要忽略的组件名
      },
    ],
  },
}
```
