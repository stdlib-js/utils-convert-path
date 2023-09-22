// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extended-length-path@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";var n=/^([A-Za-z]):[\\\/]+/,d=/^\/([A-Za-z])\//;function o(o,m){var p,x,h;if(!e(o))throw new TypeError(i("1SH3F,Ex",o));if(!e(m))throw new TypeError(i("1SH39,Ey",m));if("win32"!==m&&"mixed"!==m&&"posix"!==m)throw new Error(i("1SHAx,Oi",m));if(h=o,"win32"===m)return(x=d.exec(h))&&(p=x[1]+":\\",h=s(h,d,p)),s(h,"/","\\");if(r.REGEXP.test(o))throw new Error(i("1SHAy,Oj",o));return"mixed"===m?((x=d.exec(h))?(p=x[1]+":/",h=s(h,d,p)):(x=n.exec(h))&&(p=x[1]+":/",h=s(h,n,p)),s(h,"\\","/")):((x=n.exec(h))&&(p="/"+t(x[1])+"/",h=s(h,n,p)),s(h,"\\","/"))}export{o as default};
//# sourceMappingURL=index.mjs.map
