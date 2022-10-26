---
title: CSS 变量
toc: menu
order: 9
---

<BackTop></BackTop>

# 使用 CSS 变量 （CSS variable）

使用 CSS 变量的一种好方法涉及设计的颜色。您可以将它们放在变量中，而不必一遍又一遍地复制和粘贴相同的颜色。

## 自定义属性

带有前缀 `--` 的属性名，比如 `--example--name` ，表示的是带有值的自定义属性，其可以通过 `var` 函数在全文档范围内复用的。

```css
:root {
  --somekeyword: left;
  --somecolor: #0000ff;
  --somecomplexvalue: 3px 6px rgb(20, 32, 54);
}
```

## var 函数

`var()` 函数用于插入 CSS 变量的值。

**语法：**

```css
var(name, value)
```

**参数：**

- `name`: 必需。变量名（以两条破折号开头）。

- `value`: 可选。回退值（在未找到变量时使用）。

<Alert type="warning">
  注意，变量名称必须以两个破折号（--）开头，且区分大小写！
</Alert>

## 作用域

首先：CSS 变量可以有全局或局部作用域。

- 全局变量可以在整个文档中进行访问/使用，而局部变量只能在声明它的选择器内部使用。

- 如需创建具有全局作用域的变量，请在 `:root` 选择器中声明它。 `:root` 选择器匹配文档的根元素。

- 如需创建具有局部作用域的变量，请在将要使用它的选择器中声明它。

## 使用方式

**传统方式：**

以下例子显示了在样式表中定义一些颜色的传统方式（通过为每个特定元素定义要使用的颜色）：

```css
body { background-color: #1e90ff; }

h2 { border-bottom: 2px solid #1e90ff; }

.container {
  color: #1e90ff;
  background-color: #ffffff;
  padding: 15px;
}

button {
  background-color: #ffffff;
  color: #1e90ff;
  border: 1px solid #1e90ff;
  padding: 5px;
}
```

**使用 CSS 变量：**

```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
```

## 示例展示

**HTML：**

```html
<p id="firstParagraph">This paragraph should have a blue background and yellow text.</p>
<p id="secondParagraph">This paragraph should have a yellow background and blue text.</p>
<div id="container">
  <p id="thirdParagraph">This paragraph should have a green background and yellow text.</p>
</div>
```

**CSS：**

```css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #48ff32;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

**结果：**

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/css-var.png)


## 代码提示

在 VSCode 编辑器中使用 CSS 变量，如果不是当前页面定义的变量，在使用的时候没有代码提示，也没有颜色显示，相当不方便。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/css-var-notips.png)

**解决方法：**

安装 VSCode 插件：`CSS Variable Autocomplete`。自动完成 CSS变量 支持：CSS、SCSS、LESS、PostCSS、VueJS、ReactJS等

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/css-var-plugin0.png)

安装完成后在 `var()` 函数中输入 `--` 就可以触发代码提示，既能显示 CSS 变量，还能显示颜色块，在使用的时候非常方便了。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/css-var-plugin.png)

**插件配置：**

有时候使用第三方 UI 库提供的 CSS 变量没有代码提示，则需要手动配置，比如使用: `antd.variable.min.css`

```js
import 'ant-design-vue/dist/antd.variable.min.css';
```

如果这样引入到项目中，VSCode 也不会有关于 `ant-design-vue` 中定义的 CSS 变量的代码提示。

我们需要在 `settings.json` 中配置 `CSS Variable Autocomplete` 插件，添加如下配置：

```json
"cssVariables.lookupFiles": [
  "**/*.css",
  "**/*.scss",
  "**/*.sass",
  "**/*.less",
  "node_modules/ant-design-vue/dist/antd.variable.min.css"
]
```
配置好后我们在使用 `ant-design-vue` 提供的 CSS 变量就有代码提示了。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/css-var-antd.png)

## 动态主题

当我们在 `:root` 中配置了 `--theme: #4569D4` 主题色，需要动态修改它时使用如下方法：

```js
const htmlDom = document.documentElement;
htmlDom.style.setProperty("--theme": "#ff6600");
```
