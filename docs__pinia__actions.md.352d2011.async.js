(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"5m/p":function(e,n,t){"use strict";t("4eJr");var a,c=t("3LgI"),r=t("qqnG"),o=t("XSw6"),l=t("q1tI"),s=t.n(l),i=t("vOnD"),u=i["a"].div(a||(a=Object(r["a"])(["\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 40px;\n  color: #333;\n  background-color: #fff;\n  transition: color 0.3s;\n  text-align: center;\n  font-size: 22px;\n  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;\n  &:hover {\n    color: #4569d4;\n  }\n"]))),m=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"],{style:{right:"16px"}},s.a.createElement(u,null,s.a.createElement(o["a"],null))));n["a"]=m},"7tHx":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),c=t.n(a),r=t("dEAq"),o=(t("8T1Q"),t("5m/p")),l=(t("CVji"),t("lxxy"),t("H1Ra")),s=c.a.memo((e=>{e.demos;return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(o["a"],null),c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"actions"},c.a.createElement(r["AnchorLink"],{to:"#actions","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"Actions"),c.a.createElement("p",null,c.a.createElement("code",null,"Actions")," \u76f8\u5f53\u4e8e\u7ec4\u4ef6\u4e2d\u7684 ",c.a.createElement("code",null,"\u65b9\u6cd5"),"\uff0c\u53ef\u4ee5\u7528 ",c.a.createElement("code",null,"defineStore()")," \u4e2d\u7684 ",c.a.createElement("code",null,"actions")," \u5c5e\u6027\u5b9a\u4e49\uff0c\u975e\u5e38\u9002\u5408\u5b9a\u4e49\u4e1a\u52a1\u903b\u8f91\uff0c",c.a.createElement("strong",null,"\u5e76\u4e14\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65"),"\u3002"),c.a.createElement("h2",{id:"\u5b9a\u4e49-actions"},c.a.createElement(r["AnchorLink"],{to:"#\u5b9a\u4e49-actions","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5b9a\u4e49 ",c.a.createElement("code",null,"actions")),c.a.createElement("p",null,"\u5c06 ",c.a.createElement("code",null,"user.ts")," \u4fee\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff1a\u6dfb\u52a0 ",c.a.createElement("code",null,"actions")," \u5c5e\u6027\uff0c\u5b9a\u4e49 ",c.a.createElement("code",null,"increment")," \u548c ",c.a.createElement("code",null,"asyncIncrement")," \u65b9\u6cd5\uff0c\u5206\u522b\u4e3a\u540c\u6b65\u548c\u5f02\u6b65\u3002"),c.a.createElement(l["a"],{code:"// user.ts\nimport { defineStore } from 'pinia';\nexport default defineStore('user', {\n  state: () => {\n    // \u5b9a\u4e49\u6570\u636e\n    return {\n      title: 'Pinia',\n      userInfo: {\n        name: '\u5f20\u4e09',\n        age: 30,\n      },\n      count: 0,\n    };\n  },\n  actions: {\n    // \u7d2f\u8ba1 count\uff0c \u901a\u8fc7 this \u8bbf\u95ee\u5230 state\n    // \u540c\u6b65\n    increment() {\n      this.count++;\n    },\n    // \u5f02\u6b65\n    asyncIncrement() {\n      setTimeout(() => this.count++, 500);\n    },\n  },\n});",lang:"ts"}),c.a.createElement("p",null,"\u4f7f\u7528 ",c.a.createElement("code",null,"async/await")," \u7684\u8bed\u6cd5\uff1a"),c.a.createElement(l["a"],{code:"// user.ts\nimport { defineStore } from 'pinia';\nexport default defineStore('user', {\n  state: () => {\n    // \u5b9a\u4e49\u6570\u636e\n    return {\n      title: 'Pinia',\n      userInfo: {\n        name: '\u5f20\u4e09',\n        age: 30,\n      },\n      count: 0,\n    };\n  },\n  actions: {\n    async login(account, pwd) {\n      const { data } = await api.login(account, pwd);\n      return data;\n    },\n  },\n});",lang:"ts"}),c.a.createElement("h2",{id:"\u4f7f\u7528-actions"},c.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528-actions","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528 ",c.a.createElement("code",null,"actions")),c.a.createElement("p",null,"\u8ba1\u6570\u5668 ",c.a.createElement("code",null,"count")," \u7d2f\u52a0\uff1a"),c.a.createElement(l["a"],{code:'\x3c!-- Father\u7ec4\u4ef6 --\x3e\n<template>\n  \x3c!-- \u70b9\u51fb\u6309\u94ae\u540e count \u7d2f\u52a0 --\x3e\n  <h1>\u8ba1\u6570\u5668\uff1a{{ user.count }}</h1>\n  <button @click="user.increment">\u70b9\u51fb\u7d2f\u8ba1\u8ba1\u6570\u5668</button>\n  <button @click="user.asyncIncrement">\u5f02\u6b65\u70b9\u51fb\u7d2f\u8ba1\u8ba1\u6570\u5668</button>\n</template>\n<script setup lang="ts">\n  import useUserStore from \'../store/user\';\n  const user = useUserStore();\n<\/script>',lang:"html"}),c.a.createElement("h2",{id:"\u8bbf\u95ee\u5176\u4ed6-actions"},c.a.createElement(r["AnchorLink"],{to:"#\u8bbf\u95ee\u5176\u4ed6-actions","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u8bbf\u95ee\u5176\u4ed6 ",c.a.createElement("code",null,"actions")),c.a.createElement("p",null,c.a.createElement("code",null,"actions")," \u95f4\u7684\u76f8\u4e92\u8c03\u7528\uff0c\u76f4\u63a5\u7528 ",c.a.createElement("code",null,"this")," \u8bbf\u95ee\u5373\u53ef\u3002"),c.a.createElement(l["a"],{code:"// user.ts\nimport { defineStore } from 'pinia';\nexport default defineStore('user', {\n  state: () => {\n    // \u5b9a\u4e49\u6570\u636e\n    return {\n      title: 'Pinia',\n      userInfo: {\n        name: '\u5f20\u4e09',\n        age: 30,\n      },\n      count: 0,\n    };\n  },\n  actions: {\n    // \u7d2f\u8ba1 count\uff0c \u901a\u8fc7 this \u8bbf\u95ee\u5230 state\n    // \u540c\u6b65\n    increment() {\n      this.count++;\n    },\n    // \u5f02\u6b65\n    asyncIncrement() {\n      // \u901a\u8fc7 this \u8bbf\u95ee increment \u65b9\u6cd5\n      setTimeout(() => this.increment(), 500);\n    },\n  },\n});",lang:"ts"}),c.a.createElement("h2",{id:"\u8bbf\u95ee\u5176\u4ed6-store-\u7684-actions"},c.a.createElement(r["AnchorLink"],{to:"#\u8bbf\u95ee\u5176\u4ed6-store-\u7684-actions","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u8bbf\u95ee\u5176\u4ed6 ",c.a.createElement("code",null,"store")," \u7684 ",c.a.createElement("code",null,"actions")),c.a.createElement("p",null,"\u5728 ",c.a.createElement("code",null,"actions")," \u91cc\u8c03\u7528\u5176\u4ed6 ",c.a.createElement("code",null,"store")," \u91cc\u7684 ",c.a.createElement("code",null,"actions")," \u4e5f\u6bd4\u8f83\u7b80\u5355\uff0c\u5f15\u5165\u5bf9\u5e94\u7684 ",c.a.createElement("code",null,"store")," \u540e\u5373\u53ef\u8bbf\u95ee\u5176\u5185\u90e8\u7684\u65b9\u6cd5\u4e86\u3002"),c.a.createElement(l["a"],{code:"// user.ts\nimport { useOtherStore } from './other-store';\nimport { defineStore } from 'pinia';\nexport default defineStore('user', {\n  actions: {\n    async login(account, pwd) {\n      const { data } = await api.login(account, pwd);\n      const useOther = useOtherStore();\n      useOther.setData(data); // \u8c03\u7528 aother-store \u91cc\u7684 actions \u65b9\u6cd5\n      return data;\n    },\n  },\n});",lang:"ts"}),c.a.createElement("h2",{id:"\u4f20\u9012\u53c2\u6570\u7ed9-actions"},c.a.createElement(r["AnchorLink"],{to:"#\u4f20\u9012\u53c2\u6570\u7ed9-actions","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u4f20\u9012\u53c2\u6570\u7ed9 ",c.a.createElement("code",null,"actions")),c.a.createElement("p",null,"\u8981\u60f3\u7ed9 ",c.a.createElement("code",null,"actions")," \u4f20\u9012\u53c2\u6570\uff0c\u50cf\u666e\u901a\u65b9\u6cd5\u90a3\u6837\u4f20\u9012\u5c31\u884c ",c.a.createElement("code",null,"fn(\u53c2\u6570)"),"\u3002"),c.a.createElement(l["a"],{code:"// user.ts\nimport { defineStore } from 'pinia';\nexport default defineStore('user', {\n  state: () => {\n    // \u5b9a\u4e49\u6570\u636e\n    return {\n      title: 'Pinia',\n      userInfo: {\n        name: '\u5f20\u4e09',\n        age: 30,\n      },\n      count: 0,\n    };\n  },\n  actions: {\n    // \u5b9e\u73b0 count \u52a0 payload\n    increment(payload: number) {\n      this.count += payload;\n    },\n  },\n});",lang:"ts"}),c.a.createElement("p",null,"\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff1a"),c.a.createElement(l["a"],{code:'\x3c!-- Father\u7ec4\u4ef6 --\x3e\n<template>\n  \x3c!-- \u70b9\u51fb\u6309\u94ae\u540e count \u6bcf\u6b21\u7d2f\u52a0 5 --\x3e\n  <h1>\u8ba1\u6570\u5668\uff1a{{ user.count }}</h1>\n  <button @click="user.increment(5)">\u70b9\u51fb\u8ba1\u6570\u5668\u52a05</button>\n</template>\n<script setup lang="ts">\n  import useUserStore from \'../store/user\';\n  const user = useUserStore();\n<\/script>',lang:"html"}),c.a.createElement("h2",{id:"\u8ba2\u9605-actions"},c.a.createElement(r["AnchorLink"],{to:"#\u8ba2\u9605-actions","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u8ba2\u9605 ",c.a.createElement("code",null,"actions")),c.a.createElement("p",null,"\u4f7f\u7528 ",c.a.createElement("code",null,"store.$onAction()")," \u8ba2\u9605 ",c.a.createElement("code",null,"actions"),"\uff0c\u4f20\u9012\u7ed9\u5b83\u7684\u56de\u8c03\u51fd\u6570\u5728 ",c.a.createElement("code",null,"actions")," \u4e4b\u524d\u6267\u884c\uff0c ",c.a.createElement("code",null,"after")," \u5728 ",c.a.createElement("code",null,"actions")," resolves \u4e4b\u540e\u6267\u884c\uff0c",c.a.createElement("code",null,"onError")," \u5728 ",c.a.createElement("code",null,"actions")," \u629b\u51fa\u5f02\u5e38\u548c\u9519\u8bef\u7684\u65f6\u5019\u6267\u884c\u3002"),c.a.createElement(l["a"],{code:'\x3c!-- Father\u7ec4\u4ef6 --\x3e\n<template>\n  \x3c!-- \u70b9\u51fb\u6309\u94ae\u540e count \u6bcf\u6b21\u7d2f\u52a0 5 --\x3e\n  <h1>\u8ba1\u6570\u5668\uff1a{{ user.count }}</h1>\n  <button @click="user.increment(5)">\u70b9\u51fb\u8ba1\u6570\u5668\u52a05</button>\n  \x3c!-- \u70b9\u51fb\u540e\u518d\u6267\u884c increment \u65b9\u6cd5\u76d1\u542c\u4e0d\u4f1a\u6267\u884c --\x3e\n  <button @click="clearSubscribe">\u624b\u52a8\u6e05\u9664actions\u76d1\u542c</button>\n</template>\n<script setup lang="ts">\n  import useUserStore from \'../store/user\';\n  const user = useUserStore();\n\n  // \u8ba2\u9605 actions\n  const unsubscribe = user.$onAction(\n    ({\n      name, // action \u7684\u540d\u5b57\uff0c\u5982\uff1aincrement\n      store, // \u6570\u636e\u4ed3\u5e93\n      args, // \u4f20\u9012\u7ed9 action \u7684\u53c2\u6570\n      after, // \u5728action resolves\u4e4b\u540e\u6267\u884c\n      onError, // \u5728action\u629b\u51fa\u5f02\u5e38\u548c\u9519\u8bef\u7684\u65f6\u5019\u6267\u884c\u3002\n    }) => {\n      const startTime = Date.now();\n\n      console.log(\'\u6570\u636e\u4ed3\u5e93\uff1a\', store);\n\n      console.log(`\u6267\u884c\u7684actions\u65b9\u6cd5\u540d\uff1a "${name}" \u548c \u53c2\u6570\uff1a [${args.join(\', \')}].`);\n\n      after((result) => {\n        console.log(\n          `\u5b8c\u6210\u6267\u884c\u7684actions\u65b9\u6cd5\u540d "${name}"\u3002 \u7528\u65f6\uff1a ${\n            Date.now() - startTime\n          }ms.\\nResult: ${result}.`,\n        );\n      }),\n        onError((error) => {\n          console.warn(`\u5931\u8d25 "${name}" after ${Date.now() - startTime}ms.\\nError: ${error}.`);\n        });\n    },\n  );\n\n  // \u624b\u52a8\u5220\u9664\u76d1\u542c\n  const clearSubscribe = () => unsubscribe();\n<\/script>',lang:"html"}),c.a.createElement("p",null,c.a.createElement("code",null,"$onAction")," \u4e00\u822c\u662f\u5728\u7ec4\u4ef6\u7684 ",c.a.createElement("code",null,"setup")," \u5efa\u7acb\uff0c\u5b83\u4f1a\u968f\u7740\u7ec4\u4ef6\u7684 ",c.a.createElement("code",null,"unmounted")," \u800c\u81ea\u52a8\u53d6\u6d88\u3002\u5982\u679c\u4f60\u4e0d\u60f3\u8ba9\u5b83\u53d6\u6d88\u8ba2\u9605\uff0c\u53ef\u4ee5\u5c06\u7b2c\u4e8c\u4e2a\u53c2\u6570\u8bbe\u7f6e\u4e3a ",c.a.createElement("code",null,"true"),"\uff1a"),c.a.createElement(l["a"],{code:"const unsubscribe = user.$onAction(callback, true);",lang:"ts"}),c.a.createElement("h2",{id:"\u5728-options-api-\u4e2d\u4f7f\u7528"},c.a.createElement(r["AnchorLink"],{to:"#\u5728-options-api-\u4e2d\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5728 ",c.a.createElement("code",null,"options API")," \u4e2d\u4f7f\u7528"),c.a.createElement("p",null,"\u4f7f\u7528 ",c.a.createElement("code",null,"mapActions")," \u8bbf\u95ee ",c.a.createElement("code",null,"store")," \u4e2d\u7684\u6570\u636e\u3002"),c.a.createElement(l["a"],{code:"import { mapActions } from 'pinia'\nimport useUserStore from '../store/user'\n\nexport default {\n  methods: {\n    ...mapActions(useUserStore, ['increment'])\n    ...mapActions(useUserStore, { myOwnName: 'doubleCounter' }),\n  },\n}",lang:"ts"}))))}));n["default"]=e=>{var n=c.a.useContext(r["context"]),t=n.demos;return c.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),c.a.createElement(s,{demos:t})}},"8T1Q":function(e,n,t){"use strict";t("fOrg"),t("+KLJ"),t("q1tI")},CVji:function(e,n,t){"use strict";t("+BJd"),t("mr32"),t("q1tI")},lxxy:function(e,n,t){"use strict";t("tU7J");var a=t("wFql");t("q1tI"),a["a"].Text}}]);