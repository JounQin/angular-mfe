(self.webpackChunkmain=self.webpackChunkmain||[]).push([[204],{5041:(K,w,c)=>{c.d(w,{of:()=>P});var m=c(5884),i=c(5912);function P(...v){const C=(0,m.yG)(v);return(0,i.D)(v,C)}},7555:(K,w,c)=>{c.d(w,{b:()=>P});var m=c(2151),i=c(904);function P(v,C){return(0,i.m)(C)?(0,m.z)(v,C,1):(0,m.z)(v,1)}},7295:(K,w,c)=>{c.d(w,{h:()=>P});var m=c(9109),i=c(4535);function P(v,C){return(0,m.e)((B,H)=>{let R=0;B.subscribe((0,i.x)(H,T=>v.call(C,T,R++)&&H.next(T)))})}},2151:(K,w,c)=>{c.d(w,{z:()=>R});var m=c(393),i=c(2724),P=c(9109),v=c(6952),C=c(4535),H=c(904);function R(T,u,N=1/0){return(0,H.m)(u)?R((M,O)=>(0,m.U)((S,I)=>u(M,S,O,I))((0,i.Xf)(T(M,O))),N):("number"==typeof u&&(N=u),(0,P.e)((M,O)=>function B(T,u,N,M,O,S,I,_){const E=[];let k=0,W=0,$=!1;const X=()=>{$&&!E.length&&!k&&u.complete()},z=j=>k<M?A(j):E.push(j),A=j=>{S&&u.next(j),k++;let x=!1;(0,i.Xf)(N(j,W++)).subscribe((0,C.x)(u,d=>{null==O||O(d),S?z(d):u.next(d)},()=>{x=!0},void 0,()=>{if(x)try{for(k--;E.length&&k<M;){const d=E.shift();I?(0,v.f)(u,I,()=>A(d)):A(d)}X()}catch(d){u.error(d)}}))};return T.subscribe((0,C.x)(u,z,()=>{$=!0,X()})),()=>{null==_||_()}}(M,O,T,N)))}},204:(K,w,c)=>{c.r(w),c.d(w,{HTTP_INTERCEPTORS:()=>Y,HttpBackend:()=>T,HttpClient:()=>ie,HttpClientJsonpModule:()=>we,HttpClientModule:()=>be,HttpClientXsrfModule:()=>he,HttpContext:()=>W,HttpContextToken:()=>k,HttpErrorResponse:()=>J,HttpEventType:()=>d,HttpHandler:()=>R,HttpHeaderResponse:()=>G,HttpHeaders:()=>u,HttpParams:()=>E,HttpRequest:()=>x,HttpResponse:()=>L,HttpResponseBase:()=>V,HttpUrlEncodingCodec:()=>N,HttpXhrBackend:()=>ee,HttpXsrfTokenExtractor:()=>ne,JsonpClientBackend:()=>q,JsonpInterceptor:()=>de,XhrFactory:()=>Oe,\u0275HttpInterceptingHandler:()=>ce});var m=c(4758),i=c(1909),P=c(5041),v=c(509),C=c(7555),B=c(7295),H=c(393);class R{}class T{}class u{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),o=n.toLowerCase(),l=e.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof u?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new u;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof u?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const o=t.value;if(o){let l=this.headers.get(e);if(!l)return;l=l.filter(p=>-1===o.indexOf(p)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class N{encodeKey(t){return I(t)}encodeValue(t){return I(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const O=/%(\d[a-f0-9])/gi,S={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function I(s){return encodeURIComponent(s).replace(O,(t,e)=>{var r;return null!==(r=S[e])&&void 0!==r?r:t})}function _(s){return`${s}`}class E{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new N,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function M(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[l,p]=-1==o?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,o)),t.decodeValue(n.slice(o+1))],a=e.get(l)||[];a.push(p),e.set(l,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e];this.map.set(e,Array.isArray(r)?r:[r])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new E({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(_(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(_(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class k{constructor(t){this.defaultValue=t}}class W{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function X(s){return"undefined"!=typeof ArrayBuffer&&s instanceof ArrayBuffer}function z(s){return"undefined"!=typeof Blob&&s instanceof Blob}function A(s){return"undefined"!=typeof FormData&&s instanceof FormData}class x{constructor(t,e,r,n){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function $(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new u),this.context||(this.context=new W),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const p=e.indexOf("?");this.urlWithParams=e+(-1===p?"?":p<e.length-1?"&":"")+l}}else this.params=new E,this.urlWithParams=e}serializeBody(){return null===this.body?null:X(this.body)||z(this.body)||A(this.body)||function j(s){return"undefined"!=typeof URLSearchParams&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof E?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||A(this.body)?null:z(this.body)?this.body.type||null:X(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof E?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var e;const r=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,l=void 0!==t.body?t.body:this.body,p=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let y=t.headers||this.headers,D=t.params||this.params;const U=null!==(e=t.context)&&void 0!==e?e:this.context;return void 0!==t.setHeaders&&(y=Object.keys(t.setHeaders).reduce((b,h)=>b.set(h,t.setHeaders[h]),y)),t.setParams&&(D=Object.keys(t.setParams).reduce((b,h)=>b.set(h,t.setParams[h]),D)),new x(r,n,l,{params:D,headers:y,context:U,reportProgress:a,responseType:o,withCredentials:p})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class V{constructor(t,e=200,r="OK"){this.headers=t.headers||new u,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class G extends V{constructor(t={}){super(t),this.type=d.ResponseHeader}clone(t={}){return new G({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class L extends V{constructor(t={}){super(t),this.type=d.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new L({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class J extends V{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function Q(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let ie=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let o;if(e instanceof x)o=e;else{let a,y;a=n.headers instanceof u?n.headers:new u(n.headers),n.params&&(y=n.params instanceof E?n.params:new E({fromObject:n.params})),o=new x(e,r,void 0!==n.body?n.body:null,{headers:a,context:n.context,params:y,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const l=(0,P.of)(o).pipe((0,C.b)(a=>this.handler.handle(a)));if(e instanceof x||"events"===n.observe)return l;const p=l.pipe((0,B.h)(a=>a instanceof L));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return p.pipe((0,H.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return p.pipe((0,H.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return p.pipe((0,H.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return p.pipe((0,H.U)(a=>a.body))}case"response":return p;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new E).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,Q(n,r))}post(e,r,n={}){return this.request("POST",e,Q(n,r))}put(e,r,n={}){return this.request("PUT",e,Q(n,r))}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(R))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class ae{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const Y=new i.InjectionToken("HTTP_INTERCEPTORS");let Z,pe=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),fe=0;class le{}let q=(()=>{class s{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+fe++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");return new v.y(r=>{const n=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),l=this.document.createElement("script");l.src=o;let p=null,a=!1;this.callbackMap[n]=b=>{delete this.callbackMap[n],p=b,a=!0};const y=()=>{l.parentNode&&l.parentNode.removeChild(l),delete this.callbackMap[n]};return l.addEventListener("load",b=>{this.resolvedPromise.then(()=>{y(),a?(r.next(new L({body:p,status:200,statusText:"OK",url:o})),r.complete()):r.error(new J({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),l.addEventListener("error",b=>{y(),r.error(new J({error:b,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(l),r.next({type:d.Sent}),()=>{a||this.removeListeners(l),y()}})}removeListeners(e){Z||(Z=this.document.implementation.createHTMLDocument()),Z.adoptNode(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(le),i.\u0275\u0275inject(m.DOCUMENT))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),de=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,r){return"JSONP"===e.method?this.jsonp.handle(e):r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(q))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const ge=/^\)\]\}',?\n/;let ee=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new v.y(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((h,f)=>n.setRequestHeader(h,f.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const h=e.detectContentTypeHeader();null!==h&&n.setRequestHeader("Content-Type",h)}if(e.responseType){const h=e.responseType.toLowerCase();n.responseType="json"!==h?h:"text"}const o=e.serializeBody();let l=null;const p=()=>{if(null!==l)return l;const h=n.statusText||"OK",f=new u(n.getAllResponseHeaders()),F=function ve(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return l=new G({headers:f,status:n.status,statusText:h,url:F}),l},a=()=>{let{headers:h,status:f,statusText:F,url:ue}=p(),g=null;204!==f&&(g=void 0===n.response?n.responseText:n.response),0===f&&(f=g?200:0);let oe=f>=200&&f<300;if("json"===e.responseType&&"string"==typeof g){const Pe=g;g=g.replace(ge,"");try{g=""!==g?JSON.parse(g):null}catch(He){g=Pe,oe&&(oe=!1,g={error:He,text:g})}}oe?(r.next(new L({body:g,headers:h,status:f,statusText:F,url:ue||void 0})),r.complete()):r.error(new J({error:g,headers:h,status:f,statusText:F,url:ue||void 0}))},y=h=>{const{url:f}=p(),F=new J({error:h,status:n.status||0,statusText:n.statusText||"Unknown Error",url:f||void 0});r.error(F)};let D=!1;const U=h=>{D||(r.next(p()),D=!0);let f={type:d.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),"text"===e.responseType&&!!n.responseText&&(f.partialText=n.responseText),r.next(f)},b=h=>{let f={type:d.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),r.next(f)};return n.addEventListener("load",a),n.addEventListener("error",y),n.addEventListener("timeout",y),n.addEventListener("abort",y),e.reportProgress&&(n.addEventListener("progress",U),null!==o&&n.upload&&n.upload.addEventListener("progress",b)),n.send(o),r.next({type:d.Sent}),()=>{n.removeEventListener("error",y),n.removeEventListener("abort",y),n.removeEventListener("load",a),n.removeEventListener("timeout",y),e.reportProgress&&(n.removeEventListener("progress",U),null!==o&&n.upload&&n.upload.removeEventListener("progress",b)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(m.XhrFactory))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const te=new i.InjectionToken("XSRF_COOKIE_NAME"),se=new i.InjectionToken("XSRF_HEADER_NAME");class ne{}let Ce=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,m.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(m.DOCUMENT),i.\u0275\u0275inject(i.PLATFORM_ID),i.\u0275\u0275inject(te))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),re=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(ne),i.\u0275\u0275inject(se))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ce=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(Y,[]);this.chain=r.reduceRight((n,o)=>new ae(n,o),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(T),i.\u0275\u0275inject(i.Injector))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function Te(){return"object"==typeof window?window:{}}let he=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:re,useClass:pe}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:te,useValue:e.cookieName}:[],e.headerName?{provide:se,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[re,{provide:Y,useExisting:re,multi:!0},{provide:ne,useClass:Ce},{provide:te,useValue:"XSRF-TOKEN"},{provide:se,useValue:"X-XSRF-TOKEN"}]}),s})(),be=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[ie,{provide:R,useClass:ce},ee,{provide:T,useExisting:ee}],imports:[[he.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),s})(),we=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[q,{provide:le,useFactory:Te},{provide:Y,useClass:de,multi:!0}]}),s})();const Oe=m.XhrFactory}}]);