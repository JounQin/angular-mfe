var __webpack_modules__={339:(o,v,l)=>{Promise.all([l.e(432),l.e(128),l.e(856),l.e(642),l.e(326)]).then(l.bind(l,1326))}},__webpack_module_cache__={};function __webpack_require__(o){var v=__webpack_module_cache__[o];if(void 0!==v)return v.exports;var l=__webpack_module_cache__[o]={exports:{}};return __webpack_modules__[o](l,l.exports,__webpack_require__),l.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(o,v)=>{for(var l in v)__webpack_require__.o(v,l)&&!__webpack_require__.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:v[l]})},__webpack_require__.f={},__webpack_require__.e=o=>Promise.all(Object.keys(__webpack_require__.f).reduce((v,l)=>(__webpack_require__.f[l](o,v),v),[])),__webpack_require__.u=o=>o+"."+{17:"42e142c46631cc0f",75:"1f455fcb5dab792a",99:"04b71abf099b17c1",128:"4f6cd3d20b076246",158:"b7aa03a910a3e439",291:"d95504d5b4508860",326:"925a6f944463a157",390:"65abd6c99bc968ad",432:"fc722dc464f11538",585:"903876e7b77d2501",642:"63e7459020ebf76a",728:"d27ea67fe71b0448",856:"d074ad6b5d431492",923:"7d199661788a10fd"}[o]+".js",__webpack_require__.miniCssF=o=>{},__webpack_require__.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),(()=>{var o={},v="main:";__webpack_require__.l=(l,f,g,h)=>{if(o[l])o[l].push(f);else{var u,y;if(void 0!==g)for(var c=document.getElementsByTagName("script"),E=0;E<c.length;E++){var p=c[E];if(p.getAttribute("src")==l||p.getAttribute("data-webpack")==v+g){u=p;break}}u||(y=!0,(u=document.createElement("script")).type="module",u.charset="utf-8",u.timeout=120,__webpack_require__.nc&&u.setAttribute("nonce",__webpack_require__.nc),u.setAttribute("data-webpack",v+g),u.src=__webpack_require__.tu(l)),o[l]=[f];var b=(w,P)=>{u.onerror=u.onload=null,clearTimeout(s);var S=o[l];if(delete o[l],u.parentNode&&u.parentNode.removeChild(u),S&&S.forEach(d=>d(P)),w)return w(P)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=b.bind(null,u.onerror),u.onload=b.bind(null,u.onload),y&&document.head.appendChild(u)}}})(),__webpack_require__.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o={},v={};__webpack_require__.f.remotes=(l,f)=>{__webpack_require__.o(o,l)&&o[l].forEach(g=>{var h=__webpack_require__.R;h||(h=[]);var u=v[g];if(!(h.indexOf(u)>=0)){if(h.push(u),u.p)return f.push(u.p);var y=s=>{s||(s=new Error("Container missing")),"string"==typeof s.message&&(s.message+='\nwhile loading "'+u[1]+'" from '+u[2]),__webpack_require__.m[g]=()=>{throw s},u.p=0},c=(s,w,P,S,d,L)=>{try{var j=s(w,P);if(!j||!j.then)return d(j,S,L);var $=j.then(M=>d(M,S),y);if(!L)return $;f.push(u.p=$)}catch(M){y(M)}},p=(s,w,P)=>c(w.get,u[1],h,0,b,P),b=s=>{u.p=1,__webpack_require__.m[g]=w=>{w.exports=s()}};c(__webpack_require__,u[2],0,0,(s,w,P)=>s?c(__webpack_require__.I,u[0],0,s,p,P):y(),1)}})}})(),(()=>{__webpack_require__.S={};var o={},v={};__webpack_require__.I=(l,f)=>{f||(f=[]);var g=v[l];if(g||(g=v[l]={}),!(f.indexOf(g)>=0)){if(f.push(g),o[l])return o[l];__webpack_require__.o(__webpack_require__.S,l)||(__webpack_require__.S[l]={});var h=__webpack_require__.S[l],y="main",c=(b,s,w,P)=>{var S=h[b]=h[b]||{},d=S[s];(!d||!d.loaded&&(!P!=!d.eager?P:y>d.from))&&(S[s]={get:w,from:y,eager:!!P})},p=[];return"default"===l&&(c("@angular/common/http","13.3.12",()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(432),__webpack_require__.e(128),__webpack_require__.e(158)]).then(()=>()=>__webpack_require__(5158))),c("@angular/common","13.3.12",()=>Promise.all([__webpack_require__.e(432),__webpack_require__.e(75)]).then(()=>()=>__webpack_require__(9075))),c("@angular/core","13.3.12",()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(390)]).then(()=>()=>__webpack_require__(2390))),c("@angular/platform-browser","13.3.12",()=>Promise.all([__webpack_require__.e(432),__webpack_require__.e(128),__webpack_require__.e(585)]).then(()=>()=>__webpack_require__(6585))),c("@angular/router","13.3.12",()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(432),__webpack_require__.e(128),__webpack_require__.e(728)]).then(()=>()=>__webpack_require__(728))),c("@mfe/common","0.0.0",()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(432),__webpack_require__.e(128),__webpack_require__.e(856),__webpack_require__.e(99)]).then(()=>()=>__webpack_require__(7099))),c("@mfe/shared","0.0.0",()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(432),__webpack_require__.e(128),__webpack_require__.e(291),__webpack_require__.e(642)]).then(()=>()=>__webpack_require__(8291)))),o[l]=p.length?Promise.all(p).then(()=>o[l]=1):1}}})(),(()=>{var o;__webpack_require__.tt=()=>(void 0===o&&(o={createScriptURL:v=>v},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),__webpack_require__.tu=o=>__webpack_require__.tt().createScriptURL(o),__webpack_require__.p="/main/",(()=>{var o=e=>{var t=a=>a.split(".").map(i=>+i==i?+i:i),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},l=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(m=e[a]))[0]?"-":(n>0?".":"")+(n=2,m);return r}var i=[];for(a=1;a<e.length;a++){var m=e[a];i.push(0===m?"not("+V()+")":1===m?"("+V()+" || "+V()+")":2===m?i.pop()+" "+i.pop():l(m))}return V();function V(){return i.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=o(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var a=0,i=1,m=!0;;i++,a++){var V,F,C=i<e.length?(typeof e[i])[0]:"";if(a>=t.length||"o"==(F=(typeof(V=t[a]))[0]))return!m||("u"==C?i>r&&!n:""==C!=n);if("u"==F){if(!m||"u"!=C)return!1}else if(m)if(C==F)if(i<=r){if(V!=e[i])return!1}else{if(n?V>e[i]:V<e[i])return!1;V!=e[i]&&(m=!1)}else if("s"!=C&&"n"!=C){if(n||i<=r)return!1;m=!1,i--}else{if(i<=r||F<C!=n)return!1;m=!1}else"s"!=C&&"n"!=C&&(m=!1,i--)}}var U=[],x=U.pop.bind(U);for(a=1;a<e.length;a++){var A=e[a];U.push(1==A?x()|x():2==A?x()&x():A?f(A,t):!x())}return!!x()},u=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,a)=>!n||!r[n].loaded&&((e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],a=(typeof n)[0];if(r>=t.length)return"u"==a;var i=t[r],m=(typeof i)[0];if(a!=m)return"o"==a&&"n"==m||"s"==m||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;r++}})(n,a)?a:n,0)},y=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+l(n)+")",S=e=>(e.loaded=1,e.get()),d=e=>function(t,r,n,a){var i=__webpack_require__.I(t);return i&&i.then?i.then(e.bind(e,t,__webpack_require__.S[t],r,n,a)):e(t,__webpack_require__.S[t],r,n,a)},O=d((e,t,r,n,a)=>t&&__webpack_require__.o(t,r)?((e,t,r,n)=>{var a=u(e,r);return f(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(y(e,r,a,n)),S(e[r][a])})(t,0,r,n):a()),_=d((e,t,r,n,a)=>t&&__webpack_require__.o(t,r)?((e,t,r,n)=>{var a=u(e,r);if(!f(n,a))throw new Error(y(e,r,a,n));return S(e[r][a])})(t,0,r,n):a()),T={},z={3432:()=>O("default","@angular/core",[1,13,3,12],()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(390)]).then(()=>()=>__webpack_require__(2390))),2128:()=>O("default","@angular/common",[1,13,3,12],()=>__webpack_require__.e(75).then(()=>()=>__webpack_require__(9075))),3856:()=>O("default","@angular/common/http",[1,13,3,12],()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(158)]).then(()=>()=>__webpack_require__(5158))),4642:()=>_("default","@mfe/common",[4,0,0,0],()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(856),__webpack_require__.e(99)]).then(()=>()=>__webpack_require__(7099))),911:()=>O("default","@angular/router",[1,13,3,12],()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(728)]).then(()=>()=>__webpack_require__(728))),5740:()=>O("default","@angular/platform-browser",[1,13,3,12],()=>__webpack_require__.e(585).then(()=>()=>__webpack_require__(6585))),9652:()=>_("default","@mfe/shared",[4,0,0,0],()=>Promise.all([__webpack_require__.e(17),__webpack_require__.e(291)]).then(()=>()=>__webpack_require__(8291)))},k={128:[2128],326:[911,5740],432:[3432],642:[4642],856:[3856],923:[9652]};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(k,e)&&k[e].forEach(r=>{if(__webpack_require__.o(T,r))return t.push(T[r]);var n=m=>{T[r]=0,__webpack_require__.m[r]=V=>{delete __webpack_require__.c[r],V.exports=m()}},a=m=>{delete T[r],__webpack_require__.m[r]=V=>{throw delete __webpack_require__.c[r],m}};try{var i=z[r]();i.then?t.push(T[r]=i.then(n).catch(a)):n(i)}catch(m){a(m)}})}})(),(()=>{var o={179:0};__webpack_require__.f.j=(f,g)=>{var h=__webpack_require__.o(o,f)?o[f]:void 0;if(0!==h)if(h)g.push(h[2]);else if(/^(128|432|642|856)$/.test(f))o[f]=0;else{var u=new Promise((p,b)=>h=o[f]=[p,b]);g.push(h[2]=u);var y=__webpack_require__.p+__webpack_require__.u(f),c=new Error;__webpack_require__.l(y,p=>{if(__webpack_require__.o(o,f)&&(0!==(h=o[f])&&(o[f]=void 0),h)){var b=p&&("load"===p.type?"missing":p.type),s=p&&p.target&&p.target.src;c.message="Loading chunk "+f+" failed.\n("+b+": "+s+")",c.name="ChunkLoadError",c.type=b,c.request=s,h[1](c)}},"chunk-"+f,f)}};var v=(f,g)=>{var c,E,[h,u,y]=g,p=0;if(h.some(s=>0!==o[s])){for(c in u)__webpack_require__.o(u,c)&&(__webpack_require__.m[c]=u[c]);y&&y(__webpack_require__)}for(f&&f(g);p<h.length;p++)__webpack_require__.o(o,E=h[p])&&o[E]&&o[E][0](),o[E]=0},l=self.webpackChunkmain=self.webpackChunkmain||[];l.forEach(v.bind(null,0)),l.push=v.bind(null,l.push.bind(l))})();var __webpack_exports__=__webpack_require__(339);