(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{"5m/p":function(e,n,t){"use strict";t("4eJr");var l,a=t("3LgI"),c=t("qqnG"),r=t("XSw6"),o=t("q1tI"),s=t.n(o),m=t("vOnD"),d=m["a"].div(l||(l=Object(c["a"])(["\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 40px;\n  color: #333;\n  background-color: #fff;\n  transition: color 0.3s;\n  text-align: center;\n  font-size: 22px;\n  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;\n  &:hover {\n    color: #4569d4;\n  }\n"]))),i=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(a["a"],{style:{right:"16px"}},s.a.createElement(d,null,s.a.createElement(r["a"],null))));n["a"]=i},"8T1Q":function(e,n,t){"use strict";t("fOrg"),t("+KLJ"),t("q1tI")},CVji:function(e,n,t){"use strict";t("+BJd"),t("mr32"),t("q1tI")},JVVv:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),c=t("dEAq"),r=(t("8T1Q"),t("5m/p")),o=(t("CVji"),t("lxxy"),t("M/Q6")),s=t("H1Ra"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(r["a"],null),a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"style-\u7279\u6027"},a.a.createElement(c["AnchorLink"],{to:"#style-\u7279\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"style \u7279\u6027"),a.a.createElement("h2",{id:"style-scoped"},a.a.createElement(c["AnchorLink"],{to:"#style-scoped","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),a.a.createElement("code",null,"<style scoped>")),a.a.createElement("h3",{id:"\u539f\u7406"},a.a.createElement(c["AnchorLink"],{to:"#\u539f\u7406","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u539f\u7406"),a.a.createElement("p",null,"\u5f53 ",a.a.createElement("code",null,"<style>")," \u6807\u7b7e\u5e26\u6709 ",a.a.createElement("code",null,"scoped")," attribute \u7684\u65f6\u5019\uff0c\u5b83\u7684 CSS \u53ea\u4f1a\u5e94\u7528\u5230\u5f53\u524d\u7ec4\u4ef6\u7684\u5143\u7d20\u4e0a\u3002\u8fd9\u7c7b\u4f3c\u4e8e ",a.a.createElement("code",null,"Shadow DOM")," \u4e2d\u7684\u6837\u5f0f\u5c01\u88c5\u3002\u5b83\u5e26\u6709\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\uff0c\u4e0d\u8fc7\u597d\u5904\u662f\u4e0d\u9700\u8981\u4efb\u4f55\u7684 polyfill\u3002\u5b83\u662f\u901a\u8fc7 PostCSS \u8f6c\u6362\u4ee5\u4e0b\u5185\u5bb9\u6765\u5b9e\u73b0\u7684\uff1a"),a.a.createElement(s["a"],{code:'<style scoped>\n  .example {\n    color: red;\n  }\n</style>\n\n<template>\n  <div class="example">hi</div>\n</template>',lang:"html"}),a.a.createElement("p",null,"\u7f16\u8bd1\u540e\uff1a"),a.a.createElement(s["a"],{code:'<style>\n  .example[data-v-f3f3eg9] {\n    color: red;\n  }\n</style>\n\n<template>\n  <div class="example" data-v-f3f3eg9>hi</div>\n</template>',lang:"html"}),a.a.createElement("h3",{id:"\u6df1\u5ea6\u9009\u62e9\u5668"},a.a.createElement(c["AnchorLink"],{to:"#\u6df1\u5ea6\u9009\u62e9\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6df1\u5ea6\u9009\u62e9\u5668"),a.a.createElement("p",null,"\u5904\u4e8e ",a.a.createElement("code",null,"scoped")," \u6837\u5f0f\u4e2d\u7684\u9009\u62e9\u5668\u5982\u679c\u60f3\u8981\u505a\u66f4\u201c\u6df1\u5ea6\u201d\u7684\u9009\u62e9\uff0c\u4e5f\u5373\uff1a\u5f71\u54cd\u5230\u5b50\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",a.a.createElement("code",null,":deep()")," \u8fd9\u4e2a\u4f2a\u7c7b\uff1a"),a.a.createElement(s["a"],{code:"<style scoped>\n  .a :deep(.b) {\n    color: red;\n  }\n</style>",lang:"html"}),a.a.createElement("p",null,"\u7f16\u8bd1\u540e\uff1a"),a.a.createElement(s["a"],{code:"<style>\n  .a[data-v-f13b4d11] .b {\n    color: red;\n  }\n</style>",lang:"html"}),a.a.createElement(o["a"],{type:"info"},"\u901a\u8fc7 v-html \u521b\u5efa\u7684 DOM \u5185\u5bb9\u4e0d\u4f1a\u88ab\u4f5c\u7528\u57df\u6837\u5f0f\u5f71\u54cd\uff0c\u4f46\u4f60\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u6df1\u5ea6\u9009\u62e9\u5668\u6765\u8bbe\u7f6e\u5176\u6837\u5f0f\u3002"),a.a.createElement("h3",{id:"\u63d2\u69fd\u9009\u62e9\u5668"},a.a.createElement(c["AnchorLink"],{to:"#\u63d2\u69fd\u9009\u62e9\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u69fd\u9009\u62e9\u5668"),a.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f5c\u7528\u57df\u6837\u5f0f\u4e0d\u4f1a\u5f71\u54cd\u5230 ",a.a.createElement("code",null,"<slot/>")," \u6e32\u67d3\u51fa\u6765\u7684\u5185\u5bb9\uff0c\u56e0\u4e3a\u5b83\u4eec\u88ab\u8ba4\u4e3a\u662f\u7236\u7ec4\u4ef6\u6240\u6301\u6709\u5e76\u4f20\u9012\u8fdb\u6765\u7684\u3002\u4f7f\u7528 ",a.a.createElement("code",null,":slotted")," \u4f2a\u7c7b\u4ee5\u786e\u5207\u5730\u5c06\u63d2\u69fd\u5185\u5bb9\u4f5c\u4e3a\u9009\u62e9\u5668\u7684\u76ee\u6807\uff1a"),a.a.createElement(s["a"],{code:"<style scoped>\n  :slotted(div) {\n    color: red;\n  }\n</style>",lang:"html"}),a.a.createElement("h3",{id:"\u5168\u5c40\u9009\u62e9\u5668"},a.a.createElement(c["AnchorLink"],{to:"#\u5168\u5c40\u9009\u62e9\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u9009\u62e9\u5668"),a.a.createElement("p",null,"\u5982\u679c\u60f3\u8ba9\u5176\u4e2d\u4e00\u4e2a\u6837\u5f0f\u89c4\u5219\u5e94\u7528\u5230\u5168\u5c40\uff0c\u6bd4\u8d77\u53e6\u5916\u521b\u5efa\u4e00\u4e2a ",a.a.createElement("code",null,"<style>"),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",a.a.createElement("code",null,":global")," \u4f2a\u7c7b\u6765\u5b9e\u73b0\uff1a"),a.a.createElement(s["a"],{code:"<style scoped>\n  :global(.red) {\n    color: red;\n  }\n</style>",lang:"html"}),a.a.createElement("p",null,"\u7f16\u8bd1\u540e\uff1a"),a.a.createElement(s["a"],{code:"<style>\n  .red {\n    color: red;\n  }\n</style>",lang:"html"}),a.a.createElement("h3",{id:"\u6df7\u5408\u4f7f\u7528\u5c40\u90e8\u4e0e\u5168\u5c40\u6837\u5f0f"},a.a.createElement(c["AnchorLink"],{to:"#\u6df7\u5408\u4f7f\u7528\u5c40\u90e8\u4e0e\u5168\u5c40\u6837\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6df7\u5408\u4f7f\u7528\u5c40\u90e8\u4e0e\u5168\u5c40\u6837\u5f0f"),a.a.createElement("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u540c\u65f6\u5305\u542b\u4f5c\u7528\u57df\u6837\u5f0f\u548c\u975e\u4f5c\u7528\u57df\u6837\u5f0f\uff1a"),a.a.createElement(s["a"],{code:"<style>\n  /* global styles */\n</style>\n\n<style scoped>\n  /* local styles */\n</style>",lang:"html"}),a.a.createElement("h3",{id:"\u4f5c\u7528\u57df\u6837\u5f0f\u6ce8\u610f\u4e8b\u9879"},a.a.createElement(c["AnchorLink"],{to:"#\u4f5c\u7528\u57df\u6837\u5f0f\u6ce8\u610f\u4e8b\u9879","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f5c\u7528\u57df\u6837\u5f0f\u6ce8\u610f\u4e8b\u9879"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("strong",null,"\u4f5c\u7528\u57df\u6837\u5f0f\u5e76\u6ca1\u6709\u6d88\u9664\u5bf9 CSS \u7c7b\u7684\u9700\u6c42"),"\u3002\u7531\u4e8e\u6d4f\u89c8\u5668\u6e32\u67d3\u5404\u79cd\u5404\u6837 CSS \u9009\u62e9\u5668\u7684\u65b9\u5f0f\uff0c",a.a.createElement("code",null,"p ","{"," color: red ","}")," \u7ed3\u5408\u4f5c\u7528\u57df\u6837\u5f0f\u4f7f\u7528\u65f6\u4f1a\u6162\u5f88\u591a\u500d (\u5373\uff0c\u5f53\u4e0e attribute \u9009\u62e9\u5668\u7ec4\u5408\u4f7f\u7528\u7684\u65f6\u5019)\u3002\u5982\u679c\u4f7f\u7528 class \u6216\u8005 id \u6765\u66ff\u4ee3\uff0c\u4f8b\u5982 ",a.a.createElement("code",null,".example ","{"," color: red ","}"),"\uff0c\u90a3\u4f60\u51e0\u4e4e\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u6027\u80fd\u7684\u635f\u5931\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("strong",null,"\u5c0f\u5fc3\u9012\u5f52\u7ec4\u4ef6\u4e2d\u7684\u540e\u4ee3\u9009\u62e9\u5668"),"\u3002\u5bf9\u4e8e\u4e00\u4e2a\u4f7f\u7528\u4e86 ",a.a.createElement("code",null,".a .b")," \u9009\u62e9\u5668\u7684\u6837\u5f0f\u89c4\u5219\u6765\u8bf4\uff0c\u5982\u679c\u5339\u914d\u5230 ",a.a.createElement("code",null,".a")," \u7684\u5143\u7d20\u5305\u542b\u4e86\u4e00\u4e2a\u9012\u5f52\u7684\u5b50\u7ec4\u4ef6\uff0c\u90a3\u4e48\u6240\u6709\u7684\u5728\u90a3\u4e2a\u5b50\u7ec4\u4ef6\u4e2d\u7684 ",a.a.createElement("code",null,".b")," \u90fd\u4f1a\u5339\u914d\u5230\u8fd9\u6761\u6837\u5f0f\u89c4\u5219\u3002"))),a.a.createElement("h2",{id:"style-module"},a.a.createElement(c["AnchorLink"],{to:"#style-module","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),a.a.createElement("code",null,"<style module>")),a.a.createElement("h3",{id:"\u539f\u7406-1"},a.a.createElement(c["AnchorLink"],{to:"#\u539f\u7406-1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u539f\u7406"),a.a.createElement("p",null,a.a.createElement("code",null,"<style module>")," \u6807\u7b7e\u4f1a\u88ab\u7f16\u8bd1\u4e3a ",a.a.createElement(c["Link"],{to:"https://github.com/css-modules/css-modules"},"CSS Modules")," \u5e76\u4e14\u5c06\u751f\u6210\u7684 CSS \u7c7b\u4f5c\u4e3a ",a.a.createElement("code",null,"$style")," \u5bf9\u8c61\u7684\u952e\u66b4\u9732\u7ed9\u7ec4\u4ef6\uff1a"),a.a.createElement(s["a"],{code:'<template>\n  <p :class="$style.red">Hello</p>\n</template>\n\n<style module>\n  .red {\n    color: red;\n  }\n</style>',lang:"html"}),a.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u6ce8\u5165\u540d\u79f0"},a.a.createElement(c["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u6ce8\u5165\u540d\u79f0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u6ce8\u5165\u540d\u79f0"),a.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u7ed9 ",a.a.createElement("code",null,"module")," attribute \u4e00\u4e2a\u503c\u6765\u81ea\u5b9a\u4e49\u6ce8\u5165\u7684\u7c7b\u5bf9\u8c61\u7684 property \u952e\uff1a"),a.a.createElement(s["a"],{code:'<template>\n  <p :class="classes.red">red</p>\n</template>\n\n<style module="classes">\n  .red {\n    color: red;\n  }\n</style>',lang:"html"}),a.a.createElement("h3",{id:"\u4e0e\u7ec4\u5408\u5f0f-api-\u4e00\u540c\u4f7f\u7528"},a.a.createElement(c["AnchorLink"],{to:"#\u4e0e\u7ec4\u5408\u5f0f-api-\u4e00\u540c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e0e\u7ec4\u5408\u5f0f API \u4e00\u540c\u4f7f\u7528"),a.a.createElement("p",null,"\u6ce8\u5165\u7684\u7c7b\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"useCssModule")," API \u5728 ",a.a.createElement("code",null,"setup()")," \u548c ",a.a.createElement("code",null,"<script setup>")," \u4e2d\u4f7f\u7528\u3002\u5bf9\u4e8e\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u6ce8\u5165\u540d\u79f0\u7684 ",a.a.createElement("code",null,"<style module>")," \u6a21\u5757\uff0c",a.a.createElement("code",null,"useCssModule")," \u63a5\u6536\u4e00\u4e2a\u5bf9\u5e94\u7684 ",a.a.createElement("code",null,"module")," attribute \u503c\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"),a.a.createElement(s["a"],{code:'<script setup lang="ts">\n  import { useCssModule } from \'vue\';\n  const css = useCssModule();\n  console.log(css); // { blue: "_blue_13cse_5", red: "_red_13cse_2"}\n<\/script>\n\n<style module>\n  .red {\n    color: red;\n  }\n  .blue {\n    color: blue;\n  }\n</style>',lang:"html"}),a.a.createElement("h2",{id:"\u72b6\u6001\u9a71\u52a8\u7684\u52a8\u6001-css"},a.a.createElement(c["AnchorLink"],{to:"#\u72b6\u6001\u9a71\u52a8\u7684\u52a8\u6001-css","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001\u9a71\u52a8\u7684\u52a8\u6001 CSS"),a.a.createElement("p",null,"\u5355\u6587\u4ef6\u7ec4\u4ef6\u7684 ",a.a.createElement("code",null,"<style>")," \u6807\u7b7e\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"v-bind")," \u8fd9\u4e00 CSS \u51fd\u6570\u5c06 CSS \u7684\u503c\u5173\u8054\u5230\u52a8\u6001\u7684\u7ec4\u4ef6\u72b6\u6001\u4e0a\uff0c\u6709\u4e86\u8fd9\u4e00\u7279\u6027\uff0c",a.a.createElement("strong",null,"\u53ef\u4ee5\u5c06\u5927\u91cf\u7684\u52a8\u6001\u6837\u5f0f\u901a\u8fc7\u72b6\u6001\u6765\u9a71\u52a8\u4e86\uff0c\u800c\u4e0d\u662f\u5199\u52a8\u6001\u7684 ",a.a.createElement("code",null,"class")," \u7c7b\u540d\u6216\u8005\u83b7\u53d6 ",a.a.createElement("code",null,"dom")," \u6765\u52a8\u6001\u8bbe\u7f6e\u4e86"),"\u3002"),a.a.createElement(s["a"],{code:"<script setup lang=\"ts\">\n  import { ref } from 'vue';\n  const color = ref('red');\n  // 2m \u540e\u53d8\u6210\u84dd\u8272\n  setTimeout(() => (color.value = 'blue'), 2000);\n<\/script>\n\n<template>\n  <p>hello</p>\n</template>\n\n<style scoped>\n  p {\n    color: v-bind(color);\n  }\n</style>",lang:"html"}),a.a.createElement("p",null,"\u7f16\u8bd1\u540e\uff1a"),a.a.createElement("p",null,a.a.createElement("strong",null,"JS")),a.a.createElement(s["a"],{code:"/* Analyzed bindings: {\n  \"ref\": \"setup-const\",\n  \"color\": \"setup-ref\"\n} */\nimport { useCssVars as _useCssVars, defineComponent as _defineComponent } from 'vue';\nimport { openBlock as _openBlock, createElementBlock as _createElementBlock } from 'vue';\n\nimport { ref } from 'vue';\n\nconst __sfc__ = /*#__PURE__*/ _defineComponent({\n  setup(__props) {\n    _useCssVars((_ctx) => ({\n      // \u53ef\u4ee5\u770b\u5230\uff0c\u7f16\u8bd1\u540e\u7684\u503c \u548c \u4e00\u4e2a hash \u503c\u6620\u5c04\uff0c\u5e76\u4e14\u5177\u5907\u54cd\u5e94\u5f0f\uff0c css \u7684 var \u4fbf\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4e2a hash \u6620\u5c04\u7684\u503c\n      'f13b4d11-color': color.value,\n    }));\n\n    const color = ref('red');\n    // 2m \u540e\u53d8\u6210\u84dd\u8272\n    setTimeout(() => (color.value = 'blue'), 2000);\n\n    return (_ctx, _cache) => {\n      return _openBlock(), _createElementBlock('p', null, 'hello');\n    };\n  },\n});\n__sfc__.__scopeId = 'data-v-f13b4d11';\n__sfc__.__file = 'App.vue';\nexport default __sfc__;",lang:"js"}),a.a.createElement("p",null,a.a.createElement("strong",null,"CSS")),a.a.createElement(s["a"],{code:"<style>\n  p[data-v-f13b4d11] {\n    color: var(--f13b4d11-color);\n  }\n</style>",lang:"html"}),a.a.createElement("p",null,"\u5b9e\u9645\u7684\u503c\u4f1a\u88ab\u7f16\u8bd1\u6210 ",a.a.createElement("code",null,"hash")," \u7684 CSS \u81ea\u5b9a\u4e49 property\uff0cCSS \u672c\u8eab\u4ecd\u7136\u662f\u9759\u6001\u7684\u3002",a.a.createElement("strong",null,"\u81ea\u5b9a\u4e49 property \u4f1a\u901a\u8fc7\u5185\u8054\u6837\u5f0f\u7684\u65b9\u5f0f\u5e94\u7528\u5230\u7ec4\u4ef6\u7684\u6839\u5143\u7d20\u4e0a\uff0c\u5e76\u4e14\u5728\u6e90\u503c\u53d8\u66f4\u7684\u65f6\u5019\u54cd\u5e94\u5f0f\u66f4\u65b0"),"\u3002"),a.a.createElement("p",null,"\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4f1a\u7ef4\u62a4\u4e00\u4efd ",a.a.createElement("code",null,"hash")," \u503c\u548c\u6e90\u503c\u7684\u6620\u5c04\uff0c",a.a.createElement("code",null,"hash")," \u503c\u7528\u4e8e css ",a.a.createElement("code",null,"var")," \u51fd\u6570\u83b7\u53d6\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c",a.a.createElement("code",null,"hash")," \u6620\u5c04\u6e90\u503c\u5e76\u4fdd\u7559\u54cd\u5e94\u5f0f\u3002"))))}));n["default"]=e=>{var n=a.a.useContext(c["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:t})}},"M/Q6":function(e,n,t){"use strict";var l=t("q1tI"),a=t.n(l);t("x8cr");function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},c.apply(this,arguments)}n["a"]=function(e){return a.a.createElement("div",c({className:"__dumi-default-alert"},e))}},lxxy:function(e,n,t){"use strict";t("tU7J");var l=t("wFql");t("q1tI"),l["a"].Text},x8cr:function(e,n,t){}}]);