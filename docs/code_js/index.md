---
title: DOM操作
toc: menu
order: 0
---

<BackTop></BackTop>

# DOM 操作

## 获取可视窗口宽度

```jsx
import React, { useEffect, useState } from 'react';
const Demo = () => {
  const [viewWidth, setViewWidth] = useState(0);
  const style = {
    padding: '20px',
    textAlign: 'center',
  };
  useEffect(() => {
    setViewWidth(getPageViewWidth());
    window.addEventListener('resize', () => {
      setViewWidth(getPageViewWidth());
    });
  }, []);

  // 获取可视窗口宽度
  const getPageViewWidth = () => {
    return (document.compatMode === 'BackCompat' ? document.body : document.documentElement)
      .clientWidth;
  };
  return (
    <>
      <div style={style}>
        <h3 style={{ margin: 0 }}>当前可视窗口宽度：{viewWidth}</h3>
      </div>
    </>
  );
};

export default Demo;
```

```js
/**
 * 获取可视窗口宽度
 * @returns 当前可视窗口宽度
 */
const getPageViewWidth = () => {
  return (document.compatMode === 'BackCompat' ? document.body : document.documentElement)
    .clientWidth;
};
```

## 获取可视窗口高度

```jsx
import React, { useEffect, useState } from 'react';
const Demo = () => {
  const [viewHeight, setViewHeight] = useState(0);
  const style = {
    padding: '20px',
    textAlign: 'center',
  };
  useEffect(() => {
    setViewHeight(getClientHeight());
    window.addEventListener('resize', () => {
      setViewHeight(getClientHeight());
    });
  }, []);

  /**
   * 获取可视窗口高度
   * @returns 当前可视窗口高度
   */
  const getClientHeight = () => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight =
        document.body.clientHeight < document.documentElement.clientHeight
          ? document.body.clientHeight
          : document.documentElement.clientHeight;
    } else {
      clientHeight =
        document.body.clientHeight > document.documentElement.clientHeight
          ? document.body.clientHeight
          : document.documentElement.clientHeight;
    }
    return clientHeight;
  };
  return (
    <>
      <div style={style}>
        <h3 style={{ margin: 0 }}>当前可视窗口高度：{viewHeight}</h3>
      </div>
    </>
  );
};

export default Demo;
```

```js
/**
 * 获取可视窗口高度
 * @returns 当前可视窗口高度
 */
const getClientHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
};
```

## 循环一个节点列表

```jsx
import React from 'react';
import { Button } from 'antd';
const Demo = () => {
  const style = {
    border: '1px solid #eee',
    padding: '30px',
  };
  const box = {
    width: '60px',
    height: '60px',
    background: '#eee',
    textAlign: 'center',
    lineHeight: '60px',
    marginRight: '10px',
  };

  const setColor = () => {
    const elements = document.querySelectorAll('.div-box');
    // 不支持Internet Explorer
    elements.forEach((ele, index) => {
      setTimeout(() => {
        ele.style.color = '#fff';
        ele.style.background = '#4569d4';
      }, 200 * (index + 0.5));
    });
  };
  return (
    <>
      <div style={style}>
        <h5>循环给box设置颜色</h5>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <div className="div-box" style={box}>
            box1
          </div>
          <div className="div-box" style={box}>
            box2
          </div>
          <div className="div-box" style={box}>
            box3
          </div>
        </div>
        <Button style={{ marginTop: '20px' }} onClick={setColor}>
          设置颜色
        </Button>
      </div>
    </>
  );
};

export default Demo;
```

```js
// 节点列表
const elements = document.querySelectorAll('selector');

// 1、使用 ES6 扩展运算符
[...elements].forEach((ele, index) => {
  // ...
});

// 2、使用数组方法
Array.from(elements).forEach((ele, inde) => {
  // ...(不支持IE)
});

// Or
[].forEach.call(elements, (ele, index) => {
  // ...
});

// Or
[].slice.call(elements, 0).forEach((ele, index) => {
  // ...
});

// 3、使用forEach方法（如果您不必支持 Internet Explorer，请使用以下forEach方法）
elements.forEach((ele, index) => {
  // ...
});
```

## 检查元素是否在视口中

```jsx
import React, { useState } from 'react';
import { Button } from 'antd';
const Demo = () => {
  const [show, setShow] = useState(true);
  const style = {
    border: '1px solid #eee',
    height: '220px',
    padding: '30px',
  };
  const box = {
    width: '60px',
    height: '60px',
    background: '#eee',
    textAlign: 'center',
    lineHeight: '60px',
  };

  const isInViewport = (ele) => {
    const rect = ele.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const moveBox = () => {
    const ele = document.querySelector('#checkBox');
    ele.style.position = 'fixed';
    ele.style.left = 0;
    ele.style.zIndex = -1;
    ele.style.transform = 'translateX(-100%)';
    setShow(isInViewport(ele));
  };

  const moveBoxIn = () => {
    const ele = document.querySelector('#checkBox');
    ele.style.position = '';
    ele.style.left = '';
    ele.style.zIndex = '';
    ele.style.transform = '';
    setShow(isInViewport(ele));
  };

  return (
    <>
      <div style={style}>
        <h5>检查元素是否在视口中: {show ? 'true' : 'false'}</h5>
        <Button style={{ margin: '20px 0' }} type="primary" onClick={moveBox}>
          将元素移动到视口外
        </Button>
        <Button style={{ margin: '20px' }} onClick={moveBoxIn}>
          将元素移动到视口内
        </Button>
        <div id="checkBox" style={box}>
          box
        </div>
      </div>
    </>
  );
};

export default Demo;
```

```js
/**
 * 检查元素是否在视口中
 * @param {Element} ele 指定需要检测的元素DOM
 * @returns true | false
 */
const isInViewport = (ele) => {
  const rect = ele.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
```

## 子元素相对于父元素的位置

```jsx
import React, { useState, useEffect } from 'react';
const Demo = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const style = {
    border: '1px solid #eee',
    padding: '30px',
  };
  const wrap = {
    width: '200px',
    height: '200px',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    background: '#eee',
    marginTop: '20px',
  };

  const child = {
    width: '60px',
    height: '60px',
    background: '#ddd',
    position: 'absolute',
    top: '100px',
    left: '90px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    const wrapBox = document.querySelector('#wrapBox');
    const childBox = document.querySelector('#childBox');
    setTop(getElePositions(wrapBox, childBox).top);
    setLeft(getElePositions(wrapBox, childBox).left);
  }, []);

  /**
   * 子元素相对于父元素的位置
   * @param {Element} wrap 父盒子DOM
   * @param {Element} child 子盒子DOM
   * @returns 子盒子相对于父盒子的top值和left值
   */
  const getElePositions = (wrap, child) => {
    const childRect = child.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    const top = childRect.top - wrapRect.top;
    const left = childRect.left - wrapRect.left;
    return {
      top,
      left,
    };
  };

  return (
    <>
      <div style={style}>
        <h5>child 相对于 wrap 的 Top为：{top}</h5>
        <h5>child 相对于 wrap 的 Left为：{left}</h5>
        <div style={wrap} id="wrapBox">
          wrap
          <div style={child} id="childBox">
            child
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
```

```js
/**
 * 子元素相对于父元素的位置
 * @param {Element} wrap 父盒子DOM
 * @param {Element} child 子盒子DOM
 * @returns 子盒子相对于父盒子的top值和left值
 */
const getElePositions = (wrap, child) => {
  const childRect = child.getBoundingClientRect();
  const wrapRect = wrap.getBoundingClientRect();
  const top = childRect.top - wrapRect.top;
  const left = childRect.left - wrapRect.left;
  return {
    top,
    left,
  };
};
```

## 元素是否在可滚动容器中可见

```jsx
import React, { useState, useEffect } from 'react';
const Demo = () => {
  const [visible, setVisible] = useState(false);
  const style = {
    border: '1px solid #eee',
    padding: '30px',
  };
  const wrap = {
    width: '200px',
    height: '360px',
    padding: '20px',
    overflowY: 'auto',
    boxSizing: 'border-box',
    position: 'relative',
    background: '#eee',
    marginTop: '20px',
  };

  const child = {
    width: '60px',
    height: '60px',
    marginTop: '360px',
    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    const ele = document.querySelector('#eleBox');
    const container = document.querySelector('#containerBox');
    container.addEventListener('scroll', () => {
      setVisible(isVisible(ele, container));
    });
  }, []);

  /**
   * 元素是否在可滚动容器中可见
   * @param {Element} ele 子元素DOM
   * @param {Element} container 父元素DOM
   * @returns 元素是否在滚动元素container中可见
   */
  const isVisible = (ele, container) => {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;
    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;
    return (
      (eleTop >= containerTop && eleBottom <= containerBottom) ||
      (eleTop < containerTop && containerTop < eleBottom) ||
      (eleTop < containerBottom && containerBottom < eleBottom)
    );
  };

  return (
    <>
      <div style={style}>
        <h5>child 在 wrap 中是否可见：{visible ? 'true' : 'false'}</h5>
        <div style={wrap} id="containerBox">
          wrap
          <div style={child} className="child" id="eleBox">
            child
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
```

```js
/**
 * 元素是否在可滚动容器中可见
 * @param {Element} ele 子元素DOM
 * @param {Element} container 父元素DOM
 * @returns 元素是否在滚动元素container中可见
 */
const isVisible = (ele, container) => {
  const eleTop = ele.offsetTop;
  const eleBottom = eleTop + ele.clientHeight;
  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;
  return (
    (eleTop >= containerTop && eleBottom <= containerBottom) ||
    (eleTop < containerTop && containerTop < eleBottom) ||
    (eleTop < containerBottom && containerBottom < eleBottom)
  );
};
```

我们还可以根据元素和容器的边界矩形执行检查：

```js
/**
 * 元素是否在可滚动容器中可见
 * @param {Element} ele 子元素DOM
 * @param {Element} container 父元素DOM
 * @returns 元素是否在滚动元素container中可见
 */
const isVisible = function (ele, container) {
  const { bottom, height, top } = ele.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  return top <= containerRect.top
    ? containerRect.top - top <= height
    : bottom - containerRect.bottom <= height;
};
```
