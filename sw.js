var C='ma-video-v2',F=['./','./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(n){var cp=n.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return n}).catch(function(){return caches.match('./index.html')})}))});
