---
title: style 特性
toc: menu
order: 11
---

<BackTop></BackTop>

# style 特性

## `<style scoped>`

### 原理

当 `<style>` 标签带有 `scoped` attribute 的时候，它的 CSS 只会应用到当前组件的元素上。这类似于 `Shadow DOM` 中的样式封装。它带有一些注意事项，不过好处是不需要任何的 polyfill。它是通过 PostCSS 转换以下内容来实现的：

```html
<style scoped>
  .example {
    color: red;
  }
</style>

<template>
  <div class="example">hi</div>
</template>
```

编译后：

```html
<style>
  .example[data-v-f3f3eg9] {
    color: red;
  }
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

### 深度选择器

处于 `scoped` 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 `:deep()` 这个伪类：

```html
<style scoped>
  .a :deep(.b) {
    color: red;
  }
</style>
```

编译后：

```html
<style>
  .a[data-v-f13b4d11] .b {
    color: red;
  }
</style>
```

<Alert type="info">
  通过 v-html 创建的 DOM 内容不会被作用域样式影响，但你仍然可以使用深度选择器来设置其样式。
</Alert>

### 插槽选择器

默认情况下，作用域样式不会影响到 `<slot/>` 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的。使用 `:slotted` 伪类以确切地将插槽内容作为选择器的目标：

```html
<style scoped>
  :slotted(div) {
    color: red;
  }
</style>
```

### 全局选择器

如果想让其中一个样式规则应用到全局，比起另外创建一个 `<style>`，可以使用 `:global` 伪类来实现：

```html
<style scoped>
  :global(.red) {
    color: red;
  }
</style>
```

编译后：

```html
<style>
  .red {
    color: red;
  }
</style>
```

### 混合使用局部与全局样式

你也可以在同一个组件中同时包含作用域样式和非作用域样式：

```html
<style>
  /* global styles */
</style>

<style scoped>
  /* local styles */
</style>
```

### 作用域样式注意事项

- **作用域样式并没有消除对 CSS 类的需求**。由于浏览器渲染各种各样 CSS 选择器的方式，`p { color: red }` 结合作用域样式使用时会慢很多倍 (即，当与 attribute 选择器组合使用的时候)。如果使用 class 或者 id 来替代，例如 `.example { color: red }`，那你几乎就可以避免这个性能的损失。

- **小心递归组件中的后代选择器**。对于一个使用了 `.a .b` 选择器的样式规则来说，如果匹配到 `.a` 的元素包含了一个递归的子组件，那么所有的在那个子组件中的 `.b` 都会匹配到这条样式规则。

## `<style module>`

### 原理

`<style module>` 标签会被编译为 [CSS Modules](https://github.com/css-modules/css-modules) 并且将生成的 CSS 类作为 `$style` 对象的键暴露给组件：

```html
<template>
  <p :class="$style.red">Hello</p>
</template>

<style module>
  .red {
    color: red;
  }
</style>
```

### 自定义注入名称

你可以通过给 `module` attribute 一个值来自定义注入的类对象的 property 键：

```html
<template>
  <p :class="classes.red">red</p>
</template>

<style module="classes">
  .red {
    color: red;
  }
</style>
```

### 与组合式 API 一同使用

注入的类可以通过 `useCssModule` API 在 `setup()` 和 `<script setup>` 中使用。对于使用了自定义注入名称的 `<style module>` 模块，`useCssModule` 接收一个对应的 `module` attribute 值作为第一个参数。

```html
<script setup lang="ts">
  import { useCssModule } from 'vue';
  const css = useCssModule();
  console.log(css); // { blue: "_blue_13cse_5", red: "_red_13cse_2"}
</script>

<style module>
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
</style>
```

## 状态驱动的动态 CSS

单文件组件的 `<style>` 标签可以通过 `v-bind` 这一 CSS 函数将 CSS 的值关联到动态的组件状态上，有了这一特性，**可以将大量的动态样式通过状态来驱动了，而不是写动态的 `class` 类名或者获取 `dom` 来动态设置了**。

```html
<script setup lang="ts">
  import { ref } from 'vue';
  const color = ref('red');
  // 2m 后变成蓝色
  setTimeout(() => (color.value = 'blue'), 2000);
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
  p {
    color: v-bind(color);
  }
</style>
```

编译后：

**JS**

```js
/* Analyzed bindings: {
  "ref": "setup-const",
  "color": "setup-ref"
} */
import { useCssVars as _useCssVars, defineComponent as _defineComponent } from 'vue';
import { openBlock as _openBlock, createElementBlock as _createElementBlock } from 'vue';

import { ref } from 'vue';

const __sfc__ = /*#__PURE__*/ _defineComponent({
  setup(__props) {
    _useCssVars((_ctx) => ({
      // 可以看到，编译后的值 和 一个 hash 值映射，并且具备响应式， css 的 var 便可以获取到这个 hash 映射的值
      'f13b4d11-color': color.value,
    }));

    const color = ref('red');
    // 2m 后变成蓝色
    setTimeout(() => (color.value = 'blue'), 2000);

    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock('p', null, 'hello');
    };
  },
});
__sfc__.__scopeId = 'data-v-f13b4d11';
__sfc__.__file = 'App.vue';
export default __sfc__;
```

**CSS**

```html
<style>
  p[data-v-f13b4d11] {
    color: var(--f13b4d11-color);
  }
</style>
```

实际的值会被编译成 `hash` 的 CSS 自定义 property，CSS 本身仍然是静态的。**自定义 property 会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式更新**。

编译后的代码会维护一份 `hash` 值和源值的映射，`hash` 值用于 css `var` 函数获取自定义属性，`hash` 映射源值并保留响应式。
