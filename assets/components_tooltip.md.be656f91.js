import{_ as d,r as l,o as e,c as b,d as o,a,w as t,b as c,e as n}from"./app.292225a6.js";const w=JSON.parse('{"title":"Tooltip \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u72B6\u6001","slug":"\u4E0D\u540C\u72B6\u6001","link":"#\u4E0D\u540C\u72B6\u6001","children":[]},{"level":2,"title":"\u6CA1\u6709\u7BAD\u5934","slug":"\u6CA1\u6709\u7BAD\u5934","link":"#\u6CA1\u6709\u7BAD\u5934","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/tooltip.md","lastUpdated":1667981843000}'),v={name:"components/tooltip.md"},r=n('<h1 id="tooltip-\u6D88\u606F\u63D0\u793A" tabindex="-1" data-v-80cf7baf>Tooltip \u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#tooltip-\u6D88\u606F\u63D0\u793A" aria-hidden="true" data-v-80cf7baf>#</a></h1><p data-v-80cf7baf><code data-v-80cf7baf>Tooltip</code> \u6D88\u606F\u4FE1\u606F\u63D0\u793A\u7EC4\u4EF6</p><ul data-v-80cf7baf><li data-v-80cf7baf><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/tooltip" target="_blank" rel="noreferrer" data-v-80cf7baf>\u6E90\u4EE3\u7801</a></li><li data-v-80cf7baf><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/tooltip.md" target="_blank" rel="noreferrer" data-v-80cf7baf>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-80cf7baf>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-80cf7baf>#</a></h2><p data-v-80cf7baf><code data-v-80cf7baf>content</code> \u8BBE\u7F6E\u5F39\u51FA\u7684\u4FE1\u606F\u5185\u5BB9\uFF0C<code data-v-80cf7baf>position</code> \u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u5F39\u51FA\u65B9\u5411</p>',5),D={class:"tooltip-box"},F=n(`<details class="details custom-block" data-v-80cf7baf><summary data-v-80cf7baf>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-80cf7baf><button title="Copy Code" class="copy" data-v-80cf7baf></button><span class="lang" data-v-80cf7baf>html</span><pre class="shiki" data-v-80cf7baf><code data-v-80cf7baf><span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>\u4E0A\u8FB9\u7684\u63D0\u793A\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>top</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>primary</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>\u4E0B\u8FB9\u7684\u63D0\u793A\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>bottom</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>success</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>\u5DE6\u8FB9\u7684\u63D0\u793A\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>left</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>danger</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>\u53F3\u8FB9\u7684\u63D0\u793A\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>right</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>warning</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>\u4FE1\u606F</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span></code></pre></div></details><h2 id="\u4E0D\u540C\u72B6\u6001" tabindex="-1" data-v-80cf7baf>\u4E0D\u540C\u72B6\u6001 <a class="header-anchor" href="#\u4E0D\u540C\u72B6\u6001" aria-hidden="true" data-v-80cf7baf>#</a></h2><p data-v-80cf7baf><code data-v-80cf7baf>state</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u5C55\u793A\u72B6\u6001</p>`,3),y={class:"tooltip-box"},i=n(`<details class="details custom-block" data-v-80cf7baf><summary data-v-80cf7baf>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-80cf7baf><button title="Copy Code" class="copy" data-v-80cf7baf></button><span class="lang" data-v-80cf7baf>html</span><pre class="shiki" data-v-80cf7baf><code data-v-80cf7baf><span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>Hover \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>top</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>state</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>hover</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>primary</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>Hover \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>Active \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>top</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>state</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>active</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>success</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>Active \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>Always \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>top</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>state</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>always</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>warning</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>Always \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span></code></pre></div></details><h2 id="\u6CA1\u6709\u7BAD\u5934" tabindex="-1" data-v-80cf7baf>\u6CA1\u6709\u7BAD\u5934 <a class="header-anchor" href="#\u6CA1\u6709\u7BAD\u5934" aria-hidden="true" data-v-80cf7baf>#</a></h2><p data-v-80cf7baf><code data-v-80cf7baf>no-arrow</code> \u53EF\u4EE5\u7981\u6B62\u663E\u793A\u7BAD\u5934</p>`,3),u={class:"tooltip-box"},C=n(`<details class="details custom-block" data-v-80cf7baf><summary data-v-80cf7baf>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-80cf7baf><button title="Copy Code" class="copy" data-v-80cf7baf></button><span class="lang" data-v-80cf7baf>html</span><pre class="shiki" data-v-80cf7baf><code data-v-80cf7baf><span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>Hover \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>top</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>primary</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>\u6709\u7BAD\u5934\u7684</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>no-arrow</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>content</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>Hover \u5C55\u793A</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>position</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>top</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#A6ACCD;" data-v-80cf7baf>  </span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf> </span><span style="color:#C792EA;" data-v-80cf7baf>type</span><span style="color:#89DDFF;" data-v-80cf7baf>=</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#C3E88D;" data-v-80cf7baf>success</span><span style="color:#89DDFF;" data-v-80cf7baf>&quot;</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span><span style="color:#A6ACCD;" data-v-80cf7baf>\u6CA1\u6709\u7BAD\u5934</span><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tag</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>&lt;/</span><span style="color:#F07178;" data-v-80cf7baf>f-tooltip</span><span style="color:#89DDFF;" data-v-80cf7baf>&gt;</span></span>
<span class="line" data-v-80cf7baf></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-80cf7baf>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-80cf7baf>#</a></h2><div class="vp-table__container" data-v-80cf7baf><table data-v-80cf7baf><thead data-v-80cf7baf><tr data-v-80cf7baf><th data-v-80cf7baf>\u53C2\u6570</th><th data-v-80cf7baf>\u8BF4\u660E</th><th data-v-80cf7baf>\u7C7B\u578B</th><th data-v-80cf7baf>\u53EF\u9009\u503C</th><th data-v-80cf7baf>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-80cf7baf><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>content</code></td><td data-v-80cf7baf>\u63D0\u793A\u5185\u5BB9</td><td data-v-80cf7baf>string</td><td data-v-80cf7baf>\u2014\u2014</td><td data-v-80cf7baf>bottom</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>position</code></td><td data-v-80cf7baf>\u5F39\u51FA\u65B9\u5411</td><td data-v-80cf7baf>string</td><td data-v-80cf7baf><code data-v-80cf7baf>top</code> <code data-v-80cf7baf>bottom</code> <code data-v-80cf7baf>right</code> <code data-v-80cf7baf>left</code></td><td data-v-80cf7baf>bottom</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>disabled</code></td><td data-v-80cf7baf>\u662F\u5426\u7981\u7528</td><td data-v-80cf7baf>boolean</td><td data-v-80cf7baf>\u2014\u2014</td><td data-v-80cf7baf>false</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>state</code></td><td data-v-80cf7baf>\u5C55\u793A\u72B6\u6001</td><td data-v-80cf7baf>string</td><td data-v-80cf7baf><code data-v-80cf7baf>hover</code> <code data-v-80cf7baf>active</code> <code data-v-80cf7baf>always</code></td><td data-v-80cf7baf>hover</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>no-arrow</code></td><td data-v-80cf7baf>\u662F\u5426\u663E\u793A\u7BAD\u5934</td><td data-v-80cf7baf>boolean</td><td data-v-80cf7baf>\u2014\u2014</td><td data-v-80cf7baf>false</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>bold</code></td><td data-v-80cf7baf>\u662F\u5426\u52A0\u7C97\u6587\u5B57</td><td data-v-80cf7baf>boolean</td><td data-v-80cf7baf>\u2014\u2014</td><td data-v-80cf7baf>false</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>bright</code></td><td data-v-80cf7baf>\u662F\u5426\u4F7F\u7528\u6D45\u8272\u4E3B\u9898</td><td data-v-80cf7baf>boolean</td><td data-v-80cf7baf>\u2014\u2014</td><td data-v-80cf7baf>false</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>background</code></td><td data-v-80cf7baf>\u81EA\u5B9A\u4E49\u80CC\u666F\u8272</td><td data-v-80cf7baf>string</td><td data-v-80cf7baf>\u2014\u2014</td><td data-v-80cf7baf>\u2014\u2014</td></tr><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>fontColor</code></td><td data-v-80cf7baf>\u81EA\u5B9A\u4E49\u6587\u5B57\u989C\u8272</td><td data-v-80cf7baf>string</td><td data-v-80cf7baf>\u2014\u2014</td><td data-v-80cf7baf>\u2014\u2014</td></tr></tbody></table></div><h2 id="slots" tabindex="-1" data-v-80cf7baf>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-80cf7baf>#</a></h2><div class="vp-table__container" data-v-80cf7baf><table data-v-80cf7baf><thead data-v-80cf7baf><tr data-v-80cf7baf><th data-v-80cf7baf>\u540D\u79F0</th><th data-v-80cf7baf>\u8BF4\u660E</th></tr></thead><tbody data-v-80cf7baf><tr data-v-80cf7baf><td data-v-80cf7baf><code data-v-80cf7baf>default</code></td><td data-v-80cf7baf>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-80cf7baf>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-80cf7baf>#</a></h2><p data-v-80cf7baf>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-80cf7baf><button title="Copy Code" class="copy" data-v-80cf7baf></button><span class="lang" data-v-80cf7baf>ts</span><pre class="shiki" data-v-80cf7baf><code data-v-80cf7baf><span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>import</span><span style="color:#A6ACCD;" data-v-80cf7baf> </span><span style="color:#89DDFF;" data-v-80cf7baf>type</span><span style="color:#A6ACCD;" data-v-80cf7baf> </span><span style="color:#89DDFF;" data-v-80cf7baf>{</span></span>
<span class="line" data-v-80cf7baf><span style="color:#F07178;" data-v-80cf7baf>  </span><span style="color:#A6ACCD;" data-v-80cf7baf>TooltipInstance</span><span style="color:#89DDFF;" data-v-80cf7baf>,</span></span>
<span class="line" data-v-80cf7baf><span style="color:#F07178;" data-v-80cf7baf>  </span><span style="color:#A6ACCD;" data-v-80cf7baf>TooltipPropsType</span><span style="color:#89DDFF;" data-v-80cf7baf>,</span></span>
<span class="line" data-v-80cf7baf><span style="color:#F07178;" data-v-80cf7baf>  </span><span style="color:#A6ACCD;" data-v-80cf7baf>TooltipPositionType</span><span style="color:#89DDFF;" data-v-80cf7baf>,</span></span>
<span class="line" data-v-80cf7baf><span style="color:#F07178;" data-v-80cf7baf>  </span><span style="color:#A6ACCD;" data-v-80cf7baf>TooltipStateType</span></span>
<span class="line" data-v-80cf7baf><span style="color:#89DDFF;" data-v-80cf7baf>}</span><span style="color:#A6ACCD;" data-v-80cf7baf> </span><span style="color:#89DDFF;" data-v-80cf7baf>from</span><span style="color:#A6ACCD;" data-v-80cf7baf> </span><span style="color:#89DDFF;" data-v-80cf7baf>&#39;</span><span style="color:#C3E88D;" data-v-80cf7baf>fighting-design</span><span style="color:#89DDFF;" data-v-80cf7baf>&#39;</span></span>
<span class="line" data-v-80cf7baf></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-80cf7baf>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-80cf7baf>#</a></h2>`,9),h={href:"https://github.com/Tyh2001",target:"_blank"};function _(g,A,E,q,m,T){const s=l("f-tag"),f=l("f-tooltip"),p=l("f-avatar");return e(),b("div",null,[r,o("div",D,[a(f,{content:"\u4E0A\u8FB9\u7684\u63D0\u793A\u4FE1\u606F",position:"top"},{default:t(()=>[a(s,{type:"primary"},{default:t(()=>[c("\u4E0A\u8FB9\u7684")]),_:1})]),_:1}),a(f,{content:"\u4E0B\u8FB9\u7684\u63D0\u793A\u4FE1\u606F",position:"bottom"},{default:t(()=>[a(s,{type:"success"},{default:t(()=>[c("\u4E0B\u8FB9\u7684")]),_:1})]),_:1}),a(f,{content:"\u5DE6\u8FB9\u7684\u63D0\u793A\u4FE1\u606F",position:"left"},{default:t(()=>[a(s,{type:"danger"},{default:t(()=>[c("\u5DE6\u8FB9\u7684")]),_:1})]),_:1}),a(f,{content:"\u53F3\u8FB9\u7684\u63D0\u793A\u4FE1\u606F",position:"right"},{default:t(()=>[a(s,{type:"warning"},{default:t(()=>[c("\u53F3\u8FB9\u7684")]),_:1})]),_:1})]),F,o("div",y,[a(f,{content:"Hover \u5C55\u793A",position:"top",state:"hover"},{default:t(()=>[a(s,{type:"primary"},{default:t(()=>[c("Hover \u5C55\u793A")]),_:1})]),_:1}),a(f,{content:"Active \u5C55\u793A",position:"top",state:"active"},{default:t(()=>[a(s,{type:"success"},{default:t(()=>[c("Active \u5C55\u793A")]),_:1})]),_:1}),a(f,{content:"Always \u5C55\u793A",position:"top",state:"always"},{default:t(()=>[a(s,{type:"warning"},{default:t(()=>[c("Always \u5C55\u793A")]),_:1})]),_:1})]),i,o("div",u,[a(f,{content:"\u6709\u7BAD\u5934\u7684",position:"top"},{default:t(()=>[a(s,{type:"primary"},{default:t(()=>[c("\u6709\u7BAD\u5934\u7684")]),_:1})]),_:1}),a(f,{content:"\u6CA1\u6709\u7BAD\u5934",position:"top","no-arrow":""},{default:t(()=>[a(s,{type:"success"},{default:t(()=>[c("\u6CA1\u6709\u7BAD\u5934")]),_:1})]),_:1})]),C,o("a",h,[a(p,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}const x=d(v,[["render",_],["__scopeId","data-v-80cf7baf"]]);export{w as __pageData,x as default};
