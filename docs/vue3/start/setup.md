---
group:
  title: 快速上手
order: 4
---
# Setup

## 参数

`setup` 选项是一个接收 `props` 和 `context` 的函数，并且将 `setup` 内的内容通过 `return` 暴露给组件的其余部分。

```js
export default{
  name: 'test',
  setup(props,context){

    return {}   // 这里返回的任何内容都可以用于组件的其余部分
  }
  // 组件的“其余部分”
}
```

### Props

`setup` 函数中的第一个参数是 `props`。正如在一个标准组件中所期望的那样，`setup` 函数中的 `props` 是响应式的，当传入新的 `prop` 时，它将被更新。

```js
// Children 组件
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
  }
}
```

因为 `props` 是响应式的，所以不能使用 ES6 的展开运算符 `...` 解构，这样会丢失响应式。

如果需要解构 prop，可以在 `setup` 函数中使用 [toRefs](/vue3/start/composition-api#torefs) 函数来完成此操作：

```js
// Children 组件
import { toRefs } from 'vue'

setup(props) {
  const { title } = toRefs(props)
  console.log(title.value)
}
```

如果 `title` 是可选的 prop，则传入的 `props` 中可能没有 `title` 。在这种情况下，`toRefs` 将不会为 `title` 创建一个 `ref` 。你需要使用 [toRef](/vue3/start/composition-api#toref) 替代它：

```js
// Children 组件
import { toRef } from 'vue'

setup(props) {
  const title = toRef(props, 'title')
  console.log(title.value)
}
```

### Context

传递给 `setup` 函数的第二个参数是 `context`。`context` 是一个普通 JavaScript 对象，暴露了其它可能在 `setup` 中有用的值：`attrs`、`slots`、`emit`、`expose` 等。

```js
// Children 组件
export default {
  setup(props, context) {
    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)

    // 暴露公共 property (函数)
    console.log(context.expose)
  }
}
```

`context` 是一个普通的 JavaScript 对象，也就是说，**`context` 不是响应式的**，这意味着你可以安全地对 `context` 使用 ES6 解构。

```js
export default {
  // 直接将 context 解构
  setup(props, { attrs, slots, emit, expose }) {
    // 其他逻辑
  }
}
```

`attrs` 和 `slots` 是有状态的对象，它们总是会随组件本身的更新而更新。这意味着你应该避免对它们进行解构，并始终以 `attrs.x` 或 `slots.x` 的方式引用 property。请注意，与 `props` 不同，`attrs` 和 `slots` 的 property 是非响应式的。如果你打算根据 `attrs` 或 `slots` 的更改应用副作用，那么应该在 `onBeforeUpdate` 生命周期钩子中执行此操作。

## 注意点

- 由于在执行 `setup` 函数的时候，还没有执行 `created` 生命周期方法，所以在 `setup` 函数中，无法使用 `data` 和 `methods` 的变量和方法。

- 在 `setup` 内部，`this` 不是该活跃实例的引用，所以不可以通过访问 `this` 来拿到当前组件实例，此时 `this` 是 `undefined`。**和其他选项中的 `this` 不同。**

## 定义响应式数据

在 Vue3 中定义响应式数据需要使用 `ref` 或者 `reactive` 函数。

- `ref` 函数：用来将基本数据类型定义为响应式数据（ref更适合定义基本数据类型），`ref` 底层的本质其实还是 `reactive`，系统会自动根据我们给 `ref` 传入的值将它转换成 `ref(xx) -> reactive({value:xx})`。

- `reactive` 函数： 用来将引用类型定义为响应式数据，其本质是基于 `Proxy` 实现对象代理。

```js
import {ref, reactive} from "vue";
export default {
  name: "test",
  setup(){
    // 基本类型
    const nub = ref(0)
    const str = ref('inline')
    const boo = ref(false)
    // 引用类型
    const obj = reactive({
      name:'inline',
      age:'18'
    })
    const arr = reactive(['0','1','2'])

    return{
      nub,
      str,
      boo,

      obj,
      arr,
    }
  }
}
```

## `toRefs` 的作用

`toRefs` 函数会将我们一个响应式的对象转变为一个普通对象，然后将这个普通对象里的每一个属性变为一个响应式的数据。

如果我们用 `reactive` 函数的形式来定义响应式变量。

```js
setup(){
  const obj = reactive({
    name:'inline',
    gender:'男',
    age:'18'
  })

  return{
    obj
  }
}
```

模板中使用的时候：

```html
<div>
  <p>姓名:{{ obj.name }}</p>
  <p>性别:{{ obj.gender }}</p>
  <p>年龄:{{ obj.age }}</p>
</div>
```

这样我们是不是发现在模板内使用参数很麻烦，那我们想直接用 `name`、`gender` 的方式访问行不行，答案是可行的。

这里我们使用 `es6` 的扩展运算符 `...`。

```js
setup(){
  const obj = reactive({
    name:'inline',
    gender:'男',
    age:'18',
  })

  return{
    ...obj,
  }
}
```

模板中使用：

```html
<div>
  <p>姓名:{{ name }}</p>
  <p>性别:{{ gender }}</p>
  <p>年龄:{{ age }}</p>
</div>

<div>
  <button @click="name = 'juejin'">改变姓名</button>
  <button @click="gender = '女'">改变性别</button>
  <button @click="age = '20'">改变年龄</button>
</div>
```

**此时页面上能正常显示数据，但是点击按钮修改的时候原始数据改变了，但是页面不会刷新，在使用 `rerutn` 的时候使用展开运算符`...`导致数据变成了普通类型的数值，丢失了响应式。**

解决这个问题可以使用 Vue3 提供给我们的 `toRefs` 函数：

```js {9}
setup(){
  const obj = reactive({
    name:'inline',
    gender:'男',
    age:'18',
  })

  return{
    ...toRefs(obj),
  }
}
```

此时修改数据，页面也会更新了。

## 定义和执行方法

### 1、直接调用

在 `setup` 函数中定义的方法相互之间可以直接调用：

```html
<!-- 父组件 -->
<template>
  <button @click="fun1('点我传值')">点我</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const fun1 = (data) => {
      // 直接调用 fun2
      fun2(data)
    }
    const fun2 = (data) => {
      console.log(data) // 输出：点我传值
    }
    return {
      fun1,
    }
  },
})
</script>
```

### 2、定义在 `reactive` 中

以 `reactive` 定义响应式数据的方式来定义方法。

```html
<template>
  <button @click="fun1('点我传值')">点我</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'

export default defineComponent({
  setup() {
    const str = ref('你好')
    const state = reactive({
      fun1(data) {
        console.log(str.value) // 输出：你好

        // 此时访问 fun2 需要 this
        this.fun2(data)
      },
      fun2(data) {
        console.log(data) // 输出：点我传值
        console.log('我是fun2') //fun2被执行
      },
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>
```

通过点击事件将值传给 `fun1` 方法 ，`fun1` 方法接收到后在传给 `fun2` 方法。

**注意：** 这里我们用 `this.fun2()` 的方式去调用 `fun2` 方法，为什么这里用 `this` 可以正常执行不会报 `undefind` ?，因为这里的 `this` 不是当前组件实例，而是当前对象。

### 3、定义在 `setup` 外

这种方式避免了将功能逻辑都堆叠在 `setup` 的问题，我们可以将独立的功能写成单独的函数。

这里我在 `setup` 外写了 `fn1()`、`fn2()` 两个功能函数，并在 `setup` 内分别调用。

```html
<template>
  <button @click="fnOne('fnOne传值')">点我fnOne</button>
  <button @click="testFn2">点我testFn2</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  setup() {
    // 调用 fn1 函数，如果函数返回参数过多，可以赋值给变量并用扩展运算符暴露给组件的其余部分
    const testFn1 = fn1()
    // 调用 fn2 函数，也可单个接收
    const { testFn2 } = fn2()
    return {
      ...toRefs(testFn1),
      testFn2,
    }
  },
})

// 定义 fn1 功能
function fn1() {
  const str = ref('我是fn1功能')
  function fnOne(data) {
    console.log(str.value) // 输出：我是fn1功能
    fnTwo(data)
  }
  function fnTwo(data) {
    console.log(data) // 输出：fnOne传值
  }
  return {
    fnOne,
    fnTwo,
  }
}

// 定义 fn2 功能
function fn2() {
  const state = reactive({
    msg: '我是fn2功能',
  })
  function testFn2() {
    console.log(state.msg) // 输出：我是fn2功能
  }
  return {
    testFn2,
  }
}
</script>
```

- 点击 `点我fnOne` 按钮，控制台分别输出：`我是fn1功能`、`fnOne传值`。

- 点击 `点我testFn2` 按钮，控制台输出：`我是fn2功能`。

### 4、定义在 `js` 文件中

与方式三一样，只是我们将两个功能函数提取出来放在单独的 `.js` 文件中。

新建一个名为 `fn.js` 的文件，定义 `fn1` 和 `fn2` 方法，最后导出：

```js
import { ref, reactive } from 'vue'

// 定义 fn1 功能
function fn1() {
  const str = ref('我是fn1功能')
  function fnOne(data) {
    console.log(str.value) // 输出：我是fn1功能
    fnTwo(data)
  }
  function fnTwo(data) {
    console.log(data) // 输出：fnOne传值
  }
  return {
    fnOne,
    fnTwo,
  }
}

// 定义 fn2 功能
function fn2() {
  const state = reactive({
    msg: '我是fn2功能',
  })
  function testFn2() {
    console.log(state.msg) // 输出：我是fn2功能
  }
  return {
    testFn2,
  }
}

export { fn1, fn2 }
```

在组件中使用：正常执行且结果和方式三相同。

```html
<template>
  <button @click="fnOne('fnOne传值')">点我fnOne</button>
  <button @click="testFn2">点我testFn2</button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
// 从 fn 中导入 fn1 和 fn2 函数
import { fn1, fn2 } from './fn.js'

export default defineComponent({
  setup() {
    // 调用 fn1 函数，如果函数返回参数过多，可以赋值给变量并用扩展运算符暴露给组件的其余部分
    const testFn1 = fn1()
    // 调用 fn2 函数，也可单个接收
    const { testFn2 } = fn2()
    return {
      ...toRefs(testFn1),
      testFn2,
    }
  },
})
</script>
```
