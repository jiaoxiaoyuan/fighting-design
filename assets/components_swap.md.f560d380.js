import{d as p,c as e,b as C,F as i,a as A}from"./chunks/f-icon-sun.de670de2.js";import{j as g,k as l,r as E,o as q,c as b,a as t,u as c,d as m,e as o,_ as B}from"./app.2894ac5e.js";import{F as h}from"./chunks/f-icon-face-smile.50c95085.js";const I=o('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-57cf912c>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-57cf912c>#</a></h1><p data-v-57cf912c>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-57cf912c><li data-v-57cf912c><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-57cf912c>\u6E90\u4EE3\u7801</a></li><li data-v-57cf912c><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-57cf912c>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-57cf912c>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-57cf912c>#</a></h2><p data-v-57cf912c>\u9700\u8981\u4F7F\u7528 <code data-v-57cf912c>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-57cf912c><code data-v-57cf912c>icon-on</code> \u548C <code data-v-57cf912c>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=o(`<details class="details custom-block" data-v-57cf912c><summary data-v-57cf912c>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-57cf912c><button title="Copy Code" class="copy" data-v-57cf912c></button><span class="lang" data-v-57cf912c>html</span><pre class="shiki" data-v-57cf912c><code data-v-57cf912c><span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>template</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>f-swap</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>v-model</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>value1</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>:icon-on</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconSun</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>:icon-off</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconMoon</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> /&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>f-swap</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>v-model</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>value2</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>:icon-on</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconSun</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>:icon-off</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconMoon</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> /&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;/</span><span style="color:#F07178;" data-v-57cf912c>template</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>script</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>lang</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>ts</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>setup</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>import</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>{</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconSun</span><span style="color:#89DDFF;" data-v-57cf912c>,</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconMoon</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>}</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>from</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span><span style="color:#C3E88D;" data-v-57cf912c>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>import</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>{</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#A6ACCD;" data-v-57cf912c>ref</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>}</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>from</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span><span style="color:#C3E88D;" data-v-57cf912c>vue</span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span></span>
<span class="line" data-v-57cf912c></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#C792EA;" data-v-57cf912c>const</span><span style="color:#A6ACCD;" data-v-57cf912c> value1 </span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#82AAFF;" data-v-57cf912c>ref</span><span style="color:#A6ACCD;" data-v-57cf912c>(</span><span style="color:#FF9CAC;" data-v-57cf912c>true</span><span style="color:#A6ACCD;" data-v-57cf912c>)</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#C792EA;" data-v-57cf912c>const</span><span style="color:#A6ACCD;" data-v-57cf912c> value2 </span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#82AAFF;" data-v-57cf912c>ref</span><span style="color:#A6ACCD;" data-v-57cf912c>(</span><span style="color:#FF9CAC;" data-v-57cf912c>false</span><span style="color:#A6ACCD;" data-v-57cf912c>)</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;/</span><span style="color:#F07178;" data-v-57cf912c>script</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-57cf912c>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-57cf912c>#</a></h2><p data-v-57cf912c><code data-v-57cf912c>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=o(`<details class="details custom-block" data-v-57cf912c><summary data-v-57cf912c>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-57cf912c><button title="Copy Code" class="copy" data-v-57cf912c></button><span class="lang" data-v-57cf912c>html</span><pre class="shiki" data-v-57cf912c><code data-v-57cf912c><span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>template</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>f-swap</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>v-model</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>value5</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:size</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>50</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-on</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-off</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>  /&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>f-swap</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>v-model</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>value6</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>size</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>30px</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-on</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconEye</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-off</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>  /&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;/</span><span style="color:#F07178;" data-v-57cf912c>template</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>script</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>lang</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>ts</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>setup</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>import</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>{</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconEye</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconEyeSlash</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>}</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>from</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span><span style="color:#C3E88D;" data-v-57cf912c>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>import</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>{</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#A6ACCD;" data-v-57cf912c>ref</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>}</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>from</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span><span style="color:#C3E88D;" data-v-57cf912c>vue</span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span></span>
<span class="line" data-v-57cf912c></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#C792EA;" data-v-57cf912c>const</span><span style="color:#A6ACCD;" data-v-57cf912c> value3 </span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#82AAFF;" data-v-57cf912c>ref</span><span style="color:#A6ACCD;" data-v-57cf912c>(</span><span style="color:#FF9CAC;" data-v-57cf912c>true</span><span style="color:#A6ACCD;" data-v-57cf912c>)</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#C792EA;" data-v-57cf912c>const</span><span style="color:#A6ACCD;" data-v-57cf912c> value4 </span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#82AAFF;" data-v-57cf912c>ref</span><span style="color:#A6ACCD;" data-v-57cf912c>(</span><span style="color:#FF9CAC;" data-v-57cf912c>true</span><span style="color:#A6ACCD;" data-v-57cf912c>)</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;/</span><span style="color:#F07178;" data-v-57cf912c>script</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-57cf912c>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-57cf912c>#</a></h2><p data-v-57cf912c><code data-v-57cf912c>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=o(`<details class="details custom-block" data-v-57cf912c><summary data-v-57cf912c>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-57cf912c><button title="Copy Code" class="copy" data-v-57cf912c></button><span class="lang" data-v-57cf912c>html</span><pre class="shiki" data-v-57cf912c><code data-v-57cf912c><span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>template</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>f-swap</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>v-model</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>value5</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>type</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>default</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-on</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconEye</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-off</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>  /&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>f-swap</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>v-model</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>value6</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>type</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>sound</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-on</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconSun</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-off</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconMoon</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>  /&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>f-swap</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>v-model</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>value7</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>type</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>swap</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-on</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>    </span><span style="color:#C792EA;" data-v-57cf912c>:icon-off</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>  /&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;/</span><span style="color:#F07178;" data-v-57cf912c>template</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;</span><span style="color:#F07178;" data-v-57cf912c>script</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>lang</span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#C3E88D;" data-v-57cf912c>ts</span><span style="color:#89DDFF;" data-v-57cf912c>&quot;</span><span style="color:#89DDFF;" data-v-57cf912c> </span><span style="color:#C792EA;" data-v-57cf912c>setup</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>import</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>{</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconSun</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconMoon</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconEye</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>    </span><span style="color:#A6ACCD;" data-v-57cf912c>FIconEyeSlash</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>}</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>from</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span><span style="color:#C3E88D;" data-v-57cf912c>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#89DDFF;" data-v-57cf912c>import</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>{</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#A6ACCD;" data-v-57cf912c>ref</span><span style="color:#F07178;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>}</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>from</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span><span style="color:#C3E88D;" data-v-57cf912c>vue</span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span></span>
<span class="line" data-v-57cf912c></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#C792EA;" data-v-57cf912c>const</span><span style="color:#A6ACCD;" data-v-57cf912c> value5 </span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#82AAFF;" data-v-57cf912c>ref</span><span style="color:#A6ACCD;" data-v-57cf912c>(</span><span style="color:#FF9CAC;" data-v-57cf912c>true</span><span style="color:#A6ACCD;" data-v-57cf912c>)</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#C792EA;" data-v-57cf912c>const</span><span style="color:#A6ACCD;" data-v-57cf912c> value6 </span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#82AAFF;" data-v-57cf912c>ref</span><span style="color:#A6ACCD;" data-v-57cf912c>(</span><span style="color:#FF9CAC;" data-v-57cf912c>true</span><span style="color:#A6ACCD;" data-v-57cf912c>)</span></span>
<span class="line" data-v-57cf912c><span style="color:#A6ACCD;" data-v-57cf912c>  </span><span style="color:#C792EA;" data-v-57cf912c>const</span><span style="color:#A6ACCD;" data-v-57cf912c> value7 </span><span style="color:#89DDFF;" data-v-57cf912c>=</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#82AAFF;" data-v-57cf912c>ref</span><span style="color:#A6ACCD;" data-v-57cf912c>(</span><span style="color:#FF9CAC;" data-v-57cf912c>true</span><span style="color:#A6ACCD;" data-v-57cf912c>)</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>&lt;/</span><span style="color:#F07178;" data-v-57cf912c>script</span><span style="color:#89DDFF;" data-v-57cf912c>&gt;</span></span>
<span class="line" data-v-57cf912c></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-57cf912c>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-57cf912c>#</a></h2><div class="vp-table__container" data-v-57cf912c><table data-v-57cf912c><thead data-v-57cf912c><tr data-v-57cf912c><th data-v-57cf912c>\u53C2\u6570</th><th data-v-57cf912c>\u8BF4\u660E</th><th data-v-57cf912c>\u7C7B\u578B</th><th data-v-57cf912c>\u53EF\u9009\u503C</th><th data-v-57cf912c>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-57cf912c><tr data-v-57cf912c><td data-v-57cf912c><code data-v-57cf912c>v-model</code></td><td data-v-57cf912c>\u7ED1\u5B9A\u503C</td><td data-v-57cf912c>boolean</td><td data-v-57cf912c>\u2014\u2014</td><td data-v-57cf912c>false</td></tr><tr data-v-57cf912c><td data-v-57cf912c><code data-v-57cf912c>size</code></td><td data-v-57cf912c>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-57cf912c>string / number</td><td data-v-57cf912c>\u2014\u2014</td><td data-v-57cf912c>40</td></tr><tr data-v-57cf912c><td data-v-57cf912c><code data-v-57cf912c>type</code></td><td data-v-57cf912c>\u52A8\u753B\u7C7B\u578B</td><td data-v-57cf912c>string</td><td data-v-57cf912c><code data-v-57cf912c>sound</code> <code data-v-57cf912c>swap</code> <code data-v-57cf912c>default</code></td><td data-v-57cf912c>default</td></tr><tr data-v-57cf912c><td data-v-57cf912c><code data-v-57cf912c>icon-on</code></td><td data-v-57cf912c>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-57cf912c>object (VNode / Component)</td><td data-v-57cf912c>\u2014\u2014</td><td data-v-57cf912c>null</td></tr><tr data-v-57cf912c><td data-v-57cf912c><code data-v-57cf912c>icon-off</code></td><td data-v-57cf912c>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-57cf912c>object (VNode / Component)</td><td data-v-57cf912c>\u2014\u2014</td><td data-v-57cf912c>null</td></tr><tr data-v-57cf912c><td data-v-57cf912c><code data-v-57cf912c>on-change</code></td><td data-v-57cf912c>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-57cf912c>Function</td><td data-v-57cf912c>\u2014\u2014</td><td data-v-57cf912c>null</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-57cf912c>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-57cf912c>#</a></h2><p data-v-57cf912c>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-57cf912c><button title="Copy Code" class="copy" data-v-57cf912c></button><span class="lang" data-v-57cf912c>ts</span><pre class="shiki" data-v-57cf912c><code data-v-57cf912c><span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>import</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>type</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>{</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>  </span><span style="color:#A6ACCD;" data-v-57cf912c>SwapInstance</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>  </span><span style="color:#A6ACCD;" data-v-57cf912c>SwapPropsType</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>  </span><span style="color:#A6ACCD;" data-v-57cf912c>SwapType</span><span style="color:#89DDFF;" data-v-57cf912c>,</span></span>
<span class="line" data-v-57cf912c><span style="color:#F07178;" data-v-57cf912c>  </span><span style="color:#A6ACCD;" data-v-57cf912c>SwapOnChangeInterface</span></span>
<span class="line" data-v-57cf912c><span style="color:#89DDFF;" data-v-57cf912c>}</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>from</span><span style="color:#A6ACCD;" data-v-57cf912c> </span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span><span style="color:#C3E88D;" data-v-57cf912c>fighting-design</span><span style="color:#89DDFF;" data-v-57cf912c>&#39;</span></span>
<span class="line" data-v-57cf912c></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-57cf912c>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-57cf912c>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1667988030000}'),x={name:"components/swap.md"},U=g({...x,setup(z){const d=l(!0),f=l(!1),v=l(!0),r=l(!0),F=l(!0),D=l(!0),y=l(!0);return(M,a)=>{const n=E("f-swap"),u=E("f-avatar");return q(),b("div",null,[I,t(n,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=s=>d.value=s),"icon-on":c(p),"icon-off":c(e)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=s=>f.value=s),"icon-on":c(p),"icon-off":c(e)},null,8,["modelValue","icon-on","icon-off"]),_,t(n,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=s=>v.value=s),size:50,"icon-on":c(h),"icon-off":c(C)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=s=>r.value=s),size:"30px","icon-on":c(i),"icon-off":c(A)},null,8,["modelValue","icon-on","icon-off"]),w,t(n,{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=s=>F.value=s),type:"default","icon-on":c(i),"icon-off":c(A)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=s=>D.value=s),type:"sound","icon-on":c(p),"icon-off":c(e)},null,8,["modelValue","icon-on","icon-off"]),t(n,{modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=s=>y.value=s),type:"swap","icon-on":c(h),"icon-off":c(C)},null,8,["modelValue","icon-on","icon-off"]),V,m("a",S,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),m("a",k,[t(u,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-57cf912c"]]);export{O as __pageData,P as default};
