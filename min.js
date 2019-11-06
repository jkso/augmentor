/*! (c) Andrea Giammarchi - ISC */
var augmentor=function(n){"use strict";function o(n){n()}function y(){return a}function d(n,t){return n.get(t)||function(n,t,e){return n.set(t,e),e}(n,t,[])}var a=null;function g(n,t){return n!==this[t]}var e="function"==typeof cancelAnimationFrame,f=e?cancelAnimationFrame:clearTimeout,s=e?requestAnimationFrame:setTimeout;function k(n){var r,u,o,a,i;return t(),function(n,t,e){return o=n,a=t,i=e,u=u||s(c),--r<0&&l(!0),l};function c(){t(),o.apply(a,i||[])}function t(){r=n||1/0,u=e?0:null}function l(n){var t=!!u;return t&&(f(u),n&&c()),t}}function i(n){var t=y(),e=t.hook,r=t.args,u=t.index,o=d(c,e);return o.length<=u&&(o[u]=n),[o[u],function(n){o[u]=n,l(e,null,r)}]}function b(){}function t(m){return function(n,t){var e=y(),r=e.hook,u=e.after,o=e.index,a=d(w,r);if(o<a.length){var i=a[o],c=i.clean,l=i.invoke,f=i.update,s=i.values;t&&!t.some(g,s)||(i.values=t,c&&(i.clean=null,c()),m?u.push(l):f(l))}else{var v=function(){h.clean=n()},p=k(),h={clean:null,invoke:v,stop:b,update:p,values:t};a[o]=h,m?u.push(v):h.stop=p(v)}}}function r(n,t){var e=y(),r=e.hook,u=e.index,o=d(p,r);return(!t||o.length<=u||t.some(g,o[u].values))&&(o[u]={current:n(),values:t}),o[u].current}var c=new WeakMap,l=k(),w=new WeakMap,u=t(!1),v=t(!0),p=new WeakMap;function h(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var e=[],r=!0,u=!1,o=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){u=!0,o=n}finally{try{r||null==i.return||i.return()}finally{if(u)throw o}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=new WeakMap;return n.augmentor=function(u){return function n(){var t=a,e=[],r=0;a={hook:n,after:e,args:arguments,get index(){return r++}};try{return u.apply(null,arguments)}finally{a=t,e.forEach(o)}}},n.dropEffect=function(n){d(w,n).forEach(function(n){var t=n.clean;(0,n.stop)(),t&&(n.clean=null,t())})},n.useCallback=function(n,t){return r(function(){return n},t)},n.useEffect=u,n.useLayoutEffect=v,n.useMemo=r,n.useReducer=function(t,n,e){var r=h(i(e?e(n):n),2),u=r[0],o=r[1];return[u,function(n){o(t(u,n))}]},n.useRef=function(n){var t=y(),e=t.hook,r=t.index,u=d(m,e);return r<u.length?u[r]:u[r]={current:n}},n.useState=i,n}({});
