---
group:
  title: 快速上手
order: 9
---

<BackTop></BackTop>

# 新的组件

## Fragment(片断)

- 在 Vue2 中: 组件必须有一个根标签。

- 在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 `Fragment` 虚拟元素中。

- 好处: 减少标签层级, 减小内存占用。

### 2.x 语法

```html
<template>
  <div>
    <h1>需要根标签</h1>
  </div>
</template>
```

### 3.x 语法

```html
<template>
  <h1>不需要根标签</h1>
  <h2>内部会将多个标签包含在一个Fragment虚拟元素中</h2>
</template>
```

## Teleport(瞬移)

 <Alert type="info">
  Teleport 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下呈现 HTML，而不必求助于全局状态或将其拆分为两个组件。
</Alert>

`Teleport` 组件的作用主要用来将模板内的 DOM 元素移动到其他位置。

场景：像 `modals`，`toast` 等这样的元素，很多情况下，我们将它完全的和我们的 `Vue` 应用的 `DOM` 完全剥离，管理起来反而会方便容易很多，同时我们依然可以使用组件的 `data` 或 `props`。

### to

`to` - `string` 类型 : 必须是有效的查询 `选择器` 或 `HTMLElement` (如果在浏览器环境中使用)。指定将在其中移动 `teleport` 内容的目标元素。

```html
<!-- 正确 -->
<teleport to="#some-id" />
<teleport to=".some-class" />
<teleport to="[data-teleport]" />

<!-- 错误 -->
<teleport to="h1" />
<teleport to="some-string" />
```

```html
<template>
  <teleport to="body">
    <div class="box">将此节点渲染在app外，body内</div>
  </teleport>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>
```

`to="body"` 表示将该 `teleport` 组件插槽部分渲染在 `body` 内。

### disabled

`disabled` - `boolean` 类型：此可选属性可用于禁用 `teleport` 的功能，这意味着其插槽内容将不会移动到任何位置，而是在你在周围父组件中指定了 `teleport` 的位置渲染。

```html
<template>
  <teleport to="body" :disabled="true">
    <div class="box">此节点不会被渲染到app外，body内</div>
  </teleport>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>
```

设置了 `disabled="true"` 时 `to="body"` 将会失效被禁用。

<Alert type="warning">
  请注意，这将移动实际的 DOM 节点，而不是被销毁和重新创建，并且它还将保持任何组件实例的活动状态。所有有状态的 HTML 元素都将保持其状态。
</Alert>

### 与 Vue components 一起使用

如果 `<teleport>` 包含 `Vue` 组件，则它仍将是 `<teleport> `父组件的逻辑子组件。

```html
<!-- Father组件 -->
<template>
  <h1>父组件</h1>
  <teleport to="body">
    <!-- 传递给子组件一个 msg="hello"-->
    <Children msg="hello" />
  </teleport>
</template>

<script lang="ts">
  import Children from './Children.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      return {};
    },
  });
</script>
```

```html
<!-- Children组件 -->
<template>
  <h1>子组件</h1>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    // 接收父组件传递过来的 msg
    props: ['msg'],
    setup() {
      return {};
    },
  });
</script>
```

即使 `Father` 组件渲染在 `app` 内，`Children` 组件被 `teleport` 渲染到了 `app` 外 `body` 内，`Children` 组件依然是 `Father` 组件的那一套逻辑，依然能获取到父组件传递过来的 `props` 中的 `msg`。

在这种情况下，即使在不同的地方渲染 `Children`，它仍将是 `Father` 的子级，并将从中接收 `msg` prop。

这也意味着来自父组件的注入会正常工作，在 `Vue Devtools` 中你会看到 `子组件嵌套在父组件之下`，而不是出现在他会被实际移动到的位置。

### 同一容器使用多个 teleport

多个 `<teleport>` 组件可以被挂载到同一个目标元素。挂载的顺序是一个一个追加，后挂载的将会位于先挂在的后面。

```html
<teleport to="#modals">
  <div>A</div>
</teleport>
<teleport to="#modals">
  <div>B</div>
</teleport>

<!-- result-->
<div id="modals">
  <div>A</div>
  <div>B</div>
</div>
```

## Suspense(不确定的)

`<suspense>` 组件有两个插槽。它们都只接收一个直接子节点。`default` 插槽里的节点会尽可能展示出来。如果不能，则展示 `fallback` 插槽里的节点。

### 异步组件 + Suspense

```html
<template>
  <Suspense>
    <template #default>
      <Children />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent } from 'vue';
  // 导入异步组价
  const Children = defineAsyncComponent(() => import('./Children.vue'));
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      return {};
    },
  });
</script>
```

`Children` 组件未加载完成时，将触发加载 `#fallback` 插槽中的 `Loading...` 效果。

### Promise + Suspense

另一个触发 `fallback` 的方式是让后代组件从 `setup` 函数中返回一个 `Promise`。通常这是通过 `async` 实现的，而不是显式地返回一个 `Promise`。

**Father 组件**

```html
<!-- Father组件 -->
<template>
  <Suspense>
    <template #default>
      <Children />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
  // 导入普通组价
  import Children from './Children.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      return {};
    },
  });
</script>
```

**Children 组件**

```html
<!-- Children组件 -->
<template>
  <div>姓名：{{ userInfo.name }}</div>
  <div>年龄：{{ userInfo.age }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    async setup() {
      // userInfo是一个Promise
      const userInfo = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name: '张三',
            age: 30,
          });
        }, 2000);
      });
      return {
        // 返回一个Promise数据
        userInfo,
      };
    },
  });
</script>
```

`Children` 组件中返回了一个 `Promise` 数据，初始化 `Father` 组件会显示 `Loading...`，当 `Children` 组件执行 `resolve` 后， `Father` 组件才会隐藏 `Loading...` 从而显示 `Children` 组件的内容。

[点击查看](https://v3.cn.vuejs.org/guide/migration/suspense.html)官方更多详情。
