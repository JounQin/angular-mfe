(self.webpackChunkmain=self.webpackChunkmain||[]).push([[907],{7907:(R,b,e)=>{e.r(b),e.d(b,{RemoteComponent:()=>x,RemoteService:()=>W,SharedModule:()=>F});var _=e(677),r=e(1290),E=e(1939),p=e(1589),O=e(3748);const f={now:()=>(f.delegate||Date).now(),delegate:void 0};class v extends O.x{constructor(l=1/0,u=1/0,m=f){super(),this._bufferSize=l,this._windowTime=u,this._timestampProvider=m,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=u===1/0,this._bufferSize=Math.max(1,l),this._windowTime=Math.max(1,u)}next(l){const{isStopped:u,_buffer:m,_infiniteTimeWindow:C,_timestampProvider:D,_windowTime:S}=this;u||(m.push(l),!C&&m.push(D.now()+S)),this._trimBuffer(),super.next(l)}_subscribe(l){this._throwIfClosed(),this._trimBuffer();const u=this._innerSubscribe(l),{_infiniteTimeWindow:m,_buffer:C}=this,D=C.slice();for(let S=0;S<D.length&&!l.closed;S+=m?1:2)l.next(D[S]);return this._checkFinalizedStatuses(l),u}_trimBuffer(){const{_bufferSize:l,_timestampProvider:u,_buffer:m,_infiniteTimeWindow:C}=this,D=(C?1:2)*l;if(l<1/0&&D<m.length&&m.splice(0,m.length-D),!C){const S=u.now();let K=0;for(let B=1;B<m.length&&m[B]<=S;B+=2)K=B;K&&m.splice(0,K+1)}}}var h=e(8584);function s(n,l,u){let m,C=!1;return n&&"object"==typeof n?({bufferSize:m=1/0,windowTime:l=1/0,refCount:C=!1,scheduler:u}=n):m=null!=n?n:1/0,(0,h.B)({connector:()=>new v(m,l,u),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:C})}var c=e(4642);let t,a;function o(n){a=n}let d=new Map,M=new Map;let P=!1;var U=e(1587),g=e(8065),T=e(2066);const j=`${location.href.slice(0,location.href.search(/\/main($|(\/))/))}/remote/`;let W=(()=>{class n{constructor(){this.remoteModule$=(0,U.of)({remote:(0,r.isDevMode)()?"http://localhost:4201/":j}).pipe((0,g.b)(o),(0,T.w)(()=>function y(n,l){return(0,_.mG)(this,void 0,void 0,function*(){const u=`${n}:${l}`;if(d.has(u))return d.get(u);const D=(yield(M.has(n)?M.get(n):yield function A(n){return(0,_.mG)(this,void 0,void 0,function*(){if(!a)throw new Error("Call setRemoteDefinitions or setRemoteUrlResolver to allow Dynamic Federation to find the remote apps correctly.");P||(P=!0,yield e.I("default"));const l=a?a[n]:yield t(n),u=`${l}${l.endsWith("/")?"":"/"}remoteEntry.mjs`,m=yield function I(n){return import(n)}(u);return yield m.init(e.S.default),M.set(n,m),m})}(n)).get(l))();return d.set(u,D),D})}("remote","./RemoteEntry")),(0,p.U)(u=>({module:u[u.REMOTE_MODULE],widgets:u.REMOTE_WIDGETS})),s(1))}}return n.\u0275fac=function(u){return new(u||n)},n.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var L=e(5720);function w(n,l){1&n&&r.\u0275\u0275elementContainer(0)}function $(n,l){if(1&n&&(r.\u0275\u0275elementContainerStart(0),r.\u0275\u0275template(1,w,1,0,"ng-container",1),r.\u0275\u0275elementContainerEnd()),2&n){const u=l.ngIf;r.\u0275\u0275advance(1),r.\u0275\u0275property("ngComponentOutlet",u.component)("ngComponentOutletInjector",u.injector)}}class x{constructor(l,u){this.injector=l,this.remote=u,this.remoteModule$=this.remote.remoteModule$,this.remoteWidget$=(0,E.a)([this.descriptor$,this.remoteModule$]).pipe((0,p.U)(([m,C])=>{const D=C.widgets.find(S=>S.descriptor===m);return D&&Object.assign(Object.assign({},D),{injector:(0,r.\u0275createInjector)(C.module,this.injector)})}),s(1))}}x.\u0275fac=function(l){return new(l||x)(r.\u0275\u0275directiveInject(r.Injector),r.\u0275\u0275directiveInject(W))},x.\u0275cmp=r.\u0275\u0275defineComponent({type:x,selectors:[["mfe-remote"]],inputs:{descriptor:"descriptor"},decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(l,u){1&l&&(r.\u0275\u0275template(0,$,2,2,"ng-container",0),r.\u0275\u0275pipe(1,"async")),2&l&&r.\u0275\u0275property("ngIf",r.\u0275\u0275pipeBind1(1,1,u.remoteWidget$))},directives:[L.NgIf,L.NgComponentOutlet],pipes:[L.AsyncPipe],encapsulation:2,changeDetection:0}),(0,_.gn)([(0,c.ObservableInput)()],x.prototype,"descriptor$",void 0);let F=(()=>{class n{}return n.\u0275fac=function(u){return new(u||n)},n.\u0275mod=r.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=r.\u0275\u0275defineInjector({imports:[[L.CommonModule,c.TestModule,c.TranslateModule]]}),n})()},3748:(R,b,e)=>{e.d(b,{x:()=>v});var _=e(528),r=e(6257);const p=(0,e(3700).d)(s=>function(){s(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var O=e(462),f=e(2800);let v=(()=>{class s extends _.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const i=new h(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new p}next(t){(0,f.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const i of this.currentObservers)i.next(t)}})}error(t){(0,f.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){(0,f.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:i,isStopped:a,observers:o}=this;return i||a?r.Lc:(this.currentObservers=null,o.push(t),new r.w0(()=>{this.currentObservers=null,(0,O.P)(o,t)}))}_checkFinalizedStatuses(t){const{hasError:i,thrownError:a,isStopped:o}=this;i?t.error(a):o&&t.complete()}asObservable(){const t=new _.y;return t.source=this,t}}return s.create=(c,t)=>new h(c,t),s})();class h extends v{constructor(c,t){super(),this.destination=c,this.source=t}next(c){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===i||i.call(t,c)}error(c){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===i||i.call(t,c)}complete(){var c,t;null===(t=null===(c=this.destination)||void 0===c?void 0:c.complete)||void 0===t||t.call(c)}_subscribe(c){var t,i;return null!==(i=null===(t=this.source)||void 0===t?void 0:t.subscribe(c))&&void 0!==i?i:r.Lc}}},1939:(R,b,e)=>{e.d(b,{a:()=>c});var _=e(528),r=e(9666),E=e(9980),p=e(9512),O=e(6856),f=e(600),v=e(4917),h=e(6569),s=e(1602);function c(...a){const o=(0,f.yG)(a),d=(0,f.jO)(a),{args:M,keys:y}=(0,r.D)(a);if(0===M.length)return(0,E.D)([],o);const I=new _.y(function t(a,o,d=p.y){return M=>{i(o,()=>{const{length:y}=a,I=new Array(y);let P=y,A=y;for(let U=0;U<y;U++)i(o,()=>{const g=(0,E.D)(a[U],o);let T=!1;g.subscribe((0,h.x)(M,j=>{I[U]=j,T||(T=!0,A--),A||M.next(d(I.slice()))},()=>{--P||M.complete()}))},M)},M)}}(M,o,y?P=>(0,v.n)(y,P):p.y));return d?I.pipe((0,O.Z)(d)):I}function i(a,o,d){a?(0,s.f)(d,a,o):o()}},1587:(R,b,e)=>{e.d(b,{of:()=>E});var _=e(600),r=e(9980);function E(...p){const O=(0,_.yG)(p);return(0,r.D)(p,O)}},8584:(R,b,e)=>{e.d(b,{B:()=>O});var _=e(5699),r=e(3748),E=e(1719),p=e(5922);function O(v={}){const{connector:h=(()=>new r.x),resetOnError:s=!0,resetOnComplete:c=!0,resetOnRefCountZero:t=!0}=v;return i=>{let a,o,d,M=0,y=!1,I=!1;const P=()=>{null==o||o.unsubscribe(),o=void 0},A=()=>{P(),a=d=void 0,y=I=!1},U=()=>{const g=a;A(),null==g||g.unsubscribe()};return(0,p.e)((g,T)=>{M++,!I&&!y&&P();const j=d=null!=d?d:h();T.add(()=>{M--,0===M&&!I&&!y&&(o=f(U,t))}),j.subscribe(T),!a&&M>0&&(a=new E.Hp({next:W=>j.next(W),error:W=>{I=!0,P(),o=f(A,s,W),j.error(W)},complete:()=>{y=!0,P(),o=f(A,c),j.complete()}}),(0,_.Xf)(g).subscribe(a))})(i)}}function f(v,h,...s){if(!0===h)return void v();if(!1===h)return;const c=new E.Hp({next:()=>{c.unsubscribe(),v()}});return h(...s).subscribe(c)}},2066:(R,b,e)=>{e.d(b,{w:()=>p});var _=e(5699),r=e(5922),E=e(6569);function p(O,f){return(0,r.e)((v,h)=>{let s=null,c=0,t=!1;const i=()=>t&&!s&&h.complete();v.subscribe((0,E.x)(h,a=>{null==s||s.unsubscribe();let o=0;const d=c++;(0,_.Xf)(O(a,d)).subscribe(s=(0,E.x)(h,M=>h.next(f?f(a,M,d,o++):M),()=>{s=null,i()}))},()=>{t=!0,i()}))})}},8065:(R,b,e)=>{e.d(b,{b:()=>O});var _=e(3705),r=e(5922),E=e(6569),p=e(9512);function O(f,v,h){const s=(0,_.m)(f)||v||h?{next:f,error:v,complete:h}:f;return s?(0,r.e)((c,t)=>{var i;null===(i=s.subscribe)||void 0===i||i.call(s);let a=!0;c.subscribe((0,E.x)(t,o=>{var d;null===(d=s.next)||void 0===d||d.call(s,o),t.next(o)},()=>{var o;a=!1,null===(o=s.complete)||void 0===o||o.call(s),t.complete()},o=>{var d;a=!1,null===(d=s.error)||void 0===d||d.call(s,o),t.error(o)},()=>{var o,d;a&&(null===(o=s.unsubscribe)||void 0===o||o.call(s)),null===(d=s.finalize)||void 0===d||d.call(s)}))}):p.y}},9666:(R,b,e)=>{e.d(b,{D:()=>O});const{isArray:_}=Array,{getPrototypeOf:r,prototype:E,keys:p}=Object;function O(v){if(1===v.length){const h=v[0];if(_(h))return{args:h,keys:null};if(function f(v){return v&&"object"==typeof v&&r(v)===E}(h)){const s=p(h);return{args:s.map(c=>h[c]),keys:s}}}return{args:v,keys:null}}},4917:(R,b,e)=>{function _(r,E){return r.reduce((p,O,f)=>(p[O]=E[f],p),{})}e.d(b,{n:()=>_})},6856:(R,b,e)=>{e.d(b,{Z:()=>p});var _=e(1589);const{isArray:r}=Array;function p(O){return(0,_.U)(f=>function E(O,f){return r(f)?O(...f):O(f)}(O,f))}}}]);