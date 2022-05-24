---
group:
  title: 快速上手
order: 7
---

# getCurrentInstance

在 Vue2 中访问当前组件实例使用 `this`，但是在 Vue3 中无法使用 `this`，但是我们可以通过 `getCurrentInstance` 访问当前组件实例。

`getCurrentInstance` 只暴露给高阶使用场景，典型的比如在库中。强烈反对在应用的代码中使用 `getCurrentInstance`。请不要把它当作在组合式 API 中获取 `this` 的替代方案来使用。

```html
<!-- 父组件 -->
<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    // 通过 getCurrentInstance() 获取到当前组件实例
    const internalInstance = getCurrentInstance()

    // 当前组件实例
    console.log(internalInstance)
    return {}
  },
})
</script>
```

`getCurrentInstance` 只能在 `setup` 或 `生命周期钩子` 中调用。

如需在 `setup` 或 `生命周期钩子` 外使用，请先在 `setup` 中调用 `getCurrentInstance()` 获取该实例然后再使用。

```js
const MyComponent = {
  setup() {
    const internalInstance = getCurrentInstance() // 有效

    const id = useComponentId() // 有效

    const handleClick = () => {
      getCurrentInstance() // 无效
      useComponentId() // 无效

      internalInstance // 有效
    }

    onMounted(() => {
      getCurrentInstance() // 有效
    })

    return () =>
      h(
        'button',
        {
          onClick: handleClick
        },
        `uid: ${id}`
      )
  }
}

// 在组合式函数中调用也可以正常执行
function useComponentId() {
  return getCurrentInstance().uid
}
```
