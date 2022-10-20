---
title: 移除 console
toc: menu
order: 7
---

<BackTop></BackTop>

# 生产环境移除 `console` 和 `debugger`

在开发的时候我们一般会使用很多 `console` 和 `debugger` 来调试代码，但是这些调试代码在生产环境下是不需要的，我们在发布到生产环境前一条条的删除太麻烦了，万一后面开发的时候又需要用到这些调试代码呢，所以我们可以借助 `vite` 的打包配置去掉生产环境下的 `console` 和 `debugger`，不影响我们的开发环境。

## build 配置

`vite.config.ts`中 `build` 下必须配置 `minify`（压缩方式），[压缩方式对比率查看](https://github.com/privatenumber/minification-benchmarks)。

配置 `vite.config.ts` 文件：

```ts
// vite.config.ts

export default defineConfig({
  plugins:[vue(), vueJsx()],
  // 打包配置
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 移除 console
        drop_console: true,
        // 移除 debugger
        drop_debugger: true,
      },
    },
  },
})
```

这样在执行 `npm run build` 发布到生产环境打包的代码就移除了 `console` 和 `debugger`。

## esbuild 配置

如果使用 `esbuild` 来构建，移除 `console` 和 `debugger` 需要如下配置：

```ts
export default defineConfig(({ command }) => ({
  plugins:[vue(), vueJsx()],
  // 打包配置
  esbuild: {
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
}))
```

这样在执行 `npm run build` 发布到生产环境打包的代码就移除了 `console` 和 `debugger`。

<Badge>注意</Badge>：该 `command` 值在开发环境（即 CLI 命令 `vite`、`vite dev` 和 `vite serve`） 为 `serve`。

## 失效问题

如果将 `minify` 设置为 `esbuild`，将不会移除 `console` 和 `debugger`，并且在打包的时候会有一个警告提示：

><font color="red">build.terserOptions is specified but build.minify is not set to use Terser. Note Vite now defaults to use esbuild for minification. If you still prefer Terser, set build.minify to "terser".</font>


提示构建的时候 `terserOptions` 被设置，但是未将 `minify` 设置为 `terser`， Vite 现在默认使用 `esbuild` 进行压缩，如果你喜欢 `terser` 需要将 `minify` 设置为 `terser`。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/esbuild-noterser.png)
