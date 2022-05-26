---
group:
  title: 快速上手
order: 1
---

<BackTop></BackTop>

# 常用的组合式 API

<Alert type="info">
 Composition API又叫组合式 API。
</Alert>

[Composition API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%84%E5%90%88%E5%BC%8F-api) 点击查看官方详情。

**选项式 API 和 组合式 API 图例**

![api对比图](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/api%E5%AF%B9%E6%AF%94.png)

## setup 组件选项

- `setup` 是一个新的组件选项，作为组件中使用组合 API 的起点。

- 所有的组合 API 函数都在此使用, 只在初始化时执行一次。

- 从组件生命周期来看，它的执行在组件实例创建之前 vue2.x 的 `beforeCreate` 执行<Badge>重要</Badge>。

- 这就意味着在 `setup函数` 中 `this` 还不是组件实例，`this` 此时是 `undefined` <Badge>重要</Badge>。

- 在模版中需要使用的数据和函数，需要在 `setup` 返回。

```html
<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      console.log(this); // 输出：undefined

      // 定义变量msg
      let msg = ref('Vue3.x');

      // 模板中使用的数据需要return出去
      return {
        msg,
      };
    },
  });
</script>
```

在 `setup` 中你应该避免使用 `this`，因为它不会找到组件实例。`setup` 的调用发生在 data property、`computed` property 或 `methods` 被解析之前，所以它们无法在 `setup` 中被获取。

## 带 ref 的响应式变量

<Alert type="info">
  在 Vue 3.0 中，我们可以通过一个新的 ref 函数使任何响应式变量在任何地方起作用。
</Alert>

- 作用: 定义一个响应式变量。

- 语法: `const xxx = ref(initValue)`:

  - 创建一个包含响应式数据的引用(reference)对象。

  - js 中操作数据: xxx.value。

  - <font v-pre color="red">模板中操作数据: 不需要.value</font>

- 一般用来定义一个基本类型的响应式数据。

```html
<template>
  <div>{{ count }}</div>
  <button @click="setCount">计数器</button>
</template>

<script lang="ts">
  // 导入 ref
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      // 定义响应式变量count，并设置初始值为0
      let count = ref(0);

      // 定义一个计数器方法
      const setCount = () => {
        // 修改ref定义的变量需要使用 .value
        count.value++;
      };

      // 模板中使用的数据需要return出去
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

**总结**：`ref` 接收参数并将其包裹在一个带有 `value` property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值。

**注意**：将值封装在一个对象中，看似没有必要，但为了保持 JavaScript 中不同数据类型的行为统一，这是必须的。这是因为在 JavaScript 中，`Number` 或 `String` 等基本类型是通过值而非引用传递的。

![ref](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ref.gif)

在任何值周围都有一个封装对象，这样我们就可以在整个应用中安全地传递它，而不必担心在某个地方失去它的响应性。

## 带 reactive 的响应式变量

- 作用: 一个复杂数据类型，成为响应式数据。

- const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象。

- 响应式转换是“深层的”：会影响对象内部所有嵌套的属性。

- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的。

```html
<template>
  <div>{{ user }}</div>
  <button @click="setName">修改姓名</button>
</template>

<script lang="ts">
  // 导入 reactive
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    setup() {
      // 定义一个复杂的响应式变量并初始化
      const user = reactive({
        name: '张三',
        age: 30,
      });

      // 定义一个修改用户名的方法
      const setName = () => {
        // 修改reactive定义的变量不需要使用 .value
        user.name = '李四';
      };

      // 模板中使用的数据需要return出去
      return {
        user,
        setName,
      };
    },
  });
</script>
```

<Alert type="warning">
  reactive 对象的数据通过解构后会失去响应式。
</Alert>

```html
<template>
  <div>计数器：{{ count }}</div>
  <button @click="setCount">计数</button>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    setup() {
      // 定义一个响应式对象
      const state = reactive({
        count: 0,
        total: 1,
      });

      // 解构后已经失去响应式
      let { count } = state;

      const setCount = () => {
        // count.value 会报错，因为count不是 ref 响应式数据
        count++;
        // count自增，但是页面不会更新，count已经失去响应式
        console.log(count);
      };
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

解决方法见 [toRefs](/vue3/start/composition-api#torefs) 。

## computed 函数 计算属性

- computed 函数，是用来定义计算属性的，计算属性不能修改。

- 在 js 中使用计算属性的值需要像 `ref` 一样使用 `.value`。

```html
<template>
  <div>姓：{{ firstName }}</div>
  <div>名：{{ lastName }}</div>
  <div>全名：{{ fullName }}</div>
</template>

<script lang="ts">
  // 导入 computed函数
  import { defineComponent, ref, computed } from 'vue';

  export default defineComponent({
    setup() {
      const firstName = ref('张');
      const lastName = ref('三');

      // 使用计算属性得到全名-传参为一个函数
      const fullName = computed(() => firstName.value + lastName.value);

      // js中使用计算属性的到的值
      console.log(fullName.value); // 输出：张三
      return {
        firstName,
        lastName,
        fullName,
      };
    },
  });
</script>
```

## watch 函数 侦听器

`watch` API 完全等同于组件侦听器 property。watch 需要侦听特定的数据源，并在回调函数中执行副作用。默认情况下，它也是惰性的，即只有当被侦听的源发生变化时才执行回调。

- 与 watch 配置功能一致。

- 监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调。

- 默认初始时不执行回调, 但可以通过配置 `immediate` 为 `true`, 来指定初始时立即执行第一次。

- 通过配置 `deep` 为 `true`, 来指定深度监视。

### 侦听单个数据源

```html
<!-- 监听 ref 数据 -->

<template>
  <div>{{ count }}</div>
  <button @click="setCount">计数器</button>
</template>

<script lang="ts">
  // 导入 watch函数
  import { defineComponent, ref, watch } from 'vue';

  export default defineComponent({
    setup() {
      let count = ref(0);
      const setCount = () => {
        count.value++;
      };

      // 监听一个 ref 数据
      watch(count, (newValue, oldValue) => {
        // newValue最新的值，oldValue上一次的值
        console.log(newValue, oldValue);
      });

      return {
        count,
        setCount,
      };
    },
  });
</script>

<!-- 监听 reactive 数据 -->

<template>
  <div>{{ state.count }}</div>
  <button @click="setCount">计数器</button>
</template>

<script lang="ts">
  // 导入 watch函数
  import { defineComponent, reactive, watch } from 'vue';

  export default defineComponent({
    setup() {
      let state = reactive({ count: 0 });
      const setCount = () => {
        state.count++;
      };

      // 监听一个 reactive 数据
      watch(
        () => state.count,
        (newValue, oldValue) => {
          console.log(newValue, oldValue);
        },
      );

      return {
        state,
        setCount,
      };
    },
  });
</script>
```

### 侦听多个数据源

侦听多个数据源可以使用数组，`newValue` 和 `oldValue` 也将是数组的形式。所监听的多个数据其中一个数据发生了变化都将会执行求值。

```html
<template>
  <div>{{ userName }}</div>
  <div>{{ userAge }}</div>
  <button @click="setUserInfo">修改信息</button>
</template>

<script lang="ts">
  // 导入 watch函数
  import { defineComponent, ref, watch } from 'vue';

  export default defineComponent({
    setup() {
      let userName = ref('张三');
      let userAge = ref(30);

      const setUserInfo = () => {
        userName.value = '李四';
        userAge.value = 50;
      };

      // 监听多个数据使用数组
      watch([userName, userAge], (newValue, oldValue) => {
        console.log(newValue, oldValue); // 输出：['李四', 50] ['张三', 30]
      });

      return {
        userName,
        userAge,
        setUserInfo,
      };
    },
  });
</script>
```

**监听 reactive 数据的属性的多个数据源需要使用函数**

```html
<template>
  <div>{{ userName.name }}</div>
  <div>{{ userAge }}</div>
  <button @click="setUserInfo">修改信息</button>
</template>

<script lang="ts">
  // 导入 watch函数
  import { defineComponent, ref, reactive, watch } from 'vue';

  export default defineComponent({
    setup() {
      let userName = reactive({ name: '张三' });
      let userAge = ref(30);

      const setUserInfo = () => {
        userName.name = '李四';
        userAge.value = 50;
      };

      // 监听reactive数据的属性的多个数据源需要使用函数
      watch([() => userName.name, userAge], (newValue, oldValue) => {
        console.log(newValue, oldValue); // 输出：['李四', 50] ['张三', 30]
      });

      return {
        userName,
        userAge,
        setUserInfo,
      };
    },
  });
</script>
```

### 侦听响应式对象

使用侦听器来比较一个数组或对象的值，这些值是响应式的，要求它有一个由值构成的副本。

#### 监听数组

```html
<!-- 监听数组 -->

<template>
  <div>{{ arr }}</div>
  <button @click="setArr">添加数据</button>
</template>

<script lang="ts">
  // 导入 watch函数
  import { defineComponent, reactive, watch } from 'vue';

  export default defineComponent({
    setup() {
      let arr = reactive([1, 2, 3]);
      const setArr = () => {
        arr.push(4);
      };
      // 使用侦听器来比较一个数组或对象的值，这些值是响应式的，要求它有一个由值构成的副本。
      watch(
        () => [...arr],
        (newValue, oldValue) => {
          // 输出：[1, 2, 3, 4] [1, 2, 3]
          console.log(newValue, oldValue);
        },
      );

      return {
        arr,
        setArr,
      };
    },
  });
</script>
```

#### 监听对象

```html
<!-- 监听对象 -->

<template>
  <div>{{ userInfo }}</div>
  <button @click="setUserInfo">修改姓名</button>
</template>

<script lang="ts">
  // 导入 watch函数
  import { defineComponent, reactive, watch } from 'vue';

  export default defineComponent({
    setup() {
      let userInfo = reactive({
        name: '张三',
        age: 30,
      });
      const setUserInfo = () => {
        userInfo.name = '李四';
      };
      // 使用侦听器来比较一个数组或对象的值，这些值是响应式的，要求它有一个由值构成的副本。
      watch(
        () => userInfo.name,
        (newValue, oldValue) => {
          // 输出：李四 张三
          console.log(newValue, oldValue);
        },
      );

      return {
        userInfo,
        setUserInfo,
      };
    },
  });
</script>
```

### deep 深度监听

监听深度嵌套对象或数组，需要 `deep` 选项设置为 true 。

#### 未使用深度监听

```html
<!-- 未使用 深度监听 deep -->

<template>
  <div>{{ state }}</div>
  <button @click="setUserInfo">修改城市</button>
</template>

<script lang="ts">
  import { defineComponent, reactive, watch } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        name: '张三',
        address: {
          city: '成都',
        },
      });
      const setUserInfo = () => {
        state.address.city = '南充';
      };
      // 未使用 deep
      watch(
        () => state, // 监听整个深度嵌套的的 state
        (newValue, oldValue) => {
          // 当修改了 city 为 南充后，此函数无反应，无任何输出，但是页面会更新
          console.log(newValue, oldValue);
        },
      );

      return {
        state,
        setUserInfo,
      };
    },
  });
</script>
```

#### 使用深度监听

```html
<!-- 使用 深度监听 deep -->

<template>
  <div>{{ state }}</div>
  <button @click="setUserInfo">修改城市</button>
</template>

<script lang="ts">
  import { defineComponent, reactive, watch } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        name: '张三',
        address: {
          city: '成都',
        },
      });
      const setUserInfo = () => {
        state.address.city = '南充';
      };
      // 使用 deep
      watch(
        () => state, // 监听整个深度嵌套的的 state
        (newValue, oldValue) => {
          // 输出：{name: "张三", address:{city:"南充"}} {name: "张三", address:{city:"南充"}}
          // 没错，你会发现newValue, oldValue 一模一样，原因请看下面黄色警告区域
          console.log(newValue, oldValue);
        },
        { deep: true },
      );

      return {
        state,
        setUserInfo,
      };
    },
  });
</script>
```

侦听一个响应式对象或数组将始终返回**该对象的当前值和上一个状态值的引用**，所以当前值和上一次的值会一样。为了完全侦听深度嵌套的对象和数组，可能需要对值进行**深拷贝**。这可以通过诸如 [lodash.cloneDeep](https://www.lodashjs.com/docs/lodash.cloneDeep#_clonedeepvalue) 这样的实用工具来实现。

```html
<!-- 使用 深度监听 deep -->

<template>
  <div>{{ state }}</div>
  <button @click="setUserInfo">修改城市</button>
</template>

<script lang="ts">
  import _ from 'lodash';
  import { defineComponent, reactive, watch } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        name: '张三',
        address: {
          city: '成都',
        },
      });
      const setUserInfo = () => {
        state.address.city = '南充';
      };
      // 使用 deep
      watch(
        () => _.cloneDeep(state), // 深拷贝 state
        (newValue, oldValue) => {
          // state通过深拷贝后，newValue, oldValue的值就正常了
          // 输出：{name: "张三", address:{city:"南充"}} {name: "张三", address:{city:"成都"}}
          console.log(newValue, oldValue);
        },
        { deep: true },
      );

      return {
        state,
        setUserInfo,
      };
    },
  });
</script>
```

### immediate 初始化执行

默认初始时不执行回调, 但可以通过配置 immediate 为 true, 来指定初始时立即执行第一次。

```html
<template>
  <div>{{ count }}</div>
  <button @click="setCount">计数器</button>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';

  export default defineComponent({
    setup() {
      let count = ref(0);
      const setCount = () => {
        count.value++;
      };

      watch(
        count,
        (newValue, oldValue) => {
          // 输出：0 undefined
          console.log(newValue, oldValue);
        },
        {
          // 回调函数将在初始化时执行一次
          immediate: true,
        },
      );

      return {
        count,
        setCount,
      };
    },
  });
</script>
```

## watchEffect 函数

为了根据响应式状态自动应用和重新应用副作用，我们可以使用 `watchEffect` 函数。它立即执行传入的一个函数，同时响应式 `追踪其依赖` ，并在其依赖变更时重新运行该函数。（监视所有回调中使用的数据）

```html
<template>
  <div>{{ count }}</div>
</template>

<script lang="ts">
  import { defineComponent, ref, watchEffect } from 'vue';

  export default defineComponent({
    setup() {
      let count = ref(0);

      // 初始化会执行一次
      watchEffect(() => {
        // 初始化执行输出：watchEffect执行,count的值： 0

        // 500ms后执行输出：watchEffect执行,count的值： 1
        console.log('watchEffect执行,count的值：', count.value);

        // watchEffect中使用了 count，因此会追踪 count ,当count改变后就会执行
      });

      // 500ms后让count加1
      setTimeout(() => count.value++, 500);

      return {
        count,
      };
    },
  });
</script>
```

### 停止侦听

当 `watchEffect` 在组件的 `setup()` 函数或 `生命周期钩子` 被调用时，侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。

在一些情况下，也可以显式调用返回值以停止侦听：

```html
<template>
  <div>{{ count }}</div>
</template>

<script lang="ts">
  import { defineComponent, ref, watchEffect } from 'vue';

  export default defineComponent({
    setup() {
      let count = ref(0);

      // 初始化会执行一次
      const stop = watchEffect(() => {
        // 只会初始化执行一次输出：watchEffect执行,count的值： 0
        // 下方在定时器前执行stop()函数，停止了侦听，定时器执行的时候，回调函数不会执行
        console.log('watchEffect执行,count的值：', count.value);
      });

      // 停止侦听
      stop();

      // 500ms后让count加1
      setTimeout(() => count.value++, 500);

      return {
        count,
      };
    },
  });
</script>
```

### 清除副作用

有时副作用函数会执行一些异步的副作用，这些响应需要在其失效时清除 (即完成之前状态已改变了) 。所以侦听副作用传入的函数可以接收一个 `onInvalidate` 函数作入参，用来注册清理失效时的回调。当以下情况发生时，这个失效回调会被触发：

```html
<template>
  <div>watchEffect</div>
</template>

<script lang="ts">
  import { defineComponent, watchEffect } from 'vue';

  export default defineComponent({
    setup() {
      watchEffect((onInvalidate) => {
        // 初始化执行开启一个计时器
        const timer = setInterval(() => console.log('计时器执行'), 1000);
        // 组件卸载的时候会执行
        onInvalidate(() => {
          // 当前组件卸载的时候就清除计时器
          clearInterval(timer);
        });
      });
    },
  });
</script>
```

此功能有点类似 React Hook 中的 [useEffect](/react/hook#useeffect)。

## Refs

### toRef

`toRef` 函数可以将一个响应式对象中的一个属性创建为一个 `ref` 响应式数据，并且和原来的响应式对象保持着连接。

```html
<template>
  <div></div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRef } from 'vue';

  export default defineComponent({
    setup() {
      // 定义一个响应式对象
      const state = reactive({
        count: 0,
        total: 1,
      });

      /* 
      toRef 函数接收两个参数
      参数1：响应式对象
      参数2：响应式对象的property
      返回值：响应式对象的property的一个ref
    */
      const count = toRef(state, 'count');

      // 让count自增
      count.value++;
      // 查看响应式对象 state中count的值是否也自增了
      console.log(state.count, count.value); // 输出: 1 1
    },
  });
</script>
```

### toRefs

将响应式对象转换为普通对象，其中结果对象的每个 `property` 都是指向原始对象相应 `property` 的 `ref` 。

```html
<template>
  <div></div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  export default defineComponent({
    setup() {
      // 定义一个响应式对象
      const state = reactive({
        count: 0,
        total: 1,
      });

      /* 
      toRefs 函数接收一个参数
      参数：响应式对象
      返回值：返回一个响应式对象，每个property都是一个ref
    */
      const stateRefs = toRefs(state);

      // 让stateRefs的count自增
      stateRefs.count.value++;

      console.log(state.count); // 输出：1

      // 让state的count自增
      state.count++;

      console.log(stateRefs.count.value); // 输出：2
    },
  });
</script>
```

**应用：** 当从组合式函数返回响应式对象时，`toRefs` 非常有用，这样消费组件就可以在不丢失响应性的情况下对返回的对象进行解构/展开：

```html
<template>
  <div>计数器：{{ count }}</div>
  <button @click="setCount">计数</button>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';

  // 定义一个组合式函数
  const useState = () => {
    // 定义一个响应式对象
    const state = reactive({
      count: 0,
      total: 1,
    });

    /* 一些操作state的逻辑 */

    // 使用 toRefs 函数将 state对象的属性转换为ref
    return toRefs(state);
  };
  export default defineComponent({
    setup() {
      // 使用 useState 函数，并解构返回值
      // 解构的返回值不会丢失响应式
      const { count } = useState();

      const setCount = () => {
        count.value++;
        console.log('计数器的值', count.value); // 每点击一次按钮就自增1
      };

      return {
        count,
        setCount,
      };
    },
  });
</script>
```

`toRefs` 只会为源对象中包含的 `property` 生成 `ref`。如果要为特定的 `property` 创建 `ref`，则应当使用 [toRef](/vue3/start/composition-api#toref) 。

**<font v-pre color="red">使用 toRefs 解决 reactive 对象解构取出的所有属性值都是非响应式的问题。</font>**

通过 `toRefs` 函数将 `reactive` 对象转换为每个属性都是 `ref` 的普通对象，再解构，就不会丢失响应式。

```html
<template>
  <div>计数器：{{ count }}</div>
  <button @click="setCount">计数</button>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  export default defineComponent({
    setup() {
      // 定义一个响应式对象
      const state = reactive({
        count: 0,
        total: 1,
      });

      // 通过 toRefs 函数将 state 对象转换为每个属性都是 ref 的普通对象，再解构，就不会丢失响应式。
      let { count } = toRefs(state);

      const setCount = () => {
        // count++ 会报错，因为count是 ref 响应式数据
        count.value++;
        // count.value自增，页面更新，count是响应式的
        console.log(count.value);
      };
      return {
        count,
        setCount,
      };
    },
  });
</script>
```

### ref 获取元素

通过 `ref` 函数获取组件中的元素。

此示例用到了[可选链(?.)操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```html
<template>
  <input ref="inputRef" type="text" />
  <button @click="inputFocus">输入框聚焦</button>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      // 初始化 inputRef 为null（指定inputRef是input元素或者null）
      const inputRef = ref<HTMLInputElement | null>(null);

      // 获取焦点的方法
      const inputFocus = () => {
        // 输入框聚焦，?.(可选链)确保不会在 null 上去找 focus方法，因为inputRef.value可能为null。
        // ?.(可选链)，当?.左侧为null或者undefined时不会执行右侧，会立即中断
        inputRef.value?.focus();
      };
      return {
        inputRef,
        inputFocus,
      };
    },
  });
</script>
```

## reactive 与 ref 细节

- 是 Vue3 的 `composition API` 中 2 个最重要的响应式 API。

- `ref` 用来处理基本类型数据, `reactive` 用来处理对象(递归深度响应式)。

- 如果用 `ref 对象/数组`, 内部会自动将对象/数组转换为 `reactive` 的代理对象。

- `ref` 内部: 通过给 `value` 属性添加 `getter/setter` 来实现对数据的劫持。

- `reactive` 内部: 通过使用 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 来实现对对象内部所有数据的劫持, 并通过 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 操作对象内部数据。

- `ref` 的数据操作: 在 js 中要 `.value`, 在模板中不需要(内部解析模板时会自动添加 `.value` )。

```html
<template>
  <h2>App</h2>
  <p>m1: {{ m1 }}</p>
  <p>m2: {{ m2 }}</p>
  <p>m3: {{ m3 }}</p>
  <button @click="update">更新</button>
</template>

<script lang="ts">
  import { reactive, ref } from 'vue';

  export default {
    setup() {
      const m1 = ref('abc');
      const m2 = reactive({ x: 1, y: { z: 'abc' } });

      // 使用ref处理对象  ==> 对象会被自动reactive为proxy对象
      const m3 = ref({ a1: 2, a2: { a3: 'abc' } });
      console.log(m1, m2, m3);
      console.log(m3.value.a2); // 也是一个proxy对象

      function update() {
        m1.value += '--';
        m2.x += 1;
        m2.y.z += '++';

        m3.value = { a1: 3, a2: { a3: 'abc---' } };
        m3.value.a2.a3 += '=='; // reactive对对象进行了深度数据劫持
        console.log(m3.value.a2);
      }

      return {
        m1,
        m2,
        m3,
        update,
      };
    },
  };
</script>
```

## 响应式数据的判断

- [isRef](https://v3.cn.vuejs.org/api/refs-api.html#isref): 检查一个值是否为一个 `ref` 对象。

- [isReactive](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreactive): 检查一个对象是否是由 `reactive` 创建的响应式代理。

- [isReadonly](https://v3.cn.vuejs.org/api/basic-reactivity.html#isreadonly): 检查一个对象是否是由 `readonly` 创建的只读代理。

- [isProxy](https://v3.cn.vuejs.org/api/basic-reactivity.html#isproxy): 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理。
