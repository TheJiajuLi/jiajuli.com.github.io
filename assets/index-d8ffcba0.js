(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function p1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wp={exports:{}},Fs={},Gp={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),h1=Symbol.for("react.portal"),m1=Symbol.for("react.fragment"),g1=Symbol.for("react.strict_mode"),y1=Symbol.for("react.profiler"),v1=Symbol.for("react.provider"),x1=Symbol.for("react.context"),w1=Symbol.for("react.forward_ref"),b1=Symbol.for("react.suspense"),S1=Symbol.for("react.memo"),k1=Symbol.for("react.lazy"),nd=Symbol.iterator;function C1(e){return e===null||typeof e!="object"?null:(e=nd&&e[nd]||e["@@iterator"],typeof e=="function"?e:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kp=Object.assign,Xp={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Yp}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qp(){}Qp.prototype=Kr.prototype;function Mc(e,t,n){this.props=e,this.context=t,this.refs=Xp,this.updater=n||Yp}var Rc=Mc.prototype=new Qp;Rc.constructor=Mc;Kp(Rc,Kr.prototype);Rc.isPureReactComponent=!0;var rd=Array.isArray,qp=Object.prototype.hasOwnProperty,Lc={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qp.call(t,r)&&!Zp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ji,type:e,key:o,ref:s,props:i,_owner:Lc.current}}function P1(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function T1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var id=/\/+/g;function ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T1(""+e.key):t.toString(36)}function _o(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ji:case h1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ka(s,0):r,rd(i)?(n="",e!=null&&(n=e.replace(id,"$&/")+"/"),_o(i,t,n,"",function(c){return c})):i!=null&&(zc(i)&&(i=P1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(id,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",rd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ka(o,a);s+=_o(o,t,n,l,i)}else if(l=C1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ka(o,a++),s+=_o(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function uo(e,t,n){if(e==null)return e;var r=[],i=0;return _o(e,r,"","",function(o){return t.call(n,o,i++)}),r}function E1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Do={transition:null},A1={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Do,ReactCurrentOwner:Lc};function eh(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!zc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Kr;Y.Fragment=m1;Y.Profiler=y1;Y.PureComponent=Mc;Y.StrictMode=g1;Y.Suspense=b1;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1;Y.act=eh;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Lc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qp.call(t,l)&&!Zp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ji,type:e.type,key:i,ref:o,props:r,_owner:s}};Y.createContext=function(e){return e={$$typeof:x1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v1,_context:e},e.Consumer=e};Y.createElement=Jp;Y.createFactory=function(e){var t=Jp.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:w1,render:e}};Y.isValidElement=zc;Y.lazy=function(e){return{$$typeof:k1,_payload:{_status:-1,_result:e},_init:E1}};Y.memo=function(e,t){return{$$typeof:S1,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Do.transition;Do.transition={};try{e()}finally{Do.transition=t}};Y.unstable_act=eh;Y.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Y.useContext=function(e){return Ge.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Y.useId=function(){return Ge.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Y.useRef=function(e){return Ge.current.useRef(e)};Y.useState=function(e){return Ge.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ge.current.useTransition()};Y.version="18.3.1";Gp.exports=Y;var b=Gp.exports;const de=p1(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1=b,j1=Symbol.for("react.element"),M1=Symbol.for("react.fragment"),R1=Object.prototype.hasOwnProperty,L1=$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z1={key:!0,ref:!0,__self:!0,__source:!0};function th(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)R1.call(t,r)&&!z1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:j1,type:e,key:o,ref:s,props:i,_owner:L1.current}}Fs.Fragment=M1;Fs.jsx=th;Fs.jsxs=th;Wp.exports=Fs;var y=Wp.exports,hl={},nh={exports:{}},st={},rh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,z){var j=M.length;M.push(z);e:for(;0<j;){var A=j-1>>>1,I=M[A];if(0<i(I,z))M[A]=z,M[j]=I,j=A;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var z=M[0],j=M.pop();if(j!==z){M[0]=j;e:for(var A=0,I=M.length,ee=I>>>1;A<ee;){var Q=2*(A+1)-1,pe=M[Q],ie=Q+1,Se=M[ie];if(0>i(pe,j))ie<I&&0>i(Se,pe)?(M[A]=Se,M[ie]=j,A=ie):(M[A]=pe,M[Q]=j,A=Q);else if(ie<I&&0>i(Se,j))M[A]=Se,M[ie]=j,A=ie;else break e}}return z}function i(M,z){var j=M.sortIndex-z.sortIndex;return j!==0?j:M.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,m=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(M){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=M)r(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(c)}}function w(M){if(x=!1,p(M),!v)if(n(l)!==null)v=!0,F(C);else{var z=n(c);z!==null&&G(w,z.startTime-M)}}function C(M,z){v=!1,x&&(x=!1,g(E),E=-1),m=!0;var j=f;try{for(p(z),d=n(l);d!==null&&(!(d.expirationTime>z)||M&&!H());){var A=d.callback;if(typeof A=="function"){d.callback=null,f=d.priorityLevel;var I=A(d.expirationTime<=z);z=e.unstable_now(),typeof I=="function"?d.callback=I:d===n(l)&&r(l),p(z)}else r(l);d=n(l)}if(d!==null)var ee=!0;else{var Q=n(c);Q!==null&&G(w,Q.startTime-z),ee=!1}return ee}finally{d=null,f=j,m=!1}}var T=!1,P=null,E=-1,_=5,L=-1;function H(){return!(e.unstable_now()-L<_)}function W(){if(P!==null){var M=e.unstable_now();L=M;var z=!0;try{z=P(!0,M)}finally{z?K():(T=!1,P=null)}}else T=!1}var K;if(typeof h=="function")K=function(){h(W)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,fe=X.port2;X.port1.onmessage=W,K=function(){fe.postMessage(null)}}else K=function(){S(W,0)};function F(M){P=M,T||(T=!0,K())}function G(M,z){E=S(function(){M(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,F(C))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var j=f;f=z;try{return M()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var j=f;f=M;try{return z()}finally{f=j}},e.unstable_scheduleCallback=function(M,z,j){var A=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?A+j:A):j=A,M){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=j+I,M={id:u++,callback:z,priorityLevel:M,startTime:j,expirationTime:I,sortIndex:-1},j>A?(M.sortIndex=j,t(c,M),n(l)===null&&M===n(c)&&(x?(g(E),E=-1):x=!0,G(w,j-A))):(M.sortIndex=I,t(l,M),v||m||(v=!0,F(C))),M},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(M){var z=f;return function(){var j=f;f=z;try{return M.apply(this,arguments)}finally{f=j}}}})(ih);rh.exports=ih;var _1=rh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1=b,it=_1;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oh=new Set,Ri={};function tr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(Ri[e]=t,e=0;e<t.length;e++)oh.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,N1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od={},sd={};function I1(e){return ml.call(sd,e)?!0:ml.call(od,e)?!1:N1.test(e)?sd[e]=!0:(od[e]=!0,!1)}function O1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V1(e,t,n,r){if(t===null||typeof t>"u"||O1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var _c=/[\-:]([a-z])/g;function Dc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_c,Dc);De[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_c,Dc);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_c,Dc);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nc(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V1(t,n,i,r)&&(n=null),r||i===null?I1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),ur=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),Ic=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),sh=Symbol.for("react.provider"),ah=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),Vc=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),lh=Symbol.for("react.offscreen"),ad=Symbol.iterator;function Jr(e){return e===null||typeof e!="object"?null:(e=ad&&e[ad]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Ca;function ui(e){if(Ca===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ca=t&&t[1]||""}return`
`+Ca+e}var Pa=!1;function Ta(e,t){if(!e||Pa)return"";Pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function F1(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case ur:return"Portal";case gl:return"Profiler";case Ic:return"StrictMode";case yl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ah:return(e.displayName||"Context")+".Consumer";case sh:return(e._context.displayName||"Context")+".Provider";case Oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vc:return t=e.displayName||null,t!==null?t:xl(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return xl(e(t))}catch{}}return null}function B1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(t);case 8:return t===Ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ch(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H1(e){var t=ch(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=H1(e))}function uh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ch(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wl(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ld(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dh(e,t){t=t.checked,t!=null&&Nc(e,"checked",t,!1)}function bl(e,t){dh(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sl(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sl(e,t,n){(t!=="number"||rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var di=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(di(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function fh(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ph(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ph(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U1=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){U1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function mh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function gh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var W1=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(W1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Ar=null,$r=null;function fd(e){if(e=no(e)){if(typeof Al!="function")throw Error($(280));var t=e.stateNode;t&&(t=Gs(t),Al(e.stateNode,e.type,t))}}function yh(e){Ar?$r?$r.push(e):$r=[e]:Ar=e}function vh(){if(Ar){var e=Ar,t=$r;if($r=Ar=null,fd(e),t)for(e=0;e<t.length;e++)fd(t[e])}}function xh(e,t){return e(t)}function wh(){}var Ea=!1;function bh(e,t,n){if(Ea)return e(t,n);Ea=!0;try{return xh(e,t,n)}finally{Ea=!1,(Ar!==null||$r!==null)&&(wh(),vh())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=Gs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var $l=!1;if(Yt)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){$l=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{$l=!1}function G1(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var yi=!1,is=null,os=!1,jl=null,Y1={onError:function(e){yi=!0,is=e}};function K1(e,t,n,r,i,o,s,a,l){yi=!1,is=null,G1.apply(Y1,arguments)}function X1(e,t,n,r,i,o,s,a,l){if(K1.apply(this,arguments),yi){if(yi){var c=is;yi=!1,is=null}else throw Error($(198));os||(os=!0,jl=c)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pd(e){if(nr(e)!==e)throw Error($(188))}function Q1(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pd(i),e;if(o===r)return pd(i),t;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function kh(e){return e=Q1(e),e!==null?Ch(e):null}function Ch(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ch(e);if(t!==null)return t;e=e.sibling}return null}var Ph=it.unstable_scheduleCallback,hd=it.unstable_cancelCallback,q1=it.unstable_shouldYield,Z1=it.unstable_requestPaint,be=it.unstable_now,J1=it.unstable_getCurrentPriorityLevel,Bc=it.unstable_ImmediatePriority,Th=it.unstable_UserBlockingPriority,ss=it.unstable_NormalPriority,ey=it.unstable_LowPriority,Eh=it.unstable_IdlePriority,Bs=null,Lt=null;function ty(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Bs,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:iy,ny=Math.log,ry=Math.LN2;function iy(e){return e>>>=0,e===0?32:31-(ny(e)/ry|0)|0}var mo=64,go=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function as(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=fi(a):(o&=s,o!==0&&(r=fi(o)))}else s=n&~i,s!==0?r=fi(s):o!==0&&(r=fi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function oy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-kt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=oy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ah(){var e=mo;return mo<<=1,!(mo&4194240)&&(mo=64),e}function Aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function ay(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Hc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ne=0;function $h(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jh,Uc,Mh,Rh,Lh,Rl=!1,yo=[],fn=null,pn=null,hn=null,_i=new Map,Di=new Map,ln=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function ti(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=no(t),t!==null&&Uc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cy(e,t,n,r,i){switch(t){case"focusin":return fn=ti(fn,e,t,n,r,i),!0;case"dragenter":return pn=ti(pn,e,t,n,r,i),!0;case"mouseover":return hn=ti(hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _i.set(o,ti(_i.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Di.set(o,ti(Di.get(o)||null,e,t,n,r,i)),!0}return!1}function zh(e){var t=Fn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=Sh(n),t!==null){e.blockedOn=t,Lh(e.priority,function(){Mh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=no(n),t!==null&&Uc(t),e.blockedOn=n,!1;t.shift()}return!0}function gd(e,t,n){No(e)&&n.delete(t)}function uy(){Rl=!1,fn!==null&&No(fn)&&(fn=null),pn!==null&&No(pn)&&(pn=null),hn!==null&&No(hn)&&(hn=null),_i.forEach(gd),Di.forEach(gd)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,uy)))}function Ni(e){function t(i){return ni(i,e)}if(0<yo.length){ni(yo[0],e);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&ni(fn,e),pn!==null&&ni(pn,e),hn!==null&&ni(hn,e),_i.forEach(t),Di.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&ln.shift()}var jr=qt.ReactCurrentBatchConfig,ls=!0;function dy(e,t,n,r){var i=ne,o=jr.transition;jr.transition=null;try{ne=1,Wc(e,t,n,r)}finally{ne=i,jr.transition=o}}function fy(e,t,n,r){var i=ne,o=jr.transition;jr.transition=null;try{ne=4,Wc(e,t,n,r)}finally{ne=i,jr.transition=o}}function Wc(e,t,n,r){if(ls){var i=Ll(e,t,n,r);if(i===null)Ia(e,t,r,cs,n),md(e,r);else if(cy(i,e,t,n,r))r.stopPropagation();else if(md(e,r),t&4&&-1<ly.indexOf(e)){for(;i!==null;){var o=no(i);if(o!==null&&jh(o),o=Ll(e,t,n,r),o===null&&Ia(e,t,r,cs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ia(e,t,r,null,n)}}var cs=null;function Ll(e,t,n,r){if(cs=null,e=Fc(r),e=Fn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cs=e,null}function _h(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J1()){case Bc:return 1;case Th:return 4;case ss:case ey:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var un=null,Gc=null,Io=null;function Dh(){if(Io)return Io;var e,t=Gc,n=t.length,r,i="value"in un?un.value:un.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Io=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function yd(){return!1}function at(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vo:yd,this.isPropagationStopped=yd,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=at(Xr),to=ye({},Xr,{view:0,detail:0}),py=at(to),$a,ja,ri,Hs=ye({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?($a=e.screenX-ri.screenX,ja=e.screenY-ri.screenY):ja=$a=0,ri=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),vd=at(Hs),hy=ye({},Hs,{dataTransfer:0}),my=at(hy),gy=ye({},to,{relatedTarget:0}),Ma=at(gy),yy=ye({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=at(yy),xy=ye({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wy=at(xy),by=ye({},Xr,{data:0}),xd=at(by),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Py(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cy[e])?!!t[e]:!1}function Kc(){return Py}var Ty=ye({},to,{key:function(e){if(e.key){var t=Sy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ky[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ey=at(Ty),Ay=ye({},Hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=at(Ay),$y=ye({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),jy=at($y),My=ye({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ry=at(My),Ly=ye({},Hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=at(Ly),_y=[9,13,27,32],Xc=Yt&&"CompositionEvent"in window,vi=null;Yt&&"documentMode"in document&&(vi=document.documentMode);var Dy=Yt&&"TextEvent"in window&&!vi,Nh=Yt&&(!Xc||vi&&8<vi&&11>=vi),bd=String.fromCharCode(32),Sd=!1;function Ih(e,t){switch(e){case"keyup":return _y.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function Ny(e,t){switch(e){case"compositionend":return Oh(t);case"keypress":return t.which!==32?null:(Sd=!0,bd);case"textInput":return e=t.data,e===bd&&Sd?null:e;default:return null}}function Iy(e,t){if(fr)return e==="compositionend"||!Xc&&Ih(e,t)?(e=Dh(),Io=Gc=un=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nh&&t.locale!=="ko"?null:t.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oy[e.type]:t==="textarea"}function Vh(e,t,n,r){yh(r),t=us(t,"onChange"),0<t.length&&(n=new Yc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,Ii=null;function Vy(e){qh(e,0)}function Us(e){var t=mr(e);if(uh(t))return e}function Fy(e,t){if(e==="change")return t}var Fh=!1;if(Yt){var Ra;if(Yt){var La="oninput"in document;if(!La){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),La=typeof Cd.oninput=="function"}Ra=La}else Ra=!1;Fh=Ra&&(!document.documentMode||9<document.documentMode)}function Pd(){xi&&(xi.detachEvent("onpropertychange",Bh),Ii=xi=null)}function Bh(e){if(e.propertyName==="value"&&Us(Ii)){var t=[];Vh(t,Ii,e,Fc(e)),bh(Vy,t)}}function By(e,t,n){e==="focusin"?(Pd(),xi=t,Ii=n,xi.attachEvent("onpropertychange",Bh)):e==="focusout"&&Pd()}function Hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(Ii)}function Uy(e,t){if(e==="click")return Us(t)}function Wy(e,t){if(e==="input"||e==="change")return Us(t)}function Gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Gy;function Oi(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ml.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=Td(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Td(n)}}function Hh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uh(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rs(e.document)}return t}function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yy(e){var t=Uh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hh(n.ownerDocument.documentElement,n)){if(r!==null&&Qc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ed(n,o);var s=Ed(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ky=Yt&&"documentMode"in document&&11>=document.documentMode,pr=null,zl=null,wi=null,_l=!1;function Ad(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||pr==null||pr!==rs(r)||(r=pr,"selectionStart"in r&&Qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Oi(wi,r)||(wi=r,r=us(zl,"onSelect"),0<r.length&&(t=new Yc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},za={},Wh={};Yt&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Ws(e){if(za[e])return za[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wh)return za[e]=t[n];return e}var Gh=Ws("animationend"),Yh=Ws("animationiteration"),Kh=Ws("animationstart"),Xh=Ws("transitionend"),Qh=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){Qh.set(e,t),tr(t,[e])}for(var _a=0;_a<$d.length;_a++){var Da=$d[_a],Xy=Da.toLowerCase(),Qy=Da[0].toUpperCase()+Da.slice(1);Mn(Xy,"on"+Qy)}Mn(Gh,"onAnimationEnd");Mn(Yh,"onAnimationIteration");Mn(Kh,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Xh,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function jd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,X1(r,t,void 0,e),e.currentTarget=null}function qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;jd(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;jd(i,a,c),o=l}}}if(os)throw e=jl,os=!1,jl=null,e}function ae(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(Zh(t,e,2,!1),n.add(r))}function Na(e,t,n){var r=0;t&&(r|=4),Zh(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[wo]){e[wo]=!0,oh.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||Na(n,!1,e),Na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,Na("selectionchange",!1,t))}}function Zh(e,t,n,r){switch(_h(t)){case 1:var i=dy;break;case 4:i=fy;break;default:i=Wc}n=i.bind(null,t,n,e),i=void 0,!$l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ia(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Fn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bh(function(){var c=o,u=Fc(n),d=[];e:{var f=Qh.get(e);if(f!==void 0){var m=Yc,v=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":m=Ey;break;case"focusin":v="focus",m=Ma;break;case"focusout":v="blur",m=Ma;break;case"beforeblur":case"afterblur":m=Ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=jy;break;case Gh:case Yh:case Kh:m=vy;break;case Xh:m=Ry;break;case"scroll":m=py;break;case"wheel":m=zy;break;case"copy":case"cut":case"paste":m=wy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wd}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var h=c,p;h!==null;){p=h;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,g!==null&&(w=zi(h,g),w!=null&&x.push(Fi(h,w,p)))),S)break;h=h.return}0<x.length&&(f=new m(f,v,null,n,u),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==El&&(v=n.relatedTarget||n.fromElement)&&(Fn(v)||v[Kt]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Fn(v):null,v!==null&&(S=nr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(x=vd,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=wd,w="onPointerLeave",g="onPointerEnter",h="pointer"),S=m==null?f:mr(m),p=v==null?f:mr(v),f=new x(w,h+"leave",m,n,u),f.target=S,f.relatedTarget=p,w=null,Fn(u)===c&&(x=new x(g,h+"enter",v,n,u),x.target=p,x.relatedTarget=S,w=x),S=w,m&&v)t:{for(x=m,g=v,h=0,p=x;p;p=ar(p))h++;for(p=0,w=g;w;w=ar(w))p++;for(;0<h-p;)x=ar(x),h--;for(;0<p-h;)g=ar(g),p--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=ar(x),g=ar(g)}x=null}else x=null;m!==null&&Md(d,f,m,x,!1),v!==null&&S!==null&&Md(d,S,v,x,!0)}}e:{if(f=c?mr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Fy;else if(kd(f))if(Fh)C=Wy;else{C=Hy;var T=By}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Uy);if(C&&(C=C(e,c))){Vh(d,C,n,u);break e}T&&T(e,f,c),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Sl(f,"number",f.value)}switch(T=c?mr(c):window,e){case"focusin":(kd(T)||T.contentEditable==="true")&&(pr=T,zl=c,wi=null);break;case"focusout":wi=zl=pr=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ad(d,n,u);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":Ad(d,n,u)}var P;if(Xc)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fr?Ih(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Nh&&n.locale!=="ko"&&(fr||E!=="onCompositionStart"?E==="onCompositionEnd"&&fr&&(P=Dh()):(un=u,Gc="value"in un?un.value:un.textContent,fr=!0)),T=us(c,E),0<T.length&&(E=new xd(E,e,null,n,u),d.push({event:E,listeners:T}),P?E.data=P:(P=Oh(n),P!==null&&(E.data=P)))),(P=Dy?Ny(e,n):Iy(e,n))&&(c=us(c,"onBeforeInput"),0<c.length&&(u=new xd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=P))}qh(d,t)})}function Fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zi(e,n),o!=null&&r.unshift(Fi(e,o,i)),o=zi(e,t),o!=null&&r.push(Fi(e,o,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Md(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=zi(n,o),l!=null&&s.unshift(Fi(n,l,a))):i||(l=zi(n,o),l!=null&&s.push(Fi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Zy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function Rd(e){return(typeof e=="string"?e:""+e).replace(Zy,`
`).replace(Jy,"")}function bo(e,t,n){if(t=Rd(t),Rd(e)!==t&&n)throw Error($(425))}function ds(){}var Dl=null,Nl=null;function Il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(e){return Ld.resolve(null).then(e).catch(nv)}:Ol;function nv(e){setTimeout(function(){throw e})}function Oa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Qr,Bi="__reactProps$"+Qr,Kt="__reactContainer$"+Qr,Vl="__reactEvents$"+Qr,rv="__reactListeners$"+Qr,iv="__reactHandles$"+Qr;function Fn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zd(e);e!==null;){if(n=e[Mt])return n;e=zd(e)}return t}e=n,n=e.parentNode}return null}function no(e){return e=e[Mt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Gs(e){return e[Bi]||null}var Fl=[],gr=-1;function Rn(e){return{current:e}}function ce(e){0>gr||(e.current=Fl[gr],Fl[gr]=null,gr--)}function se(e,t){gr++,Fl[gr]=e.current,e.current=t}var En={},Fe=Rn(En),qe=Rn(!1),Xn=En;function zr(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function fs(){ce(qe),ce(Fe)}function _d(e,t,n){if(Fe.current!==En)throw Error($(168));se(Fe,t),se(qe,n)}function Jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,B1(e)||"Unknown",i));return ye({},n,r)}function ps(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Xn=Fe.current,se(Fe,e),se(qe,qe.current),!0}function Dd(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Jh(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,ce(qe),ce(Fe),se(Fe,e)):ce(qe),se(qe,n)}var Ft=null,Ys=!1,Va=!1;function e0(e){Ft===null?Ft=[e]:Ft.push(e)}function ov(e){Ys=!0,e0(e)}function Ln(){if(!Va&&Ft!==null){Va=!0;var e=0,t=ne;try{var n=Ft;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ys=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),Ph(Bc,Ln),i}finally{ne=t,Va=!1}}return null}var yr=[],vr=0,hs=null,ms=0,dt=[],ft=0,Qn=null,Bt=1,Ht="";function Dn(e,t){yr[vr++]=ms,yr[vr++]=hs,hs=e,ms=t}function t0(e,t,n){dt[ft++]=Bt,dt[ft++]=Ht,dt[ft++]=Qn,Qn=e;var r=Bt;e=Ht;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var o=32-kt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Bt=1<<32-kt(t)+i|n<<i|r,Ht=o+e}else Bt=1<<o|n<<i|r,Ht=e}function qc(e){e.return!==null&&(Dn(e,1),t0(e,1,0))}function Zc(e){for(;e===hs;)hs=yr[--vr],yr[vr]=null,ms=yr[--vr],yr[vr]=null;for(;e===Qn;)Qn=dt[--ft],dt[ft]=null,Ht=dt[--ft],dt[ft]=null,Bt=dt[--ft],dt[ft]=null}var rt=null,nt=null,ue=!1,bt=null;function n0(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Bt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(ue){var t=nt;if(t){var n=t;if(!Nd(e,t)){if(Bl(e))throw Error($(418));t=mn(n.nextSibling);var r=rt;t&&Nd(e,t)?n0(r,n):(e.flags=e.flags&-4097|2,ue=!1,rt=e)}}else{if(Bl(e))throw Error($(418));e.flags=e.flags&-4097|2,ue=!1,rt=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function So(e){if(e!==rt)return!1;if(!ue)return Id(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Il(e.type,e.memoizedProps)),t&&(t=nt)){if(Bl(e))throw r0(),Error($(418));for(;t;)n0(e,t),t=mn(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?mn(e.stateNode.nextSibling):null;return!0}function r0(){for(var e=nt;e;)e=mn(e.nextSibling)}function _r(){nt=rt=null,ue=!1}function Jc(e){bt===null?bt=[e]:bt.push(e)}var sv=qt.ReactCurrentBatchConfig;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Od(e){var t=e._init;return t(e._payload)}function i0(e){function t(g,h){if(e){var p=g.deletions;p===null?(g.deletions=[h],g.flags|=16):p.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=xn(g,h),g.index=0,g.sibling=null,g}function o(g,h,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<h?(g.flags|=2,h):p):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,p,w){return h===null||h.tag!==6?(h=Ya(p,g.mode,w),h.return=g,h):(h=i(h,p),h.return=g,h)}function l(g,h,p,w){var C=p.type;return C===dr?u(g,h,p.props.children,w,p.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===on&&Od(C)===h.type)?(w=i(h,p.props),w.ref=ii(g,h,p),w.return=g,w):(w=Go(p.type,p.key,p.props,null,g.mode,w),w.ref=ii(g,h,p),w.return=g,w)}function c(g,h,p,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Ka(p,g.mode,w),h.return=g,h):(h=i(h,p.children||[]),h.return=g,h)}function u(g,h,p,w,C){return h===null||h.tag!==7?(h=Yn(p,g.mode,w,C),h.return=g,h):(h=i(h,p),h.return=g,h)}function d(g,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ya(""+h,g.mode,p),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fo:return p=Go(h.type,h.key,h.props,null,g.mode,p),p.ref=ii(g,null,h),p.return=g,p;case ur:return h=Ka(h,g.mode,p),h.return=g,h;case on:var w=h._init;return d(g,w(h._payload),p)}if(di(h)||Jr(h))return h=Yn(h,g.mode,p,null),h.return=g,h;ko(g,h)}return null}function f(g,h,p,w){var C=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(g,h,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fo:return p.key===C?l(g,h,p,w):null;case ur:return p.key===C?c(g,h,p,w):null;case on:return C=p._init,f(g,h,C(p._payload),w)}if(di(p)||Jr(p))return C!==null?null:u(g,h,p,w,null);ko(g,p)}return null}function m(g,h,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(p)||null,a(h,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fo:return g=g.get(w.key===null?p:w.key)||null,l(h,g,w,C);case ur:return g=g.get(w.key===null?p:w.key)||null,c(h,g,w,C);case on:var T=w._init;return m(g,h,p,T(w._payload),C)}if(di(w)||Jr(w))return g=g.get(p)||null,u(h,g,w,C,null);ko(h,w)}return null}function v(g,h,p,w){for(var C=null,T=null,P=h,E=h=0,_=null;P!==null&&E<p.length;E++){P.index>E?(_=P,P=null):_=P.sibling;var L=f(g,P,p[E],w);if(L===null){P===null&&(P=_);break}e&&P&&L.alternate===null&&t(g,P),h=o(L,h,E),T===null?C=L:T.sibling=L,T=L,P=_}if(E===p.length)return n(g,P),ue&&Dn(g,E),C;if(P===null){for(;E<p.length;E++)P=d(g,p[E],w),P!==null&&(h=o(P,h,E),T===null?C=P:T.sibling=P,T=P);return ue&&Dn(g,E),C}for(P=r(g,P);E<p.length;E++)_=m(P,g,E,p[E],w),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?E:_.key),h=o(_,h,E),T===null?C=_:T.sibling=_,T=_);return e&&P.forEach(function(H){return t(g,H)}),ue&&Dn(g,E),C}function x(g,h,p,w){var C=Jr(p);if(typeof C!="function")throw Error($(150));if(p=C.call(p),p==null)throw Error($(151));for(var T=C=null,P=h,E=h=0,_=null,L=p.next();P!==null&&!L.done;E++,L=p.next()){P.index>E?(_=P,P=null):_=P.sibling;var H=f(g,P,L.value,w);if(H===null){P===null&&(P=_);break}e&&P&&H.alternate===null&&t(g,P),h=o(H,h,E),T===null?C=H:T.sibling=H,T=H,P=_}if(L.done)return n(g,P),ue&&Dn(g,E),C;if(P===null){for(;!L.done;E++,L=p.next())L=d(g,L.value,w),L!==null&&(h=o(L,h,E),T===null?C=L:T.sibling=L,T=L);return ue&&Dn(g,E),C}for(P=r(g,P);!L.done;E++,L=p.next())L=m(P,g,E,L.value,w),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?E:L.key),h=o(L,h,E),T===null?C=L:T.sibling=L,T=L);return e&&P.forEach(function(W){return t(g,W)}),ue&&Dn(g,E),C}function S(g,h,p,w){if(typeof p=="object"&&p!==null&&p.type===dr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fo:e:{for(var C=p.key,T=h;T!==null;){if(T.key===C){if(C=p.type,C===dr){if(T.tag===7){n(g,T.sibling),h=i(T,p.props.children),h.return=g,g=h;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===on&&Od(C)===T.type){n(g,T.sibling),h=i(T,p.props),h.ref=ii(g,T,p),h.return=g,g=h;break e}n(g,T);break}else t(g,T);T=T.sibling}p.type===dr?(h=Yn(p.props.children,g.mode,w,p.key),h.return=g,g=h):(w=Go(p.type,p.key,p.props,null,g.mode,w),w.ref=ii(g,h,p),w.return=g,g=w)}return s(g);case ur:e:{for(T=p.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(g,h.sibling),h=i(h,p.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Ka(p,g.mode,w),h.return=g,g=h}return s(g);case on:return T=p._init,S(g,h,T(p._payload),w)}if(di(p))return v(g,h,p,w);if(Jr(p))return x(g,h,p,w);ko(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,p),h.return=g,g=h):(n(g,h),h=Ya(p,g.mode,w),h.return=g,g=h),s(g)):n(g,h)}return S}var Dr=i0(!0),o0=i0(!1),gs=Rn(null),ys=null,xr=null,eu=null;function tu(){eu=xr=ys=null}function nu(e){var t=gs.current;ce(gs),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){ys=e,eu=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(eu!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(ys===null)throw Error($(308));xr=e,ys.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Bn=null;function ru(e){Bn===null?Bn=[e]:Bn.push(e)}function s0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ru(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,ru(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hc(e,n)}}function Vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vs(e,t,n,r){var i=e.updateQueue;sn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=ye({},d,f);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Zn|=s,e.lanes=s,e.memoizedState=d}}function Fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ro={},zt=Rn(ro),Hi=Rn(ro),Ui=Rn(ro);function Hn(e){if(e===ro)throw Error($(174));return e}function ou(e,t){switch(se(Ui,t),se(Hi,e),se(zt,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}ce(zt),se(zt,t)}function Nr(){ce(zt),ce(Hi),ce(Ui)}function l0(e){Hn(Ui.current);var t=Hn(zt.current),n=Cl(t,e.type);t!==n&&(se(Hi,e),se(zt,n))}function su(e){Hi.current===e&&(ce(zt),ce(Hi))}var he=Rn(0);function xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa=[];function au(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var Fo=qt.ReactCurrentDispatcher,Ba=qt.ReactCurrentBatchConfig,qn=0,ge=null,Ee=null,je=null,ws=!1,bi=!1,Wi=0,av=0;function Ne(){throw Error($(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function cu(e,t,n,r,i,o){if(qn=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?dv:fv,e=n(r,i),bi){o=0;do{if(bi=!1,Wi=0,25<=o)throw Error($(301));o+=1,je=Ee=null,t.updateQueue=null,Fo.current=pv,e=n(r,i)}while(bi)}if(Fo.current=bs,t=Ee!==null&&Ee.next!==null,qn=0,je=Ee=ge=null,ws=!1,t)throw Error($(300));return e}function uu(){var e=Wi!==0;return Wi=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ge.memoizedState=je=e:je=je.next=e,je}function gt(){if(Ee===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=je===null?ge.memoizedState:je.next;if(t!==null)je=t,Ee=e;else{if(e===null)throw Error($(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},je===null?ge.memoizedState=je=e:je=je.next=e}return je}function Gi(e,t){return typeof t=="function"?t(e):t}function Ha(e){var t=gt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((qn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,ge.lanes|=u,Zn|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Tt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,Zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ua(e){var t=gt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Tt(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function c0(){}function u0(e,t){var n=ge,r=gt(),i=t(),o=!Tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Qe=!0),r=r.queue,du(p0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Yi(9,f0.bind(null,n,r,i,t),void 0,null),Le===null)throw Error($(349));qn&30||d0(n,t,i)}return i}function d0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f0(e,t,n,r){t.value=n,t.getSnapshot=r,h0(t)&&m0(e)}function p0(e,t,n){return n(function(){h0(t)&&m0(e)})}function h0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function m0(e){var t=Xt(e,1);t!==null&&Ct(t,e,1,-1)}function Bd(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=uv.bind(null,ge,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function g0(){return gt().memoizedState}function Bo(e,t,n,r){var i=$t();ge.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function Ks(e,t,n,r){var i=gt();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var s=Ee.memoizedState;if(o=s.destroy,r!==null&&lu(r,s.deps)){i.memoizedState=Yi(t,n,o,r);return}}ge.flags|=e,i.memoizedState=Yi(1|t,n,o,r)}function Hd(e,t){return Bo(8390656,8,e,t)}function du(e,t){return Ks(2048,8,e,t)}function y0(e,t){return Ks(4,2,e,t)}function v0(e,t){return Ks(4,4,e,t)}function x0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w0(e,t,n){return n=n!=null?n.concat([e]):null,Ks(4,4,x0.bind(null,t,e),n)}function fu(){}function b0(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function S0(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function k0(e,t,n){return qn&21?(Tt(n,t)||(n=Ah(),ge.lanes|=n,Zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function lv(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=Ba.transition;Ba.transition={};try{e(!1),t()}finally{ne=n,Ba.transition=r}}function C0(){return gt().memoizedState}function cv(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P0(e))T0(t,n);else if(n=s0(e,t,n,r),n!==null){var i=We();Ct(n,e,r,i),E0(n,t,r)}}function uv(e,t,n){var r=vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P0(e))T0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,s)){var l=t.interleaved;l===null?(i.next=i,ru(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=s0(e,t,i,r),n!==null&&(i=We(),Ct(n,e,r,i),E0(n,t,r))}}function P0(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function T0(e,t){bi=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hc(e,n)}}var bs={readContext:mt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},dv={readContext:mt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4194308,4,x0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bo(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cv.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Bd,useDebugValue:fu,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Bd(!1),t=e[0];return e=lv.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=$t();if(ue){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Le===null)throw Error($(349));qn&30||d0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hd(p0.bind(null,r,o,e),[e]),r.flags|=2048,Yi(9,f0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=Le.identifierPrefix;if(ue){var n=Ht,r=Bt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=av++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fv={readContext:mt,useCallback:b0,useContext:mt,useEffect:du,useImperativeHandle:w0,useInsertionEffect:y0,useLayoutEffect:v0,useMemo:S0,useReducer:Ha,useRef:g0,useState:function(){return Ha(Gi)},useDebugValue:fu,useDeferredValue:function(e){var t=gt();return k0(t,Ee.memoizedState,e)},useTransition:function(){var e=Ha(Gi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:u0,useId:C0,unstable_isNewReconciler:!1},pv={readContext:mt,useCallback:b0,useContext:mt,useEffect:du,useImperativeHandle:w0,useInsertionEffect:y0,useLayoutEffect:v0,useMemo:S0,useReducer:Ua,useRef:g0,useState:function(){return Ua(Gi)},useDebugValue:fu,useDeferredValue:function(e){var t=gt();return Ee===null?t.memoizedState=e:k0(t,Ee.memoizedState,e)},useTransition:function(){var e=Ua(Gi)[0],t=gt().memoizedState;return[e,t]},useMutableSource:c0,useSyncExternalStore:u0,useId:C0,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xs={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=vn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(Ct(t,e,i,r),Vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=vn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gn(e,o,i),t!==null&&(Ct(t,e,i,r),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=vn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(Ct(t,e,r,n),Vo(t,e,r))}};function Ud(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function A0(e,t,n){var r=!1,i=En,o=t.contextType;return typeof o=="object"&&o!==null?o=mt(o):(i=Ze(t)?Xn:Fe.current,r=t.contextTypes,o=(r=r!=null)?zr(e,i):En),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function Gl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},iu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mt(o):(o=Ze(t)?Xn:Fe.current,i.context=zr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xs.enqueueReplaceState(i,i.state,null),vs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=F1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hv=typeof WeakMap=="function"?WeakMap:Map;function $0(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ks||(ks=!0,rc=r),Yl(e,t)},n}function j0(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Yl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yl(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Gd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Av.bind(null,e,t,n),t.then(e,e))}function Yd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var mv=qt.ReactCurrentOwner,Qe=!1;function Ue(e,t,n,r){t.child=e===null?o0(t,null,n,r):Dr(t,e.child,n,r)}function Xd(e,t,n,r,i){n=n.render;var o=t.ref;return Mr(t,i),r=cu(e,t,n,r,o,i),n=uu(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(ue&&n&&qc(t),t.flags|=1,Ue(e,t,r,i),t.child)}function Qd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!wu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,M0(e,t,o,r,i)):(e=Go(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(s,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=xn(o,r),e.ref=t.ref,e.return=t,t.child=e}function M0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return Kl(e,t,n,r,i)}function R0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(br,tt),tt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(br,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(br,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(br,tt),tt|=r;return Ue(e,t,i,n),t.child}function L0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,i){var o=Ze(n)?Xn:Fe.current;return o=zr(t,o),Mr(t,i),n=cu(e,t,n,r,o,i),r=uu(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(ue&&r&&qc(t),t.flags|=1,Ue(e,t,n,i),t.child)}function qd(e,t,n,r,i){if(Ze(n)){var o=!0;ps(t)}else o=!1;if(Mr(t,i),t.stateNode===null)Ho(e,t),A0(t,n,r),Gl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=mt(c):(c=Ze(n)?Xn:Fe.current,c=zr(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Wd(t,s,r,c),sn=!1;var f=t.memoizedState;s.state=f,vs(t,r,s,i),l=t.memoizedState,a!==r||f!==l||qe.current||sn?(typeof u=="function"&&(Wl(t,n,u,r),l=t.memoizedState),(a=sn||Ud(t,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,a0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:xt(t.type,a),s.props=c,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=mt(l):(l=Ze(n)?Xn:Fe.current,l=zr(t,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Wd(t,s,r,l),sn=!1,f=t.memoizedState,s.state=f,vs(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||qe.current||sn?(typeof m=="function"&&(Wl(t,n,m,r),v=t.memoizedState),(c=sn||Ud(t,n,c,r,f,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,o,i)}function Xl(e,t,n,r,i,o){L0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Dd(t,n,!1),Qt(e,t,o);r=t.stateNode,mv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Dr(t,e.child,null,o),t.child=Dr(t,null,a,o)):Ue(e,t,a,o),t.memoizedState=r.state,i&&Dd(t,n,!0),t.child}function z0(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),ou(e,t.containerInfo)}function Zd(e,t,n,r,i){return _r(),Jc(i),t.flags|=256,Ue(e,t,n,r),t.child}var Ql={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function _0(e,t,n){var r=t.pendingProps,i=he.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(he,i&1),e===null)return Hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zs(s,r,0,null),e=Yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ql(n),t.memoizedState=Ql,e):pu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=xn(a,o):(o=Yn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ql(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ql,r}return o=e.child,e=o.sibling,r=xn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pu(e,t){return t=Zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&Jc(r),Dr(t,e.child,null,n),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Wa(Error($(422))),Co(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Zs({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dr(t,e.child,null,s),t.child.memoizedState=ql(s),t.memoizedState=Ql,o);if(!(t.mode&1))return Co(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error($(419)),r=Wa(o,r,void 0),Co(e,t,s,r)}if(a=(s&e.childLanes)!==0,Qe||a){if(r=Le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xt(e,i),Ct(r,e,i,-1))}return xu(),r=Wa(Error($(421))),Co(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$v.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nt=mn(i.nextSibling),rt=t,ue=!0,bt=null,e!==null&&(dt[ft++]=Bt,dt[ft++]=Ht,dt[ft++]=Qn,Bt=e.id,Ht=e.overflow,Qn=t),t=pu(t,r.children),t.flags|=4096,t)}function Jd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function Ga(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function D0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ue(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,n,t);else if(e.tag===19)Jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&xs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ga(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ga(t,!0,n,null,o);break;case"together":Ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yv(e,t,n){switch(t.tag){case 3:z0(t),_r();break;case 5:l0(t);break;case 1:Ze(t.type)&&ps(t);break;case 4:ou(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(gs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?_0(e,t,n):(se(he,he.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return D0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,R0(e,t,n)}return Qt(e,t,n)}var N0,Zl,I0,O0;N0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zl=function(){};I0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Hn(zt.current);var o=null;switch(n){case"input":i=wl(e,i),r=wl(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=kl(e,i),r=kl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ds)}Pl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ri.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ae("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};O0=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vv(e,t,n){var r=t.pendingProps;switch(Zc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ze(t.type)&&fs(),Ie(t),null;case 3:return r=t.stateNode,Nr(),ce(qe),ce(Fe),au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(sc(bt),bt=null))),Zl(e,t),Ie(t),null;case 5:su(t);var i=Hn(Ui.current);if(n=t.type,e!==null&&t.stateNode!=null)I0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Ie(t),null}if(e=Hn(zt.current),So(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[Bi]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)ae(pi[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":ld(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":ud(r,o),ae("invalid",r)}Pl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,a,e),i=["children",""+a]):Ri.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ae("scroll",r)}switch(n){case"input":po(r),cd(r,o,!0);break;case"textarea":po(r),dd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ds)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ph(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Mt]=t,e[Bi]=r,N0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Tl(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)ae(pi[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":ld(e,r),i=wl(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ae("invalid",e);break;case"textarea":ud(e,r),i=kl(e,r),ae("invalid",e);break;default:i=r}Pl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?gh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Li(e,l):typeof l=="number"&&Li(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ri.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ae("scroll",e):l!=null&&Nc(e,o,l,s))}switch(n){case"input":po(e),cd(e,r,!1);break;case"textarea":po(e),dd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Er(e,!!r.multiple,o,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ds)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)O0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Hn(Ui.current),Hn(zt.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Ie(t),null;case 13:if(ce(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&nt!==null&&t.mode&1&&!(t.flags&128))r0(),_r(),t.flags|=98560,o=!1;else if(o=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Mt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else bt!==null&&(sc(bt),bt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Ae===0&&(Ae=3):xu())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Nr(),Zl(e,t),e===null&&Vi(t.stateNode.containerInfo),Ie(t),null;case 10:return nu(t.type._context),Ie(t),null;case 17:return Ze(t.type)&&fs(),Ie(t),null;case 19:if(ce(he),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)oi(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=xs(e),s!==null){for(t.flags|=128,oi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(he,he.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>Or&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304)}else{if(!r)if(e=xs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ue)return Ie(t),null}else 2*be()-o.renderingStartTime>Or&&n!==1073741824&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=he.current,se(he,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function xv(e,t){switch(Zc(t),t.tag){case 1:return Ze(t.type)&&fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),ce(qe),ce(Fe),au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return su(t),null;case 13:if(ce(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(he),null;case 4:return Nr(),null;case 10:return nu(t.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var Po=!1,Ve=!1,wv=typeof WeakSet=="function"?WeakSet:Set,N=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){ve(e,t,r)}}var ef=!1;function bv(e,t){if(Dl=ls,e=Uh(),Qc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++c===i&&(a=s),f===o&&++u===r&&(l=s),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},ls=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:xt(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(w){ve(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=ef,ef=!1,v}function Si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jl(t,n,o)}i=i.next}while(i!==r)}}function Qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function V0(e){var t=e.alternate;t!==null&&(e.alternate=null,V0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Bi],delete t[Vl],delete t[rv],delete t[iv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function F0(e){return e.tag===5||e.tag===3||e.tag===4}function tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(r!==4&&(e=e.child,e!==null))for(tc(e,t,n),e=e.sibling;e!==null;)tc(e,t,n),e=e.sibling}function nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nc(e,t,n),e=e.sibling;e!==null;)nc(e,t,n),e=e.sibling}var ze=null,wt=!1;function en(e,t,n){for(n=n.child;n!==null;)B0(e,t,n),n=n.sibling}function B0(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Bs,n)}catch{}switch(n.tag){case 5:Ve||wr(n,t);case 6:var r=ze,i=wt;ze=null,en(e,t,n),ze=r,wt=i,ze!==null&&(wt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(wt?(e=ze,n=n.stateNode,e.nodeType===8?Oa(e.parentNode,n):e.nodeType===1&&Oa(e,n),Ni(e)):Oa(ze,n.stateNode));break;case 4:r=ze,i=wt,ze=n.stateNode.containerInfo,wt=!0,en(e,t,n),ze=r,wt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Jl(n,t,s),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!Ve&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,en(e,t,n),Ve=r):en(e,t,n);break;default:en(e,t,n)}}function nf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wv),t.forEach(function(r){var i=jv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,wt=!1;break e;case 3:ze=a.stateNode.containerInfo,wt=!0;break e;case 4:ze=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(ze===null)throw Error($(160));B0(o,s,i),ze=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ve(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)H0(t,e),t=t.sibling}function H0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),At(e),r&4){try{Si(3,e,e.return),Qs(3,e)}catch(x){ve(e,e.return,x)}try{Si(5,e,e.return)}catch(x){ve(e,e.return,x)}}break;case 1:vt(t,e),At(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(vt(t,e),At(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Li(i,"")}catch(x){ve(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dh(i,o),Tl(a,s);var c=Tl(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?gh(i,d):u==="dangerouslySetInnerHTML"?hh(i,d):u==="children"?Li(i,d):Nc(i,u,d,c)}switch(a){case"input":bl(i,o);break;case"textarea":fh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Er(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bi]=o}catch(x){ve(e,e.return,x)}}break;case 6:if(vt(t,e),At(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ve(e,e.return,x)}}break;case 3:if(vt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(x){ve(e,e.return,x)}break;case 4:vt(t,e),At(e);break;case 13:vt(t,e),At(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(gu=be())),r&4&&nf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(c=Ve)||u,vt(t,e),Ve=c):vt(t,e),At(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(N=e,u=e.child;u!==null;){for(d=N=u;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:Si(4,f,f.return);break;case 1:wr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ve(r,n,x)}}break;case 5:wr(f,f.return);break;case 22:if(f.memoizedState!==null){of(d);continue}}m!==null?(m.return=f,N=m):of(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mh("display",s))}catch(x){ve(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ve(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vt(t,e),At(e),r&4&&nf(e);break;case 21:break;default:vt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(F0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var o=tf(e);nc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=tf(e);tc(e,a,s);break;default:throw Error($(161))}}catch(l){ve(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sv(e,t,n){N=e,U0(e)}function U0(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Po;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ve;a=Po;var c=Ve;if(Po=s,(Ve=l)&&!c)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?sf(i):l!==null?(l.return=s,N=l):sf(i);for(;o!==null;)N=o,U0(o),o=o.sibling;N=i,Po=a,Ve=c}rf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):rf(e)}}function rf(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Qs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ni(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ve||t.flags&512&&ec(t)}catch(f){ve(t,t.return,f)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function of(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function sf(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qs(4,t)}catch(l){ve(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ve(t,i,l)}}var o=t.return;try{ec(t)}catch(l){ve(t,o,l)}break;case 5:var s=t.return;try{ec(t)}catch(l){ve(t,s,l)}}}catch(l){ve(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var kv=Math.ceil,Ss=qt.ReactCurrentDispatcher,hu=qt.ReactCurrentOwner,ht=qt.ReactCurrentBatchConfig,q=0,Le=null,Pe=null,_e=0,tt=0,br=Rn(0),Ae=0,Ki=null,Zn=0,qs=0,mu=0,ki=null,Ke=null,gu=0,Or=1/0,Ot=null,ks=!1,rc=null,yn=null,To=!1,dn=null,Cs=0,Ci=0,ic=null,Uo=-1,Wo=0;function We(){return q&6?be():Uo!==-1?Uo:Uo=be()}function vn(e){return e.mode&1?q&2&&_e!==0?_e&-_e:sv.transition!==null?(Wo===0&&(Wo=Ah()),Wo):(e=ne,e!==0||(e=window.event,e=e===void 0?16:_h(e.type)),e):1}function Ct(e,t,n,r){if(50<Ci)throw Ci=0,ic=null,Error($(185));eo(e,n,r),(!(q&2)||e!==Le)&&(e===Le&&(!(q&2)&&(qs|=n),Ae===4&&cn(e,_e)),Je(e,r),n===1&&q===0&&!(t.mode&1)&&(Or=be()+500,Ys&&Ln()))}function Je(e,t){var n=e.callbackNode;sy(e,t);var r=as(e,e===Le?_e:0);if(r===0)n!==null&&hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hd(n),t===1)e.tag===0?ov(af.bind(null,e)):e0(af.bind(null,e)),tv(function(){!(q&6)&&Ln()}),n=null;else{switch($h(r)){case 1:n=Bc;break;case 4:n=Th;break;case 16:n=ss;break;case 536870912:n=Eh;break;default:n=ss}n=Z0(n,W0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W0(e,t){if(Uo=-1,Wo=0,q&6)throw Error($(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=as(e,e===Le?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ps(e,r);else{t=r;var i=q;q|=2;var o=Y0();(Le!==e||_e!==t)&&(Ot=null,Or=be()+500,Gn(e,t));do try{Tv();break}catch(a){G0(e,a)}while(1);tu(),Ss.current=o,q=i,Pe!==null?t=0:(Le=null,_e=0,t=Ae)}if(t!==0){if(t===2&&(i=Ml(e),i!==0&&(r=i,t=oc(e,i))),t===1)throw n=Ki,Gn(e,0),cn(e,r),Je(e,be()),n;if(t===6)cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cv(i)&&(t=Ps(e,r),t===2&&(o=Ml(e),o!==0&&(r=o,t=oc(e,o))),t===1))throw n=Ki,Gn(e,0),cn(e,r),Je(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:Nn(e,Ke,Ot);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=gu+500-be(),10<t)){if(as(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(Nn.bind(null,e,Ke,Ot),t);break}Nn(e,Ke,Ot);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-kt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kv(r/1960))-r,10<r){e.timeoutHandle=Ol(Nn.bind(null,e,Ke,Ot),r);break}Nn(e,Ke,Ot);break;case 5:Nn(e,Ke,Ot);break;default:throw Error($(329))}}}return Je(e,be()),e.callbackNode===n?W0.bind(null,e):null}function oc(e,t){var n=ki;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=Ps(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&sc(t)),e}function sc(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~mu,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function af(e){if(q&6)throw Error($(327));Rr();var t=as(e,0);if(!(t&1))return Je(e,be()),null;var n=Ps(e,t);if(e.tag!==0&&n===2){var r=Ml(e);r!==0&&(t=r,n=oc(e,r))}if(n===1)throw n=Ki,Gn(e,0),cn(e,t),Je(e,be()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,Ke,Ot),Je(e,be()),null}function yu(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Or=be()+500,Ys&&Ln())}}function Jn(e){dn!==null&&dn.tag===0&&!(q&6)&&Rr();var t=q;q|=1;var n=ht.transition,r=ne;try{if(ht.transition=null,ne=1,e)return e()}finally{ne=r,ht.transition=n,q=t,!(q&6)&&Ln()}}function vu(){tt=br.current,ce(br)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ev(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Zc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fs();break;case 3:Nr(),ce(qe),ce(Fe),au();break;case 5:su(r);break;case 4:Nr();break;case 13:ce(he);break;case 19:ce(he);break;case 10:nu(r.type._context);break;case 22:case 23:vu()}n=n.return}if(Le=e,Pe=e=xn(e.current,null),_e=tt=t,Ae=0,Ki=null,mu=qs=Zn=0,Ke=ki=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Bn=null}return e}function G0(e,t){do{var n=Pe;try{if(tu(),Fo.current=bs,ws){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ws=!1}if(qn=0,je=Ee=ge=null,bi=!1,Wi=0,hu.current=null,n===null||n.return===null){Ae=1,Ki=t,Pe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=_e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Yd(s);if(m!==null){m.flags&=-257,Kd(m,s,a,o,t),m.mode&1&&Gd(o,c,t),t=m,l=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Gd(o,c,t),xu();break e}l=Error($(426))}}else if(ue&&a.mode&1){var S=Yd(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Kd(S,s,a,o,t),Jc(Ir(l,a));break e}}o=l=Ir(l,a),Ae!==4&&(Ae=2),ki===null?ki=[o]:ki.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=$0(o,l,t);Vd(o,g);break e;case 1:a=l;var h=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yn===null||!yn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=j0(o,a,t);Vd(o,w);break e}}o=o.return}while(o!==null)}X0(n)}catch(C){t=C,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function Y0(){var e=Ss.current;return Ss.current=bs,e===null?bs:e}function xu(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Le===null||!(Zn&268435455)&&!(qs&268435455)||cn(Le,_e)}function Ps(e,t){var n=q;q|=2;var r=Y0();(Le!==e||_e!==t)&&(Ot=null,Gn(e,t));do try{Pv();break}catch(i){G0(e,i)}while(1);if(tu(),q=n,Ss.current=r,Pe!==null)throw Error($(261));return Le=null,_e=0,Ae}function Pv(){for(;Pe!==null;)K0(Pe)}function Tv(){for(;Pe!==null&&!q1();)K0(Pe)}function K0(e){var t=q0(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?X0(e):Pe=t,hu.current=null}function X0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xv(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Pe=null;return}}else if(n=vv(n,t,tt),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Ae===0&&(Ae=5)}function Nn(e,t,n){var r=ne,i=ht.transition;try{ht.transition=null,ne=1,Ev(e,t,n,r)}finally{ht.transition=i,ne=r}return null}function Ev(e,t,n,r){do Rr();while(dn!==null);if(q&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ay(e,o),e===Le&&(Pe=Le=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,Z0(ss,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ht.transition,ht.transition=null;var s=ne;ne=1;var a=q;q|=4,hu.current=null,bv(e,n),H0(n,e),Yy(Nl),ls=!!Dl,Nl=Dl=null,e.current=n,Sv(n),Z1(),q=a,ne=s,ht.transition=o}else e.current=n;if(To&&(To=!1,dn=e,Cs=i),o=e.pendingLanes,o===0&&(yn=null),ty(n.stateNode),Je(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ks)throw ks=!1,e=rc,rc=null,e;return Cs&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===ic?Ci++:(Ci=0,ic=e):Ci=0,Ln(),null}function Rr(){if(dn!==null){var e=$h(Cs),t=ht.transition,n=ne;try{if(ht.transition=null,ne=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,Cs=0,q&6)throw Error($(331));var i=q;for(q|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var u=N;switch(u.tag){case 0:case 11:case 15:Si(8,u,o)}var d=u.child;if(d!==null)d.return=u,N=d;else for(;N!==null;){u=N;var f=u.sibling,m=u.return;if(V0(u),u===c){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Si(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,N=g;break e}N=o.return}}var h=e.current;for(N=h;N!==null;){s=N;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,N=p;else e:for(s=h;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qs(9,a)}}catch(C){ve(a,a.return,C)}if(a===s){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(q=i,Ln(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Bs,e)}catch{}r=!0}return r}finally{ne=n,ht.transition=t}}return!1}function lf(e,t,n){t=Ir(n,t),t=$0(e,t,1),e=gn(e,t,1),t=We(),e!==null&&(eo(e,1,t),Je(e,t))}function ve(e,t,n){if(e.tag===3)lf(e,e,n);else for(;t!==null;){if(t.tag===3){lf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Ir(n,e),e=j0(t,e,1),t=gn(t,e,1),e=We(),t!==null&&(eo(t,1,e),Je(t,e));break}}t=t.return}}function Av(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(_e&n)===n&&(Ae===4||Ae===3&&(_e&130023424)===_e&&500>be()-gu?Gn(e,0):mu|=n),Je(e,t)}function Q0(e,t){t===0&&(e.mode&1?(t=go,go<<=1,!(go&130023424)&&(go=4194304)):t=1);var n=We();e=Xt(e,t),e!==null&&(eo(e,t,n),Je(e,n))}function $v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Q0(e,n)}function jv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Q0(e,n)}var q0;q0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,yv(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,ue&&t.flags&1048576&&t0(t,ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var i=zr(t,Fe.current);Mr(t,n),i=cu(null,t,r,e,i,n);var o=uu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(o=!0,ps(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,iu(t),i.updater=Xs,t.stateNode=i,i._reactInternals=t,Gl(t,r,e,n),t=Xl(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&qc(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rv(r),e=xt(r,e),i){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=qd(null,t,r,e,n);break e;case 11:t=Xd(null,t,r,e,n);break e;case 14:t=Qd(null,t,r,xt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),qd(e,t,r,i,n);case 3:e:{if(z0(t),e===null)throw Error($(387));r=t.pendingProps,o=t.memoizedState,i=o.element,a0(e,t),vs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ir(Error($(423)),t),t=Zd(e,t,r,n,i);break e}else if(r!==i){i=Ir(Error($(424)),t),t=Zd(e,t,r,n,i);break e}else for(nt=mn(t.stateNode.containerInfo.firstChild),rt=t,ue=!0,bt=null,n=o0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Qt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return l0(t),e===null&&Hl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Il(r,i)?s=null:o!==null&&Il(r,o)&&(t.flags|=32),L0(e,t),Ue(e,t,s,n),t.child;case 6:return e===null&&Hl(t),null;case 13:return _0(e,t,n);case 4:return ou(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Xd(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,se(gs,r._currentValue),r._currentValue=s,o!==null)if(Tt(o.value,s)){if(o.children===i.children&&!qe.current){t=Qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Wt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ul(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ul(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=mt(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),Qd(e,t,r,i,n);case 15:return M0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ho(e,t),t.tag=1,Ze(r)?(e=!0,ps(t)):e=!1,Mr(t,n),A0(t,r,i),Gl(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return D0(e,t,n);case 22:return R0(e,t,n)}throw Error($(156,t.tag))};function Z0(e,t){return Ph(e,t)}function Mv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new Mv(e,t,n,r)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rv(e){if(typeof e=="function")return wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oc)return 11;if(e===Vc)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Go(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")wu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case dr:return Yn(n.children,i,o,t);case Ic:s=8,i|=8;break;case gl:return e=pt(12,n,t,i|2),e.elementType=gl,e.lanes=o,e;case yl:return e=pt(13,n,t,i),e.elementType=yl,e.lanes=o,e;case vl:return e=pt(19,n,t,i),e.elementType=vl,e.lanes=o,e;case lh:return Zs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sh:s=10;break e;case ah:s=9;break e;case Oc:s=11;break e;case Vc:s=14;break e;case on:s=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=pt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Zs(e,t,n,r){return e=pt(22,e,r,t),e.elementType=lh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ya(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Ka(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bu(e,t,n,r,i,o,s,a,l){return e=new Lv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(o),e}function zv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function J0(e){if(!e)return En;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Jh(e,n,t)}return t}function em(e,t,n,r,i,o,s,a,l){return e=bu(n,r,!0,e,i,o,s,a,l),e.context=J0(null),n=e.current,r=We(),i=vn(n),o=Wt(r,i),o.callback=t??null,gn(n,o,i),e.current.lanes=i,eo(e,i,r),Je(e,r),e}function Js(e,t,n,r){var i=t.current,o=We(),s=vn(i);return n=J0(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,s),e!==null&&(Ct(e,i,s,o),Vo(e,i,s)),s}function Ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Su(e,t){cf(e,t),(e=e.alternate)&&cf(e,t)}function _v(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function ku(e){this._internalRoot=e}ea.prototype.render=ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Js(e,t,null,null)};ea.prototype.unmount=ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Js(null,e,null,null)}),t[Kt]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&zh(e)}};function Cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function Dv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ts(s);o.call(c)}}var s=em(t,r,e,0,null,!1,!1,"",uf);return e._reactRootContainer=s,e[Kt]=s.current,Vi(e.nodeType===8?e.parentNode:e),Jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ts(l);a.call(c)}}var l=bu(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=l,e[Kt]=l.current,Vi(e.nodeType===8?e.parentNode:e),Jn(function(){Js(t,l,n,r)}),l}function na(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ts(s);a.call(l)}}Js(t,s,e,i)}else s=Dv(n,t,e,i,r);return Ts(s)}jh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(Hc(t,n|1),Je(t,be()),!(q&6)&&(Or=be()+500,Ln()))}break;case 13:Jn(function(){var r=Xt(e,1);if(r!==null){var i=We();Ct(r,e,1,i)}}),Su(e,1)}};Uc=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=We();Ct(t,e,134217728,n)}Su(e,134217728)}};Mh=function(e){if(e.tag===13){var t=vn(e),n=Xt(e,t);if(n!==null){var r=We();Ct(n,e,t,r)}Su(e,t)}};Rh=function(){return ne};Lh=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};Al=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Gs(r);if(!i)throw Error($(90));uh(r),bl(r,i)}}}break;case"textarea":fh(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};xh=yu;wh=Jn;var Nv={usingClientEntryPoint:!1,Events:[no,mr,Gs,yh,vh,yu]},si={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kh(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Bs=Eo.inject(Iv),Lt=Eo}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(t))throw Error($(200));return zv(e,t,null,n)};st.createRoot=function(e,t){if(!Cu(e))throw Error($(299));var n=!1,r="",i=tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bu(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,Vi(e.nodeType===8?e.parentNode:e),new ku(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=kh(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return Jn(e)};st.hydrate=function(e,t,n){if(!ta(t))throw Error($(200));return na(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!Cu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=em(t,null,e,1,n??null,i,!1,o,s),e[Kt]=t.current,Vi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ea(t)};st.render=function(e,t,n){if(!ta(t))throw Error($(200));return na(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!ta(e))throw Error($(40));return e._reactRootContainer?(Jn(function(){na(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};st.unstable_batchedUpdates=yu;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ta(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return na(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm)}catch(e){console.error(e)}}nm(),nh.exports=st;var Ov=nh.exports,df=Ov;hl.createRoot=df.createRoot,hl.hydrateRoot=df.hydrateRoot;var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Re.apply(this,arguments)};function Vr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var le="-ms-",Pi="-moz-",te="-webkit-",rm="comm",ra="rule",Pu="decl",Vv="@import",im="@keyframes",Fv="@layer",om=Math.abs,Tu=String.fromCharCode,ac=Object.assign;function Bv(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function sm(e){return e.trim()}function Vt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function Yo(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Fr(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function am(e){return e.length}function hi(e,t){return t.push(e),e}function Hv(e,t){return e.map(t).join("")}function ff(e,t){return e.filter(function(n){return!Vt(n,t)})}var ia=1,Br=1,lm=0,yt=0,Ce=0,qr="";function oa(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ia,column:Br,length:s,return:"",siblings:a}}function tn(e,t){return ac(oa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lr(e){for(;e.root;)e=tn(e.root,{children:[e]});hi(e,e.siblings)}function Uv(){return Ce}function Wv(){return Ce=yt>0?Me(qr,--yt):0,Br--,Ce===10&&(Br=1,ia--),Ce}function Pt(){return Ce=yt<lm?Me(qr,yt++):0,Br++,Ce===10&&(Br=1,ia++),Ce}function Kn(){return Me(qr,yt)}function Ko(){return yt}function sa(e,t){return Fr(qr,e,t)}function lc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gv(e){return ia=Br=1,lm=jt(qr=e),yt=0,[]}function Yv(e){return qr="",e}function Xa(e){return sm(sa(yt-1,cc(e===91?e+2:e===40?e+1:e)))}function Kv(e){for(;(Ce=Kn())&&Ce<33;)Pt();return lc(e)>2||lc(Ce)>3?"":" "}function Xv(e,t){for(;--t&&Pt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return sa(e,Ko()+(t<6&&Kn()==32&&Pt()==32))}function cc(e){for(;Pt();)switch(Ce){case e:return yt;case 34:case 39:e!==34&&e!==39&&cc(Ce);break;case 40:e===41&&cc(e);break;case 92:Pt();break}return yt}function Qv(e,t){for(;Pt()&&e+Ce!==47+10;)if(e+Ce===42+42&&Kn()===47)break;return"/*"+sa(t,yt-1)+"*"+Tu(e===47?e:Pt())}function qv(e){for(;!lc(Kn());)Pt();return sa(e,yt)}function Zv(e){return Yv(Xo("",null,null,null,[""],e=Gv(e),0,[0],e))}function Xo(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,f=0,m=0,v=0,x=1,S=1,g=1,h=0,p="",w=i,C=o,T=r,P=p;S;)switch(v=h,h=Pt()){case 40:if(v!=108&&Me(P,d-1)==58){Yo(P+=U(Xa(h),"&","&\f"),"&\f",om(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:P+=Xa(h);break;case 9:case 10:case 13:case 32:P+=Kv(v);break;case 92:P+=Xv(Ko()-1,7);continue;case 47:switch(Kn()){case 42:case 47:hi(Jv(Qv(Pt(),Ko()),t,n,l),l);break;default:P+="/"}break;case 123*x:a[c++]=jt(P)*g;case 125*x:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+u:g==-1&&(P=U(P,/\f/g,"")),m>0&&jt(P)-d&&hi(m>32?hf(P+";",r,n,d-1,l):hf(U(P," ","")+";",r,n,d-2,l),l);break;case 59:P+=";";default:if(hi(T=pf(P,t,n,c,u,i,a,p,w=[],C=[],d,o),o),h===123)if(u===0)Xo(P,t,T,T,w,o,d,a,C);else switch(f===99&&Me(P,3)===110?100:f){case 100:case 108:case 109:case 115:Xo(e,T,T,r&&hi(pf(e,T,T,0,0,i,a,p,i,w=[],d,C),C),i,C,d,a,r?w:C);break;default:Xo(P,T,T,T,[""],C,0,a,C)}}c=u=m=0,x=g=1,p=P="",d=s;break;case 58:d=1+jt(P),m=v;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Wv()==125)continue}switch(P+=Tu(h),h*x){case 38:g=u>0?1:(P+="\f",-1);break;case 44:a[c++]=(jt(P)-1)*g,g=1;break;case 64:Kn()===45&&(P+=Xa(Pt())),f=Kn(),u=d=jt(p=P+=qv(Ko())),h++;break;case 45:v===45&&jt(P)==2&&(x=0)}}return o}function pf(e,t,n,r,i,o,s,a,l,c,u,d){for(var f=i-1,m=i===0?o:[""],v=am(m),x=0,S=0,g=0;x<r;++x)for(var h=0,p=Fr(e,f+1,f=om(S=s[x])),w=e;h<v;++h)(w=sm(S>0?m[h]+" "+p:U(p,/&\f/g,m[h])))&&(l[g++]=w);return oa(e,t,n,i===0?ra:a,l,c,u,d)}function Jv(e,t,n,r){return oa(e,t,n,rm,Tu(Uv()),Fr(e,2,-2),0,r)}function hf(e,t,n,r,i){return oa(e,t,n,Pu,Fr(e,0,r),Fr(e,r+1,-1),r,i)}function cm(e,t,n){switch(Bv(e,t)){case 5103:return te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+e+e;case 4789:return Pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return te+e+Pi+e+le+e+e;case 5936:switch(Me(e,t+11)){case 114:return te+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return te+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return te+e+le+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return te+e+le+e+e;case 6165:return te+e+le+"flex-"+e+e;case 5187:return te+e+U(e,/(\w+).+(:[^]+)/,te+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return te+e+le+"flex-item-"+U(e,/flex-|-self/g,"")+(Vt(e,/flex-|baseline/)?"":le+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return te+e+le+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return te+e+le+U(e,"shrink","negative")+e;case 5292:return te+e+le+U(e,"basis","preferred-size")+e;case 6060:return te+"box-"+U(e,"-grow","")+te+e+le+U(e,"grow","positive")+e;case 4554:return te+U(e,/([^-])(transform)/g,"$1"+te+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+e+e;case 4200:if(!Vt(e,/flex-|baseline/))return le+"grid-column-align"+Fr(e,t)+e;break;case 2592:case 3360:return le+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Vt(r.props,/grid-\w+-end/)})?~Yo(e+(n=n[t].value),"span",0)?e:le+U(e,"-start","")+e+le+"grid-row-span:"+(~Yo(n,"span",0)?Vt(n,/\d+/):+Vt(n,/\d+/)-+Vt(e,/\d+/))+";":le+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Vt(r.props,/grid-\w+-start/)})?e:le+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Pi+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Yo(e,"stretch",0)?cm(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return le+i+":"+o+c+(s?le+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(Me(e,t+6)===121)return U(e,":",":"+te)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+(Me(e,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+le+"$2box$3")+e;case 100:return U(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function Es(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ex(e,t,n,r){switch(e.type){case Fv:if(e.children.length)break;case Vv:case Pu:return e.return=e.return||e.value;case rm:return"";case im:return e.return=e.value+"{"+Es(e.children,r)+"}";case ra:if(!jt(e.value=e.props.join(",")))return""}return jt(n=Es(e.children,r))?e.return=e.value+"{"+n+"}":""}function tx(e){var t=am(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function nx(e){return function(t){t.root||(t=t.return)&&e(t)}}function rx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pu:e.return=cm(e.value,e.length,n);return;case im:return Es([tn(e,{value:U(e.value,"@","@"+te)})],r);case ra:if(e.length)return Hv(n=e.props,function(i){switch(Vt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(tn(e,{props:[U(i,/:(read-\w+)/,":"+Pi+"$1")]})),lr(tn(e,{props:[i]})),ac(e,{props:ff(n,r)});break;case"::placeholder":lr(tn(e,{props:[U(i,/:(plac\w+)/,":"+te+"input-$1")]})),lr(tn(e,{props:[U(i,/:(plac\w+)/,":"+Pi+"$1")]})),lr(tn(e,{props:[U(i,/:(plac\w+)/,le+"input-$1")]})),lr(tn(e,{props:[i]})),ac(e,{props:ff(n,r)});break}return""})}}var ix={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Hr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",um="active",dm="data-styled-version",aa="6.1.15",Eu=`/*!sc*/
`,As=typeof window<"u"&&"HTMLElement"in window,ox=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),sx={},la=Object.freeze([]),Ur=Object.freeze({});function fm(e,t,n){return n===void 0&&(n=Ur),e.theme!==n.theme&&e.theme||t||n.theme}var pm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lx=/(^-|-$)/g;function mf(e){return e.replace(ax,"-").replace(lx,"")}var cx=/(a)(d)/gi,Ao=52,gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function uc(e){var t,n="";for(t=Math.abs(e);t>Ao;t=t/Ao|0)n=gf(t%Ao)+n;return(gf(t%Ao)+n).replace(cx,"$1-$2")}var Qa,hm=5381,Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},mm=function(e){return Sr(hm,e)};function Au(e){return uc(mm(e)>>>0)}function ux(e){return e.displayName||e.name||"Component"}function qa(e){return typeof e=="string"&&!0}var gm=typeof Symbol=="function"&&Symbol.for,ym=gm?Symbol.for("react.memo"):60115,dx=gm?Symbol.for("react.forward_ref"):60112,fx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},px={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hx=((Qa={})[dx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qa[ym]=vm,Qa);function yf(e){return("type"in(t=e)&&t.type.$$typeof)===ym?vm:"$$typeof"in e?hx[e.$$typeof]:fx;var t}var mx=Object.defineProperty,gx=Object.getOwnPropertyNames,vf=Object.getOwnPropertySymbols,yx=Object.getOwnPropertyDescriptor,vx=Object.getPrototypeOf,xf=Object.prototype;function xm(e,t,n){if(typeof t!="string"){if(xf){var r=vx(t);r&&r!==xf&&xm(e,r,n)}var i=gx(t);vf&&(i=i.concat(vf(t)));for(var o=yf(e),s=yf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in px||n&&n[l]||s&&l in s||o&&l in o)){var c=yx(t,l);try{mx(e,l,c)}catch{}}}}return e}function er(e){return typeof e=="function"}function $u(e){return typeof e=="object"&&"styledComponentId"in e}function Un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $s(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Xi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dc(e,t,n){if(n===void 0&&(n=!1),!n&&!Xi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=dc(e[r],t[r]);else if(Xi(t))for(var r in t)e[r]=dc(e[r],t[r]);return e}function ju(e,t){Object.defineProperty(e,"toString",{value:t})}function An(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw An(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Eu);return n},e}(),Qo=new Map,js=new Map,qo=1,$o=function(e){if(Qo.has(e))return Qo.get(e);for(;js.has(qo);)qo++;var t=qo++;return Qo.set(e,t),js.set(t,e),t},wx=function(e,t){qo=t+1,Qo.set(e,t),js.set(t,e)},bx="style[".concat(Hr,"][").concat(dm,'="').concat(aa,'"]'),Sx=new RegExp("^".concat(Hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kx=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Cx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Eu),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Sx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(wx(u,c),kx(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},wf=function(e){for(var t=document.querySelectorAll(bx),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Hr)!==um&&(Cx(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Px(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Hr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Hr,um),r.setAttribute(dm,aa);var s=Px();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Tx=function(){function e(t){this.element=wm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw An(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ex=function(){function e(t){this.element=wm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ax=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),bf=As,$x={isServer:!As,useCSSOMInjection:!ox},Ms=function(){function e(t,n,r){t===void 0&&(t=Ur),n===void 0&&(n={});var i=this;this.options=Re(Re({},$x),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&As&&bf&&(bf=!1,wf(this)),ju(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(d){var f=function(g){return js.get(g)}(d);if(f===void 0)return"continue";var m=o.names.get(f),v=s.getGroup(d);if(m===void 0||!m.size||v.length===0)return"continue";var x="".concat(Hr,".g").concat(d,'[id="').concat(f,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(v).concat(x,'{content:"').concat(S,'"}').concat(Eu)},u=0;u<a;u++)c(u);return l}(i)})}return e.registerId=function(t){return $o(t)},e.prototype.rehydrate=function(){!this.server&&As&&wf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ax(i):r?new Tx(i):new Ex(i)}(this.options),new xx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jx=/&/g,Mx=/^\s*\/\/.*$/gm;function bm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bm(n.children,t)),n})}function Rx(e){var t,n,r,i=e===void 0?Ur:e,o=i.options,s=o===void 0?Ur:o,a=i.plugins,l=a===void 0?la:a,c=function(f,m,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},u=l.slice();u.push(function(f){f.type===ra&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(jx,n).replace(r,c))}),s.prefix&&u.push(rx),u.push(ex);var d=function(f,m,v,x){m===void 0&&(m=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(Mx,""),g=Zv(v||m?"".concat(v," ").concat(m," { ").concat(S," }"):S);s.namespace&&(g=bm(g,s.namespace));var h=[];return Es(g,tx(u.concat(nx(function(p){return h.push(p)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||An(15),Sr(f,m.name)},hm).toString():"",d}var Lx=new Ms,fc=Rx(),Sm=de.createContext({shouldForwardProp:void 0,styleSheet:Lx,stylis:fc});Sm.Consumer;de.createContext(void 0);function pc(){return b.useContext(Sm)}var km=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=fc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ju(this,function(){throw An(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=fc),this.name+t.hash},e}(),zx=function(e){return e>="A"&&e<="Z"};function Sf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;zx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cm=function(e){return e==null||e===!1||e===""},Pm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Cm(o)&&(Array.isArray(o)&&o.isCss||er(o)?r.push("".concat(Sf(i),":"),o,";"):Xi(o)?r.push.apply(r,Vr(Vr(["".concat(i," {")],Pm(o),!1),["}"],!1)):r.push("".concat(Sf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ix||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function wn(e,t,n,r){if(Cm(e))return[];if($u(e))return[".".concat(e.styledComponentId)];if(er(e)){if(!er(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return wn(i,t,n,r)}var o;return e instanceof km?n?(e.inject(n,r),[e.getName(r)]):[e]:Xi(e)?Pm(e):Array.isArray(e)?Array.prototype.concat.apply(la,e.map(function(s){return wn(s,t,n,r)})):[e.toString()]}function Tm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(er(n)&&!$u(n))return!1}return!0}var _x=mm(aa),Dx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Tm(t),this.componentId=n,this.baseHash=Sr(_x,n),this.baseStyle=r,Ms.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Un(i,this.staticRulesId);else{var o=$s(wn(this.rules,t,n,r)),s=uc(Sr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Un(i,s),this.staticRulesId=s}else{for(var l=Sr(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var f=$s(wn(d,t,n,r));l=Sr(l,f+u),c+=f}}if(c){var m=uc(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),i=Un(i,m)}}return i},e}(),Wr=de.createContext(void 0);Wr.Consumer;function Nx(){var e=b.useContext(Wr);if(!e)throw An(18);return e}function Ix(e){var t=de.useContext(Wr),n=b.useMemo(function(){return function(r,i){if(!r)throw An(14);if(er(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw An(8);return i?Re(Re({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?de.createElement(Wr.Provider,{value:n},e.children):null}var Za={};function Ox(e,t,n){var r=$u(e),i=e,o=!qa(e),s=t.attrs,a=s===void 0?la:s,l=t.componentId,c=l===void 0?function(w,C){var T=typeof w!="string"?"sc":mf(w);Za[T]=(Za[T]||0)+1;var P="".concat(T,"-").concat(Au(aa+T+Za[T]));return C?"".concat(C,"-").concat(P):P}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(w){return qa(w)?"styled.".concat(w):"Styled(".concat(ux(w),")")}(e):u,f=t.displayName&&t.componentId?"".concat(mf(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(w,C){return x(w,C)&&S(w,C)}}else v=x}var g=new Dx(n,f,r?i.componentStyle:void 0);function h(w,C){return function(T,P,E){var _=T.attrs,L=T.componentStyle,H=T.defaultProps,W=T.foldedComponentIds,K=T.styledComponentId,X=T.target,fe=de.useContext(Wr),F=pc(),G=T.shouldForwardProp||F.shouldForwardProp,M=fm(P,fe,H)||Ur,z=function(pe,ie,Se){for(var lt,et=Re(Re({},ie),{className:void 0,theme:Se}),R=0;R<pe.length;R+=1){var D=er(lt=pe[R])?lt(et):lt;for(var B in D)et[B]=B==="className"?Un(et[B],D[B]):B==="style"?Re(Re({},et[B]),D[B]):D[B]}return ie.className&&(et.className=Un(et.className,ie.className)),et}(_,P,M),j=z.as||X,A={};for(var I in z)z[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&z.theme===M||(I==="forwardedAs"?A.as=z.forwardedAs:G&&!G(I,j)||(A[I]=z[I]));var ee=function(pe,ie){var Se=pc(),lt=pe.generateAndInjectStyles(ie,Se.styleSheet,Se.stylis);return lt}(L,z),Q=Un(W,K);return ee&&(Q+=" "+ee),z.className&&(Q+=" "+z.className),A[qa(j)&&!pm.has(j)?"class":"className"]=Q,E&&(A.ref=E),b.createElement(j,A)}(p,w,C)}h.displayName=d;var p=de.forwardRef(h);return p.attrs=m,p.componentStyle=g,p.displayName=d,p.shouldForwardProp=v,p.foldedComponentIds=r?Un(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var T=[],P=1;P<arguments.length;P++)T[P-1]=arguments[P];for(var E=0,_=T;E<_.length;E++)dc(C,_[E],!0);return C}({},i.defaultProps,w):w}}),ju(p,function(){return".".concat(p.styledComponentId)}),o&&xm(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function kf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Cf=function(e){return Object.assign(e,{isCss:!0})};function Rt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(er(e)||Xi(e))return Cf(wn(kf(la,Vr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?wn(r):Cf(wn(kf(r,t)))}function hc(e,t,n){if(n===void 0&&(n=Ur),!t)throw An(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Rt.apply(void 0,Vr([i],o,!1)))};return r.attrs=function(i){return hc(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return hc(e,t,Re(Re({},n),i))},r}var Em=function(e){return hc(Ox,e)},k=Em;pm.forEach(function(e){k[e]=Em(e)});var Vx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Tm(t),Ms.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i($s(wn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ms.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Fx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Rt.apply(void 0,Vr([e],t,!1)),i="sc-global-".concat(Au(JSON.stringify(r))),o=new Vx(r,i),s=function(l){var c=pc(),u=de.useContext(Wr),d=de.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(d,l,c.styleSheet,u,c.stylis),de.useLayoutEffect(function(){if(!c.styleSheet.server)return a(d,l,c.styleSheet,u,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,d,f){if(o.isStatic)o.renderStyles(l,sx,u,f);else{var m=Re(Re({},c),{theme:fm(c,d,s.defaultProps)});o.renderStyles(l,m,u,f)}}return de.memo(s)}function rr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$s(Rt.apply(void 0,Vr([e],t,!1))),i=Au(r);return new km(i,r)}const ca=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ua=b.createContext({}),da=b.createContext(null),fa=typeof document<"u",Zr=fa?b.useLayoutEffect:b.useEffect,Am=b.createContext({strict:!1}),Mu=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Bx="framerAppearId",$m="data-"+Mu(Bx);function Hx(e,t,n,r){const{visualElement:i}=b.useContext(ua),o=b.useContext(Am),s=b.useContext(da),a=b.useContext(ca).reducedMotion,l=b.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;b.useInsertionEffect(()=>{c&&c.update(n,s)});const u=b.useRef(!!(n[$m]&&!window.HandoffComplete));return Zr(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),b.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function kr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ux(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):kr(n)&&(n.current=r))},[t])}function Qi(e){return typeof e=="string"||Array.isArray(e)}function pa(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ru=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Lu=["initial",...Ru];function ha(e){return pa(e.animate)||Lu.some(t=>Qi(e[t]))}function jm(e){return!!(ha(e)||e.variants)}function Wx(e,t){if(ha(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Qi(n)?n:void 0,animate:Qi(r)?r:void 0}}return e.inherit!==!1?t:{}}function Gx(e){const{initial:t,animate:n}=Wx(e,b.useContext(ua));return b.useMemo(()=>({initial:t,animate:n}),[Pf(t),Pf(n)])}function Pf(e){return Array.isArray(e)?e.join(" "):e}const Tf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qi={};for(const e in Tf)qi[e]={isEnabled:t=>Tf[e].some(n=>!!t[n])};function Yx(e){for(const t in e)qi[t]={...qi[t],...e[t]}}const zu=b.createContext({}),Mm=b.createContext({}),Kx=Symbol.for("motionComponentSymbol");function Xx({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Yx(e);function o(a,l){let c;const u={...b.useContext(ca),...a,layoutId:Qx(a)},{isStatic:d}=u,f=Gx(a),m=r(a,d);if(!d&&fa){f.visualElement=Hx(i,m,u,t);const v=b.useContext(Mm),x=b.useContext(Am).strict;f.visualElement&&(c=f.visualElement.loadFeatures(u,x,e,v))}return b.createElement(ua.Provider,{value:f},c&&f.visualElement?b.createElement(c,{visualElement:f.visualElement,...u}):null,n(i,a,Ux(m,f.visualElement,l),m,d,f.visualElement))}const s=b.forwardRef(o);return s[Kx]=i,s}function Qx({layoutId:e}){const t=b.useContext(zu).id;return t&&e!==void 0?t+"-"+e:e}function qx(e){function t(r,i={}){return Xx(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Zx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _u(e){return typeof e!="string"||e.includes("-")?!1:!!(Zx.indexOf(e)>-1||/[A-Z]/.test(e))}const Rs={};function Jx(e){Object.assign(Rs,e)}const io=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ir=new Set(io);function Rm(e,{layout:t,layoutId:n}){return ir.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Rs[e]||e==="opacity")}const Be=e=>!!(e&&e.getVelocity),e2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},t2=io.length;function n2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<t2;s++){const a=io[s];if(e[a]!==void 0){const l=e2[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Lm=e=>t=>typeof t=="string"&&t.startsWith(e),zm=Lm("--"),mc=Lm("var(--"),r2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,i2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,$n=(e,t,n)=>Math.min(Math.max(n,e),t),or={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ti={...or,transform:e=>$n(0,1,e)},jo={...or,default:1},Ei=e=>Math.round(e*1e5)/1e5,ma=/(-)?([\d]*\.?[\d])+/g,_m=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,o2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function oo(e){return typeof e=="string"}const so=e=>({test:t=>oo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=so("deg"),_t=so("%"),V=so("px"),s2=so("vh"),a2=so("vw"),Ef={..._t,parse:e=>_t.parse(e)/100,transform:e=>_t.transform(e*100)},Af={...or,transform:Math.round},Dm={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,radius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,size:V,top:V,right:V,bottom:V,left:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,rotate:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:jo,scaleX:jo,scaleY:jo,scaleZ:jo,skew:nn,skewX:nn,skewY:nn,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:Ti,originX:Ef,originY:Ef,originZ:V,zIndex:Af,fillOpacity:Ti,strokeOpacity:Ti,numOctaves:Af};function Du(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,c=!1,u=!0;for(const d in t){const f=t[d];if(zm(d)){o[d]=f;continue}const m=Dm[d],v=i2(f,m);if(ir.has(d)){if(l=!0,s[d]=v,!u)continue;f!==(m.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=n2(e.transform,n,u,r):i.transform&&(i.transform="none")),c){const{originX:d="50%",originY:f="50%",originZ:m=0}=a;i.transformOrigin=`${d} ${f} ${m}`}}const Nu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Nm(e,t,n){for(const r in t)!Be(t[r])&&!Rm(r,n)&&(e[r]=t[r])}function l2({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Nu();return Du(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function c2(e,t,n){const r=e.style||{},i={};return Nm(i,r,e),Object.assign(i,l2(e,t,n)),e.transformValues?e.transformValues(i):i}function u2(e,t,n){const r={},i=c2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const d2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ls(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||d2.has(e)}let Im=e=>!Ls(e);function f2(e){e&&(Im=t=>t.startsWith("on")?!Ls(t):e(t))}try{f2(require("@emotion/is-prop-valid").default)}catch{}function p2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Im(i)||n===!0&&Ls(i)||!t&&!Ls(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function $f(e,t,n){return typeof e=="string"?e:V.transform(t+n*e)}function h2(e,t,n){const r=$f(t,e.x,e.width),i=$f(n,e.y,e.height);return`${r} ${i}`}const m2={offset:"stroke-dashoffset",array:"stroke-dasharray"},g2={offset:"strokeDashoffset",array:"strokeDasharray"};function y2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?m2:g2;e[o.offset]=V.transform(-r);const s=V.transform(t),a=V.transform(n);e[o.array]=`${s} ${a}`}function Iu(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},u,d,f){if(Du(e,c,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:v,dimensions:x}=e;m.transform&&(x&&(v.transform=m.transform),delete m.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=h2(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),s!==void 0&&y2(m,s,a,l,!1)}const Om=()=>({...Nu(),attrs:{}}),Ou=e=>typeof e=="string"&&e.toLowerCase()==="svg";function v2(e,t,n,r){const i=b.useMemo(()=>{const o=Om();return Iu(o,t,{enableHardwareAcceleration:!1},Ou(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Nm(o,e.style,e),i.style={...o,...i.style}}return i}function x2(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(_u(n)?v2:u2)(r,o,s,n),u={...p2(r,typeof n=="string",e),...l,ref:i},{children:d}=r,f=b.useMemo(()=>Be(d)?d.get():d,[d]);return b.createElement(n,{...u,children:f})}}function Vm(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Fm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bm(e,t,n,r){Vm(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Fm.has(i)?i:Mu(i),t.attrs[i])}function Vu(e,t){const{style:n}=e,r={};for(const i in n)(Be(n[i])||t.style&&Be(t.style[i])||Rm(i,e))&&(r[i]=n[i]);return r}function Hm(e,t){const n=Vu(e,t);for(const r in e)if(Be(e[r])||Be(t[r])){const i=io.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Fu(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function ao(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const zs=e=>Array.isArray(e),w2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),b2=e=>zs(e)?e[e.length-1]||0:e;function Zo(e){const t=Be(e)?e.get():e;return w2(t)?t.toValue():t}function S2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:k2(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Um=e=>(t,n)=>{const r=b.useContext(ua),i=b.useContext(da),o=()=>S2(e,t,r,i);return n?o():ao(o)};function k2(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=Zo(o[f]);let{initial:s,animate:a}=e;const l=ha(e),c=jm(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||s===!1;const d=u?a:s;return d&&typeof d!="boolean"&&!pa(d)&&(Array.isArray(d)?d:[d]).forEach(m=>{const v=Fu(e,m);if(!v)return;const{transitionEnd:x,transition:S,...g}=v;for(const h in g){let p=g[h];if(Array.isArray(p)){const w=u?p.length-1:0;p=p[w]}p!==null&&(i[h]=p)}for(const h in x)i[h]=x[h]}),i}const xe=e=>e;class jf{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function C2(e){let t=new jf,n=new jf,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const d=u&&i,f=d?t:n;return c&&s.add(l),f.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const u=t.order[c];u(l),s.has(u)&&(a.schedule(u),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const Mo=["prepare","read","update","preRender","render","postRender"],P2=40;function T2(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Mo.reduce((d,f)=>(d[f]=C2(()=>n=!0),d),{}),s=d=>o[d].process(i),a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,P2),1),i.timestamp=d,i.isProcessing=!0,Mo.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:Mo.reduce((d,f)=>{const m=o[f];return d[f]=(v,x=!1,S=!1)=>(n||l(),m.schedule(v,x,S)),d},{}),cancel:d=>Mo.forEach(f=>o[f].cancel(d)),state:i,steps:o}}const{schedule:J,cancel:Et,state:Te,steps:Ja}=T2(typeof requestAnimationFrame<"u"?requestAnimationFrame:xe,!0),E2={useVisualState:Um({scrapeMotionValuesFromProps:Hm,createRenderState:Om,onMount:(e,t,{renderState:n,latestValues:r})=>{J.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),J.render(()=>{Iu(n,r,{enableHardwareAcceleration:!1},Ou(t.tagName),e.transformTemplate),Bm(t,n)})}})},A2={useVisualState:Um({scrapeMotionValuesFromProps:Vu,createRenderState:Nu})};function $2(e,{forwardMotionProps:t=!1},n,r){return{..._u(e)?E2:A2,preloadedFeatures:n,useRender:x2(t),createVisualElement:r,Component:e}}function Ut(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Wm=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ga(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const j2=e=>t=>Wm(t)&&e(t,ga(t));function Gt(e,t,n,r){return Ut(e,t,j2(n),r)}const M2=(e,t)=>n=>t(e(n)),bn=(...e)=>e.reduce(M2);function Gm(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Mf=Gm("dragHorizontal"),Rf=Gm("dragVertical");function Ym(e){let t=!1;if(e==="y")t=Rf();else if(e==="x")t=Mf();else{const n=Mf(),r=Rf();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Km(){const e=Ym(!0);return e?(e(),!1):!0}class zn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Lf(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Km())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&J.update(()=>a[r](o,s))};return Gt(e.current,n,i,{passive:!e.getProps()[r]})}class R2 extends zn{mount(){this.unmount=bn(Lf(this.node,!0),Lf(this.node,!1))}unmount(){}}class L2 extends zn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bn(Ut(this.node.current,"focus",()=>this.onFocus()),Ut(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Xm=(e,t)=>t?e===t?!0:Xm(e,t.parentElement):!1;function el(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ga(n))}class z2 extends zn{constructor(){super(...arguments),this.removeStartListeners=xe,this.removeEndListeners=xe,this.removeAccessibleListeners=xe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Gt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:d}=this.node.getProps();J.update(()=>{!d&&!Xm(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Gt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=bn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||el("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&J.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Ut(this.node.current,"keyup",s),el("down",(a,l)=>{this.startPress(a,l)})},n=Ut(this.node.current,"keydown",t),r=()=>{this.isPressing&&el("cancel",(o,s)=>this.cancelPress(o,s))},i=Ut(this.node.current,"blur",r);this.removeAccessibleListeners=bn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&J.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Km()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&J.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Gt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Ut(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=bn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const gc=new WeakMap,tl=new WeakMap,_2=e=>{const t=gc.get(e.target);t&&t(e)},D2=e=>{e.forEach(_2)};function N2({root:e,...t}){const n=e||document;tl.has(n)||tl.set(n,{});const r=tl.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(D2,{root:e,...t})),r[i]}function I2(e,t,n){const r=N2(t);return gc.set(e,n),r.observe(e),()=>{gc.delete(e),r.unobserve(e)}}const O2={some:0,all:1};class V2 extends zn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:O2[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return I2(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(F2(t,n))&&this.startObserver()}unmount(){}}function F2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const B2={inView:{Feature:V2},tap:{Feature:z2},focus:{Feature:L2},hover:{Feature:R2}};function Qm(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function H2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function U2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ya(e,t,n){const r=e.getProps();return Fu(r,t,n!==void 0?n:r.custom,H2(e),U2(e))}let qm=xe,va=xe;const Sn=e=>e*1e3,Dt=e=>e/1e3,W2={current:!1},Zm=e=>Array.isArray(e)&&typeof e[0]=="number";function Jm(e){return!!(!e||typeof e=="string"&&eg[e]||Zm(e)||Array.isArray(e)&&e.every(Jm))}const mi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,eg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mi([0,.65,.55,1]),circOut:mi([.55,0,1,.45]),backIn:mi([.31,.01,.66,-.59]),backOut:mi([.33,1.53,.69,.99])};function tg(e){if(e)return Zm(e)?mi(e):Array.isArray(e)?e.map(tg):eg[e]}function G2(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const u=tg(a);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function Y2(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const ng=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,K2=1e-7,X2=12;function Q2(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=ng(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>K2&&++a<X2);return s}function lo(e,t,n,r){if(e===t&&n===r)return xe;const i=o=>Q2(o,0,1,e,n);return o=>o===0||o===1?o:ng(i(o),t,r)}const q2=lo(.42,0,1,1),Z2=lo(0,0,.58,1),rg=lo(.42,0,.58,1),J2=e=>Array.isArray(e)&&typeof e[0]!="number",ig=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,og=e=>t=>1-e(1-t),Bu=e=>1-Math.sin(Math.acos(e)),sg=og(Bu),e5=ig(Bu),ag=lo(.33,1.53,.69,.99),Hu=og(ag),t5=ig(Hu),n5=e=>(e*=2)<1?.5*Hu(e):.5*(2-Math.pow(2,-10*(e-1))),r5={linear:xe,easeIn:q2,easeInOut:rg,easeOut:Z2,circIn:Bu,circInOut:e5,circOut:sg,backIn:Hu,backInOut:t5,backOut:ag,anticipate:n5},zf=e=>{if(Array.isArray(e)){va(e.length===4);const[t,n,r,i]=e;return lo(t,n,r,i)}else if(typeof e=="string")return r5[e];return e},Uu=(e,t)=>n=>!!(oo(n)&&o2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),lg=(e,t,n)=>r=>{if(!oo(r))return r;const[i,o,s,a]=r.match(ma);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},i5=e=>$n(0,255,e),nl={...or,transform:e=>Math.round(i5(e))},Wn={test:Uu("rgb","red"),parse:lg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+nl.transform(e)+", "+nl.transform(t)+", "+nl.transform(n)+", "+Ei(Ti.transform(r))+")"};function o5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const yc={test:Uu("#"),parse:o5,transform:Wn.transform},Cr={test:Uu("hsl","hue"),parse:lg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+_t.transform(Ei(t))+", "+_t.transform(Ei(n))+", "+Ei(Ti.transform(r))+")"},He={test:e=>Wn.test(e)||yc.test(e)||Cr.test(e),parse:e=>Wn.test(e)?Wn.parse(e):Cr.test(e)?Cr.parse(e):yc.parse(e),transform:e=>oo(e)?e:e.hasOwnProperty("red")?Wn.transform(e):Cr.transform(e)},me=(e,t,n)=>-n*e+n*t+e;function rl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function s5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=rl(l,a,e+1/3),o=rl(l,a,e),s=rl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const il=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},a5=[yc,Wn,Cr],l5=e=>a5.find(t=>t.test(e));function _f(e){const t=l5(e);let n=t.parse(e);return t===Cr&&(n=s5(n)),n}const cg=(e,t)=>{const n=_f(e),r=_f(t),i={...n};return o=>(i.red=il(n.red,r.red,o),i.green=il(n.green,r.green,o),i.blue=il(n.blue,r.blue,o),i.alpha=me(n.alpha,r.alpha,o),Wn.transform(i))};function c5(e){var t,n;return isNaN(e)&&oo(e)&&(((t=e.match(ma))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(_m))===null||n===void 0?void 0:n.length)||0)>0}const ug={regex:r2,countKey:"Vars",token:"${v}",parse:xe},dg={regex:_m,countKey:"Colors",token:"${c}",parse:He.parse},fg={regex:ma,countKey:"Numbers",token:"${n}",parse:or.parse};function ol(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function _s(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ol(n,ug),ol(n,dg),ol(n,fg),n}function pg(e){return _s(e).values}function hg(e){const{values:t,numColors:n,numVars:r,tokenised:i}=_s(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(ug.token,s[l]):l<r+n?a=a.replace(dg.token,He.transform(s[l])):a=a.replace(fg.token,Ei(s[l]));return a}}const u5=e=>typeof e=="number"?0:e;function d5(e){const t=pg(e);return hg(e)(t.map(u5))}const jn={test:c5,parse:pg,createTransformer:hg,getAnimatableNone:d5},mg=(e,t)=>n=>`${n>0?t:e}`;function gg(e,t){return typeof e=="number"?n=>me(e,t,n):He.test(e)?cg(e,t):e.startsWith("var(")?mg(e,t):vg(e,t)}const yg=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>gg(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},f5=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=gg(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},vg=(e,t)=>{const n=jn.createTransformer(t),r=_s(e),i=_s(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?bn(yg(r.values,i.values),n):mg(e,t)},Gr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Df=(e,t)=>n=>me(e,t,n);function p5(e){return typeof e=="number"?Df:typeof e=="string"?He.test(e)?cg:vg:Array.isArray(e)?yg:typeof e=="object"?f5:Df}function h5(e,t,n){const r=[],i=n||p5(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||xe:t;a=bn(l,a)}r.push(a)}return r}function xa(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(va(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=h5(t,r,i),a=s.length,l=c=>{let u=0;if(a>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const d=Gr(e[u],e[u+1],c);return s[u](d)};return n?c=>l($n(e[0],e[o-1],c)):l}function m5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Gr(0,t,r);e.push(me(n,1,i))}}function xg(e){const t=[0];return m5(t,e.length-1),t}function g5(e,t){return e.map(n=>n*t)}function y5(e,t){return e.map(()=>t||rg).splice(0,e.length-1)}function Ds({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=J2(r)?r.map(zf):zf(r),o={done:!1,value:t[0]},s=g5(n&&n.length===t.length?n:xg(t),e),a=xa(s,t,{ease:Array.isArray(i)?i:y5(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function Wu(e,t){return t?e*(1e3/t):0}const v5=5;function wg(e,t,n){const r=Math.max(t-v5,0);return Wu(n-e(r),t-r)}const sl=.001,x5=.01,Nf=10,w5=.05,b5=1;function S5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;qm(e<=Sn(Nf));let s=1-t;s=$n(w5,b5,s),e=$n(x5,Nf,Dt(e)),s<1?(i=c=>{const u=c*s,d=u*e,f=u-n,m=vc(c,s),v=Math.exp(-d);return sl-f/m*v},o=c=>{const d=c*s*e,f=d*n+n,m=Math.pow(s,2)*Math.pow(c,2)*e,v=Math.exp(-d),x=vc(Math.pow(c,2),s);return(-i(c)+sl>0?-1:1)*((f-m)*v)/x}):(i=c=>{const u=Math.exp(-c*e),d=(c-n)*e+1;return-sl+u*d},o=c=>{const u=Math.exp(-c*e),d=(n-c)*(e*e);return u*d});const a=5/e,l=C5(i,o,a);if(e=Sn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const k5=12;function C5(e,t,n){let r=n;for(let i=1;i<k5;i++)r=r-e(r)/t(r);return r}function vc(e,t){return e*Math.sqrt(1-t*t)}const P5=["duration","bounce"],T5=["stiffness","damping","mass"];function If(e,t){return t.some(n=>e[n]!==void 0)}function E5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!If(e,T5)&&If(e,P5)){const n=S5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function bg({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:u,velocity:d,isResolvedFromDuration:f}=E5({...r,velocity:-Dt(r.velocity||0)}),m=d||0,v=l/(2*Math.sqrt(a*c)),x=o-i,S=Dt(Math.sqrt(a/c)),g=Math.abs(x)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(v<1){const p=vc(S,v);h=w=>{const C=Math.exp(-v*S*w);return o-C*((m+v*S*x)/p*Math.sin(p*w)+x*Math.cos(p*w))}}else if(v===1)h=p=>o-Math.exp(-S*p)*(x+(m+S*x)*p);else{const p=S*Math.sqrt(v*v-1);h=w=>{const C=Math.exp(-v*S*w),T=Math.min(p*w,300);return o-C*((m+v*S*x)*Math.sinh(T)+p*x*Math.cosh(T))/p}}return{calculatedDuration:f&&u||null,next:p=>{const w=h(p);if(f)s.done=p>=u;else{let C=m;p!==0&&(v<1?C=wg(h,p,w):C=0);const T=Math.abs(C)<=n,P=Math.abs(o-w)<=t;s.done=T&&P}return s.value=s.done?o:w,s}}}function Of({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=e[0],f={done:!1,value:d},m=E=>a!==void 0&&E<a||l!==void 0&&E>l,v=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let x=n*t;const S=d+x,g=s===void 0?S:s(S);g!==S&&(x=g-d);const h=E=>-x*Math.exp(-E/r),p=E=>g+h(E),w=E=>{const _=h(E),L=p(E);f.done=Math.abs(_)<=c,f.value=f.done?g:L};let C,T;const P=E=>{m(f.value)&&(C=E,T=bg({keyframes:[f.value,v(f.value)],velocity:wg(p,E,f.value),damping:i,stiffness:o,restDelta:c,restSpeed:u}))};return P(0),{calculatedDuration:null,next:E=>{let _=!1;return!T&&C===void 0&&(_=!0,w(E),P(E)),C!==void 0&&E>C?T.next(E-C):(!_&&w(E),f)}}}const A5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>J.update(t,!0),stop:()=>Et(t),now:()=>Te.isProcessing?Te.timestamp:performance.now()}},Vf=2e4;function Ff(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Vf;)t+=n,r=e.next(t);return t>=Vf?1/0:t}const $5={decay:Of,inertia:Of,tween:Ds,keyframes:Ds,spring:bg};function Zi({autoplay:e=!0,delay:t=0,driver:n=A5,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:d,...f}){let m=1,v=!1,x,S;const g=()=>{S=new Promise(A=>{x=A})};g();let h;const p=$5[i]||Ds;let w;p!==Ds&&typeof r[0]!="number"&&(w=xa([0,100],r,{clamp:!1}),r=[0,100]);const C=p({...f,keyframes:r});let T;a==="mirror"&&(T=p({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let P="idle",E=null,_=null,L=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=Ff(C));const{calculatedDuration:H}=C;let W=1/0,K=1/0;H!==null&&(W=H+s,K=W*(o+1)-s);let X=0;const fe=A=>{if(_===null)return;m>0&&(_=Math.min(_,A)),m<0&&(_=Math.min(A-K/m,_)),E!==null?X=E:X=Math.round(A-_)*m;const I=X-t*(m>=0?1:-1),ee=m>=0?I<0:I>K;X=Math.max(I,0),P==="finished"&&E===null&&(X=K);let Q=X,pe=C;if(o){const et=Math.min(X,K)/W;let R=Math.floor(et),D=et%1;!D&&et>=1&&(D=1),D===1&&R--,R=Math.min(R,o+1),!!(R%2)&&(a==="reverse"?(D=1-D,s&&(D-=s/W)):a==="mirror"&&(pe=T)),Q=$n(0,1,D)*W}const ie=ee?{done:!1,value:r[0]}:pe.next(Q);w&&(ie.value=w(ie.value));let{done:Se}=ie;!ee&&H!==null&&(Se=m>=0?X>=K:X<=0);const lt=E===null&&(P==="finished"||P==="running"&&Se);return d&&d(ie.value),lt&&M(),ie},F=()=>{h&&h.stop(),h=void 0},G=()=>{P="idle",F(),x(),g(),_=L=null},M=()=>{P="finished",u&&u(),F(),x()},z=()=>{if(v)return;h||(h=n(fe));const A=h.now();l&&l(),E!==null?_=A-E:(!_||P==="finished")&&(_=A),P==="finished"&&g(),L=_,E=null,P="running",h.start()};e&&z();const j={then(A,I){return S.then(A,I)},get time(){return Dt(X)},set time(A){A=Sn(A),X=A,E!==null||!h||m===0?E=A:_=h.now()-A/m},get duration(){const A=C.calculatedDuration===null?Ff(C):C.calculatedDuration;return Dt(A)},get speed(){return m},set speed(A){A===m||!h||(m=A,j.time=Dt(X))},get state(){return P},play:z,pause:()=>{P="paused",E=X},stop:()=>{v=!0,P!=="idle"&&(P="idle",c&&c(),G())},cancel:()=>{L!==null&&fe(L),G()},complete:()=>{P="finished"},sample:A=>(_=0,fe(A))};return j}function j5(e){let t;return()=>(t===void 0&&(t=e()),t)}const M5=j5(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),R5=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Ro=10,L5=2e4,z5=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Jm(t.ease);function _5(e,t,{onUpdate:n,onComplete:r,...i}){if(!(M5()&&R5.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,c=!1;const u=()=>{l=new Promise(p=>{a=p})};u();let{keyframes:d,duration:f=300,ease:m,times:v}=i;if(z5(t,i)){const p=Zi({...i,repeat:0,delay:0});let w={done:!1,value:d[0]};const C=[];let T=0;for(;!w.done&&T<L5;)w=p.sample(T),C.push(w.value),T+=Ro;v=void 0,d=C,f=T-Ro,m="linear"}const x=G2(e.owner.current,t,d,{...i,duration:f,ease:m,times:v}),S=()=>{c=!1,x.cancel()},g=()=>{c=!0,J.update(S),a(),u()};return x.onfinish=()=>{c||(e.set(Y2(d,i)),r&&r(),g())},{then(p,w){return l.then(p,w)},attachTimeline(p){return x.timeline=p,x.onfinish=null,xe},get time(){return Dt(x.currentTime||0)},set time(p){x.currentTime=Sn(p)},get speed(){return x.playbackRate},set speed(p){x.playbackRate=p},get duration(){return Dt(f)},play:()=>{s||(x.play(),Et(S))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:p}=x;if(p){const w=Zi({...i,autoplay:!1});e.setWithVelocity(w.sample(p-Ro).value,w.sample(p).value,Ro)}g()},complete:()=>{c||x.finish()},cancel:g}}function D5({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:xe,pause:xe,stop:xe,then:o=>(o(),Promise.resolve()),cancel:xe,complete:xe});return t?Zi({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const N5={type:"spring",stiffness:500,damping:25,restSpeed:10},I5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),O5={type:"keyframes",duration:.8},V5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},F5=(e,{keyframes:t})=>t.length>2?O5:ir.has(e)?e.startsWith("scale")?I5(t[1]):N5:V5,xc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(jn.test(t)||t==="0")&&!t.startsWith("url(")),B5=new Set(["brightness","contrast","saturate","opacity"]);function H5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ma)||[];if(!r)return e;const i=n.replace(r,"");let o=B5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const U5=/([a-z-]*)\(.*?\)/g,wc={...jn,getAnimatableNone:e=>{const t=e.match(U5);return t?t.map(H5).join(" "):e}},W5={...Dm,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:wc,WebkitFilter:wc},Gu=e=>W5[e];function Sg(e,t){let n=Gu(e);return n!==wc&&(n=jn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const kg=e=>/^0[^.\s]+$/.test(e);function G5(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||kg(e)}function Y5(e,t,n,r){const i=xc(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let c=0;c<o.length;c++)o[c]===null&&(o[c]=c===0?s:o[c-1]),G5(o[c])&&l.push(c),typeof o[c]=="string"&&o[c]!=="none"&&o[c]!=="0"&&(a=o[c]);if(i&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];o[u]=Sg(t,a)}return o}function K5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function Yu(e,t){return e[t]||e.default||e}const X5={skipAnimations:!1},Ku=(e,t,n,r={})=>i=>{const o=Yu(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Sn(s);const l=Y5(t,e,n,o),c=l[0],u=l[l.length-1],d=xc(e,c),f=xc(e,u);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(K5(o)||(m={...m,...F5(e,m)}),m.duration&&(m.duration=Sn(m.duration)),m.repeatDelay&&(m.repeatDelay=Sn(m.repeatDelay)),!d||!f||W2.current||o.type===!1||X5.skipAnimations)return D5(m);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=_5(t,e,m);if(v)return v}return Zi(m)};function Ns(e){return!!(Be(e)&&e.add)}const Cg=e=>/^\-?\d*\.?\d+$/.test(e);function Xu(e,t){e.indexOf(t)===-1&&e.push(t)}function Qu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class qu{constructor(){this.subscriptions=[]}add(t){return Xu(this.subscriptions,t),()=>Qu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Q5=e=>!isNaN(parseFloat(e)),Ai={current:void 0};class q5{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Te;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,J.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>J.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Q5(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new qu);const r=this.events[t].add(n);return t==="change"?()=>{r(),J.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ai.current&&Ai.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Wu(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function St(e,t){return new q5(e,t)}const Pg=e=>t=>t.test(e),Z5={test:e=>e==="auto",parse:e=>e},Tg=[or,V,_t,nn,a2,s2,Z5],ai=e=>Tg.find(Pg(e)),J5=[...Tg,He,jn],ew=e=>J5.find(Pg(e));function tw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,St(n))}function nw(e,t){const n=ya(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=b2(o[s]);tw(e,s,a)}}function rw(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],c=t[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(Cg(u)||kg(u))?u=parseFloat(u):!ew(u)&&jn.test(c)&&(u=Sg(l,c)),e.addValue(l,St(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function iw(e,t){return t?(t[e]||t.default||t).from:void 0}function ow(e,t,n){const r={};for(const i in e){const o=iw(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function sw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function aw(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Eg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d),m=a[d];if(!f||m===void 0||u&&sw(u,d))continue;const v={delay:n,elapsed:0,...Yu(o||{},d)};if(window.HandoffAppearAnimations){const g=e.getProps()[$m];if(g){const h=window.HandoffAppearAnimations(g,d,f,J);h!==null&&(v.elapsed=h,v.isHandoff=!0)}}let x=!v.isHandoff&&!aw(f,m);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(Ku(d,f,m,e.shouldReduceMotion&&ir.has(d)?{type:!1}:v));const S=f.animation;Ns(l)&&(l.add(d),S.then(()=>l.remove(d))),c.push(S)}return s&&Promise.all(c).then(()=>{s&&nw(e,s)}),c}function bc(e,t,n={}){const r=ya(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Eg(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:d}=i;return lw(e,t,c+l,u,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,c]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>c())}else return Promise.all([o(),s(n.delay)])}function lw(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(cw).forEach((c,u)=>{c.notify("AnimationStart",t),s.push(bc(c,t,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function cw(e,t){return e.sortNodePosition(t)}function uw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>bc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=bc(e,t,n);else{const i=typeof t=="function"?ya(e,t,n.custom):t;r=Promise.all(Eg(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const dw=[...Ru].reverse(),fw=Ru.length;function pw(e){return t=>Promise.all(t.map(({animation:n,options:r})=>uw(e,n,r)))}function hw(e){let t=pw(e);const n=gw();let r=!0;const i=(l,c)=>{const u=ya(e,c);if(u){const{transition:d,transitionEnd:f,...m}=u;l={...l,...m,...f}}return l};function o(l){t=l(e)}function s(l,c){const u=e.getProps(),d=e.getVariantContext(!0)||{},f=[],m=new Set;let v={},x=1/0;for(let g=0;g<fw;g++){const h=dw[g],p=n[h],w=u[h]!==void 0?u[h]:d[h],C=Qi(w),T=h===c?p.isActive:null;T===!1&&(x=g);let P=w===d[h]&&w!==u[h]&&C;if(P&&r&&e.manuallyAnimateOnMount&&(P=!1),p.protectedKeys={...v},!p.isActive&&T===null||!w&&!p.prevProp||pa(w)||typeof w=="boolean")continue;let _=mw(p.prevProp,w)||h===c&&p.isActive&&!P&&C||g>x&&C,L=!1;const H=Array.isArray(w)?w:[w];let W=H.reduce(i,{});T===!1&&(W={});const{prevResolvedValues:K={}}=p,X={...K,...W},fe=F=>{_=!0,m.has(F)&&(L=!0,m.delete(F)),p.needsAnimating[F]=!0};for(const F in X){const G=W[F],M=K[F];if(v.hasOwnProperty(F))continue;let z=!1;zs(G)&&zs(M)?z=!Qm(G,M):z=G!==M,z?G!==void 0?fe(F):m.add(F):G!==void 0&&m.has(F)?fe(F):p.protectedKeys[F]=!0}p.prevProp=w,p.prevResolvedValues=W,p.isActive&&(v={...v,...W}),r&&e.blockInitialAnimation&&(_=!1),_&&(!P||L)&&f.push(...H.map(F=>({animation:F,options:{type:h,...l}})))}if(m.size){const g={};m.forEach(h=>{const p=e.getBaseTarget(h);p!==void 0&&(g[h]=p)}),f.push({animation:g})}let S=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(f):Promise.resolve()}function a(l,c,u){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var v;return(v=m.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),n[l].isActive=c;const f=s(u,l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function mw(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Qm(t,e):!1}function _n(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gw(){return{animate:_n(!0),whileInView:_n(),whileHover:_n(),whileTap:_n(),whileDrag:_n(),whileFocus:_n(),exit:_n()}}class yw extends zn{constructor(t){super(t),t.animationState||(t.animationState=hw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),pa(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let vw=0;class xw extends zn{constructor(){super(...arguments),this.id=vw++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const ww={animation:{Feature:yw},exit:{Feature:xw}},Bf=(e,t)=>Math.abs(e-t);function bw(e,t){const n=Bf(e.x,t.x),r=Bf(e.y,t.y);return Math.sqrt(n**2+r**2)}class Ag{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=ll(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,m=bw(d.offset,{x:0,y:0})>=3;if(!f&&!m)return;const{point:v}=d,{timestamp:x}=Te;this.history.push({...v,timestamp:x});const{onStart:S,onMove:g}=this.handlers;f||(S&&S(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=al(f,this.transformPagePoint),J.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:m,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=ll(d.type==="pointercancel"?this.lastMoveEventInfo:al(f,this.transformPagePoint),this.history);this.startEvent&&m&&m(d,S),v&&v(d,S)},!Wm(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=ga(t),a=al(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Te;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,ll(a,this.history)),this.removeListeners=bn(Gt(this.contextWindow,"pointermove",this.handlePointerMove),Gt(this.contextWindow,"pointerup",this.handlePointerUp),Gt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Et(this.updatePoint)}}function al(e,t){return t?{point:t(e.point)}:e}function Hf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ll({point:e},t){return{point:e,delta:Hf(e,$g(t)),offset:Hf(e,Sw(t)),velocity:kw(t,.1)}}function Sw(e){return e[0]}function $g(e){return e[e.length-1]}function kw(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=$g(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Sn(t)));)n--;if(!r)return{x:0,y:0};const o=Dt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ot(e){return e.max-e.min}function Sc(e,t=0,n=.01){return Math.abs(e-t)<=n}function Uf(e,t,n,r=.5){e.origin=r,e.originPoint=me(t.min,t.max,e.origin),e.scale=ot(n)/ot(t),(Sc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=me(n.min,n.max,e.origin)-e.originPoint,(Sc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function $i(e,t,n,r){Uf(e.x,t.x,n.x,r?r.originX:void 0),Uf(e.y,t.y,n.y,r?r.originY:void 0)}function Wf(e,t,n){e.min=n.min+t.min,e.max=e.min+ot(t)}function Cw(e,t,n){Wf(e.x,t.x,n.x),Wf(e.y,t.y,n.y)}function Gf(e,t,n){e.min=t.min-n.min,e.max=e.min+ot(t)}function ji(e,t,n){Gf(e.x,t.x,n.x),Gf(e.y,t.y,n.y)}function Pw(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?me(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?me(n,e,r.max):Math.min(e,n)),e}function Yf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Tw(e,{top:t,left:n,bottom:r,right:i}){return{x:Yf(e.x,n,i),y:Yf(e.y,t,r)}}function Kf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ew(e,t){return{x:Kf(e.x,t.x),y:Kf(e.y,t.y)}}function Aw(e,t){let n=.5;const r=ot(e),i=ot(t);return i>r?n=Gr(t.min,t.max-r,e.min):r>i&&(n=Gr(e.min,e.max-i,t.min)),$n(0,1,n)}function $w(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const kc=.35;function jw(e=kc){return e===!1?e=0:e===!0&&(e=kc),{x:Xf(e,"left","right"),y:Xf(e,"top","bottom")}}function Xf(e,t,n){return{min:Qf(e,t),max:Qf(e,n)}}function Qf(e,t){return typeof e=="number"?e:e[t]||0}const qf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Pr=()=>({x:qf(),y:qf()}),Zf=()=>({min:0,max:0}),ke=()=>({x:Zf(),y:Zf()});function ut(e){return[e("x"),e("y")]}function jg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Mw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Rw(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function cl(e){return e===void 0||e===1}function Cc({scale:e,scaleX:t,scaleY:n}){return!cl(e)||!cl(t)||!cl(n)}function In(e){return Cc(e)||Mg(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Mg(e){return Jf(e.x)||Jf(e.y)}function Jf(e){return e&&e!=="0%"}function Is(e,t,n){const r=e-n,i=t*r;return n+i}function ep(e,t,n,r,i){return i!==void 0&&(e=Is(e,i,r)),Is(e,n,r)+t}function Pc(e,t=0,n=1,r,i){e.min=ep(e.min,t,n,r,i),e.max=ep(e.max,t,n,r,i)}function Rg(e,{x:t,y:n}){Pc(e.x,t.translate,t.scale,t.originPoint),Pc(e.y,n.translate,n.scale,n.originPoint)}function Lw(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Tr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Rg(e,s)),r&&In(o.latestValues)&&Tr(e,o.latestValues))}t.x=tp(t.x),t.y=tp(t.y)}function tp(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function an(e,t){e.min=e.min+t,e.max=e.max+t}function np(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=me(e.min,e.max,o);Pc(e,t[n],t[r],s,t.scale)}const zw=["x","scaleX","originX"],_w=["y","scaleY","originY"];function Tr(e,t){np(e.x,t,zw),np(e.y,t,_w)}function Lg(e,t){return jg(Rw(e.getBoundingClientRect(),t))}function Dw(e,t,n){const r=Lg(e,n),{scroll:i}=t;return i&&(an(r.x,i.offset.x),an(r.y,i.offset.y)),r}const zg=({current:e})=>e?e.ownerDocument.defaultView:null,Nw=new WeakMap;class Iw{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ke(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ga(u,"page").point)},o=(u,d)=>{const{drag:f,dragPropagation:m,onDragStart:v}=this.getProps();if(f&&!m&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ym(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ut(S=>{let g=this.getAxisMotionValue(S).get()||0;if(_t.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const p=h.layout.layoutBox[S];p&&(g=ot(p)*(parseFloat(g)/100))}}this.originPoint[S]=g}),v&&J.update(()=>v(u,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(u,d)=>{const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:S}=d;if(m&&this.currentDirection===null){this.currentDirection=Ow(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,S),this.updateAxis("y",d.point,S),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>ut(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Ag(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:zg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&J.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Lo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Pw(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&kr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Tw(i.layoutBox,n):this.constraints=!1,this.elastic=jw(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ut(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=$w(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!kr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Dw(r,i.root,this.visualElement.getTransformPagePoint());let s=Ew(i.layout.layoutBox,o);if(n){const a=n(Mw(s));this.hasMutatedConstraints=!!a,a&&(s=jg(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ut(u=>{if(!Lo(u,n,this.currentDirection))return;let d=l&&l[u]||{};s&&(d={min:0,max:0});const f=i?200:1e6,m=i?40:1e7,v={type:"inertia",velocity:r?t[u]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Ku(t,r,0,n))}stopAnimation(){ut(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ut(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ut(n=>{const{drag:r}=this.getProps();if(!Lo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-me(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!kr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ut(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=Aw({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ut(s=>{if(!Lo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(me(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;Nw.set(this.visualElement,this);const t=this.visualElement.current,n=Gt(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();kr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Ut(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(ut(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=kc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Lo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Ow(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Vw extends zn{constructor(t){super(t),this.removeGroupControls=xe,this.removeListeners=xe,this.controls=new Iw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xe}unmount(){this.removeGroupControls(),this.removeListeners()}}const rp=e=>(t,n)=>{e&&J.update(()=>e(t,n))};class Fw extends zn{constructor(){super(...arguments),this.removePointerDownListener=xe}onPointerDown(t){this.session=new Ag(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:zg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:rp(t),onStart:rp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&J.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Gt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Bw(){const e=b.useContext(da);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const Jo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ip(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const li={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(V.test(e))e=parseFloat(e);else return e;const n=ip(e,t.target.x),r=ip(e,t.target.y);return`${n}% ${r}%`}},Hw={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=jn.parse(e);if(i.length>5)return r;const o=jn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=me(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}};class Uw extends de.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Jx(Ww),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Jo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||J.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function _g(e){const[t,n]=Bw(),r=b.useContext(zu);return de.createElement(Uw,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Mm),isPresent:t,safeToRemove:n})}const Ww={borderRadius:{...li,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:li,borderTopRightRadius:li,borderBottomLeftRadius:li,borderBottomRightRadius:li,boxShadow:Hw},Dg=["TopLeft","TopRight","BottomLeft","BottomRight"],Gw=Dg.length,op=e=>typeof e=="string"?parseFloat(e):e,sp=e=>typeof e=="number"||V.test(e);function Yw(e,t,n,r,i,o){i?(e.opacity=me(0,n.opacity!==void 0?n.opacity:1,Kw(r)),e.opacityExit=me(t.opacity!==void 0?t.opacity:1,0,Xw(r))):o&&(e.opacity=me(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<Gw;s++){const a=`border${Dg[s]}Radius`;let l=ap(t,a),c=ap(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||sp(l)===sp(c)?(e[a]=Math.max(me(op(l),op(c),r),0),(_t.test(c)||_t.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=me(t.rotate||0,n.rotate||0,r))}function ap(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Kw=Ng(0,.5,sg),Xw=Ng(.5,.95,xe);function Ng(e,t,n){return r=>r<e?0:r>t?1:n(Gr(e,t,r))}function lp(e,t){e.min=t.min,e.max=t.max}function ct(e,t){lp(e.x,t.x),lp(e.y,t.y)}function cp(e,t,n,r,i){return e-=t,e=Is(e,1/n,r),i!==void 0&&(e=Is(e,1/i,r)),e}function Qw(e,t=0,n=1,r=.5,i,o=e,s=e){if(_t.test(t)&&(t=parseFloat(t),t=me(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=me(o.min,o.max,r);e===o&&(a-=t),e.min=cp(e.min,t,n,a,i),e.max=cp(e.max,t,n,a,i)}function up(e,t,[n,r,i],o,s){Qw(e,t[n],t[r],t[i],t.scale,o,s)}const qw=["x","scaleX","originX"],Zw=["y","scaleY","originY"];function dp(e,t,n,r){up(e.x,t,qw,n?n.x:void 0,r?r.x:void 0),up(e.y,t,Zw,n?n.y:void 0,r?r.y:void 0)}function fp(e){return e.translate===0&&e.scale===1}function Ig(e){return fp(e.x)&&fp(e.y)}function Jw(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Og(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function pp(e){return ot(e.x)/ot(e.y)}class eb{constructor(){this.members=[]}add(t){Xu(this.members,t),t.scheduleRender()}remove(t){if(Qu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function hp(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),u&&(r+=`rotateY(${u}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const tb=(e,t)=>e.depth-t.depth;class nb{constructor(){this.children=[],this.isDirty=!1}add(t){Xu(this.children,t),this.isDirty=!0}remove(t){Qu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(tb),this.isDirty=!1,this.children.forEach(t)}}function rb(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Et(r),e(o-t))};return J.read(r,!0),()=>Et(r)}function ib(e){window.MotionDebug&&window.MotionDebug.record(e)}function ob(e){return e instanceof SVGElement&&e.tagName!=="svg"}function sb(e,t,n){const r=Be(e)?e:St(e);return r.start(Ku("",r,t,n)),r.animation}const mp=["","X","Y","Z"],ab={visibility:"hidden"},gp=1e3;let lb=0;const On={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Vg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=lb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,On.totalNodes=On.resolvedTargetDeltas=On.recalculatedProjection=0,this.nodes.forEach(db),this.nodes.forEach(gb),this.nodes.forEach(yb),this.nodes.forEach(fb),ib(On)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new nb)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new qu),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ob(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=rb(f,250),Jo.hasAnimatedSinceResize&&(Jo.hasAnimatedSinceResize=!1,this.nodes.forEach(vp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||Sb,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=u.getProps(),h=!this.targetLayout||!Og(this.targetLayout,v)||m,p=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,p);const w={...Yu(x,"layout"),onPlay:S,onComplete:g};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||vp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Et(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vb),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(yp);return}this.isUpdating||this.nodes.forEach(hb),this.isUpdating=!1,this.nodes.forEach(mb),this.nodes.forEach(cb),this.nodes.forEach(ub),this.clearAllSnapshots();const a=performance.now();Te.delta=$n(0,1e3/60,a-Te.timestamp),Te.timestamp=a,Te.isProcessing=!0,Ja.update.process(Te),Ja.preRender.process(Te),Ja.render.process(Te),Te.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(pb),this.sharedNodes.forEach(xb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,J.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){J.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Ig(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;s&&(a||In(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),kb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ke();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(an(a.x,l.offset.x),an(a.y,l.offset.y)),a}removeElementScroll(s){const a=ke();ct(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;if(c!==this.root&&u&&d.layoutScroll){if(u.isRoot){ct(a,s);const{scroll:f}=this.root;f&&(an(a.x,-f.offset.x),an(a.y,-f.offset.y))}an(a.x,u.offset.x),an(a.y,u.offset.y)}}return a}applyTransform(s,a=!1){const l=ke();ct(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Tr(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),In(u.latestValues)&&Tr(l,u.latestValues)}return In(this.latestValues)&&Tr(l,this.latestValues),l}removeTransform(s){const a=ke();ct(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!In(c.latestValues))continue;Cc(c.latestValues)&&c.updateSnapshot();const u=ke(),d=c.measurePageBox();ct(u,d),dp(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return In(this.latestValues)&&dp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Te.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Te.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),ji(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ke(),this.targetWithTransforms=ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Cw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ct(this.target,this.layout.layoutBox),Rg(this.target,this.targetDelta)):ct(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),ji(this.relativeTargetOrigin,this.target,m.target),ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}On.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Cc(this.parent.latestValues)||Mg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Te.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;ct(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,m=this.treeScale.y;Lw(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Pr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Pr(),this.projectionDeltaWithTransform=Pr());const x=this.projectionTransform;$i(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=hp(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),On.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Pr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ke(),m=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=m!==v,S=this.getStack(),g=!S||S.members.length<=1,h=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(bb));this.animationProgress=0;let p;this.mixTargetDelta=w=>{const C=w/1e3;xp(d.x,s.x,C),xp(d.y,s.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ji(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),wb(this.relativeTarget,this.relativeTargetOrigin,f,C),p&&Jw(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=ke()),ct(p,this.relativeTarget)),x&&(this.animationValues=u,Yw(u,c,this.latestValues,C,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Et(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=J.update(()=>{Jo.hasAnimatedSinceResize=!0,this.currentAnimation=sb(0,gp,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&Fg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ke();const d=ot(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=ot(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}ct(a,l),Tr(a,u),$i(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new eb),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<mp.length;u++){const d="rotate"+mp[u];l[d]&&(c[d]=l[d],s.setStaticValue(d,0))}s.render();for(const u in c)s.setStaticValue(u,c[u]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ab;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Zo(s==null?void 0:s.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Zo(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!In(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=hp(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:m,y:v}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Rs){if(f[x]===void 0)continue;const{correct:S,applyTo:g}=Rs[x],h=c.transform==="none"?f[x]:S(f[x],d);if(g){const p=g.length;for(let w=0;w<p;w++)c[g[w]]=h}else c[x]=h}return this.options.layoutId&&(c.pointerEvents=d===this?Zo(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(yp),this.root.sharedNodes.clear()}}}function cb(e){e.updateLayout()}function ub(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?ut(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],m=ot(f);f.min=r[d].min,f.max=f.min+m}):Fg(o,n.layoutBox,r)&&ut(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],m=ot(r[d]);f.max=f.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+m)});const a=Pr();$i(a,r,n.layoutBox);const l=Pr();s?$i(l,e.applyTransform(i,!0),n.measuredBox):$i(l,r,n.layoutBox);const c=!Ig(a);let u=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:m}=d;if(f&&m){const v=ke();ji(v,n.layoutBox,f.layoutBox);const x=ke();ji(x,r,m.layoutBox),Og(v,x)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function db(e){On.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function fb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function pb(e){e.clearSnapshot()}function yp(e){e.clearMeasurements()}function hb(e){e.isLayoutDirty=!1}function mb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function vp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function gb(e){e.resolveTargetDelta()}function yb(e){e.calcProjection()}function vb(e){e.resetRotation()}function xb(e){e.removeLeadSnapshot()}function xp(e,t,n){e.translate=me(t.translate,0,n),e.scale=me(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function wp(e,t,n,r){e.min=me(t.min,n.min,r),e.max=me(t.max,n.max,r)}function wb(e,t,n,r){wp(e.x,t.x,n.x,r),wp(e.y,t.y,n.y,r)}function bb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Sb={duration:.45,ease:[.4,0,.1,1]},bp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Sp=bp("applewebkit/")&&!bp("chrome/")?Math.round:xe;function kp(e){e.min=Sp(e.min),e.max=Sp(e.max)}function kb(e){kp(e.x),kp(e.y)}function Fg(e,t,n){return e==="position"||e==="preserve-aspect"&&!Sc(pp(t),pp(n),.2)}const Cb=Vg({attachResizeListener:(e,t)=>Ut(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ul={current:void 0},Bg=Vg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ul.current){const e=new Cb({});e.mount(window),e.setOptions({layoutScroll:!0}),ul.current=e}return ul.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Pb={pan:{Feature:Fw},drag:{Feature:Vw,ProjectionNode:Bg,MeasureLayout:_g}},Tb=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Eb(e){const t=Tb.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Tc(e,t,n=1){const[r,i]=Eb(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Cg(s)?parseFloat(s):s}else return mc(i)?Tc(i,t,n+1):i}function Ab(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!mc(o))return;const s=Tc(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!mc(o))continue;const s=Tc(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const $b=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Hg=e=>$b.has(e),jb=e=>Object.keys(e).some(Hg),Cp=e=>e===or||e===V,Pp=(e,t)=>parseFloat(e.split(", ")[t]),Tp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Pp(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?Pp(o[1],e):0}},Mb=new Set(["x","y","z"]),Rb=io.filter(e=>!Mb.has(e));function Lb(e){const t=[];return Rb.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Yr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Tp(4,13),y:Tp(5,14)};Yr.translateX=Yr.x;Yr.translateY=Yr.y;const zb=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{a[c]=Yr[c](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const u=t.getValue(c);u&&u.jump(a[c]),e[c]=Yr[c](l,o)}),e},_b=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Hg);let o=[],s=!1;const a=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let u=n[l],d=ai(u);const f=t[l];let m;if(zs(f)){const v=f.length,x=f[0]===null?1:0;u=f[x],d=ai(u);for(let S=x;S<v&&f[S]!==null;S++)m?va(ai(f[S])===m):m=ai(f[S])}else m=ai(f);if(d!==m)if(Cp(d)&&Cp(m)){const v=c.get();typeof v=="string"&&c.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&m===V&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(m!=null&&m.transform)&&(u===0||f===0)?u===0?c.set(m.transform(u)):t[l]=d.transform(f):(s||(o=Lb(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],c.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=zb(t,e,a);return o.length&&o.forEach(([u,d])=>{e.getValue(u).set(d)}),e.render(),fa&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Db(e,t,n,r){return jb(t)?_b(e,t,n,r):{target:t,transitionEnd:r}}const Nb=(e,t,n,r)=>{const i=Ab(e,t,r);return t=i.target,r=i.transitionEnd,Db(e,t,n,r)},Ec={current:null},Ug={current:!1};function Ib(){if(Ug.current=!0,!!fa)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ec.current=e.matches;e.addListener(t),t()}else Ec.current=!1}function Ob(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Be(o))e.addValue(i,o),Ns(r)&&r.add(i);else if(Be(s))e.addValue(i,St(o,{owner:e})),Ns(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,St(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Ep=new WeakMap,Wg=Object.keys(qi),Vb=Wg.length,Ap=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Fb=Lu.length;class Bb{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>J.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=ha(n),this.isVariantNode=jm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const f=u[d];a[d]!==void 0&&Be(f)&&(f.set(a[d],!1),Ns(c)&&c.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Ep.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Ug.current||Ib(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ec.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ep.delete(this.current),this.projection&&this.projection.unmount(),Et(this.notifyUpdate),Et(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=ir.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&J.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<Vb;l++){const c=Wg[l],{isEnabled:u,Feature:d,ProjectionNode:f,MeasureLayout:m}=qi[c];f&&(s=f),u(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),m&&(a=m))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:m}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||d&&kr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:m})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ke()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Ap.length;r++){const i=Ap[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Ob(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Fb;r++){const i=Lu[r],o=this.props[i];(Qi(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=St(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Fu(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Be(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new qu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Gg extends Bb{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=ow(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){rw(this,r,s);const a=Nb(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function Hb(e){return window.getComputedStyle(e)}class Ub extends Gg{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(ir.has(n)){const r=Gu(n);return r&&r.default||0}else{const r=Hb(t),i=(zm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Lg(t,n)}build(t,n,r,i){Du(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Vu(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Be(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Vm(t,n,r,i)}}class Wb extends Gg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ir.has(n)){const r=Gu(n);return r&&r.default||0}return n=Fm.has(n)?n:Mu(n),t.getAttribute(n)}measureInstanceViewportBox(){return ke()}scrapeMotionValuesFromProps(t,n){return Hm(t,n)}build(t,n,r,i){Iu(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Bm(t,n,r,i)}mount(t){this.isSVGTag=Ou(t.tagName),super.mount(t)}}const Gb=(e,t)=>_u(e)?new Wb(t,{enableHardwareAcceleration:!1}):new Ub(t,{enableHardwareAcceleration:!0}),Yb={layout:{ProjectionNode:Bg,MeasureLayout:_g}},Kb={...ww,...B2,...Pb,...Yb},O=qx((e,t)=>$2(e,t,Kb,Gb));function Yg(){const e=b.useRef(!1);return Zr(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Xb(){const e=Yg(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>J.postRender(r),[r]),t]}class Qb extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function qb({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),b.createElement(Qb,{isPresent:t,childRef:r,sizeRef:i},b.cloneElement(e,{ref:r}))}const dl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=ao(Zb),l=b.useId(),c=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u=>{a.set(u,!0);for(const d of a.values())if(!d)return;r&&r()},register:u=>(a.set(u,!1),()=>a.delete(u))}),o?void 0:[n]);return b.useMemo(()=>{a.forEach((u,d)=>a.set(d,!1))},[n]),b.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=b.createElement(qb,{isPresent:n},e)),b.createElement(da.Provider,{value:c},e)};function Zb(){return new Map}function Jb(e){return b.useEffect(()=>()=>e(),[])}const Vn=e=>e.key||"";function e3(e,t){e.forEach(n=>{const r=Vn(n);t.set(r,n)})}function t3(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Nt=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=b.useContext(zu).forceRender||Xb()[0],l=Yg(),c=t3(e);let u=c;const d=b.useRef(new Map).current,f=b.useRef(u),m=b.useRef(new Map).current,v=b.useRef(!0);if(Zr(()=>{v.current=!1,e3(c,m),f.current=u}),Jb(()=>{v.current=!0,m.clear(),d.clear()}),v.current)return b.createElement(b.Fragment,null,u.map(h=>b.createElement(dl,{key:Vn(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},h)));u=[...u];const x=f.current.map(Vn),S=c.map(Vn),g=x.length;for(let h=0;h<g;h++){const p=x[h];S.indexOf(p)===-1&&!d.has(p)&&d.set(p,void 0)}return s==="wait"&&d.size&&(u=[]),d.forEach((h,p)=>{if(S.indexOf(p)!==-1)return;const w=m.get(p);if(!w)return;const C=x.indexOf(p);let T=h;if(!T){const P=()=>{d.delete(p);const E=Array.from(m.keys()).filter(_=>!S.includes(_));if(E.forEach(_=>m.delete(_)),f.current=c.filter(_=>{const L=Vn(_);return L===p||E.includes(L)}),!d.size){if(l.current===!1)return;a(),r&&r()}};T=b.createElement(dl,{key:Vn(w),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:o,mode:s},w),d.set(p,T)}u.splice(C,0,T)}),u=u.map(h=>{const p=h.key;return d.has(p)?h:b.createElement(dl,{key:Vn(h),isPresent:!0,presenceAffectsLayout:o,mode:s},h)}),b.createElement(b.Fragment,null,d.size?u:u.map(h=>b.cloneElement(h)))};function Zu(e){const t=ao(()=>St(e)),{isStatic:n}=b.useContext(ca);if(n){const[,r]=b.useState(e);b.useEffect(()=>t.on("change",r),[])}return t}const n3=e=>e&&typeof e=="object"&&e.mix,r3=e=>n3(e)?e.mix:void 0;function i3(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=xa(i,o,{mixer:r3(o[0]),...s});return t?a(r):a}function Kg(e,t){const n=Zu(t()),r=()=>n.set(t());return r(),Zr(()=>{const i=()=>J.update(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Et(r)}}),n}function o3(e){Ai.current=[],e();const t=Kg(Ai.current,e);return Ai.current=void 0,t}function s3(e,t,n,r){if(typeof e=="function")return o3(e);const i=typeof t=="function"?t:i3(t,n,r);return Array.isArray(e)?$p(e,i):$p([e],([o])=>i(o))}function $p(e,t){const n=ao(()=>[]);return Kg(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function a3(e,t={}){const{isStatic:n}=b.useContext(ca),r=b.useRef(null),i=Zu(Be(e)?e.get():e),o=()=>{r.current&&r.current.stop()};return b.useInsertionEffect(()=>i.attach((s,a)=>{if(n)return a(s);if(o(),r.current=Zi({keyframes:[i.get(),s],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:a}),!Te.isProcessing){const l=performance.now()-Te.timestamp;l<30&&(r.current.time=Dt(l))}return i.get()},o),[JSON.stringify(t)]),Zr(()=>{if(Be(e))return e.on("change",s=>i.set(parseFloat(s)))},[i]),i}function l3(e,t,n){var r;if(typeof e=="string"){let i=document;t&&(va(!!t.current),i=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const es=new WeakMap;let rn;function c3(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function u3({target:e,contentRect:t,borderBoxSize:n}){var r;(r=es.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return c3(e,n)}})})}function d3(e){e.forEach(u3)}function f3(){typeof ResizeObserver>"u"||(rn=new ResizeObserver(d3))}function p3(e,t){rn||f3();const n=l3(e);return n.forEach(r=>{let i=es.get(r);i||(i=new Set,es.set(r,i)),i.add(t),rn==null||rn.observe(r)}),()=>{n.forEach(r=>{const i=es.get(r);i==null||i.delete(t),i!=null&&i.size||rn==null||rn.unobserve(r)})}}const ts=new Set;let Mi;function h3(){Mi=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ts.forEach(n=>n(t))},window.addEventListener("resize",Mi)}function m3(e){return ts.add(e),Mi||h3(),()=>{ts.delete(e),!ts.size&&Mi&&(Mi=void 0)}}function g3(e,t){return typeof e=="function"?m3(e):p3(e,t)}const y3=50,jp=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v3=()=>({time:0,x:jp(),y:jp()}),x3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Mp(e,t,n,r){const i=n[t],{length:o,position:s}=x3[t],a=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Gr(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>y3?0:Wu(i.current-a,c)}function w3(e,t,n){Mp(e,"x",t,n),Mp(e,"y",t,n),t.time=n}function b3(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const S3={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Ac={start:0,center:.5,end:1};function Rp(e,t,n=0){let r=0;if(Ac[e]!==void 0&&(e=Ac[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const k3=[0,0];function C3(e,t,n,r){let i=Array.isArray(e)?e:k3,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Ac[e]?e:"0"]),o=Rp(i[0],n,r),s=Rp(i[1],t),o-s}const P3={x:0,y:0};function T3(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function E3(e,t,n){let{offset:r=S3.All}=n;const{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?b3(i,e):P3,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:T3(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const d=r.length;for(let f=0;f<d;f++){const m=C3(r[f],c[s],l[s],a[o]);!u&&m!==t[o].interpolatorOffsets[f]&&(u=!0),t[o].offset[f]=m}u&&(t[o].interpolate=xa(t[o].offset,xg(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function A3(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function $3(e,t,n,r={}){return{measure:()=>A3(e,r.target,n),update:i=>{w3(e,n,i),(r.offset||r.target)&&E3(e,n,r)},notify:()=>t(n)}}const ci=new WeakMap,Lp=new WeakMap,fl=new WeakMap,zp=e=>e===document.documentElement?window:e;function j3(e,{container:t=document.documentElement,...n}={}){let r=fl.get(t);r||(r=new Set,fl.set(t,r));const i=v3(),o=$3(t,e,i,n);if(r.add(o),!ci.has(t)){const a=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(Te.timestamp)},c=()=>{for(const f of r)f.notify()},u=()=>{J.read(a,!1,!0),J.read(l,!1,!0),J.update(c,!1,!0)};ci.set(t,u);const d=zp(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&Lp.set(t,g3(t,u)),d.addEventListener("scroll",u,{passive:!0})}const s=ci.get(t);return J.read(s,!1,!0),()=>{var a;Et(s);const l=fl.get(t);if(!l||(l.delete(o),l.size))return;const c=ci.get(t);ci.delete(t),c&&(zp(t).removeEventListener("scroll",c),(a=Lp.get(t))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function _p(e,t){qm(!!(!t||t.current))}const M3=()=>({scrollX:St(0),scrollY:St(0),scrollXProgress:St(0),scrollYProgress:St(0)});function R3({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=ao(M3);return(n?Zr:b.useEffect)(()=>(_p("target",t),_p("container",e),j3(({x:s,y:a})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(a.current),i.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const L3={classical:"/assets/covers/classical_cover.jpg",rock:"/assets/covers/rock_cover.jpeg",pop:"/assets/covers/pop_cover.jpeg",electronic:"/assets/covers/electronic_cover.jpeg",jazz:"/assets/covers/jazz_cover.jpeg",ambient:"/assets/covers/ambient_cover.jpeg",soundtrack:"/assets/covers/galaxy_2.gif",hiphop:"/assets/covers/hiphop_cover.jpg"},oe={chopin:"/assets/covers/chopin.jpeg",chopin_etudes:"/assets/covers/chopin_etudes.jpeg",bach:"/assets/covers/bach.jpeg",queen:"/assets/covers/rock_cover.jpg",bonJovi:"/assets/covers/bon_jovi.jpeg",rema:"/assets/covers/rema.jpg",rosalia:"/assets/covers/rosalia.jpg",eminem:"/assets/covers/eminem.jpg",liebestraume:"/assets/covers/liebestraume.jpg",rema_calm_down:"/assets/covers/rema_calm_down.jpeg",memory_reboot:"/assets/covers/memory_reboot.jpeg"},Dp={Stan:"/assets/covers/stan.jpeg"},pl={urban_blues:"/assets/covers/urban_blues.jpeg",miss_g:"/assets/covers/miss_g.jpeg"},Z={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"},Zt=[{id:"classical-1",title:"Air on G String",artist:"Johann Sebastian Bach",album:"Orchestral Suites",genre:"classical",coverArt:oe.bach,audioSrc:"/assets/musics/single_tracks/air_on_g_string.mp3",duration:180,color:Z.classical},{id:"classical-3",title:"Etude Op. 10 No. 4",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:oe.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_4.mp3",duration:120,color:Z.classical},{id:"classical-4",title:"Etude Op. 25 No. 11",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:oe.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_23.mp3",duration:260,color:Z.classical},{id:"classical-5",title:"Liebestraume No. 3",artist:"Franz Liszt",album:"Piano Dreams",genre:"classical",coverArt:oe.liebestraume,audioSrc:"/assets/musics/single_tracks/liebestraume_no_3.mp3",duration:295,color:Z.classical},{id:"nocturne-1",title:"Nocturne Op. 9 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_1.mp3",duration:310,color:Z.classical},{id:"nocturne-2",title:"Nocturne Op. 9 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_2.mp3",duration:270,color:Z.classical},{id:"nocturne-3",title:"Nocturne Op. 9 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_3.mp3",duration:330,color:Z.classical},{id:"nocturne-4",title:"Nocturne Op. 15 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_4.mp3",duration:305,color:Z.classical},{id:"nocturne-5",title:"Nocturne Op. 15 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_5.mp3",duration:315,color:Z.classical},{id:"nocturne-6",title:"Nocturne Op. 15 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_6.mp3",duration:290,color:Z.classical},{id:"nocturne-7",title:"Nocturne Op. 27 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_7.mp3",duration:340,color:Z.classical},{id:"nocturne-8",title:"Nocturne Op. 27 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_8.mp3",duration:320,color:Z.classical},{id:"nocturne-9",title:"Nocturne Op. 32 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_9.mp3",duration:280,color:Z.classical},{id:"nocturne-10",title:"Nocturne Op. 32 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_10.mp3",duration:300,color:Z.classical},{id:"nocturne-11",title:"Nocturne Op. 37 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_11.mp3",duration:325,color:Z.classical},{id:"nocturne-12",title:"Nocturne Op. 37 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_12.mp3",duration:310,color:Z.classical},{id:"nocturne-13",title:"Nocturne Op. 48 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_13.mp3",duration:350,color:Z.classical},{id:"nocturne-14",title:"Nocturne Op. 48 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_14.mp3",duration:335,color:Z.classical},{id:"nocturne-15",title:"Nocturne Op. 55 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_15.mp3",duration:295,color:Z.classical},{id:"nocturne-17",title:"Nocturne Op. 55 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_17.mp3",duration:330,color:Z.classical},{id:"nocturne-18",title:"Nocturne Op. 62 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_18.mp3",duration:360,color:Z.classical},{id:"nocturne-19",title:"Nocturne Op. 62 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_19.mp3",duration:340,color:Z.classical},{id:"nocturne-20",title:"Nocturne Op. 72 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:oe.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_20.mp3",duration:315,color:Z.classical},{id:"rock-1",title:"Bohemian Rhapsody",artist:"Queen",album:"A Night at the Opera",genre:"rock",coverArt:L3.rock,audioSrc:"/assets/musics/single_tracks/bohemian_rhapsody.mp3",duration:355,color:Z.rock},{id:"rock-2",title:"It's My Life",artist:"Bon Jovi",album:"Crush",genre:"rock",coverArt:oe.bonJovi,audioSrc:"/assets/musics/single_tracks/its_my_life.mp3",duration:224,color:Z.rock},{id:"pop-1",title:"Calm Down",artist:"Rema",album:"Rave & Roses",genre:"pop",coverArt:oe.rema_calm_down,audioSrc:"/assets/musics/single_tracks/calm_down.mp3",duration:234,color:Z.pop},{id:"pop-2",title:"Candy",artist:"Naoko Gushima",album:"Motomami",genre:"pop",coverArt:pl.miss_g,audioSrc:"/assets/musics/single_tracks/candy.mp3",duration:185,color:Z.pop},{id:"pop-3",title:"Missing You",artist:"Naoko Gushima",album:"Love Stories",genre:"pop",coverArt:pl.urban_blues,audioSrc:"/assets/musics/single_tracks/missing_you.mp3",duration:210,color:Z.pop},{id:"electronic-2",title:"Memory Reboot",artist:"Cyber Dreams",album:"Neural Network",genre:"electronic",coverArt:oe.memory_reboot,audioSrc:"/assets/musics/single_tracks/memory_reboot.mp3",duration:240,color:Z.electronic},{id:"electronic-3",title:"Monochrome",artist:"Naoko Gushima",album:"Color Code",genre:"electronic",coverArt:pl.urban_blues,audioSrc:"/assets/musics/single_tracks/monochrome.mp3",duration:218,color:Z.electronic},{id:"hiphop-1",title:"Stan (Instrumental)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Dp.Stan,audioSrc:"/assets/musics/single_tracks/stan_instrumental.mp3",duration:340,color:Z.hiphop},{id:"hiphop-2",title:"Stan (MIDI Version)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Dp.Stan,audioSrc:"/assets/musics/single_tracks/stan_midi.mp3",duration:330,color:Z.hiphop}];Zt.filter(e=>e.genre==="classical");Zt.filter(e=>e.genre==="rock");Zt.filter(e=>e.genre==="pop");Zt.filter(e=>e.genre==="electronic");Zt.filter(e=>e.genre==="jazz");Zt.filter(e=>e.genre==="ambient");Zt.filter(e=>e.genre==="soundtrack");Zt.filter(e=>e.genre==="hiphop");const Oe={LAST_PLAYED:"dp_last_played",PLAYBACK_STATE:"dp_playback_state",VOLUME:"dp_volume",QUEUE:"dp_queue",LAST_POSITION:"dp_last_position",PLAYBACK_HISTORY:"dp_playback_history",LAST_SESSION:"dp_last_session",USER_PREFERENCES:"dp_user_preferences"},It={saveLastPlayed:e=>{try{e?localStorage.setItem(Oe.LAST_PLAYED,JSON.stringify({...e,timestamp:Date.now()})):localStorage.removeItem(Oe.LAST_PLAYED)}catch(t){console.warn("Failed to save last played track:",t)}},getLastPlayed:()=>{try{const e=localStorage.getItem(Oe.LAST_PLAYED);return e?JSON.parse(e):null}catch(e){return console.warn("Failed to retrieve last played track:",e),null}},savePlaybackState:e=>{try{localStorage.setItem(Oe.PLAYBACK_STATE,JSON.stringify({...e,timestamp:Date.now()}))}catch(t){console.warn("Failed to save playback state:",t)}},getPlaybackState:()=>{try{const e=localStorage.getItem(Oe.PLAYBACK_STATE);if(!e)return null;const t=JSON.parse(e);return(Date.now()-t.timestamp)/(1e3*60*60)>24&&(t.progress=0),t}catch(e){return console.warn("Failed to retrieve playback state:",e),null}},saveQueue:e=>{try{localStorage.setItem(Oe.QUEUE,JSON.stringify(e))}catch(t){console.warn("Failed to save queue:",t)}},getQueue:()=>{try{const e=localStorage.getItem(Oe.QUEUE);return e?JSON.parse(e):[]}catch(e){return console.warn("Failed to retrieve queue:",e),[]}},clearPlaybackData:()=>{try{localStorage.removeItem(Oe.LAST_PLAYED),localStorage.removeItem(Oe.PLAYBACK_STATE),localStorage.removeItem(Oe.QUEUE)}catch(e){console.warn("Failed to clear playback data:",e)}},isDataValid:(e,t=24)=>(Date.now()-e)/36e5<=t,saveToHistory:(e,t)=>{try{const n=It.getPlaybackHistory(),r={trackId:e.id,timestamp:Date.now(),progress:t};n.tracks=[r,...n.tracks].slice(0,n.maxSize),localStorage.setItem(Oe.PLAYBACK_HISTORY,JSON.stringify(n))}catch(n){console.warn("Failed to save to playback history:",n)}},getPlaybackHistory:()=>{try{const e=localStorage.getItem(Oe.PLAYBACK_HISTORY);return e?JSON.parse(e):{tracks:[],maxSize:50}}catch(e){return console.warn("Failed to retrieve playback history:",e),{tracks:[],maxSize:50}}},startNewSession:()=>{try{const e={startTime:Date.now(),endTime:0,tracksPlayed:[]};localStorage.setItem(Oe.LAST_SESSION,JSON.stringify(e))}catch(e){console.warn("Failed to start new session:",e)}},updateSession:e=>{try{const t=localStorage.getItem(Oe.LAST_SESSION);if(t){const n=JSON.parse(t);n.tracksPlayed.includes(e)||(n.tracksPlayed.push(e),n.endTime=Date.now(),localStorage.setItem(Oe.LAST_SESSION,JSON.stringify(n)))}}catch(t){console.warn("Failed to update session:",t)}},cleanupOldData:()=>{try{const e=It.getPlaybackHistory(),t=Date.now();e.tracks=e.tracks.filter(n=>(t-n.timestamp)/864e5<=7),localStorage.setItem(Oe.PLAYBACK_HISTORY,JSON.stringify(e))}catch(e){console.warn("Failed to cleanup old data:",e)}}},z3=()=>{const e=It.getLastPlayed(),t=It.getPlaybackState(),n=It.getQueue();return{currentTrack:e||null,isPlaying:!1,volume:(t==null?void 0:t.volume)??.7,progress:(t==null?void 0:t.progress)??0,duration:(e==null?void 0:e.duration)??0,isShuffling:(t==null?void 0:t.isShuffling)??!1,repeatMode:(t==null?void 0:t.repeatMode)??"off",queue:n.length>0?n:Zt,visualizerActive:!0,equalizerActive:!0,sidebarMode:"manual",sidebarVisible:!1,isBuffering:!1,error:null,lastUserAction:Date.now(),lastSidebarInteraction:Date.now(),sidebarOpen:!1}},_3=(e,t)=>{switch(t.type){case"SET_TRACK":{const n=t.payload;return It.saveLastPlayed(n),It.updateSession(n.id),{...e,currentTrack:n,isPlaying:!1,progress:0,duration:n.duration||0,error:null,isBuffering:!0,lastUserAction:Date.now()}}case"PLAY":return{...e,isPlaying:!0,lastUserAction:Date.now()};case"PAUSE":return{...e,isPlaying:!1,lastUserAction:Date.now()};case"SET_VOLUME":return{...e,volume:t.payload,lastUserAction:Date.now()};case"SET_PROGRESS":{e.currentTrack&&It.saveToHistory(e.currentTrack,t.payload);const n=isNaN(t.payload)?e.progress:t.payload;return{...e,progress:n,isBuffering:!1}}case"SET_DURATION":{const n=isNaN(t.payload)?e.duration:t.payload;return{...e,duration:n}}case"TOGGLE_SHUFFLE":return{...e,isShuffling:!e.isShuffling,lastUserAction:Date.now()};case"SET_QUEUE":return{...e,queue:[...t.payload]};case"NEXT_TRACK":{if(!e.currentTrack||!e.activeContext)return e;const n=e.activeContext.tracks,r=n.findIndex(s=>s.id===e.currentTrack.id);let i;if(e.repeatMode==="one")i=r;else if(e.repeatMode==="all")i=(r+1)%n.length;else{if(r===n.length-1)return{...e,isPlaying:!1,progress:0};i=r+1}if(e.isShuffling&&e.repeatMode!=="one"){const s=n.filter((a,l)=>l>r);if(s.length>0){const a=s[Math.floor(Math.random()*s.length)];i=n.indexOf(a)}}const o=n[i];return{...e,currentTrack:o,isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now(),queue:n}}case"PREV_TRACK":{if(!e.currentTrack||!e.activeContext)return e;const n=e.activeContext.tracks,r=n.findIndex(o=>o.id===e.currentTrack.id);let i;if(e.repeatMode==="one")i=r;else if(e.repeatMode==="all")i=(r-1+n.length)%n.length;else{if(r===0)return{...e,progress:0};i=r-1}return{...e,currentTrack:n[i],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"TOGGLE_VISUALIZER":return{...e,visualizerActive:!e.visualizerActive,lastUserAction:Date.now()};case"TOGGLE_EQUALIZER":return{...e,equalizerActive:!e.equalizerActive,lastUserAction:Date.now()};case"SET_BUFFERING":return{...e,isBuffering:t.payload};case"SET_ERROR":return{...e,error:t.payload,isBuffering:!1,isPlaying:!1};case"SET_SIDEBAR_MODE":return{...e,sidebarMode:t.payload,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()};case"SIDEBAR_INTERACTION":return{...e,lastSidebarInteraction:Date.now()};case"USER_INTERACTION":return{...e,lastUserAction:Date.now()};case"CYCLE_REPEAT_MODE":return{...e,repeatMode:e.repeatMode==="off"?"all":e.repeatMode==="all"?"one":"off",lastUserAction:Date.now()};case"TOGGLE_SIDEBAR_VISIBILITY":{const n=!e.sidebarVisible;return console.log(`Toggling sidebar visibility from ${e.sidebarVisible} to ${n}`),e.sidebarVisible===n?e:{...e,sidebarVisible:n}}case"SET_SIDEBAR_OPEN":return{...e,sidebarOpen:t.payload};case"SET_ACTIVE_CONTEXT":return{...e,activeContext:t.payload,queue:t.payload.tracks};default:return e}},Xg=b.createContext(void 0);function D3({children:e}){const[t,n]=b.useReducer(_3,z3()),[r]=b.useState(!1);return b.useEffect(()=>{!t.currentTrack&&t.queue.length>0&&n({type:"SET_TRACK",payload:t.queue[0]})},[t.queue,t.currentTrack]),b.useEffect(()=>{It.startNewSession(),It.cleanupOldData()},[]),y.jsx(Xg.Provider,{value:{state:t,dispatch:n,isLoadingTracks:r},children:e})}function Jt(){const e=b.useContext(Xg);if(!e)throw new Error("useMusicContext must be used within a MusicProvider");return e}const Qg={explorerVisible:!0,explorerWidth:350,mainContentWidth:"calc(100% - 350px)",horizontalControlsExpanded:!1,sidebarVisible:!1,mobileControlsVisible:!0,mobileControlsExpanded:!1,lastInteractionTime:Date.now()},N3=(e,t)=>{switch(t.type){case"TOGGLE_EXPLORER":return{...e,explorerVisible:!e.explorerVisible,mainContentWidth:e.explorerVisible?"100%":`calc(100% - ${e.explorerWidth}px)`};case"SET_EXPLORER_WIDTH":return{...e,explorerWidth:t.payload,mainContentWidth:e.explorerVisible?`calc(100% - ${t.payload}px)`:"100%"};case"SET_CONTROLS_EXPANDED":return{...e,horizontalControlsExpanded:t.payload};case"SET_SIDEBAR_VISIBLE":return{...e,sidebarVisible:t.payload};default:return e}},qg=b.createContext({state:Qg,dispatch:()=>null}),I3=({children:e})=>{const[t,n]=b.useReducer(N3,Qg);return y.jsx(qg.Provider,{value:{state:t,dispatch:n},children:e})},wa=()=>b.useContext(qg),O3={id:"space-grey",name:"Space Grey",background:{primary:"rgba(28, 28, 30, 0.9)",secondary:"rgba(44, 44, 46, 0.8)",gradient:"linear-gradient(135deg, rgba(44, 44, 46, 0.9) 0%, rgba(28, 28, 30, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(44, 44, 46, 0.3)",border:"rgba(142, 142, 147, 0.2)"},player:{background:"rgba(28, 28, 30, 0.4)",controls:"rgba(44, 44, 46, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#8E8E93",secondary:"#636366",accent:"#0A84FF",hover:"rgba(255, 255, 255, 0.1)"}},V3={id:"ocean-blue",name:"Ocean Blue",background:{primary:"rgba(0, 67, 112, 0.9)",secondary:"rgba(0, 92, 151, 0.8)",gradient:"linear-gradient(135deg, rgba(0, 92, 151, 0.9) 0%, rgba(0, 67, 112, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(0, 128, 201, 0.2)",border:"rgba(91, 192, 235, 0.2)"},player:{background:"rgba(0, 67, 112, 0.4)",controls:"rgba(0, 92, 151, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#91D2FA",secondary:"#5BC0EB",accent:"#00A8E8",hover:"rgba(91, 192, 235, 0.2)"}},Ju={id:"classical-black",name:"Classical Black",background:{primary:"rgba(0, 0, 0, 0.9)",secondary:"rgba(18, 18, 18, 0.8)",gradient:"linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(30, 30, 30, 0.3)",border:"rgba(45, 45, 45, 0.2)"},player:{background:"rgba(10, 10, 10, 0.4)",controls:"rgba(18, 18, 18, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#AAAAAA",secondary:"#747474",accent:"#FFFFFF",hover:"rgba(255, 255, 255, 0.1)"}},F3={id:"contrast-light",name:"Contrast Light",background:{primary:"rgba(245, 245, 245, 0.9)",secondary:"rgba(235, 235, 235, 0.8)",gradient:"linear-gradient(135deg, rgba(235, 235, 235, 0.9) 0%, rgba(245, 245, 245, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(255, 255, 255, 0.3)",border:"rgba(200, 200, 200, 0.3)"},player:{background:"rgba(255, 255, 255, 0.4)",controls:"rgba(255, 255, 255, 0.95)"},text:{primary:"rgba(0, 0, 0, 0.9)",secondary:"rgba(0, 0, 0, 0.6)"},ui:{primary:"#666666",secondary:"#999999",accent:"#007AFF",hover:"rgba(0, 0, 0, 0.05)"}},B3={id:"cyber-punk",name:"Cyber Punk",background:{primary:"rgba(8, 0, 28, 0.9)",secondary:"rgba(24, 0, 50, 0.8)",gradient:"linear-gradient(135deg, rgba(24, 0, 50, 0.9) 0%, rgba(120, 0, 120, 0.6) 50%, rgba(8, 0, 28, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(120, 0, 120, 0.2)",border:"rgba(255, 0, 255, 0.2)"},player:{background:"rgba(8, 0, 28, 0.4)",controls:"rgba(24, 0, 50, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#FF00FF",secondary:"#00FFFF",accent:"#FE53BB",hover:"rgba(255, 0, 255, 0.2)"}},cr={"space-grey":O3,"ocean-blue":V3,"classical-black":Ju,"contrast-light":F3,"cyber-punk":B3},Zg=b.createContext({currentTheme:Ju,setTheme:()=>{},availableThemes:Object.values(cr)}),Jg=()=>b.useContext(Zg),H3=({children:e})=>{const[t,n]=b.useState(()=>{const o=localStorage.getItem("theme");return o&&cr[o]?cr[o]:Ju}),r=o=>{cr[o]&&(n(cr[o]),localStorage.setItem("theme",o))},i=Object.values(cr);return y.jsx(Zg.Provider,{value:{currentTheme:t,setTheme:r,availableThemes:i},children:e})},e1={optimizeElement(e){e&&(e.style.transform="translateZ(0)",e.style.backfaceVisibility="hidden",e.style.willChange="transform, opacity")},throttle(e,t){let n=0;return(...r)=>{const i=Date.now();i-n>=t&&(n=i,e(...r))}},debounce(e,t){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}},t1=b.forwardRef(({children:e,className:t,height:n,style:r},i)=>{var _;const o=de.useRef(null),s=b.useRef(),[a,l]=b.useState(!1),[c,u]=b.useState(!1),[d,f]=b.useState(40),[m,v]=b.useState({top:!0,bottom:!1}),[x,S]=b.useState(!1),{scrollYProgress:g}=R3({container:o,offset:["start start","end end"]}),h=a3(g,{damping:20,stiffness:300,mass:.5,restSpeed:.001}),p=Zu(1),w=s3(h,[0,1],[0,(_=o.current)!=null&&_.clientHeight?o.current.clientHeight-d:0],{clamp:!0}),C=b.useCallback(()=>{if(!o.current)return;const{clientHeight:L,scrollHeight:H}=o.current,W=L/H,K=Math.max(Math.min(W*L,L/2),40);f(K)},[]),T=b.useCallback(()=>{if(!o.current)return;const{scrollTop:L,scrollHeight:H,clientHeight:W}=o.current,K=L<=0,X=L+W>=H-1;v({top:K,bottom:X}),l(!0),(K||X)&&(p.set(.98),setTimeout(()=>p.set(1),150)),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{l(!1)},150)},[p]),P=e1.throttle(T,16);b.useEffect(()=>{const L=o.current;if(!L)return;const H=()=>P(),W=()=>C(),K=new ResizeObserver(W);return K.observe(L),L.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",W,{passive:!0}),C(),()=>{K.disconnect(),L&&L.removeEventListener("scroll",H),window.removeEventListener("resize",W),s.current&&clearTimeout(s.current)}},[P,C]);const E=b.useCallback(L=>{if(L.preventDefault(),L.stopPropagation(),!o.current)return;u(!0);const H=L.clientY,W=o.current.scrollHeight,K=o.current.clientHeight,X=K-d,fe=o.current.scrollTop,F=M=>{if(!o.current)return;const A=(M.clientY-H)/X*(W-K);o.current.scrollTop=Math.max(0,Math.min(fe+A,W-K))},G=()=>{u(!1),document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",G),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="grabbing",document.body.style.userSelect="none",document.addEventListener("pointermove",F),document.addEventListener("pointerup",G)},[d]);return y.jsxs(U3,{ref:i,onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[y.jsx(W3,{ref:o,className:t,$height:n,style:{...r,transform:`scale(${p.get()})`},children:e}),y.jsx(G3,{animate:{opacity:x||a||c?1:.3,width:x||c?"10px":"6px"},transition:{duration:.2},children:y.jsx(Y3,{as:O.div,style:{height:d,y:w,scale:p},animate:{opacity:a||c||x?1:.7,width:x||c?"100%":"80%",x:"-50%"},whileHover:{scale:1.05},whileTap:{scale:.95},onPointerDown:E,transition:{opacity:{duration:.2},scale:{type:"spring",stiffness:400,damping:25}},$isDragging:c,$isHovered:x,$isAtEdge:m})})]})}),U3=k.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,W3=k.div`
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
`,G3=k(O.div)`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
`,Y3=k(O.div)`
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
`;t1.displayName="CustomScrollbar";const n1="/assets/covers/default_cover_2.jpeg",kn=e=>e?(e.startsWith("http"),e):n1;var r1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Np=de.createContext&&de.createContext(r1),Cn=globalThis&&globalThis.__assign||function(){return Cn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cn.apply(this,arguments)},K3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function i1(e){return e&&e.map(function(t,n){return de.createElement(t.tag,Cn({key:n},t.attr),i1(t.child))})}function we(e){return function(t){return de.createElement(X3,Cn({attr:Cn({},e.attr)},t),i1(e.child))}}function X3(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=K3(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),de.createElement("svg",Cn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Cn(Cn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&de.createElement("title",null,o),e.children)};return Np!==void 0?de.createElement(Np.Consumer,null,function(n){return t(n)}):t(r1)}function Q3(e){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(e)}function q3(e){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Z3(e){return we({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function J3(e){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(e)}function eS(e){return we({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"}}]})(e)}function tS(e){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function ba(e){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}}]})(e)}function Sa(e){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function nS(e){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(e)}function o1(e){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"}}]})(e)}function s1(e){return we({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"}}]})(e)}function rS(e){return we({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function iS(e){return we({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"}}]})(e)}function oS(e){return we({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"}}]})(e)}function a1(e){return we({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}const sS="/assets/icons/toggle_button.png";function aS(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(e)}function lS(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}},{tag:"line",attr:{x1:"11",y1:"8",x2:"11",y2:"14"}},{tag:"line",attr:{x1:"8",y1:"11",x2:"14",y2:"11"}}]})(e)}function cS(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}},{tag:"line",attr:{x1:"8",y1:"11",x2:"14",y2:"11"}}]})(e)}const uS=()=>{const{state:e,dispatch:t}=Jt(),{dispatch:n}=wa(),[r,i]=b.useState(!0),[o,s]=b.useState({}),[a,l]=b.useState({field:"title",direction:"asc"}),[c,u]=b.useState({search:"",favorites:!1,minPlays:0}),[d,f]=b.useState(!1),[m,v]=b.useState(!0),[x,S]=b.useState(null),[g,h]=b.useState(!1),[p,w]=b.useState(!0),[C,T]=b.useState("albums"),[P,E]=b.useState(null),[_,L]=b.useState(120),H=80,W=180,K=b.useRef(null),X=b.useRef(null),fe=b.useRef(null);b.useEffect(()=>{(async()=>{try{v(!0);const D=localStorage.getItem("trackStats");if(D){const B=JSON.parse(D);s(B)}}catch(D){console.error("Failed to load track stats:",D),s({}),S("Failed to load track statistics")}finally{v(!1)}})()},[]);const F=R=>{var D,B;try{const re={...o,[R]:{plays:(((D=o[R])==null?void 0:D.plays)||0)+1,lastPlayed:new Date,favorite:((B=o[R])==null?void 0:B.favorite)||!1}};s(re),localStorage.setItem("trackStats",JSON.stringify(re))}catch(re){console.error("Failed to update track stats:",re)}},G=R=>{var B,re,$e;const D={...o,[R]:{...o[R],favorite:!((B=o[R])!=null&&B.favorite),lastPlayed:((re=o[R])==null?void 0:re.lastPlayed)||null,plays:(($e=o[R])==null?void 0:$e.plays)||0}};s(D);try{localStorage.setItem("trackStats",JSON.stringify(D))}catch(sr){console.error("Failed to save favorites:",sr)}},M=R=>[...R].sort((D,B)=>{const re=o[D.id],$e=o[B.id];switch(a.field){case"title":return a.direction==="asc"?D.title.localeCompare(B.title):B.title.localeCompare(D.title);case"artist":return a.direction==="asc"?D.artist.localeCompare(B.artist):B.artist.localeCompare(D.artist);case"album":return a.direction==="asc"?D.album.localeCompare(B.album):B.album.localeCompare(D.album);case"plays":return a.direction==="asc"?((re==null?void 0:re.plays)||0)-(($e==null?void 0:$e.plays)||0):(($e==null?void 0:$e.plays)||0)-((re==null?void 0:re.plays)||0);case"lastPlayed":const sr=re!=null&&re.lastPlayed?new Date(re.lastPlayed).getTime():0,co=$e!=null&&$e.lastPlayed?new Date($e.lastPlayed).getTime():0;return a.direction==="asc"?sr-co:co-sr;case"favorites":const ed=(re==null?void 0:re.favorite)||!1,td=($e==null?void 0:$e.favorite)||!1;return a.direction==="asc"?Number(ed)-Number(td):Number(td)-Number(ed);default:return 0}}),z=R=>R.filter(D=>{const B=o[D.id],re=c.search.toLowerCase(),$e=re===""||D.title.toLowerCase().includes(re)||D.artist.toLowerCase().includes(re),sr=!c.favorites||(B==null?void 0:B.favorite),co=((B==null?void 0:B.plays)||0)>=c.minPlays;return $e&&sr&&co});b.useEffect(()=>{n({type:"SET_EXPLORER_WIDTH",payload:r?350:60})},[r,n]);const j=()=>{const R=r;i(!r),w(!R),n({type:"TOGGLE_EXPLORER"}),R&&(T("albums"),E(null),f(!1),u({search:"",favorites:!1,minPlays:0}),l({field:"title",direction:"asc"}),h(!1))};b.useEffect(()=>{const R=D=>{var B;D.ctrlKey&&D.key==="f"&&r&&(D.preventDefault(),(B=X.current)==null||B.focus())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[r]),b.useEffect(()=>{const R=sessionStorage.getItem("explorerScrollPosition");return R&&fe.current&&(fe.current.scrollTop=parseInt(R)),()=>{fe.current&&sessionStorage.setItem("explorerScrollPosition",fe.current.scrollTop.toString())}},[]),b.useEffect(()=>{r||(f(!1),h(!1))},[r]);const A=[{value:"title",label:"Title"},{value:"artist",label:"Artist"},{value:"album",label:"Album"},{value:"plays",label:"Plays"},{value:"lastPlayed",label:"Last Played"},{value:"favorites",label:"Favorites"}],I=b.useRef([]);b.useEffect(()=>{const R=M(z(e.queue));if(!R||R.length===0)return;JSON.stringify(I.current)!==JSON.stringify(R)&&(I.current=[...R],t({type:"SET_ACTIVE_CONTEXT",payload:{id:"explorer",type:"explorer",tracks:R,name:"Music Explorer",viewConfig:{sortBy:a.field,isAscending:a.direction==="asc",filterBy:c.search}}}))},[e.queue,a,c]);const ee=b.useMemo(()=>{const R=new Map;return e.queue.forEach(D=>{var re;const B=`${D.album}-${D.artist}`;R.has(B)?(re=R.get(B))==null||re.tracks.push(D):R.set(B,{id:B,title:D.album,artist:D.artist,coverArt:D.coverArt,tracks:[D]})}),Array.from(R.values())},[e.queue]),Q=b.useMemo(()=>[...ee].sort((R,D)=>{switch(a.field){case"title":return a.direction==="asc"?R.title.localeCompare(D.title):D.title.localeCompare(R.title);case"artist":return a.direction==="asc"?R.artist.localeCompare(D.artist):D.artist.localeCompare(R.artist);default:return 0}}),[ee,a]),pe=b.useMemo(()=>Q.filter(R=>{const D=c.search.toLowerCase();return D===""||R.title.toLowerCase().includes(D)||R.artist.toLowerCase().includes(D)}),[Q,c.search]),ie=R=>{r?(E(R),T("tracks")):(i(!0),n({type:"TOGGLE_EXPLORER"}),setTimeout(()=>{E(R),T("tracks")},300))},Se=()=>{T("albums"),E(null)},lt=R=>{L(D=>{const B=R?D+20:D-20;return Math.max(H,Math.min(W,B))})},et=()=>m?y.jsxs(_S,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[y.jsx(DS,{}),y.jsx("span",{children:"Loading music library..."})]}):C==="albums"?y.jsx(VS,{$isExpanded:r,style:{gridTemplateColumns:r?`repeat(auto-fill, minmax(${_}px, 1fr))`:"1fr"},children:pe.map(R=>y.jsxs(BS,{onClick:()=>ie(R),$isExpanded:r,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:30,mass:.8},children:[y.jsx(FS,{$isExpanded:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx("img",{src:kn(R.coverArt),alt:`${R.title} cover`,loading:"lazy",draggable:!1})}),r&&y.jsxs(GS,{children:[y.jsx(HS,{children:R.title}),y.jsx(US,{children:R.artist}),y.jsxs(WS,{children:[R.tracks.length," tracks"]})]})]},R.id))}):C==="tracks"&&P?y.jsxs(y.Fragment,{children:[y.jsx(YS,{onClick:Se,whileHover:{scale:1.05},whileTap:{scale:.95},children:"← Back to Albums"}),y.jsxs(KS,{children:[y.jsx(XS,{children:y.jsx("img",{src:kn(P.coverArt),alt:`${P.title} cover`,draggable:!1})}),y.jsxs(QS,{children:[y.jsx(qS,{children:P.title}),y.jsx(ZS,{children:P.artist}),y.jsxs(JS,{children:[P.tracks.length," tracks"]})]})]}),y.jsx($S,{$isExpanded:r,children:M(P.tracks).map(R=>{var D;return y.jsx(dS,{track:R,stats:o[R.id],isActive:((D=e.currentTrack)==null?void 0:D.id)===R.id,onClick:()=>{t({type:"SET_TRACK",payload:R}),t({type:"PLAY"}),F(R.id)},onExpand:()=>{i(!0),n({type:"TOGGLE_EXPLORER"})},onToggleFavorite:G,onTogglePlay:()=>{t(e.isPlaying?{type:"PAUSE"}:{type:"PLAY"})}},R.id)})})]}):null;return b.useEffect(()=>{if(g){const R=document.querySelector("[data-sort-button]");R&&R.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.15)",offset:.5},{transform:"scale(1)",offset:1}],{duration:400,easing:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"})}},[g]),y.jsxs(fS,{ref:K,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},$isExpanded:r,children:[y.jsx(Fp,{}),y.jsxs(kS,{$isExpanded:r,children:[y.jsxs(CS,{$isExpanded:r,animate:{scale:r?1:.9},transition:{duration:.3},children:[r?C==="albums"?"Music Explorer":(P==null?void 0:P.title)||"Tracks":"DP",y.jsx(TS,{src:sS,alt:"Music Explorer",$isOpen:p})]}),y.jsxs(nk,{children:[r&&C==="albums"&&y.jsxs(rk,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[y.jsx(Vp,{onClick:()=>lt(!1),disabled:_<=H,title:"Smaller album tiles",whileTap:{scale:.9},style:{width:"28px",height:"28px"},children:y.jsx(cS,{size:14})}),y.jsx(ek,{style:{width:"60px",height:"4px"},children:y.jsx(tk,{$progress:(_-H)/(W-H)})}),y.jsx(Vp,{onClick:()=>lt(!0),disabled:_>=W,title:"Larger album tiles",whileTap:{scale:.9},style:{width:"28px",height:"28px"},children:y.jsx(lS,{size:14})})]}),y.jsx(ES,{onClick:j,whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":r?"Collapse explorer":"Expand explorer",children:r?"−":"+"})]})]}),x&&y.jsxs(jS,{children:[x,y.jsx(MS,{onClick:()=>window.location.reload(),children:"Retry"})]}),!x&&r&&y.jsx(Nt,{children:y.jsxs(wS,{children:[y.jsx(bS,{ref:X,value:c.search,onChange:R=>u(D=>({...D,search:R.target.value})),placeholder:C==="albums"?"Search albums...":"Search tracks..."}),y.jsxs(SS,{children:[y.jsx(Os,{onClick:()=>h(!g),$active:g,whileHover:{scale:1.05},whileTap:{scale:.95},"data-sort-button":!0,children:y.jsx(ok,{$active:g,children:y.jsx("img",{src:"public/assets/icons/categories.png",alt:"Sort options",width:"16",height:"16",style:{objectFit:"contain"}})})}),C==="tracks"&&y.jsx(Os,{onClick:Se,$active:!1,whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx("span",{children:"←"})})]})]})}),y.jsx(Nt,{children:g&&y.jsx(RS,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(LS,{children:A.map(R=>y.jsxs(zS,{$isActive:a.field===R.value,onClick:()=>{a.field===R.value?l(D=>({...D,direction:D.direction==="asc"?"desc":"asc"})):l({field:R.value,direction:"asc"})},whileHover:{scale:1.02},whileTap:{scale:.98},children:[y.jsx("span",{children:R.label}),a.field===R.value&&y.jsx(O.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:a.direction==="asc"?"↑":"↓"})]},R.value))})})}),y.jsx(AS,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:y.jsx(t1,{ref:fe,children:et()})}),y.jsx(Fp,{})]})},dS=({track:e,stats:t,isActive:n,onClick:r,onExpand:i,onToggleFavorite:o,onTogglePlay:s})=>{const[a,l]=b.useState(!1),[c,u]=b.useState(!1),[d,f]=b.useState(!1),{state:m}=wa(),{state:v}=Jt(),x=m.explorerVisible,S=b.useRef(null),g=p=>{p.stopPropagation(),t!=null&&t.favorite?S.current&&S.current.animate([{transform:"scale(1)",opacity:1,offset:0},{transform:"scale(0.8)",opacity:.5,offset:.5},{transform:"scale(1)",opacity:1,offset:1}],{duration:300,easing:"ease-out"}):(u(!0),f(!0),navigator.vibrate&&navigator.vibrate([15,10,30]),S.current&&S.current.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.5)",offset:.3},{transform:"scale(0.8)",offset:.6},{transform:"scale(1.2)",offset:.8},{transform:"scale(1)",offset:1}],{duration:600,easing:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"}),setTimeout(()=>{u(!1),f(!1)},1e3)),o(e.id)},h=b.useMemo(()=>Array.from({length:16}).map((p,w)=>({id:w,angle:w*22.5+Math.random()*10,delay:w*.02,size:3+Math.random()*5,distance:30+Math.random()*30})),[]);return y.jsxs(pS,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:30,mass:.8},onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),$isActive:n,$isExpanded:x,onClick:()=>{r(),x||i()},layout:!0,children:[y.jsxs(l1,{$isExpanded:x,$isActive:n,$isPlaying:n&&v.isPlaying,whileHover:!n||!v.isPlaying?{scale:1.05,transition:{duration:.3,ease:"easeOut"}}:{},children:[y.jsx(hS,{src:kn(e.coverArt),alt:`${e.title} cover`,$isPlaying:n&&v.isPlaying,transition:{rotate:{duration:20,ease:"linear"}},loading:"lazy",draggable:!1}),n&&y.jsx(mS,{onClick:p=>{p.stopPropagation(),s()},$isPlaying:v.isPlaying,initial:{opacity:0},animate:{opacity:a?1:0,scale:v.isPlaying?1.1:1},transition:{duration:.2},whileHover:{scale:1.15},whileTap:{scale:.95},children:v.isPlaying?y.jsx(ba,{size:20}):y.jsx(Sa,{size:20})})]}),y.jsx(Nt,{children:x&&y.jsxs(gS,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3,delay:.1},children:[y.jsx(yS,{$isActive:n,children:e.title}),y.jsx(vS,{children:e.artist}),y.jsxs(xS,{initial:{opacity:0},animate:{opacity:a?1:0},transition:{duration:.2},children:[y.jsxs(Ip,{children:[y.jsx(Op,{children:"🎵"}),(t==null?void 0:t.plays)||0]}),(t==null?void 0:t.lastPlayed)&&y.jsxs(Ip,{children:[y.jsx(Op,{children:"🕒"}),new Date(t.lastPlayed).toLocaleDateString()]})]})]})}),y.jsxs(NS,{ref:S,initial:{scale:1},animate:{scale:d?[1,1.2,1]:1,transition:{repeat:d?2:0,duration:.5}},whileHover:{scale:t!=null&&t.favorite?[1,1.2,1.1]:1.15,transition:{duration:.3,type:"spring",stiffness:300}},whileTap:{scale:.9},onClick:g,"aria-label":t!=null&&t.favorite?"Remove from favorites":"Add to favorites",$isFavorite:(t==null?void 0:t.favorite)||!1,onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),children:[y.jsx(Nt,{mode:"wait",children:t!=null&&t.favorite?y.jsx(O.img,{src:"public/assets/icons/selected.png",alt:"Favorite",width:"20",height:"20",initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",damping:10,stiffness:200},style:{objectFit:"contain"}},"favorite"):y.jsx(O.img,{src:a?"public/assets/icons/selected.png":"public/assets/icons/add_1.png",alt:"Add to favorites",width:"20",height:"20",initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",damping:10,stiffness:200},style:{objectFit:"contain"}},"not-favorite")}),y.jsx(Nt,{children:c&&y.jsxs(IS,{children:[h.map(p=>y.jsx(OS,{initial:{scale:0,opacity:1,x:0,y:0},animate:{scale:[0,1,0],opacity:[1,.8,0],x:[0,Math.cos(p.angle*(Math.PI/180))*p.distance],y:[0,Math.sin(p.angle*(Math.PI/180))*p.distance]},transition:{duration:.8,delay:p.delay,ease:[.2,.8,.2,1]},style:{width:`${p.size}px`,height:`${p.size}px`,background:p.id%3===0?"radial-gradient(circle, rgba(76, 175, 80, 0.8), rgba(76, 175, 80, 0) 70%)":p.id%3===1?"radial-gradient(circle, rgba(129, 199, 132, 0.8), rgba(129, 199, 132, 0) 70%)":"radial-gradient(circle, rgba(200, 230, 201, 0.8), rgba(200, 230, 201, 0) 70%)",boxShadow:p.id%3===0?"0 0 8px rgba(76, 175, 80, 0.8)":p.id%3===1?"0 0 8px rgba(129, 199, 132, 0.8)":"0 0 8px rgba(200, 230, 201, 0.8)"}},p.id)),y.jsx(O.div,{initial:{scale:0,opacity:0},animate:{scale:[0,3,0],opacity:[1,0]},transition:{duration:.6,ease:"easeOut"},style:{position:"absolute",width:"20px",height:"20px",borderRadius:"50%",background:"radial-gradient(circle, rgba(76, 175, 80, 0.8) 0%, rgba(129, 199, 132, 0.4) 50%, rgba(76, 175, 80, 0) 70%)",filter:"blur(2px)",transform:"translate(-50%, -50%)"}})]})})]})]})},fS=k(O.div)`
  position: relative;
  width: ${e=>e.$isExpanded?"420px":"110px"};
  height: 100%;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none; // Add this to make all text unselectable by default
  background: rgba(18, 18, 18, 0.4); /* Semi-transparent dark background */
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  isolation: isolate; /* Create new stacking context for z-index */

  @media (max-width: 768px) {
    width: ${e=>e.$isExpanded?"100%":"100px"};
    height: ${e=>e.$isExpanded?"100%":"630px"};
    border-radius: 0;
  }
`,pS=k(O.div)`
  display: flex;
  align-items: center;
  padding: ${e=>e.$isExpanded?"12px":"4px"};
  background: rgba(255, 255, 255, 0.03); /* Very subtle light background */
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: ${e=>e.$isExpanded?"12px":"4px"};
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  height: ${e=>(e.$isExpanded,"auto")};
  width: ${e=>e.$isExpanded?"auto":"90px"};
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  ${e=>!e.$isExpanded&&`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  /* Add subtle hover effect */
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateZ(2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,l1=k(O.div)`
  position: relative;
  width: ${e=>e.$isExpanded?"48px":"72px"};
  height: ${e=>e.$isExpanded?"48px":"72px"};
  border-radius: ${e=>e.$isActive&&e.$isPlaying?"50%":"8px"};
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
`,hS=k(O.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${e=>e.$isPlaying?"50%":"8px"};
  box-shadow: ${e=>e.$isPlaying?"0 0 15px rgba(76, 175, 80, 0.3)":"none"};

  ${e=>e.$isPlaying&&`
    animation: spin 20s linear infinite;
    filter: brightness(1.1);
  `}
`,mS=k(O.div)`
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

  // Only show hover effect when not playing
  ${e=>!e.$isPlaying&&`
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
    }
  `}

  svg {
    opacity: ${e=>e.$isPlaying?.9:1};
    transition: opacity 0.3s ease;
  }

  // Only show on hover when not playing
  ${l1}:hover & {
    opacity: ${e=>e.$isPlaying?0:1};
  }

  // Show briefly when changing play state
  &:active {
    opacity: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`,gS=k(O.div)`
  flex: 1;
  min-width: 0;
  user-select: none; // Add this to make text unselectable
`,yS=k.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.$isActive?"#4caf50":"white"};
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none; // Add this to make text unselectable
  /* Add subtle text shadow for active items instead of background color */
  text-shadow: ${e=>e.$isActive?"0 0 8px rgba(76, 175, 80, 0.3)":"none"};
`,vS=k.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none; // Add this to make text unselectable
`,xS=k(O.div)`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  user-select: none; // Add this to make stats unselectable
`,Ip=k.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`,Op=k.span`
  font-size: 12px;
`,wS=k(O.div)`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,bS=k.input.attrs({"aria-label":"Search tracks",type:"text",placeholder:"Search tracks..."})`
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
`,SS=k.div`
  display: flex;
  gap: 4px;
`,kS=k.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$isExpanded?"space-between":"center"};
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(
    18,
    18,
    18,
    0.4
  ); /* Semi-transparent to show colors but not overwhelm */
  position: relative;
  z-index: 1;
  backdrop-filter: blur(4px);
`,CS=k(O.div)`
  font-size: ${e=>e.$isExpanded?"1.5rem":"1rem"};
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  padding: ${e=>e.$isExpanded?"16px":"8px"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;48
`,PS=rr`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`,TS=k.img`
  width: 24px;
  height: 24px;
  transform-style: preserve-3d;
  transition: filter 0.3s ease;
  cursor: pointer;
  position: relative;

  ${e=>e.$isOpen?Rt`
          animation: ${PS} 4s linear infinite;
        `:Rt`
          filter: brightness(0.7);
          transform: rotateY(180deg);
        `}

  &:hover {
    animation: none;
    filter: drop-shadow(0 0 8px #4a9eff) brightness(1.2);
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    background: radial-gradient(
      circle,
      rgba(74, 158, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`,ES=k(O.button)`
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
`,AS=k(O.div)`
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

  /* Add this to ensure proper height calculation */
  & > div {
    height: 100%;
    width: 100%;
  }
`,$S=k.div`
  padding: ${e=>e.$isExpanded?"8px":"4px"};
  display: grid;
  grid-template-columns: ${e=>e.$isExpanded?"1fr":"repeat(auto-fill, 80px)"};
  gap: ${e=>e.$isExpanded?"8px":"4px"};
  min-height: 0;
  flex: 1;
  justify-content: center;
`,jS=k.div`
  padding: 16px;
  color: #ff5252;
  text-align: center;
  background: rgba(255, 82, 82, 0.1);
  margin: 16px;
  border-radius: 8px;
`,MS=k.button`
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
`,Os=k(O.button)`
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
`;k.span`
  position: absolute;
  top: -28px;
  left: -110%;
  transform: translateX(-50%) translateY(0);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(0, 0, 0, 0.8);
  }
`;const RS=k(O.div)`
  overflow: hidden;
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,LS=k(O.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
  padding: 12px;
`,zS=k(O.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: ${e=>e.$isActive?"rgba(76, 175, 80, 0.15)":"rgba(255, 255, 255, 0.05)"};
  border: 1px solid
    ${e=>e.$isActive?"rgba(76, 175, 80, 0.3)":"transparent"};
  border-radius: 6px;
  color: ${e=>e.$isActive?"#4caf50":"rgba(255, 255, 255, 0.8)"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.$isActive?"rgba(76, 175, 80, 0.2)":"rgba(255, 255, 255, 0.1)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`,_S=k(O.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`,DS=k(O.div)`
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
`,NS=k(O.button)`
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
`,IS=k(O.div)`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 2;
`,OS=k(O.div)`
  position: absolute;
  background: #4caf50;
  border-radius: 50%;
  transform-origin: center;
`,VS=k.div`
  display: grid;
  grid-template-columns: ${e=>e.$isExpanded?"repeat(auto-fill, minmax(120px, 1fr))":"1fr"};
  gap: ${e=>e.$isExpanded?"12px":"8px"};
  padding: ${e=>e.$isExpanded?"12px":"6px"};
  width: 100%;
`,FS=k(O.div)`
  width: ${e=>e.$isExpanded?"100%":"72px"};
  height: ${e=>e.$isExpanded?"auto":"72px"};
  aspect-ratio: 1/1;
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
`,BS=k(O.div)`
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
`,HS=k.h3`
  margin: 0;
  font-size: 12px; // Smaller font
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`,US=k.p`
  margin: 2px 0 0;
  font-size: 11px; // Smaller font
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`,WS=k.span`
  font-size: 10px; // Smaller font
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  text-align: center;
`,GS=k.div`
  width: 100%;
  padding: 6px 2px 2px;
  display: flex;
  flex-direction: column;
`,YS=k(O.button)`
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
`,KS=k.div`
  display: flex;
  padding: 12px;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,XS=k.div`
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
`,QS=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,qS=k.h2`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
  color: white;
`,ZS=k.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,JS=k.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`,Vp=k(O.button)`
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

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #4caf50;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.05);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,ek=k.div`
  width: 100px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`,tk=k.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${e=>e.$progress*100}%;
  background: linear-gradient(90deg, #4caf50, #66bb6a);
  border-radius: 3px;
  transition: width 0.3s ease;
`,nk=k.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,rk=k(O.div)`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  height: 32px;
`,Fp=()=>{var s;const{state:e}=Jt(),[t,n]=b.useState(["#121212","#1e1e1e"]),[r,i]=b.useState(!1),o=b.useRef(null);return b.useEffect(()=>{var l;if(!((l=e.currentTrack)!=null&&l.coverArt)){i(!1);return}i(!0),(c=>{const u=new Image;u.crossOrigin="Anonymous",u.onload=()=>{const d=document.createElement("canvas"),f=d.getContext("2d");if(!f)return;d.width=u.width,d.height=u.height,f.drawImage(u,0,0,u.width,u.height);const m=f.getImageData(0,0,d.width,d.height).data,v={};for(let S=0;S<m.length;S+=40){const g=m[S],h=m[S+1],p=m[S+2];if(g<20&&h<20&&p<20||g>230&&h>230&&p>230)continue;const w=`#${g.toString(16).padStart(2,"0")}${h.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}`;v[w]=(v[w]||0)+1}const x=Object.entries(v).sort((S,g)=>g[1]-S[1]).map(S=>S[0]);x.length>=2&&n(x.slice(0,5))},u.onerror=()=>{console.error("Failed to load image for color extraction")},u.src=c})(e.currentTrack.coverArt)},[(s=e.currentTrack)==null?void 0:s.coverArt]),b.useLayoutEffect(()=>{if(!o.current||!r||t.length<2)return;const a=o.current,l=a.getContext("2d");if(!l)return;let c,u=0;const d=()=>{const{width:m,height:v}=a.getBoundingClientRect();a.width=m,a.height=v};d(),window.addEventListener("resize",d);const f=()=>{if(!l||!a)return;l.clearRect(0,0,a.width,a.height);const m=l.createLinearGradient(0,0,a.width,a.height);m.addColorStop(0,`${t[0]}99`),m.addColorStop(.5,`${t[1]}88`),m.addColorStop(1,`${t[0]}99`),l.fillStyle=m,l.fillRect(0,0,a.width,a.height);const v=3;t.slice(0,3).forEach((x,S)=>{l.beginPath();const g=12+S*8;a.width/(1+S*.5);const h=.002+S*.001;l.moveTo(0,a.height/2);for(let p=0;p<a.width;p++){const w=p/a.width,C=Math.sin(w*v*Math.PI+u*h)*g,T=a.height*.5+C+S*20;l.lineTo(p,T)}l.lineTo(a.width,a.height),l.lineTo(0,a.height),l.closePath(),l.fillStyle=`${x}33`,l.fill()}),u+=1,c=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",d),cancelAnimationFrame(c)}},[t,r]),y.jsx(ik,{ref:o,initial:{opacity:0},animate:{opacity:r?.85:0},transition:{duration:1.2}})},ik=k(O.canvas)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  border-radius: inherit;
`,ok=k.div`
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

  ${Os}:hover &::after {
    opacity: 1;
  }

  ${Os}:hover & img {
    filter: ${e=>e.$active?"brightness(1.3) drop-shadow(0 0 4px rgba(76, 175, 80, 0.9))":"brightness(1.2) drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))"};
    transform: scale(1.1);
  }
`;function sk(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}}]})(e)}function ak(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M3 3l18 18"}}]})(e)}function lk(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M11 11l1 -1v4"}}]})(e)}function ck(e){return we({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}}]})(e)}const uk=k.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`,dk=k.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,fk=()=>{const e=b.useRef(null),{state:t}=Jt(),n=b.useRef(0);return b.useEffect(()=>{if(!e.current)return;const r=e.current,i=r.getContext("2d");if(!i)return;const o=window.devicePixelRatio||1,s=r.getBoundingClientRect();r.width=s.width*o,r.height=s.height*o,i.scale(o,o);const a=()=>{var m;if(!i)return;const l=((m=t.currentTrack)==null?void 0:m.color)||"#388e3c";n.current=requestAnimationFrame(a);const c=s.width,u=s.height;i.clearRect(0,0,c,u);const d=new Array(128).fill(0).map((v,x)=>{const S=t.progress*.01+x*.01;return Math.sin(S*.5)*.3+Math.sin(S*1.5)*.2+Math.sin(S*3.5)*.1}),f=i.createLinearGradient(0,0,c,u);f.addColorStop(0,`${l}40`),f.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=f,i.beginPath(),i.moveTo(0,u);for(let v=0;v<d.length;v++){const x=v/d.length*c,S=u-u*.5*(1+d[v]);i.lineTo(x,S)}i.lineTo(c,u),i.closePath(),i.fill(),i.strokeStyle=l,i.lineWidth=2,i.beginPath();for(let v=0;v<d.length;v++){const x=v/d.length*c,S=u-u*.5*(1+d[v]);v===0?i.moveTo(x,S):i.lineTo(x,S)}i.stroke()};return a(),()=>{n.current&&cancelAnimationFrame(n.current)}},[t.currentTrack,t.progress]),y.jsx(uk,{children:y.jsx(dk,{ref:e})})},pk=rr`
  /* existing animation */
`,hk=rr`
  /* existing animation */
`,mk=k.div.attrs({className:"dp-equalizer-container"})`
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
`,gk=k.canvas.attrs({className:"dp-equalizer-canvas"})`
  /* existing styles */
`,yk=k.div.attrs(e=>({className:"dp-equalizer-glow",style:{opacity:e.$isPlaying?.8:.2,animationDuration:`${3-e.$intensity*1.5}s`,background:`linear-gradient(90deg, transparent, ${e.$color}20, transparent)`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  animation-name: ${pk};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background-size: 200% 200%;
  will-change: opacity, background;
`,vk=k.div.attrs(e=>({className:"dp-equalizer-flow",style:{animationDuration:`${8-e.$intensity*4}s`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  animation-name: ${hk};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mix-blend-mode: overlay;
  will-change: transform;
`,xk=k.div.attrs(e=>({style:{height:`${e.$height}%`,backgroundColor:e.$color}}))`
  width: 4px;
  border-radius: 2px;
  transition: height 0.1s ease;
  will-change: height;
`,wk=({isPlaying:e=!1,dominantColor:t="#4CAF50",audioRef:n,onIntensityChange:r})=>{var m;const{state:i}=Jt(),[o,s]=b.useState(Array(12).fill(10)),a=b.useRef(0),[l,c]=b.useState(0),u=b.useRef(0),d=b.useMemo(()=>{var v;return t||((v=i.currentTrack)==null?void 0:v.color)||"#388e3c"},[t,(m=i.currentTrack)==null?void 0:m.color]);b.useEffect(()=>{const v=o.reduce((x,S)=>x+S,0)/(o.length*100);c(v)},[o]),b.useEffect(()=>{r&&r(l)},[l,r]),b.useEffect(()=>{if(!i.isPlaying||!i.equalizerActive)return s(Array(12).fill(10)),()=>cancelAnimationFrame(a.current);const v=x=>{if(x-u.current<33){a.current=requestAnimationFrame(v);return}u.current=x,s(S=>{const g=S.map(p=>{const w=20+Math.random()*60;return p+(w-p)*.3});return g.some((p,w)=>Math.abs(p-S[w])>2)?g:S}),a.current=requestAnimationFrame(v)};return a.current=requestAnimationFrame(v),()=>{cancelAnimationFrame(a.current)}},[i.isPlaying,i.equalizerActive]);const f=b.useMemo(()=>o.map((v,x)=>y.jsx(xk,{$height:i.isPlaying?v:5,$color:d},x)),[o,i.isPlaying,d]);return y.jsxs(mk,{$isActive:e,$color:t,children:[y.jsx(gk,{ref:n,width:"280",height:"70"}),y.jsx(yk,{$intensity:l,$color:t,$isPlaying:e,children:y.jsx(vk,{$intensity:l,$color:t})}),f]})},bk=de.memo(wk),Sk=k(O.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  z-index: 5;
  margin-left: 2px; /* Add margin to prevent slider from going too far left */
  will-change: transform, opacity;
`,kk=k(O.button).attrs(e=>({id:"music-player-volume-toggle","aria-label":e.volume===0?"Unmute":"Mute"}))`
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
`,Ck=k(O.div)`
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
`,Pk=k.input.attrs({type:"range",min:"0",max:"100",step:"1",id:"music-player-volume-slider"})`
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
`,Tk=k(O.div)`
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
`,Ek=k(O.div)`
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
`,Ak=k(O.div)`
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
`,$k=({volume:e,onVolumeChange:t,className:n})=>{const[r,i]=b.useState(!1),[o,s]=b.useState(!1),[a,l]=b.useState(e),[c,u]=b.useState(!1),d=b.useRef(null);b.useEffect(()=>{const S=g=>{d.current&&!d.current.contains(g.target)&&o&&s(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[o]);const f=()=>e===0?y.jsx(oS,{size:18,style:{opacity:.9,filter:"drop-shadow(0 0 2px rgba(255, 82, 82, 0.7))"}}):e<50?y.jsx(iS,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}):y.jsx(a1,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}),m=()=>{e===0?t(a>0?a:50):(l(e),t(0))},v=S=>{const g=parseInt(S.target.value,10);t(g)},x=b.useCallback(()=>{requestAnimationFrame(()=>{s(S=>!S)})},[]);return y.jsx(Sk,{ref:d,className:n,onMouseEnter:()=>i(!0),onMouseLeave:()=>{i(!1),u(!1)},initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:y.jsx(Nt,{mode:"wait",initial:!1,presenceAffectsLayout:!1,children:o?y.jsxs(Ck,{initial:{opacity:0,width:"40px"},animate:{opacity:1,width:"120px"},exit:{opacity:0,width:"40px"},transition:{duration:.15,ease:"easeOut",width:{duration:.2}},children:[y.jsx("div",{style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",zIndex:2,filter:"drop-shadow(0 0 3px rgba(138, 43, 226, 0.7))"},children:f()}),y.jsx(Pk,{value:e,onChange:v,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)}),y.jsxs(Nt,{children:[c&&e>0&&y.jsxs(Tk,{$volume:e,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:[e,"%"]},"volume-level"),e===0&&c&&y.jsx(Ek,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:"Muted"},"mute-indicator")]})]},"slider-container"):y.jsxs(kk,{volume:e,onClick:x,onDoubleClick:m,whileTap:{scale:.95},title:"Open volume slider",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.15},children:[f(),y.jsx(Ak,{$volume:e,initial:{opacity:0},animate:{opacity:e===0?0:r?.3:0},transition:{duration:.2}})]},"volume-button")})})},jk=k.div.attrs({className:"mp-ambient-particles"})`
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
`,Mk=k.div.attrs({className:"mp-visualizer-wrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,c1={sidebar:.3,buttonDelay:.15,buttonTransition:.35},u1=k(O.div).attrs(e=>({className:"mp-sidebar"}))`
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
`,Rk=k.div.attrs(e=>({className:"mp-track-display"}))`
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
`,Lk=k.div.attrs(e=>({className:"mp-album-bg-color"}))`
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
`,zk=k.div.attrs({className:"mp-album-ripple-effect"})`
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
`,_k=k.div.attrs({className:"mp-album-artwork"})`
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
`,Dk=k.img.attrs({className:"mp-album-image"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Bp=k.div.attrs({className:"mp-track-metadata"})`
  text-align: center;
  margin-top: 20px;
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`,Hp=k.h2.attrs({className:"mp-track-title"})`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  user-select: none; // Prevent text selection

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`,Up=k.p.attrs({className:"mp-track-artist"})`
  font-size: 1.1rem;
  color: ${e=>e.theme.textSecondary};
  margin: 0 0 5px 0;
  user-select: none; // Prevent text selection
`,Nk=k.p.attrs({className:"mp-track-album"})`
  font-size: 0.9rem;
  color: ${e=>e.theme.textSecondary};
  opacity: 0.8;
  user-select: none; // Prevent text selection
`,Ik=k.div.attrs({className:"mp-playback-controls"})`
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
`,Pn=k.button.attrs({className:"mp-control-button"})`
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
`,Ok=k(Pn).attrs({className:"mp-play-pause-button"})`
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
`,Vk=({isPlaying:e,onPlayPause:t,onPrev:n,onNext:r})=>y.jsxs(Ik,{children:[y.jsx(Pn,{onClick:n,children:y.jsx(Q3,{})}),y.jsx(Ok,{onClick:t,className:e?"playing":"paused","aria-label":e?"Pause":"Play",children:y.jsxs("div",{className:"icon-container",children:[y.jsx(Sa,{className:"play-icon"}),y.jsx(ba,{className:"pause-icon"})]})}),y.jsx(Pn,{onClick:r,children:y.jsx(J3,{})})]}),Fk=k.div.attrs({className:"mp-progress-wrapper"})`
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
`,Bk=k.div.attrs({className:"mp-progress-track"})`
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
`,Hk=k.div.attrs(e=>({style:{width:e.$width}}))`
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
`,Uk=k.div.attrs(e=>({style:{left:e.$position,transform:`translate(-50%, -50%) scale(${e.$visible?1:0})`,width:e.$isDragging?"18px":"12px",height:e.$isDragging?"18px":"12px",background:e.$isDragging?"white":e.theme.primary,boxShadow:e.$isDragging?`0 0 0 4px rgba(76, 175, 80, 0.3), 
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
`,Wk=k.div.attrs({className:"mp-time-display"})`
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
`,Gk=k.div.attrs(e=>({style:{opacity:e.$visible?1:0,transform:`translateX(-50%) translateY(${e.$visible?0:10}px)`,left:e.$position,background:e.$isDragging?e.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)",padding:e.$isDragging?"5px 10px":"4px 8px",fontSize:e.$isDragging?"0.85rem":"0.75rem",fontWeight:e.$isDragging?600:500}}))`
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
`;class Yk{constructor(t,n){this.audioRef=t,this.dispatch=n,this.lastAction=null,this.doubleClickThreshold=300,this.debounceThreshold=150,this.playPromise=null,this.handlePlayPause=()=>{var i;if(this.shouldDebounce("playPause"))return;this.lastAction={type:"playPause",time:Date.now()};const r=this.audioRef.current;if(r)if(r.paused){this.dispatch({type:"PLAY"});try{this.playPromise=r.play(),(i=this.playPromise)==null||i.catch(o=>{console.warn("Play failed:",o),this.dispatch({type:"PAUSE"}),this.playPromise=null})}catch(o){console.warn("Play operation failed:",o),this.dispatch({type:"PAUSE"})}}else this.playPromise?this.playPromise.then(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}).catch(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}):(r.pause(),this.dispatch({type:"PAUSE"}))},this.handlePrev=()=>{if(this.shouldDebounce("prev"))return;const r=this.isDoubleClick("prev");this.lastAction={type:"prev",time:Date.now()};const i=this.audioRef.current;if(i){if(r){console.log("Double-click detected on prev button, skipping to previous track"),this.dispatch({type:"PREV_TRACK"});return}i.currentTime>3?i.currentTime=0:this.dispatch({type:"PREV_TRACK"})}},this.handleNext=()=>{if(this.shouldDebounce("next"))return;this.lastAction={type:"next",time:Date.now()},this.isDoubleClick("next")&&console.log("Double-click detected on next button"),this.dispatch({type:"NEXT_TRACK"})}}isDoubleClick(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.doubleClickThreshold:!1}shouldDebounce(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.debounceThreshold:!1}}const Kk=de.forwardRef(({isOpen:e,toggleOpen:t,setSidebarOpen:n},r)=>{var F,G,M,z;const{state:i,dispatch:o}=Jt(),s=b.useRef(null),a=b.useRef(null),l=b.useRef(new Yk(s,o)).current,c=l.handlePlayPause,u=l.handlePrev,d=()=>{if(i.repeatMode==="one"&&s.current){s.current.currentTime=0,s.current.play().catch(j=>console.warn("Couldn't restart track:",j));return}o({type:"NEXT_TRACK"})},f=((F=i.currentTrack)==null?void 0:F.color)||"#388e3c";b.useEffect(()=>{var j,A;i.isPlaying?(j=s.current)==null||j.play():(A=s.current)==null||A.pause()},[i.isPlaying,i.currentTrack]),b.useEffect(()=>{s.current&&(s.current.volume=i.volume)},[i.volume]);const m=j=>{if(j&&!isNaN(j)){const A=Math.floor(j/60),I=Math.floor(j%60);return`${A}:${I<10?"0":""}${I}`}return"0:00"},v=()=>{if(s.current){const j=s.current.currentTime,A=s.current.duration;o({type:"SET_PROGRESS",payload:j}),o({type:"SET_DURATION",payload:A})}},x=j=>{if(a.current&&s.current){const A=a.current.clientWidth,I=j.nativeEvent.offsetX,ee=s.current.duration;s.current.currentTime=I/A*ee}};b.useEffect(()=>{if(i.isPlaying&&s.current){const j=s.current.play();j!==void 0&&j.catch(A=>{console.warn("Failed to start playback:",A),o({type:"PAUSE"})})}else s.current&&s.current.pause()},[i.currentTrack,i.isPlaying,o]),b.useEffect(()=>{const j=()=>{var I;if((I=s.current)!=null&&I.error){console.error("Media error:",s.current.error);let ee=0;const Q=3,pe=()=>{if(ee<Q){ee++;const ie=Math.pow(2,ee)*1e3;console.log(`Retrying playback in ${ie/1e3} seconds...`),setTimeout(()=>{s.current&&(s.current.load(),s.current.play().catch(Se=>{console.warn("Retry failed:",Se),pe()}))},ie)}else console.warn("All retries failed, skipping track"),d()};pe()}},A=s.current;return A&&A.addEventListener("error",j),()=>{A&&A.removeEventListener("error",j)}},[]);const[S,g]=b.useState(!1),[h,p]=b.useState("0%"),[w,C]=b.useState(!1),[T,P]=b.useState(null),E=j=>{var A;if(a.current){const I=a.current.getBoundingClientRect(),ee=(j.clientX-I.left)/I.width,Q=Math.max(0,Math.min(1,ee))*100;if(p(`${Q.toFixed(3)}%`),(A=s.current)!=null&&A.duration){const pe=Q*s.current.duration/100;P(m(pe))}S||g(!0)}},_=()=>{w||g(!1)},L=j=>{C(!0),W(j)},H=j=>{if(s.current){const A=s.current.duration,I=j/100*A;return m(I)}return"0:00"},W=j=>{if(a.current){const A=a.current.getBoundingClientRect(),I=(j.clientX-A.left)/A.width,ee=Math.max(0,Math.min(1,I))*100,Q=`${ee}%`;if(p(Q),P(H(ee)),w&&s.current){const pe=s.current.duration;s.current.currentTime=ee/100*pe,a.current.querySelector(".mp-progress-fill")&&(a.current.querySelector(".mp-progress-fill").style.width=Q)}}},K=()=>{C(!1),setTimeout(()=>{S||g(!1)},100)};b.useEffect(()=>{const j=Q=>{if(w&&a.current){Q.preventDefault();const pe=a.current.getBoundingClientRect(),ie=(Q.clientX-pe.left)/pe.width,Se=Math.max(0,Math.min(1,ie))*100;if(p(`${Se.toFixed(3)}%`),s.current){const lt=s.current.duration;s.current.currentTime=Se/100*lt}}};let A;const I=Q=>{w&&(Q.preventDefault(),cancelAnimationFrame(A),A=requestAnimationFrame(()=>{j(Q)}))},ee=()=>{w&&(K(),cancelAnimationFrame(A))};return w&&(document.addEventListener("mousemove",I,{passive:!1}),document.addEventListener("mouseup",ee)),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",ee),cancelAnimationFrame(A)}},[w]);const X=()=>{const j=qk(i.sidebarMode)?i.sidebarMode:"auto",A=["auto","always","manual"],ee=(A.indexOf(j)+1)%A.length,Q=A[ee];o({type:"SET_SIDEBAR_MODE",payload:Q})},fe=()=>{t(),o({type:"SET_SIDEBAR_MODE",payload:"manual"}),o({type:"SIDEBAR_INTERACTION"}),o({type:"USER_INTERACTION"})};return y.jsxs(u1,{$isOpen:e,className:"player-sidebar",ref:r,initial:{right:"-280px"},animate:{right:e?0:"-280px"},transition:{duration:c1.sidebar,ease:[.34,1.56,.64,1]},children:[y.jsx(Xk,{}),y.jsxs(Qk,{onClick:fe,"aria-label":"Close sidebar",children:[y.jsx(rS,{}),y.jsxs("div",{className:"particles",children:[y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"})]})]}),y.jsx("audio",{ref:s,src:(G=i.currentTrack)==null?void 0:G.audioSrc,onTimeUpdate:v,onEnded:d,onError:j=>{console.error("Audio error:",j),i.isPlaying&&(o({type:"PAUSE"}),setTimeout(()=>{d()},500))},onCanPlayThrough:()=>{i.isPlaying&&s.current&&s.current.play().catch(j=>{console.warn("Auto-play was prevented:",j),o({type:"PAUSE"})})}}),y.jsxs(Rk,{$bgColor:f,children:[y.jsx(Lk,{$bgColor:f}),i.currentTrack?y.jsxs(y.Fragment,{children:[y.jsxs(_k,{children:[y.jsx(Dk,{src:kn((M=i.currentTrack)==null?void 0:M.coverArt),alt:((z=i.currentTrack)==null?void 0:z.title)||"Album Cover"}),y.jsx(zk,{}),i.equalizerActive&&y.jsx(bk,{})]}),y.jsxs(Bp,{children:[y.jsx(Hp,{children:i.currentTrack.title}),y.jsx(Up,{children:i.currentTrack.artist}),y.jsx(Nk,{children:i.currentTrack.album})]}),y.jsx(Vk,{isPlaying:i.isPlaying,onPlayPause:c,onPrev:u,onNext:d}),y.jsxs(Fk,{children:[y.jsxs(Bk,{ref:a,onClick:x,onMouseMove:E,onMouseEnter:E,onMouseLeave:_,onMouseDown:L,children:[y.jsx(Hk,{$width:w?h:`${i.progress/i.duration*100}%`,$isDragging:w,$isPlaying:i.isPlaying}),y.jsx(Gk,{$visible:S,$position:h,$isDragging:w,children:T||m(i.progress)}),y.jsx(Uk,{$visible:S||w,$position:w||S?h:`${i.progress/i.duration*100}%`,$isDragging:w})]}),y.jsxs(Wk,{children:[y.jsx("span",{children:m(i.progress)}),y.jsx("span",{children:m(i.duration)})]})]})]}):y.jsxs(Bp,{children:[y.jsx(Hp,{children:"No track selected"}),y.jsx(Up,{children:"Select a track to play"})]})]}),y.jsxs(Jk,{children:[y.jsx(e4,{children:y.jsx($k,{volume:Math.round(i.volume*100),onVolumeChange:j=>o({type:"SET_VOLUME",payload:j/100})})}),y.jsxs(t4,{children:[y.jsx(Pn,{onClick:()=>o({type:"TOGGLE_SHUFFLE"}),style:{color:i.isShuffling?"#388e3c":""},title:"Toggle shuffle mode",children:y.jsx(nS,{})}),y.jsx(r4,{onClick:()=>o({type:"CYCLE_REPEAT_MODE"}),className:`${i.repeatMode==="off"?"repeat-off":i.repeatMode==="all"?"repeat-all":"repeat-one"} ${i.repeatMode!=="off"?"active":""}`,title:`Repeat mode: ${i.repeatMode}`,"aria-label":`Repeat mode: ${i.repeatMode}`,children:y.jsxs("div",{className:"repeat-icon-container",children:[y.jsx(ak,{className:`repeat-off-icon ${i.repeatMode==="off"?"active":""}`}),y.jsx(ck,{className:`repeat-all-icon ${i.repeatMode==="all"?"active":""}`}),y.jsx(lk,{className:`repeat-one-icon ${i.repeatMode==="one"?"active":""}`}),y.jsx("span",{className:"repeat-badge",children:"1"})]})}),y.jsx(Pn,{onClick:()=>o({type:"TOGGLE_VISUALIZER"}),style:{color:i.visualizerActive?"#388e3c":""},title:"Toggle visualizer",children:y.jsx(q3,{})}),y.jsx(n4,{onClick:()=>o({type:"TOGGLE_EQUALIZER"}),className:`${i.isPlaying?"playing":""} ${i.equalizerActive?"active":""}`,style:{color:i.equalizerActive?"#388e3c":""},title:"Toggle equalizer",children:y.jsx(sk,{})}),y.jsx("div",{}),y.jsxs(Pn,{className:"sidebar-mode-button",onClick:X,style:{color:(()=>{switch(i.sidebarMode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}})()},title:`Sidebar: ${i.sidebarMode} mode`,children:[i.sidebarMode==="auto"&&y.jsx(Z3,{}),i.sidebarMode==="always"&&y.jsx(tS,{}),i.sidebarMode==="manual"&&y.jsx(eS,{})]})]})]})]})}),Xk=k.div.attrs({className:"mp-sidebar-ambient-effect"})`
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
`,Qk=k.button.attrs({className:"mp-sidebar-close"})`
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
`,qk=e=>e==="auto"||e==="always"||e==="manual",Zk=()=>{var c;const{state:e,dispatch:t}=Jt(),[n,r]=b.useState(!1),i=b.useRef(null),o=b.useRef(null);b.useRef(null),b.useEffect(()=>{const u=()=>{try{window.removeEventListener("click",u),window.removeEventListener("touchstart",u);const d=window.AudioContext||window.webkitAudioContext;if(d){const f=new d;f.state==="suspended"&&f.resume(),console.log("Audio context initialized through user interaction")}}catch(d){console.log("Audio initialization error:",d)}};return window.addEventListener("click",u),window.addEventListener("touchstart",u),()=>{window.removeEventListener("click",u),window.removeEventListener("touchstart",u)}},[]),b.useEffect(()=>{if(e.sidebarMode==="auto"){const u=m=>{const v=window.innerWidth,x=Math.min(80,v*.08);if(m.clientX>v-x&&!n&&(r(!0),t({type:"SIDEBAR_INTERACTION"})),n){const g=v-280;m.clientX<g&&r(!1)}},d=m=>{n&&o.current&&(o.current.contains(m.target)||r(!1))},f=m=>{if(n&&m.touches.length>0){const v=m.touches[0],x=window.innerWidth,S=280;v.clientX<x-S-30&&r(!1)}};return document.addEventListener("mousemove",u),document.addEventListener("click",d),document.addEventListener("touchmove",f),()=>{document.removeEventListener("mousemove",u),document.removeEventListener("click",d),document.removeEventListener("touchmove",f)}}e.sidebarMode==="always"&&r(!0)},[e.sidebarMode,n,t,o]);const s=u=>{if(u.current){const d=u.current.currentTime,f=u.current.duration;!isNaN(d)&&!isNaN(f)&&(t({type:"SET_PROGRESS",payload:d}),t({type:"SET_DURATION",payload:f}))}},a=()=>{t({type:"NEXT_TRACK"})},l=()=>{const u=!n;r(u),t({type:"SET_SIDEBAR_OPEN",payload:u}),t({type:"TOGGLE_SIDEBAR_VISIBILITY"}),e.sidebarMode!=="manual"&&t({type:"SET_SIDEBAR_MODE",payload:"manual"}),t({type:"SIDEBAR_INTERACTION"}),t({type:"USER_INTERACTION"})};return b.useEffect(()=>{const u=d=>{const f=d.target;f.tagName==="IMG"&&!f.src.includes("default_cover.jpeg")&&(console.log(`Image failed to load: ${f.src}, using default cover`),f.src=n1)};return document.addEventListener("error",u,!0),()=>{document.removeEventListener("error",u,!0)}},[]),b.useEffect(()=>{e.sidebarOpen!==void 0&&r(e.sidebarOpen)},[e.sidebarOpen]),y.jsxs(u1,{$isOpen:n,ref:o,initial:{right:"-280px"},animate:{right:n?0:"-280px"},transition:{duration:c1.sidebar,ease:[.34,1.56,.64,1]},children:[y.jsx(jk,{}),y.jsx("audio",{ref:i,src:(c=e.currentTrack)==null?void 0:c.audioSrc,onTimeUpdate:()=>s(i),onEnded:a}),y.jsx(Mk,{children:e.visualizerActive&&y.jsx(fk,{})}),y.jsx(Kk,{isOpen:n,toggleOpen:l,setSidebarOpen:r,ref:o})]})},Jk=k.div.attrs({className:"mp-secondary-controls"})`
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
`,e4=k.div.attrs({className:"mp-control-group"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 2px;
`,t4=k.div.attrs({className:"mp-feature-toggles"})`
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
`,n4=k(Pn).attrs({className:"mp-control-button mp-equalizer-button"})`
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
`,r4=k(Pn).attrs({className:"mp-control-button mp-repeat-button"})`
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
`,i4=({isOpen:e,onToggle:t,className:n})=>y.jsxs(o4,{className:n,onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:[y.jsx(s4,{$isOpen:e,children:y.jsx(a4,{animate:{y:e?"0%":"-50%",rotate:e?0:-15},transition:{type:"spring",stiffness:300,damping:20}})}),y.jsx(l4,{}),y.jsx(c4,{children:y.jsx(u4,{})})]}),o4=k(O.button)`
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
`,s4=k.div`
  position: absolute;
  top: 12px;
  width: 20px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  opacity: ${e=>e.$isOpen?.8:1};
  transition: opacity 0.3s ease;
`,a4=k(O.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  border-radius: 4px;
`,l4=k.div`
  width: 12px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px 2px 0 0;
`,c4=k.div`
  width: 24px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`,u4=k.div`
  position: absolute;
  inset: 1px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;class d4{constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.canvas.width=100,this.canvas.height=100,this.imageCache=new Map}async extractColors(t){if(this.imageCache.has(t))return this.imageCache.get(t);try{const n=await this.loadImage(t);if(!this.ctx)throw new Error("Canvas context not available");this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(n,0,0,this.canvas.width,this.canvas.height);const i=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data,o=this.analyzePalette(i);return this.imageCache.set(t,o),o}catch(n){return console.error("Failed to extract colors:",n),this.getDefaultPalette()}}loadImage(t){return new Promise((n,r)=>{const i=new Image;i.crossOrigin="Anonymous",i.onload=()=>n(i),i.onerror=o=>r(new Error(`Failed to load image: ${t}`)),i.src=t})}analyzePalette(t){const n={},r=[],i=[],o=[];for(let v=0;v<t.length;v+=4){const x=t[v],S=t[v+1],g=t[v+2];if(t[v+3]<128)continue;const p=`${Math.floor(x/8)},${Math.floor(S/8)},${Math.floor(g/8)}`;n[p]?(n[p].count++,n[p].r=(n[p].r+x)/2,n[p].g=(n[p].g+S)/2,n[p].b=(n[p].b+g)/2):n[p]={count:0,r:x,g:S,b:g};const w=(x+S+g)/3,C=Math.max(x,S,g)-Math.min(x,S,g);w<80&&r.push([x,S,g]),w>200&&i.push([x,S,g]),C>100&&o.push([x,S,g])}const s=Object.values(n).sort((v,x)=>x.count-v.count),a=s[0]||{r:76,g:175,b:80},l=this.findDistinctColor(s,a)||{r:33,g:150,b:243},c=this.averageColors(r)||[23,23,23],u=this.averageColors(i)||[230,230,230],d=this.getMostVibrant(o)||[255,87,34],f=this.getMutedVersion(a),m=this.getComplementaryColor(a);return{primary:this.rgbToHex(a.r,a.g,a.b),secondary:this.rgbToHex(l.r,l.g,l.b),dark:this.rgbToHex(c[0],c[1],c[2]),light:this.rgbToHex(u[0],u[1],u[2]),vibrant:this.rgbToHex(d[0],d[1],d[2]),accent:this.rgbToHex(m.r,m.g,m.b),muted:this.rgbToHex(f.r,f.g,f.b)}}findDistinctColor(t,n){for(const i of t)if(this.getColorDistance(i,n)>80)return i}getColorDistance(t,n){const r=t.r-n.r,i=t.g-n.g,o=t.b-n.b;return Math.sqrt(r*r*.3+i*i*.59+o*o*.11)}averageColors(t){if(t.length===0)return null;let n=0,r=0,i=0;for(const o of t)n+=o[0],r+=o[1],i+=o[2];return[Math.round(n/t.length),Math.round(r/t.length),Math.round(i/t.length)]}getMostVibrant(t){if(t.length===0)return null;let n=t[0],r=this.getSaturation(n);for(const i of t){const o=this.getSaturation(i);o>r&&(r=o,n=i)}return n}getSaturation(t){const n=Math.max(...t),r=Math.min(...t);return n===0?0:(n-r)/n}getMutedVersion(t){return{r:Math.round(t.r*.7+128*(1-.7)),g:Math.round(t.g*.7+128*(1-.7)),b:Math.round(t.b*.7+128*(1-.7))}}getComplementaryColor(t){return{r:255-t.r,g:255-t.g,b:255-t.b}}rgbToHex(t,n,r){return`#${this.componentToHex(t)}${this.componentToHex(n)}${this.componentToHex(r)}`}componentToHex(t){const n=Math.round(t).toString(16);return n.length===1?"0"+n:n}getDefaultPalette(){return{primary:"#4CAF50",secondary:"#2196F3",accent:"#FF5722",dark:"#212121",light:"#F5F5F5",vibrant:"#E91E63",muted:"#7CB342"}}generateWaveEffects(t){return[{color:t.primary,amplitude:20,frequency:.02,speed:.5},{color:t.secondary,amplitude:15,frequency:.03,speed:.7},{color:t.accent,amplitude:10,frequency:.01,speed:.3}]}createGradientBackground(t){return`radial-gradient(circle at center, 
      ${this.hexToRgba(t.dark,.8)} 0%, 
      ${this.hexToRgba(t.dark,.9)} 70%, 
      ${this.hexToRgba(t.dark,1)} 100%)`}hexToRgba(t,n){const r=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`rgba(${r}, ${i}, ${o}, ${n})`}}const ns=new d4,f4=({imageUrl:e,isPlaying:t=!1,intensity:n=.5})=>{const r=b.useRef(null),i=b.useRef(null),o=b.useRef(),[s,a]=b.useState([]),[l,c]=b.useState("");b.useEffect(()=>{if(!e)return;let d=!0;return(async()=>{try{const m=await ns.extractColors(e);if(!d)return;const v=ns.generateWaveEffects(m);a(v);const x=ns.createGradientBackground(m);c(x)}catch(m){console.error("Failed to process image colors:",m)}})(),()=>{d=!1}},[e]),b.useEffect(()=>{const d=i.current,f=r.current;if(!d||!f||s.length===0)return;const m=()=>{const{width:h,height:p}=f.getBoundingClientRect();d.width=h,d.height=p};m();const v=new ResizeObserver(e1.throttle(m,100));v.observe(f);const x={value:0};let S=0;const g=h=>{S===0&&(S=h);const p=(h-S)/1e3;S=h,t&&(x.value+=p);const w=d.getContext("2d");w&&(w.clearRect(0,0,d.width,d.height),s.forEach((C,T)=>{u(w,C,x.value,d.width,d.height,T,n)}),o.current=requestAnimationFrame(g))};return o.current=requestAnimationFrame(g),()=>{o.current&&cancelAnimationFrame(o.current),v.disconnect()}},[s,t,n]);const u=(d,f,m,v,x,S,g)=>{const{amplitude:h,frequency:p,speed:w,color:C}=f,T=h*g*(1-S*.2),P=w*(t?1:.2),E=x*(.3+S*.15);d.beginPath(),d.moveTo(0,E);for(let L=0;L<=v;L+=1){const H=E+Math.sin(L*p+m*P)*T+Math.sin(L*p*.5+m*P*.7)*(T*.5);d.lineTo(L,H)}d.lineTo(v,x),d.lineTo(0,x),d.closePath();const _=d.createLinearGradient(0,E,0,x);_.addColorStop(0,`${C}80`),_.addColorStop(1,`${C}10`),d.fillStyle=_,d.fill()};return y.jsxs(p4,{ref:r,style:{background:l},children:[y.jsx(h4,{ref:i}),y.jsx(m4,{$isPlaying:t})]})},p4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  transition: background 1s ease;
`,h4=k.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,m4=k.div`
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
`,g4=()=>{var v,x,S;const{state:e,dispatch:t}=Jt(),{state:n,dispatch:r}=wa(),[i,o]=b.useState(!0),[s,a]=b.useState({primary:"#4caf50",vibrant:"#4caf50",accent:"#43a047"});b.useEffect(()=>{var g;(g=e.currentTrack)!=null&&g.coverArt&&(async()=>{var p;try{const w=kn((p=e.currentTrack)==null?void 0:p.coverArt),C=await ns.extractColors(w);a({primary:C.primary,vibrant:C.vibrant,accent:C.accent})}catch(w){console.error("Failed to extract colors:",w)}})()},[e.currentTrack]);const l=b.useMemo(()=>`linear-gradient(135deg, 
      ${s.primary}22 0%, 
      ${s.vibrant}33 50%, 
      ${s.accent}22 100%)`,[s]),c=()=>{t({type:e.isPlaying?"PAUSE":"PLAY"})},u=()=>{t({type:"PREV_TRACK"})},d=()=>{t({type:"NEXT_TRACK"})},f=()=>{r({type:"TOGGLE_EXPLORER"})},m=()=>{t({type:"SET_SIDEBAR_OPEN",payload:!0}),t({type:"SET_SIDEBAR_MODE",payload:"manual"})};return b.useEffect(()=>{o(!e.sidebarOpen)},[e.sidebarOpen]),y.jsxs(y.Fragment,{children:[y.jsx(R4,{}),y.jsxs(y4,{initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",damping:20},style:{background:l},children:[y.jsxs(v4,{children:[((v=e.currentTrack)==null?void 0:v.coverArt)&&y.jsx(f4,{imageUrl:kn(e.currentTrack.coverArt),isPlaying:e.isPlaying,intensity:.6}),y.jsx(x4,{$isPlaying:e.isPlaying})]}),y.jsx(w4,{children:y.jsxs(b4,{children:[y.jsxs(S4,{children:[y.jsx(j4,{isOpen:n.explorerVisible,onToggle:f}),e.currentTrack&&y.jsx(k4,{$isPlaying:e.isPlaying,children:y.jsx(C4,{src:kn(e.currentTrack.coverArt),alt:`${e.currentTrack.title} cover art`,$isPlaying:e.isPlaying})}),y.jsxs(P4,{children:[y.jsx(T4,{children:((x=e.currentTrack)==null?void 0:x.title)||"No track"}),y.jsx(E4,{children:((S=e.currentTrack)==null?void 0:S.artist)||"No artist"})]})]}),y.jsx(Nt,{children:i&&y.jsx(jc,{onClick:m,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},$accentColor:s.primary,"aria-label":"Open sidebar player",children:y.jsx(M4,{src:"/assets/icons/full_screen.png",alt:"Fullscreen"})})}),y.jsxs(A4,{children:[y.jsx($c,{onClick:u,"aria-label":"Previous track",children:y.jsx(o1,{})}),y.jsx($4,{onClick:c,"aria-label":e.isPlaying?"Pause":"Play",$accentColor:s.vibrant,$isPlaying:e.isPlaying,children:e.isPlaying?y.jsx(ba,{}):y.jsx(Sa,{style:{marginLeft:"2px"}})}),y.jsx($c,{onClick:d,"aria-label":"Next track",children:y.jsx(s1,{})})]})]})})]})]})},y4=k(O.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  z-index: 1000;
  overflow: hidden;
  height: 90px;
`,v4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`,x4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(${e=>e.$isPlaying?"8px":"16px"});
  z-index: 1;
  transition: backdrop-filter 1.2s ease;
`,w4=k.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; // Center the controls vertically now that progress is gone
`,b4=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 100%; // Take up full height
`,S4=k.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  margin-right: 16px;
`,k4=k.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-right: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: ${e=>e.$isPlaying?"scale(1.05)":"scale(1)"};
  transition: transform 0.5s ease;
`,C4=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${e=>e.$isPlaying?"scale(1.1)":"scale(1)"};
  transition: transform 5s ease;
  animation: ${e=>e.$isPlaying?"subtlePulse 3s infinite alternate":"none"};

  @keyframes subtlePulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`,P4=k.div`
  min-width: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`,T4=k.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,E4=k.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,A4=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,$c=k.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  /* Remove focus outline and tap highlight */
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
`,$4=k($c)`
  background: ${e=>e.$accentColor||"#4caf50"};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
  box-shadow: 0 2px 15px
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
`,j4=k(i4)`
  margin-right: 12px;
  transform-origin: center;
  min-width: 32px;
  height: 48px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  @media (min-width: 769px) {
    display: none;
  }
`,jc=k(O.button)`
  background: transparent; // Remove background
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  position: relative;
  overflow: visible; // Allow icon to extend beyond button bounds

  /* Remove focus outline and tap highlight on all devices */
  outline: none;
  -webkit-tap-highlight-color: transparent;

  /* Prevent blue highlight on touch devices */
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`,M4=k.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(1.2) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
  opacity: 0.9;

  ${jc}:hover & {
    filter: brightness(1.5) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
    transform: scale(1.1);
    opacity: 1;
  }

  ${jc}:active & {
    filter: brightness(0.9) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    transform: scale(0.9);
  }
`,R4=Fx`
  /* Remove focus styles for all interactive elements in this component */
  button, 
  [role="button"],
  input,
  select,
  a {
    &:focus {
      outline: none !important;
    }
    
    /* Remove blue highlight on mobile */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;rr`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`;const L4=rr`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`,d1=rr`
  0% {
    background-position: 200% 50%;
    opacity: 0.3;
  }
  100% {
    background-position: -200% 50%;
    opacity: 0.7;
  }
`,f1=rr`
  0% { filter: brightness(1) blur(8px); }
  50% { filter: brightness(1.5) blur(12px); }
  100% { filter: brightness(1) blur(8px); }
`,Xe=(e="default")=>{const t={electronic:"#00ff99",rock:"#ff4444",jazz:"#4444ff",classical:"#ffaa00",pop:"#ff44ff",default:"#4caf50"};return t[e]||t.default},Vs=k.button`
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
`,z4=k(Vs)`
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
`,_4=k.div`
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
`,D4=k.div`
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
    animation: ${d1} 2s linear infinite;
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
    animation: ${f1} 2s ease-in-out infinite;
  }
`,N4=k.div`
  position: absolute;
  bottom: 20px;
  left: ${e=>e.$position};
  transform: translateX(-50%);
  background: ${({theme:e})=>e.id==="contrast-light"?"rgba(0, 0, 0, 0.8)":e.player.controls};
  color: ${({theme:e})=>e.text.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
  border: 1px solid
    ${({theme:e})=>e.id==="contrast-light"?"transparent":e.explorer.border};
`,I4=k.input`
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
`,O4=k(O.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: ${({theme:e})=>e.player.controls};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  z-index: 100;

  /* Theme-specific styling */
  ${({theme:e})=>{switch(e.id){case"space-grey":return Rt`
          box-shadow: 0 -3px 16px rgba(0, 0, 0, 0.4);
        `;case"ocean-blue":return Rt`
          background: linear-gradient(
            180deg,
            ${e.player.controls} 0%,
            rgba(0, 92, 151, 0.98) 100%
          );
        `;case"cyber-punk":return Rt`
          box-shadow: 0 -4px 20px ${e.ui.accent}33;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              ${e.ui.accent} 50%,
              transparent 100%
            );
            opacity: 0.7;
          }
        `;case"contrast-light":return Rt`
          border-top: 1px solid ${e.explorer.border};
        `;default:return""}}}

  /* Responsive hover effects */
  @media (hover: hover) {
    &:hover {
      background: ${({theme:e})=>e.id==="contrast-light"?"rgba(245, 245, 245, 0.98)":e.id==="cyber-punk"?"rgba(20, 0, 40, 0.98)":e.id==="ocean-blue"?"rgba(0, 82, 141, 0.98)":"rgba(24, 24, 24, 0.98)"};
    }
  }

  /* Mobile optimization */
  @media (max-width: 768px) {
    height: 64px;
    padding: 0 16px;
    gap: 16px;
  }

  /* Smooth transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,V4=k.div`
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
`,F4=k.img`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  object-fit: cover;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  ${e=>e.$isPlaying&&Rt`
      animation: ${L4} 3s ease-in-out infinite;

      &::before {
        content: "";
        position: absolute;
        inset: -15px;
        background: ${Xe(e.$category)};
        animation: ${f1} 3s ease-in-out infinite;
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
        animation: ${d1} 3s linear infinite;
        border-radius: inherit;
      }
    `}

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 0 20px ${e=>Xe(e.$category)}40,
      0 0 40px ${e=>Xe(e.$category)}20;
  }
`,B4=k.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,H4=k.div`
  color: ${({theme:e})=>e.text.primary};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,U4=k.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W4=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 2;
  max-width: 600px;
`,G4=k.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Y4=k.div`
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
`,K4=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  justify-content: flex-end;
  flex: 1;
`,X4=k.div`
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
`,Q4=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,q4=k(Vs)`
  color: rgba(255, 255, 255, ${e=>e.$isMuted?.5:.8});

  &:hover {
    color: white;
  }
`,zo=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`},Z4=e=>{var E,_,L,H,W,K,X,fe;const{state:t,dispatch:n}=Jt(),r=Nx(),i=b.useRef(null),[o,s]=b.useState(!1),a=b.useRef(null),[l,c]=b.useState(!1),[u,d]=b.useState("0px"),[f,m]=b.useState("0:00"),[v,x]=b.useState(!1),S=b.useRef(t.volume),g=()=>{n({type:t.isPlaying?"PAUSE":"PLAY"})},h=()=>{n({type:"PREV_TRACK"})},p=()=>{n({type:"NEXT_TRACK"})},w=F=>{if(!a.current||!i.current)return;const G=a.current.getBoundingClientRect(),z=(F.clientX-G.left)/G.width*i.current.duration;isNaN(z)||(d(`${F.clientX-G.left}px`),m(zo(z)),c(!0))},C=()=>{v?(n({type:"SET_VOLUME",payload:S.current}),x(!1)):(S.current=t.volume,n({type:"SET_VOLUME",payload:0}),x(!0))},T=F=>{const G=parseInt(F.target.value,10)/100;n({type:"SET_VOLUME",payload:G}),G>0&&v&&x(!1)},P=F=>{if(F.preventDefault(),s(!0),a.current&&i.current){const G=a.current.getBoundingClientRect(),z=(F.clientX-G.left)/G.width*i.current.duration;isNaN(z)||(i.current.currentTime=z,n({type:"SET_PROGRESS",payload:z}))}t.isPlaying&&i.current&&i.current.pause()};return b.useEffect(()=>{const F=M=>{if(o&&a.current&&i.current){const z=a.current.getBoundingClientRect(),A=Math.min(Math.max((M.clientX-z.left)/z.width,0),1)*i.current.duration;isNaN(A)||(i.current.currentTime=A,n({type:"SET_PROGRESS",payload:A}),d(`${M.clientX-z.left}px`),m(zo(A)))}},G=()=>{o&&(s(!1),c(!1),t.isPlaying&&i.current&&i.current.play().catch(console.error))};return o&&(document.addEventListener("mousemove",F),document.addEventListener("mouseup",G)),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",G)}},[o,t.isPlaying,n]),y.jsxs(O4,{...e,$themeId:r.id,initial:{y:100,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:30,mass:1}},exit:{y:100,opacity:0,transition:{duration:.2,ease:"easeInOut"}},children:[y.jsxs(V4,{$category:(E=t.currentTrack)==null?void 0:E.genre,children:[y.jsx(F4,{src:kn((_=t.currentTrack)==null?void 0:_.coverArt),alt:((L=t.currentTrack)==null?void 0:L.title)||"Album art",$isPlaying:t.isPlaying,$category:(H=t.currentTrack)==null?void 0:H.genre}),y.jsxs(B4,{children:[y.jsx(H4,{children:((W=t.currentTrack)==null?void 0:W.title)||"No track"}),y.jsx(U4,{children:((K=t.currentTrack)==null?void 0:K.artist)||"No artist"})]}),y.jsxs(X4,{children:[y.jsx("span",{children:zo(t.progress)}),y.jsx("span",{children:"/"}),y.jsx("span",{children:zo(t.duration)})]})]}),y.jsxs(W4,{children:[y.jsxs(G4,{children:[y.jsx(Vs,{onClick:h,"aria-label":"Previous track",children:y.jsx(o1,{})}),y.jsx(z4,{onClick:g,"aria-label":t.isPlaying?"Pause":"Play",$isPlaying:t.isPlaying,$category:(X=t.currentTrack)==null?void 0:X.genre,children:t.isPlaying?y.jsx(ba,{}):y.jsx(Sa,{})}),y.jsx(Vs,{onClick:p,"aria-label":"Next track",children:y.jsx(s1,{})})]}),y.jsx(Y4,{children:y.jsxs(_4,{ref:a,onMouseDown:P,onMouseMove:w,onMouseLeave:()=>{c(!1),o||m("0:00")},children:[y.jsx(D4,{$width:`${t.progress/t.duration*100}%`,$isDragging:o,$category:(fe=t.currentTrack)==null?void 0:fe.genre}),(l||o)&&y.jsx(N4,{$visible:!0,$position:u,children:f})]})})]}),y.jsx(K4,{children:y.jsxs(Q4,{children:[y.jsx(q4,{onClick:C,$isMuted:v||t.volume===0,"aria-label":v?"Unmute":"Mute",children:y.jsx(a1,{})}),y.jsx(I4,{type:"range",min:"0",max:"100",value:Math.round(t.volume*100),onChange:T,"aria-label":"Volume"})]})})]})},J4=()=>{const{currentTheme:e,setTheme:t,availableThemes:n}=Jg(),[r,i]=b.useState(!1),o=()=>i(!r);return y.jsxs(eC,{children:[y.jsxs(tC,{onClick:o,whileHover:{scale:1.05},whileTap:{scale:.95},children:[y.jsx(aS,{size:16}),y.jsx(nC,{children:"Theme"})]}),y.jsx(Nt,{children:r&&y.jsxs(rC,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},children:[y.jsx(iC,{children:"Select Theme"}),y.jsx(oC,{children:n.map(s=>y.jsxs(sC,{onClick:()=>{t(s.id),i(!1)},$isActive:e.id===s.id,children:[y.jsx(aC,{$theme:s}),y.jsx(lC,{children:s.name}),e.id===s.id&&y.jsx(cC,{layoutId:"activeTheme",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}})]},s.id))})]})})]})},eC=k.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`,tC=k(O.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`,nC=k.span`
  font-size: 14px;
  font-weight: 500;
`,rC=k(O.div)`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 240px;
  background: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`,iC=k.div`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,oC=k.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
`,sC=k.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${e=>e.$isActive?"rgba(255, 255, 255, 0.1)":"transparent"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,aC=k.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e=>e.$theme.background.gradient};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, 
      transparent 0%, 
      ${e=>e.$theme.ui.accent}66 50%, 
      transparent 100%);
  }
`,lC=k.span`
  font-size: 14px;
  flex: 1;
`,cC=k(O.div)`
  position: absolute;
  right: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4caf50;
`,uC=()=>{const{state:e}=wa(),{currentTheme:t}=Jg(),[n,r]=b.useState(!1);return b.useEffect(()=>{const i=()=>{r(window.innerWidth<=768)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),y.jsx(Ix,{theme:t,children:y.jsx(D3,{children:y.jsx(I3,{children:y.jsxs(fC,{children:[y.jsx(J4,{}),y.jsxs(pC,{$hasMobileControls:n,children:[e.explorerVisible&&y.jsx(hC,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},children:y.jsx(uS,{})}),y.jsx(mC,{$expanded:!e.explorerVisible,children:y.jsx(Zk,{})})]}),y.jsx(gC,{children:y.jsx(Nt,{mode:"wait",children:n?y.jsx(yC,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},children:y.jsx(g4,{})},"mobile"):y.jsx(vC,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},children:y.jsx(Z4,{})},"desktop")})})]})})})})},dC=()=>y.jsx(H3,{children:y.jsx(uC,{})}),fC=k.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.background.gradient};
  backdrop-filter: blur(${({theme:e})=>e.background.blur});
`,pC=k.div`
  display: flex;
  height: calc(100vh - 100px); /* Leave space for player controls */
  position: relative;
  overflow: hidden;
  gap: 20px;
  padding: 20px 20px 0 20px;

  @media (max-width: 768px) {
    height: calc(100vh - 80px); /* Adjust for mobile controls */
    flex-direction: column;
    gap: 12px;
    padding: 12px 12px 0 12px;
  }
`,hC=k(O.div)`
  height: 100%;
  overflow: hidden;
  background: ${({theme:e})=>e.explorer.background};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  margin-left: 10px;
  border: 1px solid ${({theme:e})=>e.explorer.border};

  @media (max-width: 768px) {
    height: 100%;
    margin-left: 0;
    border-radius: 0;
  }
`,mC=k.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: ${({theme:e})=>e.player.background};
  backdrop-filter: blur(10px);
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: ${e=>e.$expanded?"0":"20px"};
  border: 1px solid ${({theme:e})=>e.explorer.border};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`,gC=k.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`,yC=k(O.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 12px 12px;
  background: ${({theme:e})=>e.player.controls};
  backdrop-filter: blur(20px);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
`,vC=k(O.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 15px 20px;
  background: ${({theme:e})=>e.player.controls};
  backdrop-filter: blur(20px);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;hl.createRoot(document.getElementById("root")).render(y.jsx(de.StrictMode,{children:y.jsx(dC,{})}));
