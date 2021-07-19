(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[8592],{9821:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var s=r(5859),i=r(1225),a=r(9996),n=r(7727),o=r(5947);let d=(()=>{class e{constructor(e,t,r,s,i,a,n,o,d,c,p,h,l,u,f,y,g,S,m,v,F,L,U,b,E,I,C,P,w,A,k,G,M,_,Q,K){this.loginGQLSrv=e,this.signUpSrv=t,this.createContactMessageSrv=r,this.findActiveCountriesSrv=s,this.verifyAccountSrv=i,this.forgotPasswordSrv=a,this.changePasswordSrv=n,this.topSponsoredFeedsSrv=o,this.findFeedCreatedByUserSrv=d,this.deleteFeedSrv=c,this.createFeedSrv=p,this.findFeedByIdSrv=h,this.updateFeedSrv=l,this.createAnalystSrv=u,this.createSubscriptionPackageSrv=f,this.updateSubscriptionPackageSrv=y,this.findSubscriptionPackageByIdSrv=g,this.findFeedItemByIdSrv=S,this.findFeedCommentbyIdSrv=m,this.makeFeedCommentSrv=v,this.likeFeedSrv=F,this.findFeedLikeByIdSrv=L,this.topPublicFeedsSrv=U,this.topAnalystsSrv=b,this.getFeedStatisticsSrv=E,this.userDashboardStatsSrv=I,this.findFeedByUserIdSrv=C,this.myFeedSrv=P,this.createAnalystSubscriberSrv=w,this.findUserAnalystWithUserIdSrv=A,this.findAnalystsIFollowSrv=k,this.findRecommendedAnalystsSrv=G,this.findUsersSubscribedToPackageSrv=M,this.findUsersSubscribedToAnalystSrv=_,this.myProfileSrv=Q,this.findSubscriptionPackagesByCurrentUserIdSrv=K}topPublicFeed(e=5){return this.topPublicFeedsSrv.fetch({limit:e}).pipe((0,a.U)(e=>e.data.topPublicFeeds),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}sendContactMessage(e){return this.createContactMessageSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.createContactMessage),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}topAnalysts(e=5){return this.topAnalystsSrv.fetch({limit:e}).pipe((0,a.U)(e=>e.data.topUserAnalysts),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}feedStatistics(){return this.getFeedStatisticsSrv.fetch().pipe((0,a.U)(e=>e.data.getFeedStatistics),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}login(e){return this.loginGQLSrv.mutate({payload:e}).pipe((0,a.U)(e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.login}),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}signUp(e){return this.signUpSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.createUser),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findActiveCountries(e){return this.findActiveCountriesSrv.fetch({status:e}).pipe((0,a.U)(e=>e.data.findCountriesByStatus),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}verifyAccount(e){return this.verifyAccountSrv.mutate({verificationToken:e}).pipe((0,a.U)(e=>e.data.verifyAccount),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}forgotPassword(e){return this.forgotPasswordSrv.mutate({email:e}).pipe((0,a.U)(e=>e.data.forgotPassword),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}changePassword(e){return this.changePasswordSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.changePassword),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}sponsoredFeeds(e){return this.topSponsoredFeedsSrv.fetch({limit:e}).pipe((0,a.U)(e=>e.data.topSponsoredFeeds),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedCreatedByUser(){return this.findFeedCreatedByUserSrv.fetch({}).pipe((0,a.U)(e=>e.data.findFeedByUserId),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}deleteFeed(e){return this.deleteFeedSrv.mutate({feedId:e}).pipe((0,a.U)(e=>e.data.deleteFeed),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}createFeed(e){return this.createFeedSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.createFeed),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedById(e){return this.findFeedByIdSrv.fetch({feedId:e}).pipe((0,a.U)(e=>e.data.findFeedById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findSubscriptionPackagesByCurrentUserId(){return this.findSubscriptionPackagesByCurrentUserIdSrv.fetch({}).pipe((0,a.U)(e=>e.data.findSubscriptionPackagesByCurrentUserId),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}updateFeed(e){return this.updateFeedSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.updateFeed),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}createAnalyst(e){return this.createAnalystSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.createUserAnalyst),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}createSubscriptionPackage(e){return this.createSubscriptionPackageSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.createSubscriptionPackage),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}updateSubscriptionPackage(e){return this.updateSubscriptionPackageSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.updateSubscriptionPackage),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findSubscriptionPackageById(e){return this.findSubscriptionPackageByIdSrv.fetch({payload:e}).pipe((0,a.U)(e=>e.data.findSubscriptionPackageById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findDetailedFeedItemById(e){return this.findFeedItemByIdSrv.fetch({feedId:e}).pipe((0,a.U)(e=>e.data.findFeedById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}makeFeedComment(e){return this.makeFeedCommentSrv.mutate({payload:e}).pipe((0,a.U)(e=>e.data.createFeedComment),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedCommentById(e){return this.findFeedCommentbyIdSrv.fetch({feedCommentId:e}).pipe((0,a.U)(e=>e.data.findFeedCommentsById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}likeFeed(e){return this.likeFeedSrv.mutate({feedId:e}).pipe((0,a.U)(e=>e.data.createLike),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedLikeById(e){return this.findFeedLikeByIdSrv.fetch({feedLikeId:e}).pipe((0,a.U)(e=>e.data.findLikeById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findUserDashboardStats(){return this.userDashboardStatsSrv.fetch({}).pipe((0,a.U)(e=>e.data.userDashboardStats),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findFeedByUserId(e){return this.findFeedByUserIdSrv.fetch({userId:e}).pipe((0,a.U)(e=>e.data.findFeedByCreatedUser),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}myFeed(){return this.myFeedSrv.fetch({}).pipe((0,a.U)(e=>e.data.myFeed),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findUserAnalystWithUserId(e){return this.findUserAnalystWithUserIdSrv.fetch({userId:e}).pipe((0,a.U)(e=>e.data.findUserAnalystWithUserId),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}createUserAnalystSubscriber(e){return this.createAnalystSubscriberSrv.mutate({userAnalystId:e}).pipe((0,a.U)(e=>e.data.createUserAnalystSubscriber),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findAnalystsIFollow(){return this.findAnalystsIFollowSrv.fetch({}).pipe((0,a.U)(({data:e})=>e.findAnalystsUserIsSubscribedTo),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findRecommendedAnalysts(e){return this.findRecommendedAnalystsSrv.fetch({limit:e}).pipe((0,a.U)(({data:e})=>e.findRecommendedAnalysts),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findUsersSubscribedToAnalyst(e){return this.findUsersSubscribedToAnalystSrv.fetch({userId:e}).pipe((0,a.U)(({data:e})=>e.findUserAnalystWithUserId),(0,a.U)(({subscribedUsersToThisAnalyst:e})=>e.map(e=>e.user)),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}findUsersSubscribedToPackage(e){return this.findUsersSubscribedToPackageSrv.fetch({packageId:e}).pipe((0,a.U)(({data:e})=>e.findSubscriptionPackageById),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}myProfile(){return this.myProfileSrv.fetch({}).pipe((0,a.U)(({data:e})=>e.myProfile),(0,n.K)(e=>(0,i._)(e.graphQLErrors)))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(s.me),o.LFG(s.eP),o.LFG(s.Rx),o.LFG(s.uo),o.LFG(s.gs),o.LFG(s.xe),o.LFG(s.EO),o.LFG(s.Ti),o.LFG(s.Yt),o.LFG(s.vk),o.LFG(s.Q0),o.LFG(s.G9),o.LFG(s.sL),o.LFG(s.aI),o.LFG(s.Cx),o.LFG(s.lI),o.LFG(s.M4),o.LFG(s.RB),o.LFG(s.P),o.LFG(s.pb),o.LFG(s.nN),o.LFG(s.q),o.LFG(s.ib),o.LFG(s.Dm),o.LFG(s.ZS),o.LFG(s.jb),o.LFG(s.sy),o.LFG(s.hi),o.LFG(s.Jq),o.LFG(s.wJ),o.LFG(s.ZF),o.LFG(s.tw),o.LFG(s.oG),o.LFG(s.f0),o.LFG(s.Ld),o.LFG(s.P7))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8232:(e,t,r)=>{"use strict";r.d(t,{c:()=>n});var s=r(2322),i=r(3320),a=r(8520);const n=(e,t)=>{let r,n;const o=(e,s,i)=>{if("undefined"==typeof document)return;const a=document.elementFromPoint(e,s);a&&t(a)?a!==r&&(c(),d(a,i)):c()},d=(e,t)=>{r=e,n||(n=r);const i=r;(0,s.c)(()=>i.classList.add("ion-activated")),t()},c=(e=!1)=>{if(!r)return;const t=r;(0,s.c)(()=>t.classList.remove("ion-activated")),e&&n!==r&&r.click(),r=void 0};return(0,a.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>o(e.currentX,e.currentY,i.a),onMove:e=>o(e.currentX,e.currentY,i.b),onEnd:()=>{c(!0),(0,i.h)(),n=void 0}})}},4068:(e,t,r)=>{"use strict";r.d(t,{g:()=>s});const s=(e,t,r,s,n)=>a(e[1],t[1],r[1],s[1],n).map(a=>i(e[0],t[0],r[0],s[0],a)),i=(e,t,r,s,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*r*i+3*r+s*i))-e*Math.pow(i-1,3),a=(e,t,r,s,i)=>n((s-=i)-3*(r-=i)+3*(t-=i)-(e-=i),3*r-6*t+3*e,3*t-3*e,e).filter(e=>e>=0&&e<=1),n=(e,t,r,s)=>{if(0===e)return((e,t,r)=>{const s=t*t-4*e*r;return s<0?[]:[(-t+Math.sqrt(s))/(2*e),(-t-Math.sqrt(s))/(2*e)]})(t,r,s);const i=(3*(r/=e)-(t/=e)*t)/3,a=(2*t*t*t-9*t*r+27*(s/=e))/27;if(0===i)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-i),-Math.sqrt(-i)];const n=Math.pow(a/2,2)+Math.pow(i/3,3);if(0===n)return[Math.pow(a/2,.5)-t/3];if(n>0)return[Math.pow(-a/2+Math.sqrt(n),1/3)-Math.pow(a/2+Math.sqrt(n),1/3)-t/3];const o=Math.sqrt(Math.pow(-i/3,3)),d=Math.acos(-a/(2*Math.sqrt(Math.pow(-i/3,3)))),c=2*Math.pow(o,1/3);return[c*Math.cos(d/3)-t/3,c*Math.cos((d+2*Math.PI)/3)-t/3,c*Math.cos((d+4*Math.PI)/3)-t/3]}},9498:(e,t,r)=>{"use strict";r.d(t,{a:()=>i,d:()=>a});var s=r(1843);const i=async(e,t,r,i,a)=>{if(e)return e.attachViewToDom(t,r,a,i);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const n="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r;return i&&i.forEach(e=>n.classList.add(e)),a&&Object.assign(n,a),t.appendChild(n),await new Promise(e=>(0,s.c)(n,e)),n},a=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},3320:(e,t,r)=>{"use strict";r.d(t,{a:()=>a,b:()=>n,c:()=>i,d:()=>d,h:()=>o});const s={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:r})},notification(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>{s.selection()},a=()=>{s.selectionStart()},n=()=>{s.selectionChanged()},o=()=>{s.selectionEnd()},d=e=>{s.impact(e)}},7942:(e,t,r)=>{"use strict";r.d(t,{s:()=>s});const s=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!n()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),r=document.createElement("div");t.appendChild(r),r.innerHTML=e,d.forEach(e=>{const r=t.querySelectorAll(e);for(let s=r.length-1;s>=0;s--){const e=r[s];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const n=a(e);for(let t=0;t<n.length;t++)i(n[t])}});const s=a(t);for(let e=0;e<s.length;e++)i(s[e]);const o=document.createElement("div");o.appendChild(t);const c=o.querySelector("div");return null!==c?c.innerHTML:o.innerHTML}catch(t){return console.error(t),""}},i=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const t=e.attributes.item(r),s=t.name;if(!o.includes(s.toLowerCase())){e.removeAttribute(s);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(s)}const t=a(e);for(let r=0;r<t.length;r++)i(t[r])},a=e=>null!=e.children?e.children:e.childNodes,n=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},o=["class","id","href","src","name","slot"],d=["script","style","iframe","meta","link","object","embed"]},9926:(e,t,r)=>{"use strict";r.d(t,{S:()=>s});const s={bubbles:{dur:1e3,circles:9,fn:(e,t,r)=>{const s=e*t/r-e+"ms",i=2*Math.PI*t/r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(e,t,r)=>{const s=t/r,i=e*s-e+"ms",a=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})}}},4843:(e,t,r)=>{"use strict";r.d(t,{c:()=>i,g:()=>a,h:()=>s,o:()=>o});const s=(e,t)=>null!==t.closest(e),i=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,a=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},n=/^[a-z][a-z0-9+\-.]*:/,o=async(e,t,r,s)=>{if(null!=e&&"#"!==e[0]&&!n.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,r,s)}return!1}}}]);