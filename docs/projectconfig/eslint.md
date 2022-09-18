---
title: 校验与风格
toc: menu
order: 2
---

<BackTop></BackTop>

# 配置 ESLint + Prettier 代码校验与风格

在团队协作的时候每个人使用的编辑器可能不同，代码风格也不同，这样就可能导致项目代码混乱，代码提交到仓库也可能造成不必要的冲突，所以我们需要使用 [ESLint](http://eslint.cn/) 来校验代码，使用 [Prettier](https://www.prettier.cn/) 来格式化我们的代码，以此来保证每个人的代码是相同的一套校验规则和代码风格。

## 安装 ESLint

1、安装 eslint：

```bash
$ pnpm add eslint eslint-plugin-vue -D
```

2、并安装 `@typescript-eslint/parser` 替代掉默认的解析器：

```bash
$ pnpm add @typescript-eslint/parser -D
```

3、安装对应的插件 `@typescript-eslint/eslint-plugin` 它作为 `eslint` 默认规则的补充：

```bash
$ pnpm add @typescript-eslint/eslint-plugin -D
```

4、初始化 `eslint`，会在根目录下生成 `.eslintrc.cjs` 配置文件：

```bash
$ pnpm eslint --init
```

5、更改 `.eslintrc.cjs`：

```bash
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {}
}
```

## 安装 Prettier

1、安装 `prettier` 和对应依赖插件：

```bash
$ pnpm add prettier eslint-config-prettier eslint-plugin-prettier -D
```

2、项目根目录新建 `.prettierrc` 文件，并根据需求配置：

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
  "trailingComma": "none",
  "arrowParens": "avoid"
}
```

3、更改 `.eslintrc.cjs`，添加 `prettier`：

```bash
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {}
}
```

## 重启 Vs Code

有时候我们配置好后会发现不起作用，这时候我们重启一下 Vs Code 就行了。

## 常用 ESLint 规则

归纳总结了一些常用的 `ESLint` 规则，方便在使用的时候查阅。

### 错误级别

错误级别可以允许你细粒度的控制 ESLint 是如何应用规则。

- `off` or `0` - 关闭规则。

- `warn` or `1` - 将规则视为一个警告。

- `error` or `2` - 将规则视为一个错误。

你的 `.eslintrc` 配置文件可以包含下面的一行：

```json
"extends": "eslint:recommended"
```

由于这行，所有在 [规则页面](http://eslint.cn/docs/rules/) 被标记为 ✅ 的规则将会默认开启。另外，你可以在 [npmjs.com](https://www.npmjs.com/search?q=eslint-config) 搜索 `eslint-config` 使用别人创建好的配置。只有在你的配置文件中扩展了一个可分享的配置或者明确开启一个规则，`ESLint` 才会去校验你的代码。

所有的规则默认都是禁用的。在配置文件中，使用 `"extends": "eslint:recommended"` 来启用推荐的规则，报告一些常见的问题，在下文中这些推荐的规则都带有一个 ✅ 标记。

命令行的 `--fix` 选项用来自动修复规则所报告的问题（目前，大部分是对空白的修复），在下文中会有一个 ✴️ 的图标。

### 错误或逻辑错误

这些规则与 `JavaScript` 代码中可能的错误或逻辑错误有关：

| 默认开启 | 规则 | 说明 |
| :-: | --- | --- |
| ✅ | [`for-direction`](http://eslint.cn/docs/rules/for-direction) | 强制 `for` 循环中更新子句的计数器朝着正确的方向移动 |
| ✅ | [`getter-return`](http://eslint.cn/docs/rules/getter-return) | 强制 `getter` 函数中出现 `return` 语句 |
| ✅ | [`no-async-promise-executor`](http://eslint.cn/docs/rules/no-async-promise-executor) | 禁止使用异步函数作为 Promise executor |
|  | [`no-await-in-loop`](http://eslint.cn/docs/rules/no-await-in-loop) | 禁止在循环中出现 `await` |
| ✅ | [`no-compare-neg-zero`](http://eslint.cn/docs/rules/no-compare-neg-zero) | 禁止与 `-0` 进行比较 |
| ✅ | [`no-cond-assign`](http://eslint.cn/docs/rules/no-cond-assign) | 禁止条件表达式中出现赋值操作符 |
|  | [`no-console`](http://eslint.cn/docs/rules/no-console) | 禁用 `console` |
| ✅ | [`no-constant-condition`](http://eslint.cn/docs/rules/no-constant-condition) | 禁止在条件中使用常量表达式 |
| ✅ | [`no-control-regex`](http://eslint.cn/docs/rules/no-control-regex) | 禁止在正则表达式中使用控制字符 |
| ✅ | [`no-debugger`](http://eslint.cn/docs/rules/no-debugger) | 禁用 `debugger` |
| ✅ | [`no-dupe-args`](http://eslint.cn/docs/rules/no-dupe-args) | 禁止 `function` 定义中出现重名参数 |
| ✅ | [`no-dupe-keys`](http://eslint.cn/docs/rules/no-dupe-keys) | 禁止对象字面量中出现重复的 `key` |
| ✅ | [`no-duplicate-case`](http://eslint.cn/docs/rules/no-duplicate-case) | 禁止出现重复的 `case` 标签 |
| ✅ | [`no-empty`](http://eslint.cn/docs/rules/no-empty) | 禁止出现空语句块 |
| ✅ | [`no-empty-character-class`](http://eslint.cn/docs/rules/no-empty-character-class) | 禁止在正则表达式中使用空字符集 |
| ✅ | [`no-ex-assign`](http://eslint.cn/docs/rules/no-ex-assign) | 禁止对 `catch` 子句的参数重新赋值 |
| ✅ ✴️ | [`no-extra-boolean-cast`](http://eslint.cn/docs/rules/no-extra-boolean-cast) | 禁止不必要的布尔转换 |
| ✴️ | [`no-extra-parens`](http://eslint.cn/docs/rules/no-extra-parens) | 禁止不必要的括号 |
| ✅ ✴️ | [`no-extra-semi`](http://eslint.cn/docs/rules/no-extra-semi) | 禁止不必要的分号 |
| ✅ | [`no-func-assign`](http://eslint.cn/docs/rules/no-func-assign) | 禁止对 `function` 声明重新赋值 |
| ✅ | [`no-inner-declarations`](http://eslint.cn/docs/rules/no-inner-declarations) | 禁止在嵌套的块中出现变量声明或 `function` 声明 |
| ✅ | [`no-invalid-regexp`](http://eslint.cn/docs/rules/no-invalid-regexp) | 禁止 `RegExp` 构造函数中存在无效的正则表达式字符串 |
| ✅ | [`no-irregular-whitespace`](http://eslint.cn/docs/rules/no-irregular-whitespace) | 禁止不规则的空白 |
| ✅ | [`no-misleading-character-class`](http://eslint.cn/docs/rules/no-misleading-character-class) | 不允许在字符类语法中出现由多个代码点组成的字符 |
| ✅ | [`no-obj-calls`](http://eslint.cn/docs/rules/no-obj-calls) | 禁止把全局对象作为函数调用 |
| ✅ | [`no-prototype-builtins`](http://eslint.cn/docs/rules/no-prototype-builtins) | 禁止直接调用 `Object.prototypes` 的内置属性 |
| ✅ ✴️ | [`no-regex-spaces`](http://eslint.cn/docs/rules/no-regex-spaces) | 禁止正则表达式字面量中出现多个空格 |
| ✅ | [`no-sparse-arrays`](http://eslint.cn/docs/rules/no-sparse-arrays) | 禁用稀疏数组 |
|  | [`no-template-curly-in-string`](http://eslint.cn/docs/rules/no-template-curly-in-string) | 禁止在常规字符串中出现模板字面量占位符语法 |
| ✅ | [`no-unexpected-multiline`](http://eslint.cn/docs/rules/no-unexpected-multiline) | 禁止出现令人困惑的多行表达式 |
| ✅ | [`no-unreachable`](http://eslint.cn/docs/rules/no-unreachable) | 禁止在 `return`、`throw`、`continue` 和 `break` 语句之后出现不可达代码 |
| ✅ | [`no-unsafe-finally`](http://eslint.cn/docs/rules/no-unsafe-finally) | 禁止在 `finally` 语句块中出现控制流语句 |
| ✅ ✴️ | [`no-unsafe-negation`](http://eslint.cn/docs/rules/no-unsafe-negation) | 禁止对关系运算符的左操作数使用否定操作符 |
| ✅ | [`require-atomic-updates`](http://eslint.cn/docs/rules/require-atomic-updates) | 禁止由于 `await` 或 `yield` 的使用而可能导致出现竞态条件的赋值 |
| ✅ | [`use-isnan`](http://eslint.cn/docs/rules/use-isnan) | 要求使用 `isNaN()` 检查 `NaN` |
| ✅ | [`valid-typeof`](http://eslint.cn/docs/rules/valid-typeof) | 强制 `typeof` 表达式与有效的字符串进行比较 |

### 最佳实践

这些规则是关于最佳实践的，帮助你避免一些问题

| 默认开启 | 规则 | 说明 |
| :-: | --- | --- |
|  | [`accessor-pairs`](http://eslint.cn/docs/rules/accessor-pairs) | 强制 `getter` 和 `setter` 在对象中成对出现 |
|  | [`array-callback-return`](http://eslint.cn/docs/rules/array-callback-return) | 强制数组方法的回调函数中有 `return` 语句 |
|  | [`block-scoped-var`](http://eslint.cn/docs/rules/block-scoped-var) | 强制把变量的使用限制在其定义的作用域范围内 |
|  | [`class-methods-use-this`](http://eslint.cn/docs/rules/class-methods-use-this) | 强制类方法使用 `this` |
|  | [`complexity`](http://eslint.cn/docs/rules/complexity) | 指定程序中允许的最大环路复杂度 |
|  | [`consistent-return`](http://eslint.cn/docs/rules/consistent-return) | 要求 `return` 语句要么总是指定返回的值，要么不指定 |
| ✴️ | [`curly`](http://eslint.cn/docs/rules/curly) | 强制所有控制语句使用一致的括号风格 |
|  | [`default-case`](http://eslint.cn/docs/rules/default-case) | 要求 `switch` 语句中有 `default` 分支 |
| ✴️ | [`dot-location`](http://eslint.cn/docs/rules/dot-location) | 强制在点号之前和之后一致的换行 |
| ✴️ | [`dot-notation`](http://eslint.cn/docs/rules/dot-notation) | 强制尽可能地使用点号 |
| ✴️ | [`eqeqeq`](http://eslint.cn/docs/rules/eqeqeq) | 要求使用 `===` 和 `!==` |
|  | [`guard-for-in`](http://eslint.cn/docs/rules/guard-for-in) | 要求 `for-in` 循环中有一个 `if` 语句 |
|  | [`max-classes-per-file`](http://eslint.cn/docs/rules/max-classes-per-file) | 强制每个文件中包含的的类的最大数量 |
|  | [`no-alert`](http://eslint.cn/docs/rules/no-alert) | 禁用 `alert`、`confirm` 和 `prompt` |
|  | [`no-caller`](http://eslint.cn/docs/rules/no-caller) | 禁用 `arguments.caller` 或 `arguments.callee` |
| ✅ | [`no-case-declarations`](http://eslint.cn/docs/rules/no-case-declarations) | 不允许在 `case` 子句中使用词法声明 |
| ✴️ | [`no-div-regex`](http://eslint.cn/docs/rules/no-div-regex) | 禁止除法操作符显式的出现在正则表达式开始的位置 |
| ✴️ | [`no-else-return`](http://eslint.cn/docs/rules/no-else-return) | 禁止 `if` 语句中 `return` 语句之后有 `else` 块 |
|  | [`no-empty-function`](http://eslint.cn/docs/rules/no-empty-function) | 禁止出现空函数 |
| ✅ | [`no-empty-pattern`](http://eslint.cn/docs/rules/no-empty-pattern) | 禁止使用空解构模式 |
|  | [`no-eq-null`](http://eslint.cn/docs/rules/no-eq-null) | 禁止在没有类型检查操作符的情况下与 `null` 进行比较 |
|  | [`no-eval`](http://eslint.cn/docs/rules/no-eval) | 禁用 `eval()` |
|  | [`no-extend-native`](http://eslint.cn/docs/rules/no-extend-native) | 禁止扩展原生类型 |
| ✴️ | [`no-extra-bind`](http://eslint.cn/docs/rules/no-extra-bind) | 禁止不必要的 `.bind()` 调用 |
| ✴️ | [`no-extra-label`](http://eslint.cn/docs/rules/no-extra-label) | 禁用不必要的标签 |
| ✅ | [`no-fallthrough`](http://eslint.cn/docs/rules/no-fallthrough) | 禁止 `case` 语句落空 |
| ✴️ | [`no-floating-decimal`](http://eslint.cn/docs/rules/no-floating-decimal) | 禁止数字字面量中使用前导和末尾小数点 |
| ✅ | [`no-global-assign`](http://eslint.cn/docs/rules/no-global-assign) | 禁止对原生对象或只读的全局对象进行赋值 |
| ✴️ | [`no-implicit-coercion`](http://eslint.cn/docs/rules/no-implicit-coercion) | 禁止使用短符号进行类型转换 |
|  | [`no-implicit-globals`](http://eslint.cn/docs/rules/no-implicit-globals) | 禁止在全局范围内使用变量声明和 `function` 声明 |
|  | [`no-implied-eval`](http://eslint.cn/docs/rules/no-implied-eval) | 禁止使用类似 `eval()` 的方法 |
|  | [`no-invalid-this`](http://eslint.cn/docs/rules/no-invalid-this) | 禁止 `this` 关键字出现在类和类对象之外 |
|  | [`no-iterator`](http://eslint.cn/docs/rules/no-iterator) | 禁用 `__iterator__` 属性 |
|  | [`no-labels`](http://eslint.cn/docs/rules/no-labels) | 禁用标签语句 |
|  | [`no-lone-blocks`](http://eslint.cn/docs/rules/no-lone-blocks) | 禁用不必要的嵌套块 |
|  | [`no-loop-func`](http://eslint.cn/docs/rules/no-loop-func) | 禁止在循环语句中出现包含不安全引用的函数声明 |
|  | [`no-magic-numbers`](http://eslint.cn/docs/rules/no-magic-numbers) | 禁用魔术数字 |
| ✴️ | [`no-multi-spaces`](http://eslint.cn/docs/rules/no-multi-spaces) | 禁止使用多个空格 |
|  | [`no-multi-str`](http://eslint.cn/docs/rules/no-multi-str) | 禁止使用多行字符串 |
|  | [`no-new`](http://eslint.cn/docs/rules/no-new) | 禁止使用 new 以避免产生副作用 |
|  | [`no-new-func`](http://eslint.cn/docs/rules/no-new-func) | 禁止对 `Function` 对象使用 `new` 操作符 |
|  | [`no-new-wrappers`](http://eslint.cn/docs/rules/no-new-wrappers) | 禁止对 `String`，`Number` 和 `Boolean` 使用 `new` 操作符 |
| ✅ | [`no-octal`](http://eslint.cn/docs/rules/no-octal) | 禁用八进制字面量 |
|  | [`no-octal-escape`](http://eslint.cn/docs/rules/no-octal-escape) | 禁止在字符串中使用八进制转义序列 |
|  | [`no-param-reassign`](http://eslint.cn/docs/rules/no-param-reassign) | 禁止对 `function` 的参数进行重新赋值 |
|  | [`no-proto`](http://eslint.cn/docs/rules/no-proto) | 禁用 `__proto__` 属性 |
| ✅ | [`no-redeclare`](http://eslint.cn/docs/rules/no-redeclare) | 禁止多次声明同一变量 |
|  | [`no-restricted-properties`](http://eslint.cn/docs/rules/no-restricted-properties) | 禁止使用对象的某些属性 |
|  | [`no-return-assign`](http://eslint.cn/docs/rules/no-return-assign) | 禁止在 `return` 语句中使用赋值语句 |
|  | [`no-return-await`](http://eslint.cn/docs/rules/no-return-await) | 禁用不必要的 `return await` |
|  | [`no-script-url`](http://eslint.cn/docs/rules/no-script-url) | 禁止使用 `javascript:` url |
| ✅ | [`no-self-assign`](http://eslint.cn/docs/rules/no-self-assign) | 禁止自我赋值 |
|  | [`no-self-compare`](http://eslint.cn/docs/rules/no-self-compare) | 禁止自身比较 |
|  | [`no-sequences`](http://eslint.cn/docs/rules/no-sequences) | 禁用逗号操作符 |
|  | [`no-throw-literal`](http://eslint.cn/docs/rules/no-throw-literal) | 禁止抛出异常字面量 |
|  | [`no-unmodified-loop-condition`](http://eslint.cn/docs/rules/no-unmodified-loop-condition) | 禁用一成不变的循环条件 |
|  | [`no-unused-expressions`](http://eslint.cn/docs/rules/no-unused-expressions) | 禁止出现未使用过的表达式 |
| ✅ ✴️ | [`no-unused-labels`](http://eslint.cn/docs/rules/no-unused-labels) | 禁用出现未使用过的标 |
|  | [`no-useless-call`](http://eslint.cn/docs/rules/no-useless-call) | 禁止不必要的 `.call()` 和 `.apply()` |
| ✅ | [`no-useless-catch`](http://eslint.cn/docs/rules/no-useless-catch) | 禁止不必要的 `catch` 子句 |
|  | [`no-useless-concat`](http://eslint.cn/docs/rules/no-useless-concat) | 禁止不必要的字符串字面量或模板字面量的连接 |
| ✅ | [`no-useless-escape`](http://eslint.cn/docs/rules/no-useless-escape) | 禁用不必要的转义字符 |
| ✴️ | [`no-useless-return`](http://eslint.cn/docs/rules/no-useless-return) | 禁止多余的 `return` 语句 |
|  | [`no-void`](http://eslint.cn/docs/rules/no-void) | 禁用 `void` 操作符 |
|  | [`no-warning-comments`](http://eslint.cn/docs/rules/no-warning-comments) | 禁止在注释中使用特定的警告术语 |
| ✅ | [`no-with`](http://eslint.cn/docs/rules/no-with) | 禁用 `with` 语句 |
|  | [`prefer-named-capture-group`](http://eslint.cn/docs/rules/prefer-named-capture-group) | 建议在正则表达式中使用命名捕获组 |
|  | [`prefer-promise-reject-errors`](http://eslint.cn/docs/rules/prefer-promise-reject-errors) | 要求使用 `Error` 对象作为 `Promise` 拒绝的原因 |
|  | [`radix`](http://eslint.cn/docs/rules/radix) | 强制在 `parseInt()` 使用基数参数 |
|  | [`require-await`](http://eslint.cn/docs/rules/require-await) | 禁止使用不带 `await` 表达式的 `async` 函数 |
|  | [`require-unicode-regexp`](http://eslint.cn/docs/rules/require-unicode-regexp) | 强制在 `RegExp` 上使用 `u` 标志 |
|  | [`vars-on-top`](http://eslint.cn/docs/rules/vars-on-top) | 要求所有的 `var` 声明出现在它们所在的作用域顶部 |
| ✴️ | [`wrap-iife`](http://eslint.cn/docs/rules/wrap-iife) | 要求 [IIFE](https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE) 使用括号括起来 |
| ✴️ | [`yoda`](http://eslint.cn/docs/rules/yoda) | 要求或禁止 `Yoda` 条件 |

### 严格模式

该规则与使用严格模式和严格模式指令有关：

| 默认开启 | 规则                                           | 说明                       |
| :------: | ---------------------------------------------- | -------------------------- |
|    ✴️    | [`strict`](http://eslint.cn/docs/rules/strict) | 要求或禁止使用严格模式指令 |

### 变量声明

这些规则与变量声明有关：

| 默认开启 | 规则 | 说明 |
| :-: | --- | --- |
|  | [`init-declarations`](http://eslint.cn/docs/rules/init-declarations) | 要求或禁止 `var` 声明中的初始化 |
| ✅ | [`no-delete-var`](http://eslint.cn/docs/rules/no-delete-var) | 禁止删除变量 |
|  | [`no-label-var`](http://eslint.cn/docs/rules/no-label-var) | 不允许标签与变量同名 |
|  | [`no-restricted-globals`](http://eslint.cn/docs/rules/no-restricted-globals) | 禁用特定的全局变量 |
|  | [`no-shadow`](http://eslint.cn/docs/rules/no-shadow) | 禁止变量声明与外层作用域的变量同名 |
| ✅ | [`no-shadow-restricted-names`](http://eslint.cn/docs/rules/no-shadow-restricted-names) | 禁止将标识符定义为受限的名字 |
| ✅ | [`no-undef`](http://eslint.cn/docs/rules/no-undef) | 禁用未声明的变量，除非它们在 `/*global */` 注释中被提到 |
| ✴️ | [`no-undef-init`](http://eslint.cn/docs/rules/no-undef-init) | 禁止将变量初始化为 `undefined` |
|  | [`no-undefined`](http://eslint.cn/docs/rules/no-undefined) | 禁止将 `undefined` 作为标识符 |
| ✅ | [`no-unused-vars`](http://eslint.cn/docs/rules/no-unused-vars) | 禁止出现未使用过的变量 |
|  | [`no-use-before-define`](http://eslint.cn/docs/rules/no-use-before-define) | 禁止在变量定义之前使用它们 |

### 关于 NodeJS

这些规则是关于 `Node.js` 或 在浏览器中使用 `CommonJS` 的：

| 默认开启 | 规则 | 说明 |
| :-: | --- | --- |
|  | [`callback-return`](http://eslint.cn/docs/rules/callback-return) | 强制数组方法的回调函数中有 `return` 语句 |
|  | [`global-require`](http://eslint.cn/docs/rules/global-require) | 要求 `require()` 出现在顶层模块作用域中 |
|  | [`handle-callback-err`](http://eslint.cn/docs/rules/handle-callback-err) | 要求回调函数中有容错处理 |
|  | [`no-buffer-constructor`](http://eslint.cn/docs/rules/no-buffer-constructor) | 禁用 `Buffer()` 构造函数 |
|  | [`no-mixed-requires`](http://eslint.cn/docs/rules/no-mixed-requires) | 禁止混合常规变量声明和 `require` 调用 |
|  | [`no-new-require`](http://eslint.cn/docs/rules/no-new-require) | 禁止调用 `require` 时使用 `new` 操作符 |
|  | [`no-path-concat`](http://eslint.cn/docs/rules/no-path-concat) | 禁止对 `__dirname` 和 `__filename` 进行字符串连接 |
|  | [`no-process-env`](http://eslint.cn/docs/rules/no-process-env) | 禁用 `process.env` |
|  | [`no-process-exit`](http://eslint.cn/docs/rules/no-process-exit) | 禁用 `process.exit()` |
|  | [`no-restricted-modules`](http://eslint.cn/docs/rules/no-restricted-modules) | 禁用通过 `require` 加载的指定模块 |
|  | [`no-sync`](http://eslint.cn/docs/rules/no-sync) | 禁用同步方法 |

### 风格指南

这些规则是关于风格指南的，而且是非常主观的：

| 默认开启 | 规则 | 说明 |
| :-: | --- | --- |
| ✴️ | [`array-bracket-newline`](http://eslint.cn/docs/rules/array-bracket-newline) | 在数组开括号后和闭括号前强制换行 |
| ✴️ | [`array-bracket-spacing`](http://eslint.cn/docs/rules/array-bracket-spacing) | 强制数组方括号中使用一致的空格 |
| ✴️ | [`array-element-newline`](http://eslint.cn/docs/rules/array-element-newline) | 强制数组元素间出现换行 |
| ✴️ | [`block-spacing`](http://eslint.cn/docs/rules/block-spacing) | 禁止或强制在代码块中开括号前和闭括号后有空格 |
| ✴️ | [`brace-style`](http://eslint.cn/docs/rules/brace-style) | 强制在代码块中使用一致的大括号风格 |
|  | [`camelcase`](http://eslint.cn/docs/rules/camelcase) | 强制使用骆驼拼写法命名约定 |
| ✴️ | [`capitalized-comments`](http://eslint.cn/docs/rules/capitalized-comments) | 强制或禁止对注释的第一个字母大写 |
| ✴️ | [`comma-dangle`](http://eslint.cn/docs/rules/comma-dangle) | 要求或禁止末尾逗号 |
| ✴️ | [`comma-spacing`](http://eslint.cn/docs/rules/comma-spacing) | 强制在逗号前后使用一致的空格 |
| ✴️ | [`comma-style`](http://eslint.cn/docs/rules/comma-style) | 强制使用一致的逗号风格 |
| ✴️ | [`computed-property-spacing`](http://eslint.cn/docs/rules/computed-property-spacing) | 强制在计算的属性的方括号中使用一致的空格 |
|  | [`consistent-this`](http://eslint.cn/docs/rules/consistent-this) | 当获取当前执行环境的上下文时，强制使用一致的命名 |
| ✴️ | [`eol-last`](http://eslint.cn/docs/rules/eol-last) | 要求或禁止文件末尾存在空行 |
| ✴️ | [`func-call-spacing`](http://eslint.cn/docs/rules/func-call-spacing) | 要求或禁止在函数标识符和其调用之间有空格 |
|  | [`func-name-matching`](http://eslint.cn/docs/rules/func-name-matching) | 要求函数名与赋值给它们的变量名或属性名相匹配 |
|  | [`func-names`](http://eslint.cn/docs/rules/func-names) | 要求或禁止使用命名的 `function` 表达式 |
|  | [`func-style`](http://eslint.cn/docs/rules/func-style) | 强制一致地使用 `function` 声明或表达式 |
| ✴️ | [`function-paren-newline`](http://eslint.cn/docs/rules/function-paren-newline) | 强制在函数括号内使用一致的换行 |
|  | [`id-blacklist`](http://eslint.cn/docs/rules/id-blacklist) | 禁用指定的标识符 |
|  | [`id-length`](http://eslint.cn/docs/rules/id-length) | 强制标识符的最小和最大长度 |
|  | [`id-match`](http://eslint.cn/docs/rules/id-match) | 要求标识符匹配一个指定的正则表达式 |
| ✴️ | [`implicit-arrow-linebreak`](http://eslint.cn/docs/rules/implicit-arrow-linebreak) | 强制隐式返回的箭头函数体的位置 |
| ✴️ | [`indent`](http://eslint.cn/docs/rules/indent) | 强制使用一致的缩进 |
| ✴️ | [`jsx-quotes`](http://eslint.cn/docs/rules/jsx-quotes) | 强制在 JSX 属性中一致地使用双引号或单引号 |
| ✴️ | [`key-spacing`](http://eslint.cn/docs/rules/key-spacing) | 强制在对象字面量的属性中键和值之间使用一致的间距 |
| ✴️ | [`keyword-spacing`](http://eslint.cn/docs/rules/keyword-spacing) | 强制在关键字前后使用一致的空格 |
|  | [`line-comment-position`](http://eslint.cn/docs/rules/line-comment-position) | 强制行注释的位置 |
| ✴️ | [`linebreak-style`](http://eslint.cn/docs/rules/linebreak-style) | 强制使用一致的换行风格 |
| ✴️ | [`lines-around-comment`](http://eslint.cn/docs/rules/lines-around-comment) | 要求在注释周围有空行 |
| ✴️ | [`lines-between-class-members`](http://eslint.cn/docs/rules/lines-between-class-members) | 要求或禁止类成员之间出现空行 |
|  | [`max-depth`](http://eslint.cn/docs/rules/max-depth) | 强制可嵌套的块的最大深度 |
|  | [`max-len`](http://eslint.cn/docs/rules/max-len) | 强制一行的最大长度 |
|  | [`max-lines`](http://eslint.cn/docs/rules/max-lines) | 强制最大行数 |
|  | [`max-lines-per-function`](http://eslint.cn/docs/rules/max-lines-per-function) | 强制函数最大代码行数 |
|  | [`max-nested-callbacks`](http://eslint.cn/docs/rules/max-nested-callbacks) | 强制回调函数最大嵌套深度 |
|  | [`max-params`](http://eslint.cn/docs/rules/max-params`) | 强制函数定义中最多允许的参数数量 |
|  | [`max-statements`](http://eslint.cn/docs/rules/max-statements) | 强制函数块最多允许的的语句数量 |
|  | [`max-statements-per-line`](http://eslint.cn/docs/rules/max-statements-per-line) | 强制每一行中所允许的最大语句数量 |
| ✴️ | [`multiline-comment-style`](http://eslint.cn/docs/rules/multiline-comment-style) | 强制对多行注释使用特定风格 |
|  | [`multiline-ternary`](http://eslint.cn/docs/rules/multiline-ternary) | 要求或禁止在三元操作数中间换行 |
|  | [`new-cap`](http://eslint.cn/docs/rules/new-cap) | 要求构造函数首字母大写 |
| ✴️ | [`new-parens`](http://eslint.cn/docs/rules/new-parens) | 强制或禁止调用无参构造函数时有圆括号 |
| ✴️ | [`newline-per-chained-call`](http://eslint.cn/docs/rules/newline-per-chained-call) | 要求方法链中每个调用都有一个换行符 |
|  | [`no-array-constructor`](http://eslint.cn/docs/rules/no-array-constructor) | 禁用 `Array` 构造函数 |
|  | [`no-bitwise`](http://eslint.cn/docs/rules/no-bitwise) | 禁用按位运算符 |
|  | [`no-continue`](http://eslint.cn/docs/rules/no-continue) | 禁用 `continue` 语句 |
|  | [`no-inline-comments`](http://eslint.cn/docs/rules/no-inline-comments) | 禁止在代码后使用内联注释 |
| ✴️ | [`no-lonely-if`](http://eslint.cn/docs/rules/no-lonely-if) | 禁止 `if` 作为唯一的语句出现在 `else` 语句中 |
|  | [`no-mixed-operators`](http://eslint.cn/docs/rules/no-mixed-operators) | 禁止混合使用不同的操作符 |
| ✅ | [`no-mixed-spaces-and-tabs`](http://eslint.cn/docs/rules/no-mixed-spaces-and-tabs) | 禁止空格和 tab 的混合缩进 |
|  | [`no-multi-assign`](http://eslint.cn/docs/rules/no-multi-assign) | 禁止连续赋值 |
| ✴️ | [`no-multiple-empty-lines`](http://eslint.cn/docs/rules/no-multiple-empty-lines) | 禁止出现多行空行 |
|  | [`no-negated-condition`](http://eslint.cn/docs/rules/no-negated-condition) | 禁用否定的表达式 |
|  | [`no-nested-ternary`](http://eslint.cn/docs/rules/no-nested-ternary) | 禁用嵌套的三元表达式 |
|  | [`no-new-object`](http://eslint.cn/docs/rules/no-new-object) | 禁用 `Object` 的构造函数 |
|  | [`no-plusplus`](http://eslint.cn/docs/rules/no-plusplus) | 禁用一元操作符 `++` 和 `--` |
|  | [`no-restricted-syntax`](http://eslint.cn/docs/rules/no-restricted-syntax) | 禁用特定的语法 |
|  | [`no-tabs`](http://eslint.cn/docs/rules/no-tabs) | 禁用 `tab` |
|  | [`no-ternary`](http://eslint.cn/docs/rules/no-ternary) | 禁用三元操作符 |
| ✴️ | [`no-trailing-spaces`](http://eslint.cn/docs/rules/no-trailing-spaces) | 禁用行尾空格 |
|  | [`no-underscore-dangle`](http://eslint.cn/docs/rules/no-underscore-dangle) | 禁止标识符中有悬空下划线 |
| ✴️ | [`no-unneeded-ternary`](http://eslint.cn/docs/rules/no-unneeded-ternary) | 禁止可以在有更简单的可替代的表达式时使用三元操作符 |
| ✴️ | [`no-whitespace-before-property`](http://eslint.cn/docs/rules/no-whitespace-before-property) | 禁止属性前有空白 |
| ✴️ | [`nonblock-statement-body-position`](http://eslint.cn/docs/rules/nonblock-statement-body-position) | 强制单个语句的位置 |
| ✴️ | [`object-curly-newline`](http://eslint.cn/docs/rules/object-curly-newline) | 强制大括号内换行符的一致性 |
| ✴️ | [`object-curly-spacing`](http://eslint.cn/docs/rules/object-curly-spacing) | 强制在大括号中使用一致的空格 |
| ✴️ | [`object-property-newline`](http://eslint.cn/docs/rules/object-property-newline) | 强制将对象的属性放在不同的行上 |
| ✴️ | [`one-var`](http://eslint.cn/docs/rules/one-var) | 强制函数中的变量要么一起声明要么分开声明 |
| ✴️ | [`one-var-declaration-per-line`](http://eslint.cn/docs/rules/one-var-declaration-per-line) | 要求或禁止在变量声明周围换行 |
| ✴️ | [`operator-assignment`](http://eslint.cn/docs/rules/operator-assignment) | 要求或禁止在可能的情况下使用简化的赋值操作符 |
| ✴️ | [`operator-linebreak`](http://eslint.cn/docs/rules/operator-linebreak) | 强制操作符使用一致的换行符 |
| ✴️ | [`padded-blocks`](http://eslint.cn/docs/rules/padded-blocks) | 要求或禁止块内填充 |
| ✴️ | [`padding-line-between-statements`](http://eslint.cn/docs/rules/padding-line-between-statements) | 要求或禁止在语句间填充空行 |
| ✴️ | [`prefer-object-spread`](http://eslint.cn/docs/rules/prefer-object-spread) | 禁止使用以对象字面量作为第一个参数的 `Object.assign`，优先使用对象扩展 |
| ✴️ | [`quote-props`](http://eslint.cn/docs/rules/quote-props) | 要求对象字面量属性名称用引号括起来 |
| ✴️ | [`quotes`](http://eslint.cn/docs/rules/quotes) | 强制使用一致的反勾号、双引号或单引号 |
| ✴️ | [`semi`](http://eslint.cn/docs/rules/semi) | 要求或禁止使用分号代替 `ASI` |
| ✴️ | [`semi-spacing`](http://eslint.cn/docs/rules/semi-spacing) | 强制分号之前和之后使用一致的空格 |
| ✴️ | [`semi-style`](http://eslint.cn/docs/rules/semi-style) | 强制分号的位置 |
|  | [`sort-keys`](http://eslint.cn/docs/rules/sort-keys) | 要求对象属性按序排列 |
| ✴️ | [`sort-vars`](http://eslint.cn/docs/rules/sort-vars) | 要求同一个声明块中的变量按顺序排列 |
| ✴️ | [`space-before-blocks`](http://eslint.cn/docs/rules/space-before-blocks) | 强制在块之前使用一致的空格 |
| ✴️ | [`space-before-function-paren`](http://eslint.cn/docs/rules/space-before-function-paren) | 强制在 `function` 的左括号之前使用一致的空格 |
| ✴️ | [`space-in-parens`](http://eslint.cn/docs/rules/space-in-parens) | 强制在圆括号内使用一致的空格 |
| ✴️ | [`space-infix-ops`](http://eslint.cn/docs/rules/space-infix-ops) | 要求操作符周围有空格 |
| ✴️ | [`space-unary-ops`](http://eslint.cn/docs/rules/space-unary-ops) | 强制在一元操作符前后使用一致的空格 |
| ✴️ | [`spaced-comment`](http://eslint.cn/docs/rules/spaced-comment) | 强制在注释中 `//` 或 `/*` 使用一致的空格 |
| ✴️ | [`switch-colon-spacing`](http://eslint.cn/docs/rules/switch-colon-spacing) | 强制在 `switch` 的冒号左右有空格 |
| ✴️ | [`template-tag-spacing`](http://eslint.cn/docs/rules/template-tag-spacing) | 要求或禁止在模板标记和它们的字面量之间有空格 |
| ✴️ | [`unicode-bom`](http://eslint.cn/docs/rules/unicode-bom) | 要求或禁止 `Unicode` 字节顺序标记 (BOM) |
| ✴️ | [`wrap-regex`](http://eslint.cn/docs/rules/wrap-regex) | 要求正则表达式被括号括起来 |

### ES6 有关

这些规则只与 `ES6` 有关, 即通常所说的 `ES2015`：

| 默认开启 | 规则 | 说明 |
| :-: | --- | --- |
| ✴️ | [`arrow-body-style`](http://eslint.cn/docs/rules/arrow-body-style) | 要求箭头函数体使用大括号 |
| ✴️ | [`arrow-parens`](http://eslint.cn/docs/rules/arrow-parens) | 要求箭头函数的参数使用圆括号 |
| ✴️ | [`arrow-spacing`](http://eslint.cn/docs/rules/arrow-spacing) | 强制箭头函数的箭头前后使用一致的空格 |
| ✅ | [`constructor-super`](http://eslint.cn/docs/rules/constructor-super) | 要求在构造函数中有 `super()` 的调用 |
| ✴️ | [`generator-star-spacing`](http://eslint.cn/docs/rules/generator-star-spacing) | 强制 `generator` 函数中 `*` 号周围使用一致的空格 |
| ✅ | [`no-class-assign`](http://eslint.cn/docs/rules/no-class-assign) | 禁止修改类声明的变量 |
| ✴️ | [`no-confusing-arrow`](http://eslint.cn/docs/rules/no-confusing-arrow) | 禁止在可能与比较操作符相混淆的地方使用箭头函数 |
| ✅ | [`no-const-assign`](http://eslint.cn/docs/rules/no-const-assign) | 禁止修改 `const` 声明的变量 |
| ✅ | [`no-dupe-class-members`](http://eslint.cn/docs/rules/no-dupe-class-members) | 禁止类成员中出现重复的名称 |
|  | [`no-duplicate-imports`](http://eslint.cn/docs/rules/no-duplicate-imports) | 禁止重复模块导入 |
| ✅ | [`no-new-symbol`](http://eslint.cn/docs/rules/no-new-symbol) | 禁止 `Symbolnew` 操作符和 `new` 一起使用 |
|  | [`no-restricted-imports`](http://eslint.cn/docs/rules/no-restricted-imports) | 禁止使用指定的 `import` 加载的模块 |
| ✅ | [`no-this-before-super`](http://eslint.cn/docs/rules/no-this-before-super) | 禁止在构造函数中，在调用 `super()` 之前使用 `this` 或 `super` |
| ✴️ | [`no-useless-computed-key`](http://eslint.cn/docs/rules/no-useless-computed-key) | 禁止在对象中使用不必要的计算属性 |
|  | [`no-useless-constructor`](http://eslint.cn/docs/rules/no-useless-constructor) | 禁用不必要的构造函数 |
| ✴️ | [`no-useless-rename`](http://eslint.cn/docs/rules/no-useless-rename) | 禁止在 `import` 和 `export` 和解构赋值时将引用重命名为相同的名字 |
| ✴️ | [`no-var`](http://eslint.cn/docs/rules/no-var) | 要求使用 `let` 或 `const` 而不是 `var` |
| ✴️ | [`object-shorthand`](http://eslint.cn/docs/rules/object-shorthand) | 要求或禁止对象字面量中方法和属性使用简写语法 |
| ✴️ | [`prefer-arrow-callback`](http://eslint.cn/docs/rules/prefer-arrow-callback) | 要求回调函数使用箭头函数 |
| ✴️ | [`prefer-const`](http://eslint.cn/docs/rules/prefer-const) | 要求使用 `const` 声明那些声明后不再被修改的变量 |
| ✴️ | [`prefer-destructuring`](http://eslint.cn/docs/rules/prefer-destructuring) | 优先使用数组和对象解构 |
| ✴️ | [`prefer-numeric-literals`](http://eslint.cn/docs/rules/prefer-numeric-literals) | 禁用 `parseInt()` 和 `Number.parseInt()`，使用二进制，八进制和十六进制字面量 |
|  | [`prefer-rest-params`](http://eslint.cn/docs/rules/prefer-rest-params) | 要求使用剩余参数而不是 `arguments` |
|  | [`prefer-spread`](http://eslint.cn/docs/rules/prefer-spread) | 要求使用扩展运算符而非 `.apply()` |
| ✴️ | [`prefer-template`](http://eslint.cn/docs/rules/prefer-template) | 要求使用模板字面量而非字符串连接 |
| ✅ | [`require-yield`](http://eslint.cn/docs/rules/require-yield) | 要求 `generator` 函数内有 `yield` |
| ✴️ | [`rest-spread-spacing`](http://eslint.cn/docs/rules/rest-spread-spacing) | 强制剩余和扩展运算符及其表达式之间有空格 |
| ✴️ | [`sort-imports`](http://eslint.cn/docs/rules/sort-imports) | 强制模块内的 `import` 排序 |
|  | [`symbol-description`](http://eslint.cn/docs/rules/symbol-description) | 要求 `symbol` 描述 |
| ✴️ | [`template-curly-spacing`](http://eslint.cn/docs/rules/template-curly-spacing) | 要求或禁止模板字符串中的嵌入表达式周围空格的使用 |
| ✴️ | [`yield-star-spacing`](http://eslint.cn/docs/rules/yield-star-spacing) | 强制在 `yield*` 表达式中 `*` 周围使用空格 |

## ESlint 忽略

你可以通过在项目根目录创建一个 `.eslintignore` 文件告诉 `ESLint` 去忽略特定的文件和目录。`.eslintignore` 文件是一个纯文本文件，其中的每一行都是一个 `glob` 模式表明哪些路径应该忽略检测。例如，以下将忽略所有的 JavaScript 文件：

```text
**/*.js
```

当 `ESLint` 运行时，在确定哪些文件要检测之前，它会在当前工作目录中查找一个 `.eslintignore` 文件。如果发现了这个文件，当遍历目录时，将会应用这些偏好设置。一次只有一个 `.eslintignore` 文件会被使用，所以，不是当前工作目录下的 `.eslintignore` 文件将不会被用到。

如果没有发现 `.eslintignore` 文件，也没有指定替代文件，`ESLint` 将在 `package.json` 文件中查找 `eslintIgnore` 键，来检查要忽略的文件。

```json
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
    "env": {
      "browser": true,
      "node": true
    }
  },
  "eslintIgnore": ["hello.js", "world.js"]
}
```

在项目根目录新建 `.eslintignore` 文件，根据需求添加需要忽略的文件或者目录：

```text
build/*.js

src/assets

public

dist

/node_modules
```

## 常用 Prettier 规则

| 规则 | 默认值 | 说明 |
| --- | :-: | --- |
| `printWidth` | `80` | 换行长度 |
| `tabWidth` | `2` | tab 缩进大小 |
| `useTabs` | `false` | 使用 tab 而不是空格缩进行 |
| `semi` | `true` | 每行末尾自动添加分号 |
| `singleQuote` | `false` | 使用单引号而不是双引号 |
| `quoteProps: "<as-needed &#124; consistent &#124; preserve>"` | `as-needed` | 对象属性的引号使用。 <br/> `as-needed`：仅在需要的时候使用。<br/> `consistent`：有一个属性需要引号，就都需要引号。<br/>`preserve`：保留用户输入的情况。 |
| `jsxSingleQuote` | `false` | 在 `JSX` 中使用单引号而不是双引号 |
| `trailingComma: "<es5 &#124; none &#124; all>"` | `es5` | 末尾使用逗号。 <br/> `none`：末尾没有逗号。<br/> `es5`：es5 有效的地方保留。<br/>`all`：在可能的地方都加上逗号。 |
| `bracketSpacing` | `true` | 在对象文字中的括号之间打印空格。<br/> `true`- 示例：`{ foo: bar }` <br/> `false`- 示例：`{foo: bar}` |
| `bracketSameLine` 标注 ① | `false` | 将 `>`多行 `HTML（HTML、JSX、Vue、Angular）`元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）。 |
| `arrowParens: "<always &#124; avoid>"` | `always` | 箭头函数只有一个参数周围包含括号。<br/> `always`- 始终包括括号：`(x) => x` <br/> `avoid`- 尽可能省略括号：`x => x` |
| `proseWrap: "<always &#124; never &#124; preserve>"` | `preserve` | 是否换行，默认情况下，`Prettier` 将按原样包含 `markdown` 文本，因为某些服务使用对行敏感的渲染器，例如 GitHub 注释和 BitBucket。<br/> `always`- 如果超过打印宽度，请换行。 <br/> `never`- 不要换行。<br/>`preserve`- 按原样显示。 |
| `htmlWhitespaceSensitivity: "<css &#124; strict &#124; ignore>"` | `css` | 指定 HTML、Vue、Angular 和 Handlebars 的全局空格敏感性。<br/> `css`- 遵守 CSS display 属性的默认值。 <br/> `strict`- 空格被认为是敏感的。<br/>`ignore`- 空格被认为是不敏感的。 |
| `vueIndentScriptAndStyle` | `false` | 是否缩进 Vue 文件中的代码 `script` 和 `style` 标签。 |
| `endOfLine: "<lf &#124; crlf &#124; cr &#124; auto>"` | `lf` | 行结尾的风格。 <br/> `lf`- 仅换行 (`\n`)，常见于 Linux 和 macOS 以及 git repos 内部<br/>`crlf`- 回车 + 换行字符 (`\r\n`)，常见于 Windows<br/>`cr`- 仅回车字符 (`\r`)，很少使用<br/>`auto`- 保持现有的行尾（一个文件中的混合值通过查看第一行之后使用的内容进行标准化） |

常用 `Prettier` 规则 <Badge>标注</Badge>

标注 ①： `bracketSameLine`

`true`- 例子：

```html
<button className="prettier-class" id="prettier-id" onClick="{this.handleClick}">Click Here</button>
```

`false`- 例子：

```html
<button className="prettier-class" id="prettier-id" onClick="{this.handleClick}">Click Here</button>
```

## Prettier 忽略

使用 `.prettierignore` 文件可以完全忽略（即不重新格式化）某些文件和文件夹。

在项目根目录中新建 `.prettierignore` 文件，根据需求添加需要忽略的文件或者文件夹：

```text
/node_modules

dist

build

src/assets

public
```

还可以使用 `prettier-ignore` 来忽略文件中的部分内容。

### JavaScript

例如：

```js
matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

将转换为：

```js
matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

### JSX

```jsx | pure
<div>
  {/* prettier-ignore */}
  <Span     ugly  format=''   />
</div>
```

### HTML

```html
<!-- prettier-ignore -->
<div         class="x"       >hello world</div            >

<!-- prettier-ignore-attribute -->
<div
  (mousedown)="       onStart    (    )         "
  (mouseup)="         onEnd      (    )         "
></div>

<!-- prettier-ignore-attribute (mouseup) -->
<div (mousedown)="onStart()" (mouseup)="         onEnd      (    )         "></div>
```

### CSS

```css
/* prettier-ignore */
.my    ugly rule
{

}
```

### Markdown

```markdown
<!-- prettier-ignore -->
Do   not    format   this
```

### YAML

```bash
# prettier-ignore
key  : value
hello: world
```

### GraphQL

```bash
{
  # prettier-ignore
  addReaction(input:{superLongInputFieldName:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {content}
  }
}
```

### Handlebars

```handlebars
{{! prettier-ignore }}
<div>
  "hello! my parent was ignored"
  {{#my-crazy-component     "shall"     be="preserved"}}
    <This
      is  =  "also preserved as is"
    />
  {{/my-crazy-component}}
</div>
```

### 范围忽略

这种类型的忽略只允许在顶层使用，旨在禁用自动生成内容的格式。

```html
<!-- prettier-ignore-start -->
<!-- SOMETHING AUTO-GENERATED BY TOOLS - START -->

| MY | AWESOME | AUTO-GENERATED | TABLE | |-|-|-|-| | a | b | c | d |

<!-- SOMETHING AUTO-GENERATED BY TOOLS - END -->
<!-- prettier-ignore-end -->
```

### 命令行文件模式

对于一次性命令，当您想排除某些文件而不将它们添加到 时 `.prettierignore`，否定模式可以派上用场：

```bash
prettier --write . '!**/*.{js,jsx,vue}'
```
