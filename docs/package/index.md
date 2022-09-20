---
title: npm
toc: menu
order: 0
---

<BackTop></BackTop>

# npm 包管理工具

文档主要来源于 [后盾人](https://doc.houdunren.com/)。

## 安装配置

`npm` 是随同 [NodeJS](https://nodejs.org/zh-cn/) 一起安装的包管理工具，是常用的前端包管理工作。

访问 [NodeJS](https://nodejs.org/zh-cn/) 官网下载安装 `nodejs`，其中将内置 `npm` 命令。

## 配置镜像源

推荐使用 [nrm](/package/nrm) 管理镜像源。

### 查看镜像源

```bash
npm config get registry

# 输出：https://registry.npmjs.org
```

### 设置淘宝镜像源

```bash
npm config set registry https://registry.npm.taobao.org
```

## 版本号

我们在安装时版本号是很关键的，大家要清楚版本更新规则，下面进行说明。

### 版本号说明

版本示例: `a.b.c` 表示 `主版本号.次版本号.修补版本号`。

- `a 兼容版本`，一般来讲版本 `2.0.0` 不一定向 `1.0.0` 兼容，所以这个版本号更新要慎重。

- `b 次版本号`，一般为功能上的升级。

- `c 修订号`，一般指对程序bug的修复。

### 指定版本

我们可以通过 `^`、 `~`、 `*` 来指定版本号。

- `^` 表示与版本兼容，指从最左边 `非0` 算起，该数值不能变。
  - 版本号 `^2.1.0`：指 `>=2.1.0` 但 `<3.0.0`

  - 版本号 `^0.2.1`：指 `>=0.2.1` 但 `<0.3.0`

  - 版本号 `^0.1.0`：指 `>=0.1.0` 但 `<0.2.0`

- `~` 表示次版本号的更新规则，指从最右边 `非0` 算起，该数值不能变。
  - `~2.1.0`：指 `>=2.1.0` 但 `<2.2.0`

- `*` 表示任意版本，永远更新最新版本。

- `-` 表示版本区间。
  - `1.2.1-1.6.5`：指 `1.2.1与1.6.5间` 的任意版本。


### 版本阶段

- `Base版`：此版本表示该软件仅仅是一个假页面链接，通常包括所有的功能和页面布局，但是页面中的功能都没有做完整的实现，只是作为整体网站的一个基础架构。

- Alpha版：此版本表示该软件在此阶段主要是以实现软件功能为主，通常只在软件开发者内部交流，一般而言，该版本软件的Bug较多，需要继续修改。

- `Beta版`：该版本相对于α版已有了很大的改进，消除了严重的错误，但还是存在着一些缺陷，需要经过多次测试来进一步消除，此版本主要的修改对象是软件的UI。

- `RC版`：该版本已经相当成熟了，基本上不存在导致错误的BUG，与即将发行的正式版相差无几。

- `Release版`：该版本意味“最终版本”，在前面版本的一系列测试版之后，终归会有一个正式版本，是最终交付用户使用的一个版本。该版本有时也称为标准版。一般情况下，Release不会以单词形式出现在软件封面上，取而代之的是符号(Ｒ)。


### 常规命名

- `standard`：标准版

- `full version`：完整版，即正式版

- `lts`：长期维护版本

- `ultimate`：旗舰版

- `alpha`：内部版本

- `beta`：测试版

- `enhance`：增强版

- `free`：自由版

- `release`：发行版

- `rc`：即将作为正式版发布

- `upgrade`：升级版

## 锁定版本

每次更新版本后会生成 `package-lock.json` 文件，用于记录当前项目的使用的软件版本号，这样别人执行 `npm install` 安装包时与项目开发者使用的是相同版本，来保证程序的稳定运行。

## 安装软件

### 全局安装

安装软件包，但不修改 `package.json` 文件，以后使用 `npm install` 时不会自动安装。

```bash
npm install -g <Module Name>
```

### 当前项目安装

安装软件包，会修改修改 `package.json` 文件，以后使用 `npm install` 时会自动安装。

```bash
npm install <Module Name>
```

### 生产环境

- 在 `package.json` 文件 `dependencies` 属性下增加记录。

- `npm install` 时会自动安装该软件包。

- 使用 `npm install --production` 或者 `NODE_ENV` 变量值为 `production` 时，安装该软件包。

```bash
npm install <Module Name> --save

# 简写
npm install <Module Name> -S
```

### 

- 在 `package.json` 文件 `devDependencies` 属性下增加记录。

- `npm install` 时会自动安装该软件包。

- 使用 `npm install --production` 或者 `NODE_ENV` 变量值为 `production` 时，不会安装该软件包。

```bash
npm install <Module Name> --save-dev

# 简写
npm install <Module Name> -D
```

## 查看软件

### 查看自身版本

```bash
npm -v
```

### 查看安装的模块列表

```bash
npm ls
```

### 查看本地已安装的包信息

```bash
npm ls vue
```

### 查看包信息

```bash
npm info vue
```

### 列出项目的依赖

```bash
npm list
```

### 依赖深度

列出项目的依赖，并限制显示的依赖深度。

```bash
npm list --depth=2
```

## 更新软件

### 更新 npm 自身

```bash
npm install npm -g
```

### 更新所有软件包

```bash
npm update
```

### 更新指定软件包

```bash
npm update <Module Name>
```

## 卸载软件

### 删除全局软件

```bash
npm uninstall -g <Module Name>
```

### 删除项目中软件包

```bash
npm uninstall <Module Name>
```

## npx 命令

Node 安装后会提供 `npx` 命令，使用 `npx` 命令可以直接调用模块命令。

下面是不使用 `npx` 调用 `mockjs` 中的 `random` 命令方式：

```bash
node_modules/mockjs/bin/random
```

使用 `npx` 可以简化调用，他会在 `node_modules/.bin` 目录和环境变量 `$PATH` 中查找命令并执行：

```bash
npx random
```
