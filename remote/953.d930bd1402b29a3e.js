(self.webpackChunkremote=self.webpackChunkremote||[]).push([[953],{3118:(K,T,f)=>{f.d(T,{of:()=>N});var E=f(1206),i=f(4695);function N(...b){const w=(0,E.yG)(b);return(0,i.D)(b,w)}},1421:(K,T,f)=>{f.d(T,{b:()=>N});var E=f(7013),i=f(1459);function N(b,w){return(0,i.m)(w)?(0,E.z)(b,w,1):(0,E.z)(b,1)}},953:(K,T,f)=>{f.r(T),f.d(T,{HTTP_INTERCEPTORS:()=>D,HttpBackend:()=>j,HttpClient:()=>q,HttpClientJsonpModule:()=>we,HttpClientModule:()=>Te,HttpClientXsrfModule:()=>re,HttpContext:()=>G,HttpContextToken:()=>ce,HttpErrorResponse:()=>R,HttpEventType:()=>c,HttpHandler:()=>I,HttpHeaderResponse:()=>k,HttpHeaders:()=>g,HttpParams:()=>v,HttpRequest:()=>P,HttpResponse:()=>H,HttpResponseBase:()=>_,HttpUrlEncodingCodec:()=>W,HttpXhrBackend:()=>U,HttpXsrfTokenExtractor:()=>z,JsonpClientBackend:()=>L,JsonpInterceptor:()=>se,XhrFactory:()=>Pe,\u0275HttpInterceptingHandler:()=>ne});var E=f(4758),i=f(1909),N=f(3118),b=f(9340),w=f(1421),ie=f(864),x=f(1572);class I{}class j{}class g{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),o=n.toLowerCase(),l=e.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof g?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new g;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof g?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const o=t.value;if(o){let l=this.headers.get(e);if(!l)return;l=l.filter(h=>-1===o.indexOf(h)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class W{encodeKey(t){return $(t)}encodeValue(t){return $(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const le=/%(\d[a-f0-9])/gi,de={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function $(s){return encodeURIComponent(s).replace(le,(t,e)=>{var r;return null!==(r=de[e])&&void 0!==r?r:t})}function V(s){return`${s}`}class v{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new W,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ae(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[l,h]=-1==o?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,o)),t.decodeValue(n.slice(o+1))],a=e.get(l)||[];a.push(h),e.set(l,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e];this.map.set(e,Array.isArray(r)?r:[r])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new v({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(V(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(V(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class ce{constructor(t){this.defaultValue=t}}class G{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function Y(s){return"undefined"!=typeof ArrayBuffer&&s instanceof ArrayBuffer}function Q(s){return"undefined"!=typeof Blob&&s instanceof Blob}function Z(s){return"undefined"!=typeof FormData&&s instanceof FormData}class P{constructor(t,e,r,n){let o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function he(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new g),this.context||(this.context=new G),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const h=e.indexOf("?");this.urlWithParams=e+(-1===h?"?":h<e.length-1?"&":"")+l}}else this.params=new v,this.urlWithParams=e}serializeBody(){return null===this.body?null:Y(this.body)||Q(this.body)||Z(this.body)||function ue(s){return"undefined"!=typeof URLSearchParams&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof v?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Z(this.body)?null:Q(this.body)?this.body.type||null:Y(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var e;const r=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,l=void 0!==t.body?t.body:this.body,h=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let p=t.headers||this.headers,C=t.params||this.params;const O=null!==(e=t.context)&&void 0!==e?e:this.context;return void 0!==t.setHeaders&&(p=Object.keys(t.setHeaders).reduce((m,d)=>m.set(d,t.setHeaders[d]),p)),t.setParams&&(C=Object.keys(t.setParams).reduce((m,d)=>m.set(d,t.setParams[d]),C)),new P(r,n,l,{params:C,headers:p,context:O,reportProgress:a,responseType:o,withCredentials:h})}}var c=(()=>((c=c||{})[c.Sent=0]="Sent",c[c.UploadProgress=1]="UploadProgress",c[c.ResponseHeader=2]="ResponseHeader",c[c.DownloadProgress=3]="DownloadProgress",c[c.Response=4]="Response",c[c.User=5]="User",c))();class _{constructor(t,e=200,r="OK"){this.headers=t.headers||new g,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class k extends _{constructor(t={}){super(t),this.type=c.ResponseHeader}clone(t={}){return new k({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class H extends _{constructor(t={}){super(t),this.type=c.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new H({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class R extends _{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function S(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let q=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let o;if(e instanceof P)o=e;else{let a,p;a=n.headers instanceof g?n.headers:new g(n.headers),n.params&&(p=n.params instanceof v?n.params:new v({fromObject:n.params})),o=new P(e,r,void 0!==n.body?n.body:null,{headers:a,context:n.context,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const l=(0,N.of)(o).pipe((0,w.b)(a=>this.handler.handle(a)));if(e instanceof P||"events"===n.observe)return l;const h=l.pipe((0,ie.h)(a=>a instanceof H));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe((0,x.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return h.pipe((0,x.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return h.pipe((0,x.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return h.pipe((0,x.U)(a=>a.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new v).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,S(n,r))}post(e,r,n={}){return this.request("POST",e,S(n,r))}put(e,r,n={}){return this.request("PUT",e,S(n,r))}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(I))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();class ee{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const D=new i.InjectionToken("HTTP_INTERCEPTORS");let A,pe=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),fe=0;class te{}let L=(()=>{class s{constructor(e,r){this.callbackMap=e,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+fe++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");return new b.y(r=>{const n=this.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${n}$1`),l=this.document.createElement("script");l.src=o;let h=null,a=!1;this.callbackMap[n]=m=>{delete this.callbackMap[n],h=m,a=!0};const p=()=>{l.parentNode&&l.parentNode.removeChild(l),delete this.callbackMap[n]};return l.addEventListener("load",m=>{this.resolvedPromise.then(()=>{p(),a?(r.next(new H({body:h,status:200,statusText:"OK",url:o})),r.complete()):r.error(new R({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),l.addEventListener("error",m=>{p(),r.error(new R({error:m,status:0,statusText:"JSONP Error",url:o}))}),this.document.body.appendChild(l),r.next({type:c.Sent}),()=>{a||this.removeListeners(l),p()}})}removeListeners(e){A||(A=this.document.implementation.createHTMLDocument()),A.adoptNode(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(te),i.\u0275\u0275inject(E.DOCUMENT))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),se=(()=>{class s{constructor(e){this.jsonp=e}intercept(e,r){return"JSONP"===e.method?this.jsonp.handle(e):r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(L))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const ge=/^\)\]\}',?\n/;let U=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new b.y(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((d,u)=>n.setRequestHeader(d,u.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const d=e.detectContentTypeHeader();null!==d&&n.setRequestHeader("Content-Type",d)}if(e.responseType){const d=e.responseType.toLowerCase();n.responseType="json"!==d?d:"text"}const o=e.serializeBody();let l=null;const h=()=>{if(null!==l)return l;const d=n.statusText||"OK",u=new g(n.getAllResponseHeaders()),M=function ve(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return l=new k({headers:u,status:n.status,statusText:d,url:M}),l},a=()=>{let{headers:d,status:u,statusText:M,url:oe}=h(),y=null;204!==u&&(y=void 0===n.response?n.responseText:n.response),0===u&&(u=y?200:0);let X=u>=200&&u<300;if("json"===e.responseType&&"string"==typeof y){const He=y;y=y.replace(ge,"");try{y=""!==y?JSON.parse(y):null}catch(Oe){y=He,X&&(X=!1,y={error:Oe,text:y})}}X?(r.next(new H({body:y,headers:d,status:u,statusText:M,url:oe||void 0})),r.complete()):r.error(new R({error:y,headers:d,status:u,statusText:M,url:oe||void 0}))},p=d=>{const{url:u}=h(),M=new R({error:d,status:n.status||0,statusText:n.statusText||"Unknown Error",url:u||void 0});r.error(M)};let C=!1;const O=d=>{C||(r.next(h()),C=!0);let u={type:c.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(u.total=d.total),"text"===e.responseType&&!!n.responseText&&(u.partialText=n.responseText),r.next(u)},m=d=>{let u={type:c.UploadProgress,loaded:d.loaded};d.lengthComputable&&(u.total=d.total),r.next(u)};return n.addEventListener("load",a),n.addEventListener("error",p),n.addEventListener("timeout",p),n.addEventListener("abort",p),e.reportProgress&&(n.addEventListener("progress",O),null!==o&&n.upload&&n.upload.addEventListener("progress",m)),n.send(o),r.next({type:c.Sent}),()=>{n.removeEventListener("error",p),n.removeEventListener("abort",p),n.removeEventListener("load",a),n.removeEventListener("timeout",p),e.reportProgress&&(n.removeEventListener("progress",O),null!==o&&n.upload&&n.upload.removeEventListener("progress",m)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(E.XhrFactory))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();const F=new i.InjectionToken("XSRF_COOKIE_NAME"),B=new i.InjectionToken("XSRF_HEADER_NAME");class z{}let be=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,E.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(E.DOCUMENT),i.\u0275\u0275inject(i.PLATFORM_ID),i.\u0275\u0275inject(F))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),J=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const o=this.tokenService.getToken();return null!==o&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,o)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(z),i.\u0275\u0275inject(B))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),ne=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(D,[]);this.chain=r.reduceRight((n,o)=>new ee(n,o),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(j),i.\u0275\u0275inject(i.Injector))},s.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})();function Ce(){return"object"==typeof window?window:{}}let re=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:J,useClass:pe}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:F,useValue:e.cookieName}:[],e.headerName?{provide:B,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[J,{provide:D,useExisting:J,multi:!0},{provide:z,useClass:be},{provide:F,useValue:"XSRF-TOKEN"},{provide:B,useValue:"X-XSRF-TOKEN"}]}),s})(),Te=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[q,{provide:I,useClass:ne},U,{provide:j,useExisting:U}],imports:[[re.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),s})(),we=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=i.\u0275\u0275defineInjector({providers:[L,{provide:te,useFactory:Ce},{provide:D,useClass:se,multi:!0}]}),s})();const Pe=E.XhrFactory}}]);