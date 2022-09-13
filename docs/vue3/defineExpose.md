---
title: defineExpose
toc: menu
order: 17
---

<BackTop></BackTop>

# defineExpose

## 默认关闭

有时候我们需要在子组件上面绑定一个 `ref`，用于直接获取子组件的属性和方法。但是官方文档指出默认情况下使用 `<script setup>` 的组件是默认关闭的，也就是说通过模板 `ref` 或者 `$parent` 来获取到的组件的实例，并不会暴露任何在 `<script setup>` 中声明的属性和方法。

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

## 暴露属性和方法

为了在 `<script setup>` 组件中明确要暴露出去的属性和方法，那么就需要使用 `defineExpose` 这个宏命令：

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

<script setup lang="ts">
  import { ref } from 'vue';

  // 子组件的 count 属性
  const count = ref(0);

  // 子组件定义的 setCount 方法
  const setCount = () => {
    console.log('子组件方法');
  };
  // 使用 defineExpose 宏命令将属性和方法暴露出去
  defineExpose({
    count,
    setCount,
  });
</script>
```

当父组件通过模板 `ref` 的方式获取到当前组件的实例，获取到的实例会像这样 `{ count: number, setCount: () => void }` (`ref` 会和在普通实例中一样被自动解包)。

## 特别说明

- 使用 `ref` 等方式去获取组件实例的方法或者组件属性本身就不是推荐的（vue、[react](/react/ref_dom#创建refs) 官方都有提及，`ref` 的方式并不推荐），所以 `defineExpose` 使用的频率不高。

- 向外暴露方法或者属性，那么也并不需要暴露太多，所以 `defineExpose` 完全能满足业务需求。
