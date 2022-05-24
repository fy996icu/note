---
group:
  title: Script Setup
order: 10
---
# 宏命令报错问题

## 问题说明

在 `<script setup>` 中必须使用 `defineProps` 和 `defineEmits` API 来声明 `props` 和 `emits` ，它们具备完整的类型推断并且在 `<script setup>` 中是直接可用的。

```html
<template>
  <h1>子组件</h1>
</template>

<script setup lang="ts">
// 直接使用 不需要导入
const props = defineProps()
const emits = defineEmits()
</script>
```

**但是 `Eslint` 可能会报错，提示：`'defineProps' is not defined.`。**

## 解决办法

在 `.eslintrc.js` 文件中添加以下配置：

```js
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    root: true,
    env:{
      // 解决 defineProps 等宏命令报错问题
      "vue/setup-compiler-macros":true
    },
    /* 指定如何解析语法。*/
    parser: 'vue-eslint-parser',
    /* 优先级低于parse的语法解析配置 */
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    globals: {
        Nullable: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则,
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'vue/max-attributes-per-line': ['off'],
        "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-new-func": 2,//禁止使用new Function
        "no-new-object": 2,//禁止使用new Object()
        "no-new-require": 2,//禁止使用new require
        "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
        "eqeqeq": 2,//必须使用全等
    },
})
```
