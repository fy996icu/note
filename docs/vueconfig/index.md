---
title: 项目目录
toc: menu
order: 0
---

# 项目目录

<Alert type="info">
  该配置适用于Vue2.x
</Alert>

**我的常用目录结构**

```text
.
├─ node_modules
├─ public
├─ src
│  ├─ api
│  │  ├─ apis
│  │  │  └─ ...
│  │  ├─ http.js
│  │  └─ config.js
│  ├─ assets
│  ├─ components
│  ├─ router
│  ├─ store
│  │  ├─ modules
│  │  │  └─ ...
│  │  └─ index.js
│  ├─ utils
│  └─ views
│      └─ ...
├─ .browserslistrc
├─ .editorconfig
├─ .env.development
├─ .env.production
├─ .env.test
├─ .eslintrc.js
├─ .eslintignore
├─ .gitignore
├─ .prettierrc
├─ babel.config.js
├─ package.json
├─ postcss.config.js
├─ README.md
└─ vue.config.js
```

**文件介绍**

- `src/api/` axios 配置，接口统一管理。

- `src/api/apis/` 接口文件夹，所有请求接口都以 js 文件放在这里。

- `src/api/http.js` axios 封装

- `src/api/config.js` 将 api 文件汇总并导出

- `src/assets/` 资源存储`images`、`css`、`less`...

- `src/components/` 自定义组件

- `src/router/` 路由配置

- `src/store/` Vuex 状态管理

- `src/store/modules/` Vuex 模块化

- `src/store/index.js` Vuex 配置

- `src/utils/` 自定义工具包

- `src/views/` 视图

- `.browserslistrc` 不同的前端工具之间共用目标浏览器和 node 版本的配置工具

- `.editorconfig` 统一编辑器编码风格

- `.env.development` 环境变量-开发环境

- `.env.production` 环境变量-生产环境

- `.env.test` 环境变量-测试环境

- `.eslintrc.js` ESlint 规则配置

- `.eslintignore` ESlint 过滤器

- `.gitignore` git 过滤器

- `.prettierrc` 代码格式化

- `babel.config.js` babel 转换配置

- `package.json` 包管理文件

- `postcss.config.js` 移动端自适应 css to rem 配置

- `README.md` 项目说明文档

- `vue.config.js` Vue 配置
