---
title: Getters
toc: menu
order: 3
---

# Getters

`Getters` 完全等同于 `store` 中 `state` 的 `computed values`。可以使用 `defineStore()` 中的 `getters` 属性定义它们。

`getters` 中定义的函数，接收 `state` 作为第一个参数，建议使用箭头函数。

## 定义 `getters`

将 `user.ts` 修改成一下内容：在 `getters` 属性中定义将 `count` 乘以两倍的方法 `doubleCount`。类似 vue2.x 中的 `计算属性`。

```ts
// user.ts
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 2,
    }
  },
  getters: {
    // 将 count 乘以两倍
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    // 更新 name
    updateName(name: string) {
      // 通过 this 访问 state
      this.userInfo.name = name
    },
  },
})
```

## 使用 `getters`

在组件中使用 `Getters` 和 vue2.x 中使用 `计算属性` 的方法一致。

```html
<!-- Father组件 -->
<template>
  <!-- 显示：标题：Pinia -->
  <h1>标题：{{ title }}</h1>
  <!-- 显示：计数器：4 -->
  <h1>计数器：{{ doubleCount }}</h1>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUserStore from '../store/user'
// 使用 storeToRefs 函数，直接解构获取 state
// doubleCount 为 getters 中定义的计算属性
const { title, doubleCount } = storeToRefs(useUserStore())
</script>
```

**测试 `doubleCount` 是否会自动计算值：**

将 `count` 动态改为 10，看 `doubleCount` 是否显示为 20：

```html
<!-- Father组件 -->
<template>
  <!-- 显示：标题：Pinia -->
  <h1>标题：{{ title }}</h1>
  <!-- 点击按钮后显示：计数器：20 -->
  <h1>计数器：{{ doubleCount }}</h1>
  <button @click="handleChange">修改count</button>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUserStore from '../store/user'
// 使用 storeToRefs 函数，直接解构获取 state
// doubleCount 为 getters 中定义的计算属性
const { title, doubleCount, count } = storeToRefs(useUserStore())

// 修改 count 的方法，将 count 更改为：10，此时 doubleCount 变为：20
const handleChange = () => (count.value = 10)
</script>
```

上述例子可见修改了 `count`，后 `doubleCount` 页变成了 20，也就是说明，当 `count` 改变时，`doubleCount` 将重新计算其值，这点和 vue2.x 中的 `计算属性` 一致。

## 访问其他 `getters`

在 `getters` 中定义的 "计算属性"，在 `store` 内部可以通过 `this` 相互访问。

```ts
// user.ts
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 2,
    }
  },
  getters: {
    // 将 count 乘以两倍
    doubleCount: (state) => state.count * 2,

    // 将 count 乘以两倍再加1，必须显示定义返回的类型
    doubleCountPlus(): number {
      // 通过 this 访问到过 doubleCount
      return this.doubleCount + 1
    },
  },
  actions: {
    // 更新 name
    updateName(name: string) {
      // 通过 this 访问 state
      this.userInfo.name = name
    },
  },
})
```

```html
<!-- Father组件 -->
<template>
  <!-- 显示：标题：Pinia -->
  <h1>标题：{{ title }}</h1>
  <!-- 显示：计数器：4 -->
  <h1>计数器：{{ doubleCount }}</h1>
  <!-- 显示：计数器：5 -->
  <h1>计数器Plus：{{ doubleCountPlus }}</h1>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUserStore from '../store/user'
// 使用 storeToRefs 函数，直接解构获取 state
// doubleCount 和 doubleCountPlus 为 getters 中定义的计算属性
const { title, doubleCount, doubleCountPlus } = storeToRefs(useUserStore())
</script>
```

## 访问其他 `store` 的 `getters`

访问其他 `store` 的 `getters`，可以直接引入其他 `store` 文件，在 `getters` 内部使用它。

```ts
// user.ts
import { useOtherStore } from './other-store'
export default defineStore('user', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

## 传递参数给 `getters`

`getters` 只是一个 `计算属性`，因此不可能向其传递任何参数。但是，可以从 `getters` 返回一个 `函数` 来接受任何参数。

修改 `user.ts` 为一下内容：`multipleCount` 返回一个函数，此函数接收一个参数 `payload`，其类型为 `number`，将 `count` 乘以 `payload` 倍。

```ts
// user.ts
import { defineStore } from 'pinia'
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 2,
    }
  },
  getters: {
    // 将 count 乘以 payload 倍数
    multipleCount: (state) => (payload: number) => state.count * payload,
  },
  actions: {
    // 更新 name
    updateName(name: string) {
      // 通过 this 访问 state
      this.userInfo.name = name
    },
  },
})
```

组件中使用：`multipleCount(payload)`。

```html
<!-- Father组件 -->
<template>
  <!-- 显示：标题：Pinia -->
  <h1>标题：{{ title }}</h1>
  <!-- 显示：计数器：2 -->
  <h1>计数器：{{ count }}</h1>
  <!-- 显示：计数器乘以10倍：20 -->
  <h1>计数器乘以10倍：{{ multipleCount(10) }}</h1>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useUserStore from '../store/user'
// 使用 storeToRefs 函数，直接解构获取 state
// multipleCount 为 getters 中定义的计算属性
const { title, count, multipleCount } = storeToRefs(useUserStore())
</script>
```

<Alert type="warning">
  使用这种方式的时候，getters 不再被缓存，只是函数调用。
</Alert>

## 在 `options API` 中使用

```js
import { mapState } from 'pinia'
import useUserStore from '../store/user'

export default {
  computed: {
    ...mapState(useUserStore, ['doubleCount'])
    ...mapState(useUserStore, {
      myOwnName: 'doubleCounter',
      double: store => store.doubleCount,
    }),
  },
}
```
