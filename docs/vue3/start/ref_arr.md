---
group:
  title: 快速上手
order: 8
---
# Ref 数组

## 2.x 语法

在 Vue2 中，给多个 DOM 绑定相同 `ref` 时， 可以使用 `$refs` 获取到 DOM 节点。

例如：在 `v-for` 循环时给 `li` 标签绑定 `ref="liDom"` 用于批量获取 `li` 标签节点。

```html
<template>
  <ul>
    <li v-for="item in arrData" :key="item.id" ref="liDom">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arrData: [
        {
          id: "0",
          name: "张三",
        },
        {
          id: "1",
          name: "李四",
        },
        {
          id: "2",
          name: "王五",
        },
      ],
    };
  },
  mounted() {
    // 组件挂载完成获取 li 标签 DOM
    console.log(this.$refs.liDom); // 输出：[li, li, li]
  },
};
</script>
```

## 3.x 语法

在 Vue 3 中，此类用法将不再自动创建 `$ref` 数组。要从单个绑定获取多个 `ref`，请将 `ref` 绑定到一个更灵活的 `函数` 上 (这是一个新特性)：

```html
<template>
  <ul>
    <li v-for="item in data" :key="item" :ref="setItemRef">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    // 数据
    const data = ref<string[]>(['张三', '李四', '王五'])
    // 创建 ref 数组容器
    const liNodeListRefs = ref<HTMLLIElement[]>([])
    // 定义一个获取 DOM 的函数
    const setItemRef = (el: any) => {
      if (el) liNodeListRefs.value.push(el)
    }
    onMounted(() => {
      console.log(liNodeListRefs.value) // 输出：Proxy [li, li, li]
    })
    return { data, setItemRef }
  },
})
</script>
```

**通过 [getCurrentInstance()](/vue3/start/get-current-instance) 访问内部组件实例，从而获取 `refs` 。**

在 Vue3 中无法访问 `this`，所以无法使用 Vue2 中的 `this.$refs`，但是可通过 `getCurrentInstance()` 方法返回当前组件实例 `internalInstance`，从而通过 `internalInstance.ctx.$refs` 获取到 DOM。

```html
<!-- 父组件 -->
<template>
  <ul>
    <li v-for="item in data" :key="item" ref="liDom">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    // 数据
    const data = ref<string[]>(['张三', '李四', '王五'])
    onMounted(() => {
      // 通过 getCurrentInstance() 获取到当前组件实例
      const internalInstance = getCurrentInstance() as any

      // 获取 $refs
      console.log(internalInstance.ctx.$refs.liDom) // 输出：[li, li, li]
    })
    return { data }
  },
})
</script>
```
