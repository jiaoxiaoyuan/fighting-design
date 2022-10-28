import{r as D,o as _,c as b,a as s,w as n,d,e,s as o,q as p,b as l}from"./app.3a7b60b5.js";const N=e("",4),q=e("",4),k=e("",2),v=e("",6),T=e("",2),V=e("",10),P={href:"https://github.com/Tyh2001",target:"_blank"},S={href:"https://github.com/xluoyu",target:"_blank"},B=JSON.parse('{"title":"Notification \u901A\u77E5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6D88\u606F","slug":"\u81EA\u5B9A\u4E49\u6D88\u606F","link":"#\u81EA\u5B9A\u4E49\u6D88\u606F","children":[]},{"level":2,"title":"\u591A\u79CD\u7C7B\u578B","slug":"\u591A\u79CD\u7C7B\u578B","link":"#\u591A\u79CD\u7C7B\u578B","children":[]},{"level":2,"title":"\u53EF\u5173\u95ED","slug":"\u53EF\u5173\u95ED","link":"#\u53EF\u5173\u95ED","children":[]},{"level":2,"title":"\u591A\u4E2A\u4F4D\u7F6E","slug":"\u591A\u4E2A\u4F4D\u7F6E","link":"#\u591A\u4E2A\u4F4D\u7F6E","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/notification.md","lastUpdated":1666940429000}'),x={name:"components/notification.md"},R=Object.assign(x,{setup(w){const y=()=>{o({title:"\u8FD9\u662F\u4E00\u6761\u901A\u77E5",message:"\u8FD9\u662F\u901A\u77E5\u5185\u5BB9"})},A=()=>{o.primary("\u8FD9\u662F\u4E00\u6761\u91CD\u8981\u901A\u77E5")},u=()=>{o.success("\u8FD9\u662F\u4E00\u6761\u6210\u529F\u901A\u77E5")},g=()=>{o.warning("\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u901A\u77E5")},f=()=>{o.danger("\u8FD9\u662F\u4E00\u6761\u5931\u8D25\u901A\u77E5")},h=()=>{o({title:"\u4E00\u6761\u901A\u77E5",message:"\u8FD9\u662F\u4E00\u67615\u79D2\u540E\u6D88\u5931\u7684\u6D88\u606F",type:"primary",close:!0,duration:5e3})},m=()=>{o({title:"\u4E00\u6761\u901A\u77E5",message:"\u8FD9\u662F\u4E00\u6761\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931\u7684\u6D88\u606F",type:"primary",close:!0,closeBtn:"\u5173\u95ED",duration:0})},c=i=>{o({title:"\u4E00\u6761\u901A\u77E5",message:"\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u4F4D\u7F6E\u7684\u6D88\u606F",type:"primary",close:!0,placement:i})},E=()=>{o({title:p("span",[p("span","\u8FD9\u662F"),p("b","\u81EA\u5B9A\u4E49\u6807\u9898")]),message:p("div",[p("p",[p("span","\u8FD9\u662F\u4E00\u6761"),p("b"," \u975E\u5E38\u91CD\u8981 "),p("span","\u7684\u901A\u77E5")]),p("p","\u8FD9\u91CC\u662F\u4E00\u4E9B\u4E0D\u91CD\u8981\u7684\u5185\u5BB9")]),type:"primary"})};return(i,t)=>{const a=D("f-button"),r=D("f-space"),C=D("f-avatar");return _(),b("div",null,[N,s(a,{type:"primary",onClick:y},{default:n(()=>[l("show")]),_:1}),q,s(a,{type:"primary",onClick:E},{default:n(()=>[l("show")]),_:1}),k,s(r,null,{default:n(()=>[s(a,{onClick:y},{default:n(()=>[l("default")]),_:1}),s(a,{type:"primary",onClick:A},{default:n(()=>[l("primary")]),_:1}),s(a,{type:"success",onClick:u},{default:n(()=>[l("success")]),_:1}),s(a,{type:"warning",onClick:g},{default:n(()=>[l("warning")]),_:1}),s(a,{type:"danger",onClick:f},{default:n(()=>[l("danger")]),_:1})]),_:1}),v,s(r,null,{default:n(()=>[s(a,{type:"primary",onClick:h},{default:n(()=>[l("5\u79D2\u540E\u5173\u95ED")]),_:1}),s(a,{type:"primary",onClick:m},{default:n(()=>[l("\u4E0D\u81EA\u52A8\u5173\u95ED")]),_:1})]),_:1}),T,s(r,null,{default:n(()=>[s(a,{type:"primary",onClick:t[0]||(t[0]=F=>c("top-left"))},{default:n(()=>[l("\u5DE6\u4E0A")]),_:1}),s(a,{type:"primary",onClick:t[1]||(t[1]=F=>c("top-right"))},{default:n(()=>[l("\u53F3\u4E0A")]),_:1}),s(a,{type:"success",onClick:t[2]||(t[2]=F=>c("bottom-left"))},{default:n(()=>[l("\u5DE6\u4E0B")]),_:1}),s(a,{type:"success",onClick:t[3]||(t[3]=F=>c("bottom-right"))},{default:n(()=>[l("\u53F3\u4E0B")]),_:1})]),_:1}),V,d("a",P,[s(C,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),d("a",S,[s(C,{round:"",src:"https://avatars.githubusercontent.com/u/36356701?v=4"})])])}}});export{B as __pageData,R as default};