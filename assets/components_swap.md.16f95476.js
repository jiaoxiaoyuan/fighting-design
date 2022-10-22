import{j as i,k as c,r as A,o as E,c as m,a as t,d as l,e as d,p as h,g,b as p,_ as q}from"./app.70b9a8f1.js";const v=e=>(h("data-v-0c956bf8"),e=e(),g(),e),_=v(()=>l("h1",{id:"swap-\u5207\u6362",tabindex:"-1"},[p("Swap \u5207\u6362 "),l("a",{class:"header-anchor",href:"#swap-\u5207\u6362","aria-hidden":"true"},"#")],-1)),V=v(()=>l("p",null,[l("code",null,"Swap"),p(" \u662F\u4E00\u4E2A\u5207\u6362\u7EC4\u4EF6")],-1)),B=v(()=>l("h2",{id:"\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[p("\u57FA\u672C\u4F7F\u7528 "),l("a",{class:"header-anchor",href:"#\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#")],-1)),w=v(()=>l("p",null,[l("code",null,"Swap"),p(" \u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u9700\u8981\u4F7F\u7528 "),l("code",null,"v-model"),p(" \u7ED1\u5B9A\u4E00\u4E2A\u503C")],-1)),z=d(`<details class="details custom-block" data-v-0c956bf8><summary data-v-0c956bf8>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-0c956bf8><button title="Copy Code" class="copy" data-v-0c956bf8></button><span class="lang" data-v-0c956bf8>html</span><pre data-v-0c956bf8><code data-v-0c956bf8><span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value1</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value2</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>lang</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>ts</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>setup</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>import</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>{</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#A6ACCD;" data-v-0c956bf8>ref</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>}</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>from</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span><span style="color:#C3E88D;" data-v-0c956bf8>vue</span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value1 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>true</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value2 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>false</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5927\u5C0F" tabindex="-1" data-v-0c956bf8>\u4E0D\u540C\u5927\u5C0F <a class="header-anchor" href="#\u4E0D\u540C\u5927\u5C0F" aria-hidden="true" data-v-0c956bf8>#</a></h2><p data-v-0c956bf8><code data-v-0c956bf8>size</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u5927\u5C0F\u7684 <code data-v-0c956bf8>swap</code></p>`,3),k=d(`<details class="details custom-block" data-v-0c956bf8><summary data-v-0c956bf8>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-0c956bf8><button title="Copy Code" class="copy" data-v-0c956bf8></button><span class="lang" data-v-0c956bf8>html</span><pre data-v-0c956bf8><code data-v-0c956bf8><span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value3</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>large</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value3</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>middle</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value3</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>small</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>lang</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>ts</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>setup</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>import</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>{</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#A6ACCD;" data-v-0c956bf8>ref</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>}</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>from</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span><span style="color:#C3E88D;" data-v-0c956bf8>vue</span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value3 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>false</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span></code></pre></div></details><h2 id="\u4E0D\u540C\u7C7B\u578B" tabindex="-1" data-v-0c956bf8>\u4E0D\u540C\u7C7B\u578B <a class="header-anchor" href="#\u4E0D\u540C\u7C7B\u578B" aria-hidden="true" data-v-0c956bf8>#</a></h2><p data-v-0c956bf8><code data-v-0c956bf8>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684 <code data-v-0c956bf8>swap</code></p>`,3),x=d(`<details class="details custom-block" data-v-0c956bf8><summary data-v-0c956bf8>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-0c956bf8><button title="Copy Code" class="copy" data-v-0c956bf8></button><span class="lang" data-v-0c956bf8>html</span><pre data-v-0c956bf8><code data-v-0c956bf8><span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value4</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>middle</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>type</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>sound</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value5</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>middle</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>type</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>theme</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value6</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>middle</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>type</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>flip</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value7</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>middle</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>type</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>favorites</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>lang</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>ts</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>setup</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>import</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>{</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#A6ACCD;" data-v-0c956bf8>ref</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>}</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>from</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span><span style="color:#C3E88D;" data-v-0c956bf8>vue</span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value4 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>true</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value5 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>true</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value6 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>true</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value7 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>true</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span></code></pre></div></details><h2 id="\u56FE\u6807\u8F6C\u6362" tabindex="-1" data-v-0c956bf8>\u56FE\u6807\u8F6C\u6362 <a class="header-anchor" href="#\u56FE\u6807\u8F6C\u6362" aria-hidden="true" data-v-0c956bf8>#</a></h2><p data-v-0c956bf8><code data-v-0c956bf8>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7C7B\u578B\u7684 <code data-v-0c956bf8>swap</code></p>`,3),S=d(`<details class="details custom-block" data-v-0c956bf8><summary data-v-0c956bf8>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-0c956bf8><button title="Copy Code" class="copy" data-v-0c956bf8></button><span class="lang" data-v-0c956bf8>html</span><pre data-v-0c956bf8><code data-v-0c956bf8><span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>f-swap</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>v-model</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>value9</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>size</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>middle</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>type</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>rotate</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> /&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>template</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>lang</span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#C3E88D;" data-v-0c956bf8>ts</span><span style="color:#89DDFF;" data-v-0c956bf8>&quot;</span><span style="color:#89DDFF;" data-v-0c956bf8> </span><span style="color:#C792EA;" data-v-0c956bf8>setup</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#89DDFF;" data-v-0c956bf8>import</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>{</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#A6ACCD;" data-v-0c956bf8>ref</span><span style="color:#F07178;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>}</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>from</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span><span style="color:#C3E88D;" data-v-0c956bf8>vue</span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span></span>
<span class="line" data-v-0c956bf8><span style="color:#A6ACCD;" data-v-0c956bf8>  </span><span style="color:#C792EA;" data-v-0c956bf8>const</span><span style="color:#A6ACCD;" data-v-0c956bf8> value9 </span><span style="color:#89DDFF;" data-v-0c956bf8>=</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#82AAFF;" data-v-0c956bf8>ref</span><span style="color:#A6ACCD;" data-v-0c956bf8>(</span><span style="color:#FF9CAC;" data-v-0c956bf8>true</span><span style="color:#A6ACCD;" data-v-0c956bf8>)</span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>&lt;/</span><span style="color:#F07178;" data-v-0c956bf8>script</span><span style="color:#89DDFF;" data-v-0c956bf8>&gt;</span></span>
<span class="line" data-v-0c956bf8></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-0c956bf8>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-0c956bf8>#</a></h2><table data-v-0c956bf8><thead data-v-0c956bf8><tr data-v-0c956bf8><th data-v-0c956bf8>\u53C2\u6570</th><th data-v-0c956bf8>\u8BF4\u660E</th><th data-v-0c956bf8>\u7C7B\u578B</th><th data-v-0c956bf8>\u53EF\u9009\u503C</th><th data-v-0c956bf8>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-0c956bf8><tr data-v-0c956bf8><td data-v-0c956bf8><code data-v-0c956bf8>v-model</code></td><td data-v-0c956bf8>\u7ED1\u5B9A\u503C</td><td data-v-0c956bf8>string</td><td data-v-0c956bf8>\u2014\u2014</td><td data-v-0c956bf8>false</td></tr><tr data-v-0c956bf8><td data-v-0c956bf8><code data-v-0c956bf8>size</code></td><td data-v-0c956bf8>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-0c956bf8>string</td><td data-v-0c956bf8><code data-v-0c956bf8>large</code> <code data-v-0c956bf8>middle</code> <code data-v-0c956bf8>small</code></td><td data-v-0c956bf8>middle</td></tr><tr data-v-0c956bf8><td data-v-0c956bf8><code data-v-0c956bf8>type</code></td><td data-v-0c956bf8>\u7C7B\u578B</td><td data-v-0c956bf8>string</td><td data-v-0c956bf8><code data-v-0c956bf8>sound</code> <code data-v-0c956bf8>theme</code> <code data-v-0c956bf8>rotate</code> <code data-v-0c956bf8>flip</code> <code data-v-0c956bf8>favorites</code></td><td data-v-0c956bf8>sound</td></tr></tbody></table><h2 id="interface" tabindex="-1" data-v-0c956bf8>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-0c956bf8>#</a></h2><p data-v-0c956bf8>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-0c956bf8><button title="Copy Code" class="copy" data-v-0c956bf8></button><span class="lang" data-v-0c956bf8>ts</span><pre data-v-0c956bf8><code data-v-0c956bf8><span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>import</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>type</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>{</span><span style="color:#F07178;" data-v-0c956bf8> </span></span>
<span class="line" data-v-0c956bf8><span style="color:#F07178;" data-v-0c956bf8>  </span><span style="color:#A6ACCD;" data-v-0c956bf8>SwapPropsType</span><span style="color:#89DDFF;" data-v-0c956bf8>,</span></span>
<span class="line" data-v-0c956bf8><span style="color:#F07178;" data-v-0c956bf8>  </span><span style="color:#A6ACCD;" data-v-0c956bf8>SwapInstance</span><span style="color:#89DDFF;" data-v-0c956bf8>,</span><span style="color:#F07178;" data-v-0c956bf8> </span></span>
<span class="line" data-v-0c956bf8><span style="color:#89DDFF;" data-v-0c956bf8>}</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>from</span><span style="color:#A6ACCD;" data-v-0c956bf8> </span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span><span style="color:#C3E88D;" data-v-0c956bf8>fighting-design</span><span style="color:#89DDFF;" data-v-0c956bf8>&#39;</span></span>
<span class="line" data-v-0c956bf8></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-0c956bf8>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-0c956bf8>#</a></h2>`,7),U={href:"https://github.com/Tyh2001",target:"_blank"},I={href:"https://github.com/ChetSerenade",target:"_blank"},J=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5927\u5C0F","slug":"\u4E0D\u540C\u5927\u5C0F","link":"#\u4E0D\u540C\u5927\u5C0F","children":[]},{"level":2,"title":"\u4E0D\u540C\u7C7B\u578B","slug":"\u4E0D\u540C\u7C7B\u578B","link":"#\u4E0D\u540C\u7C7B\u578B","children":[]},{"level":2,"title":"\u56FE\u6807\u8F6C\u6362","slug":"\u56FE\u6807\u8F6C\u6362","link":"#\u56FE\u6807\u8F6C\u6362","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1666454972000}'),N={name:"components/swap.md"},T=i({...N,setup(e){const f=c(!0),b=c(!1),o=c(!1),r=c(!0),F=c(!0),D=c(!0),u=c(!0);c(!0);const y=c(!0);return(P,a)=>{const n=A("f-swap"),C=A("f-avatar");return E(),m("div",null,[_,V,B,w,t(n,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=s=>f.value=s)},null,8,["modelValue"]),t(n,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=s=>b.value=s)},null,8,["modelValue"]),z,t(n,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=s=>o.value=s),size:"large"},null,8,["modelValue"]),t(n,{modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=s=>o.value=s),size:"middle"},null,8,["modelValue"]),t(n,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=s=>o.value=s),size:"small"},null,8,["modelValue"]),k,t(n,{modelValue:r.value,"onUpdate:modelValue":a[5]||(a[5]=s=>r.value=s),size:"middle",type:"sound"},null,8,["modelValue"]),t(n,{modelValue:F.value,"onUpdate:modelValue":a[6]||(a[6]=s=>F.value=s),size:"middle",type:"theme"},null,8,["modelValue"]),t(n,{modelValue:D.value,"onUpdate:modelValue":a[7]||(a[7]=s=>D.value=s),size:"middle",type:"flip"},null,8,["modelValue"]),t(n,{modelValue:u.value,"onUpdate:modelValue":a[8]||(a[8]=s=>u.value=s),size:"middle",type:"favorites"},null,8,["modelValue"]),x,t(n,{modelValue:y.value,"onUpdate:modelValue":a[9]||(a[9]=s=>y.value=s),size:"middle",type:"rotate"},null,8,["modelValue"]),S,l("a",U,[t(C,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),l("a",I,[t(C,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const O=q(T,[["__scopeId","data-v-0c956bf8"]]);export{J as __pageData,O as default};
