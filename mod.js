// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,y,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((y="value"in f)&&(i.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),l="get"in f,p="set"in f,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,t,f.get),p&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r,t,n,e,o,a,i,u){var f,c,y,l;if(r<=0)return a;for(f=n<0?(1-r)*n:0,c=o<0?(1-r)*o:0,y=i<0?(1-r)*i:0,l=0;l<r;l++)0===e[c]&&(a[y]=u(t[f])),f+=n,c+=o,y+=i;return a}function l(r,t,n,e,o,a,i,u,f,c,y){var l,p,v,b;if(r<=0)return u;for(l=e,p=i,v=c,b=0;b<r;b++)0===o[p]&&(u[v]=y(t[l])),l+=n,p+=a,v+=f;return u}c(y,"ndarray",l);var p="function"==typeof Math.fround?Math.fround:null;var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var b=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var d=v&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return b.call(r);n=r[w],a=w,t=null!=(o=r)&&A.call(o,a);try{r[w]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[w]=n:delete r[w],e}:function(r){return b.call(r)},_="function"==typeof Float32Array;var m=Number.POSITIVE_INFINITY,s="function"==typeof Float32Array?Float32Array:null;var U,h="function"==typeof Float32Array?Float32Array:void 0;U=function(){var r,t,n;if("function"!=typeof s)return!1;try{t=new s([1,3.14,-3.14,5e40]),n=t,r=(_&&n instanceof Float32Array||"[object Float32Array]"===d(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===m}catch(t){r=!1}return r}()?h:function(){throw new Error("not implemented")};var j=new U(1);var F="function"==typeof p?p:function(r){return j[0]=r,j[0]},g="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var O,S="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,t,n;if("function"!=typeof I)return!1;try{t=new I(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(g&&n instanceof Uint32Array||"[object Uint32Array]"===d(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,N="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var T,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,t,n;if("function"!=typeof H)return!1;try{t=new H([1,3.14,-3.14,NaN]),n=t,r=(N&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null;var W,x="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,256,257]),n=t,r=(L&&n instanceof Uint8Array||"[object Uint8Array]"===d(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var k=W,M="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var C,q="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,t,n;if("function"!=typeof Y)return!1;try{t=new Y(t=[1,3.14,-3.14,65536,65537]),n=t,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===d(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var z,B={uint16:C,uint8:k};(z=new B.uint16(1))[0]=4660;var D=52===new B.uint8(z.buffer)[0],J=!0===D?1:0,K=new P(1),Q=new E(K.buffer);function R(r){return K[0]=r,Q[J]}var X=!0===D?1:0,Z=new P(1),$=new E(Z.buffer);var rr,tr,nr=Number.NEGATIVE_INFINITY;!0===D?(rr=1,tr=0):(rr=0,tr=1);var er,or,ar={HIGH:rr,LOW:tr},ir=new P(1),ur=new E(ir.buffer),fr=ar.HIGH,cr=ar.LOW;function yr(r,t){return ur[fr]=r,ur[cr]=t,ir[0]}!0===D?(er=1,or=0):(er=0,or=1);var lr={HIGH:er,LOW:or},pr=new P(1),vr=new E(pr.buffer),br=lr.HIGH,Ar=lr.LOW;function wr(r,t,n,e){return pr[0]=r,t[e]=vr[br],t[e+n]=vr[Ar],t}function dr(r){return wr(r,[0,0],1,0)}c(dr,"assign",wr);var _r=R(22250738585072014e-324),mr=[0,0];function sr(r){var t,n,e,o;return 0===r||function(r){return r!=r}(r)||function(r){return r===m||r===nr}(r)?r:(t=(2147483648&(n=R(r)>>>0))>>>0,o=(n&=2147483647)<_r?yr(t|696219795+(((2147483647&R(o=0x40000000000000*r))>>>0)/3>>>0)>>>0,0):function(r,t){return Z[0]=r,$[X]=t>>>0,Z[0]}(o=0,t|715094163+(n/3>>>0)>>>0),o*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(e=o*o*(o/r)),dr.assign(o,mr,1,0),2147483648&mr[1]?(mr[0]+=1,mr[1]&=2147483647):mr[1]|=2147483648,o=yr(4294967295&mr[0],3221225472&mr[1]),o+=o*(e=((e=r/(o*o))-o)/(o+o+e)))}function Ur(r){return F(sr(F(r)))}function hr(r,t,n,e,o,a,i){return y(r,t,n,e,o,a,i,Ur)}function jr(r,t,n,e,o,a,i,u,f,c){return l(r,t,n,e,o,a,i,u,f,c,Ur)}c(hr,"ndarray",jr);export{hr as default,jr as ndarray};
//# sourceMappingURL=mod.js.map
