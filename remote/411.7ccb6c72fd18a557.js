(self.webpackChunkremote=self.webpackChunkremote||[]).push([[411],{6411:(I,E,t)=>{t.r(E),t.d(E,{RemoteComponent:()=>L,RemoteService:()=>W,SharedModule:()=>F});var p=t(4254),n=t(1909),O=t(7178),v=t(393),c=t(5600);const d={now:()=>(d.delegate||Date).now(),delegate:void 0};class m extends c.x{constructor(l=1/0,a=1/0,M=d){super(),this._bufferSize=l,this._windowTime=a,this._timestampProvider=M,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=a===1/0,this._bufferSize=Math.max(1,l),this._windowTime=Math.max(1,a)}next(l){const{isStopped:a,_buffer:M,_infiniteTimeWindow:D,_timestampProvider:C,_windowTime:T}=this;a||(M.push(l),!D&&M.push(C.now()+T)),this._trimBuffer(),super.next(l)}_subscribe(l){this._throwIfClosed(),this._trimBuffer();const a=this._innerSubscribe(l),{_infiniteTimeWindow:M,_buffer:D}=this,C=D.slice();for(let T=0;T<C.length&&!l.closed;T+=M?1:2)l.next(C[T]);return this._checkFinalizedStatuses(l),a}_trimBuffer(){const{_bufferSize:l,_timestampProvider:a,_buffer:M,_infiniteTimeWindow:D}=this,C=(D?1:2)*l;if(l<1/0&&C<M.length&&M.splice(0,M.length-C),!D){const T=a.now();let K=0;for(let B=1;B<M.length&&M[B]<=T;B+=2)K=B;K&&M.splice(0,K+1)}}}var h=t(8018);function r(o,l,a){let M,D=!1;return o&&"object"==typeof o?({bufferSize:M=1/0,windowTime:l=1/0,refCount:D=!1,scheduler:a}=o):M=null!=o?o:1/0,(0,h.B)({connector:()=>new m(M,l,a),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:D})}var f=t(4642);let e,_;function s(o){_=o}let u=new Map,b=new Map;let R=!1;var g=t(5041),x=t(8313),S=t(3540);const j=`${location.href.slice(0,location.href.search(/\/main($|(\/))/))}/remote/`;let W=(()=>{class o{constructor(){this.remoteModule$=(0,g.of)({remote:(0,n.isDevMode)()?"http://localhost:4201/":j}).pipe((0,x.b)(s),(0,S.w)(()=>function y(o,l){return(0,p.mG)(this,void 0,void 0,function*(){const a=`${o}:${l}`;if(u.has(a))return u.get(a);const C=(yield(b.has(o)?b.get(o):yield function A(o){return(0,p.mG)(this,void 0,void 0,function*(){if(!_)throw new Error("Call setRemoteDefinitions or setRemoteUrlResolver to allow Dynamic Federation to find the remote apps correctly.");R||(R=!0,yield t.I("default"));const l=_?_[o]:yield e(o),a=`${l}${l.endsWith("/")?"":"/"}remoteEntry.mjs`,M=yield function P(o){return import(o)}(a);return yield M.init(t.S.default),b.set(o,M),M})}(o)).get(l))();return u.set(a,C),C})}("remote","./RemoteEntry")),(0,v.U)(a=>({module:a[a.REMOTE_MODULE],widgets:a.REMOTE_WIDGETS})),r(1))}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275prov=n.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var U=t(4758);function w(o,l){1&o&&n.\u0275\u0275elementContainer(0)}function $(o,l){if(1&o&&(n.\u0275\u0275elementContainerStart(0),n.\u0275\u0275template(1,w,1,0,"ng-container",1),n.\u0275\u0275elementContainerEnd()),2&o){const a=l.ngIf;n.\u0275\u0275advance(1),n.\u0275\u0275property("ngComponentOutlet",a.component)("ngComponentOutletInjector",a.injector)}}class L{constructor(l,a){this.injector=l,this.remote=a,this.remoteModule$=this.remote.remoteModule$,this.remoteWidget$=(0,O.a)([this.descriptor$,this.remoteModule$]).pipe((0,v.U)(([M,D])=>{const C=D.widgets.find(T=>T.descriptor===M);return C&&Object.assign(Object.assign({},C),{injector:(0,n.\u0275createInjector)(D.module,this.injector)})}),r(1))}}L.\u0275fac=function(l){return new(l||L)(n.\u0275\u0275directiveInject(n.Injector),n.\u0275\u0275directiveInject(W))},L.\u0275cmp=n.\u0275\u0275defineComponent({type:L,selectors:[["mfe-remote"]],inputs:{descriptor:"descriptor"},decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(l,a){1&l&&(n.\u0275\u0275template(0,$,2,2,"ng-container",0),n.\u0275\u0275pipe(1,"async")),2&l&&n.\u0275\u0275property("ngIf",n.\u0275\u0275pipeBind1(1,1,a.remoteWidget$))},directives:[U.NgIf,U.NgComponentOutlet],pipes:[U.AsyncPipe],encapsulation:2,changeDetection:0}),(0,p.gn)([(0,f.ObservableInput)()],L.prototype,"descriptor$",void 0);let F=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=n.\u0275\u0275defineInjector({imports:[[U.CommonModule,f.TestModule,f.TranslateModule]]}),o})()},5600:(I,E,t)=>{t.d(E,{x:()=>m});var p=t(509),n=t(7010);const v=(0,t(4202).d)(r=>function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var c=t(5869),d=t(9193);let m=(()=>{class r extends p.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const i=new h(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new v}next(e){(0,d.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const i of this.currentObservers)i.next(e)}})}error(e){(0,d.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){(0,d.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:i,isStopped:_,observers:s}=this;return i||_?n.Lc:(this.currentObservers=null,s.push(e),new n.w0(()=>{this.currentObservers=null,(0,c.P)(s,e)}))}_checkFinalizedStatuses(e){const{hasError:i,thrownError:_,isStopped:s}=this;i?e.error(_):s&&e.complete()}asObservable(){const e=new p.y;return e.source=this,e}}return r.create=(f,e)=>new h(f,e),r})();class h extends m{constructor(f,e){super(),this.destination=f,this.source=e}next(f){var e,i;null===(i=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===i||i.call(e,f)}error(f){var e,i;null===(i=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===i||i.call(e,f)}complete(){var f,e;null===(e=null===(f=this.destination)||void 0===f?void 0:f.complete)||void 0===e||e.call(f)}_subscribe(f){var e,i;return null!==(i=null===(e=this.source)||void 0===e?void 0:e.subscribe(f))&&void 0!==i?i:n.Lc}}},7178:(I,E,t)=>{t.d(E,{a:()=>f});var p=t(509),n=t(346),O=t(5912),v=t(2266),c=t(1873),d=t(5884),m=t(3617),h=t(4535),r=t(6952);function f(..._){const s=(0,d.yG)(_),u=(0,d.jO)(_),{args:b,keys:y}=(0,n.D)(_);if(0===b.length)return(0,O.D)([],s);const P=new p.y(function e(_,s,u=v.y){return b=>{i(s,()=>{const{length:y}=_,P=new Array(y);let R=y,A=y;for(let g=0;g<y;g++)i(s,()=>{const x=(0,O.D)(_[g],s);let S=!1;x.subscribe((0,h.x)(b,j=>{P[g]=j,S||(S=!0,A--),A||b.next(u(P.slice()))},()=>{--R||b.complete()}))},b)},b)}}(b,s,y?R=>(0,m.n)(y,R):v.y));return u?P.pipe((0,c.Z)(u)):P}function i(_,s,u){_?(0,r.f)(u,_,s):s()}},5121:(I,E,t)=>{t.d(E,{E:()=>n});const n=new(t(509).y)(c=>c.complete())},5041:(I,E,t)=>{t.d(E,{of:()=>O});var p=t(5884),n=t(5912);function O(...v){const c=(0,p.yG)(v);return(0,n.D)(v,c)}},8018:(I,E,t)=>{t.d(E,{B:()=>d});var p=t(5912),n=t(9090),O=t(5600),v=t(1984),c=t(9109);function d(h={}){const{connector:r=(()=>new O.x),resetOnError:f=!0,resetOnComplete:e=!0,resetOnRefCountZero:i=!0}=h;return _=>{let s=null,u=null,b=null,y=0,P=!1,R=!1;const A=()=>{null==u||u.unsubscribe(),u=null},g=()=>{A(),s=b=null,P=R=!1},x=()=>{const S=s;g(),null==S||S.unsubscribe()};return(0,c.e)((S,j)=>{y++,!R&&!P&&A();const W=b=null!=b?b:r();j.add(()=>{y--,0===y&&!R&&!P&&(u=m(x,i))}),W.subscribe(j),s||(s=new v.Hp({next:U=>W.next(U),error:U=>{R=!0,A(),u=m(g,f,U),W.error(U)},complete:()=>{P=!0,A(),u=m(g,e),W.complete()}}),(0,p.D)(S).subscribe(s))})(_)}}function m(h,r,...f){return!0===r?(h(),null):!1===r?null:r(...f).pipe((0,n.q)(1)).subscribe(()=>h())}},3540:(I,E,t)=>{t.d(E,{w:()=>v});var p=t(2724),n=t(9109),O=t(4535);function v(c,d){return(0,n.e)((m,h)=>{let r=null,f=0,e=!1;const i=()=>e&&!r&&h.complete();m.subscribe((0,O.x)(h,_=>{null==r||r.unsubscribe();let s=0;const u=f++;(0,p.Xf)(c(_,u)).subscribe(r=(0,O.x)(h,b=>h.next(d?d(_,b,u,s++):b),()=>{r=null,i()}))},()=>{e=!0,i()}))})}},9090:(I,E,t)=>{t.d(E,{q:()=>v});var p=t(5121),n=t(9109),O=t(4535);function v(c){return c<=0?()=>p.E:(0,n.e)((d,m)=>{let h=0;d.subscribe((0,O.x)(m,r=>{++h<=c&&(m.next(r),c<=h&&m.complete())}))})}},8313:(I,E,t)=>{t.d(E,{b:()=>c});var p=t(904),n=t(9109),O=t(4535),v=t(2266);function c(d,m,h){const r=(0,p.m)(d)||m||h?{next:d,error:m,complete:h}:d;return r?(0,n.e)((f,e)=>{var i;null===(i=r.subscribe)||void 0===i||i.call(r);let _=!0;f.subscribe((0,O.x)(e,s=>{var u;null===(u=r.next)||void 0===u||u.call(r,s),e.next(s)},()=>{var s;_=!1,null===(s=r.complete)||void 0===s||s.call(r),e.complete()},s=>{var u;_=!1,null===(u=r.error)||void 0===u||u.call(r,s),e.error(s)},()=>{var s,u;_&&(null===(s=r.unsubscribe)||void 0===s||s.call(r)),null===(u=r.finalize)||void 0===u||u.call(r)}))}):v.y}},346:(I,E,t)=>{t.d(E,{D:()=>c});const{isArray:p}=Array,{getPrototypeOf:n,prototype:O,keys:v}=Object;function c(m){if(1===m.length){const h=m[0];if(p(h))return{args:h,keys:null};if(function d(m){return m&&"object"==typeof m&&n(m)===O}(h)){const r=v(h);return{args:r.map(f=>h[f]),keys:r}}}return{args:m,keys:null}}},3617:(I,E,t)=>{function p(n,O){return n.reduce((v,c,d)=>(v[c]=O[d],v),{})}t.d(E,{n:()=>p})},1873:(I,E,t)=>{t.d(E,{Z:()=>v});var p=t(393);const{isArray:n}=Array;function v(c){return(0,p.U)(d=>function O(c,d){return n(d)?c(...d):c(d)}(c,d))}}}]);