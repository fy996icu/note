(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{"9kvl":function(V,L,c){"use strict";var J=c("FfOG");c.d(L,"a",function(){return J.b});var z=c("bCY9");c.d(L,"b",function(){return z.a})},afA6:function(V,L,c){"use strict";c.r(L);var J=c("0Owb"),z=c("q1tI"),k=c.n(z),x=c("q3YX"),S=c("9og8"),j=c("WmNS"),D=c.n(j),B=c("rlch"),_={"Foo-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d;return D.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=c("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,v=(0,h.t0)(h.t1),h.next=8,c.e(146).then(c.bind(null,"ArA+"));case 8:return o=h.sent,d=function(){return v.default.createElement(o.Foo,{title:"First Demo"})},h.abrupt("return",d);case 11:case"end":return h.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:`import React from 'react';
import { Foo } from 'dumi';

export default () => <Foo title="First Demo" />;`}},dependencies:{react:{version:"17.0.2"},dumi:{version:"1.1.42"}},componentName:"Foo",identifier:"Foo-demo"}},"bom-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h;return D.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return p=c("K+nK"),g.next=3,c.e(17).then(c.bind(null,"DYRE"));case 3:return g.t0=p,g.next=6,c.e(14).then(c.bind(null,"zeV3"));case 6:return g.t1=g.sent,v=(0,g.t0)(g.t1),g.next=10,c.e(4).then(c.bind(null,"+L6B"));case 10:return g.t2=p,g.next=13,Promise.all([c.e(0),c.e(1),c.e(5)]).then(c.bind(null,"2/Rp"));case 13:return g.t3=g.sent,o=(0,g.t2)(g.t3),g.t4=p,g.next=18,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 18:return g.t5=g.sent,d=(0,g.t4)(g.t5),C=function(){var l=function(){var u=document.documentElement;if(window.ActiveXObject){var n=new ActiveXObject("WScript.Shell");n.SendKeys("{F11}")}else u.requestFullScreen?u.requestFullScreen():u.msRequestFullscreen?u.msRequestFullscreen():u.webkitRequestFullScreen?u.webkitRequestFullScreen():u.mozRequestFullScreen?u.mozRequestFullScreen():alert("\u6B64\u8BBE\u5907\u4E0D\u652F\u6301 Fullscreen API")},e=function(){var u=document.documentElement;if(window.ActiveXObject){var n=new ActiveXObject("WScript.Shell");n.SendKeys("{F11}")}else u.requestFullScreen?document.exitFullscreen():u.msRequestFullscreen?document.msExitFullscreen():u.webkitRequestFullScreen?document.webkitCancelFullScreen():u.mozRequestFullScreen&&document.mozCancelFullScreen()};return d.default.createElement(d.default.Fragment,null,d.default.createElement(v.default,null,d.default.createElement(o.default,{type:"primary",onClick:l},"\u6253\u5F00\u5168\u5C4F"),d.default.createElement(o.default,{onClick:e},"\u9000\u51FA\u5168\u5C4F")))},h=C,g.abrupt("return",h);case 23:case"end":return g.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, Space } from 'antd';

const Demo = () => {
  // \u6253\u5F00\u5168\u5C4F
  const openFullscreen = () => {
    const element = document.documentElement;
    //IE 10\u53CA\u4EE5\u4E0BActiveXObject
    if (window.ActiveXObject) {
      // eslint-disable-next-line no-undef
      const WsShell = new ActiveXObject('WScript.Shell');
      WsShell.SendKeys('{F11}');
    }
    //HTML W3C \u63D0\u8BAE
    else if (element.requestFullScreen) {
      element.requestFullScreen();
    }
    //IE11
    else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
      //\u5199\u5168\u5C4F\u540E\u7684\u6267\u884C\u51FD\u6570
    }
    // Webkit (works in Safari5.1 and Chrome 15)
    else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
    // Firefox (works in nightly)
    else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else {
      alert('\u6B64\u8BBE\u5907\u4E0D\u652F\u6301 Fullscreen API');
    }
  };
  // \u9000\u51FA\u5168\u5C4F
  const exitFullscreen = () => {
    const element = document.documentElement;
    //IE ActiveXObject
    if (window.ActiveXObject) {
      // eslint-disable-next-line no-undef
      const WsShell = new ActiveXObject('WScript.Shell');
      WsShell.SendKeys('{F11}');
    }
    //HTML5 W3C \u63D0\u8BAE
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
          \u6253\u5F00\u5168\u5C4F
        </Button>
        <Button onClick={exitFullscreen}>\u9000\u51FA\u5168\u5C4F</Button>
      </Space>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"bom-demo"}},"bom-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C;return D.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var e=v(l);if(e&&e.has(r))return e.get(r);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in r)if(n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)){var i=u?Object.getOwnPropertyDescriptor(r,n):null;i&&(i.get||i.set)?Object.defineProperty(t,n,i):t[n]=r[n]}return t.default=r,e&&e.set(r,t),t},v=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,e=new WeakMap;return(v=function(u){return u?e:l})(r)},m.t0=o,m.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return m.t1=m.sent,p=(0,m.t0)(m.t1),d=function(){var r={border:"1px solid #eee",padding:"30px"};(0,p.useEffect)(function(){l("#box")},[]);var l=function(t){var u=document.querySelector(t);u.addEventListener("contextmenu",function(n){n.preventDefault()})};return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{id:"box",style:r},"\u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001"))},C=d,m.abrupt("return",C);case 10:case"end":return m.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
const Demo = () => {
  const style = {
    border: '1px solid #eee',
    padding: '30px',
  };
  useEffect(() => {
    disabledContextmenu('#box');
  }, []);
  /**
   * \u7981\u6B62\u53F3\u952E\u83DC\u5355
   * @param {String} domId \u9700\u8981\u7981\u6B62\u53F3\u952E\u83DC\u5355\u7684\u5BB9\u5668\u7684id\u6216\u8005class
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
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u4F7F\u7528\u9F20\u6807\u53F3\u952E\u83DC\u5355\u3001
      </div>
    </>
  );
};

export default Demo;`}},dependencies:{react:{version:"17.0.2"}},identifier:"bom-demo-1"}},"bom-demo-2":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C;return D.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var e=v(l);if(e&&e.has(r))return e.get(r);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in r)if(n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)){var i=u?Object.getOwnPropertyDescriptor(r,n):null;i&&(i.get||i.set)?Object.defineProperty(t,n,i):t[n]=r[n]}return t.default=r,e&&e.set(r,t),t},v=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,e=new WeakMap;return(v=function(u){return u?e:l})(r)},m.t0=o,m.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return m.t1=m.sent,p=(0,m.t0)(m.t1),d=function(){var r={border:"1px solid #eee",padding:"30px"};(0,p.useEffect)(function(){l("#boxSelect")},[]);var l=function(t){var u=document.querySelector(t);u.addEventListener("selectstart",function(n){n.preventDefault()})};return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{id:"boxSelect",style:r},"\u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001"))},C=d,m.abrupt("return",C);case 10:case"end":return m.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
const Demo = () => {
  const style = {
    border: '1px solid #eee',
    padding: '30px',
  };
  useEffect(() => {
    disabledSelect('#boxSelect');
  }, []);
  /**
   * \u7981\u6B62\u9009\u4E2D
   * @param {String} domId \u9700\u8981\u7981\u6B62\u9009\u4E2D\u7684\u5BB9\u5668\u7684id\u6216\u8005class
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
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
        \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001 \u5728\u6B64\u533A\u57DF\u5185\u65E0\u6CD5\u9009\u4E2D\u6587\u672C\u3001
      </div>
    </>
  );
};

export default Demo;`}},dependencies:{react:{version:"17.0.2"}},identifier:"bom-demo-2"}},"device-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(!1),t=(0,v.default)(e,2),u=t[0],n=t[1],i={padding:"20px",textAlign:"center"};(0,o.useEffect)(function(){n(a())},[]);var a=function(){var f=window.matchMedia("(pointer:coarse)");return f&&f.matches};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:i},o.default.createElement("h3",{style:{margin:0}},"\u662F\u5426\u662F\u79FB\u52A8\u7AEF\uFF1A",u?"true":"false")))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect, useState } from 'react'
const Demo = () => {
	const [isMobileStatus, setIsMobileStatus] = useState(false)
	const style = {
		padding: '20px',
		textAlign: 'center',
	}
	useEffect(() => {
		setIsMobileStatus(isMobile())
	}, [])

	/**
	 * \u68C0\u6D4B\u79FB\u52A8\u6D4F\u89C8\u5668
	 * @returns \u662F\u5426\u662F\u79FB\u52A8\u7AEF true-\u79FB\u52A8\u7AEF\uFF1Bfalse-\u975E\u79FB\u52A8\u7AEF
	 */
	const isMobile = () => {
		const match = window.matchMedia('(pointer:coarse)')
		return match && match.matches
	}
	return (
		<>
			<div style={style}>
				<h3 style={{ margin: 0 }}>\u662F\u5426\u662F\u79FB\u52A8\u7AEF\uFF1A{isMobileStatus ? 'true' : 'false'}</h3>
			</div>
		</>
	)
}

export default Demo`}},dependencies:{react:{version:"17.0.2"}},identifier:"device-demo"}},"code_js-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i={padding:"20px",textAlign:"center"};(0,o.useEffect)(function(){n(a()),window.addEventListener("resize",function(){n(a())})},[]);var a=function(){return(document.compatMode==="BackCompat"?document.body:document.documentElement).clientWidth};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:i},o.default.createElement("h3",{style:{margin:0}},"\u5F53\u524D\u53EF\u89C6\u7A97\u53E3\u5BBD\u5EA6\uFF1A",u)))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect, useState } from 'react';
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

  // \u83B7\u53D6\u53EF\u89C6\u7A97\u53E3\u5BBD\u5EA6
  const getPageViewWidth = () => {
    return (document.compatMode === 'BackCompat' ? document.body : document.documentElement)
      .clientWidth;
  };
  return (
    <>
      <div style={style}>
        <h3 style={{ margin: 0 }}>\u5F53\u524D\u53EF\u89C6\u7A97\u53E3\u5BBD\u5EA6\uFF1A{viewWidth}</h3>
      </div>
    </>
  );
};

export default Demo;`}},dependencies:{react:{version:"17.0.2"}},identifier:"code_js-demo"}},"code_js-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i={padding:"20px",textAlign:"center"};(0,o.useEffect)(function(){n(a()),window.addEventListener("resize",function(){n(a())})},[]);var a=function(){var f=0;return document.body.clientHeight&&document.documentElement.clientHeight?f=document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:f=document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight,f};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:i},o.default.createElement("h3",{style:{margin:0}},"\u5F53\u524D\u53EF\u89C6\u7A97\u53E3\u9AD8\u5EA6\uFF1A",u)))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect, useState } from 'react';
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
   * \u83B7\u53D6\u53EF\u89C6\u7A97\u53E3\u9AD8\u5EA6
   * @returns \u5F53\u524D\u53EF\u89C6\u7A97\u53E3\u9AD8\u5EA6
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
        <h3 style={{ margin: 0 }}>\u5F53\u524D\u53EF\u89C6\u7A97\u53E3\u9AD8\u5EA6\uFF1A{viewHeight}</h3>
      </div>
    </>
  );
};

export default Demo;`}},dependencies:{react:{version:"17.0.2"}},identifier:"code_js-demo-1"}},"code_js-demo-2":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C;return D.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return p=c("K+nK"),m.next=3,c.e(4).then(c.bind(null,"+L6B"));case 3:return m.t0=p,m.next=6,Promise.all([c.e(0),c.e(1),c.e(5)]).then(c.bind(null,"2/Rp"));case 6:return m.t1=m.sent,v=(0,m.t0)(m.t1),m.t2=p,m.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return m.t3=m.sent,o=(0,m.t2)(m.t3),d=function(){var r={border:"1px solid #eee",padding:"30px"},l={width:"60px",height:"60px",background:"#eee",textAlign:"center",lineHeight:"60px",marginRight:"10px"},e=function(){var u=document.querySelectorAll(".div-box");u.forEach(function(n,i){setTimeout(function(){n.style.color="#fff",n.style.background="#4569d4"},200*(i+.5))})};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:r},o.default.createElement("h5",null,"\u5FAA\u73AF\u7ED9box\u8BBE\u7F6E\u989C\u8272"),o.default.createElement("div",{style:{display:"flex",marginTop:"20px"}},o.default.createElement("div",{className:"div-box",style:l},"box1"),o.default.createElement("div",{className:"div-box",style:l},"box2"),o.default.createElement("div",{className:"div-box",style:l},"box3")),o.default.createElement(v.default,{style:{marginTop:"20px"},onClick:e},"\u8BBE\u7F6E\u989C\u8272")))},C=d,m.abrupt("return",C);case 16:case"end":return m.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    // \u4E0D\u652F\u6301Internet Explorer
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
        <h5>\u5FAA\u73AF\u7ED9box\u8BBE\u7F6E\u989C\u8272</h5>
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
          \u8BBE\u7F6E\u989C\u8272
        </Button>
      </div>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"code_js-demo-2"}},"code_js-demo-3":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return h=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=C(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},C=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(C=function(a){return a?n:u})(t)},p=c("K+nK"),l.next=5,c.e(4).then(c.bind(null,"+L6B"));case 5:return l.t0=p,l.next=8,Promise.all([c.e(0),c.e(1),c.e(5)]).then(c.bind(null,"2/Rp"));case 8:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=p,l.next=13,Promise.resolve().then(c.bind(null,"tJVT"));case 13:return l.t3=l.sent,o=(0,l.t2)(l.t3),l.t4=h,l.next=18,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 18:return l.t5=l.sent,d=(0,l.t4)(l.t5),m=function(){var t=(0,d.useState)(!0),u=(0,o.default)(t,2),n=u[0],i=u[1],a={border:"1px solid #eee",height:"220px",padding:"30px"},s={width:"60px",height:"60px",background:"#eee",textAlign:"center",lineHeight:"60px"},f=function(w){var P=w.getBoundingClientRect();return P.top>=0&&P.left>=0&&P.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&P.right<=(window.innerWidth||document.documentElement.clientWidth)},y=function(){var w=document.querySelector("#checkBox");w.style.position="fixed",w.style.left=0,w.style.zIndex=-1,w.style.transform="translateX(-100%)",i(f(w))},E=function(){var w=document.querySelector("#checkBox");w.style.position="",w.style.left="",w.style.zIndex="",w.style.transform="",i(f(w))};return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{style:a},d.default.createElement("h5",null,"\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u89C6\u53E3\u4E2D: ",n?"true":"false"),d.default.createElement(v.default,{style:{margin:"20px 0"},type:"primary",onClick:y},"\u5C06\u5143\u7D20\u79FB\u52A8\u5230\u89C6\u53E3\u5916"),d.default.createElement(v.default,{style:{margin:"20px"},onClick:E},"\u5C06\u5143\u7D20\u79FB\u52A8\u5230\u89C6\u53E3\u5185"),d.default.createElement("div",{id:"checkBox",style:s},"box")))},g=m,l.abrupt("return",g);case 23:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
        <h5>\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u89C6\u53E3\u4E2D: {show ? 'true' : 'false'}</h5>
        <Button style={{ margin: '20px 0' }} type="primary" onClick={moveBox}>
          \u5C06\u5143\u7D20\u79FB\u52A8\u5230\u89C6\u53E3\u5916
        </Button>
        <Button style={{ margin: '20px' }} onClick={moveBoxIn}>
          \u5C06\u5143\u7D20\u79FB\u52A8\u5230\u89C6\u53E3\u5185
        </Button>
        <div id="checkBox" style={box}>
          box
        </div>
      </div>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"code_js-demo-3"}},"code_js-demo-4":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i=(0,o.useState)(0),a=(0,v.default)(i,2),s=a[0],f=a[1],y={border:"1px solid #eee",padding:"30px"},E={width:"200px",height:"200px",padding:"20px",boxSizing:"border-box",position:"relative",background:"#eee",marginTop:"20px"},R={width:"60px",height:"60px",background:"#ddd",position:"absolute",top:"100px",left:"90px",display:"flex",justifyContent:"center",alignItems:"center"};(0,o.useEffect)(function(){var P=document.querySelector("#wrapBox"),A=document.querySelector("#childBox");n(w(P,A).top),f(w(P,A).left)},[]);var w=function(A,I){var T=I.getBoundingClientRect(),M=A.getBoundingClientRect(),N=T.top-M.top,b=T.left-M.left;return{top:N,left:b}};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:y},o.default.createElement("h5",null,"child \u76F8\u5BF9\u4E8E wrap \u7684 Top\u4E3A\uFF1A",u),o.default.createElement("h5",null,"child \u76F8\u5BF9\u4E8E wrap \u7684 Left\u4E3A\uFF1A",s),o.default.createElement("div",{style:E,id:"wrapBox"},"wrap",o.default.createElement("div",{style:R,id:"childBox"},"child"))))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
   * \u5B50\u5143\u7D20\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u7684\u4F4D\u7F6E
   * @param {Element} wrap \u7236\u76D2\u5B50DOM
   * @param {Element} child \u5B50\u76D2\u5B50DOM
   * @returns \u5B50\u76D2\u5B50\u76F8\u5BF9\u4E8E\u7236\u76D2\u5B50\u7684top\u503C\u548Cleft\u503C
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
        <h5>child \u76F8\u5BF9\u4E8E wrap \u7684 Top\u4E3A\uFF1A{top}</h5>
        <h5>child \u76F8\u5BF9\u4E8E wrap \u7684 Left\u4E3A\uFF1A{left}</h5>
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

export default Demo;`}},dependencies:{react:{version:"17.0.2"}},identifier:"code_js-demo-4"}},"code_js-demo-5":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(!1),t=(0,v.default)(e,2),u=t[0],n=t[1],i={border:"1px solid #eee",padding:"30px"},a={width:"200px",height:"360px",padding:"20px",overflowY:"auto",boxSizing:"border-box",position:"relative",background:"#eee",marginTop:"20px"},s={width:"60px",height:"60px",marginTop:"360px",background:"#ddd",display:"flex",justifyContent:"center",alignItems:"center"};(0,o.useEffect)(function(){var y=document.querySelector("#eleBox"),E=document.querySelector("#containerBox");E.addEventListener("scroll",function(){n(f(y,E))})},[]);var f=function(E,R){var w=E.offsetTop,P=w+E.clientHeight,A=R.scrollTop,I=A+R.clientHeight;return w>=A&&P<=I||w<A&&A<P||w<I&&I<P};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:i},o.default.createElement("h5",null,"child \u5728 wrap \u4E2D\u662F\u5426\u53EF\u89C1\uFF1A",u?"true":"false"),o.default.createElement("div",{style:a,id:"containerBox"},"wrap",o.default.createElement("div",{style:s,className:"child",id:"eleBox"},"child"))))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
   * \u5143\u7D20\u662F\u5426\u5728\u53EF\u6EDA\u52A8\u5BB9\u5668\u4E2D\u53EF\u89C1
   * @param {Element} ele \u5B50\u5143\u7D20DOM
   * @param {Element} container \u7236\u5143\u7D20DOM
   * @returns \u5143\u7D20\u662F\u5426\u5728\u6EDA\u52A8\u5143\u7D20container\u4E2D\u53EF\u89C1
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
        <h5>child \u5728 wrap \u4E2D\u662F\u5426\u53EF\u89C1\uFF1A{visible ? 'true' : 'false'}</h5>
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

export default Demo;`}},dependencies:{react:{version:"17.0.2"}},identifier:"code_js-demo-5"}},"number-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return h=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=C(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},C=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(C=function(a){return a?n:u})(t)},p=c("K+nK"),l.next=5,Promise.all([c.e(4),c.e(16)]).then(c.bind(null,"5NDa"));case 5:return l.t0=p,l.next=8,Promise.all([c.e(0),c.e(1),c.e(2),c.e(3),c.e(12)]).then(c.bind(null,"5rEg"));case 8:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=p,l.next=13,Promise.resolve().then(c.bind(null,"tJVT"));case 13:return l.t3=l.sent,o=(0,l.t2)(l.t3),l.t4=h,l.next=18,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 18:return l.t5=l.sent,d=(0,l.t4)(l.t5),m=function(){var t=(0,d.useState)(),u=(0,o.default)(t,2),n=u[0],i=u[1],a=(0,d.useState)(!1),s=(0,o.default)(a,2),f=s[0],y=s[1],E=function(P){var A=String(P).split(".");return A[0]=A[0].replace(new RegExp("(\\d)(?=(\\d{3})+$)","ig"),"$1,"),A.join(".")},R=function(P){var A=P.target.value;isNaN(Number(A))?y(!0):(y(!1),i(E(P.target.value)))};return d.default.createElement(d.default.Fragment,null,d.default.createElement("h4",null,"\u8F6C\u6362\u4E3A\u5343\u5206\u4F4D\u5206\u5272\uFF1A",n),d.default.createElement(v.default,{placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57",style:{width:"320px"},onChange:R}),f&&d.default.createElement("span",{style:{color:"red",marginLeft:"10px"}},"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6570\u5B57"))},g=m,l.abrupt("return",g);case 23:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input } from 'antd';

const Demo = () => {
  const [state, setState] = useState();
  const [status, setStatus] = useState(false);

  // \u8F6C\u6362\u4E3A\u5343\u5206\u4F4D\u5206\u5272\u51FD\u6570
  const format = (number) => {
    //\u6309\u5C0F\u6570\u70B9\u5206\u62102\u90E8\u5206
    let source = String(number).split('.');
    //\u53EA\u5C06\u6574\u6570\u90E8\u5206\u8FDB\u884C\u90FD\u597D\u5206\u5272
    source[0] = source[0].replace(new RegExp('(\\\\d)(?=(\\\\d{3})+$)', 'ig'), '$1,');
    //\u518D\u5C06\u5C0F\u6570\u90E8\u5206\u5408\u5E76\u8FDB\u6765
    return source.join('.');
  };

  const onChange = (event) => {
    let value = event.target.value;
    if (!isNaN(Number(value))) {
      setStatus(false);
      setState(format(event.target.value));
    } else {
      setStatus(true);
    }
  };

  return (
    <>
      <h4>\u8F6C\u6362\u4E3A\u5343\u5206\u4F4D\u5206\u5272\uFF1A{state}</h4>
      <Input placeholder="\u8BF7\u8F93\u5165\u6570\u5B57" style={{ width: '320px' }} onChange={onChange} />
      {status && <span style={{ color: 'red', marginLeft: '10px' }}>\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6570\u5B57</span>}
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"number-demo"}},"number-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g=function(n,i){if(!i&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var a=m(i);if(a&&a.has(n))return a.get(n);var s={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in n)if(y!=="default"&&Object.prototype.hasOwnProperty.call(n,y)){var E=f?Object.getOwnPropertyDescriptor(n,y):null;E&&(E.get||E.set)?Object.defineProperty(s,y,E):s[y]=n[y]}return s.default=n,a&&a.set(n,s),s},m=function(n){if(typeof WeakMap!="function")return null;var i=new WeakMap,a=new WeakMap;return(m=function(f){return f?a:i})(n)},p=c("K+nK"),t.next=5,c.e(17).then(c.bind(null,"DYRE"));case 5:return t.t0=p,t.next=8,c.e(14).then(c.bind(null,"zeV3"));case 8:return t.t1=t.sent,v=(0,t.t0)(t.t1),t.next=12,c.e(4).then(c.bind(null,"+L6B"));case 12:return t.t2=p,t.next=15,Promise.all([c.e(0),c.e(1),c.e(5)]).then(c.bind(null,"2/Rp"));case 15:return t.t3=t.sent,o=(0,t.t2)(t.t3),t.next=19,c.e(15).then(c.bind(null,"giR+"));case 19:return t.t4=p,t.next=22,Promise.all([c.e(0),c.e(2),c.e(13)]).then(c.bind(null,"fyUT"));case 22:return t.t5=t.sent,d=(0,t.t4)(t.t5),t.t6=p,t.next=27,Promise.resolve().then(c.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=g,t.next=32,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,h=(0,t.t8)(t.t9),r=function(){var n=(0,h.useState)(0),i=(0,C.default)(n,2),a=i[0],s=i[1],f=(0,h.useState)(1),y=(0,C.default)(f,2),E=y[0],R=y[1],w=(0,h.useState)(),P=(0,C.default)(w,2),A=P[0],I=P[1],T=function(N,b){return Math.floor(Math.random()*(b-N+1))+N};return h.default.createElement(h.default.Fragment,null,h.default.createElement("h4",null,"[",a," - ",E,"]\u4E4B\u95F4\u7684\u968F\u673A\u6570\uFF1A",A),h.default.createElement(v.default,null,h.default.createElement(d.default,{placeholder:"\u6700\u5C0F\u503C",min:0,max:E-1,value:a,style:{width:"120px"},onChange:function(N){return s(N)}}),h.default.createElement(d.default,{placeholder:"\u6700\u5927\u503C",min:1,value:E,style:{width:"120px"},onChange:function(N){return R(N)}}),h.default.createElement(o.default,{type:"primary",onClick:function(){return I(T(a,E))}},"\u751F\u6210\u968F\u673A\u6570")))},l=r,t.abrupt("return",l);case 37:case"end":return t.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { InputNumber, Space, Button } from 'antd';

const Demo = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1);
  const [value, setValue] = useState();
  // \u751F\u6210\u6307\u5B9A\u8303\u56F4\u968F\u673A\u6570
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <h4>
        [{min} - {max}]\u4E4B\u95F4\u7684\u968F\u673A\u6570\uFF1A{value}
      </h4>
      <Space>
        <InputNumber
          placeholder="\u6700\u5C0F\u503C"
          min={0}
          max={max - 1}
          value={min}
          style={{ width: '120px' }}
          onChange={(value) => setMin(value)}
        />
        <InputNumber
          placeholder="\u6700\u5927\u503C"
          min={1}
          value={max}
          style={{ width: '120px' }}
          onChange={(value) => setMax(value)}
        />
        <Button type="primary" onClick={() => setValue(randomNumber(min, max))}>
          \u751F\u6210\u968F\u673A\u6570
        </Button>
      </Space>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"number-demo-1"}},"number-demo-2":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return h=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=C(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},C=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(C=function(a){return a?n:u})(t)},p=c("K+nK"),l.next=5,c.e(15).then(c.bind(null,"giR+"));case 5:return l.t0=p,l.next=8,Promise.all([c.e(0),c.e(2),c.e(13)]).then(c.bind(null,"fyUT"));case 8:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=p,l.next=13,Promise.resolve().then(c.bind(null,"tJVT"));case 13:return l.t3=l.sent,o=(0,l.t2)(l.t3),l.t4=h,l.next=18,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 18:return l.t5=l.sent,d=(0,l.t4)(l.t5),m=function(){var t=(0,d.useRef)(1e3),u=(0,d.useState)(),n=(0,o.default)(u,2),i=n[0],a=n[1];(0,d.useEffect)(function(){a(s(t.current))},[]);var s=function(E){var R=["\u96F6","\u58F9","\u8D30","\u53C1","\u8086","\u4F0D","\u9646","\u67D2","\u634C","\u7396"],w=["","\u62FE","\u4F70","\u4EDF"],P=["","\u4E07","\u4EBF","\u5146"],A=["\u89D2","\u5206","\u6BEB","\u5398"],I="\u6574",T="\u5143",M=1e15,N,b,H="",U;if(E===""||(E=parseFloat(E),E>=M))return"";if(E===0)return H=R[0]+T+I,H;if(E=E.toString(),E.indexOf(".")===-1?(N=E,b=""):(U=E.split("."),N=U[0],b=U[1].substr(0,4)),parseInt(N,10)>0){for(var K=0,X=N.length,q=0;q<X;q++){var Y=N.substr(q,1),G=X-q-1,re=G/4,Q=G%4;Y==="0"?K++:(K>0&&(H+=R[0]),K=0,H+=R[parseInt(Y)]+w[Q]),Q===0&&K<4&&(H+=P[re])}H+=T}if(b!=="")for(var ue=b.length,$=0;$<ue;$++){var Z=b.substr($,1);Z!=="0"&&(H+=R[Number(Z)]+A[$])}return H===""?H+=R[0]+T+I:b===""&&(H+=I),H},f=function(E){t.current=E,a(s(E))};return d.default.createElement(d.default.Fragment,null,d.default.createElement("h4",null,"\u6570\u5B57\u8F6C\u5316\u4E3A\u5927\u5199\u91D1\u989D\uFF1A",i),d.default.createElement(v.default,{placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",min:0,value:t.current,style:{width:"320px"},onChange:f}))},g=m,l.abrupt("return",g);case 23:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect, useRef } from 'react';
import { InputNumber } from 'antd';

const Demo = () => {
  const initValue = useRef(1000);
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(changeToChinese(initValue.current));
  }, []);

  // \u6570\u5B57\u8F6C\u5316\u4E3A\u5927\u5199\u91D1\u989D
  const changeToChinese = (money) => {
    //\u6C49\u5B57\u7684\u6570\u5B57
    let cnNums = ['\u96F6', '\u58F9', '\u8D30', '\u53C1', '\u8086', '\u4F0D', '\u9646', '\u67D2', '\u634C', '\u7396'];
    //\u57FA\u672C\u5355\u4F4D
    let cnIntRadice = ['', '\u62FE', '\u4F70', '\u4EDF'];
    //\u5BF9\u5E94\u6574\u6570\u90E8\u5206\u6269\u5C55\u5355\u4F4D
    let cnIntUnits = ['', '\u4E07', '\u4EBF', '\u5146'];
    //\u5BF9\u5E94\u5C0F\u6570\u90E8\u5206\u5355\u4F4D
    let cnDecUnits = ['\u89D2', '\u5206', '\u6BEB', '\u5398'];
    //\u6574\u6570\u91D1\u989D\u65F6\u540E\u9762\u8DDF\u7684\u5B57\u7B26
    let cnInteger = '\u6574';
    //\u6574\u578B\u5B8C\u4EE5\u540E\u7684\u5355\u4F4D
    let cnIntLast = '\u5143';
    //\u6700\u5927\u5904\u7406\u7684\u6570\u5B57
    let maxNum = 999999999999999.9999;
    //\u91D1\u989D\u6574\u6570\u90E8\u5206
    let integerNum;
    //\u91D1\u989D\u5C0F\u6570\u90E8\u5206
    let decimalNum;
    //\u8F93\u51FA\u7684\u4E2D\u6587\u91D1\u989D\u5B57\u7B26\u4E32
    let chineseStr = '';
    //\u5206\u79BB\u91D1\u989D\u540E\u7528\u7684\u6570\u7EC4\uFF0C\u9884\u5B9A\u4E49
    let parts;
    if (money === '') {
      return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      //\u8D85\u51FA\u6700\u5927\u5904\u7406\u6570\u5B57
      return '';
    }
    if (money === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32
    money = money.toString();
    if (money.indexOf('.') === -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    //\u83B7\u53D6\u6574\u578B\u90E8\u5206\u8F6C\u6362
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      let IntLen = integerNum.length;
      for (let i = 0; i < IntLen; i++) {
        let n = integerNum.substr(i, 1);
        let p = IntLen - i - 1;
        let q = p / 4;
        let m = p % 4;
        if (n === '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          //\u5F52\u96F6
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //\u5C0F\u6570\u90E8\u5206
    if (decimalNum !== '') {
      let decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substr(i, 1);
        if (n !== '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr === '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum === '') {
      chineseStr += cnInteger;
    }
    return chineseStr;
  };

  const onChange = (value) => {
    initValue.current = value;
    setValue(changeToChinese(value));
  };
  return (
    <>
      <h4>\u6570\u5B57\u8F6C\u5316\u4E3A\u5927\u5199\u91D1\u989D\uFF1A{value}</h4>
      <InputNumber
        placeholder="\u8BF7\u8F93\u5165\u91D1\u989D"
        min={0}
        value={initValue.current}
        style={{ width: '320px' }}
        onChange={onChange}
      />
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"number-demo-2"}},"roll-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l,e,t;return D.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return C=function(a,s){if(!s&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var f=d(s);if(f&&f.has(a))return f.get(a);var y={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in a)if(R!=="default"&&Object.prototype.hasOwnProperty.call(a,R)){var w=E?Object.getOwnPropertyDescriptor(a,R):null;w&&(w.get||w.set)?Object.defineProperty(y,R,w):y[R]=a[R]}return y.default=a,f&&f.set(a,y),y},d=function(a){if(typeof WeakMap!="function")return null;var s=new WeakMap,f=new WeakMap;return(d=function(E){return E?f:s})(a)},p=c("K+nK"),n.next=5,c.e(4).then(c.bind(null,"+L6B"));case 5:return n.t0=p,n.next=8,Promise.all([c.e(0),c.e(1),c.e(5)]).then(c.bind(null,"2/Rp"));case 8:return n.t1=n.sent,v=(0,n.t0)(n.t1),n.t2=C,n.next=13,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 13:for(n.t3=n.sent,o=(0,n.t2)(n.t3),h={display:"inline-block",height:"300px",overflowY:"auto",padding:"20px",marginTop:"20px",boxSizing:"border-box",border:"1px solid #ddd"},m={height:"auto"},g={width:"60px",height:"60px",background:"#eee"},r=[],l=0;l<30;l++)r.push("\u5E73\u6ED1\u6EDA\u52A8\u5230\u7070\u8272\u76D2\u5B50"+l);return e=function(){var a=(0,o.useRef)(null),s=function(E){E.scrollIntoView({behavior:"smooth"})},f=function(){s(a.current)};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,o.default.createElement(v.default,{type:"primary",onClick:f},"\u6EDA\u52A8\u5230\u7070\u8272\u76D2\u5B50")),o.default.createElement("div",{style:h},o.default.createElement("div",{style:m},o.default.createElement("ul",{style:{listStyle:"none",padding:0}},r.map(function(y){return o.default.createElement("li",{key:y},y)})),o.default.createElement("div",{style:g,ref:a}),o.default.createElement("ul",{style:{listStyle:"none",padding:0}},r.map(function(y){return o.default.createElement("li",{key:y},y)})))))},t=e,n.abrupt("return",t);case 23:case"end":return n.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:`import { Button } from 'antd'
import React, { CSSProperties, useRef } from 'react'

const wrapStyle: CSSProperties = {
	display: 'inline-block',
	height: '300px',
	overflowY: 'auto',
	padding: '20px',
	marginTop: '20px',
	boxSizing: 'border-box',
	border: '1px solid #ddd',
}
const boxStyle: CSSProperties = {
	height: 'auto',
}
const childStyle: CSSProperties = {
	width: '60px',
	height: '60px',
	background: '#eee',
}

const list: string[] = []
for (let i = 0; i < 30; i++) {
	list.push('\u5E73\u6ED1\u6EDA\u52A8\u5230\u7070\u8272\u76D2\u5B50' + i)
}
const Demo: React.FC = () => {
	const boxEl = useRef<HTMLDivElement>(null)

	/**
	 * \u5E73\u6ED1\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20\u4F4D\u7F6E
	 * @param ele \u6EDA\u52A8\u5230\u76EE\u6807\u5143\u7D20\u7684DOM
	 */
	const smoothScroll = (ele: HTMLElement): void => {
		ele.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const scrollBox = () => {
		smoothScroll(boxEl.current!)
	}
	return (
		<>
			<div>
				<Button type="primary" onClick={scrollBox}>
					\u6EDA\u52A8\u5230\u7070\u8272\u76D2\u5B50
				</Button>
			</div>
			<div style={wrapStyle}>
				<div style={boxStyle}>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						{list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<div style={childStyle} ref={boxEl}></div>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						{list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Demo`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"roll-demo"}},"testing-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(!1),t=(0,v.default)(e,2),u=t[0],n=t[1],i={padding:"20px",textAlign:"center"};(0,o.useEffect)(function(){n(a())},[]);var a=function(){var f=window.navigator.userAgent;return f.indexOf("MSIE")>-1||f.indexOf("Trident")>-1};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:i},o.default.createElement("h3",{style:{margin:0}},"\u5F53\u524D\u662F\u5426\u662FIE\u6D4F\u89C8\u5668\uFF1A",u?"true":"false")))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect, useState } from 'react'
const Demo = () => {
	const [ie, setIe] = useState(false)
	const style = {
		padding: '20px',
		textAlign: 'center',
	}
	useEffect(() => {
		setIe(isIe())
	}, [])

	/**
	 * \u68C0\u6D4B Internet Explorer \u6D4F\u89C8\u5668
	 * @returns \u662F\u5426IE\u6D4F\u89C8\u5668 true|false
	 */
	const isIe = function () {
		const ua = window.navigator.userAgent
		return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1
	}
	return (
		<>
			<div style={style}>
				<h3 style={{ margin: 0 }}>\u5F53\u524D\u662F\u5426\u662FIE\u6D4F\u89C8\u5668\uFF1A{ie ? 'true' : 'false'}</h3>
			</div>
		</>
	)
}

export default Demo`}},dependencies:{react:{version:"17.0.2"}},identifier:"testing-demo"}},"testing-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return h=function(n,i){if(!i&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var a=C(i);if(a&&a.has(n))return a.get(n);var s={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in n)if(y!=="default"&&Object.prototype.hasOwnProperty.call(n,y)){var E=f?Object.getOwnPropertyDescriptor(n,y):null;E&&(E.get||E.set)?Object.defineProperty(s,y,E):s[y]=n[y]}return s.default=n,a&&a.set(n,s),s},C=function(n){if(typeof WeakMap!="function")return null;var i=new WeakMap,a=new WeakMap;return(C=function(f){return f?a:i})(n)},p=c("K+nK"),t.next=5,Promise.all([c.e(4),c.e(16)]).then(c.bind(null,"5NDa"));case 5:return t.t0=p,t.next=8,Promise.all([c.e(0),c.e(1),c.e(2),c.e(3),c.e(12)]).then(c.bind(null,"5rEg"));case 8:return t.t1=t.sent,v=(0,t.t0)(t.t1),t.t2=p,t.next=13,Promise.resolve().then(c.bind(null,"tJVT"));case 13:return t.t3=t.sent,o=(0,t.t2)(t.t3),t.t4=h,t.next=18,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 18:return t.t5=t.sent,d=(0,t.t4)(t.t5),m={padding:"20px",width:"60%"},g={opacity:"0",color:"red",margin:"10px 0 0 0"},r=function(){var n=(0,d.useRef)(null),i=(0,d.useState)(""),a=(0,o.default)(i,2),s=a[0],f=a[1];(0,d.useEffect)(function(){y(n.current.input)},[]);var y=function(R){var w=document.getElementById("capsLockTips");R.addEventListener("keypress",function(P){var A=P.keyCode||P.which,I=P.shiftKey||A===16,T=String.fromCharCode(A),M=T.toUpperCase()===T&&T.toLowerCase()!==T||T.toUpperCase()!==T&&T.toLowerCase()===T&&I;f(M?"error":""),w.style.opacity=M?"1":"0"})};return d.default.createElement("div",{style:m},d.default.createElement("form",null,d.default.createElement(v.default.Password,{ref:n,allowClear:!0,status:s,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",autoComplete:"off"})),d.default.createElement("p",{id:"capsLockTips",style:g},"\u5927\u5199\u9501\u5B9A\u5DF2\u6253\u5F00"))},l=r,t.abrupt("return",l);case 25:case"end":return t.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:`import React, { useState, useRef, useEffect, CSSProperties } from 'react'
import { Input } from 'antd'
import type { InputProps, InputRef } from 'antd'
const style: CSSProperties = {
	padding: '20px',
	width: '60%',
}

const tips: CSSProperties = {
	opacity: '0',
	color: 'red',
	margin: '10px 0 0 0',
}

const Demo: React.FC = () => {
	const inputEl = useRef<InputRef>(null)
	const [status, setStatus] = useState<InputProps['status']>('')

	useEffect(() => {
		testCapsLock(inputEl.current!.input as HTMLInputElement)
	}, [])

	/**
	 * \u68C0\u6D4B\u5927\u5199\u9501\u5B9A\u662F\u5426\u6253\u5F00
	 * @param ele \u8F93\u5165\u6846
	 */
	const testCapsLock = (ele: HTMLInputElement | HTMLTextAreaElement) => {
		const messageEle: HTMLElement | null = document.getElementById('capsLockTips')
		ele!.addEventListener('keypress', (e: Event) => {
			const keyCode = (e as KeyboardEvent).keyCode || (e as KeyboardEvent).which
			const shiftKey = (e as KeyboardEvent).shiftKey || keyCode === 16
			const s = String.fromCharCode(keyCode)
			const capsLockOn = (s.toUpperCase() === s && s.toLowerCase() !== s) || (s.toUpperCase() !== s && s.toLowerCase() === s && shiftKey)
			if (capsLockOn) setStatus('error')
			else setStatus('')
			messageEle!.style.opacity = capsLockOn ? '1' : '0'
		})
	}

	return (
		<div style={style}>
			<form>
				<Input.Password ref={inputEl} allowClear status={status} placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" autoComplete="off" />
			</form>
			<p id="capsLockTips" style={tips}>
				\u5927\u5199\u9501\u5B9A\u5DF2\u6253\u5F00
			</p>
		</div>
	)
}

export default Demo`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"\u68C0\u6D4B\u5927\u5199\u9501\u5B9A\u662F\u5426\u6253\u5F00",description:'<div class="markdown"><p>\u8BD5\u7740\u5207\u6362\u4E00\u4E0B\u5927\u5C0F\u5199\u518D\u8F93\u5165</p></div>',identifier:"testing-demo-1"}},"testing-demo-2":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return C=function(u,n){if(!n&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var i=d(n);if(i&&i.has(u))return i.get(u);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in u)if(f!=="default"&&Object.prototype.hasOwnProperty.call(u,f)){var y=s?Object.getOwnPropertyDescriptor(u,f):null;y&&(y.get||y.set)?Object.defineProperty(a,f,y):a[f]=u[f]}return a.default=u,i&&i.set(u,a),a},d=function(u){if(typeof WeakMap!="function")return null;var n=new WeakMap,i=new WeakMap;return(d=function(s){return s?i:n})(u)},p=c("K+nK"),e.t0=p,e.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return e.t1=e.sent,v=(0,e.t0)(e.t1),e.t2=C,e.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,o=(0,e.t2)(e.t3),h={padding:"20px",background:"#eee"},m={padding:"3rem",border:"1px solid #ddd"},g=function(){var u=(0,o.useState)(!1),n=(0,v.default)(u,2),i=n[0],a=n[1],s=(0,o.useRef)(null),f=(0,o.useRef)(null);(0,o.useEffect)(function(){var E;(E=f.current)===null||E===void 0||E.addEventListener("mousemove",function(R){a(y(s.current))})},[]);var y=function(R){var w,P,A=Number(((w=window)===null||w===void 0?void 0:w.event).clientX),I=Number(((P=window)===null||P===void 0?void 0:P.event).clientY),T=Number(R.getBoundingClientRect().left),M=Number(R.getBoundingClientRect().left+R.clientWidth),N=Number(R.getBoundingClientRect().top),b=Number(R.getBoundingClientRect().top+R.clientHeight);return A>T&&A<M&&I>N&&I<b};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{style:m,ref:f},o.default.createElement("div",{style:h,ref:s},o.default.createElement("h3",null,"\u9F20\u6807\u662F\u5426\u5728\u5BB9\u5668\u5185\uFF1A",i?"true":"false"))))},r=g,e.abrupt("return",r);case 18:case"end":return e.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:`import React, { CSSProperties, useEffect, useRef, useState } from 'react'

const boxStyle: CSSProperties = {
	padding: '20px',
	background: '#eee',
}

const wrapStyle: CSSProperties = {
	padding: '3rem',
	border: '1px solid #ddd',
}

const Demo: React.FC = () => {
	const [inStatus, setInStatus] = useState<Boolean>(false)
	const boxEl = useRef<HTMLDivElement>(null)
	const wrapEl = useRef<HTMLDivElement>(null)

	useEffect(() => {
		wrapEl.current?.addEventListener('mousemove', (e: MouseEvent) => {
			setInStatus(checkMouseInBox(boxEl.current!))
		})
	}, [])

	/**
	 * \u68C0\u6D4B\u9F20\u6807\u662F\u5426\u843D\u5728\u4E00\u4E2A\u5757\u7EA7\u5143\u7D20\u5185\u90E8
	 * @param ele \u9700\u8981\u68C0\u6D4B\u9F20\u6807\u662F\u5426\u5728\u5185\u90E8\u7684DOM
	 * @returns true-\u5728\u5185\u90E8\uFF1Bfalse-\u4E0D\u5728\u5185\u90E8
	 */
	const checkMouseInBox = (ele: HTMLElement) => {
		// \u9F20\u6807\u76F8\u5BF9\u5C4F\u5E55\u6A2A\u5750\u6807
		const x = Number((window?.event as MouseEvent).clientX)
		// \u9F20\u6807\u76F8\u5BF9\u5C4F\u5E55\u7EB5\u5750\u6807
		const y = Number((window?.event as MouseEvent).clientY)
		// ele\u76F8\u5BF9\u5C4F\u5E55\u7684\u6A2A\u5750\u6807
		const div_x = Number(ele.getBoundingClientRect().left)
		// ele\u76F8\u5BF9\u5C4F\u5E55\u7684\u6A2A\u5750\u6807+width
		const div_x_width = Number(ele.getBoundingClientRect().left + ele.clientWidth)
		// ele\u76F8\u5BF9\u5C4F\u5E55\u7684\u7EB5\u5750\u6807
		const div_y = Number(ele.getBoundingClientRect().top)
		// ele\u76F8\u5BF9\u5C4F\u5E55\u7684\u7EB5\u5750\u6807+height
		const div_y_height = Number(ele.getBoundingClientRect().top + ele.clientHeight)
		return x > div_x && x < div_x_width && y > div_y && y < div_y_height
	}
	return (
		<>
			<div style={wrapStyle} ref={wrapEl}>
				<div style={boxStyle} ref={boxEl}>
					<h3>\u9F20\u6807\u662F\u5426\u5728\u5BB9\u5668\u5185\uFF1A{inStatus ? 'true' : 'false'}</h3>
				</div>
			</div>
		</>
	)
}

export default Demo`}},dependencies:{react:{version:"17.0.2"}},title:"\u68C0\u6D4B\u9F20\u6807\u662F\u5426\u843D\u5728\u4E00\u4E2A\u5757\u7EA7\u5143\u7D20\u5185\u90E8\u3002",description:'<div class="markdown"><p>\u8BD5\u8BD5\u5C06\u9F20\u6807\u653E\u5728\u7070\u8272\u76D2\u5B50\u5185</p></div>',identifier:"testing-demo-2"}},"tools-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l,e,t,u,n;return D.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=function(f,y){if(!y&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var E=g(y);if(E&&E.has(f))return E.get(f);var R={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in f)if(P!=="default"&&Object.prototype.hasOwnProperty.call(f,P)){var A=w?Object.getOwnPropertyDescriptor(f,P):null;A&&(A.get||A.set)?Object.defineProperty(R,P,A):R[P]=f[P]}return R.default=f,E&&E.set(f,R),R},g=function(f){if(typeof WeakMap!="function")return null;var y=new WeakMap,E=new WeakMap;return(g=function(w){return w?E:y})(f)},p=c("K+nK"),a.next=5,c.e(145).then(c.bind(null,"5Dmo"));case 5:return a.t0=p,a.next=8,Promise.all([c.e(1),c.e(3),c.e(11),c.e(143)]).then(c.bind(null,"3S7+"));case 8:return a.t1=a.sent,v=(0,a.t0)(a.t1),a.next=12,c.e(144).then(c.bind(null,"miYZ"));case 12:return a.t2=p,a.next=15,Promise.all([c.e(0),c.e(1),c.e(2),c.e(141)]).then(c.bind(null,"tsqr"));case 15:return a.t3=a.sent,o=(0,a.t2)(a.t3),a.t4=p,a.next=20,Promise.resolve().then(c.bind(null,"tJVT"));case 20:return a.t5=a.sent,d=(0,a.t4)(a.t5),a.next=24,Promise.all([c.e(4),c.e(142)]).then(c.bind(null,"tU7J"));case 24:return a.t6=p,a.next=27,Promise.all([c.e(0),c.e(1),c.e(2),c.e(3),c.e(139)]).then(c.bind(null,"wFql"));case 27:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.t8=r,a.next=32,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,h=(0,a.t8)(a.t9),a.next=36,Promise.all([c.e(0),c.e(140)]).then(c.bind(null,"RBnf"));case 36:return m=a.sent,l=C.default.Paragraph,e={padding:"20px"},t={color:"#4569d4",cursor:"pointer"},u=function(){var f=(0,h.useState)("\u4E91\u60F3\u8863\u88F3\u82B1\u60F3\u5BB9\uFF0C\u6625\u98CE\u62C2\u69DB\u9732\u534E\u6D53\u3002"),y=(0,d.default)(f,1),E=y[0],R=(0,h.useState)("\u82E5\u975E\u7FA4\u7389\u5C71\u5934\u89C1\uFF0C\u4F1A\u5411\u7476\u53F0\u6708\u4E0B\u9022\u3002"),w=(0,d.default)(R,1),P=w[0],A=function(T){var M=document.createElement("textarea");M.style.border="0",M.style.padding="0",M.style.margin="0",M.style.position="absolute",M.style.left="-9999px",M.style.top="".concat(document.documentElement.scrollTop,"px"),M.value=T,document.body.appendChild(M),M.focus(),M.select();try{document.execCommand("copy"),o.default.success("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch(N){alert("\u590D\u5236\u5931\u8D25")}finally{document.body.removeChild(M)}};return h.default.createElement("div",{style:e},h.default.createElement(l,null,h.default.createElement("span",null,E),h.default.createElement(v.default,{title:"\u70B9\u51FB\u590D\u5236"},h.default.createElement(m.CopyOutlined,{style:t,onClick:function(){return A(E)}}))),h.default.createElement(l,null,h.default.createElement("span",null,P),h.default.createElement(v.default,{title:"\u70B9\u51FB\u590D\u5236"},h.default.createElement(m.CopyOutlined,{style:t,onClick:function(){return A(P)}}))))},n=u,a.abrupt("return",n);case 43:case"end":return a.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:`import React, { useState, CSSProperties } from 'react'
import { Typography, Tooltip, message } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const style: CSSProperties = {
	padding: '20px',
}

const copyStyle: CSSProperties = {
	color: '#4569d4',
	cursor: 'pointer',
}

const Demo: React.FC = () => {
	const [text] = useState<string>('\u4E91\u60F3\u8863\u88F3\u82B1\u60F3\u5BB9\uFF0C\u6625\u98CE\u62C2\u69DB\u9732\u534E\u6D53\u3002')
	const [text2] = useState<string>('\u82E5\u975E\u7FA4\u7389\u5C71\u5934\u89C1\uFF0C\u4F1A\u5411\u7476\u53F0\u6708\u4E0B\u9022\u3002')

	/**
	 * \u5C06\u6587\u672C\u590D\u5236\u5230\u526A\u8D34\u677F
	 * @param text \u9700\u8981\u590D\u5236\u5230\u526A\u8D34\u677F\u7684\u6587\u5B57
	 */
	const copyText = (text: string): void => {
		const textAreaEle = document.createElement('textarea')
		textAreaEle.style.border = '0'
		textAreaEle.style.padding = '0'
		textAreaEle.style.margin = '0'
		textAreaEle.style.position = 'absolute'
		textAreaEle.style.left = '-9999px'
		textAreaEle.style.top = \`\${document.documentElement.scrollTop}px\`
		textAreaEle.value = text
		document.body.appendChild(textAreaEle)
		textAreaEle.focus()
		textAreaEle.select()
		try {
			document.execCommand('copy')
			message.success('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F')
		} catch (err) {
			alert('\u590D\u5236\u5931\u8D25')
		} finally {
			document.body.removeChild(textAreaEle)
		}
	}
	return (
		<div style={style}>
			<Paragraph>
				<span>{text}</span>
				<Tooltip title="\u70B9\u51FB\u590D\u5236">
					<CopyOutlined style={copyStyle} onClick={() => copyText(text)} />
				</Tooltip>
			</Paragraph>
			<Paragraph>
				<span>{text2}</span>
				<Tooltip title="\u70B9\u51FB\u590D\u5236">
					<CopyOutlined style={copyStyle} onClick={() => copyText(text2)} />
				</Tooltip>
			</Paragraph>
		</div>
	)
}

export default Demo`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"@ant-design/icons":{version:"4.7.0"},"react-dom":{version:">=16.0.0"}},title:"\u5C06\u6587\u672C\u590D\u5236\u5230\u526A\u8D34\u677F",description:'<div class="markdown"><p>\u70B9\u51FB\u6309\u94AE\u53EF\u5C06\u5F53\u524D\u884C\u6587\u672C\u590D\u5236\u5230\u526A\u8D34\u677F</p></div>',identifier:"tools-demo"}},"tools-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return h=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=C(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},C=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(C=function(a){return a?n:u})(t)},p=c("K+nK"),l.next=5,c.e(4).then(c.bind(null,"+L6B"));case 5:return l.t0=p,l.next=8,Promise.all([c.e(0),c.e(1),c.e(5)]).then(c.bind(null,"2/Rp"));case 8:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=p,l.next=13,Promise.resolve().then(c.bind(null,"tJVT"));case 13:return l.t3=l.sent,o=(0,l.t2)(l.t3),l.t4=h,l.next=18,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 18:return l.t5=l.sent,d=(0,l.t4)(l.t5),m=function(){var t=(0,d.useState)(""),u=(0,o.default)(t,2),n=u[0],i=u[1];(0,d.useEffect)(function(){i(a())},[]);var a=function(){var y=URL.createObjectURL(new Blob),E=y.toString();return URL.revokeObjectURL(y),E.substring(E.lastIndexOf("/")+1)},s=function(){i(a())};return d.default.createElement(d.default.Fragment,null,d.default.createElement("h3",null,"\u751F\u6210\u7684 uuid\uFF1A",n),d.default.createElement(v.default,{type:"primary",onClick:s},"\u751F\u6210 uuid"))},g=m,l.abrupt("return",g);case 23:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:`import { Button } from 'antd'
import React, { useEffect, useState } from 'react'

const Demo: React.FC = () => {
	const [uuidStr, setUuidStr] = useState<string>('')
	useEffect(() => {
		setUuidStr(uuid())
	}, [])

	/**
	 * \u751F\u6210 uuid
	 * @returns string-\u751F\u6210\u7684 uuid
	 */
	const uuid = (): string => {
		const temp_url = URL.createObjectURL(new Blob())
		const uuid = temp_url.toString()
		//\u91CA\u653E\u8FD9\u4E2Aurl
		URL.revokeObjectURL(temp_url)
		return uuid.substring(uuid.lastIndexOf('/') + 1)
	}
	const creatUuid = () => {
		setUuidStr(uuid())
	}
	return (
		<>
			<h3>\u751F\u6210\u7684 uuid\uFF1A{uuidStr}</h3>
			<Button type="primary" onClick={creatUuid}>
				\u751F\u6210 uuid
			</Button>
		</>
	)
}

export default Demo`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"tools-demo-1"}},"tools-demo-2":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(u,n){if(!n&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var i=C(n);if(i&&i.has(u))return i.get(u);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in u)if(f!=="default"&&Object.prototype.hasOwnProperty.call(u,f)){var y=s?Object.getOwnPropertyDescriptor(u,f):null;y&&(y.get||y.set)?Object.defineProperty(a,f,y):a[f]=u[f]}return a.default=u,i&&i.set(u,a),a},C=function(u){if(typeof WeakMap!="function")return null;var n=new WeakMap,i=new WeakMap;return(C=function(s){return s?i:n})(u)},p=c("K+nK"),e.next=5,c.e(4).then(c.bind(null,"+L6B"));case 5:return e.t0=p,e.next=8,Promise.all([c.e(0),c.e(1),c.e(5)]).then(c.bind(null,"2/Rp"));case 8:return e.t1=e.sent,v=(0,e.t0)(e.t1),e.t2=p,e.next=13,Promise.resolve().then(c.bind(null,"tJVT"));case 13:return e.t3=e.sent,o=(0,e.t2)(e.t3),e.t4=h,e.next=18,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 18:return e.t5=e.sent,d=(0,e.t4)(e.t5),m={width:"200px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px",border:"1px solid #ddd",background:"#eee"},g=function(){var u=(0,d.useState)("#ffffff"),n=(0,o.default)(u,2),i=n[0],a=n[1],s=(0,d.useRef)(null);(0,d.useEffect)(function(){s.current.style.background=i},[i]);var f=function(){var R=(Math.random()*1048575*1e6).toString(16);return"#"+R.slice(0,6)},y=function(){a(f())};return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{style:m,ref:s},"\u5F53\u524D\u989C\u8272\u8272\u503C\uFF1A",i),d.default.createElement(v.default,{type:"primary",onClick:y},"\u751F\u6210\u989C\u8272"))},r=g,e.abrupt("return",r);case 24:case"end":return e.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:`import { Button } from 'antd'
import React, { CSSProperties, useEffect, useRef, useState } from 'react'

const boxStyle: CSSProperties = {
	width: '200px',
	height: '100px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: '20px',
	border: '1px solid #ddd',
	background: '#eee',
}
const Demo: React.FC = () => {
	const [color, setColor] = useState<string>('#ffffff')
	const boxEl = useRef<HTMLDivElement>(null)

	useEffect(() => {
		boxEl.current!.style.background = color
	}, [color])

	/**
	 * \u968F\u673A\u751F\u6210\u5341\u516D\u8FDB\u5236\u989C\u8272\u4EE3\u7801
	 * @returns string-\u5341\u516D\u8FDB\u5236\u989C\u8272\u503C
	 */
	const randomHexColorCode = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16)
		return '#' + n.slice(0, 6)
	}
	const createColor = () => {
		setColor(randomHexColorCode())
	}
	return (
		<>
			<div style={boxStyle} ref={boxEl}>
				\u5F53\u524D\u989C\u8272\u8272\u503C\uFF1A{color}
			</div>
			<Button type="primary" onClick={createColor}>
				\u751F\u6210\u989C\u8272
			</Button>
		</>
	)
}

export default Demo`}},dependencies:{antd:{version:"4.20.1",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"tools-demo-2"}},"high_component-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l,e,t;return D.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return C=function(a,s){if(!s&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var f=d(s);if(f&&f.has(a))return f.get(a);var y={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in a)if(R!=="default"&&Object.prototype.hasOwnProperty.call(a,R)){var w=E?Object.getOwnPropertyDescriptor(a,R):null;w&&(w.get||w.set)?Object.defineProperty(y,R,w):y[R]=a[R]}return y.default=a,f&&f.set(a,y),y},d=function(a){if(typeof WeakMap!="function")return null;var s=new WeakMap,f=new WeakMap;return(d=function(E){return E?f:s})(a)},p=c("K+nK"),n.t0=p,n.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return n.t1=n.sent,v=(0,n.t0)(n.t1),n.t2=C,n.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return n.t3=n.sent,o=(0,n.t2)(n.t3),h=function(a){var s=function(){var y=(0,o.useState)({clientWidth:0,clientHeight:0}),E=(0,v.default)(y,2),R=E[0],w=E[1],P=function(){var I=document.documentElement.clientWidth,T=document.documentElement.clientHeight;w({clientWidth:I,clientHeight:T})};return(0,o.useEffect)(function(){return P(),window.addEventListener("resize",P),function(){window.removeEventListener("resize",P)}},[]),o.default.createElement(a,R)};return s},m=function(a){return o.default.createElement("div",null,o.default.createElement("h1",null,"Header\u7EC4\u4EF6\uFF1A"),o.default.createElement("h2",null,"\u5C4F\u5E55\u5BBD\uFF1A",a.clientWidth),o.default.createElement("h2",null,"\u5C4F\u5E55\u9AD8\uFF1A",a.clientHeight))},g=function(a){return o.default.createElement("div",null,o.default.createElement("h1",null,"Footer\u7EC4\u4EF6\uFF1A"),o.default.createElement("h2",null,"\u5C4F\u5E55\u5BBD\uFF1A",a.clientWidth),o.default.createElement("h2",null,"\u5C4F\u5E55\u9AD8\uFF1A",a.clientHeight))},r=h(m),l=h(g),e=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(r,null),o.default.createElement("hr",null),o.default.createElement(l,null))},t=e,n.abrupt("return",t);case 21:case"end":return n.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';

// \u5B9A\u4E49\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6withClientWidth\uFF0C\u63A5\u6536\u4E00\u4E2AWrappedComponent\u7EC4\u4EF6
const withClientWidth = (WrappedComponent) => {
  const NewComponent = () => {
    const [state, setState] = useState({ clientWidth: 0, clientHeight: 0 });

    // \u83B7\u53D6\u5C4F\u5E55\u5BBD\u9AD8\u7684\u65B9\u6CD5
    const getWidthHeight = () => {
      let clientWidth = document.documentElement.clientWidth;
      let clientHeight = document.documentElement.clientHeight;
      setState({ clientWidth, clientHeight });
    };

    useEffect(() => {
      // \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\uFF0C\u83B7\u53D6\u5C4F\u5E55\u5BBD\u9AD8\uFF0C\u5E76\u7ED1\u5B9Aresize\u4E8B\u4EF6
      getWidthHeight();
      window.addEventListener('resize', getWidthHeight);
      return () => {
        // \u7EC4\u4EF6\u5C06\u8981\u5378\u8F7D\u65F6\u79FB\u9664resize\u4E8B\u4EF6
        window.removeEventListener('resize', getWidthHeight);
      };
    }, []);

    return <WrappedComponent {...state} />;
  };
  // \u8FD4\u56DE\u65B0\u7684\u7EC4\u4EF6
  return NewComponent;
};

const Header = (props) => {
  return (
    <div>
      <h1>Header\u7EC4\u4EF6\uFF1A</h1>
      <h2>\u5C4F\u5E55\u5BBD\uFF1A{props.clientWidth}</h2>
      <h2>\u5C4F\u5E55\u9AD8\uFF1A{props.clientHeight}</h2>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <h1>Footer\u7EC4\u4EF6\uFF1A</h1>
      <h2>\u5C4F\u5E55\u5BBD\uFF1A{props.clientWidth}</h2>
      <h2>\u5C4F\u5E55\u9AD8\uFF1A{props.clientHeight}</h2>
    </div>
  );
};

const HocHeader = withClientWidth(Header);
const HocFooter = withClientWidth(Footer);

// \u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6
const Wrap = () => {
  return (
    <>
      <HocHeader />
      <hr />
      <HocFooter />
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"high_component-demo"}},"high_component-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l,e,t,u;return D.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return h=function(s,f){if(!f&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var y=C(f);if(y&&y.has(s))return y.get(s);var E={},R=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in s)if(w!=="default"&&Object.prototype.hasOwnProperty.call(s,w)){var P=R?Object.getOwnPropertyDescriptor(s,w):null;P&&(P.get||P.set)?Object.defineProperty(E,w,P):E[w]=s[w]}return E.default=s,y&&y.set(s,E),E},C=function(s){if(typeof WeakMap!="function")return null;var f=new WeakMap,y=new WeakMap;return(C=function(R){return R?y:f})(s)},p=c("K+nK"),i.t0=p,i.next=6,Promise.resolve().then(c.bind(null,"0Owb"));case 6:return i.t1=i.sent,v=(0,i.t0)(i.t1),i.t2=p,i.next=11,Promise.resolve().then(c.bind(null,"tJVT"));case 11:return i.t3=i.sent,o=(0,i.t2)(i.t3),i.t4=h,i.next=16,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 16:return i.t5=i.sent,d=(0,i.t4)(i.t5),m=function(s){var f=function(E){var R=(0,d.useState)({clientWidth:0,clientHeight:0}),w=(0,o.default)(R,2),P=w[0],A=w[1],I=function(){var M=document.documentElement.clientWidth,N=document.documentElement.clientHeight;A({clientWidth:M,clientHeight:N})};return(0,d.useEffect)(function(){return I(),window.addEventListener("resize",I),function(){window.removeEventListener("resize",I)}},[]),d.default.createElement(s,(0,v.default)({},P,E))};return f},g=function(s){return d.default.createElement("div",null,d.default.createElement("h1",null,"Header\u7EC4\u4EF6\uFF1A"),d.default.createElement("h2",null,"\u6211\u7684\u540D\u5B57\u662F\uFF1A",s.name),d.default.createElement("h2",null,"\u5C4F\u5E55\u5BBD\uFF1A",s.clientWidth),d.default.createElement("h2",null,"\u5C4F\u5E55\u9AD8\uFF1A",s.clientHeight))},r=function(s){return d.default.createElement("div",null,d.default.createElement("h1",null,"Footer\u7EC4\u4EF6\uFF1A"),d.default.createElement("h2",null,"\u6211\u7684\u540D\u5B57\u662F\uFF1A",s.name),d.default.createElement("h2",null,"\u5C4F\u5E55\u5BBD\uFF1A",s.clientWidth),d.default.createElement("h2",null,"\u5C4F\u5E55\u9AD8\uFF1A",s.clientHeight))},l=m(g),e=m(r),t=function(){return d.default.createElement(d.default.Fragment,null,d.default.createElement(l,{name:"Header"}),d.default.createElement("hr",null),d.default.createElement(e,{name:"Footer"}))},u=t,i.abrupt("return",u);case 26:case"end":return i.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';

// \u5B9A\u4E49\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6withClientWidth\uFF0C\u63A5\u6536\u4E00\u4E2AWrappedComponent\u7EC4\u4EF6
const withClientWidth = (WrappedComponent) => {
  // \u65B0\u7EC4\u4EF6\u62E5\u6709\u81EA\u5DF1\u7684props
  const NewComponent = (props) => {
    const [state, setState] = useState({ clientWidth: 0, clientHeight: 0 });

    // \u83B7\u53D6\u5C4F\u5E55\u5BBD\u9AD8\u7684\u65B9\u6CD5
    const getWidthHeight = () => {
      let clientWidth = document.documentElement.clientWidth;
      let clientHeight = document.documentElement.clientHeight;
      setState({ clientWidth, clientHeight });
    };

    useEffect(() => {
      // \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\uFF0C\u83B7\u53D6\u5C4F\u5E55\u5BBD\u9AD8\uFF0C\u5E76\u7ED1\u5B9Aresize\u4E8B\u4EF6
      getWidthHeight();
      window.addEventListener('resize', getWidthHeight);
      return () => {
        // \u7EC4\u4EF6\u5C06\u8981\u5378\u8F7D\u65F6\u79FB\u9664resize\u4E8B\u4EF6
        window.removeEventListener('resize', getWidthHeight);
      };
    }, []);

    // \u5C06\u65B0\u7EC4\u4EF6\u7684state\u548Cprops\u4F20\u9012\u7ED9\u7EC4\u4EF6
    return <WrappedComponent {...state} {...props} />;
  };
  // \u8FD4\u56DE\u65B0\u7684\u7EC4\u4EF6
  return NewComponent;
};

const Header = (props) => {
  return (
    <div>
      <h1>Header\u7EC4\u4EF6\uFF1A</h1>
      <h2>\u6211\u7684\u540D\u5B57\u662F\uFF1A{props.name}</h2>
      <h2>\u5C4F\u5E55\u5BBD\uFF1A{props.clientWidth}</h2>
      <h2>\u5C4F\u5E55\u9AD8\uFF1A{props.clientHeight}</h2>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <h1>Footer\u7EC4\u4EF6\uFF1A</h1>
      <h2>\u6211\u7684\u540D\u5B57\u662F\uFF1A{props.name}</h2>
      <h2>\u5C4F\u5E55\u5BBD\uFF1A{props.clientWidth}</h2>
      <h2>\u5C4F\u5E55\u9AD8\uFF1A{props.clientHeight}</h2>
    </div>
  );
};

const HocHeader = withClientWidth(Header);
const HocFooter = withClientWidth(Footer);

// \u4F7F\u7528\u9AD8\u9636\u7EC4\u4EF6
const Wrap = () => {
  return (
    <>
      <HocHeader name="Header" />
      <hr />
      <HocFooter name="Footer" />
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"high_component-demo-1"}},"hook-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i=function(){n(u+1)};return o.default.createElement("div",null,o.default.createElement("h2",null,"\u8BA1\u6570\u5668\uFF1A",u),o.default.createElement("button",{onClick:i},"\u52A0"))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

const Wrap = () => {
  // \u8C03\u7528useState(0)\uFF0C\u521D\u59CB\u5316\u4F20\u5165\u53C2\u65700\uFF0Cname\u5728\u6E32\u67D3\u671F\u95F4\u8FD4\u56DE\u7684count\u521D\u59CB\u5316\u5C31\u4E3A0\u3002
  // \u8FD4\u56DE\u7684setCount\u51FD\u6570\u7528\u4E8E\u4FEE\u6539count
  const [count, setCount] = useState(0);

  // count\u6BCF\u70B9\u51FB\u4E00\u6B21\u52A01
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>\u8BA1\u6570\u5668\uFF1A{count}</h2>
      <button onClick={addCount}>\u52A0</button>
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo"}},"hook-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i=function(){n(u+1)},a=function(){n(function(f){return console.log(f),f+1})};return o.default.createElement(o.default.Fragment,null,"Count: ",u,o.default.createElement("br",null),o.default.createElement("button",{onClick:i},"\u666E\u901A\u66F4\u65B0"),o.default.createElement("button",{onClick:a},"\u51FD\u6570\u5F0F\u66F4\u65B0"))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  // \u666E\u901A\u66F4\u65B0
  const handleClick = () => {
    setCount(count + 1);
  };
  // \u51FD\u6570\u5F0F\u66F4\u65B0
  const handleClickFn = () => {
    setCount((prevCount) => {
      // \u4E0A\u4E00\u6B21\u7684\u503C\uFF0C\u6BD4\u5982\u6B64\u65F6\u7684count\u4E3A6\uFF0C\u90A3\u4E48\u6B64\u65F6prevCount\u4E3A5
      console.log(prevCount);
      return prevCount + 1;
    });
  };
  return (
    <>
      Count: {count}
      <br />
      <button onClick={handleClick}>\u666E\u901A\u66F4\u65B0</button>
      <button onClick={handleClickFn}>\u51FD\u6570\u5F0F\u66F4\u65B0</button>
    </>
  );
};

export default Counter;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-1"}},"hook-demo-2":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i=function(){setTimeout(function(){console.log("count\uFF1A",u),n(u+1)},3e3)},a=function(){setTimeout(function(){n(function(f){return console.log("prevCount\uFF1A",f),f+1})},3e3)};return o.default.createElement(o.default.Fragment,null,"Count: ",u,o.default.createElement("br",null),o.default.createElement("button",{onClick:i},"\u666E\u901A\u66F4\u65B0"),o.default.createElement("button",{onClick:a},"\u51FD\u6570\u5F0F\u66F4\u65B0"))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

// \u6D4B\u8BD5\uFF1A\u90FD\u5FEB\u901F\u70B9\u51FB\u6309\u94AE
const Counter = () => {
  const [count, setCount] = useState(0);
  // \u5F02\u6B65\u666E\u901A\u8C03\u7528setCount\u66F4\u65B0--\u53EA\u6709\u4E00\u6B21\u66F4\u65B0\u751F\u6548
  const handleClick = () => {
    setTimeout(() => {
      console.log('count\uFF1A', count);
      setCount(count + 1);
    }, 3000);
  };

  // \u5F02\u6B65\u51FD\u6570\u5F0F\u66F4\u65B0--\u6BCF\u6B21\u70B9\u51FB\u90FD\u751F\u6548
  const handleClickFn = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        console.log('prevCount\uFF1A', prevCount);
        return prevCount + 1;
      });
    }, 3000);
  };
  return (
    <>
      Count: {count}
      <br />
      <button onClick={handleClick}>\u666E\u901A\u66F4\u65B0</button>
      <button onClick={handleClickFn}>\u51FD\u6570\u5F0F\u66F4\u65B0</button>
    </>
  );
};

export default Counter;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-2"}},"hook-demo-3":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return h=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=C(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},C=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(C=function(a){return a?n:u})(t)},p=c("K+nK"),l.t0=p,l.next=6,c.e(18).then(c.bind(null,"k1fw"));case 6:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=p,l.next=11,Promise.resolve().then(c.bind(null,"tJVT"));case 11:return l.t3=l.sent,o=(0,l.t2)(l.t3),l.t4=h,l.next=16,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 16:return l.t5=l.sent,d=(0,l.t4)(l.t5),m=function(){var t=(0,d.useState)({name:"\u5F20\u4E09",age:20}),u=(0,o.default)(t,2),n=u[0],i=u[1],a=function(){i({age:30})},s=function(){i((0,v.default)((0,v.default)({},n),{},{age:30}))},f=function(){i({name:"\u5F20\u4E09",age:20})};return d.default.createElement(d.default.Fragment,null,d.default.createElement("h2",null,"\u540D\u5B57\uFF1A",n.name),d.default.createElement("h2",null,"\u5E74\u9F84\uFF1A",n.age),d.default.createElement("button",{onClick:a},"\u8986\u76D6\u66F4\u65B0"),d.default.createElement("button",{onClick:s},"\u66F4\u6539\u5E74\u9F84"),d.default.createElement("button",{onClick:f},"\u8FD8\u539F"))},g=m,l.abrupt("return",g);case 21:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

const Wrap = () => {
  const [obj, setObj] = useState({ name: '\u5F20\u4E09', age: 20 });
  // \u8986\u76D6\u66F4\u65B0\uFF0C\u4F1A\u88AB\u8986\u76D6
  const handleClickCover = () => {
    setObj({ age: 30 });
  };
  // \u53EA\u66F4\u6539\u5E74\u9F84\uFF0C\u9700\u8981\u5C06obj\u4FDD\u5B58\u4E0B\u6765
  const handleClickAge = () => {
    setObj({ ...obj, age: 30 });
  };
  // \u8FD8\u539F
  const handleClickReset = () => {
    setObj({ name: '\u5F20\u4E09', age: 20 });
  };
  return (
    <>
      <h2>\u540D\u5B57\uFF1A{obj.name}</h2>
      <h2>\u5E74\u9F84\uFF1A{obj.age}</h2>
      <button onClick={handleClickCover}>\u8986\u76D6\u66F4\u65B0</button>
      <button onClick={handleClickAge}>\u66F4\u6539\u5E74\u9F84</button>
      <button onClick={handleClickReset}>\u8FD8\u539F</button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-3"}},"hook-demo-4":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)({}),t=(0,v.default)(e,2),u=t[1],n=function(){u({})};return o.default.createElement(o.default.Fragment,null,o.default.createElement("h1",null,"\u65F6\u95F4\u6233\uFF1A",new Date().getTime()),o.default.createElement("button",{onClick:n},"\u5F3A\u5236\u5237\u65B0"))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

const Wrap = () => {
  const [, forceUpdate] = useState({});
  const handleClick = () => {
    // \u4F20\u5165\u7A7A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5F3A\u5236\u5237\u65B0\uFF0C\u6BCF\u6B21\u4F20\u5165\u7684\u7A7A\u5BF9\u8C61\u5730\u5740\u90FD\u4E0D\u540C
    forceUpdate({});
  };
  return (
    <>
      <h1>\u65F6\u95F4\u6233\uFF1A{new Date().getTime()}</h1>
      <button onClick={handleClick}>\u5F3A\u5236\u5237\u65B0</button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-4"}},"hook-demo-5":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i=function(){n(u+1),n(u+1)},a=function(){n(function(f){return f+1}),n(function(f){return f+1})};return o.default.createElement(o.default.Fragment,null,o.default.createElement("h1",null,"\u8BA1\u6570\u5668\uFF1A",u),o.default.createElement("button",{onClick:i},"\u666E\u901A\u66F4\u65B0"),o.default.createElement("button",{onClick:a},"\u51FD\u6570\u5F0F\u66F4\u65B0"))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

const Wrap = () => {
  const [count, setCount] = useState(0);
  // \u666E\u901A\u66F4\u65B0
  const handleClick = () => {
    // \u4E0D\u4F1A\u7ACB\u9A6C\u8FD0\u884C\u4F1A\u7B49\u5230\u4E8B\u4EF6\u5B8C\u5168\u8D70\u5B8C\u4EE5\u540E\u4E00\u8D77\u8FD0\u884C, \u540C\u65F6\u591A\u4E2A\u66F4\u6539\u4F1A\u5408\u5E76\u5230\u4E00\u8D77\u6267\u884C
    setCount(count + 1);
    // \u56E0\u4E3A\u662F\u5F02\u6B65\u7684, \u8FD0\u884C\u5230\u7B2C\u4E8C\u4E2AsetCount\u7684\u65F6\u5019num\u7684\u57FA\u7840\u503C\u8FD8\u662F0
    setCount(count + 1);
    // \u6700\u7EC8\u7ED3\u679Ccount\u4E3A1
  };

  // \u51FD\u6570\u5F0F\u66F4\u65B0
  const handleClickFn = () => {
    // \u4F20\u5165\u7684\u51FD\u6570\u4F1A\u5728\u4E8B\u4EF6\u8D70\u5B8C\u4EE5\u540E\u6309\u7167\u987A\u5E8F\u4F9D\u6B21\u6267\u884C
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // \u6700\u7EC8\u7ED3\u679Ccount\u4E3A2
  };
  return (
    <>
      <h1>\u8BA1\u6570\u5668\uFF1A{count}</h1>
      <button onClick={handleClick}>\u666E\u901A\u66F4\u65B0</button>
      <button onClick={handleClickFn}>\u51FD\u6570\u5F0F\u66F4\u65B0</button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-5"}},"hook-demo-6":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return r.t3=r.sent,o=(0,r.t2)(r.t3),h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1];return(0,o.useEffect)(function(){console.log("\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210")},[]),(0,o.useEffect)(function(){console.log("\u7EC4\u4EF6\u66F4\u65B0")},[u]),(0,o.useEffect)(function(){console.log("\u7EC4\u4EF6\u6302\u8F7D\u548C\u66F4\u65B0")}),(0,o.useEffect)(function(){return function(){console.log("\u7EC4\u4EF6\u5378\u8F7D")}}),o.default.createElement(o.default.Fragment,null,o.default.createElement("p",null,"F12\u770B\u5177\u4F53\u6267\u884C\u60C5\u51B5"),o.default.createElement("h1",null,"\u8BA1\u6570\u5668\uFF1A",u),o.default.createElement("button",{onClick:function(){return n(u+1)}},"\u7D2F\u52A0"))},m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect, useState } from 'react';

const Wrap = () => {
  const [count, setCount] = useState(0);
  // \u5F53\u505AcomponentDidMount\u4F7F\u7528-\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\uFF0C\u53EA\u6267\u884C\u4E00\u6B21
  useEffect(() => {
    console.log('\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210');
  }, []);

  // \u5F53\u505AcomponentDidUpdate\u4F7F\u7528-\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u4F20\u5165\u4F9D\u8D56count\uFF0Ccount\u53D1\u751F\u53D8\u5316\u5C31\u4F1A\u6267\u884C
  useEffect(() => {
    console.log('\u7EC4\u4EF6\u66F4\u65B0');
  }, [count]);

  // \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u548C\u66F4\u65B0\u90FD\u4F1A\u6267\u884C-\u4E0D\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570
  useEffect(() => {
    console.log('\u7EC4\u4EF6\u6302\u8F7D\u548C\u66F4\u65B0');
  });

  // \u5F53\u505AcomponentWillUnmount\u4F7F\u7528-\u7EC4\u4EF6\u5378\u8F7D\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570return\u4E00\u4E2A\u51FD\u6570\uFF0C\u6B21\u51FD\u6570\u4E2D\u7EC4\u4EF6\u5378\u8F7D\u5C06\u4F1A\u6267\u884C
  useEffect(() => {
    return () => {
      console.log('\u7EC4\u4EF6\u5378\u8F7D');
    };
  });
  return (
    <>
      <p>F12\u770B\u5177\u4F53\u6267\u884C\u60C5\u51B5</p>
      <h1>\u8BA1\u6570\u5668\uFF1A{count}</h1>
      <button onClick={() => setCount(count + 1)}>\u7D2F\u52A0</button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-6"}},"hook-demo-7":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return C=function(n,i){if(!i&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var a=d(i);if(a&&a.has(n))return a.get(n);var s={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in n)if(y!=="default"&&Object.prototype.hasOwnProperty.call(n,y)){var E=f?Object.getOwnPropertyDescriptor(n,y):null;E&&(E.get||E.set)?Object.defineProperty(s,y,E):s[y]=n[y]}return s.default=n,a&&a.set(n,s),s},d=function(n){if(typeof WeakMap!="function")return null;var i=new WeakMap,a=new WeakMap;return(d=function(f){return f?a:i})(n)},p=c("K+nK"),t.t0=p,t.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return t.t1=t.sent,v=(0,t.t0)(t.t1),t.t2=C,t.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return t.t3=t.sent,o=(0,t.t2)(t.t3),h=(0,o.createContext)(),m=function(){var n=(0,o.useContext)(h),i=n.count;return o.default.createElement("div",{className:"child"},o.default.createElement("h3",null,"\u6211\u662F\u5B50\u7EC4\u4EF6\uFF0C\u8BA1\u6570\u5668\uFF1A",i),o.default.createElement(g,null))},g=function(){var n=(0,o.useContext)(h),i=n.count,a=n.setCount;return o.default.createElement("div",{className:"grandson"},o.default.createElement("h3",null,"\u6211\u662F\u5B59\u7EC4\u4EF6\uFF0C\u8BA1\u6570\u5668\uFF1A",i),o.default.createElement("button",{onClick:function(){return a(i+1)}},"\u66F4\u65B0\u8BA1\u6570\u5668"))},r=function(){var n=(0,o.useState)(0),i=(0,v.default)(n,2),a=i[0],s=i[1];return o.default.createElement(h.Provider,{value:{count:a,setCount:s}},o.default.createElement("div",{className:"father"},o.default.createElement("h3",null,"\u6211\u662F\u7236\u7EC4\u4EF6"),o.default.createElement(m,null)))},l=r,t.abrupt("return",l);case 19:case"end":return t.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useContext, useState, createContext } from 'react';

// \u521B\u5EFAcontext
const Mycontext = createContext();

// \u5B50\u7EC4\u4EF6
const Child = () => {
  const { count } = useContext(Mycontext);
  return (
    <div className="child">
      <h3>\u6211\u662F\u5B50\u7EC4\u4EF6\uFF0C\u8BA1\u6570\u5668\uFF1A{count}</h3>
      <Grandson />
    </div>
  );
};

// \u5B59\u7EC4\u4EF6
const Grandson = () => {
  // \u5F97\u5230Mycontext.Provider\u4F20\u9012\u8FC7\u6765\u7684count, setCount
  const { count, setCount } = useContext(Mycontext);

  return (
    <div className="grandson">
      <h3>\u6211\u662F\u5B59\u7EC4\u4EF6\uFF0C\u8BA1\u6570\u5668\uFF1A{count}</h3>

      {/* \u66F4\u65B0\u8BA1\u6570\u5668\uFF0CChild\u548CGrandson\u7EC4\u4EF6\u7684count\u90FD\u4F1A\u66F4\u65B0*/}
      <button onClick={() => setCount(count + 1)}>\u66F4\u65B0\u8BA1\u6570\u5668</button>
    </div>
  );
};

const Wrap = () => {
  const [count, setCount] = useState(0);
  return (
    // \u901A\u8FC7 value props\u4F20\u9012count, setCount\uFF0C\u5B50\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u5F97\u5230count, setCount
    <Mycontext.Provider value={{ count, setCount }}>
      <div className="father">
        <h3>\u6211\u662F\u7236\u7EC4\u4EF6</h3>
        <Child />
      </div>
    </Mycontext.Provider>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-7"}},"hook-demo-8":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(){var e=(0,o.useState)(0),t=(0,v.default)(e,2),u=t[0],n=t[1],i=function(){n(function(s){return s+1})};return(0,o.useEffect)(function(){console.log(1)}),(0,o.useLayoutEffect)(function(){console.log(2)}),(0,o.useLayoutEffect)(function(){console.log(3)}),o.default.createElement("div",null,o.default.createElement("h1",null,"\u8BA1\u6570\u5668: ",u),o.default.createElement("button",{onClick:i},"\u70B9\u51FB+1"))},C=function(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var u=d(t);if(u&&u.has(e))return u.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,u&&u.set(e,n),n},d=function(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(d=function(i){return i?u:t})(e)},p=c("K+nK"),r.t0=p,r.next=7,Promise.resolve().then(c.bind(null,"tJVT"));case 7:return r.t1=r.sent,v=(0,r.t0)(r.t1),r.t2=C,r.next=12,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 12:return r.t3=r.sent,o=(0,r.t2)(r.t3),m=h,r.abrupt("return",m);case 16:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect, useLayoutEffect } from 'react';

/* useLayoutEffect\u6BD4useEffect\u5148\u6267\u884C */
function Wrap() {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount((count) => count + 1);
  };
  //\u6267\u884C\u987A\u5E8F\u6253\u5370\u51FA 2\u30013\u30011
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
      <h1>\u8BA1\u6570\u5668: {count}</h1>
      <button onClick={handler}>\u70B9\u51FB+1</button>
    </div>
  );
}

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},description:'<div class="markdown"><p>F12\u770B\u5177\u4F53\u6267\u884C\u60C5\u51B5</p></div>',identifier:"hook-demo-8"}},"hook-demo-9":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=d(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},d=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(d=function(a){return a?n:u})(t)},p=c("K+nK"),l.t0=p,l.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=C,l.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return l.t3=l.sent,o=(0,l.t2)(l.t3),h=function(){return console.log("Child\u7EC4\u4EF6\u6E32\u67D3\u4E86"),o.default.createElement("div",null,o.default.createElement("h1",null,"\u5B50\u7EC4\u4EF6"),o.default.createElement("div",null,"\u65F6\u95F4\u6233\uFF1A",new Date().getTime()))},m=function(){var t=(0,o.useState)(new Date().getTime()),u=(0,v.default)(t,2),n=u[0],i=u[1],a=(0,o.useState)("\u5F20\u4E09"),s=(0,v.default)(a,2),f=s[0],y=s[1],E=function(){i(new Date().getTime())};return o.default.createElement("div",null,o.default.createElement("h1",null,"\u65F6\u95F4\u6233: ",n),o.default.createElement("button",{onClick:E},"\u66F4\u6539\u65F6\u95F4\u6233"),o.default.createElement("hr",null),o.default.createElement(h,{name:f}))},g=m,l.abrupt("return",g);case 17:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

// \u5B50\u7EC4\u4EF6
const Child = () => {
  console.log('Child\u7EC4\u4EF6\u6E32\u67D3\u4E86');
  return (
    <div>
      <h1>\u5B50\u7EC4\u4EF6</h1>
      <div>\u65F6\u95F4\u6233\uFF1A{new Date().getTime()}</div>
    </div>
  );
};
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('\u5F20\u4E09');

  // \u6BCF\u6B21\u70B9\u51FB\u66F4\u6539\u7236\u7EC4\u4EF6\u65F6\u95F4\u6233\u65F6\uFF0CChild\u7EC4\u4EF6\u90FD\u4F1A\u88AB\u91CD\u65B0\u6E32\u67D3
  const handler = () => {
    setTime(new Date().getTime());
  };

  return (
    <div>
      <h1>\u65F6\u95F4\u6233: {time}</h1>
      <button onClick={handler}>\u66F4\u6539\u65F6\u95F4\u6233</button>
      <hr />
      <Child name={name} />
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-9"}},"hook-demo-10":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=d(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},d=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(d=function(a){return a?n:u})(t)},p=c("K+nK"),l.t0=p,l.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=C,l.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return l.t3=l.sent,o=(0,l.t2)(l.t3),h=o.default.memo(function(){return console.log("Child\u7EC4\u4EF6\u6E32\u67D3\u4E86"),o.default.createElement("div",null,o.default.createElement("h1",null,"\u5B50\u7EC4\u4EF6"),o.default.createElement("div",null,"\u65F6\u95F4\u6233\uFF1A",new Date().getTime()))}),m=function(){var t=(0,o.useState)(new Date().getTime()),u=(0,v.default)(t,2),n=u[0],i=u[1],a=(0,o.useState)("\u5F20\u4E09"),s=(0,v.default)(a,2),f=s[0],y=s[1],E=function(){i(new Date().getTime())};return o.default.createElement("div",null,o.default.createElement("h1",null,"\u65F6\u95F4\u6233: ",n),o.default.createElement("button",{onClick:E},"\u66F4\u6539\u65F6\u95F4\u6233"),o.default.createElement("hr",null),o.default.createElement(h,{name:f}))},g=m,l.abrupt("return",g);case 17:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

// \u5B50\u7EC4\u4EF6-\u4F7F\u7528React.memo\u5305\u88F9
const Child = React.memo(() => {
  console.log('Child\u7EC4\u4EF6\u6E32\u67D3\u4E86');
  return (
    <div>
      <h1>\u5B50\u7EC4\u4EF6</h1>
      <div>\u65F6\u95F4\u6233\uFF1A{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('\u5F20\u4E09');

  // \u70B9\u51FB\u66F4\u6539\u7236\u7EC4\u4EF6\u65F6\u95F4\u6233
  const handler = () => {
    setTime(new Date().getTime());
  };

  return (
    <div>
      <h1>\u65F6\u95F4\u6233: {time}</h1>
      <button onClick={handler}>\u66F4\u6539\u65F6\u95F4\u6233</button>
      <hr />
      {/* \u4F7F\u7528React.memo\u5305\u88F9\u7236\u7EC4\u4EF6\uFF0C\u5F53\u7236\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u4F46\u662F\u4F20\u5165Child\u7EC4\u4EF6\u7684props\u6CA1\u6709\u66F4\u65B0\uFF0CChild\u7EC4\u4EF6\u5C31\u4E0D\u4F1A\u66F4\u65B0 */}
      <Child name={name} />
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-10"}},"hook-demo-11":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=d(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},d=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(d=function(a){return a?n:u})(t)},p=c("K+nK"),l.t0=p,l.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=C,l.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return l.t3=l.sent,o=(0,l.t2)(l.t3),h=o.default.memo(function(){return console.log("Child\u7EC4\u4EF6\u6E32\u67D3\u4E86"),o.default.createElement("div",null,o.default.createElement("h1",null,"\u5B50\u7EC4\u4EF6"),o.default.createElement("div",null,"\u65F6\u95F4\u6233\uFF1A",new Date().getTime()))}),m=function(){var t=(0,o.useState)(new Date().getTime()),u=(0,v.default)(t,2),n=u[0],i=u[1],a=(0,o.useState)("\u5F20\u4E09"),s=(0,v.default)(a,2),f=s[0],y=s[1],E=function(){i(new Date().getTime())},R=function(){};return o.default.createElement("div",null,o.default.createElement("h1",null,"\u65F6\u95F4\u6233: ",n),o.default.createElement("button",{onClick:E},"\u66F4\u6539\u65F6\u95F4\u6233"),o.default.createElement("hr",null),o.default.createElement(h,{name:f,fn:R}))},g=m,l.abrupt("return",g);case 17:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';

// \u5B50\u7EC4\u4EF6-\u4F7F\u7528React.memo\u5305\u88F9
const Child = React.memo(() => {
  console.log('Child\u7EC4\u4EF6\u6E32\u67D3\u4E86');
  return (
    <div>
      <h1>\u5B50\u7EC4\u4EF6</h1>
      <div>\u65F6\u95F4\u6233\uFF1A{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('\u5F20\u4E09');

  // \u70B9\u51FB\u66F4\u6539\u7236\u7EC4\u4EF6\u65F6\u95F4\u6233
  const handler = () => {
    setTime(new Date().getTime());
  };

  // \u4F20\u9012\u7ED9Child\u7EC4\u4EF6\u7684\u51FD\u6570\uFF0CWarp\u7EC4\u4EF6\u6BCF\u6B21\u6E32\u67D3\uFF0C\u8BE5\u51FD\u6570\u5730\u5740\u5F15\u7528\u90FD\u4E0D\u540C\u3002
  const onClickChild = () => {};

  return (
    <div>
      <h1>\u65F6\u95F4\u6233: {time}</h1>
      <button onClick={handler}>\u66F4\u6539\u65F6\u95F4\u6233</button>
      <hr />
      {/* \u4F7F\u7528React.memo\u5305\u88F9\u7236\u7EC4\u4EF6\uFF0C\u5F53\u7236\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u867D\u7136\u4F20\u5165Child\u7EC4\u4EF6\u7684name\u6CA1\u6709\u66F4\u65B0\uFF0C\u4F46\u662FonClickChild\u5730\u5740\u5F15\u7528\u6BCF\u6B21\u4E0D\u540C\uFF0C\u5C31\u4F1A\u5BFC\u81F4Child\u7EC4\u4EF6\u91CD\u65B0\u66F4\u65B0*/}
      <Child name={name} fn={onClickChild} />
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-11"}},"hook-demo-12":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=d(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},d=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(d=function(a){return a?n:u})(t)},p=c("K+nK"),l.t0=p,l.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=C,l.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return l.t3=l.sent,o=(0,l.t2)(l.t3),h=o.default.memo(function(){return console.log("Child\u7EC4\u4EF6\u6E32\u67D3\u4E86"),o.default.createElement("div",null,o.default.createElement("h1",null,"\u5B50\u7EC4\u4EF6"),o.default.createElement("div",null,"\u65F6\u95F4\u6233\uFF1A",new Date().getTime()))}),m=function(){var t=(0,o.useState)(new Date().getTime()),u=(0,v.default)(t,2),n=u[0],i=u[1],a=(0,o.useState)("\u5F20\u4E09"),s=(0,v.default)(a,2),f=s[0],y=s[1],E=function(){i(new Date().getTime())},R=function(){},w=(0,o.useMemo)(function(){return R},[f]);return o.default.createElement("div",null,o.default.createElement("h1",null,"\u65F6\u95F4\u6233: ",n),o.default.createElement("button",{onClick:E},"\u66F4\u6539\u65F6\u95F4\u6233"),o.default.createElement("hr",null),o.default.createElement(h,{name:f,fn:w}))},g=m,l.abrupt("return",g);case 17:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useMemo } from 'react';

// \u5B50\u7EC4\u4EF6-\u4F7F\u7528React.memo\u5305\u88F9
const Child = React.memo(() => {
  console.log('Child\u7EC4\u4EF6\u6E32\u67D3\u4E86');
  return (
    <div>
      <h1>\u5B50\u7EC4\u4EF6</h1>
      <div>\u65F6\u95F4\u6233\uFF1A{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('\u5F20\u4E09');

  // \u70B9\u51FB\u66F4\u6539\u7236\u7EC4\u4EF6\u65F6\u95F4\u6233
  const handler = () => {
    setTime(new Date().getTime());
  };

  // useMemo\u5305\u88F9\u7A7A\u51FD\u6570onClickChild\uFF0C\u4F9D\u8D56\u9879\u4F20\u5165[name]\uFF0C\u8868\u793A\u53EA\u6709name\u6539\u53D8\u624D\u4F1A\u91CD\u65B0\u8BA1\u7B97\u5F97\u5230onClickChild2
  const onClickChild = () => {};
  const onClickChild2 = useMemo(() => onClickChild, [name]);

  return (
    <div>
      <h1>\u65F6\u95F4\u6233: {time}</h1>
      <button onClick={handler}>\u66F4\u6539\u65F6\u95F4\u6233</button>
      <hr />
      <Child name={name} fn={onClickChild2} />
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-12"}},"hook-demo-13":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g;return D.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=d(u);if(n&&n.has(t))return n.get(t);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var f=a?Object.getOwnPropertyDescriptor(t,s):null;f&&(f.get||f.set)?Object.defineProperty(i,s,f):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i},d=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(d=function(a){return a?n:u})(t)},p=c("K+nK"),l.t0=p,l.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return l.t1=l.sent,v=(0,l.t0)(l.t1),l.t2=C,l.next=11,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 11:return l.t3=l.sent,o=(0,l.t2)(l.t3),h=o.default.memo(function(){return console.log("Child\u7EC4\u4EF6\u6E32\u67D3\u4E86"),o.default.createElement("div",null,o.default.createElement("h1",null,"\u5B50\u7EC4\u4EF6"),o.default.createElement("div",null,"\u65F6\u95F4\u6233\uFF1A",new Date().getTime()))}),m=function(){var t=(0,o.useState)(new Date().getTime()),u=(0,v.default)(t,2),n=u[0],i=u[1],a=(0,o.useState)("\u5F20\u4E09"),s=(0,v.default)(a,2),f=s[0],y=s[1],E=function(){i(new Date().getTime())},R=function(){},w=(0,o.useCallback)(R,[f]);return o.default.createElement("div",null,o.default.createElement("h1",null,"\u65F6\u95F4\u6233: ",n),o.default.createElement("button",{onClick:E},"\u66F4\u6539\u65F6\u95F4\u6233"),o.default.createElement("hr",null),o.default.createElement(h,{name:f,fn:w}))},g=m,l.abrupt("return",g);case 17:case"end":return l.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useCallback } from 'react';

// \u5B50\u7EC4\u4EF6-\u4F7F\u7528React.memo\u5305\u88F9
const Child = React.memo(() => {
  console.log('Child\u7EC4\u4EF6\u6E32\u67D3\u4E86');
  return (
    <div>
      <h1>\u5B50\u7EC4\u4EF6</h1>
      <div>\u65F6\u95F4\u6233\uFF1A{new Date().getTime()}</div>
    </div>
  );
});
const Wrap = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [name, setName] = useState('\u5F20\u4E09');

  // \u70B9\u51FB\u66F4\u6539\u7236\u7EC4\u4EF6\u65F6\u95F4\u6233
  const handler = () => {
    setTime(new Date().getTime());
  };

  // useCallback\u5305\u88F9\u7A7A\u51FD\u6570onClickChild\uFF0C\u4F9D\u8D56\u9879\u4F20\u5165[name]\uFF0C\u8868\u793A\u53EA\u6709name\u6539\u53D8\u624D\u4F1A\u91CD\u65B0\u8BA1\u7B97\u5F97\u5230onClickChild2
  const onClickChild = () => {};
  const onClickChild2 = useCallback(onClickChild, [name]);

  return (
    <div>
      <h1>\u65F6\u95F4\u6233: {time}</h1>
      <button onClick={handler}>\u66F4\u6539\u65F6\u95F4\u6233</button>
      <hr />
      <Child name={name} fn={onClickChild2} />
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-13"}},"hook-demo-14":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C;return D.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var e=v(l);if(e&&e.has(r))return e.get(r);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in r)if(n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)){var i=u?Object.getOwnPropertyDescriptor(r,n):null;i&&(i.get||i.set)?Object.defineProperty(t,n,i):t[n]=r[n]}return t.default=r,e&&e.set(r,t),t},v=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,e=new WeakMap;return(v=function(u){return u?e:l})(r)},m.t0=o,m.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return m.t1=m.sent,p=(0,m.t0)(m.t1),d=function(){var r=(0,p.useRef)(null),l=function(){r.current.value="\u5F20\u4E09"};return p.default.createElement(p.default.Fragment,null,p.default.createElement("h1",null,new Date().getTime()),p.default.createElement("input",{ref:r,type:"text",placeholder:"\u8BF7\u8F93\u5165"}),p.default.createElement("button",{onClick:l},"\u8D4B\u503C"))},C=d,m.abrupt("return",C);case 10:case"end":return m.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useRef } from 'react';

const Wrap = () => {
  const inputEl = useRef(null);
  // \u70B9\u51FB\u6309\u94AE\u4E3A\u8F93\u5165\u6846\u8D4B\u503C
  const onButtonClick = () => {
    // \`current\` \u6307\u5411\u5DF2\u6302\u8F7D\u5230 DOM \u4E0A\u7684\u6587\u672C\u8F93\u5165\u5143\u7D20\uFF0Cvalue\u4E3A\u7ED9\u8F93\u5165\u6846\u8D4B\u503C
    inputEl.current.value = '\u5F20\u4E09';
  };
  return (
    <>
      {/* \u4F7F\u7528\u65F6\u95F4\u6233\u6D4B\u8BD5\u66F4\u6539\u8F93\u5165\u6846value\u503C\u4F1A\u4E0D\u4F1A\u5BFC\u81F4\u7EC4\u4EF6\u66F4\u65B0 */}
      <h1>{new Date().getTime()}</h1>
      <input ref={inputEl} type="text" placeholder="\u8BF7\u8F93\u5165" />
      <button onClick={onButtonClick}>\u8D4B\u503C</button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-14"}},"hook-demo-15":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C;return D.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var e=v(l);if(e&&e.has(r))return e.get(r);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in r)if(n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)){var i=u?Object.getOwnPropertyDescriptor(r,n):null;i&&(i.get||i.set)?Object.defineProperty(t,n,i):t[n]=r[n]}return t.default=r,e&&e.set(r,t),t},v=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,e=new WeakMap;return(v=function(u){return u?e:l})(r)},m.t0=o,m.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return m.t1=m.sent,p=(0,m.t0)(m.t1),d=function(){var r=(0,p.useRef)(null),l=function(){r.current.focus()};return p.default.createElement(p.default.Fragment,null,p.default.createElement("input",{ref:r,type:"text",placeholder:"\u8BF7\u8F93\u5165"}),p.default.createElement("button",{onClick:l},"\u805A\u7126\u8F93\u5165\u6846"))},C=d,m.abrupt("return",C);case 10:case"end":return m.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useRef } from 'react';

const Wrap = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // \`current\` \u6307\u5411\u5DF2\u6302\u8F7D\u5230 DOM \u4E0A\u7684\u6587\u672C\u8F93\u5165\u5143\u7D20
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" placeholder="\u8BF7\u8F93\u5165" />
      <button onClick={onButtonClick}>\u805A\u7126\u8F93\u5165\u6846</button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-15"}},"hook-demo-16":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h;return D.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return o=function(l,e){if(!e&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var t=v(e);if(t&&t.has(l))return t.get(l);var u={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in l)if(i!=="default"&&Object.prototype.hasOwnProperty.call(l,i)){var a=n?Object.getOwnPropertyDescriptor(l,i):null;a&&(a.get||a.set)?Object.defineProperty(u,i,a):u[i]=l[i]}return u.default=l,t&&t.set(l,u),u},v=function(l){if(typeof WeakMap!="function")return null;var e=new WeakMap,t=new WeakMap;return(v=function(n){return n?t:e})(l)},g.t0=o,g.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return g.t1=g.sent,p=(0,g.t0)(g.t1),d=function(){return p.default.createElement("div",null,p.default.createElement("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165"}))},C=function(){var l=(0,p.useRef)(null);return p.default.createElement(p.default.Fragment,null,p.default.createElement(d,{ref:l}))},h=C,g.abrupt("return",h);case 11:case"end":return g.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useImperativeHandle, useRef } from 'react';

// \u5B50\u7EC4\u4EF6
const Child = () => {
  return (
    <div>
      <input type="text" placeholder="\u8BF7\u8F93\u5165" />
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

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},description:'<div class="markdown"><p>F12\u67E5\u770B\u62A5\u9519\u8B66\u544A</p></div>',identifier:"hook-demo-16"}},"hook-demo-17":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h;return D.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return o=function(l,e){if(!e&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var t=v(e);if(t&&t.has(l))return t.get(l);var u={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in l)if(i!=="default"&&Object.prototype.hasOwnProperty.call(l,i)){var a=n?Object.getOwnPropertyDescriptor(l,i):null;a&&(a.get||a.set)?Object.defineProperty(u,i,a):u[i]=l[i]}return u.default=l,t&&t.set(l,u),u},v=function(l){if(typeof WeakMap!="function")return null;var e=new WeakMap,t=new WeakMap;return(v=function(n){return n?t:e})(l)},g.t0=o,g.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return g.t1=g.sent,p=(0,g.t0)(g.t1),d=(0,p.forwardRef)(function(r,l){var e=(0,p.useRef)(null);return(0,p.useImperativeHandle)(l,function(){return{focus:function(){return e.current.focus()},value:function(){return e.current.value}}}),p.default.createElement("div",null,p.default.createElement("input",{type:"text",ref:e,placeholder:"\u8BF7\u8F93\u5165"}))}),C=function(){var l=(0,p.useRef)(null),e=function(){alert(l.current.value())},t=function(){l.current.focus()};return p.default.createElement(p.default.Fragment,null,p.default.createElement(d,{ref:l}),p.default.createElement("button",{onClick:e},"\u53D6\u503C"),p.default.createElement("button",{onClick:t},"\u805A\u7126"))},h=C,g.abrupt("return",h);case 11:case"end":return g.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// \u5B50\u7EC4\u4EF6
const Child = forwardRef((props, ref) => {
  const inputEl = useRef(null);
  // \u5411\u7236\u7EC4\u4EF6\u66B4\u9732focus\u548Cvalue\u65B9\u6CD5\uFF0C\u8BA9\u7236\u7EC4\u4EF6\u80FD\u8BA9\u5B50\u7EC4\u4EF6\u8F93\u5165\u6846\u805A\u7126\u548C\u53D6\u503C
  useImperativeHandle(ref, () => ({
    focus: () => inputEl.current.focus(),
    value: () => inputEl.current.value,
  }));
  return (
    <div>
      <input type="text" ref={inputEl} placeholder="\u8BF7\u8F93\u5165" />
    </div>
  );
});

const Wrap = () => {
  const inputEl = useRef(null);
  // \u83B7\u53D6\u5B50\u7EC4\u4EF6\u8F93\u5165\u6846\u7684\u503C
  const getInputValue = () => {
    alert(inputEl.current.value());
  };

  // \u8BA9\u5B50\u7EC4\u4EF6\u8F93\u5165\u6846\u805A\u7126
  const getInputFocus = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <Child ref={inputEl} />
      <button onClick={getInputValue}>\u53D6\u503C</button>
      <button onClick={getInputFocus}>\u805A\u7126</button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook-demo-17"}},"hook_redux-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r,l,e,t,u,n;return D.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return h=function(f,y){if(!y&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var E=C(y);if(E&&E.has(f))return E.get(f);var R={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in f)if(P!=="default"&&Object.prototype.hasOwnProperty.call(f,P)){var A=w?Object.getOwnPropertyDescriptor(f,P):null;A&&(A.get||A.set)?Object.defineProperty(R,P,A):R[P]=f[P]}return R.default=f,E&&E.set(f,R),R},C=function(f){if(typeof WeakMap!="function")return null;var y=new WeakMap,E=new WeakMap;return(C=function(w){return w?E:y})(f)},p=c("K+nK"),a.t0=p,a.next=6,Promise.resolve().then(c.bind(null,"tJVT"));case 6:return a.t1=a.sent,v=(0,a.t0)(a.t1),a.t2=p,a.next=11,c.e(18).then(c.bind(null,"k1fw"));case 11:return a.t3=a.sent,o=(0,a.t2)(a.t3),a.t4=h,a.next=16,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 16:return a.t5=a.sent,d=(0,a.t4)(a.t5),m={count:0},g=function(f,y){var E=y.type,R=y.payload;switch(E){case"JIA":return(0,o.default)((0,o.default)({},f),{},{count:f.count+R});case"JIAN":return(0,o.default)((0,o.default)({},f),{},{count:f.count-R});default:throw new Error}},r=(0,d.createContext)(null),l=function(){var f=(0,d.useContext)(r),y=f.state,E=f.dispatch;return d.default.createElement("div",null,d.default.createElement("h2",null,"Header\u7EC4\u4EF6\uFF1A"),d.default.createElement("div",null,"\u8BA1\u6570\u5668\uFF1A",y.count))},e=function(){var f=(0,d.useContext)(r),y=f.state,E=f.dispatch;return d.default.createElement("div",null,d.default.createElement("h2",null,"Body\u7EC4\u4EF6\uFF1A"),d.default.createElement("div",null,"\u8BA1\u6570\u5668\uFF1A",y.count))},t=function(){var f=(0,d.useContext)(r),y=f.state,E=f.dispatch;return d.default.createElement("div",null,d.default.createElement("h2",null,"Footer\u7EC4\u4EF6\uFF1A"),d.default.createElement("div",null,"\u8BA1\u6570\u5668\uFF1A",y.count))},u=function(){var f=(0,d.useReducer)(g,m),y=(0,v.default)(f,2),E=y[0],R=y[1],w=function(){R({type:"JIA",payload:1})},P=function(){R({type:"JIAN",payload:1})};return d.default.createElement("div",null,d.default.createElement(r.Provider,{value:{state:E,dispatch:R}},d.default.createElement(l,null),d.default.createElement("hr",null),d.default.createElement(e,null),d.default.createElement("hr",null),d.default.createElement(t,null),d.default.createElement("hr",null),d.default.createElement("button",{onClick:w},"\u6240\u6709\u8BA1\u6570\u5668\u52A0"),d.default.createElement("button",{onClick:P},"\u6240\u6709\u8BA1\u6570\u5668\u51CF")))},n=u,a.abrupt("return",n);case 27:case"end":return a.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useReducer, useContext, createContext } from 'react';

// 1. \u5C06\u6570\u636E\u96C6\u4E2D\u5728\u4E00\u4E2A store \u5BF9\u8C61\u3002
const store = {
  count: 0,
};

// 2. \u5C06\u6240\u6709\u64CD\u4F5C\u96C6\u4E2D\u5728 reducer(\u5FC5\u987B\u662F\u7EAF\u51FD\u6570)
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'JIA':
      return { ...state, count: state.count + payload };
    case 'JIAN':
      return { ...state, count: state.count - payload };
    default:
      throw new Error();
  }
};

// 3. \u521B\u5EFA\u4E00\u4E2A MyContext;
const MyContext = createContext(null);

const Header = () => {
  // 7. \u5404\u4E2A\u7EC4\u4EF6\u7528 useContext \u83B7\u53D6\u8BFB\u5199API\u3002
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Header\u7EC4\u4EF6\uFF1A</h2>
      <div>\u8BA1\u6570\u5668\uFF1A{state.count}</div>
    </div>
  );
};

const Body = () => {
  // 7. \u5404\u4E2A\u7EC4\u4EF6\u7528 useContext \u83B7\u53D6\u8BFB\u5199API\u3002
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Body\u7EC4\u4EF6\uFF1A</h2>
      <div>\u8BA1\u6570\u5668\uFF1A{state.count}</div>
    </div>
  );
};

const Footer = () => {
  // 7. \u5404\u4E2A\u7EC4\u4EF6\u7528 useContext \u83B7\u53D6\u8BFB\u5199API\u3002
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      <h2>Footer\u7EC4\u4EF6\uFF1A</h2>
      <div>\u8BA1\u6570\u5668\uFF1A{state.count}</div>
    </div>
  );
};

const Wrap = () => {
  // 4. \u521B\u5EFA\u5BF9\u6570\u636E\u7684\u8BFB\u53D6 API
  const [state, dispatch] = useReducer(reducer, store);

  // \u52A0\u64CD\u4F5C
  const jiaCount = () => {
    // \u4F20\u5165type\u64CD\u4F5C\u7C7B\u578B\uFF0Cpayload\u53C2\u6570
    dispatch({ type: 'JIA', payload: 1 });
  };

  // \u51CF\u64CD\u4F5C
  const jianCount = () => {
    // \u4F20\u5165type\u64CD\u4F5C\u7C7B\u578B\uFF0Cpayload\u53C2\u6570
    dispatch({ type: 'JIAN', payload: 1 });
  };
  return (
    <div>
      {/* 5. \u7528 MyContext.Provider \u5C06 MyContext \u63D0\u4F9B\u7ED9\u6240\u6709\u7EC4\u4EF6\u3002 */}

      {/* 6. \u5C06\u8BFB\u53D6\u6570\u636E\u7684 API \u901A\u8FC7 MyContext.Provider \u7684 value \u5C5E\u6027\u4F20\u9012\u7ED9\u6240\u6709\u7EC4\u4EF6\u3002 */}

      <MyContext.Provider value={{ state, dispatch }}>
        <Header />
        <hr />
        <Body />
        <hr />
        <Footer />
        <hr />
        <button onClick={jiaCount}>\u6240\u6709\u8BA1\u6570\u5668\u52A0</button>
        <button onClick={jianCount}>\u6240\u6709\u8BA1\u6570\u5668\u51CF</button>
      </MyContext.Provider>
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"hook_redux-demo"}},"ref_dom-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(u,n){if(!n&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var i=m(n);if(i&&i.has(u))return i.get(u);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in u)if(f!=="default"&&Object.prototype.hasOwnProperty.call(u,f)){var y=s?Object.getOwnPropertyDescriptor(u,f):null;y&&(y.get||y.set)?Object.defineProperty(a,f,y):a[f]=u[f]}return a.default=u,i&&i.set(u,a),a},m=function(u){if(typeof WeakMap!="function")return null;var n=new WeakMap,i=new WeakMap;return(m=function(s){return s?i:n})(u)},p=c("K+nK"),e.t0=p,e.next=6,c.e(6).then(c.bind(null,"fWQN"));case 6:return e.t1=e.sent,v=(0,e.t0)(e.t1),e.t2=p,e.next=11,c.e(7).then(c.bind(null,"mtLc"));case 11:return e.t3=e.sent,o=(0,e.t2)(e.t3),e.t4=p,e.next=16,c.e(9).then(c.bind(null,"yKVA"));case 16:return e.t5=e.sent,d=(0,e.t4)(e.t5),e.t6=p,e.next=21,c.e(8).then(c.bind(null,"879j"));case 21:return e.t7=e.sent,C=(0,e.t6)(e.t7),e.t8=g,e.next=26,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 26:return e.t9=e.sent,h=(0,e.t8)(e.t9),r=function(t){(0,d.default)(n,t);var u=(0,C.default)(n);function n(){var i;(0,v.default)(this,n);for(var a=arguments.length,s=new Array(a),f=0;f<a;f++)s[f]=arguments[f];return i=u.call.apply(u,[this].concat(s)),i.getInputValue=function(){alert(i.refs.inputEl.value)},i}return(0,o.default)(n,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement("input",{ref:"inputEl",type:"text",placeholder:"\u8BF7\u8F93\u5165"}),h.default.createElement("button",{onClick:this.getInputValue},"\u83B7\u53D6\u503C"))}}]),n}(h.Component),e.abrupt("return",r);case 30:case"end":return e.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { Component } from 'react';

export default class Wrap extends Component {
  // \u83B7\u53D6input\u7684value\u503C
  getInputValue = () => {
    // \u901A\u8FC7this.refs.inputEl\u7684\u65B9\u5F0F\u83B7\u53D6
    alert(this.refs.inputEl.value);
  };
  render() {
    return (
      <div>
        {/* \u901A\u8FC7\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u521B\u5EFArefs */}
        <input ref="inputEl" type="text" placeholder="\u8BF7\u8F93\u5165" />
        <button onClick={this.getInputValue}>\u83B7\u53D6\u503C</button>
      </div>
    );
  }
}`}},dependencies:{react:{version:"17.0.2"}},identifier:"ref_dom-demo"}},"ref_dom-demo-1":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d;return D.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=c("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,v=(0,h.t0)(h.t1),o=function(){var g=v.default.createRef(null),r=function(){alert(g.current.value)};return v.default.createElement("div",null,v.default.createElement("input",{ref:g,type:"text",placeholder:"\u8BF7\u8F93\u5165"}),v.default.createElement("button",{onClick:r},"\u83B7\u53D6\u503C"))},d=o,h.abrupt("return",d);case 9:case"end":return h.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';

const Wrap = () => {
  const myRef = React.createRef(null);
  const getInputValue = () => {
    // \u901A\u8FC7this.myRef.current\u7684\u65B9\u5F0F\u83B7\u53D6DOM
    alert(myRef.current.value);
  };
  return (
    <div>
      {/* \u901A\u8FC7this.myRef\u7684\u65B9\u5F0F\u7ED1\u5B9A\u5230DOM\u5143\u7D20 */}
      <input ref={myRef} type="text" placeholder="\u8BF7\u8F93\u5165" />
      <button onClick={getInputValue}>\u83B7\u53D6\u503C</button>
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"ref_dom-demo-1"}},"ref_dom-demo-2":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(u,n){if(!n&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var i=m(n);if(i&&i.has(u))return i.get(u);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in u)if(f!=="default"&&Object.prototype.hasOwnProperty.call(u,f)){var y=s?Object.getOwnPropertyDescriptor(u,f):null;y&&(y.get||y.set)?Object.defineProperty(a,f,y):a[f]=u[f]}return a.default=u,i&&i.set(u,a),a},m=function(u){if(typeof WeakMap!="function")return null;var n=new WeakMap,i=new WeakMap;return(m=function(s){return s?i:n})(u)},p=c("K+nK"),e.t0=p,e.next=6,c.e(6).then(c.bind(null,"fWQN"));case 6:return e.t1=e.sent,v=(0,e.t0)(e.t1),e.t2=p,e.next=11,c.e(7).then(c.bind(null,"mtLc"));case 11:return e.t3=e.sent,o=(0,e.t2)(e.t3),e.t4=p,e.next=16,c.e(9).then(c.bind(null,"yKVA"));case 16:return e.t5=e.sent,d=(0,e.t4)(e.t5),e.t6=p,e.next=21,c.e(8).then(c.bind(null,"879j"));case 21:return e.t7=e.sent,C=(0,e.t6)(e.t7),e.t8=g,e.next=26,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 26:return e.t9=e.sent,h=(0,e.t8)(e.t9),r=function(t){(0,d.default)(n,t);var u=(0,C.default)(n);function n(){var i;(0,v.default)(this,n);for(var a=arguments.length,s=new Array(a),f=0;f<a;f++)s[f]=arguments[f];return i=u.call.apply(u,[this].concat(s)),i.myRef=h.default.createRef(null),i.getInputValue=function(){alert(i.myRef.current.value)},i}return(0,o.default)(n,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement("input",{ref:this.myRef,type:"text",placeholder:"\u8BF7\u8F93\u5165"}),h.default.createElement("button",{onClick:this.getInputValue},"\u83B7\u53D6\u503C"))}}]),n}(h.Component),e.abrupt("return",r);case 30:case"end":return e.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { Component } from 'react';

export default class Wrap extends Component {
  // \u901A\u8FC7React.createRef()\u7684\u65B9\u5F0F\u521B\u5EFArefs
  myRef = React.createRef(null);
  // \u83B7\u53D6input\u7684value\u503C
  getInputValue = () => {
    // \u901A\u8FC7this.myRef.current\u7684\u65B9\u5F0F\u83B7\u53D6DOM
    alert(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        {/* \u901A\u8FC7this.myRef\u7684\u65B9\u5F0F\u7ED1\u5B9A\u5230DOM\u5143\u7D20 */}
        <input ref={this.myRef} type="text" placeholder="\u8BF7\u8F93\u5165" />
        <button onClick={this.getInputValue}>\u83B7\u53D6\u503C</button>
      </div>
    );
  }
}`}},dependencies:{react:{version:"17.0.2"}},identifier:"ref_dom-demo-2"}},"ref_dom-demo-3":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m,g,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(u,n){if(!n&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var i=m(n);if(i&&i.has(u))return i.get(u);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in u)if(f!=="default"&&Object.prototype.hasOwnProperty.call(u,f)){var y=s?Object.getOwnPropertyDescriptor(u,f):null;y&&(y.get||y.set)?Object.defineProperty(a,f,y):a[f]=u[f]}return a.default=u,i&&i.set(u,a),a},m=function(u){if(typeof WeakMap!="function")return null;var n=new WeakMap,i=new WeakMap;return(m=function(s){return s?i:n})(u)},p=c("K+nK"),e.t0=p,e.next=6,c.e(6).then(c.bind(null,"fWQN"));case 6:return e.t1=e.sent,v=(0,e.t0)(e.t1),e.t2=p,e.next=11,c.e(7).then(c.bind(null,"mtLc"));case 11:return e.t3=e.sent,o=(0,e.t2)(e.t3),e.t4=p,e.next=16,c.e(9).then(c.bind(null,"yKVA"));case 16:return e.t5=e.sent,d=(0,e.t4)(e.t5),e.t6=p,e.next=21,c.e(8).then(c.bind(null,"879j"));case 21:return e.t7=e.sent,C=(0,e.t6)(e.t7),e.t8=g,e.next=26,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 26:return e.t9=e.sent,h=(0,e.t8)(e.t9),r=function(t){(0,d.default)(n,t);var u=(0,C.default)(n);function n(){var i;(0,v.default)(this,n);for(var a=arguments.length,s=new Array(a),f=0;f<a;f++)s[f]=arguments[f];return i=u.call.apply(u,[this].concat(s)),i.getInputValue=function(){alert(i.myRef.value)},i}return(0,o.default)(n,[{key:"render",value:function(){var a=this;return h.default.createElement("div",null,h.default.createElement("input",{ref:function(f){return a.myRef=f},type:"text",placeholder:"\u8BF7\u8F93\u5165"}),h.default.createElement("button",{onClick:this.getInputValue},"\u83B7\u53D6\u503C"))}}]),n}(h.Component),e.abrupt("return",r);case 30:case"end":return e.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { Component } from 'react';

export default class Wrap extends Component {
  // \u83B7\u53D6input\u7684value\u503C
  getInputValue = () => {
    // \u901A\u8FC7this.myRef\u7684\u65B9\u5F0F\u83B7\u53D6DOM
    alert(this.myRef.value);
  };
  render() {
    return (
      <div>
        {/* \u901A\u8FC7\u56DE\u8C03\u7684\u65B9\u5F0F\u7ED1\u5B9A\u5230DOM\u5143\u7D20 */}
        <input ref={(el) => (this.myRef = el)} type="text" placeholder="\u8BF7\u8F93\u5165" />
        <button onClick={this.getInputValue}>\u83B7\u53D6\u503C</button>
      </div>
    );
  }
}`}},dependencies:{react:{version:"17.0.2"}},identifier:"ref_dom-demo-3"}},"ref_dom-demo-4":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C;return D.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var e=v(l);if(e&&e.has(r))return e.get(r);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in r)if(n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)){var i=u?Object.getOwnPropertyDescriptor(r,n):null;i&&(i.get||i.set)?Object.defineProperty(t,n,i):t[n]=r[n]}return t.default=r,e&&e.set(r,t),t},v=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,e=new WeakMap;return(v=function(u){return u?e:l})(r)},m.t0=o,m.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return m.t1=m.sent,p=(0,m.t0)(m.t1),d=function(){var r=(0,p.useRef)(null),l=function(){console.log(r.current),alert(r.current.value)};return p.default.createElement("div",null,p.default.createElement("input",{ref:r,type:"text",placeholder:"\u8BF7\u8F93\u5165"}),p.default.createElement("button",{onClick:l},"\u83B7\u53D6\u503C"))},C=d,m.abrupt("return",C);case 10:case"end":return m.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useRef } from 'react';

const Wrap = () => {
  const myRef = useRef(null);
  const // \u83B7\u53D6input\u7684value\u503C
    getInputValue = () => {
      // \u901A\u8FC7myRef.current\u7684\u65B9\u5F0F\u83B7\u53D6DOM
      console.log(myRef.current);
      alert(myRef.current.value);
    };
  return (
    <div>
      <input ref={myRef} type="text" placeholder="\u8BF7\u8F93\u5165" />
      <button onClick={getInputValue}>\u83B7\u53D6\u503C</button>
    </div>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"ref_dom-demo-4"}},"refs_forward-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h;return D.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return o=function(l,e){if(!e&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var t=v(e);if(t&&t.has(l))return t.get(l);var u={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in l)if(i!=="default"&&Object.prototype.hasOwnProperty.call(l,i)){var a=n?Object.getOwnPropertyDescriptor(l,i):null;a&&(a.get||a.set)?Object.defineProperty(u,i,a):u[i]=l[i]}return u.default=l,t&&t.set(l,u),u},v=function(l){if(typeof WeakMap!="function")return null;var e=new WeakMap,t=new WeakMap;return(v=function(n){return n?t:e})(l)},g.t0=o,g.next=5,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 5:return g.t1=g.sent,p=(0,g.t0)(g.t1),d=p.default.forwardRef(function(r,l){return p.default.createElement("button",{ref:l,className:"FancyButton"},r.children)}),C=function(){var l=(0,p.useRef)(null);(0,p.useEffect)(function(){console.log(l.current)},[]);var e=function(){alert(l.current.innerHTML)};return p.default.createElement(p.default.Fragment,null,p.default.createElement("p",null,"F12\u67E5\u770BFancyButton\u6309\u94AEDOM"),p.default.createElement(d,{ref:l},"FancyButton\u6309\u94AE"),p.default.createElement("button",{type:"button",onClick:e},"\u83B7\u53D6FancyButton\u6309\u94AE\u6587\u672C"))},h=C,g.abrupt("return",h);case 11:case"end":return g.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useRef, useEffect } from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const Wrap = () => {
  // \u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 DOM button \u7684 ref\uFF1A
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, []);

  // \u83B7\u53D6FancyButton\u6309\u94AE\u6587\u672C
  const handleBtn = () => {
    alert(ref.current.innerHTML);
  };
  return (
    <>
      <p>F12\u67E5\u770BFancyButton\u6309\u94AEDOM</p>
      <FancyButton ref={ref}>FancyButton\u6309\u94AE</FancyButton>
      <button type="button" onClick={handleBtn}>
        \u83B7\u53D6FancyButton\u6309\u94AE\u6587\u672C
      </button>
    </>
  );
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"refs_forward-demo"}},"render_props-demo":{component:Object(B.c)({loader:function(){var F=Object(S.a)(D.a.mark(function W(){var p,v,o,d,C,h,m;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=c("K+nK"),r.t0=p,r.next=4,Promise.resolve().then(c.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,v=(0,r.t0)(r.t1),o=function(){return v.default.createElement(d,{renderLeft:function(t){return v.default.createElement(C,{name:t})},renderRight:function(t){return v.default.createElement(h,{name:t})}})},d=function(e){var t="\u5DE6\u4FA7\u7EC4\u4EF6",u="\u53F3\u4FA7\u7EC4\u4EF6";return v.default.createElement("div",null,v.default.createElement("div",{className:"left"},e.renderLeft(t)),v.default.createElement("div",{className:"right"},e.renderRight(u)))},C=function(e){return v.default.createElement("div",null,"\u6211\u7684\u540D\u5B57\u662F\uFF1A",e.name)},h=function(e){return v.default.createElement("div",null,"\u6211\u7684\u540D\u5B57\u662F\uFF1A",e.name)},m=o,r.abrupt("return",m);case 12:case"end":return r.stop()}},W)}));function O(){return F.apply(this,arguments)}return O}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';

// \u4F7F\u7528render props\u8BA9Content\u7EC4\u4EF6\u5411Left\u548CRight\u7EC4\u4EF6\u4F20\u503C\u3002
const Wrap = () => {
  return (
    // \u5C06\u53C2\u6570name\u901A\u8FC7props\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6-render props\u8FD4\u56DE\u4E00\u4E2A\u7EC4\u4EF6
    <Content
      renderLeft={(name) => <Left name={name} />}
      renderRight={(name) => <Right name={name} />}
    />
  );
};

// \u5185\u5BB9\u7EC4\u4EF6
const Content = (props) => {
  // \u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684\u540D\u5B57
  const leftName = '\u5DE6\u4FA7\u7EC4\u4EF6';
  const rightName = '\u53F3\u4FA7\u7EC4\u4EF6';
  return (
    <div>
      {/* \u901A\u8FC7\u8C03\u7528props.renderLeft\u548Cprops.renderRight\u51FD\u6570\u4F20\u9012\u53C2\u6570\u7ED9\u5B50\u7EC4\u4EF6 */}
      <div className="left">{props.renderLeft(leftName)}</div>
      <div className="right">{props.renderRight(rightName)}</div>
    </div>
  );
};

// \u5DE6\u4FA7\u7EC4\u4EF6
const Left = (props) => {
  // \u8F93\u51FA\uFF1A\u6211\u7684\u540D\u5B57\u662F\uFF1A\u5DE6\u4FA7\u7EC4\u4EF6
  return <div>\u6211\u7684\u540D\u5B57\u662F\uFF1A{props.name}</div>;
};

// \u53F3\u4FA7\u7EC4\u4EF6
const Right = (props) => {
  // \u8F93\u51FA\uFF1A\u6211\u7684\u540D\u5B57\u662F\uFF1A\u53F3\u4FA7\u7EC4\u4EF6
  return <div>\u6211\u7684\u540D\u5B57\u662F\uFF1A{props.name}</div>;
};

export default Wrap;`}},dependencies:{react:{version:"17.0.2"}},identifier:"render_props-demo"}}},ee=c("x2v5"),te=c("KcUY"),ne=c.n(te),ae=L.default=F=>k.a.createElement(ne.a,Object(J.default)({},F,{config:x,demos:_,apis:ee}))},q3YX:function(V){V.exports=JSON.parse('{"menus":{"zh-CN":{"/foo":[{"path":"/foo","title":"Foo","meta":{}}],"*":[{"path":"/","title":"\u5B66\u4E60\u8D44\u6599","meta":{}}],"/code_css":[{"path":"/code_css","title":"CSS\u7247\u6BB5","meta":{"order":0}}],"/code_js":[{"path":"/code_js","title":"DOM\u64CD\u4F5C","meta":{"order":0}},{"path":"/code_js/bom","title":"BOM\u64CD\u4F5C","meta":{"order":0.1}},{"path":"/code_js/tools","title":"\u5DE5\u5177\u51FD\u6570","meta":{"order":0.5}},{"path":"/code_js/array","title":"\u6570\u7EC4\u64CD\u4F5C","meta":{"order":1}},{"path":"/code_js/number","title":"\u6570\u5B57\u64CD\u4F5C","meta":{"order":1.1}},{"path":"/code_js/string","title":"\u5B57\u7B26\u4E32\u64CD\u4F5C","meta":{"order":1.5}},{"path":"/code_js/roll","title":"\u6EDA\u52A8\u64CD\u4F5C","meta":{"order":3}},{"path":"/code_js/testing","title":"\u68C0\u6D4B\u6821\u9A8C","meta":{"order":4}},{"path":"/code_js/abbreviation","title":"\u7B80\u5199\u6280\u5DE7","meta":{"order":5}},{"path":"/code_js/format","title":"\u683C\u5F0F\u8F6C\u6362","meta":{"order":5}},{"path":"/code_js/device","title":"\u8BBE\u5907\u5224\u65AD","meta":{"order":6}}],"/fonticon":[{"path":"/fonticon","title":"\u5B57\u4F53\u56FE\u6807\u5E93","meta":{"order":0}}],"/git":[{"path":"/git","title":"Git \u4ECB\u7ECD","meta":{"order":0}},{"path":"/git/install","title":"Git \u5B89\u88C5","meta":{"order":1}},{"path":"/git/started","title":"\u5FEB\u901F\u4E0A\u624B","meta":{"order":2}},{"path":"/git/base","title":"\u57FA\u672C\u64CD\u4F5C","meta":{"order":3}},{"path":"/git/reset","title":"\u65F6\u5149\u7A7F\u68AD","meta":{"order":4}},{"path":"/git/gitignore","title":"\u5FFD\u7565\u6587\u4EF6","meta":{"order":5}},{"path":"/git/clean","title":"\u6E05\u7406\u6587\u4EF6","meta":{"order":6}},{"path":"/git/branch","title":"\u5206\u652F\u7BA1\u7406","meta":{"order":7}}],"/package":[{"path":"/package","title":"npm","meta":{"order":0}},{"path":"/package/yarn","title":"yarn","meta":{"order":0.1}},{"path":"/package/pnpm","title":"pnpm","meta":{"order":0.2}},{"path":"/package/nvm","title":"nvm","meta":{"order":1}},{"path":"/package/nrm","title":"nrm","meta":{"order":2}}],"/pinia":[{"path":"/pinia","title":"\u7B80\u4ECB","meta":{"order":0}},{"path":"/pinia/introduction","title":"\u5165\u95E8","meta":{"order":1}},{"path":"/pinia/state","title":"State","meta":{"order":2}},{"path":"/pinia/getters","title":"Getters","meta":{"order":3}},{"path":"/pinia/actions","title":"Actions","meta":{"order":4}},{"path":"/pinia/persistence","title":"\u6570\u636E\u6301\u4E45\u5316","meta":{"order":5}},{"path":"/pinia/config","title":"\u5B8C\u6574\u914D\u7F6E","meta":{"order":50}}],"/plugins":[{"path":"/plugins","title":"Vue\u63D2\u4EF6","meta":{"order":0}},{"path":"/plugins/react","title":"React\u63D2\u4EF6","meta":{"order":1}},{"path":"/plugins/javascript","title":"JavaScript\u63D2\u4EF6","meta":{"order":2}},{"path":"/plugins/player","title":"\u5A92\u4F53\u64AD\u653E\u5668","meta":{"order":3}},{"path":"/plugins/date","title":"\u65E5\u671F\u5904\u7406","meta":{"order":4}},{"path":"/plugins/number","title":"\u6570\u5B57\u5904\u7406","meta":{"order":5}},{"path":"/plugins/watermark","title":"\u6DFB\u52A0\u6C34\u5370","meta":{"order":6}},{"path":"/plugins/debug","title":"\u8C03\u8BD5\u5DE5\u5177","meta":{"order":7}},{"path":"/plugins/qrcode","title":"\u751F\u6210\u4E8C\u7EF4\u7801","meta":{"order":8}},{"path":"/plugins/animate","title":"\u52A8\u753B\u5E93","meta":{"order":9}},{"path":"/plugins/webpack","title":"webpack\u63D2\u4EF6","meta":{"order":10}}],"/projectconfig":[{"path":"/projectconfig","title":"\u521B\u5EFA\u9879\u76EE","meta":{"order":0}},{"path":"/projectconfig/vuerouter","title":"\u5B89\u88C5\u8DEF\u7531","meta":{"order":1}},{"path":"/projectconfig/eslint","title":"\u6821\u9A8C\u4E0E\u98CE\u683C","meta":{"order":2}}],"/react":[{"path":"/react","title":"React\u57FA\u7840","meta":{"order":0}},{"path":"/react/assembly","title":"React\u9762\u5411\u7EC4\u4EF6\u7F16\u7A0B","meta":{"order":1}},{"path":"/react/hgherfn","title":"\u9AD8\u9636\u51FD\u6570","meta":{"order":2}},{"path":"/react/life_cycle","title":"\u7EC4\u4EF6\u751F\u547D\u5468\u671F","meta":{"order":3}},{"path":"/react/key","title":"key\u503C\u7684\u4F5C\u7528","meta":{"order":4}},{"path":"/react/communication","title":"\u7EC4\u4EF6\u95F4\u901A\u4FE1","meta":{"order":5}},{"path":"/react/slot","title":"\u5B9E\u73B0\u63D2\u69FD","meta":{"order":6}},{"path":"/react/fragments","title":"Fragments","meta":{"order":7}},{"path":"/react/high_component","title":"\u9AD8\u9636\u7EC4\u4EF6","meta":{"order":8}},{"path":"/react/ref_dom","title":"Ref & DOM","meta":{"order":9}},{"path":"/react/render_props","title":"Render Props","meta":{"order":10}},{"path":"/react/refs_forward","title":"Refs \u8F6C\u53D1","meta":{"order":11}},{"path":"/react/hook","title":"Hook","meta":{"order":12}},{"path":"/react/hook_redux","title":"Hook\u66FF\u4EE3Redux","meta":{"order":13}},{"path":"/react/top_api","title":"React \u9876\u5C42 API","meta":{"order":50}}],"/redux":[{"path":"/redux","title":"\u8BA4\u8BC6Redux","meta":{"order":0}},{"path":"/redux/core_concept","title":"\u6838\u5FC3\u6982\u5FF5","meta":{"order":1}},{"path":"/redux/base_use","title":"\u57FA\u672C\u5E94\u7528","meta":{"order":2}},{"path":"/redux/react-redux","title":"react-redux","meta":{"order":3}},{"path":"/redux/redux-thunk","title":"redux-thunk","meta":{"order":4}},{"path":"/redux/redux-promise","title":"redux-promise","meta":{"order":5}},{"path":"/redux/redux-promise-middleware","title":"redux-promise-middleware","meta":{"order":6}},{"path":"/redux/redux-persist","title":"Redux \u6301\u4E45\u5316","meta":{"order":7}},{"path":"/redux/dev-tools","title":"Redux DevTools","meta":{"order":8}}],"/resources":[{"path":"/resources","title":"\u5E38\u7528\u793E\u533A","meta":{"order":0}},{"path":"/resources/docs","title":"\u6280\u672F\u6587\u6863","meta":{"order":1}},{"path":"/resources/platform","title":"\u5F00\u653E\u5E73\u53F0","meta":{"order":2}},{"path":"/resources/charts","title":"\u6570\u636E\u53EF\u89C6\u5316","meta":{"order":3}},{"path":"/resources/tools","title":"\u5B9E\u7528\u5DE5\u5177","meta":{"order":4}},{"path":"/resources/website","title":"\u8D44\u6E90\u7F51\u7AD9","meta":{"order":5}},{"path":"/resources/others","title":"\u5176\u4ED6\u8D44\u6E90","meta":{"order":100}}],"/tools":[{"path":"/tools","title":"\u57FA\u672C\u914D\u7F6E","meta":{"order":0}},{"path":"/tools/problem","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":1}}],"/ui":[{"path":"/ui","title":"PC\u7AEF\u6846\u67B6","meta":{"order":0}},{"path":"/ui/h5","title":"H5\u7AEF\u6846\u67B6","meta":{"order":1}},{"path":"/ui/multiport","title":"\u8DE8\u7AEF\u6846\u67B6","meta":{"order":2}},{"path":"/ui/integrate","title":"\u96C6\u6210UI\u5E93","meta":{"order":3}}],"/vue3":[{"path":"/vue3","title":"\u57FA\u672C\u4ECB\u7ECD","meta":{"order":0}},{"path":"/vue3/composition-api","title":"\u7EC4\u5408\u5F0F API","meta":{"order":1}},{"path":"/vue3/life_cycle","title":"\u751F\u547D\u5468\u671F","meta":{"order":2}},{"path":"/vue3/setup","title":"\u4E86\u89E3 Setup","meta":{"order":3}},{"path":"/vue3/provide_inject","title":"\u4F9D\u8D56\u6CE8\u5165","meta":{"order":4}},{"path":"/vue3/get-current-instance","title":"\u7EC4\u4EF6\u5B9E\u4F8B","meta":{"order":5}},{"path":"/vue3/ref_arr","title":"Ref \u6570\u7EC4","meta":{"order":6}},{"path":"/vue3/new_assembly","title":"\u65B0\u7684\u7EC4\u4EF6","meta":{"order":7}},{"path":"/vue3/dynamic_assembly","title":"\u72B6\u6001\u7EC4\u4EF6","meta":{"order":8}},{"path":"/vue3/remove-api","title":"\u79FB\u9664\u7684 API","meta":{"order":9}},{"path":"/vue3/v-model","title":"v-model \u53D8\u66F4","meta":{"order":10}},{"path":"/vue3/style","title":"style \u7279\u6027","meta":{"order":11}},{"path":"/vue3/web-components","title":"Web Components","meta":{"order":12}},{"path":"/vue3/script-setup","title":"\u54CD\u5E94\u6027\u8BED\u6CD5\u7CD6","meta":{"order":13}},{"path":"/vue3/assembly_use","title":"\u7EC4\u4EF6\u4F7F\u7528","meta":{"order":14}},{"path":"/vue3/define-props","title":"defineProps","meta":{"order":15}},{"path":"/vue3/define-emits","title":"defineEmits","meta":{"order":16}},{"path":"/vue3/define-expose","title":"defineExpose","meta":{"order":17}},{"path":"/vue3/slots_attrs","title":"useSlots \u548C useAttrs","meta":{"order":18}},{"path":"/vue3/script","title":"\u4E0E<script>\u4F7F\u7528","meta":{"order":19}},{"path":"/vue3/await","title":"\u9876\u5C42 await","meta":{"order":20}},{"path":"/vue3/limit_src","title":"\u9650\u5236\u4F7F\u7528 src \u5BFC\u5165","meta":{"order":21}},{"path":"/vue3/error","title":"\u5B8F\u547D\u4EE4\u62A5\u9519\u95EE\u9898","meta":{"order":22}}],"/vueconfig":[{"path":"/vueconfig","title":"\u9879\u76EE\u76EE\u5F55","meta":{"order":0}},{"path":"/vueconfig/vuerouter","title":"VueRouter\u914D\u7F6E","meta":{"order":1}},{"path":"/vueconfig/vuex","title":"Vuex\u914D\u7F6E","meta":{"order":2}},{"path":"/vueconfig/env","title":"\u914D\u7F6Eenv\u73AF\u5883\u53D8\u91CF","meta":{"order":3}},{"path":"/vueconfig/remove_console","title":"\u53BB\u6389\u6253\u5370\u65E5\u5FD7","meta":{"order":4}},{"path":"/vueconfig/router_animate","title":"\u8DEF\u7531\u5207\u6362\u52A8\u753B","meta":{"order":5}},{"path":"/vueconfig/root_config","title":"\u6839\u914D\u7F6E\u6587\u4EF6","meta":{"order":6}}]}},"locales":[{"name":"zh-CN","label":"\u4E2D\u6587"}],"navs":{"zh-CN":[{"title":"\u5E38\u7528\u8D44\u6E90","path":"/resources"},{"title":"\u6846\u67B6\u63D2\u4EF6","children":[{"title":"UI\u6846\u67B6","path":"/ui"},{"title":"\u5E38\u7528\u63D2\u4EF6","path":"/plugins"},{"title":"\u5B57\u4F53\u56FE\u6807","path":"/fonticon"}]},{"title":"\u9879\u76EE\u914D\u7F6E","children":[{"title":"Vue2.x","path":"/vueconfig"},{"title":"Vue3.x","path":"/projectconfig"}]},{"title":"\u6280\u672F\u6587\u6863","children":[{"title":"React","path":"/react"},{"title":"Redux","path":"/redux"},{"title":"Vue3.x","path":"/vue3"},{"title":"Pinia","path":"/pinia"},{"title":"Git","path":"/git"}]},{"title":"\u4EE3\u7801\u7247\u6BB5","children":[{"title":"JavaScript","path":"/code_js"},{"title":"CSS","path":"/code_css"}]},{"title":"\u5DE5\u5177\u8F6F\u4EF6","children":[{"title":"VSCode","path":"/tools"},{"title":"npm","path":"/package"},{"title":"yarn","path":"/package/yarn"},{"title":"pnpm","path":"/package/pnpm"},{"title":"nvm","path":"/package/nvm"},{"title":"nrm","path":"/package/nrm"}]},{"title":"GitHub","path":"https://github.com/fy996icu/note_umi"}]},"title":"dumi","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"https://github.com/fy996icu/note","branch":"main","platform":"github"},"theme":{}}')},x2v5:function(V){V.exports=JSON.parse("{}")}}]);
