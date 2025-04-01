function Py(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ty(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uh={exports:{}},aa={},Hh={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),jy=Symbol.for("react.portal"),$y=Symbol.for("react.fragment"),Ay=Symbol.for("react.strict_mode"),Ry=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),zy=Symbol.for("react.context"),My=Symbol.for("react.forward_ref"),_y=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),Ny=Symbol.for("react.lazy"),zd=Symbol.iterator;function Iy(e){return e===null||typeof e!="object"?null:(e=zd&&e[zd]||e["@@iterator"],typeof e=="function"?e:null)}var Wh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gh=Object.assign,Kh={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=Kh,this.updater=n||Wh}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yh(){}Yh.prototype=Zr.prototype;function ou(e,t,n){this.props=e,this.context=t,this.refs=Kh,this.updater=n||Wh}var su=ou.prototype=new Yh;su.constructor=ou;Gh(su,Zr.prototype);su.isPureReactComponent=!0;var Md=Array.isArray,Xh=Object.prototype.hasOwnProperty,au={current:null},qh={key:!0,ref:!0,__self:!0,__source:!0};function Qh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xh.call(t,r)&&!qh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ho,type:e,key:o,ref:s,props:i,_owner:au.current}}function Fy(e,t){return{$$typeof:ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ho}function Oy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _d=/\/+/g;function Wa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Oy(""+e.key):t.toString(36)}function Zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ho:case jy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Wa(s,0):r,Md(i)?(n="",e!=null&&(n=e.replace(_d,"$&/")+"/"),Zo(i,t,n,"",function(c){return c})):i!=null&&(lu(i)&&(i=Fy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_d,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Md(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Wa(o,a);s+=Zo(o,t,n,l,i)}else if(l=Iy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Wa(o,a++),s+=Zo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function To(e,t,n){if(e==null)return e;var r=[],i=0;return Zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Vy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},es={transition:null},By={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:es,ReactCurrentOwner:au};function Jh(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:To,forEach:function(e,t,n){To(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return To(e,function(){t++}),t},toArray:function(e){return To(e,function(t){return t})||[]},only:function(e){if(!lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Zr;X.Fragment=$y;X.Profiler=Ry;X.PureComponent=ou;X.StrictMode=Ay;X.Suspense=_y;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;X.act=Jh;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=au.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xh.call(t,l)&&!qh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ho,type:e.type,key:i,ref:o,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:zy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ly,_context:e},e.Consumer=e};X.createElement=Qh;X.createFactory=function(e){var t=Qh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:My,render:e}};X.isValidElement=lu;X.lazy=function(e){return{$$typeof:Ny,_payload:{_status:-1,_result:e},_init:Vy}};X.memo=function(e,t){return{$$typeof:Dy,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=es.transition;es.transition={};try{e()}finally{es.transition=t}};X.unstable_act=Jh;X.useCallback=function(e,t){return Ge.current.useCallback(e,t)};X.useContext=function(e){return Ge.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ge.current.useEffect(e,t)};X.useId=function(){return Ge.current.useId()};X.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ge.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};X.useRef=function(e){return Ge.current.useRef(e)};X.useState=function(e){return Ge.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ge.current.useTransition()};X.version="18.3.1";Hh.exports=X;var w=Hh.exports;const ue=Ty(w),Uy=Py({__proto__:null,default:ue},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy=w,Wy=Symbol.for("react.element"),Gy=Symbol.for("react.fragment"),Ky=Object.prototype.hasOwnProperty,Yy=Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xy={key:!0,ref:!0,__self:!0,__source:!0};function Zh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ky.call(t,r)&&!Xy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Wy,type:e,key:o,ref:s,props:i,_owner:Yy.current}}aa.Fragment=Gy;aa.jsx=Zh;aa.jsxs=Zh;Uh.exports=aa;var f=Uh.exports,Il={},e0={exports:{}},st={},t0={exports:{}},n0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,D){var j=z.length;z.push(D);e:for(;0<j;){var $=j-1>>>1,I=z[$];if(0<i(I,D))z[$]=D,z[j]=I,j=$;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var D=z[0],j=z.pop();if(j!==D){z[0]=j;e:for(var $=0,I=z.length,H=I>>>1;$<H;){var J=2*($+1)-1,se=z[J],ae=J+1,Te=z[ae];if(0>i(se,j))ae<I&&0>i(Te,se)?(z[$]=Te,z[ae]=j,$=ae):(z[$]=se,z[J]=j,$=J);else if(ae<I&&0>i(Te,j))z[$]=Te,z[ae]=j,$=ae;else break e}}return D}function i(z,D){var j=z.sortIndex-D.sortIndex;return j!==0?j:z.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,u=null,p=3,g=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=z)r(c),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(c)}}function k(z){if(x=!1,h(z),!v)if(n(l)!==null)v=!0,Q(E);else{var D=n(c);D!==null&&oe(k,D.startTime-z)}}function E(z,D){v=!1,x&&(x=!1,y(T),T=-1),g=!0;var j=p;try{for(h(D),u=n(l);u!==null&&(!(u.expirationTime>D)||z&&!B());){var $=u.callback;if(typeof $=="function"){u.callback=null,p=u.priorityLevel;var I=$(u.expirationTime<=D);D=e.unstable_now(),typeof I=="function"?u.callback=I:u===n(l)&&r(l),h(D)}else r(l);u=n(l)}if(u!==null)var H=!0;else{var J=n(c);J!==null&&oe(k,J.startTime-D),H=!1}return H}finally{u=null,p=j,g=!1}}var C=!1,P=null,T=-1,M=5,R=-1;function B(){return!(e.unstable_now()-R<M)}function K(){if(P!==null){var z=e.unstable_now();R=z;var D=!0;try{D=P(!0,z)}finally{D?W():(C=!1,P=null)}}else C=!1}var W;if(typeof m=="function")W=function(){m(K)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Pe=q.port2;q.port1.onmessage=K,W=function(){Pe.postMessage(null)}}else W=function(){S(K,0)};function Q(z){P=z,C||(C=!0,W())}function oe(z,D){T=S(function(){z(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Q(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var j=p;p=D;try{return z()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=p;p=z;try{return D()}finally{p=j}},e.unstable_scheduleCallback=function(z,D,j){var $=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,z){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,z={id:d++,callback:D,priorityLevel:z,startTime:j,expirationTime:I,sortIndex:-1},j>$?(z.sortIndex=j,t(c,z),n(l)===null&&z===n(c)&&(x?(y(T),T=-1):x=!0,oe(k,j-$))):(z.sortIndex=I,t(l,z),v||g||(v=!0,Q(E))),z},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(z){var D=p;return function(){var j=p;p=D;try{return z.apply(this,arguments)}finally{p=j}}}})(n0);t0.exports=n0;var qy=t0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=w,it=qy;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r0=new Set,Ui={};function ir(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(Ui[e]=t,e=0;e<t.length;e++)r0.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},Nd={};function Zy(e){return Fl.call(Nd,e)?!0:Fl.call(Dd,e)?!1:Jy.test(e)?Nd[e]=!0:(Dd[e]=!0,!1)}function ev(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tv(e,t,n,r){if(t===null||typeof t>"u"||ev(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var cu=/[\-:]([a-z])/g;function uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cu,uu);Ne[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cu,uu);Ne[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cu,uu);Ne[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function du(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tv(t,n,i,r)&&(n=null),r||i===null?Zy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),hu=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),s0=Symbol.for("react.offscreen"),Id=Symbol.iterator;function si(e){return e===null||typeof e!="object"?null:(e=Id&&e[Id]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Ga;function bi(e){if(Ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ga=t&&t[1]||""}return`
`+Ga+e}var Ka=!1;function Ya(e,t){if(!e||Ka)return"";Ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bi(e):""}function nv(e){switch(e.tag){case 5:return bi(e.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 2:case 15:return e=Ya(e.type,!1),e;case 11:return e=Ya(e.type.render,!1),e;case 1:return e=Ya(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case mr:return"Portal";case Ol:return"Profiler";case fu:return"StrictMode";case Vl:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case o0:return(e.displayName||"Context")+".Consumer";case i0:return(e._context.displayName||"Context")+".Provider";case pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hu:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function rv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function a0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iv(e){var t=a0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $o(e){e._valueTracker||(e._valueTracker=iv(e))}function l0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=a0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c0(e,t){t=t.checked,t!=null&&du(e,"checked",t,!1)}function Wl(e,t){c0(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Od(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ki=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ki(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function u0(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function d0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?d0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,f0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ov=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){ov.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ti[t]=Ti[e]})});function p0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ti.hasOwnProperty(e)&&Ti[e]?(""+t).trim():t+"px"}function h0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=p0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var sv=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(sv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,zr=null,Mr=null;function Ud(e){if(e=yo(e)){if(typeof Jl!="function")throw Error(L(280));var t=e.stateNode;t&&(t=fa(t),Jl(e.stateNode,e.type,t))}}function m0(e){zr?Mr?Mr.push(e):Mr=[e]:zr=e}function g0(){if(zr){var e=zr,t=Mr;if(Mr=zr=null,Ud(e),t)for(e=0;e<t.length;e++)Ud(t[e])}}function y0(e,t){return e(t)}function v0(){}var Xa=!1;function x0(e,t,n){if(Xa)return e(t,n);Xa=!0;try{return y0(e,t,n)}finally{Xa=!1,(zr!==null||Mr!==null)&&(v0(),g0())}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var r=fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Zl=!1;if(Ht)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Zl=!1}function av(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ji=!1,ks=null,Ss=!1,ec=null,lv={onError:function(e){ji=!0,ks=e}};function cv(e,t,n,r,i,o,s,a,l){ji=!1,ks=null,av.apply(lv,arguments)}function uv(e,t,n,r,i,o,s,a,l){if(cv.apply(this,arguments),ji){if(ji){var c=ks;ji=!1,ks=null}else throw Error(L(198));Ss||(Ss=!0,ec=c)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function w0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hd(e){if(or(e)!==e)throw Error(L(188))}function dv(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hd(i),e;if(o===r)return Hd(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function b0(e){return e=dv(e),e!==null?k0(e):null}function k0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=k0(e);if(t!==null)return t;e=e.sibling}return null}var S0=it.unstable_scheduleCallback,Wd=it.unstable_cancelCallback,fv=it.unstable_shouldYield,pv=it.unstable_requestPaint,be=it.unstable_now,hv=it.unstable_getCurrentPriorityLevel,gu=it.unstable_ImmediatePriority,C0=it.unstable_UserBlockingPriority,Cs=it.unstable_NormalPriority,mv=it.unstable_LowPriority,E0=it.unstable_IdlePriority,la=null,Rt=null;function gv(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(la,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:xv,yv=Math.log,vv=Math.LN2;function xv(e){return e>>>=0,e===0?32:31-(yv(e)/vv|0)|0}var Ro=64,Lo=4194304;function Si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Es(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Si(a):(o&=s,o!==0&&(r=Si(o)))}else s=n&~i,s!==0?r=Si(s):o!==0&&(r=Si(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function wv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-kt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=wv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function tc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function P0(){var e=Ro;return Ro<<=1,!(Ro&4194240)&&(Ro=64),e}function qa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function kv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function yu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function T0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var j0,vu,$0,A0,R0,nc=!1,zo=[],dn=null,fn=null,pn=null,Gi=new Map,Ki=new Map,sn=[],Sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(t.pointerId)}}function li(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=yo(t),t!==null&&vu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cv(e,t,n,r,i){switch(t){case"focusin":return dn=li(dn,e,t,n,r,i),!0;case"dragenter":return fn=li(fn,e,t,n,r,i),!0;case"mouseover":return pn=li(pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Gi.set(o,li(Gi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ki.set(o,li(Ki.get(o)||null,e,t,n,r,i)),!0}return!1}function L0(e){var t=Un(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=w0(n),t!==null){e.blockedOn=t,R0(e.priority,function(){$0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=yo(n),t!==null&&vu(t),e.blockedOn=n,!1;t.shift()}return!0}function Kd(e,t,n){ts(e)&&n.delete(t)}function Ev(){nc=!1,dn!==null&&ts(dn)&&(dn=null),fn!==null&&ts(fn)&&(fn=null),pn!==null&&ts(pn)&&(pn=null),Gi.forEach(Kd),Ki.forEach(Kd)}function ci(e,t){e.blockedOn===t&&(e.blockedOn=null,nc||(nc=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,Ev)))}function Yi(e){function t(i){return ci(i,e)}if(0<zo.length){ci(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dn!==null&&ci(dn,e),fn!==null&&ci(fn,e),pn!==null&&ci(pn,e),Gi.forEach(t),Ki.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)L0(n),n.blockedOn===null&&sn.shift()}var _r=Yt.ReactCurrentBatchConfig,Ps=!0;function Pv(e,t,n,r){var i=ie,o=_r.transition;_r.transition=null;try{ie=1,xu(e,t,n,r)}finally{ie=i,_r.transition=o}}function Tv(e,t,n,r){var i=ie,o=_r.transition;_r.transition=null;try{ie=4,xu(e,t,n,r)}finally{ie=i,_r.transition=o}}function xu(e,t,n,r){if(Ps){var i=rc(e,t,n,r);if(i===null)sl(e,t,r,Ts,n),Gd(e,r);else if(Cv(i,e,t,n,r))r.stopPropagation();else if(Gd(e,r),t&4&&-1<Sv.indexOf(e)){for(;i!==null;){var o=yo(i);if(o!==null&&j0(o),o=rc(e,t,n,r),o===null&&sl(e,t,r,Ts,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else sl(e,t,r,null,n)}}var Ts=null;function rc(e,t,n,r){if(Ts=null,e=mu(r),e=Un(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=w0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ts=e,null}function z0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hv()){case gu:return 1;case C0:return 4;case Cs:case mv:return 16;case E0:return 536870912;default:return 16}default:return 16}}var ln=null,wu=null,ns=null;function M0(){if(ns)return ns;var e,t=wu,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ns=i.slice(e,1<r?1-r:void 0)}function rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mo(){return!0}function Yd(){return!1}function at(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mo:Yd,this.isPropagationStopped=Yd,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=at(ei),go=ve({},ei,{view:0,detail:0}),jv=at(go),Qa,Ja,ui,ca=ve({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Qa=e.screenX-ui.screenX,Ja=e.screenY-ui.screenY):Ja=Qa=0,ui=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),Xd=at(ca),$v=ve({},ca,{dataTransfer:0}),Av=at($v),Rv=ve({},go,{relatedTarget:0}),Za=at(Rv),Lv=ve({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=at(Lv),Mv=ve({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_v=at(Mv),Dv=ve({},ei,{data:0}),qd=at(Dv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fv[e])?!!t[e]:!1}function ku(){return Ov}var Vv=ve({},go,{key:function(e){if(e.key){var t=Nv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=at(Vv),Uv=ve({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=at(Uv),Hv=ve({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),Wv=at(Hv),Gv=ve({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=at(Gv),Yv=ve({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=at(Yv),qv=[9,13,27,32],Su=Ht&&"CompositionEvent"in window,$i=null;Ht&&"documentMode"in document&&($i=document.documentMode);var Qv=Ht&&"TextEvent"in window&&!$i,_0=Ht&&(!Su||$i&&8<$i&&11>=$i),Jd=String.fromCharCode(32),Zd=!1;function D0(e,t){switch(e){case"keyup":return qv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function Jv(e,t){switch(e){case"compositionend":return N0(t);case"keypress":return t.which!==32?null:(Zd=!0,Jd);case"textInput":return e=t.data,e===Jd&&Zd?null:e;default:return null}}function Zv(e,t){if(yr)return e==="compositionend"||!Su&&D0(e,t)?(e=M0(),ns=wu=ln=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _0&&t.locale!=="ko"?null:t.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ex[e.type]:t==="textarea"}function I0(e,t,n,r){m0(r),t=js(t,"onChange"),0<t.length&&(n=new bu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ai=null,Xi=null;function tx(e){X0(e,0)}function ua(e){var t=wr(e);if(l0(t))return e}function nx(e,t){if(e==="change")return t}var F0=!1;if(Ht){var el;if(Ht){var tl="oninput"in document;if(!tl){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),tl=typeof tf.oninput=="function"}el=tl}else el=!1;F0=el&&(!document.documentMode||9<document.documentMode)}function nf(){Ai&&(Ai.detachEvent("onpropertychange",O0),Xi=Ai=null)}function O0(e){if(e.propertyName==="value"&&ua(Xi)){var t=[];I0(t,Xi,e,mu(e)),x0(tx,t)}}function rx(e,t,n){e==="focusin"?(nf(),Ai=t,Xi=n,Ai.attachEvent("onpropertychange",O0)):e==="focusout"&&nf()}function ix(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ua(Xi)}function ox(e,t){if(e==="click")return ua(t)}function sx(e,t){if(e==="input"||e==="change")return ua(t)}function ax(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:ax;function qi(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function of(e,t){var n=rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rf(n)}}function V0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?V0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function B0(){for(var e=window,t=bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bs(e.document)}return t}function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lx(e){var t=B0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&V0(n.ownerDocument.documentElement,n)){if(r!==null&&Cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=of(n,o);var s=of(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cx=Ht&&"documentMode"in document&&11>=document.documentMode,vr=null,ic=null,Ri=null,oc=!1;function sf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||vr==null||vr!==bs(r)||(r=vr,"selectionStart"in r&&Cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&qi(Ri,r)||(Ri=r,r=js(ic,"onSelect"),0<r.length&&(t=new bu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},nl={},U0={};Ht&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function da(e){if(nl[e])return nl[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in U0)return nl[e]=t[n];return e}var H0=da("animationend"),W0=da("animationiteration"),G0=da("animationstart"),K0=da("transitionend"),Y0=new Map,af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){Y0.set(e,t),ir(t,[e])}for(var rl=0;rl<af.length;rl++){var il=af[rl],ux=il.toLowerCase(),dx=il[0].toUpperCase()+il.slice(1);Rn(ux,"on"+dx)}Rn(H0,"onAnimationEnd");Rn(W0,"onAnimationIteration");Rn(G0,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(K0,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function lf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uv(r,t,void 0,e),e.currentTarget=null}function X0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;lf(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;lf(i,a,c),o=l}}}if(Ss)throw e=ec,Ss=!1,ec=null,e}function de(e,t){var n=t[uc];n===void 0&&(n=t[uc]=new Set);var r=e+"__bubble";n.has(r)||(q0(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),q0(n,e,r,t)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[Do]){e[Do]=!0,r0.forEach(function(n){n!=="selectionchange"&&(fx.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Do]||(t[Do]=!0,ol("selectionchange",!1,t))}}function q0(e,t,n,r){switch(z0(t)){case 1:var i=Pv;break;case 4:i=Tv;break;default:i=xu}n=i.bind(null,t,n,e),i=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Un(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}x0(function(){var c=o,d=mu(n),u=[];e:{var p=Y0.get(e);if(p!==void 0){var g=bu,v=e;switch(e){case"keypress":if(rs(n)===0)break e;case"keydown":case"keyup":g=Bv;break;case"focusin":v="focus",g=Za;break;case"focusout":v="blur",g=Za;break;case"beforeblur":case"afterblur":g=Za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Wv;break;case H0:case W0:case G0:g=zv;break;case K0:g=Kv;break;case"scroll":g=jv;break;case"wheel":g=Xv;break;case"copy":case"cut":case"paste":g=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qd}var x=(t&4)!==0,S=!x&&e==="scroll",y=x?p!==null?p+"Capture":null:p;x=[];for(var m=c,h;m!==null;){h=m;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,y!==null&&(k=Wi(m,y),k!=null&&x.push(Ji(m,k,h)))),S)break;m=m.return}0<x.length&&(p=new g(p,v,null,n,d),u.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ql&&(v=n.relatedTarget||n.fromElement)&&(Un(v)||v[Wt]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Un(v):null,v!==null&&(S=or(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(x=Xd,k="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Qd,k="onPointerLeave",y="onPointerEnter",m="pointer"),S=g==null?p:wr(g),h=v==null?p:wr(v),p=new x(k,m+"leave",g,n,d),p.target=S,p.relatedTarget=h,k=null,Un(d)===c&&(x=new x(y,m+"enter",v,n,d),x.target=h,x.relatedTarget=S,k=x),S=k,g&&v)t:{for(x=g,y=v,m=0,h=x;h;h=ur(h))m++;for(h=0,k=y;k;k=ur(k))h++;for(;0<m-h;)x=ur(x),m--;for(;0<h-m;)y=ur(y),h--;for(;m--;){if(x===y||y!==null&&x===y.alternate)break t;x=ur(x),y=ur(y)}x=null}else x=null;g!==null&&cf(u,p,g,x,!1),v!==null&&S!==null&&cf(u,S,v,x,!0)}}e:{if(p=c?wr(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var E=nx;else if(ef(p))if(F0)E=sx;else{E=ix;var C=rx}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=ox);if(E&&(E=E(e,c))){I0(u,E,n,d);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Gl(p,"number",p.value)}switch(C=c?wr(c):window,e){case"focusin":(ef(C)||C.contentEditable==="true")&&(vr=C,ic=c,Ri=null);break;case"focusout":Ri=ic=vr=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,sf(u,n,d);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":sf(u,n,d)}var P;if(Su)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else yr?D0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(_0&&n.locale!=="ko"&&(yr||T!=="onCompositionStart"?T==="onCompositionEnd"&&yr&&(P=M0()):(ln=d,wu="value"in ln?ln.value:ln.textContent,yr=!0)),C=js(c,T),0<C.length&&(T=new qd(T,e,null,n,d),u.push({event:T,listeners:C}),P?T.data=P:(P=N0(n),P!==null&&(T.data=P)))),(P=Qv?Jv(e,n):Zv(e,n))&&(c=js(c,"onBeforeInput"),0<c.length&&(d=new qd("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=P))}X0(u,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wi(e,n),o!=null&&r.unshift(Ji(e,o,i)),o=Wi(e,t),o!=null&&r.push(Ji(e,o,i))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cf(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Wi(n,o),l!=null&&s.unshift(Ji(n,l,a))):i||(l=Wi(n,o),l!=null&&s.push(Ji(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var px=/\r\n?/g,hx=/\u0000|\uFFFD/g;function uf(e){return(typeof e=="string"?e:""+e).replace(px,`
`).replace(hx,"")}function No(e,t,n){if(t=uf(t),uf(e)!==t&&n)throw Error(L(425))}function $s(){}var sc=null,ac=null;function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(e){return df.resolve(null).then(e).catch(yx)}:cc;function yx(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),At="__reactFiber$"+ti,Zi="__reactProps$"+ti,Wt="__reactContainer$"+ti,uc="__reactEvents$"+ti,vx="__reactListeners$"+ti,xx="__reactHandles$"+ti;function Un(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[At])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function yo(e){return e=e[At]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function fa(e){return e[Zi]||null}var dc=[],br=-1;function Ln(e){return{current:e}}function pe(e){0>br||(e.current=dc[br],dc[br]=null,br--)}function ce(e,t){br++,dc[br]=e.current,e.current=t}var Tn={},Ve=Ln(Tn),Qe=Ln(!1),Jn=Tn;function Fr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function As(){pe(Qe),pe(Ve)}function pf(e,t,n){if(Ve.current!==Tn)throw Error(L(168));ce(Ve,t),ce(Qe,n)}function Q0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,rv(e)||"Unknown",i));return ve({},n,r)}function Rs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Jn=Ve.current,ce(Ve,e),ce(Qe,Qe.current),!0}function hf(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Q0(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,pe(Qe),pe(Ve),ce(Ve,e)):pe(Qe),ce(Qe,n)}var It=null,pa=!1,ll=!1;function J0(e){It===null?It=[e]:It.push(e)}function wx(e){pa=!0,J0(e)}function zn(){if(!ll&&It!==null){ll=!0;var e=0,t=ie;try{var n=It;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,pa=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),S0(gu,zn),i}finally{ie=t,ll=!1}}return null}var kr=[],Sr=0,Ls=null,zs=0,ut=[],dt=0,Zn=null,Ft=1,Ot="";function Nn(e,t){kr[Sr++]=zs,kr[Sr++]=Ls,Ls=e,zs=t}function Z0(e,t,n){ut[dt++]=Ft,ut[dt++]=Ot,ut[dt++]=Zn,Zn=e;var r=Ft;e=Ot;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var o=32-kt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ft=1<<32-kt(t)+i|n<<i|r,Ot=o+e}else Ft=1<<o|n<<i|r,Ot=e}function Eu(e){e.return!==null&&(Nn(e,1),Z0(e,1,0))}function Pu(e){for(;e===Ls;)Ls=kr[--Sr],kr[Sr]=null,zs=kr[--Sr],kr[Sr]=null;for(;e===Zn;)Zn=ut[--dt],ut[dt]=null,Ot=ut[--dt],ut[dt]=null,Ft=ut[--dt],ut[dt]=null}var nt=null,tt=null,he=!1,wt=null;function em(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:Ft,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pc(e){if(he){var t=tt;if(t){var n=t;if(!mf(e,t)){if(fc(e))throw Error(L(418));t=hn(n.nextSibling);var r=nt;t&&mf(e,t)?em(r,n):(e.flags=e.flags&-4097|2,he=!1,nt=e)}}else{if(fc(e))throw Error(L(418));e.flags=e.flags&-4097|2,he=!1,nt=e}}}function gf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Io(e){if(e!==nt)return!1;if(!he)return gf(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lc(e.type,e.memoizedProps)),t&&(t=tt)){if(fc(e))throw tm(),Error(L(418));for(;t;)em(e,t),t=hn(t.nextSibling)}if(gf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?hn(e.stateNode.nextSibling):null;return!0}function tm(){for(var e=tt;e;)e=hn(e.nextSibling)}function Or(){tt=nt=null,he=!1}function Tu(e){wt===null?wt=[e]:wt.push(e)}var bx=Yt.ReactCurrentBatchConfig;function di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yf(e){var t=e._init;return t(e._payload)}function nm(e){function t(y,m){if(e){var h=y.deletions;h===null?(y.deletions=[m],y.flags|=16):h.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=vn(y,m),y.index=0,y.sibling=null,y}function o(y,m,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<m?(y.flags|=2,m):h):(y.flags|=2,m)):(y.flags|=1048576,m)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,m,h,k){return m===null||m.tag!==6?(m=ml(h,y.mode,k),m.return=y,m):(m=i(m,h),m.return=y,m)}function l(y,m,h,k){var E=h.type;return E===gr?d(y,m,h.props.children,k,h.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nn&&yf(E)===m.type)?(k=i(m,h.props),k.ref=di(y,m,h),k.return=y,k):(k=us(h.type,h.key,h.props,null,y.mode,k),k.ref=di(y,m,h),k.return=y,k)}function c(y,m,h,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=gl(h,y.mode,k),m.return=y,m):(m=i(m,h.children||[]),m.return=y,m)}function d(y,m,h,k,E){return m===null||m.tag!==7?(m=Xn(h,y.mode,k,E),m.return=y,m):(m=i(m,h),m.return=y,m)}function u(y,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ml(""+m,y.mode,h),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case jo:return h=us(m.type,m.key,m.props,null,y.mode,h),h.ref=di(y,null,m),h.return=y,h;case mr:return m=gl(m,y.mode,h),m.return=y,m;case nn:var k=m._init;return u(y,k(m._payload),h)}if(ki(m)||si(m))return m=Xn(m,y.mode,h,null),m.return=y,m;Fo(y,m)}return null}function p(y,m,h,k){var E=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(y,m,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case jo:return h.key===E?l(y,m,h,k):null;case mr:return h.key===E?c(y,m,h,k):null;case nn:return E=h._init,p(y,m,E(h._payload),k)}if(ki(h)||si(h))return E!==null?null:d(y,m,h,k,null);Fo(y,h)}return null}function g(y,m,h,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(h)||null,a(m,y,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case jo:return y=y.get(k.key===null?h:k.key)||null,l(m,y,k,E);case mr:return y=y.get(k.key===null?h:k.key)||null,c(m,y,k,E);case nn:var C=k._init;return g(y,m,h,C(k._payload),E)}if(ki(k)||si(k))return y=y.get(h)||null,d(m,y,k,E,null);Fo(m,k)}return null}function v(y,m,h,k){for(var E=null,C=null,P=m,T=m=0,M=null;P!==null&&T<h.length;T++){P.index>T?(M=P,P=null):M=P.sibling;var R=p(y,P,h[T],k);if(R===null){P===null&&(P=M);break}e&&P&&R.alternate===null&&t(y,P),m=o(R,m,T),C===null?E=R:C.sibling=R,C=R,P=M}if(T===h.length)return n(y,P),he&&Nn(y,T),E;if(P===null){for(;T<h.length;T++)P=u(y,h[T],k),P!==null&&(m=o(P,m,T),C===null?E=P:C.sibling=P,C=P);return he&&Nn(y,T),E}for(P=r(y,P);T<h.length;T++)M=g(P,y,T,h[T],k),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?T:M.key),m=o(M,m,T),C===null?E=M:C.sibling=M,C=M);return e&&P.forEach(function(B){return t(y,B)}),he&&Nn(y,T),E}function x(y,m,h,k){var E=si(h);if(typeof E!="function")throw Error(L(150));if(h=E.call(h),h==null)throw Error(L(151));for(var C=E=null,P=m,T=m=0,M=null,R=h.next();P!==null&&!R.done;T++,R=h.next()){P.index>T?(M=P,P=null):M=P.sibling;var B=p(y,P,R.value,k);if(B===null){P===null&&(P=M);break}e&&P&&B.alternate===null&&t(y,P),m=o(B,m,T),C===null?E=B:C.sibling=B,C=B,P=M}if(R.done)return n(y,P),he&&Nn(y,T),E;if(P===null){for(;!R.done;T++,R=h.next())R=u(y,R.value,k),R!==null&&(m=o(R,m,T),C===null?E=R:C.sibling=R,C=R);return he&&Nn(y,T),E}for(P=r(y,P);!R.done;T++,R=h.next())R=g(P,y,T,R.value,k),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?T:R.key),m=o(R,m,T),C===null?E=R:C.sibling=R,C=R);return e&&P.forEach(function(K){return t(y,K)}),he&&Nn(y,T),E}function S(y,m,h,k){if(typeof h=="object"&&h!==null&&h.type===gr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case jo:e:{for(var E=h.key,C=m;C!==null;){if(C.key===E){if(E=h.type,E===gr){if(C.tag===7){n(y,C.sibling),m=i(C,h.props.children),m.return=y,y=m;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nn&&yf(E)===C.type){n(y,C.sibling),m=i(C,h.props),m.ref=di(y,C,h),m.return=y,y=m;break e}n(y,C);break}else t(y,C);C=C.sibling}h.type===gr?(m=Xn(h.props.children,y.mode,k,h.key),m.return=y,y=m):(k=us(h.type,h.key,h.props,null,y.mode,k),k.ref=di(y,m,h),k.return=y,y=k)}return s(y);case mr:e:{for(C=h.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(y,m.sibling),m=i(m,h.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=gl(h,y.mode,k),m.return=y,y=m}return s(y);case nn:return C=h._init,S(y,m,C(h._payload),k)}if(ki(h))return v(y,m,h,k);if(si(h))return x(y,m,h,k);Fo(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,h),m.return=y,y=m):(n(y,m),m=ml(h,y.mode,k),m.return=y,y=m),s(y)):n(y,m)}return S}var Vr=nm(!0),rm=nm(!1),Ms=Ln(null),_s=null,Cr=null,ju=null;function $u(){ju=Cr=_s=null}function Au(e){var t=Ms.current;pe(Ms),e._currentValue=t}function hc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dr(e,t){_s=e,ju=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(ju!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(_s===null)throw Error(L(308));Cr=e,_s.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Hn=null;function Ru(e){Hn===null?Hn=[e]:Hn.push(e)}function im(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ru(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ru(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)}}function vf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ds(e,t,n,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var u=i.baseState;s=0,d=c=l=null,a=o;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){u=v.call(g,u,p);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,u,p):v,p==null)break e;u=ve({},u,p);break e;case 2:rn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=u):d=d.next=g,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tr|=s,e.lanes=s,e.memoizedState=u}}function xf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var vo={},Lt=Ln(vo),eo=Ln(vo),to=Ln(vo);function Wn(e){if(e===vo)throw Error(L(174));return e}function zu(e,t){switch(ce(to,t),ce(eo,e),ce(Lt,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yl(t,e)}pe(Lt),ce(Lt,t)}function Br(){pe(Lt),pe(eo),pe(to)}function sm(e){Wn(to.current);var t=Wn(Lt.current),n=Yl(t,e.type);t!==n&&(ce(eo,e),ce(Lt,n))}function Mu(e){eo.current===e&&(pe(Lt),pe(eo))}var me=Ln(0);function Ns(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function _u(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var os=Yt.ReactCurrentDispatcher,ul=Yt.ReactCurrentBatchConfig,er=0,ye=null,$e=null,Re=null,Is=!1,Li=!1,no=0,kx=0;function Ie(){throw Error(L(321))}function Du(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Nu(e,t,n,r,i,o){if(er=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,os.current=e===null||e.memoizedState===null?Px:Tx,e=n(r,i),Li){o=0;do{if(Li=!1,no=0,25<=o)throw Error(L(301));o+=1,Re=$e=null,t.updateQueue=null,os.current=jx,e=n(r,i)}while(Li)}if(os.current=Fs,t=$e!==null&&$e.next!==null,er=0,Re=$e=ye=null,Is=!1,t)throw Error(L(300));return e}function Iu(){var e=no!==0;return no=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ye.memoizedState=Re=e:Re=Re.next=e,Re}function mt(){if($e===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Re===null?ye.memoizedState:Re.next;if(t!==null)Re=t,$e=e;else{if(e===null)throw Error(L(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Re===null?ye.memoizedState=Re=e:Re=Re.next=e}return Re}function ro(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=mt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=$e,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((er&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,s=r):l=l.next=u,ye.lanes|=d,tr|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Et(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ye.lanes|=o,tr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fl(e){var t=mt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Et(o,t.memoizedState)||(qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function am(){}function lm(e,t){var n=ye,r=mt(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,qe=!0),r=r.queue,Fu(dm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,io(9,um.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(L(349));er&30||cm(n,t,i)}return i}function cm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function um(e,t,n,r){t.value=n,t.getSnapshot=r,fm(t)&&pm(e)}function dm(e,t,n){return n(function(){fm(t)&&pm(e)})}function fm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function pm(e){var t=Gt(e,1);t!==null&&St(t,e,1,-1)}function wf(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=Ex.bind(null,ye,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hm(){return mt().memoizedState}function ss(e,t,n,r){var i=jt();ye.flags|=e,i.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function ha(e,t,n,r){var i=mt();r=r===void 0?null:r;var o=void 0;if($e!==null){var s=$e.memoizedState;if(o=s.destroy,r!==null&&Du(r,s.deps)){i.memoizedState=io(t,n,o,r);return}}ye.flags|=e,i.memoizedState=io(1|t,n,o,r)}function bf(e,t){return ss(8390656,8,e,t)}function Fu(e,t){return ha(2048,8,e,t)}function mm(e,t){return ha(4,2,e,t)}function gm(e,t){return ha(4,4,e,t)}function ym(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vm(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,4,ym.bind(null,t,e),n)}function Ou(){}function xm(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wm(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Du(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bm(e,t,n){return er&21?(Et(n,t)||(n=P0(),ye.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function Sx(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{ie=n,ul.transition=r}}function km(){return mt().memoizedState}function Cx(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sm(e))Cm(t,n);else if(n=im(e,t,n,r),n!==null){var i=We();St(n,e,r,i),Em(n,t,r)}}function Ex(e,t,n){var r=yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sm(e))Cm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,s)){var l=t.interleaved;l===null?(i.next=i,Ru(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=im(e,t,i,r),n!==null&&(i=We(),St(n,e,r,i),Em(n,t,r))}}function Sm(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Cm(e,t){Li=Is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Em(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)}}var Fs={readContext:ht,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Px={readContext:ht,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:bf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ss(4194308,4,ym.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return ss(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cx.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:wf,useDebugValue:Ou,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=wf(!1),t=e[0];return e=Sx.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=jt();if(he){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Me===null)throw Error(L(349));er&30||cm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bf(dm.bind(null,r,o,e),[e]),r.flags|=2048,io(9,um.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=jt(),t=Me.identifierPrefix;if(he){var n=Ot,r=Ft;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tx={readContext:ht,useCallback:xm,useContext:ht,useEffect:Fu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:dl,useRef:hm,useState:function(){return dl(ro)},useDebugValue:Ou,useDeferredValue:function(e){var t=mt();return bm(t,$e.memoizedState,e)},useTransition:function(){var e=dl(ro)[0],t=mt().memoizedState;return[e,t]},useMutableSource:am,useSyncExternalStore:lm,useId:km,unstable_isNewReconciler:!1},jx={readContext:ht,useCallback:xm,useContext:ht,useEffect:Fu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:fl,useRef:hm,useState:function(){return fl(ro)},useDebugValue:Ou,useDeferredValue:function(e){var t=mt();return $e===null?t.memoizedState=e:bm(t,$e.memoizedState,e)},useTransition:function(){var e=fl(ro)[0],t=mt().memoizedState;return[e,t]},useMutableSource:am,useSyncExternalStore:lm,useId:km,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ma={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=yn(e),o=Bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(St(t,e,i,r),is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=yn(e),o=Bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mn(e,o,i),t!==null&&(St(t,e,i,r),is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=yn(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=mn(e,i,r),t!==null&&(St(t,e,r,n),is(t,e,r))}};function kf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!qi(n,r)||!qi(i,o):!0}function Pm(e,t,n){var r=!1,i=Tn,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(i=Je(t)?Jn:Ve.current,r=t.contextTypes,o=(r=r!=null)?Fr(e,i):Tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ma,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ma.enqueueReplaceState(t,t.state,null)}function gc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ht(o):(o=Je(t)?Jn:Ve.current,i.context=Fr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(mc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ma.enqueueReplaceState(i,i.state,null),Ds(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var n="",r=t;do n+=nv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function Tm(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,Tc=r),yc(e,t)},n}function jm(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yc(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Cf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $x;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ux.bind(null,e,t,n),t.then(e,e))}function Ef(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e)}var Ax=Yt.ReactCurrentOwner,qe=!1;function He(e,t,n,r){t.child=e===null?rm(t,null,n,r):Vr(t,e.child,n,r)}function Tf(e,t,n,r,i){n=n.render;var o=t.ref;return Dr(t,i),r=Nu(e,t,n,r,o,i),n=Iu(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(he&&n&&Eu(t),t.flags|=1,He(e,t,r,i),t.child)}function jf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$m(e,t,o,r,i)):(e=us(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(s,r)&&e.ref===t.ref)return Kt(e,t,i)}return t.flags|=1,e=vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function $m(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qi(o,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Kt(e,t,i)}return vc(e,t,n,r,i)}function Am(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Pr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Pr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(Pr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(Pr,et),et|=r;return He(e,t,i,n),t.child}function Rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vc(e,t,n,r,i){var o=Je(n)?Jn:Ve.current;return o=Fr(t,o),Dr(t,i),n=Nu(e,t,n,r,o,i),r=Iu(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kt(e,t,i)):(he&&r&&Eu(t),t.flags|=1,He(e,t,n,i),t.child)}function $f(e,t,n,r,i){if(Je(n)){var o=!0;Rs(t)}else o=!1;if(Dr(t,i),t.stateNode===null)as(e,t),Pm(t,n,r),gc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ht(c):(c=Je(n)?Jn:Ve.current,c=Fr(t,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Sf(t,s,r,c),rn=!1;var p=t.memoizedState;s.state=p,Ds(t,r,s,i),l=t.memoizedState,a!==r||p!==l||Qe.current||rn?(typeof d=="function"&&(mc(t,n,d,r),l=t.memoizedState),(a=rn||kf(t,n,a,r,p,l,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,om(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:vt(t.type,a),s.props=c,u=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=Je(n)?Jn:Ve.current,l=Fr(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==u||p!==l)&&Sf(t,s,r,l),rn=!1,p=t.memoizedState,s.state=p,Ds(t,r,s,i);var v=t.memoizedState;a!==u||p!==v||Qe.current||rn?(typeof g=="function"&&(mc(t,n,g,r),v=t.memoizedState),(c=rn||kf(t,n,c,r,p,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xc(e,t,n,r,o,i)}function xc(e,t,n,r,i,o){Rm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&hf(t,n,!1),Kt(e,t,o);r=t.stateNode,Ax.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Vr(t,e.child,null,o),t.child=Vr(t,null,a,o)):He(e,t,a,o),t.memoizedState=r.state,i&&hf(t,n,!0),t.child}function Lm(e){var t=e.stateNode;t.pendingContext?pf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pf(e,t.context,!1),zu(e,t.containerInfo)}function Af(e,t,n,r,i){return Or(),Tu(i),t.flags|=256,He(e,t,n,r),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function zm(e,t,n){var r=t.pendingProps,i=me.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(me,i&1),e===null)return pc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=va(s,r,0,null),e=Xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bc(n),t.memoizedState=wc,e):Vu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Rx(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=vn(a,o):(o=Xn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?bc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=wc,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vu(e,t){return t=va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oo(e,t,n,r){return r!==null&&Tu(r),Vr(t,e.child,null,n),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rx(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(L(422))),Oo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=va({mode:"visible",children:r.children},i,0,null),o=Xn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Vr(t,e.child,null,s),t.child.memoizedState=bc(s),t.memoizedState=wc,o);if(!(t.mode&1))return Oo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=pl(o,r,void 0),Oo(e,t,s,r)}if(a=(s&e.childLanes)!==0,qe||a){if(r=Me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),St(r,e,i,-1))}return Ku(),r=pl(Error(L(421))),Oo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=hn(i.nextSibling),nt=t,he=!0,wt=null,e!==null&&(ut[dt++]=Ft,ut[dt++]=Ot,ut[dt++]=Zn,Ft=e.id,Ot=e.overflow,Zn=t),t=Vu(t,r.children),t.flags|=4096,t)}function Rf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hc(e.return,t,n)}function hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rf(e,n,t);else if(e.tag===19)Rf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ns(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ns(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,o);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function as(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lx(e,t,n){switch(t.tag){case 3:Lm(t),Or();break;case 5:sm(t);break;case 1:Je(t.type)&&Rs(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(Ms,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?zm(e,t,n):(ce(me,me.current&1),e=Kt(e,t,n),e!==null?e.sibling:null);ce(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Am(e,t,n)}return Kt(e,t,n)}var _m,kc,Dm,Nm;_m=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};Dm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wn(Lt.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=Kl(e,i),r=Kl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$s)}Xl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ui.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&de("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Nm=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zx(e,t,n){var r=t.pendingProps;switch(Pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Je(t.type)&&As(),Fe(t),null;case 3:return r=t.stateNode,Br(),pe(Qe),pe(Ve),_u(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(Ac(wt),wt=null))),kc(e,t),Fe(t),null;case 5:Mu(t);var i=Wn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)Dm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Fe(t),null}if(e=Wn(Lt.current),Io(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[At]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)de(Ci[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Fd(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":Vd(r,o),de("invalid",r)}Xl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",""+a]):Ui.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&de("scroll",r)}switch(n){case"input":$o(r),Od(r,o,!0);break;case"textarea":$o(r),Bd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$s)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=d0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[At]=t,e[Zi]=r,_m(e,t,!1,!1),t.stateNode=e;e:{switch(s=ql(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)de(Ci[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":Fd(e,r),i=Hl(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",e);break;case"textarea":Vd(e,r),i=Kl(e,r),de("invalid",e);break;default:i=r}Xl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?h0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&f0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hi(e,l):typeof l=="number"&&Hi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?l!=null&&o==="onScroll"&&de("scroll",e):l!=null&&du(e,o,l,s))}switch(n){case"input":$o(e),Od(e,r,!1);break;case"textarea":$o(e),Bd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$s)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Wn(to.current),Wn(Lt.current),Io(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:No(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Fe(t),null;case 13:if(pe(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&tt!==null&&t.mode&1&&!(t.flags&128))tm(),Or(),t.flags|=98560,o=!1;else if(o=Io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[At]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else wt!==null&&(Ac(wt),wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ae===0&&(Ae=3):Ku())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Br(),kc(e,t),e===null&&Qi(t.stateNode.containerInfo),Fe(t),null;case 10:return Au(t.type._context),Fe(t),null;case 17:return Je(t.type)&&As(),Fe(t),null;case 19:if(pe(me),o=t.memoizedState,o===null)return Fe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)fi(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ns(e),s!==null){for(t.flags|=128,fi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>Hr&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ns(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!he)return Fe(t),null}else 2*be()-o.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=me.current,ce(me,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Mx(e,t){switch(Pu(t),t.tag){case 1:return Je(t.type)&&As(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),pe(Qe),pe(Ve),_u(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mu(t),null;case 13:if(pe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(me),null;case 4:return Br(),null;case 10:return Au(t.type._context),null;case 22:case 23:return Gu(),null;case 24:return null;default:return null}}var Vo=!1,Oe=!1,_x=typeof WeakSet=="function"?WeakSet:Set,N=null;function Er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function Sc(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Lf=!1;function Dx(e,t){if(sc=Ps,e=B0(),Cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,u=e,p=null;t:for(;;){for(var g;u!==n||i!==0&&u.nodeType!==3||(a=s+i),u!==o||r!==0&&u.nodeType!==3||(l=s+r),u.nodeType===3&&(s+=u.nodeValue.length),(g=u.firstChild)!==null;)p=u,u=g;for(;;){if(u===e)break t;if(p===n&&++c===i&&(a=s),p===o&&++d===r&&(l=s),(g=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ac={focusedElem:e,selectionRange:n},Ps=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:vt(t.type,x),S);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(k){xe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=Lf,Lf=!1,v}function zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sc(t,n,o)}i=i.next}while(i!==r)}}function ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Im(e){var t=e.alternate;t!==null&&(e.alternate=null,Im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Zi],delete t[uc],delete t[vx],delete t[xx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fm(e){return e.tag===5||e.tag===3||e.tag===4}function zf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$s));else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}function Pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}var _e=null,xt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Om(e,t,n),n=n.sibling}function Om(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(la,n)}catch{}switch(n.tag){case 5:Oe||Er(n,t);case 6:var r=_e,i=xt;_e=null,Jt(e,t,n),_e=r,xt=i,_e!==null&&(xt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(xt?(e=_e,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),Yi(e)):al(_e,n.stateNode));break;case 4:r=_e,i=xt,_e=n.stateNode.containerInfo,xt=!0,Jt(e,t,n),_e=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Sc(n,t,s),i=i.next}while(i!==r)}Jt(e,t,n);break;case 1:if(!Oe&&(Er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Jt(e,t,n),Oe=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function Mf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _x),t.forEach(function(r){var i=Wx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,xt=!1;break e;case 3:_e=a.stateNode.containerInfo,xt=!0;break e;case 4:_e=a.stateNode.containerInfo,xt=!0;break e}a=a.return}if(_e===null)throw Error(L(160));Om(o,s,i),_e=null,xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){xe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vm(t,e),t=t.sibling}function Vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),Tt(e),r&4){try{zi(3,e,e.return),ga(3,e)}catch(x){xe(e,e.return,x)}try{zi(5,e,e.return)}catch(x){xe(e,e.return,x)}}break;case 1:yt(t,e),Tt(e),r&512&&n!==null&&Er(n,n.return);break;case 5:if(yt(t,e),Tt(e),r&512&&n!==null&&Er(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(x){xe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&c0(i,o),ql(a,s);var c=ql(a,o);for(s=0;s<l.length;s+=2){var d=l[s],u=l[s+1];d==="style"?h0(i,u):d==="dangerouslySetInnerHTML"?f0(i,u):d==="children"?Hi(i,u):du(i,d,u,c)}switch(a){case"input":Wl(i,o);break;case"textarea":u0(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Lr(i,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Lr(i,!!o.multiple,o.defaultValue,!0):Lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zi]=o}catch(x){xe(e,e.return,x)}}break;case 6:if(yt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){xe(e,e.return,x)}}break;case 3:if(yt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(x){xe(e,e.return,x)}break;case 4:yt(t,e),Tt(e);break;case 13:yt(t,e),Tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hu=be())),r&4&&Mf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(c=Oe)||d,yt(t,e),Oe=c):yt(t,e),Tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(u=N=d;N!==null;){switch(p=N,g=p.child,p.tag){case 0:case 11:case 14:case 15:zi(4,p,p.return);break;case 1:Er(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:Er(p,p.return);break;case 22:if(p.memoizedState!==null){Df(u);continue}}g!==null?(g.return=p,N=g):Df(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,l=u.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p0("display",s))}catch(x){xe(e,e.return,x)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(x){xe(e,e.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:yt(t,e),Tt(e),r&4&&Mf(e);break;case 21:break;default:yt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fm(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=zf(e);Pc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=zf(e);Ec(e,a,s);break;default:throw Error(L(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nx(e,t,n){N=e,Bm(e)}function Bm(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Oe;a=Vo;var c=Oe;if(Vo=s,(Oe=l)&&!c)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?Nf(i):l!==null?(l.return=s,N=l):Nf(i);for(;o!==null;)N=o,Bm(o),o=o.sibling;N=i,Vo=a,Oe=c}_f(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):_f(e)}}function _f(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||ga(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Yi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Oe||t.flags&512&&Cc(t)}catch(p){xe(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Df(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Nf(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ga(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){xe(t,i,l)}}var o=t.return;try{Cc(t)}catch(l){xe(t,o,l)}break;case 5:var s=t.return;try{Cc(t)}catch(l){xe(t,s,l)}}}catch(l){xe(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Ix=Math.ceil,Os=Yt.ReactCurrentDispatcher,Bu=Yt.ReactCurrentOwner,pt=Yt.ReactCurrentBatchConfig,ee=0,Me=null,Ce=null,De=0,et=0,Pr=Ln(0),Ae=0,oo=null,tr=0,ya=0,Uu=0,Mi=null,Ye=null,Hu=0,Hr=1/0,Dt=null,Vs=!1,Tc=null,gn=null,Bo=!1,cn=null,Bs=0,_i=0,jc=null,ls=-1,cs=0;function We(){return ee&6?be():ls!==-1?ls:ls=be()}function yn(e){return e.mode&1?ee&2&&De!==0?De&-De:bx.transition!==null?(cs===0&&(cs=P0()),cs):(e=ie,e!==0||(e=window.event,e=e===void 0?16:z0(e.type)),e):1}function St(e,t,n,r){if(50<_i)throw _i=0,jc=null,Error(L(185));mo(e,n,r),(!(ee&2)||e!==Me)&&(e===Me&&(!(ee&2)&&(ya|=n),Ae===4&&an(e,De)),Ze(e,r),n===1&&ee===0&&!(t.mode&1)&&(Hr=be()+500,pa&&zn()))}function Ze(e,t){var n=e.callbackNode;bv(e,t);var r=Es(e,e===Me?De:0);if(r===0)n!==null&&Wd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wd(n),t===1)e.tag===0?wx(If.bind(null,e)):J0(If.bind(null,e)),gx(function(){!(ee&6)&&zn()}),n=null;else{switch(T0(r)){case 1:n=gu;break;case 4:n=C0;break;case 16:n=Cs;break;case 536870912:n=E0;break;default:n=Cs}n=qm(n,Um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Um(e,t){if(ls=-1,cs=0,ee&6)throw Error(L(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=Es(e,e===Me?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var i=ee;ee|=2;var o=Wm();(Me!==e||De!==t)&&(Dt=null,Hr=be()+500,Yn(e,t));do try{Vx();break}catch(a){Hm(e,a)}while(1);$u(),Os.current=o,ee=i,Ce!==null?t=0:(Me=null,De=0,t=Ae)}if(t!==0){if(t===2&&(i=tc(e),i!==0&&(r=i,t=$c(e,i))),t===1)throw n=oo,Yn(e,0),an(e,r),Ze(e,be()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fx(i)&&(t=Us(e,r),t===2&&(o=tc(e),o!==0&&(r=o,t=$c(e,o))),t===1))throw n=oo,Yn(e,0),an(e,r),Ze(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:In(e,Ye,Dt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Hu+500-be(),10<t)){if(Es(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cc(In.bind(null,e,Ye,Dt),t);break}In(e,Ye,Dt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-kt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ix(r/1960))-r,10<r){e.timeoutHandle=cc(In.bind(null,e,Ye,Dt),r);break}In(e,Ye,Dt);break;case 5:In(e,Ye,Dt);break;default:throw Error(L(329))}}}return Ze(e,be()),e.callbackNode===n?Um.bind(null,e):null}function $c(e,t){var n=Mi;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Us(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ac(t)),e}function Ac(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Fx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Uu,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function If(e){if(ee&6)throw Error(L(327));Nr();var t=Es(e,0);if(!(t&1))return Ze(e,be()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=tc(e);r!==0&&(t=r,n=$c(e,r))}if(n===1)throw n=oo,Yn(e,0),an(e,t),Ze(e,be()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,Ye,Dt),Ze(e,be()),null}function Wu(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Hr=be()+500,pa&&zn())}}function nr(e){cn!==null&&cn.tag===0&&!(ee&6)&&Nr();var t=ee;ee|=1;var n=pt.transition,r=ie;try{if(pt.transition=null,ie=1,e)return e()}finally{ie=r,pt.transition=n,ee=t,!(ee&6)&&zn()}}function Gu(){et=Pr.current,pe(Pr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mx(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Pu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&As();break;case 3:Br(),pe(Qe),pe(Ve),_u();break;case 5:Mu(r);break;case 4:Br();break;case 13:pe(me);break;case 19:pe(me);break;case 10:Au(r.type._context);break;case 22:case 23:Gu()}n=n.return}if(Me=e,Ce=e=vn(e.current,null),De=et=t,Ae=0,oo=null,Uu=ya=tr=0,Ye=Mi=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Hn=null}return e}function Hm(e,t){do{var n=Ce;try{if($u(),os.current=Fs,Is){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Is=!1}if(er=0,Re=$e=ye=null,Li=!1,no=0,Bu.current=null,n===null||n.return===null){Ae=1,oo=t,Ce=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Ef(s);if(g!==null){g.flags&=-257,Pf(g,s,a,o,t),g.mode&1&&Cf(o,c,t),t=g,l=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Cf(o,c,t),Ku();break e}l=Error(L(426))}}else if(he&&a.mode&1){var S=Ef(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Pf(S,s,a,o,t),Tu(Ur(l,a));break e}}o=l=Ur(l,a),Ae!==4&&(Ae=2),Mi===null?Mi=[o]:Mi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Tm(o,l,t);vf(o,y);break e;case 1:a=l;var m=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(gn===null||!gn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=jm(o,a,t);vf(o,k);break e}}o=o.return}while(o!==null)}Km(n)}catch(E){t=E,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function Wm(){var e=Os.current;return Os.current=Fs,e===null?Fs:e}function Ku(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Me===null||!(tr&268435455)&&!(ya&268435455)||an(Me,De)}function Us(e,t){var n=ee;ee|=2;var r=Wm();(Me!==e||De!==t)&&(Dt=null,Yn(e,t));do try{Ox();break}catch(i){Hm(e,i)}while(1);if($u(),ee=n,Os.current=r,Ce!==null)throw Error(L(261));return Me=null,De=0,Ae}function Ox(){for(;Ce!==null;)Gm(Ce)}function Vx(){for(;Ce!==null&&!fv();)Gm(Ce)}function Gm(e){var t=Xm(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Km(e):Ce=t,Bu.current=null}function Km(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mx(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ce=null;return}}else if(n=zx(n,t,et),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Ae===0&&(Ae=5)}function In(e,t,n){var r=ie,i=pt.transition;try{pt.transition=null,ie=1,Bx(e,t,n,r)}finally{pt.transition=i,ie=r}return null}function Bx(e,t,n,r){do Nr();while(cn!==null);if(ee&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(kv(e,o),e===Me&&(Ce=Me=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,qm(Cs,function(){return Nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=pt.transition,pt.transition=null;var s=ie;ie=1;var a=ee;ee|=4,Bu.current=null,Dx(e,n),Vm(n,e),lx(ac),Ps=!!sc,ac=sc=null,e.current=n,Nx(n),pv(),ee=a,ie=s,pt.transition=o}else e.current=n;if(Bo&&(Bo=!1,cn=e,Bs=i),o=e.pendingLanes,o===0&&(gn=null),gv(n.stateNode),Ze(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vs)throw Vs=!1,e=Tc,Tc=null,e;return Bs&1&&e.tag!==0&&Nr(),o=e.pendingLanes,o&1?e===jc?_i++:(_i=0,jc=e):_i=0,zn(),null}function Nr(){if(cn!==null){var e=T0(Bs),t=pt.transition,n=ie;try{if(pt.transition=null,ie=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Bs=0,ee&6)throw Error(L(331));var i=ee;for(ee|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:zi(8,d,o)}var u=d.child;if(u!==null)u.return=d,N=u;else for(;N!==null;){d=N;var p=d.sibling,g=d.return;if(Im(d),d===c){N=null;break}if(p!==null){p.return=g,N=p;break}N=g}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zi(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,N=y;break e}N=o.return}}var m=e.current;for(N=m;N!==null;){s=N;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,N=h;else e:for(s=m;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ga(9,a)}}catch(E){xe(a,a.return,E)}if(a===s){N=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,N=k;break e}N=a.return}}if(ee=i,zn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(la,e)}catch{}r=!0}return r}finally{ie=n,pt.transition=t}}return!1}function Ff(e,t,n){t=Ur(n,t),t=Tm(e,t,1),e=mn(e,t,1),t=We(),e!==null&&(mo(e,1,t),Ze(e,t))}function xe(e,t,n){if(e.tag===3)Ff(e,e,n);else for(;t!==null;){if(t.tag===3){Ff(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=Ur(n,e),e=jm(t,e,1),t=mn(t,e,1),e=We(),t!==null&&(mo(t,1,e),Ze(t,e));break}}t=t.return}}function Ux(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(De&n)===n&&(Ae===4||Ae===3&&(De&130023424)===De&&500>be()-Hu?Yn(e,0):Uu|=n),Ze(e,t)}function Ym(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=We();e=Gt(e,t),e!==null&&(mo(e,t,n),Ze(e,n))}function Hx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ym(e,n)}function Wx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),Ym(e,n)}var Xm;Xm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,Lx(e,t,n);qe=!!(e.flags&131072)}else qe=!1,he&&t.flags&1048576&&Z0(t,zs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;as(e,t),e=t.pendingProps;var i=Fr(t,Ve.current);Dr(t,n),i=Nu(null,t,r,e,i,n);var o=Iu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(o=!0,Rs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lu(t),i.updater=ma,t.stateNode=i,i._reactInternals=t,gc(t,r,e,n),t=xc(null,t,r,!0,o,n)):(t.tag=0,he&&o&&Eu(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(as(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Kx(r),e=vt(r,e),i){case 0:t=vc(null,t,r,e,n);break e;case 1:t=$f(null,t,r,e,n);break e;case 11:t=Tf(null,t,r,e,n);break e;case 14:t=jf(null,t,r,vt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),vc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),$f(e,t,r,i,n);case 3:e:{if(Lm(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,om(e,t),Ds(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ur(Error(L(423)),t),t=Af(e,t,r,n,i);break e}else if(r!==i){i=Ur(Error(L(424)),t),t=Af(e,t,r,n,i);break e}else for(tt=hn(t.stateNode.containerInfo.firstChild),nt=t,he=!0,wt=null,n=rm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=Kt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return sm(t),e===null&&pc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,lc(r,i)?s=null:o!==null&&lc(r,o)&&(t.flags|=32),Rm(e,t),He(e,t,s,n),t.child;case 6:return e===null&&pc(t),null;case 13:return zm(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Tf(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ce(Ms,r._currentValue),r._currentValue=s,o!==null)if(Et(o.value,s)){if(o.children===i.children&&!Qe.current){t=Kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Bt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dr(t,n),i=ht(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=vt(r,t.pendingProps),i=vt(r.type,i),jf(e,t,r,i,n);case 15:return $m(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),as(e,t),t.tag=1,Je(r)?(e=!0,Rs(t)):e=!1,Dr(t,n),Pm(t,r,i),gc(t,r,i,n),xc(null,t,r,!0,e,n);case 19:return Mm(e,t,n);case 22:return Am(e,t,n)}throw Error(L(156,t.tag))};function qm(e,t){return S0(e,t)}function Gx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new Gx(e,t,n,r)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kx(e){if(typeof e=="function")return Yu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pu)return 11;if(e===hu)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function us(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Yu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case gr:return Xn(n.children,i,o,t);case fu:s=8,i|=8;break;case Ol:return e=ft(12,n,t,i|2),e.elementType=Ol,e.lanes=o,e;case Vl:return e=ft(13,n,t,i),e.elementType=Vl,e.lanes=o,e;case Bl:return e=ft(19,n,t,i),e.elementType=Bl,e.lanes=o,e;case s0:return va(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case i0:s=10;break e;case o0:s=9;break e;case pu:s=11;break e;case hu:s=14;break e;case nn:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=ft(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function va(e,t,n,r){return e=ft(22,e,r,t),e.elementType=s0,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xu(e,t,n,r,i,o,s,a,l){return e=new Yx(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(o),e}function Xx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qm(e){if(!e)return Tn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(Je(n))return Q0(e,n,t)}return t}function Jm(e,t,n,r,i,o,s,a,l){return e=Xu(n,r,!0,e,i,o,s,a,l),e.context=Qm(null),n=e.current,r=We(),i=yn(n),o=Bt(r,i),o.callback=t??null,mn(n,o,i),e.current.lanes=i,mo(e,i,r),Ze(e,r),e}function xa(e,t,n,r){var i=t.current,o=We(),s=yn(i);return n=Qm(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(i,t,s),e!==null&&(St(e,i,s,o),is(e,i,s)),s}function Hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qu(e,t){Of(e,t),(e=e.alternate)&&Of(e,t)}function qx(){return null}var Zm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}wa.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));xa(e,t,null,null)};wa.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){xa(null,e,null,null)}),t[Wt]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=A0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&L0(e)}};function Ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function Qx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Hs(s);o.call(c)}}var s=Jm(t,r,e,0,null,!1,!1,"",Vf);return e._reactRootContainer=s,e[Wt]=s.current,Qi(e.nodeType===8?e.parentNode:e),nr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hs(l);a.call(c)}}var l=Xu(e,0,!1,null,null,!1,!1,"",Vf);return e._reactRootContainer=l,e[Wt]=l.current,Qi(e.nodeType===8?e.parentNode:e),nr(function(){xa(t,l,n,r)}),l}function ka(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Hs(s);a.call(l)}}xa(t,s,e,i)}else s=Qx(n,t,e,i,r);return Hs(s)}j0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Si(t.pendingLanes);n!==0&&(yu(t,n|1),Ze(t,be()),!(ee&6)&&(Hr=be()+500,zn()))}break;case 13:nr(function(){var r=Gt(e,1);if(r!==null){var i=We();St(r,e,1,i)}}),qu(e,1)}};vu=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=We();St(t,e,134217728,n)}qu(e,134217728)}};$0=function(e){if(e.tag===13){var t=yn(e),n=Gt(e,t);if(n!==null){var r=We();St(n,e,t,r)}qu(e,t)}};A0=function(){return ie};R0=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Jl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fa(r);if(!i)throw Error(L(90));l0(r),Wl(r,i)}}}break;case"textarea":u0(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};y0=Wu;v0=nr;var Jx={usingClientEntryPoint:!1,Events:[yo,wr,fa,m0,g0,Wu]},pi={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zx={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=b0(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{la=Uo.inject(Zx),Rt=Uo}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jx;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(t))throw Error(L(200));return Xx(e,t,null,n)};st.createRoot=function(e,t){if(!Ju(e))throw Error(L(299));var n=!1,r="",i=Zm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xu(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,Qi(e.nodeType===8?e.parentNode:e),new Qu(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=b0(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return nr(e)};st.hydrate=function(e,t,n){if(!ba(t))throw Error(L(200));return ka(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!Ju(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jm(t,null,e,1,n??null,i,!1,o,s),e[Wt]=t.current,Qi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wa(t)};st.render=function(e,t,n){if(!ba(t))throw Error(L(200));return ka(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!ba(e))throw Error(L(40));return e._reactRootContainer?(nr(function(){ka(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};st.unstable_batchedUpdates=Wu;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ba(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return ka(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg)}catch(e){console.error(e)}}eg(),e0.exports=st;var e2=e0.exports,Bf=e2;Il.createRoot=Bf.createRoot,Il.hydrateRoot=Bf.hydrateRoot;var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ze.apply(this,arguments)};function Wr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var fe="-ms-",Di="-moz-",re="-webkit-",tg="comm",Sa="rule",Zu="decl",t2="@import",ng="@keyframes",n2="@layer",rg=Math.abs,ed=String.fromCharCode,Rc=Object.assign;function r2(e,t){return Le(e,0)^45?(((t<<2^Le(e,0))<<2^Le(e,1))<<2^Le(e,2))<<2^Le(e,3):0}function ig(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function ds(e,t,n){return e.indexOf(t,n)}function Le(e,t){return e.charCodeAt(t)|0}function Gr(e,t,n){return e.slice(t,n)}function $t(e){return e.length}function og(e){return e.length}function Ei(e,t){return t.push(e),e}function i2(e,t){return e.map(t).join("")}function Uf(e,t){return e.filter(function(n){return!Nt(n,t)})}var Ca=1,Kr=1,sg=0,gt=0,Se=0,ni="";function Ea(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ca,column:Kr,length:s,return:"",siblings:a}}function Zt(e,t){return Rc(Ea("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function dr(e){for(;e.root;)e=Zt(e.root,{children:[e]});Ei(e,e.siblings)}function o2(){return Se}function s2(){return Se=gt>0?Le(ni,--gt):0,Kr--,Se===10&&(Kr=1,Ca--),Se}function Ct(){return Se=gt<sg?Le(ni,gt++):0,Kr++,Se===10&&(Kr=1,Ca++),Se}function qn(){return Le(ni,gt)}function fs(){return gt}function Pa(e,t){return Gr(ni,e,t)}function Lc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function a2(e){return Ca=Kr=1,sg=$t(ni=e),gt=0,[]}function l2(e){return ni="",e}function yl(e){return ig(Pa(gt-1,zc(e===91?e+2:e===40?e+1:e)))}function c2(e){for(;(Se=qn())&&Se<33;)Ct();return Lc(e)>2||Lc(Se)>3?"":" "}function u2(e,t){for(;--t&&Ct()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Pa(e,fs()+(t<6&&qn()==32&&Ct()==32))}function zc(e){for(;Ct();)switch(Se){case e:return gt;case 34:case 39:e!==34&&e!==39&&zc(Se);break;case 40:e===41&&zc(e);break;case 92:Ct();break}return gt}function d2(e,t){for(;Ct()&&e+Se!==47+10;)if(e+Se===42+42&&qn()===47)break;return"/*"+Pa(t,gt-1)+"*"+ed(e===47?e:Ct())}function f2(e){for(;!Lc(qn());)Ct();return Pa(e,gt)}function p2(e){return l2(ps("",null,null,null,[""],e=a2(e),0,[0],e))}function ps(e,t,n,r,i,o,s,a,l){for(var c=0,d=0,u=s,p=0,g=0,v=0,x=1,S=1,y=1,m=0,h="",k=i,E=o,C=r,P=h;S;)switch(v=m,m=Ct()){case 40:if(v!=108&&Le(P,u-1)==58){ds(P+=G(yl(m),"&","&\f"),"&\f",rg(c?a[c-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:P+=yl(m);break;case 9:case 10:case 13:case 32:P+=c2(v);break;case 92:P+=u2(fs()-1,7);continue;case 47:switch(qn()){case 42:case 47:Ei(h2(d2(Ct(),fs()),t,n,l),l);break;default:P+="/"}break;case 123*x:a[c++]=$t(P)*y;case 125*x:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+d:y==-1&&(P=G(P,/\f/g,"")),g>0&&$t(P)-u&&Ei(g>32?Wf(P+";",r,n,u-1,l):Wf(G(P," ","")+";",r,n,u-2,l),l);break;case 59:P+=";";default:if(Ei(C=Hf(P,t,n,c,d,i,a,h,k=[],E=[],u,o),o),m===123)if(d===0)ps(P,t,C,C,k,o,u,a,E);else switch(p===99&&Le(P,3)===110?100:p){case 100:case 108:case 109:case 115:ps(e,C,C,r&&Ei(Hf(e,C,C,0,0,i,a,h,i,k=[],u,E),E),i,E,u,a,r?k:E);break;default:ps(P,C,C,C,[""],E,0,a,E)}}c=d=g=0,x=y=1,h=P="",u=s;break;case 58:u=1+$t(P),g=v;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&s2()==125)continue}switch(P+=ed(m),m*x){case 38:y=d>0?1:(P+="\f",-1);break;case 44:a[c++]=($t(P)-1)*y,y=1;break;case 64:qn()===45&&(P+=yl(Ct())),p=qn(),d=u=$t(h=P+=f2(fs())),m++;break;case 45:v===45&&$t(P)==2&&(x=0)}}return o}function Hf(e,t,n,r,i,o,s,a,l,c,d,u){for(var p=i-1,g=i===0?o:[""],v=og(g),x=0,S=0,y=0;x<r;++x)for(var m=0,h=Gr(e,p+1,p=rg(S=s[x])),k=e;m<v;++m)(k=ig(S>0?g[m]+" "+h:G(h,/&\f/g,g[m])))&&(l[y++]=k);return Ea(e,t,n,i===0?Sa:a,l,c,d,u)}function h2(e,t,n,r){return Ea(e,t,n,tg,ed(o2()),Gr(e,2,-2),0,r)}function Wf(e,t,n,r,i){return Ea(e,t,n,Zu,Gr(e,0,r),Gr(e,r+1,-1),r,i)}function ag(e,t,n){switch(r2(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Di+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Di+e+fe+e+e;case 5936:switch(Le(e,t+11)){case 114:return re+e+fe+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+fe+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+fe+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+fe+e+e;case 6165:return re+e+fe+"flex-"+e+e;case 5187:return re+e+G(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return re+e+fe+"flex-item-"+G(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":fe+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return re+e+fe+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+fe+G(e,"shrink","negative")+e;case 5292:return re+e+fe+G(e,"basis","preferred-size")+e;case 6060:return re+"box-"+G(e,"-grow","")+re+e+fe+G(e,"grow","positive")+e;case 4554:return re+G(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return fe+"grid-column-align"+Gr(e,t)+e;break;case 2592:case 3360:return fe+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Nt(r.props,/grid-\w+-end/)})?~ds(e+(n=n[t].value),"span",0)?e:fe+G(e,"-start","")+e+fe+"grid-row-span:"+(~ds(n,"span",0)?Nt(n,/\d+/):+Nt(n,/\d+/)-+Nt(e,/\d+/))+";":fe+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Nt(r.props,/grid-\w+-start/)})?e:fe+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($t(e)-1-t>6)switch(Le(e,t+1)){case 109:if(Le(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Di+(Le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ds(e,"stretch",0)?ag(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return fe+i+":"+o+c+(s?fe+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(Le(e,t+6)===121)return G(e,":",":"+re)+e;break;case 6444:switch(Le(e,Le(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Le(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+fe+"$2box$3")+e;case 100:return G(e,":",":"+fe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function Ws(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function m2(e,t,n,r){switch(e.type){case n2:if(e.children.length)break;case t2:case Zu:return e.return=e.return||e.value;case tg:return"";case ng:return e.return=e.value+"{"+Ws(e.children,r)+"}";case Sa:if(!$t(e.value=e.props.join(",")))return""}return $t(n=Ws(e.children,r))?e.return=e.value+"{"+n+"}":""}function g2(e){var t=og(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function y2(e){return function(t){t.root||(t=t.return)&&e(t)}}function v2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Zu:e.return=ag(e.value,e.length,n);return;case ng:return Ws([Zt(e,{value:G(e.value,"@","@"+re)})],r);case Sa:if(e.length)return i2(n=e.props,function(i){switch(Nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dr(Zt(e,{props:[G(i,/:(read-\w+)/,":"+Di+"$1")]})),dr(Zt(e,{props:[i]})),Rc(e,{props:Uf(n,r)});break;case"::placeholder":dr(Zt(e,{props:[G(i,/:(plac\w+)/,":"+re+"input-$1")]})),dr(Zt(e,{props:[G(i,/:(plac\w+)/,":"+Di+"$1")]})),dr(Zt(e,{props:[G(i,/:(plac\w+)/,fe+"input-$1")]})),dr(Zt(e,{props:[i]})),Rc(e,{props:Uf(n,r)});break}return""})}}var x2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lg="active",cg="data-styled-version",Ta="6.1.16",td=`/*!sc*/
`,Gs=typeof window<"u"&&"HTMLElement"in window,w2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),b2={},ja=Object.freeze([]),Xr=Object.freeze({});function ug(e,t,n){return n===void 0&&(n=Xr),e.theme!==n.theme&&e.theme||t||n.theme}var dg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),k2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,S2=/(^-|-$)/g;function Gf(e){return e.replace(k2,"-").replace(S2,"")}var C2=/(a)(d)/gi,Ho=52,Kf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mc(e){var t,n="";for(t=Math.abs(e);t>Ho;t=t/Ho|0)n=Kf(t%Ho)+n;return(Kf(t%Ho)+n).replace(C2,"$1-$2")}var vl,fg=5381,Tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pg=function(e){return Tr(fg,e)};function nd(e){return Mc(pg(e)>>>0)}function E2(e){return e.displayName||e.name||"Component"}function xl(e){return typeof e=="string"&&!0}var hg=typeof Symbol=="function"&&Symbol.for,mg=hg?Symbol.for("react.memo"):60115,P2=hg?Symbol.for("react.forward_ref"):60112,T2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$2=((vl={})[P2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vl[mg]=gg,vl);function Yf(e){return("type"in(t=e)&&t.type.$$typeof)===mg?gg:"$$typeof"in e?$2[e.$$typeof]:T2;var t}var A2=Object.defineProperty,R2=Object.getOwnPropertyNames,Xf=Object.getOwnPropertySymbols,L2=Object.getOwnPropertyDescriptor,z2=Object.getPrototypeOf,qf=Object.prototype;function yg(e,t,n){if(typeof t!="string"){if(qf){var r=z2(t);r&&r!==qf&&yg(e,r,n)}var i=R2(t);Xf&&(i=i.concat(Xf(t)));for(var o=Yf(e),s=Yf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in j2||n&&n[l]||s&&l in s||o&&l in o)){var c=L2(t,l);try{A2(e,l,c)}catch{}}}}return e}function rr(e){return typeof e=="function"}function rd(e){return typeof e=="object"&&"styledComponentId"in e}function Gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ks(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function so(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _c(e,t,n){if(n===void 0&&(n=!1),!n&&!so(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=_c(e[r],t[r]);else if(so(t))for(var r in t)e[r]=_c(e[r],t[r]);return e}function id(e,t){Object.defineProperty(e,"toString",{value:t})}function jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var M2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw jn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(td);return n},e}(),hs=new Map,Ys=new Map,ms=1,Wo=function(e){if(hs.has(e))return hs.get(e);for(;Ys.has(ms);)ms++;var t=ms++;return hs.set(e,t),Ys.set(t,e),t},_2=function(e,t){ms=t+1,hs.set(e,t),Ys.set(t,e)},D2="style[".concat(Yr,"][").concat(cg,'="').concat(Ta,'"]'),N2=new RegExp("^".concat(Yr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),I2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},F2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(td),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(N2);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(_2(d,c),I2(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Qf=function(e){for(var t=document.querySelectorAll(D2),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Yr)!==lg&&(F2(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function O2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Yr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Yr,lg),r.setAttribute(cg,Ta);var s=O2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},V2=function(){function e(t){this.element=vg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw jn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),B2=function(){function e(t){this.element=vg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),U2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jf=Gs,H2={isServer:!Gs,useCSSOMInjection:!w2},Xs=function(){function e(t,n,r){t===void 0&&(t=Xr),n===void 0&&(n={});var i=this;this.options=ze(ze({},H2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gs&&Jf&&(Jf=!1,Qf(this)),id(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(u){var p=function(y){return Ys.get(y)}(u);if(p===void 0)return"continue";var g=o.names.get(p),v=s.getGroup(u);if(g===void 0||!g.size||v.length===0)return"continue";var x="".concat(Yr,".g").concat(u,'[id="').concat(p,'"]'),S="";g!==void 0&&g.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),l+="".concat(v).concat(x,'{content:"').concat(S,'"}').concat(td)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return Wo(t)},e.prototype.rehydrate=function(){!this.server&&Gs&&Qf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new U2(i):r?new V2(i):new B2(i)}(this.options),new M2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Wo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Wo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Wo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),W2=/&/g,G2=/^\s*\/\/.*$/gm;function xg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xg(n.children,t)),n})}function K2(e){var t,n,r,i=e===void 0?Xr:e,o=i.options,s=o===void 0?Xr:o,a=i.plugins,l=a===void 0?ja:a,c=function(p,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===Sa&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(W2,n).replace(r,c))}),s.prefix&&d.push(v2),d.push(m2);var u=function(p,g,v,x){g===void 0&&(g=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(G2,""),y=p2(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);s.namespace&&(y=xg(y,s.namespace));var m=[];return Ws(y,g2(d.concat(y2(function(h){return m.push(h)})))),m};return u.hash=l.length?l.reduce(function(p,g){return g.name||jn(15),Tr(p,g.name)},fg).toString():"",u}var Y2=new Xs,Dc=K2(),wg=ue.createContext({shouldForwardProp:void 0,styleSheet:Y2,stylis:Dc});wg.Consumer;ue.createContext(void 0);function Nc(){return w.useContext(wg)}var bg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Dc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,id(this,function(){throw jn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Dc),this.name+t.hash},e}(),X2=function(e){return e>="A"&&e<="Z"};function Zf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;X2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var kg=function(e){return e==null||e===!1||e===""},Sg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!kg(o)&&(Array.isArray(o)&&o.isCss||rr(o)?r.push("".concat(Zf(i),":"),o,";"):so(o)?r.push.apply(r,Wr(Wr(["".concat(i," {")],Sg(o),!1),["}"],!1)):r.push("".concat(Zf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in x2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xn(e,t,n,r){if(kg(e))return[];if(rd(e))return[".".concat(e.styledComponentId)];if(rr(e)){if(!rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return xn(i,t,n,r)}var o;return e instanceof bg?n?(e.inject(n,r),[e.getName(r)]):[e]:so(e)?Sg(e):Array.isArray(e)?Array.prototype.concat.apply(ja,e.map(function(s){return xn(s,t,n,r)})):[e.toString()]}function Cg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!rd(n))return!1}return!0}var q2=pg(Ta),Q2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cg(t),this.componentId=n,this.baseHash=Tr(q2,n),this.baseStyle=r,Xs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gn(i,this.staticRulesId);else{var o=Ks(xn(this.rules,t,n,r)),s=Mc(Tr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Gn(i,s),this.staticRulesId=s}else{for(var l=Tr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var u=this.rules[d];if(typeof u=="string")c+=u;else if(u){var p=Ks(xn(u,t,n,r));l=Tr(l,p+d),c+=p}}if(c){var g=Mc(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),i=Gn(i,g)}}return i},e}(),qr=ue.createContext(void 0);qr.Consumer;function J2(){var e=w.useContext(qr);if(!e)throw jn(18);return e}function Eg(e){var t=ue.useContext(qr),n=w.useMemo(function(){return function(r,i){if(!r)throw jn(14);if(rr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw jn(8);return i?ze(ze({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ue.createElement(qr.Provider,{value:n},e.children):null}var wl={};function Z2(e,t,n){var r=rd(e),i=e,o=!xl(e),s=t.attrs,a=s===void 0?ja:s,l=t.componentId,c=l===void 0?function(k,E){var C=typeof k!="string"?"sc":Gf(k);wl[C]=(wl[C]||0)+1;var P="".concat(C,"-").concat(nd(Ta+C+wl[C]));return E?"".concat(E,"-").concat(P):P}(t.displayName,t.parentComponentId):l,d=t.displayName,u=d===void 0?function(k){return xl(k)?"styled.".concat(k):"Styled(".concat(E2(k),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Gf(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(k,E){return x(k,E)&&S(k,E)}}else v=x}var y=new Q2(n,p,r?i.componentStyle:void 0);function m(k,E){return function(C,P,T){var M=C.attrs,R=C.componentStyle,B=C.defaultProps,K=C.foldedComponentIds,W=C.styledComponentId,q=C.target,Pe=ue.useContext(qr),Q=Nc(),oe=C.shouldForwardProp||Q.shouldForwardProp,z=ug(P,Pe,B)||Xr,D=function(se,ae,Te){for(var A,_=ze(ze({},ae),{className:void 0,theme:Te}),V=0;V<se.length;V+=1){var F=rr(A=se[V])?A(_):A;for(var Y in F)_[Y]=Y==="className"?Gn(_[Y],F[Y]):Y==="style"?ze(ze({},_[Y]),F[Y]):F[Y]}return ae.className&&(_.className=Gn(_.className,ae.className)),_}(M,P,z),j=D.as||q,$={};for(var I in D)D[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&D.theme===z||(I==="forwardedAs"?$.as=D.forwardedAs:oe&&!oe(I,j)||($[I]=D[I]));var H=function(se,ae){var Te=Nc(),A=se.generateAndInjectStyles(ae,Te.styleSheet,Te.stylis);return A}(R,D),J=Gn(K,W);return H&&(J+=" "+H),D.className&&(J+=" "+D.className),$[xl(j)&&!dg.has(j)?"class":"className"]=J,T&&($.ref=T),w.createElement(j,$)}(h,k,E)}m.displayName=u;var h=ue.forwardRef(m);return h.attrs=g,h.componentStyle=y,h.displayName=u,h.shouldForwardProp=v,h.foldedComponentIds=r?Gn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=p,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(E){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var T=0,M=C;T<M.length;T++)_c(E,M[T],!0);return E}({},i.defaultProps,k):k}}),id(h,function(){return".".concat(h.styledComponentId)}),o&&yg(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function ep(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var tp=function(e){return Object.assign(e,{isCss:!0})};function $a(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||so(e))return tp(xn(ep(ja,Wr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?xn(r):tp(xn(ep(r,t)))}function Ic(e,t,n){if(n===void 0&&(n=Xr),!t)throw jn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,$a.apply(void 0,Wr([i],o,!1)))};return r.attrs=function(i){return Ic(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ic(e,t,ze(ze({},n),i))},r}var Pg=function(e){return Ic(Z2,e)},b=Pg;dg.forEach(function(e){b[e]=Pg(e)});var e5=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cg(t),Xs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ks(xn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Xs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function od(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$a.apply(void 0,Wr([e],t,!1)),i="sc-global-".concat(nd(JSON.stringify(r))),o=new e5(r,i),s=function(l){var c=Nc(),d=ue.useContext(qr),u=ue.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(u,l,c.styleSheet,d,c.stylis),ue.useLayoutEffect(function(){if(!c.styleSheet.server)return a(u,l,c.styleSheet,d,c.stylis),function(){return o.removeStyles(u,c.styleSheet)}},[u,l,c.styleSheet,d,c.stylis]),null};function a(l,c,d,u,p){if(o.isStatic)o.renderStyles(l,b2,d,p);else{var g=ze(ze({},c),{theme:ug(c,u,s.defaultProps)});o.renderStyles(l,g,d,p)}}return ue.memo(s)}function xo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ks($a.apply(void 0,Wr([e],t,!1))),i=nd(r);return new bg(i,r)}const Aa=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ra=w.createContext({}),La=w.createContext(null),za=typeof document<"u",ri=za?w.useLayoutEffect:w.useEffect,Tg=w.createContext({strict:!1}),sd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t5="framerAppearId",jg="data-"+sd(t5);function n5(e,t,n,r){const{visualElement:i}=w.useContext(Ra),o=w.useContext(Tg),s=w.useContext(La),a=w.useContext(Aa).reducedMotion,l=w.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;w.useInsertionEffect(()=>{c&&c.update(n,s)});const d=w.useRef(!!(n[jg]&&!window.HandoffComplete));return ri(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),w.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function jr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function r5(e,t,n){return w.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):jr(n)&&(n.current=r))},[t])}function ao(e){return typeof e=="string"||Array.isArray(e)}function Ma(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ad=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ld=["initial",...ad];function _a(e){return Ma(e.animate)||ld.some(t=>ao(e[t]))}function $g(e){return!!(_a(e)||e.variants)}function i5(e,t){if(_a(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ao(n)?n:void 0,animate:ao(r)?r:void 0}}return e.inherit!==!1?t:{}}function o5(e){const{initial:t,animate:n}=i5(e,w.useContext(Ra));return w.useMemo(()=>({initial:t,animate:n}),[np(t),np(n)])}function np(e){return Array.isArray(e)?e.join(" "):e}const rp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},lo={};for(const e in rp)lo[e]={isEnabled:t=>rp[e].some(n=>!!t[n])};function s5(e){for(const t in e)lo[t]={...lo[t],...e[t]}}const cd=w.createContext({}),Ag=w.createContext({}),a5=Symbol.for("motionComponentSymbol");function l5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&s5(e);function o(a,l){let c;const d={...w.useContext(Aa),...a,layoutId:c5(a)},{isStatic:u}=d,p=o5(a),g=r(a,u);if(!u&&za){p.visualElement=n5(i,g,d,t);const v=w.useContext(Ag),x=w.useContext(Tg).strict;p.visualElement&&(c=p.visualElement.loadFeatures(d,x,e,v))}return w.createElement(Ra.Provider,{value:p},c&&p.visualElement?w.createElement(c,{visualElement:p.visualElement,...d}):null,n(i,a,r5(g,p.visualElement,l),g,u,p.visualElement))}const s=w.forwardRef(o);return s[a5]=i,s}function c5({layoutId:e}){const t=w.useContext(cd).id;return t&&e!==void 0?t+"-"+e:e}function u5(e){function t(r,i={}){return l5(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const d5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ud(e){return typeof e!="string"||e.includes("-")?!1:!!(d5.indexOf(e)>-1||/[A-Z]/.test(e))}const qs={};function f5(e){Object.assign(qs,e)}const wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],sr=new Set(wo);function Rg(e,{layout:t,layoutId:n}){return sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!qs[e]||e==="opacity")}const Be=e=>!!(e&&e.getVelocity),p5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},h5=wo.length;function m5(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<h5;s++){const a=wo[s];if(e[a]!==void 0){const l=p5[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Lg=e=>t=>typeof t=="string"&&t.startsWith(e),zg=Lg("--"),Fc=Lg("var(--"),g5=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,y5=(e,t)=>t&&typeof e=="number"?t.transform(e):e,$n=(e,t,n)=>Math.min(Math.max(n,e),t),ar={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ni={...ar,transform:e=>$n(0,1,e)},Go={...ar,default:1},Ii=e=>Math.round(e*1e5)/1e5,Da=/(-)?([\d]*\.?[\d])+/g,Mg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,v5=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bo(e){return typeof e=="string"}const ko=e=>({test:t=>bo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),en=ko("deg"),zt=ko("%"),U=ko("px"),x5=ko("vh"),w5=ko("vw"),ip={...zt,parse:e=>zt.parse(e)/100,transform:e=>zt.transform(e*100)},op={...ar,transform:Math.round},_g={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,size:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,rotate:en,rotateX:en,rotateY:en,rotateZ:en,scale:Go,scaleX:Go,scaleY:Go,scaleZ:Go,skew:en,skewX:en,skewY:en,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:Ni,originX:ip,originY:ip,originZ:U,zIndex:op,fillOpacity:Ni,strokeOpacity:Ni,numOctaves:op};function dd(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,c=!1,d=!0;for(const u in t){const p=t[u];if(zg(u)){o[u]=p;continue}const g=_g[u],v=y5(p,g);if(sr.has(u)){if(l=!0,s[u]=v,!d)continue;p!==(g.default||0)&&(d=!1)}else u.startsWith("origin")?(c=!0,a[u]=v):i[u]=v}if(t.transform||(l||r?i.transform=m5(e.transform,n,d,r):i.transform&&(i.transform="none")),c){const{originX:u="50%",originY:p="50%",originZ:g=0}=a;i.transformOrigin=`${u} ${p} ${g}`}}const fd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Dg(e,t,n){for(const r in t)!Be(t[r])&&!Rg(r,n)&&(e[r]=t[r])}function b5({transformTemplate:e},t,n){return w.useMemo(()=>{const r=fd();return dd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function k5(e,t,n){const r=e.style||{},i={};return Dg(i,r,e),Object.assign(i,b5(e,t,n)),e.transformValues?e.transformValues(i):i}function S5(e,t,n){const r={},i=k5(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const C5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Qs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||C5.has(e)}let Ng=e=>!Qs(e);function E5(e){e&&(Ng=t=>t.startsWith("on")?!Qs(t):e(t))}try{E5(require("@emotion/is-prop-valid").default)}catch{}function P5(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Ng(i)||n===!0&&Qs(i)||!t&&!Qs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function sp(e,t,n){return typeof e=="string"?e:U.transform(t+n*e)}function T5(e,t,n){const r=sp(t,e.x,e.width),i=sp(n,e.y,e.height);return`${r} ${i}`}const j5={offset:"stroke-dashoffset",array:"stroke-dasharray"},$5={offset:"strokeDashoffset",array:"strokeDasharray"};function A5(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?j5:$5;e[o.offset]=U.transform(-r);const s=U.transform(t),a=U.transform(n);e[o.array]=`${s} ${a}`}function pd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},d,u,p){if(dd(e,c,d,p),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:x}=e;g.transform&&(x&&(v.transform=g.transform),delete g.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=T5(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),s!==void 0&&A5(g,s,a,l,!1)}const Ig=()=>({...fd(),attrs:{}}),hd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function R5(e,t,n,r){const i=w.useMemo(()=>{const o=Ig();return pd(o,t,{enableHardwareAcceleration:!1},hd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Dg(o,e.style,e),i.style={...o,...i.style}}return i}function L5(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(ud(n)?R5:S5)(r,o,s,n),d={...P5(r,typeof n=="string",e),...l,ref:i},{children:u}=r,p=w.useMemo(()=>Be(u)?u.get():u,[u]);return w.createElement(n,{...d,children:p})}}function Fg(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Og=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vg(e,t,n,r){Fg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Og.has(i)?i:sd(i),t.attrs[i])}function md(e,t){const{style:n}=e,r={};for(const i in n)(Be(n[i])||t.style&&Be(t.style[i])||Rg(i,e))&&(r[i]=n[i]);return r}function Bg(e,t){const n=md(e,t);for(const r in e)if(Be(e[r])||Be(t[r])){const i=wo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function gd(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function So(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const Js=e=>Array.isArray(e),z5=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),M5=e=>Js(e)?e[e.length-1]||0:e;function gs(e){const t=Be(e)?e.get():e;return z5(t)?t.toValue():t}function _5({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:D5(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Ug=e=>(t,n)=>{const r=w.useContext(Ra),i=w.useContext(La),o=()=>_5(e,t,r,i);return n?o():So(o)};function D5(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=gs(o[p]);let{initial:s,animate:a}=e;const l=_a(e),c=$g(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const u=d?a:s;return u&&typeof u!="boolean"&&!Ma(u)&&(Array.isArray(u)?u:[u]).forEach(g=>{const v=gd(e,g);if(!v)return;const{transitionEnd:x,transition:S,...y}=v;for(const m in y){let h=y[m];if(Array.isArray(h)){const k=d?h.length-1:0;h=h[k]}h!==null&&(i[m]=h)}for(const m in x)i[m]=x[m]}),i}const we=e=>e;class ap{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function N5(e){let t=new ap,n=new ap,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,c=!1,d=!1)=>{const u=d&&i,p=u?t:n;return c&&s.add(l),p.add(l)&&u&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const d=t.order[c];d(l),s.has(d)&&(a.schedule(d),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Ko=["prepare","read","update","preRender","render","postRender"],I5=40;function F5(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Ko.reduce((u,p)=>(u[p]=N5(()=>n=!0),u),{}),s=u=>o[u].process(i),a=()=>{const u=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(u-i.timestamp,I5),1),i.timestamp=u,i.isProcessing=!0,Ko.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Ko.reduce((u,p)=>{const g=o[p];return u[p]=(v,x=!1,S=!1)=>(n||l(),g.schedule(v,x,S)),u},{}),cancel:u=>Ko.forEach(p=>o[p].cancel(u)),state:i,steps:o}}const{schedule:ne,cancel:Pt,state:je,steps:bl}=F5(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),O5={useVisualState:Ug({scrapeMotionValuesFromProps:Bg,createRenderState:Ig,onMount:(e,t,{renderState:n,latestValues:r})=>{ne.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ne.render(()=>{pd(n,r,{enableHardwareAcceleration:!1},hd(t.tagName),e.transformTemplate),Vg(t,n)})}})},V5={useVisualState:Ug({scrapeMotionValuesFromProps:md,createRenderState:fd})};function B5(e,{forwardMotionProps:t=!1},n,r){return{...ud(e)?O5:V5,preloadedFeatures:n,useRender:L5(t),createVisualElement:r,Component:e}}function Vt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Hg=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Na(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const U5=e=>t=>Hg(t)&&e(t,Na(t));function Ut(e,t,n,r){return Vt(e,t,U5(n),r)}const H5=(e,t)=>n=>t(e(n)),wn=(...e)=>e.reduce(H5);function Wg(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const lp=Wg("dragHorizontal"),cp=Wg("dragVertical");function Gg(e){let t=!1;if(e==="y")t=cp();else if(e==="x")t=lp();else{const n=lp(),r=cp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Kg(){const e=Gg(!0);return e?(e(),!1):!0}class Mn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function up(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Kg())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&ne.update(()=>a[r](o,s))};return Ut(e.current,n,i,{passive:!e.getProps()[r]})}class W5 extends Mn{mount(){this.unmount=wn(up(this.node,!0),up(this.node,!1))}unmount(){}}class G5 extends Mn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wn(Vt(this.node.current,"focus",()=>this.onFocus()),Vt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Yg=(e,t)=>t?e===t?!0:Yg(e,t.parentElement):!1;function kl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Na(n))}class K5 extends Mn{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Ut(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:u}=this.node.getProps();ne.update(()=>{!u&&!Yg(this.node.current,a.target)?d&&d(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Ut(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=wn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||kl("up",(l,c)=>{const{onTap:d}=this.node.getProps();d&&ne.update(()=>d(l,c))})};this.removeEndListeners(),this.removeEndListeners=Vt(this.node.current,"keyup",s),kl("down",(a,l)=>{this.startPress(a,l)})},n=Vt(this.node.current,"keydown",t),r=()=>{this.isPressing&&kl("cancel",(o,s)=>this.cancelPress(o,s))},i=Vt(this.node.current,"blur",r);this.removeAccessibleListeners=wn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ne.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Kg()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ne.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Ut(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Vt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=wn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Oc=new WeakMap,Sl=new WeakMap,Y5=e=>{const t=Oc.get(e.target);t&&t(e)},X5=e=>{e.forEach(Y5)};function q5({root:e,...t}){const n=e||document;Sl.has(n)||Sl.set(n,{});const r=Sl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(X5,{root:e,...t})),r[i]}function Q5(e,t,n){const r=q5(t);return Oc.set(e,n),r.observe(e),()=>{Oc.delete(e),r.unobserve(e)}}const J5={some:0,all:1};class Z5 extends Mn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:J5[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:u}=this.node.getProps(),p=c?d:u;p&&p(l)};return Q5(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(ew(t,n))&&this.startObserver()}unmount(){}}function ew({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const tw={inView:{Feature:Z5},tap:{Feature:K5},focus:{Feature:G5},hover:{Feature:W5}};function Xg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function nw(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function rw(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ia(e,t,n){const r=e.getProps();return gd(r,t,n!==void 0?n:r.custom,nw(e),rw(e))}let qg=we,Fa=we;const bn=e=>e*1e3,Mt=e=>e/1e3,iw={current:!1},Qg=e=>Array.isArray(e)&&typeof e[0]=="number";function Jg(e){return!!(!e||typeof e=="string"&&Zg[e]||Qg(e)||Array.isArray(e)&&e.every(Jg))}const Pi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Zg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pi([0,.65,.55,1]),circOut:Pi([.55,0,1,.45]),backIn:Pi([.31,.01,.66,-.59]),backOut:Pi([.33,1.53,.69,.99])};function e1(e){if(e)return Qg(e)?Pi(e):Array.isArray(e)?e.map(e1):Zg[e]}function ow(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=e1(a);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function sw(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const t1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,aw=1e-7,lw=12;function cw(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=t1(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>aw&&++a<lw);return s}function Co(e,t,n,r){if(e===t&&n===r)return we;const i=o=>cw(o,0,1,e,n);return o=>o===0||o===1?o:t1(i(o),t,r)}const uw=Co(.42,0,1,1),dw=Co(0,0,.58,1),n1=Co(.42,0,.58,1),fw=e=>Array.isArray(e)&&typeof e[0]!="number",r1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,i1=e=>t=>1-e(1-t),yd=e=>1-Math.sin(Math.acos(e)),o1=i1(yd),pw=r1(yd),s1=Co(.33,1.53,.69,.99),vd=i1(s1),hw=r1(vd),mw=e=>(e*=2)<1?.5*vd(e):.5*(2-Math.pow(2,-10*(e-1))),gw={linear:we,easeIn:uw,easeInOut:n1,easeOut:dw,circIn:yd,circInOut:pw,circOut:o1,backIn:vd,backInOut:hw,backOut:s1,anticipate:mw},dp=e=>{if(Array.isArray(e)){Fa(e.length===4);const[t,n,r,i]=e;return Co(t,n,r,i)}else if(typeof e=="string")return gw[e];return e},xd=(e,t)=>n=>!!(bo(n)&&v5.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),a1=(e,t,n)=>r=>{if(!bo(r))return r;const[i,o,s,a]=r.match(Da);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},yw=e=>$n(0,255,e),Cl={...ar,transform:e=>Math.round(yw(e))},Kn={test:xd("rgb","red"),parse:a1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Cl.transform(e)+", "+Cl.transform(t)+", "+Cl.transform(n)+", "+Ii(Ni.transform(r))+")"};function vw(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Vc={test:xd("#"),parse:vw,transform:Kn.transform},$r={test:xd("hsl","hue"),parse:a1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+zt.transform(Ii(t))+", "+zt.transform(Ii(n))+", "+Ii(Ni.transform(r))+")"},Ue={test:e=>Kn.test(e)||Vc.test(e)||$r.test(e),parse:e=>Kn.test(e)?Kn.parse(e):$r.test(e)?$r.parse(e):Vc.parse(e),transform:e=>bo(e)?e:e.hasOwnProperty("red")?Kn.transform(e):$r.transform(e)},ge=(e,t,n)=>-n*e+n*t+e;function El(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xw({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=El(l,a,e+1/3),o=El(l,a,e),s=El(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const Pl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},ww=[Vc,Kn,$r],bw=e=>ww.find(t=>t.test(e));function fp(e){const t=bw(e);let n=t.parse(e);return t===$r&&(n=xw(n)),n}const l1=(e,t)=>{const n=fp(e),r=fp(t),i={...n};return o=>(i.red=Pl(n.red,r.red,o),i.green=Pl(n.green,r.green,o),i.blue=Pl(n.blue,r.blue,o),i.alpha=ge(n.alpha,r.alpha,o),Kn.transform(i))};function kw(e){var t,n;return isNaN(e)&&bo(e)&&(((t=e.match(Da))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Mg))===null||n===void 0?void 0:n.length)||0)>0}const c1={regex:g5,countKey:"Vars",token:"${v}",parse:we},u1={regex:Mg,countKey:"Colors",token:"${c}",parse:Ue.parse},d1={regex:Da,countKey:"Numbers",token:"${n}",parse:ar.parse};function Tl(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function Zs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Tl(n,c1),Tl(n,u1),Tl(n,d1),n}function f1(e){return Zs(e).values}function p1(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Zs(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(c1.token,s[l]):l<r+n?a=a.replace(u1.token,Ue.transform(s[l])):a=a.replace(d1.token,Ii(s[l]));return a}}const Sw=e=>typeof e=="number"?0:e;function Cw(e){const t=f1(e);return p1(e)(t.map(Sw))}const An={test:kw,parse:f1,createTransformer:p1,getAnimatableNone:Cw},h1=(e,t)=>n=>`${n>0?t:e}`;function m1(e,t){return typeof e=="number"?n=>ge(e,t,n):Ue.test(e)?l1(e,t):e.startsWith("var(")?h1(e,t):y1(e,t)}const g1=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>m1(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},Ew=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=m1(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},y1=(e,t)=>{const n=An.createTransformer(t),r=Zs(e),i=Zs(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?wn(g1(r.values,i.values),n):h1(e,t)},Qr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},pp=(e,t)=>n=>ge(e,t,n);function Pw(e){return typeof e=="number"?pp:typeof e=="string"?Ue.test(e)?l1:y1:Array.isArray(e)?g1:typeof e=="object"?Ew:pp}function Tw(e,t,n){const r=[],i=n||Pw(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||we:t;a=wn(l,a)}r.push(a)}return r}function Oa(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Fa(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=Tw(t,r,i),a=s.length,l=c=>{let d=0;if(a>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const u=Qr(e[d],e[d+1],c);return s[d](u)};return n?c=>l($n(e[0],e[o-1],c)):l}function jw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Qr(0,t,r);e.push(ge(n,1,i))}}function v1(e){const t=[0];return jw(t,e.length-1),t}function $w(e,t){return e.map(n=>n*t)}function Aw(e,t){return e.map(()=>t||n1).splice(0,e.length-1)}function ea({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=fw(r)?r.map(dp):dp(r),o={done:!1,value:t[0]},s=$w(n&&n.length===t.length?n:v1(t),e),a=Oa(s,t,{ease:Array.isArray(i)?i:Aw(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function wd(e,t){return t?e*(1e3/t):0}const Rw=5;function x1(e,t,n){const r=Math.max(t-Rw,0);return wd(n-e(r),t-r)}const jl=.001,Lw=.01,hp=10,zw=.05,Mw=1;function _w({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;qg(e<=bn(hp));let s=1-t;s=$n(zw,Mw,s),e=$n(Lw,hp,Mt(e)),s<1?(i=c=>{const d=c*s,u=d*e,p=d-n,g=Bc(c,s),v=Math.exp(-u);return jl-p/g*v},o=c=>{const u=c*s*e,p=u*n+n,g=Math.pow(s,2)*Math.pow(c,2)*e,v=Math.exp(-u),x=Bc(Math.pow(c,2),s);return(-i(c)+jl>0?-1:1)*((p-g)*v)/x}):(i=c=>{const d=Math.exp(-c*e),u=(c-n)*e+1;return-jl+d*u},o=c=>{const d=Math.exp(-c*e),u=(n-c)*(e*e);return d*u});const a=5/e,l=Nw(i,o,a);if(e=bn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const Dw=12;function Nw(e,t,n){let r=n;for(let i=1;i<Dw;i++)r=r-e(r)/t(r);return r}function Bc(e,t){return e*Math.sqrt(1-t*t)}const Iw=["duration","bounce"],Fw=["stiffness","damping","mass"];function mp(e,t){return t.some(n=>e[n]!==void 0)}function Ow(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!mp(e,Fw)&&mp(e,Iw)){const n=_w(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function w1({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:d,velocity:u,isResolvedFromDuration:p}=Ow({...r,velocity:-Mt(r.velocity||0)}),g=u||0,v=l/(2*Math.sqrt(a*c)),x=o-i,S=Mt(Math.sqrt(a/c)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let m;if(v<1){const h=Bc(S,v);m=k=>{const E=Math.exp(-v*S*k);return o-E*((g+v*S*x)/h*Math.sin(h*k)+x*Math.cos(h*k))}}else if(v===1)m=h=>o-Math.exp(-S*h)*(x+(g+S*x)*h);else{const h=S*Math.sqrt(v*v-1);m=k=>{const E=Math.exp(-v*S*k),C=Math.min(h*k,300);return o-E*((g+v*S*x)*Math.sinh(C)+h*x*Math.cosh(C))/h}}return{calculatedDuration:p&&d||null,next:h=>{const k=m(h);if(p)s.done=h>=d;else{let E=g;h!==0&&(v<1?E=x1(m,h,k):E=0);const C=Math.abs(E)<=n,P=Math.abs(o-k)<=t;s.done=C&&P}return s.value=s.done?o:k,s}}}function gp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const u=e[0],p={done:!1,value:u},g=T=>a!==void 0&&T<a||l!==void 0&&T>l,v=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const S=u+x,y=s===void 0?S:s(S);y!==S&&(x=y-u);const m=T=>-x*Math.exp(-T/r),h=T=>y+m(T),k=T=>{const M=m(T),R=h(T);p.done=Math.abs(M)<=c,p.value=p.done?y:R};let E,C;const P=T=>{g(p.value)&&(E=T,C=w1({keyframes:[p.value,v(p.value)],velocity:x1(h,T,p.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return P(0),{calculatedDuration:null,next:T=>{let M=!1;return!C&&E===void 0&&(M=!0,k(T),P(T)),E!==void 0&&T>E?C.next(T-E):(!M&&k(T),p)}}}const Vw=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ne.update(t,!0),stop:()=>Pt(t),now:()=>je.isProcessing?je.timestamp:performance.now()}},yp=2e4;function vp(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<yp;)t+=n,r=e.next(t);return t>=yp?1/0:t}const Bw={decay:gp,inertia:gp,tween:ea,keyframes:ea,spring:w1};function co({autoplay:e=!0,delay:t=0,driver:n=Vw,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:d,onUpdate:u,...p}){let g=1,v=!1,x,S;const y=()=>{S=new Promise($=>{x=$})};y();let m;const h=Bw[i]||ea;let k;h!==ea&&typeof r[0]!="number"&&(k=Oa([0,100],r,{clamp:!1}),r=[0,100]);const E=h({...p,keyframes:r});let C;a==="mirror"&&(C=h({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let P="idle",T=null,M=null,R=null;E.calculatedDuration===null&&o&&(E.calculatedDuration=vp(E));const{calculatedDuration:B}=E;let K=1/0,W=1/0;B!==null&&(K=B+s,W=K*(o+1)-s);let q=0;const Pe=$=>{if(M===null)return;g>0&&(M=Math.min(M,$)),g<0&&(M=Math.min($-W/g,M)),T!==null?q=T:q=Math.round($-M)*g;const I=q-t*(g>=0?1:-1),H=g>=0?I<0:I>W;q=Math.max(I,0),P==="finished"&&T===null&&(q=W);let J=q,se=E;if(o){const _=Math.min(q,W)/K;let V=Math.floor(_),F=_%1;!F&&_>=1&&(F=1),F===1&&V--,V=Math.min(V,o+1),!!(V%2)&&(a==="reverse"?(F=1-F,s&&(F-=s/K)):a==="mirror"&&(se=C)),J=$n(0,1,F)*K}const ae=H?{done:!1,value:r[0]}:se.next(J);k&&(ae.value=k(ae.value));let{done:Te}=ae;!H&&B!==null&&(Te=g>=0?q>=W:q<=0);const A=T===null&&(P==="finished"||P==="running"&&Te);return u&&u(ae.value),A&&z(),ae},Q=()=>{m&&m.stop(),m=void 0},oe=()=>{P="idle",Q(),x(),y(),M=R=null},z=()=>{P="finished",d&&d(),Q(),x()},D=()=>{if(v)return;m||(m=n(Pe));const $=m.now();l&&l(),T!==null?M=$-T:(!M||P==="finished")&&(M=$),P==="finished"&&y(),R=M,T=null,P="running",m.start()};e&&D();const j={then($,I){return S.then($,I)},get time(){return Mt(q)},set time($){$=bn($),q=$,T!==null||!m||g===0?T=$:M=m.now()-$/g},get duration(){const $=E.calculatedDuration===null?vp(E):E.calculatedDuration;return Mt($)},get speed(){return g},set speed($){$===g||!m||(g=$,j.time=Mt(q))},get state(){return P},play:D,pause:()=>{P="paused",T=q},stop:()=>{v=!0,P!=="idle"&&(P="idle",c&&c(),oe())},cancel:()=>{R!==null&&Pe(R),oe()},complete:()=>{P="finished"},sample:$=>(M=0,Pe($))};return j}function Uw(e){let t;return()=>(t===void 0&&(t=e()),t)}const Hw=Uw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ww=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Yo=10,Gw=2e4,Kw=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Jg(t.ease);function Yw(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Hw()&&Ww.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,c=!1;const d=()=>{l=new Promise(h=>{a=h})};d();let{keyframes:u,duration:p=300,ease:g,times:v}=i;if(Kw(t,i)){const h=co({...i,repeat:0,delay:0});let k={done:!1,value:u[0]};const E=[];let C=0;for(;!k.done&&C<Gw;)k=h.sample(C),E.push(k.value),C+=Yo;v=void 0,u=E,p=C-Yo,g="linear"}const x=ow(e.owner.current,t,u,{...i,duration:p,ease:g,times:v}),S=()=>{c=!1,x.cancel()},y=()=>{c=!0,ne.update(S),a(),d()};return x.onfinish=()=>{c||(e.set(sw(u,i)),r&&r(),y())},{then(h,k){return l.then(h,k)},attachTimeline(h){return x.timeline=h,x.onfinish=null,we},get time(){return Mt(x.currentTime||0)},set time(h){x.currentTime=bn(h)},get speed(){return x.playbackRate},set speed(h){x.playbackRate=h},get duration(){return Mt(p)},play:()=>{s||(x.play(),Pt(S))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:h}=x;if(h){const k=co({...i,autoplay:!1});e.setWithVelocity(k.sample(h-Yo).value,k.sample(h).value,Yo)}y()},complete:()=>{c||x.finish()},cancel:y}}function Xw({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:o=>(o(),Promise.resolve()),cancel:we,complete:we});return t?co({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const qw={type:"spring",stiffness:500,damping:25,restSpeed:10},Qw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Jw={type:"keyframes",duration:.8},Zw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},eb=(e,{keyframes:t})=>t.length>2?Jw:sr.has(e)?e.startsWith("scale")?Qw(t[1]):qw:Zw,Uc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(An.test(t)||t==="0")&&!t.startsWith("url(")),tb=new Set(["brightness","contrast","saturate","opacity"]);function nb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Da)||[];if(!r)return e;const i=n.replace(r,"");let o=tb.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const rb=/([a-z-]*)\(.*?\)/g,Hc={...An,getAnimatableNone:e=>{const t=e.match(rb);return t?t.map(nb).join(" "):e}},ib={..._g,color:Ue,backgroundColor:Ue,outlineColor:Ue,fill:Ue,stroke:Ue,borderColor:Ue,borderTopColor:Ue,borderRightColor:Ue,borderBottomColor:Ue,borderLeftColor:Ue,filter:Hc,WebkitFilter:Hc},bd=e=>ib[e];function b1(e,t){let n=bd(e);return n!==Hc&&(n=An),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const k1=e=>/^0[^.\s]+$/.test(e);function ob(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||k1(e)}function sb(e,t,n,r){const i=Uc(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let c=0;c<o.length;c++)o[c]===null&&(o[c]=c===0?s:o[c-1]),ob(o[c])&&l.push(c),typeof o[c]=="string"&&o[c]!=="none"&&o[c]!=="0"&&(a=o[c]);if(i&&l.length&&a)for(let c=0;c<l.length;c++){const d=l[c];o[d]=b1(t,a)}return o}function ab({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}function kd(e,t){return e[t]||e.default||e}const lb={skipAnimations:!1},Sd=(e,t,n,r={})=>i=>{const o=kd(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-bn(s);const l=sb(t,e,n,o),c=l[0],d=l[l.length-1],u=Uc(e,c),p=Uc(e,d);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(ab(o)||(g={...g,...eb(e,g)}),g.duration&&(g.duration=bn(g.duration)),g.repeatDelay&&(g.repeatDelay=bn(g.repeatDelay)),!u||!p||iw.current||o.type===!1||lb.skipAnimations)return Xw(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=Yw(t,e,g);if(v)return v}return co(g)};function ta(e){return!!(Be(e)&&e.add)}const S1=e=>/^\-?\d*\.?\d+$/.test(e);function Cd(e,t){e.indexOf(t)===-1&&e.push(t)}function Ed(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Pd{constructor(){this.subscriptions=[]}add(t){return Cd(this.subscriptions,t),()=>Ed(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const cb=e=>!isNaN(parseFloat(e)),Fi={current:void 0};class ub{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=je;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ne.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ne.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=cb(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Pd);const r=this.events[t].add(n);return t==="change"?()=>{r(),ne.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Fi.current&&Fi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?wd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function bt(e,t){return new ub(e,t)}const C1=e=>t=>t.test(e),db={test:e=>e==="auto",parse:e=>e},E1=[ar,U,zt,en,w5,x5,db],hi=e=>E1.find(C1(e)),fb=[...E1,Ue,An],pb=e=>fb.find(C1(e));function hb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,bt(n))}function mb(e,t){const n=Ia(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=M5(o[s]);hb(e,s,a)}}function gb(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],c=t[l];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(S1(d)||k1(d))?d=parseFloat(d):!pb(d)&&An.test(c)&&(d=b1(l,c)),e.addValue(l,bt(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function yb(e,t){return t?(t[e]||t.default||t).from:void 0}function vb(e,t,n){const r={};for(const i in e){const o=yb(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function xb({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function wb(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function P1(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const u in a){const p=e.getValue(u),g=a[u];if(!p||g===void 0||d&&xb(d,u))continue;const v={delay:n,elapsed:0,...kd(o||{},u)};if(window.HandoffAppearAnimations){const y=e.getProps()[jg];if(y){const m=window.HandoffAppearAnimations(y,u,p,ne);m!==null&&(v.elapsed=m,v.isHandoff=!0)}}let x=!v.isHandoff&&!wb(p,g);if(v.type==="spring"&&(p.getVelocity()||v.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(Sd(u,p,g,e.shouldReduceMotion&&sr.has(u)?{type:!1}:v));const S=p.animation;ta(l)&&(l.add(u),S.then(()=>l.remove(u))),c.push(S)}return s&&Promise.all(c).then(()=>{s&&mb(e,s)}),c}function Wc(e,t,n={}){const r=Ia(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(P1(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:u}=i;return bb(e,t,c+l,d,u,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,c]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>c())}else return Promise.all([o(),s(n.delay)])}function bb(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(kb).forEach((c,d)=>{c.notify("AnimationStart",t),s.push(Wc(c,t,{...o,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function kb(e,t){return e.sortNodePosition(t)}function Sb(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Wc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Wc(e,t,n);else{const i=typeof t=="function"?Ia(e,t,n.custom):t;r=Promise.all(P1(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Cb=[...ad].reverse(),Eb=ad.length;function Pb(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Sb(e,n,r)))}function Tb(e){let t=Pb(e);const n=$b();let r=!0;const i=(l,c)=>{const d=Ia(e,c);if(d){const{transition:u,transitionEnd:p,...g}=d;l={...l,...g,...p}}return l};function o(l){t=l(e)}function s(l,c){const d=e.getProps(),u=e.getVariantContext(!0)||{},p=[],g=new Set;let v={},x=1/0;for(let y=0;y<Eb;y++){const m=Cb[y],h=n[m],k=d[m]!==void 0?d[m]:u[m],E=ao(k),C=m===c?h.isActive:null;C===!1&&(x=y);let P=k===u[m]&&k!==d[m]&&E;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),h.protectedKeys={...v},!h.isActive&&C===null||!k&&!h.prevProp||Ma(k)||typeof k=="boolean")continue;let M=jb(h.prevProp,k)||m===c&&h.isActive&&!P&&E||y>x&&E,R=!1;const B=Array.isArray(k)?k:[k];let K=B.reduce(i,{});C===!1&&(K={});const{prevResolvedValues:W={}}=h,q={...W,...K},Pe=Q=>{M=!0,g.has(Q)&&(R=!0,g.delete(Q)),h.needsAnimating[Q]=!0};for(const Q in q){const oe=K[Q],z=W[Q];if(v.hasOwnProperty(Q))continue;let D=!1;Js(oe)&&Js(z)?D=!Xg(oe,z):D=oe!==z,D?oe!==void 0?Pe(Q):g.add(Q):oe!==void 0&&g.has(Q)?Pe(Q):h.protectedKeys[Q]=!0}h.prevProp=k,h.prevResolvedValues=K,h.isActive&&(v={...v,...K}),r&&e.blockInitialAnimation&&(M=!1),M&&(!P||R)&&p.push(...B.map(Q=>({animation:Q,options:{type:m,...l}})))}if(g.size){const y={};g.forEach(m=>{const h=e.getBaseTarget(m);h!==void 0&&(y[m]=h)}),p.push({animation:y})}let S=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(p):Promise.resolve()}function a(l,c,d){var u;if(n[l].isActive===c)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),n[l].isActive=c;const p=s(d,l);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function jb(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Xg(t,e):!1}function _n(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $b(){return{animate:_n(!0),whileInView:_n(),whileHover:_n(),whileTap:_n(),whileDrag:_n(),whileFocus:_n(),exit:_n()}}class Ab extends Mn{constructor(t){super(t),t.animationState||(t.animationState=Tb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Ma(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Rb=0;class Lb extends Mn{constructor(){super(...arguments),this.id=Rb++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const zb={animation:{Feature:Ab},exit:{Feature:Lb}},xp=(e,t)=>Math.abs(e-t);function Mb(e,t){const n=xp(e.x,t.x),r=xp(e.y,t.y);return Math.sqrt(n**2+r**2)}class T1{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Al(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=Mb(u.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:v}=u,{timestamp:x}=je;this.history.push({...v,timestamp:x});const{onStart:S,onMove:y}=this.handlers;p||(S&&S(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,u)},this.handlePointerMove=(u,p)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=$l(p,this.transformPagePoint),ne.update(this.updatePoint,!0)},this.handlePointerUp=(u,p)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Al(u.type==="pointercancel"?this.lastMoveEventInfo:$l(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(u,S),v&&v(u,S)},!Hg(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=Na(t),a=$l(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=je;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Al(a,this.history)),this.removeListeners=wn(Ut(this.contextWindow,"pointermove",this.handlePointerMove),Ut(this.contextWindow,"pointerup",this.handlePointerUp),Ut(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Pt(this.updatePoint)}}function $l(e,t){return t?{point:t(e.point)}:e}function wp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Al({point:e},t){return{point:e,delta:wp(e,j1(t)),offset:wp(e,_b(t)),velocity:Db(t,.1)}}function _b(e){return e[0]}function j1(e){return e[e.length-1]}function Db(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=j1(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>bn(t)));)n--;if(!r)return{x:0,y:0};const o=Mt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ot(e){return e.max-e.min}function Gc(e,t=0,n=.01){return Math.abs(e-t)<=n}function bp(e,t,n,r=.5){e.origin=r,e.originPoint=ge(t.min,t.max,e.origin),e.scale=ot(n)/ot(t),(Gc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ge(n.min,n.max,e.origin)-e.originPoint,(Gc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Oi(e,t,n,r){bp(e.x,t.x,n.x,r?r.originX:void 0),bp(e.y,t.y,n.y,r?r.originY:void 0)}function kp(e,t,n){e.min=n.min+t.min,e.max=e.min+ot(t)}function Nb(e,t,n){kp(e.x,t.x,n.x),kp(e.y,t.y,n.y)}function Sp(e,t,n){e.min=t.min-n.min,e.max=e.min+ot(t)}function Vi(e,t,n){Sp(e.x,t.x,n.x),Sp(e.y,t.y,n.y)}function Ib(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ge(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ge(n,e,r.max):Math.min(e,n)),e}function Cp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Fb(e,{top:t,left:n,bottom:r,right:i}){return{x:Cp(e.x,n,i),y:Cp(e.y,t,r)}}function Ep(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ob(e,t){return{x:Ep(e.x,t.x),y:Ep(e.y,t.y)}}function Vb(e,t){let n=.5;const r=ot(e),i=ot(t);return i>r?n=Qr(t.min,t.max-r,e.min):r>i&&(n=Qr(e.min,e.max-i,t.min)),$n(0,1,n)}function Bb(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Kc=.35;function Ub(e=Kc){return e===!1?e=0:e===!0&&(e=Kc),{x:Pp(e,"left","right"),y:Pp(e,"top","bottom")}}function Pp(e,t,n){return{min:Tp(e,t),max:Tp(e,n)}}function Tp(e,t){return typeof e=="number"?e:e[t]||0}const jp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ar=()=>({x:jp(),y:jp()}),$p=()=>({min:0,max:0}),ke=()=>({x:$p(),y:$p()});function ct(e){return[e("x"),e("y")]}function $1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Hb({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Wb(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Rl(e){return e===void 0||e===1}function Yc({scale:e,scaleX:t,scaleY:n}){return!Rl(e)||!Rl(t)||!Rl(n)}function Fn(e){return Yc(e)||A1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function A1(e){return Ap(e.x)||Ap(e.y)}function Ap(e){return e&&e!=="0%"}function na(e,t,n){const r=e-n,i=t*r;return n+i}function Rp(e,t,n,r,i){return i!==void 0&&(e=na(e,i,r)),na(e,n,r)+t}function Xc(e,t=0,n=1,r,i){e.min=Rp(e.min,t,n,r,i),e.max=Rp(e.max,t,n,r,i)}function R1(e,{x:t,y:n}){Xc(e.x,t.translate,t.scale,t.originPoint),Xc(e.y,n.translate,n.scale,n.originPoint)}function Gb(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Rr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,R1(e,s)),r&&Fn(o.latestValues)&&Rr(e,o.latestValues))}t.x=Lp(t.x),t.y=Lp(t.y)}function Lp(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function on(e,t){e.min=e.min+t,e.max=e.max+t}function zp(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=ge(e.min,e.max,o);Xc(e,t[n],t[r],s,t.scale)}const Kb=["x","scaleX","originX"],Yb=["y","scaleY","originY"];function Rr(e,t){zp(e.x,t,Kb),zp(e.y,t,Yb)}function L1(e,t){return $1(Wb(e.getBoundingClientRect(),t))}function Xb(e,t,n){const r=L1(e,n),{scroll:i}=t;return i&&(on(r.x,i.offset.x),on(r.y,i.offset.y)),r}const z1=({current:e})=>e?e.ownerDocument.defaultView:null,qb=new WeakMap;class Qb{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ke(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:u}=this.getProps();u?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Na(d,"page").point)},o=(d,u)=>{const{drag:p,dragPropagation:g,onDragStart:v}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Gg(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ct(S=>{let y=this.getAxisMotionValue(S).get()||0;if(zt.test(y)){const{projection:m}=this.visualElement;if(m&&m.layout){const h=m.layout.layoutBox[S];h&&(y=ot(h)*(parseFloat(y)/100))}}this.originPoint[S]=y}),v&&ne.update(()=>v(d,u),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(d,u)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:S}=u;if(g&&this.currentDirection===null){this.currentDirection=Jb(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",u.point,S),this.updateAxis("y",u.point,S),this.visualElement.render(),x&&x(d,u)},a=(d,u)=>this.stop(d,u),l=()=>ct(d=>{var u;return this.getAnimationState(d)==="paused"&&((u=this.getAxisMotionValue(d).animation)===null||u===void 0?void 0:u.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new T1(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:z1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ne.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Xo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Ib(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&jr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Fb(i.layoutBox,n):this.constraints=!1,this.elastic=Ub(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ct(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=Bb(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!jr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Xb(r,i.root,this.visualElement.getTransformPagePoint());let s=Ob(i.layout.layoutBox,o);if(n){const a=n(Hb(s));this.hasMutatedConstraints=!!a,a&&(s=$1(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ct(d=>{if(!Xo(d,n,this.currentDirection))return;let u=l&&l[d]||{};s&&(u={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...u};return this.startAxisValueAnimation(d,v)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Sd(t,r,0,n))}stopAnimation(){ct(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ct(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ct(n=>{const{drag:r}=this.getProps();if(!Xo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-ge(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!jr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ct(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=Vb({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ct(s=>{if(!Xo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(ge(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;qb.set(this.visualElement,this);const t=this.visualElement.current,n=Ut(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();jr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Vt(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(ct(d=>{const u=this.getAxisMotionValue(d);u&&(this.originPoint[d]+=l[d].translate,u.set(u.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Kc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Xo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Jb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Zb extends Mn{constructor(t){super(t),this.removeGroupControls=we,this.removeListeners=we,this.controls=new Qb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const Mp=e=>(t,n)=>{e&&ne.update(()=>e(t,n))};class ek extends Mn{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(t){this.session=new T1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:z1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Mp(t),onStart:Mp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ne.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ut(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function tk(){const e=w.useContext(La);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=w.useId();return w.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const ys={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _p(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const mi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=_p(e,t.target.x),r=_p(e,t.target.y);return`${n}% ${r}%`}},nk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=An.parse(e);if(i.length>5)return r;const o=An.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=ge(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}};class rk extends ue.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;f5(ik),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ys.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ne.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function M1(e){const[t,n]=tk(),r=w.useContext(cd);return ue.createElement(rk,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(Ag),isPresent:t,safeToRemove:n})}const ik={borderRadius:{...mi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mi,borderTopRightRadius:mi,borderBottomLeftRadius:mi,borderBottomRightRadius:mi,boxShadow:nk},_1=["TopLeft","TopRight","BottomLeft","BottomRight"],ok=_1.length,Dp=e=>typeof e=="string"?parseFloat(e):e,Np=e=>typeof e=="number"||U.test(e);function sk(e,t,n,r,i,o){i?(e.opacity=ge(0,n.opacity!==void 0?n.opacity:1,ak(r)),e.opacityExit=ge(t.opacity!==void 0?t.opacity:1,0,lk(r))):o&&(e.opacity=ge(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<ok;s++){const a=`border${_1[s]}Radius`;let l=Ip(t,a),c=Ip(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Np(l)===Np(c)?(e[a]=Math.max(ge(Dp(l),Dp(c),r),0),(zt.test(c)||zt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=ge(t.rotate||0,n.rotate||0,r))}function Ip(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const ak=D1(0,.5,o1),lk=D1(.5,.95,we);function D1(e,t,n){return r=>r<e?0:r>t?1:n(Qr(e,t,r))}function Fp(e,t){e.min=t.min,e.max=t.max}function lt(e,t){Fp(e.x,t.x),Fp(e.y,t.y)}function Op(e,t,n,r,i){return e-=t,e=na(e,1/n,r),i!==void 0&&(e=na(e,1/i,r)),e}function ck(e,t=0,n=1,r=.5,i,o=e,s=e){if(zt.test(t)&&(t=parseFloat(t),t=ge(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ge(o.min,o.max,r);e===o&&(a-=t),e.min=Op(e.min,t,n,a,i),e.max=Op(e.max,t,n,a,i)}function Vp(e,t,[n,r,i],o,s){ck(e,t[n],t[r],t[i],t.scale,o,s)}const uk=["x","scaleX","originX"],dk=["y","scaleY","originY"];function Bp(e,t,n,r){Vp(e.x,t,uk,n?n.x:void 0,r?r.x:void 0),Vp(e.y,t,dk,n?n.y:void 0,r?r.y:void 0)}function Up(e){return e.translate===0&&e.scale===1}function N1(e){return Up(e.x)&&Up(e.y)}function fk(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function I1(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Hp(e){return ot(e.x)/ot(e.y)}class pk{constructor(){this.members=[]}add(t){Cd(this.members,t),t.scheduleRender()}remove(t){if(Ed(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Wp(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const hk=(e,t)=>e.depth-t.depth;class mk{constructor(){this.children=[],this.isDirty=!1}add(t){Cd(this.children,t),this.isDirty=!0}remove(t){Ed(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(hk),this.isDirty=!1,this.children.forEach(t)}}function gk(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Pt(r),e(o-t))};return ne.read(r,!0),()=>Pt(r)}function yk(e){window.MotionDebug&&window.MotionDebug.record(e)}function vk(e){return e instanceof SVGElement&&e.tagName!=="svg"}function xk(e,t,n){const r=Be(e)?e:bt(e);return r.start(Sd("",r,t,n)),r.animation}const Gp=["","X","Y","Z"],wk={visibility:"hidden"},Kp=1e3;let bk=0;const On={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function F1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=bk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,On.totalNodes=On.resolvedTargetDeltas=On.recalculatedProjection=0,this.nodes.forEach(Ck),this.nodes.forEach($k),this.nodes.forEach(Ak),this.nodes.forEach(Ek),yk(On)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new mk)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Pd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=vk(s),this.instance=s;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let u;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,u&&u(),u=gk(p,250),ys.hasAnimatedSinceResize&&(ys.hasAnimatedSinceResize=!1,this.nodes.forEach(Xp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||_k,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=d.getProps(),m=!this.targetLayout||!I1(this.targetLayout,v)||g,h=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(u,h);const k={...kd(x,"layout"),onPlay:S,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else p||Xp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Rk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const u=this.path[d];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Yp);return}this.isUpdating||this.nodes.forEach(Tk),this.isUpdating=!1,this.nodes.forEach(jk),this.nodes.forEach(kk),this.nodes.forEach(Sk),this.clearAllSnapshots();const a=performance.now();je.delta=$n(0,1e3/60,a-je.timestamp),je.timestamp=a,je.isProcessing=!0,bl.update.process(je),bl.preRender.process(je),bl.render.process(je),je.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Pk),this.sharedNodes.forEach(Lk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!N1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&(a||Fn(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),Dk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ke();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(on(a.x,l.offset.x),on(a.y,l.offset.y)),a}removeElementScroll(s){const a=ke();lt(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:d,options:u}=c;if(c!==this.root&&d&&u.layoutScroll){if(d.isRoot){lt(a,s);const{scroll:p}=this.root;p&&(on(a.x,-p.offset.x),on(a.y,-p.offset.y))}on(a.x,d.offset.x),on(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=ke();lt(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Rr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Fn(d.latestValues)&&Rr(l,d.latestValues)}return Fn(this.latestValues)&&Rr(l,this.latestValues),l}removeTransform(s){const a=ke();lt(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Fn(c.latestValues))continue;Yc(c.latestValues)&&c.updateSnapshot();const d=ke(),u=c.measurePageBox();lt(d,u),Bp(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Fn(this.latestValues)&&Bp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==je.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:u,layoutId:p}=this.options;if(!(!this.layout||!(u||p))){if(this.resolvedRelativeTargetAt=je.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),Vi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ke(),this.targetWithTransforms=ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Nb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):lt(this.target,this.layout.layoutBox),R1(this.target,this.targetDelta)):lt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),Vi(this.relativeTargetOrigin,this.target,g.target),lt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}On.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Yc(this.parent.latestValues)||A1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===je.timestamp&&(c=!1),c)return;const{layout:d,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||u))return;lt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;Gb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Ar(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Ar(),this.projectionDeltaWithTransform=Ar());const x=this.projectionTransform;Oi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Wp(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),On.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},u=Ar();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=ke(),g=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,S=this.getStack(),y=!S||S.members.length<=1,m=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(Mk));this.animationProgress=0;let h;this.mixTargetDelta=k=>{const E=k/1e3;qp(u.x,s.x,E),qp(u.y,s.y,E),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),zk(this.relativeTarget,this.relativeTargetOrigin,p,E),h&&fk(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=ke()),lt(h,this.relativeTarget)),x&&(this.animationValues=d,sk(d,c,this.latestValues,E,m,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ne.update(()=>{ys.hasAnimatedSinceResize=!0,this.currentAnimation=xk(0,Kp,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Kp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&O1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ke();const u=ot(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+u;const p=ot(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}lt(a,l),Rr(a,d),Oi(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new pk),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let d=0;d<Gp.length;d++){const u="rotate"+Gp[d];l[u]&&(c[u]=l[u],s.setStaticValue(u,0))}s.render();for(const d in c)s.setStaticValue(d,c[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return wk;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=gs(s==null?void 0:s.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=gs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Fn(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=u.animationValues||u.latestValues;this.applyTransformsToTarget(),c.transform=Wp(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y:v}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,u.animationValues?c.opacity=u===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=u===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in qs){if(p[x]===void 0)continue;const{correct:S,applyTo:y}=qs[x],m=c.transform==="none"?p[x]:S(p[x],u);if(y){const h=y.length;for(let k=0;k<h;k++)c[y[k]]=m}else c[x]=m}return this.options.layoutId&&(c.pointerEvents=u===this?gs(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Yp),this.root.sharedNodes.clear()}}}function kk(e){e.updateLayout()}function Sk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?ct(u=>{const p=s?n.measuredBox[u]:n.layoutBox[u],g=ot(p);p.min=r[u].min,p.max=p.min+g}):O1(o,n.layoutBox,r)&&ct(u=>{const p=s?n.measuredBox[u]:n.layoutBox[u],g=ot(r[u]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[u].max=e.relativeTarget[u].min+g)});const a=Ar();Oi(a,r,n.layoutBox);const l=Ar();s?Oi(l,e.applyTransform(i,!0),n.measuredBox):Oi(l,r,n.layoutBox);const c=!N1(a);let d=!1;if(!e.resumeFrom){const u=e.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:p,layout:g}=u;if(p&&g){const v=ke();Vi(v,n.layoutBox,p.layoutBox);const x=ke();Vi(x,r,g.layoutBox),I1(v,x)||(d=!0),u.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=u)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Ck(e){On.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Ek(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Pk(e){e.clearSnapshot()}function Yp(e){e.clearMeasurements()}function Tk(e){e.isLayoutDirty=!1}function jk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Xp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $k(e){e.resolveTargetDelta()}function Ak(e){e.calcProjection()}function Rk(e){e.resetRotation()}function Lk(e){e.removeLeadSnapshot()}function qp(e,t,n){e.translate=ge(t.translate,0,n),e.scale=ge(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Qp(e,t,n,r){e.min=ge(t.min,n.min,r),e.max=ge(t.max,n.max,r)}function zk(e,t,n,r){Qp(e.x,t.x,n.x,r),Qp(e.y,t.y,n.y,r)}function Mk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const _k={duration:.45,ease:[.4,0,.1,1]},Jp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Zp=Jp("applewebkit/")&&!Jp("chrome/")?Math.round:we;function eh(e){e.min=Zp(e.min),e.max=Zp(e.max)}function Dk(e){eh(e.x),eh(e.y)}function O1(e,t,n){return e==="position"||e==="preserve-aspect"&&!Gc(Hp(t),Hp(n),.2)}const Nk=F1({attachResizeListener:(e,t)=>Vt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ll={current:void 0},V1=F1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ll.current){const e=new Nk({});e.mount(window),e.setOptions({layoutScroll:!0}),Ll.current=e}return Ll.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ik={pan:{Feature:ek},drag:{Feature:Zb,ProjectionNode:V1,MeasureLayout:M1}},Fk=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Ok(e){const t=Fk.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function qc(e,t,n=1){const[r,i]=Ok(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return S1(s)?parseFloat(s):s}else return Fc(i)?qc(i,t,n+1):i}function Vk(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Fc(o))return;const s=qc(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!Fc(o))continue;const s=qc(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const Bk=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),B1=e=>Bk.has(e),Uk=e=>Object.keys(e).some(B1),th=e=>e===ar||e===U,nh=(e,t)=>parseFloat(e.split(", ")[t]),rh=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return nh(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?nh(o[1],e):0}},Hk=new Set(["x","y","z"]),Wk=wo.filter(e=>!Hk.has(e));function Gk(e){const t=[];return Wk.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Jr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:rh(4,13),y:rh(5,14)};Jr.translateX=Jr.x;Jr.translateY=Jr.y;const Kk=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{a[c]=Jr[c](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const d=t.getValue(c);d&&d.jump(a[c]),e[c]=Jr[c](l,o)}),e},Yk=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(B1);let o=[],s=!1;const a=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],u=hi(d);const p=t[l];let g;if(Js(p)){const v=p.length,x=p[0]===null?1:0;d=p[x],u=hi(d);for(let S=x;S<v&&p[S]!==null;S++)g?Fa(hi(p[S])===g):g=hi(p[S])}else g=hi(p);if(u!==g)if(th(u)&&th(g)){const v=c.get();typeof v=="string"&&c.set(parseFloat(v)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&g===U&&(t[l]=p.map(parseFloat))}else u!=null&&u.transform&&(g!=null&&g.transform)&&(d===0||p===0)?d===0?c.set(g.transform(d)):t[l]=u.transform(p):(s||(o=Gk(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],c.jump(p))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=Kk(t,e,a);return o.length&&o.forEach(([d,u])=>{e.getValue(d).set(u)}),e.render(),za&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Xk(e,t,n,r){return Uk(t)?Yk(e,t,n,r):{target:t,transitionEnd:r}}const qk=(e,t,n,r)=>{const i=Vk(e,t,r);return t=i.target,r=i.transitionEnd,Xk(e,t,n,r)},Qc={current:null},U1={current:!1};function Qk(){if(U1.current=!0,!!za)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Qc.current=e.matches;e.addListener(t),t()}else Qc.current=!1}function Jk(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Be(o))e.addValue(i,o),ta(r)&&r.add(i);else if(Be(s))e.addValue(i,bt(o,{owner:e})),ta(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,bt(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const ih=new WeakMap,H1=Object.keys(lo),Zk=H1.length,oh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],e3=ld.length;class t3{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ne.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=_a(n),this.isVariantNode=$g(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const u in d){const p=d[u];a[u]!==void 0&&Be(p)&&(p.set(a[u],!1),ta(c)&&c.add(u))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,ih.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),U1.current||Qk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ih.delete(this.current),this.projection&&this.projection.unmount(),Pt(this.notifyUpdate),Pt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=sr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ne.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<Zk;l++){const c=H1[l],{isEnabled:d,Feature:u,ProjectionNode:p,MeasureLayout:g}=lo[c];p&&(s=p),d(n)&&(!this.features[c]&&u&&(this.features[c]=new u(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:d,dragConstraints:u,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!d||u&&jr(u),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:p,layoutRoot:g})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ke()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<oh.length;r++){const i=oh[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Jk(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<e3;r++){const i=ld[r],o=this.props[i];(ao(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=bt(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=gd(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Be(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Pd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class W1 extends t3{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=vb(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){gb(this,r,s);const a=qk(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function n3(e){return window.getComputedStyle(e)}class r3 extends W1{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(sr.has(n)){const r=bd(n);return r&&r.default||0}else{const r=n3(t),i=(zg(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return L1(t,n)}build(t,n,r,i){dd(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return md(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Be(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Fg(t,n,r,i)}}class i3 extends W1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(sr.has(n)){const r=bd(n);return r&&r.default||0}return n=Og.has(n)?n:sd(n),t.getAttribute(n)}measureInstanceViewportBox(){return ke()}scrapeMotionValuesFromProps(t,n){return Bg(t,n)}build(t,n,r,i){pd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Vg(t,n,r,i)}mount(t){this.isSVGTag=hd(t.tagName),super.mount(t)}}const o3=(e,t)=>ud(e)?new i3(t,{enableHardwareAcceleration:!1}):new r3(t,{enableHardwareAcceleration:!0}),s3={layout:{ProjectionNode:V1,MeasureLayout:M1}},a3={...zb,...tw,...Ik,...s3},O=u5((e,t)=>B5(e,t,a3,o3));function G1(){const e=w.useRef(!1);return ri(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function l3(){const e=G1(),[t,n]=w.useState(0),r=w.useCallback(()=>{e.current&&n(t+1)},[t]);return[w.useCallback(()=>ne.postRender(r),[r]),t]}class c3 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u3({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0});return w.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),w.createElement(c3,{isPresent:t,childRef:r,sizeRef:i},w.cloneElement(e,{ref:r}))}const zl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=So(d3),l=w.useId(),c=w.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const u of a.values())if(!u)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),o?void 0:[n]);return w.useMemo(()=>{a.forEach((d,u)=>a.set(u,!1))},[n]),w.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=w.createElement(u3,{isPresent:n},e)),w.createElement(La.Provider,{value:c},e)};function d3(){return new Map}function f3(e){return w.useEffect(()=>()=>e(),[])}const Vn=e=>e.key||"";function p3(e,t){e.forEach(n=>{const r=Vn(n);t.set(r,n)})}function h3(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const _t=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=w.useContext(cd).forceRender||l3()[0],l=G1(),c=h3(e);let d=c;const u=w.useRef(new Map).current,p=w.useRef(d),g=w.useRef(new Map).current,v=w.useRef(!0);if(ri(()=>{v.current=!1,p3(c,g),p.current=d}),f3(()=>{v.current=!0,g.clear(),u.clear()}),v.current)return w.createElement(w.Fragment,null,d.map(m=>w.createElement(zl,{key:Vn(m),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},m)));d=[...d];const x=p.current.map(Vn),S=c.map(Vn),y=x.length;for(let m=0;m<y;m++){const h=x[m];S.indexOf(h)===-1&&!u.has(h)&&u.set(h,void 0)}return s==="wait"&&u.size&&(d=[]),u.forEach((m,h)=>{if(S.indexOf(h)!==-1)return;const k=g.get(h);if(!k)return;const E=x.indexOf(h);let C=m;if(!C){const P=()=>{u.delete(h);const T=Array.from(g.keys()).filter(M=>!S.includes(M));if(T.forEach(M=>g.delete(M)),p.current=c.filter(M=>{const R=Vn(M);return R===h||T.includes(R)}),!u.size){if(l.current===!1)return;a(),r&&r()}};C=w.createElement(zl,{key:Vn(k),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:o,mode:s},k),u.set(h,C)}d.splice(E,0,C)}),d=d.map(m=>{const h=m.key;return u.has(h)?m:w.createElement(zl,{key:Vn(m),isPresent:!0,presenceAffectsLayout:o,mode:s},m)}),w.createElement(w.Fragment,null,u.size?d:d.map(m=>w.cloneElement(m)))};function Td(e){const t=So(()=>bt(e)),{isStatic:n}=w.useContext(Aa);if(n){const[,r]=w.useState(e);w.useEffect(()=>t.on("change",r),[])}return t}const m3=e=>e&&typeof e=="object"&&e.mix,g3=e=>m3(e)?e.mix:void 0;function y3(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=Oa(i,o,{mixer:g3(o[0]),...s});return t?a(r):a}function K1(e,t){const n=Td(t()),r=()=>n.set(t());return r(),ri(()=>{const i=()=>ne.update(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Pt(r)}}),n}function v3(e){Fi.current=[],e();const t=K1(Fi.current,e);return Fi.current=void 0,t}function x3(e,t,n,r){if(typeof e=="function")return v3(e);const i=typeof t=="function"?t:y3(t,n,r);return Array.isArray(e)?sh(e,i):sh([e],([o])=>i(o))}function sh(e,t){const n=So(()=>[]);return K1(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function w3(e,t={}){const{isStatic:n}=w.useContext(Aa),r=w.useRef(null),i=Td(Be(e)?e.get():e),o=()=>{r.current&&r.current.stop()};return w.useInsertionEffect(()=>i.attach((s,a)=>{if(n)return a(s);if(o(),r.current=co({keyframes:[i.get(),s],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:a}),!je.isProcessing){const l=performance.now()-je.timestamp;l<30&&(r.current.time=Mt(l))}return i.get()},o),[JSON.stringify(t)]),ri(()=>{if(Be(e))return e.on("change",s=>i.set(parseFloat(s)))},[i]),i}function b3(e,t,n){var r;if(typeof e=="string"){let i=document;t&&(Fa(!!t.current),i=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const vs=new WeakMap;let tn;function k3(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function S3({target:e,contentRect:t,borderBoxSize:n}){var r;(r=vs.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return k3(e,n)}})})}function C3(e){e.forEach(S3)}function E3(){typeof ResizeObserver>"u"||(tn=new ResizeObserver(C3))}function P3(e,t){tn||E3();const n=b3(e);return n.forEach(r=>{let i=vs.get(r);i||(i=new Set,vs.set(r,i)),i.add(t),tn==null||tn.observe(r)}),()=>{n.forEach(r=>{const i=vs.get(r);i==null||i.delete(t),i!=null&&i.size||tn==null||tn.unobserve(r)})}}const xs=new Set;let Bi;function T3(){Bi=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};xs.forEach(n=>n(t))},window.addEventListener("resize",Bi)}function j3(e){return xs.add(e),Bi||T3(),()=>{xs.delete(e),!xs.size&&Bi&&(Bi=void 0)}}function $3(e,t){return typeof e=="function"?j3(e):P3(e,t)}const A3=50,ah=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),R3=()=>({time:0,x:ah(),y:ah()}),L3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function lh(e,t,n,r){const i=n[t],{length:o,position:s}=L3[t],a=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Qr(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>A3?0:wd(i.current-a,c)}function z3(e,t,n){lh(e,"x",t,n),lh(e,"y",t,n),t.time=n}function M3(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const _3={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Jc={start:0,center:.5,end:1};function ch(e,t,n=0){let r=0;if(Jc[e]!==void 0&&(e=Jc[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const D3=[0,0];function N3(e,t,n,r){let i=Array.isArray(e)?e:D3,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Jc[e]?e:"0"]),o=ch(i[0],n,r),s=ch(i[1],t),o-s}const I3={x:0,y:0};function F3(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function O3(e,t,n){let{offset:r=_3.All}=n;const{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?M3(i,e):I3,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:F3(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let d=!t[o].interpolate;const u=r.length;for(let p=0;p<u;p++){const g=N3(r[p],c[s],l[s],a[o]);!d&&g!==t[o].interpolatorOffsets[p]&&(d=!0),t[o].offset[p]=g}d&&(t[o].interpolate=Oa(t[o].offset,v1(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function V3(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function B3(e,t,n,r={}){return{measure:()=>V3(e,r.target,n),update:i=>{z3(e,n,i),(r.offset||r.target)&&O3(e,n,r)},notify:()=>t(n)}}const gi=new WeakMap,uh=new WeakMap,Ml=new WeakMap,dh=e=>e===document.documentElement?window:e;function U3(e,{container:t=document.documentElement,...n}={}){let r=Ml.get(t);r||(r=new Set,Ml.set(t,r));const i=R3(),o=B3(t,e,i,n);if(r.add(o),!gi.has(t)){const a=()=>{for(const p of r)p.measure()},l=()=>{for(const p of r)p.update(je.timestamp)},c=()=>{for(const p of r)p.notify()},d=()=>{ne.read(a,!1,!0),ne.read(l,!1,!0),ne.update(c,!1,!0)};gi.set(t,d);const u=dh(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&uh.set(t,$3(t,d)),u.addEventListener("scroll",d,{passive:!0})}const s=gi.get(t);return ne.read(s,!1,!0),()=>{var a;Pt(s);const l=Ml.get(t);if(!l||(l.delete(o),l.size))return;const c=gi.get(t);gi.delete(t),c&&(dh(t).removeEventListener("scroll",c),(a=uh.get(t))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function fh(e,t){qg(!!(!t||t.current))}const H3=()=>({scrollX:bt(0),scrollY:bt(0),scrollXProgress:bt(0),scrollYProgress:bt(0)});function W3({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=So(H3);return(n?ri:w.useEffect)(()=>(fh("target",t),fh("container",e),U3(({x:s,y:a})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(a.current),i.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const G3={classical:"/assets/covers/classical_cover.jpg",rock:"/assets/covers/rock_cover.jpeg",pop:"/assets/covers/pop_cover.jpeg",electronic:"/assets/covers/electronic_cover.jpeg",jazz:"/assets/covers/jazz_cover.jpeg",ambient:"/assets/covers/ambient_cover.jpeg",soundtrack:"/assets/covers/galaxy_2.gif",hiphop:"/assets/covers/hiphop_cover.jpg"},le={chopin:"/assets/covers/chopin.jpeg",chopin_etudes:"/assets/covers/chopin_etudes.jpeg",bach:"/assets/covers/bach.jpeg",queen:"/assets/covers/rock_cover.jpg",bonJovi:"/assets/covers/bon_jovi.jpeg",rema:"/assets/covers/rema.jpg",rosalia:"/assets/covers/rosalia.jpg",eminem:"/assets/covers/eminem.jpg",liebestraume:"/assets/covers/liebestraume.jpg",rema_calm_down:"/assets/covers/rema_calm_down.jpeg",memory_reboot:"/assets/covers/memory_reboot.jpeg"},ph={Stan:"/assets/covers/stan.jpeg"},qo={urban_blues:"/assets/covers/urban_blues.jpeg",miss_g:"/assets/covers/miss_g.jpeg",十一月的萧邦:"/assets/covers/11月的萧邦.jpg"},Z={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"},Xt=[{id:"classical-1",title:"Air on G String",artist:"Johann Sebastian Bach",album:"Orchestral Suites",genre:"classical",coverArt:le.bach,audioSrc:"/assets/musics/single_tracks/air_on_g_string.mp3",duration:180,color:Z.classical},{id:"classical-3",title:"Etude Op. 10 No. 4",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:le.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_4.mp3",duration:120,color:Z.classical},{id:"classical-4",title:"Etude Op. 25 No. 11",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:le.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_23.mp3",duration:260,color:Z.classical},{id:"classical-5",title:"Liebestraume No. 3",artist:"Franz Liszt",album:"Piano Dreams",genre:"classical",coverArt:le.liebestraume,audioSrc:"/assets/musics/single_tracks/liebestraume_no_3.mp3",duration:295,color:Z.classical},{id:"nocturne-1",title:"Nocturne Op. 9 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_1.mp3",duration:310,color:Z.classical},{id:"nocturne-2",title:"Nocturne Op. 9 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_2.mp3",duration:270,color:Z.classical},{id:"nocturne-3",title:"Nocturne Op. 9 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_3.mp3",duration:330,color:Z.classical},{id:"nocturne-4",title:"Nocturne Op. 15 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_4.mp3",duration:305,color:Z.classical},{id:"nocturne-5",title:"Nocturne Op. 15 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_5.mp3",duration:315,color:Z.classical},{id:"nocturne-6",title:"Nocturne Op. 15 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_6.mp3",duration:290,color:Z.classical},{id:"nocturne-7",title:"Nocturne Op. 27 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_7.mp3",duration:340,color:Z.classical},{id:"nocturne-8",title:"Nocturne Op. 27 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_8.mp3",duration:320,color:Z.classical},{id:"nocturne-9",title:"Nocturne Op. 32 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_9.mp3",duration:280,color:Z.classical},{id:"nocturne-10",title:"Nocturne Op. 32 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_10.mp3",duration:300,color:Z.classical},{id:"nocturne-11",title:"Nocturne Op. 37 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_11.mp3",duration:325,color:Z.classical},{id:"nocturne-12",title:"Nocturne Op. 37 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_12.mp3",duration:310,color:Z.classical},{id:"nocturne-13",title:"Nocturne Op. 48 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_13.mp3",duration:350,color:Z.classical},{id:"nocturne-14",title:"Nocturne Op. 48 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_14.mp3",duration:335,color:Z.classical},{id:"nocturne-15",title:"Nocturne Op. 55 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_15.mp3",duration:295,color:Z.classical},{id:"nocturne-17",title:"Nocturne Op. 55 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_17.mp3",duration:330,color:Z.classical},{id:"nocturne-18",title:"Nocturne Op. 62 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_18.mp3",duration:360,color:Z.classical},{id:"nocturne-19",title:"Nocturne Op. 62 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_19.mp3",duration:340,color:Z.classical},{id:"nocturne-20",title:"Nocturne Op. 72 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:le.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_20.mp3",duration:315,color:Z.classical},{id:"rock-1",title:"Bohemian Rhapsody",artist:"Queen",album:"A Night at the Opera",genre:"rock",coverArt:G3.rock,audioSrc:"/assets/musics/single_tracks/bohemian_rhapsody.mp3",duration:355,color:Z.rock},{id:"rock-2",title:"It's My Life",artist:"Bon Jovi",album:"Crush",genre:"rock",coverArt:le.bonJovi,audioSrc:"/assets/musics/single_tracks/its_my_life.mp3",duration:224,color:Z.rock},{id:"pop-1",title:"Calm Down",artist:"Rema",album:"Rave & Roses",genre:"pop",coverArt:le.rema_calm_down,audioSrc:"/assets/musics/single_tracks/calm_down.mp3",duration:234,color:Z.pop},{id:"pop-2",title:"Candy",artist:"Naoko Gushima",album:"Motomami",genre:"pop",coverArt:qo.miss_g,audioSrc:"/assets/musics/single_tracks/candy.mp3",duration:185,color:Z.pop},{id:"pop-3",title:"Missing You",artist:"Naoko Gushima",album:"Love Stories",genre:"pop",coverArt:qo.urban_blues,audioSrc:"/assets/musics/single_tracks/missing_you.mp3",duration:210,color:Z.pop},{id:"pop-4",title:"夜曲 (Nocturne)",artist:"Jay Chou",album:"November's chopin",genre:"pop",coverArt:qo.十一月的萧邦,audioSrc:"/assets/musics/single_tracks/夜曲.mp3",duration:200,color:Z.pop},{id:"electronic-2",title:"Memory Reboot",artist:"Cyber Dreams",album:"Neural Network",genre:"electronic",coverArt:le.memory_reboot,audioSrc:"/assets/musics/single_tracks/memory_reboot.mp3",duration:240,color:Z.electronic},{id:"electronic-3",title:"Monochrome",artist:"Naoko Gushima",album:"Color Code",genre:"electronic",coverArt:qo.urban_blues,audioSrc:"/assets/musics/single_tracks/monochrome.mp3",duration:218,color:Z.electronic},{id:"hiphop-1",title:"Stan (Instrumental)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:ph.Stan,audioSrc:"/assets/musics/single_tracks/stan_instrumental.mp3",duration:340,color:Z.hiphop},{id:"hiphop-2",title:"Stan (MIDI Version)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:ph.Stan,audioSrc:"/assets/musics/single_tracks/stan_midi.mp3",duration:330,color:Z.hiphop}];Xt.filter(e=>e.genre==="classical");Xt.filter(e=>e.genre==="rock");Xt.filter(e=>e.genre==="pop");Xt.filter(e=>e.genre==="electronic");Xt.filter(e=>e.genre==="jazz");Xt.filter(e=>e.genre==="ambient");Xt.filter(e=>e.genre==="soundtrack");Xt.filter(e=>e.genre==="hiphop");class rt{static saveLastPlayed(t){localStorage.setItem(this.LAST_PLAYED_KEY,JSON.stringify(t))}static getLastPlayed(){const t=localStorage.getItem(this.LAST_PLAYED_KEY);return t?JSON.parse(t):null}static savePlaybackState(t){localStorage.setItem(this.PLAYBACK_STATE_KEY,JSON.stringify(t))}static getPlaybackState(){const t=localStorage.getItem(this.PLAYBACK_STATE_KEY);return t?JSON.parse(t):null}static saveQueue(t){localStorage.setItem(this.QUEUE_KEY,JSON.stringify(t))}static getQueue(){const t=localStorage.getItem(this.QUEUE_KEY);return t?JSON.parse(t):[]}static startNewSession(){const t=Date.now().toString();localStorage.setItem(this.SESSION_KEY,t)}static updateSession(t){const n=localStorage.getItem(this.SESSION_KEY);if(!n)return;const r=this.getHistory();r[n]=r[n]||[],r[n].push({trackId:t,timestamp:Date.now()}),localStorage.setItem(this.HISTORY_KEY,JSON.stringify(r))}static saveToHistory(t,n){const r=this.getHistory(),i=localStorage.getItem(this.SESSION_KEY);i&&(r[i]=r[i]||[],r[i].push({trackId:t.id,timestamp:Date.now(),progress:n}),localStorage.setItem(this.HISTORY_KEY,JSON.stringify(r)))}static getHistory(){const t=localStorage.getItem(this.HISTORY_KEY);return t?JSON.parse(t):{}}static cleanupOldData(t=30){const n=Date.now(),r=t*24*60*60*1e3,i=this.getHistory(),o={};Object.entries(i).forEach(([s,a])=>{const l=parseInt(s);n-l<r&&(o[s]=a)}),localStorage.setItem(this.HISTORY_KEY,JSON.stringify(o))}}rt.LAST_PLAYED_KEY="lastPlayed";rt.PLAYBACK_STATE_KEY="playbackState";rt.QUEUE_KEY="queue";rt.SESSION_KEY="currentSession";rt.HISTORY_KEY="playHistory";const K3=()=>{const e=rt.getLastPlayed(),t=rt.getPlaybackState(),n=rt.getQueue();return{currentTrack:e||null,isPlaying:!1,volume:(t==null?void 0:t.volume)??.7,progress:(t==null?void 0:t.progress)??0,duration:(e==null?void 0:e.duration)??0,isShuffling:(t==null?void 0:t.isShuffling)??!1,repeatMode:(t==null?void 0:t.repeatMode)??"off",queue:n.length>0?n:Xt,visualizerActive:!0,equalizerActive:!0,sidebarMode:"manual",sidebarVisible:!1,isBuffering:!1,error:null,lastUserAction:Date.now(),lastSidebarInteraction:Date.now(),sidebarOpen:!1}},Y3=(e,t)=>{switch(t.type){case"SET_TRACK":{const n=t.payload;return rt.saveLastPlayed(n),rt.updateSession(n.id),{...e,currentTrack:n,isPlaying:!1,progress:0,duration:n.duration||0,error:null,isBuffering:!0,lastUserAction:Date.now()}}case"PLAY":return{...e,isPlaying:!0,lastUserAction:Date.now()};case"PAUSE":return{...e,isPlaying:!1,lastUserAction:Date.now()};case"SET_VOLUME":return{...e,volume:t.payload,lastUserAction:Date.now()};case"SET_PROGRESS":{e.currentTrack&&rt.saveToHistory(e.currentTrack,t.payload);const n=isNaN(t.payload)?e.progress:t.payload;return{...e,progress:n,isBuffering:!1}}case"SET_DURATION":{const n=isNaN(t.payload)?e.duration:t.payload;return{...e,duration:n}}case"TOGGLE_SHUFFLE":return{...e,isShuffling:!e.isShuffling,lastUserAction:Date.now()};case"SET_QUEUE":return{...e,queue:[...t.payload]};case"NEXT_TRACK":{if(!e.currentTrack||!e.activeContext)return e;const n=e.activeContext.tracks,r=n.findIndex(s=>s.id===e.currentTrack.id);let i;if(e.repeatMode==="one")i=r;else if(e.repeatMode==="all")i=(r+1)%n.length;else{if(r===n.length-1)return{...e,isPlaying:!1,progress:0};i=r+1}if(e.isShuffling&&e.repeatMode!=="one"){const s=n.filter((a,l)=>l>r);if(s.length>0){const a=s[Math.floor(Math.random()*s.length)];i=n.indexOf(a)}}const o=n[i];return{...e,currentTrack:o,isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now(),queue:n}}case"PREV_TRACK":{if(!e.currentTrack||!e.activeContext)return e;const n=e.activeContext.tracks,r=n.findIndex(o=>o.id===e.currentTrack.id);let i;if(e.repeatMode==="one")i=r;else if(e.repeatMode==="all")i=(r-1+n.length)%n.length;else{if(r===0)return{...e,progress:0};i=r-1}return{...e,currentTrack:n[i],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"TOGGLE_VISUALIZER":return{...e,visualizerActive:!e.visualizerActive,lastUserAction:Date.now()};case"TOGGLE_EQUALIZER":return{...e,equalizerActive:!e.equalizerActive,lastUserAction:Date.now()};case"SET_BUFFERING":return{...e,isBuffering:t.payload};case"SET_ERROR":return{...e,error:t.payload,isBuffering:!1,isPlaying:!1};case"SET_SIDEBAR_MODE":return{...e,sidebarMode:t.payload,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()};case"SIDEBAR_INTERACTION":return{...e,lastSidebarInteraction:Date.now()};case"USER_INTERACTION":return{...e,lastUserAction:Date.now()};case"CYCLE_REPEAT_MODE":return{...e,repeatMode:e.repeatMode==="off"?"all":e.repeatMode==="all"?"one":"off",lastUserAction:Date.now()};case"TOGGLE_SIDEBAR_VISIBILITY":{const n=!e.sidebarVisible;return console.log(`Toggling sidebar visibility from ${e.sidebarVisible} to ${n}`),e.sidebarVisible===n?e:{...e,sidebarVisible:n}}case"SET_SIDEBAR_OPEN":return{...e,sidebarOpen:t.payload};case"SET_ACTIVE_CONTEXT":return{...e,activeContext:t.payload,queue:t.payload.tracks};case"ADD_TRACK":return{...e,queue:[...e.queue,t.payload]};default:return e}},Y1=w.createContext(void 0);function X3({children:e}){const[t,n]=w.useReducer(Y3,K3()),[r]=w.useState(!1);return w.useEffect(()=>{!t.currentTrack&&t.queue.length>0&&n({type:"SET_TRACK",payload:t.queue[0]})},[t.queue,t.currentTrack]),w.useEffect(()=>{rt.startNewSession(),rt.cleanupOldData()},[]),w.useEffect(()=>{const i=o=>{const s=o.detail;console.log("Community track added:",s),n({type:"ADD_TRACK",payload:s})};return window.addEventListener("community-track-added",i),()=>{window.removeEventListener("community-track-added",i)}},[n]),f.jsx(Y1.Provider,{value:{state:t,dispatch:n,isLoadingTracks:r},children:e})}function qt(){const e=w.useContext(Y1);if(!e)throw new Error("useMusicContext must be used within a MusicProvider");return e}const X1={explorerVisible:!0,explorerWidth:350,mainContentWidth:"calc(100% - 350px)",horizontalControlsExpanded:!1,sidebarVisible:!1,mobileControlsVisible:!0,mobileControlsExpanded:!1,lastInteractionTime:Date.now()},q3=(e,t)=>{switch(t.type){case"TOGGLE_EXPLORER":return{...e,explorerVisible:!e.explorerVisible,mainContentWidth:e.explorerVisible?"100%":`calc(100% - ${e.explorerWidth}px)`};case"SET_EXPLORER_WIDTH":return{...e,explorerWidth:t.payload,mainContentWidth:e.explorerVisible?`calc(100% - ${t.payload}px)`:"100%"};case"SET_CONTROLS_EXPANDED":return{...e,horizontalControlsExpanded:t.payload};case"SET_SIDEBAR_VISIBLE":return{...e,sidebarVisible:t.payload};default:return e}},q1=w.createContext({state:X1,dispatch:()=>null}),Q3=({children:e})=>{const[t,n]=w.useReducer(q3,X1);return f.jsx(q1.Provider,{value:{state:t,dispatch:n},children:e})},Va=()=>w.useContext(q1),J3={id:"dark",name:"Dark Theme",background:{primary:"#121212",secondary:"#1E1E1E",tertiary:"#282828",hover:"rgba(255, 255, 255, 0.1)",highlight:"rgba(255, 255, 255, 0.05)",gradient:"linear-gradient(180deg, #121212 0%, #000000 100%)",nav:"rgba(18, 18, 18, 0.8)"},text:{primary:"#FFFFFF",secondary:"#B3B3B3",tertiary:"#737373"},border:{subtle:"rgba(255, 255, 255, 0.1)"},ui:{accent:"#1DB954",accentDark:"#1AA34A",secondary:"#282828",secondaryHover:"#333333",danger:"#E91429",hover:"rgba(255, 255, 255, 0.1)"}},Z3={id:"light",name:"Light Theme",background:{primary:"#FFFFFF",secondary:"#F5F5F5",tertiary:"#EEEEEE",hover:"rgba(0, 0, 0, 0.05)",highlight:"rgba(0, 0, 0, 0.03)",gradient:"linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)",nav:"rgba(255, 255, 255, 0.8)"},text:{primary:"#000000",secondary:"#6F6F6F",tertiary:"#A3A3A3"},border:{subtle:"rgba(0, 0, 0, 0.1)"},ui:{accent:"#1DB954",accentDark:"#1AA34A",secondary:"#EEEEEE",secondaryHover:"#E5E5E5",danger:"#E91429",hover:"rgba(0, 0, 0, 0.05)"}},eS={id:"space-grey",name:"Space Grey",background:{primary:"#1E2132",secondary:"#252A3F",tertiary:"#2C334D",hover:"rgba(255, 255, 255, 0.1)",highlight:"rgba(255, 255, 255, 0.05)",gradient:"linear-gradient(180deg, #1E2132 0%, #141824 100%)",nav:"rgba(30, 33, 50, 0.8)"},text:{primary:"#FFFFFF",secondary:"#B3B3B3",tertiary:"#737373"},border:{subtle:"rgba(255, 255, 255, 0.1)"},ui:{accent:"#5C6BC0",accentDark:"#3F51B5",secondary:"#2C334D",secondaryHover:"#353D5C",danger:"#EF5350",hover:"rgba(255, 255, 255, 0.1)"}},tS={id:"ocean-blue",name:"Ocean Blue",background:{primary:"#00547A",secondary:"#006994",tertiary:"#0087B8",hover:"rgba(255, 255, 255, 0.1)",highlight:"rgba(255, 255, 255, 0.05)",gradient:"linear-gradient(180deg, #00547A 0%, #004666 100%)",nav:"rgba(0, 84, 122, 0.8)"},text:{primary:"#FFFFFF",secondary:"#B3E0FF",tertiary:"#80CFFF"},border:{subtle:"rgba(255, 255, 255, 0.1)"},ui:{accent:"#00D4FF",accentDark:"#00BFFF",secondary:"#006994",secondaryHover:"#007AB8",danger:"#FF4C4C",hover:"rgba(255, 255, 255, 0.1)"}},nS={id:"cyber-punk",name:"Cyber Punk",background:{primary:"#19002E",secondary:"#220042",tertiary:"#2C0057",hover:"rgba(255, 0, 255, 0.1)",highlight:"rgba(255, 0, 255, 0.05)",gradient:"linear-gradient(180deg, #19002E 0%, #0F001C 100%)",nav:"rgba(25, 0, 46, 0.8)"},text:{primary:"#FF00FF",secondary:"#CC00CC",tertiary:"#990099"},border:{subtle:"rgba(255, 0, 255, 0.1)"},ui:{accent:"#00FFFF",accentDark:"#00CCCC",secondary:"#2C0057",secondaryHover:"#380070",danger:"#FF003C",hover:"rgba(255, 0, 255, 0.1)"}},rS={id:"contrast-light",name:"High Contrast Light",background:{primary:"#FFFFFF",secondary:"#F0F0F0",tertiary:"#E0E0E0",hover:"rgba(0, 0, 0, 0.1)",highlight:"rgba(0, 0, 0, 0.05)",gradient:"linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%)",nav:"rgba(255, 255, 255, 0.95)"},text:{primary:"#000000",secondary:"#1A1A1A",tertiary:"#333333"},border:{subtle:"rgba(0, 0, 0, 0.2)"},ui:{accent:"#0066CC",accentDark:"#004C99",secondary:"#E0E0E0",secondaryHover:"#D0D0D0",danger:"#CC0000",hover:"rgba(0, 0, 0, 0.1)"}},_l={light:Z3,dark:J3,"space-grey":eS,"ocean-blue":tS,"cyber-punk":nS,"contrast-light":rS},iS="dark",Q1=w.createContext(null),oS=({children:e})=>{const[t,n]=w.useState(()=>{const s=localStorage.getItem("theme");return s&&_l[s]?s:iS}),r=_l[t],i=s=>{_l[s]&&requestAnimationFrame(()=>{n(s),localStorage.setItem("theme",s)})},o=ue.useMemo(()=>({currentTheme:r,setTheme:i,themeId:t}),[r,t]);return f.jsx(Q1.Provider,{value:o,children:f.jsx(Eg,{theme:r,children:e})})},jd=()=>{const e=w.useContext(Q1);if(!e)throw new Error("useThemeContext must be used within a ThemeProvider");return e};var J1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},hh=ue.createContext&&ue.createContext(J1),kn=globalThis&&globalThis.__assign||function(){return kn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kn.apply(this,arguments)},sS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Z1(e){return e&&e.map(function(t,n){return ue.createElement(t.tag,kn({key:n},t.attr),Z1(t.child))})}function te(e){return function(t){return ue.createElement(aS,kn({attr:kn({},e.attr)},t),Z1(e.child))}}function aS(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=sS(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ue.createElement("svg",kn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:kn(kn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ue.createElement("title",null,o),e.children)};return hh!==void 0?ue.createElement(hh.Consumer,null,function(n){return t(n)}):t(J1)}function lS(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(e)}function cS(e){return te({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function uS(e){return te({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function dS(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(e)}function fS(e){return te({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"}}]})(e)}function pS(e){return te({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function hS(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function Ba(e){return te({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}}]})(e)}function Ua(e){return te({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function mS(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(e)}function ey(e){return te({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"}}]})(e)}function ty(e){return te({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"}}]})(e)}function gS(e){return te({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function yS(e){return te({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"}}]})(e)}function vS(e){return te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"}}]})(e)}function ny(e){return te({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}const ry={optimizeElement(e){e&&(e.style.transform="translateZ(0)",e.style.backfaceVisibility="hidden",e.style.willChange="transform, opacity")},throttle(e,t){let n=0;return(...r)=>{const i=Date.now();i-n>=t&&(n=i,e(...r))}},debounce(e,t){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}},iy=w.forwardRef(({children:e,className:t,height:n,style:r},i)=>{var M;const o=ue.useRef(null),s=w.useRef(),[a,l]=w.useState(!1),[c,d]=w.useState(!1),[u,p]=w.useState(40),[g,v]=w.useState({top:!0,bottom:!1}),[x,S]=w.useState(!1),{scrollYProgress:y}=W3({container:o,offset:["start start","end end"]}),m=w3(y,{damping:20,stiffness:300,mass:.5,restSpeed:.001}),h=Td(1),k=x3(m,[0,1],[0,(M=o.current)!=null&&M.clientHeight?o.current.clientHeight-u:0],{clamp:!0}),E=w.useCallback(()=>{if(!o.current)return;const{clientHeight:R,scrollHeight:B}=o.current,K=R/B,W=Math.max(Math.min(K*R,R/2),40);p(W)},[]),C=w.useCallback(()=>{if(!o.current)return;const{scrollTop:R,scrollHeight:B,clientHeight:K}=o.current,W=R<=0,q=R+K>=B-1;v({top:W,bottom:q}),l(!0),(W||q)&&(h.set(.98),setTimeout(()=>h.set(1),150)),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{l(!1)},150)},[h]),P=ry.throttle(C,16);w.useEffect(()=>{const R=o.current;if(!R)return;const B=()=>P(),K=()=>E(),W=new ResizeObserver(K);return W.observe(R),R.addEventListener("scroll",B,{passive:!0}),window.addEventListener("resize",K,{passive:!0}),E(),()=>{W.disconnect(),R&&R.removeEventListener("scroll",B),window.removeEventListener("resize",K),s.current&&clearTimeout(s.current)}},[P,E]);const T=w.useCallback(R=>{if(R.preventDefault(),R.stopPropagation(),!o.current)return;d(!0);const B=R.clientY,K=o.current.scrollHeight,W=o.current.clientHeight,q=W-u,Pe=o.current.scrollTop,Q=z=>{if(!o.current)return;const $=(z.clientY-B)/q*(K-W);o.current.scrollTop=Math.max(0,Math.min(Pe+$,K-W))},oe=()=>{d(!1),document.removeEventListener("pointermove",Q),document.removeEventListener("pointerup",oe),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="grabbing",document.body.style.userSelect="none",document.addEventListener("pointermove",Q),document.addEventListener("pointerup",oe)},[u]);return f.jsxs(xS,{ref:i,onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[f.jsx(wS,{ref:o,className:t,$height:n,style:{...r,transform:`scale(${h.get()})`},children:e}),f.jsx(bS,{animate:{opacity:x||a||c?1:.3,width:x||c?"10px":"6px"},transition:{duration:.2},children:f.jsx(kS,{as:O.div,style:{height:u,y:k,scale:h},animate:{opacity:a||c||x?1:.7,width:x||c?"100%":"80%",x:"-50%"},whileHover:{scale:1.05},whileTap:{scale:.95},onPointerDown:T,transition:{opacity:{duration:.2},scale:{type:"spring",stiffness:400,damping:25}},$isDragging:c,$isHovered:x,$isAtEdge:g})})]})}),xS=b.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,wS=b.div`
  height: ${e=>e.$height||"100%"};
  overflow-y: auto;
  padding-right: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform-origin: center;
  transition: transform 0.2s ease;

  &::-webkit-scrollbar {
    display: none;
  }
`,bS=b(O.div)`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
`,kS=b(O.div)`
  position: absolute;
  left: 50%;
  width: 80%;
  border-radius: inherit;
  background: ${e=>e.$isDragging?"linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)":e.$isHovered?"linear-gradient(135deg, #66bb6a 0%, #43a047 100%)":"linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(67, 160, 71, 0.9) 100%)"};
  cursor: grab;
  touch-action: none;
  pointer-events: auto;
  will-change: transform, width, opacity;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:active {
    cursor: grabbing;
    background: linear-gradient(135deg, #43a047 0%, #2e7d32 100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(47, 185, 23, 0.78);
    border-radius: 1px;
    transform: translate(-50%, -50%);
    opacity: ${e=>e.$isHovered?1:0};
    transition: opacity 0.2s ease;
  }
`;iy.displayName="CustomScrollbar";const oy="/assets/covers/default_cover_2.jpeg",Sn=e=>e?(e.startsWith("http"),e):oy,SS=b.div`
  /* Remove background-color to blend with parent */
  color: ${({theme:e})=>e.text.primary};
  padding: 20px;
`,CS=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ES=()=>(jd(),f.jsx(SS,{children:f.jsx(CS,{})})),mh={categories:"/assets/icons/categories.png",add:"/assets/icons/add_1.png",selected:"/assets/icons/selected.png",selected_later:"/assets/icons/selected_later.png"},PS=({isPlaying:e})=>f.jsxs(TS,{$isPlaying:e,children:[f.jsx(Qo,{$delay:0,$height:.7}),f.jsx(Qo,{$delay:.2,$height:1}),f.jsx(Qo,{$delay:.1,$height:.5}),f.jsx(Qo,{$delay:.3,$height:.8})]}),TS=b.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 16px;
  gap: 2px;
  opacity: ${e=>e.$isPlaying?1:.6};
  transition: opacity 0.3s ease;
`,Qo=b.div`
  width: 3px;
  height: ${e=>e.$height*16}px;
  background: #4caf50;
  border-radius: 1px;
  transform-origin: bottom;
  animation: ${e=>`equalizer 1.2s ${e.$delay}s ease-in-out infinite alternate`};

  @keyframes equalizer {
    0% {
      height: ${e=>e.$height*5}px;
    }
    100% {
      height: ${e=>e.$height*16}px;
    }
  }
`,gh=()=>{const{state:e,dispatch:t}=qt(),{dispatch:n}=Va(),[r,i]=w.useState(!1),[o,s]=w.useState({}),[a,l]=w.useState({field:"title",direction:"asc"}),[c,d]=w.useState({search:"",favorites:!1,minPlays:0}),[u,p]=w.useState(!0),[g,v]=w.useState(null),[x,S]=w.useState(!1),[y,m]=w.useState(window.innerWidth<=768);w.useEffect(()=>{const A=()=>{m(window.innerWidth<=768)};return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const[h,k]=w.useState("albums"),[E,C]=w.useState(null),[P,T]=w.useState(120),M=80,R=180,B=w.useRef(null),K=w.useRef(null),W=w.useRef(null),q=w.useRef(null);w.useEffect(()=>{if(!q.current)return;const A=new ResizeObserver(_=>{for(const V of _){const F=V.contentRect.width,Y=V.target;F<200&&r?Y.style.fontSize="1.1rem":F<300&&r?Y.style.fontSize="1.3rem":Y.style.fontSize=r?"1.5rem":"1.2rem"}});return A.observe(q.current),()=>{q.current&&A.unobserve(q.current)}},[r]),w.useEffect(()=>{(async()=>{try{p(!0);const _=localStorage.getItem("trackStats");if(_){const V=JSON.parse(_);s(V)}}catch(_){console.error("Failed to load track stats:",_),s({}),v("Failed to load track statistics")}finally{p(!1)}})()},[]);const Pe=A=>{var _,V;try{const F={...o,[A]:{plays:(((_=o[A])==null?void 0:_.plays)||0)+1,lastPlayed:new Date,favorite:((V=o[A])==null?void 0:V.favorite)||!1}};s(F),localStorage.setItem("trackStats",JSON.stringify(F))}catch(F){console.error("Failed to update track stats:",F)}},Q=A=>{var V,F,Y;const _={...o,[A]:{...o[A],favorite:!((V=o[A])!=null&&V.favorite),lastPlayed:((F=o[A])==null?void 0:F.lastPlayed)||null,plays:((Y=o[A])==null?void 0:Y.plays)||0}};s(_);try{localStorage.setItem("trackStats",JSON.stringify(_))}catch(Qt){console.error("Failed to save favorites:",Qt)}},oe=A=>[...A].sort((_,V)=>{const F=o[_.id],Y=o[V.id];switch(a.field){case"title":return a.direction==="asc"?_.title.localeCompare(V.title):V.title.localeCompare(_.title);case"artist":return a.direction==="asc"?_.artist.localeCompare(V.artist):V.artist.localeCompare(_.artist);case"album":return a.direction==="asc"?_.album.localeCompare(V.album):V.album.localeCompare(_.album);case"plays":return a.direction==="asc"?((F==null?void 0:F.plays)||0)-((Y==null?void 0:Y.plays)||0):((Y==null?void 0:Y.plays)||0)-((F==null?void 0:F.plays)||0);case"lastPlayed":const Qt=F!=null&&F.lastPlayed?new Date(F.lastPlayed).getTime():0,Po=Y!=null&&Y.lastPlayed?new Date(Y.lastPlayed).getTime():0;return a.direction==="asc"?Qt-Po:Po-Qt;case"favorites":const Rd=(F==null?void 0:F.favorite)||!1,Ld=(Y==null?void 0:Y.favorite)||!1;return a.direction==="asc"?Number(Rd)-Number(Ld):Number(Ld)-Number(Rd);default:return 0}}),z=A=>A.filter(_=>{const V=o[_.id],F=c.search.toLowerCase(),Y=F===""||_.title.toLowerCase().includes(F)||_.artist.toLowerCase().includes(F),Qt=!c.favorites||(V==null?void 0:V.favorite),Po=((V==null?void 0:V.plays)||0)>=c.minPlays;return Y&&Qt&&Po});w.useEffect(()=>{n({type:"SET_EXPLORER_WIDTH",payload:60})},[]);const D=w.useCallback(()=>{var _,V;const A=r;if(i(!A),n({type:"TOGGLE_EXPLORER"}),e.queue&&e.queue.length>0,y){const F=Math.min(window.innerWidth,document.body.clientWidth-20);n({type:"SET_EXPLORER_WIDTH",payload:A?70:F})}else{const F=((V=(_=B.current)==null?void 0:_.parentElement)==null?void 0:V.clientWidth)||0,Y=Math.min(window.innerWidth*.8,F>0?F:800);n({type:"SET_EXPLORER_WIDTH",payload:A?110:Y})}A&&(k("albums"),C(null))},[r,n,y,e.queue,B]);w.useEffect(()=>{if(r&&B.current){const A=B.current.getBoundingClientRect();(A.right<0||A.left>window.innerWidth)&&(B.current.style.transform="translateX(0)",B.current.style.opacity="0.99",requestAnimationFrame(()=>{B.current&&(B.current.style.opacity="1")}),n({type:"SET_EXPLORER_WIDTH",payload:Math.min(window.innerWidth*.8,800)}))}},[r,n]),w.useEffect(()=>{const A=_=>{var V;_.ctrlKey&&_.key==="f"&&r&&(_.preventDefault(),(V=K.current)==null||V.focus())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[r]),w.useEffect(()=>{const A=sessionStorage.getItem("explorerScrollPosition");return A&&W.current&&(W.current.scrollTop=parseInt(A)),()=>{W.current&&sessionStorage.setItem("explorerScrollPosition",W.current.scrollTop.toString())}},[]),w.useEffect(()=>{r||S(!1)},[r]);const j=[{value:"title",label:"Title"},{value:"artist",label:"Artist"},{value:"album",label:"Album"},{value:"plays",label:"Plays"},{value:"lastPlayed",label:"Last Played"},{value:"favorites",label:"Favorites"}],$=w.useRef([]);w.useEffect(()=>{const A=oe(z(e.queue));if(!A||A.length===0)return;JSON.stringify($.current)!==JSON.stringify(A)&&($.current=[...A],t({type:"SET_ACTIVE_CONTEXT",payload:{id:"explorer",type:"explorer",tracks:A,name:"Music Explorer",viewConfig:{sortBy:a.field,isAscending:a.direction==="asc",filterBy:c.search}}}))},[e.queue,a,c]);const I=w.useMemo(()=>{const A=new Map;return e.queue.forEach(_=>{var F;const V=`${_.album}-${_.artist}`;A.has(V)?(F=A.get(V))==null||F.tracks.push(_):A.set(V,{id:V,title:_.album,artist:_.artist,coverArt:_.coverArt,tracks:[_]})}),Array.from(A.values())},[e.queue]),H=w.useMemo(()=>[...I].sort((A,_)=>{switch(a.field){case"title":return a.direction==="asc"?A.title.localeCompare(_.title):_.title.localeCompare(A.title);case"artist":return a.direction==="asc"?A.artist.localeCompare(_.artist):_.artist.localeCompare(A.artist);default:return 0}}),[I,a]),J=w.useMemo(()=>H.filter(A=>{const _=c.search.toLowerCase();return _===""||A.title.toLowerCase().includes(_)||A.artist.toLowerCase().includes(_)}),[H,c.search]),se=A=>{r?(C(A),k("tracks")):(i(!0),n({type:"TOGGLE_EXPLORER"}),setTimeout(()=>{C(A),k("tracks")},300))},ae=()=>{k("albums"),C(null)},Te=()=>u?f.jsxs(QS,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[f.jsx(JS,{}),f.jsx("span",{children:"Loading music library..."})]}):h==="albums"?f.jsx(n4,{$isExpanded:r,$albumSize:P,children:J.length===0?f.jsx(E4,{children:"No albums match your search criteria"}):J.map(A=>f.jsxs(i4,{onClick:()=>se(A),$isExpanded:r,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:30,mass:.8},children:[f.jsx(r4,{$isExpanded:r,$size:P,whileHover:{scale:1.05},whileTap:{scale:.95},children:f.jsx("img",{src:Sn(A.coverArt),alt:`${A.title} cover`,loading:"lazy",draggable:!1})}),r&&f.jsxs(l4,{children:[f.jsx(o4,{children:A.title}),f.jsx(s4,{children:A.artist}),f.jsxs(a4,{children:[A.tracks.length," tracks"]})]})]},A.id))}):h==="tracks"&&E?f.jsxs(f.Fragment,{children:[f.jsx(c4,{onClick:ae,whileHover:{scale:1.05},whileTap:{scale:.95},children:"← Back to Albums"}),f.jsxs(u4,{children:[f.jsx(d4,{children:f.jsx("img",{src:Sn(E.coverArt),alt:`${E.title} cover`,draggable:!1})}),f.jsxs(f4,{children:[f.jsx(p4,{children:E.title}),f.jsx(h4,{children:E.artist}),f.jsxs(m4,{children:[E.tracks.length," tracks"]})]})]}),f.jsx(WS,{$isExpanded:r,children:oe(E.tracks).map(A=>{var _;return f.jsx(jS,{track:A,stats:o[A.id],isActive:((_=e.currentTrack)==null?void 0:_.id)===A.id,onClick:()=>{t({type:"SET_TRACK",payload:A}),t({type:"PLAY"}),Pe(A.id)},onExpand:()=>{i(!0),n({type:"TOGGLE_EXPLORER"})},onToggleFavorite:Q,onTogglePlay:()=>{t(e.isPlaying?{type:"PAUSE"}:{type:"PLAY"})}},A.id)})})]}):null;return w.useEffect(()=>{if(x){const A=document.querySelector("[data-sort-button]");A&&A.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.15)",offset:.5},{transform:"scale(1)",offset:1}],{duration:400,easing:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"})}},[x]),w.useEffect(()=>{if(!B.current)return;const A=new ResizeObserver(()=>{var V,F;r&&n({type:"SET_EXPLORER_WIDTH",payload:((F=(V=B.current)==null?void 0:V.parentElement)==null?void 0:F.clientWidth)||window.innerWidth})}),_=B.current.parentElement;return _&&A.observe(_),()=>{A.disconnect()}},[r,n]),f.jsxs(f.Fragment,{children:[f.jsx(P4,{}),f.jsxs($S,{ref:B,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},$isExpanded:r,className:"explorer-container",children:[f.jsx(xh,{}),f.jsxs(VS,{$isExpanded:r,className:"header-section",children:[f.jsx(BS,{ref:q,$isExpanded:r,animate:{scale:r?1:.9},transition:{duration:.3},children:r?h==="albums"?"All Time Best":(E==null?void 0:E.title)||"Tracks":"DP"}),r&&h==="albums"&&f.jsxs(w4,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[f.jsx(wh,{onClick:()=>T(Math.max(M,P-10)),disabled:P<=M,whileHover:{scale:1.1},whileTap:{scale:.95},"data-tooltip":`Small albums (${M}px)`,children:f.jsx(T4,{})}),f.jsx(S4,{children:f.jsxs(y4,{onClick:A=>{const _=A.currentTarget.getBoundingClientRect(),F=(A.clientX-_.left)/_.width,Y=M+F*(R-M);T(Math.round(Y))},children:[f.jsx(v4,{$progress:(P-M)/(R-M)}),f.jsx(sy,{$progress:(P-M)/(R-M),drag:"x",dragConstraints:{left:0,right:0},dragElastic:0,dragMomentum:!1,onDrag:(A,_)=>{const V=A.target.parentElement;if(!V)return;const F=V.getBoundingClientRect(),Y=Math.max(0,Math.min(1,(_.point.x-F.left)/F.width)),Qt=M+Y*(R-M);T(Math.round(Qt))},children:f.jsxs($4,{children:[P,"px"]})})]})}),f.jsx(wh,{onClick:()=>T(Math.min(R,P+10)),disabled:P>=R,whileHover:{scale:1.1},whileTap:{scale:.95},"data-tooltip":`Large albums (${R}px)`,children:f.jsx(j4,{})})]}),f.jsx(x4,{$isExpanded:r,children:f.jsx(US,{$isExpanded:r,onClick:D,whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":r?"Collapse explorer":"Expand explorer",children:r?"−":"+"})})]}),g&&f.jsxs(GS,{children:[g,f.jsx(KS,{onClick:()=>window.location.reload(),children:"Retry"})]}),!g&&r&&f.jsx(_t,{children:f.jsxs(IS,{className:"controls-section",children:[f.jsx(FS,{ref:K,value:c.search,onChange:A=>d(_=>({..._,search:A.target.value})),placeholder:h==="albums"?"Search albums...":"Search tracks..."}),f.jsxs(OS,{children:[f.jsx(ra,{onClick:()=>S(!x),$active:x,$tooltip:"Sort options",whileHover:{scale:1.05},whileTap:{scale:.95},"data-sort-button":!0,children:f.jsx(k4,{$active:x,children:e.isPlaying?f.jsx(PS,{isPlaying:!0}):f.jsx(C4,{src:"public/assets/icons/equalizer_green.png",alt:"Sort options",className:"equalizer-icon"})})}),h==="tracks"&&f.jsx(ra,{onClick:ae,$active:!1,whileHover:{scale:1.05},whileTap:{scale:.95},children:f.jsx("span",{children:"←"})})]})]})}),f.jsx(_t,{children:x&&f.jsx(YS,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"sorting-section",children:f.jsx(XS,{children:j.map(A=>f.jsxs(qS,{$isActive:a.field===A.value,onClick:()=>{a.field===A.value?l(_=>({..._,direction:_.direction==="asc"?"desc":"asc"})):l({field:A.value,direction:"asc"})},whileHover:{scale:1.02},whileTap:{scale:.98},children:[f.jsx("span",{children:A.label}),a.field===A.value&&f.jsx(O.div,{className:"direction-indicator",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},children:f.jsx(O.span,{initial:{opacity:0},animate:{opacity:1,rotate:a.direction==="asc"?0:180},transition:{duration:.3},children:"↑"})})]},A.value))})})}),f.jsx(HS,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"content-container",children:f.jsxs(iy,{ref:W,children:[Te(),f.jsx(ES,{})]})}),f.jsx(xh,{})]})]})},jS=({track:e,stats:t,isActive:n,onClick:r,onExpand:i,onToggleFavorite:o,onTogglePlay:s})=>{const[a,l]=w.useState(!1),[c,d]=w.useState(!1),[u,p]=w.useState(!1),{state:g}=Va(),{state:v}=qt(),x=g.explorerVisible,S=w.useRef(null),y=h=>{h.stopPropagation(),t!=null&&t.favorite?S.current&&S.current.animate([{transform:"scale(1)",opacity:1,offset:0},{transform:"scale(0.8)",opacity:.5,offset:.5},{transform:"scale(1)",opacity:1,offset:1}],{duration:300,easing:"ease-out"}):(d(!0),p(!0),navigator.vibrate&&navigator.vibrate([15,10,30]),S.current&&S.current.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.5)",offset:.3},{transform:"scale(0.8)",offset:.6},{transform:"scale(1.2)",offset:.8},{transform:"scale(1)",offset:1}],{duration:600,easing:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"}),setTimeout(()=>{d(!1),p(!1)},1e3)),o(e.id)},m=w.useMemo(()=>Array.from({length:16}).map((h,k)=>({id:k,angle:k*22.5+Math.random()*10,delay:k*.02,size:3+Math.random()*5,distance:30+Math.random()*30})),[]);return f.jsxs(AS,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:30,mass:.8},onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),$isActive:n,$isExpanded:x,onClick:()=>{r(),x||i()},layout:!0,children:[f.jsxs(RS,{$isExpanded:x,$isActive:n,$isPlaying:n&&v.isPlaying,whileHover:!n||!v.isPlaying?{scale:1.05,transition:{duration:.3,ease:"easeOut"}}:{},children:[f.jsx(LS,{src:Sn(e.coverArt),alt:`${e.title} cover`,$isPlaying:n&&v.isPlaying,transition:{rotate:{duration:20,ease:"linear"}},loading:"lazy",draggable:!1}),n&&f.jsx(zS,{role:"button",tabIndex:0,onClick:h=>{h.stopPropagation(),s()},onKeyPress:h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),s())},$isPlaying:v.isPlaying,initial:{opacity:0},animate:{opacity:a?1:0,scale:v.isPlaying?1.1:1},transition:{duration:.2},whileHover:{scale:1.15},whileTap:{scale:.95},children:v.isPlaying?f.jsx(Ba,{size:20}):f.jsx(Ua,{size:20})})]}),f.jsx(_t,{children:x&&f.jsxs(MS,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3,delay:.1},children:[f.jsx(_S,{$isActive:n,children:e.title}),f.jsx(DS,{children:e.artist}),f.jsxs(NS,{initial:{opacity:0},animate:{opacity:a?1:0},transition:{duration:.2},children:[f.jsxs(yh,{children:[f.jsx(vh,{children:"🎵"}),(t==null?void 0:t.plays)||0]}),(t==null?void 0:t.lastPlayed)&&f.jsxs(yh,{children:[f.jsx(vh,{children:"🕒"}),new Date(t.lastPlayed).toLocaleDateString()]})]})]})}),f.jsx(ZS,{ref:S,initial:{scale:1},animate:{scale:u?[1,1.2,1]:1,transition:{repeat:u?2:0,duration:.5}},whileHover:{scale:t!=null&&t.favorite?[1,1.2,1.1]:1.15,transition:{duration:.3,type:"spring",stiffness:300}},whileTap:{scale:.9},onClick:y,"aria-label":t!=null&&t.favorite?"Remove from favorites":"Add to favorites",$isFavorite:(t==null?void 0:t.favorite)||!1,onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),children:f.jsx(_t,{mode:"wait",children:t!=null&&t.favorite?f.jsx(O.img,{src:"public/assets/icons/selected_later.png",alt:"Favorite",width:"20",height:"20",initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",damping:10,stiffness:200},style:{objectFit:"contain"}},"favorite"):f.jsx(O.img,{src:a?mh.selected:mh.add,alt:"Add to favorites",width:"20",height:"20",initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",damping:10,stiffness:200},style:{objectFit:"contain"}},"not-favorite")})}),f.jsx(_t,{children:c&&f.jsxs(e4,{children:[m.map(h=>f.jsx(t4,{initial:{scale:0,opacity:1,x:0,y:0},animate:{scale:[0,1,0],opacity:[1,.8,0],x:[0,Math.cos(h.angle*(Math.PI/180))*h.distance],y:[0,Math.sin(h.angle*(Math.PI/180))*h.distance]},transition:{duration:.8,delay:h.delay,ease:[.2,.8,.2,1]},style:{width:`${h.size}px`,height:`${h.size}px`,background:h.id%3===0?"radial-gradient(circle, rgba(76, 175, 80, 0.8), rgba(76, 175, 80, 0) 70%)":h.id%3===1?"radial-gradient(circle, rgba(129, 199, 132, 0.8), rgba(129, 199, 132, 0) 70%)":"radial-gradient(circle, rgba(200, 230, 201, 0.8), rgba(200, 230, 201, 0) 70%)",boxShadow:h.id%3===0?"0 0 8px rgba(76, 175, 80, 0.8)":h.id%3===1?"0 0 8px rgba(129, 199, 132, 0.8)":"0 0 8px rgba(200, 230, 201, 0.8)"}},h.id)),f.jsx(O.div,{initial:{scale:0,opacity:0},animate:{scale:[0,3,0],opacity:[1,0]},transition:{duration:.6,ease:"easeOut"},style:{position:"absolute",width:"20px",height:"20px",borderRadius:"50%",background:"radial-gradient(circle, rgba(76, 175, 80, 0.8) 0%, rgba(129, 199, 132, 0.4) 50%, rgba(76, 175, 80, 0) 70%)",filter:"blur(2px)",transform:"translate(-50%, -50%)"}})]})})]})},$S=b(O.div).attrs(e=>({style:{width:e.$isExpanded?"100%":window.innerWidth<=768?"100px":"110px",flex:e.$isExpanded?1:"none"}}))`
  position: relative;
  height: 100%;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1),
    height 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease,
    transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  border-radius: 12px;
  background: rgba(18, 18, 18, 0.4);
  box-shadow: none;
  margin-left: 10px;
  margin-right: 10px;
  isolation: isolate;

  @media (max-width: 768px) {
    position: ${e=>e.$isExpanded?"relative":"fixed"};
    top: 0;
    left: 0;
    bottom: 0;
    margin-left: 0;
    margin-right: 0;
    height: ${e=>e.$isExpanded?"100%":"100vh"};
    max-height: 100vh;
    border-radius: 0; /* Remove border radius on mobile */
    z-index: ${e=>e.$isExpanded?10:5};
  }
`,AS=b(O.div).attrs(e=>({style:{padding:e.$isExpanded?"12px":"4px",gap:e.$isExpanded?"12px":"4px",height:(e.$isExpanded,"auto"),width:e.$isExpanded?"auto":"90px",flexDirection:e.$isExpanded?"row":"column",alignItems:e.$isExpanded?"stretch":"center",justifyContent:e.$isExpanded?"flex-start":"center"}}))`
  display: flex;
  background: rgba(255, 255, 255, 0.03); /* Very subtle light background */
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* Add subtle hover effect */
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateZ(2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,RS=b(O.div).attrs(e=>({style:{width:e.$isExpanded?"48px":"72px",height:e.$isExpanded?"48px":"72px",borderRadius:e.$isActive&&e.$isPlaying?"50%":"8px"}}))`
  position: relative;
  overflow: visible; // Changed to visible to show glow
  flex-shrink: 0;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 1000px;

  // Glowing edge effect
  ${e=>e.$isActive&&e.$isPlaying&&`
    &::after {
      content: '';
      position: absolute;
      inset: -2px; // Slightly larger than container
      background: conic-gradient(
        from 0deg,
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8)
      );
      border-radius: 50%;
      animation: glowSpin 3s linear infinite;
      z-index: -1;
      filter: blur(4px);
    }

    @keyframes glowSpin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}

  // CD center hole
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: ${e=>e.$isActive&&e.$isPlaying?1:0};
    transition: opacity 0.3s ease;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6); // Added glow to center hole
  }
`,LS=b(O.img).attrs(e=>({style:{borderRadius:e.$isPlaying?"50%":"8px",boxShadow:e.$isPlaying?"0 0 15px rgba(76, 175, 80, 0.3)":"none",animation:e.$isPlaying?"spin 20s linear infinite":"none",filter:e.$isPlaying?"brightness(1.1)":"none"},draggable:!1}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  pointer-events: none;
`,zS=b(O.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0;
  border-radius: 50%; // Match parent's circular shape
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
  }

  svg {
    opacity: ${e=>e.$isPlaying?.9:1};
    transition: opacity 0.3s ease;
  }
`,MS=b(O.div)`
  flex: 1;
  min-width: 0;
  user-select: none; // Add this to make text unselectable
`,_S=b.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.$isActive?"#4caf50":"white"};
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  /* Add subtle text shadow for active items instead of background color */
  text-shadow: ${e=>e.$isActive?"0 0 8px rgba(76, 175, 80, 0.3)":"none"};
`,DS=b.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,NS=b(O.div)`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  user-select: none; // Add this to make stats unselectable
`,yh=b.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`,vh=b.span`
  font-size: 12px;
`,IS=b(O.div)`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.3));
  classname: controls-section;
`,FS=b.input.attrs({"aria-label":"Search tracks",type:"text",placeholder:"Search tracks..."})`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`,OS=b.div`
  display: flex;
  gap: 4px;
`,VS=b.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$isExpanded?"space-between":"center"};
  padding: ${e=>e.$isExpanded?"12px":"8px"};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--theme-background-gradient, rgba(18, 18, 18, 0.4));
  position: relative;
  z-index: 1;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    flex-direction: ${e=>e.$isExpanded?"row":"column"};
    height: ${e=>(e.$isExpanded,"auto")};
    padding: ${e=>e.$isExpanded?"12px":"10px"};
    justify-content: space-between;
  }
`,BS=b(O.div).attrs(e=>({style:{fontSize:e.$isExpanded?window.innerWidth<=768?"0.85rem":"1.5rem":window.innerWidth<=768?"0":"1.2rem",padding:e.$isExpanded?window.innerWidth<=768?"6px":"16px":window.innerWidth<=768?"0":"8px"}}))`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  transition: all 0.3s ease;
  align-items: center;
  gap: 4px; // Reduced gap for mobile
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    letter-spacing: -0.3px;
    line-height: 1.1;
  }
`,US=b(O.button)`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.3s ease;

  /* Add styling based on expanded state */
  transform: rotate(${e=>e.$isExpanded?"0deg":"180deg"});
  opacity: ${e=>e.$isExpanded?1:.8};

  &:hover {
    opacity: 1;
    color: ${e=>e.$isExpanded?"#4caf50":"white"};
  }
`,HS=b(O.div)`
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  background: rgba(18, 18, 18, 0.2); /* Very subtle background */
  backdrop-filter: blur(2px);
  classname: content-container;

  /* Add this to ensure proper height calculation */
  & > div {
    height: 100%;
    width: 100%;
  }
`,WS=b.div`
  padding: ${e=>e.$isExpanded?"8px":"4px"};
  display: grid;
  grid-template-columns: ${e=>e.$isExpanded?"1fr":"repeat(auto-fill, 80px)"};
  gap: ${e=>e.$isExpanded?"8px":"4px"};
  min-height: 0;
  flex: 1;
  justify-content: center;
`,GS=b.div`
  padding: 16px;
  color: #ff5252;
  text-align: center;
  background: rgba(255, 82, 82, 0.1);
  margin: 16px;
  border-radius: 8px;
`,KS=b.button`
  background: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background: #ff6b6b;
  }
`,ra=b(O.button)`
  position: relative;
  background: ${e=>e.$active?"rgba(76, 175, 80, 0.2)":"rgba(255, 255, 255, 0.1)"};
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$active?"#4caf50":"white"};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Add indicator line at bottom when active */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${e=>e.$active?"50%":"0"};
    height: 2px;
    background: #4caf50;
    transform: translateX(-50%);
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover {
    background: ${e=>e.$active?"rgba(76, 175, 80, 0.3)":"rgba(255, 255, 255, 0.2)"};

    &::after {
      width: ${e=>e.$active?"80%":"40%"};
    }
  }
`,YS=b(O.div)`
  overflow: hidden;
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.3));
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-color: var(--theme-border-color, rgba(255, 255, 255, 0.1));
  padding: 12px 16px;
  classname: sorting-section;
`,XS=b(O.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 8px;
  }
`,qS=b(O.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: ${e=>e.$isActive?"linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.1))":"rgba(0, 0, 0, 0.25)"};
  border: 1px solid
    ${e=>e.$isActive?"rgba(76, 175, 80, 0.4)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$isActive?"0 2px 6px rgba(76, 175, 80, 0.15)":"none"};

  /* Ensure all text is consistent */
  span {
    color: white;
    position: relative;
    z-index: 2;
    font-weight: ${e=>e.$isActive?"600":"400"};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  /* Direction indicator with animation */
  .direction-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: ${e=>e.$isActive?"rgba(76, 175, 80, 0.2)":"rgba(255, 255, 255, 0.1)"};
    border-radius: 50%;
  }

  &:hover {
    background: ${e=>e.$isActive?"linear-gradient(135deg, rgba(76, 175, 80, 0.25), rgba(76, 175, 80, 0.15))":"rgba(0, 0, 0, 0.35)"};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
  }
`,QS=b(O.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`,JS=b(O.div)`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(76, 175, 80, 0.3);
  border-top-color: #4caf50;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,ZS=b(O.button)`
  background: ${e=>e.$isFavorite?"rgba(76, 175, 80, 0.1)":"transparent"}; // Changed red to green
  border: none;
  border-radius: 50%;
  padding: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: ${e=>e.$isFavorite?"0 0 10px rgba(76, 175, 80, 0.4)":"none"}; // Changed red to green
  }

  &:focus-visible {
    outline: 2px solid #4caf50;
    outline-offset: 2px;
  }
`,e4=b(O.div)`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 2;
`,t4=b(O.div)`
  position: absolute;
  background: #4caf50;
  border-radius: 50%;
  transform-origin: center;
`,n4=b.div.attrs(e=>({style:{gridTemplateColumns:e.$isExpanded?window.innerWidth<=768?`repeat(auto-fill, minmax(${Math.max(80,e.$albumSize*.8)}px, 1fr))`:`repeat(auto-fill, minmax(${e.$albumSize}px, 1fr))`:"1fr",gap:e.$isExpanded?window.innerWidth<=768?"8px":"12px":"8px",padding:e.$isExpanded?window.innerWidth<=768?"8px":"12px":"6px"}}))`
  display: grid;
  width: 100%;
`,r4=b(O.div)`
  width: ${e=>e.$isExpanded?`${e.$size||120}px`:"72px"};
  height: ${e=>e.$isExpanded?`${e.$size||120}px`:"72px"};
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`,i4=b(O.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: ${e=>e.$isExpanded?"6px":"4px"};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,o4=b.h3`
  margin: 0;
  font-size: 12px; // Smaller font
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`,s4=b.p`
  margin: 2px 0 0;
  font-size: 11px; // Smaller font
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`,a4=b.span`
  font-size: 10px; // Smaller font
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  text-align: center;
`,l4=b.div`
  width: 100%;
  padding: 6px 2px 2px;
  display: flex;
  flex-direction: column;
`,c4=b(O.button)`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  margin: 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`,u4=b.div`
  display: flex;
  padding: 12px;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,d4=b.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,f4=b.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,p4=b.h2`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
  color: white;
`,h4=b.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,m4=b.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`,g4=b(O.button)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 24px; // Smaller size on mobile
    height: 24px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #4caf50;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,y4=b.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  position: relative;
  overflow: visible;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);

  /* Add more tick marks for finer granularity */
  &::before,
  &::after,
  &::before ~ &::before,
  &::after ~ &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 1px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%);
    border-radius: 1px;
    z-index: 1;
  }

  &::before {
    left: 20%;
  }
  &::after {
    left: 40%;
  }
  &::before ~ &::before {
    left: 60%;
  }
  &::after ~ &::after {
    left: 80%;
  }
`,v4=b.div.attrs(e=>({style:{width:`${e.$progress*100}%`}}))`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(76, 175, 80, 0.8),
    rgba(76, 175, 80, 0.5)
  );
  border-radius: 6px;
`,sy=b(O.div).attrs(e=>({style:{left:`${e.$progress*100}%`}}))`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: white;
  border: 2px solid var(--album-color-primary, rgba(76, 175, 80, 0.8));
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 5;

  @media (max-width: 768px) {
    width: 14px; // Slightly smaller on mobile
    height: 14px;
    border-width: 1.5px;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }

  &:active {
    transform: translate(-50%, -50%) scale(1.1);
  }
`,x4=b.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: ${e=>e.$isExpanded?"row":"column"};
    align-items: ${e=>(e.$isExpanded,"center")};
    justify-content: ${e=>e.$isExpanded?"flex-start":"flex-end"};
    height: ${e=>(e.$isExpanded,"auto")};
    width: ${e=>e.$isExpanded?"auto":"100%"};
  }
`,w4=b(O.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.35));
  backdrop-filter: blur(10px);
  padding: 6px 8px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 4px 6px;
    gap: 4px;
    transform: scale(0.9);
    margin-right: 8px;
  }
`,xh=()=>{var s;const{state:e}=qt(),[t,n]=w.useState(["#121212","#1e1e1e"]),[r,i]=w.useState(!1),o=w.useRef(null);return w.useEffect(()=>{var l;if(!((l=e.currentTrack)!=null&&l.coverArt)){i(!1);return}i(!0),(c=>{const d=new Image;d.crossOrigin="Anonymous",d.onload=()=>{const u=document.createElement("canvas"),p=u.getContext("2d");if(!p)return;u.width=d.width,u.height=d.height,p.drawImage(d,0,0,d.width,d.height);const g=p.getImageData(0,0,u.width,u.height).data,v={};for(let S=0;S<g.length;S+=40){const y=g[S],m=g[S+1],h=g[S+2],k=`#${y.toString(16).padStart(2,"0")}${m.toString(16).padStart(2,"0")}${h.toString(16).padStart(2,"0")}`;v[k]=(v[k]||0)+1}const x=Object.entries(v).sort((S,y)=>y[1]-S[1]).map(S=>S[0]);x.length>=2&&n(x.slice(0,5))},d.onerror=()=>{console.error("Failed to load image for color extraction")},d.src=c})(e.currentTrack.coverArt)},[(s=e.currentTrack)==null?void 0:s.coverArt]),w.useLayoutEffect(()=>{if(!o.current||!r||t.length<2)return;const a=o.current,l=a.getContext("2d");if(!l)return;let c,d=0;const u=()=>{const{width:g,height:v}=a.getBoundingClientRect();a.width=g,a.height=v};u(),window.addEventListener("resize",u);const p=()=>{if(!l||!a)return;l.clearRect(0,0,a.width,a.height);const g=l.createLinearGradient(0,0,a.width,a.height);g.addColorStop(0,`${t[0]}99`),g.addColorStop(.5,`${t[1]}88`),g.addColorStop(1,`${t[0]}99`),l.fillStyle=g,l.fillRect(0,0,a.width,a.height);const v=3;t.slice(0,3).forEach((x,S)=>{l.beginPath();const y=12+S*8,m=.002+S*.001;l.moveTo(0,a.height/2);for(let h=0;h<a.width;h++){const k=h/a.width,E=Math.sin(k*v*Math.PI+d*m)*y,C=a.height*.5+E+S*20;l.lineTo(h,C)}l.lineTo(a.width,a.height),l.lineTo(0,a.height),l.closePath(),l.fillStyle=`${x}33`,l.fill()}),d+=1,c=requestAnimationFrame(p)};return p(),()=>{window.removeEventListener("resize",u),cancelAnimationFrame(c)}},[t,r]),w.useEffect(()=>{if(t.length<2||!r)return;const a=t[0],l=t[1];document.documentElement.style.setProperty("--album-color-primary",a),document.documentElement.style.setProperty("--album-color-secondary",l);const c=`linear-gradient(135deg, 
      ${a}15, 
      ${l}20)`,d=`linear-gradient(135deg, 
      ${a}25, 
      ${l}30)`;document.documentElement.style.setProperty("--theme-background-gradient",c),document.documentElement.style.setProperty("--theme-active-gradient",d),document.documentElement.style.setProperty("--theme-border-color",`${a}40`);const u=()=>{[".header-section",".controls-section",".sorting-section",".filter-section",".size-controls",".content-container",".explorer-container"].forEach(x=>{document.querySelectorAll(x).forEach(y=>{const m=y;m.style.background=c,m.style.borderColor=`${a}40`,m.style.position="relative",m.style.zIndex="1",m.setAttribute("data-theme-styled","true")})}),document.querySelectorAll("[data-active='true']").forEach(x=>{const S=x;S.style.background=d,S.style.borderColor=`${a}60`,S.querySelectorAll("span").forEach(m=>{m.style.color="white",m.style.textShadow="0 1px 2px rgba(0, 0, 0, 0.6)",m.style.fontWeight="600"})})};u();const p=new MutationObserver(()=>{u()});return p.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","data-active","style"]}),()=>{p.disconnect(),document.documentElement.style.removeProperty("--album-color-primary"),document.documentElement.style.removeProperty("--album-color-secondary"),document.documentElement.style.removeProperty("--theme-background-gradient"),document.documentElement.style.removeProperty("--theme-active-gradient"),document.documentElement.style.removeProperty("--theme-border-color"),document.querySelectorAll('[data-theme-styled="true"]').forEach(v=>{const x=v;x.style.removeProperty("background"),x.style.removeProperty("border-color"),x.style.removeProperty("position"),x.style.removeProperty("z-index"),x.removeAttribute("data-theme-styled"),x.querySelectorAll("span").forEach(y=>{y.style.removeProperty("color"),y.style.removeProperty("text-shadow"),y.style.removeProperty("font-weight")})})}},[t,r]),f.jsx(b4,{ref:o,opacity:r?.85:0,initial:{opacity:0},animate:{opacity:r?.85:0},transition:{duration:1.2}})},b4=b(O.canvas).attrs(e=>({style:{opacity:e.opacity!==void 0?e.opacity:.85}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  border-radius: inherit;
`,k4=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${e=>e.$active?"rgba(76, 175, 80, 0.4)":"rgba(255, 255, 255, 0.2)"},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img {
    transition: all 0.3s ease;
    filter: ${e=>e.$active?"brightness(1.2) drop-shadow(0 0 3px rgba(76, 175, 80, 0.7))":"brightness(1)"};
  }

  ${ra}:hover &::after {
    opacity: 1;
  }

  ${ra}:hover & img {
    filter: ${e=>e.$active?"brightness(1.3) drop-shadow(0 0 4px rgba(76, 175, 80, 0.9))":"brightness(1.2) drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))"};
    transform: scale(1.1);
  }
`,S4=b.div`
  position: relative;
  width: 120px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 6px;

  @media (max-width: 768px) {
    width: 80px; // Smaller width on mobile
    height: 20px;
    padding: 0 4px;
  }

  /* Create a slight background for better visibility */
  &::before {
    content: "";
    position: absolute;
    inset: 4px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    z-index: 0;
  }
`,C4=b.img`
  object-fit: contain;
  width: 16px;
  height: 16px;
`,E4=b.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  padding: 16px;
`,P4=od`
  .explorer-container * {
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  
  .explorer-container img {
    -webkit-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }
`,T4=()=>f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M6 8.5L6 15.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M18 8.5L18 15.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M8.5 6L15.5 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M8.5 18L15.5 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),j4=()=>f.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),f.jsx("path",{d:"M1 4.5L1 19.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M23 4.5L23 19.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M4.5 1L19.5 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),f.jsx("path",{d:"M4.5 23L19.5 23",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),wh=b(g4)`
  position: relative;

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
    white-space: nowrap;
    transition: all 0.2s ease;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
  }

  &:hover::before {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
`,$4=b.div`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${sy}:hover & {
    opacity: 1;
  }
`;function A4(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}}]})(e)}function R4(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M3 3l18 18"}}]})(e)}function L4(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M11 11l1 -1v4"}}]})(e)}function z4(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}}]})(e)}const M4=b.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`,_4=b.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,D4=()=>{const e=w.useRef(null),{state:t}=qt(),n=w.useRef(0);return w.useEffect(()=>{if(!e.current)return;const r=e.current,i=r.getContext("2d");if(!i)return;const o=window.devicePixelRatio||1,s=r.getBoundingClientRect();r.width=s.width*o,r.height=s.height*o,i.scale(o,o);const a=()=>{var g;if(!i)return;const l=((g=t.currentTrack)==null?void 0:g.color)||"#388e3c";n.current=requestAnimationFrame(a);const c=s.width,d=s.height;i.clearRect(0,0,c,d);const u=new Array(128).fill(0).map((v,x)=>{const S=t.progress*.01+x*.01;return Math.sin(S*.5)*.3+Math.sin(S*1.5)*.2+Math.sin(S*3.5)*.1}),p=i.createLinearGradient(0,0,c,d);p.addColorStop(0,`${l}40`),p.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=p,i.beginPath(),i.moveTo(0,d);for(let v=0;v<u.length;v++){const x=v/u.length*c,S=d-d*.5*(1+u[v]);i.lineTo(x,S)}i.lineTo(c,d),i.closePath(),i.fill(),i.strokeStyle=l,i.lineWidth=2,i.beginPath();for(let v=0;v<u.length;v++){const x=v/u.length*c,S=d-d*.5*(1+u[v]);v===0?i.moveTo(x,S):i.lineTo(x,S)}i.stroke()};return a(),()=>{n.current&&cancelAnimationFrame(n.current)}},[t.currentTrack,t.progress]),f.jsx(M4,{children:f.jsx(_4,{ref:e})})},N4=xo`
  /* existing animation */
`,I4=xo`
  /* existing animation */
`,F4=b.div.attrs({className:"dp-equalizer-container"})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
`,O4=b.canvas.attrs({className:"dp-equalizer-canvas"})`
  /* existing styles */
`,V4=b.div.attrs(e=>({className:"dp-equalizer-glow",style:{opacity:e.$isPlaying?.8:.2,animationDuration:`${3-e.$intensity*1.5}s`,background:`linear-gradient(90deg, transparent, ${e.$color}20, transparent)`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  animation-name: ${N4};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background-size: 200% 200%;
  will-change: opacity, background;
`,B4=b.div.attrs(e=>({className:"dp-equalizer-flow",style:{animationDuration:`${8-e.$intensity*4}s`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  animation-name: ${I4};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mix-blend-mode: overlay;
  will-change: transform;
`,U4=b.div.attrs(e=>({style:{height:`${e.$height}%`,backgroundColor:e.$color}}))`
  width: 4px;
  border-radius: 2px;
  transition: height 0.1s ease;
  will-change: height;
`,H4=({isPlaying:e=!1,dominantColor:t="#4CAF50",audioRef:n,onIntensityChange:r})=>{var g;const{state:i}=qt(),[o,s]=w.useState(Array(12).fill(10)),a=w.useRef(0),[l,c]=w.useState(0),d=w.useRef(0),u=w.useMemo(()=>{var v;return t||((v=i.currentTrack)==null?void 0:v.color)||"#388e3c"},[t,(g=i.currentTrack)==null?void 0:g.color]);w.useEffect(()=>{const v=o.reduce((x,S)=>x+S,0)/(o.length*100);c(v)},[o]),w.useEffect(()=>{r&&r(l)},[l,r]),w.useEffect(()=>{if(!i.isPlaying||!i.equalizerActive)return s(Array(12).fill(10)),()=>cancelAnimationFrame(a.current);const v=x=>{if(x-d.current<33){a.current=requestAnimationFrame(v);return}d.current=x,s(S=>{const y=S.map(h=>{const k=20+Math.random()*60;return h+(k-h)*.3});return y.some((h,k)=>Math.abs(h-S[k])>2)?y:S}),a.current=requestAnimationFrame(v)};return a.current=requestAnimationFrame(v),()=>{cancelAnimationFrame(a.current)}},[i.isPlaying,i.equalizerActive]);const p=w.useMemo(()=>o.map((v,x)=>f.jsx(U4,{$height:i.isPlaying?v:5,$color:u},x)),[o,i.isPlaying,u]);return f.jsxs(F4,{$isActive:e,$color:t,children:[f.jsx(O4,{ref:n,width:"280",height:"70"}),f.jsx(V4,{$intensity:l,$color:t,$isPlaying:e,children:f.jsx(B4,{$intensity:l,$color:t})}),p]})},W4=ue.memo(H4),G4=b(O.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  z-index: 5;
  margin-left: 2px; /* Add margin to prevent slider from going too far left */
  will-change: transform, opacity;
`,K4=b(O.button).attrs(e=>({id:"music-player-volume-toggle","aria-label":e.volume===0?"Unmute":"Mute"}))`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  left: 15px;
  transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  will-change: transform, opacity;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/assets/covers/galaxy_2.gif");
    background-size: cover;
    background-position: center;
    opacity: 0.9; /* Increased opacity as requested */
    z-index: -1;
    border-radius: 50%;
    animation: gentleBackgroundBreathing 6s infinite ease-in-out;
  }

  &:hover {
    color: rgb(255, 255, 255);
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.7);

    &::before {
      opacity: 0; /* Make background image completely transparent on hover */
      transition: opacity 0.5s ease;
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(138, 43, 226, 0.7);
    box-shadow: 0 0 0 4px rgba(138, 43, 226, 0.3);
  }

  svg {
    filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.9));
    z-index: 1;
    transition: transform 0.3s ease, filter 0.3s ease;
    animation: iconPulse 3s infinite ease-in-out;

    /* Enhanced SVG styles */
    fill: rgba(255, 255, 255, 0.95);
    stroke: rgba(138, 43, 226, 0.3);
    stroke-width: 0.5px;
    transform-origin: center;
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px rgba(147, 112, 219, 1));
    animation: iconPulseHover 3s infinite ease-in-out;
    fill: white;
    stroke: rgba(138, 43, 226, 0.5);
    stroke-width: 1px;
  }

  /* Replace the green glow with a cosmic blue/purple theme */
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(138, 43, 226, 0.4) 0%,
      rgba(147, 112, 219, 0.2) 40%,
      transparent 80%
    );
    opacity: 0;
    transition: all 0.4s ease;
    transform: scale(0.85);
    z-index: 0;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.5),
      0 0 20px rgba(138, 43, 226, 0.6);
    animation: pulseGlow 3s infinite ease-in-out;
  }

  /* Create breathing animations */
  @keyframes gentleBackgroundBreathing {
    0% {
      opacity: 0.8;
      filter: brightness(0.9) saturate(1.1);
    }
    25% {
      opacity: 0.85;
      filter: brightness(1) saturate(1.15);
    }
    50% {
      opacity: 0.95;
      filter: brightness(1.1) saturate(1.2);
    }
    75% {
      opacity: 0.85;
      filter: brightness(1) saturate(1.15);
    }
    100% {
      opacity: 0.8;
      filter: brightness(0.9) saturate(1.1);
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.7;
      box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.2),
        0 0 15px rgba(88, 101, 242, 0.3);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.3) 0%,
        rgba(147, 112, 219, 0.15) 40%,
        transparent 80%
      );
      filter: brightness(0.92) hue-rotate(-5deg);
    }
    25% {
      opacity: 0.8;
      box-shadow: inset 0 0 17px rgba(147, 112, 219, 0.3),
        0 0 18px rgba(88, 101, 242, 0.4);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.35) 0%,
        rgba(147, 112, 219, 0.18) 40%,
        transparent 80%
      );
      filter: brightness(1) hue-rotate(-2deg);
    }
    50% {
      opacity: 0.9;
      box-shadow: inset 0 0 20px rgba(147, 112, 219, 0.4),
        0 0 22px rgba(88, 101, 242, 0.5);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.4) 0%,
        rgba(147, 112, 219, 0.2) 40%,
        transparent 80%
      );
      filter: brightness(1.08) hue-rotate(3deg);
    }
    75% {
      opacity: 0.8;
      box-shadow: inset 0 0 17px rgba(147, 112, 219, 0.3),
        0 0 18px rgba(88, 101, 242, 0.4);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.35) 0%,
        rgba(147, 112, 219, 0.18) 40%,
        transparent 80%
      );
      filter: brightness(1) hue-rotate(-2deg);
    }
    100% {
      opacity: 0.7;
      box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.2),
        0 0 15px rgba(88, 101, 242, 0.3);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.3) 0%,
        rgba(147, 112, 219, 0.15) 40%,
        transparent 80%
      );
      filter: brightness(0.92) hue-rotate(-5deg);
    }
  }

  @keyframes iconPulse {
    0% {
      filter: drop-shadow(0 0 3px rgba(147, 112, 219, 0.6));
      transform: scale(1);
    }
    33% {
      filter: drop-shadow(0 0 4px rgba(138, 43, 226, 0.7));
      transform: scale(1.05);
    }
    66% {
      filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.8));
      transform: scale(1);
    }
    100% {
      filter: drop-shadow(0 0 3px rgba(147, 112, 219, 0.6));
      transform: scale(1);
    }
  }

  @keyframes iconPulseHover {
    0% {
      filter: drop-shadow(0 0 5px rgba(147, 112, 219, 0.8));
      transform: scale(1.1);
    }
    33% {
      filter: drop-shadow(0 0 6px rgba(138, 43, 226, 0.85));
      transform: scale(1.15);
    }
    66% {
      filter: drop-shadow(0 0 7px rgba(138, 43, 226, 0.9));
      transform: scale(1.1);
    }
    100% {
      filter: drop-shadow(0 0 5px rgba(147, 112, 219, 0.8));
      transform: scale(1.1);
    }
  }
`,Y4=b(O.div)`
  position: absolute;
  width: 120px;
  height: 36px;
  background: rgba(10, 10, 10, 0.95);
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0 12px 0 30px;
  left: 30px;
  transform: translateX(-15%);
  z-index: 10;
  position: absolute;
  top: 0;
  will-change: transform, opacity, width;
  backdrop-filter: blur(10px);

  /* Enhanced cosmic border effect */
  border: 1px solid rgba(138, 43, 226, 0.4);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5),
    inset 0 0 2px rgba(138, 43, 226, 0.4), 0 0 10px rgba(138, 43, 226, 0.3),
    inset 0 0 8px rgba(138, 43, 226, 0.2), 0 0 20px rgba(147, 112, 219, 0.2);

  /* Animated gradient border */
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      rgba(138, 43, 226, 0.5),
      rgba(147, 112, 219, 0.5),
      rgba(88, 101, 242, 0.5),
      rgba(138, 43, 226, 0.5)
    );
    border-radius: 19px;
    z-index: -1;
    animation: borderGlow 3s linear infinite;
    filter: blur(8px);
    opacity: 0.5;
  }

  /* Star Trek-like scanning line effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(147, 112, 219, 0.2),
      rgba(138, 43, 226, 0.4),
      rgba(147, 112, 219, 0.2),
      transparent
    );
    border-radius: inherit;
    z-index: 1;
    animation: scanLine 2s linear infinite;
    pointer-events: none;
  }

  /* Volume icon container enhancement */
  .icon-container {
    position: absolute;
    left: 3px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(10, 10, 10, 0.5);
    border-radius: 50%;
    box-shadow: inset 0 0 5px rgba(138, 43, 226, 0.3),
      0 0 10px rgba(138, 43, 226, 0.2);
  }

  @keyframes borderGlow {
    0% {
      filter: blur(8px) hue-rotate(0deg);
    }
    50% {
      filter: blur(10px) hue-rotate(180deg);
    }
    100% {
      filter: blur(8px) hue-rotate(360deg);
    }
  }

  /* Hover state enhancement */
  &:hover {
    &::before {
      opacity: 0.7;
      filter: blur(6px);
    }
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6),
      inset 0 0 4px rgba(138, 43, 226, 0.6), 0 0 15px rgba(138, 43, 226, 0.4),
      inset 0 0 12px rgba(138, 43, 226, 0.3), 0 0 25px rgba(147, 112, 219, 0.3);
  }
`,X4=b.input.attrs({type:"range",min:"0",max:"100",step:"1",id:"music-player-volume-slider"})`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${e=>`linear-gradient(
    to right,
    rgba(138, 43, 226, 0.8) 0%,
    rgba(147, 112, 219, 0.8) ${e.value}%,
    rgba(255, 255, 255, 0.2) ${e.value}%,
    rgba(255, 255, 255, 0.2) 100%
  )`};
  outline: none;
  position: relative;
  z-index: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8a2be2; /* Changed to blueviolet */
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    background: #9370db; /* Changed to medium purple */
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.9);
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8a2be2; /* Changed to blueviolet */
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.1);
    background: #9370db; /* Changed to medium purple */
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.9);
  }

  &:focus-visible {
    outline: 2px solid rgba(138, 43, 226, 0.7);
  }
`,q4=b(O.div)`
  position: absolute;
  top: -25px;
  left: ${e=>e.$volume}%;
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.9);
  color: #8a2be2; /* Changed to blueviolet */
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  border: 1px solid rgba(138, 43, 226, 0.3);
  font-weight: 600;
  z-index: 2;
`,Q4=b(O.div)`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.9);
  color: #ff5252;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  border: 1px solid rgba(255, 82, 82, 0.3);
  font-weight: 600;
  z-index: 2;
`,J4=b(O.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  pointer-events: none;
  opacity: ${e=>e.$volume===0?0:.3};
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid rgba(138, 43, 226, 0.7);
    animation: waveEffect 3s infinite ease-out;
  }

  &::after {
    animation-delay: 1.5s;
  }

  @keyframes waveEffect {
    0% {
      width: 110%;
      height: 110%;
      opacity: 0.7;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
`,Z4=({volume:e,onVolumeChange:t,className:n})=>{const[r,i]=w.useState(!1),[o,s]=w.useState(!1),[a,l]=w.useState(e),[c,d]=w.useState(!1),u=w.useRef(null);w.useEffect(()=>{const S=y=>{u.current&&!u.current.contains(y.target)&&o&&s(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[o]);const p=()=>e===0?f.jsx(vS,{size:18,style:{opacity:.9,filter:"drop-shadow(0 0 2px rgba(255, 82, 82, 0.7))"}}):e<50?f.jsx(yS,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}):f.jsx(ny,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}),g=()=>{e===0?t(a>0?a:50):(l(e),t(0))},v=S=>{const y=parseInt(S.target.value,10);t(y)},x=w.useCallback(()=>{requestAnimationFrame(()=>{s(S=>!S)})},[]);return f.jsx(G4,{ref:u,className:n,onMouseEnter:()=>i(!0),onMouseLeave:()=>{i(!1),d(!1)},initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:f.jsx(_t,{mode:"wait",initial:!1,presenceAffectsLayout:!1,children:o?f.jsxs(Y4,{initial:{opacity:0,width:"40px"},animate:{opacity:1,width:"120px"},exit:{opacity:0,width:"40px"},transition:{duration:.15,ease:"easeOut",width:{duration:.2}},children:[f.jsx("div",{style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",zIndex:2,filter:"drop-shadow(0 0 3px rgba(138, 43, 226, 0.7))"},children:p()}),f.jsx(X4,{value:e,onChange:v,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)}),f.jsxs(_t,{children:[c&&e>0&&f.jsxs(q4,{$volume:e,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:[e,"%"]},"volume-level"),e===0&&c&&f.jsx(Q4,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:"Muted"},"mute-indicator")]})]},"slider-container"):f.jsxs(K4,{volume:e,onClick:x,onDoubleClick:g,whileTap:{scale:.95},title:"Open volume slider",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.15},children:[p(),f.jsx(J4,{$volume:e,initial:{opacity:0},animate:{opacity:e===0?0:r?.3:0},transition:{duration:.2}})]},"volume-button")})})},eC=b.div.attrs({className:"mp-ambient-particles"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(76, 175, 80, 0.6);
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.8), 0 0 20px rgba(76, 175, 80, 0.4);
    opacity: 0;
  }

  &::before {
    top: 10%;
    left: 10%;
    animation: floatParticle1 15s infinite ease-in-out;
  }

  &::after {
    bottom: 20%;
    right: 15%;
    animation: floatParticle2 18s infinite ease-in-out;
  }

  @keyframes floatParticle1 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(30vw, 20vh);
      opacity: 0.7;
    }
    50% {
      transform: translate(60vw, 10vh);
      opacity: 0.3;
    }
    75% {
      transform: translate(80vw, 30vh);
      opacity: 0.6;
    }
  }

  @keyframes floatParticle2 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(-20vw, -10vh);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50vw, -30vh);
      opacity: 0.8;
    }
    75% {
      transform: translate(-70vw, -5vh);
      opacity: 0.4;
    }
  }
`,tC=b.div.attrs({className:"mp-visualizer-wrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,ay={sidebar:.3,buttonDelay:.15,buttonTransition:.35},ly=b(O.div).attrs(e=>({className:"mp-sidebar"}))`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 280px;
  max-width: ${e=>e.$isOpen?"85vw":"75vw"}; // Increase max width when open
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(56, 142, 60, 0.1);
  overflow: hidden; // Important for containing the animated line

  /* Animated divider line with water-like effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 20%,
      rgba(76, 175, 80, 0.6) 50%,
      rgba(56, 142, 60, 0.2) 80%,
      transparent 100%
    );
    animation: waterFlowAnimation 3s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
  }

  /* Animated glow effect */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 150px;
    transform: translateY(-50%);
    background: radial-gradient(
      ellipse at left,
      rgba(76, 175, 80, 0.6) 0%,
      transparent 70%
    );
    filter: blur(5px);
    animation: pulseGlow 2s ease-in-out infinite;
  }

  @keyframes waterFlowAnimation {
    0% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
    25% {
      background-size: 100% 90%;
    }
    50% {
      background-position: 0 100%;
      background-size: 100% 110%;
    }
    75% {
      background-size: 100% 90%;
    }
    100% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
  }

  @keyframes pulseGlow {
    0%,
    100% {
      opacity: 0.7;
      height: 150px;
    }
    50% {
      opacity: 0.9;
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    width: 260px;
  }

  @media (max-width: 380px) {
    width: 100%; /* Full width sidebar for very small screens */
    max-width: none;
    border-left: none;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    /* Special treatment for landscape orientation on small devices */
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;

    & > div:first-of-type {
      grid-column: 1;
    }

    & > div:last-of-type {
      grid-column: 2;
      padding-left: 0;
    }
  }
`,nC=b.div.attrs(e=>({className:"mp-track-display"}))`
  padding: 30px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${e=>e.$bgColor?`linear-gradient(45deg, ${e.$bgColor}40, ${e.theme.background})`:e.theme.background};
  overflow: hidden;

  @media (max-width: 380px) {
    padding: 20px 15px;
  }

  @media (max-height: 600px) {
    padding: 15px 10px;
    justify-content: flex-start;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    padding: 10px;
    justify-content: center;

    & > div {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`,rC=b.div.attrs(e=>({className:"mp-album-bg-color"}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: ${e=>e.$bgColor||"transparent"};
  z-index: 0;
  filter: blur(50px);
  transition: background 0.5s ease;
`,iC=b.div.attrs({className:"mp-album-ripple-effect"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(76, 175, 80, 0.3);
    transform: translate(-50%, -50%) scale(0);
    animation: rippleEffect 5s infinite ease-out;
  }

  &::after {
    animation-delay: 2.5s;
  }

  @keyframes rippleEffect {
    0% {
      transform: translate(-50%, -50%) scale(0.3);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
  }
`,oC=b.div.attrs({className:"mp-album-artwork"})`
  position: relative;
  width: 220px;
  height: 220px;
  aspect-ratio: 1 / 1; /* Force square aspect ratio */
  max-width: min(calc(100% - 40px), 220px); /* Prevent oversizing */
  max-height: min(calc(100vw - 120px), 220px);
  margin: 35px auto 20px auto; /* Increase top margin from 20px to 35px */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 1;
  user-select: none;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flickering */
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;

  /* Enhanced hover effect container */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.15) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    pointer-events: none;
  }

  /* Container for the album art image with enhanced hover */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform-origin: center;
    will-change: transform;
  }

  /* Hover effects */
  &:hover {
    transform: scale(1.02) translateZ(0);
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.15);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.15);
    }
  }

  /* Active state for click/touch feedback */
  &:active {
    transform: scale(0.98) translateZ(0);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

    img {
      transform: scale(1.08);
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  }

  /* Maintain minimum size */
  @media (max-width: 280px) {
    width: 120px;
    height: 120px;
    min-width: 120px;
    min-height: 120px;
  }

  /* Container sizing rules for different screen sizes */
  @media (max-height: 700px) {
    width: 180px;
    height: 180px;
    margin: 30px auto 15px auto; /* Adjusted for smaller screens */
  }

  @media (max-height: 600px) {
    width: 150px;
    height: 150px;
    margin: 25px auto 12px auto; /* Adjusted for even smaller screens */
  }

  @media (max-height: 500px) and (orientation: landscape) {
    width: 130px;
    height: 130px;
    margin: 20px auto 10px auto; /* Adjusted for landscape mode */
  }

  /* Ensure proper spacing on very small screens */
  @media (max-width: 380px) {
    margin-top: 40px; /* Increased from 25px to 40px */
    margin-bottom: 15px;
  }

  /* Enhanced visual appearance with subtle inner shadow */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: inherit;
    pointer-events: none;
    z-index: 3;
  }

  /* Loading state */
  &.loading::before {
    opacity: 1;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.1;
    }
  }
`,sC=b.img.attrs({className:"mp-album-image"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,bh=b.div.attrs({className:"mp-track-metadata"})`
  text-align: center;
  margin-top: 20px;
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`,kh=b.h2.attrs({className:"mp-track-title"})`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  user-select: none; // Prevent text selection

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`,Sh=b.p.attrs({className:"mp-track-artist"})`
  font-size: 1.1rem;
  color: ${e=>e.theme.textSecondary};
  margin: 0 0 5px 0;
  user-select: none; // Prevent text selection
`,aC=b.p.attrs({className:"mp-track-album"})`
  font-size: 0.9rem;
  color: ${e=>e.theme.textSecondary};
  opacity: 0.8;
  user-select: none; // Prevent text selection
`,lC=b.div.attrs({className:"mp-playback-controls"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  gap: 15px;
  z-index: 1;
  padding: 8px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    border: 1px solid rgba(76, 175, 80, 0.3);
    box-shadow: inset 0 0 10px rgba(76, 175, 80, 0.1);
    pointer-events: none;
  }

  @media (max-height: 700px) {
    margin-top: 15px;
    gap: 10px;
  }

  @media (max-height: 600px) {
    margin-top: 10px;
    padding: 6px;
  }

  @media (max-width: 380px) {
    width: 90%;
    justify-content: space-around;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    margin-top: 5px;
    padding: 5px;
  }
`,Cn=b.button.attrs({className:"mp-control-button"})`
  background: transparent;
  border: none;
  color: ${e=>e.theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    color: ${e=>e.theme.primary};
    transform: scale(1.1);
  }

  @media (max-width: 380px) {
    min-width: 44px;
    min-height: 44px;
    padding: 10px;
  }
`,cC=b(Cn).attrs({className:"mp-play-pause-button"})`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${e=>e.theme.primary};
  color: white;
  font-size: 1.4rem;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.3s ease, box-shadow 0.3s ease;

  /* Glowing background effect */
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: ${e=>e.theme.primary};
    opacity: 0.4;
    z-index: -1;
    animation: pulse 2s infinite ease-out;
    transition: all 0.3s ease;
  }

  /* Inner progress ring */
  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: rotate 1.5s linear infinite;
  }

  /* Show progress ring when playing */
  &.playing::after {
    opacity: 0.7;
  }

  /* Base states styling */
  &.playing {
    background: ${e=>e.theme.primaryDark||"#388e3c"};
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.7);
  }

  &.paused {
    background: ${e=>e.theme.primary};
  }

  /* Icon container for smooth transitions */
  .icon-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon transitions */
  .play-icon,
  .pause-icon {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;
  }

  /* When playing, hide play icon and show pause icon */
  &.playing .play-icon {
    opacity: 0;
    transform: scale(0.5) rotate(-90deg);
  }

  &.playing .pause-icon {
    opacity: 1;
    transform: scale(1);
  }

  /* When paused, hide pause icon and show play icon */
  &.paused .play-icon {
    opacity: 1;
    transform: scale(1);
  }

  &.paused .pause-icon {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(76, 175, 80, 0.8);

    &::before {
      animation: pulse 1s infinite ease-out;
      opacity: 0.6;
    }

    &.playing {
      background: ${e=>e.theme.primaryDark||"#2e7d32"};
    }

    &.paused {
      background: ${e=>e.theme.primaryHover||"#43a047"};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.5;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-height: 700px) {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }
`,uC=({isPlaying:e,onPlayPause:t,onPrev:n,onNext:r})=>f.jsxs(lC,{children:[f.jsx(Cn,{onClick:n,children:f.jsx(lS,{})}),f.jsx(cC,{onClick:t,className:e?"playing":"paused","aria-label":e?"Pause":"Play",children:f.jsxs("div",{className:"icon-container",children:[f.jsx(Ua,{className:"play-icon"}),f.jsx(Ba,{className:"pause-icon"})]})}),f.jsx(Cn,{onClick:r,children:f.jsx(dS,{})})]}),dC=b.div.attrs({className:"mp-progress-wrapper"})`
  width: 100%;
  margin-top: 25px;
  padding: 0 15px;
  z-index: 1;
  position: relative;

  /* Add subtle ambient glow behind progress area */
  &::before {
    content: "";
    position: absolute;
    left: 15px;
    right: 15px;
    top: 50%;
    height: 20px;
    background: radial-gradient(
      ellipse at center,
      rgba(76, 175, 80, 0.15) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    transform: translateY(-50%);
    filter: blur(8px);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }

  @media (max-height: 700px) {
    margin-top: 15px;
  }
`,fC=b.div.attrs({className:"mp-progress-track"})`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin: 8px 0; // Add space for click area
  padding: 0.9px 0; // Create larger hit area while maintaining visual size
  box-sizing: content-box; // Ensure padding doesn't affect visual size

  &:hover {
    height: 5px;
    background: rgba(255, 255, 255, 0.18);
  }

  /* Track shine effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`,pC=b.div.attrs(e=>({style:{width:e.$width}}))`
  height: 100%;
  border-radius: inherit;
  position: relative;
  transition: width ${e=>e.$isDragging?"0s":"0.08s"} linear;
  background: linear-gradient(
    90deg,
    ${e=>e.theme.primary} 0%,
    ${e=>e.theme.primaryHover||"#43a047"} 100%
  );

  /* Shimmer effect - only active when music is playing */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(43, 167, 103, 0.87) 50%,
      transparent 100%
    );
    opacity: 0;
    animation: ${e=>e.$isPlaying?"shimmer 3s infinite":"none"};
    pointer-events: none;
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
    }
  }
`,hC=b.div.attrs(e=>({style:{left:e.$position,transform:`translate(-50%, -50%) scale(${e.$visible?1:0})`,width:e.$isDragging?"18px":"12px",height:e.$isDragging?"18px":"12px",background:e.$isDragging?"white":e.theme.primary,boxShadow:e.$isDragging?`0 0 0 4px rgba(76, 175, 80, 0.3), 
         0 0 15px rgba(76, 175, 80, 0.8),
         0 0 30px rgba(76, 175, 80, 0.4)`:`0 0 0 2px rgba(76, 175, 80, 0.2), 
         0 0 8px rgba(76, 175, 80, 0.6)`}}))`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.2s ease, box-shadow 0.2s ease,
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 2;
  will-change: transform, width, height, left;

  /* Inner dot for enhanced visual presence */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${e=>e.$isDragging?"6px":"4px"};
    height: ${e=>e.$isDragging?"6px":"4px"};
    background: white;
    border-radius: 50%;
    opacity: ${e=>e.$isDragging?.9:.7};
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  }

  /* Focus ring for enhanced visibility during interaction */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${e=>e.$isDragging?"28px":"20px"};
    height: ${e=>e.$isDragging?"28px":"20px"};
    transform: translate(-50%, -50%)
      scale(${e=>e.$isDragging?1:.7});
    opacity: ${e=>e.$isDragging?.6:0};
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 70%
    );
    transition: opacity 0.3s ease, transform 0.2s ease;
    pointer-events: none;
  }

  /* Advanced pulse effect during dragging */
  animation: ${e=>e.$isDragging?"advancedPulse 2s infinite cubic-bezier(0.66, 0, 0.34, 1)":"none"};
`,mC=b.div.attrs({className:"mp-time-display"})`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${e=>e.theme.textSecondary};
  margin-top: 10px;
  user-select: none;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 0.9;
  padding: 0 2px;

  /* Apply subtle highlight to current time */
  span:first-child {
    color: ${e=>e.theme.primary};
    opacity: 0.95;
  }
`,gC=b.div.attrs(e=>({style:{opacity:e.$visible?1:0,transform:`translateX(-50%) translateY(${e.$visible?0:10}px)`,left:e.$position,background:e.$isDragging?e.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)",padding:e.$isDragging?"5px 10px":"4px 8px",fontSize:e.$isDragging?"0.85rem":"0.75rem",fontWeight:e.$isDragging?600:500}}))`
  position: absolute;
  bottom: ${e=>e.$isDragging?"28px":"24px"};
  color: white;
  border-radius: 6px;
  transition: opacity 0.15s ease, transform 0.15s ease,
    background-color 0.2s ease, padding 0.2s ease;
  pointer-events: none;
  z-index: 3;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  user-select: none; /* Add this line to prevent text selection */

  /* Subtle pointer tip */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid
      ${e=>e.$isDragging?e.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)"};
    transition: border-top-color 0.2s ease;
  }
`;class yC{constructor(t,n){this.audioRef=t,this.dispatch=n,this.lastAction=null,this.doubleClickThreshold=300,this.debounceThreshold=150,this.playPromise=null,this.handlePlayPause=()=>{var i;if(this.shouldDebounce("playPause"))return;this.lastAction={type:"playPause",time:Date.now()};const r=this.audioRef.current;if(r)if(r.paused){this.dispatch({type:"PLAY"});try{this.playPromise=r.play(),(i=this.playPromise)==null||i.catch(o=>{console.warn("Play failed:",o),this.dispatch({type:"PAUSE"}),this.playPromise=null})}catch(o){console.warn("Play operation failed:",o),this.dispatch({type:"PAUSE"})}}else this.playPromise?this.playPromise.then(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}).catch(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}):(r.pause(),this.dispatch({type:"PAUSE"}))},this.handlePrev=()=>{if(this.shouldDebounce("prev"))return;const r=this.isDoubleClick("prev");this.lastAction={type:"prev",time:Date.now()};const i=this.audioRef.current;if(i){if(r){console.log("Double-click detected on prev button, skipping to previous track"),this.dispatch({type:"PREV_TRACK"});return}i.currentTime>3?i.currentTime=0:this.dispatch({type:"PREV_TRACK"})}},this.handleNext=()=>{if(this.shouldDebounce("next"))return;this.lastAction={type:"next",time:Date.now()},this.isDoubleClick("next")&&console.log("Double-click detected on next button"),this.dispatch({type:"NEXT_TRACK"})}}isDoubleClick(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.doubleClickThreshold:!1}shouldDebounce(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.debounceThreshold:!1}}const vC=ue.forwardRef(({isOpen:e,toggleOpen:t,setSidebarOpen:n},r)=>{var Q,oe,z,D;const{state:i,dispatch:o}=qt(),s=w.useRef(null),a=w.useRef(null),l=w.useRef(new yC(s,o)).current,c=l.handlePlayPause,d=l.handlePrev,u=()=>{if(i.repeatMode==="one"&&s.current){s.current.currentTime=0,s.current.play().catch(j=>console.warn("Couldn't restart track:",j));return}o({type:"NEXT_TRACK"})},p=((Q=i.currentTrack)==null?void 0:Q.color)||"#388e3c";w.useEffect(()=>{var j,$;i.isPlaying?(j=s.current)==null||j.play():($=s.current)==null||$.pause()},[i.isPlaying,i.currentTrack]),w.useEffect(()=>{s.current&&(s.current.volume=i.volume)},[i.volume]);const g=j=>{if(j&&!isNaN(j)){const $=Math.floor(j/60),I=Math.floor(j%60);return`${$}:${I<10?"0":""}${I}`}return"0:00"},v=()=>{if(s.current){const j=s.current.currentTime,$=s.current.duration;o({type:"SET_PROGRESS",payload:j}),o({type:"SET_DURATION",payload:$})}},x=j=>{if(a.current&&s.current){const $=a.current.clientWidth,I=j.nativeEvent.offsetX,H=s.current.duration;s.current.currentTime=I/$*H}};w.useEffect(()=>{if(i.isPlaying&&s.current){const j=s.current.play();j!==void 0&&j.catch($=>{console.warn("Failed to start playback:",$),o({type:"PAUSE"})})}else s.current&&s.current.pause()},[i.currentTrack,i.isPlaying,o]),w.useEffect(()=>{const j=()=>{var I;if((I=s.current)!=null&&I.error){console.error("Media error:",s.current.error);let H=0;const J=3,se=()=>{if(H<J){H++;const ae=Math.pow(2,H)*1e3;console.log(`Retrying playback in ${ae/1e3} seconds...`),setTimeout(()=>{s.current&&(s.current.load(),s.current.play().catch(Te=>{console.warn("Retry failed:",Te),se()}))},ae)}else console.warn("All retries failed, skipping track"),u()};se()}},$=s.current;return $&&$.addEventListener("error",j),()=>{$&&$.removeEventListener("error",j)}},[]);const[S,y]=w.useState(!1),[m,h]=w.useState("0%"),[k,E]=w.useState(!1),[C,P]=w.useState(null),T=j=>{var $;if(a.current){const I=a.current.getBoundingClientRect(),H=(j.clientX-I.left)/I.width,J=Math.max(0,Math.min(1,H))*100;if(h(`${J.toFixed(3)}%`),($=s.current)!=null&&$.duration){const se=J*s.current.duration/100;P(g(se))}S||y(!0)}},M=()=>{k||y(!1)},R=j=>{E(!0),K(j)},B=j=>{if(s.current){const $=s.current.duration,I=j/100*$;return g(I)}return"0:00"},K=j=>{if(a.current){const $=a.current.getBoundingClientRect(),I=(j.clientX-$.left)/$.width,H=Math.max(0,Math.min(1,I))*100,J=`${H}%`;if(h(J),P(B(H)),k&&s.current){const se=s.current.duration;s.current.currentTime=H/100*se,a.current.querySelector(".mp-progress-fill")&&(a.current.querySelector(".mp-progress-fill").style.width=J)}}},W=()=>{E(!1),setTimeout(()=>{S||y(!1)},100)};w.useEffect(()=>{const j=J=>{if(k&&a.current){J.preventDefault();const se=a.current.getBoundingClientRect(),ae=(J.clientX-se.left)/se.width,Te=Math.max(0,Math.min(1,ae))*100;if(h(`${Te.toFixed(3)}%`),s.current){const A=s.current.duration;s.current.currentTime=Te/100*A}}};let $;const I=J=>{k&&(J.preventDefault(),cancelAnimationFrame($),$=requestAnimationFrame(()=>{j(J)}))},H=()=>{k&&(W(),cancelAnimationFrame($))};return k&&(document.addEventListener("mousemove",I,{passive:!1}),document.addEventListener("mouseup",H)),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",H),cancelAnimationFrame($)}},[k]);const q=()=>{const j=bC(i.sidebarMode)?i.sidebarMode:"auto",$=["auto","always","manual"],H=($.indexOf(j)+1)%$.length,J=$[H];o({type:"SET_SIDEBAR_MODE",payload:J})},Pe=()=>{t(),o({type:"SET_SIDEBAR_MODE",payload:"manual"}),o({type:"SIDEBAR_INTERACTION"}),o({type:"USER_INTERACTION"})};return f.jsxs(ly,{$isOpen:e,className:"player-sidebar",ref:r,initial:{right:"-280px"},animate:{right:e?0:"-280px"},transition:{duration:ay.sidebar,ease:[.34,1.56,.64,1]},children:[f.jsx(xC,{}),f.jsxs(wC,{onClick:Pe,"aria-label":"Close sidebar",children:[f.jsx(gS,{}),f.jsxs("div",{className:"particles",children:[f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"}),f.jsx("div",{className:"particle"})]})]}),f.jsx("audio",{ref:s,src:(oe=i.currentTrack)==null?void 0:oe.audioSrc,onTimeUpdate:v,onEnded:u,onError:j=>{console.error("Audio error:",j),i.isPlaying&&(o({type:"PAUSE"}),setTimeout(()=>{u()},500))},onCanPlayThrough:()=>{i.isPlaying&&s.current&&s.current.play().catch(j=>{console.warn("Auto-play was prevented:",j),o({type:"PAUSE"})})}}),f.jsxs(nC,{$bgColor:p,children:[f.jsx(rC,{$bgColor:p}),i.currentTrack?f.jsxs(f.Fragment,{children:[f.jsxs(oC,{children:[f.jsx(sC,{src:Sn((z=i.currentTrack)==null?void 0:z.coverArt),alt:((D=i.currentTrack)==null?void 0:D.title)||"Album Cover"}),f.jsx(iC,{}),i.equalizerActive&&f.jsx(W4,{})]}),f.jsxs(bh,{children:[f.jsx(kh,{children:i.currentTrack.title}),f.jsx(Sh,{children:i.currentTrack.artist}),f.jsx(aC,{children:i.currentTrack.album})]}),f.jsx(uC,{isPlaying:i.isPlaying,onPlayPause:c,onPrev:d,onNext:u}),f.jsxs(dC,{children:[f.jsxs(fC,{ref:a,onClick:x,onMouseMove:T,onMouseEnter:T,onMouseLeave:M,onMouseDown:R,children:[f.jsx(pC,{$width:k?m:`${i.progress/i.duration*100}%`,$isDragging:k,$isPlaying:i.isPlaying}),f.jsx(gC,{$visible:S,$position:m,$isDragging:k,children:C||g(i.progress)}),f.jsx(hC,{$visible:S||k,$position:k||S?m:`${i.progress/i.duration*100}%`,$isDragging:k})]}),f.jsxs(mC,{children:[f.jsx("span",{children:g(i.progress)}),f.jsx("span",{children:g(i.duration)})]})]})]}):f.jsxs(bh,{children:[f.jsx(kh,{children:"No track selected"}),f.jsx(Sh,{children:"Select a track to play"})]})]}),f.jsxs(SC,{children:[f.jsx(CC,{children:f.jsx(Z4,{volume:Math.round(i.volume*100),onVolumeChange:j=>o({type:"SET_VOLUME",payload:j/100})})}),f.jsxs(EC,{children:[f.jsx(Cn,{onClick:()=>o({type:"TOGGLE_SHUFFLE"}),style:{color:i.isShuffling?"#388e3c":""},title:"Toggle shuffle mode",children:f.jsx(mS,{})}),f.jsx(TC,{onClick:()=>o({type:"CYCLE_REPEAT_MODE"}),className:`${i.repeatMode==="off"?"repeat-off":i.repeatMode==="all"?"repeat-all":"repeat-one"} ${i.repeatMode!=="off"?"active":""}`,title:`Repeat mode: ${i.repeatMode}`,"aria-label":`Repeat mode: ${i.repeatMode}`,children:f.jsxs("div",{className:"repeat-icon-container",children:[f.jsx(R4,{className:`repeat-off-icon ${i.repeatMode==="off"?"active":""}`}),f.jsx(z4,{className:`repeat-all-icon ${i.repeatMode==="all"?"active":""}`}),f.jsx(L4,{className:`repeat-one-icon ${i.repeatMode==="one"?"active":""}`}),f.jsx("span",{className:"repeat-badge",children:"1"})]})}),f.jsx(Cn,{onClick:()=>o({type:"TOGGLE_VISUALIZER"}),style:{color:i.visualizerActive?"#388e3c":""},title:"Toggle visualizer",children:f.jsx(cS,{})}),f.jsx(PC,{onClick:()=>o({type:"TOGGLE_EQUALIZER"}),className:`${i.isPlaying?"playing":""} ${i.equalizerActive?"active":""}`,style:{color:i.equalizerActive?"#388e3c":""},title:"Toggle equalizer",children:f.jsx(A4,{})}),f.jsx("div",{}),f.jsxs(Cn,{className:"sidebar-mode-button",onClick:q,style:{color:(()=>{switch(i.sidebarMode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}})()},title:`Sidebar: ${i.sidebarMode} mode`,children:[i.sidebarMode==="auto"&&f.jsx(uS,{}),i.sidebarMode==="always"&&f.jsx(pS,{}),i.sidebarMode==="manual"&&f.jsx(fS,{})]})]})]})]})}),xC=b.div.attrs({className:"mp-sidebar-ambient-effect"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.1) 0%,
      rgba(76, 175, 80, 0) 70%
    );
    opacity: 0.7;
    animation: rotateGradient 15s infinite linear;
  }

  @keyframes rotateGradient {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,wC=b.button.attrs({className:"mp-sidebar-close"})`
  position: absolute;
  top: ${e=>e.theme.isMobile?"10px":"15px"};
  right: ${e=>e.theme.isMobile?"10px":"15px"};
  width: ${e=>e.theme.isMobile?"40px":"36px"};
  height: ${e=>e.theme.isMobile?"40px":"36px"};
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: ${e=>e.theme.isMobile?"1.7rem":"1.5rem"};
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Galaxy background when hovered - Fix the path by removing 'public/' */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    border-radius: 50%;
  }

  /* Outer glow effect */
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(76, 175, 80, 0.7) 0%,
      rgba(76, 175, 80, 0) 70%
    );
    opacity: 0;
    z-index: -2;
    transition: opacity 0.3s ease;
  }

  /* X icon styling */
  svg {
    width: 18px;
    height: 18px;
    stroke-width: 2px;
    transition: color 0.3s ease, filter 0.3s ease;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
  }

  /* Particle container */
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  /* Particle styling - now with 12 particles instead of 6 */
  .particle {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.8), 0 0 12px rgba(76, 175, 80, 0.4);
  }

  /* Different size particles for more dynamic look */
  .particle:nth-child(3n + 1) {
    width: 2px;
    height: 2px;
    background: rgba(76, 175, 80, 1);
  }

  .particle:nth-child(3n + 2) {
    width: 3px;
    height: 3px;
    background: rgba(120, 200, 80, 0.9);
  }

  .particle:nth-child(3n + 3) {
    width: 4px;
    height: 4px;
    background: rgba(60, 220, 130, 0.85);
  }

  /* Hover state */
  &:hover {
    color: white;
    background: rgba(0, 0, 0, 0.4);

    &::before {
      opacity: 0.9;
    }

    &::after {
      opacity: 0.7;
      animation: pulseGlow 1.5s infinite alternate;
    }

    svg {
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
    }

    /* Particle explosion animations with improved timing */
    .particle:nth-child(1) {
      animation: particleFly1 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(2) {
      animation: particleFly2 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.05s;
    }
    .particle:nth-child(3) {
      animation: particleFly3 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(4) {
      animation: particleFly4 0.75s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.05s;
    }
    .particle:nth-child(5) {
      animation: particleFly5 0.85s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.15s;
    }
    .particle:nth-child(6) {
      animation: particleFly6 0.95s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(7) {
      animation: particleFly7 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.15s;
    }
    .particle:nth-child(8) {
      animation: particleFly8 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(9) {
      animation: particleFly9 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(10) {
      animation: particleFly10 0.75s cubic-bezier(0.215, 0.61, 0.355, 1)
        forwards 0.05s;
    }
    .particle:nth-child(11) {
      animation: particleFly11 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(12) {
      animation: particleFly12 0.85s cubic-bezier(0.215, 0.61, 0.355, 1)
        forwards 0.15s;
    }
  }

  /* Active/pressed state with particle implosion effect */
  &:active {
    transform: scale(0.9);

    &::before {
      opacity: 1;
    }

    .particle {
      animation: particleImplosion 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        forwards !important;
    }
  }

  /* Improved keyframes for more dynamic particle movements */
  @keyframes particleFly1 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-28px, -22px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly2 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(25px, -20px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly3 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(22px, 25px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly4 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-26px, 18px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly5 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(0, -32px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly6 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(8px, 30px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly7 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-35px, 5px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly8 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(32px, 8px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly9 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-15px, -28px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly10 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-18px, 25px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly11 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(22px, -15px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly12 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(12px, 32px) scale(0);
      opacity: 0;
    }
  }

  /* Implosion effect when button is clicked */
  @keyframes particleImplosion {
    0% {
      transform: translate(-50%, -50%) scale(1)
        translate(var(--tx, 0), var(--ty, 0));
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) translate(0, 0);
      opacity: 0;
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.5;
      transform: scale(0.95);
    }
    100% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
`,bC=e=>e==="auto"||e==="always"||e==="manual",kC=()=>{var c;const{state:e,dispatch:t}=qt(),[n,r]=w.useState(!1),i=w.useRef(null),o=w.useRef(null);w.useRef(null),w.useEffect(()=>{const d=()=>{try{window.removeEventListener("click",d),window.removeEventListener("touchstart",d);const u=window.AudioContext||window.webkitAudioContext;if(u){const p=new u;p.state==="suspended"&&p.resume(),console.log("Audio context initialized through user interaction")}}catch(u){console.log("Audio initialization error:",u)}};return window.addEventListener("click",d),window.addEventListener("touchstart",d),()=>{window.removeEventListener("click",d),window.removeEventListener("touchstart",d)}},[]),w.useEffect(()=>{if(e.sidebarMode==="auto"){const d=g=>{const v=window.innerWidth,x=Math.min(80,v*.08);if(g.clientX>v-x&&!n&&(r(!0),t({type:"SIDEBAR_INTERACTION"})),n){const y=v-280;g.clientX<y&&r(!1)}},u=g=>{n&&o.current&&(o.current.contains(g.target)||r(!1))},p=g=>{if(n&&g.touches.length>0){const v=g.touches[0],x=window.innerWidth,S=280;v.clientX<x-S-30&&r(!1)}};return document.addEventListener("mousemove",d),document.addEventListener("click",u),document.addEventListener("touchmove",p),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("click",u),document.removeEventListener("touchmove",p)}}e.sidebarMode==="always"&&r(!0)},[e.sidebarMode,n,t,o]);const s=d=>{if(d.current){const u=d.current.currentTime,p=d.current.duration;!isNaN(u)&&!isNaN(p)&&(t({type:"SET_PROGRESS",payload:u}),t({type:"SET_DURATION",payload:p}))}},a=()=>{t({type:"NEXT_TRACK"})},l=()=>{const d=!n;r(d),t({type:"SET_SIDEBAR_OPEN",payload:d}),t({type:"TOGGLE_SIDEBAR_VISIBILITY"}),e.sidebarMode!=="manual"&&t({type:"SET_SIDEBAR_MODE",payload:"manual"}),t({type:"SIDEBAR_INTERACTION"}),t({type:"USER_INTERACTION"})};return w.useEffect(()=>{const d=u=>{const p=u.target;p.tagName==="IMG"&&!p.src.includes("default_cover.jpeg")&&(console.log(`Image failed to load: ${p.src}, using default cover`),p.src=oy)};return document.addEventListener("error",d,!0),()=>{document.removeEventListener("error",d,!0)}},[]),w.useEffect(()=>{e.sidebarOpen!==void 0&&r(e.sidebarOpen)},[e.sidebarOpen]),f.jsxs(ly,{$isOpen:n,ref:o,initial:{right:"-280px"},animate:{right:n?0:"-280px"},transition:{duration:ay.sidebar,ease:[.34,1.56,.64,1]},children:[f.jsx(eC,{}),f.jsx("audio",{ref:i,src:(c=e.currentTrack)==null?void 0:c.audioSrc,onTimeUpdate:()=>s(i),onEnded:a}),f.jsx(tC,{children:e.visualizerActive&&f.jsx(D4,{})}),f.jsx(vC,{isOpen:n,toggleOpen:l,setSidebarOpen:r,ref:o})]})},SC=b.div.attrs({className:"mp-secondary-controls"})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1;
  user-select: none;

  @media (max-height: 700px) {
    padding: 15px 10px;
    gap: 10px;
  }
`,CC=b.div.attrs({className:"mp-control-group"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 2px;
`,EC=b.div.attrs({className:"mp-feature-toggles"})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  /* Add specific styling for sidebar mode button */
  .sidebar-mode-button {
    grid-column: 3; /* Place in last column */
    grid-row: 2; /* Place in second row */
    justify-self: center;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);

    .sidebar-mode-button {
      grid-column: 2;
      grid-row: 2;
    }
  }
`,PC=b(Cn).attrs({className:"mp-control-button mp-equalizer-button"})`
  position: relative;

  /* Container for the animated GIF - shown when playing and active */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px; /* Smaller exact size that matches the icon */
    height: 15px; /* Smaller exact size that matches the icon */
    transform: translate(-50%, -50%);
    background-image: url("/assets/icons/equalizer_animation.gif");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
    pointer-events: none;
  }

  /* Container for the static PNG - shown when not playing but active */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px; /* Smaller exact size that matches the icon */
    height: 25px; /* Smaller exact size that matches the icon */
    transform: translate(-50%, -50%);
    background-image: url("/assets/icons/equalizer_green.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
    pointer-events: none;
  }

  /* Show animated GIF when playing and active */
  &.playing.active::before {
    opacity: 1;
  }

  /* Show static PNG when not playing but active */
  &.active:not(.playing)::after {
    opacity: 1;
  }

  /* Hide the static SVG icon when the animation is showing */
  svg {
    position: relative;
    z-index: 0;
    transition: opacity 0.2s ease;
  }

  &.active svg {
    opacity: 0;
  }

  /* Keep hover effect consistent */
  &:hover {
    color: ${e=>{var t,n;return((t=e.style)==null?void 0:t.color)||((n=e.theme)==null?void 0:n.primary)||"#4caf50"}};
  }
`,TC=b(Cn).attrs({className:"mp-control-button mp-repeat-button"})`
  position: relative;
  overflow: visible;

  /* Inner content container for smooth transitions */
  .repeat-icon-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Bottom indicator showing current state */
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    height: 2px;
    width: 16px;
    background: ${e=>e.theme.primary||"#4caf50"};
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-radius: 2px;
    opacity: 0.9;
  }

  &.active::after {
    transform: translateX(-50%) scaleX(1);
  }

  &.repeat-one::after {
    background: #3f51b5;
    box-shadow: 0 0 4px rgba(63, 81, 181, 0.7);
  }

  &.repeat-all::after {
    background: #4caf50;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.7);
  }

  /* Badge for repeat-one mode */
  .repeat-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    background: #3f51b5;
    color: white;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    font-size: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(63, 81, 181, 0.8);
    opacity: 0;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.2s ease;
  }

  &.repeat-one .repeat-badge {
    opacity: 1;
    transform: scale(1);
  }

  /* Icon animations */
  svg {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    transform: scale(0.7) rotate(-30deg);
  }

  svg.active {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  /* Icon colors based on state */
  &.repeat-off svg.repeat-off-icon {
    color: rgba(255, 255, 255, 0.7);
  }

  &.repeat-all svg.repeat-all-icon {
    color: #4caf50;
  }

  &.repeat-one svg.repeat-one-icon {
    color: #3f51b5;
  }

  /* Hover effect */
  &:hover {
    &.repeat-off svg.repeat-off-icon {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`,jC=({isOpen:e,onToggle:t,className:n})=>f.jsxs($C,{className:n,onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:[f.jsx(AC,{$isOpen:e,children:f.jsx(RC,{animate:{y:e?"0%":"-50%",rotate:e?0:-15},transition:{type:"spring",stiffness:300,damping:20}})}),f.jsx(LC,{}),f.jsx(zC,{children:f.jsx(MC,{})})]}),$C=b(O.button)`
  position: relative;
  width: 32px;
  height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 20px; // Reduced from 24px
    height: 28px; // Reduced from 32px
  }
`,AC=b.div`
  position: absolute;
  top: 12px;
  width: 20px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  opacity: ${e=>e.$isOpen?.8:1};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    width: 12px; // Reduced from 16px
    height: 18px; // Reduced from 24px
    top: 8px; // Adjusted for smaller size
  }
`,RC=b(O.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  border-radius: 4px;

  @media (max-width: 768px) {
    background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
    border-radius: 2px; // Adjusted for smaller size
  }
`,LC=b.div`
  width: 12px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px 2px 0 0;

  @media (max-width: 768px) {
    width: 8px; // Reduced from 12px
`,zC=b.div`
  width: 24px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 16px; // Reduced from 24px
`,MC=b.div`
  position: absolute;
  inset: 1px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;b.div`
  @media (max-width: 768px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;b.span`
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 2px;
  }
`;class _C{constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.canvas.width=100,this.canvas.height=100,this.imageCache=new Map}async extractColors(t){if(this.imageCache.has(t))return this.imageCache.get(t);try{const n=await this.loadImage(t);if(!this.ctx)throw new Error("Canvas context not available");this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(n,0,0,this.canvas.width,this.canvas.height);const i=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data,o=this.analyzePalette(i);return this.imageCache.set(t,o),o}catch(n){return console.error("Failed to extract colors:",n),this.getDefaultPalette()}}loadImage(t){return new Promise((n,r)=>{const i=new Image;i.crossOrigin="Anonymous",i.onload=()=>n(i),i.onerror=o=>r(new Error(`Failed to load image: ${t}`)),i.src=t})}analyzePalette(t){const n={},r=[],i=[],o=[];for(let v=0;v<t.length;v+=4){const x=t[v],S=t[v+1],y=t[v+2];if(t[v+3]<128)continue;const h=`${Math.floor(x/8)},${Math.floor(S/8)},${Math.floor(y/8)}`;n[h]?(n[h].count++,n[h].r=(n[h].r+x)/2,n[h].g=(n[h].g+S)/2,n[h].b=(n[h].b+y)/2):n[h]={count:0,r:x,g:S,b:y};const k=(x+S+y)/3,E=Math.max(x,S,y)-Math.min(x,S,y);k<80&&r.push([x,S,y]),k>200&&i.push([x,S,y]),E>100&&o.push([x,S,y])}const s=Object.values(n).sort((v,x)=>x.count-v.count),a=s[0]||{r:76,g:175,b:80},l=this.findDistinctColor(s,a)||{r:33,g:150,b:243},c=this.averageColors(r)||[23,23,23],d=this.averageColors(i)||[230,230,230],u=this.getMostVibrant(o)||[255,87,34],p=this.getMutedVersion(a),g=this.getComplementaryColor(a);return{primary:this.rgbToHex(a.r,a.g,a.b),secondary:this.rgbToHex(l.r,l.g,l.b),dark:this.rgbToHex(c[0],c[1],c[2]),light:this.rgbToHex(d[0],d[1],d[2]),vibrant:this.rgbToHex(u[0],u[1],u[2]),accent:this.rgbToHex(g.r,g.g,g.b),muted:this.rgbToHex(p.r,p.g,p.b)}}findDistinctColor(t,n){for(const i of t)if(this.getColorDistance(i,n)>80)return i}getColorDistance(t,n){const r=t.r-n.r,i=t.g-n.g,o=t.b-n.b;return Math.sqrt(r*r*.3+i*i*.59+o*o*.11)}averageColors(t){if(t.length===0)return null;let n=0,r=0,i=0;for(const o of t)n+=o[0],r+=o[1],i+=o[2];return[Math.round(n/t.length),Math.round(r/t.length),Math.round(i/t.length)]}getMostVibrant(t){if(t.length===0)return null;let n=t[0],r=this.getSaturation(n);for(const i of t){const o=this.getSaturation(i);o>r&&(r=o,n=i)}return n}getSaturation(t){const n=Math.max(...t),r=Math.min(...t);return n===0?0:(n-r)/n}getMutedVersion(t){return{r:Math.round(t.r*.7+128*(1-.7)),g:Math.round(t.g*.7+128*(1-.7)),b:Math.round(t.b*.7+128*(1-.7))}}getComplementaryColor(t){return{r:255-t.r,g:255-t.g,b:255-t.b}}rgbToHex(t,n,r){return`#${this.componentToHex(t)}${this.componentToHex(n)}${this.componentToHex(r)}`}componentToHex(t){const n=Math.round(t).toString(16);return n.length===1?"0"+n:n}getDefaultPalette(){return{primary:"#4CAF50",secondary:"#2196F3",accent:"#FF5722",dark:"#212121",light:"#F5F5F5",vibrant:"#E91E63",muted:"#7CB342"}}generateWaveEffects(t){return[{color:t.primary,amplitude:20,frequency:.02,speed:.5},{color:t.secondary,amplitude:15,frequency:.03,speed:.7},{color:t.accent,amplitude:10,frequency:.01,speed:.3}]}createGradientBackground(t){return`radial-gradient(circle at center, 
      ${this.hexToRgba(t.dark,.8)} 0%, 
      ${this.hexToRgba(t.dark,.9)} 70%, 
      ${this.hexToRgba(t.dark,1)} 100%)`}hexToRgba(t,n){const r=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`rgba(${r}, ${i}, ${o}, ${n})`}}const ws=new _C,DC=({imageUrl:e,isPlaying:t=!1,intensity:n=.5})=>{const r=w.useRef(null),i=w.useRef(null),o=w.useRef(),[s,a]=w.useState([]),[l,c]=w.useState("");w.useEffect(()=>{if(!e)return;let u=!0;return(async()=>{try{const g=await ws.extractColors(e);if(!u)return;const v=ws.generateWaveEffects(g);a(v);const x=ws.createGradientBackground(g);c(x)}catch(g){console.error("Failed to process image colors:",g)}})(),()=>{u=!1}},[e]),w.useEffect(()=>{const u=i.current,p=r.current;if(!u||!p||s.length===0)return;const g=()=>{const{width:m,height:h}=p.getBoundingClientRect();u.width=m,u.height=h};g();const v=new ResizeObserver(ry.throttle(g,100));v.observe(p);const x={value:0};let S=0;const y=m=>{S===0&&(S=m);const h=(m-S)/1e3;S=m,t&&(x.value+=h);const k=u.getContext("2d");k&&(k.clearRect(0,0,u.width,u.height),s.forEach((E,C)=>{d(k,E,x.value,u.width,u.height,C,n)}),o.current=requestAnimationFrame(y))};return o.current=requestAnimationFrame(y),()=>{o.current&&cancelAnimationFrame(o.current),v.disconnect()}},[s,t,n]);const d=(u,p,g,v,x,S,y)=>{const{amplitude:m,frequency:h,speed:k,color:E}=p,C=m*y*(1-S*.2),P=k*(t?1:.2),T=x*(.3+S*.15);u.beginPath(),u.moveTo(0,T);for(let R=0;R<=v;R+=1){const B=T+Math.sin(R*h+g*P)*C+Math.sin(R*h*.5+g*P*.7)*(C*.5);u.lineTo(R,B)}u.lineTo(v,x),u.lineTo(0,x),u.closePath();const M=u.createLinearGradient(0,T,0,x);M.addColorStop(0,`${E}80`),M.addColorStop(1,`${E}10`),u.fillStyle=M,u.fill()};return f.jsxs(NC,{ref:r,style:{background:l},children:[f.jsx(IC,{ref:i}),f.jsx(FC,{$isPlaying:t})]})},NC=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  transition: background 1s ease;
`,IC=b.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,FC=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  opacity: ${e=>e.$isPlaying?.7:.3};
  transition: opacity 0.5s ease;
  z-index: 2;
  
  animation: ${e=>e.$isPlaying?"pulse 4s infinite alternate":"none"};
  
  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: scale(1);
    }
    100% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }
`,OC=()=>{var v,x,S;const{state:e,dispatch:t}=qt(),{state:n,dispatch:r}=Va(),[i,o]=w.useState(!0),[s,a]=w.useState({primary:"#4caf50",vibrant:"#4caf50",accent:"#43a047"});w.useEffect(()=>{var y;(y=e.currentTrack)!=null&&y.coverArt&&(async()=>{var h;try{const k=Sn((h=e.currentTrack)==null?void 0:h.coverArt),E=await ws.extractColors(k);a({primary:E.primary,vibrant:E.vibrant,accent:E.accent})}catch(k){console.error("Failed to extract colors:",k)}})()},[e.currentTrack]);const l=w.useMemo(()=>`linear-gradient(135deg, 
      ${s.primary}22 0%, 
      ${s.vibrant}33 50%, 
      ${s.accent}22 100%)`,[s]),c=()=>{t({type:e.isPlaying?"PAUSE":"PLAY"})},d=()=>{t({type:"PREV_TRACK"})},u=()=>{t({type:"NEXT_TRACK"})},p=()=>{r({type:"TOGGLE_EXPLORER"})},g=()=>{t({type:"SET_SIDEBAR_OPEN",payload:!0}),t({type:"SET_SIDEBAR_MODE",payload:"manual"})};return w.useEffect(()=>{o(!e.sidebarOpen)},[e.sidebarOpen]),f.jsxs(f.Fragment,{children:[f.jsx(nE,{}),f.jsxs(VC,{initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",damping:20},style:{background:l},className:"mobile-player-container",children:[f.jsxs(BC,{children:[((v=e.currentTrack)==null?void 0:v.coverArt)&&f.jsx(DC,{imageUrl:Sn(e.currentTrack.coverArt),isPlaying:e.isPlaying,intensity:.6}),f.jsx(UC,{$isPlaying:e.isPlaying})]}),f.jsx(HC,{children:f.jsxs(WC,{children:[f.jsxs(GC,{children:[f.jsx(eE,{isOpen:n.explorerVisible,onToggle:p}),e.currentTrack&&f.jsx(KC,{$isPlaying:e.isPlaying,children:f.jsx(YC,{src:Sn(e.currentTrack.coverArt),alt:`${e.currentTrack.title} cover art`,$isPlaying:e.isPlaying})}),f.jsxs(XC,{children:[f.jsx(qC,{children:((x=e.currentTrack)==null?void 0:x.title)||"No track"}),f.jsx(QC,{children:((S=e.currentTrack)==null?void 0:S.artist)||"No artist"})]})]}),f.jsx(_t,{children:i&&f.jsx(eu,{onClick:g,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},$accentColor:s.primary,"aria-label":"Open sidebar player",children:f.jsx(tE,{src:"/assets/icons/full_screen.png",alt:"Fullscreen"})})}),f.jsxs(JC,{children:[f.jsx(Zc,{onClick:d,"aria-label":"Previous track",children:f.jsx(ey,{})}),f.jsx(ZC,{onClick:c,"aria-label":e.isPlaying?"Pause":"Play",$accentColor:s.vibrant,$isPlaying:e.isPlaying,children:e.isPlaying?f.jsx(Ba,{}):f.jsx(Ua,{style:{marginLeft:"2px"}})}),f.jsx(Zc,{onClick:u,"aria-label":"Next track",children:f.jsx(ty,{})})]})]})})]})]})},VC=b(O.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px;
  z-index: 1000;
  overflow: hidden;
  height: 60px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  @media (max-width: 768px) {
    height: 54px;
    padding: 4px;
  }
`,BC=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`,UC=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(${e=>e.$isPlaying?"8px":"16px"});
  z-index: 1;
  transition: backdrop-filter 1.2s ease;
`,HC=b.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,WC=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  height: 100%;
`,GC=b.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  margin-right: 12px;
`,KC=b.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: ${e=>e.$isPlaying?"scale(1.05)":"scale(1)"};
  transition: transform 0.5s ease;
`,YC=b.img.attrs({draggable:!1})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${e=>e.$isPlaying?"scale(1.1)":"scale(1)"};
  transition: transform 5s ease;
  animation: ${e=>e.$isPlaying?"subtlePulse 3s infinite alternate":"none"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  user-drag: none;
  pointer-events: none;

  @keyframes subtlePulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`,XC=b.div`
  min-width: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,qC=b.div`
  color: white;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,QC=b.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,JC=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Zc=b.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px;
  }
`,ZC=b(Zc)`
  background: ${e=>e.$accentColor||"#4caf50"};
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-size: 16px;
  box-shadow: 0 2px 12px
    ${e=>e.$isPlaying?`${e.$accentColor||"#4caf50"}90`:`${e.$accentColor||"#4caf50"}50`};
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    opacity: ${e=>e.$isPlaying?.9:.7};
    transition: opacity 0.5s ease;
  }

  &:active {
    transform: scale(0.95);
    background: ${e=>e.$accentColor||"#43a047"};
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`,eE=b(jC)`
  margin-right: 8px;
  transform-origin: center;
  min-width: 24px;
  height: 32px;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    min-width: 20px;
    height: 28px;
    margin-right: 6px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,eu=b(O.button)`
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 4px;
  position: relative;
  overflow: visible;

  outline: none;
  -webkit-tap-highlight-color: transparent;

  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`,tE=b.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  filter: brightness(1.2) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
  opacity: 0.9;

  ${eu}:hover & {
    filter: brightness(1.5) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
    transform: scale(1.1);
    opacity: 1;
  }

  ${eu}:active & {
    filter: brightness(0.9) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    transform: scale(0.9);
  }
`,nE=od`
  /* Apply to all elements in the player */
  .mobile-player-container * {
    user-select: none !important;
    -webkit-user-select: none !important;
    -webkit-touch-callout: none !important;
  }
  
  button, 
  [role="button"],
  input,
  select,
  a,
  img,
  svg {
    &:focus {
      outline: none !important;
    }
    
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  
  img {
    -webkit-user-drag: none;
    user-drag: none;
  }
`,rE=xo`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`,cy=xo`
  0% {
    background-position: 200% 50%;
    opacity: 0.3;
  }
  100% {
    background-position: -200% 50%;
    opacity: 0.7;
  }
`,uy=xo`
  0% { filter: brightness(1) blur(8px); }
  50% { filter: brightness(1.5) blur(12px); }
  100% { filter: brightness(1) blur(8px); }
`,Xe=(e="default")=>{const t={electronic:"#00ff99",rock:"#ff4444",jazz:"#4444ff",classical:"#ffaa00",pop:"#ff44ff",default:"#4caf50"};return t[e]||t.default},uo=b.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.secondary};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({theme:e})=>e.text.primary};
    background: ${({theme:e})=>e.ui.hover};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,iE=b(uo)`
  width: 40px;
  height: 40px;
  background: ${e=>Xe(e.$category)};
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${e=>`${Xe(e.$category)}ee`};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
  }
`,oE=b.div`
  width: 100%;
  height: 4px;
  background: ${({theme:e})=>e.id==="contrast-light"?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  transition: height 0.2s ease;

  &:hover {
    height: 6px;
  }
`,sE=b.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${e=>Xe(e.$category)} 0%,
    ${e=>Xe(e.$category)}cc 100%
  );
  border-radius: inherit;
  position: relative;
  width: ${e=>e.$width};
  transition: ${e=>e.$isDragging?"none":"width 0.1s linear"};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: ${cy} 2s linear infinite;
    opacity: ${e=>e.$isDragging?1:.7};
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 4px;
    height: 16px;
    background: ${e=>Xe(e.$category)};
    border-radius: 2px;
    transform: translate(50%, -50%);
    box-shadow: 0 0 10px ${e=>Xe(e.$category)}80;
    animation: ${uy} 2s ease-in-out infinite;
  }
`,aE=b.div`
  position: absolute;
  bottom: 20px;
  left: ${e=>e.$position};
  transform: translateX(-50%);
  background: ${({theme:e})=>{var t;return e.id==="contrast-light"?"rgba(0, 0, 0, 0.8)":((t=e.player)==null?void 0:t.controls)||"rgba(0, 0, 0, 0.8)"}};
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
  border: 1px solid
    ${({theme:e})=>{var t;return e.id==="contrast-light"?"transparent":((t=e.explorer)==null?void 0:t.border)||"rgba(255, 255, 255, 0.1)"}};
`,lE=b.input`
  width: 100px;
  height: 4px;
  -webkit-appearance: none;
  background: ${({theme:e})=>e.id==="contrast-light"?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${({theme:e})=>e.id==="contrast-light"?e.ui.accent:"white"};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    box-shadow: 0 0 8px ${({theme:e})=>e.ui.accent}80;
  }
`,cE=b(O.div)`
  position: fixed;
  bottom: -15px;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  z-index: 100;

  /* Remove hover effect and keep background consistent */
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Mobile optimization */
  @media (max-width: 768px) {
    height: 64px;
    padding: 0 16px;
    gap: 16px;
  }
`,uE=b.div`
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;
`,dE=b.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  flex: 1;
  position: relative;
  padding: 12px;
  border-radius: 8px;
  background: transparent; // Remove the dark background

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      45deg,
      ${e=>e.theme.id==="contrast-light"?`${Xe(e.$category)}25`:`${Xe(e.$category)}15`},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,fE=b.img`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  object-fit: cover;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  ${e=>e.$isPlaying&&$a`
      animation: ${rE} 3s ease-in-out infinite;

      &::before {
        content: "";
        position: absolute;
        inset: -15px;
        background: ${Xe(e.$category)};
        animation: ${uy} 3s ease-in-out infinite;
        z-index: -1;
        opacity: 0.5;
      }

      &::after {
        content: "";
        position: absolute;
        inset: -2px;
        background: linear-gradient(
          90deg,
          ${Xe(e.$category)}00,
          ${Xe(e.$category)}40,
          ${Xe(e.$category)}00
        );
        animation: ${cy} 3s linear infinite;
        border-radius: inherit;
      }
    `}

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 0 20px ${e=>Xe(e.$category)}40,
      0 0 40px ${e=>Xe(e.$category)}20;
  }
`,pE=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,hE=b.div`
  color: ${({theme:e})=>e.text.primary};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,mE=b.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gE=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 2;
  max-width: 600px;
`,yE=b.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,vE=b.div`
  width: 100%;
  padding: 0 16px;
  position: relative;

  /* Add subtle ambient glow behind progress area */
  &::before {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    top: 50%;
    height: 20px;
    background: radial-gradient(
      ellipse at center,
      ${e=>`${e.theme.primary}26`} 0%,
      transparent 70%
    );
    transform: translateY(-50%);
    filter: blur(8px);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }
`,xE=b.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  justify-content: flex-end;
  flex: 1;
`,wE=b.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: 12px;
  margin-left: auto;
  padding-right: 16px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;

  /* Highlight current time */
  span:first-child {
    color: ${({theme:e})=>e.text.primary};
  }
`,bE=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,kE=b(uo)`
  color: rgba(255, 255, 255, ${e=>e.$isMuted?.5:.8});

  &:hover {
    color: white;
  }
`,SE=b.div`
  position: relative;
`,CE=b(uo)`
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`,EE=b(O.div)`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 8px;
  background: ${({theme:e})=>{var t,n;return((t=e.player)==null?void 0:t.controls)||((n=e.background)==null?void 0:n.secondary)||"#1a1a1a"}};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 220px;
  z-index: 101;
  border: 1px solid
    ${({theme:e})=>{var t;return((t=e.explorer)==null?void 0:t.border)||"rgba(255, 255, 255, 0.1)"}};

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    right: 12px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid
      ${({theme:e})=>{var t,n;return((t=e.player)==null?void 0:t.controls)||((n=e.background)==null?void 0:n.secondary)||"#1a1a1a"}};
  }
`,PE=b.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 8px;
`,TE=b(O.div)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  border: 2px solid
    ${e=>{var t;return e.$isActive?((t=e.theme.ui)==null?void 0:t.accent)||"#007aff":"transparent"}};
  background: ${e=>e.$color};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    border-color: ${e=>{var t;return(t=e.theme.ui)!=null&&t.accent?`${e.theme.ui.accent}80`:"rgba(0, 122, 255, 0.5)"}};
  }
`,Jo=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`},jE=[{id:"dark",name:"Dark",color:"#121212"},{id:"light",name:"Light",color:"#f5f5f5"},{id:"space-grey",name:"Space Grey",color:"#1e2132"},{id:"ocean-blue",name:"Ocean Blue",color:"#00547a"},{id:"cyber-punk",name:"Cyberpunk",color:"#19002e"},{id:"contrast-light",name:"High Contrast",color:"#ffffff"}],$E=e=>e&&typeof e=="object"&&"id"in e,AE=()=>{var K,W,q,Pe,Q,oe,z,D;const e=J2();if(!$E(e))return console.warn("Invalid theme provided to HorizontalPlayerBar"),null;const{state:t,dispatch:n}=qt(),r=w.useRef(null),[i,o]=w.useState(!1),s=w.useRef(null),[a,l]=w.useState(!1),[c,d]=w.useState("0px"),[u,p]=w.useState("0:00"),[g,v]=w.useState(!1),x=w.useRef(t.volume),[S,y]=w.useState(!1),m=w.useRef(null),{setTheme:h,currentTheme:k}=jd();w.useEffect(()=>{const j=$=>{m.current&&!m.current.contains($.target)&&!$.target.closest('button[aria-label="Theme switcher"]')&&y(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[]);const E=()=>{n({type:t.isPlaying?"PAUSE":"PLAY"})},C=()=>{n({type:"PREV_TRACK"})},P=()=>{n({type:"NEXT_TRACK"})},T=j=>{if(!s.current||!r.current)return;const $=s.current.getBoundingClientRect(),H=(j.clientX-$.left)/$.width*r.current.duration;isNaN(H)||(d(`${j.clientX-$.left}px`),p(Jo(H)),l(!0))},M=()=>{g?(n({type:"SET_VOLUME",payload:x.current}),v(!1)):(x.current=t.volume,n({type:"SET_VOLUME",payload:0}),v(!0))},R=j=>{const $=parseInt(j.target.value,10)/100;n({type:"SET_VOLUME",payload:$}),$>0&&g&&v(!1)},B=j=>{if(j.preventDefault(),o(!0),s.current&&r.current){const $=s.current.getBoundingClientRect(),H=(j.clientX-$.left)/$.width*r.current.duration;isNaN(H)||(r.current.currentTime=H,n({type:"SET_PROGRESS",payload:H}))}t.isPlaying&&r.current&&r.current.pause()};return w.useEffect(()=>{const j=I=>{if(i&&s.current&&r.current){const H=s.current.getBoundingClientRect(),se=Math.min(Math.max((I.clientX-H.left)/H.width,0),1)*r.current.duration;isNaN(se)||(r.current.currentTime=se,n({type:"SET_PROGRESS",payload:se}),d(`${I.clientX-H.left}px`),p(Jo(se)))}},$=()=>{i&&(o(!1),l(!1),t.isPlaying&&r.current&&r.current.play().catch(console.error))};return i&&(document.addEventListener("mousemove",j),document.addEventListener("mouseup",$)),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",$)}},[i,t.isPlaying,n]),f.jsx(uE,{style:{background:"rgba(0, 0, 0, 0.8)"},children:f.jsxs(cE,{$themeId:e.id,initial:{y:100,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:30,mass:1}},exit:{y:100,opacity:0,transition:{duration:.2,ease:"easeInOut"}},children:[f.jsxs(dE,{$category:(K=t.currentTrack)==null?void 0:K.genre,children:[f.jsx(fE,{src:Sn((W=t.currentTrack)==null?void 0:W.coverArt),alt:((q=t.currentTrack)==null?void 0:q.title)||"Album art",$isPlaying:t.isPlaying,$category:(Pe=t.currentTrack)==null?void 0:Pe.genre}),f.jsxs(pE,{children:[f.jsx(hE,{children:((Q=t.currentTrack)==null?void 0:Q.title)||"No track"}),f.jsx(mE,{children:((oe=t.currentTrack)==null?void 0:oe.artist)||"No artist"})]}),f.jsxs(wE,{children:[f.jsx("span",{children:Jo(t.progress)}),f.jsx("span",{children:"/"}),f.jsx("span",{children:Jo(t.duration)})]})]}),f.jsxs(gE,{children:[f.jsxs(yE,{children:[f.jsx(uo,{onClick:C,"aria-label":"Previous track",children:f.jsx(ey,{})}),f.jsx(iE,{onClick:E,"aria-label":t.isPlaying?"Pause":"Play",$isPlaying:t.isPlaying,$category:(z=t.currentTrack)==null?void 0:z.genre,children:t.isPlaying?f.jsx(Ba,{}):f.jsx(Ua,{})}),f.jsx(uo,{onClick:P,"aria-label":"Next track",children:f.jsx(ty,{})})]}),f.jsx(vE,{children:f.jsxs(oE,{ref:s,onMouseDown:B,onMouseMove:T,onMouseLeave:()=>{l(!1),i||p("0:00")},children:[f.jsx(sE,{$width:`${t.progress/t.duration*100}%`,$isDragging:i,$category:(D=t.currentTrack)==null?void 0:D.genre}),(a||i)&&f.jsx(aE,{$visible:!0,$position:c,children:u})]})})]}),f.jsxs(xE,{children:[f.jsxs(bE,{children:[f.jsx(kE,{onClick:M,$isMuted:g||t.volume===0,"aria-label":g?"Unmute":"Mute",children:f.jsx(ny,{})}),f.jsx(lE,{type:"range",min:"0",max:"100",value:Math.round(t.volume*100),onChange:R,"aria-label":"Volume"})]}),f.jsxs(SE,{children:[f.jsx(CE,{onClick:()=>y(!S),"aria-label":"Theme switcher",children:f.jsx(hS,{})}),f.jsx(_t,{children:S&&f.jsx(EE,{ref:m,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},children:f.jsx(PE,{children:jE.map(j=>f.jsx(TE,{$isActive:k.id===j.id,$color:j.color,onClick:()=>{h(j.id),y(!1)},role:"button",tabIndex:0,onKeyPress:$=>{($.key==="Enter"||$.key===" ")&&(h(j.id),y(!1))},"aria-label":`Switch to ${j.name} theme`,title:j.name},j.id))})})})]})]})]})})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const Ch="popstate";function RE(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return tu("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ia(i)}return zE(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function LE(){return Math.random().toString(36).substr(2,8)}function Eh(e,t){return{usr:e.state,key:e.key,idx:t}}function tu(e,t,n,r){return n===void 0&&(n=null),fo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ii(t):t,{state:n,key:t&&t.key||r||LE()})}function ia(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ii(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zE(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=un.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(fo({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function u(){a=un.Pop;let S=d(),y=S==null?null:S-c;c=S,l&&l({action:a,location:x.location,delta:y})}function p(S,y){a=un.Push;let m=tu(x.location,S,y);n&&n(m,S),c=d()+1;let h=Eh(m,c),k=x.createHref(m);try{s.pushState(h,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}o&&l&&l({action:a,location:x.location,delta:1})}function g(S,y){a=un.Replace;let m=tu(x.location,S,y);n&&n(m,S),c=d();let h=Eh(m,c),k=x.createHref(m);s.replaceState(h,"",k),o&&l&&l({action:a,location:x.location,delta:0})}function v(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:ia(S);return m=m.replace(/ $/,"%20"),Ee(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ch,u),l=S,()=>{i.removeEventListener(Ch,u),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let y=v(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:g,go(S){return s.go(S)}};return x}var Ph;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ph||(Ph={}));function ME(e,t,n){return n===void 0&&(n="/"),_E(e,t,n,!1)}function _E(e,t,n,r){let i=typeof t=="string"?ii(t):t,o=$d(i.pathname||"/",n);if(o==null)return null;let s=fy(e);DE(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=KE(o);a=WE(s[l],c,r)}return a}function fy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=En([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fy(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:UE(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of py(o.path))i(o,s,l)}),t}function py(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=py(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function DE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:HE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const NE=/^:[\w-]+$/,IE=3,FE=2,OE=1,VE=10,BE=-2,Th=e=>e==="*";function UE(e,t){let n=e.split("/"),r=n.length;return n.some(Th)&&(r+=BE),t&&(r+=FE),n.filter(i=>!Th(i)).reduce((i,o)=>i+(NE.test(o)?IE:o===""?OE:VE),r)}function HE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function WE(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",u=jh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),p=l.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=jh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!u)return null;Object.assign(i,u.params),s.push({params:i,pathname:En([o,u.pathname]),pathnameBase:QE(En([o,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(o=En([o,u.pathnameBase]))}return s}function jh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=GE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let x=a[u]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[u];return g&&!v?c[p]=void 0:c[p]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function GE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),dy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function KE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return dy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $d(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function YE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ii(e):e;return{pathname:n?n.startsWith("/")?n:XE(n,t):t,search:JE(r),hash:ZE(i)}}function XE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hy(e,t){let n=qE(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function my(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ii(e):(i=fo({},e),Ee(!i.pathname||!i.pathname.includes("?"),Dl("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Dl("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Dl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let u=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),u-=1;i.pathname=p.join("/")}a=u>=0?t[u]:"/"}let l=YE(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const En=e=>e.join("/").replace(/\/\/+/g,"/"),QE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),JE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ZE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e8(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gy=["post","put","patch","delete"];new Set(gy);const t8=["get",...gy];new Set(t8);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}const Ad=w.createContext(null),n8=w.createContext(null),lr=w.createContext(null),Ha=w.createContext(null),cr=w.createContext({outlet:null,matches:[],isDataRoute:!1}),yy=w.createContext(null);function r8(e,t){let{relative:n}=t===void 0?{}:t;Eo()||Ee(!1);let{basename:r,navigator:i}=w.useContext(lr),{hash:o,pathname:s,search:a}=wy(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:En([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Eo(){return w.useContext(Ha)!=null}function oi(){return Eo()||Ee(!1),w.useContext(Ha).location}function vy(e){w.useContext(lr).static||w.useLayoutEffect(e)}function xy(){let{isDataRoute:e}=w.useContext(cr);return e?g8():i8()}function i8(){Eo()||Ee(!1);let e=w.useContext(Ad),{basename:t,future:n,navigator:r}=w.useContext(lr),{matches:i}=w.useContext(cr),{pathname:o}=oi(),s=JSON.stringify(hy(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return vy(()=>{a.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=my(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:En([t,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[t,r,s,o,e])}function wy(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(lr),{matches:i}=w.useContext(cr),{pathname:o}=oi(),s=JSON.stringify(hy(i,r.v7_relativeSplatPath));return w.useMemo(()=>my(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function o8(e,t){return s8(e,t)}function s8(e,t,n,r){Eo()||Ee(!1);let{navigator:i,static:o}=w.useContext(lr),{matches:s}=w.useContext(cr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=oi(),u;if(t){var p;let y=typeof t=="string"?ii(t):t;c==="/"||(p=y.pathname)!=null&&p.startsWith(c)||Ee(!1),u=y}else u=d;let g=u.pathname||"/",v=g;if(c!=="/"){let y=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let x=!o&&n&&n.matches&&n.matches.length>0?n.matches:ME(e,{pathname:v}),S=d8(x&&x.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:En([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:En([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return t&&S?w.createElement(Ha.Provider,{value:{location:po({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:un.Pop}},S):S}function a8(){let e=m8(),t=e8(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const l8=w.createElement(a8,null);class c8 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(cr.Provider,{value:this.props.routeContext},w.createElement(yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u8(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Ad);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(cr.Provider,{value:t},r)}function d8(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||Ee(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let u=s[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:p,errors:g}=n,v=u.route.loader&&p[u.route.id]===void 0&&(!g||g[u.route.id]===void 0);if(u.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,u,p)=>{let g,v=!1,x=null,S=null;n&&(g=a&&u.route.id?a[u.route.id]:void 0,x=u.route.errorElement||l8,l&&(c<0&&p===0?(y8("route-fallback",!1),v=!0,S=null):c===p&&(v=!0,S=u.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,p+1)),m=()=>{let h;return g?h=x:v?h=S:u.route.Component?h=w.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=d,w.createElement(u8,{match:u,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:h})};return n&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?w.createElement(c8,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}var by=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(by||{}),oa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oa||{});function f8(e){let t=w.useContext(Ad);return t||Ee(!1),t}function p8(e){let t=w.useContext(n8);return t||Ee(!1),t}function h8(e){let t=w.useContext(cr);return t||Ee(!1),t}function ky(e){let t=h8(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function m8(){var e;let t=w.useContext(yy),n=p8(oa.UseRouteError),r=ky(oa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function g8(){let{router:e}=f8(by.UseNavigateStable),t=ky(oa.UseNavigateStable),n=w.useRef(!1);return vy(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,po({fromRouteId:t},o)))},[e,t])}const $h={};function y8(e,t,n){!t&&!$h[e]&&($h[e]=!0)}function v8(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Bn(e){Ee(!1)}function x8(e){let{basename:t="/",children:n=null,location:r,navigationType:i=un.Pop,navigator:o,static:s=!1,future:a}=e;Eo()&&Ee(!1);let l=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:o,static:s,future:po({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=ii(r));let{pathname:d="/",search:u="",hash:p="",state:g=null,key:v="default"}=r,x=w.useMemo(()=>{let S=$d(d,l);return S==null?null:{location:{pathname:S,search:u,hash:p,state:g,key:v},navigationType:i}},[l,d,u,p,g,v,i]);return x==null?null:w.createElement(lr.Provider,{value:c},w.createElement(Ha.Provider,{children:n,value:x}))}function w8(e){let{children:t,location:n}=e;return o8(nu(t),n)}new Promise(()=>{});function nu(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,nu(r.props.children,o));return}r.type!==Bn&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=nu(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ru.apply(this,arguments)}function b8(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function k8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S8(e,t){return e.button===0&&(!t||t==="_self")&&!k8(e)}const C8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],E8="6";try{window.__reactRouterVersion=E8}catch{}const P8="startTransition",Ah=Uy[P8];function T8(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=RE({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=w.useCallback(u=>{c&&Ah?Ah(()=>l(u)):l(u)},[l,c]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>v8(r),[r]),w.createElement(x8,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const j8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A8=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:u}=t,p=b8(t,C8),{basename:g}=w.useContext(lr),v,x=!1;if(typeof c=="string"&&$8.test(c)&&(v=c,j8))try{let h=new URL(window.location.href),k=c.startsWith("//")?new URL(h.protocol+c):new URL(c),E=$d(k.pathname,g);k.origin===h.origin&&E!=null?c=E+k.search+k.hash:x=!0}catch{}let S=r8(c,{relative:i}),y=R8(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:u});function m(h){r&&r(h),h.defaultPrevented||y(h)}return w.createElement("a",ru({},p,{href:v||S,onClick:x||o?r:m,ref:n,target:l}))});var Rh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rh||(Rh={}));var Lh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lh||(Lh={}));function R8(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=xy(),c=oi(),d=wy(e,{relative:s});return w.useCallback(u=>{if(S8(u,n)){u.preventDefault();let p=r!==void 0?r:ia(c)===ia(d);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,d,r,i,n,e,o,s,a])}function L8(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function z8(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function M8(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(e)}function _8(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(e)}function D8(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"}},{tag:"polyline",attr:{points:"21 15 16 10 5 21"}}]})(e)}function Sy(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}]})(e)}function sa(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 18V5l12-2v13"}},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"16",r:"3"}}]})(e)}function Cy(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function N8(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(e)}function I8(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 9.9-1"}}]})(e)}function zh(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(e)}function Mh(e){return te({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const iu={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"},fr="dreaming_polar_community_tracks";class Qn{static getGenreColor(t){return iu[t]||"#333333"}static saveTrack(t){try{const n={...t,color:t.color||Qn.getGenreColor(t.genre)},r=localStorage.getItem(fr),o=[...r?JSON.parse(r):[],n];localStorage.setItem(fr,JSON.stringify(o));const s=new CustomEvent("community-track-added",{detail:n});window.dispatchEvent(s)}catch(n){console.error("Error saving community track:",n)}}static async getAllTracks(){try{const t=localStorage.getItem(fr);return t?JSON.parse(t):[]}catch(t){return console.error("Failed to get community tracks:",t),[]}}static getTrackById(t){try{return Qn.getAllTracks().find(r=>r.id===t)||null}catch(n){return console.error("Error retrieving community track:",n),null}}static convertToTrack(t){return{id:t.id,title:t.title,artist:t.artist,album:t.album,genre:t.genre,coverArt:t.coverArt,audioSrc:t.audioSrc,duration:t.duration,color:t.color||Qn.getGenreColor(t.genre)}}static uploadAudioFile(t){return new Promise(n=>{setTimeout(()=>{const r=URL.createObjectURL(t);n(r)},1500)})}static uploadCoverArt(t){return new Promise(n=>{setTimeout(()=>{const r=URL.createObjectURL(t);n(r)},1e3)})}static cleanupAllStorageKeys(){["current_track","player_state","queue_state","recent_plays","track_progress","volume_state"].forEach(n=>localStorage.removeItem(n))}static async deleteTrack(t){try{const r=(await this.getAllTracks()).filter(i=>i.id!==t);localStorage.setItem(fr,JSON.stringify(r))}catch(n){throw console.error("Failed to delete track:",n),n}}static async updateTrack(t,n){try{const r=await this.getAllTracks(),i=r.findIndex(o=>o.id===t);i>-1&&(r[i]={...r[i],...n},localStorage.setItem(fr,JSON.stringify(r)))}catch(r){throw console.error("Failed to update track:",r),r}}static purgeAllCommunityContent(){try{const t={...localStorage};return Object.keys(t).forEach(r=>{const i=localStorage.getItem(r);i&&i.startsWith("blob:")&&(URL.revokeObjectURL(i),localStorage.removeItem(r))}),localStorage.removeItem(fr),["current_track","player_state","queue_state","recent_plays","track_progress","volume_state","blobUrls"].forEach(r=>localStorage.removeItem(r)),document.querySelectorAll("audio, video").forEach(r=>{r instanceof HTMLMediaElement&&(r.pause(),r.src="",r.load())}),document.querySelectorAll('img[src^="blob:"]').forEach(r=>{const i=r.src;r.src="/assets/covers/default_cover.jpeg",URL.revokeObjectURL(i)}),!0}catch(t){return console.error("Failed to purge community content:",t),!1}}}const F8=()=>{const e=Date.now().toString(36),t=Math.random().toString(36).substring(2,8);return`${e}-${t}`},_h={chopin:"/assets/covers/artists/chopin.jpg",chopin_etudes:"/assets/covers/artists/chopin_etudes.jpg",bach:"/assets/covers/artists/bach.jpg",queen:"/assets/covers/artists/queen.jpg",bonJovi:"/assets/covers/artists/bon_jovi.jpg",rema:"/assets/covers/artists/rema.jpg",rosalia:"/assets/covers/artists/rosalia.jpg",eminem:"/assets/covers/artists/eminem.jpg",liebestraume:"/assets/covers/artists/liebestraume.jpg",rema_calm_down:"/assets/covers/artists/rema_calm_down.jpg",memory_reboot:"/assets/covers/artists/memory_reboot.jpg"},Dh={classical_collection:"/assets/covers/albums/classical_collection.jpg",rock_anthology:"/assets/covers/albums/rock_anthology.jpg",pop_hits:"/assets/covers/albums/pop_hits.jpg",electronic_beats:"/assets/covers/albums/electronic_beats.jpg",jazz_classics:"/assets/covers/albums/jazz_classics.jpg",ambient_sounds:"/assets/covers/albums/ambient_sounds.jpg",film_scores:"/assets/covers/albums/film_scores.jpg",hiphop_beats:"/assets/covers/albums/hiphop_beats.jpg"},Nh={classical:"/assets/covers/genres/classical.jpg",rock:"/assets/covers/genres/rock.jpg",pop:"/assets/covers/genres/pop.jpg",electronic:"/assets/covers/genres/electronic.jpg",jazz:"/assets/covers/genres/jazz.jpg",ambient:"/assets/covers/genres/ambient.jpg",soundtrack:"/assets/covers/genres/soundtrack.jpg",hiphop:"/assets/covers/genres/hiphop.jpg"},O8={}.VITE_ADMIN_PASSWORD||"MR1299llj",V8=od`
  .sr-only {
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
`,B8=b(O.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.primary)||"#1a1a1a"}};
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};
`,U8=b.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid
    ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
`,H8=b.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`,W8=b.button`
  background: none;
  border: none;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.secondary)||"#aaaaaa"}};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.hover)||"rgba(255,255,255,0.1)"}};
  }
`,G8=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Nl=b.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
`,K8=b.section`
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
`,Y8=b.section`
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
`,X8=b.section`
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
`,q8=b.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.secondary)||"#3a5ce7"}};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Q8=b.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  max-height: 300px;
  overflow-y: auto;
`,J8=b.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${({theme:e,$active:t})=>{var n;return t?((n=e.background)==null?void 0:n.hover)||"rgba(255,255,255,0.1)":"rgba(255, 255, 255, 0.05)"}};
  border-radius: 0.25rem;
`,Z8=b.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eP=b.span`
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.secondary)||"#aaaaaa"}};
  font-size: 0.875rem;
`,Dn=b.div`
  margin-bottom: 1rem;
`,pr=b.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.secondary)||"#aaaaaa"}};
`,yi=b.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
  border: 1px solid ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#444"}};
  border-radius: 0.25rem;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.primary)||"#4a6cf7"}};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,tP=b.select`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
  border: 1px solid ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#444"}};
  border-radius: 0.25rem;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.primary)||"#4a6cf7"}};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,nP=b.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,rP=b.input`
  cursor: pointer;
`,iP=b.div`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ih=b.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,oP=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.secondary)||"#aaaaaa"}};
`,sP=b.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,aP=b.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};
  border: 1px solid ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#444"}};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.hover)||"rgba(255,255,255,0.1)"}};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,lP=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 0.5rem;
`,cP=b.div`
  cursor: pointer;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 2px solid
    ${({theme:e,$selected:t})=>{var n;return t?((n=e.accent)==null?void 0:n.primary)||"#4a6cf7":"transparent"}};

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
  }

  span {
    display: block;
    font-size: 0.75rem;
    padding: 0.25rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.hover)||"rgba(255,255,255,0.1)"}};
  }

  &:focus {
    outline: 2px solid ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.primary)||"#4a6cf7"}};
    outline-offset: 2px;
  }
`,uP=b.div`
  padding: 1.2rem;
  border-top: 1px solid ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,dP=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  background-color: ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.secondary)||"#3a5ce7"}};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,fP=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({theme:e})=>{var t;return((t=e.alert)==null?void 0:t.success)||"#10b981"}};
  background-color: ${({theme:e})=>{var t;return((t=e.alert)==null?void 0:t.successBg)||"rgba(16, 185, 129, 0.1)"}};
  padding: 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
`,pP=b.button`
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};
  border: 1px solid ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#444"}};
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.hover)||"rgba(255,255,255,0.1)"}};
  }
`;b.section`
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
`;b.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#333"}};
  border-radius: 0.25rem;
`;b.div`
  display: flex;
  gap: 0.5rem;
`;b.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.hover)||"rgba(255,255,255,0.1)"}};
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};
  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>{var t;return((t=e.background)==null?void 0:t.tertiary)||"#444"}};
  }
`;const hP=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({theme:e})=>{var t;return((t=e.alert)==null?void 0:t.error)||"#ef4444"}};
  background-color: ${({theme:e})=>{var t;return((t=e.alert)==null?void 0:t.errorBg)||"rgba(239, 68, 68, 0.1)"}};
  padding: 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
`,mP=b.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({$progress:e})=>`${e}%`};
  background-color: rgba(255, 255, 255, 0.2);
  transition: width 0.3s ease;
`,gP=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({theme:e})=>{var t;return(t=e.background)==null?void 0:t.primary}};
  padding: 2rem;
`,yP=b.form`
  background: ${({theme:e})=>{var t,n;return`linear-gradient(
    145deg,
    ${((t=e.background)==null?void 0:t.secondary)||"#2a2a2a"},
    ${((n=e.background)==null?void 0:n.tertiary)||"#333333"}
  )`}};
  padding: 2.5rem;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid
    ${({theme:e})=>{var t;return((t=e.border)==null?void 0:t.subtle)||"rgba(255, 255, 255, 0.05)"}};
`,vP=b.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.primary}};
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  font-weight: 600;

  svg {
    color: ${({theme:e})=>{var t;return(t=e.accent)==null?void 0:t.primary}};
  }
`,xP=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
`,Ey=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: ${({theme:e})=>{var t,n;return`linear-gradient(
    135deg,
    ${((t=e.accent)==null?void 0:t.primary)||"#4a6cf7"},
    ${((n=e.accent)==null?void 0:n.secondary)||"#3a5ce7"}
  )`}};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,wP=b(Ey)`
  background: ${({theme:e})=>{var t,n;return`linear-gradient(
    135deg,
    ${((t=e.background)==null?void 0:t.tertiary)||"#333"},
    ${((n=e.background)==null?void 0:n.secondary)||"#2a2a2a"}
  )`}};
  border: 1px solid
    ${({theme:e})=>{var t;return((t=e.border)==null?void 0:t.subtle)||"rgba(255, 255, 255, 0.1)"}};
`,bP=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({theme:e})=>e.error||"#ef4444"};
  background: ${({theme:e})=>{var t;return((t=e.alert)==null?void 0:t.errorBg)||"rgba(239, 68, 68, 0.1)"}};
  padding: 0.75rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.875rem;
`,kP=()=>{const e=xy(),[t,n]=w.useState(!1),[r,i]=w.useState({files:[],currentFileIndex:0,uploading:!1,progress:0,success:!1,error:null}),[o,s]=w.useState({title:"",artist:"",album:"",genre:"pop",isOriginal:!1}),[a,l]=w.useState(""),[c,d]=w.useState(""),[u,p]=w.useState(null),[g,v]=w.useState(""),[x,S]=w.useState(""),[y,m]=w.useState(""),h=w.useRef(null),k=w.useRef(null),E=w.useCallback(()=>{a===O8?(n(!0),d("")):(d("Invalid admin password"),l(""))},[a]);return t?f.jsxs(f.Fragment,{children:[f.jsx(V8,{}),f.jsxs(B8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[f.jsxs(U8,{children:[f.jsx(H8,{children:"Upload to Community"}),f.jsx(W8,{onClick:()=>e("/explorer"),"aria-label":"Close upload page",children:f.jsx(Mh,{size:24})})]}),f.jsxs(G8,{children:[f.jsxs(K8,{children:[f.jsx(Nl,{children:"Select Audio Files"}),f.jsxs(q8,{onClick:()=>{var C;return(C=h.current)==null?void 0:C.click()},disabled:r.uploading,"aria-label":"Select music files to upload",children:[f.jsx(sa,{size:20,"aria-hidden":"true"}),"Select Music Files"]}),f.jsx("input",{type:"file",ref:h,onChange:C=>{if(C.target.files&&C.target.files.length>0){const P=Array.from(C.target.files);i({...r,files:P,currentFileIndex:0,error:null})}},accept:"audio/*",multiple:!0,style:{display:"none"},"aria-label":"File input for audio files"}),r.files.length>0&&f.jsx(Q8,{"aria-label":"Selected files list",children:r.files.map((C,P)=>f.jsxs(J8,{$active:P===r.currentFileIndex,children:[f.jsx(sa,{size:16,"aria-hidden":"true"}),f.jsx(Z8,{children:C.name}),f.jsxs(eP,{children:[(C.size/(1024*1024)).toFixed(2)," MB"]})]},P))})]}),f.jsxs(Y8,{children:[f.jsx(Nl,{children:"Track Information"}),f.jsxs(Dn,{children:[f.jsx(pr,{htmlFor:"title",children:"Title*"}),f.jsx(yi,{id:"title",name:"title",value:o.title,onChange:C=>s({...o,title:C.target.value}),placeholder:"Track title",disabled:r.uploading,required:!0,"aria-required":"true"})]}),f.jsxs(Dn,{children:[f.jsx(pr,{htmlFor:"artist",children:"Artist*"}),f.jsx(yi,{id:"artist",name:"artist",value:o.artist,onChange:C=>s({...o,artist:C.target.value}),placeholder:"Artist name",disabled:r.uploading,required:!0,"aria-required":"true"})]}),f.jsxs(Dn,{children:[f.jsx(pr,{htmlFor:"album",children:"Album"}),f.jsx(yi,{id:"album",name:"album",value:o.album,onChange:C=>s({...o,album:C.target.value}),placeholder:"Album name",disabled:r.uploading})]}),f.jsxs(Dn,{children:[f.jsx(pr,{htmlFor:"genre",id:"genre-label",children:"Genre"}),f.jsxs(tP,{id:"genre",name:"genre",value:o.genre,onChange:C=>s({...o,genre:C.target.value}),disabled:r.uploading,"aria-labelledby":"genre-label","aria-label":"Select music genre",title:"Music genre selection",children:[f.jsx("option",{value:"pop",children:"Pop"}),f.jsx("option",{value:"rock",children:"Rock"}),f.jsx("option",{value:"classical",children:"Classical"}),f.jsx("option",{value:"electronic",children:"Electronic"}),f.jsx("option",{value:"hiphop",children:"Hip Hop"}),f.jsx("option",{value:"jazz",children:"Jazz"}),f.jsx("option",{value:"blues",children:"Blues"}),f.jsx("option",{value:"country",children:"Country"}),f.jsx("option",{value:"folk",children:"Folk"}),f.jsx("option",{value:"ambient",children:"Ambient"})]})]}),f.jsx(Dn,{children:f.jsxs(nP,{htmlFor:"isOriginal",children:[f.jsx(rP,{id:"isOriginal",type:"checkbox",name:"isOriginal",checked:o.isOriginal,onChange:C=>s({...o,isOriginal:C.target.checked}),disabled:r.uploading,"aria-label":"Mark as original content"}),f.jsx("span",{children:"This is my original content"})]})})]}),f.jsxs(X8,{children:[f.jsx(Nl,{children:"Cover Art"}),f.jsx(iP,{children:g?f.jsx(Ih,{src:g,alt:"Cover Art Preview"}):y?f.jsx(Ih,{src:y,alt:"Selected Cover Art"}):f.jsxs(oP,{children:[f.jsx(D8,{size:48,"aria-hidden":"true"}),f.jsx("span",{className:"sr-only",children:"No cover art selected"})]})}),f.jsxs(sP,{children:[f.jsxs(aP,{onClick:()=>{var C;return(C=k.current)==null?void 0:C.click()},disabled:r.uploading,"aria-label":"Upload cover art",children:[f.jsx(zh,{size:16,"aria-hidden":"true"}),"Upload Cover"]}),f.jsx("input",{type:"file",ref:k,onChange:C=>{if(C.target.files&&C.target.files.length>0){const P=C.target.files[0];p(P);const T=new FileReader;T.onload=M=>{var B;const R=(B=M.target)==null?void 0:B.result;R&&typeof R=="string"&&(v(R),m(""))},T.readAsDataURL(P)}},accept:"image/*",style:{display:"none"},"aria-label":"File input for cover art"}),f.jsxs(Dn,{children:[f.jsx(pr,{htmlFor:"coverSearch",children:"Or search existing covers:"}),f.jsx(yi,{id:"coverSearch",value:x,onChange:C=>S(C.target.value),placeholder:"Search by artist or album",disabled:r.uploading,"aria-label":"Search existing cover art"})]}),x&&f.jsxs(lP,{"aria-label":"Cover art search results",children:[Object.entries({...Nh,...Dh,..._h}).filter(([C])=>C.toLowerCase().includes(x.toLowerCase())).map(([C,P])=>f.jsxs(cP,{onClick:()=>{m(P),v(""),p(null)},$selected:y===P,role:"button","aria-label":`Select ${C} cover art`,"aria-pressed":y===P,tabIndex:0,onKeyDown:T=>{(T.key==="Enter"||T.key===" ")&&(m(P),v(""),p(null),T.preventDefault())},children:[f.jsx("img",{src:P,alt:`${C} cover`}),f.jsx("span",{children:C})]},C)),Object.entries({...Nh,...Dh,..._h}).filter(([C])=>C.toLowerCase().includes(x.toLowerCase())).length===0&&f.jsx("p",{children:"No covers found. Try a different search term."})]})]})]})]}),f.jsxs(uP,{children:[r.error&&f.jsx(hP,{role:"alert",children:r.error}),r.success?f.jsxs(fP,{role:"status",children:[f.jsx(L8,{size:20,"aria-hidden":"true"}),"Upload complete! Your tracks have been added to the community library."]}):f.jsx(dP,{onClick:async()=>{if(r.files.length===0){i({...r,error:"Please select at least one audio file"});return}if(!o.title||!o.artist){i({...r,error:"Title and artist are required"});return}if(!g&&!y){i({...r,error:"Please select or upload cover art"});return}i({...r,uploading:!0,progress:0,error:null});try{const C=r.files[r.currentFileIndex],P=await Qn.uploadAudioFile(C);let T=y;u&&!y&&(T=await Qn.uploadCoverArt(u));const M={id:`community-${F8()}`,title:o.title||C.name.replace(/\.[^/.]+$/,""),artist:o.artist||"Unknown Artist",album:o.album||"Community Uploads",genre:o.genre||"pop",coverArt:T,audioSrc:P,duration:0,color:iu[o.genre]||iu.pop,uploadedBy:"Current User",uploadDate:new Date().toISOString(),isOriginal:o.isOriginal||!1};Qn.saveTrack(M);const R=r.currentFileIndex+1;R<r.files.length?i({...r,currentFileIndex:R,progress:R/r.files.length*100}):i({...r,uploading:!1,success:!0,progress:100})}catch(C){console.error("Upload failed:",C),i({...r,uploading:!1,error:"Upload failed. Please try again."})}},disabled:r.uploading||r.files.length===0,"aria-label":"Upload tracks to community",children:r.uploading?f.jsxs(f.Fragment,{children:[f.jsx(mP,{$progress:r.progress,"aria-hidden":"true"}),f.jsxs("span",{children:["Uploading... ",Math.round(r.progress),"%"]})]}):f.jsxs(f.Fragment,{children:[f.jsx(zh,{size:20,"aria-hidden":"true"}),"Upload to Community"]})}),r.success&&f.jsx(pP,{onClick:()=>e("/explorer"),"aria-label":"Go back to music explorer",children:"Go to Music Explorer"})]})]})]}):f.jsx(gP,{children:f.jsxs(yP,{onSubmit:C=>{C.preventDefault(),E()},children:[f.jsxs(vP,{children:[f.jsx(Sy,{})," Admin Access"]}),f.jsxs(Dn,{children:[f.jsx(pr,{htmlFor:"adminPass",children:"Password"}),f.jsx(yi,{id:"adminPass",type:"password",value:a,onChange:C=>l(C.target.value),placeholder:"Enter admin password",autoComplete:"current-password","aria-label":"Admin password input"})]}),c&&f.jsxs(bP,{children:[f.jsx(Mh,{}),c]}),f.jsxs(xP,{children:[f.jsxs(Ey,{type:"submit",children:[f.jsx(I8,{})," Login"]}),f.jsx(wP,{type:"button",onClick:()=>e("/explorer"),children:"Back"})]})]})})},SP=()=>{const e=oi();return f.jsx(CP,{children:f.jsxs(EP,{children:[f.jsx(PP,{children:f.jsx(TP,{})}),f.jsxs(jP,{children:[f.jsx(vi,{$isActive:e.pathname==="/"||e.pathname==="/explorer",children:f.jsxs(xi,{to:"/explorer",children:[f.jsx(_8,{size:20}),f.jsx(wi,{children:"Home"})]})}),f.jsx(vi,{$isActive:e.pathname==="/search",children:f.jsxs(xi,{to:"/search",children:[f.jsx(Cy,{size:20}),f.jsx(wi,{children:"Search"})]})}),f.jsx(vi,{$isActive:e.pathname==="/library",children:f.jsxs(xi,{to:"/library",children:[f.jsx(sa,{size:20}),f.jsx(wi,{children:"Library"})]})}),f.jsx(vi,{children:f.jsxs(xi,{to:"/community-upload",title:"Admin Only",children:[f.jsx(Sy,{size:20}),f.jsx(wi,{children:"Admin Upload"})]})}),f.jsx(vi,{$isActive:e.pathname==="/settings",children:f.jsxs(xi,{to:"/settings",children:[f.jsx(N8,{size:20}),f.jsx(wi,{children:"Settings"})]})})]})]})})},CP=b.nav`
  display: flex;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0.25rem; // Reduced padding for mobile
  }
`,EP=b.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0.25rem; // Reduced padding
    gap: 0.5rem; // Reduced gap between items
  }
`,PP=b.div`
  display: flex;
  align-items: center;
  margin-right: 5px;

  @media (max-width: 768px) {
    margin-right: 2px; // Reduced margin
  }
`,TP=b.img.attrs({src:"/assets/logos/logo_5_mini.png",alt:"Dreaming Polar",loading:"eager"})`
  height: 40px;
  width: auto;
  margin-left: 0.8rem;

  @media (max-width: 768px) {
    height: 20px; // Reduced from 24px to 20px
    margin-left: 0.4rem; // Reduced margin
  }
`,jP=b.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem; // Reduced gap between nav items
  }
`,vi=b.li`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({theme:e,$isActive:t})=>{var n;return t?((n=e.accent)==null?void 0:n.primary)||"#5e35b1":"transparent"}};
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    svg {
      width: 14px; // Reduced from 16px
      height: 14px; // Reduced from 16px
    }
  }
`,xi=b(A8)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: ${({theme:e})=>{var t;return((t=e.text)==null?void 0:t.primary)||"#ffffff"}};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:e})=>{var t;return((t=e.accent)==null?void 0:t.primary)||"#5e35b1"}};
  }

  @media (max-width: 768px) {
    padding: 4px 6px; // Reduced padding
    gap: 4px; // Reduced gap
  }
`,wi=b.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,$P=()=>f.jsxs(AP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[f.jsxs(RP,{children:[f.jsx(LP,{size:24}),f.jsx(zP,{children:"Search"})]}),f.jsx(MP,{type:"text",placeholder:"Search for songs, artists, or albums...",disabled:!0}),f.jsx(_P,{children:f.jsxs(DP,{children:["🎵 Search functionality coming soon!",f.jsx("br",{}),"You'll be able to discover new music here."]})})]}),AP=b(O.div)`
  padding: 2rem;
  height: 100%;
  width: 100%;
`,RP=b.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,LP=b(Cy)`
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.primary}};
`,zP=b.h1`
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.primary}};
  font-size: 2rem;
`,MP=b.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>{var t;return(t=e.border)==null?void 0:t.subtle}};
  background: ${({theme:e})=>{var t;return(t=e.background)==null?void 0:t.secondary}};
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.primary}};
  font-size: 1rem;
  margin-bottom: 2rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,_P=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({theme:e})=>{var t;return(t=e.background)==null?void 0:t.secondary}};
  border-radius: 12px;
  margin-top: 2rem;
`,DP=b.p`
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.secondary}};
  text-align: center;
  line-height: 1.6;
  font-size: 1.1rem;
`,NP=()=>f.jsxs(IP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[f.jsx(FP,{children:f.jsx(OP,{children:"Your Library"})}),f.jsxs(VP,{children:[f.jsxs(Fh,{children:[f.jsxs(Oh,{children:[f.jsx(M8,{size:20}),f.jsx(Vh,{children:"Favorites"})]}),f.jsx(Bh,{children:"No favorite tracks yet"})]}),f.jsxs(Fh,{children:[f.jsxs(Oh,{children:[f.jsx(z8,{size:20}),f.jsx(Vh,{children:"Recently Played"})]}),f.jsx(Bh,{children:"No recent tracks"})]}),f.jsxs(BP,{children:[f.jsx(sa,{size:32}),f.jsxs(UP,{children:["More library features coming soon!",f.jsx("br",{}),"Stay tuned for playlists and more."]})]})]})]}),IP=b(O.div)`
  padding: 2rem;
  height: 100%;
  width: 100%;
`,FP=b.div`
  margin-bottom: 2rem;
`,OP=b.h1`
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.primary}};
  font-size: 2rem;
`,VP=b.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Fh=b.div`
  background: ${({theme:e})=>{var t;return(t=e.background)==null?void 0:t.secondary}};
  padding: 1.5rem;
  border-radius: 12px;
`,Oh=b.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.primary}};
  margin-bottom: 1rem;
`,Vh=b.h2`
  font-size: 1.2rem;
  font-weight: 600;
`,Bh=b.p`
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.secondary}};
  text-align: center;
  padding: 2rem;
`,BP=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${({theme:e})=>{var t;return(t=e.background)==null?void 0:t.secondary}};
  border-radius: 12px;
  color: ${({theme:e})=>{var t;return(t=e.text)==null?void 0:t.secondary}};
`,UP=b.p`
  text-align: center;
  line-height: 1.6;
  font-size: 1.1rem;
`,HP=e=>{if(!e||typeof e!="object")return!1;const t=e;return!!t.currentTheme&&typeof t.currentTheme=="object"&&"background"in t.currentTheme&&"text"in t.currentTheme&&"ui"in t.currentTheme},WP=()=>{const e=oi(),{state:t}=Va(),n=jd(),[r,i]=w.useState(!1);return w.useEffect(()=>{const o=()=>i(window.innerWidth<=768);return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),HP(n)?f.jsx(Eg,{theme:n.currentTheme,children:f.jsxs(YP,{children:[f.jsx(SP,{}),f.jsxs(XP,{$hasMobileControls:r,children:[f.jsxs(w8,{location:e,children:[f.jsx(Bn,{path:"/",element:t.explorerVisible&&f.jsx(hr,{style:{width:"100%"},children:f.jsx(gh,{})})}),f.jsx(Bn,{path:"/explorer",element:f.jsx(hr,{style:{width:"100%"},children:f.jsx(gh,{})})}),f.jsx(Bn,{path:"/community-upload",element:f.jsx(hr,{style:{width:"100%"},children:f.jsx(kP,{})})}),f.jsx(Bn,{path:"/settings",element:f.jsx(hr,{style:{width:"100%"},children:f.jsx("div",{children:"Settings Page (Coming Soon)"})})}),f.jsx(Bn,{path:"/search",element:f.jsx(hr,{style:{width:"100%"},children:f.jsx($P,{})})}),f.jsx(Bn,{path:"/library",element:f.jsx(hr,{style:{width:"100%"},children:f.jsx(NP,{})})})]}),f.jsx(qP,{children:f.jsx(kC,{})})]}),f.jsx(QP,{children:f.jsx(_t,{mode:"wait",children:r?f.jsx(JP,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},$theme:n.currentTheme,children:f.jsx(OC,{})},"mobile"):f.jsx(ZP,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},children:f.jsx(AE,{})},"desktop")})})]})}):(console.error("Theme validation failed:",JSON.stringify(n,null,2)),null)},GP=()=>f.jsx(Q3,{children:f.jsx(X3,{children:f.jsx(WP,{})})}),KP=()=>f.jsx(T8,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:f.jsx(oS,{children:f.jsx(GP,{})})}),YP=b.div.attrs(({theme:e})=>({style:{background:e.background.gradient}}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,XP=b.div.attrs(({$hasMobileControls:e})=>({style:{marginBottom:e?"54.2px":"32px"}}))`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: calc(100vh - 80px);
    padding: 0;
  }
`,hr=b(O.div).attrs(()=>({initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20}}))`
  flex: 1;
  width: 100%;
  height: 92%;
  overflow: hidden;
  margin-top: 0px;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;

  @media (max-width: 768px) {
    height: 100%;
    margin-top: 0;
    border-radius: 0px;
    border: none;
  }
`,qP=b.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  border-radius: 12px;
`,QP=b.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`,JP=b(O.div).attrs(({$theme:e})=>{var t;return{style:{background:((t=e==null?void 0:e.background)==null?void 0:t.secondary)||"rgba(0, 0, 0, 0.8)"}}})`
  pointer-events: auto;
  width: 100%;
  padding: 0;
  backdrop-filter: blur(20px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
`,ZP=b(O.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 15px 20px;
`;Il.createRoot(document.getElementById("root")).render(f.jsx(ue.StrictMode,{children:f.jsx(KP,{})}));
