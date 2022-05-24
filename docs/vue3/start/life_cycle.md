---
group:
  title: 快速上手
order: 2
---

# 生命周期钩子

## 生命周期示意图

![img](https://img-blog.csdnimg.cn/4e974a3679d34fdd9582edf36e4646fe.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbmF2eXNpcjg=,size_20,color_FFFFFF,t_70,g_se,x_16)


## Vue2 和 Vue3对比

你可以通过在生命周期钩子前面加上 “`on`” 来访问组件的生命周期钩子。

下表包含如何在 `setup ()` 内部调用生命周期钩子：

| 选项式 API      | Composition API       |
| -------------------- | --------------------------- |
| `beforeCreate` | Not needed* |
| `created` | Not needed* |
| `beforeMount` | `onBeforeMount` |
| `mounted` | `onMounted` |
| `beforeUpdate` | `onBeforeUpdate` |
| `updated` | `onUpdated` |
| `beforeUnmount` | `onBeforeUnmount` |
| `unmounted` | `onUnmounted` |
| `errorCaptured` | `onErrorCaptured` |
| `renderTracked` | `onRenderTracked` |
| `renderTriggered` | `onRenderTriggered` |
| `activated` | `onActivated` |
| `deactivated` | `onDeactivated` |

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vue2%E5%92%8Cvue3%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%AF%B9%E5%BA%94%E5%9B%BE.png)

因为 `setup` 是围绕 `beforeCreate` 和 `created` 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 `setup` 函数中编写。

`Vue 2.x` 和 `Vue 3.x` 生命周期钩子函数对比示例。

```html
<template>
  <div class="about">
    <h2>msg: {{ msg }}</h2>
    <hr />
    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue'

export default {
  beforeCreate() {
    console.log('beforeCreate()')
  },

  created() {
    console.log('created')
  },

  beforeMount() {
    console.log('beforeMount')
  },

  mounted() {
    console.log('mounted')
  },

  beforeUpdate() {
    console.log('beforeUpdate')
  },

  updated() {
    console.log('updated')
  },

  beforeUnmount() {
    console.log('beforeUnmount')
  },

  unmounted() {
    console.log('unmounted')
  },

  setup() {
    const msg = ref('abc')

    const update = () => {
      msg.value += '--'
    }

    onBeforeMount(() => {
      console.log('--onBeforeMount')
    })

    onMounted(() => {
      console.log('--onMounted')
    })

    onBeforeUpdate(() => {
      console.log('--onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('--onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('--onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('--onUnmounted')
    })

    return {
      msg,
      update
    }
  }
}
</script>
```
