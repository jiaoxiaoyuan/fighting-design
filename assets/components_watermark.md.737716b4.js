import{_ as y,r as e,o as i,c as C,a as l,w as t,b as s,d as a,e as d,p as A,f as h}from"./app.f77839e3.js";const P=JSON.parse('{"title":"Watermark 水印","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"自定义文字样式","slug":"自定义文字样式","link":"#自定义文字样式","children":[]},{"level":2,"title":"自定义背景","slug":"自定义背景","link":"#自定义背景","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/watermark.md","lastUpdated":1671014008000}'),v={name:"components/watermark.md"},o=c=>(A("data-v-4a7c6ce6"),c=c(),h(),c),u=d('<h1 id="watermark-水印" tabindex="-1" data-v-4a7c6ce6>Watermark 水印 <a class="header-anchor" href="#watermark-水印" aria-hidden="true" data-v-4a7c6ce6>#</a></h1><p data-v-4a7c6ce6>据说水印容易让人讨厌？</p><ul data-v-4a7c6ce6><li data-v-4a7c6ce6><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/watermark" target="_blank" rel="noreferrer" data-v-4a7c6ce6>源代码</a></li><li data-v-4a7c6ce6><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/watermark.md" target="_blank" rel="noreferrer" data-v-4a7c6ce6>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-4a7c6ce6>基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true" data-v-4a7c6ce6>#</a></h2><p data-v-4a7c6ce6><code data-v-4a7c6ce6>content</code> 可以配置想要显示的文字内容，<code data-v-4a7c6ce6>height</code> 和 <code data-v-4a7c6ce6>width</code> 可以配置背景图片的尺寸</p>',5),_=o(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"content"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"机密文件"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":height"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"100"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":width"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"130"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"title"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"绝对机密"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-avatar"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"round"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"src"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/my.jpg"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"scoped"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-watermark"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"display"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," flex"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"justify-content"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"align-items"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"500px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-card"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"width"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"240px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),f=o(()=>a("h2",{id:"自定义文字样式",tabindex:"-1"},[s("自定义文字样式 "),a("a",{class:"header-anchor",href:"#自定义文字样式","aria-hidden":"true"},"#")],-1)),g=o(()=>a("p",null,[a("code",null,"font-color"),s(" 和 "),a("code",null,"font-size"),s(" 可以自定义你需要的文字大小和颜色")],-1)),m=o(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"content"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"机密文件"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":height"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"100"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},":width"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"130"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"font-color"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"red"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"font-size"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"16px"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"title"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"绝对机密"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-avatar"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"round"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"src"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/my.jpg"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"scoped"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-watermark"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"display"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," flex"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"justify-content"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"align-items"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"500px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-card"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"width"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"240px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),b=o(()=>a("h2",{id:"自定义背景",tabindex:"-1"},[s("自定义背景 "),a("a",{class:"header-anchor",href:"#自定义背景","aria-hidden":"true"},"#")],-1)),k=o(()=>a("p",null,[s("如果你不喜欢文字的背景，也可以使用你喜欢的自定义图片当作背景，只需要通过 "),a("code",null,"image"),s(" 传入一个地址即可")],-1)),E=o(()=>a("p",null,[a("code",null,"image"),s(" 的优先级高于 "),a("code",null,"content"),s(" 的水印内容")],-1)),x=o(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"image"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"title"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"绝对机密"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-avatar"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"round"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"src"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"https://tianyuhao.cn/images/auto/my.jpg"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"block"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"这是一个重要的文件"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-text"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-card"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-watermark"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"scoped"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-watermark"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"display"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," flex"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"justify-content"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"align-items"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"500px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-card"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"width"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"240px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"})])])],-1)),w=d(`<h2 id="attributes" tabindex="-1" data-v-4a7c6ce6>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-4a7c6ce6>#</a></h2><div class="vp-table__container" data-v-4a7c6ce6><table data-v-4a7c6ce6><thead data-v-4a7c6ce6><tr data-v-4a7c6ce6><th data-v-4a7c6ce6>参数</th><th data-v-4a7c6ce6>说明</th><th data-v-4a7c6ce6>类型</th><th data-v-4a7c6ce6>可选值</th><th data-v-4a7c6ce6>默认值</th></tr></thead><tbody data-v-4a7c6ce6><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>content</code></td><td data-v-4a7c6ce6>水印内容</td><td data-v-4a7c6ce6>string</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>——</td></tr><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>width</code></td><td data-v-4a7c6ce6>水印的宽度</td><td data-v-4a7c6ce6>number</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>280</td></tr><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>height</code></td><td data-v-4a7c6ce6>水印的高度</td><td data-v-4a7c6ce6>number</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>200</td></tr><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>fontSize</code></td><td data-v-4a7c6ce6>文字大小</td><td data-v-4a7c6ce6>string / number</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>30px</td></tr><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>fontColor</code></td><td data-v-4a7c6ce6>文字颜色</td><td data-v-4a7c6ce6>string</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>#333</td></tr><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>image</code></td><td data-v-4a7c6ce6>自定义图片水印</td><td data-v-4a7c6ce6>string</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>——</td></tr><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>block</code></td><td data-v-4a7c6ce6>是否为块级元素</td><td data-v-4a7c6ce6>boolean</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>false</td></tr><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>zIndex</code></td><td data-v-4a7c6ce6>原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer" data-v-4a7c6ce6>z-index</a> 属性</td><td data-v-4a7c6ce6>number</td><td data-v-4a7c6ce6>——</td><td data-v-4a7c6ce6>100</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-4a7c6ce6>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-4a7c6ce6>#</a></h2><div class="vp-table__container" data-v-4a7c6ce6><table data-v-4a7c6ce6><thead data-v-4a7c6ce6><tr data-v-4a7c6ce6><th data-v-4a7c6ce6>名称</th><th data-v-4a7c6ce6>说明</th></tr></thead><tbody data-v-4a7c6ce6><tr data-v-4a7c6ce6><td data-v-4a7c6ce6><code data-v-4a7c6ce6>default</code></td><td data-v-4a7c6ce6>水印覆盖的内容</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-4a7c6ce6>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-4a7c6ce6>#</a></h2><p data-v-4a7c6ce6>组件导出以下类型定义：</p><div class="language-ts" data-v-4a7c6ce6><button title="Copy Code" class="copy" data-v-4a7c6ce6></button><span class="lang" data-v-4a7c6ce6>ts</span><pre class="shiki" data-v-4a7c6ce6><code data-v-4a7c6ce6><span class="line" data-v-4a7c6ce6><span style="color:#89DDFF;" data-v-4a7c6ce6>import</span><span style="color:#A6ACCD;" data-v-4a7c6ce6> </span><span style="color:#89DDFF;" data-v-4a7c6ce6>type</span><span style="color:#A6ACCD;" data-v-4a7c6ce6> </span><span style="color:#89DDFF;" data-v-4a7c6ce6>{</span><span style="color:#F07178;" data-v-4a7c6ce6> </span><span style="color:#A6ACCD;" data-v-4a7c6ce6>WatermarkInstance</span><span style="color:#89DDFF;" data-v-4a7c6ce6>,</span><span style="color:#F07178;" data-v-4a7c6ce6> </span><span style="color:#A6ACCD;" data-v-4a7c6ce6>WatermarkProps</span><span style="color:#F07178;" data-v-4a7c6ce6> </span><span style="color:#89DDFF;" data-v-4a7c6ce6>}</span><span style="color:#A6ACCD;" data-v-4a7c6ce6> </span><span style="color:#89DDFF;" data-v-4a7c6ce6>from</span><span style="color:#A6ACCD;" data-v-4a7c6ce6> </span><span style="color:#89DDFF;" data-v-4a7c6ce6>&#39;</span><span style="color:#C3E88D;" data-v-4a7c6ce6>fighting-design</span><span style="color:#89DDFF;" data-v-4a7c6ce6>&#39;</span></span>
<span class="line" data-v-4a7c6ce6></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-4a7c6ce6>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-4a7c6ce6>#</a></h2>`,8),B={href:"https://github.com/Tyh2001",target:"_blank"};function S(c,T,I,j,z,N){const n=e("f-avatar"),r=e("f-text"),p=e("f-card"),D=e("f-watermark"),F=e("vp-demo");return i(),C("div",null,[u,l(F,{source:""},{source:t(()=>[l(D,{content:"机密文件",height:100,width:130},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(n,{round:"",src:"https://tianyuhao.cn/images/auto/my.jpg"}),l(r,{block:""},{default:t(()=>[s("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[_]),_:1}),f,g,l(F,{source:""},{source:t(()=>[l(D,{content:"机密文件",height:100,width:130,"font-color":"red","font-size":"16px"},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(n,{round:"",src:"https://tianyuhao.cn/images/auto/my.jpg"}),l(r,{block:""},{default:t(()=>[s("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[m]),_:1}),b,k,E,l(F,{source:""},{source:t(()=>[l(D,{image:"https://tianyuhao.cn/images/fighting-design/FightingDesign.svg"},{default:t(()=>[l(p,{title:"绝对机密"},{default:t(()=>[l(n,{round:"",src:"https://tianyuhao.cn/images/auto/my.jpg"}),l(r,{block:""},{default:t(()=>[s("这是一个重要的文件")]),_:1})]),_:1})]),_:1})]),default:t(()=>[x]),_:1}),w,a("a",B,[l(n,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}const W=y(v,[["render",S],["__scopeId","data-v-4a7c6ce6"]]);export{P as __pageData,W as default};
