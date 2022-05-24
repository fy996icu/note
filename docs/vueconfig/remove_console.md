---
title: 去掉打印日志
toc: menu
order: 4
---

# 去掉打印日志

目的：去掉生产环境的 console.log 日志，保留开发环境的 console.log 日志。

插件：`babel-plugin-transform-remove-console`

```bash
yarn add babel-plugin-transform-remove-console -D
```

配置文件：`babel.config.js`

```js
// 项目在发布时需要用到的babel插件
const proPlugins = [];

// 生产环境去掉console.log
if (process.env.NODE_ENV === 'production') {
  proPlugins.push('transform-remove-console');
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', ['@babel/preset-env', { modules: false }]],
  plugins: [...proPlugins],
};
```
