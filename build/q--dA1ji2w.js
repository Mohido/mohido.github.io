import{p as P,l as y,u as S,a as k,g,s as D,b as A}from"./q-COB7Q57z.js";import{u as O,k as f,l as $,a as m,d as C,q as u,S as L}from"./q-vabwtRAL.js";import{_ as p}from"./q-uemlvruI.js";const q=(o,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const s=new URL(e.href);P(s.pathname),e.hasAttribute("data-prefetch")&&y(s,e,{prefetchSymbols:!1,isPrefetch:!0})}},x=async(o,e)=>{const[t,s,n,l]=O();o.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:s,replaceState:n,scroll:l}),e.removeAttribute("aria-pressed")))},j=o=>{const e=S(),t=k(),{onClick$:s,prefetch:n,reload:l,replaceState:_,scroll:v,...r}=o,a=f(()=>g({...r,reload:l},t));r.href=a||o.href;const h=f(()=>!!a&&n!==!1&&n!=="js"&&D(a,t)||void 0),i=f(()=>h||!!a&&n!==!1&&A(a,t))?u(()=>p(()=>Promise.resolve().then(()=>d),void 0),"s_Osdg8FnYTw4"):void 0,b=a?$((c,E)=>{c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.preventDefault()}):void 0;return m("a",{"q:link":!!a,...r,"data-prefetch":h,children:C(L,null,3,"AD_0"),onClick$:[b,s,a?u(()=>p(()=>Promise.resolve().then(()=>d),void 0),"s_pIf0khHUxfY",[e,l,_,v]):void 0],onMouseOver$:[r.onMouseOver$,i],onFocus$:[r.onFocus$,i],onQVisible$:[r.onQVisible$,i]},null,0,"AD_1")},d=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:j,s_Osdg8FnYTw4:q,s_pIf0khHUxfY:x},Symbol.toStringTag,{value:"Module"}));export{j as s_8gdLBszqbaM,q as s_Osdg8FnYTw4,x as s_pIf0khHUxfY};
