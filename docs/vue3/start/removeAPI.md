---
group:
  title: 快速上手
order: 11
---

<BackTop></BackTop>

# 被移除的 API

## `keyCode` 修饰符

不再支持使用数字 (即键码) 作为 `v-on` 修饰符，不再支持 `config.keyCodes`。

### `KeyboardEvent.keyCode` 废除

<Alert type="error">
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。
</Alert>

应该尽量避免使用它；它已经被弃用了一段时间。相反的，如果它在你的浏览器中被实现了的话，你应该使用 `KeyboardEvent.code`。 无语的是，有一些浏览器还是没有实现它，所以你在使用之前必须要小心，确认你所使用的那个被所有目标浏览器所支持。

[更多详情查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/keyCode)

### 2.x 语法

在 Vue 2 中，`keyCodes` 可以作为修改 `v-on` 方法的一种方式。

比如绑定一个 `回车` 键修饰符：在按下 `回车键` 时就可以触发绑定的 `enter` 事件。

```html
<!-- 键码版本 -->
<input v-on:keyup.13="enter" />

<!-- 别名版本 -->
<input v-on:keyup.enter="enter" />
```

也可以通过全局的 `config.keyCodes` 选项定义自己的别名：将功能键 `f1` 的键码设置为 `112`。

```js
Vue.config.keyCodes = {
  f1: 112,
};
```

```html
<!-- 键码版本 -->
<input v-on:keyup.112="help" />

<!-- 自定义别名版本 -->
<input v-on:keyup.f1="help" />
```

### 3.x 语法

因 `KeyboardEvent.keyCode` 从 `web` 标准中废除，所以再继续支持它也没有啥意义了。所以在 Vue3 中对任何要用作修饰符的键使用 `kebab-cased` (短横线) 名称。

```html
<!-- Vue 3 在 v-on 上使用按键修饰符 -->
<input v-on:keyup.page-down="nextPage" />

<!-- 同时匹配 q 和 Q -->
<input v-on:keypress.q="quit" />
```

如果使用符号键，例如 `,` 键：

```html
<input v-on:keypress.,="commaPress" />
```

语法的限制导致某些特定字符无法被匹配，比如 `"`、`'`、`/`、`=`、`>` 和 `.`。对于这些字符，你应该在监听器内使用 `event.key` 代替。

## 移除 `filter`

在 Vue 3 中，移除了组件的 `filters` 选项，可以使用 `methods` 的或者 `computed` 来进行替代：

```html
<!-- Vue2 -->
<template>
  <p>{{ accountBalance | currencyUSD }}</p>
</template>
<script>
  export default {
    filters: {
      currencyUSD(value) {
        return '$' + value;
      },
    },
  };
</script>
```

替换为如下：

```html
<!-- Vue3 -->
<template>
  <p>{{ accountInUSD }}</p>
</template>

<script>
  export default {
    props: {
      accountBalance: {
        type: Number,
        required: true,
      },
    },
    computed: {
      accountInUSD() {
        return '$' + this.accountBalance;
      },
    },
  };
</script>
```

## 移除 `$on`、`$off` 和 `$once` 方法

在 Vue2.x 中可以通过 `EventBus` 的方法来实现组件通信：

```js
var EventBus = new Vue();
Vue.prototype.$EventBus = EventBus;

/* 业务代码 */
// 监听一个事件
this.$EventBus.$on('custom-event', () => {});

// 触发一个事件
this.$EventBus.$emit('custom-event');

// 解除事件监听
this.$EventBus.$off('custom-event');
```

这种用法在 Vue 3 中就不行了，在 Vue 3 中 移除了 `$on`、`$off` 等方法，而是推荐使用 [mitt](https://github.com/developit/mitt) 方案来代替：

```js
import mitt from 'mitt';
const emitter = mitt();

// 监听一个事件
emitter.on('foo', (e) => console.log('foo', e));

// 监听所有事件
emitter.on('*', (type, e) => console.log(type, e));

// 触发一个事件
emitter.emit('foo', { a: 'b' });

// 清除所有事件
emitter.all.clear();

// 使用处理函数
function onFoo() {}
emitter.on('foo', onFoo); // 监听
emitter.off('foo', onFoo); // 解除监听
```

## 移除 `$children`

`$children` 实例 `property` 已从 Vue 3.0 中移除，不再支持。

在 Vue2 中 我们需要访问子组件可以使用 `this.$children`:

```html
<template>
  <div>
    <Children />
  </div>
</template>

<script>
  import Children from './Children';

  export default {
    components: {
      Children,
    },
    mounted() {
      console.log(this.$children); // [VueComponent]
    },
  };
</script>
```

在 Vue3 中如果要获取子组件实例，可以使用 `$refs`。

**_此是 Vue3 中使用 Vue2 的写法，不建议这样用：_**

```html
<!-- 此是Vue3 中使用 Vue2 的写法，不建议这样用 -->
<template>
  <div>
    <Children ref="childrenRef" />
  </div>
</template>

<script>
  import Children from './Children';

  export default {
    components: {
      Children,
    },
    mounted() {
      console.log(this.$refs.childrenRef);
    },
  };
</script>
```

**推荐使用：**

```html
<!-- 父组件 -->
<template>
  <Children ref="childrenRef" />
</template>

<script lang="ts">
  import Children from './Children.vue';
  import { defineComponent, onMounted, ref } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      // 创建 ref
      const childrenRef = ref(null);
      // 组件挂载完成
      onMounted(() => {
        // 访问子组件实例
        console.log(childrenRef.value);
      });
      return {
        childrenRef,
      };
    },
  });
</script>
```

## 移除 `propsData`

`propsData` 选项之前用于在创建 Vue 实例的过程中传入 `prop`，现在它被移除了。如果想为 Vue 3 应用的根组件传入 `prop`，请使用 `createApp` 的第二个参数。

在 2.x 中，我们可以在创建 Vue 实例的时候传入 prop：

```js
const Comp = Vue.extend({
  props: ['username'],
  template: '<div>{{ username }}</div>',
});

new Comp({
  propsData: {
    username: 'Evan',
  },
});
```

在 3.x 中，如果你需要在实例创建时向根组件传入 prop，你应该使用 `createApp` 的第二个参数：

```js
const app = createApp(
  {
    props: ['username'],
    template: '<div>{{ username }}</div>',
  },
  { username: 'Evan' },
);
```

## 移除 `$destroy`

用户不应再手动管理单个 Vue 组件的生命周期。

## 移除 `$set`、`$delete`

全局函数 `set` 和 `delete` 以及实例方法 `$set` 和 `$delete`。基于代理的变化检测已经不再需要它们了。

**在 Vue2.x 中**

由于受 [Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 的限制，在 Vue2 中动态给对象添加或者删除一个属性，不会被代理监测到，虽然能添加或删除成功，但是页面不会更新，需要使用 `$set` 或 `$delete`，此属性才会是响应式的。

```html
<template>
  <div>{{ userInfo }}</div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {
          name: '张三',
          age: 30,
        },
      };
    },
    created() {
      // 动态给 userInfo 添加 sex 属性，并赋值 "男"
      this.$set(this.userInfo, 'sex', '男');

      // 动态删除 userInfo 的 age 属性
      this.$delete(this.userInfo, 'age');

      console.log(this.userInfo);
    },
  };
</script>
```

**在 Vue3.x 中**

在 Vue3.x 中使用的是 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。可以直接动态新增或者删除对象属性了。

```html
<template> {{ userInfo }} </template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    setup() {
      const userInfo = reactive({
        name: '张三',
        age: 30,
      });
      // 添加属性 sex 并赋值为 "男"
      userInfo.sex = '男';

      // 删除属性 age
      delete userInfo.age;

      // 响应式的
      console.log(userInfo);
      return {
        userInfo,
      };
    },
  });
</script>
```

**TypeScript 中**

```html
<template> {{ userInfo }} </template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    setup() {
      interface User {
        name: string;
        age?: number;
        [key: string]: any;
      }
      const userInfo = reactive<User>({
        name: '张三',
        age: 30,
      });
      // 添加属性 sex 并赋值为 "男"
      userInfo.sex = '男';

      // 删除属性 age
      delete userInfo.age;

      // 响应式的
      console.log(userInfo);
      return {
        userInfo,
      };
    },
  });
</script>
```
