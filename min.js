/*! (c) Andrea Giammarchi - ISC */
var augmentor=function(n){"use strict";function o(n){n()}function g(){return c}var c=null;function m(n,t){return n!==this[t]}var e="function"==typeof cancelAnimationFrame,f=e?cancelAnimationFrame:clearTimeout,l=e?requestAnimationFrame:setTimeout;function d(n){var u,a,r,o,c;return t(),function(n,t,e){return r=n,o=t,c=e,a=a||l(i),--u<0&&s(!0),s};function i(){t(),r.apply(o,c||[])}function t(){u=n||1/0,a=e?0:null}function s(n){var t=!!a;return t&&(f(a),n&&i()),t}}function a(n){var t=g(),e=t.hook,u=t.args,a=t.stack,r=t.index;return a.length<=r&&(a[r]="function"==typeof n?n():n,i.has(e)||i.set(e,d())),[a[r],function(n){a[r]=n,i.get(e)(e,null,u)}]}function t(n){var t=n.hook,e=n.args;t.apply(null,e)}var i=new WeakMap,s=new WeakMap;function u(n){this.value!==n&&(this.value=n,s.get(this).forEach(t))}function v(n){return n.hook===this.hook}function y(){}function r(k){return function(n,t){var e=g(),u=e.hook,a=e.stack,r=e.index,o=e.after;if(r<a.length){var c=a[r],i=c.clean,s=c.invoke,f=c.update,l=c.values;t&&!t.some(m,l)||(c.values=t,i&&(c.clean=null,i()),k?o.push(s):f(s))}else{var v=function(){p.clean=n()};x.has(u)||x.set(u,{stack:[],update:d()});var h=x.get(u),p={clean:null,invoke:v,stop:y,update:h.update,values:t};a[r]=p,h.stack.push(p),k?o.push(v):p.stop=h.update(v)}}}function h(n,t){var e=g(),u=e.stack,a=e.index;return(!t||u.length<=a||t.some(m,u[a].values))&&(u[a]={current:n(),values:t}),u[a].current}var x=new WeakMap,p=r(!1),k=r(!0);return n.augmentor=function(a){var r=[];return function n(){var t=c,e=[],u=0;c={hook:n,args:arguments,stack:r,get index(){return u++},after:e};try{return a.apply(null,arguments)}finally{c=t,e.forEach(o)}}},n.createContext=function(n){var t={value:n,provide:u};return s.set(t,[]),t},n.dropEffect=function(n){x.has(n)&&x.get(n).stack.forEach(function(n){var t=n.clean;(0,n.stop)(),t&&(n.clean=null,t())})},n.useCallback=function(n,t){return h(function(){return n},t)},n.useContext=function(n){var t=g(),e=t.hook,u=t.args,a=s.get(n),r={hook:e,args:u};return a.some(v,r)||a.push(r),n.value},n.useEffect=p,n.useLayoutEffect=k,n.useMemo=h,n.useReducer=function(t,n,e){var u=a(e?e(n):n);return[u[0],function(n){u[1](t(u[0],n))}]},n.useRef=function(n){var t=g(),e=t.stack,u=t.index;return u<e.length?e[u]:e[u]={current:n}},n.useState=a,n}({});
