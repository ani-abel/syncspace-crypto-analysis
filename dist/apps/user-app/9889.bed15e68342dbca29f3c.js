(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[9889],{9889:(n,t,e)=>{"use strict";e.r(t),e.d(t,{FeedDetailModule:()=>M});var o=e(1511),c=e(4770),i=e(9086),g=e(8420),a=e(1572),d=e(1593),r=e(9887);function s(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"syncspace-crypto-analysis-feed-widget",3),a.NdJ("like",function(t){return a.CHM(n),a.oxw().onLike(t)})("comment",function(t){return a.CHM(n),a.oxw().onComment(t)})("commentForm",function(t){return a.CHM(n),a.oxw().onFormReset(t)}),a.qZA()}2&n&&a.Q6J("feedItem",t.ngIf)}const p=[{path:"",component:(()=>{class n{constructor(n,t){this.store=n,this.activatedRoute=t}ngOnInit(){this.feedId=this.activatedRoute.snapshot.params.feedId,this.feedId&&setTimeout(()=>{this.store.dispatch(g.N.FindDetailedFeedItemByIdInitiatedAction({payload:this.feedId})),this.selectedFeedItem$=this.store.select(n=>n[0].selectedFeedItem)},0)}onLike(n){console.log(n)}onComment(n){(null==n?void 0:n.id)&&this.store.dispatch(g.N.MakeFeedCommentInitiatedAction({payload:{feedId:n.id,body:n.comment}}))}onFormReset(n){n.reset()}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(d.yh),a.Y36(i.gz))},n.\u0275cmp=a.Xpm({type:n,selectors:[["syncspace-crypto-analysis-feed-detail"]],decls:4,vars:3,consts:[[1,"page-container","full-width"],[1,"feed-section","page-section"],[3,"feedItem","like","comment","commentForm",4,"ngIf"],[3,"feedItem","like","comment","commentForm"]],template:function(n,t){1&n&&(a.TgZ(0,"main",0),a.TgZ(1,"div",1),a.YNc(2,s,1,1,"syncspace-crypto-analysis-feed-widget",2),a.ALo(3,"async"),a.qZA(),a.qZA()),2&n&&(a.xp6(2),a.Q6J("ngIf",a.lcZ(3,1,t.selectedFeedItem$)))},directives:[o.O5,r.R],pipes:[o.Ov],styles:[".page-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex:1 1;flex-direction:row;padding:0 0 50px}.page-container[_ngcontent-%COMP%]   .post-tag[_ngcontent-%COMP%]{padding:10px 0}.page-container[_ngcontent-%COMP%]   .post-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:5px 8px;border-left:5px solid var(--danger-color);background:var(--bg-primary);color:var(--primary-text-color);font-size:var(--font-size)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{width:90%}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child{padding:20px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]{background:var(--bg-secondary);box-shadow:var(--box-shadow-md);border-radius:10px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]:not(.feed-widget:last-of-type){margin-bottom:20px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]{padding:5px 10px 15px 20px;border-bottom:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{vertical-align:top;letter-spacing:1.5px;--font-size:18px;font-size:var(--font-size);padding:10px 0}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:100%;vertical-align:middle}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{--font-size:12px;padding:0;color:var(--text-hightlight-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-image[_ngcontent-%COMP%]{width:100%;height:300px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-content[_ngcontent-%COMP%]{padding:0 10px 15px 20px;border-bottom:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-widget[_ngcontent-%COMP%]   .feed-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding:10px 5px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]{border-bottom:1px solid var(--border-color);display:flex;justify-content:center;flex:1 1}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]   .action-widget[_ngcontent-%COMP%]{width:100%;padding:10px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]   .action-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:50px;border:none;font-size:var(--font-size);box-shadow:var(--box-shadow-md);background:var(--bg-primary);color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-action[_ngcontent-%COMP%]   .action-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--danger-color);padding:0 3px 1px;border-radius:5px;--font-size:12px;font-size:var(--font-size);color:var(--white-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]{padding:25px 15px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]{padding:10px 0;border-top:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]{background:var(--border-color);padding:10px 15px;border-radius:10px;box-shadow:var(--box-shadow-md)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]:not(.comment-widget:last-child){margin-bottom:20px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{vertical-align:top;font-weight:700;letter-spacing:1px}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--text-hightlight-color);--font-size:12px;font-size:var(--font-size)}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .comments-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:100%;vertical-align:middle}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .replies-section[_ngcontent-%COMP%]{padding:5px 0;display:flex;justify-content:right;align-items:flex-end;flex-direction:column}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .replies-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]{border-radius:0;width:90%;box-shadow:none}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-child   .feed-comments[_ngcontent-%COMP%]   .replies-section[_ngcontent-%COMP%]   .comment-widget[_ngcontent-%COMP%]:not(.comment-widget:last-of-type){margin-bottom:5px}@media (max-width:768px){.page-container[_ngcontent-%COMP%]{flex:1;flex-direction:column}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{width:80%;margin:0 auto;padding:20px!important}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-of-type   .feed-image[_ngcontent-%COMP%]{height:250px!important}}@media (max-width:576px){.page-container[_ngcontent-%COMP%]{flex:1;flex-direction:column}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{width:100%;padding:20px 0!important}.page-container[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]:first-of-type   .feed-image[_ngcontent-%COMP%]{height:200px!important}}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[i.Bz.forChild(p)],i.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[o.ez,C,c.s9]]}),n})()}}]);