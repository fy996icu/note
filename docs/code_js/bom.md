---
title: BOM操作
toc: menu
order: 0.1
---

<BackTop></BackTop>

# BOM 操作

## 浏览器全屏

```jsx
import React from 'react';
import { Button, Space } from 'antd';

const Demo = () => {
  // 打开全屏
  const openFullscreen = () => {
    const element = document.documentElement;
    //IE 10及以下ActiveXObject
    if (window.ActiveXObject) {
      // eslint-disable-next-line no-undef
      const WsShell = new ActiveXObject('WScript.Shell');
      WsShell.SendKeys('{F11}');
    }
    //HTML W3C 提议
    else if (element.requestFullScreen) {
      element.requestFullScreen();
    }
    //IE11
    else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
      //写全屏后的执行函数
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
    // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else {
      alert('此设备不支持 Fullscreen API');
    }
  };
  // 退出全屏
  const exitFullscreen = () => {
    const element = document.documentElement;
    //IE ActiveXObject
    if (window.ActiveXObject) {
      // eslint-disable-next-line no-undef
      const WsShell = new ActiveXObject('WScript.Shell');
      WsShell.SendKeys('{F11}');
    }
    //HTML5 W3C 提议
    else if (element.requestFullScreen) {
      document.exitFullscreen();
    }
    //IE 11
    else if (element.msRequestFullscreen) {
      document.msExitFullscreen();
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      document.webkitCancelFullScreen();
    }
    // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      document.mozCancelFullScreen();
    }
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={openFullscreen}>
          打开全屏
        </Button>
        <Button onClick={exitFullscreen}>退出全屏</Button>
      </Space>
    </>
  );
};

export default Demo;
```

```js
// 打开全屏
const openFullscreen = () => {
  const element = document.documentElement;
  //IE 10及以下ActiveXObject
  if (window.ActiveXObject) {
    // eslint-disable-next-line no-undef
    const WsShell = new ActiveXObject('WScript.Shell');
    WsShell.SendKeys('{F11}');
  }
  //HTML W3C 提议
  else if (element.requestFullScreen) {
    element.requestFullScreen();
  }
  //IE11
  else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
    //写全屏后的执行函数
  }
  // Webkit (works in Safari5.1 and Chrome 15)
  else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
  // Firefox (works in nightly)
  else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else {
    alert('此设备不支持 Fullscreen API');
  }
};

// 退出全屏
const exitFullscreen = () => {
  const element = document.documentElement;
  //IE ActiveXObject
  if (window.ActiveXObject) {
    // eslint-disable-next-line no-undef
    const WsShell = new ActiveXObject('WScript.Shell');
    WsShell.SendKeys('{F11}');
  }
  //HTML5 W3C 提议
  else if (element.requestFullScreen) {
    document.exitFullscreen();
  }
  //IE 11
  else if (element.msRequestFullscreen) {
    document.msExitFullscreen();
  }
  // Webkit (works in Safari5.1 and Chrome 15)
  else if (element.webkitRequestFullScreen) {
    document.webkitCancelFullScreen();
  }
  // Firefox (works in nightly)
  else if (element.mozRequestFullScreen) {
    document.mozCancelFullScreen();
  }
};
```

## 禁止右键菜单

```jsx
import React, { useEffect } from 'react';
const Demo = () => {
  const style = {
    border: '1px solid #eee',
    padding: '30px',
  };
  useEffect(() => {
    disabledContextmenu('#box');
  }, []);
  /**
   * 禁止右键菜单
   * @param {String} domId 需要禁止右键菜单的容器的id或者class
   */
  const disabledContextmenu = (domId) => {
    const box = document.querySelector(domId);
    box.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  };
  return (
    <>
      <div id="box" style={style}>
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、 在此区域内无法使用鼠标右键菜单、
        在此区域内无法使用鼠标右键菜单、
      </div>
    </>
  );
};

export default Demo;
```

```js
/**
 * 禁止右键菜单
 * @param {String} domId 需要禁止右键菜单的容器的id或者class
 */
const disabledContextmenu = (domId) => {
  const box = document.querySelector(domId);
  box.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
};
```

## 禁止选中

```jsx
import React, { useEffect } from 'react';
const Demo = () => {
  const style = {
    border: '1px solid #eee',
    padding: '30px',
  };
  useEffect(() => {
    disabledSelect('#boxSelect');
  }, []);
  /**
   * 禁止选中
   * @param {String} domId 需要禁止选中的容器的id或者class
   */
  const disabledSelect = (domId) => {
    const box = document.querySelector(domId);
    box.addEventListener('selectstart', function (event) {
      event.preventDefault();
    });
  };
  return (
    <>
      <div id="boxSelect" style={style}>
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、 在此区域内无法选中文本、
        在此区域内无法选中文本、 在此区域内无法选中文本、
      </div>
    </>
  );
};

export default Demo;
```

```js
/**
 * 禁止选中
 * @param {String} domId 需要禁止选中的容器的id或者class
 */
const disabledSelect = (domId) => {
  const box = document.querySelector(domId);
  box.addEventListener('selectstart', function (event) {
    event.preventDefault();
  });
};
```
