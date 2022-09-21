---
title: nrm
toc: menu
order: 2
---

<BackTop></BackTop>

# nrm 管理镜像源

文档主要来源于 [后盾人](https://doc.houdunren.com/)。

[nrm](https://github.com/Pana/nrm) 可以帮助我们在不同的镜像间进行切换，帮助你加快软件的下载。

## 安装命令

```bash
npm install -g nrm
```

如果安装不成功，可以先按下面步骤将 `npm` 手动设置为淘宝源。

```bash
npm config set registry https://registry.npm.taobao.org
```

## 常用命令

### 查看镜像列表

```bash
nrm ls
```

输出结果：* 代表目前正在使用的镜像源。如果不显示 * 则查看[常见问题](/package/nrm#不显示--号)。

```text
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
* taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

### 使用镜像

选择腾讯镜像：

```bash
nrm use taobao
```

### 查看当前源

如果不显示信息，则查看[常见问题](/package/nrm#不显示--号)。

```bash
nrm current
```

### 测试速度

**测试所有源的速度：**

```bash
nrm test
```

输出结果：

```text
npm ------ 941ms
yarn ----- 893ms
tencent -- 264ms
cnpm ----- 1354ms
taobao --- 317ms
npmMirror - 1280ms
```

**测试指定源的速度：**

```bash
nrm test taobao
```

输出结果：

```text
* taobao --- 344ms
```

### 添加镜像源

```bash
nrm add <镜像源名称> <镜像源地址> 

# 例如
nrm add registry http://registry.npm.frp.trmap.cn/
```

### 删除镜像源

删除 `taobao` 镜像源：

```bash
nrm del taobao
```

## 常见问题

### 不显示 * 号

**`nrm current` 显示不出信息和 `nrm ls` 当前使用源不出现星号的问题。**

找到 `nrm` 全局安装的位置，Mac 下在 `/usr/local/lib/node_modules/nrm` 文件下，打开 `cli.js`，找到第 `211` 行的代码，把该处的 `&&` 符改成 `||`。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/nrm-wt.png)

```bash
# 使用 vim 修改 cli.js
sudo vi /usr/local/lib/node_modules/nrm/cli.js

# open 命令可以打开 nrm 目录再用别的编辑器修改
open /usr/local/lib/node_modules/nrm/
```

```js
if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry === registry.registry)) {
    registry[FIELD_IS_CURRENT] = true;
    customRegistries[name] = registry;
}

// 把该处的 `&&` 符改成 `||`
if (hasOwnProperty(customRegistries, name) || (name in registries || customRegistries[name].registry === registry.registry)) {
    registry[FIELD_IS_CURRENT] = true;
    customRegistries[name] = registry;
}
```

重新调用 `nrm use` 命令，如: `nrm use npm` ，输入 `nrm ls` 查看，会发现星号已显示, `nrm current` 也出现回调信息。

### vim 显示行号

在使用 `vim` 编辑器的时候如果要永久显示行号可以如下操作：

```bash
vim  ~/.vimrc
```

再进入 `insert` 模式，在最后加二行：

```bash
syntax on
set nu!
```

最后 `wq` 保存，再次进入到 `vim` 就会永久显示行号，不用每次都 `set nu!`。


