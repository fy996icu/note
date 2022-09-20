---
title: 基本配置
toc: menu
order: 0
---

<BackTop></BackTop>

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vscode-logo.png)

# VSCode 配置

文档主要来源于 [后盾人](https://doc.houdunren.com/)。

## 中文语言

VSCode 默认是英文界面，使用起来并不是特别方便，可以使用中文语言包插件来汉化 VSCode。

1、扩展中搜索 `chinese` 即中文语言包。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-chinese.png)

2、重启 VSCode。

## 常用主题

VSCode 里面有丰富的界面风格和代码风格。

- [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode)

- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

- [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

- [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

- [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)


## 文件图标

- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

- [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)

- [Ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu)


## 截屏模式

该模式可以将按钮与鼠标操作在屏幕上显示，非常适合讲解使用。

开启方式为 MAC 下 `⌘ + ⇧ + p`， Windows下 `ctrl+shift+p` 后选择 `screen`。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-screen.png)

开启后的效果：会显示鼠标效果，当前的按键。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-screen-show.png)

在 设置>工作台>截屏模式 中对截屏模式进行设置。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-screen-setting2.png)

## 括号对指南

在设置在中搜索 `bracketPairs` 设置括号对指南，设置后同一对括号会有标识线标识。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-kuohao.png)

效果如下：

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-kuohao2.png)

## 行号设置

```text
设置 > 用户设置 > Line Numbers
```

## 导航设置

```text
设置 > 工作台 > 导航路径 > (Breadcrumbs: Enabled & Breadcrumbs: File Path)
```

## 滚动缩放
```text
文本编辑器 > Editor: Mouse Wheel Zoom
```

## 文件排序

资源管理器按最新修改排序

```text
功能 > 资源管理器 > Sort Order[modified]
```

## 编码优化

### 自动换行

HTML 标签前后自动换行，访问 `设置 > 扩展 〉HTML` 进行配置。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-html.png)

### 属性换行

如果要将 HTML 的属性对齐排列，请在 `设置 > 扩展 〉HTML` 中进行设置。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/vs-html-wrap.png)

## 智能提示

使用深度学习可以有效的帮助我们提高代码的编写效率，下面我推荐几款 AI 代码提示软件。

| 软件 | 介绍 | 安装客户端 |
| - | - | - |
| [Tabnine](https://www.tabnine.com/) | 使用深度学习来帮助您更快地编写代码，支持主流代码编辑器。 | VSCode 直接使用插件 |
| [Kite](https://www.kite.com/) | AI 驱动的提示和补全引擎，功能也是非常强大。 | 需要 |
| [AIXcoder](https://www.aixcoder.com/#/) | 国产的先进的深度学习模型压缩技术。 | 需要 |

## 系统热键

这是官方提供的 [快捷键速查表](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)，下面是中文快捷键说明。

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl + Shift + P，F1 | 显示命令面板 Show Command Palette |
| Ctrl + P | 快速打开 Quick Open |
| Ctrl + Shift + N | 新窗口/实例 New window/instance |
| Ctrl + Shift + W | 关闭窗口/实例 Close window/instance |

### 基础编辑

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl+X | 剪切行（空选定） Cut line (empty selection) |
| Ctrl+C | 复制行（空选定）Copy line (empty selection) |
| Alt+ ↑ / ↓ | 向上/向下移动行 Move line up/down |
| Shift+Alt + ↓ / ↑ | 向上/向下复制行 Copy line up/down |
| Ctrl+Shift+K | 删除行 Delete line |
| Ctrl+Enter | 在下面插入行 Insert line below |
| Ctrl+Shift+Enter | 在上面插入行 Insert line above |
| Ctrl+Shift+\ | 跳到匹配的括号 Jump to matching bracket |
| Ctrl+] / [ | 缩进/缩进行 Indent/outdent line |
| Home | 转到行首 Go to beginning of line |
| End | 转到行尾 Go to end of line |
| Ctrl+Home | 转到文件开头 Go to beginning of file |
| Ctrl+End | 转到文件末尾 Go to end of file |
| Ctrl+↑ / ↓ | 向上/向下滚动行 Scroll line up/down |
| Alt+PgUp / PgDown | 向上/向下滚动页面 Scroll page up/down |
| Ctrl+Shift+[ | 折叠（折叠）区域 Fold (collapse) region |
| Ctrl+Shift+] | 展开（未折叠）区域 Unfold (uncollapse) region |
| Ctrl+K Ctrl+[ | 折叠（未折叠）所有子区域 Fold (collapse) all subregions |
| Ctrl+K Ctrl+] | 展开（未折叠）所有子区域 Unfold (uncollapse) all subregions |
| Ctrl+K Ctrl+0 | 折叠（折叠）所有区域 Fold (collapse) all regions |
| Ctrl+K Ctrl+J | 展开（未折叠）所有区域 Unfold (uncollapse) all regions |
| Ctrl+K Ctrl+C | 添加行注释 Add line comment |
| Ctrl+K Ctrl+U | 删除行注释 Remove line comment |
| Ctrl+/ | 切换行注释 Toggle line comment |
| Shift+Alt+A | 切换块注释 Toggle block comment |
| Alt+Z | 切换换行 Toggle word wrap |
| Ctrl+Alt | 键盘上向上或者向下键，使一列上出现多个光标 |
| Ctrl+Shift+l | 选择相同的词统一编辑 |
| Shift+Alt+鼠标拖动 | 选择区域进行编辑 |

### 导航控制

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl + T | 显示所有符号 Show all Symbols |
| Ctrl + G | 转到行... Go to Line... |
| Ctrl + P | 转到文件... Go to File... |
| Ctrl + Shift + O | 转到符号... Go to Symbol... |
| Ctrl + Shift + M | 显示问题面板 Show Problems panel |
| F8 | 转到下一个错误或警告 Go to next error or warning |
| Shift + F8 | 转到上一个错误或警告 Go to previous error or warning |
| Ctrl + Shift + Tab | 导航编辑器组历史记录 Navigate editor group history |
| Alt + ←/→ | 返回/前进 Go back / forward |
| Ctrl + M | 切换选项卡移动焦点 Toggle Tab moves focus |

### 搜索和替换

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl + F | 查找 Find |
| Ctrl + H | 替换 Replace |
| F3 / Shift + F3 | 查找下一个/上一个 Find next/previous |
| Alt + Enter | 选择查找匹配的所有出现 Select all occurences of Find match |
| Ctrl + D | 将选择添加到下一个查找匹配 Add selection to next Find match |
| Ctrl + K Ctrl + D | 将最后一个选择移至下一个查找匹配项 Move last selection to next Find match |
| Alt + C / R / W | 切换区分大小写/正则表达式/整个词 Toggle case-sensitive / regex / whole word |

### 多光标和选择

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Alt +单击 | 插入光标 Insert cursor |
| Ctrl + Alt +↑/↓ | 在上/下插入光标 Insert cursor above / below |
| Ctrl + U | 撤消上一个光标操作 Undo last cursor operation |
| Shift + Alt + I | 在选定的每一行的末尾插入光标 Insert cursor at end of each line selected |
| Ctrl + I | 选择当前行 Select current line |
| Ctrl + Shift + L | 选择当前选择的所有出现 Select all occurrences of current selection |
| Ctrl + F2 | 选择当前字的所有出现 Select all occurrences of current word |
| Shift + Alt + → | 展开选择 Expand selection |
| Shift + Alt + ← | 缩小选择 Shrink selection |
| Shift + Alt + （拖动鼠标） | 列（框）选择 Column (box) selection |
| Ctrl + Shift + Alt +（箭头键） | 列（框）选择 Column (box) selection |
| Ctrl + Shift + Alt + PgUp / PgDown | 列（框）选择页上/下 Column (box) selection page up/down |

### 语言编辑

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl + 空格 | 触发建议 Trigger suggestion |
| Ctrl + Shift + Space | 触发器参数提示 Trigger parameter hints |
| Tab | Emmet 展开缩写 Emmet expand abbreviation |
| Shift + Alt + F | 格式化文档 Format document |
| Ctrl + K Ctrl + F | 格式选定区域 Format selection |
| F12 | 转到定义 Go to Definition |
| Alt + F12 | Peek定义 Peek Definition |
| Ctrl + K F12 | 打开定义到边 Open Definition to the side |
| Ctrl + . | 快速解决 Quick Fix |
| Shift + F12 | 显示引用 Show References |
| F2 | 重命名符号 Rename Symbol |
| Ctrl + Shift + . /， | 替换为下一个/上一个值 Replace with next/previous value |
| Ctrl + K Ctrl + X | 修剪尾随空格 Trim trailing whitespace |
| Ctrl + K M | 更改文件语言 Change file language |

### 窗口管理

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl+F4, Ctrl+W | 关闭编辑器 Close editor |
| Ctrl+K F | 关闭文件夹 Close folder |
| Ctrl+\ | 拆分编辑器 Split editor |
| Ctrl+ 1 / 2 / 3 | 聚焦到第1，第2或第3编辑器组 Focus into 1st, 2nd or 3rd editor group |
| Ctrl+K Ctrl+ ←/→ | 聚焦到上一个/下一个编辑器组 Focus into previous/next editor group |
| Ctrl+Shift+PgUp / PgDown | 向左/向右移动编辑器 Move editor left/right |
| Ctrl+K ← / → | 移动活动编辑器组 Move active editor group |

### 文件管理

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl+N | 新文件 New File |
| Ctrl+O | 打开文件... Open File... |
| Ctrl+S | 保存 Save |
| Ctrl+Shift+S | 另存为... Save As... |
| Ctrl+K S | 全部保存 Save All |
| Ctrl+F4 | 关闭 Close |
| Ctrl+K Ctrl+W | 关闭所有 Close All |
| Ctrl+Shift+T | 重新打开关闭的编辑器 Reopen closed editor |
| Ctrl+K | 输入保持打开 Enter Keep Open |
| Ctrl+Tab | 打开下一个 Open next |
| Ctrl+Shift+Tab | 打开上一个 Open previous |
| Ctrl+K P | 复制活动文件的路径 Copy path of active file |
| Ctrl+K R | 显示资源管理器中的活动文件 Reveal active file in Explorer |
| Ctrl+K O | 显示新窗口/实例中的活动文件 Show active file in new window/instance |

### 代码调试

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| F9 | 切换断点 Toggle breakpoint |
| F5 | 开始/继续 Start/Continue |
| Shift+F5 | 停止 Stop |
| F11 / Shift+F11 | 下一步/上一步 Step into/out |
| F10 | 跳过 Step over |
| Ctrl+K Ctrl+I | 显示悬停 Show hover |

### 集成终端

| 按 Press |  功能 Function |
| ----------- | ------------------ |
| Ctrl+` | 显示集成终端 Show integrated terminal |
| Ctrl+Shift+` | 创建新终端 Create new terminal |
| Ctrl+Shift+C | 复制选定 Copy selection |
| Ctrl+Shift+V | 粘贴到活动端子 Paste into active terminal |
| Ctrl+↑ / ↓ | 向上/向下滚动 Scroll up/down |
| Shift+PgUp / PgDown	 | 向上/向下滚动页面 Scroll page up/down |
| Ctrl+Home / End | 滚动到顶部/底部 Scroll to top/bottom |

## 常用插件

- `Dracula Official` [我最最喜欢的一套vscode主题，非常nice哟](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

- `jQuery Code Snippets` [jQuery代码提示](https://marketplace.visualstudio.com/items?itemName=donjayamanne.jquerysnippets)

- `Code Runner` [在编辑器中运行代码](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

- `Highlight Matching Tag` [高亮匹配的标签](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)

- `Polacode-2020` [生成漂亮的代码截图](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.polacode-2019)

- `carbon-now-sh` [生成漂亮的代码截图-MAC风格](https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh)

- `Markdown Preview Enhanced` [Markdown文件预览](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)

- `JavaScript (ES6) code snippets` [JavaScript (ES6) 语法代码提示](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

- `html to javascript string` [将html转换为js字符串，快捷键 ctrl + H + ctrl + J](https://marketplace.visualstudio.com/items?itemName=evileumas.html-to-javascript-string)

- `HTML Snippets` [html代码提示](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)

- `HTML CSS Support` [css代码提示](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

- `Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code` [中文简体包](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

- `Auto Rename Tag` [重命名标签名，开始标签和结束标签自动同步](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

- `Auto Close Tag` [自动关闭结束标签](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

- `EditorConfig for VS Code` [用于支持.editorconfig配置文件，统一编辑器编码风格](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- `ES7 React/Redux/GraphQL/React-Native snippets` [React代码提示](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- `JS JSX Snippets` [js和jsx代码提示](https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets)

- `Live Server` [本地启动一个服务](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

- `Project Manager` [本地多项目集中管理-可快速打开常用项目](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

- `Python` [Python代码提示](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

- `Pylance` [对Python的支持](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

- `SVN` [SVN版本控制](https://marketplace.visualstudio.com/items?itemName=johnstoncode.svn-scm)

- `GitLens — Git supercharged` [让你的vscode支持git](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

- `ESLint` [代码规范和检测](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- `Vant Snippets` [VantUI模板代码提示，快速生成组件](https://marketplace.visualstudio.com/items?itemName=fishku.vant-snippets)

- `Vetur` [Vue代码高亮](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

- `Vue Language Features (Volar)` [Vue3 官方支持插件](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

- `Vue VSCode Snippets` [Vue模板生成器](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)

- `Vue 3 Snippets` [Vue3代码提示](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)

- `create-uniapp-view` [快速创建uniapp试图与组件](https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view)

- `uniapp-snippet` [uniapp代码片段提示](https://marketplace.visualstudio.com/items?itemName=dlhtx.uniapp-snippet)

- `Easy LESS` [将less文件编译为css文件](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)

- `DotENV` [支持.env文件](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

- `open in browser` [设置默认打开浏览器](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)

- `One Dark Pro` [非常 nice 的一款vscode主题](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

- `Material Icon Theme` [非常 nice 的一款vscode文件图标](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

- `Atom One Dark Theme` [Atom暗黑风格主题](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)

- `Tabnine AI Autocomplete` [AI 代码自动补全](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)

- `Prettier - Code formatter` [代码格式化](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- `vscode-styled-components` [styled-component 智能提示](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

- `EditorConfig for VS Code` [editorconfig 编辑器配置](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- `Import Cost` [显示导入包的大小](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

- `Vite` [在不离开编辑器的情况下预览/调试您的 vite 应用程序](https://marketplace.visualstudio.com/items?itemName=antfu.vite)

- `PicGo` [图床工具](https://marketplace.visualstudio.com/items?itemName=Spades.vs-picgo)

- `TS in Markdown` [Markdown 中对 TypeScript 的语言支持](https://marketplace.visualstudio.com/items?itemName=amour1688.ts-in-markdown)

- `uni-create-view` [快速创建uniapp视图与组件](https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view)

- `uniapp devtools` [方便 uniapp 在 vscode 开发](https://marketplace.visualstudio.com/items?itemName=yzdel2000.uniapp-devtools)

- `uniapp-snippet` [uniapp 片段提示](https://marketplace.visualstudio.com/items?itemName=dlhtx.uniapp-snippet)

- `vscode-element-helper` [Element UI 代码提示](https://marketplace.visualstudio.com/items?itemName=ElemeFE.vscode-element-helper)

- `Vant Snippets` [Vant 代码片段](https://marketplace.visualstudio.com/items?itemName=fishku.vant-snippets)
