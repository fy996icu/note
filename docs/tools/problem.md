---
title: 常见问题
toc: menu
order: 1
---

<BackTop></BackTop>

# 常见问题

## 插件性能查看

打开命令面板， MAC 下 `⌘ + ⇧ + p`， Windows下 `ctrl + shift + p` 后输入 `show running extensions`。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-running.png)

执行结果如下：

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-running2.png)


## Emmet 提示慢

如果在 `vue` 等文件中出现输入 `html` 标签需要很长时间才出现代码提示，通过以下配置可以优化速度。

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html",
    "vue": "html"
},
"emmet.excludeLanguages": [
  "!**/node_modules/**","markdown"
]
```

## cpu 占用高

VSCode 会在后台监测文件，可能会出现以下进程cpu占用过高，造成电脑发热严重。在 VSCode 配置中修改以下配置项，将 `node_modules` 等扩展包目录排除掉。

- `files.exclude`。

- `search.exclude`。

- `files.watcherExclude`。

推荐配置：

```json
"intelephense.files.exclude": [
  "**/.git/**",
  "**/.svn/**",
  "**/.hg/**",
  "**/CVS/**",
  "**/.DS_Store/**",
  "**/node_modules/**",
  "**/bower_components/**",
  "**/vendor/**/{Tests,tests}/**",
  "**/.history/**",
  "**/vendor/**/vendor/**",
  "**/dist/**"
],
"files.exclude": {
  "*.code-workspace": true,
  "**/dist": true,
  "**/node_modules": true,
  "**/public/js/app.js": true,
  "**/unpackage": true,
  "**/vendor.js": true,
  ".github": true,
  ".vscode": true
},
"files.watcherExclude": {
  "**/dist/**": true,
  "**/node_modules/**": true,
  "**/node_modules/*/**": false,
  "**/vendor/**": true
},
"search.exclude": {
  "*.code-workspace": true,
  "**/dist": true,
  "**/vendor": true,
  "**/node_modules": true
}
```

## 移除不需要的 import

我们希望在保存时移除不需要的 `import` ，提供两种方式。

**热键定义**

查找热键定义 `organizeImports`，然后设置为你想要的热键。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-import.png)

**全局配置定义**

```json
"editor.codeActionsOnSave": {
  "source.organizeImports": true
}
```
