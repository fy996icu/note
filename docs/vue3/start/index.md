---
group:
  title: 快速上手
order: 0
---

# 认识Vue3

## 了解相关信息

- Vue.js 3.0 "One Piece" 正式版在今年 9 月份发布。

- 2 年多开发, 100+位贡献者, 2600+次提交, 600+次 PR。

- **<font v-pre color="red">Vue3 支持 vue2 的大多数特性。</font>**

- **<font v-pre color="red">更好的支持 Typescript。</font>**


## 性能提升

- 打包大小减少 41%。

- 初次渲染快 55%, 更新渲染快 133%。

- 内存减少 54%。

- **<font v-pre color="red">使用 Proxy 代替 defineProperty 实现数据响应式。</font>**

- **<font v-pre color="red">重写虚拟 DOM 的实现和 Tree-Shaking。</font>**

## 主流组件库

<Alert type="info">
  现在主流组件库都已经发布了支持vue3.0的版本，其他生态也在不断地完善中，这是趋势。
</Alert>

- [Element Plus](https://element-plus.gitee.io/zh-CN/)，基于 Vue 3，面向设计师和开发者的组件库。

- [Ant Design of Vue](https://next.antdv.com/docs/vue/introduce-cn)，这里是 Ant Design 的 Vue3.x 实现，开发和服务于企业级后台产品。

- [Naive UI](https://www.naiveui.com/zh-CN/os-theme)，一个 Vue 3 组件库比较完整，主题可调，使用 TypeScript，不算太慢有点意思。

- [Vant 4](https://youzan.github.io/vant/v4/#/zh-CN)，轻量、可靠的移动端 Vue3.x 组件库。

## 新增特性

- **<font v-pre color="red">Composition (组合) API</font>**

- **<font v-pre color="red">setup</font>**
 
  - ref 和 reactive

  - computed 和 watch

  - 新的生命周期函数

  - provide 与 inject

  - Web Components

  - ...

- 新组件

  - Fragment - 文档碎片

  - Teleport - 瞬移组件的位置

  - Suspense - 异步加载组件的 loading 界面

- 其它 API 更新

  - 全局 API 的修改

  - 将原来的全局 API 转移到应用对象

  - 模板语法变化
