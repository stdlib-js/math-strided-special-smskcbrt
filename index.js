// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,y,l,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((y="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),l="get"in f,p="set"in f,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t,n,r,e,o,i,u,a){var f,c,y,l;if(t<=0)return i;for(f=r<0?(1-t)*r:0,c=o<0?(1-t)*o:0,y=u<0?(1-t)*u:0,l=0;l<t;l++)0===e[c]&&(i[y]=a(n[f])),f+=r,c+=o,y+=u;return i}function l(t,n,r,e,o,i,u,a,f,c,y){var l,p,b,d;if(t<=0)return a;for(l=e,p=u,b=c,d=0;d<t;d++)0===o[p]&&(a[b]=y(n[l])),l+=r,p+=i,b+=f;return a}c(y,"ndarray",l);var p,b="function"==typeof Math.fround?Math.fround:null,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,v=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",s=d&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return A.call(t);r=t[w],i=w,n=null!=(o=t)&&v.call(o,i);try{t[w]=void 0}catch(n){return A.call(t)}return e=A.call(t),n?t[w]=r:delete t[w],e}:function(t){return A.call(t)},m="function"==typeof Float32Array,_=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,U="function"==typeof Float32Array?Float32Array:void 0;p=function(){var t,n,r;if("function"!=typeof h)return!1;try{n=new h([1,3.14,-3.14,5e40]),r=n,t=(m&&r instanceof Float32Array||"[object Float32Array]"===s(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===_}catch(n){t=!1}return t}()?U:function(){throw new Error("not implemented")};var j,g=new p(1),F="function"==typeof b?b:function(t){return g[0]=t,g[0]},I=2147483647,O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(O&&r instanceof Uint32Array||"[object Uint32Array]"===s(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?E:function(){throw new Error("not implemented")};var T,N=j,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;T=function(){var t,n,r;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),r=n,t=(H&&r instanceof Float64Array||"[object Float64Array]"===s(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?P:function(){throw new Error("not implemented")};var x,L=T,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,k="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var t,n,r;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),r=n,t=(V&&r instanceof Uint8Array||"[object Uint8Array]"===s(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?k:function(){throw new Error("not implemented")};var M,Y=x,C="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var t,n,r;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),r=n,t=(C&&r instanceof Uint16Array||"[object Uint16Array]"===s(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?z:function(){throw new Error("not implemented")};var B,D={uint16:M,uint8:Y};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new L(1),R=new N(Q.buffer);function X(t){return Q[0]=t,R[K]}var Z,$,tt=!0===J?1:0,nt=new L(1),rt=new N(nt.buffer),et=Number.NEGATIVE_INFINITY;!0===J?(Z=1,$=0):(Z=0,$=1);var ot,it,ut={HIGH:Z,LOW:$},at=new L(1),ft=new N(at.buffer),ct=ut.HIGH,yt=ut.LOW;function lt(t,n){return ft[ct]=t,ft[yt]=n,at[0]}!0===J?(ot=1,it=0):(ot=0,it=1);var pt={HIGH:ot,LOW:it},bt=new L(1),dt=new N(bt.buffer),At=pt.HIGH,vt=pt.LOW;function wt(t,n,r,e){return bt[0]=t,n[e]=dt[At],n[e+r]=dt[vt],n}function st(t){return wt(t,[0,0],1,0)}c(st,"assign",wt);var mt=2147483648,_t=X(22250738585072014e-324),ht=[0,0];function Ut(t){var n,r,e,o;return 0===t||function(t){return t!=t}(t)||function(t){return t===_||t===et}(t)?t:(n=(2147483648&(r=X(t)>>>0))>>>0,o=(r&=I)<_t?lt(n|696219795+(((X(o=0x40000000000000*t)&I)>>>0)/3>>>0)>>>0,0):function(t,n){return nt[0]=t,rt[tt]=n>>>0,nt[0]}(o=0,n|715094163+(r/3>>>0)>>>0),o*=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)}(e=o*o*(o/t)),st.assign(o,ht,1,0),ht[1]&mt?(ht[0]+=1,ht[1]&=~mt):ht[1]|=mt,o=lt(4294967295&ht[0],3221225472&ht[1]),o+=o*(e=((e=t/(o*o))-o)/(o+o+e)))}function jt(t){return F(Ut(F(t)))}function gt(t,n,r,e,o,i,u){return y(t,n,r,e,o,i,u,jt)}return c(gt,"ndarray",(function(t,n,r,e,o,i,u,a,f,c){return l(t,n,r,e,o,i,u,a,f,c,jt)})),gt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).smskcbrt=n();
//# sourceMappingURL=index.js.map
