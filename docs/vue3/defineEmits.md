---
title: defineEmits
toc: menu
order: 16
---

<BackTop></BackTop>

# defineEmits

在 `<script setup>` 中 声明 `emit` ，必须使用 `defineEmits` API，这也是一个[宏命令](/vue3/setup/define-props#编译器宏命令)。同样可采用 [运行时声明](/vue3/setup/define-props#运行时声明) 和 [类型声明](/vue3/setup/define-props#类型声明)，在类型声明下 `emit` 将具备完美的类型推断。

## 基本语法

`defineEmits` 接收一个数组，数组里面是自定义事件名称。

```html
<script setup lang="ts">
  const emit = defineEmits(['getdata']);
</script>
```

## 运行时声明

<Alert type="info">
  运行时声明没有任何类型检查，只有在运行时才会发现错误。
</Alert>

```html
<!-- Father组件 -->
<template>
  <!-- 向子组件绑定一个自定义事件 getdata -->
  <Children @getdata="handleData" />
</template>
<script setup lang="ts">
  import Children from './Children.vue';

  // 用于接收子组件传递过来的数据
  const handleData = (data) => {
    // 输出：子组件传递过来的数据 {name: '张三', age: 30}
    console.log('子组件传递过来的数据', data);
  };
</script>
```

```html
<!-- Children组件 -->
<template>
  <h1>子组件</h1>
  <button @click="sentData">向父组件发送数据</button>
</template>

<script setup lang="ts">
  const data = { name: '张三', age: 30 };
  // 使用 defineEmits 接收一个数组，数组里面是自定义事件名称
  const emit = defineEmits(['getdata']);

  // 定义一个事件，emit用于触发自定义事件 getdata，并传递数据 data
  const sentData = () => {
    emit('getdata', data);
  };
</script>
```

## 类型声明

使用类型声明可以完美的支持 IDE 的类型推断和检查。

```html
<!-- Father组件 -->
<template>
  <!-- 向子组件绑定一个自定义事件 getdata、getmsg -->
  <ChildrenBox @getdata="handleData" @getmsg="handleMsg" />
</template>
<script setup lang="ts">
  import ChildrenBox from './ChildrenBox.vue';

  // 用于接收子组件传递过来的数据
  const handleData = (data: any) => {
    // 输出：子组件传递过来的数据 {name: '张三', age: 30}
    console.log('子组件传递过来的数据', data);
  };
  const handleMsg = (data: any) => {
    // 输出：子组件传递过来的数据 Hello
    console.log('子组件传递过来的数据', data);
  };
</script>
```

```html
<!-- Children组件 -->
<template>
  <h1>子组件</h1>
  <button @click="sentData">向父组件发送数据</button>
</template>

<script setup lang="ts">
  // 约束 data 的类型
  interface User {
    name: string;
    age: number;
  }
  const data = { name: '张三', age: 30 };
  const msg = 'Hello';

  const emit = defineEmits<{
    // 约束自定义事件getdata，参数data类型为 User，返回值：void
    (e: 'getdata', data: User): void;
    // 约束自定义事件getmsg，参数data类型为 string，返回值：void
    (e: 'getmsg', data: string): void;
  }>();

  // 定义一个事件，emit用于触发自定义事件 getdata 和 getmsg，并分别传递数据
  const sentData = () => {
    // 此处的data类型必须是 User类型，不然会报错
    emit('getdata', data);

    // 此处的msg类型必须是 string类型，不然会报错
    emit('getmsg', msg);
  };
</script>
```

## 注意事项

跟 `defineProps` 一样，运行时声明和类型声明式同样不可同时使用，且类型声明只能用于在 `ts` 环境下。
