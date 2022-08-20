var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function u(){return p(" ")}function c(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let f;function m(t){f=t}const h=[],d=[],k=[],w=[],x=Promise.resolve();let b=!1;function y(t){k.push(t)}let L=!1;const v=new Set;function T(){if(!L){L=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];m(e),_(e.$$)}for(h.length=0;d.length;)d.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];v.has(e)||(v.add(e),e())}k.length=0}while(h.length);for(;w.length;)w.pop()();b=!1,L=!1,v.clear()}}function _(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const Q=new Set;function C(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function R(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),(void 0).c.push(()=>{Q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function U(t){t&&t.c()}function E(t,n,o){const{fragment:i,on_mount:s,on_destroy:l,after_update:g}=t.$$;i&&i.m(n,o),y(()=>{const n=s.map(e).filter(a);l?l.push(...n):r(n),t.$$.on_mount=[]}),g.forEach(y)}function M(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,x.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,a,o,i,s,g,p=[-1]){const u=f;m(e);const c=a.props||{},$=e.$$={fragment:null,ctx:null,props:g,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:p};let h=!1;if($.ctx=o?o(e,c,(t,n,...r)=>{const a=r.length?r[0]:n;return $.ctx&&s($.ctx[t],$.ctx[t]=a)&&($.bound[t]&&$.bound[t](a),h&&I(e,t)),n}):[],$.update(),h=!0,r($.before_update),$.fragment=!!i&&i($.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();a.intro&&C(e.$$.fragment),E(e,a.target,a.anchor),T()}m(u)}class A{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function j(e){let n,r,a,o;return{c(){n=g("h1"),r=p(e[1]),a=u(),o=g("hr"),c(n,"id",e[0]),c(o,"class","svelte-k4cp55")},m(t,e){s(t,n,e),i(n,r),s(t,a,e),s(t,o,e)},p(t,[e]){2&e&&$(r,t[1]),1&e&&c(n,"id",t[0])},i:t,o:t,d(t){t&&l(n),t&&l(a),t&&l(o)}}}function H(t,e,n){let{tag:r}=e,{text:a}=e;return t.$set=t=>{"tag"in t&&n(0,r=t.tag),"text"in t&&n(1,a=t.text)},[r,a]}class S extends A{constructor(t){super(),q(this,t,H,j,o,{tag:0,text:1})}}function z(e){let n,r,a,o;return{c(){n=g("br"),r=u(),a=g("h2"),o=p(e[1]),c(a,"id",e[0])},m(t,e){s(t,n,e),s(t,r,e),s(t,a,e),i(a,o)},p(t,[e]){2&e&&$(o,t[1]),1&e&&c(a,"id",t[0])},i:t,o:t,d(t){t&&l(n),t&&l(r),t&&l(a)}}}function N(t,e,n){let{tag:r}=e,{text:a}=e;return t.$set=t=>{"tag"in t&&n(0,r=t.tag),"text"in t&&n(1,a=t.text)},[r,a]}class O extends A{constructor(t){super(),q(this,t,N,z,o,{tag:0,text:1})}}function D(e){let n,r,a,o,u;return{c(){n=g("li"),r=g("p"),a=g("a"),o=p(e[1]),c(a,"href",u="#"+e[0])},m(t,e){s(t,n,e),i(n,r),i(r,a),i(a,o)},p(t,[e]){2&e&&$(o,t[1]),1&e&&u!==(u="#"+t[0])&&c(a,"href",u)},i:t,o:t,d(t){t&&l(n)}}}function B(t,e,n){let{tag:r}=e,{text:a}=e;return t.$set=t=>{"tag"in t&&n(0,r=t.tag),"text"in t&&n(1,a=t.text)},[r,a]}class F extends A{constructor(t){super(),q(this,t,B,D,o,{tag:0,text:1})}}function P(e){let n,r,a,o,p,c,$,f,m,h,d,k,w,x,b,y,L,v,T,_,Q,I,q,A,j,H,S;return n=new O({props:{tag:"contents",text:"Contents"}}),o=new F({props:{tag:"installation",text:"Installation"}}),c=new F({props:{tag:"making-a-new-link",text:"Making a new link"}}),m=new F({props:{tag:"other-ways-to-make-a-link",text:"Other ways to make a link"}}),d=new F({props:{tag:"using-a-link",text:"Using a link"}}),w=new F({props:{tag:"link-management",text:"Link management"}}),y=new F({props:{tag:"deleting-links",text:"Deleting links"}}),v=new F({props:{tag:"editing-links",text:"Editing links"}}),_=new F({props:{tag:"exporting-links",text:"Exporting links"}}),I=new F({props:{tag:"importing-links",text:"Importing links"}}),A=new F({props:{tag:"nuances",text:"Nuances"}}),H=new F({props:{tag:"source-code",text:"Read the source code"}}),{c(){U(n.$$.fragment),r=u(),a=g("ol"),U(o.$$.fragment),p=u(),U(c.$$.fragment),$=u(),f=g("ol"),U(m.$$.fragment),h=u(),U(d.$$.fragment),k=u(),U(w.$$.fragment),x=u(),b=g("ol"),U(y.$$.fragment),L=u(),U(v.$$.fragment),T=u(),U(_.$$.fragment),Q=u(),U(I.$$.fragment),q=u(),U(A.$$.fragment),j=u(),U(H.$$.fragment)},m(t,e){E(n,t,e),s(t,r,e),s(t,a,e),E(o,a,null),i(a,p),E(c,a,null),i(a,$),i(a,f),E(m,f,null),i(a,h),E(d,a,null),i(a,k),E(w,a,null),i(a,x),i(a,b),E(y,b,null),i(b,L),E(v,b,null),i(a,T),E(_,a,null),i(a,Q),E(I,a,null),i(a,q),E(A,a,null),i(a,j),E(H,a,null),S=!0},p:t,i(t){S||(C(n.$$.fragment,t),C(o.$$.fragment,t),C(c.$$.fragment,t),C(m.$$.fragment,t),C(d.$$.fragment,t),C(w.$$.fragment,t),C(y.$$.fragment,t),C(v.$$.fragment,t),C(_.$$.fragment,t),C(I.$$.fragment,t),C(A.$$.fragment,t),C(H.$$.fragment,t),S=!0)},o(t){R(n.$$.fragment,t),R(o.$$.fragment,t),R(c.$$.fragment,t),R(m.$$.fragment,t),R(d.$$.fragment,t),R(w.$$.fragment,t),R(y.$$.fragment,t),R(v.$$.fragment,t),R(_.$$.fragment,t),R(I.$$.fragment,t),R(A.$$.fragment,t),R(H.$$.fragment,t),S=!1},d(t){M(n,t),t&&l(r),t&&l(a),M(o),M(c),M(m),M(d),M(w),M(y),M(v),M(_),M(I),M(A),M(H)}}}class G extends A{constructor(t){super(),q(this,t,null,P,o,{})}}function K(e){let n,r;return{c(){n=g("span"),r=p(e[0]),c(n,"class","svelte-108khp4")},m(t,e){s(t,n,e),i(n,r)},p(t,[e]){1&e&&$(r,t[0])},i:t,o:t,d(t){t&&l(n)}}}function W(t,e,n){let{text:r}=e;return t.$set=t=>{"text"in t&&n(0,r=t.text)},[r]}class J extends A{constructor(t){super(),q(this,t,W,K,o,{text:0})}}function V(e){let n,r;return{c(){n=g("h3"),r=p(e[1]),c(n,"id",e[0])},m(t,e){s(t,n,e),i(n,r)},p(t,[e]){2&e&&$(r,t[1]),1&e&&c(n,"id",t[0])},i:t,o:t,d(t){t&&l(n)}}}function X(t,e,n){let{tag:r}=e,{text:a}=e;return t.$set=t=>{"tag"in t&&n(0,r=t.tag),"text"in t&&n(1,a=t.text)},[r,a]}class Y extends A{constructor(t){super(),q(this,t,X,V,o,{tag:0,text:1})}}function Z(e){let n,r,a,o,$,f,m,h,d,k,w,x,b,y,L,v,T,_,Q,I,q,A,j,H,z,N,D,B,F,P,K,W,V,X,Z,tt,et,nt,rt,at,ot,it,st,lt,gt,pt,ut,ct,$t,ft,mt,ht,dt,kt,wt,xt,bt,yt,Lt,vt,Tt,_t,Qt,Ct,Rt,Ut,Et,Mt,It,qt,At,jt,Ht,St,zt,Nt,Ot,Dt,Bt,Ft,Pt,Gt,Kt,Wt,Jt,Vt,Xt,Yt,Zt,te,ee,ne,re,ae,oe,ie,se,le,ge;return r=new S({props:{tag:"quick-links",text:"Quick Links"}}),h=new G({}),k=new O({props:{tag:"installation",text:"Installation"}}),_=new J({props:{text:"103.0.2"}}),j=new O({props:{tag:"making-a-new-link",text:"Making a new link"}}),rt=new J({props:{text:"coolwebsite"}}),ot=new J({props:{text:"https://example.com"}}),st=new J({props:{text:"https://example.com"}}),gt=new J({props:{text:"coolwebsite"}}),ft=new Y({props:{tag:"other-ways-to-make-a-link",text:"Other ways to make a link"}}),ht=new O({props:{tag:"using-a-link",text:"Using a link"}}),xt=new J({props:{text:"go"}}),At=new J({props:{text:"coolwebsite"}}),Bt=new J({props:{text:"https://example.com"}}),Gt=new O({props:{tag:"link-management",text:"Link management"}}),Wt=new Y({props:{tag:"deleting-links",text:"Deleting links"}}),Vt=new Y({props:{tag:"editing-links",text:"Editing links"}}),Yt=new O({props:{tag:"exporting-links",text:"Exporting links"}}),te=new O({props:{tag:"importing-links",text:"Importing links"}}),ne=new O({props:{tag:"nuances",text:"Nuances"}}),ae=new O({props:{tag:"source-code",text:"Read the source code"}}),{c(){n=g("div"),U(r.$$.fragment),a=u(),o=g("p"),o.innerHTML="The <i>Quick Links</i> browser extension allows you to rapidly access\n\t\tpreviously visited webpages without needing to dig through your\n\t\tbrowser history or bookmarks bar.",$=u(),f=g("p"),f.textContent="All you have to do is come up\n\t\twith a memorable name for a webpage you want to visit again,\n\t\tthen later type that name into your URL bar to zip back to that page!",m=u(),U(h.$$.fragment),d=u(),U(k.$$.fragment),w=u(),x=g("p"),x.innerHTML='<a href="https://chrome.google.com/webstore/detail/quick-links/mjajgkekioonpenodhpklcfpcdnonmcm">Download from the Chrome Web Store</a>',b=u(),y=g("p"),y.innerHTML="<i>Quick Links</i> is known to be compatible with the desktop\n\t\teditions of Google Chrome, Microsoft Edge, Opera, and Brave.\n\t\tIt also works on the Kiwi browser for Android, although the user\n\t\texperience is still being improved for this platform.\n\t\tThe extension should work on all other Chromium-based browsers\n\t\tthat support Chrome extensions.",L=u(),v=g("p"),T=p("The extension could not be installed on Firefox version "),U(_.$$.fragment),Q=p(",\n\t\tbut future versions of Firefox may support it.\n\t\t"),I=g("i"),I.textContent="Quick Links",q=p(" cannot be installed on Safari;\n\t\tthere are no plans to change this."),A=u(),U(j.$$.fragment),H=u(),z=g("p"),z.textContent='In the upper right of your browser, you\'ll see a puzzle piece icon.\n\t\tIf you click it and select "Quick Links", a popup like the one\n\t\tdepicted below will appear.',N=u(),D=g("img"),F=u(),P=g("p"),P.innerHTML="Tip: for faster access in the future, you can pin the <i>Quick Links</i>\n\t\ticon to the toolbar using the pin icon in the puzzle piece icon&#39;s dropdown menu.",K=u(),W=g("p"),W.textContent="To create a new Quick Link,\n\t\tjust fill in the URL and Quick Link fields,\n\t\tthen press CREATE. It's that easy!",V=u(),X=g("img"),tt=u(),et=g("p"),nt=p("The example above will associate the keyword "),U(rt.$$.fragment),at=p("\n\t\twith the webpage "),U(ot.$$.fragment),it=p(".\n\t\tSo now you can go to "),U(st.$$.fragment),lt=p("\n\t\tby typing "),U(gt.$$.fragment),pt=p(" into your URL bar."),ut=u(),ct=g("p"),ct.textContent="The popup will pre-fill the URL field with the URL of the current page.\n\t\tSo, you only have to fill out the Quick Link field.",$t=u(),U(ft.$$.fragment),mt=u(),U(ht.$$.fragment),dt=u(),kt=g("p"),wt=p("To use a link, just go to the URL bar and type\n\t\tthe word "),U(xt.$$.fragment),bt=p(" followed by a single space, as seen below."),yt=u(),Lt=g("img"),Tt=u(),_t=g("p"),_t.textContent="As soon as you type the space, the Quick Links input context will be displayed.\n\t\tThis lets you know that you are entering a Quick Link and not a URL or a\n\t\tweb search query.",Qt=u(),Ct=g("img"),Ut=u(),Et=g("p"),Mt=p("Then we just enter the Quick Link keyword that we registered earlier.\n\t\tIf we wanted to use the link created in the "),It=g("a"),It.textContent="Making a new link",qt=p(" section,\n\t\twe would type "),U(At.$$.fragment),jt=p(", as seen below."),Ht=u(),St=g("img"),Nt=u(),Ot=g("p"),Dt=p("Pressing the enter key will submit the link.\n\t\tIn this case, we will be directed to "),U(Bt.$$.fragment),Ft=p("."),Pt=u(),U(Gt.$$.fragment),Kt=u(),U(Wt.$$.fragment),Jt=u(),U(Vt.$$.fragment),Xt=u(),U(Yt.$$.fragment),Zt=u(),U(te.$$.fragment),ee=u(),U(ne.$$.fragment),re=u(),U(ae.$$.fragment),oe=u(),ie=g("p"),ie.innerHTML='The source code for <i>Quick Links</i> is available\n\t\t<a href="https://github.com/aaronstanek/quick_links_chrome">here</a>.',se=u(),le=g("p"),le.innerHTML='The source code for this documentaiton page is available\n\t\t<a href="https://github.com/aaronstanek/quick-links-docs">here</a>.',D.src!==(B="img/popup_empty.png")&&c(D,"src","img/popup_empty.png"),c(D,"alt","The Quick Links popup menu. The input fields are empty."),c(D,"class","svelte-lpk50f"),X.src!==(Z="img/popup_example.png")&&c(X,"src","img/popup_example.png"),c(X,"alt",'The Quick Links popup menu. The URL field contains the string "https://example.com" and the Quick Link field contains the string "coolwebsite".'),c(X,"class","svelte-lpk50f"),Lt.src!==(vt="img/go.png")&&c(Lt,"src","img/go.png"),c(Lt,"alt",'URL bar with the word "go" and then a space.'),c(Lt,"class","svelte-lpk50f"),Ct.src!==(Rt="img/quick_links.png")&&c(Ct,"src","img/quick_links.png"),c(Ct,"alt","URL bar with Quick Links input context."),c(Ct,"class","svelte-lpk50f"),c(It,"href","#making-a-new-link"),St.src!==(zt="img/coolwebsite.png")&&c(St,"src","img/coolwebsite.png"),c(St,"alt",'URL bar with Quick Links input context. "coolwebsite" has been input.'),c(St,"class","svelte-lpk50f"),c(n,"class","centraltext svelte-lpk50f")},m(t,e){s(t,n,e),E(r,n,null),i(n,a),i(n,o),i(n,$),i(n,f),i(n,m),E(h,n,null),i(n,d),E(k,n,null),i(n,w),i(n,x),i(n,b),i(n,y),i(n,L),i(n,v),i(v,T),E(_,v,null),i(v,Q),i(v,I),i(v,q),i(n,A),E(j,n,null),i(n,H),i(n,z),i(n,N),i(n,D),i(n,F),i(n,P),i(n,K),i(n,W),i(n,V),i(n,X),i(n,tt),i(n,et),i(et,nt),E(rt,et,null),i(et,at),E(ot,et,null),i(et,it),E(st,et,null),i(et,lt),E(gt,et,null),i(et,pt),i(n,ut),i(n,ct),i(n,$t),E(ft,n,null),i(n,mt),E(ht,n,null),i(n,dt),i(n,kt),i(kt,wt),E(xt,kt,null),i(kt,bt),i(n,yt),i(n,Lt),i(n,Tt),i(n,_t),i(n,Qt),i(n,Ct),i(n,Ut),i(n,Et),i(Et,Mt),i(Et,It),i(Et,qt),E(At,Et,null),i(Et,jt),i(n,Ht),i(n,St),i(n,Nt),i(n,Ot),i(Ot,Dt),E(Bt,Ot,null),i(Ot,Ft),i(n,Pt),E(Gt,n,null),i(n,Kt),E(Wt,n,null),i(n,Jt),E(Vt,n,null),i(n,Xt),E(Yt,n,null),i(n,Zt),E(te,n,null),i(n,ee),E(ne,n,null),i(n,re),E(ae,n,null),i(n,oe),i(n,ie),i(n,se),i(n,le),ge=!0},p:t,i(t){ge||(C(r.$$.fragment,t),C(h.$$.fragment,t),C(k.$$.fragment,t),C(_.$$.fragment,t),C(j.$$.fragment,t),C(rt.$$.fragment,t),C(ot.$$.fragment,t),C(st.$$.fragment,t),C(gt.$$.fragment,t),C(ft.$$.fragment,t),C(ht.$$.fragment,t),C(xt.$$.fragment,t),C(At.$$.fragment,t),C(Bt.$$.fragment,t),C(Gt.$$.fragment,t),C(Wt.$$.fragment,t),C(Vt.$$.fragment,t),C(Yt.$$.fragment,t),C(te.$$.fragment,t),C(ne.$$.fragment,t),C(ae.$$.fragment,t),ge=!0)},o(t){R(r.$$.fragment,t),R(h.$$.fragment,t),R(k.$$.fragment,t),R(_.$$.fragment,t),R(j.$$.fragment,t),R(rt.$$.fragment,t),R(ot.$$.fragment,t),R(st.$$.fragment,t),R(gt.$$.fragment,t),R(ft.$$.fragment,t),R(ht.$$.fragment,t),R(xt.$$.fragment,t),R(At.$$.fragment,t),R(Bt.$$.fragment,t),R(Gt.$$.fragment,t),R(Wt.$$.fragment,t),R(Vt.$$.fragment,t),R(Yt.$$.fragment,t),R(te.$$.fragment,t),R(ne.$$.fragment,t),R(ae.$$.fragment,t),ge=!1},d(t){t&&l(n),M(r),M(h),M(k),M(_),M(j),M(rt),M(ot),M(st),M(gt),M(ft),M(ht),M(xt),M(At),M(Bt),M(Gt),M(Wt),M(Vt),M(Yt),M(te),M(ne),M(ae)}}}return new class extends A{constructor(t){super(),q(this,t,null,Z,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
