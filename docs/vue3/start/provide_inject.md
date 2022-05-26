---
group:
  title: 快速上手
order: 5
---

<BackTop></BackTop>

# provide 与 inject

## 使用场景

`provide` 与 `inject` 可实现跨层级组件间通信（祖孙间通信）。

![provide 与 inject](https://v3.cn.vuejs.org/images/components_provide.png)

例如，我们有这样的层次结构：

```text
Root
└─ Father
   ├─ Brother
   └─ Children
      ├─ Grandson
      └─ GrandsonBrother
```

通过 `provide` 与 `inject` 我们就可以在 `Father` 组件的后代中跨级通信。

## Provide

在 `setup` 中使用 `provide` 需要从 `vue` 中导入 `provide` 方法。

`provide` 方法接收两个参数：

- name：(String)类型-相当于取一个名字。

- value：需要传递给后代组件的值。

```js
provide(name, value);
```

示例：`Father` 组件将计数器 `count` 传递给后代组件。

```html
<!-- Father组件 -->
<template>
  <h1>Father组件</h1>
  <h2>计数器：{{ count }}</h2>
  <hr />
  <Children />
</template>

<script lang="ts">
  // 导入 Children组件
  import Children from './Children.vue';
  import { defineComponent, provide } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      const count = 10;
      // 通过 provide方法将 count传递给后代组件
      provide('count', count);

      return {
        count,
      };
    },
  });
</script>
```

这样 `Father` 组件就通过 `provide` 方法将 `count` 传递给了后代组件，后代组件通过 `inject` 就可以获取到祖先组件传递的 `count` 。

## Inject

在 `setup` 中使用 `inject` 需要从 `vue` 中导入 `inject` 方法。

`inject` 方法接收两个参数：

- name：`provide` 设置的 `name` 值。

- defaultValue(可选)：默认值。

- 返回值：祖先组件通过 `provide` 方法传递下来的值。

```js
const value = inject(name, defaultValue);
```

后代组件通过 `inject` 方法获取祖先组件传递的值。

示例：后代组件 `Children` 和 `Grandson` 获取 `Father` 组件传递的 `count`。

**Children 组件**

```html
<!-- Children组件 -->
<template>
  <h1>Children组件</h1>
  <h2>计数器：{{ count }}</h2>
  <hr />
  <Grandson />
</template>

<script lang="ts">
  // 导入Grandson组件
  import Grandson from './Grandson.vue';
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    components: {
      Grandson,
    },
    setup() {
      // 通过 inject方法获取 count
      const count = inject('count');
      return {
        count,
      };
    },
  });
</script>
```

**Grandson 组件**

```html
<!-- Grandson组件 -->
<template>
  <h1>Grandson组件</h1>
  <h2>计数器：{{ count }}</h2>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    setup() {
      // 通过 inject方法获取 count
      const count = inject('count');
      return {
        count,
      };
    },
  });
</script>
```

此时后代组件就能使用祖先组件传递的 `count` 的值了，`Father`、`Children`、`Grandson`组件中，均显示：`计数器：10`。

## 添加响应式

为了增加 `provide` 值和 `inject` 值之间的响应性，我们可以在 `provide` 值时使用 `ref` 或 `reactive`。

**Father 组件**

```html
<!-- Father组件 -->
<template>
  <h1>Father组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
  <hr />
  <Children />
</template>

<script lang="ts">
  // 导入 Children组件
  import Children from './Children.vue';
  import { defineComponent, provide, reactive, ref } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      const count = ref(0);
      const userInfo = reactive({
        name: '张三',
        age: 30,
      });

      // 通过 provide方法将 count、userInfo传递给后代组件，具有响应式
      provide('count', count);
      provide('userInfo', userInfo);

      // 修改计数器
      const setCount = () => {
        count.value++;
      };
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

**Children 组件**

```html
<!-- Children组件 -->
<template>
  <h1>Children组件</h1>
  <h2>计数器：{{ count }}</h2>
  <hr />
  <Grandson />
</template>

<script lang="ts">
  // 导入Grandson组件
  import Grandson from './Grandson.vue';
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    components: {
      Grandson,
    },
    setup() {
      // 通过 inject方法获取 count、userInfo
      const count = inject('count');
      const userInfo = inject('userInfo');
      return {
        count,
        userInfo,
      };
    },
  });
</script>
```

**Grandson 组件**

```html
<!-- Grandson组件 -->
<template>
  <h1>Grandson组件</h1>
  <h2>计数器：{{ count }}</h2>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    setup() {
      // 通过 inject方法获取 count、userInfo
      const count = inject('count');
      const userInfo = inject('userInfo');
      return {
        count,
        userInfo,
      };
    },
  });
</script>
```

此时点击 `修改计数器` 按钮，后代组件中的计数器 `count` 也会同步更新。

## 不具有响应式的情况

<Alert type="warning">
  下面的传递方式，后代组件所得到的 count 不具有响应式。
</Alert>

```html
<template>
  <h1>Father组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
  <hr />
  <Children />
</template>

<script lang="ts">
  // 导入 Children组件
  import Children from './Children.vue';
  import { defineComponent, provide, ref } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      const count = ref(0);
      // 通过 provide方法将 count.value传递给后代组件，count将不是响应式的
      provide('count', count.value);

      // 修改计数器
      const setCount = () => {
        count.value++;
      };
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

通过传递 `count.value` 的值不具有响应式，相当于传递了一个普通值。

```js
provide('count', count.value);
```

## 修改响应式

当使用响应式 `provide / inject` 值时，建议尽可能将对响应式 `property` 的所有修改限制在定义 `provide` 的组件内部。

例如：在 `Children` 和 `Grandson` 组件中需要修改 `count` 的值。我们就可以在 `Father` 组件中添加一个修改 `count` 的方法 `setCount` 再将 `setCount` 方法通过 `provide` 传递给后代组件。

**Father 组件**

```html
<!-- Father组件 -->
<template>
  <h1>Father组件</h1>
  <h2>计数器：{{ count }}</h2>
  <hr />
  <Children />
</template>

<script lang="ts">
  // 导入 Children组件
  import Children from './Children.vue';
  import { defineComponent, provide, ref } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      const count = ref(0);
      // 修改计数器
      const setCount = () => {
        count.value++;
      };
      // 通过 provide方法将 count、setCount传递给后代组件，具有响应式
      provide('count', count);
      provide('setCount', setCount);

      return {
        count,
        setCount,
      };
    },
  });
</script>
```

**Children 组件**

```html
<!-- Children组件 -->
<template>
  <h1>Children组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
  <hr />
  <Grandson />
</template>

<script lang="ts">
  // 导入Grandson组件
  import Grandson from './Grandson.vue';
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    components: {
      Grandson,
    },
    setup() {
      // 通过 inject方法获取 count 和 setCount方法
      const count = inject('count');
      const setCount = inject('setCount');
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

**Grandson 组件**

```html
<!-- Grandson组件 -->
<template>
  <h1>Grandson组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    setup() {
      // 通过 inject方法获取 count 和 setCount方法
      const count = inject('count');
      const setCount = inject('setCount');
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

## 禁止修改

如果要确保通过 `provide` 传递的数据不会被 `inject` 的组件更改，我们建议对提供者的 `property` 使用 `readonly`。

```js
provide(name, readonly(value));
```

**Father 组件**

```html
<!-- Father组件 -->
<template>
  <h1>Father组件</h1>
  <h2>计数器：{{ count }}</h2>
  <hr />
  <Children />
</template>

<script lang="ts">
  // 导入 Children组件
  import Children from './Children.vue';
  import { defineComponent, provide, readonly, ref } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      const count = ref(0);

      // 通过 provide方法将 count传递给后代组件，后代组件只能只读count
      provide('count', readonly(count));
      return {
        count,
      };
    },
  });
</script>
```

**Children 组件**

```html
<!-- Children组件 -->
<template>
  <h1>Children组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
  <hr />
  <Grandson />
</template>

<script lang="ts">
  // 导入Grandson组件
  import Grandson from './Grandson.vue';
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    components: {
      Grandson,
    },
    setup() {
      // 通过 inject方法获取 count
      const count = inject('count');
      const setCount = () => {
        //警告：Set operation on key "value" failed: target is readonly.
        count.value++;
      };
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

**Grandson 组件**

```html
<!-- Grandson组件 -->
<template>
  <h1>Grandson组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    setup() {
      // 通过 inject方法获取 count
      const count = inject('count');
      const setCount = () => {
        //警告：Set operation on key "value" failed: target is readonly.
        count.value++;
      };
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

通过 `readonly` 方法处理后，当后代 `inject` 的组件尝试修改 `provide` 传递的数据时不会起作用，并且会在控制台输出警告：`Set operation on key "value" failed: target is readonly.`

**<font v-pre color="red">使用 readonly 的情况下又要允许 inject 的组件中修改 provide 传递的值怎么办？</font>**

使用 `readonly` 是为了防止 `inject` 的组件添加修改逻辑来修改数据，但是我们可以将修改逻辑定义在 `provide` 的组件内，然后通过 `provide` 方法将修改函数传递给后代组件。

**Father 组件**

```html
<!-- Father组件 -->
<template>
  <h1>Father组件</h1>
  <h2>计数器：{{ count }}</h2>
  <hr />
  <Children />
</template>

<script lang="ts">
  // 导入 Children组件
  import Children from './Children.vue'
  import { defineComponent, provide, readonly, ref } from 'vue'
  export default defineComponent({
    components: {
      Children,
    },
    const count = ref(0)
    const setCount = () => {
      count.value++
    }
    // 通过 provide方法将 count、setCount传递给后代组件
    // 后代组件只能通过传递过去的 setCount方法修改 count
    provide('count', readonly(count))
    provide('setCount', setCount)
    return {
      count,
    }
  })
</script>
```

**Children 组件**

```html
<!-- Children组件 -->
<template>
  <h1>Children组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
  <hr />
  <Grandson />
</template>

<script lang="ts">
  // 导入Grandson组件
  import Grandson from './Grandson.vue';
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    components: {
      Grandson,
    },
    setup() {
      // 通过 inject方法获取 count、setCount
      // count 是只读的，只能通过 setCount方法修改
      const count = inject('count');
      const setCount = inject('setCount');
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

**Grandson 组件**

```html
<!-- Grandson组件 -->
<template>
  <h1>Grandson组件</h1>
  <h2>计数器：{{ count }}</h2>
  <button @click="setCount">修改计数器</button>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue';
  export default defineComponent({
    setup() {
      // 通过 inject方法获取 count、setCount
      // count 是只读的，只能通过 setCount方法修改
      const count = inject('count');
      const setCount = inject('setCount');
      return {
        count,
        setCount,
      };
    },
  });
</script>
```
