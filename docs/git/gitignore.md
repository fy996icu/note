---
title: 忽略文件
toc: menu
order: 5
---

<BackTop></BackTop>

# 忽略文件

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。 在这种情况下，我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。

不需要从头写 `.gitignore` 文件，GitHub 已经为我们准备了各种配置文件，只需要组合一下就可以使用了。所有配置文件可以直接在线浏览：[https://github.com/github/gitignore](https://github.com/github/gitignore)

忽略文件的原则是：

- 忽略操作系统自动生成的文件，比如缩略图等。

- 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库。

- 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。

我们在前端开发的时候，使用 `npm install` 命令的时候会自动生成 `node_modules` ，这个包非常的大，并且它是不需要添加到 Git 中被跟踪的，当小伙伴们拉取到我们的工程文件再次执行 `npm install` 时，`node_modules` 又会自动生成，所以我们需要把它放入 `.gitignore` 文件中。

```bash
# 这样node_modules将不会被 Git 跟踪
/node_modules
```

忽略一些文件或者目录：

```bash
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
**/node_modules
# roadhog-api-doc ignore
/src/utils/request-temp.js
_roadhog-api-doc

# production
/dist

# misc
.DS_Store
npm-debug.log*
yarn-error.log

/coverage
.idea
yarn.lock
package-lock.json
pnpm-lock.yaml
*bak


# visual studio code
.history
*.log
functions/*
.temp/**

# umi
.umi
.umi-production

# screenshot
screenshot
.firebase
.eslintcache

build
```

一般此文件会放到工作目录的根目录下，此文件中匹配的所有文件都会被 Git 所有的命令忽略。

最后一步就是把 `.gitignore` 也提交到 Git，就完成了！当然检验 `.gitignore` 的标准是 `git status` 命令是不是说 `working directory clean`。

<Alert type="warning">
  注意，有些时候，你想添加一个文件到 Git，但发现添加不了，原因是这个文件被 ".gitignore" 忽略了。
</Alert>

把指定文件排除在 `.gitignore` 规则外的写法就是 `!+文件名`，所以，只需把例外文件添加进去即可。

```bash
# 排除所有.开头的隐藏文件:
.*
# 排除所有.class文件:
*.class

# 不排除.gitignore和App.class:
!.gitignore
!App.class
```
