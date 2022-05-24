(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{kDfI:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),o=t("dEAq"),s=t("H1Ra"),r=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"vuex-\u914d\u7f6e"},l.a.createElement(o["AnchorLink"],{to:"#vuex-\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Vuex \u914d\u7f6e"),l.a.createElement("h2",{id:"vuex-\u6301\u4e45\u5316"},l.a.createElement(o["AnchorLink"],{to:"#vuex-\u6301\u4e45\u5316","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Vuex \u6301\u4e45\u5316"),l.a.createElement("p",null,"\u539f\u59cb\u95ee\u9898\uff1a\u9875\u9762\u5237\u65b0\u540e\u5bfc\u81f4",l.a.createElement("code",null,"state"),"\u6570\u636e\u88ab\u521d\u59cb\u5316\u8fd8\u539f\u3002"),l.a.createElement("p",null,"\u63d2\u4ef6\u89e3\u51b3\uff1a",l.a.createElement("code",null,"vuex-persistedstate")),l.a.createElement(s["a"],{code:"yarn add vuex-persistedstate",lang:"bash"}),l.a.createElement("h2",{id:"mutations-\u4fee\u6539\u65e5\u5fd7"},l.a.createElement(o["AnchorLink"],{to:"#mutations-\u4fee\u6539\u65e5\u5fd7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"mutations \u4fee\u6539\u65e5\u5fd7"),l.a.createElement("p",null,"\u4f5c\u7528\uff1a\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u67e5\u770b\u63d0\u4ea4",l.a.createElement("code",null,"mutations"),"\u7684\u60c5\u51b5\u3002"),l.a.createElement("p",null,"\u6a21\u5757\uff1a",l.a.createElement("code",null,"vuex/dist/logger")),l.a.createElement(s["a"],{code:"import createLogger from 'vuex/dist/logger';",lang:"js"}),l.a.createElement("h2",{id:"\u6a21\u5757\u5316"},l.a.createElement(o["AnchorLink"],{to:"#\u6a21\u5757\u5316","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6a21\u5757\u5316"),l.a.createElement("p",null,"\u76ee\u5f55\u7ed3\u6784\uff1a"),l.a.createElement(s["a"],{code:"\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 main.js\n\u251c\u2500\u2500 api\n\u2502   \u2514\u2500\u2500 ... # \u62bd\u53d6\u51faAPI\u8bf7\u6c42\n\u251c\u2500\u2500 components\n\u2502   \u251c\u2500\u2500 App.vue\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 store\n    \u251c\u2500\u2500 index.js          # \u6211\u4eec\u7ec4\u88c5\u6a21\u5757\u5e76\u5bfc\u51fa store \u7684\u5730\u65b9\n    \u2514\u2500\u2500 modules           # \u6a21\u5757\u6587\u4ef6\u5939\n        \u251c\u2500\u2500 global.js     # \u8d2d\u7269\u8f66\u6a21\u5757\n        \u2514\u2500\u2500 products.js   # \u4ea7\u54c1\u6a21\u5757",lang:"text"}),l.a.createElement("p",null,"index.js \u914d\u7f6e\uff1a"),l.a.createElement(s["a"],{code:"import Vue from 'vue';\nimport Vuex from 'vuex';\n// \u6a21\u5757\nimport global from './modules/global';\nVue.use(Vuex);\nexport default new Vuex.Store({\n  // \u6dfb\u52a0\u6a21\u5757\n  modules: {\n    global,\n  },\n});",lang:"js"}),l.a.createElement("p",null,"\u6a21\u5757\u6587\u4ef6\u914d\u7f6e\uff1a"),l.a.createElement(s["a"],{code:"// global.js\nconst state = () => ({\n  // \u6570\u636e\u4ed3\u5e93\n  // menu\u5bbd\u5ea6\n  menuSize: 180,\n  // menu\u662f\u5426\u5c55\u5f00\n  isCollapse: false,\n});\n\n// \u6a21\u5757getters\nconst getters = {};\n// \u6a21\u5757actions\nconst actions = {};\n// \u6a21\u5757mutations\nconst mutations = {\n  // \u5207\u6362menu\u5bbd\u5ea6\n  changeMenuSize(state, payload) {\n    if (payload) {\n      state.menuSize = 180;\n      state.isCollapse = false;\n    } else {\n      state.menuSize = 64;\n      state.isCollapse = true;\n    }\n  },\n};\n\nexport default {\n  namespaced: true, // \u5f00\u542f\u547d\u540d\u7a7a\u95f4\n  // \u5bfc\u51fa\n  state,\n  getters,\n  actions,\n  mutations,\n};",lang:"js"}),l.a.createElement("h2",{id:"\u5b8c\u6574\u914d\u7f6e"},l.a.createElement(o["AnchorLink"],{to:"#\u5b8c\u6574\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b8c\u6574\u914d\u7f6e"),l.a.createElement(s["a"],{code:"// index.js\n\nimport Vue from 'vue';\nimport Vuex from 'vuex';\n// \u5f15\u5165\u6301\u4e45\u5316\u63d2\u4ef6\nimport createPersistedstate from 'vuex-persistedstate';\n// \u6a21\u5757\nimport global from './modules/global';\n// \u6253\u5370\u4fee\u6539\u65e5\u5fd7\nimport createLogger from 'vuex/dist/logger';\nVue.use(Vuex);\n\n// \u5224\u65ad\u662f\u5426\u4e3a\u5f00\u53d1\u73af\u5883--\u5f00\u53d1\u73af\u5883debug\u4e3atrue\nconst debug = process.env.NODE_ENV !== 'production';\n\n// \u7f13\u5b58\u914d\u7f6e\nconst createPersisted = createPersistedstate({\n  key: 'cache-vuex', // \u672c\u90fd\u5b58\u653e\u7684key\u540d\n  storage: window.sessionStorage, // \u5b58\u653e\u7684\u5730\u65b9sessionStorage\u6216\u8005localStorage\n  reducer(state) {\n    return {\n      global: {\n        // \u6a21\u5757global--\u8fd9\u6837\u624d\u80fd\u5b58\u653e\u5f00\u542f\u4e86\u547d\u540d\u7a7a\u95f4\u7684\u6a21\u5757\n        menuSize: state.global.menuSize, // \u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\n        isCollapse: state.global.isCollapse,\n      },\n    };\n  },\n});\n\nexport default new Vuex.Store({\n  // \u6dfb\u52a0\u6a21\u5757\n  modules: {\n    global,\n  },\n  // \u6dfb\u52a0\u63d2\u4ef6--\u662f\u5426\u5f00\u542f\u5f00\u53d1\u73af\u5883\u4fee\u6539\u65e5\u5fd7\u63d2\u4ef6\n  plugins: debug ? [createLogger(), createPersisted] : [createPersisted],\n});",lang:"js"})))}));n["default"]=e=>{var n=l.a.useContext(o["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(r,{demos:t})}}}]);