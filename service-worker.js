if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}})).then(e=>{const s=c(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"2564ba21848f688163951605535b87fc"},{url:"/static/css/2.7dbf001f.chunk.css",revision:"4440c61a3ab6857866527e42513902e2"},{url:"/static/css/main.1893eef2.chunk.css",revision:"90867aa7a6c4b6c6e58270efb775c16f"},{url:"/static/js/2.1bb90cc7.chunk.js",revision:"281576cdda3fc6be5c04f03d36ece8fc"},{url:"/static/js/2.1bb90cc7.chunk.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/static/js/main.08a35666.chunk.js",revision:"92d45290cc3429c1ee79d6293f3a6224"},{url:"/static/js/runtime~main.8d41a319.js",revision:"b27470f79bbb30068d1785164958001a"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
