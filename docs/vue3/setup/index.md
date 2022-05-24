---
group:
  title: Script Setup
order: 1
---
# 相关介绍

## 优势介绍

`<script setup>` 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。所有 `ES` 模块导出都被认为是暴露给上下文的值，并包含在 `setup()` 返回对象中，相比于普通的 `<script>` 语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。

- 能够使用纯 Typescript 声明 props 和抛出事件。

- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。

- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

`<script setup> ` + `TS` + `Volar` = **真香**

## 基本语法

使用方式：极其简单，仅需要在 `script` 标签加上 `setup` 关键字即可。

```html
<script setup>
  console.log('hello script setup')
</script>
```

里面的代码会被编译成组件 `setup()` 函数的内容。这意味着与普通的 `<script>` 只在组件被首次引入的时候执行一次不同，`<script setup>` 中的代码会在每次组件实例被创建的时候执行。

## 编译总结

编译示例：

```html
<!-- App.vue -->
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
```

编译后：

```js
/* Analyzed bindings: {
  "ref": "setup-const",
  "msg": "setup-ref"
} */
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

import { ref } from 'vue'

const __sfc__ = {
  setup(__props) {

  const msg = ref('Hello World!')

  return (_ctx, _cache) => {
      return (_openBlock(), _createElementBlock("h1", null, _toDisplayString(msg.value), 1 /* TEXT */))
    }
  }

}
__sfc__.__file = "App.vue"
export default __sfc__
```

从编译的结果可以总结三点，也是 `<script setup>` 这个糖贯穿始终的三点：

1. `<script setup>` 语法糖最终编译成了普通的 `<script>`。

2. `<script setup>` 的内容都编译成了组件 `setup()` 函数的内容。

3. 模板内容都编译成了 `VNode` 结构并在 `setup()` 函数中导出，并且对模板中的值进行了引用。

## 自动暴露

<Alert type="info">
  顶层的绑定会被暴露给模板。
</Alert>

当使用 `<script setup>` 的时候，任何在 `<script setup>` 声明的顶层的绑定 (`包括变量`，`函数声明`，以及 `import` 引入的内容) 都能在模板中直接使用，不再需要使用 `return` 导出：

```html
<script setup>
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <div @click="log">{{ msg }}</div>
</template>
```

`import` 导入的内容也会以同样的方式暴露。意味着可以在模板表达式中直接使用导入的 helper 函数，并不需要通过 methods 选项来暴露它：

```html
<script setup>
import { capitalize } from './helpers'
</script>

<template>
  <div>{{ capitalize('hello') }}</div>
</template>
```

## 原理探究

我们可以通过官方提供的工具 [Vue SFC Playground](https://sfc.vuejs.org) 来查看编译后的代码。

编译前：

```html
<script setup lang='ts'>
import { ref } from "vue";

const inputValue = ref('输入测试');
</script>

<template>
  <input type="text" :value="inputValue"/>
</template>
```

编译后：

```js
import { defineComponent as _defineComponent } from 'vue'
import { createElementVNode as _createElementVNode, unref as _unref, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

// 这些都是内部的方法，可不用在意
const _hoisted_1 = ["value"]

import { ref } from "vue";
import { capitalize } from "./capitalize";

const __sfc__ = /*#__PURE__*/_defineComponent({
  setup(__props) {  // 编译成了普通的 script
    const inputValue = ref('输入测试');
    // 可以看到，编译后 `<script setup>` 语法糖变成了<script> 并导出了模板 VNode 结构的函数，并且将模板中用到的值进行了自动解包
    return (_ctx,_cache) => {
      return (_openBlock(), _createElementBlock(_Fragment, null, [
        _createElementVNode("input", {
          type: "text",
          value: inputValue.value   // 自动解包 ref
        }, null, 8 /* PROPS */, _hoisted_1),    // 这里是对动态属性的标记，对 diff 算法的优化
        _createElementVNode("p", null, _toDisplayString(_unref(capitalize)('Hello World!!')), 1 /* TEXT */)
      ], 64 /* STABLE_FRAGMENT */))
      // 编译后的 setup 导出的模板中自动的就引用了 `capitalize` 函数
    }
  }
})
__sfc__.__file = "App.vue"
export default __sfc__
```

> 看到这儿，还是觉得有点儿牛皮！！！

可以看到编译后的结果中包含了大量的 vue `内置方法` 和导出 `sfc`，这属于框架内部的执行，所以所有的 `SFC` 编译时都会有这些代码。

```js
import { defineComponent as _defineComponent } from 'vue'		// defineComponent 函数
import { createElementVNode as _createElementVNode, unref as _unref, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"		// 内置函数

__sfc__.__file = "App.vue"
export default __sfc__
```
