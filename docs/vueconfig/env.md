---
title: 配置env环境变量
toc: menu
order: 3
---

<BackTop></BackTop>

# 配置 env 环境变量

## 命名

注意：必须以如下方式命名，不要乱起名，也无需专门手动控制加载哪个文件。

`.env` 全局默认配置文件，不论什么环境都会加载合并。

`.env.development `开发环境下的配置文件。

`.env.production `生产环境下的配置文件。

内容：属性名必须以 VUE*APP*开头，比如 VUE_APP_XXX。

## 原理

如过我们运行`npm run serve` 在就先加载`.env`文件，之后加载`.env.development`文件，两个文件有同一个项，则，后加载的文件就会覆盖掉第一个文件，也即是`.env.development`文件覆盖掉了`.env`文件的`NOOE_ENV`选项。同理如果`npm run build` 就执行了`.env`和`.env.development`。

## 配置

Vue 项目根目录新建`.env`、`.env.development `、`.env.production `文件。

`.env`文件：

```bash
NODE_ENV = production
VUE_APP_GLOBALHOST = https://www.baidu.com
```

`.env.development `文件：

```bash
NODE_ENV = development
VUE_APP_HOST = http://192.168.31.99:3000
```

`.env.production `文件：

```bash
NODE_ENV = production
VUE_APP_HOST = http://192.168.31.99:3000
```

说明：

1. `NODE_ENV`：表示环境。
2. `VUE_APP_HOST`：表示当前环境的 host 地址。

## 使用

**借助`process`插件**

```bash
yarn add process
```

**修改`package.json`文件**

```json
/* package.json */
"scripts": {
  - "serve": "vue-cli-service serve",
  - "build": "vue-cli-service build",
  - "test": "vue-cli-service build",

  + "serve": "vue-cli-service serve --mode development",
  + "build": "vue-cli-service build --mode production",
  + "test": "vue-cli-service build --mode test",
  "lint": "vue-cli-service lint"
},
```
