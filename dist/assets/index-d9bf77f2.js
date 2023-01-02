(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Wr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Un(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?ss(r):Un(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(J(e))return e}}const as=/;(?![^(]*\))/g,is=/:([^]+)/,os=/\/\*.*?\*\//gs;function ss(e){const t={};return e.replace(os,"").split(as).forEach(n=>{if(n){const r=n.split(is);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Kr(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Kr(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ls="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fs=Wr(ls);function Ni(e){return!!e||e===""}const br=e=>ne(e)?e:e==null?"":R(e)||J(e)&&(e.toString===Ri||!z(e.toString))?JSON.stringify(e,Mi,2):String(e),Mi=(e,t)=>t&&t.__v_isRef?Mi(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Fi(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!R(t)&&!zi(t)?String(t):t,G={},_t=[],Ce=()=>{},cs=()=>!1,us=/^on[^a-z]/,Bn=e=>us.test(e),Vr=e=>e.startsWith("onUpdate:"),ce=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ds=Object.prototype.hasOwnProperty,D=(e,t)=>ds.call(e,t),R=Array.isArray,xt=e=>Yn(e)==="[object Map]",Fi=e=>Yn(e)==="[object Set]",z=e=>typeof e=="function",ne=e=>typeof e=="string",Xr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Li=e=>J(e)&&z(e.then)&&z(e.catch),Ri=Object.prototype.toString,Yn=e=>Ri.call(e),ms=e=>Yn(e).slice(8,-1),zi=e=>Yn(e)==="[object Object]",Gr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ps=/-(\w)/g,ze=Wn(e=>e.replace(ps,(t,n)=>n?n.toUpperCase():"")),hs=/\B([A-Z])/g,Tt=Wn(e=>e.replace(hs,"-$1").toLowerCase()),Kn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),sr=Wn(e=>e?`on${Kn(e)}`:""),Mn=(e,t)=>!Object.is(e,t),lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ji=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const gs=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class vs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function bs(e,t=Me){t&&t.active&&t.effects.push(e)}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},$i=e=>(e.w&Qe)>0,Di=e=>(e.n&Qe)>0,ys=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Qe},_s=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];$i(a)&&!Di(a)?a.delete(e):t[n++]=a,a.w&=~Qe,a.n&=~Qe}t.length=n}},yr=new WeakMap;let jt=0,Qe=1;const _r=30;let we;const ut=Symbol(""),xr=Symbol("");class Qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bs(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Ge=!0,Qe=1<<++jt,jt<=_r?ys(this):Ma(this),this.fn()}finally{jt<=_r&&_s(this),Qe=1<<--jt,we=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const Hi=[];function St(){Hi.push(Ge),Ge=!1}function Nt(){const e=Hi.pop();Ge=e===void 0?!0:e}function ge(e,t,n){if(Ge&&we){let r=yr.get(e);r||yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),Ui(a)}}function Ui(e,t){let n=!1;jt<=_r?Di(e)||(e.n|=Qe,n=!$i(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function He(e,t,n,r,a,i){const o=yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=ji(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Gr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),xt(e)&&s.push(o.get(xr)));break;case"delete":R(e)||(s.push(o.get(ut)),xt(e)&&s.push(o.get(xr)));break;case"set":xt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&wr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);wr(Jr(l))}}function wr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Fa(r);for(const r of n)r.computed||Fa(r)}function Fa(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xs=Wr("__proto__,__v_isRef,__isVue"),Bi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xr)),ws=Zr(),ks=Zr(!1,!0),As=Zr(!0),La=Os();function Os(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=Y(this)[t].apply(this,n);return Nt(),r}}),e}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Hs:qi:t?Vi:Ki).get(r))return r;const o=R(r);if(!e&&o&&D(La,a))return Reflect.get(La,a,i);const s=Reflect.get(r,a,i);return(Xr(a)?Bi.has(a):xs(a))||(e||ge(r,"get",a),t)?s:fe(s)?o&&Gr(a)?s:s.value:J(s)?e?Xi(s):na(s):s}}const Es=Yi(),Cs=Yi(!0);function Yi(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!kr(a)&&!Wt(a)&&(o=Y(o),a=Y(a)),!R(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=R(n)&&Gr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?Mn(a,o)&&He(n,"set",r,a):He(n,"add",r,a)),l}}function Ps(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&He(e,"delete",t,void 0),r}function Is(e,t){const n=Reflect.has(e,t);return(!Xr(t)||!Bi.has(t))&&ge(e,"has",t),n}function Ts(e){return ge(e,"iterate",R(e)?"length":ut),Reflect.ownKeys(e)}const Wi={get:ws,set:Es,deleteProperty:Ps,has:Is,ownKeys:Ts},Ss={get:As,set(e,t){return!0},deleteProperty(e,t){return!0}},Ns=ce({},Wi,{get:ks,set:Cs}),ea=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&ge(a,"get",t),ge(a,"get",i));const{has:o}=Vn(a),s=r?ea:n?ia:aa;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function dn(e,t=!1){return e=e.__v_raw,!t&&ge(Y(e),"iterate",ut),Reflect.get(e,"size",e)}function Ra(e){e=Y(e);const t=Y(this);return Vn(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function za(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Mn(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function ja(e){const t=Y(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function $a(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ea:e?ia:aa;return!e&&ge(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function pn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ea:t?ia:aa;return!t&&ge(i,"iterate",l?xr:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return e==="delete"?!1:this}}function Ms(){const e={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:Ra,set:za,delete:ja,clear:$a,forEach:mn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:Ra,set:za,delete:ja,clear:$a,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),t[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[e,n,t,r]}const[Fs,Ls,Rs,zs]=Ms();function ta(e,t){const n=t?e?zs:Rs:e?Ls:Fs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const js={get:ta(!1,!1)},$s={get:ta(!1,!0)},Ds={get:ta(!0,!1)},Ki=new WeakMap,Vi=new WeakMap,qi=new WeakMap,Hs=new WeakMap;function Us(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bs(e){return e.__v_skip||!Object.isExtensible(e)?0:Us(ms(e))}function na(e){return Wt(e)?e:ra(e,!1,Wi,js,Ki)}function Ys(e){return ra(e,!1,Ns,$s,Vi)}function Xi(e){return ra(e,!0,Ss,Ds,qi)}function ra(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Bs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return Wt(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function Gi(e){return wt(e)||Wt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Ji(e){return Fn(e,"__v_skip",!0),e}const aa=e=>J(e)?na(e):e,ia=e=>J(e)?Xi(e):e;function Ws(e){Ge&&we&&(e=Y(e),Ui(e.dep||(e.dep=Jr())))}function Ks(e,t){e=Y(e),e.dep&&wr(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Vs(e){return fe(e)?e.value:e}const qs={get:(e,t,n)=>Vs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qi(e){return wt(e)?e:new Proxy(e,qs)}var Zi;class Xs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zi]=!1,this._dirty=!0,this.effect=new Qr(t,()=>{this._dirty||(this._dirty=!0,Ks(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Ws(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zi="__v_isReadonly";function Gs(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Ce):(r=e.get,a=e.set),new Xs(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){qn(i,t,n)}return a}function Pe(e,t,n,r){if(z(e)){const i=Je(e,t,n,r);return i&&Li(i)&&i.catch(o=>{qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}Js(e,n,a,r)}function Js(e,t,n,r=!0){console.error(e)}let Kt=!1,Ar=!1;const oe=[];let Le=0;const kt=[];let De=null,st=0;const eo=Promise.resolve();let oa=null;function Qs(e){const t=oa||eo;return e?t.then(this?e.bind(this):e):t}function Zs(e){let t=Le+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Vt(oe[r])<e?t=r+1:n=r}return t}function sa(e){(!oe.length||!oe.includes(e,Kt&&e.allowRecurse?Le+1:Le))&&(e.id==null?oe.push(e):oe.splice(Zs(e.id),0,e),to())}function to(){!Kt&&!Ar&&(Ar=!0,oa=eo.then(ro))}function el(e){const t=oe.indexOf(e);t>Le&&oe.splice(t,1)}function tl(e){R(e)?kt.push(...e):(!De||!De.includes(e,e.allowRecurse?st+1:st))&&kt.push(e),to()}function Da(e,t=Kt?Le+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function no(e){if(kt.length){const t=[...new Set(kt)];if(kt.length=0,De){De.push(...t);return}for(De=t,De.sort((n,r)=>Vt(n)-Vt(r)),st=0;st<De.length;st++)De[st]();De=null,st=0}}const Vt=e=>e.id==null?1/0:e.id,nl=(e,t)=>{const n=Vt(e)-Vt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ro(e){Ar=!1,Kt=!0,oe.sort(nl);const t=Ce;try{for(Le=0;Le<oe.length;Le++){const n=oe[Le];n&&n.active!==!1&&Je(n,null,14)}}finally{Le=0,oe.length=0,no(),Kt=!1,oa=null,(oe.length||kt.length)&&ro()}}function rl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||G;v&&(a=n.map(k=>ne(k)?k.trim():k)),m&&(a=n.map(ji))}let s,l=r[s=sr(t)]||r[s=sr(ze(t))];!l&&i&&(l=r[s=sr(Tt(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function ao(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=c=>{const d=ao(c,t,!0);d&&(s=!0,ce(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ce(o,i),J(e)&&r.set(e,o),o)}function Xn(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,Tt(t))||D(e,t))}let Ae=null,io=null;function Ln(e){const t=Ae;return Ae=e,io=e&&e.type.__scopeId||null,t}function al(e,t=Ae,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=Ln(t);let o;try{o=e(...a)}finally{Ln(i),r._d&&Xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:L,inheritAttrs:N}=e;let H,x;const C=Ln(e);try{if(n.shapeFlag&4){const j=a||r;H=Fe(d.call(j,j,m,i,k,v,L)),x=l}else{const j=t;H=Fe(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),x=t.props?l:il(l)}}catch(j){Ht.length=0,qn(j,e,1),H=V(qt)}let E=H;if(x&&N!==!1){const j=Object.keys(x),{shapeFlag:U}=E;j.length&&U&7&&(o&&j.some(Vr)&&(x=ol(x,o)),E=Ct(E,x))}return n.dirs&&(E=Ct(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),H=E,Ln(C),H}const il=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},ol=(e,t)=>{const n={};for(const r in e)(!Vr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function sl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ha(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Xn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ha(r,o,c):!0:!!o;return!1}function Ha(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function ll({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const fl=e=>e.__isSuspense;function cl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):tl(e)}function ul(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){const r=ae||Ae;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const hn={};function Cn(e,t,n){return oo(e,t,n)}function oo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=G){const s=ae;let l,c=!1,d=!1;if(fe(e)?(l=()=>e.value,c=kr(e)):wt(e)?(l=()=>e,r=!0):R(e)?(d=!0,c=e.some(E=>wt(E)||kr(E)),l=()=>e.map(E=>{if(fe(E))return E.value;if(wt(E))return vt(E);if(z(E))return Je(E,s,2)})):z(e)?t?l=()=>Je(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Pe(e,s,3,[v])}:l=Ce,t&&r){const E=l;l=()=>vt(E())}let m,v=E=>{m=x.onStop=()=>{Je(E,s,4)}},k;if(Gt)if(v=Ce,t?n&&Pe(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=lf();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Ce;let L=d?new Array(e.length).fill(hn):hn;const N=()=>{if(x.active)if(t){const E=x.run();(r||c||(d?E.some((j,U)=>Mn(j,L[U])):Mn(E,L)))&&(m&&m(),Pe(t,s,3,[E,L===hn?void 0:d&&L[0]===hn?[]:L,v]),L=E)}else x.run()};N.allowRecurse=!!t;let H;a==="sync"?H=N:a==="post"?H=()=>me(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),H=()=>sa(N));const x=new Qr(l,H);t?n?N():L=x.run():a==="post"?me(x.run.bind(x),s&&s.suspense):x.run();const C=()=>{x.stop(),s&&s.scope&&qr(s.scope.effects,x)};return k&&k.push(C),C}function dl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?so(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=ae;Pt(this);const s=oo(a,i.bind(r),n);return o?Pt(o):dt(),s}function so(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function vt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))vt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(Fi(e)||xt(e))e.forEach(n=>{vt(n,t)});else if(zi(e))for(const n in e)vt(e[n],t);return e}function Mt(e){return z(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader,lo=e=>e.type.__isKeepAlive;function ml(e,t){fo(e,"a",t)}function pl(e,t){fo(e,"da",t)}function fo(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)lo(a.parent.vnode)&&hl(r,t,n,a),a=a.parent}}function hl(e,t,n,r){const a=Gn(t,e,r,!0);co(()=>{qr(r[t],a)},n)}function Gn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Pt(n);const s=Pe(t,n,e,o);return dt(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=ae)=>(!Gt||e==="sp")&&Gn(e,(...r)=>t(...r),n),gl=We("bm"),vl=We("m"),bl=We("bu"),yl=We("u"),_l=We("bum"),co=We("um"),xl=We("sp"),wl=We("rtg"),kl=We("rtc");function Al(e,t=ae){Gn("ec",e,t)}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Pe(l,n,8,[e.el,s,e,t]),Nt())}}const uo="components";function Jn(e,t){return El(uo,e,!0,t)||e}const Ol=Symbol();function El(e,t,n=!0,r=!1){const a=Ae||ae;if(a){const i=a.type;if(e===uo){const s=af(i,!1);if(s&&(s===t||s===ze(t)||s===Kn(ze(t))))return i}const o=Ua(a[e]||i[e],t)||Ua(a.appContext[e],t);return!o&&r?i:o}}function Ua(e,t){return e&&(e[t]||e[ze(t)]||e[Kn(ze(t))])}function Cl(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Or=e=>e?wo(e)?ua(e)||e.proxy:Or(e.parent):null,Dt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>la(e),$forceUpdate:e=>e.f||(e.f=()=>sa(e.update)),$nextTick:e=>e.n||(e.n=Qs.bind(e.proxy)),$watch:e=>dl.bind(e)}),cr=(e,t)=>e!==G&&!e.__isScriptSetup&&D(e,t),Pl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(cr(r,t))return o[t]=1,r[t];if(a!==G&&D(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&D(c,t))return o[t]=3,i[t];if(n!==G&&D(n,t))return o[t]=4,n[t];Er&&(o[t]=0)}}const d=Dt[t];let m,v;if(d)return t==="$attrs"&&ge(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==G&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return cr(a,t)?(a[t]=n,!0):r!==G&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==G&&D(e,o)||cr(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Dt,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Er=!0;function Il(e){const t=la(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:L,activated:N,deactivated:H,beforeDestroy:x,beforeUnmount:C,destroyed:E,unmounted:j,render:U,renderTracked:ue,renderTriggered:ie,errorCaptured:_e,serverPrefetch:be,expose:je,inheritAttrs:Lt,components:on,directives:sn,filters:ar}=t;if(c&&Tl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const W=o[Q];z(W)&&(r[Q]=W.bind(n))}if(a){const Q=a.call(n,n);J(Q)&&(e.data=na(Q))}if(Er=!0,i)for(const Q in i){const W=i[Q],nt=z(W)?W.bind(n,n):z(W.get)?W.get.bind(n,n):Ce,ln=!z(W)&&z(W.set)?W.set.bind(n):Ce,rt=ye({get:nt,set:ln});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Te=>rt.value=Te})}if(s)for(const Q in s)mo(s[Q],r,n,Q);if(l){const Q=z(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(W=>{ul(W,Q[W])})}d&&Ba(d,e,"c");function se(Q,W){R(W)?W.forEach(nt=>Q(nt.bind(n))):W&&Q(W.bind(n))}if(se(gl,m),se(vl,v),se(bl,k),se(yl,L),se(ml,N),se(pl,H),se(Al,_e),se(kl,ue),se(wl,ie),se(_l,C),se(co,j),se(xl,be),R(je))if(je.length){const Q=e.exposed||(e.exposed={});je.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:nt=>n[W]=nt})})}else e.exposed||(e.exposed={});U&&e.render===Ce&&(e.render=U),Lt!=null&&(e.inheritAttrs=Lt),on&&(e.components=on),sn&&(e.directives=sn)}function Tl(e,t,n=Ce,r=!1){R(e)&&(e=Cr(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=En(i.from||a,i.default,!0):o=En(i.from||a):o=En(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ba(e,t,n){Pe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function mo(e,t,n,r){const a=r.includes(".")?so(n,r):()=>n[r];if(ne(e)){const i=t[e];z(i)&&Cn(a,i)}else if(z(e))Cn(a,e.bind(n));else if(J(e))if(R(e))e.forEach(i=>mo(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Cn(a,i,e)}}function la(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Rn(l,c,o,!0)),Rn(l,t,o)),J(t)&&i.set(t,l),l}function Rn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Rn(e,i,n,!0),a&&a.forEach(o=>Rn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Sl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Sl={data:Ya,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:ot,directives:ot,watch:Ml,provide:Ya,inject:Nl};function Ya(e,t){return t?e?function(){return ce(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Nl(e,t){return ot(Cr(e),Cr(t))}function Cr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?ce(ce(Object.create(null),e),t):t}function Ml(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Fl(e,t,n,r=!1){const a={},i={};Fn(i,Zn,1),e.propsDefaults=Object.create(null),po(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ys(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ll(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Xn(e.emitsOptions,v))continue;const k=t[v];if(l)if(D(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const L=ze(v);a[L]=Pr(l,s,L,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{po(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=Tt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Pr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m))&&(delete i[m],c=!0)}c&&He(e,"set","$attrs")}function po(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(On(l))continue;const c=t[l];let d;a&&D(a,d=ze(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Xn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||G;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Pr(a,l,m,c[m],e,!D(c,m))}}return o}function Pr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Pt(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Tt(n))&&(r=!0))}return r}function ho(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const d=m=>{l=!0;const[v,k]=ho(m,t,!0);ce(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,_t),_t;if(R(i))for(let d=0;d<i.length;d++){const m=ze(i[d]);Wa(m)&&(o[m]=G)}else if(i)for(const d in i){const m=ze(d);if(Wa(m)){const v=i[d],k=o[m]=R(v)||z(v)?{type:v}:Object.assign({},v);if(k){const L=qa(Boolean,k.type),N=qa(String,k.type);k[0]=L>-1,k[1]=N<0||L<N,(L>-1||D(k,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function Wa(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Va(e,t){return Ka(e)===Ka(t)}function qa(e,t){return R(t)?t.findIndex(n=>Va(n,e)):z(t)&&Va(t,e)?0:-1}const go=e=>e[0]==="_"||e==="$stable",fa=e=>R(e)?e.map(Fe):[Fe(e)],Rl=(e,t,n)=>{if(t._n)return t;const r=al((...a)=>fa(t(...a)),n);return r._c=!1,r},vo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(go(a))continue;const i=e[a];if(z(i))t[a]=Rl(a,i,r);else if(i!=null){const o=fa(i);t[a]=()=>o}}},bo=(e,t)=>{const n=fa(t);e.slots.default=()=>n},zl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Fn(t,"_",n)):vo(t,e.slots={})}else e.slots={},t&&bo(e,t);Fn(e.slots,Zn,1)},jl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=G;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ce(a,t),!n&&s===1&&delete a._):(i=!t.$stable,vo(t,a)),o=t}else t&&(bo(e,t),o={default:1});if(i)for(const s in a)!go(s)&&!(s in o)&&delete a[s]};function yo(){return{app:null,config:{isNativeTag:cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $l=0;function Dl(e,t){return function(r,a=null){z(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=yo(),o=new Set;let s=!1;const l=i.app={_uid:$l++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...d)):z(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=V(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ua(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Ir(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>Ir(v,t&&(R(t)?t[k]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,D(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),z(l))Je(l,s,12,[o,d]);else{const v=ne(l),k=fe(l);if(v||k){const L=()=>{if(e.f){const N=v?D(m,l)?m[l]:d[l]:l.value;a?R(N)&&qr(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,me(L,n)):L()}}}const me=cl;function Hl(e){return Ul(e)}function Ul(e,t){const n=gs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ce,insertStaticContent:L}=e,N=(f,u,p,g=null,h=null,_=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(g=fn(f),Te(f,h,_,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case Qn:H(f,u,p,g);break;case qt:x(f,u,p,g);break;case In:f==null&&C(u,p,g,A);break;case he:on(f,u,p,g,h,_,A,y,w);break;default:P&1?U(f,u,p,g,h,_,A,y,w):P&6?sn(f,u,p,g,h,_,A,y,w):(P&64||P&128)&&b.process(f,u,p,g,h,_,A,y,w,ht)}T!=null&&h&&Ir(T,f&&f.ref,_,u||f,!u)},H=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},x=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},C=(f,u,p,g)=>{[f.el,f.anchor]=L(f.children,u,p,g,f.el,f.anchor)},E=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},j=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,_,A,y,w)=>{A=A||u.type==="svg",f==null?ue(u,p,g,h,_,A,y,w):be(f,u,h,_,A,y,w)},ue=(f,u,p,g,h,_,A,y)=>{let w,b;const{type:T,props:P,shapeFlag:S,transition:F,dirs:$}=f;if(w=f.el=o(f.type,_,P&&P.is,P),S&8?d(w,f.children):S&16&&_e(f.children,w,null,g,h,_&&T!=="foreignObject",A,y),$&&at(f,null,g,"created"),P){for(const B in P)B!=="value"&&!On(B)&&i(w,B,null,P[B],_,f.children,g,h,$e);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ne(b,g,f)}ie(w,f,f.scopeId,A,g),$&&at(f,null,g,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;K&&F.beforeEnter(w),r(w,u,p),((b=P&&P.onVnodeMounted)||K||$)&&me(()=>{b&&Ne(b,g,f),K&&F.enter(w),$&&at(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let _=0;_<g.length;_++)k(f,g[_]);if(h){let _=h.subTree;if(u===_){const A=h.vnode;ie(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},_e=(f,u,p,g,h,_,A,y,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=y?Xe(f[b]):Fe(f[b]);N(null,T,u,p,g,h,_,A,y)}},be=(f,u,p,g,h,_,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=u;w|=f.patchFlag&16;const P=f.props||G,S=u.props||G;let F;p&&it(p,!1),(F=S.onVnodeBeforeUpdate)&&Ne(F,p,u,f),T&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const $=h&&u.type!=="foreignObject";if(b?je(f.dynamicChildren,b,y,p,g,$,_):A||W(f,u,y,null,p,g,$,_,!1),w>0){if(w&16)Lt(y,u,P,S,p,g,h);else if(w&2&&P.class!==S.class&&i(y,"class",null,S.class,h),w&4&&i(y,"style",P.style,S.style,h),w&8){const K=u.dynamicProps;for(let B=0;B<K.length;B++){const ee=K[B],xe=P[ee],gt=S[ee];(gt!==xe||ee==="value")&&i(y,ee,xe,gt,h,f.children,p,g,$e)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Lt(y,u,P,S,p,g,h);((F=S.onVnodeUpdated)||T)&&me(()=>{F&&Ne(F,p,u,f),T&&at(u,f,p,"updated")},g)},je=(f,u,p,g,h,_,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],T=w.el&&(w.type===he||!zt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,T,null,g,h,_,A,!0)}},Lt=(f,u,p,g,h,_,A)=>{if(p!==g){if(p!==G)for(const y in p)!On(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,_,$e);for(const y in g){if(On(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,_,$e)}"value"in g&&i(f,"value",p.value,g.value)}},on=(f,u,p,g,h,_,A,y,w)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:S,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(T,p,g),_e(u.children,p,T,h,_,A,y,w)):P>0&&P&64&&S&&f.dynamicChildren?(je(f.dynamicChildren,S,p,h,_,A,y),(u.key!=null||h&&u===h.subTree)&&_o(f,u,!0)):W(f,u,p,T,h,_,A,y,w)},sn=(f,u,p,g,h,_,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):ar(u,p,g,h,_,A,w):Ea(f,u,w)},ar=(f,u,p,g,h,_,A)=>{const y=f.component=Zl(f,g,h);if(lo(f)&&(y.ctx.renderer=ht),ef(y),y.asyncDep){if(h&&h.registerDep(y,se),!f.el){const w=y.subTree=V(qt);x(null,w,u,p)}return}se(y,f,u,p,h,_,A)},Ea=(f,u,p)=>{const g=u.component=f.component;if(sl(f,u,p))if(g.asyncDep&&!g.asyncResolved){Q(g,u,p);return}else g.next=u,el(g.update),g.update();else u.el=f.el,g.vnode=u},se=(f,u,p,g,h,_,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:P,u:S,parent:F,vnode:$}=f,K=T,B;it(f,!1),T?(T.el=$.el,Q(f,T,A)):T=$,P&&lr(P),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Ne(B,F,T,$),it(f,!0);const ee=fr(f),xe=f.subTree;f.subTree=ee,N(xe,ee,m(xe.el),fn(xe),f,h,_),T.el=ee.el,K===null&&ll(f,ee.el),S&&me(S,h),(B=T.props&&T.props.onVnodeUpdated)&&me(()=>Ne(B,F,T,$),h)}else{let T;const{el:P,props:S}=u,{bm:F,m:$,parent:K}=f,B=Pn(u);if(it(f,!1),F&&lr(F),!B&&(T=S&&S.onVnodeBeforeMount)&&Ne(T,K,u),it(f,!0),P&&or){const ee=()=>{f.subTree=fr(f),or(P,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=fr(f);N(null,ee,p,g,f,h,_),u.el=ee.el}if($&&me($,h),!B&&(T=S&&S.onVnodeMounted)){const ee=u;me(()=>Ne(T,K,ee),h)}(u.shapeFlag&256||K&&Pn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&me(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Qr(y,()=>sa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,it(f,!0),b()},Q=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Ll(f,u.props,g,p),jl(f,u.children,p),St(),Da(),Nt()},W=(f,u,p,g,h,_,A,y,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:S,shapeFlag:F}=u;if(S>0){if(S&128){ln(b,P,p,g,h,_,A,y,w);return}else if(S&256){nt(b,P,p,g,h,_,A,y,w);return}}F&8?(T&16&&$e(b,h,_),P!==b&&d(p,P)):T&16?F&16?ln(b,P,p,g,h,_,A,y,w):$e(b,h,_,!0):(T&8&&d(p,""),F&16&&_e(P,p,g,h,_,A,y,w))},nt=(f,u,p,g,h,_,A,y,w)=>{f=f||_t,u=u||_t;const b=f.length,T=u.length,P=Math.min(b,T);let S;for(S=0;S<P;S++){const F=u[S]=w?Xe(u[S]):Fe(u[S]);N(f[S],F,p,null,h,_,A,y,w)}b>T?$e(f,h,_,!0,!1,P):_e(u,p,g,h,_,A,y,w,P)},ln=(f,u,p,g,h,_,A,y,w)=>{let b=0;const T=u.length;let P=f.length-1,S=T-1;for(;b<=P&&b<=S;){const F=f[b],$=u[b]=w?Xe(u[b]):Fe(u[b]);if(zt(F,$))N(F,$,p,null,h,_,A,y,w);else break;b++}for(;b<=P&&b<=S;){const F=f[P],$=u[S]=w?Xe(u[S]):Fe(u[S]);if(zt(F,$))N(F,$,p,null,h,_,A,y,w);else break;P--,S--}if(b>P){if(b<=S){const F=S+1,$=F<T?u[F].el:g;for(;b<=S;)N(null,u[b]=w?Xe(u[b]):Fe(u[b]),p,$,h,_,A,y,w),b++}}else if(b>S)for(;b<=P;)Te(f[b],h,_,!0),b++;else{const F=b,$=b,K=new Map;for(b=$;b<=S;b++){const pe=u[b]=w?Xe(u[b]):Fe(u[b]);pe.key!=null&&K.set(pe.key,b)}let B,ee=0;const xe=S-$+1;let gt=!1,Ia=0;const Rt=new Array(xe);for(b=0;b<xe;b++)Rt[b]=0;for(b=F;b<=P;b++){const pe=f[b];if(ee>=xe){Te(pe,h,_,!0);continue}let Se;if(pe.key!=null)Se=K.get(pe.key);else for(B=$;B<=S;B++)if(Rt[B-$]===0&&zt(pe,u[B])){Se=B;break}Se===void 0?Te(pe,h,_,!0):(Rt[Se-$]=b+1,Se>=Ia?Ia=Se:gt=!0,N(pe,u[Se],p,null,h,_,A,y,w),ee++)}const Ta=gt?Bl(Rt):_t;for(B=Ta.length-1,b=xe-1;b>=0;b--){const pe=$+b,Se=u[pe],Sa=pe+1<T?u[pe+1].el:g;Rt[b]===0?N(null,Se,p,Sa,h,_,A,y,w):gt&&(B<0||b!==Ta[B]?rt(Se,p,Sa,2):B--)}}},rt=(f,u,p,g,h=null)=>{const{el:_,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,ht);return}if(A===he){r(_,u,p);for(let P=0;P<w.length;P++)rt(w[P],u,p,g);r(f.anchor,u,p);return}if(A===In){E(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(_),r(_,u,p),me(()=>y.enter(_),h);else{const{leave:P,delayLeave:S,afterLeave:F}=y,$=()=>r(_,u,p),K=()=>{P(_,()=>{$(),F&&F()})};S?S(_,$,K):K()}else r(_,u,p)},Te=(f,u,p,g=!1,h=!1)=>{const{type:_,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:S}=f;if(y!=null&&Ir(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&S,$=!Pn(f);let K;if($&&(K=A&&A.onVnodeBeforeUnmount)&&Ne(K,u,f),T&6)rs(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}F&&at(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,h,ht,g):b&&(_!==he||P>0&&P&64)?$e(b,u,p,!1,!0):(_===he&&P&384||!h&&T&16)&&$e(w,u,p),g&&Ca(f)}($&&(K=A&&A.onVnodeUnmounted)||F)&&me(()=>{K&&Ne(K,u,f),F&&at(f,null,u,"unmounted")},p)},Ca=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===he){ns(p,g);return}if(u===In){j(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,_);y?y(f.el,_,w):w()}else _()},ns=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},rs=(f,u,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:y}=f;g&&lr(g),h.stop(),_&&(_.active=!1,Te(A,f,u,p)),y&&me(y,u),me(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$e=(f,u,p,g=!1,h=!1,_=0)=>{for(let A=_;A<f.length;A++)Te(f[A],u,p,g,h)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Pa=(f,u,p)=>{f==null?u._vnode&&Te(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Da(),no(),u._vnode=f},ht={p:N,um:Te,m:rt,r:Ca,mt:ar,mc:_e,pc:W,pbc:je,n:fn,o:e};let ir,or;return t&&([ir,or]=t(ht)),{render:Pa,hydrate:ir,createApp:Dl(Pa,ir)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _o(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||_o(o,s)),s.type===Qn&&(s.el=o.el)}}function Bl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Yl=e=>e.__isTeleport,he=Symbol(void 0),Qn=Symbol(void 0),qt=Symbol(void 0),In=Symbol(void 0),Ht=[];let Oe=null;function Ot(e=!1){Ht.push(Oe=e?null:[])}function Wl(){Ht.pop(),Oe=Ht[Ht.length-1]||null}let Xt=1;function Xa(e){Xt+=e}function Kl(e){return e.dynamicChildren=Xt>0?Oe||_t:null,Wl(),Xt>0&&Oe&&Oe.push(e),e}function Et(e,t,n,r,a,i){return Kl(M(e,t,n,r,a,i,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",xo=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||fe(e)||z(e)?{i:Ae,r:e,k:t,f:!!n}:e:null;function M(e,t=null,n=null,r=0,a=null,i=e===he?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xo(t),ref:t&&Tn(t),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ae};return s?(ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Xt>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const V=Vl;function Vl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ol)&&(e=qt),Tr(e)){const s=Ct(e,t,!0);return n&&ca(s,n),Xt>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(of(e)&&(e=e.__vccOpts),t){t=ql(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Kr(s)),J(l)&&(Gi(l)&&!R(l)&&(l=ce({},l)),t.style=Un(l))}const o=ne(e)?1:fl(e)?128:Yl(e)?64:J(e)?4:z(e)?2:0;return M(e,t,n,r,a,o,i,!0)}function ql(e){return e?Gi(e)||Zn in e?ce({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Gl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&xo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function te(e=" ",t=0){return V(Qn,null,e,t)}function Xl(e,t){const n=V(In,null,e);return n.staticCount=t,n}function Fe(e){return e==null||typeof e=="boolean"?V(qt):R(e)?V(he,null,e.slice()):typeof e=="object"?Xe(e):V(Qn,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Zn in t)?t._ctx=Ae:a===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[te(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Kr([t.class,r.class]));else if(a==="style")t.style=Un([t.style,r.style]);else if(Bn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Pe(e,t,7,[n,r])}const Jl=yo();let Ql=0;function Zl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Jl,i={uid:Ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new vs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ho(r,a),emitsOptions:ao(r,a),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rl.bind(null,i),e.ce&&e.ce(i),i}let ae=null;const Pt=e=>{ae=e,e.scope.on()},dt=()=>{ae&&ae.scope.off(),ae=null};function wo(e){return e.vnode.shapeFlag&4}let Gt=!1;function ef(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=wo(e);Fl(e,n,a,t),zl(e,r);const i=a?tf(e,t):void 0;return Gt=!1,i}function tf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ji(new Proxy(e.ctx,Pl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?rf(e):null;Pt(e),St();const i=Je(r,e,0,[e.props,a]);if(Nt(),dt(),Li(i)){if(i.then(dt,dt),t)return i.then(o=>{Ga(e,o,t)}).catch(o=>{qn(o,e,0)});e.asyncDep=i}else Ga(e,i,t)}else ko(e,t)}function Ga(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Qi(t)),ko(e,n)}let Ja;function ko(e,t,n){const r=e.type;if(!e.render){if(!t&&Ja&&!r.render){const a=r.template||la(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:s},o),l);r.render=Ja(a,c)}}e.render=r.render||Ce}Pt(e),St(),Il(e),Nt(),dt()}function nf(e){return new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}})}function rf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=nf(e))},slots:e.slots,emit:e.emit,expose:t}}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function af(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function of(e){return z(e)&&"__vccOpts"in e}const ye=(e,t)=>Gs(e,t,Gt);function Ao(e,t,n){const r=arguments.length;return r===2?J(t)&&!R(t)?Tr(t)?V(e,null,[t]):V(e,t):V(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),V(e,t,n))}const sf=Symbol(""),lf=()=>En(sf),ff="3.2.45",cf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,Qa=lt&&lt.createElement("template"),uf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(cf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function df(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function mf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){for(const i in n)Sr(r,i,n[i]);if(t&&!ne(t))for(const i in t)n[i]==null&&Sr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Za=/\s*!important$/;function Sr(e,t,n){if(R(n))n.forEach(r=>Sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pf(e,t);Za.test(n)?e.setProperty(Tt(r),n.replace(Za,""),"important"):e[r]=n}}const ei=["Webkit","Moz","ms"],ur={};function pf(e,t){const n=ur[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return ur[t]=r;r=Kn(r);for(let a=0;a<ei.length;a++){const i=ei[a]+r;if(i in e)return ur[t]=i}return t}const ti="http://www.w3.org/1999/xlink";function hf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n);else{const i=fs(t);n==null||i&&!Ni(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ni(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function vf(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}function yf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=_f(t);if(r){const c=i[t]=kf(r,a);vf(e,s,c,l)}else o&&(bf(e,s,o,l),i[t]=void 0)}}const ni=/(?:Once|Passive|Capture)$/;function _f(e){let t;if(ni.test(e)){t={};let r;for(;r=e.match(ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let dr=0;const xf=Promise.resolve(),wf=()=>dr||(xf.then(()=>dr=0),dr=Date.now());function kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=wf(),n}function Af(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ri=/^on[a-z]/,Of=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?df(e,r,a):t==="style"?mf(e,n,r):Bn(t)?Vr(t)||yf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ef(e,t,r,a))?gf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hf(e,t,r,a))};function Ef(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ri.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ri.test(t)&&ne(n)?!1:t in e}const Cf=ce({patchProp:Of},uf);let ai;function Pf(){return ai||(ai=Hl(Cf))}const If=(...e)=>{const t=Pf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Tf(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Tf(e){return ne(e)?document.querySelector(e):e}const Oo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Sf={},Nf=M("div",{class:"flex items-center text-center border-red-900 bg-red-1 shadow-inner rounded-full w-3 h-3",id:"closebtn"},null,-1),Mf=M("div",{class:"ml-2 border-yellow-900 bg-yellow-1 shadow-inner rounded-full w-3 h-3",id:"minbtn"},null,-1),Ff=M("div",{class:"ml-2 border-green-900 bg-green-1 shadow-inner rounded-full w-3 h-3",id:"maxbtn"},null,-1);function Lf(e,t){return Ot(),Et(he,null,[Nf,Mf,Ff],64)}const Rf=Oo(Sf,[["render",Lf]]),zf={},jf={class:"pl-1 pt-1 h-auto text-green-200 font-mono text-md bg-black"},$f=Xl(`<pre class="pb-1">      ________.__                                  .__
      /  _____/|__| _______  _______    ____   ____ |__|
      /   \\  ___|  |/  _ \\  \\/ /\\__  \\  /    \\ /    \\|  |
      \\    \\_\\  \\  (  _&gt; )   /  / __ \\|   |  \\   |  \\  |
      \\______  /__|\\____/ \\_/  (____  /___|  /___|  /__|
      \\/                     \\/     \\/     \\/
    </pre><p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p><p class="pb-3">Giovanni:DevProjects giovanni$</p><p class="pb-1"><span class="text-orange-1 font-bold">Hi 👋 there!</span>, I&#39;m a father, gamer and developer. </p><p class="pb-1"> This is a holiday season <span class="text-orange-1 font-bold">experiment to study some technologies that I don&#39;t usually work with</span> like: Tailwind <svg viewBox="0 0 50 31" class="inline text-slate-900 dark:text-white w-auto h-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path></svg>, VueJs 3, Vite, GitHub pages. </p>`,5),Df={class:"pt-2 pb-1"},Hf=M("u",null,"C#/.Net Core",-1),Uf=M("u",null,"VueJs 2 (3 see you soon..)",-1),Bf=M("u",null,"WebPack",-1),Yf=M("u",null,"PostgreSQL",-1),Wf=M("u",null,"Elastic Search",-1),Kf=M("u",null,"Active Directory",-1),Vf=M("u",null,"Azure A.D.",-1),qf=M("u",null,"Docker",-1),Xf=M("p",{class:"pt-2 pb-1"},[te(" My favourite developer tools are: "),M("u",null,"JetBrains Rider (IDE)"),te(", "),M("u",null,"Total Commander"),te(", "),M("u",null,"NotePad++"),te(", "),M("u",null,"PgAdmin"),te(", "),M("u",null,"Docker"),te(". ")],-1),Gf=M("p",{class:"pt-3 pb-3 text-orange-1"}," Thank you for having me! 🙏 Feel free to contact me ",-1);function Jf(e,t){const n=Jn("font-awesome-icon");return Ot(),Et("div",jf,[$f,M("p",Df,[te(" In my daily job time, I develop my Web Applications with the power of "),Hf,te(", "),Uf,te(", "),Bf,te(", "),Yf,te(", "),Wf,te(", "),Kf,te(", "),Vf,te(" (and many other nerdies™) and I deploy them with a lot of love made in "),qf,te(),V(n,{icon:"fa-brands fa-docker",class:"text-blue-500"}),te(". ")]),Xf,Gf])}const Qf=Oo(zf,[["render",Jf]]),Zf=M("p",{class:"text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2"},"📚 My knowledge in short",-1),ec={class:"text-gray-5 text-sm p-1"},tc={class:"w-full bg-gray-200 rounded-full dark:bg-gray-700"},nc={class:"text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2 pt-2"},rc=M("ul",{class:"text-gray-5 text-sm"},[M("li",null,[M("a",{href:"https://aspen.eccouncil.org/Verify",target:"_blank",title:"CERTIFIED APPLICATION SECURITY ENGINEER - .NET"},"CASE .NET - 2022")])],-1),ac=Mt({__name:"Knowledge",setup(e){const t=[{Name:"C# / .NET Core",Value:90},{Name:"Typescript / VueJS",Value:70},{Name:"Linux / Docker / CI-CD",Value:60}];return(n,r)=>{const a=Jn("font-awesome-icon");return Ot(),Et(he,null,[Zf,(Ot(),Et(he,null,Cl(t,i=>M("div",{key:i.Name,class:"mb-1"},[M("p",ec,br(i.Name),1),M("div",tc,[M("div",{class:"bg-blue-600 text-xs font-sm text-blue-100 text-center p-0.1 leading-none rounded-full",style:Un({width:i.Value+"%"})},br(i.Value)+"% ",5)])])),64)),M("p",nc,[V(a,{icon:"fa-solid fa-certificate",class:"text-yellow-200 mr-1"}),te(" Certifications")]),rc],64)}}}),ic=["href"],mr=Mt({__name:"LeftMenuItem",props:{icon:{type:String,required:!0},name:{type:String,required:!0}},setup(e){const t=e;return(n,r)=>{const a=Jn("font-awesome-icon");return Ot(),Et("a",{href:"#"+t.name,class:"text-gray-5 inline-block cursor-pointer w-full mb-2 p-1 hover:bg-gray-2 group hover:rounded-md hover:bg-gray-2 group hover:rounded-md"},[V(a,{icon:"fa-solid "+t.icon,class:"text-orange-1 group-hover:rotate-45 mr-1"},null,8,["icon"]),te(" "+br(t.name),1)],8,ic)}}}),oc={class:"container flex flex-row items-stretch md:divide-x divide-black mx-auto m-10 mb-0"},sc={class:"md:block md:basis-1/4 pt-1 pl-4 pr-2 pb-4 bg-gray-1 rounded-tl-xl hidden backdrop-blur-sm bg-gray-1/60 drop-shadow-xl"},lc={class:"flex items-center h-9"},fc=M("p",{class:"text-1xl text-gray-4 fond-bold text-sm mb-2 mt-2"},"👋 About me",-1),cc=M("hr",{class:"mt-2 mb-4 border-gray-2"},null,-1),uc={class:"md:basis-3/4 bg-gray-3 md:rounded-r-xl flex flex-col"},dc={class:"h-9 bg-gray-2 md:rounded-tr-xl font-bold pl-4 flex items-center"},mc=M("span",{class:"ml-4"},"Terminal",-1),pc={class:"container mx-auto m-10 mt-0 backdrop-blur-sm bg-gray-1/60 drop-shadow-md pl-3 pt-1 pb-1 pr-3 flex justify-between text-orange-1 rounded-b-xl"},hc=M("span",null,"🖖",-1),gc=M("span",null,null,-1),vc={href:"https://twitter.com/GionnyBismondo",title:"Twitter",target:"_blank",class:"ml-2 hover:text-blue-300"},bc={href:"https://github.com/IGionny/",title:"GitHub",target:"_blank",class:"ml-2 hover:text-blue-300"},yc={href:"mailto:gbismondo@gmail.com"},_c=Mt({__name:"App",setup(e){return(t,n)=>{const r=Jn("font-awesome-icon");return Ot(),Et(he,null,[M("div",oc,[M("div",sc,[M("div",lc,[V(Rf)]),fc,V(mr,{name:"Summary",icon:"fa-arrows-to-dot"}),V(mr,{name:"Experiences",icon:"fa-route"}),V(mr,{name:"Passions",icon:"fa-gamepad"}),cc,V(ac)]),M("div",uc,[M("div",dc,[V(r,{icon:"fa-solid fa-chevron-left",class:"text-gray-400"}),V(r,{icon:"fa-solid fa-chevron-right",class:"text-gray-400"}),mc]),V(Qf,{class:"flex-1"})])]),M("div",pc,[hc,gc,M("span",null,[M("a",vc,[V(r,{icon:"fa-brands fa-twitter",class:"ml-2 hover:text-blue-300"})]),M("a",bc,[V(r,{icon:"fa-brands fa-github"})]),M("a",yc,[V(r,{icon:"fa-solid fa-envelope",class:"ml-2 hover:text-blue-300"})])])])],64)}}});function ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ii(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function xc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wc(e,t,n){return t&&oi(e.prototype,t),n&&oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return Ac(e)||Ec(e,t)||Eo(e,t)||Pc()}function nn(e){return kc(e)||Oc(e)||Eo(e)||Cc()}function kc(e){if(Array.isArray(e))return Nr(e)}function Ac(e){if(Array.isArray(e))return e}function Oc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ec(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Eo(e,t){if(e){if(typeof e=="string")return Nr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nr(e,t)}}function Nr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},ma={},Co={},Po=null,Io={mark:si,measure:si};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(Co=document),typeof MutationObserver<"u"&&(Po=MutationObserver),typeof performance<"u"&&(Io=performance)}catch{}var Ic=ma.navigator||{},li=Ic.userAgent,fi=li===void 0?"":li,Ze=ma,X=Co,ci=Po,gn=Io;Ze.document;var Ke=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",To=~fi.indexOf("MSIE")||~fi.indexOf("Trident/"),vn,bn,yn,_n,xn,Ue="___FONT_AWESOME___",Mr=16,So="fa",No="svg-inline--fa",mt="data-fa-i2svg",Fr="data-fa-pseudo-element",Tc="data-fa-pseudo-element-pending",pa="data-prefix",ha="data-icon",ui="fontawesome-i2svg",Sc="async",Nc=["HTML","HEAD","STYLE","SCRIPT"],Mo=function(){try{return!0}catch{return!1}}(),q="classic",Z="sharp",ga=[q,Z];function rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var Jt=rn((vn={},re(vn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),re(vn,Z,{fa:"solid",fass:"solid","fa-solid":"solid"}),vn)),Qt=rn((bn={},re(bn,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(bn,Z,{solid:"fass"}),bn)),Zt=rn((yn={},re(yn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(yn,Z,{fass:"fa-solid"}),yn)),Mc=rn((_n={},re(_n,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(_n,Z,{"fa-solid":"fass"}),_n)),Fc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Fo="fa-layers-text",Lc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Rc=rn((xn={},re(xn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(xn,Z,{900:"fass"}),xn)),Lo=[1,2,3,4,5,6,7,8,9,10],zc=Lo.concat([11,12,13,14,15,16,17,18,19,20]),jc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Qt[q]).map(en.add.bind(en));Object.keys(Qt[Z]).map(en.add.bind(en));var $c=[].concat(ga,nn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Lo.map(function(e){return"".concat(e,"x")})).concat(zc.map(function(e){return"w-".concat(e)})),Ut=Ze.FontAwesomeConfig||{};function Dc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Uc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uc.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=Hc(Dc(n));a!=null&&(Ut[r]=a)})}var Ro={styleDefault:"solid",familyDefault:"classic",cssPrefix:So,replacementClass:No,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ut.familyPrefix&&(Ut.cssPrefix=Ut.familyPrefix);var It=O(O({},Ro),Ut);It.autoReplaceSvg||(It.observeMutations=!1);var I={};Object.keys(Ro).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){It[e]=n,Bt.forEach(function(r){return r(I)})},get:function(){return It[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){It.cssPrefix=t,Bt.forEach(function(n){return n(I)})},get:function(){return It.cssPrefix}});Ze.FontAwesomeConfig=I;var Bt=[];function Bc(e){return Bt.push(e),function(){Bt.splice(Bt.indexOf(e),1)}}var qe=Mr,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yc(e){if(!(!e||!Ke)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Wc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=Wc[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function va(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(zo(e[n]),'" ')},"").trim()}function er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function Vc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function qc(e){var t=e.transform,n=e.width,r=n===void 0?Mr:n,a=e.height,i=a===void 0?Mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&To?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jo(){var e=So,t=No,n=I.cssPrefix,r=I.replacementClass,a=Xc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var di=!1;function pr(){I.autoAddCss&&!di&&(Yc(jo()),di=!0)}var Gc={mixout:function(){return{dom:{css:jo,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},Be=Ze||{};Be[Ue]||(Be[Ue]={});Be[Ue].styles||(Be[Ue].styles={});Be[Ue].hooks||(Be[Ue].hooks={});Be[Ue].shims||(Be[Ue].shims=[]);var Ee=Be[Ue],$o=[],Jc=function e(){X.removeEventListener("DOMContentLoaded",e),jn=1,$o.map(function(t){return t()})},jn=!1;Ke&&(jn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),jn||X.addEventListener("DOMContentLoaded",Jc));function Qc(e){Ke&&(jn?setTimeout(e,0):$o.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?zo(e):"<".concat(t," ").concat(Kc(r),">").concat(i.map(an).join(""),"</").concat(t,">")}function mi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},hr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Zc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function eu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Lr(e){var t=eu(e);return t.length===1?t[0].toString(16):null}function tu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Rr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=pi(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,pi(t)):Ee.styles[e]=O(O({},Ee.styles[e]||{}),i),e==="fas"&&Rr("fa",t)}var wn,kn,An,bt=Ee.styles,nu=Ee.shims,ru=(wn={},re(wn,q,Object.values(Zt[q])),re(wn,Z,Object.values(Zt[Z])),wn),ya=null,Do={},Ho={},Uo={},Bo={},Yo={},au=(kn={},re(kn,q,Object.keys(Jt[q])),re(kn,Z,Object.keys(Jt[Z])),kn);function iu(e){return~$c.indexOf(e)}function ou(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!iu(a)?a:null}var Wo=function(){var t=function(i){return hr(bt,function(o,s,l){return o[l]=hr(s,i,{}),o},{})};Do=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ho=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Yo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in bt||I.autoFetchSvg,r=hr(nu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Uo=r.names,Bo=r.unicodes,ya=tr(I.styleDefault,{family:I.familyDefault})};Bc(function(e){ya=tr(e.styleDefault,{family:I.familyDefault})});Wo();function _a(e,t){return(Do[e]||{})[t]}function su(e,t){return(Ho[e]||{})[t]}function ct(e,t){return(Yo[e]||{})[t]}function Ko(e){return Uo[e]||{prefix:null,iconName:null}}function lu(e){var t=Bo[e],n=_a("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return ya}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=Jt[r][e],i=Qt[r][e]||Qt[r][a],o=e in Ee.styles?e:null;return i||o||null}var hi=(An={},re(An,q,Object.keys(Zt[q])),re(An,Z,Object.keys(Zt[Z])),An);function nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},re(t,q,"".concat(I.cssPrefix,"-").concat(q)),re(t,Z,"".concat(I.cssPrefix,"-").concat(Z)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return hi[q].includes(c)}))&&(s=q),(e.includes(i[Z])||e.some(function(c){return hi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=ou(I.cssPrefix,d);if(bt[d]?(d=ru[s].includes(d)?Mc[s][d]:d,o=d,c.prefix=d):au[s].indexOf(d)>-1?(o=d,c.prefix=tr(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[q]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Ko(c.iconName):{},k=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!bt.far&&bt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(bt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var fu=function(){function e(){xc(this,e),this.definitions={}}return wc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Rr(s,o[s]);var l=Zt[q][s];l&&Rr(l,o[s]),Wo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),gi=[],yt={},At={},cu=Object.keys(At);function uu(e,t){var n=t.mixoutsTo;return gi=e,yt={},Object.keys(At).forEach(function(r){cu.indexOf(r)===-1&&delete At[r]}),gi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(At)}),n}function zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=yt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=yt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return At[e]?At[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ct(n,t)||t,mi(Vo.definitions,n,t)||mi(Ee.styles,n,t)}var Vo=new fu,du=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,pt("noAuto")},mu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(pt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Qc(function(){hu({autoReplaceSvgRoot:n}),pt("watch",t)})}},pu={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=tr(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Fc))){var a=nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},ve={noAuto:du,config:I,dom:mu,parse:pu,library:Vo,findIconDefinition:jr,toHtml:an},hu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ee.styles).length>0||I.autoFetchSvg)&&Ke&&I.autoReplaceSvg&&ve.dom.i2svg({node:r})};function rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ke){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ba(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=er(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function vu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,L=r.found?r:n,N=L.width,H=L.height,x=a==="fak",C=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(be){return m.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(H)})},j=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/H*16*.0625,"em")}:{};k&&(E.attributes[mt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete E.attributes.title);var U=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),ue=r.found&&n.found?Ye("generateAbstractMask",U)||{children:[],attributes:{}}:Ye("generateAbstractIcon",U)||{children:[],attributes:{}},ie=ue.children,_e=ue.attributes;return U.children=ie,U.attributes=_e,s?vu(U):gu(U)}function vi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[mt]="");var d=O({},o.styles);ba(a)&&(d.transform=qc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=er(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function bu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var gr=Ee.styles;function $r(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var yu={found:!1,width:512,height:512};function _u(e,t){!Mo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=Ko(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&gr[t]&&gr[t][e]){var o=gr[t][e];return r($r(o))}_u(e,t),r(O(O({},yu),{},{icon:I.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var bi=function(){},Hr=I.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:bi,measure:bi},$t='FA "6.2.1"',xu=function(t){return Hr.mark("".concat($t," ").concat(t," begins")),function(){return qo(t)}},qo=function(t){Hr.mark("".concat($t," ").concat(t," ends")),Hr.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},ka={begin:xu,end:qo},Sn=function(){};function yi(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function wu(e){var t=e.getAttribute?e.getAttribute(pa):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function ku(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Au(){if(I.autoReplaceSvg===!0)return Nn.replace;var e=Nn[I.autoReplaceSvg];return e||Nn.replace}function Ou(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Eu(e){return X.createElement(e)}function Xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ou:Eu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Xo(o,{ceFn:r}))}),a}function Cu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Xo(a),n)}),n.getAttribute(mt)===null&&I.keepOriginalSource){var r=X.createComment(Cu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~va(n).indexOf(I.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=o}};function _i(e){e()}function Go(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=_i;I.mutateApproach===Sc&&(r=Ze.requestAnimationFrame||_i),r(function(){var a=Au(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function Jo(){Aa=!0}function Ur(){Aa=!1}var $n=null;function xi(e){if(ci&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;$n=new ci(function(c){if(!Aa){var d=et();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&yi(m.target)&&~jc.indexOf(m.attributeName))if(m.attributeName==="class"&&wu(m.target)){var v=nr(va(m.target)),k=v.prefix,L=v.iconName;m.target.setAttribute(pa,k||d),L&&m.target.setAttribute(ha,L)}else ku(m.target)&&a(m.target)})}}),Ke&&$n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pu(){$n&&$n.disconnect()}function Iu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Tu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=nr(va(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=su(a.prefix,e.innerText)||_a(a.prefix,Lr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Su(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Tu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Su(e),s=zr("parseNodeAttributes",{},e),l=t.styleParser?Iu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Mu=Ee.styles;function Qo(e){var t=I.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(Fo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var tt=new Set;ga.map(function(e){tt.add("fa-".concat(e))});Object.keys(Jt[q]).map(tt.add.bind(tt));Object.keys(Jt[Z]).map(tt.add.bind(tt));tt=nn(tt);function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ui,"-").concat(m))},a=function(m){return n.remove("".concat(ui,"-").concat(m))},i=I.autoFetchSvg?tt:ga.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Mu));i.includes("fa")||i.push("fa");var o=[".".concat(Fo,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=s.reduce(function(d,m){try{var v=Qo(m);v&&d.push(v)}catch(k){Mo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Go(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qo(e).then(function(n){n&&Go([n],t)})}function Lu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Ru=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Re:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,L=k===void 0?null:k,N=n.classes,H=N===void 0?[]:N,x=n.attributes,C=x===void 0?{}:x,E=n.styles,j=E===void 0?{}:E;if(t){var U=t.prefix,ue=t.iconName,ie=t.icon;return rr(O({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(L||tn()):(C["aria-hidden"]="true",C.focusable="false")),wa({icons:{main:$r(ie),mask:l?$r(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ue,transform:O(O({},Re),a),symbol:o,title:v,maskId:d,titleId:L,extra:{attributes:C,styles:j,classes:H}})})}},zu={mixout:function(){return{icon:Lu(Ru)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ki,n.nodeCallback=Fu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ki(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,L){Promise.all([Dr(a,s),d.iconName?Dr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var H=da(N,2),x=H[0],C=H[1];k([n,wa({icons:{main:x,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=er(s);l.length>0&&(a.style=l);var c;return ba(o)&&(c=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ju={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return rr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:o}]})}}}},$u={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return rr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),bu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},Du={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Re:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return rr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),vi({content:n,transform:O(O({},Re),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(To){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Hu=new RegExp('"',"ug"),Ai=[1105920,1112319];function Uu(e){var t=e.replace(Hu,""),n=tu(t,0),r=n>=Ai[0]&&n<=Ai[1],a=t.length===2?t[0]===t[1]:!1;return{value:Lr(a?t[0]:t),isSecondary:r||a}}function Oi(e,t){var n="".concat(Tc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(ie){return ie.getAttribute(Fr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Lc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:q,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[v][l[2].toLowerCase()]:Rc[v][c],L=Uu(m),N=L.value,H=L.isSecondary,x=l[0].startsWith("FontAwesome"),C=_a(k,N),E=C;if(x){var j=lu(N);j.iconName&&j.prefix&&(C=j.iconName,k=j.prefix)}if(C&&!H&&(!o||o.getAttribute(pa)!==k||o.getAttribute(ha)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var U=Nu(),ue=U.extra;ue.attributes[Fr]=t,Dr(C,k).then(function(ie){var _e=wa(O(O({},U),{},{icons:{main:ie,mask:xa()},prefix:k,iconName:E,extra:ue,watchable:!0})),be=X.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=_e.map(function(je){return an(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bu(e){return Promise.all([Oi(e,"::before"),Oi(e,"::after")])}function Yu(e){return e.parentNode!==document.head&&!~Nc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ei(e){if(Ke)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(Yu).map(Bu),a=ka.begin("searchPseudoElements");Jo(),Promise.all(r).then(function(){a(),Ur(),t()}).catch(function(){a(),Ur(),n()})})}var Wu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ei,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&Ei(a)}}},Ci=!1,Ku={mixout:function(){return{dom:{unwatch:function(){Jo(),Ci=!0}}}},hooks:function(){return{bootstrap:function(){xi(zr("mutationObserverCallbacks",{}))},noAuto:function(){Pu()},watch:function(n){var r=n.observeMutationsRoot;Ci?Ur():xi(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vu={mixout:function(){return{parse:{transform:function(n){return Pi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Pi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},vr={x:0,y:0,width:"100%",height:"100%"};function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qu(e){return e.tag==="g"?e.children:[e]}var Xu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?nr(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=Vc({transform:l,containerWidth:m,iconWidth:c}),L={tag:"rect",attributes:O(O({},vr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ii)}:{},H={tag:"g",attributes:O({},k.inner),children:[Ii(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},x={tag:"g",attributes:O({},k.outer),children:[H]},C="mask-".concat(s||tn()),E="clip-".concat(s||tn()),j={tag:"mask",attributes:O(O({},vr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,x]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:qu(v)},j]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(C,")")},vr)}),{children:r,attributes:a}}}},Gu={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ju={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Qu=[Gc,zu,ju,$u,Du,Wu,Ku,Vu,Xu,Gu,Ju];uu(Qu,{mixoutsTo:ve});ve.noAuto;var Zo=ve.config,Ie=ve.library;ve.dom;var Dn=ve.parse;ve.findIconDefinition;ve.toHtml;var Zu=ve.icon;ve.layer;var ed=ve.text;ve.counter;function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function td(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function nd(e,t){if(e==null)return{};var n=td(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Br(e){return rd(e)||ad(e)||id(e)||od()}function rd(e){if(Array.isArray(e))return Yr(e)}function ad(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function id(e,t){if(e){if(typeof e=="string")return Yr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e,t)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function od(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},es={exports:{}};(function(e){(function(t){var n=function(x,C,E){if(!c(C)||m(C)||v(C)||k(C)||l(C))return C;var j,U=0,ue=0;if(d(C))for(j=[],ue=C.length;U<ue;U++)j.push(n(x,C[U],E));else{j={};for(var ie in C)Object.prototype.hasOwnProperty.call(C,ie)&&(j[x(ie,E)]=n(x,C[ie],E))}return j},r=function(x,C){C=C||{};var E=C.separator||"_",j=C.split||/(?=[A-Z])/;return x.split(j).join(E)},a=function(x){return L(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var C=a(x);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(x,C){return r(x,C).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},d=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},v=function(x){return s.call(x)=="[object RegExp]"},k=function(x){return s.call(x)=="[object Boolean]"},L=function(x){return x=x-0,x===x},N=function(x,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?x:function(j,U){return E(j,x,U)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,C){return n(N(a,C),x)},decamelizeKeys:function(x,C){return n(N(o,C),x,C)},pascalizeKeys:function(x,C){return n(N(i,C),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(sd)})(es);var ld=es.exports,fd=["class","style"];function cd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ld.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ud(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Oa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Oa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=ud(d);break;case"style":l.style=cd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=nd(n,fd);return Ao(e.tag,ke(ke(ke({},t),{},{class:a.class,style:ke(ke({},a.style),o)},a.attrs),s),r)}var ts=!1;try{ts=!0}catch{}function dd(){if(!ts&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?de({},e,t):{}}function md(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},de(t,"fa-".concat(e.size),e.size!==null),de(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),de(t,"fa-pull-".concat(e.pull),e.pull!==null),de(t,"fa-swap-opacity",e.swapOpacity),de(t,"fa-bounce",e.bounce),de(t,"fa-shake",e.shake),de(t,"fa-beat",e.beat),de(t,"fa-fade",e.fade),de(t,"fa-beat-fade",e.beatFade),de(t,"fa-flash",e.flash),de(t,"fa-spin-pulse",e.spinPulse),de(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Si(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dn.icon)return Dn.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pd=Mt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ye(function(){return Si(t.icon)}),i=ye(function(){return Yt("classes",md(t))}),o=ye(function(){return Yt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),s=ye(function(){return Yt("mask",Si(t.mask))}),l=ye(function(){return Zu(a.value,ke(ke(ke(ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Cn(l,function(d){if(!d)return dd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ye(function(){return l.value?Oa(l.value.abstract[0],{},r):null});return function(){return c.value}}});Mt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Zo.familyPrefix,i=ye(function(){return["".concat(a,"-layers")].concat(Br(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ao("div",{class:i.value},r.default?r.default():[])}}});Mt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Zo.familyPrefix,i=ye(function(){return Yt("classes",[].concat(Br(t.counter?["".concat(a,"-layers-counter")]:[]),Br(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ye(function(){return Yt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),s=ye(function(){var c=ed(t.value.toString(),ke(ke({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ye(function(){return Oa(s.value,{},r)});return function(){return l.value}}});var hd={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"]},gd={prefix:"fas",iconName:"certificate",icon:[512,512,[],"f0a3","M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"]},vd={prefix:"fas",iconName:"arrows-to-dot",icon:[512,512,[],"e4be","M256 0c17.7 0 32 14.3 32 32V64h32c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8h32V32c0-17.7 14.3-32 32-32zM169.4 393.4l64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H288v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H192c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9zM32 224H64V192c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H448v32c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64zM256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},bd={prefix:"fas",iconName:"route",icon:[512,512,[],"f4d7","M416 256s96-96 96-160c0-53-43-96-96-96s-96 43-96 96c0 29.4 20.2 65.5 42.1 96H320c-53 0-96 43-96 96s43 96 96 96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H188.6c-6.2 9.6-12.6 18.8-19 27.2c-10.7 14.2-21.3 26.9-30 36.8H416c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h96zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zM149.9 448c21.9-30.5 42.1-66.6 42.1-96c0-53-43-96-96-96s-96 43-96 96c0 64 96 160 96 160s3.5-3.5 9.2-9.6c.4-.4 .7-.8 1.1-1.2c3.3-3.5 7.1-7.8 11.4-12.8c.2-.2 .4-.4 .6-.6c9.4-10.8 20.7-24.6 31.6-39.8zM96 384c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},yd={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},_d={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},xd={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},wd={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},kd={prefix:"fab",iconName:"docker",icon:[640,512,[],"f395","M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"]},Ad={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Od={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};Ie.add(vd);Ie.add(bd);Ie.add(hd);Ie.add(_d);Ie.add(xd);Ie.add(yd);Ie.add(gd);Ie.add(Od);Ie.add(Ad);Ie.add(kd);Ie.add(wd);If(_c).component("font-awesome-icon",pd).mount("#app");
