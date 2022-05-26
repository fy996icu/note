---
group:
  title: Script Setup
order: 6
---

<BackTop></BackTop>

# useSlots 和 useAttrs

在 `<script setup>` 使用 `slots` 和 `attrs` 的情况应该是很罕见的，因为可以在模板中通过 `$slots` 和 `$attrs` 来访问它们。在你的确需要使用它们的罕见场景中，可以分别用 `useSlots` 和 `useAttrs` 两个辅助函数：

```html
<!-- Father组件 -->
<template>
  <!-- 添加常规属性 msg 和动态属性 count -->
  <Children msg="你好啊" :count="count">
    <!-- 使用默认插槽 -->
    <template #default>
      <h1>默认插槽</h1>
    </template>
    <!-- 使用具名插槽 -->
    <template #footer>
      <h2>具名插槽</h2>
    </template>
  </Children>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Children from './Children.vue';
  // 定义动态属性
  const count = ref(0);
</script>
```

```html
<!-- Children组件 -->
<template>
  <p>显示属性：</p>
  <ul>
    <li>{{ $attrs.msg }}</li>
    <li>{{ $attrs.count }}</li>
  </ul>
  <hr />
  <p>显示插槽：</p>
  <!-- 默认插槽容器 -->
  <slot></slot>
  <!-- 具名插槽容器 -->
  <slot name="footer"></slot>
</template>

<script setup lang="ts">
  // 导入 useAttrs 、useSlots 函数
  import { useAttrs, useSlots } from 'vue';
  // 获取属性 attrs
  const attrs = useAttrs();

  // 获取插槽 slots
  const slots = useSlots();

  // 输出：[Target]] 中有属性：count: 0，mag: "你好啊"
  console.log(attrs);

  // 输出：[Target]] 中有插槽：default: (...args) => {}，footer: (...args) => {}
  console.log(slots);
</script>
```

示例输出结果如下：

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useSlots%E5%92%8CuseAttrs.png)

`useSlots` 和 `useAttrs` 是真实的 `运行时函数`，它会返回与 `setupContext.slots` 和 `setupContext.attrs` 等价的值，同样也能在普通的 composition API 中使用。
