// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,b,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var j=String.fromCharCode,S=isNaN,_=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,s,l,f,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if(u(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function R(r){return"string"==typeof r}function $(r){var e,t,n;if(!R(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=O(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,C=Object.prototype,P=C.toString,I=C.__defineGetter__,B=C.__defineSetter__,G=C.__lookupGetter__,L=C.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var Z=F;function X(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return"string"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol:void 0,q="function"==typeof N?N.toStringTag:"";var D=U()?function(r){var e,t,n,i,o;if(null==r)return W.call(r);t=r[q],o=q,e=null!=(i=r)&&z.call(i,o);try{r[q]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[q]=t:delete r[q],n}:function(r){return W.call(r)},J=String.prototype.valueOf;var K=U();function Q(r){return"object"==typeof r&&(r instanceof String||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function Y(r){return H(r)||Q(r)}function rr(){return/^\\\\\?\\.+/}X(Y,"isPrimitive",H),X(Y,"isObject",Q),X(rr,"REGEXP",/^\\\\\?\\.+/);var er=/[-\/\\^$*+?.()|[\]{}]/g;var tr=/./;function nr(r){return"boolean"==typeof r}var ir=Boolean,or=Boolean.prototype.toString;var ar=U();function cr(r){return"object"==typeof r&&(r instanceof ir||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function ur(r){return nr(r)||cr(r)}function sr(){return new Function("return this;")()}X(ur,"isPrimitive",nr),X(ur,"isObject",cr);var lr="object"==typeof self?self:null,fr="object"==typeof window?window:null,pr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gr="object"==typeof pr?pr:null,dr="object"==typeof globalThis?globalThis:null;var yr=function(r){if(arguments.length){if(!nr(r))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return sr()}if(dr)return dr;if(lr)return lr;if(fr)return fr;if(gr)return gr;throw new Error("unexpected error. Unable to resolve global object.")}(),hr=yr.document&&yr.document.childNodes,wr=Int8Array;function br(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;X(br,"REGEXP",vr);var mr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function Er(r){return null!==r&&"object"==typeof r}function xr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return Er(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}X(Er,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!mr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Er));var jr="function"==typeof tr||"object"==typeof wr||"function"==typeof hr?function(r){return xr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?xr(r).toLowerCase():e};var Sr=RegExp.prototype.exec;var _r=U();function Tr(r){return"object"==typeof r&&(r instanceof RegExp||(_r?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===D(r)))}function kr(r,e,t){if(!H(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));if(H(e))e=new RegExp(function(r){var e,t;if(!H(r))throw new TypeError($("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(er,"\\$&"):(e=(e=r.substring(1,t)).replace(er,"\\$&"),r=r[0]+e+r.substring(t))}(e),"g");else if(!Tr(e))throw new TypeError($("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!H(t)&&"function"!==jr(t))throw new TypeError($("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return function(r,e,t){return r.replace(e,t)}(r,e,t)}function Ar(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Vr=/^([A-Za-z]):[\\\/]+/,Or=/^\/([A-Za-z])\//;function Rr(r,e){var t,n,i;if(!H(r))throw new TypeError(Ar("1SH3F,Ex",r));if(!H(e))throw new TypeError(Ar("1SH39,Ey",e));if("win32"!==e&&"mixed"!==e&&"posix"!==e)throw new Error(Ar("1SHAx,Oi",e));if(i=r,"win32"===e)return(n=Or.exec(i))&&(t=n[1]+":\\",i=kr(i,Or,t)),kr(i,"/","\\");if(rr.REGEXP.test(r))throw new Error(Ar("1SHAy,Oj",r));return"mixed"===e?((n=Or.exec(i))?(t=n[1]+":/",i=kr(i,Or,t)):(n=Vr.exec(i))&&(t=n[1]+":/",i=kr(i,Vr,t)),kr(i,"\\","/")):((n=Vr.exec(i))&&(t="/"+(n[1].toLowerCase()+"/"),i=kr(i,Vr,t)),kr(i,"\\","/"))}export{Rr as default};
//# sourceMappingURL=mod.js.map
