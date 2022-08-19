var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function $(t){m=t}const h=[],d=[],k=[],w=[],x=Promise.resolve();let b=!1;function y(t){k.push(t)}let L=!1;const v=new Set;function T(){if(!L){L=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];$(e),_(e.$$)}for(h.length=0;d.length;)d.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];v.has(e)||(v.add(e),e())}k.length=0}while(h.length);for(;w.length;)w.pop()();b=!1,L=!1,v.clear()}}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const Q=new Set;function C(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function U(t,e,n,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),(void 0).c.push(()=>{Q.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function R(t){t&&t.c()}function M(t,n,i){const{fragment:a,on_mount:s,on_destroy:l,after_update:c}=t.$$;a&&a.m(n,i),y(()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(y)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function E(t,e){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,x.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,i,a,s,c,u=[-1]){const p=m;$(e);const f=r.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:u};let h=!1;if(g.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=r)&&(g.bound[t]&&g.bound[t](r),h&&E(e,t)),n}):[],g.update(),h=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();r.intro&&C(e.$$.fragment),M(e,r.target,r.anchor),T()}$(p)}class j{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function q(e){let n,o,r,i;return{c(){n=c("h1"),o=u(e[1]),r=p(),i=c("hr"),f(n,"id",e[0]),f(i,"class","svelte-k4cp55")},m(t,e){s(t,n,e),a(n,o),s(t,r,e),s(t,i,e)},p(t,[e]){2&e&&g(o,t[1]),1&e&&f(n,"id",t[0])},i:t,o:t,d(t){t&&l(n),t&&l(r),t&&l(i)}}}function S(t,e,n){let{tag:o}=e,{text:r}=e;return t.$set=t=>{"tag"in t&&n(0,o=t.tag),"text"in t&&n(1,r=t.text)},[o,r]}class z extends j{constructor(t){super(),I(this,t,S,q,i,{tag:0,text:1})}}function H(e){let n,o,r,i;return{c(){n=c("br"),o=p(),r=c("h2"),i=u(e[1]),f(r,"id",e[0])},m(t,e){s(t,n,e),s(t,o,e),s(t,r,e),a(r,i)},p(t,[e]){2&e&&g(i,t[1]),1&e&&f(r,"id",t[0])},i:t,o:t,d(t){t&&l(n),t&&l(o),t&&l(r)}}}function N(t,e,n){let{tag:o}=e,{text:r}=e;return t.$set=t=>{"tag"in t&&n(0,o=t.tag),"text"in t&&n(1,r=t.text)},[o,r]}class O extends j{constructor(t){super(),I(this,t,N,H,i,{tag:0,text:1})}}function B(e){let n,o,r,i,p;return{c(){n=c("li"),o=c("p"),r=c("a"),i=u(e[1]),f(r,"href",p="#"+e[0])},m(t,e){s(t,n,e),a(n,o),a(o,r),a(r,i)},p(t,[e]){2&e&&g(i,t[1]),1&e&&p!==(p="#"+t[0])&&f(r,"href",p)},i:t,o:t,d(t){t&&l(n)}}}function F(t,e,n){let{tag:o}=e,{text:r}=e;return t.$set=t=>{"tag"in t&&n(0,o=t.tag),"text"in t&&n(1,r=t.text)},[o,r]}class P extends j{constructor(t){super(),I(this,t,F,B,i,{tag:0,text:1})}}function D(e){let n,o,r,i,u,f,g,m,$;return n=new O({props:{tag:"contents",text:"Contents"}}),i=new P({props:{tag:"installation",text:"Installation"}}),f=new P({props:{tag:"making-a-new-link",text:"Making a new link"}}),m=new P({props:{tag:"using-a-link",text:"Using a link"}}),{c(){R(n.$$.fragment),o=p(),r=c("ol"),R(i.$$.fragment),u=p(),R(f.$$.fragment),g=p(),R(m.$$.fragment)},m(t,e){M(n,t,e),s(t,o,e),s(t,r,e),M(i,r,null),a(r,u),M(f,r,null),a(r,g),M(m,r,null),$=!0},p:t,i(t){$||(C(n.$$.fragment,t),C(i.$$.fragment,t),C(f.$$.fragment,t),C(m.$$.fragment,t),$=!0)},o(t){U(n.$$.fragment,t),U(i.$$.fragment,t),U(f.$$.fragment,t),U(m.$$.fragment,t),$=!1},d(t){A(n,t),t&&l(o),t&&l(r),A(i),A(f),A(m)}}}class G extends j{constructor(t){super(),I(this,t,null,D,i,{})}}function K(e){let n,o;return{c(){n=c("span"),o=u(e[0]),f(n,"class","svelte-108khp4")},m(t,e){s(t,n,e),a(n,o)},p(t,[e]){1&e&&g(o,t[0])},i:t,o:t,d(t){t&&l(n)}}}function W(t,e,n){let{text:o}=e;return t.$set=t=>{"text"in t&&n(0,o=t.text)},[o]}class J extends j{constructor(t){super(),I(this,t,W,K,i,{text:0})}}function V(e){let n,o,r,i,g,m,$,h,d,k,w,x,b,y,L,v,T,_,Q,E,I,j,q,S,H,N,B,F,P,D,K,W,V,X,Y,Z,tt,et,nt,ot,rt,it,at,st,lt,ct,ut,pt,ft,gt,mt,$t,ht,dt,kt,wt,xt,bt,yt,Lt,vt,Tt,_t,Qt,Ct,Ut,Rt,Mt,At,Et,It,jt,qt,St,zt,Ht,Nt,Ot,Bt;return o=new z({props:{tag:"quick-links",text:"Quick Links"}}),h=new G({}),k=new O({props:{tag:"installation",text:"Installation"}}),_=new J({props:{text:"103.0.2"}}),q=new O({props:{tag:"making-a-new-link",text:"Making a new link"}}),nt=new J({props:{text:"coolwebsite"}}),rt=new J({props:{text:"https://example.com"}}),at=new J({props:{text:"https://example.com"}}),lt=new J({props:{text:"coolwebsite"}}),gt=new O({props:{tag:"using-a-link",text:"Using a link"}}),dt=new J({props:{text:"go"}}),At=new J({props:{text:"coolwebsite"}}),Nt=new J({props:{text:"https://example.com"}}),{c(){n=c("div"),R(o.$$.fragment),r=p(),i=c("p"),i.innerHTML="The <i>Quick Links</i> browser extension allows you to rapidly access\n\t\tpreviously visited webpages without needing to dig through your\n\t\tbrowser history or bookmarks bar.",g=p(),m=c("p"),m.textContent="All you have to do is come up\n\t\twith a memorable name for a webpage you want to visit again,\n\t\tthen later type that name into your URL bar to zip back to that page!",$=p(),R(h.$$.fragment),d=p(),R(k.$$.fragment),w=p(),x=c("p"),x.innerHTML='<a href="https://chrome.google.com/webstore/detail/quick-links/mjajgkekioonpenodhpklcfpcdnonmcm">Download from the Chrome Web Store</a>',b=p(),y=c("p"),y.innerHTML="<i>Quick Links</i> is known to be compatible with the desktop\n\t\teditions of Google Chrome, Microsoft Edge, Opera, and Brave.\n\t\tIt also works on the Kiwi browser for Android, although the user\n\t\texperience is still being improved for this platform.\n\t\tThe extension should work on all other Chromium-based browsers\n\t\tthat support Chrome extensions.",L=p(),v=c("p"),T=u("The extension could not be installed on Firefox version "),R(_.$$.fragment),Q=u(",\n\t\tbut future versions of Firefox may support it.\n\t\t"),E=c("i"),E.textContent="Quick Links",I=u(" cannot be installed on Safari;\n\t\tthere are no plans to change this."),j=p(),R(q.$$.fragment),S=p(),H=c("p"),H.textContent='In the upper right of your browser, you\'ll see a puzzle piece icon.\n\t\tIf you click it and select "Quick Links", a popup like the one\n\t\tdepicted below will appear.',N=p(),B=c("img"),P=p(),D=c("p"),D.innerHTML="Tip: for faster access in the future, you can pin the <i>Quick Links</i>\n\t\ticon to the toolbar using the pin icon in the puzzle piece icon&#39;s dropdown menu.",K=p(),W=c("p"),W.textContent="To create a new Quick Link,\n\t\tjust fill in the URL and Quick Link fields,\n\t\tthen press CREATE. It's that easy!",V=p(),X=c("img"),Z=p(),tt=c("p"),et=u("The example above will associate the keyword "),R(nt.$$.fragment),ot=u("\n\t\twith the webpage "),R(rt.$$.fragment),it=u(".\n\t\tSo now you can go to "),R(at.$$.fragment),st=u("\n\t\tby typing "),R(lt.$$.fragment),ct=u(" into your URL bar."),ut=p(),pt=c("p"),pt.textContent="The popup will pre-fill the URL field with the URL of the current page.\n\t\tSo, you only have to fill out the Quick Link field.",ft=p(),R(gt.$$.fragment),mt=p(),$t=c("p"),ht=u("To use a link, just go to the URL bar and type\n\t\tthe word "),R(dt.$$.fragment),kt=u(" followed by a single space, as seen below."),wt=p(),xt=c("img"),yt=p(),Lt=c("p"),Lt.textContent="As soon as you type the space, the Quick Links input context will be displayed.\n\t\tThis lets you know that you are entering a Quick Link and not a URL or a\n\t\tweb search query.",vt=p(),Tt=c("img"),Qt=p(),Ct=c("p"),Ut=u("Then we just enter the Quick Link keyword that we registered earlier.\n\t\tIf we wanted to use the link created in the "),Rt=c("a"),Rt.textContent="Making a new link",Mt=u(" section,\n\t\twe would type "),R(At.$$.fragment),Et=u(", as seen below."),It=p(),jt=c("img"),St=p(),zt=c("p"),Ht=u("Pressing the enter key will submit the link.\n\t\tIn this case, we will be directed to "),R(Nt.$$.fragment),Ot=u("."),B.src!==(F="img/popup_empty.png")&&f(B,"src","img/popup_empty.png"),f(B,"alt","The Quick Links popup menu. The input fields are empty."),f(B,"class","svelte-lpk50f"),X.src!==(Y="img/popup_example.png")&&f(X,"src","img/popup_example.png"),f(X,"alt",'The Quick Links popup menu. The URL field contains the string "https://example.com" and the Quick Link field contains the string "coolwebsite".'),f(X,"class","svelte-lpk50f"),xt.src!==(bt="img/go.png")&&f(xt,"src","img/go.png"),f(xt,"alt",'URL bar with the word "go" and then a space.'),f(xt,"class","svelte-lpk50f"),Tt.src!==(_t="img/quick_links.png")&&f(Tt,"src","img/quick_links.png"),f(Tt,"alt","URL bar with Quick Links input context."),f(Tt,"class","svelte-lpk50f"),f(Rt,"href","#making-a-new-link"),jt.src!==(qt="img/coolwebsite.png")&&f(jt,"src","img/coolwebsite.png"),f(jt,"alt",'URL bar with Quick Links input context. "coolwebsite" has been input.'),f(jt,"class","svelte-lpk50f"),f(n,"class","centraltext svelte-lpk50f")},m(t,e){s(t,n,e),M(o,n,null),a(n,r),a(n,i),a(n,g),a(n,m),a(n,$),M(h,n,null),a(n,d),M(k,n,null),a(n,w),a(n,x),a(n,b),a(n,y),a(n,L),a(n,v),a(v,T),M(_,v,null),a(v,Q),a(v,E),a(v,I),a(n,j),M(q,n,null),a(n,S),a(n,H),a(n,N),a(n,B),a(n,P),a(n,D),a(n,K),a(n,W),a(n,V),a(n,X),a(n,Z),a(n,tt),a(tt,et),M(nt,tt,null),a(tt,ot),M(rt,tt,null),a(tt,it),M(at,tt,null),a(tt,st),M(lt,tt,null),a(tt,ct),a(n,ut),a(n,pt),a(n,ft),M(gt,n,null),a(n,mt),a(n,$t),a($t,ht),M(dt,$t,null),a($t,kt),a(n,wt),a(n,xt),a(n,yt),a(n,Lt),a(n,vt),a(n,Tt),a(n,Qt),a(n,Ct),a(Ct,Ut),a(Ct,Rt),a(Ct,Mt),M(At,Ct,null),a(Ct,Et),a(n,It),a(n,jt),a(n,St),a(n,zt),a(zt,Ht),M(Nt,zt,null),a(zt,Ot),Bt=!0},p:t,i(t){Bt||(C(o.$$.fragment,t),C(h.$$.fragment,t),C(k.$$.fragment,t),C(_.$$.fragment,t),C(q.$$.fragment,t),C(nt.$$.fragment,t),C(rt.$$.fragment,t),C(at.$$.fragment,t),C(lt.$$.fragment,t),C(gt.$$.fragment,t),C(dt.$$.fragment,t),C(At.$$.fragment,t),C(Nt.$$.fragment,t),Bt=!0)},o(t){U(o.$$.fragment,t),U(h.$$.fragment,t),U(k.$$.fragment,t),U(_.$$.fragment,t),U(q.$$.fragment,t),U(nt.$$.fragment,t),U(rt.$$.fragment,t),U(at.$$.fragment,t),U(lt.$$.fragment,t),U(gt.$$.fragment,t),U(dt.$$.fragment,t),U(At.$$.fragment,t),U(Nt.$$.fragment,t),Bt=!1},d(t){t&&l(n),A(o),A(h),A(k),A(_),A(q),A(nt),A(rt),A(at),A(lt),A(gt),A(dt),A(At),A(Nt)}}}return new class extends j{constructor(t){super(),I(this,t,null,V,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
