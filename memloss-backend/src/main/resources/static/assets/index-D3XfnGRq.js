(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Kg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var fd={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function Gy(){if(Ix)return zo;Ix=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var Bx;function Vy(){return Bx||(Bx=1,fd.exports=Gy()),fd.exports}var ct=Vy(),dd={exports:{}},Io={},hd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx;function ky(){return Fx||(Fx=1,(function(o){function e(I,q){var W=I.length;I.push(q);t:for(;0<W;){var mt=W-1>>>1,_t=I[mt];if(0<l(_t,q))I[mt]=q,I[W]=_t,W=mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var q=I[0],W=I.pop();if(W!==q){I[0]=W;t:for(var mt=0,_t=I.length,L=_t>>>1;mt<L;){var Q=2*(mt+1)-1,yt=I[Q],Tt=Q+1,Ot=I[Tt];if(0>l(yt,W))Tt<_t&&0>l(Ot,yt)?(I[mt]=Ot,I[Tt]=W,mt=Tt):(I[mt]=yt,I[Q]=W,mt=Q);else if(Tt<_t&&0>l(Ot,W))I[mt]=Ot,I[Tt]=W,mt=Tt;else break t}}return q}function l(I,q){var W=I.sortIndex-q.sortIndex;return W!==0?W:I.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,y=3,S=!1,T=!1,C=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function B(I){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=I)s(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function F(I){if(C=!1,B(I),!T)if(i(m)!==null)T=!0,U||(U=!0,X());else{var q=i(p);q!==null&&rt(F,q.startTime-I)}}var U=!1,O=-1,K=5,w=-1;function A(){return b?!0:!(o.unstable_now()-w<K)}function z(){if(b=!1,U){var I=o.unstable_now();w=I;var q=!0;try{t:{T=!1,C&&(C=!1,P(O),O=-1),S=!0;var W=y;try{e:{for(B(I),x=i(m);x!==null&&!(x.expirationTime>I&&A());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,y=x.priorityLevel;var _t=mt(x.expirationTime<=I);if(I=o.unstable_now(),typeof _t=="function"){x.callback=_t,B(I),q=!0;break e}x===i(m)&&s(m),B(I)}else s(m);x=i(m)}if(x!==null)q=!0;else{var L=i(p);L!==null&&rt(F,L.startTime-I),q=!1}}break t}finally{x=null,y=W,S=!1}q=void 0}}finally{q?X():U=!1}}}var X;if(typeof D=="function")X=function(){D(z)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,dt=J.port2;J.port1.onmessage=z,X=function(){dt.postMessage(null)}}else X=function(){v(z,0)};function rt(I,q){O=v(function(){I(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(I){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var W=y;y=q;try{return I()}finally{y=W}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=y;y=I;try{return q()}finally{y=W}},o.unstable_scheduleCallback=function(I,q,W){var mt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?mt+W:mt):W=mt,I){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=W+_t,I={id:g++,callback:q,priorityLevel:I,startTime:W,expirationTime:_t,sortIndex:-1},W>mt?(I.sortIndex=W,e(p,I),i(m)===null&&I===i(p)&&(C?(P(O),O=-1):C=!0,rt(F,W-mt))):(I.sortIndex=_t,e(m,I),T||S||(T=!0,U||(U=!0,X()))),I},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(I){var q=y;return function(){var W=y;y=q;try{return I.apply(this,arguments)}finally{y=W}}}})(pd)),pd}var Hx;function Xy(){return Hx||(Hx=1,hd.exports=ky()),hd.exports}var md={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function Wy(){if(Gx)return re;Gx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function v(L,Q,yt){this.props=L,this.context=Q,this.refs=b,this.updater=yt||T}v.prototype.isReactComponent={},v.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=v.prototype;function D(L,Q,yt){this.props=L,this.context=Q,this.refs=b,this.updater=yt||T}var B=D.prototype=new P;B.constructor=D,C(B,v.prototype),B.isPureReactComponent=!0;var F=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function w(L,Q,yt){var Tt=yt.ref;return{$$typeof:o,type:L,key:Q,ref:Tt!==void 0?Tt:null,props:yt}}function A(L,Q){return w(L.type,Q,L.props)}function z(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function X(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return Q[yt]})}var J=/\/+/g;function dt(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?X(""+L.key):Q.toString(36)}function rt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(U,U):(L.status="pending",L.then(function(Q){L.status==="pending"&&(L.status="fulfilled",L.value=Q)},function(Q){L.status==="pending"&&(L.status="rejected",L.reason=Q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function I(L,Q,yt,Tt,Ot){var at=typeof L;(at==="undefined"||at==="boolean")&&(L=null);var ft=!1;if(L===null)ft=!0;else switch(at){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(L.$$typeof){case o:case e:ft=!0;break;case g:return ft=L._init,I(ft(L._payload),Q,yt,Tt,Ot)}}if(ft)return Ot=Ot(L),ft=Tt===""?"."+dt(L,0):Tt,F(Ot)?(yt="",ft!=null&&(yt=ft.replace(J,"$&/")+"/"),I(Ot,Q,yt,"",function(Wt){return Wt})):Ot!=null&&(z(Ot)&&(Ot=A(Ot,yt+(Ot.key==null||L&&L.key===Ot.key?"":(""+Ot.key).replace(J,"$&/")+"/")+ft)),Q.push(Ot)),1;ft=0;var wt=Tt===""?".":Tt+":";if(F(L))for(var Ht=0;Ht<L.length;Ht++)Tt=L[Ht],at=wt+dt(Tt,Ht),ft+=I(Tt,Q,yt,at,Ot);else if(Ht=S(L),typeof Ht=="function")for(L=Ht.call(L),Ht=0;!(Tt=L.next()).done;)Tt=Tt.value,at=wt+dt(Tt,Ht++),ft+=I(Tt,Q,yt,at,Ot);else if(at==="object"){if(typeof L.then=="function")return I(rt(L),Q,yt,Tt,Ot);throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ft}function q(L,Q,yt){if(L==null)return L;var Tt=[],Ot=0;return I(L,Tt,"","",function(at){return Q.call(yt,at,Ot++)}),Tt}function W(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},_t={map:q,forEach:function(L,Q,yt){q(L,function(){Q.apply(this,arguments)},yt)},count:function(L){var Q=0;return q(L,function(){Q++}),Q},toArray:function(L){return q(L,function(Q){return Q})||[]},only:function(L){if(!z(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=x,re.Children=_t,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=D,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,Q,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Tt=C({},L.props),Ot=L.key;if(Q!=null)for(at in Q.key!==void 0&&(Ot=""+Q.key),Q)!K.call(Q,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Q.ref===void 0||(Tt[at]=Q[at]);var at=arguments.length-2;if(at===1)Tt.children=yt;else if(1<at){for(var ft=Array(at),wt=0;wt<at;wt++)ft[wt]=arguments[wt+2];Tt.children=ft}return w(L.type,Ot,Tt)},re.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},re.createElement=function(L,Q,yt){var Tt,Ot={},at=null;if(Q!=null)for(Tt in Q.key!==void 0&&(at=""+Q.key),Q)K.call(Q,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ot[Tt]=Q[Tt]);var ft=arguments.length-2;if(ft===1)Ot.children=yt;else if(1<ft){for(var wt=Array(ft),Ht=0;Ht<ft;Ht++)wt[Ht]=arguments[Ht+2];Ot.children=wt}if(L&&L.defaultProps)for(Tt in ft=L.defaultProps,ft)Ot[Tt]===void 0&&(Ot[Tt]=ft[Tt]);return w(L,at,Ot)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:h,render:L}},re.isValidElement=z,re.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:W}},re.memo=function(L,Q){return{$$typeof:p,type:L,compare:Q===void 0?null:Q}},re.startTransition=function(L){var Q=O.T,yt={};O.T=yt;try{var Tt=L(),Ot=O.S;Ot!==null&&Ot(yt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(U,mt)}catch(at){mt(at)}finally{Q!==null&&yt.types!==null&&(Q.types=yt.types),O.T=Q}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(L){return O.H.use(L)},re.useActionState=function(L,Q,yt){return O.H.useActionState(L,Q,yt)},re.useCallback=function(L,Q){return O.H.useCallback(L,Q)},re.useContext=function(L){return O.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,Q){return O.H.useDeferredValue(L,Q)},re.useEffect=function(L,Q){return O.H.useEffect(L,Q)},re.useEffectEvent=function(L){return O.H.useEffectEvent(L)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(L,Q,yt){return O.H.useImperativeHandle(L,Q,yt)},re.useInsertionEffect=function(L,Q){return O.H.useInsertionEffect(L,Q)},re.useLayoutEffect=function(L,Q){return O.H.useLayoutEffect(L,Q)},re.useMemo=function(L,Q){return O.H.useMemo(L,Q)},re.useOptimistic=function(L,Q){return O.H.useOptimistic(L,Q)},re.useReducer=function(L,Q,yt){return O.H.useReducer(L,Q,yt)},re.useRef=function(L){return O.H.useRef(L)},re.useState=function(L){return O.H.useState(L)},re.useSyncExternalStore=function(L,Q,yt){return O.H.useSyncExternalStore(L,Q,yt)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.0",re}var Vx;function Gh(){return Vx||(Vx=1,md.exports=Wy()),md.exports}var xd={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx;function qy(){if(kx)return On;kx=1;var o=Gh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},On.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.0",On}var Xx;function Yy(){if(Xx)return xd.exports;Xx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),xd.exports=qy(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx;function jy(){if(Wx)return Io;Wx=1;var o=Xy(),e=Gh(),i=Yy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,E=u.child;E;){if(E===a){_=!0,a=u,r=f;break}if(E===r){_=!0,r=u,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=u;break}if(E===r){_=!0,r=f,a=u;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),D=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var J=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===J?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case D:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var rt=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},mt=[],_t=-1;function L(t){return{current:t}}function Q(t){0>_t||(t.current=mt[_t],mt[_t]=null,_t--)}function yt(t,n){_t++,mt[_t]=t.current,t.current=n}var Tt=L(null),Ot=L(null),at=L(null),ft=L(null);function wt(t,n){switch(yt(at,n),yt(Ot,t),yt(Tt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?rx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=rx(n),t=ox(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Tt),yt(Tt,t)}function Ht(){Q(Tt),Q(Ot),Q(at)}function Wt(t){t.memoizedState!==null&&yt(ft,t);var n=Tt.current,a=ox(n,t.type);n!==a&&(yt(Ot,t),yt(Tt,a))}function ce(t){Ot.current===t&&(Q(Tt),Q(Ot)),ft.current===t&&(Q(ft),Lo._currentValue=W)}var rn,he;function Ce(t){if(rn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);rn=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+t+he}var G=!1;function pe(t,n){if(!t||G)return"";G=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var it=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){it=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){it=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&it&&typeof ot.stack=="string")return[ot.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var H=_.split(`
`),et=E.split(`
`);for(u=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(r===H.length||u===et.length)for(r=H.length-1,u=et.length-1;1<=r&&0<=u&&H[r]!==et[u];)u--;for(;1<=r&&0<=u;r--,u--)if(H[r]!==et[u]){if(r!==1||u!==1)do if(r--,u--,0>u||H[r]!==et[u]){var ht=`
`+H[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=u);break}}}finally{G=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ce(a):""}function xe(t,n){switch(t.tag){case 26:case 27:case 5:return Ce(t.type);case 16:return Ce("Lazy");case 13:return t.child!==n&&n!==null?Ce("Suspense Fallback"):Ce("Suspense");case 19:return Ce("SuspenseList");case 0:case 15:return pe(t.type,!1);case 11:return pe(t.type.render,!1);case 1:return pe(t.type,!0);case 31:return Ce("Activity");default:return""}}function Ie(t){try{var n="",a=null;do n+=xe(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Gt=Object.prototype.hasOwnProperty,qe=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,se=o.unstable_shouldYield,N=o.unstable_requestPaint,M=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Yt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Jt=o.log,qt=o.unstable_setDisableYieldValue,bt=null,Et=null;function jt(t){if(typeof Jt=="function"&&qt(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(bt,t)}catch{}}var Vt=Math.clz32?Math.clz32:V,Pt=Math.log,ie=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Pt(t)/ie|0)|0}var Dt=256,Rt=262144,Ct=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?u=Mt(r):(_&=E,_!==0?u=Mt(_):a||(a=E&~t,a!==0&&(u=Mt(a))))):(E=r&~f,E!==0?u=Mt(E):_!==0?u=Mt(_):a||(a=r&~t,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var t=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),t}function we(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zn(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,H=t.expirationTimes,et=t.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-Vt(a),gt=1<<ht;E[ht]=0,H[ht]=-1;var it=et[ht];if(it!==null)for(et[ht]=null,ht=0;ht<it.length;ht++){var ot=it[ht];ot!==null&&(ot.lane&=-536870913)}a&=~gt}r!==0&&sl(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function sl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Vt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function kr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Vt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Xr(t,n){var a=n&-n;return a=(a&42)!==0?1:vi(a),(a&(t.suspendedLanes|n))!==0?0:a}function vi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wr(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Dx(t.type))}function qr(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var Kn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Kn,mn="__reactProps$"+Kn,Hi="__reactContainer$"+Kn,zs="__reactEvents$"+Kn,au="__reactListeners$"+Kn,su="__reactHandles$"+Kn,rl="__reactResources$"+Kn,os="__reactMarker$"+Kn;function Yr(t){delete t[cn],delete t[mn],delete t[zs],delete t[au],delete t[su]}function ba(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=px(t);t!==null;){if(a=t[cn])return a;t=px(t)}return n}t=a,a=t.parentNode}return null}function R(t){if(t=t[cn]||t[Hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function st(t){var n=t[rl];return n||(n=t[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(t){t[os]=!0}var Z=new Set,At={};function Ut(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(At[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},ne={};function Kt(t){return Gt.call(ne,t)?!0:Gt.call(te,t)?!1:Bt.test(t)?ne[t]=!0:(te[t]=!0,!1)}function ue(t,n,a){if(Kt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function De(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){if(!t._valueTracker){var n=ze(t)?"checked":"value";t._valueTracker=$t(t,n,""+t[n])}}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ze(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ma=/[\n"\\]/g;function Ze(t){return t.replace(Ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gi(t,n,a,r,u,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+be(n)):t.value!==""+be(n)&&(t.value=""+be(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,_,be(n)):a!=null?Sn(t,_,be(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+be(E):t.removeAttribute("name")}function Ke(t,n,a,r,u,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(t);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ye(t)}function Sn(t,n,a){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function bn(t,n,a){if(n!=null&&(n=""+be(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+be(a):""}function An(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=be(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ye(t)}function wi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Vi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ap(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&ip(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&ip(t,f,n[f])}function ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(t){return B_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var ou=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Is=null,Bs=null;function sp(t){var n=R(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ze(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[mn]||null;if(!u)throw Error(s(90));Gi(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Me(r)}break t;case"textarea":bn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var cu=!1;function rp(t,n,a){if(cu)return t(n,a);cu=!0;try{var r=t(n);return r}finally{if(cu=!1,(Is!==null||Bs!==null)&&(jl(),Is&&(n=Is,t=Bs,Bs=Is=null,sp(n),t)))for(n=0;n<t.length;n++)sp(t[n])}}function jr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Xi)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{uu=!1}var Ea=null,fu=null,ll=null;function op(){if(ll)return ll;var t,n=fu,a=n.length,r,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return ll=u.slice(t,1<r?1-r:void 0)}function cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function lp(){return!1}function Vn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:lp,this.isPropagationStopped=lp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Vn(ls),Kr=x({},ls,{view:0,detail:0}),F_=Vn(Kr),du,hu,Qr,dl=x({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qr&&(Qr&&t.type==="mousemove"?(du=t.screenX-Qr.screenX,hu=t.screenY-Qr.screenY):hu=du=0,Qr=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),cp=Vn(dl),H_=x({},dl,{dataTransfer:0}),G_=Vn(H_),V_=x({},Kr,{relatedTarget:0}),pu=Vn(V_),k_=x({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),X_=Vn(k_),W_=x({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q_=Vn(W_),Y_=x({},ls,{data:0}),up=Vn(Y_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K_[t])?!!n[t]:!1}function mu(){return Q_}var J_=x({},Kr,{key:function(t){if(t.key){var n=j_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=Vn(J_),tv=x({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Vn(tv),ev=x({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),nv=Vn(ev),iv=x({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=Vn(iv),sv=x({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=Vn(sv),ov=x({},ls,{newState:0,oldState:0}),lv=Vn(ov),cv=[9,13,27,32],xu=Xi&&"CompositionEvent"in window,Jr=null;Xi&&"documentMode"in document&&(Jr=document.documentMode);var uv=Xi&&"TextEvent"in window&&!Jr,dp=Xi&&(!xu||Jr&&8<Jr&&11>=Jr),hp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return cv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function fv(t,n){switch(t){case"compositionend":return xp(n);case"keypress":return n.which!==32?null:(pp=!0,hp);case"textInput":return t=n.data,t===hp&&pp?null:t;default:return null}}function dv(t,n){if(Fs)return t==="compositionend"||!xu&&mp(t,n)?(t=op(),ll=fu=Ea=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!hv[t.type]:n==="textarea"}function _p(t,n,a,r){Is?Bs?Bs.push(r):Bs=[r]:Is=r,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var $r=null,to=null;function pv(t){tx(t,0)}function hl(t){var n=Y(t);if(Me(n))return t}function vp(t,n){if(t==="change")return n}var yp=!1;if(Xi){var gu;if(Xi){var _u="oninput"in document;if(!_u){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),_u=typeof Sp.oninput=="function"}gu=_u}else gu=!1;yp=gu&&(!document.documentMode||9<document.documentMode)}function bp(){$r&&($r.detachEvent("onpropertychange",Mp),to=$r=null)}function Mp(t){if(t.propertyName==="value"&&hl(to)){var n=[];_p(n,to,t,lu(t)),rp(pv,n)}}function mv(t,n,a){t==="focusin"?(bp(),$r=n,to=a,$r.attachEvent("onpropertychange",Mp)):t==="focusout"&&bp()}function xv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(to)}function gv(t,n){if(t==="click")return hl(n)}function _v(t,n){if(t==="input"||t==="change")return hl(n)}function vv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:vv;function eo(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Gt.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function Ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,n){var a=Ep(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yn(t.document)}return n}function vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yv=Xi&&"documentMode"in document&&11>=document.documentMode,Hs=null,yu=null,no=null,Su=!1;function Cp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Hs==null||Hs!==yn(r)||(r=Hs,"selectionStart"in r&&vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&eo(no,r)||(no=r,r=ec(yu,"onSelect"),0<r.length&&(n=new fl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Hs)))}function cs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gs={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},bu={},wp={};Xi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function us(t){if(bu[t])return bu[t];if(!Gs[t])return t;var n=Gs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return bu[t]=n[a];return t}var Dp=us("animationend"),Up=us("animationiteration"),Lp=us("animationstart"),Sv=us("transitionrun"),bv=us("transitionstart"),Mv=us("transitioncancel"),Np=us("transitionend"),Op=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function yi(t,n){Op.set(t,n),Ut(n,[t])}var pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],Vs=0,Eu=0;function ml(){for(var t=Vs,n=Eu=Vs=0;n<t;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Pp(a,u,f)}}function xl(t,n,a,r){li[Vs++]=t,li[Vs++]=n,li[Vs++]=a,li[Vs++]=r,Eu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Tu(t,n,a,r){return xl(t,n,a,r),gl(t)}function fs(t,n){return xl(t,null,null,n),gl(t)}function Pp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Vt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function gl(t){if(50<To)throw To=0,Pf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ks={};function Ev(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,r){return new Ev(t,n,a,r)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,r,u,f){var _=0;if(r=t,typeof t=="function")Au(t)&&(_=1);else if(typeof t=="string")_=wy(t,a,Tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Jn(31,a,n,u),t.elementType=w,t.lanes=f,t;case C:return ds(a.children,u,f,n);case b:_=8,u|=24;break;case v:return t=Jn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case F:return t=Jn(13,a,n,u),t.elementType=F,t.lanes=f,t;case U:return t=Jn(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:_=10;break t;case P:_=9;break t;case B:_=11;break t;case O:_=14;break t;case K:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Jn(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ds(t,n,a,r){return t=Jn(7,t,r,n),t.lanes=a,t}function Ru(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function Ip(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Cu(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Bp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ie(n)},Bp.set(t,n),n)}return{value:t,source:n,stack:Ie(n)}}var Xs=[],Ws=0,vl=null,io=0,ui=[],fi=0,Ta=null,Di=1,Ui="";function qi(t,n){Xs[Ws++]=io,Xs[Ws++]=vl,vl=t,io=n}function Fp(t,n,a){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=Ta,Ta=t;var r=Di;t=Ui;var u=32-Vt(r)-1;r&=~(1<<u),a+=1;var f=32-Vt(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Di=1<<32-Vt(n)+u|a<<u|r,Ui=f+t}else Di=1<<f|a<<u|r,Ui=t}function wu(t){t.return!==null&&(qi(t,1),Fp(t,1,0))}function Du(t){for(;t===vl;)vl=Xs[--Ws],Xs[Ws]=null,io=Xs[--Ws],Xs[Ws]=null;for(;t===Ta;)Ta=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null,Di=ui[--fi],ui[fi]=null}function Hp(t,n){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=Ta,Di=n.id,Ui=n.overflow,Ta=t}var Rn=null,Qe=null,Ee=!1,Aa=null,di=!1,Uu=Error(s(519));function Ra(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(ci(n,t)),Uu}function Gp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[cn]=t,n[mn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)_e(Ro[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ke(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),An(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||ax(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(t,!0)}function Vp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Rn=Rn.return}}function qs(t){if(t!==Rn)return!1;if(!Ee)return Vp(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kf(t.type,t.memoizedProps)),a=!a),a&&Qe&&Ra(t),Vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=hx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=hx(t)}else n===27?(n=Qe,Ga(t.type)?(t=ed,ed=null,Qe=t):Qe=n):Qe=Rn?pi(t.stateNode.nextSibling):null;return!0}function hs(){Qe=Rn=null,Ee=!1}function Lu(){var t=Aa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Aa=null),t}function ao(t){Aa===null?Aa=[t]:Aa.push(t)}var Nu=L(null),ps=null,Yi=null;function Ca(t,n,a){yt(Nu,n._currentValue),n._currentValue=a}function ji(t){t._currentValue=Nu.current,Q(Nu)}function Ou(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Pu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var H=0;H<n.length;H++)if(E.context===n[H]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Ou(f.return,a,t),r||(_=null);break t}f=E.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Ou(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ys(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=u.type;Qn(u.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(u===ft.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Pu(n,t,a,r),n.flags|=262144}function yl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ms(t){ps=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return kp(ps,t)}function Sl(t,n){return ps===null&&ms(t),kp(t,n)}function kp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(s(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var Tv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Av=o.unstable_scheduleCallback,Rv=o.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Tv,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&Av(Rv,function(){t.controller.abort()})}var ro=null,Iu=0,js=0,Zs=null;function Cv(t,n){if(ro===null){var a=ro=[];Iu=0,js=Gf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Iu++,n.then(Xp,Xp),n}function Xp(){if(--Iu===0&&ro!==null){Zs!==null&&(Zs.status="fulfilled");var t=ro;ro=null,js=0,Zs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Wp=I.S;I.S=function(t,n){Cm=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cv(t,n),Wp!==null&&Wp(t,n)};var xs=L(null);function Bu(){var t=xs.current;return t!==null?t:je.pooledCache}function bl(t,n){n===null?yt(xs,xs.current):yt(xs,n.pool)}function qp(){var t=Bu();return t===null?null:{parent:un._currentValue,pool:t}}var Ks=Error(s(460)),Fu=Error(s(474)),Ml=Error(s(542)),El={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw _s=n,Ks}}function gs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,Ks):a}}var _s=null;function Zp(){if(_s===null)throw Error(s(459));var t=_s;return _s=null,t}function Kp(t){if(t===Ks||t===Ml)throw Error(s(483))}var Qs=null,oo=0;function Tl(t){var n=oo;return oo+=1,Qs===null&&(Qs=[]),jp(Qs,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Al(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qp(t){function n(j,k){if(t){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function r(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Wi(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function _(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function E(j,k,$,pt){return k===null||k.tag!==6?(k=Ru($,j.mode,pt),k.return=j,k):(k=u(k,$),k.return=j,k)}function H(j,k,$,pt){var Qt=$.type;return Qt===C?ht(j,k,$.props.children,pt,$.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===K&&gs(Qt)===k.type)?(k=u(k,$.props),lo(k,$),k.return=j,k):(k=_l($.type,$.key,$.props,null,j.mode,pt),lo(k,$),k.return=j,k)}function et(j,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Cu($,j.mode,pt),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function ht(j,k,$,pt,Qt){return k===null||k.tag!==7?(k=ds($,j.mode,pt,Qt),k.return=j,k):(k=u(k,$),k.return=j,k)}function gt(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ru(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return $=_l(k.type,k.key,k.props,null,j.mode,$),lo($,k),$.return=j,$;case T:return k=Cu(k,j.mode,$),k.return=j,k;case K:return k=gs(k),gt(j,k,$)}if(rt(k)||X(k))return k=ds(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return gt(j,Tl(k),$);if(k.$$typeof===D)return gt(j,Sl(j,k),$);Al(j,k)}return null}function it(j,k,$,pt){var Qt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qt!==null?null:E(j,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===Qt?H(j,k,$,pt):null;case T:return $.key===Qt?et(j,k,$,pt):null;case K:return $=gs($),it(j,k,$,pt)}if(rt($)||X($))return Qt!==null?null:ht(j,k,$,pt,null);if(typeof $.then=="function")return it(j,k,Tl($),pt);if($.$$typeof===D)return it(j,k,Sl(j,$),pt);Al(j,$)}return null}function ot(j,k,$,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get($)||null,E(k,j,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return j=j.get(pt.key===null?$:pt.key)||null,H(k,j,pt,Qt);case T:return j=j.get(pt.key===null?$:pt.key)||null,et(k,j,pt,Qt);case K:return pt=gs(pt),ot(j,k,$,pt,Qt)}if(rt(pt)||X(pt))return j=j.get($)||null,ht(k,j,pt,Qt,null);if(typeof pt.then=="function")return ot(j,k,$,Tl(pt),Qt);if(pt.$$typeof===D)return ot(j,k,$,Sl(k,pt),Qt);Al(k,pt)}return null}function Ft(j,k,$,pt){for(var Qt=null,Ue=null,Xt=k,fe=k=0,Se=null;Xt!==null&&fe<$.length;fe++){Xt.index>fe?(Se=Xt,Xt=null):Se=Xt.sibling;var Le=it(j,Xt,$[fe],pt);if(Le===null){Xt===null&&(Xt=Se);break}t&&Xt&&Le.alternate===null&&n(j,Xt),k=f(Le,k,fe),Ue===null?Qt=Le:Ue.sibling=Le,Ue=Le,Xt=Se}if(fe===$.length)return a(j,Xt),Ee&&qi(j,fe),Qt;if(Xt===null){for(;fe<$.length;fe++)Xt=gt(j,$[fe],pt),Xt!==null&&(k=f(Xt,k,fe),Ue===null?Qt=Xt:Ue.sibling=Xt,Ue=Xt);return Ee&&qi(j,fe),Qt}for(Xt=r(Xt);fe<$.length;fe++)Se=ot(Xt,j,fe,$[fe],pt),Se!==null&&(t&&Se.alternate!==null&&Xt.delete(Se.key===null?fe:Se.key),k=f(Se,k,fe),Ue===null?Qt=Se:Ue.sibling=Se,Ue=Se);return t&&Xt.forEach(function(qa){return n(j,qa)}),Ee&&qi(j,fe),Qt}function ee(j,k,$,pt){if($==null)throw Error(s(151));for(var Qt=null,Ue=null,Xt=k,fe=k=0,Se=null,Le=$.next();Xt!==null&&!Le.done;fe++,Le=$.next()){Xt.index>fe?(Se=Xt,Xt=null):Se=Xt.sibling;var qa=it(j,Xt,Le.value,pt);if(qa===null){Xt===null&&(Xt=Se);break}t&&Xt&&qa.alternate===null&&n(j,Xt),k=f(qa,k,fe),Ue===null?Qt=qa:Ue.sibling=qa,Ue=qa,Xt=Se}if(Le.done)return a(j,Xt),Ee&&qi(j,fe),Qt;if(Xt===null){for(;!Le.done;fe++,Le=$.next())Le=gt(j,Le.value,pt),Le!==null&&(k=f(Le,k,fe),Ue===null?Qt=Le:Ue.sibling=Le,Ue=Le);return Ee&&qi(j,fe),Qt}for(Xt=r(Xt);!Le.done;fe++,Le=$.next())Le=ot(Xt,j,fe,Le.value,pt),Le!==null&&(t&&Le.alternate!==null&&Xt.delete(Le.key===null?fe:Le.key),k=f(Le,k,fe),Ue===null?Qt=Le:Ue.sibling=Le,Ue=Le);return t&&Xt.forEach(function(Hy){return n(j,Hy)}),Ee&&qi(j,fe),Qt}function ke(j,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var Qt=$.key;k!==null;){if(k.key===Qt){if(Qt=$.type,Qt===C){if(k.tag===7){a(j,k.sibling),pt=u(k,$.props.children),pt.return=j,j=pt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===K&&gs(Qt)===k.type){a(j,k.sibling),pt=u(k,$.props),lo(pt,$),pt.return=j,j=pt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===C?(pt=ds($.props.children,j.mode,pt,$.key),pt.return=j,j=pt):(pt=_l($.type,$.key,$.props,null,j.mode,pt),lo(pt,$),pt.return=j,j=pt)}return _(j);case T:t:{for(Qt=$.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),pt=u(k,$.children||[]),pt.return=j,j=pt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}pt=Cu($,j.mode,pt),pt.return=j,j=pt}return _(j);case K:return $=gs($),ke(j,k,$,pt)}if(rt($))return Ft(j,k,$,pt);if(X($)){if(Qt=X($),typeof Qt!="function")throw Error(s(150));return $=Qt.call($),ee(j,k,$,pt)}if(typeof $.then=="function")return ke(j,k,Tl($),pt);if($.$$typeof===D)return ke(j,k,Sl(j,$),pt);Al(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),pt=u(k,$),pt.return=j,j=pt):(a(j,k),pt=Ru($,j.mode,pt),pt.return=j,j=pt),_(j)):a(j,k)}return function(j,k,$,pt){try{oo=0;var Qt=ke(j,k,$,pt);return Qs=null,Qt}catch(Xt){if(Xt===Ks||Xt===Ml)throw Xt;var Ue=Jn(29,Xt,null,j.mode);return Ue.lanes=pt,Ue.return=j,Ue}finally{}}}var vs=Qp(!0),Jp=Qp(!1),wa=!1;function Hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=gl(t),Pp(t,null,a),n}return xl(t,r,n,a),gl(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,kr(t,a)}}function Vu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ku=!1;function uo(){if(ku){var t=Zs;if(t!==null)throw t}}function fo(t,n,a,r){ku=!1;var u=t.updateQueue;wa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var H=E,et=H.next;H.next=null,_===null?f=et:_.next=et,_=H;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,E=ht.lastBaseUpdate,E!==_&&(E===null?ht.firstBaseUpdate=et:E.next=et,ht.lastBaseUpdate=H))}if(f!==null){var gt=u.baseState;_=0,ht=et=H=null,E=f;do{var it=E.lane&-536870913,ot=it!==E.lane;if(ot?(ye&it)===it:(r&it)===it){it!==0&&it===js&&(ku=!0),ht!==null&&(ht=ht.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,ee=E;it=n;var ke=a;switch(ee.tag){case 1:if(Ft=ee.payload,typeof Ft=="function"){gt=Ft.call(ke,gt,it);break t}gt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=ee.payload,it=typeof Ft=="function"?Ft.call(ke,gt,it):Ft,it==null)break t;gt=x({},gt,it);break t;case 2:wa=!0}}it=E.callback,it!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[it]:ot.push(it))}else ot={lane:it,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ht===null?(et=ht=ot,H=gt):ht=ht.next=ot,_|=it;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(H=gt),u.baseState=H,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),za|=_,t.lanes=_,t.memoizedState=gt}}function $p(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function t0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$p(a[t],n)}var Js=L(null),Rl=L(0);function e0(t,n){t=ia,yt(Rl,t),yt(Js,n),ia=t|n.baseLanes}function Xu(){yt(Rl,ia),yt(Js,Js.current)}function Wu(){ia=Rl.current,Q(Js),Q(Rl)}var $n=L(null),hi=null;function La(t){var n=t.alternate;yt(on,on.current&1),yt($n,t),hi===null&&(n===null||Js.current!==null||n.memoizedState!==null)&&(hi=t)}function qu(t){yt(on,on.current),yt($n,t),hi===null&&(hi=t)}function n0(t){t.tag===22?(yt(on,on.current),yt($n,t),hi===null&&(hi=t)):Na()}function Na(){yt(on,on.current),yt($n,$n.current)}function ti(t){Q($n),hi===t&&(hi=null),Q(on)}var on=L(0);function Cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,oe=null,Ge=null,fn=null,wl=!1,$s=!1,ys=!1,Dl=0,ho=0,tr=null,Dv=0;function tn(){throw Error(s(321))}function Yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function ju(t,n,a,r,u,f){return Zi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?F0:uf,ys=!1,f=a(r,u),ys=!1,$s&&(f=a0(n,a,r,u)),i0(t),f}function i0(t){I.H=xo;var n=Ge!==null&&Ge.next!==null;if(Zi=0,fn=Ge=oe=null,wl=!1,ho=0,tr=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&yl(t)&&(dn=!0))}function a0(t,n,a,r){oe=t;var u=0;do{if($s&&(tr=null),ho=0,$s=!1,25<=u)throw Error(s(301));if(u+=1,fn=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=H0,f=n(a,r)}while($s);return f}function Uv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(oe.flags|=1024),n}function Zu(){var t=Dl!==0;return Dl=0,t}function Ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qu(t){if(wl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}wl=!1}Zi=0,fn=Ge=oe=null,$s=!1,ho=Dl=0,tr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?oe.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(Ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=fn===null?oe.memoizedState:fn.next;if(n!==null)fn=n,Ge=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},fn===null?oe.memoizedState=fn=t:fn=fn.next=t}return fn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,tr===null&&(tr=[]),t=jp(tr,t,n),n=oe,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?F0:uf),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===D)return Cn(t)}throw Error(s(438,String(t)))}function Ju(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=A;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function Nl(t){var n=ln();return $u(n,Ge,t)}function $u(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=_=null,H=null,et=n,ht=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(ye&gt)===gt:(Zi&gt)===gt){var it=et.revertLane;if(it===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===js&&(ht=!0);else if((Zi&it)===it){et=et.next,it===js&&(ht=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(E=H=gt,_=f):H=H.next=gt,oe.lanes|=it,za|=it;gt=et.action,ys&&a(f,gt),f=et.hasEagerState?et.eagerState:a(f,gt)}else it={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(E=H=it,_=f):H=H.next=it,oe.lanes|=gt,za|=gt;et=et.next}while(et!==null&&et!==n);if(H===null?_=f:H.next=E,!Qn(f,t.memoizedState)&&(dn=!0,ht&&(a=Zs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function tf(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Qn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function s0(t,n,a){var r=oe,u=ln(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Qn((Ge||u).memoizedState,a);if(_&&(u.memoizedState=a,dn=!0),u=u.queue,af(l0.bind(null,r,u,t),[t]),u.getSnapshot!==n||_||fn!==null&&fn.memoizedState.tag&1){if(r.flags|=2048,er(9,{destroy:void 0},o0.bind(null,r,u,a,n),null),je===null)throw Error(s(349));f||(Zi&127)!==0||r0(r,n,a)}return a}function r0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Ul(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function o0(t,n,a,r){n.value=a,n.getSnapshot=r,c0(n)&&u0(t)}function l0(t,n,a){return a(function(){c0(n)&&u0(t)})}function c0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function u0(t){var n=fs(t,2);n!==null&&Yn(n,t,2)}function ef(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),ys){jt(!0);try{a()}finally{jt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function f0(t,n,a,r){return t.baseState=a,$u(t,Ge,typeof r=="function"?r:Ki)}function Lv(t,n,a,r,u){if(zl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};I.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,d0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function d0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=I.T,_={};I.T=_;try{var E=a(u,r),H=I.S;H!==null&&H(_,E),h0(t,n,E)}catch(et){nf(t,n,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),I.T=f}}else try{f=a(u,r),h0(t,n,f)}catch(et){nf(t,n,et)}}function h0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){p0(t,n,r)},function(r){return nf(t,n,r)}):p0(t,n,a)}function p0(t,n,a){n.status="fulfilled",n.value=a,m0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,d0(t,a)))}function nf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,m0(n),n=n.next;while(n!==r)}t.action=null}function m0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function x0(t,n){return n}function g0(t,n){if(Ee){var a=je.formState;if(a!==null){t:{var r=oe;if(Ee){if(Qe){e:{for(var u=Qe,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=pi(u.nextSibling),r=u.data==="F!";break t}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x0,lastRenderedState:n},a.queue=r,a=z0.bind(null,oe,r),r.dispatch=a,r=ef(!1),f=cf.bind(null,oe,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Lv.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function _0(t){var n=ln();return v0(n,Ge,t)}function v0(t,n,a){if(n=$u(t,n,x0)[0],t=Nl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=po(n)}catch(_){throw _===Ks?Ml:_}else r=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,er(9,{destroy:void 0},Nv.bind(null,u,a),null)),[r,f,t]}function Nv(t,n){t.action=n}function y0(t){var n=ln(),a=Ge;if(a!==null)return v0(n,a,t);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function er(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Ul(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function S0(){return ln().memoizedState}function Ol(t,n,a,r){var u=Bn();oe.flags|=t,u.memoizedState=er(1|n,{destroy:void 0},a,r===void 0?null:r)}function Pl(t,n,a,r){var u=ln();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&Yu(r,Ge.memoizedState.deps)?u.memoizedState=er(n,f,a,r):(oe.flags|=t,u.memoizedState=er(1|n,f,a,r))}function b0(t,n){Ol(8390656,8,t,n)}function af(t,n){Pl(2048,8,t,n)}function Ov(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Ul(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function M0(t){var n=ln().memoizedState;return Ov({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function E0(t,n){return Pl(4,2,t,n)}function T0(t,n){return Pl(4,4,t,n)}function A0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function R0(t,n,a){a=a!=null?a.concat([t]):null,Pl(4,4,A0.bind(null,n,t),a)}function sf(){}function C0(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Yu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function w0(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Yu(n,r[1]))return r[0];if(r=t(),ys){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[r,n],r}function rf(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Dm(),oe.lanes|=t,za|=t,a)}function D0(t,n,a,r){return Qn(a,n)?a:Js.current!==null?(t=rf(t,a,r),Qn(t,n)||(dn=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(ye&261930)===0?(dn=!0,t.memoizedState=a):(t=Dm(),oe.lanes|=t,za|=t,n)}function U0(t,n,a,r,u){var f=q.p;q.p=f!==0&&8>f?f:8;var _=I.T,E={};I.T=E,cf(t,!1,n,a);try{var H=u(),et=I.S;if(et!==null&&et(E,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ht=wv(H,r);mo(t,n,ht,ii(t))}else mo(t,n,r,ii(t))}catch(gt){mo(t,n,{then:function(){},status:"rejected",reason:gt},ii())}finally{q.p=f,_!==null&&E.types!==null&&(_.types=E.types),I.T=_}}function Pv(){}function of(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=L0(t).queue;U0(t,u,n,W,a===null?Pv:function(){return N0(t),a(r)})}function L0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function N0(t){var n=L0(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},ii())}function lf(){return Cn(Lo)}function O0(){return ln().memoizedState}function P0(){return ln().memoizedState}function zv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=Da(a);var r=Ua(n,t,a);r!==null&&(Yn(r,n,a),co(r,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function Iv(t,n,a){var r=ii();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?I0(n,a):(a=Tu(t,n,a,r),a!==null&&(Yn(a,t,r),B0(a,n,r)))}function z0(t,n,a){var r=ii();mo(t,n,a,r)}function mo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))I0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(u.hasEagerState=!0,u.eagerState=E,Qn(E,_))return xl(t,n,u,0),je===null&&ml(),!1}catch{}finally{}if(a=Tu(t,n,u,r),a!==null)return Yn(a,t,r),B0(a,n,r),!0}return!1}function cf(t,n,a,r){if(r={lane:2,revertLane:Gf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(s(479))}else n=Tu(t,a,r,2),n!==null&&Yn(n,t,2)}function zl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function I0(t,n){$s=wl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function B0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,kr(t,a)}}var xo={readContext:Cn,use:Ll,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};xo.useEffectEvent=tn;var F0={readContext:Cn,use:Ll,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:b0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,A0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var r=t();if(ys){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(ys){jt(!0);try{a(n)}finally{jt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Iv.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=z0.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(t,n){var a=Bn();return rf(a,t,n)},useTransition:function(){var t=ef(!1);return t=U0.bind(null,oe,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,u=Bn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(ye&127)!==0||r0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,b0(l0.bind(null,r,f,t),[t]),r.flags|=2048,er(9,{destroy:void 0},o0.bind(null,r,f,a,n),null),a},useId:function(){var t=Bn(),n=je.identifierPrefix;if(Ee){var a=Ui,r=Di;a=(r&~(1<<32-Vt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:lf,useFormState:g0,useActionState:g0,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ju,useCacheRefresh:function(){return Bn().memoizedState=zv.bind(null,oe)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:Cn,use:Ll,useCallback:C0,useContext:Cn,useEffect:af,useImperativeHandle:R0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:w0,useReducer:Nl,useRef:S0,useState:function(){return Nl(Ki)},useDebugValue:sf,useDeferredValue:function(t,n){var a=ln();return D0(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Nl(Ki)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:s0,useId:O0,useHostTransitionStatus:lf,useFormState:_0,useActionState:_0,useOptimistic:function(t,n){var a=ln();return f0(a,Ge,t,n)},useMemoCache:Ju,useCacheRefresh:P0};uf.useEffectEvent=M0;var H0={readContext:Cn,use:Ll,useCallback:C0,useContext:Cn,useEffect:af,useImperativeHandle:R0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:w0,useReducer:tf,useRef:S0,useState:function(){return tf(Ki)},useDebugValue:sf,useDeferredValue:function(t,n){var a=ln();return Ge===null?rf(a,t,n):D0(a,Ge.memoizedState,t,n)},useTransition:function(){var t=tf(Ki)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:s0,useId:O0,useHostTransitionStatus:lf,useFormState:y0,useActionState:y0,useOptimistic:function(t,n){var a=ln();return Ge!==null?f0(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:P0};H0.useEffectEvent=M0;function ff(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var df={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ii(),u=Da(r);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,r),n!==null&&(Yn(n,t,r),co(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ii(),u=Da(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,r),n!==null&&(Yn(n,t,r),co(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),r=Da(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(t,r,a),n!==null&&(Yn(n,t,a),co(n,t,a))}};function G0(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!eo(a,r)||!eo(u,f):!0}function V0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&df.enqueueReplaceState(n,n.state,null)}function Ss(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function k0(t){pl(t)}function X0(t){console.error(t)}function W0(t){pl(t)}function Il(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function q0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(t,n)},a}function Y0(t){return t=Da(t),t.tag=3,t}function j0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){q0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){q0(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Bv(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Zl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Bf(t,r,u)),!1;case 22:return a.flags|=65536,r===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Bf(t,r,u)),!1}throw Error(s(435,a.tag))}return Bf(t,r,u),Zl(),!1}if(Ee)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Uu&&(t=Error(s(422),{cause:r}),ao(ci(t,a)))):(r!==Uu&&(n=Error(s(423),{cause:r}),ao(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ci(r,a),u=hf(t.stateNode,r,u),Vu(t,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),Eo===null?Eo=[f]:Eo.push(f),en!==4&&(en=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hf(a.stateNode,r,t),Vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Y0(u),j0(u,t,a,r),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var pf=Error(s(461)),dn=!1;function wn(t,n,a,r){n.child=t===null?Jp(n,null,a,r):vs(n,t.child,a,r)}function Z0(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return ms(n),r=ju(t,n,a,_,f,u),E=Zu(),t!==null&&!dn?(Ku(t,n,u),Qi(t,n,u)):(Ee&&E&&wu(n),n.flags|=1,wn(t,n,r,u),n.child)}function K0(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Q0(t,n,f,r,u)):(t=_l(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!bf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(_,r)&&t.ref===n.ref)return Qi(t,n,u)}return n.flags|=1,t=Wi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Q0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(eo(f,r)&&t.ref===n.ref)if(dn=!1,n.pendingProps=r=f,bf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Qi(t,n,u)}return mf(t,n,a,r,u)}function J0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return $0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bl(n,f!==null?f.cachePool:null),f!==null?e0(n,f):Xu(),n0(n);else return r=n.lanes=536870912,$0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(bl(n,f.cachePool),e0(n,f),Na(),n.memoizedState=null):(t!==null&&bl(n,null),Xu(),Na());return wn(t,n,u,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $0(t,n,a,r,u){var f=Bu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&bl(n,null),Xu(),n0(n),t!==null&&Ys(t,n,r,!0),n.childLanes=u,null}function Bl(t,n){return n=Hl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function tm(t,n,a){return vs(n,t.child,null,a),t=Bl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function Fv(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(r.mode==="hidden")return t=Bl(n,r),n.lanes=536870912,go(null,t);if(qu(n),(t=Qe)?(t=dx(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Rn=n,Qe=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Bl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=tm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Ys(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(r=je,r!==null&&(_=Xr(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,fs(t,_),Yn(r,t,_),pf;Zl(),n=tm(t,n,a)}else t=f.treeContext,Qe=pi(_.nextSibling),Rn=n,Ee=!0,Aa=null,di=!1,t!==null&&Hp(n,t),n=Bl(n,r),n.flags|=4096;return n}return t=Wi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Fl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function mf(t,n,a,r,u){return ms(n),a=ju(t,n,a,r,void 0,u),r=Zu(),t!==null&&!dn?(Ku(t,n,u),Qi(t,n,u)):(Ee&&r&&wu(n),n.flags|=1,wn(t,n,a,u),n.child)}function em(t,n,a,r,u,f){return ms(n),n.updateQueue=null,a=a0(n,r,a,u),i0(t),r=Zu(),t!==null&&!dn?(Ku(t,n,f),Qi(t,n,f)):(Ee&&r&&wu(n),n.flags|=1,wn(t,n,a,f),n.child)}function nm(t,n,a,r,u){if(ms(n),n.stateNode===null){var f=ks,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Hu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):ks,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ff(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&df.enqueueReplaceState(f,f.state,null),fo(n,r,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,H=Ss(a,E);f.props=H;var et=f.context,ht=a.contextType;_=ks,typeof ht=="object"&&ht!==null&&(_=Cn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||et!==_)&&V0(n,f,r,_),wa=!1;var it=n.memoizedState;f.state=it,fo(n,r,f,u),uo(),et=n.memoizedState,E||it!==et||wa?(typeof gt=="function"&&(ff(n,a,gt,r),et=n.memoizedState),(H=wa||G0(n,a,H,r,it,et,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=_,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Gu(t,n),_=n.memoizedProps,ht=Ss(a,_),f.props=ht,gt=n.pendingProps,it=f.context,et=a.contextType,H=ks,typeof et=="object"&&et!==null&&(H=Cn(et)),E=a.getDerivedStateFromProps,(et=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||it!==H)&&V0(n,f,r,H),wa=!1,it=n.memoizedState,f.state=it,fo(n,r,f,u),uo();var ot=n.memoizedState;_!==gt||it!==ot||wa||t!==null&&t.dependencies!==null&&yl(t.dependencies)?(typeof E=="function"&&(ff(n,a,E,r),ot=n.memoizedState),(ht=wa||G0(n,a,ht,r,it,ot,H)||t!==null&&t.dependencies!==null&&yl(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=H,r=ht):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Fl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=vs(n,t.child,null,u),n.child=vs(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Qi(t,n,u),t}function im(t,n,a,r){return hs(),n.flags|=256,wn(t,n,a,r),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(t){return{baseLanes:t,cachePool:qp()}}function _f(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function am(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(u?La(n):Na(),(t=Qe)?(t=dx(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Rn=n,Qe=null)):t=null,t===null)throw Ra(n);return td(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,u?(Na(),u=n.mode,E=Hl({mode:"hidden",children:E},u),r=ds(r,u,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=gf(a),r.childLanes=_f(t,_,a),n.memoizedState=xf,go(null,r)):(La(n),vf(n,E))}var H=t.memoizedState;if(H!==null&&(E=H.dehydrated,E!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=yf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),E=r.fallback,u=n.mode,r=Hl({mode:"visible",children:r.children},u),E=ds(E,u,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,vs(n,t.child,null,a),r=n.child,r.memoizedState=gf(a),r.childLanes=_f(t,_,a),n.memoizedState=xf,n=go(null,r));else if(La(n),td(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var et=_.dgst;_=et,r=Error(s(419)),r.stack="",r.digest=_,ao({value:r,source:null,stack:null}),n=yf(t,n,a)}else if(dn||Ys(t,n,a,!1),_=(a&t.childLanes)!==0,dn||_){if(_=je,_!==null&&(r=Xr(_,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,fs(t,r),Yn(_,t,r),pf;$f(E)||Zl(),n=yf(t,n,a)}else $f(E)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Qe=pi(E.nextSibling),Rn=n,Ee=!0,Aa=null,di=!1,t!==null&&Hp(n,t),n=vf(n,r.children),n.flags|=4096);return n}return u?(Na(),E=r.fallback,u=n.mode,H=t.child,et=H.sibling,r=Wi(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,et!==null?E=Wi(et,E):(E=ds(E,u,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,go(null,r),r=n.child,E=t.child.memoizedState,E===null?E=gf(a):(u=E.cachePool,u!==null?(H=un._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=qp(),E={baseLanes:E.baseLanes|a,cachePool:u}),r.memoizedState=E,r.childLanes=_f(t,_,a),n.memoizedState=xf,go(t.child,r)):(La(n),a=t.child,t=a.sibling,a=Wi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function vf(t,n){return n=Hl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hl(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function yf(t,n,a){return vs(n,t.child,null,a),t=vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ou(t.return,n,a)}function Sf(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function rm(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=on.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,yt(on,_),wn(t,n,r,a),r=Ee?io:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sm(t,a,n);else if(t.tag===19)sm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Cl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Cl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Sf(n,!0,a,null,f,r);break;case"together":Sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yl(t)))}function Hv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ca(n,un,t.memoizedState.cache),hs();break;case 27:case 5:Wt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?am(t,n,a):(La(n),t=Qi(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return rm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(on,on.current),r)break;return null;case 22:return n.lanes=0,J0(t,n,a,n.pendingProps);case 24:Ca(n,un,t.memoizedState.cache)}return Qi(t,n,a)}function om(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!bf(t,a)&&(n.flags&128)===0)return dn=!1,Hv(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Ee&&(n.flags&1048576)!==0&&Fp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=gs(n.elementType),n.type=t,typeof t=="function")Au(t)?(r=Ss(t,r),n.tag=1,n=nm(null,n,t,r,a)):(n.tag=0,n=mf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===B){n.tag=11,n=Z0(null,n,t,r,a);break t}else if(u===O){n.tag=14,n=K0(null,n,t,r,a);break t}}throw n=dt(t)||t,Error(s(306,n,""))}}return n;case 0:return mf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ss(r,n.pendingProps),nm(t,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Gu(t,n),fo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ca(n,un,r),r!==f.cache&&Pu(n,[un],a,!0),uo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=im(t,n,r,a);break t}else if(r!==u){u=ci(Error(s(424)),n),ao(u),n=im(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=pi(t.firstChild),Rn=n,Ee=!0,Aa=null,di=!0,a=Jp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(hs(),r===u){n=Qi(t,n,a);break t}wn(t,n,r,a)}n=n.child}return n;case 26:return Fl(t,n),t===null?(a=_x(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,r=nc(at.current).createElement(a),r[cn]=n,r[mn]=t,Dn(r,a,t),nt(r),n.stateNode=r):n.memoizedState=_x(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Wt(n),t===null&&Ee&&(r=n.stateNode=mx(n.type,n.pendingProps,at.current),Rn=n,di=!0,u=Qe,Ga(n.type)?(ed=u,Qe=pi(r.firstChild)):Qe=u),wn(t,n,n.pendingProps.children,a),Fl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((u=r=Qe)&&(r=xy(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,Rn=n,Qe=pi(r.firstChild),di=!1,u=!0):u=!1),u||Ra(n)),Wt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Kf(u,f)?r=null:_!==null&&Kf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(t,n,Uv,null,null,a),Lo._currentValue=u),Fl(t,n),wn(t,n,r,a),n.child;case 6:return t===null&&Ee&&((t=a=Qe)&&(a=gy(a,n.pendingProps,di),a!==null?(n.stateNode=a,Rn=n,Qe=null,t=!0):t=!1),t||Ra(n)),null;case 13:return am(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=vs(n,null,r,a):wn(t,n,r,a),n.child;case 11:return Z0(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ca(n,n.type,r.value),wn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ms(n),u=Cn(u),r=r(u),n.flags|=1,wn(t,n,r,a),n.child;case 14:return K0(t,n,n.type,n.pendingProps,a);case 15:return Q0(t,n,n.type,n.pendingProps,a);case 19:return rm(t,n,a);case 31:return Fv(t,n,a);case 22:return J0(t,n,a,n.pendingProps);case 24:return ms(n),r=Cn(un),t===null?(u=Bu(),u===null&&(u=je,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Hu(n),Ca(n,un,u)):((t.lanes&a)!==0&&(Gu(t,n),fo(n,null,null,a),uo()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,un,r)):(r=f.cache,Ca(n,un,r),r!==u.cache&&Pu(n,[un],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(t){t.flags|=4}function Mf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Om())t.flags|=8192;else throw _s=El,Fu}else t.flags&=-16777217}function lm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mx(n))if(Om())t.flags|=8192;else throw _s=El,Fu}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?He():536870912,t.lanes|=n,sr|=n)}function _o(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Gv(t,n,a){var r=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(un),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qs(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ji(n),f!==null?(Je(n),lm(n,f)):(Je(n),Mf(n,u,null,r,a))):f?f!==t.memoizedState?(Ji(n),Je(n),lm(n,f)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ji(n),Je(n),Mf(n,u,t,r,a)),null;case 27:if(ce(n),a=at.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),null}t=Tt.current,qs(n)?Gp(n):(t=mx(u,r,a),n.stateNode=t,Ji(n))}return Je(n),null;case 5:if(ce(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(f=Tt.current,qs(n))Gp(n);else{var _=nc(at.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[cn]=n,f[mn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Dn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ji(n)}}return Je(n),Mf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=at.current,qs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ax(t.nodeValue,a)),t||Ra(n,!0)}else t=nc(t).createTextNode(r),t[cn]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=qs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=qs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Je(n),null);case 4:return Ht(),t===null&&Wf(n.stateNode.containerInfo),Je(n),null;case 10:return ji(n.type),Je(n),null;case 19:if(Q(on),r=n.memoizedState,r===null)return Je(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)_o(r,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Cl(t),f!==null){for(n.flags|=128,_o(r,!1),t=f.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zp(a,t),a=a.sibling;return yt(on,on.current&1|2),Ee&&qi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&M()>ql&&(n.flags|=128,u=!0,_o(r,!1),n.lanes=4194304)}else{if(!u)if(t=Cl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),_o(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ee)return Je(n),null}else 2*M()-r.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,_o(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=M(),t.sibling=null,a=on.current,yt(on,u?a&1|2:a&1),Ee&&qi(n,r.treeForkCount),t):(Je(n),null);case 22:case 23:return ti(n),Wu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Q(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(un),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Vv(t,n){switch(Du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(un),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));hs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(on),null;case 4:return Ht(),null;case 10:return ji(n.type),null;case 22:case 23:return ti(n),Wu(),t!==null&&Q(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(un),null;case 25:return null;default:return null}}function cm(t,n){switch(Du(n),n.tag){case 3:ji(un),Ht();break;case 26:case 27:case 5:ce(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Q(on);break;case 10:ji(n.type);break;case 22:case 23:ti(n),Wu(),t!==null&&Q(xs);break;case 24:ji(un)}}function vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(E){Fe(n,n.return,E)}}function Oa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,u=n;var H=a,et=E;try{et()}catch(ht){Fe(u,H,ht)}}}r=r.next}while(r!==f)}}catch(ht){Fe(n,n.return,ht)}}function um(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{t0(n,a)}catch(r){Fe(t,t.return,r)}}}function fm(t,n,a){a.props=Ss(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Fe(t,n,u)}}function Li(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function dm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function Ef(t,n,a){try{var r=t.stateNode;uy(r,t.type,a,n),r[mn]=n}catch(u){Fe(t,t.return,u)}}function hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Af(t,n,a),t=t.sibling;t!==null;)Af(t,n,a),t=t.sibling}function Vl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Vl(t,n,a),t=t.sibling;t!==null;)Vl(t,n,a),t=t.sibling}function pm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[cn]=t,n[mn]=a}catch(f){Fe(t,t.return,f)}}var $i=!1,hn=!1,Rf=!1,mm=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function kv(t,n){if(t=t.containerInfo,jf=cc,t=Rp(t),vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,H=-1,et=0,ht=0,gt=t,it=null;e:for(;;){for(var ot;gt!==a||u!==0&&gt.nodeType!==3||(E=_+u),gt!==f||r!==0&&gt.nodeType!==3||(H=_+r),gt.nodeType===3&&(_+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)it=gt,gt=ot;for(;;){if(gt===t)break e;if(it===a&&++et===u&&(E=_),it===f&&++ht===r&&(H=_),(ot=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=ot}a=E===-1||H===-1?null:{start:E,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:t,selectionRange:a},cc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=Ss(a.type,u);t=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Fe(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function xm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),r&4&&vo(5,a);break;case 1:if(ea(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}r&64&&um(a),r&512&&yo(a,a.return);break;case 3:if(ea(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{t0(t,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&r&4&&pm(a);case 26:case 5:ea(t,a),n===null&&r&4&&dm(a),r&512&&yo(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),r&4&&vm(t,a);break;case 13:ea(t,a),r&4&&ym(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jv.bind(null,a),_y(t,a))));break;case 22:if(r=a.memoizedState!==null||$i,!r){n=n!==null&&n.memoizedState!==null||hn,u=$i;var f=hn;$i=r,(hn=n)&&!f?na(t,a,(a.subtreeFlags&8772)!==0):ea(t,a),$i=u,hn=f}break;case 30:break;default:ea(t,a)}}function gm(t){var n=t.alternate;n!==null&&(t.alternate=null,gm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Yr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,kn=!1;function ta(t,n,a){for(a=a.child;a!==null;)_m(t,n,a),a=a.sibling}function _m(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||Li(a,n),ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Li(a,n);var r=$e,u=kn;Ga(a.type)&&($e=a.stateNode,kn=!1),ta(t,n,a),wo(a.stateNode),$e=r,kn=u;break;case 5:hn||Li(a,n);case 6:if(r=$e,u=kn,$e=null,ta(t,n,a),$e=r,kn=u,$e!==null)if(kn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:$e!==null&&(kn?(t=$e,ux(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hr(t)):ux($e,a.stateNode));break;case 4:r=$e,u=kn,$e=a.stateNode.containerInfo,kn=!0,ta(t,n,a),$e=r,kn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),hn||Oa(4,a,n),ta(t,n,a);break;case 1:hn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&fm(a,n,r)),ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,ta(t,n,a),hn=r;break;default:ta(t,n,a)}}function vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hr(t)}catch(a){Fe(n,n.return,a)}}}function ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hr(t)}catch(a){Fe(n,n.return,a)}}function Xv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new mm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new mm),n;default:throw Error(s(435,t.tag))}}function kl(t,n){var a=Xv(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=$v.bind(null,t,r);r.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Ga(E.type)){$e=E.stateNode,kn=!1;break t}break;case 5:$e=E.stateNode,kn=!1;break t;case 3:case 4:$e=E.stateNode.containerInfo,kn=!0;break t}E=E.return}if($e===null)throw Error(s(160));_m(f,_,u),$e=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sm(n,t),n=n.sibling}var Si=null;function Sm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),r&4&&(Oa(3,t,t.return),vo(3,t),Oa(5,t,t.return));break;case 1:Xn(n,t),Wn(t),r&512&&(hn||a===null||Li(a,a.return)),r&64&&$i&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Si;if(Xn(n,t),Wn(t),r&512&&(hn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[os]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,r,a),f[cn]=t,nt(f),r=f;break t;case"link":var _=Sx("link","href",u).get(r+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=Sx("meta","content",u).get(r+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[cn]=t,nt(f),r=f}t.stateNode=r}else bx(u,t.type,t.stateNode);else t.stateNode=yx(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?bx(u,t.type,t.stateNode):yx(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),r&512&&(hn||a===null||Li(a,a.return)),a!==null&&r&4&&Ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),r&512&&(hn||a===null||Li(a,a.return)),t.flags&32){u=t.stateNode;try{wi(u,"")}catch(Ft){Fe(t,t.return,Ft)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Ef(t,u,a!==null?a.memoizedProps:u)),r&1024&&(Rf=!0);break;case 6:if(Xn(n,t),Wn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ft){Fe(t,t.return,Ft)}}break;case 3:if(sc=null,u=Si,Si=ic(n.containerInfo),Xn(n,t),Si=u,Wn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(Ft){Fe(t,t.return,Ft)}Rf&&(Rf=!1,bm(t));break;case 4:r=Si,Si=ic(t.stateNode.containerInfo),Xn(n,t),Wn(t),Si=r;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,kl(t,r)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=M()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,kl(t,r)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,et=$i,ht=hn;if($i=et||u,hn=ht||H,Xn(n,t),hn=ht,$i=et,Wn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||$i||hn||bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=H.stateNode;var gt=H.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ft){Fe(H,H.return,Ft)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ft){Fe(H,H.return,Ft)}}}else if(n.tag===18){if(a===null){H=n;try{var ot=H.stateNode;u?fx(ot,!0):fx(H.stateNode,!1)}catch(Ft){Fe(H,H.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,kl(t,a))));break;case 19:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,kl(t,r)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(hm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Tf(t);Vl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(wi(_,""),a.flags&=-33);var E=Tf(t);Vl(t,E,_);break;case 3:case 4:var H=a.stateNode.containerInfo,et=Tf(t);Af(t,et,H);break;default:throw Error(s(161))}}catch(ht){Fe(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xm(t,n.alternate,n),n=n.sibling}function bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),bs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fm(n,n.return,a),bs(n);break;case 27:wo(n.stateNode);case 26:case 5:Li(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:na(u,f,a),vo(4,f);break;case 1:if(na(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Fe(r,r.return,et)}if(r=f,u=r.updateQueue,u!==null){var E=r.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)$p(H[u],E)}catch(et){Fe(r,r.return,et)}}a&&_&64&&um(f),yo(f,f.return);break;case 27:pm(f);case 26:case 5:na(u,f,a),a&&r===null&&_&4&&dm(f),yo(f,f.return);break;case 12:na(u,f,a);break;case 31:na(u,f,a),a&&_&4&&vm(u,f);break;case 13:na(u,f,a),a&&_&4&&ym(u,f);break;case 22:f.memoizedState===null&&na(u,f,a),yo(f,f.return);break;case 30:break;default:na(u,f,a)}n=n.sibling}}function Cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function wf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function bi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mm(t,n,a,r),n=n.sibling}function Mm(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,r),u&2048&&vo(9,n);break;case 1:bi(t,n,a,r);break;case 3:bi(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){bi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Fe(n,n.return,H)}}else bi(t,n,a,r);break;case 31:bi(t,n,a,r);break;case 13:bi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?bi(t,n,a,r):So(t,n):f._visibility&2?bi(t,n,a,r):(f._visibility|=2,nr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cf(_,n);break;case 24:bi(t,n,a,r),u&2048&&wf(n.alternate,n);break;default:bi(t,n,a,r)}}function nr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,H=r,et=_.flags;switch(_.tag){case 0:case 11:case 15:nr(f,_,E,H,u),vo(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?nr(f,_,E,H,u):So(f,_):(ht._visibility|=2,nr(f,_,E,H,u)),u&&et&2048&&Cf(_.alternate,_);break;case 24:nr(f,_,E,H,u),u&&et&2048&&wf(_.alternate,_);break;default:nr(f,_,E,H,u)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:So(a,r),u&2048&&Cf(r.alternate,r);break;case 24:So(a,r),u&2048&&wf(r.alternate,r);break;default:So(a,r)}n=n.sibling}}var bo=8192;function ir(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Em(t,n,a),t=t.sibling}function Em(t,n,a){switch(t.tag){case 26:ir(t,n,a),t.flags&bo&&t.memoizedState!==null&&Dy(a,Si,t.memoizedState,t.memoizedProps);break;case 5:ir(t,n,a);break;case 3:case 4:var r=Si;Si=ic(t.stateNode.containerInfo),ir(t,n,a),Si=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=bo,bo=16777216,ir(t,n,a),bo=r):ir(t,n,a));break;default:ir(t,n,a)}}function Tm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,Rm(r,t)}Tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(t),t=t.sibling}function Am(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):Mo(t);break;default:Mo(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,Rm(r,t)}Tm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function Rm(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:so(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else t:for(a=t;Mn!==null;){r=Mn;var u=r.sibling,f=r.return;if(gm(r),r===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var Wv={getCacheForType:function(t){var n=Cn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(un).controller.signal}},qv=typeof WeakMap=="function"?WeakMap:Map,Oe=0,je=null,ge=null,ye=0,Be=0,ei=null,Pa=!1,ar=!1,Df=!1,ia=0,en=0,za=0,Ms=0,Uf=0,ni=0,sr=0,Eo=null,qn=null,Lf=!1,Wl=0,Cm=0,ql=1/0,Yl=null,Ia=null,gn=0,Ba=null,rr=null,aa=0,Nf=0,Of=null,wm=null,To=0,Pf=null;function ii(){return(Oe&2)!==0&&ye!==0?ye&-ye:I.T!==null?Gf():Wr()}function Dm(){if(ni===0)if((ye&536870912)===0||Ee){var t=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function Yn(t,n,a){(t===je&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(or(t,0),Fa(t,ye,ni,!1)),Nn(t,a),((Oe&2)===0||t!==je)&&(t===je&&((Oe&2)===0&&(Ms|=a),en===4&&Fa(t,ye,ni,!1)),Ni(t))}function Um(t,n,a){if((Oe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),u=r?Zv(t,n):If(t,n,!0),f=r;do{if(u===0){ar&&!r&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Yv(a)){u=If(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;u=Eo;var H=E.current.memoizedState.isDehydrated;if(H&&(or(E,_).flags|=256),_=If(E,_,!1),_!==2){if(Df&&!H){E.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){or(t,0),Fa(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fa(r,n,ni,!Pa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Wl+300-M(),10<u)){if(Fa(r,n,ni,!Pa),vt(r,0,!0)!==0)break t;aa=n,r.timeoutHandle=lx(Lm.bind(null,r,a,qn,Yl,Lf,n,ni,Ms,sr,Pa,f,"Throttled",-0,0),u);break t}Lm(r,a,qn,Yl,Lf,n,ni,Ms,sr,Pa,f,null,-0,0)}}break}while(!0);Ni(t)}function Lm(t,n,a,r,u,f,_,E,H,et,ht,gt,it,ot){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},Em(n,f,gt);var Ft=(f&62914560)===f?Wl-M():(f&4194048)===f?Cm-M():0;if(Ft=Uy(gt,Ft),Ft!==null){aa=f,t.cancelPendingCommit=Ft(Hm.bind(null,t,n,f,a,r,u,_,E,H,ht,gt,null,it,ot)),Fa(t,f,_,!et);return}}Hm(t,n,f,a,r,u,_,E,H)}function Yv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,r){n&=~Uf,n&=~Ms,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Vt(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&sl(t,a,n)}function jl(){return(Oe&6)===0?(Ao(0),!1):!0}function zf(){if(ge!==null){if(Be===0)var t=ge.return;else t=ge,Yi=ps=null,Qu(t),Qs=null,oo=0,t=ge;for(;t!==null;)cm(t.alternate,t),t=t.return;ge=null}}function or(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,zf(),je=t,ge=a=Wi(t.current,null),ye=n,Be=0,ei=null,Pa=!1,ar=It(t,n),Df=!1,sr=ni=Uf=Ms=za=en=0,qn=Eo=null,Lf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Vt(r),f=1<<u;n|=t[u],r&=~f}return ia=n,ml(),a}function Nm(t,n){oe=null,I.H=xo,n===Ks||n===Ml?(n=Zp(),Be=3):n===Fu?(n=Zp(),Be=4):Be=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,ge===null&&(en=1,Il(t,ci(n,t.current)))}function Om(){var t=$n.current;return t===null?!0:(ye&4194048)===ye?hi===null:(ye&62914560)===ye||(ye&536870912)!==0?t===hi:!1}function Pm(){var t=I.H;return I.H=xo,t===null?xo:t}function zm(){var t=I.A;return I.A=Wv,t}function Zl(){en=4,Pa||(ye&4194048)!==ye&&$n.current!==null||(ar=!0),(za&134217727)===0&&(Ms&134217727)===0||je===null||Fa(je,ye,ni,!1)}function If(t,n,a){var r=Oe;Oe|=2;var u=Pm(),f=zm();(je!==t||ye!==n)&&(Yl=null,or(t,n)),n=!1;var _=en;t:do try{if(Be!==0&&ge!==null){var E=ge,H=ei;switch(Be){case 8:zf(),_=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var et=Be;if(Be=0,ei=null,lr(t,E,H,et),a&&ar){_=0;break t}break;default:et=Be,Be=0,ei=null,lr(t,E,H,et)}}jv(),_=en;break}catch(ht){Nm(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Yi=ps=null,Oe=r,I.H=u,I.A=f,ge===null&&(je=null,ye=0,ml()),_}function jv(){for(;ge!==null;)Im(ge)}function Zv(t,n){var a=Oe;Oe|=2;var r=Pm(),u=zm();je!==t||ye!==n?(Yl=null,ql=M()+500,or(t,n)):ar=It(t,n);t:do try{if(Be!==0&&ge!==null){n=ge;var f=ei;e:switch(Be){case 1:Be=0,ei=null,lr(t,n,f,1);break;case 2:case 9:if(Yp(f)){Be=0,ei=null,Bm(n);break}n=function(){Be!==2&&Be!==9||je!==t||(Be=7),Ni(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Yp(f)?(Be=0,ei=null,Bm(n)):(Be=0,ei=null,lr(t,n,f,7));break;case 5:var _=null;switch(ge.tag){case 26:_=ge.memoizedState;case 5:case 27:var E=ge;if(_?Mx(_):E.stateNode.complete){Be=0,ei=null;var H=E.sibling;if(H!==null)ge=H;else{var et=E.return;et!==null?(ge=et,Kl(et)):ge=null}break e}}Be=0,ei=null,lr(t,n,f,5);break;case 6:Be=0,ei=null,lr(t,n,f,6);break;case 8:zf(),en=6;break t;default:throw Error(s(462))}}Kv();break}catch(ht){Nm(t,ht)}while(!0);return Yi=ps=null,I.H=r,I.A=u,Oe=a,ge!==null?0:(je=null,ye=0,ml(),en)}function Kv(){for(;ge!==null&&!se();)Im(ge)}function Im(t){var n=om(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Kl(t):ge=n}function Bm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=em(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=em(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Qu(n);default:cm(a,n),n=ge=zp(n,ia),n=om(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Kl(t):ge=n}function lr(t,n,a,r){Yi=ps=null,Qu(n),Qs=null,oo=0;var u=n.return;try{if(Bv(t,u,n,a,ye)){en=1,Il(t,ci(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;en=1,Il(t,ci(a,t.current)),ge=null;return}n.flags&32768?(Ee||r===1?t=!0:ar||(ye&536870912)!==0?t=!1:(Pa=t=!0,(r===2||r===9||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fm(n,t)):Kl(n)}function Kl(t){var n=t;do{if((n.flags&32768)!==0){Fm(n,Pa);return}t=n.return;var a=Gv(n.alternate,n,ia);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);en===0&&(en=5)}function Fm(t,n){do{var a=Vv(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);en=6,ge=null}function Hm(t,n,a,r,u,f,_,E,H){t.cancelPendingCommit=null;do Ql();while(gn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Eu,Zn(t,a,f,_,E,H),t===je&&(ge=je=null,ye=0),rr=n,Ba=t,aa=a,Nf=f,Of=u,wm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ty(ut,function(){return Wm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,u=q.p,q.p=2,_=Oe,Oe|=4;try{kv(t,n,a)}finally{Oe=_,q.p=u,I.T=r}}gn=1,Gm(),Vm(),km()}}function Gm(){if(gn===1){gn=0;var t=Ba,n=rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var r=q.p;q.p=2;var u=Oe;Oe|=4;try{Sm(n,t);var f=Zf,_=Rp(t.containerInfo),E=f.focusedElem,H=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&Ap(E.ownerDocument.documentElement,E)){if(H!==null&&vu(E)){var et=H.start,ht=H.end;if(ht===void 0&&(ht=et),"selectionStart"in E)E.selectionStart=et,E.selectionEnd=Math.min(ht,E.value.length);else{var gt=E.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var ot=it.getSelection(),Ft=E.textContent.length,ee=Math.min(H.start,Ft),ke=H.end===void 0?ee:Math.min(H.end,Ft);!ot.extend&&ee>ke&&(_=ke,ke=ee,ee=_);var j=Tp(E,ee),k=Tp(E,ke);if(j&&k&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var $=gt.createRange();$.setStart(j.node,j.offset),ot.removeAllRanges(),ee>ke?(ot.addRange($),ot.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ot.addRange($))}}}}for(gt=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}cc=!!jf,Zf=jf=null}finally{Oe=u,q.p=r,I.T=a}}t.current=n,gn=2}}function Vm(){if(gn===2){gn=0;var t=Ba,n=rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var r=q.p;q.p=2;var u=Oe;Oe|=4;try{xm(t,n.alternate,n)}finally{Oe=u,q.p=r,I.T=a}}gn=3}}function km(){if(gn===4||gn===3){gn=0,N();var t=Ba,n=rr,a=aa,r=wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,rr=Ba=null,Xm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),rs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=I.T,u=q.p,q.p=2,I.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var E=r[_];f(E.value,{componentStack:E.stack})}}finally{I.T=n,q.p=u}}(aa&3)!==0&&Ql(),Ni(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Pf?To++:(To=0,Pf=t):To=0,Ao(0)}}function Xm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function Ql(){return Gm(),Vm(),km(),Wm()}function Wm(){if(gn!==5)return!1;var t=Ba,n=Nf;Nf=0;var a=rs(aa),r=I.T,u=q.p;try{q.p=32>a?32:a,I.T=null,a=Of,Of=null;var f=Ba,_=aa;if(gn=0,rr=Ba=null,aa=0,(Oe&6)!==0)throw Error(s(331));var E=Oe;if(Oe|=4,Am(f.current),Mm(f,f.current,_,a),Oe=E,Ao(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{q.p=u,I.T=r,Xm(t,n)}}function qm(t,n,a){n=ci(a,n),n=hf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Nn(t,2),Ni(t))}function Fe(t,n,a){if(t.tag===3)qm(t,t,a);else for(;n!==null;){if(n.tag===3){qm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){t=ci(a,t),a=Y0(2),r=Ua(n,a,2),r!==null&&(j0(a,r,n,t),Nn(r,2),Ni(r));break}}n=n.return}}function Bf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new qv;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Df=!0,u.add(a),t=Qv.bind(null,t,n,a),n.then(t,t))}function Qv(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(ye&a)===a&&(en===4||en===3&&(ye&62914560)===ye&&300>M()-Wl?(Oe&2)===0&&or(t,0):Uf|=a,sr===ye&&(sr=0)),Ni(t)}function Ym(t,n){n===0&&(n=He()),t=fs(t,n),t!==null&&(Nn(t,n),Ni(t))}function Jv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ym(t,a)}function $v(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ym(t,a)}function ty(t,n){return qe(t,n)}var Jl=null,cr=null,Ff=!1,$l=!1,Hf=!1,Ha=0;function Ni(t){t!==cr&&t.next===null&&(cr===null?Jl=cr=t:cr=cr.next=t),$l=!0,Ff||(Ff=!0,ny())}function Ao(t,n){if(!Hf&&$l){Hf=!0;do for(var a=!1,r=Jl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Vt(42|t)+1)-1,f&=u&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qm(r,f))}else f=ye,f=vt(r,r===je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||It(r,f)||(a=!0,Qm(r,f));r=r.next}while(a);Hf=!1}}function ey(){jm()}function jm(){$l=Ff=!1;var t=0;Ha!==0&&dy()&&(t=Ha);for(var n=M(),a=null,r=Jl;r!==null;){var u=r.next,f=Zm(r,n);f===0?(r.next=null,a===null?Jl=u:a.next=u,u===null&&(cr=a)):(a=r,(t!==0||(f&3)!==0)&&($l=!0)),r=u}gn!==0&&gn!==5||Ao(t),Ha!==0&&(Ha=0)}function Zm(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Vt(f),E=1<<_,H=u[_];H===-1?((E&a)===0||(E&r)!==0)&&(u[_]=ae(E,n)):H<=n&&(t.expiredLanes|=E),f&=~E}if(n=je,a=ye,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Zt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Zt(r),rs(a)){case 2:case 8:a=St;break;case 32:a=ut;break;case 268435456:a=Lt;break;default:a=ut}return r=Km.bind(null,t),a=qe(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Zt(r),t.callbackPriority=2,t.callbackNode=null,2}function Km(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ql()&&t.callbackNode!==a)return null;var r=ye;return r=vt(t,t===je?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Um(t,r,n),Zm(t,M()),t.callbackNode!=null&&t.callbackNode===a?Km.bind(null,t):null)}function Qm(t,n){if(Ql())return null;Um(t,n,!0)}function ny(){py(function(){(Oe&6)!==0?qe(xt,ey):jm()})}function Gf(){if(Ha===0){var t=js;t===0&&(t=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Ha=t}return Ha}function Jm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ol(""+t)}function $m(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iy(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Jm((u[mn]||null).action),_=r.submitter;_&&(n=(n=_[mn]||null)?Jm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new fl("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var H=_?$m(u,_):new FormData(u);of(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(E.preventDefault(),H=_?$m(u,_):new FormData(u),of(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Vf=0;Vf<Mu.length;Vf++){var kf=Mu[Vf],ay=kf.toLowerCase(),sy=kf[0].toUpperCase()+kf.slice(1);yi(ay,"on"+sy)}yi(Dp,"onAnimationEnd"),yi(Up,"onAnimationIteration"),yi(Lp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Sv,"onTransitionRun"),yi(bv,"onTransitionStart"),yi(Mv,"onTransitionCancel"),yi(Np,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function tx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],H=E.instance,et=E.currentTarget;if(E=E.listener,H!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=et;try{f(u)}catch(ht){pl(ht)}u.currentTarget=null,f=H}else for(_=0;_<r.length;_++){if(E=r[_],H=E.instance,et=E.currentTarget,E=E.listener,H!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=et;try{f(u)}catch(ht){pl(ht)}u.currentTarget=null,f=H}}}}function _e(t,n){var a=n[zs];a===void 0&&(a=n[zs]=new Set);var r=t+"__bubble";a.has(r)||(ex(n,t,2,!1),a.add(r))}function Xf(t,n,a){var r=0;n&&(r|=4),ex(a,t,r,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Wf(t){if(!t[tc]){t[tc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[tc]||(n[tc]=!0,Xf("selectionchange",!1,n))}}function ex(t,n,a,r){switch(Dx(n)){case 2:var u=Oy;break;case 8:u=Py;break;default:u=rd}a=u.bind(null,n,a,t),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===u)break;if(_===4)for(_=r.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;E!==null;){if(_=ba(E),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){r=f=_;continue t}E=E.parentNode}}r=r.return}rp(function(){var et=f,ht=lu(a),gt=[];t:{var it=Op.get(t);if(it!==void 0){var ot=fl,Ft=t;switch(t){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ot=$_;break;case"focusin":Ft="focus",ot=pu;break;case"focusout":Ft="blur",ot=pu;break;case"beforeblur":case"afterblur":ot=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=G_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=nv;break;case Dp:case Up:case Lp:ot=X_;break;case Np:ot=av;break;case"scroll":case"scrollend":ot=F_;break;case"wheel":ot=rv;break;case"copy":case"cut":case"paste":ot=q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=fp;break;case"toggle":case"beforetoggle":ot=lv}var ee=(n&4)!==0,ke=!ee&&(t==="scroll"||t==="scrollend"),j=ee?it!==null?it+"Capture":null:it;ee=[];for(var k=et,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||j===null||(pt=jr(k,j),pt!=null&&ee.push(Co(k,pt,$))),ke)break;k=k.return}0<ee.length&&(it=new ot(it,Ft,null,a,ht),gt.push({event:it,listeners:ee}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",it&&a!==ou&&(Ft=a.relatedTarget||a.fromElement)&&(ba(Ft)||Ft[Hi]))break t;if((ot||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=et,Ft=Ft?ba(Ft):null,Ft!==null&&(ke=c(Ft),ee=Ft.tag,Ft!==ke||ee!==5&&ee!==27&&ee!==6)&&(Ft=null)):(ot=null,Ft=et),ot!==Ft)){if(ee=cp,pt="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(ee=fp,pt="onPointerLeave",j="onPointerEnter",k="pointer"),ke=ot==null?it:Y(ot),$=Ft==null?it:Y(Ft),it=new ee(pt,k+"leave",ot,a,ht),it.target=ke,it.relatedTarget=$,pt=null,ba(ht)===et&&(ee=new ee(j,k+"enter",Ft,a,ht),ee.target=$,ee.relatedTarget=ke,pt=ee),ke=pt,ot&&Ft)e:{for(ee=oy,j=ot,k=Ft,$=0,pt=j;pt;pt=ee(pt))$++;pt=0;for(var Qt=k;Qt;Qt=ee(Qt))pt++;for(;0<$-pt;)j=ee(j),$--;for(;0<pt-$;)k=ee(k),pt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){ee=j;break e}j=ee(j),k=ee(k)}ee=null}else ee=null;ot!==null&&nx(gt,it,ot,ee,!1),Ft!==null&&ke!==null&&nx(gt,ke,Ft,ee,!0)}}t:{if(it=et?Y(et):window,ot=it.nodeName&&it.nodeName.toLowerCase(),ot==="select"||ot==="input"&&it.type==="file")var Ue=vp;else if(gp(it))if(yp)Ue=_v;else{Ue=xv;var Xt=mv}else ot=it.nodeName,!ot||ot.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&ru(et.elementType)&&(Ue=vp):Ue=gv;if(Ue&&(Ue=Ue(t,et))){_p(gt,Ue,a,ht);break t}Xt&&Xt(t,it,et),t==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&Sn(it,"number",it.value)}switch(Xt=et?Y(et):window,t){case"focusin":(gp(Xt)||Xt.contentEditable==="true")&&(Hs=Xt,yu=et,no=null);break;case"focusout":no=yu=Hs=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Cp(gt,a,ht);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":Cp(gt,a,ht)}var fe;if(xu)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Fs?mp(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(dp&&a.locale!=="ko"&&(Fs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Fs&&(fe=op()):(Ea=ht,fu="value"in Ea?Ea.value:Ea.textContent,Fs=!0)),Xt=ec(et,Se),0<Xt.length&&(Se=new up(Se,t,null,a,ht),gt.push({event:Se,listeners:Xt}),fe?Se.data=fe:(fe=xp(a),fe!==null&&(Se.data=fe)))),(fe=uv?fv(t,a):dv(t,a))&&(Se=ec(et,"onBeforeInput"),0<Se.length&&(Xt=new up("onBeforeInput","beforeinput",null,a,ht),gt.push({event:Xt,listeners:Se}),Xt.data=fe)),iy(gt,t,et,a,ht)}tx(gt,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=jr(t,a),u!=null&&r.unshift(Co(t,u,f)),u=jr(t,n),u!=null&&r.push(Co(t,u,f))),t.tag===3)return r;t=t.return}return[]}function oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function nx(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,H=E.alternate,et=E.stateNode;if(E=E.tag,H!==null&&H===r)break;E!==5&&E!==26&&E!==27||et===null||(H=et,u?(et=jr(a,f),et!=null&&_.unshift(Co(a,et,H))):u||(et=jr(a,f),et!=null&&_.push(Co(a,et,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function ix(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function ax(t,n){return n=ix(n),ix(t)===n}function Ve(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||wi(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&wi(t,""+r);break;case"className":Ae(t,"class",r);break;case"tabIndex":Ae(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,r);break;case"style":ap(t,r,f);break;case"data":if(n!=="object"){Ae(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ol(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ol(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ki);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ol(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),ue(t,"popover",r);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ue(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=I_.get(a)||a,ue(t,a,r))}}function Yf(t,n,a,r,u,f){switch(a){case"style":ap(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?wi(t,r):(typeof r=="number"||typeof r=="bigint")&&wi(t,""+r);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!At.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ue(t,a,r)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,f,_,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),r&&Ve(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var E=f=_=u=null,H=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":u=ht;break;case"type":_=ht;break;case"checked":H=ht;break;case"defaultChecked":et=ht;break;case"value":f=ht;break;case"defaultValue":E=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ve(t,n,r,ht,a,null)}}Ke(t,f,E,H,et,_,u,!1);return;case"select":_e("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Ve(t,n,u,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?xn(t,!!r,n,!1):a!=null&&xn(t,!!r,a,!0);return;case"textarea":_e("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ve(t,n,_,E,a,null)}An(t,r,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(r=a[H],r!=null))switch(H){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(t,n,H,r,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<Ro.length;r++)_e(Ro[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,et,r,a,null)}return;default:if(ru(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Yf(t,n,ht,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ve(t,n,E,r,a,null))}function uy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,E=null,H=null,et=null,ht=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":H=gt;default:r.hasOwnProperty(ot)||Ve(t,n,ot,null,r,gt)}}for(var it in r){var ot=r[it];if(gt=a[it],r.hasOwnProperty(it)&&(ot!=null||gt!=null))switch(it){case"type":f=ot;break;case"name":u=ot;break;case"checked":et=ot;break;case"defaultChecked":ht=ot;break;case"value":_=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==gt&&Ve(t,n,it,ot,r,gt)}}Gi(t,_,E,H,et,ht,f,u);return;case"select":ot=_=E=it=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ot=H;default:r.hasOwnProperty(f)||Ve(t,n,f,null,r,H)}for(u in r)if(f=r[u],H=a[u],r.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":it=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==H&&Ve(t,n,u,f,r,H)}n=E,a=_,r=ot,it!=null?xn(t,!!a,it,!1):!!r!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":ot=it=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ve(t,n,E,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":it=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(t,n,_,u,r,f)}bn(t,it,ot);return;case"option":for(var Ft in a)if(it=a[Ft],a.hasOwnProperty(Ft)&&it!=null&&!r.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Ve(t,n,Ft,null,r,it)}for(H in r)if(it=r[H],ot=a[H],r.hasOwnProperty(H)&&it!==ot&&(it!=null||ot!=null))switch(H){case"selected":t.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ve(t,n,H,it,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)it=a[ee],a.hasOwnProperty(ee)&&it!=null&&!r.hasOwnProperty(ee)&&Ve(t,n,ee,null,r,it);for(et in r)if(it=r[et],ot=a[et],r.hasOwnProperty(et)&&it!==ot&&(it!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ve(t,n,et,it,r,ot)}return;default:if(ru(n)){for(var ke in a)it=a[ke],a.hasOwnProperty(ke)&&it!==void 0&&!r.hasOwnProperty(ke)&&Yf(t,n,ke,void 0,r,it);for(ht in r)it=r[ht],ot=a[ht],!r.hasOwnProperty(ht)||it===ot||it===void 0&&ot===void 0||Yf(t,n,ht,it,r,ot);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!r.hasOwnProperty(j)&&Ve(t,n,j,null,r,it);for(gt in r)it=r[gt],ot=a[gt],!r.hasOwnProperty(gt)||it===ot||it==null&&ot==null||Ve(t,n,gt,it,r,ot)}function sx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,E=u.duration;if(f&&E&&sx(_)){for(_=0,E=u.responseEnd,r+=1;r<a.length;r++){var H=a[r],et=H.startTime;if(et>E)break;var ht=H.transferSize,gt=H.initiatorType;ht&&sx(gt)&&(H=H.responseEnd,_+=ht*(H<E?1:(E-et)/(H-et)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jf=null,Zf=null;function nc(t){return t.nodeType===9?t:t.ownerDocument}function rx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ox(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function dy(){var t=window.event;return t&&t.type==="popstate"?t===Qf?!1:(Qf=t,!0):(Qf=null,!1)}var lx=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,cx=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof cx<"u"?function(t){return cx.resolve(null).then(t).catch(my)}:lx;function my(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function ux(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),hr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[os]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);hr(n)}function fx(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),Yr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xy(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[os])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function gy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function dx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function $f(t){return t.data==="$?"||t.data==="$~"}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _y(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ed=null;function hx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function px(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function mx(t,n,a){switch(n=nc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Yr(t)}var mi=new Map,xx=new Set;function ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=q.d;q.d={f:vy,r:yy,D:Sy,C:by,L:My,m:Ey,X:Ay,S:Ty,M:Ry};function vy(){var t=sa.f(),n=jl();return t||n}function yy(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?N0(n):sa.r(t)}var ur=typeof document>"u"?null:document;function gx(t,n,a){var r=ur;if(r&&typeof n=="string"&&n){var u=Ze(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),xx.has(u)||(xx.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",t),nt(n),r.head.appendChild(n)))}}function Sy(t){sa.D(t),gx("dns-prefetch",t,null)}function by(t,n){sa.C(t,n),gx("preconnect",t,n)}function My(t,n,a){sa.L(t,n,a);var r=ur;if(r&&t&&n){var u='link[rel="preload"][as="'+Ze(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ze(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ze(a.imageSizes)+'"]')):u+='[href="'+Ze(t)+'"]';var f=u;switch(n){case"style":f=fr(t);break;case"script":f=dr(t)}mi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Do(f))||n==="script"&&r.querySelector(Uo(f))||(n=r.createElement("link"),Dn(n,"link",t),nt(n),r.head.appendChild(n)))}}function Ey(t,n){sa.m(t,n);var a=ur;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ze(r)+'"][href="'+Ze(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(t)}if(!mi.has(f)&&(t=x({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}r=a.createElement("link"),Dn(r,"link",t),nt(r),a.head.appendChild(r)}}}function Ty(t,n,a){sa.S(t,n,a);var r=ur;if(r&&t){var u=st(r).hoistableStyles,f=fr(t);n=n||"default";var _=u.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(Do(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&nd(t,a);var H=_=r.createElement("link");nt(H),Dn(H,"link",t),H._p=new Promise(function(et,ht){H.onload=et,H.onerror=ht}),H.addEventListener("load",function(){E.loading|=1}),H.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ac(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},u.set(f,_)}}}function Ay(t,n){sa.X(t,n);var a=ur;if(a&&t){var r=st(a).hoistableScripts,u=dr(t),f=r.get(u);f||(f=a.querySelector(Uo(u)),f||(t=x({src:t,async:!0},n),(n=mi.get(u))&&id(t,n),f=a.createElement("script"),nt(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Ry(t,n){sa.M(t,n);var a=ur;if(a&&t){var r=st(a).hoistableScripts,u=dr(t),f=r.get(u);f||(f=a.querySelector(Uo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&id(t,n),f=a.createElement("script"),nt(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function _x(t,n,a,r){var u=(u=at.current)?ic(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=st(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fr(a.href);var f=st(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Do(t)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||Cy(u,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=st(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function fr(t){return'href="'+Ze(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function vx(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Cy(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),nt(n),t.head.appendChild(n))}function dr(t){return'[src="'+Ze(t)+'"]'}function Uo(t){return"script[async]"+t}function yx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ze(a.href)+'"]');if(r)return n.instance=r,nt(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),nt(r),Dn(r,"style",u),ac(r,a.precedence,t),n.instance=r;case"stylesheet":u=fr(a.href);var f=t.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;r=vx(a),(u=mi.get(u))&&nd(r,u),f=(t.ownerDocument||t).createElement("link"),nt(f);var _=f;return _._p=new Promise(function(E,H){_.onload=E,_.onerror=H}),Dn(f,"link",r),n.state.loading|=4,ac(f,a.precedence,t),n.instance=f;case"script":return f=dr(a.src),(u=t.querySelector(Uo(f)))?(n.instance=u,nt(u),u):(r=a,(u=mi.get(f))&&(r=x({},a),id(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),nt(u),Dn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ac(r,a.precedence,t));return n.instance}function ac(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var sc=null;function Sx(t,n,a){if(sc===null){var r=new Map,u=sc=new Map;u.set(a,r)}else u=sc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[os]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function bx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Dy(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fr(r.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=rc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,nt(f);return}f=n.ownerDocument||n,r=vx(r),(u=mi.get(u))&&nd(r,u),f=f.createElement("link"),nt(f);var _=f;_._p=new Promise(function(E,H){_.onload=E,_.onerror=H}),Dn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=rc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ad=0;function Uy(t,n){return t.stylesheets&&t.count===0&&lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ad===0&&(ad=62500*fy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ad?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oc=null;function lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(Ly,t),oc=null,rc.call(t))}function Ly(t,n){if(!(n.state.loading&4)){var a=oc.get(t);if(a)var r=a.get(null);else{a=new Map,oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=rc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:D,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Ny(t,n,a,r,u,f,_,E,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Ex(t,n,a,r,u,f,_,E,H,et,ht,gt){return t=new Ny(t,n,a,_,H,et,ht,gt,E),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Hu(f),t}function Tx(t){return t?(t=ks,t):ks}function Ax(t,n,a,r,u,f){u=Tx(u),r.context===null?r.context=u:r.pendingContext=u,r=Da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(t,r,n),a!==null&&(Yn(a,t,n),co(a,t,n))}function Rx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sd(t,n){Rx(t,n),(t=t.alternate)&&Rx(t,n)}function Cx(t){if(t.tag===13||t.tag===31){var n=fs(t,67108864);n!==null&&Yn(n,t,67108864),sd(t,67108864)}}function wx(t){if(t.tag===13||t.tag===31){var n=ii();n=vi(n);var a=fs(t,n);a!==null&&Yn(a,t,n),sd(t,n)}}var cc=!0;function Oy(t,n,a,r){var u=I.T;I.T=null;var f=q.p;try{q.p=2,rd(t,n,a,r)}finally{q.p=f,I.T=u}}function Py(t,n,a,r){var u=I.T;I.T=null;var f=q.p;try{q.p=8,rd(t,n,a,r)}finally{q.p=f,I.T=u}}function rd(t,n,a,r){if(cc){var u=od(r);if(u===null)qf(t,n,r,uc,a),Ux(t,r);else if(Iy(u,t,n,a,r))r.stopPropagation();else if(Ux(t,r),n&4&&-1<zy.indexOf(t)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var H=1<<31-Vt(_);E.entanglements[1]|=H,_&=~H}Ni(f),(Oe&6)===0&&(ql=M()+500,Ao(0))}}break;case 31:case 13:E=fs(f,2),E!==null&&Yn(E,f,2),jl(),sd(f,2)}if(f=od(r),f===null&&qf(t,n,r,uc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else qf(t,n,r,null,a)}}function od(t){return t=lu(t),ld(t)}var uc=null;function ld(t){if(uc=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function Dx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case xt:return 2;case St:return 8;case ut:case Yt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var cd=!1,Va=null,ka=null,Xa=null,No=new Map,Oo=new Map,Wa=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ux(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Cx(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Iy(t,n,a,r,u){switch(n){case"focusin":return Va=Po(Va,t,n,a,r,u),!0;case"dragenter":return ka=Po(ka,t,n,a,r,u),!0;case"mouseover":return Xa=Po(Xa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Po(No.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,t,n,a,r,u)),!0}return!1}function Lx(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,qr(t.priority,function(){wx(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,qr(t.priority,function(){wx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=od(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);ou=r,a.target.dispatchEvent(r),ou=null}else return n=R(a),n!==null&&Cx(n),t.blockedOn=a,!1;n.shift()}return!0}function Nx(t,n,a){fc(t)&&a.delete(n)}function By(){cd=!1,Va!==null&&fc(Va)&&(Va=null),ka!==null&&fc(ka)&&(ka=null),Xa!==null&&fc(Xa)&&(Xa=null),No.forEach(Nx),Oo.forEach(Nx)}function dc(t,n){t.blockedOn===n&&(t.blockedOn=null,cd||(cd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,By)))}var hc=null;function Ox(t){hc!==t&&(hc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(ld(r||a)===null)continue;break}var f=R(a);f!==null&&(t.splice(n,3),n-=3,of(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function hr(t){function n(H){return dc(H,t)}Va!==null&&dc(Va,t),ka!==null&&dc(ka,t),Xa!==null&&dc(Xa,t),No.forEach(n),Oo.forEach(n);for(var a=0;a<Wa.length;a++){var r=Wa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Lx(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[mn]||null;if(typeof f=="function")_||Ox(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[mn]||null)E=_.formAction;else if(ld(u)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),Ox(a)}}}function Px(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ud(t){this._internalRoot=t}pc.prototype.render=ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ii();Ax(a,r,t,n,null,null)},pc.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ax(t.current,2,null,t,null,null),jl(),n[Hi]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Wr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Lx(t)}};var zx=e.version;if(zx!=="19.2.0")throw Error(s(527,zx,"19.2.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{bt=mc.inject(Fy),Et=mc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=k0,f=X0,_=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Ex(t,1,!1,null,null,a,r,null,u,f,_,Px),t[Hi]=n.current,Wf(t),new ud(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=k0,_=X0,E=W0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Ex(t,1,!0,n,a??null,r,u,H,f,_,E,Px),n.context=Tx(null),a=n.current,r=ii(),r=vi(r),u=Da(r),u.callback=null,Ua(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Ni(n),t[Hi]=n.current,Wf(t),new pc(n)},Io.version="19.2.0",Io}var qx;function Zy(){if(qx)return dd.exports;qx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dd.exports=jy(),dd.exports}var Ky=Zy();const Qy=Kg(Ky);var kt=Gh();const xc=Kg(kt),Yx=o=>{let e;const i=new Set,s=(p,g)=>{const x=typeof p=="function"?p(e):p;if(!Object.is(x,e)){const y=e;e=g??(typeof x!="object"||x===null)?x:Object.assign({},e,x),i.forEach(S=>S(e,y))}},l=()=>e,h={setState:s,getState:l,getInitialState:()=>m,subscribe:p=>(i.add(p),()=>i.delete(p))},m=e=o(s,l,h);return h},Jy=(o=>o?Yx(o):Yx),$y=o=>o;function tS(o,e=$y){const i=xc.useSyncExternalStore(o.subscribe,xc.useCallback(()=>e(o.getState()),[o,e]),xc.useCallback(()=>e(o.getInitialState()),[o,e]));return xc.useDebugValue(i),i}const jx=o=>{const e=Jy(o),i=s=>tS(e,s);return Object.assign(i,e),i},eS=(o=>o?jx(o):jx),In=eS((o,e)=>({phase:"INIT",sphereRotation:{yaw:0,pitch:0,roll:0},sphereOpacity:0,setPhase:i=>o({phase:i}),setSphereRotation:(i,s,l)=>o({sphereRotation:{yaw:i,pitch:s,roll:l}}),setSphereOpacity:i=>o({sphereOpacity:i}),send:i=>{console.log("[WS→]",i),e().ws?.readyState===1&&e().ws.send(JSON.stringify(i))},applyInEvent:i=>{switch(console.log("[WS← parsed]",i),i.type){case"phase":{o({phase:i.payload.phase});break}case"sphereRotation":{o({sphereRotation:{yaw:i.payload.yaw,pitch:i.payload.pitch,roll:i.payload.roll}});break}case"sphereOpacity":{o({sphereOpacity:i.payload.opacity});break}}}})),nS="/assets/Udio_Infinite%20Reverb%20Tail%20ext%20v2.2-CVidwL0F.mp3";let Ai=null,Ns=null,$a=null,qo=null,Qg=1,Vh=1;function Jg(){Ai||(Ai=new(window.AudioContext||window.webkitAudioContext)),!Ns&&Ai&&(Ns=Ai.createGain(),Ns.gain.value=Qg*Vh,Ns.connect(Ai.destination))}async function iS(o){if(Ai||Jg(),qo)return qo;const i=await(await fetch(o)).arrayBuffer();return qo=await Ai.decodeAudioData(i),qo}function aS(){try{$a?.stop()}catch{}$a?.disconnect(),$a=null}function sS(){Ns&&(Ns.gain.value=Qg*Vh)}async function $g(){Jg(),Ai&&(Ai.state==="suspended"&&await Ai.resume(),await iS(nS),aS(),$a=Ai.createBufferSource(),$a.buffer=qo,$a.loop=!0,$a.connect(Ns),$a.start(0))}function Tn(o){Vh=Math.max(0,Math.min(1,o)),sS()}const t_="/assets/INTRO%20(1)%20_%20Headphone_50%20sec-CpsyGQQY.mp4";function ss({alignH:o="center",alignV:e="middle",visible:i,showAtSec:s,videoRef:l,fadeMs:c=600,dimBackground:d=!0,backdropOpacity:h=.35,children:m,buttonLabel:p,onAction:g,secondaryButtonLabel:x,onSecondaryAction:y}){const[S,T]=kt.useState(!1);kt.useEffect(()=>{if(!l?.current||s==null||i!==void 0)return;const B=l.current,F=()=>{B.currentTime>=s&&T(!0)};return B.addEventListener("timeupdate",F),F(),()=>B.removeEventListener("timeupdate",F)},[l,s,i]);const b=`phase-callout phase-callout--v-${e} phase-callout--h-${o}  ${(i!==void 0?i:S)?"phase-callout--visible":""}`,v=Math.max(0,Math.min(1,h??.35)),P=d?`rgba(0,0,0,${v})`:"transparent",D={"--pc-fade":`${c}ms`,"--pc-backdrop":P};return ct.jsx("div",{className:b,style:D,children:ct.jsx("div",{className:"phase-callout__wrap",children:ct.jsxs("div",{className:"phase-callout__box",children:[ct.jsx("div",{className:"phase-callout__content",children:m}),ct.jsxs("div",{className:"phase-callout__actions",children:[p?ct.jsx("button",{className:"phase-callout__btn",onClick:g,disabled:!g,"aria-disabled":!g,style:g?void 0:{opacity:.5,animation:"none",cursor:"default"},children:p}):null,x&&y?ct.jsx("button",{className:"phase-callout__btn",onClick:y,children:x}):null]})]})})})}const rS={common:{continue:"계속",restart:"다시 시작"},init:{intro_title:`헤드셋이나 이어폰을 착용하면
더 입체적으로 감상할 수 있습니다.`,intro_desc:`Wear a headset or earphones
for a more immersive experience.`,start_button_main:"Tap to start"},help:{callout_title:`제임스가 정원으로 걸어 나가고 있습니다.
함께 나가시겠습니까?`,callout_desc:`James is walking out to the garden.
Would you like to join him?`,follow_main:"같이 나간다",follow_sub:"follow him",stay_main:"머문다",stay_sub:"stay here"},garden:{callout_title:`정원에 나오니,
모든 것이 희뿌옇습니다.`,callout_desc:`정원에 나오니,
모든 것이 희뿌옇습니다.`,explore_main:"정원을 둘러본다",explore_sub:"explore the garden",back_main:"처음으로 돌아간다",back_sub:"go back to the start",rotate_hint:`구를 돌려 정원을 둘러보세요.
Rotate the sphere to explore the garden.`,blow_hint:`길게 입김을 불어 먼지를 날려보세요.
제임스의 기억이 서서히 드러날 거예요.
Blow into the sphere to clear the dust.
You’ll begin to see James’s memories.`},timeline:{page1_title_ko:`정원의 먼지가 날아가
제임스의 기억들이 선명해졌습니다.`,page1_title_en:`As the dust cleared,
James’s memories became clear again.`,page2_title_ko:`슬라이더를 움직여
제임스의 기억을 들여다보세요.`,page2_title_en:`Move the slider
to explore James’s memories.`,page3_title_ko:`슬라이더를 왼쪽 끝까지 움직이면
가장 소중한 기억 속으로 더 깊이 들어갑니다.`,page3_title_en:`Push the slider all the way left
to enter his dearest memory.`,start_button_main:"기억을 들여다본다",start_button_sub:"look into memories",continue_button_main:"계속 진행하기",continue_button_sub:"Tap to continue"},dragonfly:{intro_title:`어린 시절의 기억을 떠올린 제임스가
잠자리를 잡고 싶어합니다.`,intro_desc:`As James recalls his childhood,
he wants to catch a dragonfly again.`,start_button_main:"잠자리를 잡으러 간다",start_button_sub:"catch dragonflies",hud_score_label:"잠자리",hud_time_label:"남은 시간",ending_title:"제임스는 즐거웠습니다.",ending_desc:"James felt happy.",ending_button_main:"계속 진행하기",ending_button_sub:"Tap to continue"},finale:{restart_cta:"Tap to restart",thank_you:""}},oS={common:{continue:"Continue",restart:"Restart"},init:{intro_title:`Wearing a headset or earphones
provides a more immersive experience.`,intro_desc:`Wearing a headset or earphones
provides a more immersive experience.`,start_button_main:"Tap to start"},help:{callout_title:`James is walking out to the garden.
Would you like to join him?`,callout_desc:`James is walking out to the garden.
Would you like to join him?`,follow_main:"Follow him",follow_sub:"follow him",stay_main:"Stay here",stay_sub:"stay here"},garden:{callout_title:`As we step into the garden,
everything looks hazy.`,callout_desc:`As we step into the garden,
everything looks hazy.`,explore_main:"Explore the garden",explore_sub:"explore the garden",back_main:"Go back to start",back_sub:"go back to the start",rotate_hint:"Rotate the sphere to explore the garden.",blow_hint:`Blow into the sphere to clear the dust.
You’ll begin to see James’s memories.`},timeline:{page1_title_ko:`As the dust cleared,
James’s memories became clear again.`,page1_title_en:`As the dust cleared,
James’s memories became clear again.`,page2_title_ko:`Move the slider
to explore James’s memories.`,page2_title_en:`Move the slider
to explore James’s memories.`,page3_title_ko:`Push the slider all the way left
to enter his dearest memory.`,page3_title_en:`Push the slider all the way left
to enter his dearest memory.`,start_button_main:"Look into memories",start_button_sub:"look into memories",continue_button_main:"Continue",continue_button_sub:"Tap to continue"},dragonfly:{intro_title:`As James recalls his childhood,
he wants to catch a dragonfly again.`,intro_desc:`As James recalls his childhood,
he wants to catch a dragonfly again.`,start_button_main:"Catch dragonflies",start_button_sub:"catch dragonflies",hud_score_label:"Dragonflies",hud_time_label:"Time left",ending_title:`In the moment he caught dragonflies with you,
James briefly forgot his pain and smiled.`,ending_desc:`For a brief moment,
as he chased dragonflies with you,
James forgot the ache in his heart.`,ending_button_main:"Continue",ending_button_sub:"Tap to continue"},finale:{restart_cta:"Tap to restart",thank_you:"Thank you."}},lS={ko:rS,en:oS};let e_="ko";const cS=o=>e_=o;function Re(o,e){return lS[e_][o][e]}function tl({src:o}){const e=kt.useRef(null);return kt.useEffect(()=>{const i=e.current;if(i)try{i.load()}catch{}},[]),ct.jsx("video",{ref:e,src:o,muted:!0,playsInline:!0,preload:"auto",style:{position:"fixed",width:0,height:0,opacity:0,pointerEvents:"none"},"aria-hidden":!0,tabIndex:-1})}const n_="/assets/Final_INTRO-BgiG0nkn.mp4";function uS(){const o=In(s=>s.send),e=kt.useRef(null),i=()=>{$g(),o({type:"start"})};return ct.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},className:"p-0",children:[ct.jsx("video",{src:t_,loop:!0,autoPlay:!0,playsInline:!0,preload:"auto",poster:"/assets/PhaseInit/headphone_poster.png",ref:e,onPlay:()=>Tn(0),onPause:()=>Tn(1),onEnded:()=>Tn(1),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0}}),ct.jsxs(ss,{videoRef:e,showAtSec:1,buttonLabel:Re("init","start_button_main"),onAction:i,children:[ct.jsx("h3",{style:{whiteSpace:"pre-line"},children:Re("init","intro_title")}),ct.jsx("p",{style:{whiteSpace:"pre-line"},children:Re("init","intro_desc")})]}),ct.jsx(tl,{src:n_})]})}const i_="/assets/INTRO(3)_Opening%20the%20door-CjF7PpcN.mp4";function fS(){const o=In(i=>i.send),e=kt.useRef(null);return ct.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},className:"p-0",children:[ct.jsx("video",{src:n_,autoPlay:!0,playsInline:!0,preload:"auto",poster:"/assets/PhaseHelp/intro_poster.png",ref:e,onPlay:()=>Tn(0),onPause:()=>Tn(1),onEnded:()=>Tn(1),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0}}),ct.jsxs(ss,{videoRef:e,showAtSec:33,buttonLabel:ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:Re("help","follow_main")}),ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:Re("help","follow_sub")})]}),onAction:()=>o({type:"consentYes"}),secondaryButtonLabel:ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:Re("help","stay_main")}),ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:Re("help","stay_sub")})]}),onSecondaryAction:()=>o({type:"consentNo"}),children:[ct.jsx("h3",{style:{whiteSpace:"pre-line"},children:Re("help","callout_title")}),ct.jsx("p",{style:{whiteSpace:"pre-line"},children:Re("help","callout_desc")})]}),ct.jsx(tl,{src:i_})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="181",dS=0,Zx=1,hS=2,a_=1,pS=2,da=3,_a=0,jn=1,ha=2,xa=0,Nr=1,jc=2,Kx=3,Qx=4,mS=5,Us=100,xS=101,gS=102,_S=103,vS=104,yS=200,SS=201,bS=202,MS=203,Kd=204,Qd=205,ES=206,TS=207,AS=208,RS=209,CS=210,wS=211,DS=212,US=213,LS=214,Jd=0,$d=1,th=2,Pr=3,eh=4,nh=5,ih=6,ah=7,s_=0,NS=1,OS=2,is=0,PS=1,zS=2,IS=3,BS=4,FS=5,HS=6,GS=7,r_=300,zr=301,Ir=302,sh=303,rh=304,$c=306,oh=1e3,pa=1001,lh=1002,oi=1003,VS=1004,gc=1005,ri=1006,gd=1007,es=1008,Bi=1009,o_=1010,l_=1011,jo=1012,Xh=1013,Os=1014,ma=1015,Hr=1016,Wh=1017,qh=1018,Zo=1020,c_=35902,u_=35899,f_=1021,d_=1022,Ri=1023,Ko=1026,Qo=1027,h_=1028,Yh=1029,jh=1030,Zh=1031,Kh=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,ch=35840,uh=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,xh=37808,gh=37809,_h=37810,vh=37811,yh=37812,Sh=37813,bh=37814,Mh=37815,Eh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,wh=37821,Dh=36492,Uh=36494,Lh=36495,Nh=36283,Oh=36284,Ph=36285,zh=36286,kS=3200,XS=3201,WS=0,qS=1,ts="",Gn="srgb",Br="srgb-linear",Zc="linear",Xe="srgb",pr=7680,Jx=519,YS=512,jS=513,ZS=514,p_=515,KS=516,QS=517,JS=518,$S=519,Ih=35044,$x="300 es",zi=2e3,Kc=2001;function m_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Jo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tb(){const o=Jo("canvas");return o.style.display="block",o}const tg={};function Qc(...o){const e="THREE."+o.shift();console.log(e,...o)}function le(...o){const e="THREE."+o.shift();console.warn(e,...o)}function nn(...o){const e="THREE."+o.shift();console.error(e,...o)}function $o(...o){const e=o.join(" ");e in tg||(tg[e]=!0,le(...o))}function eb(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Gr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=Math.PI/180,Bh=180/Math.PI;function as(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function nb(o,e){return(o%e+e)%e}function vd(o,e,i){return(1-i)*o+i*e}function Pi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function We(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,i=0){ve.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3],y=c[d+0],S=c[d+1],T=c[d+2],C=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h>=1){e[i+0]=y,e[i+1]=S,e[i+2]=T,e[i+3]=C;return}if(x!==C||m!==y||p!==S||g!==T){let b=m*y+p*S+g*T+x*C;b<0&&(y=-y,S=-S,T=-T,C=-C,b=-b);let v=1-h;if(b<.9995){const P=Math.acos(b),D=Math.sin(P);v=Math.sin(v*P)/D,h=Math.sin(h*P)/D,m=m*v+y*h,p=p*v+S*h,g=g*v+T*h,x=x*v+C*h}else{m=m*v+y*h,p=p*v+S*h,g=g*v+T*h,x=x*v+C*h;const P=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=P,p*=P,g*=P,x*=P}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=c[d],y=c[d+1],S=c[d+2],T=c[d+3];return e[i]=h*T+g*x+m*S-p*y,e[i+1]=m*T+g*y+p*x-h*S,e[i+2]=p*T+g*S+h*y-m*x,e[i+3]=g*T-h*x-m*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),x=h(c/2),y=m(s/2),S=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=y*g*x+p*S*T,this._y=p*S*x-y*g*T,this._z=p*g*T+y*S*x,this._w=p*g*x-y*S*T;break;case"YXZ":this._x=y*g*x+p*S*T,this._y=p*S*x-y*g*T,this._z=p*g*T-y*S*x,this._w=p*g*x+y*S*T;break;case"ZXY":this._x=y*g*x-p*S*T,this._y=p*S*x+y*g*T,this._z=p*g*T+y*S*x,this._w=p*g*x-y*S*T;break;case"ZYX":this._x=y*g*x-p*S*T,this._y=p*S*x+y*g*T,this._z=p*g*T-y*S*x,this._w=p*g*x+y*S*T;break;case"YZX":this._x=y*g*x+p*S*T,this._y=p*S*x+y*g*T,this._z=p*g*T-y*S*x,this._w=p*g*x-y*S*T;break;case"XZY":this._x=y*g*x-p*S*T,this._y=p*S*x-y*g*T,this._z=p*g*T+y*S*x,this._w=p*g*x+y*S*T;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=s+h+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(d-l)*S}else if(s>h&&s>x){const S=2*Math.sqrt(1+s-h-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-s-x);this._w=(c-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-s-h);this._w=(d-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-s*p,this._z=c*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(e=0,i=0,s=0){lt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(eg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(eg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),g=2*(h*i-c*l),x=2*(c*s-d*i);return this.x=i+m*p+d*x-h*g,this.y=s+m*g+h*p-c*x,this.z=l+m*x+c*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Te(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new lt,eg=new el;class de{constructor(e,i,s,l,c,d,h,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],x=s[7],y=s[2],S=s[5],T=s[8],C=l[0],b=l[3],v=l[6],P=l[1],D=l[4],B=l[7],F=l[2],U=l[5],O=l[8];return c[0]=d*C+h*P+m*F,c[3]=d*b+h*D+m*U,c[6]=d*v+h*B+m*O,c[1]=p*C+g*P+x*F,c[4]=p*b+g*D+x*U,c[7]=p*v+g*B+x*O,c[2]=y*C+S*P+T*F,c[5]=y*b+S*D+T*U,c[8]=y*v+S*B+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-s*c*g+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*d-h*p,y=h*m-g*c,S=p*c-d*m,T=i*x+s*y+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*p-g*s)*C,e[2]=(h*s-l*d)*C,e[3]=y*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=S*C,e[7]=(s*m-p*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Sd.makeScale(e,i)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new de,ng=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ib(){const o={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xe&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xe&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Br]:{primaries:e,whitePoint:s,transfer:Zc,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:s,transfer:Xe,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),o}const Ne=ib();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Or(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let mr;class ab{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{mr===void 0&&(mr=Jo("canvas")),mr.width=e.width,mr.height=e.height;const l=mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Jo("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ga(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ga(i[s]/255)*255):i[s]=ga(i[s]);return{data:i,width:e.width,height:e.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sb=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(bd(l[d].image)):c.push(bd(l[d]))}else c=bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function bd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ab.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let rb=0;const Md=new lt;class Un extends Gr{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,s=pa,l=pa,c=ri,d=es,h=Ri,m=Bi,p=Un.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=as(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=r_;Un.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],x=m[8],y=m[1],S=m[5],T=m[9],C=m[2],b=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-C)<.01&&Math.abs(T-b)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+C)<.1&&Math.abs(T+b)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,B=(S+1)/2,F=(v+1)/2,U=(g+y)/4,O=(x+C)/4,K=(T+b)/4;return D>B&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=U/s,c=O/s):B>F?B<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),s=U/l,c=K/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=O/c,l=K/c),this.set(s,l,c,i),this}let P=Math.sqrt((b-T)*(b-T)+(x-C)*(x-C)+(y-g)*(y-g));return Math.abs(P)<.001&&(P=1),this.x=(b-T)/P,this.y=(x-C)/P,this.z=(y-g)/P,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Te(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ob extends Gr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Un(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Qh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends ob{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class x_ extends Un{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lb extends Un{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(e=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(c,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),vc.subVectors(this.max,Bo),xr.subVectors(e.a,Bo),gr.subVectors(e.b,Bo),_r.subVectors(e.c,Bo),Ya.subVectors(gr,xr),ja.subVectors(_r,gr),Es.subVectors(xr,_r);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-Es.z,Es.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,Es.z,0,-Es.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-Es.y,Es.x,0];return!Ed(i,xr,gr,_r,vc)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,xr,gr,_r,vc))?!1:(yc.crossVectors(Ya,ja),i=[yc.x,yc.y,yc.z],Ed(i,xr,gr,_r,vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Mi=new lt,_c=new nl,xr=new lt,gr=new lt,_r=new lt,Ya=new lt,ja=new lt,Es=new lt,Bo=new lt,vc=new lt,yc=new lt,Ts=new lt;function Ed(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Ts.fromArray(o,c);const h=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),m=e.dot(Ts),p=i.dot(Ts),g=s.dot(Ts);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const cb=new nl,Fo=new lt,Td=new lt;class Jh{constructor(e=new lt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):cb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Fo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Td)),this.expandByPoint(Fo.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new lt,Ad=new lt,Sc=new lt,Za=new lt,Rd=new lt,bc=new lt,Cd=new lt;class ub{constructor(e=new lt,i=new lt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ad.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Ad);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Sc),h=Za.dot(this.direction),m=-Za.dot(Sc),p=Za.lengthSq(),g=Math.abs(1-d*d);let x,y,S,T;if(g>0)if(x=d*m-h,y=d*h-m,T=c*g,x>=0)if(y>=-T)if(y<=T){const C=1/g;x*=C,y*=C,S=x*(x+d*y+2*h)+y*(d*x+y+2*m)+p}else y=c,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*m)+p;else y=-c,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*m)+p;else y<=-T?(x=Math.max(0,-(-d*c+h)),y=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p):y<=T?(x=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(x=Math.max(0,-(d*c+h)),y=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+y*(y+2*m)+p);else y=d>0?-c:c,x=Math.max(0,-(d*y+h)),S=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ad).addScaledVector(Sc,y),S}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(c=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(h=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,s,l,c){Rd.subVectors(i,e),bc.subVectors(s,e),Cd.crossVectors(Rd,bc);let d=this.direction.dot(Cd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(bc.crossVectors(Za,bc));if(m<0)return null;const p=h*this.direction.dot(Rd.cross(Za));if(p<0||m+p>d)return null;const g=-h*Za.dot(Cd);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,s,l,c,d,h,m,p,g,x,y,S,T,C,b){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,g,x,y,S,T,C,b)}set(e,i,s,l,c,d,h,m,p,g,x,y,S,T,C,b){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=y,v[3]=S,v[7]=T,v[11]=C,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/vr.setFromMatrixColumn(e,0).length(),c=1/vr.setFromMatrixColumn(e,1).length(),d=1/vr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=d*g,S=d*x,T=h*g,C=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+T*p,i[5]=y-C*p,i[9]=-h*m,i[2]=C-y*p,i[6]=T+S*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*g,S=m*x,T=p*g,C=p*x;i[0]=y+C*h,i[4]=T*h-S,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=S*h-T,i[6]=C+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*g,S=m*x,T=p*g,C=p*x;i[0]=y-C*h,i[4]=-d*x,i[8]=T+S*h,i[1]=S+T*h,i[5]=d*g,i[9]=C-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*g,S=d*x,T=h*g,C=h*x;i[0]=m*g,i[4]=T*p-S,i[8]=y*p+C,i[1]=m*x,i[5]=C*p+y,i[9]=S*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,S=d*p,T=h*m,C=h*p;i[0]=m*g,i[4]=C-y*x,i[8]=T*x+S,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=S*x+T,i[10]=y-C*x}else if(e.order==="XZY"){const y=d*m,S=d*p,T=h*m,C=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+C,i[5]=d*g,i[9]=S*x-T,i[2]=T*x-S,i[6]=h*g,i[10]=C*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fb,e,db)}lookAt(e,i,s){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ka.crossVectors(s,ai),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ka.crossVectors(s,ai)),Ka.normalize(),Mc.crossVectors(ai,Ka),l[0]=Ka.x,l[4]=Mc.x,l[8]=ai.x,l[1]=Ka.y,l[5]=Mc.y,l[9]=ai.y,l[2]=Ka.z,l[6]=Mc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],x=s[5],y=s[9],S=s[13],T=s[2],C=s[6],b=s[10],v=s[14],P=s[3],D=s[7],B=s[11],F=s[15],U=l[0],O=l[4],K=l[8],w=l[12],A=l[1],z=l[5],X=l[9],J=l[13],dt=l[2],rt=l[6],I=l[10],q=l[14],W=l[3],mt=l[7],_t=l[11],L=l[15];return c[0]=d*U+h*A+m*dt+p*W,c[4]=d*O+h*z+m*rt+p*mt,c[8]=d*K+h*X+m*I+p*_t,c[12]=d*w+h*J+m*q+p*L,c[1]=g*U+x*A+y*dt+S*W,c[5]=g*O+x*z+y*rt+S*mt,c[9]=g*K+x*X+y*I+S*_t,c[13]=g*w+x*J+y*q+S*L,c[2]=T*U+C*A+b*dt+v*W,c[6]=T*O+C*z+b*rt+v*mt,c[10]=T*K+C*X+b*I+v*_t,c[14]=T*w+C*J+b*q+v*L,c[3]=P*U+D*A+B*dt+F*W,c[7]=P*O+D*z+B*rt+F*mt,c[11]=P*K+D*X+B*I+F*_t,c[15]=P*w+D*J+B*q+F*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],y=e[10],S=e[14],T=e[3],C=e[7],b=e[11],v=e[15];return T*(+c*m*x-l*p*x-c*h*y+s*p*y+l*h*S-s*m*S)+C*(+i*m*S-i*p*y+c*d*y-l*d*S+l*p*g-c*m*g)+b*(+i*p*x-i*h*S-c*d*x+s*d*S+c*h*g-s*p*g)+v*(-l*h*g-i*m*x+i*h*y+l*d*x-s*d*y+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],y=e[10],S=e[11],T=e[12],C=e[13],b=e[14],v=e[15],P=x*b*p-C*y*p+C*m*S-h*b*S-x*m*v+h*y*v,D=T*y*p-g*b*p-T*m*S+d*b*S+g*m*v-d*y*v,B=g*C*p-T*x*p+T*h*S-d*C*S-g*h*v+d*x*v,F=T*x*m-g*C*m-T*h*y+d*C*y+g*h*b-d*x*b,U=i*P+s*D+l*B+c*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return e[0]=P*O,e[1]=(C*y*c-x*b*c-C*l*S+s*b*S+x*l*v-s*y*v)*O,e[2]=(h*b*c-C*m*c+C*l*p-s*b*p-h*l*v+s*m*v)*O,e[3]=(x*m*c-h*y*c-x*l*p+s*y*p+h*l*S-s*m*S)*O,e[4]=D*O,e[5]=(g*b*c-T*y*c+T*l*S-i*b*S-g*l*v+i*y*v)*O,e[6]=(T*m*c-d*b*c-T*l*p+i*b*p+d*l*v-i*m*v)*O,e[7]=(d*y*c-g*m*c+g*l*p-i*y*p-d*l*S+i*m*S)*O,e[8]=B*O,e[9]=(T*x*c-g*C*c-T*s*S+i*C*S+g*s*v-i*x*v)*O,e[10]=(d*C*c-T*h*c+T*s*p-i*C*p-d*s*v+i*h*v)*O,e[11]=(g*h*c-d*x*c-g*s*p+i*x*p+d*s*S-i*h*S)*O,e[12]=F*O,e[13]=(g*C*l-T*x*l+T*s*y-i*C*y-g*s*b+i*x*b)*O,e[14]=(T*h*l-d*C*l-T*s*m+i*C*m+d*s*b-i*h*b)*O,e[15]=(d*x*l-g*h*l+g*s*m-i*x*m-d*s*y+i*h*y)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,g=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,x=h+h,y=c*p,S=c*g,T=c*x,C=d*g,b=d*x,v=h*x,P=m*p,D=m*g,B=m*x,F=s.x,U=s.y,O=s.z;return l[0]=(1-(C+v))*F,l[1]=(S+B)*F,l[2]=(T-D)*F,l[3]=0,l[4]=(S-B)*U,l[5]=(1-(y+v))*U,l[6]=(b+P)*U,l[7]=0,l[8]=(T+D)*O,l[9]=(b-P)*O,l[10]=(1-(y+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=vr.set(l[0],l[1],l[2]).length();const d=vr.set(l[4],l[5],l[6]).length(),h=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ei.copy(this);const p=1/c,g=1/d,x=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=x,Ei.elements[9]*=x,Ei.elements[10]*=x,i.setFromRotationMatrix(Ei),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=zi,m=!1){const p=this.elements,g=2*c/(i-e),x=2*c/(s-l),y=(i+e)/(i-e),S=(s+l)/(s-l);let T,C;if(m)T=c/(d-c),C=d*c/(d-c);else if(h===zi)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Kc)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=zi,m=!1){const p=this.elements,g=2/(i-e),x=2/(s-l),y=-(i+e)/(i-e),S=-(s+l)/(s-l);let T,C;if(m)T=1/(d-c),C=d/(d-c);else if(h===zi)T=-2/(d-c),C=-(d+c)/(d-c);else if(h===Kc)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const vr=new lt,Ei=new sn,fb=new lt(0,0,0),db=new lt(1,1,1),Ka=new lt,Mc=new lt,ai=new lt,ag=new sn,sg=new el;class va{constructor(e=0,i=0,s=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ag,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return sg.setFromEuler(this),this.setFromQuaternion(sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class g_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hb=0;const rg=new lt,yr=new el,la=new sn,Ec=new lt,Ho=new lt,pb=new lt,mb=new el,og=new lt(1,0,0),lg=new lt(0,1,0),cg=new lt(0,0,1),ug={type:"added"},xb={type:"removed"},Sr={type:"childadded",child:null},wd={type:"childremoved",child:null};class Ln extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new lt,i=new va,s=new el,l=new lt(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new de}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(og,e)}rotateY(e){return this.rotateOnAxis(lg,e)}rotateZ(e){return this.rotateOnAxis(cg,e)}translateOnAxis(e,i){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(og,e)}translateY(e){return this.translateOnAxis(lg,e)}translateZ(e){return this.translateOnAxis(cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ec.copy(e):Ec.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Ho,Ec,this.up):la.lookAt(Ec,Ho,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(la),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(nn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ug),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xb),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ug),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),x=d(e.shapes),y=d(e.skeletons),S=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new lt(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new lt,ca=new lt,Dd=new lt,ua=new lt,br=new lt,Mr=new lt,fg=new lt,Ud=new lt,Ld=new lt,Nd=new lt,Od=new an,Pd=new an,zd=new an;class _i{constructor(e=new lt,i=new lt,s=new lt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ti.subVectors(l,i),ca.subVectors(s,i),Dd.subVectors(e,i);const d=Ti.dot(Ti),h=Ti.dot(ca),m=Ti.dot(Dd),p=ca.dot(ca),g=ca.dot(Dd),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(p*m-h*g)*y,T=(d*g-h*m)*y;return c.set(1-S-T,T,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Od.setScalar(0),Pd.setScalar(0),zd.setScalar(0),Od.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,s),zd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Od,c.x),d.addScaledVector(Pd,c.y),d.addScaledVector(zd,c.z),d}static isFrontFacing(e,i,s,l){return Ti.subVectors(s,i),ca.subVectors(e,i),Ti.cross(ca).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ti.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return _i.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;br.subVectors(l,s),Mr.subVectors(c,s),Ud.subVectors(e,s);const m=br.dot(Ud),p=Mr.dot(Ud);if(m<=0&&p<=0)return i.copy(s);Ld.subVectors(e,l);const g=br.dot(Ld),x=Mr.dot(Ld);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(br,d);Nd.subVectors(e,c);const S=br.dot(Nd),T=Mr.dot(Nd);if(T>=0&&S<=T)return i.copy(c);const C=S*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(Mr,h);const b=g*T-S*x;if(b<=0&&x-g>=0&&S-T>=0)return fg.subVectors(c,l),h=(x-g)/(x-g+(S-T)),i.copy(l).addScaledVector(fg,h);const v=1/(b+C+y);return d=C*v,h=y*v,i.copy(s).addScaledVector(br,d).addScaledVector(Mr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Id(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Pe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ne.workingColorSpace){if(e=nb(e,1),i=Te(i,0,1),s=Te(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Id(d,c,e+1/3),this.g=Id(d,c,e),this.b=Id(d,c,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Gn){const s=__[e.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Ne.workingToColorSpace(zn.copy(this),e),Math.round(Te(zn.r*255,0,255))*65536+Math.round(Te(zn.g*255,0,255))*256+Math.round(Te(zn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Gn){Ne.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,l=zn.b;return e!==Gn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Tc);const s=vd(Qa.h,Tc.h,i),l=vd(Qa.s,Tc.s,i),c=vd(Qa.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Pe;Pe.NAMES=__;let gb=0;class il extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Nr,this.side=_a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Qd,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==_a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $h extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new lt,Ac=new ve;let _b=0;class Ci{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_b++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Ih,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Pi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=We(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Pi(i,this.array)),i}setX(e,i){return this.normalized&&(i=We(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Pi(i,this.array)),i}setY(e,i){return this.normalized&&(i=We(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Pi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=We(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Pi(i,this.array)),i}setW(e,i){return this.normalized&&(i=We(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class v_ extends Ci{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class y_ extends Ci{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ii extends Ci{constructor(e,i,s){super(new Float32Array(e),i,s)}}let vb=0;const xi=new sn,Bd=new Ln,Er=new lt,si=new nl,Go=new nl,En=new lt;class Fi extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?y_:v_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,s){return xi.makeTranslation(e,i,s),this.applyMatrix4(xi),this}scale(e,i,s){return xi.makeScale(e,i,s),this.applyMatrix4(xi),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ii(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(si.min,Go.min),si.expandByPoint(En),En.addVectors(si.max,Go.max),si.expandByPoint(En)):(si.expandByPoint(Go.min),si.expandByPoint(Go.max))}si.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)En.fromBufferAttribute(h,p),m&&(Er.fromBufferAttribute(e,p),En.add(Er)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<s.count;K++)h[K]=new lt,m[K]=new lt;const p=new lt,g=new lt,x=new lt,y=new ve,S=new ve,T=new ve,C=new lt,b=new lt;function v(K,w,A){p.fromBufferAttribute(s,K),g.fromBufferAttribute(s,w),x.fromBufferAttribute(s,A),y.fromBufferAttribute(c,K),S.fromBufferAttribute(c,w),T.fromBufferAttribute(c,A),g.sub(p),x.sub(p),S.sub(y),T.sub(y);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(z),b.copy(x).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(z),h[K].add(C),h[w].add(C),h[A].add(C),m[K].add(b),m[w].add(b),m[A].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,w=P.length;K<w;++K){const A=P[K],z=A.start,X=A.count;for(let J=z,dt=z+X;J<dt;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new lt,B=new lt,F=new lt,U=new lt;function O(K){F.fromBufferAttribute(l,K),U.copy(F);const w=h[K];D.copy(w),D.sub(F.multiplyScalar(F.dot(w))).normalize(),B.crossVectors(U,w);const z=B.dot(m[K])<0?-1:1;d.setXYZW(K,D.x,D.y,D.z,z)}for(let K=0,w=P.length;K<w;++K){const A=P[K],z=A.start,X=A.count;for(let J=z,dt=z+X;J<dt;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new lt,c=new lt,d=new lt,h=new lt,m=new lt,p=new lt,g=new lt,x=new lt;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),C=e.getX(y+1),b=e.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),h.add(g),m.add(g),p.add(g),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,y=new p.constructor(m.length*g);let S=0,T=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?S=m[C]*h.data.stride+h.offset:S=m[C]*g;for(let v=0;v<g;v++)y[T++]=p[S++]}return new Ci(y,g,x)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const y=p[g],S=e(y,s);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const S=p[x];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let y=0,S=x.length;y<S;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dg=new sn,As=new ub,Rc=new Jh,hg=new lt,Cc=new lt,wc=new lt,Dc=new lt,Fd=new lt,Uc=new lt,pg=new lt,Lc=new lt;class ya extends Ln{constructor(e=new Fi,i=new $h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Uc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(Fd.fromBufferAttribute(x,e),d?Uc.addScaledVector(Fd,g):Uc.addScaledVector(Fd.sub(i),g))}i.add(Uc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),As.copy(e.ray).recast(e.near),!(Rc.containsPoint(As.origin)===!1&&(As.intersectSphere(Rc,hg)===null||As.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(dg.copy(c).invert(),As.copy(e.ray).applyMatrix4(dg),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,As)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const b=y[T],v=d[b.materialIndex],P=Math.max(b.start,S.start),D=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let B=P,F=D;B<F;B+=3){const U=h.getX(B),O=h.getX(B+1),K=h.getX(B+2);l=Nc(this,v,e,s,p,g,x,U,O,K),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let b=T,v=C;b<v;b+=3){const P=h.getX(b),D=h.getX(b+1),B=h.getX(b+2);l=Nc(this,d,e,s,p,g,x,P,D,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const b=y[T],v=d[b.materialIndex],P=Math.max(b.start,S.start),D=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let B=P,F=D;B<F;B+=3){const U=B,O=B+1,K=B+2;l=Nc(this,v,e,s,p,g,x,U,O,K),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let b=T,v=C;b<v;b+=3){const P=b,D=b+1,B=b+2;l=Nc(this,d,e,s,p,g,x,P,D,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function yb(o,e,i,s,l,c,d,h){let m;if(e.side===jn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===_a,h),m===null)return null;Lc.copy(h),Lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Lc);return p<i.near||p>i.far?null:{distance:p,point:Lc.clone(),object:o}}function Nc(o,e,i,s,l,c,d,h,m,p){o.getVertexPosition(h,Cc),o.getVertexPosition(m,wc),o.getVertexPosition(p,Dc);const g=yb(o,e,i,s,Cc,wc,Dc,pg);if(g){const x=new lt;_i.getBarycoord(pg,Cc,wc,Dc,x),l&&(g.uv=_i.getInterpolatedAttribute(l,h,m,p,x,new ve)),c&&(g.uv1=_i.getInterpolatedAttribute(c,h,m,p,x,new ve)),d&&(g.normal=_i.getInterpolatedAttribute(d,h,m,p,x,new lt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new lt,materialIndex:0};_i.getNormal(Cc,wc,Dc,y.normal),g.face=y,g.barycoord=x}return g}class al extends Fi{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],x=[];let y=0,S=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ii(p,3)),this.setAttribute("normal",new Ii(g,3)),this.setAttribute("uv",new Ii(x,2));function T(C,b,v,P,D,B,F,U,O,K,w){const A=B/O,z=F/K,X=B/2,J=F/2,dt=U/2,rt=O+1,I=K+1;let q=0,W=0;const mt=new lt;for(let _t=0;_t<I;_t++){const L=_t*z-J;for(let Q=0;Q<rt;Q++){const yt=Q*A-X;mt[C]=yt*P,mt[b]=L*D,mt[v]=dt,p.push(mt.x,mt.y,mt.z),mt[C]=0,mt[b]=0,mt[v]=U>0?1:-1,g.push(mt.x,mt.y,mt.z),x.push(Q/O),x.push(1-_t/K),q+=1}}for(let _t=0;_t<K;_t++)for(let L=0;L<O;L++){const Q=y+L+rt*_t,yt=y+L+rt*(_t+1),Tt=y+(L+1)+rt*(_t+1),Ot=y+(L+1)+rt*_t;m.push(Q,yt,Ot),m.push(yt,Tt,Ot),W+=6}h.addGroup(S,W,w),S+=W,y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const s=Fr(o[i]);for(const l in s)e[l]=s[l]}return e}function Sb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function S_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const bb={clone:Fr,merge:Hn};var Mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mb,this.fragmentShader=Eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class b_ extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new lt,mg=new ve,xg=new ve;class gi extends b_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_d*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(_d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,mg,xg),i.subVectors(xg,mg)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(_d*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,Ar=1;class Tb extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Tr,Ar,e,i);l.layers=this.layers,this.add(l);const c=new gi(Tr,Ar,e,i);c.layers=this.layers,this.add(c);const d=new gi(Tr,Ar,e,i);d.layers=this.layers,this.add(d);const h=new gi(Tr,Ar,e,i);h.layers=this.layers,this.add(h);const m=new gi(Tr,Ar,e,i);m.layers=this.layers,this.add(m);const p=new gi(Tr,Ar,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(x,y,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class M_ extends Un{constructor(e=[],i=zr,s,l,c,d,h,m,p,g){super(e,i,s,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ab extends Ps{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new M_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:Fr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:xa});c.uniforms.tEquirect.value=i;const d=new ya(l,c),h=i.minFilter;return i.minFilter===es&&(i.minFilter=ri),new Tb(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class Oc extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const b=i.getJointPose(C,s),v=this._getHandJoint(p,C);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Cb extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wb{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new lt;class Jc{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Pi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=We(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=We(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=We(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=We(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=We(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Pi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Pi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Pi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Pi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Qc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ci(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fh extends il{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rr;const Vo=new lt,Cr=new lt,wr=new lt,Dr=new ve,ko=new ve,E_=new sn,Pc=new lt,Xo=new lt,zc=new lt,gg=new ve,Gd=new ve,_g=new ve;class vg extends Ln{constructor(e=new Fh){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Fi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new wb(i,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Jc(s,3,0,!1)),Rr.setAttribute("uv",new Jc(s,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,i){e.camera===null&&nn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),E_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-wr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Ic(Pc.set(-.5,-.5,0),wr,d,Cr,l,c),Ic(Xo.set(.5,-.5,0),wr,d,Cr,l,c),Ic(zc.set(.5,.5,0),wr,d,Cr,l,c),gg.set(0,0),Gd.set(1,0),_g.set(1,1);let h=e.ray.intersectTriangle(Pc,Xo,zc,!1,Vo);if(h===null&&(Ic(Xo.set(-.5,.5,0),wr,d,Cr,l,c),Gd.set(0,1),h=e.ray.intersectTriangle(Pc,zc,Xo,!1,Vo),h===null))return;const m=e.ray.origin.distanceTo(Vo);m<e.near||m>e.far||i.push({distance:m,point:Vo.clone(),uv:_i.getInterpolation(Vo,Pc,Xo,zc,gg,Gd,_g,new ve),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ic(o,e,i,s,l,c){Dr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(ko.x=c*Dr.x-l*Dr.y,ko.y=l*Dr.x+c*Dr.y):ko.copy(Dr),o.copy(e),o.x+=ko.x,o.y+=ko.y,o.applyMatrix4(E_)}class Db extends Un{constructor(e=null,i=1,s=1,l,c,d,h,m,p=oi,g=oi,x,y){super(null,d,h,m,p,g,l,c,x,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new lt,Ub=new lt,Lb=new de;class Ds{constructor(e=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Vd.subVectors(s,i).cross(Ub.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Vd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Lb.getNormalMatrix(e),l=this.coplanarPoint(Vd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Jh,Nb=new ve(.5,.5),Bc=new lt;class tp{constructor(e=new Ds,i=new Ds,s=new Ds,l=new Ds,c=new Ds,d=new Ds){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=zi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],y=c[6],S=c[7],T=c[8],C=c[9],b=c[10],v=c[11],P=c[12],D=c[13],B=c[14],F=c[15];if(l[0].setComponents(p-d,S-g,v-T,F-P).normalize(),l[1].setComponents(p+d,S+g,v+T,F+P).normalize(),l[2].setComponents(p+h,S+x,v+C,F+D).normalize(),l[3].setComponents(p-h,S-x,v-C,F-D).normalize(),s)l[4].setComponents(m,y,b,B).normalize(),l[5].setComponents(p-m,S-y,v-b,F-B).normalize();else if(l[4].setComponents(p-m,S-y,v-b,F-B).normalize(),i===zi)l[5].setComponents(p+m,S+y,v+b,F+B).normalize();else if(i===Kc)l[5].setComponents(m,y,b,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const i=Nb.distanceTo(e.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?e.max.x:e.min.x,Bc.y=l.normal.y>0?e.max.y:e.min.y,Bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yg extends Un{constructor(e,i,s,l,c,d,h,m,p){super(e,i,s,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class T_ extends Un{constructor(e,i,s=Os,l,c,d,h=oi,m=oi,p,g=Ko,x=1){if(g!==Ko&&g!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:x};super(y,l,c,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class A_ extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tu extends Fi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,x=e/h,y=i/m,S=[],T=[],C=[],b=[];for(let v=0;v<g;v++){const P=v*y-d;for(let D=0;D<p;D++){const B=D*x-c;T.push(B,-P,0),C.push(0,0,1),b.push(D/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<h;P++){const D=P+p*v,B=P+p*(v+1),F=P+1+p*(v+1),U=P+1+p*v;S.push(D,B,U),S.push(B,F,U)}this.setIndex(S),this.setAttribute("position",new Ii(T,3)),this.setAttribute("normal",new Ii(C,3)),this.setAttribute("uv",new Ii(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ep extends Fi{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const g=[],x=new lt,y=new lt,S=[],T=[],C=[],b=[];for(let v=0;v<=s;v++){const P=[],D=v/s;let B=0;v===0&&d===0?B=.5/i:v===s&&m===Math.PI&&(B=-.5/i);for(let F=0;F<=i;F++){const U=F/i;x.x=-e*Math.cos(l+U*c)*Math.sin(d+D*h),x.y=e*Math.cos(d+D*h),x.z=e*Math.sin(l+U*c)*Math.sin(d+D*h),T.push(x.x,x.y,x.z),y.copy(x).normalize(),C.push(y.x,y.y,y.z),b.push(U+B,1-D),P.push(p++)}g.push(P)}for(let v=0;v<s;v++)for(let P=0;P<i;P++){const D=g[v][P+1],B=g[v][P],F=g[v+1][P],U=g[v+1][P+1];(v!==0||d>0)&&S.push(D,B,U),(v!==s-1||m<Math.PI)&&S.push(B,F,U)}this.setIndex(S),this.setAttribute("position",new Ii(T,3)),this.setAttribute("normal",new Ii(C,3)),this.setAttribute("uv",new Ii(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ob extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pb extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kd={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class zb{constructor(e,i,s){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,d,h),c=!0},this.itemEnd=function(g){d++,l.onProgress!==void 0&&l.onProgress(g,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,y=p.length;x<y;x+=2){const S=p[x],T=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ib=new zb;class np{constructor(e){this.manager=e!==void 0?e:Ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}np.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ur=new WeakMap;class Bb extends np{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=kd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(d),c.manager.itemEnd(e)},0);else{let x=Ur.get(d);x===void 0&&(x=[],Ur.set(d,x)),x.push({onLoad:i,onError:l})}return d}const h=Jo("img");function m(){g(),i&&i(this);const x=Ur.get(this)||[];for(let y=0;y<x.length;y++){const S=x[y];S.onLoad&&S.onLoad(this)}Ur.delete(this),c.manager.itemEnd(e)}function p(x){g(),l&&l(x),kd.remove(`image:${e}`);const y=Ur.get(this)||[];for(let S=0;S<y.length;S++){const T=y[S];T.onError&&T.onError(x)}Ur.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),kd.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class Fb extends np{constructor(e){super(e)}load(e,i,s,l){const c=new Un,d=new Bb(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class R_ extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Xd=new sn,Sg=new lt,bg=new lt;class Hb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Sg.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sg),bg.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(bg),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class C_ extends b_{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Gb extends Hb{constructor(){super(new C_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vb extends R_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new Gb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kb extends R_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xb extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Mg(o,e,i,s){const l=Wb(s);switch(i){case f_:return o*e;case h_:return o*e/l.components*l.byteLength;case Yh:return o*e/l.components*l.byteLength;case jh:return o*e*2/l.components*l.byteLength;case Zh:return o*e*2/l.components*l.byteLength;case d_:return o*e*3/l.components*l.byteLength;case Ri:return o*e*4/l.components*l.byteLength;case Kh:return o*e*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case uh:case dh:return Math.max(o,16)*Math.max(e,8)/4;case ch:case fh:return Math.max(o,8)*Math.max(e,8)/2;case hh:case ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dh:case Uh:case Lh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Nh:case Oh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ph:case zh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Wb(o){switch(o){case Bi:case o_:return{byteLength:1,components:1};case jo:case l_:case Hr:return{byteLength:2,components:1};case Wh:case qh:return{byteLength:2,components:4};case Os:case Xh:case ma:return{byteLength:4,components:1};case c_:case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function w_(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function qb(o){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,g);else{x.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<x.length;S++){const T=x[y],C=x[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++y,x[y]=C)}x.length=y+1;for(let S=0,T=x.length;S<T;S++){const C=x[S];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$b=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,E3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:Yb,alphahash_pars_fragment:jb,alphamap_fragment:Zb,alphamap_pars_fragment:Kb,alphatest_fragment:Qb,alphatest_pars_fragment:Jb,aomap_fragment:$b,aomap_pars_fragment:tM,batching_pars_vertex:eM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:aM,bsdfs:sM,iridescence_fragment:rM,bumpmap_pars_fragment:oM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:cM,clipping_planes_pars_vertex:uM,clipping_planes_vertex:fM,color_fragment:dM,color_pars_fragment:hM,color_pars_vertex:pM,color_vertex:mM,common:xM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:_M,displacementmap_pars_vertex:vM,displacementmap_vertex:yM,emissivemap_fragment:SM,emissivemap_pars_fragment:bM,colorspace_fragment:MM,colorspace_pars_fragment:EM,envmap_fragment:TM,envmap_common_pars_fragment:AM,envmap_pars_fragment:RM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:FM,envmap_vertex:wM,fog_vertex:DM,fog_pars_vertex:UM,fog_fragment:LM,fog_pars_fragment:NM,gradientmap_pars_fragment:OM,lightmap_pars_fragment:PM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:IM,lights_pars_begin:BM,lights_toon_fragment:HM,lights_toon_pars_fragment:GM,lights_phong_fragment:VM,lights_phong_pars_fragment:kM,lights_physical_fragment:XM,lights_physical_pars_fragment:WM,lights_fragment_begin:qM,lights_fragment_maps:YM,lights_fragment_end:jM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:QM,logdepthbuf_vertex:JM,map_fragment:$M,map_pars_fragment:t1,map_particle_fragment:e1,map_particle_pars_fragment:n1,metalnessmap_fragment:i1,metalnessmap_pars_fragment:a1,morphinstance_vertex:s1,morphcolor_vertex:r1,morphnormal_vertex:o1,morphtarget_pars_vertex:l1,morphtarget_vertex:c1,normal_fragment_begin:u1,normal_fragment_maps:f1,normal_pars_fragment:d1,normal_pars_vertex:h1,normal_vertex:p1,normalmap_pars_fragment:m1,clearcoat_normal_fragment_begin:x1,clearcoat_normal_fragment_maps:g1,clearcoat_pars_fragment:_1,iridescence_pars_fragment:v1,opaque_fragment:y1,packing:S1,premultiplied_alpha_fragment:b1,project_vertex:M1,dithering_fragment:E1,dithering_pars_fragment:T1,roughnessmap_fragment:A1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:w1,shadowmap_vertex:D1,shadowmask_pars_fragment:U1,skinbase_vertex:L1,skinning_pars_vertex:N1,skinning_vertex:O1,skinnormal_vertex:P1,specularmap_fragment:z1,specularmap_pars_fragment:I1,tonemapping_fragment:B1,tonemapping_pars_fragment:F1,transmission_fragment:H1,transmission_pars_fragment:G1,uv_pars_fragment:V1,uv_pars_vertex:k1,uv_vertex:X1,worldpos_vertex:W1,background_vert:q1,background_frag:Y1,backgroundCube_vert:j1,backgroundCube_frag:Z1,cube_vert:K1,cube_frag:Q1,depth_vert:J1,depth_frag:$1,distanceRGBA_vert:t3,distanceRGBA_frag:e3,equirect_vert:n3,equirect_frag:i3,linedashed_vert:a3,linedashed_frag:s3,meshbasic_vert:r3,meshbasic_frag:o3,meshlambert_vert:l3,meshlambert_frag:c3,meshmatcap_vert:u3,meshmatcap_frag:f3,meshnormal_vert:d3,meshnormal_frag:h3,meshphong_vert:p3,meshphong_frag:m3,meshphysical_vert:x3,meshphysical_frag:g3,meshtoon_vert:_3,meshtoon_frag:v3,points_vert:y3,points_frag:S3,shadow_vert:b3,shadow_frag:M3,sprite_vert:E3,sprite_frag:T3},Nt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Oi={basic:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Hn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Hn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Hn([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Hn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Hn([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Hn([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Hn([Nt.common,Nt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Hn([Nt.lights,Nt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Oi.physical={uniforms:Hn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Fc={r:0,b:0,g:0},Cs=new va,A3=new sn;function R3(o,e,i,s,l,c,d){const h=new Pe(0);let m=c===!0?0:1,p,g,x=null,y=0,S=null;function T(D){let B=D.isScene===!0?D.background:null;return B&&B.isTexture&&(B=(D.backgroundBlurriness>0?i:e).get(B)),B}function C(D){let B=!1;const F=T(D);F===null?v(h,m):F&&F.isColor&&(v(F,1),B=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||B)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(D,B){const F=T(B);F&&(F.isCubeTexture||F.mapping===$c)?(g===void 0&&(g=new ya(new al(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:Fr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,O,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Cs.copy(B.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(A3.makeRotationFromEuler(Cs)),g.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Xe,(x!==F||y!==F.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,x=F,y=F.version,S=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ya(new tu(2,2),new Sa({name:"BackgroundMaterial",uniforms:Fr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:_a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Xe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||y!==F.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,x=F,y=F.version,S=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,B){D.getRGB(Fc,S_(o)),s.buffers.color.setClear(Fc.r,Fc.g,Fc.b,B,d)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,B=1){h.set(D),m=B,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:C,addToRenderList:b,dispose:P}}function C3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,d=!1;function h(A,z,X,J,dt){let rt=!1;const I=x(J,X,z);c!==I&&(c=I,p(c.object)),rt=S(A,J,X,dt),rt&&T(A,J,X,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(rt||d)&&(d=!1,B(A,z,X,J),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function x(A,z,X){const J=X.wireframe===!0;let dt=s[A.id];dt===void 0&&(dt={},s[A.id]=dt);let rt=dt[z.id];rt===void 0&&(rt={},dt[z.id]=rt);let I=rt[J];return I===void 0&&(I=y(m()),rt[J]=I),I}function y(A){const z=[],X=[],J=[];for(let dt=0;dt<i;dt++)z[dt]=0,X[dt]=0,J[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:J,object:A,attributes:{},index:null}}function S(A,z,X,J){const dt=c.attributes,rt=z.attributes;let I=0;const q=X.getAttributes();for(const W in q)if(q[W].location>=0){const _t=dt[W];let L=rt[W];if(L===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(L=A.instanceColor)),_t===void 0||_t.attribute!==L||L&&_t.data!==L.data)return!0;I++}return c.attributesNum!==I||c.index!==J}function T(A,z,X,J){const dt={},rt=z.attributes;let I=0;const q=X.getAttributes();for(const W in q)if(q[W].location>=0){let _t=rt[W];_t===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(_t=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(_t=A.instanceColor));const L={};L.attribute=_t,_t&&_t.data&&(L.data=_t.data),dt[W]=L,I++}c.attributes=dt,c.attributesNum=I,c.index=J}function C(){const A=c.newAttributes;for(let z=0,X=A.length;z<X;z++)A[z]=0}function b(A){v(A,0)}function v(A,z){const X=c.newAttributes,J=c.enabledAttributes,dt=c.attributeDivisors;X[A]=1,J[A]===0&&(o.enableVertexAttribArray(A),J[A]=1),dt[A]!==z&&(o.vertexAttribDivisor(A,z),dt[A]=z)}function P(){const A=c.newAttributes,z=c.enabledAttributes;for(let X=0,J=z.length;X<J;X++)z[X]!==A[X]&&(o.disableVertexAttribArray(X),z[X]=0)}function D(A,z,X,J,dt,rt,I){I===!0?o.vertexAttribIPointer(A,z,X,dt,rt):o.vertexAttribPointer(A,z,X,J,dt,rt)}function B(A,z,X,J){C();const dt=J.attributes,rt=X.getAttributes(),I=z.defaultAttributeValues;for(const q in rt){const W=rt[q];if(W.location>=0){let mt=dt[q];if(mt===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(mt=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(mt=A.instanceColor)),mt!==void 0){const _t=mt.normalized,L=mt.itemSize,Q=e.get(mt);if(Q===void 0)continue;const yt=Q.buffer,Tt=Q.type,Ot=Q.bytesPerElement,at=Tt===o.INT||Tt===o.UNSIGNED_INT||mt.gpuType===Xh;if(mt.isInterleavedBufferAttribute){const ft=mt.data,wt=ft.stride,Ht=mt.offset;if(ft.isInstancedInterleavedBuffer){for(let Wt=0;Wt<W.locationSize;Wt++)v(W.location+Wt,ft.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Wt=0;Wt<W.locationSize;Wt++)b(W.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Wt=0;Wt<W.locationSize;Wt++)D(W.location+Wt,L/W.locationSize,Tt,_t,wt*Ot,(Ht+L/W.locationSize*Wt)*Ot,at)}else{if(mt.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)v(W.location+ft,mt.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ft=0;ft<W.locationSize;ft++)b(W.location+ft);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ft=0;ft<W.locationSize;ft++)D(W.location+ft,L/W.locationSize,Tt,_t,L*Ot,L/W.locationSize*ft*Ot,at)}}else if(I!==void 0){const _t=I[q];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(W.location,_t);break;case 3:o.vertexAttrib3fv(W.location,_t);break;case 4:o.vertexAttrib4fv(W.location,_t);break;default:o.vertexAttrib1fv(W.location,_t)}}}}P()}function F(){K();for(const A in s){const z=s[A];for(const X in z){const J=z[X];for(const dt in J)g(J[dt].object),delete J[dt];delete z[X]}delete s[A]}}function U(A){if(s[A.id]===void 0)return;const z=s[A.id];for(const X in z){const J=z[X];for(const dt in J)g(J[dt].object),delete J[dt];delete z[X]}delete s[A.id]}function O(A){for(const z in s){const X=s[z];if(X[A.id]===void 0)continue;const J=X[A.id];for(const dt in J)g(J[dt].object),delete J[dt];delete X[A.id]}}function K(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:b,disableUnusedAttributes:P}}function w3(o,e,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,x){x!==0&&(o.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let S=0;for(let T=0;T<x;T++)S+=g[T];i.update(S,s,1)}function m(p,g,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)d(p[T],g[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,x);let T=0;for(let C=0;C<x;C++)T+=g[C]*y[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function D3(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Ri&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const K=O===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Bi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ma&&!K)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(le("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:B,vertexTextures:F,maxSamples:U}}function U3(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ds,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||s!==0||l;return l=y,s=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,S){const T=x.clippingPlanes,C=x.clipIntersection,b=x.clipShadows,v=o.get(x);if(!l||T===null||T.length===0||c&&!b)c?g(null):p();else{const P=c?0:s,D=P*4;let B=v.clippingState||null;m.value=B,B=g(T,y,D,S);for(let F=0;F!==D;++F)B[F]=i[F];v.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,y,S,T){const C=x!==null?x.length:0;let b=null;if(C!==0){if(b=m.value,T!==!0||b===null){const v=S+C*4,P=y.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<v)&&(b=new Float32Array(v));for(let D=0,B=S;D!==C;++D,B+=4)d.copy(x[D]).applyMatrix4(P,h),d.normal.toArray(b,B),b[B+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,b}}function L3(o){let e=new WeakMap;function i(d,h){return h===sh?d.mapping=zr:h===rh&&(d.mapping=Ir),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===sh||h===rh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ab(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ns=4,Eg=[.125,.215,.35,.446,.526,.582],Ls=20,N3=512,Wo=new C_,Tg=new Pe;let Wd=null,qd=0,Yd=0,jd=!1;const O3=new lt;class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=O3}=c;Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,qd,Yd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Hr,format:Ri,colorSpace:Br,depthBuffer:!1},l=Rg(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P3(c)),this._blurMaterial=I3(c,e,i)}return l}_compileMaterial(e){const i=new ya(new Fi,e);this._renderer.compile(i,Wo)}_sceneToCubeUV(e,i,s,l,c){const m=new gi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(Tg),x.toneMapping=is,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ya(new al,new $h({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let v=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,v=!0):(b.color.copy(Tg),v=!0);for(let D=0;D<6;D++){const B=D%3;B===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):B===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const F=this._cubeSize;Lr(l,B*F,D>2?F:0,F,F),x.setRenderTarget(l),v&&x.render(C,m),x.render(e,m)}x.toneMapping=S,x.autoClear=y,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===zr||e.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Lr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Wo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const P=3*Math.max(this._cubeSize,16),D=4*this._cubeSize;this._ggxMaterial=z3(this._lodMax,P,D)}const d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),y=.05+p*.95,S=x*y,{_lodMax:T}=this,C=this._sizeLods[s],b=3*C*(s>T-ns?s-T+ns:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=T-i,Lr(c,b,v,3*C,2*C),l.setRenderTarget(c),l.render(h,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Lr(e,b,v,3*C,2*C),l.setRenderTarget(e),l.render(h,Wo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const y=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ls-1),C=c/T,b=isFinite(c)?1+Math.floor(g*C):Ls;b>Ls&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ls}`);const v=[];let P=0;for(let O=0;O<Ls;++O){const K=O/C,w=Math.exp(-K*K/2);v.push(w),O===0?P+=w:O<b&&(P+=2*w)}for(let O=0;O<v.length;O++)v[O]=v[O]/P;y.envMap.value=e.texture,y.samples.value=b,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-s;const B=this._sizeLods[l],F=3*B*(l>D-ns?l-D+ns:0),U=4*(this._cubeSize-B);Lr(i,F,U,3*B,2*B),m.setRenderTarget(i),m.render(x,Wo)}}function P3(o){const e=[],i=[],s=[];let l=o;const c=o-ns+1+Eg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-ns?m=Eg[d-o+ns-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,T=6,C=3,b=2,v=1,P=new Float32Array(C*T*S),D=new Float32Array(b*T*S),B=new Float32Array(v*T*S);for(let U=0;U<S;U++){const O=U%3*2/3-1,K=U>2?0:-1,w=[O,K,0,O+2/3,K,0,O+2/3,K+1,0,O,K,0,O+2/3,K+1,0,O,K+1,0];P.set(w,C*T*U),D.set(y,b*T*U);const A=[U,U,U,U,U,U];B.set(A,v*T*U)}const F=new Fi;F.setAttribute("position",new Ci(P,C)),F.setAttribute("uv",new Ci(D,b)),F.setAttribute("faceIndex",new Ci(B,v)),s.push(new ya(F,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Rg(o,e,i){const s=new Ps(o,e,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function z3(o,e,i){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function I3(o,e,i){const s=new Float32Array(Ls),l=new lt(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Cg(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function wg(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B3(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===sh||m===rh,g=m===zr||m===Ir;if(p||g){let x=e.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new Ag(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Ag(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function F3(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$o("WebGLRenderer: "+s+" extension not supported."),l}}}function H3(o,e,i,s){const l={},c=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function p(x){const y=[],S=x.index,T=x.attributes.position;let C=0;if(S!==null){const P=S.array;C=S.version;for(let D=0,B=P.length;D<B;D+=3){const F=P[D+0],U=P[D+1],O=P[D+2];y.push(F,U,U,O,O,F)}}else if(T!==void 0){const P=T.array;C=T.version;for(let D=0,B=P.length/3-1;D<B;D+=3){const F=D+0,U=D+1,O=D+2;y.push(F,U,U,O,O,F)}}else return;const b=new(m_(y)?y_:v_)(y,1);b.version=C;const v=c.get(x);v&&e.remove(v),c.set(x,b)}function g(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function G3(o,e,i){let s;function l(y){s=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,S){o.drawElements(s,S,c,y*d),i.update(S,s,1)}function p(y,S,T){T!==0&&(o.drawElementsInstanced(s,S,c,y*d,T),i.update(S,s,T))}function g(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,T);let b=0;for(let v=0;v<T;v++)b+=S[v];i.update(b,s,1)}function x(y,S,T,C){if(T===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<y.length;v++)p(y[v]/d,S[v],C[v]);else{b.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,C,0,T);let v=0;for(let P=0;P<T;P++)v+=S[P]*C[P];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function V3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:nn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function k3(o,e,i){const s=new WeakMap,l=new an;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let y=s.get(h);if(y===void 0||y.count!==x){let A=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",A)};var S=A;y!==void 0&&y.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let B=0;T===!0&&(B=1),C===!0&&(B=2),b===!0&&(B=3);let F=h.attributes.position.count*B,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*U*4*x),K=new x_(O,F,U,x);K.type=ma,K.needsUpdate=!0;const w=B*4;for(let z=0;z<x;z++){const X=v[z],J=P[z],dt=D[z],rt=F*U*4*z;for(let I=0;I<X.count;I++){const q=I*w;T===!0&&(l.fromBufferAttribute(X,I),O[rt+q+0]=l.x,O[rt+q+1]=l.y,O[rt+q+2]=l.z,O[rt+q+3]=0),C===!0&&(l.fromBufferAttribute(J,I),O[rt+q+4]=l.x,O[rt+q+5]=l.y,O[rt+q+6]=l.z,O[rt+q+7]=0),b===!0&&(l.fromBufferAttribute(dt,I),O[rt+q+8]=l.x,O[rt+q+9]=l.y,O[rt+q+10]=l.z,O[rt+q+11]=dt.itemSize===4?l.w:1)}}y={count:x,texture:K,size:new ve(F,U)},s.set(h,y),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let b=0;b<p.length;b++)T+=p[b];const C=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function X3(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const D_=new Un,Dg=new T_(1,1),U_=new x_,L_=new lb,N_=new M_,Ug=[],Lg=[],Ng=new Float32Array(16),Og=new Float32Array(9),Pg=new Float32Array(4);function Vr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=Ug[l];if(c===void 0&&(c=new Float32Array(l),Ug[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function nu(o,e){let i=Lg[e];i===void 0&&(i=new Int32Array(e),Lg[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function W3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function q3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function Y3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function j3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function Z3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;Pg.set(s),o.uniformMatrix2fv(this.addr,!1,Pg),vn(i,s)}}function K3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;Og.set(s),o.uniformMatrix3fv(this.addr,!1,Og),vn(i,s)}}function Q3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;Ng.set(s),o.uniformMatrix4fv(this.addr,!1,Ng),vn(i,s)}}function J3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function $3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function tE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function eE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function nE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function iE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function aE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function sE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function rE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Dg.compareFunction=p_,c=Dg):c=D_,i.setTexture2D(e||c,l)}function oE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||L_,l)}function lE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||N_,l)}function cE(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||U_,l)}function uE(o){switch(o){case 5126:return W3;case 35664:return q3;case 35665:return Y3;case 35666:return j3;case 35674:return Z3;case 35675:return K3;case 35676:return Q3;case 5124:case 35670:return J3;case 35667:case 35671:return $3;case 35668:case 35672:return tE;case 35669:case 35673:return eE;case 5125:return nE;case 36294:return iE;case 36295:return aE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}function fE(o,e){o.uniform1fv(this.addr,e)}function dE(o,e){const i=Vr(e,this.size,2);o.uniform2fv(this.addr,i)}function hE(o,e){const i=Vr(e,this.size,3);o.uniform3fv(this.addr,i)}function pE(o,e){const i=Vr(e,this.size,4);o.uniform4fv(this.addr,i)}function mE(o,e){const i=Vr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function xE(o,e){const i=Vr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gE(o,e){const i=Vr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function _E(o,e){o.uniform1iv(this.addr,e)}function vE(o,e){o.uniform2iv(this.addr,e)}function yE(o,e){o.uniform3iv(this.addr,e)}function SE(o,e){o.uniform4iv(this.addr,e)}function bE(o,e){o.uniform1uiv(this.addr,e)}function ME(o,e){o.uniform2uiv(this.addr,e)}function EE(o,e){o.uniform3uiv(this.addr,e)}function TE(o,e){o.uniform4uiv(this.addr,e)}function AE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||D_,c[d])}function RE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||L_,c[d])}function CE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||N_,c[d])}function wE(o,e,i){const s=this.cache,l=e.length,c=nu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||U_,c[d])}function DE(o){switch(o){case 5126:return fE;case 35664:return dE;case 35665:return hE;case 35666:return pE;case 35674:return mE;case 35675:return xE;case 35676:return gE;case 5124:case 35670:return _E;case 35667:case 35671:return vE;case 35668:case 35672:return yE;case 35669:case 35673:return SE;case 5125:return bE;case 36294:return ME;case 36295:return EE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return wE}}class UE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=uE(i.type)}}class LE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DE(i.type)}}class NE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function zg(o,e){o.seq.push(e),o.map[e.id]=e}function OE(o,e,i){const s=o.name,l=s.length;for(Zd.lastIndex=0;;){const c=Zd.exec(s),d=Zd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){zg(i,p===void 0?new UE(h,o,e):new LE(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new NE(h),zg(i,x)),i=x}}}class Wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);OE(c,d,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Ig(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const PE=37297;let zE=0;function IE(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Bg=new de;function BE(o){Ne._getMatrix(Bg,Ne.workingColorSpace,o);const e=`mat3( ${Bg.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Zc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Fg(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+IE(o.getShaderSource(e),h)}else return c}function FE(o,e){const i=BE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function HE(o,e){let i;switch(e){case PS:i="Linear";break;case zS:i="Reinhard";break;case IS:i="Cineon";break;case BS:i="ACESFilmic";break;case HS:i="AgX";break;case GS:i="Neutral";break;case FS:i="Custom";break;default:le("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new lt;function GE(){Ne.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function kE(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function XE(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Yo(o){return o!==""}function Hg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(o){return o.replace(WE,YE)}const qE=new Map;function YE(o,e){let i=me[e];if(i===void 0){const s=qE.get(e);if(s!==void 0)i=me[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Hh(i)}const jE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(o){return o.replace(jE,ZE)}function ZE(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function kg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===pS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function QE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zr:case Ir:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function $E(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case s_:e="ENVMAP_BLENDING_MULTIPLY";break;case NS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function tT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function eT(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=KE(i),p=QE(i),g=JE(i),x=$E(i),y=tT(i),S=VE(i),T=kE(c),C=l.createProgram();let b,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),v.length>0&&(v+=`
`)):(b=[kg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),v=[kg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==is?"#define TONE_MAPPING":"",i.toneMapping!==is?me.tonemapping_pars_fragment:"",i.toneMapping!==is?HE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,FE("linearToOutputTexel",i.outputColorSpace),GE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=Hh(d),d=Hg(d,i),d=Gg(d,i),h=Hh(h),h=Hg(h,i),h=Gg(h,i),d=Vg(d),h=Vg(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===$x?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=P+b+d,B=P+v+h,F=Ig(l,l.VERTEX_SHADER,D),U=Ig(l,l.FRAGMENT_SHADER,B);l.attachShader(C,F),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(z){if(o.debug.checkShaderErrors){const X=l.getProgramInfoLog(C)||"",J=l.getShaderInfoLog(F)||"",dt=l.getShaderInfoLog(U)||"",rt=X.trim(),I=J.trim(),q=dt.trim();let W=!0,mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,U);else{const _t=Fg(l,F,"vertex"),L=Fg(l,U,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+rt+`
`+_t+`
`+L)}else rt!==""?le("WebGLProgram: Program Info Log:",rt):(I===""||q==="")&&(mt=!1);mt&&(z.diagnostics={runnable:W,programLog:rt,vertexShader:{log:I,prefix:b},fragmentShader:{log:q,prefix:v}})}l.deleteShader(F),l.deleteShader(U),K=new Wc(l,C),w=XE(l,C)}let K;this.getUniforms=function(){return K===void 0&&O(this),K};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(C,PE)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=U,this}let nT=0;class iT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new aT(e),i.set(e,s)),s}}class aT{constructor(e){this.id=nT++,this.code=e,this.usedTimes=0}}function sT(o,e,i,s,l,c,d){const h=new g_,m=new iT,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,A,z,X,J){const dt=X.fog,rt=J.geometry,I=w.isMeshStandardMaterial?X.environment:null,q=(w.isMeshStandardMaterial?i:e).get(w.envMap||I),W=q&&q.mapping===$c?q.image.height:null,mt=T[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&le("WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const _t=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,L=_t!==void 0?_t.length:0;let Q=0;rt.morphAttributes.position!==void 0&&(Q=1),rt.morphAttributes.normal!==void 0&&(Q=2),rt.morphAttributes.color!==void 0&&(Q=3);let yt,Tt,Ot,at;if(mt){const we=Oi[mt];yt=we.vertexShader,Tt=we.fragmentShader}else yt=w.vertexShader,Tt=w.fragmentShader,m.update(w),Ot=m.getVertexShaderID(w),at=m.getFragmentShaderID(w);const ft=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Ht=J.isInstancedMesh===!0,Wt=J.isBatchedMesh===!0,ce=!!w.map,rn=!!w.matcap,he=!!q,Ce=!!w.aoMap,G=!!w.lightMap,pe=!!w.bumpMap,xe=!!w.normalMap,Ie=!!w.displacementMap,Gt=!!w.emissiveMap,qe=!!w.metalnessMap,Zt=!!w.roughnessMap,se=w.anisotropy>0,N=w.clearcoat>0,M=w.dispersion>0,tt=w.iridescence>0,xt=w.sheen>0,St=w.transmission>0,ut=se&&!!w.anisotropyMap,Yt=N&&!!w.clearcoatMap,Lt=N&&!!w.clearcoatNormalMap,Jt=N&&!!w.clearcoatRoughnessMap,qt=tt&&!!w.iridescenceMap,bt=tt&&!!w.iridescenceThicknessMap,Et=xt&&!!w.sheenColorMap,jt=xt&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Pt=!!w.specularColorMap,ie=!!w.specularIntensityMap,V=St&&!!w.transmissionMap,Dt=St&&!!w.thicknessMap,Rt=!!w.gradientMap,Ct=!!w.alphaMap,Mt=w.alphaTest>0,vt=!!w.alphaHash,It=!!w.extensions;let ae=is;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ae=o.toneMapping);const He={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Tt,defines:w.defines,customVertexShaderID:Ot,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Wt,batchingColor:Wt&&J._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&J.instanceColor!==null,instancingMorph:Ht&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Br,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:rn,envMap:he,envMapMode:he&&q.mapping,envMapCubeUVHeight:W,aoMap:Ce,lightMap:G,bumpMap:pe,normalMap:xe,displacementMap:y&&Ie,emissiveMap:Gt,normalMapObjectSpace:xe&&w.normalMapType===qS,normalMapTangentSpace:xe&&w.normalMapType===WS,metalnessMap:qe,roughnessMap:Zt,anisotropy:se,anisotropyMap:ut,clearcoat:N,clearcoatMap:Yt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Jt,dispersion:M,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:bt,sheen:xt,sheenColorMap:Et,sheenRoughnessMap:jt,specularMap:Vt,specularColorMap:Pt,specularIntensityMap:ie,transmission:St,transmissionMap:V,thicknessMap:Dt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===Nr&&w.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Mt,alphaHash:vt,combine:w.combine,mapUv:ce&&C(w.map.channel),aoMapUv:Ce&&C(w.aoMap.channel),lightMapUv:G&&C(w.lightMap.channel),bumpMapUv:pe&&C(w.bumpMap.channel),normalMapUv:xe&&C(w.normalMap.channel),displacementMapUv:Ie&&C(w.displacementMap.channel),emissiveMapUv:Gt&&C(w.emissiveMap.channel),metalnessMapUv:qe&&C(w.metalnessMap.channel),roughnessMapUv:Zt&&C(w.roughnessMap.channel),anisotropyMapUv:ut&&C(w.anisotropyMap.channel),clearcoatMapUv:Yt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&C(w.sheenRoughnessMap.channel),specularMapUv:Vt&&C(w.specularMap.channel),specularColorMapUv:Pt&&C(w.specularColorMap.channel),specularIntensityMapUv:ie&&C(w.specularIntensityMap.channel),transmissionMapUv:V&&C(w.transmissionMap.channel),thicknessMapUv:Dt&&C(w.thicknessMap.channel),alphaMapUv:Ct&&C(w.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(xe||se),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!rt.attributes.uv&&(ce||Ct),fog:!!dt,useFog:w.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:wt,skinning:J.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===Xe,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===Xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ha,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return He.vertexUv1s=p.has(1),He.vertexUv2s=p.has(2),He.vertexUv3s=p.has(3),p.clear(),He}function v(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)A.push(z),A.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(P(A,w),D(A,w),A.push(o.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function P(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function D(w,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),A.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reversedDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),w.push(h.mask)}function B(w){const A=T[w.type];let z;if(A){const X=Oi[A];z=bb.clone(X.uniforms)}else z=w.uniforms;return z}function F(w,A){let z;for(let X=0,J=g.length;X<J;X++){const dt=g[X];if(dt.cacheKey===A){z=dt,++z.usedTimes;break}}return z===void 0&&(z=new eT(o,A,w,c),g.push(z)),z}function U(w){if(--w.usedTimes===0){const A=g.indexOf(w);g[A]=g[g.length-1],g.pop(),w.destroy()}}function O(w){m.remove(w)}function K(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:B,acquireProgram:F,releaseProgram:U,releaseShaderCache:O,programs:g,dispose:K}}function rT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function oT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Xg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Wg(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(x,y,S,T,C,b){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:S,groupOrder:T,renderOrder:x.renderOrder,z:C,group:b},o[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=S,v.groupOrder=T,v.renderOrder=x.renderOrder,v.z=C,v.group=b),e++,v}function h(x,y,S,T,C,b){const v=d(x,y,S,T,C,b);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(x,y,S,T,C,b){const v=d(x,y,S,T,C,b);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,y){i.length>1&&i.sort(x||oT),s.length>1&&s.sort(y||Xg),l.length>1&&l.sort(y||Xg)}function g(){for(let x=e,y=o.length;x<y;x++){const S=o[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function lT(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new Wg,o.set(s,[d])):l>=c.length?(d=new Wg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function cT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new lt,color:new Pe};break;case"SpotLight":i={position:new lt,direction:new lt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[e.id]=i,i}}}function uT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let fT=0;function dT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function hT(o){const e=new cT,i=uT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new lt);const l=new lt,c=new sn,d=new sn;function h(p){let g=0,x=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,T=0,C=0,b=0,v=0,P=0,D=0,B=0,F=0,U=0,O=0;p.sort(dT);for(let w=0,A=p.length;w<A;w++){const z=p[w],X=z.color,J=z.intensity,dt=z.distance,rt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=X.r*J,x+=X.g*J,y+=X.b*J;else if(z.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(z.sh.coefficients[I],J);O++}else if(z.isDirectionalLight){const I=e.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,W=i.get(z);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,s.directionalShadow[S]=W,s.directionalShadowMap[S]=rt,s.directionalShadowMatrix[S]=z.shadow.matrix,P++}s.directional[S]=I,S++}else if(z.isSpotLight){const I=e.get(z);I.position.setFromMatrixPosition(z.matrixWorld),I.color.copy(X).multiplyScalar(J),I.distance=dt,I.coneCos=Math.cos(z.angle),I.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),I.decay=z.decay,s.spot[C]=I;const q=z.shadow;if(z.map&&(s.spotLightMap[F]=z.map,F++,q.updateMatrices(z),z.castShadow&&U++),s.spotLightMatrix[C]=q.matrix,z.castShadow){const W=i.get(z);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,s.spotShadow[C]=W,s.spotShadowMap[C]=rt,B++}C++}else if(z.isRectAreaLight){const I=e.get(z);I.color.copy(X).multiplyScalar(J),I.halfWidth.set(z.width*.5,0,0),I.halfHeight.set(0,z.height*.5,0),s.rectArea[b]=I,b++}else if(z.isPointLight){const I=e.get(z);if(I.color.copy(z.color).multiplyScalar(z.intensity),I.distance=z.distance,I.decay=z.decay,z.castShadow){const q=z.shadow,W=i.get(z);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,s.pointShadow[T]=W,s.pointShadowMap[T]=rt,s.pointShadowMatrix[T]=z.shadow.matrix,D++}s.point[T]=I,T++}else if(z.isHemisphereLight){const I=e.get(z);I.skyColor.copy(z.color).multiplyScalar(J),I.groundColor.copy(z.groundColor).multiplyScalar(J),s.hemi[v]=I,v++}}b>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=y;const K=s.hash;(K.directionalLength!==S||K.pointLength!==T||K.spotLength!==C||K.rectAreaLength!==b||K.hemiLength!==v||K.numDirectionalShadows!==P||K.numPointShadows!==D||K.numSpotShadows!==B||K.numSpotMaps!==F||K.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=b,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=B+F-U,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=O,K.directionalLength=S,K.pointLength=T,K.spotLength=C,K.rectAreaLength=b,K.hemiLength=v,K.numDirectionalShadows=P,K.numPointShadows=D,K.numSpotShadows=B,K.numSpotMaps=F,K.numLightProbes=O,s.version=fT++)}function m(p,g){let x=0,y=0,S=0,T=0,C=0;const b=g.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const D=p[v];if(D.isDirectionalLight){const B=s.directional[x];B.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),x++}else if(D.isSpotLight){const B=s.spot[S];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(b),B.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),S++}else if(D.isRectAreaLight){const B=s.rectArea[T];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(b),d.identity(),c.copy(D.matrixWorld),c.premultiply(b),d.extractRotation(c),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),T++}else if(D.isPointLight){const B=s.point[y];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(b),y++}else if(D.isHemisphereLight){const B=s.hemi[C];B.direction.setFromMatrixPosition(D.matrixWorld),B.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:s}}function qg(o){const e=new hT(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function d(g){s.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function pT(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new qg(o),e.set(l,[h])):c>=d.length?(h=new qg(o),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gT(o,e,i){let s=new tp;const l=new ve,c=new ve,d=new an,h=new Ob({depthPacking:XS}),m=new Pb,p={},g=i.maxTextureSize,x={[_a]:jn,[jn]:_a,[ha]:ha},y=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:mT,fragmentShader:xT}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new Fi;T.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ya(T,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let v=this.type;this.render=function(U,O,K){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||U.length===0)return;const w=o.getRenderTarget(),A=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),X=o.state;X.setBlending(xa),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const J=v!==da&&this.type===da,dt=v===da&&this.type!==da;for(let rt=0,I=U.length;rt<I;rt++){const q=U[rt],W=q.shadow;if(W===void 0){le("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const mt=W.getFrameExtents();if(l.multiply(mt),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/mt.x),l.x=c.x*mt.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/mt.y),l.y=c.y*mt.y,W.mapSize.y=c.y)),W.map===null||J===!0||dt===!0){const L=this.type!==da?{minFilter:oi,magFilter:oi}:{};W.map!==null&&W.map.dispose(),W.map=new Ps(l.x,l.y,L),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const _t=W.getViewportCount();for(let L=0;L<_t;L++){const Q=W.getViewport(L);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),X.viewport(d),W.updateMatrices(q,L),s=W.getFrustum(),B(O,K,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===da&&P(W,K),W.needsUpdate=!1}v=this.type,b.needsUpdate=!1,o.setRenderTarget(w,A,z)};function P(U,O){const K=e.update(C);y.defines.VSM_SAMPLES!==U.blurSamples&&(y.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ps(l.x,l.y)),y.uniforms.shadow_pass.value=U.map.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(O,null,K,y,C,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(O,null,K,S,C,null)}function D(U,O,K,w){let A=null;const z=K.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)A=z;else if(A=K.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const X=A.uuid,J=O.uuid;let dt=p[X];dt===void 0&&(dt={},p[X]=dt);let rt=dt[J];rt===void 0&&(rt=A.clone(),dt[J]=rt,O.addEventListener("dispose",F)),A=rt}if(A.visible=O.visible,A.wireframe=O.wireframe,w===da?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:x[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const X=o.properties.get(A);X.light=K}return A}function B(U,O,K,w,A){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===da)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,U.matrixWorld);const J=e.update(U),dt=U.material;if(Array.isArray(dt)){const rt=J.groups;for(let I=0,q=rt.length;I<q;I++){const W=rt[I],mt=dt[W.materialIndex];if(mt&&mt.visible){const _t=D(U,mt,w,A);U.onBeforeShadow(o,U,O,K,J,_t,W),o.renderBufferDirect(K,null,J,_t,U,W),U.onAfterShadow(o,U,O,K,J,_t,W)}}}else if(dt.visible){const rt=D(U,dt,w,A);U.onBeforeShadow(o,U,O,K,J,rt,null),o.renderBufferDirect(K,null,J,rt,U,null),U.onAfterShadow(o,U,O,K,J,rt,null)}}const X=U.children;for(let J=0,dt=X.length;J<dt;J++)B(X[J],O,K,w,A)}function F(U){U.target.removeEventListener("dispose",F);for(const K in p){const w=p[K],A=U.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const _T={[Jd]:$d,[th]:ih,[eh]:ah,[Pr]:nh,[$d]:Jd,[ih]:th,[ah]:eh,[nh]:Pr};function vT(o,e){function i(){let V=!1;const Dt=new an;let Rt=null;const Ct=new an(0,0,0,0);return{setMask:function(Mt){Rt!==Mt&&!V&&(o.colorMask(Mt,Mt,Mt,Mt),Rt=Mt)},setLocked:function(Mt){V=Mt},setClear:function(Mt,vt,It,ae,He){He===!0&&(Mt*=ae,vt*=ae,It*=ae),Dt.set(Mt,vt,It,ae),Ct.equals(Dt)===!1&&(o.clearColor(Mt,vt,It,ae),Ct.copy(Dt))},reset:function(){V=!1,Rt=null,Ct.set(-1,0,0,0)}}}function s(){let V=!1,Dt=!1,Rt=null,Ct=null,Mt=null;return{setReversed:function(vt){if(Dt!==vt){const It=e.get("EXT_clip_control");vt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Dt=vt;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Dt},setTest:function(vt){vt?ft(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(vt){Rt!==vt&&!V&&(o.depthMask(vt),Rt=vt)},setFunc:function(vt){if(Dt&&(vt=_T[vt]),Ct!==vt){switch(vt){case Jd:o.depthFunc(o.NEVER);break;case $d:o.depthFunc(o.ALWAYS);break;case th:o.depthFunc(o.LESS);break;case Pr:o.depthFunc(o.LEQUAL);break;case eh:o.depthFunc(o.EQUAL);break;case nh:o.depthFunc(o.GEQUAL);break;case ih:o.depthFunc(o.GREATER);break;case ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ct=vt}},setLocked:function(vt){V=vt},setClear:function(vt){Mt!==vt&&(Dt&&(vt=1-vt),o.clearDepth(vt),Mt=vt)},reset:function(){V=!1,Rt=null,Ct=null,Mt=null,Dt=!1}}}function l(){let V=!1,Dt=null,Rt=null,Ct=null,Mt=null,vt=null,It=null,ae=null,He=null;return{setTest:function(we){V||(we?ft(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(we){Dt!==we&&!V&&(o.stencilMask(we),Dt=we)},setFunc:function(we,Nn,Zn){(Rt!==we||Ct!==Nn||Mt!==Zn)&&(o.stencilFunc(we,Nn,Zn),Rt=we,Ct=Nn,Mt=Zn)},setOp:function(we,Nn,Zn){(vt!==we||It!==Nn||ae!==Zn)&&(o.stencilOp(we,Nn,Zn),vt=we,It=Nn,ae=Zn)},setLocked:function(we){V=we},setClear:function(we){He!==we&&(o.clearStencil(we),He=we)},reset:function(){V=!1,Dt=null,Rt=null,Ct=null,Mt=null,vt=null,It=null,ae=null,He=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,S=[],T=null,C=!1,b=null,v=null,P=null,D=null,B=null,F=null,U=null,O=new Pe(0,0,0),K=0,w=!1,A=null,z=null,X=null,J=null,dt=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,q=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=q>=2);let mt=null,_t={};const L=o.getParameter(o.SCISSOR_BOX),Q=o.getParameter(o.VIEWPORT),yt=new an().fromArray(L),Tt=new an().fromArray(Q);function Ot(V,Dt,Rt,Ct){const Mt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(V,vt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Rt;It++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Dt+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return vt}const at={};at[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ft(o.DEPTH_TEST),d.setFunc(Pr),pe(!1),xe(Zx),ft(o.CULL_FACE),Ce(xa);function ft(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function wt(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function Ht(V,Dt){return x[V]!==Dt?(o.bindFramebuffer(V,Dt),x[V]=Dt,V===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Dt),V===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Wt(V,Dt){let Rt=S,Ct=!1;if(V){Rt=y.get(Dt),Rt===void 0&&(Rt=[],y.set(Dt,Rt));const Mt=V.textures;if(Rt.length!==Mt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,It=Mt.length;vt<It;vt++)Rt[vt]=o.COLOR_ATTACHMENT0+vt;Rt.length=Mt.length,Ct=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(Rt)}function ce(V){return T!==V?(o.useProgram(V),T=V,!0):!1}const rn={[Us]:o.FUNC_ADD,[xS]:o.FUNC_SUBTRACT,[gS]:o.FUNC_REVERSE_SUBTRACT};rn[_S]=o.MIN,rn[vS]=o.MAX;const he={[yS]:o.ZERO,[SS]:o.ONE,[bS]:o.SRC_COLOR,[Kd]:o.SRC_ALPHA,[CS]:o.SRC_ALPHA_SATURATE,[AS]:o.DST_COLOR,[ES]:o.DST_ALPHA,[MS]:o.ONE_MINUS_SRC_COLOR,[Qd]:o.ONE_MINUS_SRC_ALPHA,[RS]:o.ONE_MINUS_DST_COLOR,[TS]:o.ONE_MINUS_DST_ALPHA,[wS]:o.CONSTANT_COLOR,[DS]:o.ONE_MINUS_CONSTANT_COLOR,[US]:o.CONSTANT_ALPHA,[LS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ce(V,Dt,Rt,Ct,Mt,vt,It,ae,He,we){if(V===xa){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(ft(o.BLEND),C=!0),V!==mS){if(V!==b||we!==w){if((v!==Us||B!==Us)&&(o.blendEquation(o.FUNC_ADD),v=Us,B=Us),we)switch(V){case Nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jc:o.blendFunc(o.ONE,o.ONE);break;case Kx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Qx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:nn("WebGLState: Invalid blending: ",V);break}else switch(V){case Nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Kx:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qx:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",V);break}P=null,D=null,F=null,U=null,O.set(0,0,0),K=0,b=V,w=we}return}Mt=Mt||Dt,vt=vt||Rt,It=It||Ct,(Dt!==v||Mt!==B)&&(o.blendEquationSeparate(rn[Dt],rn[Mt]),v=Dt,B=Mt),(Rt!==P||Ct!==D||vt!==F||It!==U)&&(o.blendFuncSeparate(he[Rt],he[Ct],he[vt],he[It]),P=Rt,D=Ct,F=vt,U=It),(ae.equals(O)===!1||He!==K)&&(o.blendColor(ae.r,ae.g,ae.b,He),O.copy(ae),K=He),b=V,w=!1}function G(V,Dt){V.side===ha?wt(o.CULL_FACE):ft(o.CULL_FACE);let Rt=V.side===jn;Dt&&(Rt=!Rt),pe(Rt),V.blending===Nr&&V.transparent===!1?Ce(xa):Ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ct=V.stencilWrite;h.setTest(Ct),Ct&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(V){A!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),A=V)}function xe(V){V!==dS?(ft(o.CULL_FACE),V!==z&&(V===Zx?o.cullFace(o.BACK):V===hS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),z=V}function Ie(V){V!==X&&(I&&o.lineWidth(V),X=V)}function Gt(V,Dt,Rt){V?(ft(o.POLYGON_OFFSET_FILL),(J!==Dt||dt!==Rt)&&(o.polygonOffset(Dt,Rt),J=Dt,dt=Rt)):wt(o.POLYGON_OFFSET_FILL)}function qe(V){V?ft(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Zt(V){V===void 0&&(V=o.TEXTURE0+rt-1),mt!==V&&(o.activeTexture(V),mt=V)}function se(V,Dt,Rt){Rt===void 0&&(mt===null?Rt=o.TEXTURE0+rt-1:Rt=mt);let Ct=_t[Rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},_t[Rt]=Ct),(Ct.type!==V||Ct.texture!==Dt)&&(mt!==Rt&&(o.activeTexture(Rt),mt=Rt),o.bindTexture(V,Dt||at[V]),Ct.type=V,Ct.texture=Dt)}function N(){const V=_t[mt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function xt(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function St(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Lt(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Jt(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function qt(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function bt(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Et(V){yt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),yt.copy(V))}function jt(V){Tt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Tt.copy(V))}function Vt(V,Dt){let Rt=p.get(Dt);Rt===void 0&&(Rt=new WeakMap,p.set(Dt,Rt));let Ct=Rt.get(V);Ct===void 0&&(Ct=o.getUniformBlockIndex(Dt,V.name),Rt.set(V,Ct))}function Pt(V,Dt){const Ct=p.get(Dt).get(V);m.get(Dt)!==Ct&&(o.uniformBlockBinding(Dt,Ct,V.__bindingPointIndex),m.set(Dt,Ct))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},mt=null,_t={},x={},y=new WeakMap,S=[],T=null,C=!1,b=null,v=null,P=null,D=null,B=null,F=null,U=null,O=new Pe(0,0,0),K=0,w=!1,A=null,z=null,X=null,J=null,dt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ft,disable:wt,bindFramebuffer:Ht,drawBuffers:Wt,useProgram:ce,setBlending:Ce,setMaterial:G,setFlipSided:pe,setCullFace:xe,setLineWidth:Ie,setPolygonOffset:Gt,setScissorTest:qe,activeTexture:Zt,bindTexture:se,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:tt,texImage2D:qt,texImage3D:bt,updateUBOMapping:Vt,uniformBlockBinding:Pt,texStorage2D:Lt,texStorage3D:Jt,texSubImage2D:xt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Yt,scissor:Et,viewport:jt,reset:ie}}function yT(o,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ve,g=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,M){return S?new OffscreenCanvas(N,M):Jo("canvas")}function C(N,M,tt){let xt=1;const St=se(N);if((St.width>tt||St.height>tt)&&(xt=tt/Math.max(St.width,St.height)),xt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(xt*St.width),Yt=Math.floor(xt*St.height);x===void 0&&(x=T(ut,Yt));const Lt=M?T(ut,Yt):x;return Lt.width=ut,Lt.height=Yt,Lt.getContext("2d").drawImage(N,0,0,ut,Yt),le("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Yt+")."),Lt}else return"data"in N&&le("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function b(N){return N.generateMipmaps}function v(N){o.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(N,M,tt,xt,St=!1){if(N!==null){if(o[N]!==void 0)return o[N];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=M;if(M===o.RED&&(tt===o.FLOAT&&(ut=o.R32F),tt===o.HALF_FLOAT&&(ut=o.R16F),tt===o.UNSIGNED_BYTE&&(ut=o.R8)),M===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.R8UI),tt===o.UNSIGNED_SHORT&&(ut=o.R16UI),tt===o.UNSIGNED_INT&&(ut=o.R32UI),tt===o.BYTE&&(ut=o.R8I),tt===o.SHORT&&(ut=o.R16I),tt===o.INT&&(ut=o.R32I)),M===o.RG&&(tt===o.FLOAT&&(ut=o.RG32F),tt===o.HALF_FLOAT&&(ut=o.RG16F),tt===o.UNSIGNED_BYTE&&(ut=o.RG8)),M===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),tt===o.UNSIGNED_INT&&(ut=o.RG32UI),tt===o.BYTE&&(ut=o.RG8I),tt===o.SHORT&&(ut=o.RG16I),tt===o.INT&&(ut=o.RG32I)),M===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),tt===o.UNSIGNED_INT&&(ut=o.RGB32UI),tt===o.BYTE&&(ut=o.RGB8I),tt===o.SHORT&&(ut=o.RGB16I),tt===o.INT&&(ut=o.RGB32I)),M===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),tt===o.BYTE&&(ut=o.RGBA8I),tt===o.SHORT&&(ut=o.RGBA16I),tt===o.INT&&(ut=o.RGBA32I)),M===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),M===o.RGBA){const Yt=St?Zc:Ne.getTransfer(xt);tt===o.FLOAT&&(ut=o.RGBA32F),tt===o.HALF_FLOAT&&(ut=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ut=Yt===Xe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function B(N,M){let tt;return N?M===null||M===Os||M===Zo?tt=o.DEPTH24_STENCIL8:M===ma?tt=o.DEPTH32F_STENCIL8:M===jo&&(tt=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Os||M===Zo?tt=o.DEPTH_COMPONENT24:M===ma?tt=o.DEPTH_COMPONENT32F:M===jo&&(tt=o.DEPTH_COMPONENT16),tt}function F(N,M){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==oi&&N.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function U(N){const M=N.target;M.removeEventListener("dispose",U),K(M),M.isVideoTexture&&g.delete(M)}function O(N){const M=N.target;M.removeEventListener("dispose",O),A(M)}function K(N){const M=s.get(N);if(M.__webglInit===void 0)return;const tt=N.source,xt=y.get(tt);if(xt){const St=xt[M.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(N),Object.keys(xt).length===0&&y.delete(tt)}s.remove(N)}function w(N){const M=s.get(N);o.deleteTexture(M.__webglTexture);const tt=N.source,xt=y.get(tt);delete xt[M.__cacheKey],d.memory.textures--}function A(N){const M=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(M.__webglFramebuffer[xt]))for(let St=0;St<M.__webglFramebuffer[xt].length;St++)o.deleteFramebuffer(M.__webglFramebuffer[xt][St]);else o.deleteFramebuffer(M.__webglFramebuffer[xt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[xt])}else{if(Array.isArray(M.__webglFramebuffer))for(let xt=0;xt<M.__webglFramebuffer.length;xt++)o.deleteFramebuffer(M.__webglFramebuffer[xt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let xt=0;xt<M.__webglColorRenderbuffer.length;xt++)M.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[xt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const tt=N.textures;for(let xt=0,St=tt.length;xt<St;xt++){const ut=s.get(tt[xt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),s.remove(tt[xt])}s.remove(N)}let z=0;function X(){z=0}function J(){const N=z;return N>=l.maxTextures&&le("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),z+=1,N}function dt(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function rt(N,M){const tt=s.get(N);if(N.isVideoTexture&&qe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const xt=N.image;if(xt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{at(tt,N,M);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+M)}function I(N,M){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){at(tt,N,M);return}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+M)}function q(N,M){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){at(tt,N,M);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+M)}function W(N,M){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){ft(tt,N,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+M)}const mt={[oh]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[lh]:o.MIRRORED_REPEAT},_t={[oi]:o.NEAREST,[VS]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[ri]:o.LINEAR,[gd]:o.LINEAR_MIPMAP_NEAREST,[es]:o.LINEAR_MIPMAP_LINEAR},L={[YS]:o.NEVER,[$S]:o.ALWAYS,[jS]:o.LESS,[p_]:o.LEQUAL,[ZS]:o.EQUAL,[JS]:o.GEQUAL,[KS]:o.GREATER,[QS]:o.NOTEQUAL};function Q(N,M){if(M.type===ma&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===gd||M.magFilter===gc||M.magFilter===es||M.minFilter===ri||M.minFilter===gd||M.minFilter===gc||M.minFilter===es)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,mt[M.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,mt[M.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,mt[M.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,_t[M.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===oi||M.minFilter!==gc&&M.minFilter!==es||M.type===ma&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function yt(N,M){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",U));const xt=M.source;let St=y.get(xt);St===void 0&&(St={},y.set(xt,St));const ut=dt(M);if(ut!==N.__cacheKey){St[ut]===void 0&&(St[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),St[ut].usedTimes++;const Yt=St[N.__cacheKey];Yt!==void 0&&(St[N.__cacheKey].usedTimes--,Yt.usedTimes===0&&w(M)),N.__cacheKey=ut,N.__webglTexture=St[ut].texture}return tt}function Tt(N,M,tt){return Math.floor(Math.floor(N/tt)/M)}function Ot(N,M,tt,xt){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,tt,xt,M.data);else{ut.sort((bt,Et)=>bt.start-Et.start);let Yt=0;for(let bt=1;bt<ut.length;bt++){const Et=ut[Yt],jt=ut[bt],Vt=Et.start+Et.count,Pt=Tt(jt.start,M.width,4),ie=Tt(Et.start,M.width,4);jt.start<=Vt+1&&Pt===ie&&Tt(jt.start+jt.count-1,M.width,4)===Pt?Et.count=Math.max(Et.count,jt.start+jt.count-Et.start):(++Yt,ut[Yt]=jt)}ut.length=Yt+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let bt=0,Et=ut.length;bt<Et;bt++){const jt=ut[bt],Vt=Math.floor(jt.start/4),Pt=Math.ceil(jt.count/4),ie=Vt%M.width,V=Math.floor(Vt/M.width),Dt=Pt,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ie,V,Dt,Rt,tt,xt,M.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function at(N,M,tt){let xt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(xt=o.TEXTURE_3D);const St=yt(N,M),ut=M.source;i.bindTexture(xt,N.__webglTexture,o.TEXTURE0+tt);const Yt=s.get(ut);if(ut.version!==Yt.__version||St===!0){i.activeTexture(o.TEXTURE0+tt);const Lt=Ne.getPrimaries(Ne.workingColorSpace),Jt=M.colorSpace===ts?null:Ne.getPrimaries(M.colorSpace),qt=M.colorSpace===ts||Lt===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let bt=C(M.image,!1,l.maxTextureSize);bt=Zt(M,bt);const Et=c.convert(M.format,M.colorSpace),jt=c.convert(M.type);let Vt=D(M.internalFormat,Et,jt,M.colorSpace,M.isVideoTexture);Q(xt,M);let Pt;const ie=M.mipmaps,V=M.isVideoTexture!==!0,Dt=Yt.__version===void 0||St===!0,Rt=ut.dataReady,Ct=F(M,bt);if(M.isDepthTexture)Vt=B(M.format===Qo,M.type),Dt&&(V?i.texStorage2D(o.TEXTURE_2D,1,Vt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,bt.width,bt.height,0,Et,jt,null));else if(M.isDataTexture)if(ie.length>0){V&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,ie[0].width,ie[0].height);for(let Mt=0,vt=ie.length;Mt<vt;Mt++)Pt=ie[Mt],V?Rt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Et,jt,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Pt.width,Pt.height,0,Et,jt,Pt.data);M.generateMipmaps=!1}else V?(Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,bt.width,bt.height),Rt&&Ot(M,bt,Et,jt)):i.texImage2D(o.TEXTURE_2D,0,Vt,bt.width,bt.height,0,Et,jt,bt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Vt,ie[0].width,ie[0].height,bt.depth);for(let Mt=0,vt=ie.length;Mt<vt;Mt++)if(Pt=ie[Mt],M.format!==Ri)if(Et!==null)if(V){if(Rt)if(M.layerUpdates.size>0){const It=Mg(Pt.width,Pt.height,M.format,M.type);for(const ae of M.layerUpdates){const He=Pt.data.subarray(ae*It/Pt.data.BYTES_PER_ELEMENT,(ae+1)*It/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ae,Pt.width,Pt.height,1,Et,He)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,bt.depth,Et,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Vt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,bt.depth,Et,jt,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Vt,Pt.width,Pt.height,bt.depth,0,Et,jt,Pt.data)}else{V&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,ie[0].width,ie[0].height);for(let Mt=0,vt=ie.length;Mt<vt;Mt++)Pt=ie[Mt],M.format!==Ri?Et!==null?V?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Et,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Vt,Pt.width,Pt.height,0,Pt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Rt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,Et,jt,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Pt.width,Pt.height,0,Et,jt,Pt.data)}else if(M.isDataArrayTexture)if(V){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Vt,bt.width,bt.height,bt.depth),Rt)if(M.layerUpdates.size>0){const Mt=Mg(bt.width,bt.height,M.format,M.type);for(const vt of M.layerUpdates){const It=bt.data.subarray(vt*Mt/bt.data.BYTES_PER_ELEMENT,(vt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Et,jt,It)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Et,jt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,bt.width,bt.height,bt.depth,0,Et,jt,bt.data);else if(M.isData3DTexture)V?(Dt&&i.texStorage3D(o.TEXTURE_3D,Ct,Vt,bt.width,bt.height,bt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Et,jt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,bt.width,bt.height,bt.depth,0,Et,jt,bt.data);else if(M.isFramebufferTexture){if(Dt)if(V)i.texStorage2D(o.TEXTURE_2D,Ct,Vt,bt.width,bt.height);else{let Mt=bt.width,vt=bt.height;for(let It=0;It<Ct;It++)i.texImage2D(o.TEXTURE_2D,It,Vt,Mt,vt,0,Et,jt,null),Mt>>=1,vt>>=1}}else if(ie.length>0){if(V&&Dt){const Mt=se(ie[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Vt,Mt.width,Mt.height)}for(let Mt=0,vt=ie.length;Mt<vt;Mt++)Pt=ie[Mt],V?Rt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Et,jt,Pt):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Et,jt,Pt);M.generateMipmaps=!1}else if(V){if(Dt){const Mt=se(bt);i.texStorage2D(o.TEXTURE_2D,Ct,Vt,Mt.width,Mt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,jt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Et,jt,bt);b(M)&&v(xt),Yt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ft(N,M,tt){if(M.image.length!==6)return;const xt=yt(N,M),St=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+tt);const ut=s.get(St);if(St.version!==ut.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const Yt=Ne.getPrimaries(Ne.workingColorSpace),Lt=M.colorSpace===ts?null:Ne.getPrimaries(M.colorSpace),Jt=M.colorSpace===ts||Yt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,bt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let vt=0;vt<6;vt++)!qt&&!bt?Et[vt]=C(M.image[vt],!0,l.maxCubemapSize):Et[vt]=bt?M.image[vt].image:M.image[vt],Et[vt]=Zt(M,Et[vt]);const jt=Et[0],Vt=c.convert(M.format,M.colorSpace),Pt=c.convert(M.type),ie=D(M.internalFormat,Vt,Pt,M.colorSpace),V=M.isVideoTexture!==!0,Dt=ut.__version===void 0||xt===!0,Rt=St.dataReady;let Ct=F(M,jt);Q(o.TEXTURE_CUBE_MAP,M);let Mt;if(qt){V&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,ie,jt.width,jt.height);for(let vt=0;vt<6;vt++){Mt=Et[vt].mipmaps;for(let It=0;It<Mt.length;It++){const ae=Mt[It];M.format!==Ri?Vt!==null?V?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ae.width,ae.height,Vt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,ie,ae.width,ae.height,0,ae.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,0,0,ae.width,ae.height,Vt,Pt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It,ie,ae.width,ae.height,0,Vt,Pt,ae.data)}}}else{if(Mt=M.mipmaps,V&&Dt){Mt.length>0&&Ct++;const vt=se(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,ie,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Et[vt].width,Et[vt].height,Vt,Pt,Et[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Et[vt].width,Et[vt].height,0,Vt,Pt,Et[vt].data);for(let It=0;It<Mt.length;It++){const He=Mt[It].image[vt].image;V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,He.width,He.height,Vt,Pt,He.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,ie,He.width,He.height,0,Vt,Pt,He.data)}}else{V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt,Pt,Et[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Vt,Pt,Et[vt]);for(let It=0;It<Mt.length;It++){const ae=Mt[It];V?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,0,0,Vt,Pt,ae.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It+1,ie,Vt,Pt,ae.image[vt])}}}b(M)&&v(o.TEXTURE_CUBE_MAP),ut.__version=St.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function wt(N,M,tt,xt,St,ut){const Yt=c.convert(tt.format,tt.colorSpace),Lt=c.convert(tt.type),Jt=D(tt.internalFormat,Yt,Lt,tt.colorSpace),qt=s.get(M),bt=s.get(tt);if(bt.__renderTarget=M,!qt.__hasExternalTextures){const Et=Math.max(1,M.width>>ut),jt=Math.max(1,M.height>>ut);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,Jt,Et,jt,M.depth,0,Yt,Lt,null):i.texImage2D(St,ut,Jt,Et,jt,0,Yt,Lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Gt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,St,bt.__webglTexture,0,Ie(M)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,St,bt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(N,M,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),M.depthBuffer){const xt=M.depthTexture,St=xt&&xt.isDepthTexture?xt.type:null,ut=B(M.stencilBuffer,St),Yt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=Ie(M);Gt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,ut,M.width,M.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,ut,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ut,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,N)}else{const xt=M.textures;for(let St=0;St<xt.length;St++){const ut=xt[St],Yt=c.convert(ut.format,ut.colorSpace),Lt=c.convert(ut.type),Jt=D(ut.internalFormat,Yt,Lt,ut.colorSpace),qt=Ie(M);tt&&Gt(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Jt,M.width,M.height):Gt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Jt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(N,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(M.depthTexture);xt.__renderTarget=M,(!xt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),rt(M.depthTexture,0);const St=xt.__webglTexture,ut=Ie(M);if(M.depthTexture.format===Ko)Gt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(M.depthTexture.format===Qo)Gt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function ce(N){const M=s.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const xt=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),xt){const St=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,xt.removeEventListener("dispose",St)};xt.addEventListener("dispose",St),M.__depthDisposeCallback=St}M.__boundDepthTexture=xt}if(N.depthTexture&&!M.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const xt=N.texture.mipmaps;xt&&xt.length>0?Wt(M.__webglFramebuffer[0],N):Wt(M.__webglFramebuffer,N)}else if(tt){M.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[xt]),M.__webglDepthbuffer[xt]===void 0)M.__webglDepthbuffer[xt]=o.createRenderbuffer(),Ht(M.__webglDepthbuffer[xt],N,!1);else{const St=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}else{const xt=N.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ht(M.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function rn(N,M,tt){const xt=s.get(N);M!==void 0&&wt(xt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&ce(N)}function he(N){const M=N.texture,tt=s.get(N),xt=s.get(M);N.addEventListener("dispose",O);const St=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Yt=St.length>1;if(Yt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=M.version,d.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(M.mipmaps&&M.mipmaps.length>0){tt.__webglFramebuffer[Lt]=[];for(let Jt=0;Jt<M.mipmaps.length;Jt++)tt.__webglFramebuffer[Lt][Jt]=o.createFramebuffer()}else tt.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Lt=0;Lt<M.mipmaps.length;Lt++)tt.__webglFramebuffer[Lt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Lt=0,Jt=St.length;Lt<Jt;Lt++){const qt=s.get(St[Lt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Gt(N)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Jt=St[Lt];tt.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt]);const qt=c.convert(Jt.format,Jt.colorSpace),bt=c.convert(Jt.type),Et=D(Jt.internalFormat,qt,bt,Jt.colorSpace,N.isXRRenderTarget===!0),jt=Ie(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Et,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Q(o.TEXTURE_CUBE_MAP,M);for(let Lt=0;Lt<6;Lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Jt=0;Jt<M.mipmaps.length;Jt++)wt(tt.__webglFramebuffer[Lt][Jt],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Jt);else wt(tt.__webglFramebuffer[Lt],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);b(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Lt=0,Jt=St.length;Lt<Jt;Lt++){const qt=St[Lt],bt=s.get(qt);let Et=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,bt.__webglTexture),Q(Et,qt),wt(tt.__webglFramebuffer,N,qt,o.COLOR_ATTACHMENT0+Lt,Et,0),b(qt)&&v(Et)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,xt.__webglTexture),Q(Lt,M),M.mipmaps&&M.mipmaps.length>0)for(let Jt=0;Jt<M.mipmaps.length;Jt++)wt(tt.__webglFramebuffer[Jt],N,M,o.COLOR_ATTACHMENT0,Lt,Jt);else wt(tt.__webglFramebuffer,N,M,o.COLOR_ATTACHMENT0,Lt,0);b(M)&&v(Lt),i.unbindTexture()}N.depthBuffer&&ce(N)}function Ce(N){const M=N.textures;for(let tt=0,xt=M.length;tt<xt;tt++){const St=M[tt];if(b(St)){const ut=P(N),Yt=s.get(St).__webglTexture;i.bindTexture(ut,Yt),v(ut),i.unbindTexture()}}}const G=[],pe=[];function xe(N){if(N.samples>0){if(Gt(N)===!1){const M=N.textures,tt=N.width,xt=N.height;let St=o.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=s.get(N),Lt=M.length>1;if(Lt)for(let qt=0;qt<M.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Jt=N.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let qt=0;qt<M.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const bt=s.get(M[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,tt,xt,0,0,tt,xt,St,o.NEAREST),m===!0&&(G.length=0,pe.length=0,G.push(o.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(G.push(ut),pe.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,G))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let qt=0;qt<M.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[qt]);const bt=s.get(M[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Ie(N){return Math.min(l.maxSamples,N.samples)}function Gt(N){const M=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qe(N){const M=d.render.frame;g.get(N)!==M&&(g.set(N,M),N.update())}function Zt(N,M){const tt=N.colorSpace,xt=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Br&&tt!==ts&&(Ne.getTransfer(tt)===Xe?(xt!==Ri||St!==Bi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",tt)),M}function se(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=rt,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=rn,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Gt}function ST(o,e){function i(s,l=ts){let c;const d=Ne.getTransfer(l);if(s===Bi)return o.UNSIGNED_BYTE;if(s===Wh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===qh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===c_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===u_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===o_)return o.BYTE;if(s===l_)return o.SHORT;if(s===jo)return o.UNSIGNED_SHORT;if(s===Xh)return o.INT;if(s===Os)return o.UNSIGNED_INT;if(s===ma)return o.FLOAT;if(s===Hr)return o.HALF_FLOAT;if(s===f_)return o.ALPHA;if(s===d_)return o.RGB;if(s===Ri)return o.RGBA;if(s===Ko)return o.DEPTH_COMPONENT;if(s===Qo)return o.DEPTH_STENCIL;if(s===h_)return o.RED;if(s===Yh)return o.RED_INTEGER;if(s===jh)return o.RG;if(s===Zh)return o.RG_INTEGER;if(s===Kh)return o.RGBA_INTEGER;if(s===Gc||s===Vc||s===kc||s===Xc)if(d===Xe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===uh||s===fh||s===dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hh||s===ph||s===mh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hh||s===ph)return d===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xh||s===gh||s===_h||s===vh||s===yh||s===Sh||s===bh||s===Mh||s===Eh||s===Th||s===Ah||s===Rh||s===Ch||s===wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===xh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_h)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Th)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ah)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ch)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wh)return d===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dh||s===Uh||s===Lh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Dh)return d===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nh||s===Oh||s===Ph||s===zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ph)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ET{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new A_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Sa({vertexShader:bT,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ya(new tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends Gr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,y=null,S=null,T=null;const C=typeof XRWebGLBinding<"u",b=new ET,v={},P=i.getContextAttributes();let D=null,B=null;const F=[],U=[],O=new ve;let K=null;const w=new gi;w.viewport=new an;const A=new gi;A.viewport=new an;const z=[w,A],X=new Xb;let J=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ft=F[at];return ft===void 0&&(ft=new Hd,F[at]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(at){let ft=F[at];return ft===void 0&&(ft=new Hd,F[at]=ft),ft.getGripSpace()},this.getHand=function(at){let ft=F[at];return ft===void 0&&(ft=new Hd,F[at]=ft),ft.getHandSpace()};function rt(at){const ft=U.indexOf(at.inputSource);if(ft===-1)return;const wt=F[ft];wt!==void 0&&(wt.update(at.inputSource,at.frame,p||d),wt.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",q);for(let at=0;at<F.length;at++){const ft=U[at];ft!==null&&(U[at]=null,F[at].disconnect(ft))}J=null,dt=null,b.reset();for(const at in v)delete v[at];e.setRenderTarget(D),S=null,y=null,x=null,l=null,B=null,Ot.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",I),l.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Wt=null;P.depth&&(Wt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=P.stencil?Qo:Ko,Ht=P.stencil?Zo:Os);const ce={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:c};x=this.getBinding(),y=x.createProjectionLayer(ce),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),B=new Ps(y.textureWidth,y.textureHeight,{format:Ri,type:Bi,depthTexture:new T_(y.textureWidth,y.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const wt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),B=new Ps(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function q(at){for(let ft=0;ft<at.removed.length;ft++){const wt=at.removed[ft],Ht=U.indexOf(wt);Ht>=0&&(U[Ht]=null,F[Ht].disconnect(wt))}for(let ft=0;ft<at.added.length;ft++){const wt=at.added[ft];let Ht=U.indexOf(wt);if(Ht===-1){for(let ce=0;ce<F.length;ce++)if(ce>=U.length){U.push(wt),Ht=ce;break}else if(U[ce]===null){U[ce]=wt,Ht=ce;break}if(Ht===-1)break}const Wt=F[Ht];Wt&&Wt.connect(wt)}}const W=new lt,mt=new lt;function _t(at,ft,wt){W.setFromMatrixPosition(ft.matrixWorld),mt.setFromMatrixPosition(wt.matrixWorld);const Ht=W.distanceTo(mt),Wt=ft.projectionMatrix.elements,ce=wt.projectionMatrix.elements,rn=Wt[14]/(Wt[10]-1),he=Wt[14]/(Wt[10]+1),Ce=(Wt[9]+1)/Wt[5],G=(Wt[9]-1)/Wt[5],pe=(Wt[8]-1)/Wt[0],xe=(ce[8]+1)/ce[0],Ie=rn*pe,Gt=rn*xe,qe=Ht/(-pe+xe),Zt=qe*-pe;if(ft.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Zt),at.translateZ(qe),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Wt[10]===-1)at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const se=rn+qe,N=he+qe,M=Ie-Zt,tt=Gt+(Ht-Zt),xt=Ce*he/N*se,St=G*he/N*se;at.projectionMatrix.makePerspective(M,tt,xt,St,se,N),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function L(at,ft){ft===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ft.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let ft=at.near,wt=at.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(wt=b.depthFar)),X.near=A.near=w.near=ft,X.far=A.far=w.far=wt,(J!==X.near||dt!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),J=X.near,dt=X.far),X.layers.mask=at.layers.mask|6,w.layers.mask=X.layers.mask&3,A.layers.mask=X.layers.mask&5;const Ht=at.parent,Wt=X.cameras;L(X,Ht);for(let ce=0;ce<Wt.length;ce++)L(Wt[ce],Ht);Wt.length===2?_t(X,w,A):X.projectionMatrix.copy(w.projectionMatrix),Q(at,X,Ht)};function Q(at,ft,wt){wt===null?at.matrix.copy(ft.matrixWorld):(at.matrix.copy(wt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ft.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Bh*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(at){m=at,y!==null&&(y.fixedFoveation=at),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=at)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(X)},this.getCameraTexture=function(at){return v[at]};let yt=null;function Tt(at,ft){if(g=ft.getViewerPose(p||d),T=ft,g!==null){const wt=g.views;S!==null&&(e.setRenderTargetFramebuffer(B,S.framebuffer),e.setRenderTarget(B));let Ht=!1;wt.length!==X.cameras.length&&(X.cameras.length=0,Ht=!0);for(let he=0;he<wt.length;he++){const Ce=wt[he];let G=null;if(S!==null)G=S.getViewport(Ce);else{const xe=x.getViewSubImage(y,Ce);G=xe.viewport,he===0&&(e.setRenderTargetTextures(B,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(B))}let pe=z[he];pe===void 0&&(pe=new gi,pe.layers.enable(he),pe.viewport=new an,z[he]=pe),pe.matrix.fromArray(Ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(G.x,G.y,G.width,G.height),he===0&&(X.matrix.copy(pe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ht===!0&&X.cameras.push(pe)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const he=x.getDepthInformation(wt[0]);he&&he.isValid&&he.texture&&b.init(he,l.renderState)}if(Wt&&Wt.includes("camera-access")&&C){e.state.unbindTexture(),x=s.getBinding();for(let he=0;he<wt.length;he++){const Ce=wt[he].camera;if(Ce){let G=v[Ce];G||(G=new A_,v[Ce]=G);const pe=x.getCameraImage(Ce);G.sourceTexture=pe}}}}for(let wt=0;wt<F.length;wt++){const Ht=U[wt],Wt=F[wt];Ht!==null&&Wt!==void 0&&Wt.update(Ht,ft,p||d)}yt&&yt(at,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),T=null}const Ot=new w_;Ot.setAnimationLoop(Tt),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const ws=new va,AT=new sn;function RT(o,e){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function s(b,v){v.color.getRGB(b.fogColor.value,S_(o)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,P,D,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(b,v):v.isMeshToonMaterial?(c(b,v),x(b,v)):v.isMeshPhongMaterial?(c(b,v),g(b,v)):v.isMeshStandardMaterial?(c(b,v),y(b,v),v.isMeshPhysicalMaterial&&S(b,v,B)):v.isMeshMatcapMaterial?(c(b,v),T(b,v)):v.isMeshDepthMaterial?c(b,v):v.isMeshDistanceMaterial?(c(b,v),C(b,v)):v.isMeshNormalMaterial?c(b,v):v.isLineBasicMaterial?(d(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,P,D):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===jn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===jn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const P=e.get(v),D=P.envMap,B=P.envMapRotation;D&&(b.envMap.value=D,ws.copy(B),ws.x*=-1,ws.y*=-1,ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),b.envMapRotation.value.setFromMatrix4(AT.makeRotationFromEuler(ws)),b.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,P,D){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*P,b.scale.value=D*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function g(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function x(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function y(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function S(b,v,P){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,v){v.matcap&&(b.matcap.value=v.matcap)}function C(b,v){const P=e.get(v).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function CT(o,e,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,D){const B=D.program;s.uniformBlockBinding(P,B)}function p(P,D){let B=l[P.id];B===void 0&&(T(P),B=g(P),l[P.id]=B,P.addEventListener("dispose",b));const F=D.program;s.updateUBOMapping(P,F);const U=e.render.frame;c[P.id]!==U&&(y(P),c[P.id]=U)}function g(P){const D=x();P.__bindingPointIndex=D;const B=o.createBuffer(),F=P.__size,U=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,F,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,B),B}function x(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const D=l[P.id],B=P.uniforms,F=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let U=0,O=B.length;U<O;U++){const K=Array.isArray(B[U])?B[U]:[B[U]];for(let w=0,A=K.length;w<A;w++){const z=K[w];if(S(z,U,w,F)===!0){const X=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let dt=0;for(let rt=0;rt<J.length;rt++){const I=J[rt],q=C(I);typeof I=="number"||typeof I=="boolean"?(z.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,X+dt,z.__data)):I.isMatrix3?(z.__data[0]=I.elements[0],z.__data[1]=I.elements[1],z.__data[2]=I.elements[2],z.__data[3]=0,z.__data[4]=I.elements[3],z.__data[5]=I.elements[4],z.__data[6]=I.elements[5],z.__data[7]=0,z.__data[8]=I.elements[6],z.__data[9]=I.elements[7],z.__data[10]=I.elements[8],z.__data[11]=0):(I.toArray(z.__data,dt),dt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,X,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(P,D,B,F){const U=P.value,O=D+"_"+B;if(F[O]===void 0)return typeof U=="number"||typeof U=="boolean"?F[O]=U:F[O]=U.clone(),!0;{const K=F[O];if(typeof U=="number"||typeof U=="boolean"){if(K!==U)return F[O]=U,!0}else if(K.equals(U)===!1)return K.copy(U),!0}return!1}function T(P){const D=P.uniforms;let B=0;const F=16;for(let O=0,K=D.length;O<K;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let A=0,z=w.length;A<z;A++){const X=w[A],J=Array.isArray(X.value)?X.value:[X.value];for(let dt=0,rt=J.length;dt<rt;dt++){const I=J[dt],q=C(I),W=B%F,mt=W%q.boundary,_t=W+mt;B+=mt,_t!==0&&F-_t<q.storage&&(B+=F-_t),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=B,B+=q.storage}}}const U=B%F;return U>0&&(B+=F-U),P.__size=B,P.__cache={},this}function C(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",P),D}function b(P){const D=P.target;D.removeEventListener("dispose",b);const B=d.indexOf(D.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const wT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fa=null;function DT(){return fa===null&&(fa=new Db(wT,32,32,jh,Hr),fa.minFilter=ri,fa.magFilter=ri,fa.wrapS=pa,fa.wrapT=pa,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class UT{constructor(e={}){const{canvas:i=tb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=d;const T=new Set([Kh,Zh,Yh]),C=new Set([Bi,Os,jo,Zo,Wh,qh]),b=new Uint32Array(4),v=new Int32Array(4);let P=null,D=null;const B=[],F=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let O=!1;this._outputColorSpace=Gn;let K=0,w=0,A=null,z=-1,X=null;const J=new an,dt=new an;let rt=null;const I=new Pe(0);let q=0,W=i.width,mt=i.height,_t=1,L=null,Q=null;const yt=new an(0,0,W,mt),Tt=new an(0,0,W,mt);let Ot=!1;const at=new tp;let ft=!1,wt=!1;const Ht=new sn,Wt=new lt,ce=new an,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Ce(){return A===null?_t:1}let G=s;function pe(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",It,!1),G===null){const Y="webgl2";if(G=pe(Y,R),G===null)throw pe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let xe,Ie,Gt,qe,Zt,se,N,M,tt,xt,St,ut,Yt,Lt,Jt,qt,bt,Et,jt,Vt,Pt,ie,V,Dt;function Rt(){xe=new F3(G),xe.init(),ie=new ST(G,xe),Ie=new D3(G,xe,e,ie),Gt=new vT(G,xe),Ie.reversedDepthBuffer&&y&&Gt.buffers.depth.setReversed(!0),qe=new V3(G),Zt=new rT,se=new yT(G,xe,Gt,Zt,Ie,ie,qe),N=new L3(U),M=new B3(U),tt=new qb(G),V=new C3(G,tt),xt=new H3(G,tt,qe,V),St=new X3(G,xt,tt,qe),jt=new k3(G,Ie,se),qt=new U3(Zt),ut=new sT(U,N,M,xe,Ie,V,qt),Yt=new RT(U,Zt),Lt=new lT,Jt=new pT(xe),Et=new R3(U,N,M,Gt,St,S,m),bt=new gT(U,St,Ie),Dt=new CT(G,qe,Ie,Gt),Vt=new w3(G,xe,qe),Pt=new G3(G,xe,qe),qe.programs=ut.programs,U.capabilities=Ie,U.extensions=xe,U.properties=Zt,U.renderLists=Lt,U.shadowMap=bt,U.state=Gt,U.info=qe}Rt();const Ct=new TT(U,G);this.xr=Ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(W,mt,!1))},this.getSize=function(R){return R.set(W,mt)},this.setSize=function(R,Y,st=!0){if(Ct.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,mt=Y,i.width=Math.floor(R*_t),i.height=Math.floor(Y*_t),st===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(W*_t,mt*_t).floor()},this.setDrawingBufferSize=function(R,Y,st){W=R,mt=Y,_t=st,i.width=Math.floor(R*st),i.height=Math.floor(Y*st),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(J)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,Y,st,nt){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,st,nt),Gt.viewport(J.copy(yt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(Tt)},this.setScissor=function(R,Y,st,nt){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,Y,st,nt),Gt.scissor(dt.copy(Tt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(R){Gt.setScissorTest(Ot=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,st=!0){let nt=0;if(R){let Z=!1;if(A!==null){const At=A.texture.format;Z=T.has(At)}if(Z){const At=A.texture.type,Ut=C.has(At),zt=Et.getClearColor(),Bt=Et.getClearAlpha(),te=zt.r,ne=zt.g,Kt=zt.b;Ut?(b[0]=te,b[1]=ne,b[2]=Kt,b[3]=Bt,G.clearBufferuiv(G.COLOR,0,b)):(v[0]=te,v[1]=ne,v[2]=Kt,v[3]=Bt,G.clearBufferiv(G.COLOR,0,v))}else nt|=G.COLOR_BUFFER_BIT}Y&&(nt|=G.DEPTH_BUFFER_BIT),st&&(nt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",It,!1),Et.dispose(),Lt.dispose(),Jt.dispose(),Zt.dispose(),N.dispose(),M.dispose(),St.dispose(),V.dispose(),Dt.dispose(),ut.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",kr),Ct.removeEventListener("sessionend",Xr),vi.stop()};function Mt(R){R.preventDefault(),Qc("WebGLRenderer: Context Lost."),O=!0}function vt(){Qc("WebGLRenderer: Context Restored."),O=!1;const R=qe.autoReset,Y=bt.enabled,st=bt.autoUpdate,nt=bt.needsUpdate,Z=bt.type;Rt(),qe.autoReset=R,bt.enabled=Y,bt.autoUpdate=st,bt.needsUpdate=nt,bt.type=Z}function It(R){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const Y=R.target;Y.removeEventListener("dispose",ae),He(Y)}function He(R){we(R),Zt.remove(R)}function we(R){const Y=Zt.get(R).programs;Y!==void 0&&(Y.forEach(function(st){ut.releaseProgram(st)}),R.isShaderMaterial&&ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,st,nt,Z,At){Y===null&&(Y=rn);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=au(R,Y,st,nt,Z);Gt.setMaterial(nt,Ut);let Bt=st.index,te=1;if(nt.wireframe===!0){if(Bt=xt.getWireframeAttribute(st),Bt===void 0)return;te=2}const ne=st.drawRange,Kt=st.attributes.position;let ue=ne.start*te,Ae=(ne.start+ne.count)*te;At!==null&&(ue=Math.max(ue,At.start*te),Ae=Math.min(Ae,(At.start+At.count)*te)),Bt!==null?(ue=Math.max(ue,0),Ae=Math.min(Ae,Bt.count)):Kt!=null&&(ue=Math.max(ue,0),Ae=Math.min(Ae,Kt.count));const De=Ae-ue;if(De<0||De===1/0)return;V.setup(Z,nt,zt,st,Bt);let be,ze=Vt;if(Bt!==null&&(be=tt.get(Bt),ze=Pt,ze.setIndex(be)),Z.isMesh)nt.wireframe===!0?(Gt.setLineWidth(nt.wireframeLinewidth*Ce()),ze.setMode(G.LINES)):ze.setMode(G.TRIANGLES);else if(Z.isLine){let $t=nt.linewidth;$t===void 0&&($t=1),Gt.setLineWidth($t*Ce()),Z.isLineSegments?ze.setMode(G.LINES):Z.isLineLoop?ze.setMode(G.LINE_LOOP):ze.setMode(G.LINE_STRIP)}else Z.isPoints?ze.setMode(G.POINTS):Z.isSprite&&ze.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))ze.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $t=Z._multiDrawStarts,Ye=Z._multiDrawCounts,Me=Z._multiDrawCount,yn=Bt?tt.get(Bt).bytesPerElement:1,Ma=Zt.get(nt).currentProgram.getUniforms();for(let Ze=0;Ze<Me;Ze++)Ma.setValue(G,"_gl_DrawID",Ze),ze.render($t[Ze]/yn,Ye[Ze])}else if(Z.isInstancedMesh)ze.renderInstances(ue,De,Z.count);else if(st.isInstancedBufferGeometry){const $t=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,$t);ze.renderInstances(ue,De,Ye)}else ze.render(ue,De)};function Nn(R,Y,st){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,mn(R,Y,st),R.side=_a,R.needsUpdate=!0,mn(R,Y,st),R.side=ha):mn(R,Y,st)}this.compile=function(R,Y,st=null){st===null&&(st=R),D=Jt.get(st),D.init(Y),F.push(D),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights();const nt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const At=Z.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const zt=At[Ut];Nn(zt,st,Z),nt.add(zt)}else Nn(At,st,Z),nt.add(At)}),D=F.pop(),nt},this.compileAsync=function(R,Y,st=null){const nt=this.compile(R,Y,st);return new Promise(Z=>{function At(){if(nt.forEach(function(Ut){Zt.get(Ut).currentProgram.isReady()&&nt.delete(Ut)}),nt.size===0){Z(R);return}setTimeout(At,10)}xe.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Zn=null;function sl(R){Zn&&Zn(R)}function kr(){vi.stop()}function Xr(){vi.start()}const vi=new w_;vi.setAnimationLoop(sl),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){Zn=R,Ct.setAnimationLoop(R),R===null?vi.stop():vi.start()},Ct.addEventListener("sessionstart",kr),Ct.addEventListener("sessionend",Xr),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,Y,A),D=Jt.get(R,F.length),D.init(Y),F.push(D),Ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),at.setFromProjectionMatrix(Ht,zi,Y.reversedDepth),wt=this.localClippingEnabled,ft=qt.init(this.clippingPlanes,wt),P=Lt.get(R,B.length),P.init(),B.push(P),Ct.enabled===!0&&Ct.isPresenting===!0){const At=U.xr.getDepthSensingMesh();At!==null&&rs(At,Y,-1/0,U.sortObjects)}rs(R,Y,0,U.sortObjects),P.finish(),U.sortObjects===!0&&P.sort(L,Q),he=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,he&&Et.addToRenderList(P,R),this.info.render.frame++,ft===!0&&qt.beginShadows();const st=D.state.shadowsArray;bt.render(st,R,Y),ft===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=P.opaque,Z=P.transmissive;if(D.setupLights(),Y.isArrayCamera){const At=Y.cameras;if(Z.length>0)for(let Ut=0,zt=At.length;Ut<zt;Ut++){const Bt=At[Ut];qr(nt,Z,R,Bt)}he&&Et.render(R);for(let Ut=0,zt=At.length;Ut<zt;Ut++){const Bt=At[Ut];Wr(P,R,Bt,Bt.viewport)}}else Z.length>0&&qr(nt,Z,R,Y),he&&Et.render(R),Wr(P,R,Y);A!==null&&w===0&&(se.updateMultisampleRenderTarget(A),se.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(U,R,Y),V.resetDefaultState(),z=-1,X=null,F.pop(),F.length>0?(D=F[F.length-1],ft===!0&&qt.setGlobalState(U.clippingPlanes,D.state.camera)):D=null,B.pop(),B.length>0?P=B[B.length-1]:P=null};function rs(R,Y,st,nt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||at.intersectsSprite(R)){nt&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ht);const Ut=St.update(R),zt=R.material;zt.visible&&P.push(R,Ut,zt,st,ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||at.intersectsObject(R))){const Ut=St.update(R),zt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ce.copy(Ut.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ht)),Array.isArray(zt)){const Bt=Ut.groups;for(let te=0,ne=Bt.length;te<ne;te++){const Kt=Bt[te],ue=zt[Kt.materialIndex];ue&&ue.visible&&P.push(R,Ut,ue,st,ce.z,Kt)}}else zt.visible&&P.push(R,Ut,zt,st,ce.z,null)}}const At=R.children;for(let Ut=0,zt=At.length;Ut<zt;Ut++)rs(At[Ut],Y,st,nt)}function Wr(R,Y,st,nt){const{opaque:Z,transmissive:At,transparent:Ut}=R;D.setupLightsView(st),ft===!0&&qt.setGlobalState(U.clippingPlanes,st),nt&&Gt.viewport(J.copy(nt)),Z.length>0&&Kn(Z,Y,st),At.length>0&&Kn(At,Y,st),Ut.length>0&&Kn(Ut,Y,st),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function qr(R,Y,st,nt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[nt.id]===void 0&&(D.state.transmissionRenderTarget[nt.id]=new Ps(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Hr:Bi,minFilter:es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const At=D.state.transmissionRenderTarget[nt.id],Ut=nt.viewport||J;At.setSize(Ut.z*U.transmissionResolutionScale,Ut.w*U.transmissionResolutionScale);const zt=U.getRenderTarget(),Bt=U.getActiveCubeFace(),te=U.getActiveMipmapLevel();U.setRenderTarget(At),U.getClearColor(I),q=U.getClearAlpha(),q<1&&U.setClearColor(16777215,.5),U.clear(),he&&Et.render(st);const ne=U.toneMapping;U.toneMapping=is;const Kt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),D.setupLightsView(nt),ft===!0&&qt.setGlobalState(U.clippingPlanes,nt),Kn(R,st,nt),se.updateMultisampleRenderTarget(At),se.updateRenderTargetMipmap(At),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ae=0,De=Y.length;Ae<De;Ae++){const be=Y[Ae],{object:ze,geometry:$t,material:Ye,group:Me}=be;if(Ye.side===ha&&ze.layers.test(nt.layers)){const yn=Ye.side;Ye.side=jn,Ye.needsUpdate=!0,cn(ze,st,nt,$t,Ye,Me),Ye.side=yn,Ye.needsUpdate=!0,ue=!0}}ue===!0&&(se.updateMultisampleRenderTarget(At),se.updateRenderTargetMipmap(At))}U.setRenderTarget(zt,Bt,te),U.setClearColor(I,q),Kt!==void 0&&(nt.viewport=Kt),U.toneMapping=ne}function Kn(R,Y,st){const nt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,At=R.length;Z<At;Z++){const Ut=R[Z],{object:zt,geometry:Bt,group:te}=Ut;let ne=Ut.material;ne.allowOverride===!0&&nt!==null&&(ne=nt),zt.layers.test(st.layers)&&cn(zt,Y,st,Bt,ne,te)}}function cn(R,Y,st,nt,Z,At){R.onBeforeRender(U,Y,st,nt,Z,At),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,Y,st,nt,R,At),Z.transparent===!0&&Z.side===ha&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,U.renderBufferDirect(st,Y,nt,Z,R,At),Z.side=_a,Z.needsUpdate=!0,U.renderBufferDirect(st,Y,nt,Z,R,At),Z.side=ha):U.renderBufferDirect(st,Y,nt,Z,R,At),R.onAfterRender(U,Y,st,nt,Z,At)}function mn(R,Y,st){Y.isScene!==!0&&(Y=rn);const nt=Zt.get(R),Z=D.state.lights,At=D.state.shadowsArray,Ut=Z.state.version,zt=ut.getParameters(R,Z.state,At,Y,st),Bt=ut.getProgramCacheKey(zt);let te=nt.programs;nt.environment=R.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(R.isMeshStandardMaterial?M:N).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",ae),te=new Map,nt.programs=te);let ne=te.get(Bt);if(ne!==void 0){if(nt.currentProgram===ne&&nt.lightsStateVersion===Ut)return zs(R,zt),ne}else zt.uniforms=ut.getUniforms(R),R.onBeforeCompile(zt,U),ne=ut.acquireProgram(zt,Bt),te.set(Bt,ne),nt.uniforms=zt.uniforms;const Kt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=qt.uniform),zs(R,zt),nt.needsLights=rl(R),nt.lightsStateVersion=Ut,nt.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.directionalShadowMap.value=Z.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotShadowMap.value=Z.state.spotShadowMap,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMap.value=Z.state.pointShadowMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=ne,nt.uniformsList=null,ne}function Hi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Wc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function zs(R,Y){const st=Zt.get(R);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function au(R,Y,st,nt,Z){Y.isScene!==!0&&(Y=rn),se.resetTextureUnits();const At=Y.fog,Ut=nt.isMeshStandardMaterial?Y.environment:null,zt=A===null?U.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Br,Bt=(nt.isMeshStandardMaterial?M:N).get(nt.envMap||Ut),te=nt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ne=!!st.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Kt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Ae=!!st.morphAttributes.color;let De=is;nt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(De=U.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ze=be!==void 0?be.length:0,$t=Zt.get(nt),Ye=D.state.lights;if(ft===!0&&(wt===!0||R!==X)){const bn=R===X&&nt.id===z;qt.setState(nt,R,bn)}let Me=!1;nt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ye.state.version||$t.outputColorSpace!==zt||Z.isBatchedMesh&&$t.batching===!1||!Z.isBatchedMesh&&$t.batching===!0||Z.isBatchedMesh&&$t.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&$t.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&$t.instancing===!1||!Z.isInstancedMesh&&$t.instancing===!0||Z.isSkinnedMesh&&$t.skinning===!1||!Z.isSkinnedMesh&&$t.skinning===!0||Z.isInstancedMesh&&$t.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$t.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$t.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$t.instancingMorph===!1&&Z.morphTexture!==null||$t.envMap!==Bt||nt.fog===!0&&$t.fog!==At||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==qt.numPlanes||$t.numIntersection!==qt.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==ne||$t.morphTargets!==Kt||$t.morphNormals!==ue||$t.morphColors!==Ae||$t.toneMapping!==De||$t.morphTargetsCount!==ze)&&(Me=!0):(Me=!0,$t.__version=nt.version);let yn=$t.currentProgram;Me===!0&&(yn=mn(nt,Y,Z));let Ma=!1,Ze=!1,Gi=!1;const Ke=yn.getUniforms(),Sn=$t.uniforms;if(Gt.useProgram(yn.program)&&(Ma=!0,Ze=!0,Gi=!0),nt.id!==z&&(z=nt.id,Ze=!0),Ma||X!==R){Gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(G,"projectionMatrix",R.projectionMatrix),Ke.setValue(G,"viewMatrix",R.matrixWorldInverse);const An=Ke.map.cameraPosition;An!==void 0&&An.setValue(G,Wt.setFromMatrixPosition(R.matrixWorld)),Ie.logarithmicDepthBuffer&&Ke.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ke.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,Ze=!0,Gi=!0)}if(Z.isSkinnedMesh){Ke.setOptional(G,Z,"bindMatrix"),Ke.setOptional(G,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ke.setValue(G,"boneTexture",bn.boneTexture,se))}Z.isBatchedMesh&&(Ke.setOptional(G,Z,"batchingTexture"),Ke.setValue(G,"batchingTexture",Z._matricesTexture,se),Ke.setOptional(G,Z,"batchingIdTexture"),Ke.setValue(G,"batchingIdTexture",Z._indirectTexture,se),Ke.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ke.setValue(G,"batchingColorTexture",Z._colorsTexture,se));const xn=st.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&jt.update(Z,st,yn),(Ze||$t.receiveShadow!==Z.receiveShadow)&&($t.receiveShadow=Z.receiveShadow,Ke.setValue(G,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Sn.envMap.value=Bt,Sn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(Sn.envMapIntensity.value=Y.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=DT()),Ze&&(Ke.setValue(G,"toneMappingExposure",U.toneMappingExposure),$t.needsLights&&su(Sn,Gi),At&&nt.fog===!0&&Yt.refreshFogUniforms(Sn,At),Yt.refreshMaterialUniforms(Sn,nt,_t,mt,D.state.transmissionRenderTarget[R.id]),Wc.upload(G,Hi($t),Sn,se)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Wc.upload(G,Hi($t),Sn,se),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ke.setValue(G,"center",Z.center),Ke.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ke.setValue(G,"normalMatrix",Z.normalMatrix),Ke.setValue(G,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const bn=nt.uniformsGroups;for(let An=0,wi=bn.length;An<wi;An++){const Vi=bn[An];Dt.update(Vi,yn),Dt.bind(Vi,yn)}}return yn}function su(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function rl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,Y,st){const nt=Zt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=Y,Zt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:st,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const st=Zt.get(R);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const os=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,st=0){A=R,K=Y,w=st;let nt=!0,Z=null,At=!1,Ut=!1;if(R){const Bt=Zt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(G.FRAMEBUFFER,null),nt=!1;else if(Bt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Bt.__hasExternalTextures)se.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Kt=R.depthTexture;if(Bt.__boundDepthTexture!==Kt){if(Kt!==null&&Zt.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ut=!0);const ne=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?Z=ne[Y][st]:Z=ne[Y],At=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Z=ne[st]:Z=ne,J.copy(R.viewport),dt.copy(R.scissor),rt=R.scissorTest}else J.copy(yt).multiplyScalar(_t).floor(),dt.copy(Tt).multiplyScalar(_t).floor(),rt=Ot;if(st!==0&&(Z=os),Gt.bindFramebuffer(G.FRAMEBUFFER,Z)&&nt&&Gt.drawBuffers(R,Z),Gt.viewport(J),Gt.scissor(dt),Gt.setScissorTest(rt),At){const Bt=Zt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,st)}else if(Ut){const Bt=Y;for(let te=0;te<R.textures.length;te++){const ne=Zt.get(R.textures[te]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+te,ne.__webglTexture,st,Bt)}}else if(R!==null&&st!==0){const Bt=Zt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bt.__webglTexture,st)}z=-1},this.readRenderTargetPixels=function(R,Y,st,nt,Z,At,Ut,zt=0){if(!(R&&R.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Gt.bindFramebuffer(G.FRAMEBUFFER,Bt);try{const te=R.textures[zt],ne=te.format,Kt=te.type;if(!Ie.textureFormatReadable(ne)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Kt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-nt&&st>=0&&st<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(Y,st,nt,Z,ie.convert(ne),ie.convert(Kt),At))}finally{const te=A!==null?Zt.get(A).__webglFramebuffer:null;Gt.bindFramebuffer(G.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,Y,st,nt,Z,At,Ut,zt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt)if(Y>=0&&Y<=R.width-nt&&st>=0&&st<=R.height-Z){Gt.bindFramebuffer(G.FRAMEBUFFER,Bt);const te=R.textures[zt],ne=te.format,Kt=te.type;if(!Ie.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,At.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+zt),G.readPixels(Y,st,nt,Z,ie.convert(ne),ie.convert(Kt),0);const Ae=A!==null?Zt.get(A).__webglFramebuffer:null;Gt.bindFramebuffer(G.FRAMEBUFFER,Ae);const De=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await eb(G,De,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,At),G.deleteBuffer(ue),G.deleteSync(De),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,st=0){const nt=Math.pow(2,-st),Z=Math.floor(R.image.width*nt),At=Math.floor(R.image.height*nt),Ut=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;se.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ut,zt,Z,At),Gt.unbindTexture()};const Yr=G.createFramebuffer(),ba=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,st=null,nt=null,Z=0,At=null){At===null&&(Z!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Z,Z=0):At=0);let Ut,zt,Bt,te,ne,Kt,ue,Ae,De;const be=R.isCompressedTexture?R.mipmaps[At]:R.image;if(st!==null)Ut=st.max.x-st.min.x,zt=st.max.y-st.min.y,Bt=st.isBox3?st.max.z-st.min.z:1,te=st.min.x,ne=st.min.y,Kt=st.isBox3?st.min.z:0;else{const xn=Math.pow(2,-Z);Ut=Math.floor(be.width*xn),zt=Math.floor(be.height*xn),R.isDataArrayTexture?Bt=be.depth:R.isData3DTexture?Bt=Math.floor(be.depth*xn):Bt=1,te=0,ne=0,Kt=0}nt!==null?(ue=nt.x,Ae=nt.y,De=nt.z):(ue=0,Ae=0,De=0);const ze=ie.convert(Y.format),$t=ie.convert(Y.type);let Ye;Y.isData3DTexture?(se.setTexture3D(Y,0),Ye=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Ye=G.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Me=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ma=G.getParameter(G.UNPACK_SKIP_PIXELS),Ze=G.getParameter(G.UNPACK_SKIP_ROWS),Gi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,be.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,be.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Kt);const Ke=R.isDataArrayTexture||R.isData3DTexture,Sn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const xn=Zt.get(R),bn=Zt.get(Y),An=Zt.get(xn.__renderTarget),wi=Zt.get(bn.__renderTarget);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Vi=0;Vi<Bt;Vi++)Ke&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,Z,Kt+Vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zt.get(Y).__webglTexture,At,De+Vi)),G.blitFramebuffer(te,ne,Ut,zt,ue,Ae,Ut,zt,G.DEPTH_BUFFER_BIT,G.NEAREST);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Zt.has(R)){const xn=Zt.get(R),bn=Zt.get(Y);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,Yr),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ba);for(let An=0;An<Bt;An++)Ke?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,xn.__webglTexture,Z,Kt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,xn.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,At,De+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,At),Z!==0?G.blitFramebuffer(te,ne,Ut,zt,ue,Ae,Ut,zt,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(Ye,At,ue,Ae,De+An,te,ne,Ut,zt):G.copyTexSubImage2D(Ye,At,ue,Ae,te,ne,Ut,zt);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ye,At,ue,Ae,De,Ut,zt,Bt,ze,$t,be.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,At,ue,Ae,De,Ut,zt,Bt,ze,be.data):G.texSubImage3D(Ye,At,ue,Ae,De,Ut,zt,Bt,ze,$t,be):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,At,ue,Ae,Ut,zt,ze,$t,be.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,At,ue,Ae,be.width,be.height,ze,be.data):G.texSubImage2D(G.TEXTURE_2D,At,ue,Ae,Ut,zt,ze,$t,be);G.pixelStorei(G.UNPACK_ROW_LENGTH,Me),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ma),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ze),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Gi),At===0&&Y.generateMipmaps&&G.generateMipmap(Ye),Gt.unbindTexture()},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Gt.unbindTexture()},this.resetState=function(){K=0,w=0,A=null,Gt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const LT="/assets/gardenSphereTexture-C0UMRVQj.png";function NT(o,e={}){const i=e.background??0,s=e.smoothing??.1,l=new Cb;l.background=new Pe(i);const c=new gi(75,Math.max(1,o.clientWidth)/Math.max(1,o.clientHeight),.1,1e3);c.position.z=2.5;const d=new UT({antialias:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(o.clientWidth,o.clientHeight),o.appendChild(d.domElement);const h=new ep(1.3,32,32),m=new Fb().load(LT);m.colorSpace=Gn,m.generateMipmaps=!0,m.minFilter=es,m.magFilter=ri,m.anisotropy=d.capabilities.getMaxAnisotropy();const p=new $h({map:m,side:_a,transparent:!0,opacity:1}),g=new ya(h,p);l.add(g);const x=document.createElement("canvas"),y=256;x.width=y,x.height=y;const S=x.getContext("2d"),T=S.createRadialGradient(y/2,y/2,y*.18,y/2,y/2,y*.55);T.addColorStop(0,"rgba(255,255,255,0.8)"),T.addColorStop(.6,"rgba(255,255,255,0.25)"),T.addColorStop(1,"rgba(255,255,255,0.0)"),S.fillStyle=T,S.fillRect(0,0,y,y);const C=new yg(x);C.colorSpace=Gn;const b=new Fh({map:C,color:16777215,transparent:!0,blending:jc,depthWrite:!1,opacity:0}),v=new vg(b);v.scale.set(3.2,3.2,1),l.add(v);const P=document.createElement("canvas"),D=128;P.width=D,P.height=D;const B=P.getContext("2d"),F=B.createRadialGradient(D/2,D/2,D*.05,D/2,D/2,D*.45);F.addColorStop(0,"rgba(255,255,255,0.95)"),F.addColorStop(.5,"rgba(255,255,255,0.35)"),F.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=F,B.fillRect(0,0,D,D);const U=new yg(P);U.colorSpace=Gn;const O=new Fh({map:U,color:16777215,transparent:!0,blending:jc,depthWrite:!1,opacity:0}),K=new vg(O);K.scale.set(1.8,1.8,1),l.add(K),l.add(new kb(16777215,.5));const w=new Vb(16777215,.8);w.position.set(1,1,1),l.add(w);const A={x:0,y:0},z={x:0,y:0};function X(L){const Q=Math.PI/2;A.y=L.yaw,A.x=Math.max(-Q,Math.min(Q,L.pitch))}function J(L){const Q=Math.max(0,Math.min(1,L)),yt=.6+.4*(1-Q);p.opacity=yt,p.needsUpdate=!0;const Tt=Math.min(1,Math.pow(Q,.7)*1.2),Ot=Math.min(1,Math.pow(Q,1.3)*1);b.opacity=Tt,O.opacity=Ot}function dt(L){o&&(o.style.cursor=L)}let rt=0;const I=()=>{z.x+=(A.x-z.x)*s,z.y+=(A.y-z.y)*s,g.rotation.x=z.x,g.rotation.y=z.y,d.render(l,c),rt=requestAnimationFrame(I)};I();let q=null,W=null;typeof window.ResizeObserver<"u"?(q=new ResizeObserver(L=>{for(const Q of L){const yt=Q.contentRect,Tt=Math.max(1,yt.width),Ot=Math.max(1,yt.height);c.aspect=Tt/Ot,c.updateProjectionMatrix(),d.setSize(Tt,Ot)}}),q.observe(o)):(W=()=>{const L=Math.max(1,o.clientWidth),Q=Math.max(1,o.clientHeight);c.aspect=L/Q,c.updateProjectionMatrix(),d.setSize(L,Q)},window.addEventListener("resize",W));function _t(){cancelAnimationFrame(rt),q?.disconnect(),W&&(window.removeEventListener("resize",W),W=null),d.dispose(),m.dispose(),h.dispose(),p.dispose(),C.dispose(),b.dispose(),U.dispose(),O.dispose(),d.domElement.parentElement===o&&o.removeChild(d.domElement)}return{setRotation:X,setOpacity:J,setCursor:dt,destroy:_t}}function OT(){const[o,e]=kt.useState(0),i=kt.useRef(null);return kt.useEffect(()=>{let s,l,c,d;return(async()=>{d=await navigator.mediaDevices.getUserMedia({audio:!0}),s=new AudioContext;const h=s.createMediaStreamSource(d);l=s.createAnalyser(),l.fftSize=512,h.connect(l),c=new Uint8Array(l.fftSize);const m=()=>{l.getByteTimeDomainData(c);let p=0;for(let y=0;y<c.length;y++){const S=(c[y]-128)/128;p+=S*S}const g=Math.sqrt(p/c.length),x=Math.min(1,Math.max(0,(g-.02)/.2));e(x),i.current=requestAnimationFrame(m)};m()})(),()=>{i.current!=null&&cancelAnimationFrame(i.current),d?.getTracks().forEach(h=>h.stop()),s?.close()}},[]),o}function PT(o={}){const{attack:e=.35,release:i=.2,onThreshold:s=.22,offThreshold:l=.15,useSpring:c=!0,stiffness:d=10,damping:h=5,mass:m=1,tickHz:p=10,minDelta:g=.03}=o,x=OT(),[y,S]=kt.useState(0),[T,C]=kt.useState(0),b=kt.useRef(!1),v=kt.useRef(0),P=kt.useRef(0),D=kt.useRef(0),B=kt.useRef(null);kt.useEffect(()=>{let K;const w=A=>{const z=y,X=x>z?e:i,J=z+(x-z)*X;if(!b.current&&J>=s&&(b.current=!0),b.current&&J<=l&&(b.current=!1),c){const dt=B.current??A,rt=Math.max(.001,(A-dt)/1e3);B.current=A;const I=d,q=h,W=m,mt=P.current,_t=D.current,L=(I*(J-mt)-q*_t)/W,Q=_t+L*rt,yt=mt+Q*rt;P.current=yt,D.current=Q,C(yt)}else C(J);S(J),K=requestAnimationFrame(w)};return K=requestAnimationFrame(w),()=>cancelAnimationFrame(K)},[e,i,h,m,d,c,x]);const F=kt.useRef(0);kt.useEffect(()=>{F.current=T},[T]);const U=kt.useRef([]);kt.useEffect(()=>{const K=1e3/p,w=setInterval(()=>{const A=F.current,z=v.current;Math.abs(A-z)>=g&&(v.current=A,U.current.forEach(X=>X(A,b.current)))},K);return()=>clearInterval(w)},[p,g]);const O=K=>(U.current.push(K),()=>{U.current=U.current.filter(w=>w!==K)});return{raw:x,value:T,isBlowing:b.current,onTick:O}}const O_="/assets/dragonfly-CWTXHc1J.mp4";function zT(){const o=In(O=>O.send),e=kt.useRef(null),[i,s]=kt.useState(!1),l=kt.useRef(null),c=kt.useRef(null),d=kt.useRef(!1),h=kt.useRef({yaw:0,pitch:0}),m=kt.useRef({yaw:0,pitch:0}),p=kt.useRef({time:0,yaw:0,pitch:0}),g=In(O=>O.sphereRotation),x=In(O=>O.sphereOpacity),[y,S]=kt.useState(!0),T=16,C=.02,b=()=>typeof performance<"u"&&performance.now?performance.now():Date.now(),{value:v,onTick:P}=PT({tickHz:2,minDelta:.03});kt.useEffect(()=>{if(l.current)return c.current=NT(l.current,{}),()=>c.current?.destroy()},[]),kt.useEffect(()=>{c.current&&c.current.setRotation({yaw:g.yaw,pitch:g.pitch,roll:g.roll})},[g]),kt.useEffect(()=>{c.current&&c.current.setOpacity(x)},[x]);const D=i&&!y;kt.useEffect(()=>D?P((K,w)=>{d.current||o({type:"sphereOpacity",payload:{intensity:K,blowing:w}})}):void 0,[P,o]);function B(O){O.preventDefault();try{O.currentTarget.setPointerCapture(O.pointerId)}catch{}d.current=!0,h.current={yaw:O.clientX,pitch:O.clientY},c.current?.setCursor("grabbing")}function F(O){if(!d.current)return;O.preventDefault();const K=O.clientX-h.current.yaw,w=O.clientY-h.current.pitch;m.current.yaw+=K*.01,m.current.pitch+=w*.01,c.current?.setRotation({yaw:m.current.yaw,pitch:m.current.pitch,roll:0});const A=b(),z=A-p.current.time>=T,X=Math.abs(m.current.yaw-p.current.yaw)>=C||Math.abs(m.current.pitch-p.current.pitch)>=C;(z||X)&&(o({type:"sphereRotation",payload:{yaw:m.current.yaw,pitch:m.current.pitch,roll:0}}),p.current={time:A,yaw:m.current.yaw,pitch:m.current.pitch}),h.current={yaw:O.clientX,pitch:O.clientY}}function U(O){if(O?.preventDefault(),d.current=!1,O)try{O.currentTarget.releasePointerCapture(O.pointerId)}catch{}c.current?.setCursor("grab")}return ct.jsxs("div",{className:"gd-root",children:[y&&ct.jsxs(ss,{videoRef:e,showAtSec:2,buttonLabel:ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:"정원을 둘러본다 "})," ",ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:"explore the garden "})]}),onAction:()=>{S(!1),s(!0)},secondaryButtonLabel:ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:"처음으로 돌아간다 "})," ",ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:"go back to the start "})]}),onSecondaryAction:()=>{o({type:"init"}),S(!1)},children:[ct.jsxs("h3",{children:["정원으로 나오니, ",ct.jsx("br",{})," 모든 것이 희뿌옇습니다."]}),ct.jsxs("p",{children:["now we are in the garden ",ct.jsx("br",{})," and everything is blurry."]})]}),ct.jsx("video",{src:i_,ref:e,autoPlay:!0,playsInline:!0,preload:"auto",poster:"/assets/PhaseGardenAndDust/openning_door_poster.png",className:"gd-introVideo",style:{opacity:i?0:1,filter:i?"blur(12px)":"blur(0px)",pointerEvents:i?"none":"auto"}}),i&&ct.jsxs("p",{style:{opacity:.8,textAlign:"center",margin:"0.5rem"},children:["구를 돌려 정원을 둘러보세요.",ct.jsx("br",{}),"rotate the sphere to explore the garden."]}),ct.jsx("div",{ref:l,onPointerDown:B,onPointerMove:F,onPointerUp:U,onPointerLeave:U,onPointerCancel:U,className:"gd-scene",onContextMenu:O=>O.preventDefault()}),i&&ct.jsxs("div",{className:"gd-meter",style:{width:`${Math.max(0,Math.min(1,v))*100+10}%`},children:[ct.jsx("div",{"aria-hidden":!0,className:"gd-meter__bg"}),ct.jsx("div",{className:"gd-meter__label",children:ct.jsx("span",{children:v.toFixed(2)})})]}),i&&ct.jsxs("p",{style:{opacity:.8,textAlign:"center",margin:"0.5rem"},children:["최대한 길게 입김을 불어 먼지를 날려보세요. ",ct.jsx("br",{})," 제임스의 기억이 보일거에요.",ct.jsx("br",{}),"blow into the sphere to send dust. ",ct.jsx("br",{})," you will see james' memories."]}),ct.jsx(tl,{src:O_})]})}const IT="/assets/0-DGFrnI57.png",BT="/assets/1-BxDTOF90.png",FT="/assets/10-CxGLi60U.png",HT="/assets/12-ifHMu1bI.png",GT="/assets/15-C3rWTKzI.png",VT="/assets/19-BthLn20X.png",kT="/assets/2-lLkcnjf2.png",XT="/assets/21-CpADUY-R.png",WT="/assets/25-C5mFVpnV.png",qT="/assets/25-C5mFVpnV.png",YT="/assets/31-BmXuzYgs.png",jT="/assets/33-C2Z1m2NU.png",ZT="/assets/33-C2Z1m2NU.png",KT="/assets/4-CYhJxtpZ.png",QT="/assets/42-XSDCLpM0.png",JT="/assets/42-XSDCLpM0.png",$T="/assets/45-EibYZWiQ.png",t2="/assets/45-EibYZWiQ.png",e2="/assets/48-3jBaMYBO.png",n2="/assets/5-tnSU8bfo.png",i2="/assets/52-sCR0bWDP.png",a2="/assets/56-B_lsCHrh.png",s2="/assets/6-D01HvqWU.png",r2="/assets/62-DgL3Cceq.png",o2="/assets/65-ZyCAuxLb.png",l2="/assets/68-BijVjBPT.png",c2="/assets/7-Cd8XXuoZ.png",u2="/assets/71-Dck3JWAX.png",f2="/assets/74-CGaXS36L.png",d2="/assets/77-uVkGxyoj.png",h2="/assets/8-CGlL3tR8.png",p2="/assets/9-0BeFwvct.png";function m2(){const o=In(z=>z.send),[e,i]=kt.useState(100),s=kt.useRef(1),l=.05,[c,d]=kt.useState(!0),[h,m]=kt.useState(!1),[p,g]=kt.useState(0),x=kt.useMemo(()=>[{ko:ct.jsx("h3",{style:{whiteSpace:"pre-line"},children:Re("timeline","page1_title_ko")}),en:ct.jsx("p",{style:{whiteSpace:"pre-line"},children:Re("timeline","page1_title_en")})},{ko:ct.jsx("h3",{style:{whiteSpace:"pre-line"},children:Re("timeline","page2_title_ko")}),en:ct.jsx("p",{style:{whiteSpace:"pre-line"},children:Re("timeline","page2_title_en")})},{ko:ct.jsx("h3",{style:{whiteSpace:"pre-line"},children:Re("timeline","page3_title_ko")}),en:ct.jsx("p",{style:{whiteSpace:"pre-line"},children:Re("timeline","page3_title_en")})}],[]),y=kt.useMemo(()=>Object.entries(Object.assign({"../../assets/PhaseTimeline/0.png":IT,"../../assets/PhaseTimeline/1.png":BT,"../../assets/PhaseTimeline/10.png":FT,"../../assets/PhaseTimeline/12.png":HT,"../../assets/PhaseTimeline/15.png":GT,"../../assets/PhaseTimeline/19.png":VT,"../../assets/PhaseTimeline/2.png":kT,"../../assets/PhaseTimeline/21.png":XT,"../../assets/PhaseTimeline/25.png":WT,"../../assets/PhaseTimeline/29.png":qT,"../../assets/PhaseTimeline/31.png":YT,"../../assets/PhaseTimeline/33 copy.png":jT,"../../assets/PhaseTimeline/33.png":ZT,"../../assets/PhaseTimeline/4.png":KT,"../../assets/PhaseTimeline/42 copy.png":QT,"../../assets/PhaseTimeline/42.png":JT,"../../assets/PhaseTimeline/45 copy.png":$T,"../../assets/PhaseTimeline/45.png":t2,"../../assets/PhaseTimeline/48.png":e2,"../../assets/PhaseTimeline/5.png":n2,"../../assets/PhaseTimeline/52.png":i2,"../../assets/PhaseTimeline/56.png":a2,"../../assets/PhaseTimeline/6.png":s2,"../../assets/PhaseTimeline/62.png":r2,"../../assets/PhaseTimeline/65.png":o2,"../../assets/PhaseTimeline/68.png":l2,"../../assets/PhaseTimeline/7.png":c2,"../../assets/PhaseTimeline/71.png":u2,"../../assets/PhaseTimeline/74.png":f2,"../../assets/PhaseTimeline/77.png":d2,"../../assets/PhaseTimeline/8.png":h2,"../../assets/PhaseTimeline/9.png":p2})).map(([X,J])=>({key:X,url:J})).sort((X,J)=>{const dt=Number(X.key.match(/(\d+)/)?.[1]??1/0),rt=Number(J.key.match(/(\d+)/)?.[1]??1/0);return dt-rt}).map(X=>X.url),[]),S=[{ko:"기억이 잘 나지 않지만, 많이 울었겠지",en:"I don't remember well, but I must have cried a lot"},{ko:"발로 땅을 내딛은 해",en:"The year I first stepped on the ground"},{ko:"많이 울었고 많이 넘어졌다",en:"I cried a lot and fell often"},{ko:"엄마! 집 마당에 뭐가 엄청 많이 날아다녀!",en:"Mom! There’s something flying all over our yard!"},{ko:"우와! 잠자리다! 와 잠자리 날아다니는거 진짜 신기해!",en:"Wow! A dragonfly! Look how it flies! That’s so amazing!"},{ko:"잠자리를 잡았어! 다시 놓아줄 땐 아쉬웠어..",en:"I caught a dragonfly! Letting it go made me a little sad."},{ko:"오늘은 학교에서 친구랑 싸웠다.",en:"I fought with a friend at school today"},{ko:"좋아하는 여자애가 생겼어",en:"Do you know Mary Harris? I kind of like her."},{ko:"고백할까?",en:"Should I say I love her?"},{ko:"친구랑 술을 너무 마셨네",en:"Drank too much last night. Can't remember a thing."},{ko:"이제 무슨 일을 하지",en:"What should I do with my life?"},{ko:"내일도 출근인가?",en:"Do I have to go to work again tomorrow?"},{ko:"결혼하고 싶은 사람이 생겼어",en:"I found someone I want to marry"},{ko:"오늘 집에 빨리 가야 돼. 딸 봐야 되거든.",en:"I need to go home early today. I have to see my daughter."},{ko:"이번 주말에 캠핑 갈거야. 준비할게 많아.",en:"Going camping this weekend. A lot to prepare."},{ko:"내일도 오늘 같았으면.",en:"I wish tomorrow's just like today."},{ko:"시간이 점점 빨리가. 벌써 불혹의 나이가 되었네.",en:" In a blink of an eye, time passes."},{ko:"좀 울적하네. 중년의 위기인가?",en:" Bit a lowkey these days. Middle-age crisis?"},{ko:"일을 생각보다 빨리 그만두게 됐어.",en:"I retired much earlier than I expected."},{ko:"오늘은 딸이 결혼했어.",en:"My daughter got married today."},{ko:"딸이 손자를 낳았어.",en:`My daughter had a baby. 
 Now I am a grandpa. haha..`},{ko:"요즘 사람들이 날 찾질 않네.",en:"People don’t seem to look for me these days."},{ko:"아내가 이제 내 곁에 없네. 어떡하지?",en:"My wife isn’t by my side anymore. What do I do?"},{ko:"오늘 집에 오는 길이 잠깐 기억이 안 나더라고.",en:"I forgot way back home today..."},{ko:"나는…",en:"I... ah..."},{ko:"오늘",en:"Today"},{ko:"정원에서",en:"In the Garden"},{ko:"잠자리를",en:"A Dragonfly..."},{ko:"잡고싶어.",en:"I want to catch something...ah..."},{ko:"도와줄래?",en:"Could you help me?"}],T=e/100,C=y.length,b=C>0?(C-1)*T:0,v=Math.max(0,Math.min(C-1,Math.floor(b))),P=Math.max(0,Math.min(C-1,v+1)),D=Math.min(1,Math.max(0,b-Math.floor(b))),B=kt.useMemo(()=>[.1,.13,.16,.22,.24,.26,.29,.33,.37,.43,.46,.49,.52,.55,.57,.6,.63,.66,.69,.72,.75,.78,.81,.84,.86,.88,.91,.94,.97,1],[]),{nearestIdx:F,nearestDist:U}=kt.useMemo(()=>{let z=0,X=1/0;for(let J=0;J<B.length;J++){const dt=Math.abs(T-B[J]);dt<X&&(z=J,X=dt)}return{nearestIdx:z,nearestDist:X}},[T,B]),K=U<=.03,w=Math.max(0,Math.min(S.length-1,F)),A=K&&S.length>0;return ct.jsxs("div",{className:"tl-fade-in",style:{position:"relative",width:"100%",height:"100vh",padding:"24px",boxSizing:"border-box"},children:[ct.jsxs(ss,{alignH:"center",alignV:"middle",visible:c,fadeMs:1e3,dimBackground:!0,backdropOpacity:.9,buttonLabel:p===0?ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:Re("timeline","start_button_main")}),ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:Re("timeline","start_button_sub")})]}):ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:Re("timeline","continue_button_main")}),ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:Re("timeline","continue_button_sub")})]}),onAction:()=>{p===0?g(1):p>=x.length-1?(d(!1),m(!0)):g(p+1)},children:[x[p].ko,x[p].en]}),ct.jsx("div",{style:{position:"absolute",inset:24,display:"grid",placeItems:"center",background:"transparent",bottom:100},children:ct.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[C>0&&ct.jsxs(ct.Fragment,{children:[ct.jsx("img",{src:y[v],alt:"frame",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",opacity:1,pointerEvents:"none"}}),ct.jsx("img",{src:y[P],alt:"frame",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",opacity:D*.9,pointerEvents:"none"}})]}),ct.jsx(ss,{alignH:"center",alignV:"top",visible:A&&h,fadeMs:400,dimBackground:!0,backdropOpacity:.45,children:ct.jsxs("p",{style:{textAlign:"center",marginTop:"0.6rem"},children:[ct.jsx("span",{className:"tl-cap-ko",children:S[w].ko}),ct.jsx("br",{}),ct.jsx("span",{className:"tl-cap-en",children:S[w].en})]})})]})}),h&&ct.jsx("div",{className:"p-6",style:{position:"absolute",left:24,right:24,bottom:140,zIndex:10},children:ct.jsx("input",{type:"range",min:0,max:100,value:e,onChange:z=>{const X=Number(z.currentTarget.value);i(X);const J=X/100;Math.abs(J-s.current)>=l&&(o({type:"timelineSeek",payload:{t:J}}),s.current=J)},onPointerUp:z=>{const X=Number(z.currentTarget.value)/100;o({type:"timelineSeek",payload:{t:X}}),s.current=X},className:"tl-slider"})})]})}function qc({variant:o="default",size:e="md",className:i="",children:s,...l}){const c=["button",o==="primary"?"button--primary":o==="ghost"?"button--ghost":"",`button--${e}`,i].filter(Boolean).join(" ");return ct.jsx("button",{className:c,...l,children:s})}const P_="/assets/REAL%20FINAL_OUTRO_1123-BSy0dJ8r.mp4";function x2(){const o=In(A=>A.send),[e,i]=kt.useState(!1),[s,l]=kt.useState(!1),[c,d]=kt.useState(!1),h=40,m=0,p=12,g=kt.useRef(null),[x,y]=kt.useState({x:100,y:100}),[S,T]=kt.useState({vx:2,vy:1.6}),[C,b]=kt.useState(m),[v,P]=kt.useState(h),[D,B]=kt.useState(!0),F=kt.useMemo(()=>({w:160,h:160}),[]);kt.useEffect(()=>{i(!0)},[]),kt.useEffect(()=>{if(!D)return;const A=setInterval(()=>{y(z=>{const X=g.current,J=X?X.clientWidth:window.innerWidth,dt=X?X.clientHeight:window.innerHeight;let rt=z.x+S.vx,I=z.y+S.vy,q=S.vx,W=S.vy;return(rt<-F.w||rt+F.w>J+F.w)&&(q=-q),(I<-F.h||I+F.h>dt+F.h)&&(W=-W),rt=Math.max(-F.w,Math.min(J+F.w,rt)),I=Math.max(-F.h,Math.min(dt+F.h,I)),T({vx:q,vy:W}),{x:rt,y:I}})},12);return()=>clearInterval(A)},[D,S.vx,S.vy,F.w,F.h]),kt.useEffect(()=>{if(!D)return;if(v<=0){B(!1);return}const A=setInterval(()=>P(z=>z-1),1e3);return()=>clearInterval(A)},[D,v]);const U=1.5,O=()=>{const A=(2+Math.random()*3)*U,z=Math.random()*Math.PI*2;T({vx:Math.cos(z)*A,vy:Math.sin(z)*A})},K=()=>{if(!D)return;const A=C+1;b(A);const z=g.current,X=z?z.clientWidth:window.innerWidth,J=z?z.clientHeight:window.innerHeight,dt=Math.floor(Math.random()*4);let rt=0,I=0;switch(dt){case 0:rt=-F.w,I=Math.random()*(J-F.h);break;case 1:rt=X,I=Math.random()*(J-F.h);break;case 2:rt=Math.random()*(X-F.w),I=-F.h;break;case 3:rt=Math.random()*(X-F.w),I=J;break}y({x:rt,y:I});const q=X/2,W=J/2,mt=q-rt,_t=W-I,L=Math.max(.001,Math.hypot(mt,_t)),Q=(2+Math.random()*3)*1.5;T({vx:mt/L*Q,vy:_t/L*Q}),A>=p?l(!0):o({type:"catchDragonfly",payload:{count:A}})},w=()=>{b(m),P(h),B(!0),y({x:100,y:100}),O()};return ct.jsxs("div",{ref:g,style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},className:"p-0",children:[!s&&e&&ct.jsxs(ss,{alignH:"center",alignV:"middle",visible:e,fadeMs:1e3,dimBackground:!0,backdropOpacity:.9,buttonLabel:ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:Re("dragonfly","start_button_main")}),ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:Re("dragonfly","start_button_sub")})]}),onAction:()=>{i(!1),d(!0),w()},children:[ct.jsx("h3",{children:Re("dragonfly","intro_title").split(`
`).map((A,z)=>ct.jsxs("span",{children:[A,z===0&&ct.jsx("br",{})]},z))}),ct.jsx("p",{children:Re("dragonfly","intro_desc").split(`
`).map((A,z)=>ct.jsxs("span",{children:[A,z!==Re("dragonfly","intro_desc").split(`
`).length-1&&ct.jsx("br",{})]},z))})]}),!e&&s&&ct.jsxs(ss,{alignH:"center",alignV:"middle",visible:s,fadeMs:1e3,dimBackground:!0,backdropOpacity:.9,buttonLabel:ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{style:{fontSize:"0.8rem",margin:"0.2rem"},children:Re("dragonfly","ending_button_main")}),ct.jsx("p",{style:{fontSize:"0.6rem",margin:"0.2rem"},children:Re("dragonfly","ending_button_sub")})]}),onAction:()=>{console.log("endding"),o({type:"catchDragonfly",payload:{count:p}}),l(!1)},children:[ct.jsx("h3",{children:Re("dragonfly","ending_title").split(`
`).map((A,z)=>ct.jsxs("span",{children:[A,z===0&&ct.jsx("br",{})]},z))}),ct.jsx("p",{children:Re("dragonfly","ending_desc").split(`
`).map((A,z)=>ct.jsxs("span",{children:[A,z!==Re("dragonfly","ending_desc").split(`
`).length-1&&ct.jsx("br",{})]},z))})]}),c&&ct.jsx("div",{style:{position:"absolute",top:12,left:12,zIndex:10},children:ct.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"8px 12px",background:"rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:12,boxShadow:"0 6px 20px rgba(0,0,0,0.25)"},children:[ct.jsxs("div",{style:{display:"grid",gap:2},children:[ct.jsx("span",{style:{fontSize:12,opacity:.85},children:Re("dragonfly","hud_score_label")}),ct.jsxs("strong",{style:{fontSize:16,lineHeight:1},children:[C,"/",p]})]}),ct.jsx("div",{style:{width:1,height:24,background:"rgba(255,255,255,0.15)"}}),ct.jsxs("div",{style:{display:"grid",gap:2},children:[ct.jsx("span",{style:{fontSize:12,opacity:.85},children:Re("dragonfly","hud_time_label")}),ct.jsxs("strong",{style:{fontSize:16,lineHeight:1},children:[v,"s"]})]})]})}),c&&!D&&ct.jsx("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",zIndex:15},children:ct.jsx(qc,{onClick:w,children:"다시 시작"})}),c&&!s&&ct.jsx("div",{onPointerDown:K,style:{position:"absolute",left:x.x,top:x.y,width:F.w,height:F.h,transform:`scaleX(${S.vx>=0?1:-1})`,transformOrigin:"50% 50%",cursor:"pointer",userSelect:"none"},children:ct.jsx("video",{src:O_,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",poster:"/assets/PhaseDragonfly/dragonfly_poster.jpeg",onPlay:()=>Tn(.25),onPause:()=>Tn(1),onEnded:()=>Tn(1),style:{width:"100%",height:"100%",objectFit:"contain",pointerEvents:"none"}})}),ct.jsx(tl,{src:P_})]})}function g2(){const o=In(l=>l.send),e=kt.useRef(null),[i,s]=kt.useState(!1);return ct.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},className:"p-0",children:[ct.jsx("video",{src:P_,ref:e,autoPlay:!0,playsInline:!0,preload:"auto",poster:"/assets/PhaseFinale/finale_poster.jpeg",onPlay:()=>{Tn(0),s(!0)},onPause:()=>Tn(0),onEnded:()=>Tn(0),style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0,opacity:i?1:0,transition:"opacity 1200ms cubic-bezier(.22,.61,.36,1)",willChange:"opacity"}}),ct.jsx(ss,{videoRef:e,showAtSec:45,buttonLabel:Re("finale","restart_cta"),onAction:()=>o({type:"init"}),children:ct.jsx("h2",{children:Re("finale","thank_you")})}),ct.jsx(tl,{src:t_})]})}function _2({children:o}){return ct.jsx("div",{className:"screen",children:ct.jsx("div",{className:"screen-container",children:o})})}function v2(){const o=In(d=>d.phase),e=In(d=>d.send),[i,s]=kt.useState(!1),l={INIT:"Home",HELP:"Help",GARDEN_AND_DUST:"Garden",TIMELINE:"Timeline",DRAGONFLY:"Dragonfly",FINALE:"Finale"},c=async d=>{try{s(!0),e({type:d})}catch(h){console.warn(h),alert("Phase update failed")}finally{s(!1)}};return ct.jsxs("div",{className:"phase-nav",role:"navigation","aria-label":"Phase navigation",children:[ct.jsx(qc,{className:"phase-nav__btn",disabled:i,onClick:()=>c("prev"),children:"Prev"}),ct.jsx("span",{className:"phase-nav__label",children:l[o]}),o!=="FINALE"?ct.jsx(qc,{className:"phase-nav__btn",disabled:i,onClick:()=>c("next"),children:"Next"}):ct.jsx(qc,{className:"phase-nav__btn",disabled:i,onClick:()=>c("init"),children:"HOME"})]})}function y2(){cS("ko");const o=In(c=>c.phase);kt.useEffect(()=>{const c=()=>{$g()};return window.addEventListener("pointerdown",c,{once:!0}),window.addEventListener("keydown",c,{once:!0}),()=>{window.removeEventListener("pointerdown",c),window.removeEventListener("keydown",c)}},[]),kt.useEffect(()=>{switch(o){case"INIT":case"HELP":Tn(0);break;case"GARDEN_AND_DUST":Tn(.75);break;case"TIMELINE":Tn(.75);break;case"DRAGONFLY":Tn(.75);break;case"FINALE":Tn(0);break;default:Tn(.75);break}},[o]);const i={INIT:uS,HELP:fS,GARDEN_AND_DUST:zT,TIMELINE:m2,DRAGONFLY:x2,FINALE:g2}[o],[s,l]=kt.useState(!1);return ct.jsxs(_2,{children:[ct.jsx(i,{}),ct.jsx("button",{onClick:()=>l(c=>!c),style:{position:"fixed",right:"12px",bottom:"12px",width:"24px",height:"24px",borderRadius:"9999px",border:"none",background:"rgba(255,255,255,0.15)",color:"transparent",fontSize:"0",lineHeight:"0",textAlign:"center",cursor:"pointer",zIndex:1e3},"aria-label":"Toggle phase navigation",title:"Toggle phase navigation"}),s&&ct.jsx(v2,{})]})}const S2=!0;function z_(){console.log("initializing websocket....");const o="/ws";console.log(`websocket url: ${o}`);const e=new WebSocket(o);In.setState({ws:e}),e.onopen=()=>console.log("[WS] connected"),e.onmessage=i=>{try{S2&&console.log("[WS← raw]",i.data);const s=JSON.parse(i.data);In.getState().applyInEvent(s),s.type==="phase"?In.getState().setPhase(s.payload.phase):s.type==="sphereRotation"?In.getState().setSphereRotation(s.payload.yaw,s.payload.pitch,s.payload.roll):s.type==="sphereOpacity"&&In.getState().setSphereOpacity(s.payload.opacity)}catch(s){console.warn("WS parse error",s)}},e.onclose=i=>{if(i.code===4003){console.warn("[WS] closed by server: capacity reached (4003)"),alert("Server capacity is full. Please try again later.");return}console.warn("[WS] closed, retrying in 1s"),setTimeout(z_,1e3)}}const iu="/api",Yg=`${iu}/sessions/register`,b2=`${iu}/sessions/heartbeat`,M2=`${iu}/sessions/unregister`,jg="memloss.sessionId";function E2(){let o=localStorage.getItem(jg);return o||(o=crypto.randomUUID(),localStorage.setItem(jg,o)),o}async function T2(o){try{console.log("Registering session: ",o),console.log("base: "+iu),console.log("url: "+Yg);const e=await fetch(Yg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:o})});return e.status===503&&e.headers.get("X-Reason")==="CAP_REACHED"?{ok:!1,reason:"CAP_REACHED"}:e.ok?{ok:!0}:{ok:!1,reason:`HTTP_${e.status}`}}catch{return{ok:!1,reason:"NETWORK"}}}async function Zg(o){try{await fetch(b2,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:o}),keepalive:!0})}catch{}}function A2(o){try{const e=JSON.stringify({sessionId:o});navigator.sendBeacon(M2,e)}catch{}}let Yc;function R2(o,e=3e4){C2(),Zg(o),Yc=window.setInterval(()=>Zg(o),e)}function C2(){Yc&&(clearInterval(Yc),Yc=void 0)}(async()=>{const o=E2();if(!(await T2(o)).ok){alert("Server capacity is full. Please try again later.");return}R2(o,3e4),window.addEventListener("beforeunload",()=>A2(o)),z_()})();Qy.createRoot(document.getElementById("root")).render(ct.jsx(y2,{}));
