(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[8592],{8794:(t,e,n)=>{"use strict";n.d(e,{z:()=>s});var i=n(1572);let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["syncspace-crypto-analysis-no-content"]],decls:5,vars:0,consts:[[1,"image-section"],["src","/assets/images/undraw_blank_canvas_3rbb.svg","alt","no content found"],[1,"text-section","text-center","text-danger"]],template:function(t,e){1&t&&(i.TgZ(0,"main"),i.TgZ(1,"div",0),i._UZ(2,"img",1),i.qZA(),i.TgZ(3,"div",2),i._uU(4," NO CONTENT "),i.qZA(),i.qZA())},styles:["main[_ngcontent-%COMP%]{width:100%;height:300px}main[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]{width:100%;height:90%}main[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}main[_ngcontent-%COMP%]   .text-section[_ngcontent-%COMP%]{padding:5px 15px;width:100%;height:10%;text-align:center;font-size:20px;letter-spacing:1.5px}"]}),t})()},2690:(t,e,n)=>{"use strict";n.d(e,{gS:()=>f});var i=n(6673);function s(t=-1){return e=>e.lift(new r(t,e))}class r{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new a(t,this.count,this.source))}}class a extends i.L{constructor(t,e,n){super(t),this.count=e,this.source=n}error(t){if(!this.isStopped){const{source:e,count:n}=this;if(0===n)return super.error(t);n>-1&&(this.count=n-1),e.subscribe(this._unsubscribeAndRecycle())}}}var o=n(8569);const c={leading:!0,trailing:!1};function l(t,e=o.P,n=c){return i=>i.lift(new u(t,e,n.leading,n.trailing))}class u{constructor(t,e,n,i){this.duration=t,this.scheduler=e,this.leading=n,this.trailing=i}call(t,e){return e.subscribe(new h(t,this.duration,this.scheduler,this.leading,this.trailing))}}class h extends i.L{constructor(t,e,n,i,s){super(t),this.duration=e,this.scheduler=n,this.leading=i,this.trailing=s,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(d,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function d(t){const{subscriber:e}=t;e.clearThrottle()}var p=n(1572),g=n(9063);let f=(()=>{class t extends class{constructor(t,e){this._baseURL=t,this._httpClient=e}post(t,e){return this._httpClient.post(`${this._baseURL}/${e}`,t)}get(t){return this._httpClient.get(`${this._baseURL}/${t}`)}patch(t,e){return this._httpClient.patch(`${this._baseURL}/${e}`,t)}delete(t){return this._httpClient.delete(`${this._baseURL}/${t}`)}}{constructor(t){super("https://abel-ani.herokuapp.com",t),this.httpClient=t}uploadFile(t){const e=new FormData;return e.append("file",t),this.post(e,"upload-file").pipe(s(3),l(500))}uploadMultipleFiles(t){const e=new FormData;for(const n of t)e.append("files[]",n);return this.post(e,"upload-multiple-files").pipe(s(3),l(500))}}return t.\u0275fac=function(e){return new(e||t)(p.LFG(g.eN))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},8493:(t,e,n)=>{"use strict";n.d(e,{F:()=>s});var i=n(1572);let s=(()=>{class t{transform(t,e=10){return(null==t?void 0:t.length)>e?`${t.substr(0,e)}...`:t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Yjl({name:"summarizeContent",type:t,pure:!0}),t})()},8232:(t,e,n)=>{"use strict";n.d(e,{c:()=>a});var i=n(2322),s=n(3320),r=n(8520);const a=(t,e)=>{let n,a;const o=(t,i,s)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),c(r,s)):l()},c=(t,e)=>{n=t,a||(a=n);const s=n;(0,i.c)(()=>s.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,i.c)(()=>e.classList.remove("ion-activated")),t&&a!==n&&n.click(),n=void 0};return(0,r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>o(t.currentX,t.currentY,s.a),onMove:t=>o(t.currentX,t.currentY,s.b),onEnd:()=>{l(!0),(0,s.h)(),a=void 0}})}},4068:(t,e,n)=>{"use strict";n.d(e,{g:()=>i});const i=(t,e,n,i,a)=>r(t[1],e[1],n[1],i[1],a).map(r=>s(t[0],e[0],n[0],i[0],r)),s=(t,e,n,i,s)=>s*(3*e*Math.pow(s-1,2)+s*(-3*n*s+3*n+i*s))-t*Math.pow(s-1,3),r=(t,e,n,i,s)=>a((i-=s)-3*(n-=s)+3*(e-=s)-(t-=s),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),a=(t,e,n,i)=>{if(0===t)return((t,e,n)=>{const i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]})(e,n,i);const s=(3*(n/=t)-(e/=t)*e)/3,r=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===s)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-s),-Math.sqrt(-s)];const a=Math.pow(r/2,2)+Math.pow(s/3,3);if(0===a)return[Math.pow(r/2,.5)-e/3];if(a>0)return[Math.pow(-r/2+Math.sqrt(a),1/3)-Math.pow(r/2+Math.sqrt(a),1/3)-e/3];const o=Math.sqrt(Math.pow(-s/3,3)),c=Math.acos(-r/(2*Math.sqrt(Math.pow(-s/3,3)))),l=2*Math.pow(o,1/3);return[l*Math.cos(c/3)-e/3,l*Math.cos((c+2*Math.PI)/3)-e/3,l*Math.cos((c+4*Math.PI)/3)-e/3]}},9498:(t,e,n)=>{"use strict";n.d(e,{a:()=>s,d:()=>r});var i=n(1843);const s=async(t,e,n,s,r)=>{if(t)return t.attachViewToDom(e,n,r,s);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return s&&s.forEach(t=>a.classList.add(t)),r&&Object.assign(a,r),e.appendChild(a),await new Promise(t=>(0,i.c)(a,t)),a},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},3320:(t,e,n)=>{"use strict";n.d(e,{a:()=>r,b:()=>a,c:()=>s,d:()=>c,h:()=>o});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{i.selection()},r=()=>{i.selectionStart()},a=()=>{i.selectionChanged()},o=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},7942:(t,e,n)=>{"use strict";n.d(e,{s:()=>i});const i=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!a()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const a=r(t);for(let e=0;e<a.length;e++)s(a[e])}});const i=r(e);for(let t=0;t<i.length;t++)s(i[t]);const o=document.createElement("div");o.appendChild(e);const l=o.querySelector("div");return null!==l?l.innerHTML:o.innerHTML}catch(e){return console.error(e),""}},s=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!o.includes(i.toLowerCase())){t.removeAttribute(i);continue}const s=e.value;null!=s&&s.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=r(t);for(let n=0;n<e.length;n++)s(e[n])},r=t=>null!=t.children?t.children:t.childNodes,a=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},o=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},9926:(t,e,n)=>{"use strict";n.d(e,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,s=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},4843:(t,e,n)=>{"use strict";n.d(e,{c:()=>s,g:()=>r,h:()=>i,o:()=>o});const i=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,o=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n,i)}return!1}}}]);