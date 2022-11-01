import{d as o,c as p,b as C,F as i,a as A}from"./chunks/f-icon-sun.667498ac.js";import{j as h,k as d,r as E,o as g,c as q,a as t,u as s,d as f,e as l,_ as B}from"./app.243c6df3.js";import{F as m}from"./chunks/f-icon-face-smile.7299cddb.js";const I=l('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-137db1e8>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-137db1e8>#</a></h1><p data-v-137db1e8>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-137db1e8><li data-v-137db1e8><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-137db1e8>\u6E90\u4EE3\u7801</a></li><li data-v-137db1e8><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-137db1e8>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-137db1e8>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-137db1e8>#</a></h2><p data-v-137db1e8>\u9700\u8981\u4F7F\u7528 <code data-v-137db1e8>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-137db1e8><code data-v-137db1e8>icon-on</code> \u548C <code data-v-137db1e8>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=l(`<details class="details custom-block" data-v-137db1e8><summary data-v-137db1e8>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-137db1e8><button title="Copy Code" class="copy" data-v-137db1e8></button><span class="lang" data-v-137db1e8>html</span><pre class="shiki" data-v-137db1e8><code data-v-137db1e8><span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>template</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>f-swap</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>v-model</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>value1</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>:icon-on</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconSun</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>:icon-off</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconMoon</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> /&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>f-swap</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>v-model</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>value2</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>:icon-on</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconSun</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>:icon-off</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconMoon</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> /&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;/</span><span style="color:#F07178;" data-v-137db1e8>template</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>script</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>lang</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>ts</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>setup</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>import</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>{</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconSun</span><span style="color:#89DDFF;" data-v-137db1e8>,</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconMoon</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>}</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>from</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span><span style="color:#C3E88D;" data-v-137db1e8>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>import</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>{</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#A6ACCD;" data-v-137db1e8>ref</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>}</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>from</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span><span style="color:#C3E88D;" data-v-137db1e8>vue</span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span></span>
<span class="line" data-v-137db1e8></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#C792EA;" data-v-137db1e8>const</span><span style="color:#A6ACCD;" data-v-137db1e8> value1 </span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#82AAFF;" data-v-137db1e8>ref</span><span style="color:#A6ACCD;" data-v-137db1e8>(</span><span style="color:#FF9CAC;" data-v-137db1e8>true</span><span style="color:#A6ACCD;" data-v-137db1e8>)</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#C792EA;" data-v-137db1e8>const</span><span style="color:#A6ACCD;" data-v-137db1e8> value2 </span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#82AAFF;" data-v-137db1e8>ref</span><span style="color:#A6ACCD;" data-v-137db1e8>(</span><span style="color:#FF9CAC;" data-v-137db1e8>false</span><span style="color:#A6ACCD;" data-v-137db1e8>)</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;/</span><span style="color:#F07178;" data-v-137db1e8>script</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-137db1e8>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-137db1e8>#</a></h2><p data-v-137db1e8><code data-v-137db1e8>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=l(`<details class="details custom-block" data-v-137db1e8><summary data-v-137db1e8>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-137db1e8><button title="Copy Code" class="copy" data-v-137db1e8></button><span class="lang" data-v-137db1e8>html</span><pre class="shiki" data-v-137db1e8><code data-v-137db1e8><span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>template</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>f-swap</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>v-model</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>value5</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:size</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>50</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-on</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-off</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>  /&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>f-swap</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>v-model</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>value6</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>size</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>30px</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-on</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconEye</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-off</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>  /&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;/</span><span style="color:#F07178;" data-v-137db1e8>template</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>script</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>lang</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>ts</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>setup</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>import</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>{</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconEye</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconEyeSlash</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>}</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>from</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span><span style="color:#C3E88D;" data-v-137db1e8>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>import</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>{</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#A6ACCD;" data-v-137db1e8>ref</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>}</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>from</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span><span style="color:#C3E88D;" data-v-137db1e8>vue</span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span></span>
<span class="line" data-v-137db1e8></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#C792EA;" data-v-137db1e8>const</span><span style="color:#A6ACCD;" data-v-137db1e8> value3 </span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#82AAFF;" data-v-137db1e8>ref</span><span style="color:#A6ACCD;" data-v-137db1e8>(</span><span style="color:#FF9CAC;" data-v-137db1e8>true</span><span style="color:#A6ACCD;" data-v-137db1e8>)</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#C792EA;" data-v-137db1e8>const</span><span style="color:#A6ACCD;" data-v-137db1e8> value4 </span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#82AAFF;" data-v-137db1e8>ref</span><span style="color:#A6ACCD;" data-v-137db1e8>(</span><span style="color:#FF9CAC;" data-v-137db1e8>true</span><span style="color:#A6ACCD;" data-v-137db1e8>)</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;/</span><span style="color:#F07178;" data-v-137db1e8>script</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-137db1e8>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-137db1e8>#</a></h2><p data-v-137db1e8><code data-v-137db1e8>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=l(`<details class="details custom-block" data-v-137db1e8><summary data-v-137db1e8>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-137db1e8><button title="Copy Code" class="copy" data-v-137db1e8></button><span class="lang" data-v-137db1e8>html</span><pre class="shiki" data-v-137db1e8><code data-v-137db1e8><span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>template</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>f-swap</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>v-model</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>value5</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>type</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>default</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-on</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconEye</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-off</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>  /&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>f-swap</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>v-model</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>value6</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>type</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>sound</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-on</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconSun</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-off</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconMoon</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>  /&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>f-swap</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>v-model</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>value7</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>type</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>swap</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-on</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>    </span><span style="color:#C792EA;" data-v-137db1e8>:icon-off</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>  /&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;/</span><span style="color:#F07178;" data-v-137db1e8>template</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;</span><span style="color:#F07178;" data-v-137db1e8>script</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>lang</span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#C3E88D;" data-v-137db1e8>ts</span><span style="color:#89DDFF;" data-v-137db1e8>&quot;</span><span style="color:#89DDFF;" data-v-137db1e8> </span><span style="color:#C792EA;" data-v-137db1e8>setup</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>import</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>{</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconSun</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconMoon</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconEye</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>    </span><span style="color:#A6ACCD;" data-v-137db1e8>FIconEyeSlash</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>}</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>from</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span><span style="color:#C3E88D;" data-v-137db1e8>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#89DDFF;" data-v-137db1e8>import</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>{</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#A6ACCD;" data-v-137db1e8>ref</span><span style="color:#F07178;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>}</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>from</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span><span style="color:#C3E88D;" data-v-137db1e8>vue</span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span></span>
<span class="line" data-v-137db1e8></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#C792EA;" data-v-137db1e8>const</span><span style="color:#A6ACCD;" data-v-137db1e8> value5 </span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#82AAFF;" data-v-137db1e8>ref</span><span style="color:#A6ACCD;" data-v-137db1e8>(</span><span style="color:#FF9CAC;" data-v-137db1e8>true</span><span style="color:#A6ACCD;" data-v-137db1e8>)</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#C792EA;" data-v-137db1e8>const</span><span style="color:#A6ACCD;" data-v-137db1e8> value6 </span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#82AAFF;" data-v-137db1e8>ref</span><span style="color:#A6ACCD;" data-v-137db1e8>(</span><span style="color:#FF9CAC;" data-v-137db1e8>true</span><span style="color:#A6ACCD;" data-v-137db1e8>)</span></span>
<span class="line" data-v-137db1e8><span style="color:#A6ACCD;" data-v-137db1e8>  </span><span style="color:#C792EA;" data-v-137db1e8>const</span><span style="color:#A6ACCD;" data-v-137db1e8> value7 </span><span style="color:#89DDFF;" data-v-137db1e8>=</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#82AAFF;" data-v-137db1e8>ref</span><span style="color:#A6ACCD;" data-v-137db1e8>(</span><span style="color:#FF9CAC;" data-v-137db1e8>true</span><span style="color:#A6ACCD;" data-v-137db1e8>)</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>&lt;/</span><span style="color:#F07178;" data-v-137db1e8>script</span><span style="color:#89DDFF;" data-v-137db1e8>&gt;</span></span>
<span class="line" data-v-137db1e8></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-137db1e8>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-137db1e8>#</a></h2><div class="vp-table__container" data-v-137db1e8><table data-v-137db1e8><thead data-v-137db1e8><tr data-v-137db1e8><th data-v-137db1e8>\u53C2\u6570</th><th data-v-137db1e8>\u8BF4\u660E</th><th data-v-137db1e8>\u7C7B\u578B</th><th data-v-137db1e8>\u53EF\u9009\u503C</th><th data-v-137db1e8>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-137db1e8><tr data-v-137db1e8><td data-v-137db1e8><code data-v-137db1e8>v-model</code></td><td data-v-137db1e8>\u7ED1\u5B9A\u503C</td><td data-v-137db1e8>boolean</td><td data-v-137db1e8>\u2014\u2014</td><td data-v-137db1e8>false</td></tr><tr data-v-137db1e8><td data-v-137db1e8><code data-v-137db1e8>size</code></td><td data-v-137db1e8>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-137db1e8>string / number</td><td data-v-137db1e8>\u2014\u2014</td><td data-v-137db1e8>40</td></tr><tr data-v-137db1e8><td data-v-137db1e8><code data-v-137db1e8>type</code></td><td data-v-137db1e8>\u52A8\u753B\u7C7B\u578B</td><td data-v-137db1e8>string</td><td data-v-137db1e8><code data-v-137db1e8>sound</code> <code data-v-137db1e8>swap</code> <code data-v-137db1e8>default</code></td><td data-v-137db1e8>default</td></tr><tr data-v-137db1e8><td data-v-137db1e8><code data-v-137db1e8>icon-on</code></td><td data-v-137db1e8>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-137db1e8>object (VNode / Component)</td><td data-v-137db1e8>\u2014\u2014</td><td data-v-137db1e8>null</td></tr><tr data-v-137db1e8><td data-v-137db1e8><code data-v-137db1e8>icon-off</code></td><td data-v-137db1e8>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-137db1e8>object (VNode / Component)</td><td data-v-137db1e8>\u2014\u2014</td><td data-v-137db1e8>null</td></tr><tr data-v-137db1e8><td data-v-137db1e8><code data-v-137db1e8>on-change</code></td><td data-v-137db1e8>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-137db1e8>Function</td><td data-v-137db1e8>\u2014\u2014</td><td data-v-137db1e8>null</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-137db1e8>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-137db1e8>#</a></h2><p data-v-137db1e8>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-137db1e8><button title="Copy Code" class="copy" data-v-137db1e8></button><span class="lang" data-v-137db1e8>ts</span><pre class="shiki" data-v-137db1e8><code data-v-137db1e8><span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>import</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>type</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>{</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>  </span><span style="color:#A6ACCD;" data-v-137db1e8>SwapInstance</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>  </span><span style="color:#A6ACCD;" data-v-137db1e8>SwapPropsType</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>  </span><span style="color:#A6ACCD;" data-v-137db1e8>SwapType</span><span style="color:#89DDFF;" data-v-137db1e8>,</span></span>
<span class="line" data-v-137db1e8><span style="color:#F07178;" data-v-137db1e8>  </span><span style="color:#A6ACCD;" data-v-137db1e8>SwapOnChangeInterface</span></span>
<span class="line" data-v-137db1e8><span style="color:#89DDFF;" data-v-137db1e8>}</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>from</span><span style="color:#A6ACCD;" data-v-137db1e8> </span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span><span style="color:#C3E88D;" data-v-137db1e8>fighting-design</span><span style="color:#89DDFF;" data-v-137db1e8>&#39;</span></span>
<span class="line" data-v-137db1e8></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-137db1e8>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-137db1e8>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1667290090000}'),x={name:"components/swap.md"},U=h({...x,setup(z){const c=d(!0),v=d(!1),b=d(!0),r=d(!0),F=d(!0),D=d(!0),y=d(!0);return(M,a)=>{const n=E("f-swap"),u=E("f-avatar");return g(),q("div",null,[I,t(n,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),"icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),"icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),_,t(n,{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),size:50,"icon-on":s(m),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=e=>r.value=e),size:"30px","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),w,t(n,{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=e=>F.value=e),type:"default","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=e=>D.value=e),type:"sound","icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=e=>y.value=e),type:"swap","icon-on":s(m),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),V,f("a",S,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),f("a",k,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-137db1e8"]]);export{O as __pageData,P as default};
