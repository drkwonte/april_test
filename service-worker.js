if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const u=s=>r(s,l),c={module:{uri:l},exports:o,require:u};e[l]=Promise.all(i.map((s=>c[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"april_test"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"css/app.695b6a14.css",revision:null},{url:"css/chunk.8937b129.css",revision:null},{url:"css/vocabulary.8937b129.css",revision:null},{url:"index.html",revision:"89aa010b929710e94faa34a1119bc16c"},{url:"js/app.06e40110.js",revision:null},{url:"js/chunk-vendors.9208c23a.js",revision:null},{url:"js/chunk.560d04ac.js",revision:null},{url:"js/titles.35d65558.js",revision:null},{url:"js/vocabulary.12ad55f1.js",revision:null},{url:"manifest.json",revision:"da127045fc56eb005258d28629a86cf7"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
