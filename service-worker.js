if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}})).then(e=>{const s=c(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"a39a010cae7061b744af3509c76ebd22"},{url:"/static/css/2.6a4fca40.chunk.css",revision:"3e4d990eb4be6a376e3c67230bb3f453"},{url:"/static/css/main.ca9324a8.chunk.css",revision:"b248a8c2efb374b598b3ec1a30b213b8"},{url:"/static/js/2.ea953bdd.chunk.js",revision:"3e994ecc03fc8581930e4e1f90b56211"},{url:"/static/js/2.ea953bdd.chunk.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/static/js/main.9447f853.chunk.js",revision:"e752690d4cf807a98dc8762505e28e0d"},{url:"/static/js/runtime~main.e3cfefeb.js",revision:"93b6af07ba0d9b345415ccd2485df099"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
