import e,{useState as t,useRef as n,useImperativeHandle as r,useEffect as o}from"react";import i from"react-dom";import a from"crypto";import c,{keyframes as u,css as s}from"styled-components";function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j(r.key),r)}}function d(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t,n){return(t=j(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function w(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var P,k={},I={get exports(){return k},set exports(e){k=e}},$={},_={get exports(){return $},set exports(e){$=e}},R={};var A,N,D,M,F,L,z,B,V,U,W,H,Y,q,G={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function J(){return N||(N=1,e=_,"production"===process.env.NODE_ENV?e.exports=function(){if(P)return R;P=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,l=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:switch(e=e.type){case u:case s:case r:case i:case o:case l:return e;default:switch(e=e&&e.$$typeof){case c:case f:case d:case y:case a:return e;default:return p}}case n:return p}}}function w(e){return h(e)===s}return R.AsyncMode=u,R.ConcurrentMode=s,R.ContextConsumer=c,R.ContextProvider=a,R.Element=t,R.ForwardRef=f,R.Fragment=r,R.Lazy=d,R.Memo=y,R.Portal=n,R.Profiler=i,R.StrictMode=o,R.Suspense=l,R.isAsyncMode=function(e){return w(e)||h(e)===u},R.isConcurrentMode=w,R.isContextConsumer=function(e){return h(e)===c},R.isContextProvider=function(e){return h(e)===a},R.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},R.isForwardRef=function(e){return h(e)===f},R.isFragment=function(e){return h(e)===r},R.isLazy=function(e){return h(e)===d},R.isMemo=function(e){return h(e)===y},R.isPortal=function(e){return h(e)===n},R.isProfiler=function(e){return h(e)===i},R.isStrictMode=function(e){return h(e)===o},R.isSuspense=function(e){return h(e)===l},R.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===s||e===i||e===o||e===l||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===a||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g||e.$$typeof===m)},R.typeOf=h,R}():e.exports=(A||(A=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,l=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:var m=e.type;switch(m){case u:case s:case r:case i:case o:case l:return m;default:var b=m&&m.$$typeof;switch(b){case c:case f:case d:case y:case a:return b;default:return p}}case n:return p}}}var w=u,O=s,x=c,S=a,T=t,C=f,E=r,j=d,P=y,k=n,I=i,$=o,_=l,R=!1;function A(e){return h(e)===s}G.AsyncMode=w,G.ConcurrentMode=O,G.ContextConsumer=x,G.ContextProvider=S,G.Element=T,G.ForwardRef=C,G.Fragment=E,G.Lazy=j,G.Memo=P,G.Portal=k,G.Profiler=I,G.StrictMode=$,G.Suspense=_,G.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||h(e)===u},G.isConcurrentMode=A,G.isContextConsumer=function(e){return h(e)===c},G.isContextProvider=function(e){return h(e)===a},G.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},G.isForwardRef=function(e){return h(e)===f},G.isFragment=function(e){return h(e)===r},G.isLazy=function(e){return h(e)===d},G.isMemo=function(e){return h(e)===y},G.isPortal=function(e){return h(e)===n},G.isProfiler=function(e){return h(e)===i},G.isStrictMode=function(e){return h(e)===o},G.isSuspense=function(e){return h(e)===l},G.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===s||e===i||e===o||e===l||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===a||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g||e.$$typeof===m)},G.typeOf=h}()),G)),$;var e}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function X(){if(M)return D;M=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return D=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(r,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))t.call(i,s)&&(c[s]=i[s]);if(e){a=e(i);for(var f=0;f<a.length;f++)n.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c},D}function K(){if(L)return F;L=1;return F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Q(){return B?z:(B=1,z=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Z=J();I.exports=function(){if(H)return W;H=1;var e=J(),t=X(),n=K(),r=Q(),o=function(){if(U)return V;U=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=K(),n={},r=Q();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function o(o,i,a,c,u){if("production"!==process.env.NODE_ENV)for(var s in o)if(r(o,s)){var f;try{if("function"!=typeof o[s]){var l=Error((c||"React class")+": "+a+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw l.name="Invariant Violation",l}f=o[s](i,s,c,a,null,t)}catch(e){f=e}if(!f||f instanceof Error||e((c||"React class")+": type specification of "+a+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in n)){n[f.message]=!0;var p=u?u():"";e("Failed "+a+" type: "+f.message+(null!=p?p:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},V=o}(),i=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),W=function(c,u){var s="function"==typeof Symbol&&Symbol.iterator,f="@@iterator",l="<<anonymous>>",p={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:m(a),arrayOf:function(e){return m((function(t,r,o,i,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=t[r];if(!Array.isArray(c))return new d("Invalid "+i+" `"+a+"` of type `"+h(c)+"` supplied to `"+o+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,o,i,a+"["+u+"]",n);if(s instanceof Error)return s}return null}))},element:m((function(e,t,n,r,o){var i=e[t];return c(i)?null:new d("Invalid "+r+" `"+o+"` of type `"+h(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(t,n,r,o,i){var a=t[n];return e.isValidElementType(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+h(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||l;return new d("Invalid "+o+" `"+i+"` of type `"+((c=t[n]).constructor&&c.constructor.name?c.constructor.name:l)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var c;return null}))},node:m((function(e,t,n,r,o){return g(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,o,i,a,c){if("function"!=typeof e)return new d("Property `"+c+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var u=t[o],s=h(u);if("object"!==s)return new d("Invalid "+a+" `"+c+"` of type `"+s+"` supplied to `"+i+"`, expected an object.");for(var f in u)if(r(u,f)){var l=e(u,f,i,a,c+"."+f,n);if(l instanceof Error)return l}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],c=0;c<e.length;c++)if(y(a,e[c]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new d("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+u+".")})):("production"!==process.env.NODE_ENV&&i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&i("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var o=e[t];if("function"!=typeof o)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+O(o)+" at index "+t+"."),a}return m((function(t,o,i,a,c){for(var u=[],s=0;s<e.length;s++){var f=(0,e[s])(t,o,i,a,c,n);if(null==f)return null;f.data&&r(f.data,"expectedType")&&u.push(f.data.expectedType)}return new d("Invalid "+a+" `"+c+"` supplied to `"+i+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,o,i,a){var c=t[r],u=h(c);if("object"!==u)return new d("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var s in e){var f=e[s];if("function"!=typeof f)return v(o,i,a,s,w(f));var l=f(c,s,o,i,a+"."+s,n);if(l)return l}return null}))},exact:function(e){return m((function(o,i,a,c,u){var s=o[i],f=h(s);if("object"!==f)return new d("Invalid "+c+" `"+u+"` of type `"+f+"` supplied to `"+a+"`, expected `object`.");var l=t({},o[i],e);for(var p in l){var y=e[p];if(r(e,p)&&"function"!=typeof y)return v(a,c,u,p,w(y));if(!y)return new d("Invalid "+c+" `"+u+"` key `"+p+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(o[i],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(s,p,a,c,u+"."+p,n);if(m)return m}return null}))}};function y(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function o(o,a,c,s,f,p,y){if(s=s||l,p=p||c,y!==n){if(u){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=s+":"+c;!t[b]&&r<3&&(i("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,r++)}}return null==a[c]?o?null===a[c]?new d("The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `null`."):new d("The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(a,c,s,f,p)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function b(e){return m((function(t,n,r,o,i,a){var c=t[n];return h(c)!==e?new d("Invalid "+o+" `"+i+"` of type `"+w(c)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,n,r,o){return new d((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function g(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(g);if(null===e||c(e))return!0;var t=function(e){var t=e&&(s&&e[s]||e[f]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!g(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!g(o[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function O(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},W}()(Z.isElement,!0)}else I.exports=function(){if(q)return Y;q=1;var e=K();function t(){}function n(){}return n.resetWarningCache=t,Y=function(){function r(t,n,r,o,i,a){if(a!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return r}r.isRequired=r;var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i}}()();const ee=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function te(){var e=a.randomBytes(16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,(e=e.toString("hex").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/)).shift(),e.join("-")}te.valid=function(e){return ee.test(e)};var ne,re,oe,ie,ae,ce,ue,se={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right"},fe={DEFAULT:"default",WARNING:"warning",ERROR:"error",SUCCESS:"success",INFO:"info"},le={OPACITY:"opacity",BUBBLE:"bubble"},pe=u(ne||(ne=x(["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"]))),ye=u(re||(re=x(["\n  100% {\n    opacity: 0;\n  }\n\n  0% {\n    opacity: 1;\n  }\n"]))),de=u(oe||(oe=x(["\n  0% {\n    transform-origin: center center;\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  75% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]))),me=u(ie||(ie=x(["\n  0% {\n    transform-origin: center center;\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(.9);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"]))),be="#ffffff",ve="#d31313",ge="#33b033",he="#b334b3",we="#19b8ef",Oe="#d3ac2d",xe="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 512 512'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'/%3e%3c/svg%3e",Se="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 512 512'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'/%3e%3c/svg%3e",Te="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='white'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'/%3e%3c/svg%3e",Ce="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 512 512'%3e%3c!--! Font Awesome Pro 6.3.0 by %40fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons%2c Inc. --%3e%3cpath d='M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z'/%3e%3c/svg%3e",Ee=(m(ue={},fe.DEFAULT,{titleColor:be,descriptionColor:be,backgroundColor:we,icon:Te}),m(ue,fe.WARNING,{titleColor:be,descriptionColor:be,backgroundColor:Oe,icon:Ce}),m(ue,fe.ERROR,{titleColor:be,descriptionColor:be,backgroundColor:ve,icon:xe}),m(ue,fe.INFO,{titleColor:be,descriptionColor:be,backgroundColor:he,icon:Te}),m(ue,fe.SUCCESS,{titleColor:be,descriptionColor:be,backgroundColor:ge,icon:Se}),m(ue,"position",(m(ae={},se.TOP_LEFT,{left:20,top:20}),m(ae,se.TOP_RIGHT,{right:20,top:20}),m(ae,se.BOTTOM_LEFT,{left:20,bottom:20}),m(ae,se.BOTTOM_RIGHT,{right:20,bottom:20}),ae)),m(ue,"animationDuration",500),m(ue,"animation",(m(ce={},le.OPACITY,{open:pe,close:ye}),m(ce,le.BUBBLE,{open:de,close:me}),ce)),ue),je=["title","type","description","backgroundColor","titleColor","descriptionColor","animation"],Pe=function(e){var t=e.title,n=e.type,r=e.description,o=e.backgroundColor,i=e.titleColor,a=e.descriptionColor,c=e.animation,u=h(e,je);return l({title:t.length>20?"".concat(t.slice(0,20),"..."):t,description:r.length>50?"".concat(r.slice(0,50),"..."):r,backgroundColor:o||Ee[n].backgroundColor,titleColor:i||Ee[n].titleColor,descriptionColor:a||Ee[n].descriptionColor,icon:Ee[n].icon,animation:Ee.animation[c]},u)},ke=function(e){var t={};return Object.entries(e).filter((function(e){return e[1]})).forEach((function(e){var n=S(e,2),r=n[0],o=n[1];t[r]=o})),t},Ie=function(){function e(){p(this,e),m(this,"TYPE",fe),m(this,"POSITION",se),m(this,"ANIMATION",le),m(this,"getSettingsByType",(function(e){return l({},Ee[e])})),m(this,"setSettingsToType",(function(e,t){var n=ke(t);return Ee[e]=l(l({},Ee[e]),n),l({},Ee[e])}))}return d(e,[{key:"addToast",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.defaultParams,n=ke(t),r=Pe(l(l({},e.defaultParams),n));this.toastContainer.addToastInList(r)}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();m(Ie,"defaultParams",{type:fe.SUCCESS,title:"Default title",description:"Default description",position:se.BOTTOM_RIGHT,duration:1e3,animationDuration:500,animation:le.BUBBLE});var $e,_e,Re,Ae,Ne=Ie.getInstance(),De=function(){var e=S(t([]),2),i=e[0],a=e[1],c=n(null);r(c,(function(){return{addToastInList:function(e){return a((function(t){return t.length<3?[].concat(T(t),[l(l({},e),{},{id:te()})]):t}))}}}));var u,s;return o((function(){Ne.toastContainer=c.current}),[i]),{toastPositionContainers:(u=T(i),s=u.reduce((function(e,t){return e[t.position]=e[t.position]?[].concat(T(e[t.position]),[t]):[t],l({},e)}),{}),Object.entries(s)),deleteToast:function(e){a((function(t){return T(t).filter((function(t){return t.id!==e}))}))}}},Me=c.div($e||($e=x(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n"]))),Fe="\n    color: black;\n    margin: 0 auto;\n",Le=c.h1(_e||(_e=x(["\n    ","\n"])),Fe),ze=c.h2(Re||(Re=x(["\n    ","\n"])),Fe),Be=c.p(Ae||(Ae=x(["\n    color: black;\n"]))),Ve=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(r,e.Component);var n=O(r);function r(e){var t;return p(this,r),(t=n.call(this,e)).state={errorText:"",errorInfo:""},t}return d(r,[{key:"componentDidCatch",value:function(e,t){this.setState({errorText:"".concat(e),errorInfo:t})}},{key:"render",value:function(){var t=this.state,n=t.errorText,r=t.errorInfo,o=this.props.children;return n?e.createElement(Me,null,e.createElement(Le,null,"Что-то пошло не так"),e.createElement(ze,null,"Упс, произошла ошибка ",n),e.createElement(Be,null,r.componentStack)):o}}]),r}();Ve.propTypes={children:k.node};var Ue,We,He,Ye,qe,Ge,Je,Xe,Ke,Qe,Ze,et,tt,nt,rt=s(Ue||(Ue=x(["\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n"]))),ot=c.div(We||(We=x(["\n    ",";\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 300px;\n    height: 70px;\n    padding: 12px 30px 12px 60px;\n    border-radius: 10px;\n    background: ",";\n    background-color: ",";\n    ",";\n    ",";\n"])),rt,(function(e){var t=e.icon;return'url("'.concat(t,'") no-repeat left 10px center / 35px')}),(function(e){return e.backgroundColor}),(function(e){var t=e.translate;return t?s(He||(He=x(["\n                  left: ",";\n                  top: ",";\n              "])),t.translateX,t.translateY):""}),(function(e){var t=e.isClosing,n=e.animationDuration,r=e.animation,o=r.open,i=r.close;return t?s(Ye||(Ye=x(["\n                  animation: "," ","ms ease forwards;\n              "])),i,n):s(qe||(qe=x(["\n                  animation: "," ","ms ease;\n              "])),o,n)})),it=c.p(Ge||(Ge=x(["\n    ",";\n    color: ",";\n    font-size: 20px;\n"])),rt,(function(e){return e.color})),at=c.p(Je||(Je=x(["\n    ",";\n    font-size: 14px;\n    color: ",";\n    word-wrap: break-word;\n"])),rt,(function(e){return e.color})),ct=c.button(Xe||(Xe=x(["\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background: transparent;\n    border: none;\n    width: 15px;\n    height: 15px;\n    cursor: pointer;\n    &:after {\n        content: '';\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        width: 15px;\n        height: 1px;\n        background: white;\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n    &:before {\n        content: '';\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        width: 15px;\n        height: 1px;\n        background: white;\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n"]))),ut=function(n){var r=n.titleColor,i=n.title,a=n.description,c=n.descriptionColor,u=n.backgroundColor,s=n.transform,f=n.animation,l=n.icon,p=n.duration,y=n.deleteToast,d=n.id,m=n.animationDuration,b=function(e){var n=e.duration,r=e.deleteToast,i=e.animationDuration,a=e.id,c=S(t(!1),2),u=c[0],s=c[1],f=function(){s(!0),setTimeout((function(){r(a)}),i)};return o((function(){var e=setTimeout((function(){f()}),n);return function(){clearTimeout(e)}}),[a]),{isClosing:u,animatedToastDelete:f}}({duration:p,deleteToast:y,id:d,animationDuration:m}),v=b.isClosing,g=b.animatedToastDelete;return e.createElement(ot,{isClosing:v,icon:l,backgroundColor:u,transform:s,animation:f,animationDuration:m},e.createElement(ct,{disabled:v,onClick:g}),e.createElement(it,{color:r},i),e.createElement(at,{color:c},a))};ut.propTypes={title:k.string,description:k.string,backgroundColor:k.string,titleColor:k.string,descriptionColor:k.string,icon:k.string,transform:k.shape({translateX:k.string,translateY:k.string}),deleteToast:k.func,id:k.string,duration:k.number,animationDuration:k.number,animation:k.shape({open:k.shape({}),close:k.shape({})})};var st=c.div(Ke||(Ke=x(["\n    display: block;\n"]))),ft=c.div(Qe||(Qe=x(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    ",";\n    ",";\n    ",";\n    ",";\n"])),(function(e){var t=e.position.left;return t&&s(Ze||(Ze=x(["\n            left: ","px;\n        "])),t)}),(function(e){var t=e.position.top;return t&&s(et||(et=x(["\n            top: ","px;\n        "])),t)}),(function(e){var t=e.position.right;return t&&s(tt||(tt=x(["\n            right: ","px;\n        "])),t)}),(function(e){var t=e.position.bottom;return t&&s(nt||(nt=x(["\n            bottom: ","px;\n        "])),t)})),lt=["id"],pt=function(t){var n=t.position,r=t.children;return e.createElement(ft,{position:Ee.position[n]},r)},yt=function(){var t=De(),n=t.deleteToast,r=t.toastPositionContainers;return i.createPortal(e.createElement(Ve,null,e.createElement(st,null,r.map((function(t){var r=S(t,2),o=r[0],i=r[1];return e.createElement(pt,{key:"container-".concat(o),position:o},i.map((function(t){var r=t.id,o=h(t,lt);return e.createElement(ut,b({key:r,id:r,deleteToast:n},o))})))})))),document.body)};pt.propTypes={position:k.string,children:k.node};export{yt as ToastContainer,Ne as toast};
