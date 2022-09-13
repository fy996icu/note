---
title: 与<script>使用
toc: menu
order: 19
---

<BackTop></BackTop>

# 与普通的 `<script>` 一起使用

## 作用介绍

`<script setup>` 可以和普通的 `<script>` 一起使用。普通的 `<script>` 在有这些需要的情况下或许会被使用到：

- 无法在 `<script setup>` 声明的选项，例如 `inheritAttrs` 或通过插件启用的自定义的选项。

- 声明命名导出。

- 运行副作用或者创建只需要执行一次的对象。

```html
<script>
  // 普通 <script>, 在模块范围下执行(只执行一次)
  runSideEffectOnce();

  // 声明额外的选项
  export default {
    inheritAttrs: false,
    customOptions: {},
  };
</script>

<script setup>
  // 在 setup() 作用域中执行 (对每个实例皆如此)
</script>
```

## 注意事项

子组件使用 `<script setup>` 时，`<script setup>` 内部默认是关闭的，也就是说，父组件无法通过 `ref` 获取到子组件内部的 `属性` 和 `方法`。

要想父组件通过 `ref` 的方式获取到子组件的 `属性` 和 `方法`：

- 可以让子组件使用普通的 `<script>`，并且在 `setup()` 方法中将需要暴露给父组件的属性和方法 `return` 出去。

- 子组件依然使用 `<script setup>`，但在其内部使用 [defineExpose](/vue3/setup/define-expose) 宏命令将子组件的属性和方法暴露出去。

## 子组件使用 `<script setup>`

子组件使用 `<script setup>`，此时，父组件是不能通过 `ref.value.xxx` 获取到子组件的属性和方法的。

```html
<!-- Father组件 -->
<template>
  <Children ref="childRef" />
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Children from './Children.vue';
  const childRef = ref(null);

  onMounted(() => {
    // 发现 [[Target]] 什么都没有，不会出现子组件的 count属性 和 setCount方法
    console.log(childRef.value); // 输出：[[Target]]
  });
</script>
```

```html
<!-- Children组件 -->
<template>
  <div>{{ count }}</div>
  <button @click="setCount">计数器</button>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // 子组件的 count 属性
  const count = ref(0);

  // 子组件定义的 setCount 方法
  const setCount = () => {
    count.value++;
  };
</script>
```

## 子组件使用 `<script>`

子组件使用普通 `<script>`，并且在 `setup()` 函数中 `return` 属性或方法时，父组件则可以通过 `ref.value.xxx` 获取到子组件的属性或方法。

```html
<!-- Father组件 -->
<template>
  <Children ref="childRef" />
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Children from './Children.vue';
  const childRef = ref(null);

  onMounted(() => {
    // 发现 [[Target]] 出现子组件的 count属性 和 setCount方法
    // 输出：[[Target]]- count：0  setCount: () => ()
    console.log(childRef.value);
  });
</script>
```

```html
<!-- Children组件 -->
<template>
  <div>{{ count }}</div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      // 子组件的 count 属性
      const count = ref(0);

      // 子组件定义的 setCount 方法
      const setCount = () => {
        console.log('子组件方法');
      };

      // 导出-父组件可以通过 ref 拿到
      return {
        count,
        setCount,
      };
    },
  });
</script>
```
