(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[2262],{2262:(n,t,e)=>{"use strict";e.r(t),e.d(t,{AnalysisFeedModule:()=>F});var o=e(1511),i=e(4770),c=e(9086),s=e(4612),a=e(4689),g=e(3835),r=e(2023),d=e(8420),l=e(1572),p=e(1593),f=e(9451),C=e(8794),_=e(8493);const M=function(n){return{active:n}};function O(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"li",12),l.NdJ("click",function(){const t=l.CHM(n).$implicit;return l.oxw().onFilter(t)}),l._uU(1),l.ALo(2,"uppercase"),l.qZA()}if(2&n){const n=t.$implicit,e=l.oxw();l.Q6J("ngClass",l.VKq(4,M,e.defaultFilter===n)),l.xp6(1),l.hij(" ",l.lcZ(2,2,n)," ")}}function m(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"li",12),l.NdJ("click",function(){const t=l.CHM(n).$implicit;return l.oxw().onFilterByUserId(t.userAnalyst.user.id)}),l._uU(1),l.qZA()}if(2&n){const n=t.$implicit,e=l.oxw();l.Q6J("ngClass",l.VKq(3,M,e.defaultFilter===n.userAnalyst.user.id)),l.xp6(1),l.AsE(" ",n.userAnalyst.user.firstName," ",n.userAnalyst.user.lastName," ")}}function P(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"syncspace-crypto-analysis-feed-widget",17),l.NdJ("like",function(t){return l.CHM(n),l.oxw(2).onLike(t)})("comment",function(t){return l.CHM(n),l.oxw(2).onComment(t)})("commentForm",function(t){return l.CHM(n),l.oxw(2).onFormReset(t)}),l.qZA()}if(2&n){const n=t.last;l.Q6J("feedItem",t.$implicit)("isLast",n)}}function h(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"div",13),l.YNc(1,P,1,2,"syncspace-crypto-analysis-feed-widget",14),l.ALo(2,"async"),l.TgZ(3,"p",15),l._uU(4," Oops...looks like you just reached the end of your feed. "),l._UZ(5,"br"),l._uU(6," Try "),l.TgZ(7,"a",16),l.NdJ("click",function(){return l.CHM(n),l.oxw().refreshFeed()}),l._uU(8,"refreshing"),l.qZA(),l._uU(9," to find more posts "),l.qZA(),l.qZA()}if(2&n){const n=l.oxw();l.xp6(1),l.Q6J("ngForOf",l.lcZ(2,1,n.feeds$))}}function x(n,t){1&n&&(l.TgZ(0,"div",13),l._UZ(1,"syncspace-crypto-analysis-no-content"),l.qZA())}function u(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"div",18),l.TgZ(1,"div",19),l.NdJ("click",function(){const t=l.CHM(n).$implicit;return l.oxw().onFilter(t)}),l._uU(2),l.ALo(3,"uppercase"),l.qZA(),l.qZA()}if(2&n){const n=t.$implicit,e=l.oxw();l.xp6(1),l.Q6J("ngClass",l.VKq(4,M,e.defaultFilter===n)),l.xp6(1),l.hij(" ",l.lcZ(3,2,n)," ")}}function w(n,t){if(1&n){const n=l.EpF();l.TgZ(0,"div",18),l.TgZ(1,"div",20),l.NdJ("click",function(){const t=l.CHM(n).$implicit;return l.oxw().onFilterByUserId(t.userAnalyst.user.id)}),l._uU(2),l.ALo(3,"summarizeContent"),l.qZA(),l.qZA()}if(2&n){const n=t.$implicit,e=l.oxw();l.xp6(1),l.s9C("title",n.userAnalyst.user.firstName+" "+n.userAnalyst.user.lastName),l.Q6J("ngClass",l.VKq(6,M,e.defaultFilter===n.userAnalyst.user.id)),l.xp6(1),l.hij(" ",l.xi3(3,3,n.userAnalyst.user.firstName+" "+n.userAnalyst.user.lastName,10)," ")}}const y=[{path:"",component:(()=>{class n{constructor(n){this.store=n,this.defaultFilter="ALL"}onFilterByUserId(n){this.defaultFilter=n,setTimeout(()=>{this.store.dispatch(d.N.GroupFeedByCreatedUserInitiatedAction({userId:n})),this.feeds$=this.store.select(n=>n[0].feed)},0)}onFilter(n){if(this.defaultFilter=n,"ALL"===n)setTimeout(()=>{this.store.dispatch(d.N.FindMyFeedInitiatedAction()),this.feeds$=this.store.select(n=>n[0].feed)},0);else{const t=this.store.select(n=>n[0].feed);this.feeds$=t.pipe((0,a.w)(n=>n),(0,g.h)(t=>t.categoryTag===n),(0,r.R)((n,t)=>(n.push(t),n),[]))}}ngOnInit(){this.categoryTags=["ALL",...Object.values(s.Gl)],setTimeout(()=>{this.store.dispatch(d.N.FindMyFeedInitiatedAction()),this.feeds$=this.store.select(n=>n[0].feed),this.store.dispatch(d.N.FindAnalystsIFollowInitiatedAction()),this.analystsIFollow$=this.store.select(n=>n[0].analystsIFollow)},0)}refreshFeed(){this.defaultFilter="ALL",setTimeout(()=>{this.store.dispatch(d.N.FindMyFeedInitiatedAction()),this.feeds$=this.store.select(n=>n[0].feed)},0)}onLike(n){n&&this.store.dispatch(d.N.LikeFeedInitiatedAction({payload:n}))}onComment(n){(null==n?void 0:n.id)&&this.store.dispatch(d.N.MakeFeedCommentInitiatedAction({payload:{feedId:n.id,body:n.comment}}))}onFormReset(n){n.reset()}}return n.\u0275fac=function(t){return new(t||n)(l.Y36(p.yh))},n.\u0275cmp=l.Xpm({type:n,selectors:[["syncspace-crypto-analysis-analysis-feed"]],decls:22,vars:12,consts:[[1,"mobile-tags-section","full-width","visible-md-down"],[1,"no-margin","no-padding"],[1,"fa","fa-filter"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"page-container","full-width"],["class","feed-section page-section",4,"ngIf","ngIfElse"],["noFeedContent",""],[1,"tag-section","page-section","hidden-md-down"],[1,"text-danger","text-center","no-padding"],[1,"text-center"],[1,"tags-container"],["class","tag",4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"feed-section","page-section"],[3,"feedItem","isLast","like","comment","commentForm",4,"ngFor","ngForOf"],[1,"text-danger","text-center","text-bold","mt-20"],[1,"text-decoration-none","cursor-pointer",3,"click"],[3,"feedItem","isLast","like","comment","commentForm"],[1,"tag"],[1,"tag-inner",3,"ngClass","click"],[1,"tag-inner",3,"title","ngClass","click"]],template:function(n,t){if(1&n&&(l.TgZ(0,"div",0),l.TgZ(1,"ul",1),l.TgZ(2,"li"),l._UZ(3,"i",2),l.qZA(),l.YNc(4,O,3,6,"li",3),l.YNc(5,m,2,5,"li",3),l.ALo(6,"async"),l.qZA(),l.qZA(),l.TgZ(7,"main",4),l.YNc(8,h,10,3,"div",5),l.ALo(9,"async"),l.YNc(10,x,2,0,"ng-template",null,6,l.W1O),l.TgZ(12,"div",7),l.TgZ(13,"h2",8),l._UZ(14,"i",2),l._uU(15," Filters "),l.qZA(),l.TgZ(16,"p",9),l._uU(17," Filter the content your want to see on your feed "),l.qZA(),l.TgZ(18,"div",10),l.YNc(19,u,4,6,"div",11),l.YNc(20,w,4,8,"div",11),l.ALo(21,"async"),l.qZA(),l.qZA(),l.qZA()),2&n){const n=l.MAs(11);let e;l.xp6(4),l.Q6J("ngForOf",t.categoryTags),l.xp6(1),l.Q6J("ngForOf",l.lcZ(6,6,t.analystsIFollow$)),l.xp6(3),l.Q6J("ngIf",(null==(e=l.lcZ(9,8,t.feeds$))?null:e.length)>0)("ngIfElse",n),l.xp6(11),l.Q6J("ngForOf",t.categoryTags),l.xp6(1),l.Q6J("ngForOf",l.lcZ(21,10,t.analystsIFollow$))}},directives:[o.sg,o.O5,o.mk,f.R,C.z],pipes:[o.Ov,o.gd,_.F],styles:[".page-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex:1 1;flex-direction:row;padding:0 0 50px}.page-container[_ngcontent-%COMP%]   .post-tag[_ngcontent-%COMP%]{padding:10px 0}.page-container[_ngcontent-%COMP%]   .post-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:5px 8px;border-left:5px solid var(--danger-color);background:var(--bg-primary);color:var(--primary-text-color);font-size:var(--font-size)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{width:65%}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child{padding:20px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]{background:var(--bg-secondary);box-shadow:var(--box-shadow-md);border-radius:10px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]:not(.feed-widget:last-of-type){margin-bottom:20px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]{padding:5px 10px 15px 20px;border-bottom:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{vertical-align:top;letter-spacing:1.5px;--font-size:18px;font-size:var(--font-size);padding:10px 0}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:100%;vertical-align:middle}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{--font-size:12px;padding:0;color:var(--text-hightlight-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-image[_ngcontent-%COMP%]{width:100%;height:300px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-content[_ngcontent-%COMP%]{padding:0 10px 15px 20px;border-bottom:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding:10px 5px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]{border-bottom:1px solid var(--border-color);display:flex;justify-content:center;flex:1 1}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]   .action-widget[_ngcontent-%COMP%]{width:100%;padding:10px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]   .action-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:50px;border:none;font-size:var(--font-size);box-shadow:var(--box-shadow-md);background:var(--bg-primary);color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]   .action-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--danger-color);padding:0 3px 1px;border-radius:5px;--font-size:12px;font-size:var(--font-size);color:var(--white-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]{padding:25px 15px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]{padding:10px 0;border-top:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]{background:var(--border-color);padding:10px 15px;border-radius:10px;box-shadow:var(--box-shadow-md)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]:not(.comment-widget:last-child){margin-bottom:20px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{vertical-align:top;font-weight:700;letter-spacing:1px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-hightlight-color);--font-size:12px;font-size:var(--font-size)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:100%;vertical-align:middle}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .replies-section[_ngcontent-%COMP%]{padding:5px 0;display:flex;justify-content:right;align-items:flex-end;flex-direction:column}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .replies-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]{border-radius:0;width:90%;box-shadow:none}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .replies-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]:not(.comment-widget:last-of-type){margin-bottom:5px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:last-child{width:35%;padding-top:20px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:last-child   .tags-container[_ngcontent-%COMP%]{width:100%;padding:0 10px;display:grid;grid-gap:15px;grid-row-gap:15px;grid-template-columns:repeat(3,1fr)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:last-child   .tags-container[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   .tag-inner[_ngcontent-%COMP%]{box-shadow:var(--box-shadow-md);background:var(--bg-secondary);padding:5px 10px;font-size:var(--font-size);border-left:5px solid var(--danger-color);cursor:pointer}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:last-child   .tags-container[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   .tag-inner.active[_ngcontent-%COMP%]{color:var(--danger-color)}.mobile-tags-section[_ngcontent-%COMP%]{width:100%;position:fixed;z-index:99;background:var(--bg-secondary);bottom:0;left:0;padding:10px 20px;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap}.mobile-tags-section[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:2px}.mobile-tags-section[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:20px}.mobile-tags-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start}.mobile-tags-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:5px 10px;font-size:var(--font-size)}.mobile-tags-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(li:first-of-type){margin-right:15px;background:var(--bg-primary);border-left:5px solid var(--danger-color)}.mobile-tags-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(li:first-of-type).active{color:var(--danger-color)}@media (max-width:768px){.page-container[_ngcontent-%COMP%]{flex:1;flex-direction:column}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{width:80%;margin:0 auto;padding:20px!important}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-of-type   .feed-image[_ngcontent-%COMP%]{height:250px!important}}@media (max-width:576px){.page-container[_ngcontent-%COMP%]{flex:1;flex-direction:column}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{width:100%;padding:20px 0!important}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-of-type   .feed-image[_ngcontent-%COMP%]{height:200px!important}}"]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[c.Bz.forChild(y)],c.Bz]}),n})();var v=e(3760);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[o.ez,i.s9,v.m,b]]}),n})()}}]);