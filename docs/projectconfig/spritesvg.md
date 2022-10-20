---
title: 加载 SVG
toc: menu
order: 8
---

<BackTop></BackTop>

# SVG 生成 Sprite 图

在项目中使用 svg 图片的时候要么使用 `img` 标签直接引入这个 svg 图片，或者直接将这个图片的 svg 代码放在页面中，这样操作起来会相当麻烦，不便于我们动态控制和切换。

我们可以将所有 svg 图片放置在统一管理的 `svg` 目录里面，通过插件动态加载到组件里面，可以修改颜色、设置大小等配置。

## 目录配置方式

使用 `vite-plugin-svg-icons` 插件，用于生成 svg 雪碧图。

**预加载**：在项目运行时就生成所有图标，只需操作一次 dom。

**高性能**：内置缓存，仅当文件被修改时才会重新生成。

### 安装插件

```bash
# npm
npm i vite-plugin-svg-icons -D

# yarn
yarn add vite-plugin-svg-icons -D

# pnpm
pnpm add vite-plugin-svg-icons -D
```

### 配置插件

配置 `vite.config.ts` 文件：

```ts
// vite.config.ts

// 加载 svg 生成雪碧图
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
const pathResole = (pathStr: string) => path.resolve(__dirname, pathStr)

export default defineConfig({
  plugins:[
    vue(),
    vueJsx(),
    // 配置 svg
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResole('src/assets/images/svg')],
      // 指定 symbolId 格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
})
```

配置 `main.ts` 文件，在 `src/main.ts` 内引入注册脚本。

```ts
// 注册生成 svg 雪碧图的脚本
import 'virtual:svg-icons-register'
```

TypeScript 支持：如果使用 Typescript，你可以在 `tsconfig.json` 内添加：

```json
// tsconfig.json

{
  "compilerOptions": {
    "types": ["vite-plugin-svg-icons/client"]
  }
}
```

到这里 svg 雪碧图已经生成。

### 封装组件

封装一个全局组件 `SvgIcon`，方便我们直接使用生成的 svg 雪碧图。

在 `src/components` 目录下新建 `SvgIcon/index.vue` 组件。如果出现报错 `error Component name 'index' should always be multi-word vue/multi-word-component-names`，请查看：[驼峰命名报错](/projectconfig/issue#驼峰命名报错)。

该组件接收三个 props：

- name: svg名称

- size：svg组件大小

- color：svg组件颜色

```html
<!-- src/components/SvgIcon/index.vue -->

<script setup lang="ts">
import { computed } from 'vue'

type SvgIconProps = {
  name: string
  size?: string
  color?: string
}
const props = withDefaults(defineProps<SvgIconProps>(), {
  size: '1em',
  color: 'currentColor',
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) return `svg-icon icon-${props.name}`
  return 'svg-icon'
})
</script>

<template>
  <svg :class="svgClass" v-bind="$attrs">
    <use :xlink:href="iconName" ref="external nofollow" />
  </svg>
</template>

<style lang="less" scoped>
.svg-icon {
  width: v-bind(size);
  height: v-bind(size);
  color: v-bind(color);
  fill: currentColor;
  vertical-align: middle;
}
</style>
```

注册为全局组件：

```ts
// main.ts

// 注册全局 svg-icon 组件
import SvgIcon from './components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)
```

<Alert type="info">
  注意，如果使用了 unplugin-vue-components 插件，则不需要注册为全局组件。
</Alert>

### 目录说明

svg 目录结构说明

```text
# src/assets/images/svg/

- vue_logo.svg

# logos 图标目录
- logos/vue.svg
- logos/react.svg
- logos/angular.svg

# tabbar 图标目录
- tabbar/home.svg
- tabbar/my.svg
- tabbar/faxian.svg
```

### 使用组件

<Badge>注意</Badge> 如果图标在 `src/assets/images/svg` 根目录下，在使用的时候 `name` 值就是 svg 的文件名；如果嵌套了目录，比如：`svg/logos/react.svg`、`svg/tabbar/home.svg` 这种，在使用的时候 `name` 值需要拼接目录名：`name="logos-react"`、`name="tabbar-home"`。嵌套了多少层就拼接多少层。

```html
<!-- HomeView.vue -->

<script setup lang="ts"></script>

<template>
  <main>
    <!-- svg 根目录下 -->
    <svg-icon name="vue_logo" size="120px" />

    <!-- svg/logos 目录下 -->
    <svg-icon name="logos-vue" size="120px" color="orange" />
    <svg-icon name="logos-react" size="120px" color="orange" />
    <svg-icon name="logos-angular" size="120px" color="orange" />

    <!-- svg/tabbar 目录下 -->
    <svg-icon name="tabbar-home" size="120px" color="orange" />
    <svg-icon name="tabbar-my" size="120px" color="orange" />
    <svg-icon name="tabbar-faxian" size="120px" color="orange" />
  </main>
</template>

<style scoped lang="less"></style>
```

如果修改颜色不起作用请查看：[颜色问题](/projectconfig/spritesvg#颜色问题)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/load-svg-sprite.png)

## 文件名配置方式

用 `vite-plugin-svg-icons` 插件，如果有目录嵌套，我们需要根据目录拼接来配置组件的 `name` 属性，在使用 svg 图标的时候除了要知道 svg 文件名，还要知道它当前的目录路径，比较麻烦，除非我们把所有图标都放在 `/svg` 根目录下，但是这样所有图标混合在一起很不好管理。

我们可以通过其他方法，即使有目录嵌套，也只需要将 `name` 设置为 svg 文件名就可以使用。

### 封装插件

封装一个加载 svg 的插件，提供给 vite 使用。

新建插件 `src/plugins/svgBuilder.ts`，内容如下：

```ts
// svgBuilder.ts

let idPerfix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g

const hasViewBox = /(viewBox="[^>+].*?")/g

const clearReturn = /(\r)|(\n)/g

function findSvgFile(readFileSync: Function, readdirSync: Function, dir: string): any {
  const svgRes = []
  const dirents = readdirSync(dir, {
    withFileTypes: true,
  })
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(readFileSync, readdirSync, dir + dirent.name + '/'))
    } else {
      const svg = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($2: string) => {
          let width = 0
          let height = 0
          let content = $2.replace(clearHeightWidth, (s2, s3) => {
            if (s2 === 'width') {
              width = s3
            } else if (s2 === 'height') {
              height = s3
            }
            return ''
          })
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          return `<symbol id="${idPerfix}-${dirent.name.replace('.svg', '')}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}

export const svgBuilder = (readFileSync: Function, readdirSync: Function, path: string, perfix = 'icon') => {
  if (path === '') return
  idPerfix = perfix
  const res = findSvgFile(readFileSync, readdirSync, path)
  return {
    name: 'svg-transform',
    transformIndexHtml(html: string) {
      return html.replace(
        '<body>',
        `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${res.join('')}
            </svg>
        `,
      )
    },
  }
}
```

<Badge>注意</Badge> 这里用到了 `fs` 模块的 `readFileSync` 和 `readdirSync` 方法，不能直接导入，客户端不能直接使用 node 的模块，你可以选择安装 `fs` 模块，我这里是选择从 vite 中导入。

### 配置插件

配置 `vite.config.ts`，添加 `svgBuilder.ts`：

```ts
import { defineConfig } from 'vite'

// 导入 fs 模块
import { readFileSync, readdirSync } from 'fs'
// 导入封装加载 svg 的插件
import { svgBuilder } from './src/plugins/svgBuilder'

export default defineConfig({
  plugins: [
    // 加载 svg，传入 readFileSync, readdirSync 和 需要加载的 svg 图标目录
    svgBuilder(readFileSync, readdirSync, './src/assets/images/svg/'),
  ],
})
```

将 `src/plugins/**/*` 目加入 `tsconfig.config.json` 的 `include` 选项：

```json
// tsconfig.config.json

{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": ["vite.config.*", "vitest.config.*", "cypress.config.*", "src/plugins/**/*"],
}
```

### 封装组件

封装一个全局组件 `SvgIcon`，方便我们直接使用生成的 svg 雪碧图。

在 `src/components` 目录下新建 `SvgIcon/index.vue` 组件，如果出现报错 `error Component name 'index' should always be multi-word vue/multi-word-component-names`，请查看：[驼峰命名报错](/projectconfig/issue#驼峰命名报错)。

该组件接收三个 props：

- name: svg名称

- size：svg组件大小

- color：svg组件颜色

```html
<!-- src/components/SvgIcon/index.vue -->

<script setup lang="ts">
import { computed } from 'vue'

type SvgIconProps = {
  name: string
  size?: string
  color?: string
}
const props = withDefaults(defineProps<SvgIconProps>(), {
  size: '1em',
  color: 'currentColor',
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) return `svg-icon icon-${props.name}`
  return 'svg-icon'
})
</script>

<template>
  <svg :class="svgClass" v-bind="$attrs">
    <use :xlink:href="iconName" ref="external nofollow" />
  </svg>
</template>

<style lang="less" scoped>
.svg-icon {
  width: v-bind(size);
  height: v-bind(size);
  color: v-bind(color);
  fill: currentColor;
  vertical-align: middle;
}
</style>
```

注册为全局组件：

```ts
// main.ts

// 注册全局 svg-icon 组件
import SvgIcon from './components/SvgIcon/index.vue'
app.component('svg-icon', SvgIcon)
```

<Alert type="info">
  注意，如果使用了 unplugin-vue-components 插件，则不需要注册为全局组件。
</Alert>


### 目录说明

svg 目录结构说明

```text
# src/assets/images/svg/

- vue_logo.svg

# logos 图标目录
- logos/vue.svg
- logos/react.svg
- logos/angular.svg

# tabbar 图标目录
- tabbar/home.svg
- tabbar/my.svg
- tabbar/faxian.svg
```

### 使用组件

我们在使用 `SvgIcon` 组件的时候，即使有目录嵌套，也只需要设置 `name` 为 svg 图标的文件名即可。

```html
<!-- HomeView.vue -->

<script setup lang="ts"></script>

<template>
  <main>
    <!-- svg 根目录下 -->
    <svg-icon name="vue_logo" size="120px" color="orange" />

    <!-- svg/logos 目录下 -->
    <svg-icon name="vue" size="120px" color="orange" />
    <svg-icon name="react" size="120px" color="orange" />
    <svg-icon name="angular" size="120px" color="orange" />

    <!-- svg/tabbar 目录下 -->
    <svg-icon name="home" size="120px" color="orange" />
    <svg-icon name="my" size="120px" color="orange" />
    <svg-icon name="faxian" size="120px" color="orange" />
  </main>
</template>

<style scoped lang="less"></style>
```

如果修改颜色不起作用请查看：[颜色问题](/projectconfig/spritesvg#颜色问题)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/load-svg-sprite.png)

### 使用必看

- 1、这种方式在使用的时候一定要注意 `./src/assets/images/svg/` 目录下的所有 svg 图标都不能重名，不然会相互覆盖，导致不起做用。<font color="red">建议在 svg 命名的时候带上上级目录名，或者其他不会重名的方法都行</font>。

```text
# 命名建议

- vue.svg ==> logos_vue.svg
- react.svg ==> logos_react.svg
- angular.svg ==> logos_angular.svg

- home.svg ==> tabbar_home.svg
- my.svg ==> tabbar_my.svg
- faxian.svg ==> tabbar_faxian.svg
```

- 2、新增或者修改了 svg 文件需要重启一下项目才会起作用。


## 颜色问题

在使用单色 svg 图标的时候发现我们传入 `SvgIcon` 组件的 `color` 属性自定义颜色有时候不起作用。那是因为 该 svg 可能存在自己的颜色，例如：`fill="#ff0000"`、`stroke="#ff0000"`。

**解决方法：**

将 `fill` 或 `stroke` 属性删除，或者更改为 `fill="currentColor"` 、`stroke="currentColor"`，然后重启项目就行了。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/load-svg-sprite-fill.png)
