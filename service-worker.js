"use strict";var precacheConfig=[["./index.html","6fcb0ae4f7be01a09b36762586d93a0e"],["./static/css/main.1cdd3cf6.css","6323457e23cd310d1861ecdf5f61bc65"],["./static/media/Brazil-3x.9ff4f293.png","9ff4f2933d80dca4728ca9bee488056e"],["./static/media/Croatia-3x.9941e61b.png","9941e61b0b6e62963e4aaa968102f2f8"],["./static/media/Egypt-3x.477ea27b.png","477ea27b0df91414751bca7ef78a85a7"],["./static/media/Mexico-3x.5c738378.png","5c73837880ad62b667c43f865eeb5be2"],["./static/media/Peru-3x.7acd4761.png","7acd4761441be0279b0a5763279b0b79"],["./static/media/Portugal-3x.eebaa15d.png","eebaa15d3bb99a756333ea30528d1af7"],["./static/media/Saudi_Arabia-3x.eb892c4f.png","eb892c4f21bf9f4496bf2d92219db28b"],["./static/media/Serbia-3x.f1227b95.png","f1227b95de9018fb1bc70b3cac45d559"],["./static/media/Spain-3x.cf934014.png","cf93401466ea0423ec7d56c5737a7cbe"],["./static/media/Star.8d299b7c.png","8d299b7cfe1b14884537821980fd4527"],["./static/media/Tunisia-3x.267957e1.png","267957e1e54a60b80c5fb24725302795"],["./static/media/banner.9bd20db3.png","9bd20db3f385bca19fd48776a847625f"],["./static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["./static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["./static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["./static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["./static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["./static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["./static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["./static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["./static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["./static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["./static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["./static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["./static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["./static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["./static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["./static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["./static/media/success.5bcf400d.png","5bcf400d72b5516dc4d97ad3e19df0ec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});