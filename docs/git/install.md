---
title: Git 安装
toc: menu
order: 1
---

<BackTop></BackTop>

# Git 安装

## Linux 上安装

如果你想在 Linux 上用二进制安装程序来安装 Git，可以使用发行版包含的基础软件包管理工具来安装。 如果 以 Fedora 上为例，你可以使用 `yum`。

```bash
$ sudo yum install git
```

如果你在基于 Debian 的发行版上，请尝试用 `apt-get`。

```bash
$ sudo apt-get install git
```

要了解更多选择，Git 官方网站上有在各种 `Unix` 风格的系统上安装步骤，网址为 [http://git-scm.com/download/linux](http://git-scm.com/download/linux)。

## Mac 上安装

**方法一：**

最简单的方法是安装 `Xcode Command Line Tools`，然后在 `Terminal` 里尝试首次运行 `git` 命令即可。 如果没有安装过命令行开发者工具，将会提示你安装。

**方法二：** <Badge>推荐</Badge>

使用 [Homebrew](https://github.com/Homebrew/legacy-homebrew):

`Homebrew` 是一款 `Mac OS` 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。

```bash
$ brew install git
```

## Windows 上安装

直接下载安装包：[https://git-scm.com/](https://git-scm.com/)

## 检测是否安装成功

`windows` 请从开始菜单程序中打开 `Gitbash`，其他系统请打开终端工具或者 `shell` 命令行工具。

```bash
$ git --version

# 输出，仅供参考-版本不同输出不同
git version 2.32.1 (Apple Git-133)
```
