---
group:
  title: Script Setup
order: 3
---

<BackTop></BackTop>

# defineProps

## 运行时声明和类型声明

在描述如何在 `<script setup>` 使用 props 前，让我们先了解两个概念，运行时声明和类型声明。

### 运行时声明

顾名思义，运行时的声明，也就是需要在运行中才会生效的一种声明。

在这里，运行时声明指对于 `props` 的类型的声明，这种声明方式 IED 是无法检测和给出提示的，只有在运行后才会给出提示，例如： 这是 options API 的 `props` 写法，也就是运行时声明。

```js
props: {
  height: Number,
  title: String,
}
```

### 类型声明

在这里类型声明指基于 `ts` 的类型检查，对 `props` 进行类型的约束，因此，要使用类型声明，需要基于 `ts`，即 `<script setup lang="ts">`。

## 编译器宏命令

编译器宏命令(Compiler Macros)

vue 官网中提到了这样的一个概念 —— `Compiler Macros`（翻译过来是编译器宏命令、或者编译时宏命令）。

维基百科对 `宏` 的定义如下：宏是一种批量处理的称谓。计算机科学里的宏是一种抽象，它根据一系列预定义的规则替换一定的文本模式。解释器或编译器在遇到宏时会自动进行这一模式替换。绝大多数情况下，“宏”这个词的使用时暗示着将小命令或动作转化为一系列指令。

`<script setup>` 其实是普通的 `<script>` 的语法糖，在运行前会经过一个编译的过程，这个语法糖还提供了一系列的宏命令供开发者使用，在编译的阶段会进行替换。

## 声明 `props`

为了在 `<script setup>` 中 声明 `props` ，必须使用 `defineProps` API，这是一个宏命令，不需要导入，直接可在 `<script setup>` 使用且只能在 `<script setup>` 中使用，有两种方式可以使用这个宏命令类声明 props，`运行时声明` 和 `类型声明式`，不同的方式下使用这个宏命令后 props 将具备不同的类型推断。

### 运行时声明

`defineProps` 运行时声明的基本用法如下，仅支持运行时的校验：

```html
<!-- Father组件 -->
<template>
  <!-- 添加常规属性 msg 和动态属性 count -->
  <Children msg="你好啊" :count="count" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Children from './Children.vue';
  const count = ref(0);
</script>
```

```html
<!-- Children组件 -->
<template>
  <ul>
    <li>{{ msg }}</li>
    <li>{{ count }}</li>
  </ul>
</template>

<script setup lang="ts">
  // 使用 defineProps 宏命令声明 props 不需要导入
  const props = defineProps({
    msg: String,
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  });

  // 输出：{msg: '你好啊', count: 0}
  console.log(props);
</script>
```

子组件编译后的结果：接到的 `props` 直接可在模板中直接使用，这与 vue2.x 是一致的。

```js
/* Analyzed bindings: {
  "msg": "props",
  "count": "props",
  "props": "setup-const"
} */
import { defineComponent as _defineComponent } from 'vue';
import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from 'vue';

const __sfc__ = /*#__PURE__*/ _defineComponent({
  props: {
    msg: String,
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(__props) {
    const props = __props;

    return (_ctx, _cache) => {
      return (
        _openBlock(),
        _createElementBlock('ul', null, [
          _createElementVNode('li', null, _toDisplayString(__props.msg), 1 /* TEXT */),
          _createElementVNode('li', null, _toDisplayString(__props.count), 1 /* TEXT */),
        ])
      );
    };
  },
});
__sfc__.__file = 'App.vue';
export default __sfc__;
```

如上示例：父组件子组件 `Children` 传递了名为 `msg` 数据类型为 `String` 的值和一个名为 `count` 数据类型为 `Number` 的值。

子组件通过 `defineProps` 宏命令声明并约束了 `msg` 数据类型为 `String`；`count` 的数据类型为 `Number`，并且必填，默认值是 `0`。

**<font v-pre color="red">注意事项：</font>** 如果父组件传递给子组件 `Children` 的 props 不满足子组件内部 `defineProps` 宏命令声明并约束的条件，在编辑器里面不会报错，但是在**运行时**会在控制台发出警告：例如我们将父组件传递给子组件的 `count` 改为 `String` 类型的值。

```html
<!-- Father组件 -->
<template>
  <!-- 添加常规属性 msg 和动态属性 count -->
  <Children msg="你好啊" :count="count" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Children from './Children.vue';
  const count = ref('我很好');
</script>
```

由于子组件内部 `count` 接收的必须是一个 `Number` 类型的值，但是我们传递的是 `String` 类型的值，所以运行时控制台发出警告：`Invalid prop: type check failed for prop "count". Expected Number with value NaN, got String with value "我很好". ` （期望的值是数字类型，得到的值却是字符串）

### 类型声明

`defineProps` 类型声明的基本用法如下，完美的支持 IDE 的类型推断和检查。

```html
<!-- Father组件 -->
<template>
  <!-- 添加常规属性 msg 和动态属性 count -->
  <Children msg="你好啊" :count="count" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Children from './Children.vue';
  const count = ref(0);
</script>
```

```html
<!-- Children组件 -->
<template>
  <ul>
    <li>{{ msg }}</li>
    <li>{{ count }}</li>
  </ul>
</template>

<script setup lang="ts">
  // 使用 defineProps 宏命令声明 props 不需要导入
  // 使用 ts 类型约束
  const props = defineProps<{
    msg?: string;
    count: number;
  }>();

  // 输出：{msg: '你好啊', count: 0}
  console.log(props);
</script>
```

子组件编译后的结果：两种方式最终都编译成了普通的 `<script>` 下的 `props` 模式，并且结果几乎完全一致。不同的在于是否完美的支持 IDE 的类型推断和检查。

```js
/* Analyzed bindings: {
  "msg": "props",
  "count": "props",
  "props": "setup-const"
} */
import { defineComponent as _defineComponent } from 'vue';
import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from 'vue';

const __sfc__ = /*#__PURE__*/ _defineComponent({
  props: {
    msg: { type: String, required: false },
    count: { type: Number, required: true },
  },
  setup(__props) {
    const props = __props;

    console.log(props);

    return (_ctx, _cache) => {
      return (
        _openBlock(),
        _createElementBlock('ul', null, [
          _createElementVNode('li', null, _toDisplayString(__props.msg), 1 /* TEXT */),
          _createElementVNode('li', null, _toDisplayString(__props.count), 1 /* TEXT */),
        ])
      );
    };
  },
});
__sfc__.__file = 'App.vue';
export default __sfc__;
```

如果 `Father` 组件中将传递给 `Children` 子组件的 `count` 属性的值改为字符串类型，那么在编辑器中就会发现 ts 报错 `不能将类型“string”分配给类型“number”。`。

使用 ts 的类型检测可以在编写代码的时候就发现错误，不需要在运行时才发现错误，把错误扼杀在编写代码的摇篮中。

### 注意事项

**声明时注意事项**

- 不能同时使用运行时声明和类型声明。`defineProps` 只能是要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错。

- 使用类型声明的时候，静态分析(也就是约束的类型) 会自动生成等效的运行时声明，以确保正确的运行时行为。（从上述例子的编译结果就可以看出来）

- 类型声明在开发环境下，编译器会试着从类型来推断对应的运行时验证。例如这里从 `msg: string` 类型中推断出 `msg: String`。如果类型是对导入类型的引用，这里的推断结果会是 `msg: null `(与 `any` 类型相等)，因为编译器没有外部文件的信息。

- 类型声明在生产模式下，编译器会生成数组格式的声明来减少打包体积 (这里的 props 会被编译成 `['foo', 'bar']`)。

- 类型声明生成的代码仍然是有着类型的 Typescript 代码，它会在后续的流程中被其它工具处理。

**截至目前，类型声明参数必须是以下内容之一，以确保正确的静态分析：**

- 类型字面量，如 `string`, `number`, `boolean` 等

- 在同一文件中的 `interface` 或类型字面量的引用。说得更通俗一些就是，`props` 的 `ts` 接口只能写在本文件中。

- 现在还不支持复杂的类型和从其它文件进行类型导入。理论上来说，将来是可能实现类型导入的。但是，因为 ts 会自动扫描项目中的 `types` 来自动导入类型，因此可以将 `interface` 通过 `namespace` 的方式来实现自动导入，这样就不需要在文件中引入，直接就可以使用了。

- 如下示例：

`types` 文件夹下的 `list.ts` 文件:

```ts
declare namespace List {
  export interface Basic {
    id: number;
    content: string;
    isDone: boolean;
  }
}
```

组件里面使用:

```ts
// 这样是可以支持的
const props = defineProps<{
  title: string;
  list: List.Basic[];
}>();
```

### 两种声明的对比

| 类型 | 优点 | 缺点 |
| --- | --- | --- |
| 运行时声明 | 不使用 `ts` 的情况下能够对 `props` 进行一定的、运行时的类型校验 | 1. 运行时校验。 2. 只能进行基本类型的校验。3. 编码时无任何提示。 |
| 类型声明 | 完美的支持类型的校验，包括 `props` 的完美类型约束、父组件在传 `props` 时的提示以及子组件在使用 `props` 的提示。 | 目前 `ts` 的接口暂时只支持写在文件内，未来应该会实现可从外部导入的，但目前可通过 ts 自动扫描 types 来解决。 |

因此，强烈推荐使用类型声明的 `defineProps`。

## `widthDefaults`

`defineProps` 使用类型声明时的不足之处在于，它没有可以给 `props` 提供默认值的方式。为了解决这个问题，提供了 `withDefaults` 宏命令。

### 基本语法

`withDefaults()` 方法接收两个参数：

- 参数 1：`defineProps` 类型声明。

- 参数 2：`defaultValueOptions` 需要设置的默认值，该参数是一个 `Object`。

```js
withDefaults(defineProps, defaultValueOptions);
```

具体用法：

```js
const props = withDefaults(
  defineProps<{
    msg?: string
    users: Users[] // 使用 Users 接口约束 users
  }>(),
  // 设置默认值
  {
    msg: 'Heelo',
    users: () => [{ id: 3, name: '王五', age: 50 }],
  },
)
```

### 示例演示

```html
<!-- Father组件 -->
<template>
  <!-- 添加常规属性 msg 和动态属性 users -->
  <Children msg="你好啊" :users="users" />
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import Children from './Children.vue';
  // 定义一个数组
  const users = reactive([
    { id: 1, name: '张三', age: 30 },
    { id: 2, name: '李四', age: 32 },
  ]);
</script>
```

```html
<!-- Children组件 -->
<template>
  <ul>
    <li>{{ msg }}</li>
    <li>{{ users }}</li>
  </ul>
</template>

<script setup lang="ts">
  // 定义 Users 接口
  interface Users {
    id: number;
    name: string;
    age: number;
  }

  // 使用 defineProps、withDefaults 宏命令不需要导入
  const props = withDefaults(
    defineProps<{
      msg?: string;
      users: Users[]; // 使用 Users 接口约束 users
    }>(),
    // 设置默认值
    {
      msg: 'Heelo',
      users: () => [{ id: 3, name: '王五', age: 50 }],
    },
  );
</script>
```

`Children` 组件编译后：

```js
/* Analyzed bindings: {
  "msg": "props",
  "users": "props",
  "props": "setup-const"
} */
import { defineComponent as _defineComponent } from 'vue';
import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from 'vue';

// 使用 defineProps、withDefaults 宏命令不需要导入

const __sfc__ = /*#__PURE__*/ _defineComponent({
  props: {
    msg: { type: String, required: false, default: 'Heelo' },
    users: { type: Array, required: true, default: () => [{ id: 3, name: '王五', age: 50 }] },
  },
  setup(__props) {
    const props = __props;

    // 定义 Users 接口

    return (_ctx, _cache) => {
      return (
        _openBlock(),
        _createElementBlock('ul', null, [
          _createElementVNode('li', null, _toDisplayString(__props.msg), 1 /* TEXT */),
          _createElementVNode('li', null, _toDisplayString(__props.users), 1 /* TEXT */),
        ])
      );
    };
  },
});
__sfc__.__file = 'App.vue';
export default __sfc__;
```

上面代码会被编译为等价的运行时 `props` 的 `default` `选项，如下所示。此外，withDefaults` 辅助函数提供了对默认值的类型检查，并确保返回的 `props` 的类型删除了已声明默认值的属性的可选标志。

### 注意事项

`widthDefaults` 是为了给 `defineProps` 使用类型声明时提供添加默认值的的方法，因此，需要注意这仅仅适用于 `<script setup lang='ts'>` 且 `defineProps` 使用类型声明。
