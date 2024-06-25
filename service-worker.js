/* Qwik Service Worker */
const appBundles=[["q-9ko78EC-.js",[6,16],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-B5DwNZ5I.js",[6,16],["e0ssiDXoeAM"]],["q-BlTe2JBs.js",[6,16],["0Ob197OQvXM","ALucpI6OnrQ","IOr6zw5cY8Y","NFvSYqECh94","uwTaZ0VliUA","vFQCN5tgPY0"]],["q-Bq36Wx9q.js",[]],["q-BVMoOba9.js",[6,16],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-C2V0sKiK.js",[16]],["q-CifUJrhk.js",[16]],["q-CKNaQOnK.js",[16]],["q-CR6kS05-.js",[6,16],["0vphQYqOdZI"]],["q-CR7gtu83.js",[16],["VKFlAWJuVm8"]],["q-D7C2sO3o.js",[16],["8A6C7ZcSzeg","ABKp9a5x1Ng","B0lqk5IDDy4","CNihN0C8G9Q","DepWhmsXAew","z8exOaS0rPU"]],["q-DDHR9JfG.js",[6,16],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-Ddr_t9wT.js",[16]],["q-dfrTasIl.js",[6,16],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-DkGl_k7H.js",[6,16],["wOIPfiQ04l4"]],["q-fJkQnue_.js",[],["DyVc0YBIqQU"]],["q-HYWap5GQ.js",[]],["q-qbxthzTw.js",[16]],["q-qdWfDGBN.js",[6,16],["3bhW509wYUw","A40CdThsOR8","a863yZstczg","bdbWIbDWAQs","D2xl9crM6rQ","E85s0lEsiCk","gGUy7gF9pEc","H7tUrMh86Fo","HnZqVSlCKEg","jefSYxlusnY","PLh6cWK3G7I","usJoM7vAEMM","wF6VtPoIwJc"]],["q-sH5ymBTo.js",[6,16],["tntnak2DhJ8"]],["q-t4O-_nc-.js",[16],["A5bZC7WO00A"]]];
const libraryBundleIds=[11];
const linkBundles=[[/^\/$/,[7,9,12,10]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
