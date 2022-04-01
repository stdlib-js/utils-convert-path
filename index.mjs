// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extended-length-path@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=e.isPrimitive,d=t,a=r,m=n,o=s,l=/^([A-Za-z]):[\\\/]+/,g=/^\/([A-Za-z])\//;var p=function(e,t){var r,n,s;if(!i(e))throw new TypeError(o("invalid argument. First argument must be a string. Value: `%s`.",e));if(!i(t))throw new TypeError(o("invalid argument. Second argument must be a string. Value: `%s`.",t));if("win32"!==t&&"mixed"!==t&&"posix"!==t)throw new Error(o("invalid argument. Second argument must be a recognized output path convention. Value: `%s`.",t));if(s=e,"win32"===t)return(n=g.exec(s))&&(r=n[1]+":\\",s=m(s,g,r)),m(s,"/","\\");if(d.REGEXP.test(e))throw new Error(o("invalid argument. Cannot convert Windows extended-length paths to POSIX paths. Value: `%s`.",e));return"mixed"===t?((n=g.exec(s))?(r=n[1]+":/",s=m(s,g,r)):(n=l.exec(s))&&(r=n[1]+":/",s=m(s,l,r)),m(s,"\\","/")):((n=l.exec(s))&&(r="/"+a(n[1])+"/",s=m(s,l,r)),m(s,"\\","/"))};export{p as default};
//# sourceMappingURL=index.mjs.map
