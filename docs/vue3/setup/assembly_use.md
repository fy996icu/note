---
group:
  title: Script Setup
order: 2
---

<BackTop></BackTop>

# 组件的使用

## 组件自动注册

在 `<script setup>` 中，引入的组件可以直接使用，无需再通过 `components` 进行注册，并且无法指定当前组件的名字，它会自动以文件名为主，也就是不用再写 `name` 属性了，示例：

```html
<template>
  <!-- 模板中直接使用组件 -->
  <ChildComponent />
</template>

<script setup>
  // 导入组件
  import ChildComponent from './ChildComponent.vue';
</script>
```

其 `kebab-case` 格式的 `<child-component>` 同样能在模板中使用。不过，强烈建议使用 `PascalCase` 格式作为组件标签名，以便于更好的一致性，**同时也有助于区分原生的自定义元素**。

上述代码编译后的 JS 代码如下，同样可以看到 `ChildComponent` 被当做了 `变量` 引入。

```js
/* Analyzed bindings: {
  "ChildComponent": "setup-const"
} */
import { openBlock as _openBlock, createBlock as _createBlock } from 'vue';
import ChildComponent from './ChildComponent.vue';

const __sfc__ = {
  setup(__props) {
    return (_ctx, _cache) => {
      // ChildComponent 当成变量引用且直接在 setup 函数导出
      return _openBlock(), _createBlock(ChildComponent);
    };
  },
};
__sfc__.__file = 'App.vue';
export default __sfc__;
```

## 动态组件

动态组件仍然是使用 `is`，相对于 vue2.x 没有变化。

由于组件被引用为 `变量` 而不是作为字符串键来注册的，在 `<script setup>` 中要使用动态组件的时候，就应该使用动态的 `:is` 来绑定：

```html
<script setup>
  import Foo from './Foo.vue';
  import Bar from './Bar.vue';
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>
```

## 递归组件

### 什么是递归组件

<Alert type="info">
  递归组件是调用自身的组件。
</Alert>

递归组件什么时候有用？ 只要咱们需要使用相同的模板结构，但需要使用分层输入数据，就可以使用递归。 比如 `树状视图`、`嵌套菜单` 等组件。

```html
<!-- List 组件 -->
<template>
  <div>
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="item-name">
        <span>{{item.name}}</span>
      </div>
      <div v-if="item.children" class="children-item">
        <!-- List 组件内调用自己 -->
        <List :list="item.children"></List>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'List',
    props: {
      list: Array,
    },
  };
</script>
```

注意上面的代码中我们使用了 `List` 组件本身，完成这些之后，我们在外部父级组件中使用 `List` 组件时，不管我们的数据有多少层嵌套关系，都可以完美的自适应加载，我们再也不用通过嵌套嵌套在嵌套了。

### 数据形式

递归组件的数据层级一般是多级或者后端返回的数据层级未知，例如下面这种形式：

```js
list: [
  {
    name: '节点1',
    children: [
      {
        name: '节点1-1',
        children: [
          {
            name: '节点1-1-1',
          },
          {
            name: '节点1-1-2',
          },
        ],
      },
      {
        name: '节点1-2',
        children: [
          {
            name: '节点1-2-1',
          },
          {
            name: '节点1-2-2',
          },
        ],
      },
    ],
  },
];
```

### 具体实现

父组件 `FatherBox.vue`:

```html
<template>
  <!-- 使用递归组件 -->
  <ListChild :list="list" />
</template>

<script setup lang="ts">
  // 导入递归组件
  import ListChild from './components/ListChild.vue';
  import { ref } from 'vue';
  // 定义递归组件数据
  const list = ref([
    {
      name: '节点1',
      children: [
        {
          name: '节点1-1',
          children: [
            {
              name: '节点1-1-1',
            },
            {
              name: '节点1-1-2',
            },
          ],
        },
        {
          name: '节点1-2',
          children: [
            {
              name: '节点1-2-1',
            },
            {
              name: '节点1-2-2',
            },
          ],
        },
      ],
    },
  ]);
</script>
```

递归组件 `ListChild.vue`:

```html
<template>
  <div>
    <div v-for="(item, index) in list" :key="item" class="list-item">
      <div class="item-name">
        <span>{{ item.name }}</span>
      </div>
      <div v-if="item.children" class="children-item">
        <!-- List 组件内调用自己 -->
        <ListChild :list="item.children" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    list: Array,
  });
</script>
```

因为自动组件名推断的缘故，一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 `ListChild.vue` 的组件可以在其模板中用 `<ListChild/>` 引用它自己。

请注意这种方式相比于 `import` 导入的组件和自主注册的组件优先级更低。所有如果有命名的 `import` 导入和组件的推断名冲突了，可以使用 `import` 别名导入：

```js
import { ListChild as ListChildBox } from './components/ListChild.vue';
```

## 命名空间组件

可以使用带点的组件标记，例如 `<Foo.Bar>` 来引用嵌套在对象属性中的组件。这在需要从单个文件中导入多个组件的时候非常有用。

`Components/index.ts` 用于导出组件:

```ts
import Foo from './Foo.vue';
import Bar from './Bar.vue';

export { Foo, Bar };
```

`index.vue` 基于命名空间使用组件:

```html
<script setup lang="ts">
  import * as Form from '../Components';
</script>

<template>
  <Form.Foo />
  <Form.Bar />
</template>
```

## 组件命名

在 SFC 中，虽然 `<script setup>` 中无法显示定义组件名称，但是 `<script>` 是支持的，同时在一个 SFC 是支持 `<script setup>` 与 `<script>` 同时存在的，因此，可以像下述代码一样显示定义组件名称。

```html
<script lang="ts">
  export default { name: 'CustomComponentsName' };
</script>

<script setup lang="ts">
  // code
</script>

<template>
  <p>利用 script 自定义组件名称</p>
</template>
```
