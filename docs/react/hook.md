---
title: Hook
toc: menu
order: 12
---

# Hook

## 介绍

<Alert type="info">
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。也是我们应该重点掌握的知识点。
</Alert>

**Hook 是什么？** Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。

什么时候我会用 Hook？ 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以在现有的函数组件中使用 Hook。

## 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中。）

## useState

### 介绍

```js
const [state, setState] = useState(initialState);
```

`useState()` 返回一个状态 `state` 以及更新state的函数 `setState()`。

`useState()` 在初始化渲染的时候返回的 `state` 和 传入的 `initialState` 值相同。

注意：state 和 setState是可以自定义的，如果你高兴，你甚至可以定义为 A 和 B。

### 修改state的值

```js
// 返回的第一个值始终是更新后最新的 state。
setState(newState)
```

示例：实现每点击一次增加1

```jsx
import React, { useState } from 'react';

const Wrap = () => {
  // 调用useState(0)，初始化传入参数0，name在渲染期间返回的count初始化就为0。
  // 返回的setCount函数用于修改count
  const [count, setCount] = useState(0);

  // count每点击一次加1
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>计数器：{count}</h2>
      <button onClick={addCount}>加</button>
    </div>
  );
};

export default Wrap;
```

如果你的更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。

### 函数式更新

如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值。下面的计数器组件示例展示了 setState 的两种用法：

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  // 普通更新
  const handleClick = () => {
    setCount(count + 1);
  };
  // 函数式更新
  const handleClickFn = () => {
    setCount((prevCount) => {
      // 上一次的值，比如此时的count为6，那么此时prevCount为5
      console.log(prevCount);
      return prevCount + 1;
    });
  };
  return (
    <>
      Count: {count}
      <br />
      <button onClick={handleClick}>普通更新</button>
      <button onClick={handleClickFn}>函数式更新</button>
    </>
  );
};

export default Counter;
```
![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp02.png)

### 普通更新和函数式更新两种方式的区别

注意上面的代码，`handleClick` 和 `handleClickFn` 一个是通过一个新的 state 值更新，一个是通过函数式更新返回新的 state。现在这两种写法没有任何区别，但是如果是异步更新的话，那你就要注意了，他们是有区别的，来看下面例子：

```jsx
import React, { useState } from 'react';

// 测试：都快速点击按钮
const Counter = () => {
  const [count, setCount] = useState(0);
  // 异步普通调用setCount更新--只有一次更新生效
  const handleClick = () => {
    setTimeout(() => {
      console.log('count：', count);
      setCount(count + 1);
    }, 3000);
  };

  // 异步函数式更新--每次点击都生效
  const handleClickFn = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        console.log('prevCount：', prevCount);
        return prevCount + 1;
      });
    }, 3000);
  };
  return (
    <>
      Count: {count}
      <br />
      <button onClick={handleClick}>普通更新</button>
      <button onClick={handleClickFn}>函数式更新</button>
    </>
  );
};

export default Counter;
```
![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp03.png)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp04.png)


当我设置为异步更新，点击按钮延迟到3s之后去调用 `setCount` 函数，当我快速点击按钮时，也就是说在3s多次去触发更新，但是只有一次生效，因为 `count` 的值是没有变化的。

当使用函数式更新 `state` 的时候，这种问题就没有了，因为它可以获取之前的 `state` 值，也就是代码中的 `prevCount` 每次都是最新的值。

<Alert type="info">
其实这个特点和类组件中 setState 类似，可以接收一个新的 state 值更新，也可以函数式更新。如果新的 state 需要通过使用先前的 state 计算得出，那么就要使用函数式更新。
</Alert>

### useState超级重要的知识点<Badge>重要</Badge>

使用useState的注意点：

1. useState最好写到函数的起始位置，主要是便于阅读。

2. useState严禁出现在代码块(判断和循环等)中。

3. useState返回的函数(数组的第二项)，这个函数的引用是不会变化的(优化性能)。

4. 如果使用函数改变数据，若数据和之前的数据完全相等(使用`Object.is`)，则不会重新渲染，由于 `Object.is` 是浅比较，所以如果状态是一个对象的时候要小心操作了。

5. 如果使用函数改变数据，传入的值不会和原来的数据进行合并而是直接进行替换(**跟setState完全不一样**)，所以在修改对象的时候，我们要先将之前的对象保存下来。

```jsx
import React, { useState } from 'react';

const Wrap = () => {
  const [obj, setObj] = useState({ name: '张三', age: 20 });
  // 覆盖更新，会被覆盖
  const handleClickCover = () => {
    setObj({ age: 30 });
  };
  // 只更改年龄，需要将obj保存下来
  const handleClickAge = () => {
    setObj({ ...obj, age: 30 });
  };
  // 还原
  const handleClickReset = () => {
    setObj({ name: '张三', age: 20 });
  };
  return (
    <>
      <h2>名字：{obj.name}</h2>
      <h2>年龄：{obj.age}</h2>
      <button onClick={handleClickCover}>覆盖更新</button>
      <button onClick={handleClickAge}>更改年龄</button>
      <button onClick={handleClickReset}>还原</button>
    </>
  );
};

export default Wrap;
```
执行：`setObj({ age: 30 });`

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp05.png)

执行：`setObj({ ...obj, age: 30 });`

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp06.png)


6. 不要直接去改变state的值。

7. 如果要实现强制刷新组件的情况: 如果是类组件我们都会使用 `forceUpdate`，在函数组件中，我们可以用 `useState` 来实现，使用useState的改变state的函数传入一个 `空对象` ，因为**每次传入一个空对象的地址不一样**所以一定会刷新。

```jsx
import React, { useState } from 'react';

const Wrap = () => {
  const [, forceUpdate] = useState({});
  const handleClick = () => {
    // 传入空对象，可以实现强制刷新，每次传入的空对象地址都不同
    forceUpdate({});
  };
  return (
    <>
      <h1>时间戳：{new Date().getTime()}</h1>
      <button onClick={handleClick}>强制刷新</button>
    </>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp07.png)


8. 如果某些状态之间没有必然的联系, 应该分化为不同的状态而非合并成一个对象。

9. 和类组件一样，函数组件的状态更改在某些时候是 `异步` 的，如果是异步的更改，则**多个状态的更改会合并**，此时不能信任之前的状态, 而应该使用回调函数的方式改变状态。

```jsx
import React, { useState } from 'react';

const Wrap = () => {
  const [count, setCount] = useState(0);
  // 普通更新
  const handleClick = () => {
    // 不会立马运行会等到事件完全走完以后一起运行, 同时多个更改会合并到一起执行
    setCount(count + 1);
    // 因为是异步的, 运行到第二个setCount的时候num的基础值还是0
    setCount(count + 1);
    // 最终结果count为1
  };

  // 函数式更新
  const handleClickFn = () => {
    // 传入的函数会在事件走完以后按照顺序依次执行
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // 最终结果count为2
  };
  return (
    <>
      <h1>计数器：{count}</h1>
      <button onClick={handleClick}>普通更新</button>
      <button onClick={handleClickFn}>函数式更新</button>
    </>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp08.png)

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useStateExp09.png)


10. 因为组件被卸载会导致状态被清空，所以当我们需要频繁的隐藏显示一个组件的时候最好使用 `style` 的`display` 的方式来进行操作，同时这种操作从渲染原理层面来说也更利于效率的提升。


## useEffect

### 介绍

`useEffect` 叫 **副作用**。

副作用：对环境的改变叫做副作用。

```js
// 第一个参数didUpdate为一个函数，第二个参数为数组（指定依赖）
useEffect(didUpdate, [])
```

### 作用
1. 可作为类式组件中的 `componentDidMount` 生命周期函数，第二个参数为 `[]`。

2. 可作为类式组件中的 `componentDidUpdate` 生命周期函数，第二个参数为指定的依赖。

3. 可作为类式组件中的 `componentWillUnmount` 生命周期函数，通过第一个参数 `didUpdate` 函数 `return` 一个函数。

4. 以上三种情况可以同时出现。

### 示例

```jsx
import React, { useEffect, useState } from 'react';

const Wrap = () => {
  const [count, setCount] = useState(0);
  // 当做componentDidMount使用-组件挂载完成，只执行一次
  useEffect(() => {
    console.log('组件挂载完成');
  }, []);

  // 当做componentDidUpdate使用-组件更新，传入依赖count，count发生变化就会执行
  useEffect(() => {
    console.log('组件更新');
  }, [count]);

  // 组件挂载完成和更新都会执行-不传入第二个参数
  useEffect(() => {
    console.log('组件挂载和更新');
  });

  // 当做componentWillUnmount使用-组件卸载，第一个参数return一个函数，次函数中组件卸载将会执行
  useEffect(() => {
    return () => {
      console.log('组件卸载');
    };
  });
  return (
    <>
      <p>F12看具体执行情况</p>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>累加</button>
    </>
  );
};

export default Wrap;
```

### 特点

如果同时存在多个 `useEffect` ，会按照出现次序执行。

## useContext

```js
const value = useContext(MyContext);
```

### 介绍

接收一个 `context` 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value prop` 决定。

别忘记 useContext 的参数必须是 `context` 对象本身：

- **正确：** `useContext(MyContext)`

- **错误：** `useContext(MyContext.Consumer)`

- **错误：** `useContext(MyContext.Provider)`

如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，
`useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>` 。

`useContext(MyContext)` 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件提供 context。
:::

### 使用方式

1. 使用 `Mycontext = createContext(initial)` 创建上下文。

2. 使用 `<Mycontext.Provider>` 圈定作用域。

3. 在作用域内使用 `useContext(Mycontext)` 来使用上下文。

```jsx
import React, { useContext, useState, createContext } from 'react';

// 创建context
const Mycontext = createContext();

// 子组件
const Child = () => {
  const { count } = useContext(Mycontext);
  return (
    <div className="child">
      <h3>我是子组件，计数器：{count}</h3>
      <Grandson />
    </div>
  );
};

// 孙组件
const Grandson = () => {
  // 得到Mycontext.Provider传递过来的count, setCount
  const { count, setCount } = useContext(Mycontext);

  return (
    <div className="grandson">
      <h3>我是孙组件，计数器：{count}</h3>

      {/* 更新计数器，Child和Grandson组件的count都会更新*/}
      <button onClick={() => setCount(count + 1)}>更新计数器</button>
    </div>
  );
};

const Wrap = () => {
  const [count, setCount] = useState(0);
  return (
    // 通过 value props传递count, setCount，子组件都可以得到count, setCount
    <Mycontext.Provider value={{ count, setCount }}>
      <div className="father">
        <h3>我是父组件</h3>
        <Child />
      </div>
    </Mycontext.Provider>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useContextExp01.png)

## useReducer

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

## useLayoutEffect

### 介绍

`useLayoutEffect` 被称为 **布局副作用**。

- `useEffect` 在浏览器渲染完成后执行。

- `useLayoutEffect` 在浏览器渲染前执行。

### 特点

- `useLayoutEffect` 总比 `useEffect` 先执行。

- `useLayoutEffect` 里的任务最好影响了 `Layout`。

- 为了用户体验，优先使用 `useEffect` (优先渲染)，以避免阻塞视觉更新。

### 示例

```jsx
/**
 * desc: F12看具体执行情况
 */
import React, { useState, useEffect, useLayoutEffect } from 'react';

/* useLayoutEffect比useEffect先执行 */
function Wrap() {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount((count) => count + 1);
  };
  //执行顺序打印出 2、3、1
  useEffect(() => {
    console.log(1);
  });
  useLayoutEffect(() => {
    console.log(2);
  });
  useLayoutEffect(() => {
    console.log(3);
  });
  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={handler}>点击+1</button>
    </div>
  );
}

export default Wrap;
```
![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useLayoutEffectExp01.png)


## useMemo

要理解 `useMemo` 得先理解 `React.memo`，React默认有多余的 render。

### React.memo

```jsx | pure
const MyComponent = React.memo(function MyComponent(props) {});
```

`React.memo` 为高阶组件。它与 `React.PureComponent` 非常相似，但只适用于函数组件，而不适用 class 组件。

如果你的函数组件在给定相同 `props` 的情况下渲染相同的结果，那么你可以通过将其包装在 `React.memo` 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

`React.memo` 仅检查 `props` 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 `useState` 或 `useContext` 的 Hook，当 `context` 发生变化时，它仍会重新渲染。

默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。

```jsx | pure
function MyComponent(props) {
  /* 使用 props 渲染 */
}
function areEqual(prevProps, nextProps) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
export default React.memo(MyComponent, areEqual);
```

<Alert type="warning">
与 class 组件中 shouldComponentUpdate() 方法不同的是，如果 props 相等，areEqual 会返回 true；如果 props 不相等，则返回 false。这与 shouldComponentUpdate 方法的返回值相反。
</Alert>

### 多余更新

父组件更新导致子组件发生不必要得更新

```jsx
import React, { useState } from 'react';

// 子组件
const Child = () => {
  console.log('Child组件渲染了');
  return (
    <div>
      <h1>子组件</h1>
      <div>时间戳：{new Date().getTime()}</div>
    </div>
  );
};
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('张三');

  // 每次点击更改父组件时间戳时，Child组件都会被重新渲染
  const handler = () => {
    setTime(new Date().getTime());
  };

  return (
    <div>
      <h1>时间戳: {time}</h1>
      <button onClick={handler}>更改时间戳</button>
      <hr />
      <Child name={name} />
    </div>
  );
};

export default Wrap;
```
![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReactMemoExp01.png)


**使用React.memo包裹父组件**

使用 `React.memo` 包裹父组件，当父组件更新，但是传入Child组件的 `props` 没有更新，Child组件就不会更新。（传入的props是地址引用的除外）

```jsx
import React, { useState } from 'react';

// 子组件-使用React.memo包裹
const Child = React.memo(() => {
  console.log('Child组件渲染了');
  return (
    <div>
      <h1>子组件</h1>
      <div>时间戳：{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('张三');

  // 点击更改父组件时间戳
  const handler = () => {
    setTime(new Date().getTime());
  };

  return (
    <div>
      <h1>时间戳: {time}</h1>
      <button onClick={handler}>更改时间戳</button>
      <hr />
      {/* 使用React.memo包裹父组件，当父组件更新，但是传入Child组件的props没有更新，Child组件就不会更新 */}
      <Child name={name} />
    </div>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReactMemoExp02.png)

这玩意有一个bug，当给Child组件props传递一个 `onClickChild` 函数之后，一秒破功，因为 Wrap组件渲染时，会再次执行 `onClickChild` ，生成新的函数新旧函数虽然功能一样，但是 `地址引用` 不一样！

**当传递给子组件的是一个引用地址时，React.memo依然阻止不了子组件重新渲染**

传递给子组件的地址引用每次都会不同，如下示例：

```jsx
import React, { useState } from 'react';

// 子组件-使用React.memo包裹
const Child = React.memo(() => {
  console.log('Child组件渲染了');
  return (
    <div>
      <h1>子组件</h1>
      <div>时间戳：{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('张三');

  // 点击更改父组件时间戳
  const handler = () => {
    setTime(new Date().getTime());
  };

  // 传递给Child组件的函数，Warp组件每次渲染，该函数地址引用都不同。
  const onClickChild = () => {};

  return (
    <div>
      <h1>时间戳: {time}</h1>
      <button onClick={handler}>更改时间戳</button>
      <hr />
      {/* 使用React.memo包裹父组件，当父组件更新，虽然传入Child组件的name没有更新，但是onClickChild地址引用每次不同，就会导致Child组件重新更新*/}
      <Child name={name} fn={onClickChild} />
    </div>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/ReactMemoExp03.png)

**<font v-pre color="orange" size="5">解决以上问题可以使用：useMemo</font>**

请上我们的主角：**useMemo**

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 特点

- 第一个参数是函数 `() => value`。

- 第二个参数是依赖 `[m, n]`。

- 只有当依赖变化时，才会计算出新的 value，如果依赖不变，那么就重用之前的 value。

- 这不就是 Vue 2的 `computed` 吗？。

**示例：**

```jsx
import React, { useState, useMemo } from 'react';

// 子组件-使用React.memo包裹
const Child = React.memo(() => {
  console.log('Child组件渲染了');
  return (
    <div>
      <h1>子组件</h1>
      <div>时间戳：{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('张三');

  // 点击更改父组件时间戳
  const handler = () => {
    setTime(new Date().getTime());
  };

  // useMemo包裹空函数onClickChild，依赖项传入[name]，表示只有name改变才会重新计算得到onClickChild2
  const onClickChild = () => {};
  const onClickChild2 = useMemo(() => onClickChild, [name]);

  return (
    <div>
      <h1>时间戳: {time}</h1>
      <button onClick={handler}>更改时间戳</button>
      <hr />
      <Child name={name} fn={onClickChild2} />
    </div>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useMemoExp01.png)


### 注意

如果你的 `value` 是一个函数，那么你就要写成 `useMemo(() => x => console.log(x))` 这是一个返回函数的函数。是不是很难用？于是就有了 `useCallback`。

## useCallback

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

把内联回调函数及依赖项数组作为参数传入 `useCallback`，它将返回该回调函数的 `memoized` 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 `shouldComponentUpdate`）的子组件时，它将非常有用。

`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。

```jsx
import React, { useState, useCallback } from 'react';

// 子组件-使用React.memo包裹
const Child = React.memo(() => {
  console.log('Child组件渲染了');
  return (
    <div>
      <h1>子组件</h1>
      <div>时间戳：{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('张三');

  // 点击更改父组件时间戳
  const handler = () => {
    setTime(new Date().getTime());
  };

  // useCallback包裹空函数onClickChild，依赖项传入[name]，表示只有name改变才会重新计算得到onClickChild2
  const onClickChild = () => {};
  const onClickChild2 = useCallback(onClickChild , [name]);

  return (
    <div>
      <h1>时间戳: {time}</h1>
      <button onClick={handler}>更改时间戳</button>
      <hr />
      <Child name={name} fn={onClickChild2} />
    </div>
  );
};

export default Wrap;
```

## useRef

```js
const refContainer = useRef(initialValue);
```

### 介绍

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

`useRef` 会在每次渲染时返回同一个 ref 对象。

请记住，当 ref 对象内容发生变化时，`useRef` 并不会通知你。变更 `.current` 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。

更改 `useRef` 的 `current` 属性，组件不会重新渲染。如下：

```jsx
import React, { useRef } from 'react';

const Wrap = () => {
  const inputEl = useRef(null);
  // 点击按钮为输入框赋值
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素，value为给输入框赋值
    inputEl.current.value = '张三';
  };
  return (
    <>
      {/* 使用时间戳测试更改输入框value值会不会导致组件更新 */}
      <h1>{new Date().getTime()}</h1>
      <input ref={inputEl} type="text" placeholder="请输入" />
      <button onClick={onButtonClick}>赋值</button>
    </>
  );
};

export default Wrap;
```

![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useRefExp01.png)

### 使用useRef访问DOM

点击 ”聚焦输入框“ 按钮，输入框会获得焦点。

```jsx
import React, { useRef } from 'react';

const Wrap = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" placeholder="请输入" />
      <button onClick={onButtonClick}>聚焦输入框</button>
    </>
  );
};

export default Wrap;
```

`useRef()` Hook 不仅可以用于 DOM refs。「ref」 对象是一个 `current` 属性可变且可以容纳任意值的通用容器，类似于一个 class 的实例属性。

```jsx | pure
function Timer() {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      // ...
    });
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  // ...
}
```

## useImperativeHandle

```js
useImperativeHandle(ref, createHandle, [deps])
```

### 介绍

`useImperativeHandle` 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。`useImperativeHandle` 应当与 `forwardRef` 一起使用：

注意：函数式组件 `props` 无法传递 `ref`。如下会抛出警告：Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

```jsx
/**
 * desc: F12查看报错警告
 */
import React, { useImperativeHandle, useRef } from 'react';

// 子组件
const Child = () => {
  return (
    <div>
      <input type="text" placeholder="请输入" />
    </div>
  );
};

const Wrap = () => {
  const inputEl = useRef(null);

  return (
    <>
      {/* 
Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? */}
      <Child ref={inputEl} />
    </>
  );
};

export default Wrap;
```

解决上述问题：需要使用 `React.forwardRef()`。

### React.forwardRef

`React.forwardRef` 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。

`React.forwardRef` 接受渲染函数作为参数。React 将使用 `props` 和 `ref` 作为参数来调用此函数。此函数应返回 React 节点。

```jsx | pure
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 能访问到button
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

在上述的示例中，React 会将 `<FancyButton ref={ref}>` 元素的 `ref` 作为第二个参数传递给 `React.forwardRef` 函数中的渲染函数。该渲染函数会将 `ref` 传递给 `<button ref={ref}>` 元素。因此，当 React 附加了 ref 属性之后，`ref.current` 将直接指向 `<button>` DOM 元素实例。

**useImperativeHandle结合forwardRef示例：**

父组件调用子组件绑定 ref 元素的 `focus()` 和 `value()`:

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// 子组件
const Child = forwardRef((props, ref) => {
  const inputEl = useRef(null);
  // 向父组件暴露focus和value方法，让父组件能让子组件输入框聚焦和取值
  useImperativeHandle(ref, () => ({
    focus: () => inputEl.current.focus(),
    value: () => inputEl.current.value,
  }));
  return (
    <div>
      <input type="text" ref={inputEl} placeholder="请输入" />
    </div>
  );
});

const Wrap = () => {
  const inputEl = useRef(null);
  // 获取子组件输入框的值
  const getInputValue = () => {
    alert(inputEl.current.value());
  };

  // 让子组件输入框聚焦
  const getInputFocus = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <Child ref={inputEl} />
      <button onClick={getInputValue}>取值</button>
      <button onClick={getInputFocus}>聚焦</button>
    </>
  );
};

export default Wrap;
```
![img](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useImperativeHandleExp01.png)
