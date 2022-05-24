---
group:
  title: 快速上手
order: 10
---
# 动态组件 & 异步组件

## 动态组件

有时候我们需要动态切换组件，此时就需要使用到 `动态组件`。通过 `Vue` 的 `<component>` 元素加一个特殊的 `is` attribute 来实现：

```html
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component :is="currentTabComponent"></component>
```

在上述示例中，`currentTabComponent` 可以包括：

- 已注册组件的名字，或

- 一个组件选项对象。


案例：点击 `动态切换组件` 按钮，切换显示 `Grandson` 组件。

```html
<template>
  <component :is="currentComponent"></component>
  <button @click="changeComponent">动态切换组件</button>
</template>

<script lang="ts">
// 导入普通组价
import Children from './Children.vue'
import Grandson from './Grandson.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    Children,
    Grandson,
  },
  setup() {
    // 默认显示Children组件
    const currentComponent = ref('Children')
    // 切换组件
    const changeComponent = () => {
      currentComponent.value = 'Grandson'
    }
    return {
      currentComponent,
      changeComponent,
    }
  },
})
</script>
```

## 异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了实现这个效果，`Vue` 有一个 `defineAsyncComponent` 方法。

### 简介

vue3中的Async Components异步组件使用进行了很大的改动，改动如下：

- 使用 `defineAsyncComponent` 方法来定义async components异步组件。

- 组件配置项的 `component` 重新命名为 `loader`。

- `loader` 函数（对应vue2的component函数）不再接受 `resolve` 和 `reject` 参数，并且必须返回 `Promise`。

### vue2的使用方式

vue2中通过一个返回 `Promise` 函数来定义async components异步组件：

```js
const asyncLazy = () => import('./Lazy.vue')
```

多配置方式如下：

```js
const asyncLazy = {
  component: () => import('./Lazy.vue'),
  delay: 200,
  timeout: 3000,
  error: ErrorComponent,
  loading: LoadingComponent
}
```

### vue3的使用方式

在vue3中，定义async components异步组件必须使用 `defineAsyncComponent` 方法来明确定义async components异步组件而不是同步组件。同时，`component` 配置项重新命名为 `loader`。示例如下：

```js
import { defineAsyncComponent } from 'vue' // 需要引入defineAsyncComponent
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// 无配置项定义方式
const asyncLazy = defineAsyncComponent(() => import('./Lazy.vue'))

// 配置项定义方式
const asyncLazyWithOptions = defineAsyncComponent({
  // component配置项重新命名为loader
  loader: () => import('./Lazy.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

### 配置项说明

对于高阶用法，`defineAsyncComponent` 可以接受一个以下格式的对象：

```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent({
  // 工厂函数
  loader: () => import('./Foo.vue'),
  // 加载异步组件时要使用的组件
  loadingComponent: LoadingComponent,
  // 加载失败时要使用的组件
  errorComponent: ErrorComponent,
  // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
  delay: 200,
  // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
  // 默认值：Infinity（即永不超时，单位 ms）
  timeout: 3000,
  // 定义组件是否可挂起 | 默认值：true
  suspensible: false,
  /**
   *
   * @param {*} error 错误信息对象
   * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
   * @param {*} fail  一个函数，指示加载程序结束退出
   * @param {*} attempts 允许的最大重试次数
   */
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试 3 次
      retry()
    } else {
      // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
      // 必须调用其中一个才能继续错误处理。
      fail()
    }
  }
})
```
