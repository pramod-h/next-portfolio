if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bfe303a35a6bfdb3d002493c50464856"},{url:"/_next/static/-lJzVSgTZC657S41QXxCw/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/-lJzVSgTZC657S41QXxCw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/172-ac6f22725a17ff9d.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/250-9868a5d809ebf734.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/4503bbeb-61b7076413131829.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/66-07dce611870b5461.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/69-2c9b489b63a99b6b.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/898-19413eedad39009d.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/app/error-04d8b1644039c7c3.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/app/layout-6f58652e3356fed9.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/app/loading-c3af39c60beb1ca0.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/app/not-found-4a3d52a9b13bc093.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/app/page-581de0a6c2424c54.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/b536a0f1-8b61c60e75280aee.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/c15bf2b0-488e0d079c12f586.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/fd9d1056-a4f8209c933d4c2c.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/main-09ac4d9f3b3b3f06.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/main-app-b3623763e283c1ac.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-841a9f097954aa55.js",revision:"-lJzVSgTZC657S41QXxCw"},{url:"/_next/static/css/a3935d65044dd96a.css",revision:"a3935d65044dd96a"},{url:"/_next/static/css/bed65b15bbdd8d4f.css",revision:"bed65b15bbdd8d4f"},{url:"/_next/static/css/ed77504a1c81b2d1.css",revision:"ed77504a1c81b2d1"},{url:"/_next/static/media/008f2e8b4aae291f-s.woff2",revision:"54718ab24898dc8cd382ef3f285cfd0d"},{url:"/_next/static/media/3534416bbfdcc9be-s.p.woff2",revision:"8951283ba1faa0d2c460f42df9366ca1"},{url:"/_next/static/media/3c46462b57ac880e-s.woff2",revision:"3942629d96d5cee049ce769cefb891e1"},{url:"/_next/static/media/3e0204632fc66b80-s.woff2",revision:"fb246d96edd5fd01c759dc65c5c2594b"},{url:"/_next/static/media/4529092560591ab4-s.woff2",revision:"4f8626e31885b0732c32a2358239d9cf"},{url:"/_next/static/media/640ece80909a508b-s.p.woff2",revision:"c454edfb6f6f51bb1c65d35b0df779c4"},{url:"/_next/static/media/6ed04a86ee0f9353-s.woff2",revision:"0f441f4e176611d215dd821a24c2ed36"},{url:"/_next/static/media/78187650dd6b50b3-s.woff2",revision:"d84d7157146a9c9347d9c07d172dc651"},{url:"/_next/static/media/b8222d26e20b2e06-s.woff2",revision:"6c7142c441804cd078afe45be959fa78"},{url:"/_next/static/media/d5fafdc7bbd3315c-s.p.woff2",revision:"b105cf87bfe3a58447db822e7fdb0875"},{url:"/apple-touch-icon.png",revision:"f7650a7aba6869cb243509fb003152b6"},{url:"/card-bg-1.svg",revision:"6a3f5b5935fe95b6fa684b4e6d92d31f"},{url:"/code-snippet.svg",revision:"61ddd9bda9cfa95bdcd47e661f1417bc"},{url:"/company/agency-look.svg",revision:"ed2ac3d8f183ec27ab69b8f9be6fa9c4"},{url:"/company/denge-bilgisayar.svg",revision:"102b7ae6d173b29a67651fae30c3a0db"},{url:"/company/softanka.svg",revision:"50d4eb7d97ee7b389474407778bdafd4"},{url:"/company/tentwenty.svg",revision:"6a80f1a9b1761a8d6d673cb87c7e3cae"},{url:"/dot-pattern.svg",revision:"a8621d184551fb66353b82e97fc5743f"},{url:"/favicon-96x96.png",revision:"d263370564ce46543bb0b420c0cd23f6"},{url:"/favicon.ico",revision:"f6e7d91f0610caf8543b866a3c5e67fe"},{url:"/favicon.svg",revision:"c0ad79422727c61849ca67d9ec535e79"},{url:"/footer-lines.svg",revision:"64bfe242782bc7bec4bda65d736122c9"},{url:"/gradient-blob.svg",revision:"1e331df03da029b52a9c1efcc37cba9c"},{url:"/icon/icon-a11y.svg",revision:"ff373f826371f954fb66985de367e12a"},{url:"/icon/icon-api.svg",revision:"a795d2fd096a0ac02b184cc8fcb20461"},{url:"/icon/icon-css.svg",revision:"257ed57f9a56de12931c5d064599a831"},{url:"/icon/icon-figma.svg",revision:"2b5d59e2579d2a60e0073c370777ac6e"},{url:"/icon/icon-gsap.svg",revision:"bea8a1e1393e6f3c7eead05ff6f22679"},{url:"/icon/icon-html.svg",revision:"72d6e427b359309ed817aae5fbefabd8"},{url:"/icon/icon-js.svg",revision:"7c66f1a7f4ed12852ba489318634c5f5"},{url:"/icon/icon-optimization.svg",revision:"e1b5fdadf3c2fcf16ceee3603b910aa9"},{url:"/icon/icon-react.svg",revision:"5c5f9d5ee1e6e135d863dde0e49f3bae"},{url:"/icon/icon-webpack.svg",revision:"dd2707b4ffab3d7ca2301b6b27d2b3e1"},{url:"/noise.png",revision:"28bf7e4c296377e594343c99589f7577"},{url:"/resume-bg.svg",revision:"91e789d32e1559539eb8ef0d2ac87c97"},{url:"/showcase.svg",revision:"452952555334d31eb213a3188b3e3621"},{url:"/site.webmanifest",revision:"95d3b70842808a200a19c36d801fb1e0"},{url:"/sphere.svg",revision:"f34f74a32b9b8dabb8aaf3a2c58083d2"},{url:"/spiral.svg",revision:"459f1ebc464a8d371df8e4a5f6c16631"},{url:"/web-app-manifest-192x192.png",revision:"dd5dab0c1d19179aead247d8e0b55edd"},{url:"/web-app-manifest-512x512.png",revision:"345d3a82f93f2f2d819cbeaf305213bb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
