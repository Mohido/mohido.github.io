import{_ as q}from"./q-uemlvruI.js";import{E as Q,A as S,t as B,w as U,G as y,q as D,H as O,C as V,I as Y,i as z,J as $}from"./q-Cv4fnyrc.js";const G='((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',J=y("qc-s"),Ce=y("qc-c"),we=y("qc-ic"),p=y("qc-h"),X=y("qc-l"),Z=y("qc-n"),Ee=y("qc-a"),Se=y("qc-ir"),ve=D(()=>q(()=>import("./q-D3WBTSLL.js"),[]),"s_DyVc0YBIqQU"),Ae=()=>{},qe=V(D(()=>q(()=>import("./q-DX8K8ekG.js"),[]),"s_e0ssiDXoeAM")),P=new WeakMap,C=new Map,R=new Set,ee="qaction",De="qfunc",Te="qdata",E=e=>e.pathname+e.search+e.hash,_=(e,t)=>new URL(e,t.href),te=(e,t)=>e.origin===t.origin,I=e=>e.endsWith("/")?e:e+"/",F=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&I(e)===I(t)},ne=(e,t)=>e.search===t.search,T=(e,t)=>ne(e,t)&&F(e,t),re=(e,t,n)=>{let r=t??"";return n&&(r+=(r?"&":"?")+ee+"="+encodeURIComponent(n.id)),e+(e.endsWith("/")?"":"/")+"q-data.json"+r},be=(e,t)=>{const n=e.href;if(typeof n=="string"&&typeof e.target!="string"&&!e.reload)try{const r=_(n.trim(),t.url),s=_("",t.url);if(te(r,s))return E(r)}catch(r){console.error(r)}else if(e.reload)return E(_("",t.url));return null},ke=(e,t)=>{if(e){const n=_(e,t.url),r=_("",t.url);return!T(n,r)}return!1},Oe=(e,t)=>{if(e){const n=_(e,t.url),r=_("",t.url);return!F(n,r)}return!1},se=e=>e&&typeof e.then=="function",Pe=(e,t,n,r)=>{const s=oe(),i={head:s,withLocale:a=>O(r,a),resolveValue:a=>{const c=a.__id;if(a.__brand==="server_loader"&&!(c in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=e.loaders[c];if(se(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...t};for(let a=n.length-1;a>=0;a--){const c=n[a]&&n[a].head;c&&(typeof c=="function"?L(s,O(r,()=>c(i))):typeof c=="object"&&L(s,c))}return i.head},L=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),w(e.meta,t.meta),w(e.links,t.links),w(e.styles,t.styles),w(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},w=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const r=e.findIndex(s=>s.key===n.key);if(r>-1){e[r]=n;continue}}e.push(n)}},oe=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function ie(e,t){const n=W(e),r=N(e),s=W(t),o=N(t);return H(e,n,r,t,s,o)}function H(e,t,n,r,s,o){let i=null;for(;t<n;){const a=e.charCodeAt(t++),c=r.charCodeAt(s++);if(a===91){const l=K(e,t),f=t+(l?3:0),d=A(e,f,n,93),u=e.substring(f,d),h=A(e,d+1,n,47),g=e.substring(d+1,h);t=d+1;const m=s-1;if(l){const k=ce(u,g,r,m,o,e,t+g.length+1,n);if(k)return Object.assign(i||(i={}),k)}const v=A(r,m,o,47,g);if(v==-1)return null;const b=r.substring(m,v);if(!l&&!g&&!b)return null;s=v,(i||(i={}))[u]=decodeURIComponent(b)}else if(a!==c&&!(isNaN(c)&&ae(e,t)))return null}return x(e,t)&&x(r,s)?i||{}:null}function ae(e,t){return e.charCodeAt(t)===91&&K(e,t+1)}function N(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function x(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function W(e){return e.charCodeAt(0)===47?1:0}function K(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function A(e,t,n,r,s=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const o=s.length;for(let i=0;i<o;i++)if(e.charCodeAt(t-o+i)!==s.charCodeAt(i))return-1;return t-o}let j;(function(e){e[e.EOL=0]="EOL",e[e.OPEN_BRACKET=91]="OPEN_BRACKET",e[e.CLOSE_BRACKET=93]="CLOSE_BRACKET",e[e.DOT=46]="DOT",e[e.SLASH=47]="SLASH"})(j||(j={}));function ce(e,t,n,r,s,o,i,a){n.charCodeAt(r)===47&&r++;let c=s;const l=t+"/";for(;c>=r;){const f=H(o,i,a,n,c,s);if(f){let u=n.substring(r,Math.min(c,s));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),f[e]=decodeURIComponent(u),f}const d=le(n,r,l,c,r-1)+l.length;if(c===d)break;c=d}return null}function le(e,t,n,r,s){let o=e.lastIndexOf(n,r);return o==r-n.length&&(o=e.lastIndexOf(n,r-n.length-1)),o>t?o:s}const Re=async(e,t,n,r)=>{if(Array.isArray(e))for(const s of e){const o=s[0],i=ie(o,r);if(i){const a=s[1],c=s[3],l=new Array(a.length),f=[],d=fe(t,r);let u;return a.forEach((h,g)=>{M(h,f,m=>l[g]=m)}),M(d,f,h=>u=h==null?void 0:h.default),f.length>0&&await Promise.all(f),[o,i,l,u,c]}}return null},M=(e,t,n,r)=>{if(typeof e=="function"){const s=P.get(e);if(s)n(s);else{const o=e();typeof o.then=="function"?t.push(o.then(i=>{P.set(e,i),n(i)})):o&&n(o)}}},fe=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},Ie=(e,t,n,r,s=!1)=>{if(t!=="popstate"){const o=T(n,r),i=n.hash===r.hash;if(!o||!i){const a={_qCityScroll:ue()};s?e.history.replaceState(a,"",E(r)):e.history.pushState(a,"",E(r))}}},ue=()=>({x:0,y:0,w:0,h:0}),he=e=>{e=e.endsWith("/")?e:e+"/",R.has(e)||(R.add(e),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[e]}})))},Le=async(e,t,n)=>{const r=e.pathname,s=e.search,o=re(r,s,n==null?void 0:n.action);let i;n!=null&&n.action||(i=C.get(o)),(n==null?void 0:n.prefetchSymbols)!==!1&&he(r);let a;if(!i){const c=de(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),i=fetch(o,c).then(l=>{const f=new URL(l.url),d=f.pathname.endsWith("/q-data.json");if(f.origin!==location.origin||!d){location.href=f.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(u=>{const h=Q(u,t);if(!h){location.href=e.href;return}if(n!=null&&n.clearCache&&C.delete(o),h.redirect)location.href=h.redirect;else if(n!=null&&n.action){const{action:g}=n,m=h.loaders[g.id];a=()=>{g.resolve({status:l.status,result:m})}}return h});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=e.href)}),n!=null&&n.action||C.set(o,i)}return i.then(c=>(c||C.delete(o),a&&a(),c))},de=e=>{const t=e==null?void 0:e.data;if(t)return t instanceof FormData?{method:"POST",body:t}:{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Ne=()=>S(p),xe=()=>S(X),We=()=>S(Z),je=()=>B(U("qwikcity")),Me=(e,t,n,r,s)=>{e==="popstate"&&s?r.scrollTo(s.x,s.y):(e==="link"||e==="form")&&(ge(t,n)||r.scrollTo(0,0))},ge=(e,t)=>{const n=e.hash.slice(1),r=n&&document.getElementById(n);return r?(r.scrollIntoView(),!0):!!(!r&&e.hash&&T(e,t))},Qe=e=>({x:e.scrollLeft,y:e.scrollTop,w:Math.max(e.scrollWidth,e.clientWidth),h:Math.max(e.scrollHeight,e.clientHeight)}),Ve=()=>{const e=history.state;return e==null?void 0:e._qCityScroll},Fe=e=>{const t=history.state||{};t._qCityScroll=e,history.replaceState(t,"")},He="_qCityScroller",Ke=V(D(()=>q(()=>import("./q-Blli9mOr.js"),[]),"s_TxCFOy819ag"));function Be(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentElement;return e.closest("[q\\:container]")}const Ue=e=>z("script",{nonce:$(e,"nonce")},{dangerouslySetInnerHTML:G},null,3,"1Z_0"),Ye=(e,...t)=>{const{id:n,validators:r}=ye(t,e);function s(){return S(J,o=>{if(!(n in o))throw new Error(`routeLoader$ "${e.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.dev/qwikcity/route-loader/

    If your are managing reusable logic or a library it is essential that this function is re-exported from within 'layout.tsx' or 'index.tsx file of the existing route otherwise it will not run or throw exception.
    For more information check: https://qwik.dev/docs/cookbook/re-exporting-loaders/`);return Y(o,n)})}return s.__brand="server_loader",s.__qrl=e,s.__validators=r,s.__id=n,Object.freeze(s),s},ye=(e,t)=>{let n;const r=[];if(e.length===1){const s=e[0];s&&typeof s=="object"&&("validate"in s?r.push(s):(n=s.id,s.validation&&r.push(...s.validation)))}else e.length>1&&r.push(...e.filter(s=>!!s));return typeof n=="string"?n=`id_${n}`:n=t.getHash(),{validators:r.reverse(),id:n}},ze=async function*(e,t,n){const r=e.getReader();try{let s="";const o=new TextDecoder;for(;!(n!=null&&n.aborted);){const i=await r.read();if(i.done)break;s+=o.decode(i.value,{stream:!0});const a=s.split(/\n/);s=a.pop();for(const c of a)yield await Q(c,t)}}finally{r.releaseLock()}};export{Be as A,je as B,Ce as C,p as D,Ne as E,Ae as F,Ke as G,qe as H,De as I,ze as J,Te as K,Ye as L,He as Q,X as R,Ue as S,xe as a,Oe as b,oe as c,we as d,Z as e,J as f,be as g,Ee as h,Se as i,te as j,T as k,Le as l,Ve as m,Re as n,F as o,he as p,Pe as q,Me as r,ke as s,_ as t,We as u,C as v,Fe as w,Qe as x,ve as y,Ie as z};
