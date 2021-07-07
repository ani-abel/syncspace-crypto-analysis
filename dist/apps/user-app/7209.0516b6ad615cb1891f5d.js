(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[7209],{7209:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ChangePasswordModule:()=>f});var o=e(1511),a=e(9086),c=e(3695),r=e(6985),i=e(6511),g=e(8420),s=e(1572),d=e(1593),p=e(447);function P(n,t){1&n&&(s.TgZ(0,"p",18),s._uU(1,"Required field"),s.qZA())}function _(n,t){if(1&n&&(s.TgZ(0,"span"),s.YNc(1,P,2,0,"p",17),s.qZA()),2&n){const n=t.ngIf;s.xp6(1),s.Q6J("ngIf",n.required)}}function C(n,t){1&n&&(s.TgZ(0,"p",18),s._uU(1,"Required field"),s.qZA())}function u(n,t){if(1&n&&(s.TgZ(0,"span"),s.YNc(1,C,2,0,"p",17),s.qZA()),2&n){const n=t.ngIf;s.xp6(1),s.Q6J("ngIf",n.required)}}function M(n,t){1&n&&(s.TgZ(0,"span"),s.TgZ(1,"p",18),s._uU(2,"Password must be the same"),s.qZA(),s.qZA())}const O=function(){return["/login"]},l=[{path:"",component:(()=>{class n{constructor(n,t,e){this.activatedRoute=n,this.sharedSrv=t,this.store=e,this.subSink=new r.Y}ngOnInit(){this.initForm(),this.validationToken=this.activatedRoute.snapshot.queryParams.code}initForm(){this.changePasswordForm=new c.cw({password:new c.NI(null,c.kI.required),confirmPassword:new c.NI(null,c.kI.required)})}onInput(n,t){this.arePasswordEqual=n===t}onSubmit(){if(this.changePasswordForm.invalid||!this.validationToken)return;const{value:{password:n}}=this.changePasswordForm;this.store.dispatch(g.N.ChangePasswordInitiatedAction({payload:{newPassword:n,verificationToken:this.validationToken}})),this.subSink.sink=this.store.select(n=>n[0].successMessage).subscribe(n=>{n&&(this.changePasswordForm.reset(),this.sharedSrv.onLogout())})}ngOnDestroy(){this.subSink.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(a.gz),s.Y36(i.F),s.Y36(d.yh))},n.\u0275cmp=s.Xpm({type:n,selectors:[["syncspace-crypto-analysis-change-password"]],decls:30,vars:10,consts:[[3,"fullscreen"],[1,"page-container","full-width"],[1,"page-content"],[1,"form-section"],[1,"no-padding","text-danger","text-center"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","password"],["type","password","id","password",1,"form-control",3,"formControlName"],["password",""],[4,"ngIf"],["type","password","id","confirm-password",1,"form-control",3,"formControlName","input"],["confirmPassword",""],[1,"btn","btn-danger","btn-block",3,"disabled"],[1,"no-margin","no-padding"],[1,"no-margin"],[3,"routerLink"],["class","form-helper danger",4,"ngIf"],[1,"form-helper","danger"]],template:function(n,t){if(1&n){const n=s.EpF();s.TgZ(0,"ion-content",0),s.TgZ(1,"section",1),s.TgZ(2,"main",2),s.TgZ(3,"div",3),s.TgZ(4,"h2",4),s._uU(5," Change Password "),s.qZA(),s.TgZ(6,"form",5),s.NdJ("ngSubmit",function(){return t.onSubmit()}),s.TgZ(7,"div",6),s.TgZ(8,"label",7),s._uU(9,"Password*"),s.qZA(),s._UZ(10,"input",8,9),s.YNc(12,_,2,1,"span",10),s.qZA(),s.TgZ(13,"div",6),s.TgZ(14,"label",7),s._uU(15,"Confirm Password*"),s.qZA(),s.TgZ(16,"input",11,12),s.NdJ("input",function(){s.CHM(n);const e=s.MAs(11),o=s.MAs(17);return t.onInput(e.value,o.value)}),s.qZA(),s.YNc(18,u,2,1,"span",10),s.YNc(19,M,3,0,"span",10),s.qZA(),s.TgZ(20,"div",6),s.TgZ(21,"button",13),s._uU(22," Change "),s.qZA(),s.qZA(),s.TgZ(23,"div",6),s.TgZ(24,"ul",14),s.TgZ(25,"li"),s.TgZ(26,"p",15),s._uU(27," Already have an account "),s.TgZ(28,"a",16),s._uU(29,"Login"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&n&&(s.Q6J("fullscreen",!0),s.xp6(6),s.Q6J("formGroup",t.changePasswordForm),s.xp6(4),s.Q6J("formControlName","password"),s.xp6(2),s.Q6J("ngIf",t.changePasswordForm.get("password").touched&&t.changePasswordForm.get("password").errors),s.xp6(4),s.Q6J("formControlName","confirmPassword"),s.xp6(2),s.Q6J("ngIf",t.changePasswordForm.get("confirmPassword").touched&&t.changePasswordForm.get("confirmPassword").errors),s.xp6(1),s.Q6J("ngIf",t.changePasswordForm.get("confirmPassword").touched&&!t.arePasswordEqual),s.xp6(2),s.Q6J("disabled",t.changePasswordForm.invalid||!t.arePasswordEqual),s.xp6(7),s.Q6J("routerLink",s.DdM(9,O)))},directives:[p.W2,c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,o.O5,a.yS,p.YI],styles:[".page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{width:100%}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%;background:var(--bg-secondary);box-shadow:var(--box-shadow-md);padding:10px 20px;position:fixed;z-index:99;top:0;display:flex;flex-direction:row;flex:1 1;justify-content:center;align-items:center}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]{width:100%}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:1px;width:40px;display:block;margin-left:calc(100% - 40px);transition:all .2s ease;background:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{margin-bottom:7px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){margin-top:7px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:10px 5px;letter-spacing:10px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;display:inline;padding:0 8px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:var(--font-size);color:var(--secondary-text-color);text-decoration:none;letter-spacing:1.5px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:50%;margin:0 auto;padding:100px 0 80px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{width:100%;padding:20px;background:var(--bg-secondary);box-shadow:var(--box-shadow-md)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-subcaption[_ngcontent-%COMP%]{padding:10px 0}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;flex:1 1}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;list-style:none}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:1px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:var(--font-size);font-weight:700;letter-spacing:1.5px;color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--secondary-text-color)}@media (max-width:768px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:80%;padding:100px 20px 80px}}@media (max-width:576px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:100%;padding:100px 20px 80px}}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),n})();var h=e(6846);let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,h.s9,m]]}),n})()}}]);