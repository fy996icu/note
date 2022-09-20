---
title: nvm
toc: menu
order: 1
---

<BackTop></BackTop>

# nvm 管理多版本 Node

[点击查看 nvm 官网](https://github.com/nvm-sh/nvm)

有时候我们的项目需要使用不同版本的 [NodeJS](https://nodejs.org/zh-cn/)，如果每次都卸载电脑中的 Node 再重新安装对应的版本，这样真的太麻烦了。所以我们可以使用 [nvm](https://github.com/nvm-sh/nvm) 在我们电脑中管理多个 Node 版本，需要使用什么版本直接切换就行了。

## 安装 nvm

如果已经安装了 Node，在安装 `nvm` 之前，不需要卸载这个版本的 Node。这个版本的 Node 后续会成为 `nvm` 中的 `system` 版本的 Node。

### Mac OS

使用 [brew](https://brew.sh/) 安装是最简单的方式。

```bash
brew install nvm
```

如果不能执行请修改 `.zshrc` 文件并在最后添加以下内容。

```bash
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

重新加载配置：

```bash
source ~/.zshrc
```

### Windows

windows 用户请下载安装 [nvm-windows](https://github.com/coreybutler/nvm-windows)。


## 常用命令

下面介绍常用命令的使用，更多命令请访问 [nvm](https://github.com/nvm-sh/nvm) 官网。

### 获得帮助

```bash
$ nvm -h
```

### 已安装列表

查看本地已安装的 Node 版本，同时也会显示当前使用的 Node 版本。

```bash
$ nvm ls
```

如果在安装 `nvm` 之前，系统已经安装了 Node，那么这个版本的 Node 将会成为 `system` 版本。

如果出现下面的结果，代表此时只有系统原来带的 Node 版本，没有通过 `nvm` 安装任何的 Node 版本。

```bash
➜  my_app nvm ls

->       system
iojs -> N/A (default)
node -> stable (-> N/A) (default)
unstable -> N/A (default)
```

### 安装最新版本

```bash
$ nvm install node
```

使用 `nvm` 安装过 Node 后再使用 `nvm ls` 查看安装列表，会发现多了一个 Node 版本，并且自动应用了这个版本的 Node。

```bash
➜  my_app nvm ls
->      v18.9.0
         system
node -> stable (-> v18.9.0) (default)
stable -> 18.9 (-> v18.9.0) (default)
```

### 安装指定版本

```bash
$ nvm install 10.15.3
```

其中，`10.15.3` 为想要安装的 Node 的版本号。

### 显示当前版本

```bash
$ nvm current
```

### 查看可安装版本

```bash
$ nvm ls-remote
```

### 切换版本

```bash
$ nvm use <已安装的Node版本号>
```

```bash
# 例如切换到 18.9.0版本
$ nvm use 18.9.0
```

### 切换到最新版本

可以通过命令切换到已经安装的 Node 列表中的最新的版本。

```bash
$ nvm use node
```

### 设置别名

从 `18.9.0` 切换到别的版本以后，如果再想切换回来，只能通过 `nvm use 18.9.0`。`18.9.0` 不方便记忆，也不方便输入，可以通过给这个版本设置一个 `alias`，来解决这个问题。输入如下指令：

```bash
# nvm alias <别名> 18.9.0
$ nvm alias carbon 18.9.0
```

使用别名切换：

```bash
$ nvm use carbon
```

也可以通过 `alias` 指令，改变 `default` 所代表的版本：

```bash
$ nvm alias default 18.9.0
```

`18.9.0` 就成为 `default` 版本了。

### 查看别名列表

输入 `nvm alias` 可以查看都有哪些已经设置好的 `alias`。

```bash
$ nvm alias
```

### 取消别名

还可以通过 `nvm unalias carbon` 来取消 `carbon` 这个 `alias`。

```bash
$ nvm unalias carbon
```

### 卸载 Node

```bash
$ nvm uninstall alias/node
```

<Badge>注意</Badge>：不能卸载当前正在运行中的 Node 版本。

## 常见问题

如果之前使用 `npm` 安装过扩展包，现在想使用 `nvm` 进行管理。则首先需要从全局中删除 `node_modules` 目录。

```bash
# 查看全局 node_modules 目录
$ npm root -g
```
