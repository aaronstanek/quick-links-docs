var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function c(){return g(" ")}function u(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let f;function h(t){f=t}const $=[],k=[],d=[],w=[],x=Promise.resolve();let b=!1;function y(t){d.push(t)}let L=!1;const _=new Set;function v(){if(!L){L=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];h(e),T(e.$$)}for($.length=0;k.length;)k.pop()();for(let t=0;t<d.length;t+=1){const e=d[t];_.has(e)||(_.add(e),e())}d.length=0}while($.length);for(;w.length;)w.pop()();b=!1,L=!1,_.clear()}}function T(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const C=new Set;function Q(t,e){t&&t.i&&(C.delete(t),t.i(e))}function R(t,e,n,a){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push(()=>{C.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}}function U(t){t&&t.c()}function I(t,n,r){const{fragment:i,on_mount:s,on_destroy:l,after_update:p}=t.$$;i&&i.m(n,r),y(()=>{const n=s.map(e).filter(o);l?l.push(...n):a(n),t.$$.on_mount=[]}),p.forEach(y)}function M(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function E(t,e){-1===t.$$.dirty[0]&&($.push(t),b||(b=!0,x.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,o,r,i,s,p,g=[-1]){const c=f;h(e);const u=o.props||{},m=e.$$={fragment:null,ctx:null,props:p,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:n(),dirty:g};let $=!1;if(m.ctx=r?r(e,u,(t,n,...a)=>{const o=a.length?a[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),$&&E(e,t)),n}):[],m.update(),$=!0,a(m.before_update),m.fragment=!!i&&i(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();o.intro&&Q(e.$$.fragment),I(e,o.target,o.anchor),v()}h(c)}class q{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function A(e){let n,a,o,r;return{c(){n=p("h1"),a=g(e[1]),o=c(),r=p("hr"),u(n,"id",e[0]),u(r,"class","svelte-k4cp55")},m(t,e){s(t,n,e),i(n,a),s(t,o,e),s(t,r,e)},p(t,[e]){2&e&&m(a,t[1]),1&e&&u(n,"id",t[0])},i:t,o:t,d(t){t&&l(n),t&&l(o),t&&l(r)}}}function S(t,e,n){let{tag:a}=e,{text:o}=e;return t.$set=t=>{"tag"in t&&n(0,a=t.tag),"text"in t&&n(1,o=t.text)},[a,o]}class j extends q{constructor(t){super(),O(this,t,S,A,r,{tag:0,text:1})}}function N(e){let n,a,o,r;return{c(){n=p("br"),a=c(),o=p("h2"),r=g(e[1]),u(o,"id",e[0])},m(t,e){s(t,n,e),s(t,a,e),s(t,o,e),i(o,r)},p(t,[e]){2&e&&m(r,t[1]),1&e&&u(o,"id",t[0])},i:t,o:t,d(t){t&&l(n),t&&l(a),t&&l(o)}}}function H(t,e,n){let{tag:a}=e,{text:o}=e;return t.$set=t=>{"tag"in t&&n(0,a=t.tag),"text"in t&&n(1,o=t.text)},[a,o]}class z extends q{constructor(t){super(),O(this,t,H,N,r,{tag:0,text:1})}}function D(e){let n,a,o,r,c;return{c(){n=p("li"),a=p("p"),o=p("a"),r=g(e[1]),u(o,"href",c="#"+e[0])},m(t,e){s(t,n,e),i(n,a),i(a,o),i(o,r)},p(t,[e]){2&e&&m(r,t[1]),1&e&&c!==(c="#"+t[0])&&u(o,"href",c)},i:t,o:t,d(t){t&&l(n)}}}function G(t,e,n){let{tag:a}=e,{text:o}=e;return t.$set=t=>{"tag"in t&&n(0,a=t.tag),"text"in t&&n(1,o=t.text)},[a,o]}class P extends q{constructor(t){super(),O(this,t,G,D,r,{tag:0,text:1})}}function F(e){let n,a,o,r,g,u,m,f,h,$,k,d,w,x,b,y,L,_,v,T,C,E,O,q,A,S,j,N,H;return n=new z({props:{tag:"contents",text:"Contents"}}),r=new P({props:{tag:"installation",text:"Installation"}}),u=new P({props:{tag:"making-a-new-link",text:"Making a new link"}}),h=new P({props:{tag:"other-ways-to-make-a-link",text:"Other ways to make a link"}}),k=new P({props:{tag:"using-a-link",text:"Using a link"}}),w=new P({props:{tag:"link-management",text:"Link management"}}),y=new P({props:{tag:"deleting-links",text:"Deleting links"}}),_=new P({props:{tag:"editing-links",text:"Editing links"}}),T=new P({props:{tag:"dynamic-links",text:"Dynamic Links"}}),E=new P({props:{tag:"exporting-links",text:"Exporting links"}}),q=new P({props:{tag:"importing-links",text:"Importing links"}}),S=new P({props:{tag:"nuances",text:"Nuances"}}),N=new P({props:{tag:"source-code",text:"Read the source code"}}),{c(){U(n.$$.fragment),a=c(),o=p("ol"),U(r.$$.fragment),g=c(),U(u.$$.fragment),m=c(),f=p("ol"),U(h.$$.fragment),$=c(),U(k.$$.fragment),d=c(),U(w.$$.fragment),x=c(),b=p("ol"),U(y.$$.fragment),L=c(),U(_.$$.fragment),v=c(),U(T.$$.fragment),C=c(),U(E.$$.fragment),O=c(),U(q.$$.fragment),A=c(),U(S.$$.fragment),j=c(),U(N.$$.fragment)},m(t,e){I(n,t,e),s(t,a,e),s(t,o,e),I(r,o,null),i(o,g),I(u,o,null),i(o,m),i(o,f),I(h,f,null),i(o,$),I(k,o,null),i(o,d),I(w,o,null),i(o,x),i(o,b),I(y,b,null),i(b,L),I(_,b,null),i(o,v),I(T,o,null),i(o,C),I(E,o,null),i(o,O),I(q,o,null),i(o,A),I(S,o,null),i(o,j),I(N,o,null),H=!0},p:t,i(t){H||(Q(n.$$.fragment,t),Q(r.$$.fragment,t),Q(u.$$.fragment,t),Q(h.$$.fragment,t),Q(k.$$.fragment,t),Q(w.$$.fragment,t),Q(y.$$.fragment,t),Q(_.$$.fragment,t),Q(T.$$.fragment,t),Q(E.$$.fragment,t),Q(q.$$.fragment,t),Q(S.$$.fragment,t),Q(N.$$.fragment,t),H=!0)},o(t){R(n.$$.fragment,t),R(r.$$.fragment,t),R(u.$$.fragment,t),R(h.$$.fragment,t),R(k.$$.fragment,t),R(w.$$.fragment,t),R(y.$$.fragment,t),R(_.$$.fragment,t),R(T.$$.fragment,t),R(E.$$.fragment,t),R(q.$$.fragment,t),R(S.$$.fragment,t),R(N.$$.fragment,t),H=!1},d(t){M(n,t),t&&l(a),t&&l(o),M(r),M(u),M(h),M(k),M(w),M(y),M(_),M(T),M(E),M(q),M(S),M(N)}}}class J extends q{constructor(t){super(),O(this,t,null,F,r,{})}}function B(e){let n,a;return{c(){n=p("span"),a=g(e[0]),u(n,"class","svelte-108khp4")},m(t,e){s(t,n,e),i(n,a)},p(t,[e]){1&e&&m(a,t[0])},i:t,o:t,d(t){t&&l(n)}}}function W(t,e,n){let{text:a}=e;return t.$set=t=>{"text"in t&&n(0,a=t.text)},[a]}class Y extends q{constructor(t){super(),O(this,t,W,B,r,{text:0})}}function K(e){let n,a;return{c(){n=p("h3"),a=g(e[1]),u(n,"id",e[0])},m(t,e){s(t,n,e),i(n,a)},p(t,[e]){2&e&&m(a,t[1]),1&e&&u(n,"id",t[0])},i:t,o:t,d(t){t&&l(n)}}}function X(t,e,n){let{tag:a}=e,{text:o}=e;return t.$set=t=>{"tag"in t&&n(0,a=t.tag),"text"in t&&n(1,o=t.text)},[a,o]}class V extends q{constructor(t){super(),O(this,t,X,K,r,{tag:0,text:1})}}function Z(e){let n,a,o,r,m,f,h,$,k,d,w,x,b,y,L,_,v,T,C,E,O,q,A,S,N,H,D,G,P,F,B,W,K,X,Z,tt,et,nt,at,ot,rt,it,st,lt,pt,gt,ct,ut,mt,ft,ht,$t,kt,dt,wt,xt,bt,yt,Lt,_t,vt,Tt,Ct,Qt,Rt,Ut,It,Mt,Et,Ot,qt,At,St,jt,Nt,Ht,zt,Dt,Gt,Pt,Ft,Jt,Bt,Wt,Yt,Kt,Xt,Vt,Zt,te,ee,ne,ae,oe,re,ie,se,le,pe,ge,ce,ue,me,fe,he,$e,ke,de,we,xe,be,ye,Le,_e,ve,Te,Ce,Qe,Re,Ue,Ie,Me,Ee,Oe,qe,Ae,Se,je,Ne,He,ze,De,Ge,Pe,Fe,Je,Be,We,Ye,Ke,Xe,Ve,Ze,tn,en,nn,an,on,rn,sn,ln,pn,gn,cn,un,mn,fn,hn,$n,kn,dn,wn,xn,bn,yn,Ln,_n,vn,Tn,Cn,Qn,Rn,Un,In,Mn,En,On,qn;return a=new j({props:{tag:"quick-links",text:"Quick Links"}}),y=new J({}),_=new z({props:{tag:"installation",text:"Installation"}}),S=new Y({props:{text:"103.0.2"}}),D=new z({props:{tag:"making-a-new-link",text:"Making a new link"}}),st=new Y({props:{text:"coolwebsite"}}),pt=new Y({props:{text:"https://example.com"}}),ct=new Y({props:{text:"https://example.com"}}),mt=new Y({props:{text:"coolwebsite"}}),dt=new V({props:{tag:"other-ways-to-make-a-link",text:"Other ways to make a link"}}),yt=new Y({props:{text:"links/new/<quick-link-keyword>"}}),It=new z({props:{tag:"using-a-link",text:"Using a link"}}),qt=new Y({props:{text:"go"}}),Kt=new Y({props:{text:"coolwebsite"}}),oe=new Y({props:{text:"https://example.com"}}),se=new z({props:{tag:"link-management",text:"Link management"}}),me=new Y({props:{text:"links"}}),Te=new V({props:{tag:"deleting-links",text:"Deleting links"}}),Ue=new V({props:{tag:"editing-links",text:"Editing links"}}),Ne=new z({props:{tag:"dynamic-links",text:"Dynamic Links"}}),ze=new z({props:{tag:"exporting-links",text:"Exporting links"}}),Be=new Y({props:{text:"links/export"}}),Ye=new Y({props:{text:"export"}}),an=new Y({props:{text:"Copy to clipboard"}}),pn=new z({props:{tag:"importing-links",text:"Importing links"}}),hn=new Y({props:{text:"links/import"}}),vn=new Y({props:{text:"IMPORT"}}),Un=new z({props:{tag:"source-code",text:"Read the source code"}}),{c(){n=p("div"),U(a.$$.fragment),o=c(),r=p("p"),r.textContent="Never bookmark a webpage again!",m=c(),f=p("p"),f.textContent="The Quick Links browser extension allows you to rapidly revisit\n\t\twebpages without needing to dig through your\n\t\tbrowser history or bookmarks bar.",h=c(),$=p("p"),$.textContent="All you have to do is come up\n\t\twith a memorable name for a webpage you want to visit again,\n\t\tthen later type that name into your URL bar to zip back to that page!",k=c(),d=p("p"),d.textContent="Let's say that you need to reference a periodic table for your work.\n\t\tIt's easy enough to Google \"periodic table\" and find what you're looking for,\n\t\tbut if you need to access the periodic table frequency, you'd certainly want\n\t\ta faster way to return to the webpage than going through the Google\n\t\tsearch results every time. A bookmark would certainly accomplish this,\n\t\tbut then you'd still need to go find the bookmark and click on it.\n\t\tIf you have enough bookmarks, then this search through your bookmarks\n\t\tbar could potentially take just as long as the Google search would have taken!",w=c(),x=p("p"),x.textContent='With Quick Links, you could easily associate the keyword "periodic" with\n\t\tthe periodic table reference webpage. Then returning to the webpage is as\n\t\teasy as typing "go periodic" into your URL bar and hitting the enter key.\n\t\tFaster and easier than using a bookmark!',b=c(),U(y.$$.fragment),L=c(),U(_.$$.fragment),v=c(),T=p("p"),T.innerHTML='<a href="https://chrome.google.com/webstore/detail/quick-links/mjajgkekioonpenodhpklcfpcdnonmcm">Download from the Chrome Web Store</a>',C=c(),E=p("p"),E.textContent="Quick Links is known to be compatible with the desktop\n\t\teditions of Google Chrome, Microsoft Edge, Opera, and Brave.\n\t\tIt also works on the Kiwi browser for Android, although the user\n\t\texperience is still being improved for this platform.\n\t\tThe extension should work on all other Chromium-based browsers\n\t\tthat support Chrome extensions.",O=c(),q=p("p"),A=g("The extension could not be installed on Firefox version "),U(S.$$.fragment),N=g(",\n\t\tbut future versions of Firefox may support it.\n\t\tQuick Links cannot be installed on Safari;\n\t\tthere are no plans to change this."),H=c(),U(D.$$.fragment),G=c(),P=p("p"),P.textContent='In the upper right of your browser, you\'ll see a puzzle piece icon.\n\t\tIf you click it and select "Quick Links", a popup like the one\n\t\tdepicted below will appear.',F=c(),B=p("img"),K=c(),X=p("p"),X.textContent="Tip: for faster access in the future, you can pin the Quick Links\n\t\ticon to the toolbar using the pin icon in the puzzle piece icon's dropdown menu.",Z=c(),tt=p("p"),tt.textContent="To create a new Quick Link,\n\t\tjust fill in the URL and Quick Link fields,\n\t\tthen press CREATE. It's that easy!",et=c(),nt=p("img"),ot=c(),rt=p("p"),it=g("The example above will associate the keyword "),U(st.$$.fragment),lt=g("\n\t\twith the webpage "),U(pt.$$.fragment),gt=g(".\n\t\tSo now you can go to "),U(ct.$$.fragment),ut=g("\n\t\tby typing "),U(mt.$$.fragment),ft=g(" into your URL bar."),ht=c(),$t=p("p"),$t.textContent="The popup will pre-fill the URL field with the URL of the current page.\n\t\tSo, you only have to fill out the Quick Link field.",kt=c(),U(dt.$$.fragment),wt=c(),xt=p("p"),bt=g("There is a preregistered dymanic link for creating new links.\n\t\t"),U(yt.$$.fragment),Lt=g("\n\t\tThis is useful if you have the destination URL copied to your clipboard, and\n\t\tyou only want to enter the Quick Link keyword."),_t=c(),vt=p("p"),vt.innerHTML='If you <a href="#using-a-link">use a link</a> that hasn&#39;t been created yet,\n\t\tthen you will be prompted to create the link.\n\t\tThis is useful in cases where you expected a link to exist, but it hasn&#39;t\n\t\tbeen registered yet. You will be prompted for the destination URL.\n\t\tUpon success, you will be redirected to the <a href="#link-management">link management page</a>.',Tt=c(),Ct=p("p"),Ct.innerHTML='Links can be created from the <a href="#link-management">link management page</a>.',Qt=c(),Rt=p("p"),Rt.innerHTML='If you want to create a large number of links that already exist in another\n\t\tinstance of Quick Links, consider <a href="#exporting-links">exporting</a>\n\t\tthen <a href="#importing-links">importing</a> the links.',Ut=c(),U(It.$$.fragment),Mt=c(),Et=p("p"),Ot=g("To use a link, just go to the URL bar and type\n\t\tthe word "),U(qt.$$.fragment),At=g(" followed by a single space, as seen below."),St=c(),jt=p("img"),Ht=c(),zt=p("p"),zt.textContent="As soon as you type the space, the Quick Links input context will be displayed.\n\t\tThis lets you know that you are entering a Quick Link and not a URL or a\n\t\tweb search query.",Dt=c(),Gt=p("img"),Ft=c(),Jt=p("p"),Bt=g("Then we just enter the Quick Link keyword that we registered earlier.\n\t\tIf we wanted to use the link created in the "),Wt=p("a"),Wt.textContent="Making a new link",Yt=g(" section,\n\t\twe would type "),U(Kt.$$.fragment),Xt=g(", as seen below."),Vt=c(),Zt=p("img"),ee=c(),ne=p("p"),ae=g("Pressing the enter key will submit the link.\n\t\tIn this case, we will be directed to "),U(oe.$$.fragment),re=g("."),ie=c(),U(se.$$.fragment),le=c(),pe=p("p"),ge=g("To delete or edit a link, you will have to access the link management page.\n\t\tThe fastest way to do this is to "),ce=p("a"),ce.textContent="use",ue=g("\n\t\tthe preregistered link: "),U(me.$$.fragment),fe=g("."),he=c(),$e=p("img"),de=c(),we=p("p"),we.textContent="The link management page can also be accessed from a link on the\n\t\ttop of the toolbar popup menu.",xe=c(),be=p("p"),be.textContent="The link management page is show below.",ye=c(),Le=p("img"),ve=c(),U(Te.$$.fragment),Ce=c(),Qe=p("p"),Qe.textContent="To delete a link, locate it in the table of links on the link management page.\n\t\tThen click the trash can icon on the far right of the row of that link.",Re=c(),U(Ue.$$.fragment),Ie=c(),Me=p("p"),Me.textContent="To edit a link, locate it in the table of links on the link management page.\n\t\tThen click the pencil icon on the right of the row of that link.",Ee=c(),Oe=p("img"),Ae=c(),Se=p("p"),Se.textContent="The second row of the image above shows the editing interface\n\t\twhich appears after the pencil icon is pressed.\n\t\tOnce you have updated the two text fields of the row to be what you want.\n\t\tClick the checkmark icon, or press the enter key.\n\t\tTo discard changes, press the X icon on the far right.",je=c(),U(Ne.$$.fragment),He=c(),U(ze.$$.fragment),De=c(),Ge=p("p"),Pe=g("To export the links saved in your browser, either to back up,\n\t\tor to transfer to another computer, "),Fe=p("a"),Fe.textContent="use",Je=g("\n\t\tthe preregistered link "),U(Be.$$.fragment),We=g("\n\t\tor click the "),U(Ye.$$.fragment),Ke=g("\n\t\tlink in the toolbar popup menu."),Xe=c(),Ve=p("img"),tn=c(),en=p("p"),nn=g("On the export page, all the links saved in your browser\n\t\tare displayed as a JSON blob. You can either copy the text manually,\n\t\tor click the "),U(an.$$.fragment),on=g(" button."),rn=c(),sn=p("p"),sn.textContent="Once you have copied the JSON blob, either move it to another browser, or save it\n\t\tsomeplace for later use.",ln=c(),U(pn.$$.fragment),gn=c(),cn=p("p"),cn.innerHTML='Importing links into your browser is almost identical to <a href="#exporting-links">exporting</a>.',un=c(),mn=p("p"),fn=g("Use the preregistered link "),U(hn.$$.fragment),$n=g("\n\t\tor click the link in the toolbar popup menu."),kn=c(),dn=p("img"),xn=c(),bn=p("p"),yn=g("Paste the JSON blob from the "),Ln=p("a"),Ln.textContent="export",_n=g("\n\t\tstep into the text field. Then click "),U(vn.$$.fragment),Tn=g("\n\t\tor press enter."),Cn=c(),Qn=p("p"),Qn.textContent="Importing will delete all the links that were previously saved in your browser.",Rn=c(),U(Un.$$.fragment),In=c(),Mn=p("p"),Mn.innerHTML='The source code for Quick Links is available\n\t\t<a href="https://github.com/aaronstanek/quick_links_chrome">here</a>.',En=c(),On=p("p"),On.innerHTML='The source code for this documentaiton page is available\n\t\t<a href="https://github.com/aaronstanek/quick-links-docs">here</a>.',u(r,"class","it svelte-oadtkt"),B.src!==(W="img/popup_empty_web.png")&&u(B,"src","img/popup_empty_web.png"),u(B,"alt","The Quick Links popup menu. The input fields are empty."),u(B,"class","svelte-oadtkt"),nt.src!==(at="img/popup_example_web.png")&&u(nt,"src","img/popup_example_web.png"),u(nt,"alt",'The Quick Links popup menu. The URL field contains the string "https://example.com" and the Quick Link field contains the string "coolwebsite".'),u(nt,"class","svelte-oadtkt"),jt.src!==(Nt="img/go_web.png")&&u(jt,"src","img/go_web.png"),u(jt,"alt",'URL bar with the word "go" and then a space.'),u(jt,"class","svelte-oadtkt"),Gt.src!==(Pt="img/quick_links_web.png")&&u(Gt,"src","img/quick_links_web.png"),u(Gt,"alt","URL bar with Quick Links input context."),u(Gt,"class","svelte-oadtkt"),u(Wt,"href","#making-a-new-link"),Zt.src!==(te="img/coolwebsite_web.png")&&u(Zt,"src","img/coolwebsite_web.png"),u(Zt,"alt",'URL bar with Quick Links input context. "coolwebsite" has been input.'),u(Zt,"class","svelte-oadtkt"),u(ce,"href","#using-a-link"),$e.src!==(ke="img/links_web.png")&&u($e,"src","img/links_web.png"),u($e,"alt",'Quick Links input context in URL bar with "links" input.'),u($e,"class","svelte-oadtkt"),Le.src!==(_e="img/main_empty_web.png")&&u(Le,"src","img/main_empty_web.png"),u(Le,"alt","The link management page with no links registered."),u(Le,"class","svelte-oadtkt"),Oe.src!==(qe="img/edit_1_web.png")&&u(Oe,"src","img/edit_1_web.png"),u(Oe,"alt","The link management page with editing interface active."),u(Oe,"class","svelte-oadtkt"),u(Fe,"href","#using-a-link"),Ve.src!==(Ze="img/export_web.png")&&u(Ve,"src","img/export_web.png"),u(Ve,"alt","The export page."),u(Ve,"class","svelte-oadtkt"),dn.src!==(wn="img/import_example_web.png")&&u(dn,"src","img/import_example_web.png"),u(dn,"alt","The import page."),u(dn,"class","svelte-oadtkt"),u(Ln,"href","#exporting-links"),u(n,"class","centraltext svelte-oadtkt")},m(t,e){s(t,n,e),I(a,n,null),i(n,o),i(n,r),i(n,m),i(n,f),i(n,h),i(n,$),i(n,k),i(n,d),i(n,w),i(n,x),i(n,b),I(y,n,null),i(n,L),I(_,n,null),i(n,v),i(n,T),i(n,C),i(n,E),i(n,O),i(n,q),i(q,A),I(S,q,null),i(q,N),i(n,H),I(D,n,null),i(n,G),i(n,P),i(n,F),i(n,B),i(n,K),i(n,X),i(n,Z),i(n,tt),i(n,et),i(n,nt),i(n,ot),i(n,rt),i(rt,it),I(st,rt,null),i(rt,lt),I(pt,rt,null),i(rt,gt),I(ct,rt,null),i(rt,ut),I(mt,rt,null),i(rt,ft),i(n,ht),i(n,$t),i(n,kt),I(dt,n,null),i(n,wt),i(n,xt),i(xt,bt),I(yt,xt,null),i(xt,Lt),i(n,_t),i(n,vt),i(n,Tt),i(n,Ct),i(n,Qt),i(n,Rt),i(n,Ut),I(It,n,null),i(n,Mt),i(n,Et),i(Et,Ot),I(qt,Et,null),i(Et,At),i(n,St),i(n,jt),i(n,Ht),i(n,zt),i(n,Dt),i(n,Gt),i(n,Ft),i(n,Jt),i(Jt,Bt),i(Jt,Wt),i(Jt,Yt),I(Kt,Jt,null),i(Jt,Xt),i(n,Vt),i(n,Zt),i(n,ee),i(n,ne),i(ne,ae),I(oe,ne,null),i(ne,re),i(n,ie),I(se,n,null),i(n,le),i(n,pe),i(pe,ge),i(pe,ce),i(pe,ue),I(me,pe,null),i(pe,fe),i(n,he),i(n,$e),i(n,de),i(n,we),i(n,xe),i(n,be),i(n,ye),i(n,Le),i(n,ve),I(Te,n,null),i(n,Ce),i(n,Qe),i(n,Re),I(Ue,n,null),i(n,Ie),i(n,Me),i(n,Ee),i(n,Oe),i(n,Ae),i(n,Se),i(n,je),I(Ne,n,null),i(n,He),I(ze,n,null),i(n,De),i(n,Ge),i(Ge,Pe),i(Ge,Fe),i(Ge,Je),I(Be,Ge,null),i(Ge,We),I(Ye,Ge,null),i(Ge,Ke),i(n,Xe),i(n,Ve),i(n,tn),i(n,en),i(en,nn),I(an,en,null),i(en,on),i(n,rn),i(n,sn),i(n,ln),I(pn,n,null),i(n,gn),i(n,cn),i(n,un),i(n,mn),i(mn,fn),I(hn,mn,null),i(mn,$n),i(n,kn),i(n,dn),i(n,xn),i(n,bn),i(bn,yn),i(bn,Ln),i(bn,_n),I(vn,bn,null),i(bn,Tn),i(n,Cn),i(n,Qn),i(n,Rn),I(Un,n,null),i(n,In),i(n,Mn),i(n,En),i(n,On),qn=!0},p:t,i(t){qn||(Q(a.$$.fragment,t),Q(y.$$.fragment,t),Q(_.$$.fragment,t),Q(S.$$.fragment,t),Q(D.$$.fragment,t),Q(st.$$.fragment,t),Q(pt.$$.fragment,t),Q(ct.$$.fragment,t),Q(mt.$$.fragment,t),Q(dt.$$.fragment,t),Q(yt.$$.fragment,t),Q(It.$$.fragment,t),Q(qt.$$.fragment,t),Q(Kt.$$.fragment,t),Q(oe.$$.fragment,t),Q(se.$$.fragment,t),Q(me.$$.fragment,t),Q(Te.$$.fragment,t),Q(Ue.$$.fragment,t),Q(Ne.$$.fragment,t),Q(ze.$$.fragment,t),Q(Be.$$.fragment,t),Q(Ye.$$.fragment,t),Q(an.$$.fragment,t),Q(pn.$$.fragment,t),Q(hn.$$.fragment,t),Q(vn.$$.fragment,t),Q(Un.$$.fragment,t),qn=!0)},o(t){R(a.$$.fragment,t),R(y.$$.fragment,t),R(_.$$.fragment,t),R(S.$$.fragment,t),R(D.$$.fragment,t),R(st.$$.fragment,t),R(pt.$$.fragment,t),R(ct.$$.fragment,t),R(mt.$$.fragment,t),R(dt.$$.fragment,t),R(yt.$$.fragment,t),R(It.$$.fragment,t),R(qt.$$.fragment,t),R(Kt.$$.fragment,t),R(oe.$$.fragment,t),R(se.$$.fragment,t),R(me.$$.fragment,t),R(Te.$$.fragment,t),R(Ue.$$.fragment,t),R(Ne.$$.fragment,t),R(ze.$$.fragment,t),R(Be.$$.fragment,t),R(Ye.$$.fragment,t),R(an.$$.fragment,t),R(pn.$$.fragment,t),R(hn.$$.fragment,t),R(vn.$$.fragment,t),R(Un.$$.fragment,t),qn=!1},d(t){t&&l(n),M(a),M(y),M(_),M(S),M(D),M(st),M(pt),M(ct),M(mt),M(dt),M(yt),M(It),M(qt),M(Kt),M(oe),M(se),M(me),M(Te),M(Ue),M(Ne),M(ze),M(Be),M(Ye),M(an),M(pn),M(hn),M(vn),M(Un)}}}return new class extends q{constructor(t){super(),O(this,t,null,Z,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
