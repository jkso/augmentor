/*! (c) Andrea Giammarchi - ISC */
var augmentor=function(n){"use strict";function o(n){n()}function u(r){var a=[];return function n(){var t=c,e=[],u=0;c={hook:n,args:arguments,stack:a,get index(){return u++},after:e};try{return r.apply(null,arguments)}finally{c=t,e.forEach(o)}}}function g(){return c}var c=null;function m(n,t){return n!==this[t]}function i(n){return"function"==typeof n}var e="function"==typeof cancelAnimationFrame,s=e?cancelAnimationFrame:clearTimeout,l=e?requestAnimationFrame:setTimeout;function d(n){var u,r,a,o,c;return t(),function(n,t,e){return a=n,o=t,c=e,r=r||l(i),--u<0&&f(!0),f};function i(){t(),a.apply(o,c||[])}function t(){u=n||1/0,r=e?0:null}function f(n){var t=!!r;return t&&(s(r),n&&i()),t}}function f(n,t,e){n.apply(t,e)}function v(n,t){var e=g(),u=e.hook,r=e.args,a=e.stack,o=e.index;return a.length<=o&&(a[o]=i(n)?n():n,p.has(u)||p.set(u,t&&t.sync?f:d())),[a[o],function(n){a[o]=i(n)?n(a[o]):n,p.get(u)(u,null,r)}]}function t(n){var t=n.hook,e=n.args;t.apply(null,e)}var p=new WeakMap,h=new WeakMap;function r(n){this.value!==n&&(this.value=n,h.get(this).forEach(t))}function k(n){return n.hook===this.hook}function y(){}function a(k){return function(n,t){var e=g(),u=e.hook,r=e.stack,a=e.index,o=e.after;if(a<r.length){var c=r[a],i=c.clean,f=c.update,s=c.values;if(!t||t.some(m,s)){c.values=t,i&&(c.clean=null,i());var l=function(){c.clean=n()};k?o.push(l):f(l)}}else{E.has(u)||E.set(u,{stack:[],update:d()});var v=E.get(u),p={clean:null,stop:y,update:v.update,values:t};r[a]=p,v.stack.push(p);var h=function(){p.clean=n()};k?o.push(h):p.stop=v.update(h)}}}function x(n,t){var e=g(),u=e.stack,r=e.index;return(!t||u.length<=r||t.some(m,u[r].values))&&(u[r]={current:n(),values:t}),u[r].current}var E=new WeakMap,M=a(!1),w=a(!0);return n.augmentor=u,n.contextual=function(n){var t=null,e=u(function(){return n.apply(t,arguments)});return function(){return t=this,e.apply(this,arguments)}},n.createContext=function(n){var t={value:n,provide:r};return h.set(t,[]),t},n.dropEffect=function(n){E.has(n)&&E.get(n).stack.forEach(function(n){var t=n.clean;(0,n.stop)(),t&&(n.clean=null,t())})},n.useCallback=function(n,t){return x(function(){return n},t)},n.useContext=function(n){var t=g(),e=t.hook,u=t.args,r=h.get(n),a={hook:e,args:u};return r.some(k,a)||r.push(a),n.value},n.useEffect=M,n.useLayoutEffect=w,n.useMemo=x,n.useReducer=function(t,n,e,u){var r="function"==typeof e,a=v(r?e(n):n,r?u:e);return[a[0],function(n){a[1](t(a[0],n))}]},n.useRef=function(n){var t=g(),e=t.stack,u=t.index;return u<e.length?e[u]:e[u]={current:n}},n.useState=v,n}({});
