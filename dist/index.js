"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(C,c){
var x=require('@stdlib/strided-base-smskmap/dist'),l=require('@stdlib/math-base-special-cbrtf/dist');function R(e,r,a,s,t,i,u){return x(e,r,a,s,t,i,u,l)}c.exports=R
});var o=n(function(D,m){
var _=require('@stdlib/strided-base-smskmap/dist').ndarray,E=require('@stdlib/math-base-special-cbrtf/dist');function O(e,r,a,s,t,i,u,k,y,j){return _(e,r,a,s,t,i,u,k,y,j,E)}m.exports=O
});var b=n(function(F,f){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),h=o();g(p,"ndarray",h);f.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=b(),v,d=z(w(__dirname,"./native.js"));d instanceof Error?v=A:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
