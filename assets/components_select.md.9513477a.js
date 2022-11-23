import{h as F,k as d,r as c,o as D,g as i,w as e,a as o,b as s,c as A,F as E,d as l,e as C}from"./app.a8191600.js";const h=F({__name:"demo1",setup(u){const n=d("");return(y,a)=>{const t=c("f-option"),r=c("f-select");return D(),i(r,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=p=>n.value=p),placeholder:"\u8BF7\u9009\u62E9\u2026\u2026"},{default:e(()=>[o(t,{value:1},{default:e(()=>[s("\u9999\u8549")]),_:1}),o(t,{value:2},{default:e(()=>[s("\u82F9\u679C")]),_:1}),o(t,{value:3},{default:e(()=>[s("\u54C8\u5BC6\u74DC")]),_:1}),o(t,{value:4},{default:e(()=>[s("\u6A31\u6843")]),_:1})]),_:1},8,["modelValue"])}}}),f=F({__name:"demo2",setup(u){const n=d("");return(y,a)=>{const t=c("f-option"),r=c("f-select");return D(),i(r,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=p=>n.value=p),placeholder:"\u8BF7\u9009\u62E9\u2026\u2026"},{default:e(()=>[o(t,{label:"\u9999\u8549",value:1}),o(t,{value:2},{default:e(()=>[s("\u82F9\u679C")]),_:1}),o(t,{value:3}),o(t,{label:"\u6A31\u6843"},{default:e(()=>[s("\u6A31\u6843")]),_:1})]),_:1},8,["modelValue"])}}}),_=F({__name:"demo3",setup(u){const n=d("");return(y,a)=>{const t=c("f-option"),r=c("f-select");return D(),A(E,null,[o(r,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=p=>n.value=p),placeholder:"\u8BF7\u9009\u62E9\u2026\u2026",disabled:""},{default:e(()=>[o(t,{value:1},{default:e(()=>[s("\u9999\u8549")]),_:1}),o(t,{value:2},{default:e(()=>[s("\u82F9\u679C")]),_:1}),o(t,{value:3},{default:e(()=>[s("\u54C8\u5BC6\u74DC")]),_:1}),o(t,{value:4},{default:e(()=>[s("\u6A31\u6843")]),_:1})]),_:1},8,["modelValue"]),o(r,{modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=p=>n.value=p),placeholder:"\u8BF7\u9009\u62E9\u2026\u2026",style:{"margin-left":"30px"}},{default:e(()=>[o(t,{value:1},{default:e(()=>[s("\u9999\u8549")]),_:1}),o(t,{value:2,disabled:""},{default:e(()=>[s("\u82F9\u679C")]),_:1}),o(t,{value:3},{default:e(()=>[s("\u54C8\u5BC6\u74DC")]),_:1}),o(t,{value:4},{default:e(()=>[s("\u6A31\u6843")]),_:1})]),_:1},8,["modelValue"])],64)}}}),v=C('<h1 id="select-\u9009\u62E9\u5668" tabindex="-1">Select \u9009\u62E9\u5668 <a class="header-anchor" href="#select-\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><p>\u5230\u4E86\u9700\u8981\u9009\u62E9\u7684\u65F6\u95F4\u4E86</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/select" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/select.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C\uFF0C<code>f-option</code> \u7EC4\u4EF6\u5B9A\u4E49\u6BCF\u4E00\u4E2A\u9009\u9879\u5185\u5BB9</p>',5),b=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"value"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"placeholder"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u8BF7\u9009\u62E9\u2026\u2026"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u9999\u8549"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u82F9\u679C"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u54C8\u5BC6\u74DC"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"4"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u6A31\u6843"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"setup"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"ref"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#A6ACCD"}}," value "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"ref"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),m=C('<h2 id="\u4F18\u5148\u7EA7" tabindex="-1">\u4F18\u5148\u7EA7 <a class="header-anchor" href="#\u4F18\u5148\u7EA7" aria-hidden="true">#</a></h2><p><code>label</code> \u7684\u5C55\u793A\u65B9\u5F0F\u5206\u4E3A\u4E24\u79CD\uFF1A<code>label</code> \u5C5E\u6027\u548C\u63D2\u69FD\uFF0C\u90FD\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u4F46\u6709\u4E9B\u65F6\u5019\u8FD9\u4E9B\u5C5E\u6027\u53EF\u80FD\u90FD\u5B58\u5728\u6216\u8005\u90FD\u4E0D\u5B58\u5728\uFF0C\u6240\u4EE5 label \u7684\u4F18\u5148\u7EA7\u4E3A\uFF1A<code>slot &gt; label &gt; value</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C slot \u548C label \u90FD\u4E0D\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u5C55\u793A value</p><p><code>value</code> \u4E5F\u6709\u7740\u4E0A\u9762\u7684\u60C5\u51B5\uFF0C\u4F18\u5148\u7EA7\u5173\u7CFB\u4E3A <code>value &gt; label &gt; slot</code></p>',3),B=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"value"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"placeholder"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u8BF7\u9009\u62E9\u2026\u2026"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u9999\u8549"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u82F9\u679C"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"label"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u6A31\u6843"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u6A31\u6843"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"setup"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"ref"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#A6ACCD"}}," value "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"ref"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),g=l("h2",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[s("\u7981\u7528\u72B6\u6001 "),l("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#")],-1),k=l("p",null,[l("code",null,"disabled"),s(" \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668\uFF0C\u4E5F\u53EF\u4EE5\u7981\u7528\u6307\u5B9A\u9009\u9879")],-1),x=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"value"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"placeholder"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u8BF7\u9009\u62E9\u2026\u2026"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"disabled"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u9999\u8549"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u82F9\u679C"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u54C8\u5BC6\u74DC"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"4"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u6A31\u6843"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"value"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"placeholder"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"\u8BF7\u9009\u62E9\u2026\u2026"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"style"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"margin-left: 30px"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u9999\u8549"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"disabled"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u82F9\u679C"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u54C8\u5BC6\u74DC"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":value"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"4"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"\u6A31\u6843"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-option"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"f-select"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"setup"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"ref"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#A6ACCD"}}," value "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"ref"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"''"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),S=C(`<h2 id="select-attributes" tabindex="-1">Select Attributes <a class="header-anchor" href="#select-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model / modelValue</code></td><td>\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>width</code></td><td>\u81EA\u5B9A\u4E49\u5BBD\u5EA6</td><td>string / number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>name</code></td><td>\u539F\u751F name \u5C5E\u6027</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>placeholder</code></td><td>\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>clear</code></td><td>\u662F\u5426\u53EF\u6E05\u9664</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table></div><h2 id="select-slots" tabindex="-1">Select Slots <a class="header-anchor" href="#select-slots" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9ED8\u8BA4\u63D2\u5165\u7684\u9009\u9879\u5185\u5BB9</td></tr></tbody></table></div><h2 id="option-attributes" tabindex="-1">Option Attributes <a class="header-anchor" href="#option-attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>value</code></td><td>\u9009\u9879\u7684\u503C</td><td>string / number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>label</code></td><td>\u9009\u9879\u7684\u6807\u7B7E\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u4E0E value \u76F8\u540C</td><td>string / number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr><tr><td><code>disabled</code></td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr></tbody></table></div><h2 id="option-slots" tabindex="-1">Option Slots <a class="header-anchor" href="#option-slots" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9ED8\u8BA4\u63D2\u5165\u7684\u6807\u7B7E\u5185\u5BB9</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">SelectInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">SelectPropsType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">SelectModelValueType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">SelectSetValueInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">SelectProvideInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">SelectChildrenInterface</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">OptionInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">OptionPropsType</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,12),V={href:"https://github.com/Tyh2001",target:"_blank"},N=JSON.parse('{"title":"Select \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4F18\u5148\u7EA7","slug":"\u4F18\u5148\u7EA7","link":"#\u4F18\u5148\u7EA7","children":[]},{"level":2,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001","link":"#\u7981\u7528\u72B6\u6001","children":[]},{"level":2,"title":"Select Attributes","slug":"select-attributes","link":"#select-attributes","children":[]},{"level":2,"title":"Select Slots","slug":"select-slots","link":"#select-slots","children":[]},{"level":2,"title":"Option Attributes","slug":"option-attributes","link":"#option-attributes","children":[]},{"level":2,"title":"Option Slots","slug":"option-slots","link":"#option-slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/select.md","lastUpdated":1669185836000}'),I={name:"components/select.md"},T=F({...I,setup(u){return(n,y)=>{const a=c("vp-demo"),t=c("f-avatar");return D(),A("div",null,[v,o(a,{open:!1},{source:e(()=>[o(h)]),default:e(()=>[b]),_:1}),m,o(a,{open:!1},{source:e(()=>[o(f)]),default:e(()=>[B]),_:1}),g,k,o(a,{open:!1},{source:e(()=>[o(_)]),default:e(()=>[x]),_:1}),S,l("a",V,[o(t,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{N as __pageData,T as default};