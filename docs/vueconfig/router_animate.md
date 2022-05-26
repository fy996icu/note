---
title: 路由切换动画
toc: menu
order: 5
---

<BackTop></BackTop>

# 路由切换动画

作用：路由切换时添加一个过渡效果。

依赖组件：`<transition></transition>`

vue 文件配置：

```html
<!-- 添加过渡组件包裹routerView组件，命名"fade-transform"，模式"out-in" -->
<transition name="fade-transform" mode="out-in">
  <router-view></router-view>
</transition>
```

css/less/scss 配置：

```css
/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  transform: translateX(-30px);
  opacity: 0;
}

.fade-transform-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
```
