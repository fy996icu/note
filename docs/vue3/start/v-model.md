---
group:
  title: 快速上手
order: 12
---

<BackTop></BackTop>

# v-model 的变更

用于自定义组件时，`v-model` prop 和事件默认名称已更改。

- **prop：** `value` -> `modelValue`。

- **事件：** `input` -> `update:modelValue`。

- `v-bind` 的 `.sync` 修饰符和组件的 `model` 选项已移除，可在 `v-model` 上加一个参数代替。

- 现在可以在同一个组件上使用多个 `v-model` 绑定。

- 现在可以自定义 `v-model` 修饰符。

## 2.x 语法

### 基本语法

在 2.x 中，在组件上使用 `v-model` 相当于绑定 `value` prop 并触发 `input` 事件：

```html
<ChildComponent v-model="show" />

<!-- 是以下的简写: -->

<ChildComponent :value="show" @input="show = $event" />
```

`Children` 组件绑定 `v-model` 传递 `show` 给子组件，子组件通过 `value` prop 得到父组件传递过来的 `show`，通过 `emit` 得到父组件传递的自定义事件 `input`。

子组件通过 `this.$emit()` 触发 `input` 事件，并向 `input` 事件传递参数。

**Father 组件**

```html
<template>
  <div>
    <h1>父组件</h1>
    <Children v-model="show" />
  </div>
</template>

<script>
  import Children from './Children.vue';
  export default {
    name: 'Father',
    components: {
      Children,
    },
    data() {
      return {
        show: '显示',
      };
    },
  };
</script>
```

**Children 组件**

```html
<template>
  <div>
    <div>{{ value }}</div>
    <button @click="handleChange">点击隐藏</button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        require: true,
        default: '显示',
      },
    },
    emits: ['input'],
    data() {
      return {};
    },
    methods: {
      handleChange() {
        // 报错：通过props传递给子组件的值，不能在子组件内部修改props。
        // this.value = "隐藏";

        // 通过自定义事件来修改父组件的值
        this.$emit('input', '隐藏');
      },
    },
  };
</script>
```

### 单向数据流

根据单向数据流的规则，子组件不能直接修改父组件传递的 `props`。例如：`this.value='隐藏'` 。这样浏览器控制台会报错：<font v-pre color="red">Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "value"。</font>

必须通过 `this.$emit()` 触发自定义事件，并通过传参进行修改。

### 更改名称

**如果想要更改 `prop` 或事件名称，则需要在 `Children` 组件中添加 `model` 选项：**

```html
<!-- ParentComponent.vue -->

<ChildComponent v-model="show" />
```

```html
<template>
  <div>
    <div>{{ title }}</div>
    <button @click="handleChange">点击隐藏</button>
  </div>
</template>

<script>
  export default {
    // model 用于更改 prop 和 事件名称
    model: {
      prop: 'title', // 此时 value 变成了 title
      event: 'change', // 此时 input 事件变成了 change 事件
    },
    props: {
      title: {
        type: String,
        require: true,
        default: '显示',
      },
    },
    emits: ['change'],
    data() {
      return {};
    },
    methods: {
      handleChange() {
        // 此时触发的就应该是更名后的 change 事件，而不是 input事件
        this.$emit('change', '隐藏');
      },
    },
  };
</script>
```

所以，在这个例子中 `v-model` 是以下的简写：

```html
<ChildComponent :title="show" @change="show = $event" />
```

### 使用 `v-bind.sync`

有些时候我们需要对某个 `prop` 进行 `双向绑定`，除了用 `v-model` 的方式，我们还可以用 `update:myPropName` 的方式抛出事件从而达到双向绑定的目的。

```js
this.$emit('update:title', newValue);
```

然后父组件可以在需要时监听该事件，并更新本地的 data property。例如：

```html
<ChildComponent :title="show" @update:title="show = $event" />
```

为了方便起见，我们可以使用 `.sync` 修饰符来缩写，如下所示：

```html
<ChildComponent :title.sync="show" />
```

案例：

**Father 组件**

```html
<!-- 父组件 -->
<template>
  <div>
    <h1>父组件</h1>
    <Children :title.sync="show" />
  </div>
</template>

<script>
  import Children from './Children.vue';
  export default {
    name: 'Father',
    components: {
      Children,
    },
    data() {
      return {
        show: '显示',
      };
    },
  };
</script>
```

**Children 组件**

```html
<!-- 子组件 -->
<template>
  <div>
    <div>{{ title }}</div>
    <button @click="handleChange">点击隐藏</button>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        require: true,
        default: '显示',
      },
    },
    emits: ['update:title'],
    data() {
      return {};
    },
    methods: {
      handleChange() {
        // 通过触发 update:title 事件来实现 prop 双向绑定
        this.$emit('update:title', '隐藏');
      },
    },
  };
</script>
```

## 3.x 语法

### 基本语法

在 Vue3.x 中，自定义组件上的 `v-model` 相当于传递了 prop `modelValue` 和事件 `update:modelValue`。

对比 Vue2.x 的变更：`value` 更改为了 `modelValue`，`input` 事件更改为了 `update:modelValue`。

```html
<ChildComponent v-model="show" />

<!-- 是以下的简写: -->

<ChildComponent :modelValue="show" @update:modelValue="show = $event" />
```

`Father` 组件中通过给 `Children` 组件绑定 `v-model`，子组件通过 `setup` 函数得到，`props` 和 `emit`函数。 props 中的 `modelValue` 就是 Vue2.x 中 `v-model` 的 `value`，emit 触发的 `update:modelValue` 就是 `input`。

**Father 组件**

```html
<!-- 父组件 -->
<template>
  <h1>{{ show }}</h1>
  <Children v-model="show" />
</template>

<script lang="ts">
  import Children from './Children.vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: {
      Children,
    },
    setup() {
      let show = ref('显示');
      return {
        show,
      };
    },
  });
</script>
```

**Children 组件**

```html
<!-- Children组件 -->
<template>
  <h1>{{ modelValue }}</h1>
  <button @click="handleChange">点击隐藏</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      modelValue: {
        type: String,
        require: true,
        default: '显示',
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const handleChange = () => {
        // 不能直接修改props，props是只读的
        // 报错：Set operation on key "modelValue" failed: target is readonly.
        // props.modelValue = '隐藏'

        // 通过触发自定义事件修改
        emit('update:modelValue', '隐藏');
      };
      return {
        handleChange,
      };
    },
  });
</script>
```

### props 只读

根据单向数据流的规则，子组件不能直接修改父组件传递的 props。例如：`props.modelValue = '隐藏'` 。这样浏览器控制台会报错：<font v-pre color="red">Set operation on key "modelValue" failed: target is readonly.</font>

<Alert type="warning">
  Vue3.x中 props 是只读的。
</Alert>

必须通过 `emit('update:modelValue', value)` 触发自定义事件，并通过传参进行修改。

### `v-model` 参数

若需要更改 `model` 的名称，现在我们可以为 `v-model` 传递一个参数，以作为组件内 `model` 选项的替代：

```html
<ChildComponent v-model:title="show" />

<!-- 是以下的简写: -->

<ChildComponent :title="show" @update:title="show = $event" />
```

```html
<!-- Father组件 -->
<Children v-model:title="show" />

<!-- Children组件 -->
<template>
  <h1>{{ title }}</h1>
  <button @click="handleChange">点击隐藏</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      title: {
        type: String,
        require: true,
        default: '显示',
      },
    },
    emits: ['update:title'],
    setup(props, { emit }) {
      const handleChange = () => {
        emit('update:title', '隐藏');
      };
      return {
        handleChange,
      };
    },
  });
</script>
```

如上所示，给子组件绑定 `v-model:title="show"` 后，子组件中 `modelValue` 就可以改变为 `title`，从而自定义事件 `update:modelValue` 也相继改变成了 `update:title`。

这也可以作为 [.sync](/vue3/start/v-model#使用-v-bindsync) 修饰符的替代，而且允许我们在自定义组件上使用多个 `v-model`。

```html
<ChildComponent v-model:title="show" v-model:content="text" />

<!-- 是以下的简写： -->

<ChildComponent
  :title="show"
  @update:title="show = $event"
  :content="text"
  @update:content="text = $event"
/>
```

### `v-model` 修饰符

除了像 `.trim` 这样的 2.x 硬编码的 `v-model` 修饰符外，现在 3.x 还支持自定义修饰符：

```html
<ChildComponent v-model.capitalize="show" />
```

示例：自定义修饰符 `capitalize`，它将 `v-model` 绑定提供的字符串的第一个字母大写。

```html
<!-- Father组件 -->
<Children v-model.capitalize="helloWorld" />

<!-- Children组件 -->
<template>
  <input type="text" placeholder="请输入" :value="modelValue" @input="handleChange" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      modelValue: {
        type: String,
        require: true,
        default: 'helloWorld',
      },
      // 添加到组件 v-model 的修饰符将通过 modelModifiers prop 提供给组件。
      modelModifiers: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      console.log(props.modelModifiers.capitalize); // 输出：true

      // input监听
      const handleChange = (event: Event) => {
        let value = (event.target as HTMLInputElement).value;
        // 如果绑定了修饰符 capitalize 就将 value 首字母大写
        if (props.modelModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        emit('update:modelValue', value);
      };
      return {
        handleChange,
      };
    },
  });
</script>
```

添加到组件 `v-model` 的修饰符将通过 `modelModifiers` prop 提供给组件。在示例中，我们创建了一个组件，其中包含默认为空对象的 `modelModifiers` prop。

请注意，当组件的 `setup()` 触发时，`modelModifiers` prop 会包含 `capitalize`，且其值为 `true`——因为 `capitalize` 被设置在了写为 `v-model.capitalize="title"` 的 `v-model` 绑定上。

**对于带参数的 `v-model` 的修饰符绑定，生成的 prop 名称将为 `arg + "Modifiers"`：**

```html
<Children v-model:title.capitalize="helloWorld" />
```

```html
<!-- Children组件 -->
<template>
  <input type="text" placeholder="请输入" :value="title" @input="handleChange" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      title: {
        type: String,
        require: true,
        default: 'helloWorld',
      },
      // 对于带参数的 v-model 的修饰符绑定，生成的 prop 名称将为 arg + "Modifiers"：
      titleModifiers: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ['update:title'],
    setup(props, { emit }) {
      console.log(props.titleModifiers.capitalize); // 输出：true

      // input监听
      const handleChange = (event: Event) => {
        let value = (event.target as HTMLInputElement).value;
        // 如果绑定了修饰符 capitalize 就将 value 首字母大写
        if (props.titleModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        emit('update:title', value);
      };
      return {
        handleChange,
      };
    },
  });
</script>
```
