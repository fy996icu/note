---
title: 根配置文件
toc: menu
order: 6
---

# 根配置文件

## .browserslistrc

```text
> 1%
last 2 versions
not dead
```

## .editorconfig

```text
# 表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件
root = true
# 匹配的文件
[*.{js,jsx,ts,tsx,vue,json}]
# 设置编码
charset = utf-8

# 设置缩进风格(tab是硬缩进，space为软缩进)
indent_style = tab

# 缩进的宽度
# indent_size = 8

# tab缩进的列数
tab_width = 2

# 设为true表示会去除换行行首的任意空白字符
trim_trailing_whitespace = true

# 设为true表示使文件以一个空白行结尾
insert_final_newline = true
```

## .env

**`.env.development`**

除 `NODE_ENV` 外，只能以 `VUE_APP_` 开头，并且为大写。

```text
NODE_ENV = development
VUE_APP_HOST = http://xxx.com
```

**`.env.production`**

```text
NODE_ENV = production
VUE_APP_HOST = http://xxx.com
```

**`.env.test`**

```text
NODE_ENV = test
VUE_APP_HOST = http://xxx.com
```

## .eslintrc.js

根据需求自由添加

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': 2, //禁止使用var声明变量
    'no-new-func': 2, //禁止使用new Function
    'no-new-object': 2, //禁止使用new Object()
    'no-new-require': 2, //禁止使用new require
    'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
    eqeqeq: 2, //必须使用全等
  },
  globals: { WeixinJSBridge: false }, // 全局不校验
};
```

## .gitignore

根据需求自由添加

```git
.DS_Store
node_modules
/dist


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## .prettierrc

根据需求自由添加

```json
{
  "arrowParens": "avoid",
  "trailingComma": "none"
}
```

## babel.config.js

```js
// 项目在发布时需要用到的babel插件数组
const proPlugins = [];
// 生产环境去掉console
if (process.env.NODE_ENV === 'production') {
  proPlugins.push('transform-remove-console');
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ...proPlugins,
    // 此处为vantUI按需加载
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/less`,
      },
      'vant',
    ],
  ],
};
```

## postcss.config.js

移动端项目可配置该文件

```js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 此处配置是vantUI按需加载
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
      selectorBlackList: ['.no-rem'], // 不转换以no-rem开头的class
    },
  },
};
```

## vue.config.js

vue 项目根目录新建`vue.config.js`文件：

配置如下：

```js
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'element_for_vue2.x',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  // 关闭生产环境的 source map
  productionSourceMap: false,
  // 配置代理
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_HOST,
        changeOrigin: true,
      },
    },
  },
};
```
