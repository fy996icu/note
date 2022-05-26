---
title: Actions
toc: menu
order: 4
---

<BackTop></BackTop>

# Actions

`Actions` 相当于组件中的 `方法`，可以用 `defineStore()` 中的 `actions` 属性定义，非常适合定义业务逻辑，**并且支持同步和异步**。

## 定义 `actions`

将 `user.ts` 修改为以下内容：添加 `actions` 属性，定义 `increment` 和 `asyncIncrement` 方法，分别为同步和异步。

```ts
// user.ts
import { defineStore } from 'pinia';
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 0,
    };
  },
  actions: {
    // 累计 count， 通过 this 访问到 state
    // 同步
    increment() {
      this.count++;
    },
    // 异步
    asyncIncrement() {
      setTimeout(() => this.count++, 500);
    },
  },
});
```

使用 `async/await` 的语法：

```ts
// user.ts
import { defineStore } from 'pinia';
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 0,
    };
  },
  actions: {
    async login(account, pwd) {
      const { data } = await api.login(account, pwd);
      return data;
    },
  },
});
```

## 使用 `actions`

计数器 `count` 累加：

```html
<!-- Father组件 -->
<template>
  <!-- 点击按钮后 count 累加 -->
  <h1>计数器：{{ user.count }}</h1>
  <button @click="user.increment">点击累计计数器</button>
  <button @click="user.asyncIncrement">异步点击累计计数器</button>
</template>
<script setup lang="ts">
  import useUserStore from '../store/user';
  const user = useUserStore();
</script>
```

## 访问其他 `actions`

`actions` 间的相互调用，直接用 `this` 访问即可。

```ts
// user.ts
import { defineStore } from 'pinia';
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 0,
    };
  },
  actions: {
    // 累计 count， 通过 this 访问到 state
    // 同步
    increment() {
      this.count++;
    },
    // 异步
    asyncIncrement() {
      // 通过 this 访问 increment 方法
      setTimeout(() => this.increment(), 500);
    },
  },
});
```

## 访问其他 `store` 的 `actions`

在 `actions` 里调用其他 `store` 里的 `actions` 也比较简单，引入对应的 `store` 后即可访问其内部的方法了。

```ts
// user.ts
import { useOtherStore } from './other-store';
import { defineStore } from 'pinia';
export default defineStore('user', {
  actions: {
    async login(account, pwd) {
      const { data } = await api.login(account, pwd);
      const useOther = useOtherStore();
      useOther.setData(data); // 调用 aother-store 里的 actions 方法
      return data;
    },
  },
});
```

## 传递参数给 `actions`

要想给 `actions` 传递参数，像普通方法那样传递就行 `fn(参数)`。

```ts
// user.ts
import { defineStore } from 'pinia';
export default defineStore('user', {
  state: () => {
    // 定义数据
    return {
      title: 'Pinia',
      userInfo: {
        name: '张三',
        age: 30,
      },
      count: 0,
    };
  },
  actions: {
    // 实现 count 加 payload
    increment(payload: number) {
      this.count += payload;
    },
  },
});
```

组件中使用：

```html
<!-- Father组件 -->
<template>
  <!-- 点击按钮后 count 每次累加 5 -->
  <h1>计数器：{{ user.count }}</h1>
  <button @click="user.increment(5)">点击计数器加5</button>
</template>
<script setup lang="ts">
  import useUserStore from '../store/user';
  const user = useUserStore();
</script>
```

## 订阅 `actions`

使用 `store.$onAction()` 订阅 `actions`，传递给它的回调函数在 `actions` 之前执行， `after` 在 `actions` resolves 之后执行，`onError` 在 `actions` 抛出异常和错误的时候执行。

```html
<!-- Father组件 -->
<template>
  <!-- 点击按钮后 count 每次累加 5 -->
  <h1>计数器：{{ user.count }}</h1>
  <button @click="user.increment(5)">点击计数器加5</button>
  <!-- 点击后再执行 increment 方法监听不会执行 -->
  <button @click="clearSubscribe">手动清除actions监听</button>
</template>
<script setup lang="ts">
  import useUserStore from '../store/user';
  const user = useUserStore();

  // 订阅 actions
  const unsubscribe = user.$onAction(
    ({
      name, // action 的名字，如：increment
      store, // 数据仓库
      args, // 传递给 action 的参数
      after, // 在action resolves之后执行
      onError, // 在action抛出异常和错误的时候执行。
    }) => {
      const startTime = Date.now();

      console.log('数据仓库：', store);

      console.log(`执行的actions方法名： "${name}" 和 参数： [${args.join(', ')}].`);

      after((result) => {
        console.log(
          `完成执行的actions方法名 "${name}"。 用时： ${
            Date.now() - startTime
          }ms.\nResult: ${result}.`,
        );
      }),
        onError((error) => {
          console.warn(`失败 "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`);
        });
    },
  );

  // 手动删除监听
  const clearSubscribe = () => unsubscribe();
</script>
```

`$onAction` 一般是在组件的 `setup` 建立，它会随着组件的 `unmounted` 而自动取消。如果你不想让它取消订阅，可以将第二个参数设置为 `true`：

```ts
const unsubscribe = user.$onAction(callback, true);
```

## 在 `options API` 中使用

使用 `mapActions` 访问 `store` 中的数据。

```ts
import { mapActions } from 'pinia'
import useUserStore from '../store/user'

export default {
  methods: {
    ...mapActions(useUserStore, ['increment'])
    ...mapActions(useUserStore, { myOwnName: 'doubleCounter' }),
  },
}

```
