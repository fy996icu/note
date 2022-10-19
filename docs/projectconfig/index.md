---
title: 创建项目
toc: menu
order: 0
---

<BackTop></BackTop>

# 创建项目

## Vite 创建项目

创建基于 [Vite](https://cn.vitejs.dev/) 的 `vue3.x` 项目，模板使用 `template vue-ts`。

建议使用 [pnpm](https://pnpm.io/zh/) 作为包管理器，快速的，节省磁盘空间的包管理工具。

```bash
# pnpm
$ pnpm create vite <project-name> --template vue-ts

# yarn
$ pnpm create vite <project-name> --template vue-ts

# npm
$ npm create vite@latest <project-name> --template vue-ts
```

```bash
➜  vite pnpm create vite my-app  --template vue-ts
Library/pnpm/store/v3/tmp/dlx-97012      |   +1 +
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/fanyong/Library/pnpm/store/v3
  Virtual store is at:             Library/pnpm/store/v3/tmp/dlx-97012/node_modules/.pnpm
Library/pnpm/store/v3/tmp/dlx-97012      | Progress: resolved 1, reused 1, downloaded 0, added 1, done

Scaffolding project in /Users/fanyong/Desktop/vite/my-app...

Done. Now run:

  cd my-app
  pnpm install
  pnpm run dev
```

更具提示分别执行下面命令：

```bash
# 1、进入项目目录
$ cd my-app

# 2、安装依赖
$ pnpm install

# 3、启动项目
$ pnpm run dev
```

```base
VITE v3.1.2  ready in 618 ms

➜  Local:   http://127.0.0.1:5173/
➜  Network: use --host to expose
```

<Alert type="info">
  因为 Vite 只提供基础模板，依赖相对较少，所以创建过程非常快。
</Alert>

### 项目目录

```text
.
├─ node_modules
├─ public
├─ src
│  ├─ assets
│  ├─ components
│  ├─ main.ts
│  ├─ style.css
│  ├─ vite-env.d.ts
│  └─ App.vue
│
├─ .gitignore
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.json
├─ tsconfig.node
└─ vite.config.ts
```

又目录可见我们在使用 `vite` 创建项目的时候和 [Vue CLI](https://cli.vuejs.org/zh/) 不同，`vite` 并没有添加 `vue 全家桶`，所以 [Vue Router](https://router.vuejs.org/zh/)、[Pinia](https://pinia.vuejs.org/) 需要我们自己配置。

<Alert type="warning">
  在使用 vue3.x 中我们不再使用 Vuex，而是使用它的替代品 Pinia。
</Alert>

## create-vue 创建项目

确保你安装了最新版本的 [Node.js](https://nodejs.org/en/)，然后在命令行中运行以下命令:

```bash
npm init vue@latest
```

这一指令将会安装并执行 [create-vue](https://github.com/vuejs/create-vue)，它是 `Vue` 官方的项目脚手架工具。你将会看到一些诸如 `TypeScript` 和测试支持之类的可选功能提示：

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

如果不确定是否要开启某个功能，你可以直接按下回车键选择 `No`。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

```bash
# 进入项目目录
cd <your-project-name>

# 安装依赖
npm install

# 启动项目
npm run dev
```

### 技术栈

使用的基础技术栈如下：

[Vue 3.2.x](https://cn.vuejs.org/) + [Vue Router](https://router.vuejs.org/zh/) + [Pinia](https://pinia.vuejs.org/) + [TypeScript](https://www.tslang.cn/index.html) + [ESlint](http://eslint.cn/) + [Prettier](https://www.prettier.cn/) + [Vite](https://vitejs.cn/)

<Alert type="warning">
  在使用 vue3.x 中我们不再使用 Vuex，而是使用它的替代品 Pinia。
</Alert>

### 项目目录

```text
.
├─ node_modules
├─ public
├─ src
│  ├─ assets
│  ├─ components
│  ├─ router
│  ├─ stores
│  ├─ views
│  ├─ main.ts
│  └─ App.vue
│
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc.json
├─ env.d.ts
├─ index.html
├─ package.json
├─ package-lock.json
├─ README.md
├─ tsconfig.config.json
├─ tsconfig.json
└─ vite.config.ts
```
