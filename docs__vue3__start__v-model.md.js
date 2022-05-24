(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{"1ASq":function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),o=t("dEAq"),r=t("M/Q6"),c=t("H1Ra"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"v-model\u7684\u53d8\u66f4"},a.a.createElement(o["AnchorLink"],{to:"#v-model\u7684\u53d8\u66f4","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"v-model\u7684\u53d8\u66f4"),a.a.createElement("p",null,"\u7528\u4e8e\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c",a.a.createElement("code",null,"v-model")," prop \u548c\u4e8b\u4ef6\u9ed8\u8ba4\u540d\u79f0\u5df2\u66f4\u6539\u3002"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("strong",null,"prop\uff1a")," ",a.a.createElement("code",null,"value")," -> ",a.a.createElement("code",null,"modelValue"),"\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("strong",null,"\u4e8b\u4ef6\uff1a")," ",a.a.createElement("code",null,"input")," -> ",a.a.createElement("code",null,"update:modelValue"),"\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"v-bind")," \u7684 ",a.a.createElement("code",null,".sync")," \u4fee\u9970\u7b26\u548c\u7ec4\u4ef6\u7684 ",a.a.createElement("code",null,"model")," \u9009\u9879\u5df2\u79fb\u9664\uff0c\u53ef\u5728 ",a.a.createElement("code",null,"v-model")," \u4e0a\u52a0\u4e00\u4e2a\u53c2\u6570\u4ee3\u66ff\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"\u73b0\u5728\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\u4f7f\u7528\u591a\u4e2a ",a.a.createElement("code",null,"v-model")," \u7ed1\u5b9a\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,"\u73b0\u5728\u53ef\u4ee5\u81ea\u5b9a\u4e49 ",a.a.createElement("code",null,"v-model")," \u4fee\u9970\u7b26\u3002"))),a.a.createElement("h2",{id:"2x-\u8bed\u6cd5"},a.a.createElement(o["AnchorLink"],{to:"#2x-\u8bed\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"2.x \u8bed\u6cd5"),a.a.createElement("h3",{id:"\u57fa\u672c\u8bed\u6cd5"},a.a.createElement(o["AnchorLink"],{to:"#\u57fa\u672c\u8bed\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u8bed\u6cd5"),a.a.createElement("p",null,"\u5728 2.x \u4e2d\uff0c\u5728\u7ec4\u4ef6\u4e0a\u4f7f\u7528 ",a.a.createElement("code",null,"v-model")," \u76f8\u5f53\u4e8e\u7ed1\u5b9a ",a.a.createElement("code",null,"value")," prop \u5e76\u89e6\u53d1 ",a.a.createElement("code",null,"input")," \u4e8b\u4ef6\uff1a"),a.a.createElement(c["a"],{code:'<ChildComponent v-model="show" />\n\n\x3c!-- \u662f\u4ee5\u4e0b\u7684\u7b80\u5199: --\x3e\n\n<ChildComponent :value="show" @input="show = $event" />',lang:"html"}),a.a.createElement("p",null,a.a.createElement("code",null,"Children")," \u7ec4\u4ef6\u7ed1\u5b9a ",a.a.createElement("code",null,"v-model")," \u4f20\u9012 ",a.a.createElement("code",null,"show")," \u7ed9\u5b50\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u901a\u8fc7 ",a.a.createElement("code",null,"value")," prop\u5f97\u5230\u7236\u7ec4\u4ef6\u4f20\u9012\u8fc7\u6765\u7684 ",a.a.createElement("code",null,"show"),"\uff0c\u901a\u8fc7 ",a.a.createElement("code",null,"emit")," \u5f97\u5230\u7236\u7ec4\u4ef6\u4f20\u9012\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6 ",a.a.createElement("code",null,"input"),"\u3002"),a.a.createElement("p",null,"\u5b50\u7ec4\u4ef6\u901a\u8fc7 ",a.a.createElement("code",null,"this.$emit()")," \u89e6\u53d1 ",a.a.createElement("code",null,"input")," \u4e8b\u4ef6\uff0c\u5e76\u5411 ",a.a.createElement("code",null,"input")," \u4e8b\u4ef6\u4f20\u9012\u53c2\u6570\u3002"),a.a.createElement("p",null,a.a.createElement("strong",null,"Father\u7ec4\u4ef6")),a.a.createElement(c["a"],{code:'<template>\n  <div>\n    <h1>\u7236\u7ec4\u4ef6</h1>\n    <Children v-model="show" />\n  </div>\n</template>\n\n<script>\nimport Children from "./Children.vue";\nexport default {\n  name: "Father",\n  components: {\n    Children,\n  },\n  data() {\n    return {\n      show: "\u663e\u793a",\n    };\n  },\n};\n<\/script>',lang:"html"}),a.a.createElement("p",null,a.a.createElement("strong",null,"Children\u7ec4\u4ef6")),a.a.createElement(c["a"],{code:'<template>\n  <div>\n    <div>{{ value }}</div>\n    <button @click="handleChange">\u70b9\u51fb\u9690\u85cf</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: String,\n      require: true,\n      default: "\u663e\u793a",\n    },\n  },\n  emits: ["input"],\n  data() {\n    return {};\n  },\n  methods: {\n    handleChange() {\n      // \u62a5\u9519\uff1a\u901a\u8fc7props\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684\u503c\uff0c\u4e0d\u80fd\u5728\u5b50\u7ec4\u4ef6\u5185\u90e8\u4fee\u6539props\u3002\n      // this.value = "\u9690\u85cf";\n\n      // \u901a\u8fc7\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u6765\u4fee\u6539\u7236\u7ec4\u4ef6\u7684\u503c\n      this.$emit("input", "\u9690\u85cf");\n    },\n  },\n};\n<\/script>',lang:"html"}),a.a.createElement("h3",{id:"\u5355\u5411\u6570\u636e\u6d41"},a.a.createElement(o["AnchorLink"],{to:"#\u5355\u5411\u6570\u636e\u6d41","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5355\u5411\u6570\u636e\u6d41"),a.a.createElement("p",null,"\u6839\u636e\u5355\u5411\u6570\u636e\u6d41\u7684\u89c4\u5219\uff0c\u5b50\u7ec4\u4ef6\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539\u7236\u7ec4\u4ef6\u4f20\u9012\u7684 ",a.a.createElement("code",null,"props"),"\u3002\u4f8b\u5982\uff1a",a.a.createElement("code",null,"this.value='\u9690\u85cf'"),"\u3002\u8fd9\u6837\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u4f1a\u62a5\u9519\uff1a",a.a.createElement("font",{"v-pre":"",color:"red"},'Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop\'s value. Prop being mutated: "value"\u3002')),a.a.createElement("p",null,"\u5fc5\u987b\u901a\u8fc7 ",a.a.createElement("code",null,"this.$emit()")," \u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u5e76\u901a\u8fc7\u4f20\u53c2\u8fdb\u884c\u4fee\u6539\u3002"),a.a.createElement("h3",{id:"\u66f4\u6539\u540d\u79f0"},a.a.createElement(o["AnchorLink"],{to:"#\u66f4\u6539\u540d\u79f0","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u6539\u540d\u79f0"),a.a.createElement("p",null,a.a.createElement("strong",null,"\u5982\u679c\u60f3\u8981\u66f4\u6539 ",a.a.createElement("code",null,"prop")," \u6216\u4e8b\u4ef6\u540d\u79f0\uff0c\u5219\u9700\u8981\u5728 ",a.a.createElement("code",null,"Children")," \u7ec4\u4ef6\u4e2d\u6dfb\u52a0 ",a.a.createElement("code",null,"model")," \u9009\u9879\uff1a")),a.a.createElement(c["a"],{code:'\x3c!-- ParentComponent.vue --\x3e\n\n<ChildComponent v-model="show" />',lang:"html"}),a.a.createElement(c["a"],{code:'<template>\n  <div>\n    <div>{{ title }}</div>\n    <button @click="handleChange">\u70b9\u51fb\u9690\u85cf</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  // model \u7528\u4e8e\u66f4\u6539 prop \u548c \u4e8b\u4ef6\u540d\u79f0\n  model: {\n    prop: "title",    // \u6b64\u65f6 value \u53d8\u6210\u4e86 title\n    event: "change",  // \u6b64\u65f6 input \u4e8b\u4ef6\u53d8\u6210\u4e86 change \u4e8b\u4ef6\n  },\n  props: {\n    title: {\n      type: String,\n      require: true,\n      default: "\u663e\u793a",\n    },\n  },\n  emits: ["change"],\n  data() {\n    return {};\n  },\n  methods: {\n    handleChange() {\n      // \u6b64\u65f6\u89e6\u53d1\u7684\u5c31\u5e94\u8be5\u662f\u66f4\u540d\u540e\u7684 change \u4e8b\u4ef6\uff0c\u800c\u4e0d\u662f input\u4e8b\u4ef6\n      this.$emit("change", "\u9690\u85cf");\n    },\n  },\n};\n<\/script>',lang:"html"}),a.a.createElement("p",null,"\u6240\u4ee5\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d ",a.a.createElement("code",null,"v-model")," \u662f\u4ee5\u4e0b\u7684\u7b80\u5199\uff1a"),a.a.createElement(c["a"],{code:'<ChildComponent :title="show" @change="show = $event" />',lang:"html"}),a.a.createElement("h3",{id:"\u4f7f\u7528-v-bindsync"},a.a.createElement(o["AnchorLink"],{to:"#\u4f7f\u7528-v-bindsync","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528 ",a.a.createElement("code",null,"v-bind.sync")),a.a.createElement("p",null,"\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u9700\u8981\u5bf9\u67d0\u4e2a ",a.a.createElement("code",null,"prop")," \u8fdb\u884c ",a.a.createElement("code",null,"\u53cc\u5411\u7ed1\u5b9a"),"\uff0c\u9664\u4e86\u7528 ",a.a.createElement("code",null,"v-model")," \u7684\u65b9\u5f0f\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u7528 ",a.a.createElement("code",null,"update:myPropName")," \u7684\u65b9\u5f0f\u629b\u51fa\u4e8b\u4ef6\u4ece\u800c\u8fbe\u5230\u53cc\u5411\u7ed1\u5b9a\u7684\u76ee\u7684\u3002"),a.a.createElement(c["a"],{code:"this.$emit('update:title', newValue)",lang:"js"}),a.a.createElement("p",null,"\u7136\u540e\u7236\u7ec4\u4ef6\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u76d1\u542c\u8be5\u4e8b\u4ef6\uff0c\u5e76\u66f4\u65b0\u672c\u5730\u7684 data property\u3002\u4f8b\u5982\uff1a"),a.a.createElement(c["a"],{code:'<ChildComponent :title="show" @update:title="show = $event" />',lang:"html"}),a.a.createElement("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",a.a.createElement("code",null,".sync")," \u4fee\u9970\u7b26\u6765\u7f29\u5199\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),a.a.createElement(c["a"],{code:'<ChildComponent :title.sync="show" />',lang:"html"}),a.a.createElement("p",null,"\u6848\u4f8b\uff1a"),a.a.createElement("p",null,a.a.createElement("strong",null,"Father\u7ec4\u4ef6")),a.a.createElement(c["a"],{code:'\x3c!-- \u7236\u7ec4\u4ef6 --\x3e\n<template>\n  <div>\n    <h1>\u7236\u7ec4\u4ef6</h1>\n    <Children :title.sync="show" />\n  </div>\n</template>\n\n<script>\nimport Children from "./Children.vue";\nexport default {\n  name: "Father",\n  components: {\n    Children,\n  },\n  data() {\n    return {\n      show: "\u663e\u793a",\n    };\n  },\n};\n<\/script>',lang:"html"}),a.a.createElement("p",null,a.a.createElement("strong",null,"Children\u7ec4\u4ef6")),a.a.createElement(c["a"],{code:'\x3c!-- \u5b50\u7ec4\u4ef6 --\x3e\n<template>\n  <div>\n    <div>{{ title }}</div>\n    <button @click="handleChange">\u70b9\u51fb\u9690\u85cf</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    title: {\n      type: String,\n      require: true,\n      default: "\u663e\u793a",\n    },\n  },\n  emits: ["update:title"],\n  data() {\n    return {};\n  },\n  methods: {\n    handleChange() {\n      // \u901a\u8fc7\u89e6\u53d1 update:title \u4e8b\u4ef6\u6765\u5b9e\u73b0 prop \u53cc\u5411\u7ed1\u5b9a\n      this.$emit("update:title", "\u9690\u85cf");\n    },\n  },\n};\n<\/script>',lang:"html"}),a.a.createElement("h2",{id:"3x-\u8bed\u6cd5"},a.a.createElement(o["AnchorLink"],{to:"#3x-\u8bed\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"3.x \u8bed\u6cd5"),a.a.createElement("h3",{id:"\u57fa\u672c\u8bed\u6cd5-1"},a.a.createElement(o["AnchorLink"],{to:"#\u57fa\u672c\u8bed\u6cd5-1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u8bed\u6cd5"),a.a.createElement("p",null,"\u5728 Vue3.x \u4e2d\uff0c\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0a\u7684 ",a.a.createElement("code",null,"v-model")," \u76f8\u5f53\u4e8e\u4f20\u9012\u4e86prop ",a.a.createElement("code",null,"modelValue")," \u548c\u4e8b\u4ef6 ",a.a.createElement("code",null,"update:modelValue"),"\u3002"),a.a.createElement("p",null,"\u5bf9\u6bd4 Vue2.x\u7684\u53d8\u66f4\uff1a",a.a.createElement("code",null,"value")," \u66f4\u6539\u4e3a\u4e86 ",a.a.createElement("code",null,"modelValue"),"\uff0c",a.a.createElement("code",null,"input")," \u4e8b\u4ef6\u66f4\u6539\u4e3a\u4e86 ",a.a.createElement("code",null,"update:modelValue"),"\u3002"),a.a.createElement(c["a"],{code:'<ChildComponent v-model="show" />\n\n\x3c!-- \u662f\u4ee5\u4e0b\u7684\u7b80\u5199: --\x3e\n\n<ChildComponent :modelValue="show" @update:modelValue="show = $event" />',lang:"html"}),a.a.createElement("p",null,a.a.createElement("code",null,"Father")," \u7ec4\u4ef6\u4e2d\u901a\u8fc7\u7ed9 ",a.a.createElement("code",null,"Children")," \u7ec4\u4ef6\u7ed1\u5b9a ",a.a.createElement("code",null,"v-model"),"\uff0c\u5b50\u7ec4\u4ef6\u901a\u8fc7 ",a.a.createElement("code",null,"setup")," \u51fd\u6570\u5f97\u5230\uff0c",a.a.createElement("code",null,"props")," \u548c ",a.a.createElement("code",null,"emit"),"\u51fd\u6570\u3002 props \u4e2d\u7684 ",a.a.createElement("code",null,"modelValue")," \u5c31\u662f Vue2.x \u4e2d ",a.a.createElement("code",null,"v-model")," \u7684 ",a.a.createElement("code",null,"value"),"\uff0cemit \u89e6\u53d1\u7684 ",a.a.createElement("code",null,"update:modelValue")," \u5c31\u662f ",a.a.createElement("code",null,"input"),"\u3002"),a.a.createElement("p",null,a.a.createElement("strong",null,"Father\u7ec4\u4ef6")),a.a.createElement(c["a"],{code:"\x3c!-- \u7236\u7ec4\u4ef6 --\x3e\n<template>\n  <h1>{{ show }}</h1>\n  <Children v-model=\"show\" />\n</template>\n\n<script lang=\"ts\">\nimport Children from './Children.vue'\nimport { defineComponent, ref } from 'vue'\nexport default defineComponent({\n  components: {\n    Children,\n  },\n  setup() {\n    let show = ref('\u663e\u793a')\n    return {\n      show,\n    }\n  },\n})\n<\/script>",lang:"html"}),a.a.createElement("p",null,a.a.createElement("strong",null,"Children\u7ec4\u4ef6")),a.a.createElement(c["a"],{code:"\x3c!-- Children\u7ec4\u4ef6 --\x3e\n<template>\n  <h1>{{ modelValue }}</h1>\n  <button @click=\"handleChange\">\u70b9\u51fb\u9690\u85cf</button>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from 'vue'\nexport default defineComponent({\n  props: {\n    modelValue: {\n      type: String,\n      require: true,\n      default: '\u663e\u793a',\n    },\n  },\n  emits: ['update:modelValue'],\n  setup(props, { emit }) {\n    const handleChange = () => {\n      // \u4e0d\u80fd\u76f4\u63a5\u4fee\u6539props\uff0cprops\u662f\u53ea\u8bfb\u7684\n      // \u62a5\u9519\uff1aSet operation on key \"modelValue\" failed: target is readonly.\n      // props.modelValue = '\u9690\u85cf'\n\n      // \u901a\u8fc7\u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u4fee\u6539\n      emit('update:modelValue', '\u9690\u85cf')\n    }\n    return {\n      handleChange,\n    }\n  },\n})\n<\/script>",lang:"html"}),a.a.createElement("h3",{id:"props\u53ea\u8bfb"},a.a.createElement(o["AnchorLink"],{to:"#props\u53ea\u8bfb","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"props\u53ea\u8bfb"),a.a.createElement("p",null,"\u6839\u636e\u5355\u5411\u6570\u636e\u6d41\u7684\u89c4\u5219\uff0c\u5b50\u7ec4\u4ef6\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539\u7236\u7ec4\u4ef6\u4f20\u9012\u7684 props\u3002\u4f8b\u5982\uff1a",a.a.createElement("code",null,"props.modelValue = '\u9690\u85cf'")," \u3002\u8fd9\u6837\u6d4f\u89c8\u5668\u63a7\u5236\u53f0\u4f1a\u62a5\u9519\uff1a",a.a.createElement("font",{"v-pre":"",color:"red"},'Set operation on key "modelValue" failed: target is readonly.')),a.a.createElement(r["a"],{type:"warning"},"Vue3.x\u4e2d props \u662f\u53ea\u8bfb\u7684\u3002"),a.a.createElement("p",null,"\u5fc5\u987b\u901a\u8fc7 ",a.a.createElement("code",null,"emit('update:modelValue', value)")," \u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u5e76\u901a\u8fc7\u4f20\u53c2\u8fdb\u884c\u4fee\u6539\u3002"),a.a.createElement("h3",{id:"v-model-\u53c2\u6570"},a.a.createElement(o["AnchorLink"],{to:"#v-model-\u53c2\u6570","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),a.a.createElement("code",null,"v-model")," \u53c2\u6570"),a.a.createElement("p",null,"\u82e5\u9700\u8981\u66f4\u6539 ",a.a.createElement("code",null,"model")," \u7684\u540d\u79f0\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u4e3a ",a.a.createElement("code",null,"v-model")," \u4f20\u9012\u4e00\u4e2a\u53c2\u6570\uff0c\u4ee5\u4f5c\u4e3a\u7ec4\u4ef6\u5185 ",a.a.createElement("code",null,"model")," \u9009\u9879\u7684\u66ff\u4ee3\uff1a"),a.a.createElement(c["a"],{code:'<ChildComponent v-model:title="show" />\n\n\x3c!-- \u662f\u4ee5\u4e0b\u7684\u7b80\u5199: --\x3e\n\n<ChildComponent :title="show" @update:title="show = $event" />',lang:"html"}),a.a.createElement(c["a"],{code:"\x3c!-- Father\u7ec4\u4ef6 --\x3e\n<Children v-model:title=\"show\" />\n\n\x3c!-- Children\u7ec4\u4ef6 --\x3e\n<template>\n  <h1>{{ title }}</h1>\n  <button @click=\"handleChange\">\u70b9\u51fb\u9690\u85cf</button>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from 'vue'\nexport default defineComponent({\n  props: {\n    title: {\n      type: String,\n      require: true,\n      default: '\u663e\u793a',\n    },\n  },\n  emits: ['update:title'],\n  setup(props, { emit }) {\n    const handleChange = () => {\n      emit('update:title', '\u9690\u85cf')\n    }\n    return {\n      handleChange,\n    }\n  },\n})\n<\/script>",lang:"html"}),a.a.createElement("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u7ed9\u5b50\u7ec4\u4ef6\u7ed1\u5b9a ",a.a.createElement("code",null,'v-model:title="show"')," \u540e\uff0c\u5b50\u7ec4\u4ef6\u4e2d ",a.a.createElement("code",null,"modelValue")," \u5c31\u53ef\u4ee5\u6539\u53d8\u4e3a ",a.a.createElement("code",null,"title"),"\uff0c\u4ece\u800c\u81ea\u5b9a\u4e49\u4e8b\u4ef6 ",a.a.createElement("code",null,"update:modelValue")," \u4e5f\u76f8\u7ee7\u6539\u53d8\u6210\u4e86 ",a.a.createElement("code",null,"update:title"),"\u3002"),a.a.createElement("p",null,"\u8fd9\u4e5f\u53ef\u4ee5\u4f5c\u4e3a ",a.a.createElement(o["AnchorLink"],{to:"/vue3/start/v-model#%E4%BD%BF%E7%94%A8-v-bindsync"},".sync")," \u4fee\u9970\u7b26\u7684\u66ff\u4ee3\uff0c\u800c\u4e14\u5141\u8bb8\u6211\u4eec\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0a\u4f7f\u7528\u591a\u4e2a ",a.a.createElement("code",null,"v-model"),"\u3002"),a.a.createElement(c["a"],{code:'<ChildComponent v-model:title="show" v-model:content="text" />\n\n\x3c!-- \u662f\u4ee5\u4e0b\u7684\u7b80\u5199\uff1a --\x3e\n\n<ChildComponent\n  :title="show"\n  @update:title="show = $event"\n  :content="text"\n  @update:content="text = $event"\n/>',lang:"html"}),a.a.createElement("h3",{id:"v-model-\u4fee\u9970\u7b26"},a.a.createElement(o["AnchorLink"],{to:"#v-model-\u4fee\u9970\u7b26","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),a.a.createElement("code",null,"v-model")," \u4fee\u9970\u7b26"),a.a.createElement("p",null,"\u9664\u4e86\u50cf ",a.a.createElement("code",null,".trim")," \u8fd9\u6837\u7684 2.x \u786c\u7f16\u7801\u7684 ",a.a.createElement("code",null,"v-model")," \u4fee\u9970\u7b26\u5916\uff0c\u73b0\u5728 3.x \u8fd8\u652f\u6301\u81ea\u5b9a\u4e49\u4fee\u9970\u7b26\uff1a"),a.a.createElement(c["a"],{code:'<ChildComponent v-model.capitalize="show" />',lang:"html"}),a.a.createElement("p",null,"\u793a\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4fee\u9970\u7b26 ",a.a.createElement("code",null,"capitalize"),"\uff0c\u5b83\u5c06 ",a.a.createElement("code",null,"v-model")," \u7ed1\u5b9a\u63d0\u4f9b\u7684\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u5927\u5199\u3002"),a.a.createElement(c["a"],{code:'\x3c!-- Father\u7ec4\u4ef6 --\x3e\n<Children v-model.capitalize="helloWorld" />\n\n\x3c!-- Children\u7ec4\u4ef6 --\x3e\n<template>\n  <input type="text" placeholder="\u8bf7\u8f93\u5165" :value="modelValue" @input="handleChange" />\n</template>\n\n<script lang="ts">\nimport { defineComponent } from \'vue\'\nexport default defineComponent({\n  props: {\n    modelValue: {\n      type: String,\n      require: true,\n      default: \'helloWorld\',\n    },\n    // \u6dfb\u52a0\u5230\u7ec4\u4ef6 v-model \u7684\u4fee\u9970\u7b26\u5c06\u901a\u8fc7 modelModifiers prop \u63d0\u4f9b\u7ed9\u7ec4\u4ef6\u3002\n    modelModifiers: {\n      type: Object,\n      default: () => ({}),\n    },\n  },\n  emits: [\'update:modelValue\'],\n  setup(props, { emit }) {\n    console.log(props.modelModifiers.capitalize) // \u8f93\u51fa\uff1atrue\n\n    // input\u76d1\u542c\n    const handleChange = (event: Event) => {\n      let value = (event.target as HTMLInputElement).value\n      // \u5982\u679c\u7ed1\u5b9a\u4e86\u4fee\u9970\u7b26 capitalize \u5c31\u5c06 value \u9996\u5b57\u6bcd\u5927\u5199\n      if (props.modelModifiers.capitalize) {\n        value = value.charAt(0).toUpperCase() + value.slice(1)\n      }\n      emit(\'update:modelValue\', value)\n    }\n    return {\n      handleChange,\n    }\n  },\n})\n<\/script>',lang:"html"}),a.a.createElement("p",null,"\u6dfb\u52a0\u5230\u7ec4\u4ef6 ",a.a.createElement("code",null,"v-model")," \u7684\u4fee\u9970\u7b26\u5c06\u901a\u8fc7 ",a.a.createElement("code",null,"modelModifiers")," prop \u63d0\u4f9b\u7ed9\u7ec4\u4ef6\u3002\u5728\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u9ed8\u8ba4\u4e3a\u7a7a\u5bf9\u8c61\u7684 ",a.a.createElement("code",null,"modelModifiers")," prop\u3002"),a.a.createElement("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5f53\u7ec4\u4ef6\u7684 ",a.a.createElement("code",null,"setup()")," \u89e6\u53d1\u65f6\uff0c",a.a.createElement("code",null,"modelModifiers")," prop \u4f1a\u5305\u542b ",a.a.createElement("code",null,"capitalize"),"\uff0c\u4e14\u5176\u503c\u4e3a ",a.a.createElement("code",null,"true"),"\u2014\u2014\u56e0\u4e3a ",a.a.createElement("code",null,"capitalize")," \u88ab\u8bbe\u7f6e\u5728\u4e86\u5199\u4e3a ",a.a.createElement("code",null,'v-model.capitalize="title"')," \u7684 ",a.a.createElement("code",null,"v-model")," \u7ed1\u5b9a\u4e0a\u3002"),a.a.createElement("p",null,a.a.createElement("strong",null,"\u5bf9\u4e8e\u5e26\u53c2\u6570\u7684 ",a.a.createElement("code",null,"v-model")," \u7684\u4fee\u9970\u7b26\u7ed1\u5b9a\uff0c\u751f\u6210\u7684 prop \u540d\u79f0\u5c06\u4e3a ",a.a.createElement("code",null,'arg + "Modifiers"'),"\uff1a")),a.a.createElement(c["a"],{code:'<Children v-model:title.capitalize="helloWorld" />',lang:"html"}),a.a.createElement(c["a"],{code:'\x3c!-- Children\u7ec4\u4ef6 --\x3e\n<template>\n  <input type="text" placeholder="\u8bf7\u8f93\u5165" :value="title" @input="handleChange" />\n</template>\n\n<script lang="ts">\nimport { defineComponent } from \'vue\'\nexport default defineComponent({\n  props: {\n    title: {\n      type: String,\n      require: true,\n      default: \'helloWorld\',\n    },\n    // \u5bf9\u4e8e\u5e26\u53c2\u6570\u7684 v-model \u7684\u4fee\u9970\u7b26\u7ed1\u5b9a\uff0c\u751f\u6210\u7684 prop \u540d\u79f0\u5c06\u4e3a arg + "Modifiers"\uff1a\n    titleModifiers: {\n      type: Object,\n      default: () => ({}),\n    },\n  },\n  emits: [\'update:title\'],\n  setup(props, { emit }) {\n    console.log(props.titleModifiers.capitalize) // \u8f93\u51fa\uff1atrue\n\n    // input\u76d1\u542c\n    const handleChange = (event: Event) => {\n      let value = (event.target as HTMLInputElement).value\n      // \u5982\u679c\u7ed1\u5b9a\u4e86\u4fee\u9970\u7b26 capitalize \u5c31\u5c06 value \u9996\u5b57\u6bcd\u5927\u5199\n      if (props.titleModifiers.capitalize) {\n        value = value.charAt(0).toUpperCase() + value.slice(1)\n      }\n      emit(\'update:title\', value)\n    }\n    return {\n      handleChange,\n    }\n  },\n})\n<\/script>',lang:"html"})))}));n["default"]=e=>{var n=a.a.useContext(o["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:t})}},"M/Q6":function(e,n,t){"use strict";var l=t("q1tI"),a=t.n(l);t("x8cr");function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},o.apply(this,arguments)}n["a"]=function(e){return a.a.createElement("div",o({className:"__dumi-default-alert"},e))}},x8cr:function(e,n,t){}}]);