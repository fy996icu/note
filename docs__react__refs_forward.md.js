(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"573X":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("M/Q6"),o=n("Zxc8"),u=n("H1Ra"),m=l.a.memo((e=>{var t=e.demos,n=t["refs_forward-demo"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"refs-\u8f6c\u53d1"},l.a.createElement(r["AnchorLink"],{to:"#refs-\u8f6c\u53d1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Refs \u8f6c\u53d1"),l.a.createElement("p",null,"Ref \u8f6c\u53d1\u662f\u4e00\u9879\u5c06 ref \u81ea\u52a8\u5730\u901a\u8fc7\u7ec4\u4ef6\u4f20\u9012\u5230\u5176\u4e00\u5b50\u7ec4\u4ef6\u7684\u6280\u5de7\u3002"),l.a.createElement("h2",{id:"\u8f6c\u53d1-refs-\u5230-dom-\u7ec4\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u8f6c\u53d1-refs-\u5230-dom-\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8f6c\u53d1 refs \u5230 DOM \u7ec4\u4ef6"),l.a.createElement("p",null,"\u8003\u8651\u8fd9\u4e2a\u6e32\u67d3\u539f\u751f DOM \u5143\u7d20 ",l.a.createElement("code",null,"button")," \u7684 ",l.a.createElement("code",null,"FancyButton")," \u7ec4\u4ef6\uff1a"),l.a.createElement(u["a"],{code:'function FancyButton(props) {\n  return (\n    <button className="FancyButton">\n      {props.children}\n    </button>\n  );\n}',lang:"jsx"}),l.a.createElement("p",null,"React \u7ec4\u4ef6\u9690\u85cf\u5176\u5b9e\u73b0\u7ec6\u8282\uff0c\u5305\u62ec\u5176\u6e32\u67d3\u7ed3\u679c\u3002\u5176\u4ed6\u4f7f\u7528 ",l.a.createElement("code",null,"FancyButton")," \u7684\u7ec4\u4ef6\u901a\u5e38\u4e0d\u9700\u8981\u83b7\u53d6\u5185\u90e8\u7684 DOM \u5143\u7d20 button \u7684 ref\u3002\u8fd9\u5f88\u597d\uff0c\u56e0\u4e3a\u8fd9\u9632\u6b62\u7ec4\u4ef6\u8fc7\u5ea6\u4f9d\u8d56\u5176\u4ed6\u7ec4\u4ef6\u7684 DOM \u7ed3\u6784\u3002"),l.a.createElement("p",null,"\u867d\u7136\u8fd9\u79cd\u5c01\u88c5\u5bf9\u7c7b\u4f3c ",l.a.createElement("code",null,"FeedStory")," \u6216 ",l.a.createElement("code",null,"Comment")," \u8fd9\u6837\u7684\u5e94\u7528\u7ea7\u7ec4\u4ef6\u662f\u7406\u60f3\u7684\uff0c\u4f46\u5176\u5bf9 ",l.a.createElement("code",null,"FancyButton")," \u6216 ",l.a.createElement("code",null,"MyTextInput")," \u8fd9\u6837\u7684\u9ad8\u53ef\u590d\u7528\u201c\u53f6\u201d\u7ec4\u4ef6\u6765\u8bf4\u53ef\u80fd\u662f\u4e0d\u65b9\u4fbf\u7684\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u503e\u5411\u4e8e\u5728\u6574\u4e2a\u5e94\u7528\u4e2d\u4ee5\u4e00\u79cd\u7c7b\u4f3c\u5e38\u89c4 DOM ",l.a.createElement("code",null,"button")," \u548c ",l.a.createElement("code",null,"input")," \u7684\u65b9\u5f0f\u88ab\u4f7f\u7528\uff0c\u5e76\u4e14\u8bbf\u95ee\u5176 DOM \u8282\u70b9\u5bf9\u7ba1\u7406\u7126\u70b9\uff0c\u9009\u4e2d\u6216\u52a8\u753b\u6765\u8bf4\u662f\u4e0d\u53ef\u907f\u514d\u7684\u3002"),l.a.createElement(c["a"],{type:"info"},"Ref \u8f6c\u53d1\u662f\u4e00\u4e2a\u53ef\u9009\u7279\u6027\uff0c\u5176\u5141\u8bb8\u67d0\u4e9b\u7ec4\u4ef6\u63a5\u6536 ref\uff0c\u5e76\u5c06\u5176\u5411\u4e0b\u4f20\u9012\uff08\u6362\u53e5\u8bdd\u8bf4\uff0c\u201c\u8f6c\u53d1\u201d\u5b83\uff09\u7ed9\u5b50\u7ec4\u4ef6\u3002"),l.a.createElement("p",null,"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",l.a.createElement("code",null,"FancyButton")," \u4f7f\u7528 ",l.a.createElement("code",null,"React.forwardRef")," \u6765\u83b7\u53d6\u4f20\u9012\u7ed9\u5b83\u7684 ",l.a.createElement("code",null,"ref"),"\uff0c\u7136\u540e\u8f6c\u53d1\u5230\u5b83\u6e32\u67d3\u7684 DOM ",l.a.createElement("code",null,"button"),"\uff1a")),l.a.createElement(o["default"],t["refs_forward-demo"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"\u8fd9\u6837\uff0c\u4f7f\u7528 ",l.a.createElement("code",null,"FancyButton")," \u7684\u7ec4\u4ef6\u53ef\u4ee5\u83b7\u53d6\u5e95\u5c42 DOM \u8282\u70b9 ",l.a.createElement("code",null,"button")," \u7684 ref \uff0c\u5e76\u5728\u5fc5\u8981\u65f6\u8bbf\u95ee\uff0c\u5c31\u50cf\u5176\u76f4\u63a5\u4f7f\u7528 DOM ",l.a.createElement("code",null,"button")," \u4e00\u6837\u3002"),l.a.createElement("p",null,"\u4ee5\u4e0b\u662f\u5bf9\u4e0a\u8ff0\u793a\u4f8b\u53d1\u751f\u60c5\u51b5\u7684\u9010\u6b65\u89e3\u91ca\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u6211\u4eec\u901a\u8fc7\u8c03\u7528 ",l.a.createElement("code",null,"useRef")," \u521b\u5efa\u4e86\u4e00\u4e2a React ref \u5e76\u5c06\u5176\u8d4b\u503c\u7ed9 ",l.a.createElement("code",null,"ref")," \u53d8\u91cf\u3002"),l.a.createElement("li",null,"\u6211\u4eec\u901a\u8fc7\u6307\u5b9a ",l.a.createElement("code",null,"ref")," \u4e3a JSX \u5c5e\u6027\uff0c\u5c06\u5176\u5411\u4e0b\u4f20\u9012\u7ed9 ",l.a.createElement("code",null,"<FancyButton ref=","{","ref","}",">"),"\u3002"),l.a.createElement("li",null,"React \u4f20\u9012 ",l.a.createElement("code",null,"ref")," \u7ed9 ",l.a.createElement("code",null,"forwardRef")," \u5185\u51fd\u6570 ",l.a.createElement("code",null,"(props, ref) => ..."),"\uff0c\u4f5c\u4e3a\u5176\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"),l.a.createElement("li",null,"\u6211\u4eec\u5411\u4e0b\u8f6c\u53d1\u8be5 ",l.a.createElement("code",null,"ref")," \u53c2\u6570\u5230 ",l.a.createElement("code",null,"<button ref=","{","ref","}",">"),"\uff0c\u5c06\u5176\u6307\u5b9a\u4e3a JSX \u5c5e\u6027\u3002"),l.a.createElement("li",null,"\u5f53 ref \u6302\u8f7d\u5b8c\u6210\uff0c",l.a.createElement("code",null,"ref.current")," \u5c06\u6307\u5411 ",l.a.createElement("code",null,"<button>")," DOM \u8282\u70b9\u3002")),l.a.createElement("h2",{id:"\u6ce8\u610f"},l.a.createElement(r["AnchorLink"],{to:"#\u6ce8\u610f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6ce8\u610f"),l.a.createElement("p",null,"\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",l.a.createElement("code",null,"ref")," \u53ea\u5728\u4f7f\u7528 ",l.a.createElement("code",null,"React.forwardRef")," \u5b9a\u4e49\u7ec4\u4ef6\u65f6\u5b58\u5728\u3002\u5e38\u89c4\u51fd\u6570\u548c class \u7ec4\u4ef6\u4e0d\u63a5\u6536 ",l.a.createElement("code",null,"ref")," \u53c2\u6570\uff0c\u4e14 ",l.a.createElement("code",null,"props")," \u4e2d\u4e5f\u4e0d\u5b58\u5728 ",l.a.createElement("code",null,"ref"),"\u3002"),l.a.createElement("p",null,"Ref \u8f6c\u53d1\u4e0d\u4ec5\u9650\u4e8e DOM \u7ec4\u4ef6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8f6c\u53d1 refs \u5230 class \u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u3002"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:n})}},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));var l=n("bCY9");n.d(t,"b",(function(){return l["a"]}))},"M/Q6":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);n("x8cr");function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}t["a"]=function(e){return l.a.createElement("div",r({className:"__dumi-default-alert"},e))}},x8cr:function(e,t,n){}}]);