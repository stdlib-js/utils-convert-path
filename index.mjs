// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extended-length-path@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.4.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var n=/^([A-Za-z]):[\\\/]+/,d=/^\/([A-Za-z])\//;function o(o,m){var p,h,x;if(!e(o))throw new TypeError(i("1SH3F",o));if(!e(m))throw new TypeError(i("1SH39",m));if("win32"!==m&&"mixed"!==m&&"posix"!==m)throw new Error(i("1SHAx",m));if(x=o,"win32"===m)return(h=d.exec(x))&&(p=h[1]+":\\",x=s(x,d,p)),s(x,"/","\\");if(r.REGEXP.test(o))throw new Error(i("1SHAy",o));return"mixed"===m?((h=d.exec(x))?(p=h[1]+":/",x=s(x,d,p)):(h=n.exec(x))&&(p=h[1]+":/",x=s(x,n,p)),s(x,"\\","/")):((h=n.exec(x))&&(p="/"+t(h[1])+"/",x=s(x,n,p)),s(x,"\\","/"))}export{o as default};
//# sourceMappingURL=index.mjs.map