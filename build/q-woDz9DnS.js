import{u as c,_ as l,a as d,b as f,c as n,d as b,q as i,S as p}from"./q-vabwtRAL.js";import{_ as u}from"./q-uemlvruI.js";import{u as v}from"./q-COB7Q57z.js";const S=async(e,t)=>{const[s]=c(),a=new FormData(t),o=new URLSearchParams;a.forEach((r,m)=>{typeof r=="string"&&o.append(m,r)}),await s("?"+o.toString(),{type:"form",forceReload:!0})},g=(e,t)=>{t.getAttribute("data-spa-reset")==="true"&&t.reset(),t.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))},P=e=>{const t=l(e,["action","spaReset","reloadDocument","onSubmit$"]),s=v();return d("form",{action:"get",get"preventdefault:submit"(){return!e.reloadDocument},get"data-spa-reset"(){return e.spaReset?"true":void 0},...t,children:b(p,null,3,"BC_0"),onSubmit$:[...Array.isArray(e.onSubmit$)?e.onSubmit$:[e.onSubmit$],i(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_p9MSze0ojs4",[s]),i(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_KK5BfmKH4ZI")]},{action:f,"preventdefault:submit":n(a=>!a.reloadDocument,[e],"!p0.reloadDocument"),"data-spa-reset":n(a=>a.spaReset?"true":void 0,[e],'p0.spaReset?"true":undefined')},0,"BC_1")},_=Object.freeze(Object.defineProperty({__proto__:null,s_KK5BfmKH4ZI:g,s_Nk9PlpjQm9Y:P,s_p9MSze0ojs4:S},Symbol.toStringTag,{value:"Module"}));export{g as s_KK5BfmKH4ZI,P as s_Nk9PlpjQm9Y,S as s_p9MSze0ojs4};
