var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let l;function d(t){l=t}const p=[],g=[],h=[],$=[],m=Promise.resolve();let x=!1;function y(t){h.push(t)}let b=!1;const _=new Set;function v(){if(!b){b=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),k(n.$$)}for(p.length=0;g.length;)g.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];_.has(n)||(_.add(n),n())}h.length=0}while(p.length);for(;$.length;)$.pop()();x=!1,b=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const w=new Set;function E(t,n){t&&t.i&&(w.delete(t),t.i(n))}function A(t,e,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:f}=t.$$;u&&u.m(e,c),y(()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),f.forEach(y)}function N(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&(p.push(t),x||(x=!0,m.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,r,c,u,a,f,s=[-1]){const p=l;d(n);const g=r.props||{},h=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:s};let $=!1;if(h.ctx=c?c(n,g,(t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),$&&j(n,t)),e}):[],h.update(),$=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();r.intro&&E(n.$$.fragment),A(n,r.target,r.anchor),v()}d(p)}class C{$destroy(){N(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function O(n){let e,o,r,c;return{c(){e=a("h1"),o=f(n[1]),r=f(" "),c=a("hr"),s(e,"id",n[0]),s(c,"class","svelte-k4cp55")},m(t,n){u(t,e,n),function(t,n){t.appendChild(n)}(e,o),u(t,r,n),u(t,c,n)},p(t,[n]){2&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(o,t[1]),1&n&&s(e,"id",t[0])},i:t,o:t,d(t){t&&i(e),t&&i(r),t&&i(c)}}}function S(t,n,e){let{tag:o}=n,{text:r}=n;return t.$set=t=>{"tag"in t&&e(0,o=t.tag),"text"in t&&e(1,r=t.text)},[o,r]}class T extends C{constructor(t){super(),q(this,t,S,O,c,{tag:0,text:1})}}function B(n){let e,o,r;return o=new T({props:{tag:"quick-links",text:"Quick Links"}}),{c(){var t;e=a("div"),(t=o.$$.fragment)&&t.c(),s(e,"class","centraltext svelte-li5d9d")},m(t,n){u(t,e,n),A(o,e,null),r=!0},p:t,i(t){r||(E(o.$$.fragment,t),r=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(w.has(t))return;w.add(t),(void 0).c.push(()=>{w.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(o.$$.fragment,t),r=!1},d(t){t&&i(e),N(o)}}}return new class extends C{constructor(t){super(),q(this,t,null,B,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
