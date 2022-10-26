---
title: Vite 插件
toc: menu
order: 11
---

<BackTop></BackTop>

# Vite 插件库

## 打包分析

```bash
# npm
npm i rollup-plugin-visualizer -D

# yarn
yarn add rollup-plugin-visualizer -D

# pnpm
pnpm add rollup-plugin-visualizer -D
```

**插件名称：**[rollup-plugin-visualizer](https://www.npmjs.com/package/rollup-plugin-visualizer)

**在线示例：**[点击查看示例](https://github.com/btd/rollup-plugin-visualizer)

**插件简介：** 可视化并分析您的 Rollup 捆绑包以查看哪些模块占用了空间。

**配置方式：**

```ts
// vite.config.ts

// 打包分析
import { visualizer } from 'rollup-plugin-visualizer'

// 当前的执行命令
const lifecycle = process.env.npm_lifecycle_event

// 插件数组
const plugins = [
  vue(),
  vueJsx(),
]

// visualizer 命令显示打包分析
if (lifecycle === 'visualizer') {
  plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true }))
}

export default defineConfig({
  plugins,
})
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/rollup-plugin-visualizer.png)


## 自动导入组件

```bash
# npm
npm i unplugin-vue-components -D

# yarn
yarn add unplugin-vue-components -D

# pnpm
pnpm add unplugin-vue-components -D
```

**插件名称：**[unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)

**在线示例：**[点击查看示例](https://github.com/antfu/unplugin-vue-components)

**插件简介：** Vue 的按需组件自动导入。

**配置方式：**

```ts
// vite.config.ts

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 自动导入插件
import Components from 'unplugin-vue-components/vite'

// 导入对应的 UI 解析器，这里导入的是 AntDesignVue组件库的解析器
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 自动导入组件
    Components({
      // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      dirs: ['src/components'],
      // 指定类型声明文件，为true时在项目根目录创建
      dts: 'types/components.d.ts',
      // 组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      // 解析器
      resolvers: [
        AntDesignVueResolver({
          // 是否需要自动引入加载对应的组件样式
          importStyle: 'less',
          // 自动引入 ant-design/icons-vue中的图标，需要安装@ant-design/icons-vue
          resolveIcons: true,
        }),
      ],
    }),
  ],
})
```

## 自动导入 API


```bash
# npm
npm i unplugin-auto-import -D

# yarn
yarn add unplugin-auto-import -D

# pnpm
pnpm add unplugin-auto-import -D
```

**插件名称：**[unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)

**在线示例：**[点击查看示例](https://github.com/antfu/unplugin-auto-import#readme)

**插件简介：** 自动导入 Vite、Webpack、Rollup、Vue、React 和 esbuild 的 API。支持 TypeScript。由unplugin提供支持。

**配置方式：**

```ts
// vite.config.ts

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 自动导入 api
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 自动导入 api
    AutoImport({
      // 目标文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 全局导入的插件
      imports: [
        // 预设
        'vue',
        'vue-router',
        // 自定义插件-根据自己需求配置
        {
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        },
      ],
      // 在Vue模板内自动导入
      vueTemplate: false,
      // 自定义解析器, 与unplugin-vue-components兼容，例如：AntDesignVueResolver
      resolvers: [],
      // 自动导入目录下的模块——配置目录
      dirs: [],
      // 声明文件生成位置和文件名称，为true时在项目根目录自动创建
      dts: 'types/auto-imports.d.ts',
      // eslint报错解决
      eslintrc: {
        // 此处为true运行后会生成.eslintrc-auto-import.json文件
        enabled: true, // 此处第一次运行使用true,之后改为false
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true,
      },
    }),
  ],
})
```

## 自定义组件名

```bash
# npm
npm i vite-plugin-vue-setup-extend -D

# yarn
yarn add vite-plugin-vue-setup-extend -D

# pnpm
pnpm add vite-plugin-vue-setup-extend -D
```

**插件名称：**[vite-plugin-vue-setup-extend](https://www.npmjs.com/package/vite-plugin-vue-setup-extend)

**在线示例：**[点击查看示例](https://github.com/vbenjs/vite-plugin-vue-setup-extend/tree/main#readme)

**插件简介：** Vue3.x 使用 `script setup` 自定义设置组件名。

**配置方式：**

```ts
// vite.config.ts

// 自定义组件名插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

export default defineConfig({
  plugins: [
    VueSetupExtend()
  ],
})
```

## 加载 SVG 图标

```bash
# npm
npm i vite-plugin-svg-icons -D

# yarn
yarn add vite-plugin-svg-icons -D

# pnpm
pnpm add vite-plugin-svg-icons -D
```

**插件名称：**[vite-plugin-svg-icons](https://www.npmjs.com/package/vite-plugin-svg-icons)

**在线示例：**[点击查看示例](https://github.com/anncwb/vite-plugin-svg-icons/tree/master/#readme)

**插件简介：** 用于生成 svg 雪碧图。

**配置方式：**

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
