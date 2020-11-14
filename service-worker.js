"use strict";var precacheConfig=[["/weather-forecast/index.html","c1d9fc6875a1b950847f759b363858f2"],["/weather-forecast/static/css/main.816a4c96.css","7aa38166d5fd526df8912d0632957821"],["/weather-forecast/static/js/main.d01fab47.js","2661c20d6e33a2e4db495afa8d0ada7a"],["/weather-forecast/static/media/clear-day.53f709c5.svg","53f709c56c0cb268362ba119c34e072a"],["/weather-forecast/static/media/cloudy.79b3c647.svg","79b3c647bcb4502fe1f95e9d9c5de5d9"],["/weather-forecast/static/media/fog.788adf71.svg","788adf71ba1fe5a50e21db06e8c99153"],["/weather-forecast/static/media/night.b87ca8b6.svg","b87ca8b626b1d792e4b35da43f795ba7"],["/weather-forecast/static/media/overcast.40e43308.svg","40e43308bdcee2ddf18dca56c6808126"],["/weather-forecast/static/media/partly-cloudy-day.534afba6.svg","534afba6dc879efc03f27d5c964416bf"],["/weather-forecast/static/media/rain.316ec331.svg","316ec3310f84545f10f9525b44509d10"],["/weather-forecast/static/media/sleet.f4e14d44.svg","f4e14d44ac01a70d61f1cb77c4eebe21"],["/weather-forecast/static/media/snow.20379c89.svg","20379c89e064dca7173f49395ec16223"],["/weather-forecast/static/media/thunder.1afe7efd.svg","1afe7efda2ae788f15823e0f19d4a140"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/weather-forecast/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});