---
group:
  title: Script Setup
order: 9
---

<BackTop></BackTop>

# 限制使用 src 导入

`SFC` 的三个模块都可以通过 `src` 的方式进行导入，如下所示：

```html
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

但是在 `<script setup>` 下强烈建议<Badge>不使用</Badge> `src` 导入。

由于模块执行语义的差异，`<script setup>` 中的代码依赖单文件组件的上下文。当将其移动到外部的 `.js` 或者 `.ts` 文件中的时候，对于开发者和工具来说都会感到混乱。因而 `<script setup>` 不能和 `src` attribute 一起使用。
