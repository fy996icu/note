---
title: Redux DevTools
toc: menu
order: 8
---

<BackTop></BackTop>

# Redux DevTools

`Redux DevTools` 是一个浏览器插件，通过和 `redux-devtools-extension` 搭配，可以让我们调试和跟踪 `Redux` 状态更加方便。

### 安装

如果可以访问谷歌扩展程序，直接在 Chrome 网上应用商店下载即可。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReduxDevTools.png)

如果不能访问 Chrome 网上应用商店，可以在这个网站上下载：[Extfans](https://www.extfans.com/)。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/extfans.png)

安装完成后可以在浏览器的扩展程序列表中看到 `Redux DevTools`，同时在浏览器右上角也能看到它的图标，以及在控制台中能看到 `Redux` 的功能界面。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReduxDevTools02.png)

当检测到使用了 `Redux` 的页面中，`Redux DevTools` 图标会被点亮。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReduxDevTools03.png)

当检测到使用了 `Redux` 的页面中，打开浏览器控制台会发现有一个 `Redux` 的功能界面。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReduxDevTools04.png)

### 功能界面说明

- 标注 ①：每一项是 `Action` 中的 `type` 值。

- 标注 ②：显示 `Action`、`State` 等数据窗口。

- 标注 ③：切换为查看 `Action` 变化的窗口。

- 标注 ④：切换为查看 `State` 变化的窗口。

- 标注 ⑤：`Action` 变化的 `State` 数据。

- 标注 ⑥：时间线，可以播放或暂停执行过的 `Action` 过程。

- 标注 ⑦：日志监视器，可以查看每一个 `Action` 执行的日志信息。

- 标注 ⑧：通过可视化的方式查看 `State` 树。

- 标注 ⑨：切换 `Redux DevTools` 调试窗口的打开位置。

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReduxDevTools06.png)

### 非侵入式

`非侵入式` 就是不需要安装任何模块侵入到项目里面，完全借助浏览器插件，但是还是需要简单的配置。

当我们在浏览器中安装了 `Redux DevTools` 拓展插件后，在 `window` 对象上面会有许多 `Redux DevTools` 注入的属性和方法，我们只需要在 `store.js` 中配置即可：

<Tag>注意</Tag>：版本 2.7 之后，`window.devToolsExtension` 被重命名为 `window.__REDUX_DEVTOOLS_EXTENSION__` 或 `window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`，所以项目不建议使用 `window.devToolsExtension` 方式了。

```js
// store.js

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, compose } from 'redux';

// 引入汇总之后的reducer
import reducers from './reducers';

// 引入redux-promise-middleware，用于支持异步promise风格的action
import reduxPromiseMiddleware from 'redux-promise-middleware';

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(reducers, applyMiddleware(reduxPromiseMiddleware))
    : window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        reducers,
        compose(applyMiddleware(reduxPromiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__()),
      )
    : createStore(reducers, applyMiddleware(reduxPromiseMiddleware));

export default store;
```

通过 `process.env.NODE_ENV === "production"` 判断，在生产环境就不使用调试工具。

### 侵入式

`侵入式` 就是需要再项目中安装模块 `redux-devtools-extension`, 通过它结合 `Redux DevTools` 浏览器拓展程序来调试我们的 Redux，同时也需要相关的一些配置。

**安装：** `redux-devtools-extension` 插件。

```bash
$ yarn add redux-devtools-extension -D
```

修改 `store.js`，配置插件：

```js
// store.js

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux';

// 引入汇总之后的reducer
import reducers from './reducers';

// 引入redux-promise-middleware，用于支持异步promise风格的action
import reduxPromiseMiddleware from 'redux-promise-middleware';

// 使用调试工具-只在开发环境使用
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// 使用调试工具-在生产环境也使用extension
// import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const composeEnhancers = composeWithDevTools({
  // 可以添加一些配置
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxPromiseMiddleware)));

export default store;
```

注意到 `logOnlyInProduction`，它表示引入的模块只在生产环境起作用，即 `process.env.NODE_ENV === 'production'` 时，对应的开发环境为 `developmentOnly` ,默认是开发环境使用。

若是你不想在生成环境中使用 `extension`，则使用 `redux-devtools-extension/developmentOnly`。
