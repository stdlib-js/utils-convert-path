"use strict";var g=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=g(function(p,d){
var c=require('@stdlib/assert-is-string/dist').isPrimitive,E=require('@stdlib/regexp-extended-length-path/dist'),l=require('@stdlib/string-base-lowercase/dist'),n=require('@stdlib/string-replace/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist'),s=/^([A-Za-z]):[\\\/]+/,v=/^\/([A-Za-z])\//;function w(a,r){var t,i,e;if(!c(a))throw new TypeError(u('1SH3F',a));if(!c(r))throw new TypeError(u('1SH39',r));if(r!=="win32"&&r!=="mixed"&&r!=="posix")throw new Error(u('1SHAx',r));if(e=a,r==="win32")return i=v.exec(e),i&&(t=i[1]+":\\",e=n(e,v,t)),n(e,"/","\\");if(E.REGEXP.test(a))throw new Error(u('1SHAy',a));return r==="mixed"?(i=v.exec(e),i?(t=i[1]+":/",e=n(e,v,t)):(i=s.exec(e),i&&(t=i[1]+":/",e=n(e,s,t))),n(e,"\\","/")):(i=s.exec(e),i&&(t="/"+l(i[1])+"/",e=n(e,s,t)),n(e,"\\","/"))}d.exports=w
});var h=o();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map