---
title: State
toc: menu
order: 2
---

# State


## 创建 `State`

`Pinia` 中 `state` 是存储数据的部分，是一个函数，类似于我们在组件中定义的 `data` 项。

在 `src/store/user.ts` 中创建 `State`:

```ts
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
    }
  },
})
```

## 使用 `State`

以 `javascript` 中的模块导出的方式导出 `store` 数据，`state` 中的数据均可通过 `变量.state数据名` 获取。

### 直接获取

```html
<!-- Father组件 -->
<template>
  <!-- 直接使用 state -->
  <h1>{{ user.title }}</h1>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'

// 使用 useUserStore
const user = useUserStore()
</script>
```

### `computed `获取

```html
<!-- Father组件 -->
<template>
  <h1>{{ title }}</h1>
</template>
<script setup lang="ts">
import { computed } from 'vue'
// 导入 user 模块
import useUserStore from '../store/user'

// 结合 computed 计算属性使用
const title = computed(() => useUserStore().title)
</script>
```

### 解构获取

`store` 是一个 `reactive` 响应式对象，**直接解构会使其失去响应式**，类似 `setup` 中的 `props` ，为了既可解构又可保持其响应式，可使用 `storeToRefs`，它将为每个 `reactive` 属性创建 `refs`。

```html
<!-- Father组件 -->
<template>
  <h1>{{ title }}</h1>
</template>
<script setup lang="ts">
// 导入 storeToRefs 函数
import { storeToRefs } from 'pinia'
// 导入 user 模块
import useUserStore from '../store/user'

// 使用 storeToRefs 函数包裹 useUserStore，解构获取
const { title } = storeToRefs(useUserStore())
</script>
```

## 修改 `State`

可以通过以下三种方式进行修改 `state`：

### 直接修改

```html
<!-- Father组件 -->
<template>
  <!-- 点击按钮后显示 "学习 Pinia"-->
  <h1>{{ user.title }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 直接修改
  user.title = '学习 Pinia'
}
</script>
```

但是一般不建议这样做，知道就行。

### `$patch` 接收对象修改

可以通过 `useUserStore()` 身上的 `$patch` 函数修改，`$patch` 函数接收一个对象：

```html
<!-- Father组件 -->
<template>
  <!-- 点击按钮后显示 "学习 Pinia"-->
  <h1>{{ user.title }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 通过 $patch 函数接收一个对象修改
  user.$patch({
    title: '学习 Pinia',
  })
}
</script>
```

将 `userInfo` 中的 `name` 改为 "李四"：

```html
<!-- Father组件 -->
<template>
  <!-- 显示 "Pinia"-->
  <h1>标题：{{ user.title }}</h1>
  <!-- 显示 "李四"-->
  <h1>姓名：{{ user.userInfo.name }}</h1>
  <!-- 显示 "30" -->
  <h1>年龄：{{ user.userInfo.age }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
// 通过 $patch 函数修改
const handleChange = () => {
  user.$patch({
    userInfo: {
      name: '李四',
    },
  })
}
</script>
```

<Alert type="warning">
 此方法会有一个缺点，当修改的是一个数组中的某一项时，必须将整个数据传给 store，不然会丢失数据。如下：
</Alert>

将 `user.ts` 修改成一下内容：

```ts
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
      // 添加 fruits 数组数据
      fruits: [
        {
          name: '水蜜桃',
          price: 5,
        },
        {
          name: '西瓜',
          price: 10,
        },
      ],
    }
  },
})
```

将 `fruits` 中的第一项 "水蜜桃" 改为 "菠萝"：

```html
<!-- Father组件 -->
<template>
  <!-- 初始化显示 "标题：[ { "name": "水蜜桃", "price": 5 }, { "name": "西瓜", "price": 10 } ]"-->
  <!-- 点击修改按钮后显示 标题：[ { "name": "菠萝" } ]-->
  <h1>标题：{{ user.fruits }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 通过 $patch 函数修改，将 `fruits` 中的第一项 "水蜜桃" 改为 "菠萝"：
  // 这样会造成数据丢失
  user.$patch({
    fruits: [
      {
        name: '菠萝',
      },
    ],
  })
}
</script>
```

**上述例子发现数据丢失了，你应该像下面这样修改，将整个 `state` 传递给 `store`：**

```html
<!-- Father组件 -->
<template>
  <!-- 初始化显示 "标题：[ { "name": "水蜜桃", "price": 5 }, { "name": "西瓜", "price": 10 } ]"-->
  <!-- 点击修改按钮后显示 标题：[ { "name": "菠萝", "price": 5 }, { "name": "西瓜", "price": 10 } ]
-->
  <h1>标题：{{ user.fruits }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 通过 $patch 函数修改，将 `fruits` 中的第一项 "水蜜桃" 改为 "菠萝"：
  user.$patch({
    fruits: [
      {
        name: '菠萝',
        price: 5,
      },
      {
        name: '西瓜',
        price: 10,
      },
    ],
  })
}
</script>
```

很显然，这样的方式并不好使，解决这个问题可以使用 [$patch 接收函数修改](/pinia/state#patch-接收函数修改)。


### `$patch` 接收函数修改

接收一个 `函数` 做为参数，函数参数为 `state` 对象，可直接针对要修改的属性进行修改。

```html
<!-- Father组件 -->
<template>
  <!-- 显示 "学习 Pinia"-->
  <h1>标题：{{ user.title }}</h1>
  <!-- 显示 "李四"-->
  <h1>姓名：{{ user.userInfo.name }}</h1>
  <!-- 显示 "50" -->
  <h1>年龄：{{ user.userInfo.age }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
// 通过 $patch 函数修改
const handleChange = () => {
  user.$patch((state) => {
    state.title = '学习 Pinia'
    state.userInfo.name = '李四'
    state.userInfo.age = 50
  })
}
</script>
```

**解决 `$patch 接收对象修改` 方式更改数组中某一项造成数据丢失的问题：**

```html
<!-- Father组件 -->
<template>
  <!-- 初始化显示 "标题：[ { "name": "水蜜桃", "price": 5 }, { "name": "西瓜", "price": 10 } ]"-->
  <!-- 点击修改按钮后显示 标题：[ { "name": "菠萝", "price": 5 }, { "name": "西瓜", "price": 10 } ]
-->
  <h1>标题：{{ user.fruits }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 通过 $patch 函数修改，将 `fruits` 中的第一项 "水蜜桃" 改为 "菠萝"：
  // 不会造成数据丢失，也不需要传入整个 state
  user.$patch((state) => {
    state.fruits[0].name = '菠萝'
  })
}
</script>
```

**总结：** 使用 `$patch 接收函数修改` 的方式，更能够精准修改，不用传递整个 `state` ，不会造成数据丢失。

### `actions` 修改 - 推荐

通过 `actions` 去修改 `state`，`actions` 里可以直接通过 `this` 访问。

修改 `src/store/user.ts` ，添加 `actions` 选项：

```ts
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
      fruits: [
        {
          name: '水蜜桃',
          price: 5,
        },
        {
          name: '西瓜',
          price: 10,
        },
      ],
    }
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

将 `userInfo` 中的 `name` 改为 "李四"：

```html
<!-- Father组件 -->
<template>
  <!-- 点击按钮后显示：姓名：李四 -->
  <h1>姓名：{{ user.userInfo.name }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 将姓名更改为 "李四"
  // 通过触发 actions 中定义的 updateName 方法修改
  user.updateName('李四')
}
</script>
```

## 替换 `State`

可以通过设置 `store` 的 `$state` 属性为一个新对象，来替换 `store` 的整个 `state`。

```html
<!-- Father组件 -->
<template>
  <h1>标题：{{ user.title }}</h1>
  <h1>姓名：{{ user.userInfo.name }}</h1>
  <h1>水果：{{ user.fruits }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 通过触发 $state 替换整个 state
  user.$state = {
    title: '学习 Pinia',
    userInfo: {
      name: '李四',
      age: 50,
    },
    fruits: [
      {
        name: '菠萝',
        price: 10,
      },
      {
        name: '芒果',
        price: 20,
      },
    ],
  }
}
</script>
```

## 重置 `State`

可以通过 `store` 的 `$reset()` 方法重置 `state` 的值为初始值，比如修改了 `title` 、 `userInfo` 等，可一键重置，将值初始化为初始状态的值。

```html
<!-- Father组件 -->
<template>
  <h1>标题：{{ user.title }}</h1>
  <h1>姓名：{{ user.userInfo.name }}</h1>
  <h1>水果：{{ user.fruits }}</h1>
  <button @click="handleChange">修改</button>
  <button @click="handleReset">重置</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  // 通过触发 $state 替换整个 state
  user.$state = {
    title: '学习 Pinia',
    userInfo: {
      name: '李四',
      age: 50,
    },
    fruits: [
      {
        name: '菠萝',
        price: 10,
      },
      {
        name: '芒果',
        price: 20,
      },
    ],
  }
}

// 定义 重置 store 的方法
const handleReset = () => user.$reset()
</script>
```

## 订阅 `State`

通过 `store` 的 `$subscribe()` 方法监听 `state` 及其变化，类似于 `Vuex` 的 `subscribe` 方法。与常规 `watch()` 相比，使用 `$subscribe()` 的优点是，在 `patch` 之后，`subscribe` 只会触发一次。

### 基本语法

`$subscribe()` 函数接收两个参数：

- `callback`：`state` 变化所触发的监听方法。

- `options`：配置项（可选）。

```ts
user.$subscribe(callback, [options])
```

### 使用方法

当点击 `修改` 按钮后，`user.title` 发生改变，`$subscribe()` 方法将会触发。

```html
<!-- Father组件 -->
<template>
  <h1>标题：{{ user.title }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  user.$patch((state) => {
    state.title = '学习 Pinia'
  })
}

// 使用 $subscribe 方法订阅 state
user.$subscribe((mutation, state) => {
  console.log('mutation', mutation)
  console.log('state', state)
})
</script>
```

### `callback` 参数说明

`user.$subscribe(callback, [options])` 中 `callback` 包含 `mutation` 和 `state` 两个参数。

- **`mutation`** 包含3个值：
    - `type` : 操作类型 `'direct' | 'patch object' | 'patch function'`。
    
    - `storeId` : 操作的 `store` 的 id。例如：`user.ts` 文件中的 `user`。

    - `events` : 操作的事件详情，包括针对的数据、新值、旧值等。

- **`state`** : `Proxy` 类型的对象，也就是 `store` 中修改后的 `state`。

### `State` 订阅与组件分离

默认情况下，状态订阅绑定到添加它们的组件（如果store是在组件的setup()中）。也就是说，当卸载组件时，它们将自动删除。如果要在卸载组件后保留它们，可将 `{detached:true}` 作为第二个参数传递，以从当前组件分离state订阅。

```ts
user.$subscribe(callback, { detached: true })
```

**不设置 `{ detached: true }`**

当 `Children` 组件被卸载后，订阅也将自动删除，在 `Father` 组件中修改 `state` 将不会被监听。如下：

```html
<!-- Father组件 -->
<template>
  <Children v-if="show" />
  <hr />
  <h1>父组件</h1>
  <!-- 先卸载组件再点击修改 state -->
  <button @click="handleUnmounted">卸载Children组件</button>
  <button @click="handleChange">修改state</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Children from './Children.vue'
import useUserStore from '../store/user'
const user = useUserStore()
const show = ref(true)
// 点击卸载组件
const handleUnmounted = () => {
  show.value = false
}

// 点击修改 state 的方法
const handleChange = () => {
  user.$patch((state) => {
    state.title = '学习 Pinia'
  })
}
</script>
```

```html
<!-- Children组件 -->
<template>
  <h1>标题：{{ user.title }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  user.$patch((state) => {
    state.title = '学习 Pinia'
  })
}

// 使用 $subscribe 方法订阅 state
user.$subscribe(
  (mutation, state) => {
    console.log('mutation', mutation)
    console.log('state', state)
  },
)
</script>
```
上述例子可以看出，当 `Children` 组件被卸载后，再点击 `修改state` 按钮，控制台中不会有任何打印信息，也就是说 `Children` 组件中的 `17-22` 行代码不会被执行，随着组件被卸载，订阅被自动删除了。

**设置 `{ detached: true }`**

因为 `Children` 组件中的 `user.$subscribe()` 设置了 `{ detached: true }`，所以当 `Children` 组件被卸载后依然会被订阅监听，不会被自动删除，订阅与组件分离了。

```html
<!-- Father组件 -->
<template>
  <Children v-if="show" />
  <hr />
  <h1>父组件</h1>
  <button @click="handleUnmounted">卸载Children组件</button>
  <button @click="handleChange">修改state</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Children from './Children.vue'
import useUserStore from '../store/user'
const user = useUserStore()
const show = ref(true)
// 点击卸载组件
const handleUnmounted = () => {
  show.value = false
}

// 点击修改 state 的方法
// 执行后 因为子组件中的 user.$subscribe() 设置了 detached: true，所以依然会被监听
const handleChange = () => {
  user.$patch((state) => {
    state.title = '学习 Pinia'
  })
}
</script>
```

```html
<!-- Children组件 -->
<template>
  <h1>标题：{{ user.title }}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup lang="ts">
// 导入 user 模块
import useUserStore from '../store/user'
const user = useUserStore()
const handleChange = () => {
  user.$patch((state) => {
    state.title = '学习 Pinia'
  })
}

// 使用 $subscribe 方法订阅 state
user.$subscribe(
  (mutation, state) => {
    console.log('mutation', mutation)
    console.log('state', state)
  },
  // 此订阅将在卸载组件后保留
  { detached: true },
)
</script>
```

上述例子可以看出，当 `Children` 组件被卸载后，再点击 `修改state` 按钮，控制台会输出 `mutation` 和 `state` 的打印信息，也就是说 `Children` 组件中的 `17-24` 行代码被执行了，随着组件被卸载，订阅不会被自动删除，订阅与组件分离了。
