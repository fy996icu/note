---
title: pnpm
toc: menu
order: 0.2
---

<BackTop></BackTop>

# pnpm 包管理工具

文档主要来源于 [后盾人](https://doc.houdunren.com/)。

[pnpm](https://pnpm.io/zh/) performant npm 意指『高性能的 npm』，与 `npm` 一样的都是软件包管理工具。`pnpm` 比其他包管理器快 2 倍。

## 安装 pnpm

使用 npm 安装：

```bash
npm install -g pnpm
```

使用 [brew](https://brew.sh/) 安装：

```bash
brew install pnpm
```

## 镜像加速

使用镜像加速可以让我们下载软件更快，推荐使用 [nrm](/package/nrm) 管理镜像源。

**1、手动添加：淘宝镜像**

```bash
pnpm config set registry https://registry.npmmirror.com/
```

**2、使用 [nrm](/package/nrm) 添加：**

```bash
nrm use taobao
```

## 使用别名

`pnpm` 输入起来相对麻烦，因此我们可以使用较短的别名，例如 `pn`。

我们只需要将 `alias pn=pnpm` 放入 `.bashrc`、或 `.zshrc`中：

使用 `vim` 编辑 `.bashrc`、或 `.zshrc`：

```bash
vim ~/.zshrc

# 或
vim ~/.bashrc
```

将 `alias pn=pnpm` 放入配置文件里，`pn` 可以自定义，最后执行：

```bash
source ~/.zshrc

# 或
source ~/.bash_profile
```

测试是否成功：

```bash
pn -v

# 输出：7.11.0
```


## 常用命令

### 安装软件

全局安装

```bash
pnpm add -g <Module Name>
```

为当前项目安装软件包

```bash
pnpm add <Module Name>
```

根据 `package.json` 安装软件

```bash
pnpm install 
# 或
pnpm i
```

安装依赖包到 `dependencies`

```bash
pnpm add <pkg>
```

安装依赖包到 `devDependencies`

```bash
pnpm add -D <pkg>
```

安装依赖包到 `optionalDependencies`

```bash
pnpm add -O <pkg>
```

### 查看软件

列出项目的依赖

```bash
pnpm ls
# 或
pnpm list
```

查看本地已安装的包信息

```bash
pnpm ls tailwindcss
或
pnpm ls | grep tailwindcss
```

查看包信息

```bash
pnpm info tailwindcss
或
pnpm view tailwindcss
```

列出项目的依赖，并限制显示的依赖深度

```bash
pnpm list --depth=2
```
查看全局包信息

```bash
pnpm list -g
```

### 更新软件

更新 pnpm 自身

```bash
pnpm add -g pnpm
```

更新所有软件包

```bash
pnpm update
# 或
pnpm up
```

更新指定软件包

```bash
pnpm update <Module Name>
```

### 卸载软件

删除全局软件

```bash
pnpm uninstall -g <Module Name>
# 或
pnpm rm -g <Module Name>
# 或
pnpm un  -g <Module Name>
```

删除项目中软件包

```bash
pnpm un <Module Name>
```

## 卸载 pnpm

如果您使用 `npm` 安装 `pnpm`，那么您应该使用 `npm` 卸载 `pnpm`：

```bash
npm rm -g pnpm
```

## 常见问题

### 全局安装错误

Mac OS 解决 `pnpm` 升级到 `7.2.1` 全局安装提示错误。

```bash
pnpm add -g esbuild

# 输出错误
 ERROR  Unable to find the global bin directory
Run "pnpm setup" to create it automatically, or set the global-bin-dir setting, or the PNPM_HOME env variable. The global bin directory should be in the PATH.
```

**解决方法：**

1、先按提示先执行：

```bash
pnpm setup
```

2、最后执行下面的命令：

```bash
source ~/.zshrc
```
