// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extended-length-path@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var n=/^([A-Za-z]):[\\\/]+/,d=/^\/([A-Za-z])\//;function o(o,m){var p,h,j;if(!e(o))throw new TypeError(i("0iz3R",o));if(!e(m))throw new TypeError(i("0iz3L",m));if("win32"!==m&&"mixed"!==m&&"posix"!==m)throw new Error(i("0izBf",m));if(j=o,"win32"===m)return(h=d.exec(j))&&(p=h[1]+":\\",j=s(j,d,p)),s(j,"/","\\");if(r.REGEXP.test(o))throw new Error(i("0izBg",o));return"mixed"===m?((h=d.exec(j))?(p=h[1]+":/",j=s(j,d,p)):(h=n.exec(j))&&(p=h[1]+":/",j=s(j,n,p)),s(j,"\\","/")):((h=n.exec(j))&&(p="/"+t(h[1])+"/",j=s(j,n,p)),s(j,"\\","/"))}export{o as default};
//# sourceMappingURL=index.mjs.map
