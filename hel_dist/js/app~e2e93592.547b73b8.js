!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("Vue"));else if("function"==typeof define&&define.amd)define(["Vue"],t);else{var n="object"==typeof exports?t(require("Vue")):t(e.Vue);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e){return function(e){function t(t){for(var n,r,i=t[0],a=t[1],u=0,c=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={"app~e2e93592":0},o={"app~e2e93592":0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{"chunk-4926f535":1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-4926f535":"c4df890f"}[e]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=(f=u[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===o||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){var f;if((l=(f=p[c]).getAttribute("data-href"))===o||l===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],s.parentNode.removeChild(s),n(i)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4926f535":"8093e66d"}[e]+".js"}(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://zhengyanbin-yy.github.io/docs/as_v1/bin-hel-tpl-remote-vue-comps@0.0.4/hel_dist/",i.oe=function(e){throw console.error(e),e};var a=window["helJsonp_bin-hel-tpl-remote-vue-comps_1691554543811"]=window["helJsonp_bin-hel-tpl-remote-vue-comps_1691554543811"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;return i(i.s=0)}({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("c8a0"),o=n("8bbf");var i=n("7796");o.config&&(o.config.productionTip=!1),async function(){const e=await n.e("chunk-4926f535").then(n.bind(null,"6c72"));Object(i.libReady)("bin-hel-tpl-remote-vue-comps",e.default),Object(r.a)()&&await n.e("chunk-4926f535").then(n.bind(null,"a581"))}().catch(console.error)},7796:function(e,t,n){!function(e,t){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}(t),r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function o(e,n){var r=n||(null===t.getAppPlatform||void 0===t.getAppPlatform?void 0:t.getAppPlatform(e)),o=t.getSharedCache(r).appName2Lib;return o[e]||(o[e]={}),o[e]}var i="4.8.0";n.log("hel-lib-proxy ver ".concat(i));var a=n.getUserEventBus,u=n.helConsts,c=a();function l(e,t){var o=r({},t||{});return o.platform=u.DEFAULT_PLAT,n.getVerLib(e,o)}function p(e,r){var i,a=!0,c="";r&&("string"==typeof r?c=r:(c=r.platform||"",a=null===(i=r.asProxy)||void 0===i||i));var l=o(e,c=c||n.getAppPlatform(e)||u.DEFAULT_PLAT);return"function"==typeof Proxy&&a&&(l=function(e,n,r){return new Proxy(n,{get:function(n,i){var a=String(i);return t.log("[[getLibProxy]] call lib [".concat(e,"] method [").concat(a,"]")),Object.keys(n).length?n[a]:o(e,r)[a]}})}(e,l,c)),n.log("[[ exposeLib ]] libName, libObj",e,l),l}function f(e,o,i){var a=function(e){var n={allowDup:!1,platform:t.helConsts.DEFAULT_PLAT};return r(r({},n),e||{})}(i);n.libReady(e,o,a)}function s(e,t,r){n.appReady(e,t,r)}function d(e,t){return n.getVerApp(e,t)}var v=n.isSubApp;function m(){return!n.isSubApp()}var g=Object.freeze({__proto__:null,VER:i,eventBus:c,getLib:l,exposeLib:p,libReady:f,appReady:s,exposeApp:d,isSubApp:v,isMasterApp:m}),_=t.commonUtil.purify,h=["isMasterApp","isSubApp","eventBus"],y=["appReady","libReady"];function b(e,t){return t&&"object"==typeof t?r({platform:e},_(t)):t}function E(e){var t=function(e,t){var n={};return Object.keys(e).forEach((function(r){var o=e[r];if(h.includes(r))n[r]=o;else if(y.includes(r))n[r]=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=n[0],i=n[1],a=n[2];return e(o,i,b(t,void 0===a?{}:a))}}(o,t);else{var i="exposeLib"===r;n[r]=function(e,t,n){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var i=r[0],a=r[1];return e(i,n&&"string"==typeof a?a||t:b(t,a))}}(o,t,i)}})),n}(g,e);return t.createInstance=E,t}var A=i,S=f,L=p,N=l,O=v,I=m,T=c,C=s,P=d,D={VER:A,libReady:S,exposeLib:L,getLib:N,isSubApp:O,isMasterApp:I,eventBus:T,appReady:C,exposeApp:P,createInstance:E};e.VER=A,e.appReady=C,e.createInstance=E,e.default=D,e.eventBus=T,e.exposeApp=P,e.exposeLib=L,e.getLib=N,e.isMasterApp=I,e.isSubApp=O,e.libReady=S,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("cfe4"))},"8bbf":function(t,n){t.exports=e},c8a0:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r,o,i,a,u=(r=l(),o=r.__HEL_ISO_FLAG__,i=r.__MASTER_APP_LOADED__,{isFirstMod:void 0===o,isBeforeCore:void 0===i});void 0===(a=l()).__HEL_ISO_FLAG__&&(a.__HEL_ISO_FLAG__=1);var c=function(){var e=l(),t=e.location,n=e.__HEL_MICRO_SHARED__,r=u.isBeforeCore;if(!u.isFirstMod)return!1;if(r)return!0;var o=function(){var e="";try{throw new Error("codeHost")}catch(n){var t=n.stack.split("\n");e=t[t.length-1]||""}return(e.split("//")[1]||"").split("/")[0]}();if(t&&t.host===o)return!0;if(n){var i=n.cacheRoot,a=i.appGroupName2platform,c=i.appName2platform,p=a||c||{};if(!Object.keys(p).length)return!0}return!1}();function l(){return window||e}function p(){return c}var f=p}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},cfe4:function(e,t,n){"use strict";n.r(t),function(e){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"allowLog",(function(){return ot})),n.d(t,"appReady",(function(){return Kt})),n.d(t,"commonDataUtil",(function(){return bt})),n.d(t,"commonUtil",(function(){return Qe})),n.d(t,"evName",(function(){return Ft})),n.d(t,"getAppMeta",(function(){return st})),n.d(t,"getAppPlatform",(function(){return Rt})),n.d(t,"getAppStyleStr",(function(){return Nt})),n.d(t,"getCommonData",(function(){return ht})),n.d(t,"getCustomData",(function(){return gt})),n.d(t,"getGlobalThis",(function(){return at})),n.d(t,"getHelDebug",(function(){return rt})),n.d(t,"getHelEventBus",(function(){return xt})),n.d(t,"getPlatform",(function(){return tt})),n.d(t,"getPlatformConfig",(function(){return Dt})),n.d(t,"getSharedCache",(function(){return nt})),n.d(t,"getUserEventBus",(function(){return Gt})),n.d(t,"getVerApp",(function(){return ct})),n.d(t,"getVerExtraCssList",(function(){return It})),n.d(t,"getVerLib",(function(){return pt})),n.d(t,"getVerLoadStatus",(function(){return Et})),n.d(t,"getVerStyleStrStatus",(function(){return St})),n.d(t,"getVersion",(function(){return vt})),n.d(t,"helConsts",(function(){return Je})),n.d(t,"helEvents",(function(){return qe})),n.d(t,"helLoadStatus",(function(){return ze})),n.d(t,"inectPlatToMod",(function(){return $e})),n.d(t,"initPlatformConfig",(function(){return jt})),n.d(t,"isSubApp",(function(){return Ze})),n.d(t,"libReady",(function(){return Vt})),n.d(t,"log",(function(){return it})),n.d(t,"originInit",(function(){return wt})),n.d(t,"resetGlobalThis",(function(){return et})),n.d(t,"setAppMeta",(function(){return dt})),n.d(t,"setAppPlatform",(function(){return Mt})),n.d(t,"setAppStyleStr",(function(){return Ot})),n.d(t,"setCommonData",(function(){return yt})),n.d(t,"setCustomData",(function(){return _t})),n.d(t,"setEmitApp",(function(){return lt})),n.d(t,"setEmitLib",(function(){return ft})),n.d(t,"setGlobalThis",(function(){return ut})),n.d(t,"setVerExtraCssList",(function(){return Tt})),n.d(t,"setVerLoadStatus",(function(){return At})),n.d(t,"setVerStyleStrStatus",(function(){return Lt})),n.d(t,"setVersion",(function(){return mt})),n.d(t,"tryGetAppName",(function(){return Pt})),n.d(t,"tryGetVersion",(function(){return Ct}));var f=null;function s(){return f||function(){if("undefined"==typeof window){if(void 0===e)throw new Error("unable to locate global object");f=e}else f=window}(),f}function d(){return s()}function v(e){return Object.keys(e)}function m(e){var t,n=null===(t=s())||void 0===t?void 0:t.localStorage;return null==n?void 0:n.getItem(e)}function g(e,t){var n,r=null===(n=s())||void 0===n?void 0:n.localStorage;return null==r?void 0:r.setItem(e,t)}function _(){var e=function(){var e=function(e){var t=(e||{}).search||"";if(!t){var n=(loc.hash||"").split("?")[1]||"";n&&(t="?".concat(n))}return t};try{var t,n;return e(null===(t=s())||void 0===t||null===(n=t.top)||void 0===n?void 0:n.location)}catch(t){var r;return e(null===(r=s())||void 0===r?void 0:r.location)}}(),t={};null!=e&&e.startsWith("?")&&e.substring(1).split("&").forEach((function(e){var n=u(e.split("="),2),r=n[0],o=n[1];t[r]=o}));return t}function h(){var e="";try{throw new Error("getJsRunLocation")}catch(n){var t=n.stack.split("\n");e=t[t.length-1]||""}return e}function y(e,t,n,r){b(e,t)[n]=r}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e[t];return r||(r=n,e[t]=r),r}function E(e,t){Object.keys(t).forEach((function(n){var r=t[n];[null,void 0,""].includes(r)||(e[n]=r)}))}function A(e,t){e.includes(t)||e.push(t)}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.nullValues,r=void 0===n?[null,void 0,""]:n,o=t.emptyObjIsNull,a=void 0===o||o,u=t.emptyArrIsNull,c=void 0===u||u,l=r.includes(e);if(l)return!0;if(Array.isArray(e))return!!c&&0===e.length;if("object"===i(e)){var p=v(e),f=p.length;return!!a&&0===f}return!1}function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}var N=S,O=A,I=v;function T(e,t){var n=t||function(e){return!N(e)},r={};return I(e).forEach((function(t){n(e[t])&&(r[t]=e[t])})),r}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MULTI",n=e.split("\n"),r=n.length-1,o=n.map((function(e,n){var o;if(!e&&(0===n||n===r))return"";var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=e;return e.endsWith("<br/>")?(r=e.substring(0,r.length-5),"".concat(r).concat(t)):"".concat(r).concat(n)},a=(null===(o=e.trimStart)||void 0===o?void 0:o.call(e))||e;return"MULTI"===t?"".concat(i(a,""),"\n"):a=i(a,"\n"," ")})).join("");return o}function P(e){return C(e,"ONE")}function D(e,t,n){e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(t),n)}function R(e){D(e,"heldisabled","1"),e.disabled=!0}var M=Object.freeze({__proto__:null,noop:L,safeParse:function(e,t,n){if(e&&"string"!=typeof e)return e;try{return JSON.parse(e)||t}catch(e){if(void 0!==t)return t;if(n)throw new Error(n);throw e}},isNull:N,noDupPush:O,okeys:I,merge2List:function(e,t){var n=[];return e.forEach((function(e){return O(n,e)})),t.forEach((function(e){return O(n,e)})),n},purify:T,getObjsVal:function(e,t,n){var r,o=n,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(e);try{for(i.s();!(r=i.n()).done;){var a=r.value[t];if(![null,void 0,""].includes(a)){o=a;break}}}catch(e){i.e(e)}finally{i.f()}return o},pfstr:C,nbstr:P,nbalert:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=s(),r=P(e),o=n.alert||L;t&&n.location?n.location.port&&o(r):o(r)},setDataset:D,disableNode:R});var j="__default_online_ver__",w={CORE_VER:"4.8.2",DEFAULT_API_PREFIX:"https://unpkg.com",DEFAULT_API_URL:"/openapi/v1/app/info",DEFAULT_ONLINE_VER:j,DEFAULT_USER_LS_KEY:"HelUserRtxName",DEFAULT_PLAT:"unpkg",LS_LOG_MODE:"HelConfig.logMode",LS_LOG_FILTER:"HelConfig.logFilter",PLAT_HEL:"hel",PLAT_UNPKG:"unpkg",KEY_CSS_STR:"CSS_STR",KEY_ASSET_CTX:"ASSET_CTX",KEY_STYLE_TAG_ADDED:"STYLE_TAG_ADDED",KEY_CSS_LINK_TAG_ADDED:"CSS_LINK_TAG_ADDED",KEY_IGNORE_CSS_PREFIX_LIST:"IGNORE_CSS_PREFIX_LIST",KEY_IGNORE_STYLE_TAG_KEY:"IGNORE_STYLE_TAG_KEY",KEY_IGNORE_CSS_PREFIX_2_KEYS:"IGNORE_CSS_PREFIX_2_KEYS"},x={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched",STYLE_TAG_ADDED:"StyleTagAdded",CSS_LINK_TAG_ADDED:"CssLinkTagAdded"},G={NOT_LOAD:0,LOADING:1,LOADED:2},F=w.LS_LOG_FILTER,V=w.LS_LOG_MODE,K=0,k=1,U=2,Y={isIncludeFilter:function(e,t){return t.includes(",")?t.split(",").some((function(t){return e.includes(t)})):e.includes(t)},getLogFilter:function(){return W().logFilter},setLogFilter:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];W().logFilter=e,t&&g(F,e)},setLogMode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=parseInt(e,10);[K,k,U].includes(n)&&(W().logMode=n,t&&g(V,n))},getLogMode:function(){return W().logMode}},H={};function B(){if(S(H=d().__HEL_MICRO_DEBUG__)){H={logMode:K,logFilter:"",isInit:!1},d().__HEL_MICRO_DEBUG__=H;try{!function(){if(!W().isInit){W().isInit=!0;var e=_(),t=e.hellog,n=e.hellogf,r=t||m(V)||K;Y.setLogMode(r,!1);var o=n||m(F)||"";Y.setLogFilter(o,!1)}}()}catch(e){}}else void 0===H.logMode&&(H.logMode=K,H.logFilter="")}function X(){return Y.getLogMode()!==K}function W(){return H}var q="  %c--\x3e HEL LOG:",z="color:#ad4e00;font-weight:600";function J(){if(X()){for(var e=Y.getLogMode()===k?console.log:console.trace||console.log,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n[0],i=n.slice(1);if("string"!=typeof o)return e.apply(void 0,[q,z].concat(n));var a=Y.getLogFilter(),u=["".concat(q," ").concat(o),z].concat(c(i));a?Y.isIncludeFilter(o,a)&&e.apply(void 0,c(u)):e.apply(void 0,c(u))}}var $=w.DEFAULT_API_URL,Q=w.DEFAULT_USER_LS_KEY,Z=w.PLAT_HEL,ee=w.PLAT_UNPKG,te=w.DEFAULT_API_PREFIX,ne=w.CORE_VER,re=w.KEY_CSS_LINK_TAG_ADDED,oe=w.KEY_STYLE_TAG_ADDED,ie=w.KEY_IGNORE_CSS_PREFIX_LIST,ae=w.KEY_IGNORE_STYLE_TAG_KEY,ue=w.KEY_IGNORE_CSS_PREFIX_2_KEYS;function ce(e){return{apiMode:"get",apiPrefix:(e||{}).apiPrefix,apiSuffix:"",apiPathOfApp:$,apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,onFetchMetaFailed:null,strictMatchVer:!0,getUserName:null,userLsKey:Q,shouldUseGray:null,trustAppNames:null,semverApi:null,hook:{}}}function le(e){return o(o({isConfigOverwrite:!1,platform:e,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2verCustomData:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{},isOriginInitCalled:!1},ce()),{},{origin:ce({apiPrefix:te})})}function pe(){var e={};return{on:function(t,n){var r=e[t];if(!r){var o=[];e[t]=o,r=o}r.push(n)},emit:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=e[t];if(i){var a=i.slice();a.forEach((function(e){return e.apply(void 0,r)}))}},off:function(t,n){var r=e[t];if(r)for(var o=0,i=r.length;o<i;o++){if(r[o]===n){r.splice(o,1);break}}}}}function fe(e){[re,oe,ie,ae,ue].forEach((function(t){return b(e,t,function(e){return e===ie?[]:{}}(t))}))}function se(){var e=de();if(e){var t=e.cacheRoot;b(t,"appGroupName2platform"),b(t,"common");var n=t.caches;return Object.keys(n).forEach((function(e){var t=n[e];b(t,"appGroupName2firstVer"),b(t,"appName2isLibAssigned"),b(t,"appName2verExtraCssList"),b(t,"appName2verCustomData"),b(t,"hook"),b(t,"origin",ce()),b(t.origin,"hook")})),fe(t.common),void(e.userEventBus||(e.userEventBus=pe()))}fe((e=function(){var e,t=le(ee),n=le(Z),r={platform:Z,platformHint:"the platform value here does not make any sense!",appName2platform:{},appGroupName2platform:{},caches:(e={},a(e,ee,t),a(e,Z,n),e),common:{}},o=pe(),i=pe();return{ver:ne,isStyleObInit:!1,nativeHeadAppend:null,nativeBodyAppend:null,createFeature:h(),eventBus:o,userEventBus:i,cacheRoot:r,unpkgCache:t,helCache:n,dev:{setLogMode:Y.setLogMode,setLogFilter:Y.setLogFilter}}}()).cacheRoot.common),d().__HEL_MICRO_SHARED__=e}function de(){return d().__HEL_MICRO_SHARED__}function ve(){return"unpkg"}function me(e){var t=e||"unpkg",n=ge(),r=n.caches[t];if(!r){var o=i(e);if("string"!==o)throw console.error("invalid plaform:",e),new Error("fatal error: platform only can be a string, now it is ".concat(o));var a=le(e);n.caches[t]=a,r=a}return r}function ge(){return de().cacheRoot}var _e={getCustomData:function(e,t,n){var r=n.versionId,o=b(me(n.platform).appName2verCustomData,e);return b(o,t)[r||j]},getAppMeta:function(e,t){return me(t).appName2app[e]},setVerLoadStatus:function(e,t,n,r){var o=r||{},i=o.versionId;y(me(o.platform)[n],e,i||j,t)},getVerLoadStatus:function(e,t,n){var r,o=n||{},i=o.versionId,a=me(o.platform)[t],u=i||j;return(null===(r=a[e])||void 0===r?void 0:r[u])||G.NOT_LOAD},ensureOnlineModule:function(e,t,n){if(!e[j]){var r=_e.getAppMeta(t,n),o=e[null==r?void 0:r.online_version];o&&(e[j]=o)}}};function he(e,t){J("[[ core:setEmitApp ]] appName,emitApp:",e,t);var n=t.versionId,r=me(t.platform),o=r.appName2verEmitApp,i=r.appName2Comp,a=r.appName2EmitApp;b(o,e)[j]||(i[e]=t.Comp,a[e]=t,y(o,e,j,t)),n&&y(o,e,n,t)}var ye=w.KEY_CSS_LINK_TAG_ADDED,be=w.KEY_STYLE_TAG_ADDED,Ee=w.KEY_IGNORE_CSS_PREFIX_LIST,Ae=w.KEY_IGNORE_STYLE_TAG_KEY,Se=w.KEY_IGNORE_CSS_PREFIX_2_KEYS;function Le(e){return b(ge().common,e)}function Ne(e){return ge().common[e]}function Oe(e,t){var n=Le(e)[t];return void 0!==n?n:null}function Ie(e,t,n){Le(e)[t]=n}var Te={setIgnoreCssPrefix:function(e){A(Ne(Ee),e)},setIgnoreStyleTagKey:function(e){Te.getIgnoreStyleTagMap()[e]=1},getIgnoreStyleTagMap:function(){return Ne(Ae)},setIgnoreCssPrefixKey:function(e,t){var n=Oe(Se,e);n||Ie(Se,e,n=[]),A(n,t)},getIgnoreCssPrefixKeys:function(e){return Ne(Se)[e]||[]},getMatchedIgnoreCssPrefix:function(e){for(var t=Ne(Ee),n="",r=0;r<t.length;r++){var o=t[r];if(e.startsWith(o)){n=o;break}}return n},getIgnoreCssPrefixCssUrlList:function(e){var t=Oe(ye,e);return t||Ie(ye,e,t=[]),t},setIgnoreCssPrefixCssUrl:function(e,t){Te.getIgnoreCssPrefixCssUrlList(e).push(t)},getStyleTagText:function(e){return Oe(be,e)||""},clearStyleTagText:function(e){Ie(be,e,"")},appendStyleTagText:function(e,t){var n=Te.getStyleTagText(e);Ie(be,e,"".concat(n," ").concat(t))}};function Ce(e,t){var n=e.apiMode,r=e.apiPrefix,o=e.apiSuffix,i=e.apiPathOfApp,a=e.apiPathOfAppVersion,u=e.getSubAppAndItsVersionFn,c=e.onFetchMetaFailed,l=e.strictMatchVer,p=e.getUserName,f=e.userLsKey,s=e.shouldUseGray,d=e.getApiPrefix,v=e.trustAppNames,m=e.platform,g=e.origin,_={apiMode:n,apiPrefix:r,apiSuffix:o,apiPathOfApp:i,apiPathOfAppVersion:a,getSubAppAndItsVersionFn:u,onFetchMetaFailed:c,strictMatchVer:l,getUserName:p,userLsKey:f,shouldUseGray:s,getApiPrefix:d,trustAppNames:v,hook:e.hook,platform:m};return t&&(_.origin=g),_}function Pe(e){return ge().appGroupName2platform[e]||"unpkg"}function De(e,t){var n=t.customKey,r=b(me(t.platform).appName2verCustomData,e);return b(r,n)}var Re=x.STYLE_TAG_ADDED,Me=x.CSS_LINK_TAG_ADDED;function je(){return de().eventBus}var we={styleTagAdded:function(e){return"".concat(Re,"/").concat(e)},cssLinkTagAdded:function(e){return"".concat(Me,"(").concat(e,")")}};function xe(e,t,n){var r=(n||{}).appGroupName,o=t.versionId,a=t.appProperties,u=t.platform||n.platform,c=me(u),l=c.appName2verEmitLib,p=c.appName2Lib,f=c.appName2isLibAssigned,s=_e.getAppMeta(e,u),d=function(e){var t=p[e];t?"object"===i(t)&&0===Object.keys(t).length&&Object.assign(t,a):p[e]=a,f[e]=!0};d(e),r?d(r):s&&d(s.app_group_name),J("[[ core:setEmitLib ]] appMeta:",s),b(l,e)[j]||y(l,e,j,a),o&&y(l,e,o,a)}function Ge(e,t){return me(t).appName2app[e]}function Fe(e,t,n){_e.setVerLoadStatus(e,t,"appName2verLoadStatus",n)}function Ve(e,t){var n=h();J("[[ core:tryGetVersion ]] may include source > ".concat(n));var r=me(t).appGroupName2firstVer[e]||"";if(n.includes("https://")||n.includes("http://")){var o=u(n.split("//"),2)[1].split("/");if(r){if("unpkg"===t&&o.some((function(e){return e.includes(r)})))return r;if(o.includes(r))return r;if("static"===o[1]&&"js"===o[2]||"js"===o[1])return r}return"unpkg"===t?o[1].split("@")[1]||r:o[2]||r}return r}function Ke(e,t){return e===j?t||"":e.includes("_")?e.substring(0,e.length-15):t||""}var ke=!1,Ue=!1;var Ye=w.KEY_ASSET_CTX;function He(e,t){if(!t||!["LINK","SCRIPT"].includes(t.tagName))return e(t);var n=t.href,r=t.tagName,o=t.src,i="LINK"===r,a=Oe(Ye,n||o||"")||{},u=a.platform,c=a.groupName,l=a.name,p=a.ver,f=a.beforeAppend,s=t;if(f){var d=i?"href":"src",v=t.getAttribute(d);s=f({el:t,nativeAppend:e,setAssetUrl:function(e){return t.setAttribute(d,e)},url:v,tagName:r})||t}return u&&function(e,t){var n=t.platform,r=t.groupName,o=t.name,i=t.ver;D(e,"el",t.elName),D(e,"plat",n),D(e,"gname",r),D(e,"name",o),D(e,"ver",i)}(s,{platform:u,groupName:c,name:l,ver:p,elName:i?"HelLink":"HelScript"}),e(s)}var Be="/* @helstart ".length;function Xe(e,t){var n=e.tagName,r=e.innerText,o=e.href;if(["STYLE","LINK"].includes(n)&&("STYLE"!==n||r))if("STYLE"===n){var i=r.indexOf("/* @helstart ");if(i<0)return;var a=r.indexOf(" @helend */");if(a<0)return;var u=r.substring(Be+i,a);if(u){var c=u.trim(),l="",p=c;if(c.includes("/")){var f=c.split("/");l=f[0],p=f[1]}D(e,"gname",p),l&&D(e,"plat",l),t[c]&&R(e);var s=je();Te.appendStyleTagText(c,r),s.emit(we.styleTagAdded(c),{nodes:[e]})}}else{(function(e,t){var n=je(),r=Te.getMatchedIgnoreCssPrefix(t);return r&&(Te.setIgnoreCssPrefixCssUrl(r,t),n.emit(we.cssLinkTagAdded(r),{nodes:[e]})),r})(e,o)&&R(e)}}function We(e,t){var n=e.tagName,r=e.src,o=void 0===r?"":r;if("SCRIPT"!==n)return!1;if(!o.endsWith(".hot-update.js"))return!1;var i=Te.getMatchedIgnoreCssPrefix(o);if(!i)return!1;var a=Te.getIgnoreCssPrefixKeys(i);if(!a.length)return!1;var u=!1;return a.forEach((function(e){t[e]&&(!function(e){var t=s();if(t){var n=t.document.head.querySelectorAll('style[data-gname="'.concat(e,'"]'));if(n.length)Te.clearStyleTagText(e),n.forEach((function(t){R(t),Te.appendStyleTagText(e,t.innerText)})),je().emit(we.styleTagAdded(e),{nodes:n})}}(e),u=!0)})),u}et(),J("hel-micro-core ver ".concat(w.CORE_VER));var qe=x,ze=G,Je=w,$e=function e(t,n,r){var a=r||{},u=a.ignoreKeys,c=void 0===u?[]:u,l=a.arg1PlatObjFnKeys,p=void 0===l?[]:l,f={};return Object.keys(n).forEach((function(a){var u=n[a];if(c.includes(a))f[a]=u;else{var l=i(u);f[a]=l&&"object"===l?e(t,u,r):"function"!==l?u:function(e,t){var n=this,r=t.fn,i=t.fnName,a=t.arg1PlatObjFnKeys.includes(i);return function(){for(var t=function(t){return o({platform:e},T(t||{}))},i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];var l=u[0],p=u[1];return a?u[0]=t(l):u[1]=t(p),r.apply(n,u)}}(t,{arg1PlatObjFnKeys:p,fn:u,fnName:a})}})),f},Qe=M,Ze=function(){return"more details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp",console.log("%c".concat("WARNING: calling isSubApp is unsafe, use hel-iso.isSubApp instead,\nmore details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp"),"color:red;"),!ke};function et(e){e&&ut(e),function(e){if(e&&(ke=!1,Ue=!1),!Ue){Ue=!0;var t=s();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,ke=!0)}}(!!e),se(),B(),function(){var e=de(),t=s().document,n=e.nativeHeadAppend,r=e.nativeBodyAppend;if(!n&&t){var o=t.head,i=t.body;n=o.appendChild.bind(o),r=i.appendChild.bind(i),e.nativeHeadAppend=n,e.nativeBodyAppend=r,t.head.appendChild=function(e){return He(n,e)},t.body.appendChild=function(e){return He(r,e)}}}(),function(){var e=de(),t=s(),n=e.isStyleObInit,r=t.document;if(!n&&r){e.isStyleObInit=!0;var o=Te.getIgnoreStyleTagMap(),i=t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver;if(i)new i((function(e){e.forEach((function(e){for(var t=e.addedNodes,n=e.removedNodes,r=t.length,i=0;i<r;i++)Xe(t[i],o);for(var a=n.length,u=0;u<a&&!We(n[u],o);u++);}))})).observe(document.head,{childList:!0})}}()}var tt=ve,nt=me,rt=W,ot=X,it=J,at=s,ut=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null;null!==(t=f)&&void 0!==t&&t.__HEL_MICRO_SHARED__&&(r=f.__HEL_MICRO_SHARED__),f=n?o(o({},f),e):e,r&&(f.__HEL_MICRO_SHARED__=r)},ct=function(e,t){var n,r=t||{},o=r.versionId,i=r.platform,a=me(i),u=a.appName2verEmitApp,c=a.appName2Comp,l=a.strictMatchVer,p=a.appName2EmitApp,f=null!==(n=r.strictMatchVer)&&void 0!==n?n:l,s=b(u,e);_e.ensureOnlineModule(s,e,i);var d=s[o||j],v=c[e],m=v?{Comp:v}:null,g=f?null:p[e]||m,_=d||g||null;return J("[[ core:getVerApp ]] appName,options,result:",e,r,_),_},lt=he,pt=function(e,t){var n,r=t||{},o=r.versionId,i=me(r.platform),a=i.appName2verEmitLib,u=i.appName2Lib,c=i.strictMatchVer,l=i.appName2isLibAssigned,p=null!==(n=r.strictMatchVer)&&void 0!==n?n:c,f=b(a,e);_e.ensureOnlineModule(f,e);var s=f[o||j],d=l[e]?u[e]:null,v=s||(p?null:d)||null;return J("[[ core:getVerLib ]] appName,options,result:",e,r,v),v},ft=xe,st=Ge,dt=function(e,t){me(t).appName2app[e.name]=e},vt=function(e,t){var n,r=t||{},o=r.platform,i=r.versionId,a=me(o),u=a.appName2verAppVersion,c=a.appName2appVersion[e]||null;return i&&(null===(n=u[e])||void 0===n?void 0:n[i])||c},mt=function(e,t,n){var r=(n||{}).platform,o=me(r),i=o.appName2verAppVersion,a=o.appGroupName2firstVer,u=o.appName2appVersion,c=t.sub_app_version;if(c){var l=_e.getAppMeta(e,r);b(i,e)[j]||(y(i,e,j,t),u[e]=t),y(i,e,c,t),a[l.app_group_name]=c}},gt=function(e,t){var n=De(e,t)[t.versionId||j];return void 0!==n?n:null},_t=function(e,t){var n=t.customValue,r=t.versionId;De(e,t)[r||j]=n},ht=Oe,yt=Ie,bt=Te,Et=function(e,t){return _e.getVerLoadStatus(e,"appName2verLoadStatus",t)},At=Fe,St=function(e,t){return _e.getVerLoadStatus(e,"appName2verStyleFetched",t)},Lt=function(e,t,n){_e.setVerLoadStatus(e,t,"appName2verStyleFetched",n)},Nt=function(e,t){var n,r=t||{},o=r.platform,i=r.versionId,a=me(o),u=a.appName2verStyleStr,c=a.appName2styleStr[e]||"";return i?(null===(n=u[e])||void 0===n?void 0:n[i])||c||"":c},Ot=function(e,t,n){var r=n||{},o=r.platform,i=r.versionId,a=me(o),u=a.appName2verStyleStr,c=a.appName2verStyleFetched,l=a.appName2styleStr;i?(y(u,e,i,t),y(c,e,i,G.LOADED)):l[e]=t},It=function(e,t){var n=t||{},r=n.versionId,o=b(me(n.platform).appName2verExtraCssList,e),i=o[r]||o[j]||[];return J("[[ core:getVerExtraCssList ]] options,cssList:",n,i),i},Tt=function(e,t,n){var r=n||{},o=r.versionId,i=me(r.platform).appName2verExtraCssList;J("[[ core:setVerExtraCssList ]] cssList:",t),b(i,e)[j]||y(i,e,j,t),o&&y(i,e,o,t)},Ct=Ve,Pt=Ke,Dt=function(e){return Ce(me(e),!0)},Rt=Pe,Mt=function(e,t){return ge().appGroupName2platform[e]=t,Pe(e)},jt=function(e,t){var n=me(t),r=Ce(e);n.isConfigOverwrite||(n.isConfigOverwrite=!0,E(n,r))},wt=function(e,t){var n=me(e),r="[[ core:originInit ]] invalid call, it can only been called";if(n.isConfigOverwrite)J("".concat(r," before init"));else if(n.isOriginInitCalled)J("".concat(r," one time"));else{var o=Ce(t);n.isOriginInitCalled=!0,E(n.origin,o)}},xt=je,Gt=function(){return de().userEventBus},Ft=we,Vt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.platform||Pe(e),o=n.versionId||Ve(e,r),i=n.appName||Ke(o,e),a=Ge(i,r);null!=a&&a.__fromCust&&(o=n.versionId||a.online_version,i=a.name);var u={platform:r,appName:i,appGroupName:e,versionId:o,appProperties:t,Comp:function(){},lifecycle:{}};xe(i,u,{appGroupName:e,platform:r}),Fe(i,G.LOADED,{versionId:o,platform:r});var c=je();c.emit(x.SUB_LIB_LOADED,u)},Kt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.lifecycle,o=n.platform||Pe(e),i=n.versionId||Ve(e,o),a=n.appName||Ke(i,e),u={Comp:t,appName:a,appGroupName:e,lifecycle:r,platform:o,versionId:i,isLib:!1};he(a,u),Fe(a,G.LOADED,{versionId:i,platform:o});var c=je();c.emit(x.SUB_APP_LOADED,u)}}.call(this,n("c8ba"))}})}));
//# sourceMappingURL=app~e2e93592.547b73b8.js.map