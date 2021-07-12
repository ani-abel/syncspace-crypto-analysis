(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[8592],{9821:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var a=r(5859),i=r(1225),s=r(9996),n=r(7727),o=r(5947);let c=(()=>{class e{constructor(e,t,r,a,i,s,n,o,c,d,p,u,l,h,f,g,m,y,v,S,F,L,E,C,b,I){this.loginGQLSrv=e,this.signUpSrv=t,this.createContactMessageSrv=r,this.findActiveCountriesSrv=a,this.verifyAccountSrv=i,this.forgotPasswordSrv=s,this.changePasswordSrv=n,this.topSponsoredFeedsSrv=o,this.findFeedCreatedByUserSrv=c,this.deleteFeedSrv=d,this.createFeedSrv=p,this.findFeedByIdSrv=u,this.updateFeedSrv=l,this.createAnalystSrv=h,this.createSubscriptionPackageSrv=f,this.updateSubscriptionPackageSrv=g,this.findSubscriptionPackageByIdSrv=m,this.findFeedItemByIdSrv=y,this.findFeedCommentbyIdSrv=v,this.makeFeedCommentSrv=S,this.likeFeedSrv=F,this.findFeedLikeByIdSrv=L,this.topPublicFeedsSrv=E,this.topAnalystsSrv=C,this.getFeedStatisticsSrv=b,this.findSubscriptionPackagesByCurrentUserIdSrv=I}topPublicFeed(e=5){return this.topPublicFeedsSrv.fetch({limit:e}).pipe((0,s.U)(e=>e.data.topPublicFeeds),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}sendContactMessage(e){return this.createContactMessageSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.createContactMessage),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}topAnalysts(e=5){return this.topAnalystsSrv.fetch({limit:e}).pipe((0,s.U)(e=>e.data.topUserAnalysts),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}feedStatistics(){return this.getFeedStatisticsSrv.fetch().pipe((0,s.U)(e=>e.data.getFeedStatistics),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}login(e){return this.loginGQLSrv.mutate({payload:e}).pipe((0,s.U)(e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.login}),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}signUp(e){return this.signUpSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.createUser),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findActiveCountries(e){return this.findActiveCountriesSrv.fetch({status:e}).pipe((0,s.U)(e=>e.data.findCountriesByStatus),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}verifyAccount(e){return this.verifyAccountSrv.mutate({verificationToken:e}).pipe((0,s.U)(e=>e.data.verifyAccount),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}forgotPassword(e){return this.forgotPasswordSrv.mutate({email:e}).pipe((0,s.U)(e=>e.data.forgotPassword),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}changePassword(e){return this.changePasswordSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.changePassword),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}sponsoredFeeds(e){return this.topSponsoredFeedsSrv.fetch({limit:e}).pipe((0,s.U)(e=>e.data.topSponsoredFeeds),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedCreatedByUser(){return this.findFeedCreatedByUserSrv.fetch({}).pipe((0,s.U)(e=>e.data.findFeedByUserId),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}deleteFeed(e){return this.deleteFeedSrv.mutate({feedId:e}).pipe((0,s.U)(e=>e.data.deleteFeed),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}createFeed(e){return this.createFeedSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.createFeed),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedById(e){return this.findFeedByIdSrv.fetch({feedId:e}).pipe((0,s.U)(e=>e.data.findFeedById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findSubscriptionPackagesByCurrentUserId(){return this.findSubscriptionPackagesByCurrentUserIdSrv.fetch({}).pipe((0,s.U)(e=>e.data.findSubscriptionPackagesByCurrentUserId),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}updateFeed(e){return this.updateFeedSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.updateFeed),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}createAnalyst(e){return this.createAnalystSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.createUserAnalyst),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}createSubscriptionPackage(e){return this.createSubscriptionPackageSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.createSubscriptionPackage),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}updateSubscriptionPackage(e){return this.updateSubscriptionPackageSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.updateSubscriptionPackage),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findSubscriptionPackageById(e){return this.findSubscriptionPackageByIdSrv.fetch({payload:e}).pipe((0,s.U)(e=>e.data.findSubscriptionPackageById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findDetailedFeedItemById(e){return this.findFeedItemByIdSrv.fetch({feedId:e}).pipe((0,s.U)(e=>e.data.findFeedById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}makeFeedComment(e){return this.makeFeedCommentSrv.mutate({payload:e}).pipe((0,s.U)(e=>e.data.createFeedComment),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedCommentById(e){return this.findFeedCommentbyIdSrv.fetch({feedCommentId:e}).pipe((0,s.U)(e=>e.data.findFeedCommentsById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}likeFeed(e){return this.likeFeedSrv.mutate({feedId:e}).pipe((0,s.U)(e=>e.data.createLike),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedLikeById(e){return this.findFeedLikeByIdSrv.fetch({feedLikeId:e}).pipe((0,s.U)(e=>e.data.findLikeById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(a.me),o.LFG(a.eP),o.LFG(a.Rx),o.LFG(a.uo),o.LFG(a.gs),o.LFG(a.xe),o.LFG(a.EO),o.LFG(a.Ti),o.LFG(a.Yt),o.LFG(a.vk),o.LFG(a.Q0),o.LFG(a.G9),o.LFG(a.sL),o.LFG(a.aI),o.LFG(a.Cx),o.LFG(a.lI),o.LFG(a.M4),o.LFG(a.RB),o.LFG(a.P),o.LFG(a.pb),o.LFG(a.nN),o.LFG(a.q),o.LFG(a.ib),o.LFG(a.Dm),o.LFG(a.ZS),o.LFG(a.P7))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8232:(e,t,r)=>{"use strict";r.d(t,{c:()=>n});var a=r(2322),i=r(3320),s=r(8520);const n=(e,t)=>{let r,n;const o=(e,a,i)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(e,a);s&&t(s)?s!==r&&(d(),c(s,i)):d()},c=(e,t)=>{r=e,n||(n=r);const i=r;(0,a.c)(()=>i.classList.add("ion-activated")),t()},d=(e=!1)=>{if(!r)return;const t=r;(0,a.c)(()=>t.classList.remove("ion-activated")),e&&n!==r&&r.click(),r=void 0};return(0,s.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>o(e.currentX,e.currentY,i.a),onMove:e=>o(e.currentX,e.currentY,i.b),onEnd:()=>{d(!0),(0,i.h)(),n=void 0}})}},4068:(e,t,r)=>{"use strict";r.d(t,{g:()=>a});const a=(e,t,r,a,n)=>s(e[1],t[1],r[1],a[1],n).map(s=>i(e[0],t[0],r[0],a[0],s)),i=(e,t,r,a,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*r*i+3*r+a*i))-e*Math.pow(i-1,3),s=(e,t,r,a,i)=>n((a-=i)-3*(r-=i)+3*(t-=i)-(e-=i),3*r-6*t+3*e,3*t-3*e,e).filter(e=>e>=0&&e<=1),n=(e,t,r,a)=>{if(0===e)return((e,t,r)=>{const a=t*t-4*e*r;return a<0?[]:[(-t+Math.sqrt(a))/(2*e),(-t-Math.sqrt(a))/(2*e)]})(t,r,a);const i=(3*(r/=e)-(t/=e)*t)/3,s=(2*t*t*t-9*t*r+27*(a/=e))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];const n=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===n)return[Math.pow(s/2,.5)-t/3];if(n>0)return[Math.pow(-s/2+Math.sqrt(n),1/3)-Math.pow(s/2+Math.sqrt(n),1/3)-t/3];const o=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),d=2*Math.pow(o,1/3);return[d*Math.cos(c/3)-t/3,d*Math.cos((c+2*Math.PI)/3)-t/3,d*Math.cos((c+4*Math.PI)/3)-t/3]}},9498:(e,t,r)=>{"use strict";r.d(t,{a:()=>i,d:()=>s});var a=r(1843);const i=async(e,t,r,i,s)=>{if(e)return e.attachViewToDom(t,r,s,i);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const n="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r;return i&&i.forEach(e=>n.classList.add(e)),s&&Object.assign(n,s),t.appendChild(n),await new Promise(e=>(0,a.c)(n,e)),n},s=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},3320:(e,t,r)=>{"use strict";r.d(t,{a:()=>s,b:()=>n,c:()=>i,d:()=>c,h:()=>o});const a={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:r})},notification(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>{a.selection()},s=()=>{a.selectionStart()},n=()=>{a.selectionChanged()},o=()=>{a.selectionEnd()},c=e=>{a.impact(e)}},7942:(e,t,r)=>{"use strict";r.d(t,{s:()=>a});const a=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!n()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),r=document.createElement("div");t.appendChild(r),r.innerHTML=e,c.forEach(e=>{const r=t.querySelectorAll(e);for(let a=r.length-1;a>=0;a--){const e=r[a];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const n=s(e);for(let t=0;t<n.length;t++)i(n[t])}});const a=s(t);for(let e=0;e<a.length;e++)i(a[e]);const o=document.createElement("div");o.appendChild(t);const d=o.querySelector("div");return null!==d?d.innerHTML:o.innerHTML}catch(t){return console.error(t),""}},i=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const t=e.attributes.item(r),a=t.name;if(!o.includes(a.toLowerCase())){e.removeAttribute(a);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(a)}const t=s(e);for(let r=0;r<t.length;r++)i(t[r])},s=e=>null!=e.children?e.children:e.childNodes,n=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},o=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},9926:(e,t,r)=>{"use strict";r.d(t,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(e,t,r)=>{const a=e*t/r-e+"ms",i=2*Math.PI*t/r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(e,t,r)=>{const a=t/r,i=e*a-e+"ms",s=2*Math.PI*a;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})}}},4843:(e,t,r)=>{"use strict";r.d(t,{c:()=>i,g:()=>s,h:()=>a,o:()=>o});const a=(e,t)=>null!==t.closest(e),i=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},n=/^[a-z][a-z0-9+\-.]*:/,o=async(e,t,r,a)=>{if(null!=e&&"#"!==e[0]&&!n.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,r,a)}return!1}}}]);