---
title: yarn
toc: menu
order: 0.1
---

<BackTop></BackTop>

# yarn 包管理工具

文档主要来源于 [后盾人](https://doc.houdunren.com/)。

[yarn](http://yarnpkg.top/) 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。

## 安装 yarn

### npm 安装

使用 `npm` 全局安装 `yarn`。

```bash
npm install -g yarn
```

### brew 安装

Mac OS 用户可以使用 [brew](https://brew.sh/) 进行安装。

```bash
brew install yarn
```

### Windows 安装

Windows 用户直接在 [yarn 官网](http://yarnpkg.top/Installation.html) 下载 `.msi` 安装包安装。

### 更新 yarn

更新 `yarn` 到最新版本。

```bash
yarn set version latest
```

## 配置环境变量

为 `yarn` 设置 `PATH` 环境变量，这样你在任何地方都能够调用 `yarn`。

添加 `export PATH="$HOME/.yarn/bin:$PATH"` 到配置文件(比如 `.profile`, `.bashrc`, `.zshrc`，等等。)

```bash
export PATH="$HOME/.yarn/bin:$PATH"
```

## 配置镜像源

推荐使用 [yrm](/package/yarn#yrm-镜像源管理) 管理镜像源。

### 查看镜像源

```bash
yarn config get registry

# 输出：https://registry.npmjs.org
```

### 设置淘宝镜像源

```bash
yarn config set registry https://registry.npm.taobao.org/
```

## yrm 镜像源管理

`yrm` 是管理镜像的工具，可以列出可以使用的镜像，非常方便。

### 安装 yrm

```bash
npm install -g yrm
```

### 列出镜像

列出可以使用的镜像。

```bash
yrm ls
```

### 使用镜像

使用淘宝镜像。

```bash
yrm use taobao
```

### 测试镜像速度

```bash
yrm test taobao
```

## 常用命令

### 基础命令

查看版本

```bash
yarn -v
yarn --version
```

访问命令列表

```bash
yarn help
```

初始化新项目

```bash
yarn init
```

根据 `package.json` 来安装项目依赖的软件包。

```bash
yarn
# 或
yarn install
```

### 安装软件

**全局安装**

```bash
yarn global add [package]
```

**生产环境**

- 在 `package.json` 文件 `dependencies` 属性下增加记录。

- `yarn` 时会自动安装该软件包。

- 使用 `yarn --production` 或者 `NODE_ENV` 变量值为 `production` 时，安装该软件包。

```bash
yarn add [package]
```

**开发环境**

- 在 `package.json` 文件 `devDependencies` 属性下增加记录。

- `yarn` 时会自动安装该软件包。

- 使用 `yarn --production` 或者 `NODE_ENV` 变量值为 `production` 时，不会安装该软件包。

```bash
yarn add [package]@[version] –dev
# 或
yarn add [package] -D
```

安装 `package.json` 中的软件。

```bash
yarn 
# 或
yarn install
```

### 查看软件

列出当前项目的依赖

```bash
yarn list
```

查看本地已安装的包信息

```bash
yarn list | grep vue
```

查看远程软件包信息

```bash
yarn info vue
```

查看软件包的 README

```bash
yarn info vue readme
```

### 更新软件

更新所有软件包

```bash
yarn upgrade
```

更新指定软件包

```bash
yarn upgrade [package]@[version]
```

更新 yarn 自身

```bash
yarn set version latest
```

<Tag>慎用</Tag> 直接更新到最新版本，忽略 `package.json` 中的版本规则 （慎用）

```bash
yarn upgrade --latest
```

### 卸载软件

删除全局软件

```bash
yarn remove global [package]
```

删除项目中软件包

```bash
yarn remove [package]
```

### 缓存控制

列出已缓存的每个包

```bash
yarn cache list 
```

全局缓存位置

```bash
yarn cache dir
```

清除缓存

```bash
yarn cache clean
```
