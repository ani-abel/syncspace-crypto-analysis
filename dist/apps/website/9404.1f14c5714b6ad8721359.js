(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[9404],{9404:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ContactModule:()=>k});var o=e(1511),a=e(5753),i=e(4762),g=e(3695),c=e(5859),s=e(9821),r=function(){function n(){this._subs=[]}return n.prototype.add=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];this._subs=this._subs.concat(n)},Object.defineProperty(n.prototype,"sink",{set:function(n){this._subs.push(n)},enumerable:!0,configurable:!0}),n.prototype.unsubscribe=function(){this._subs.forEach(function(n){return n&&"function"==typeof n.unsubscribe&&n.unsubscribe()}),this._subs=[]},n}(),p=e(2335),d=e(5947),_=e(3431),u=e(883),l=e(7528),M=e(6627),C=e(7366);function O(n,t){1&n&&(d.TgZ(0,"p",40),d._uU(1,"Required field"),d.qZA())}function P(n,t){if(1&n&&(d.TgZ(0,"span"),d.YNc(1,O,2,0,"p",39),d.qZA()),2&n){const n=t.ngIf;d.xp6(1),d.Q6J("ngIf",n.required)}}function m(n,t){1&n&&(d.TgZ(0,"p",40),d._uU(1,"Required field"),d.qZA())}function f(n,t){1&n&&(d.TgZ(0,"p",40),d._uU(1,"Email required"),d.qZA())}function Z(n,t){if(1&n&&(d.TgZ(0,"span"),d.YNc(1,m,2,0,"p",39),d.YNc(2,f,2,0,"p",39),d.qZA()),2&n){const n=t.ngIf;d.xp6(1),d.Q6J("ngIf",n.required),d.xp6(1),d.Q6J("ngIf",n.email)}}function w(n,t){1&n&&(d.TgZ(0,"p",40),d._uU(1,"Required field"),d.qZA())}function h(n,t){if(1&n&&(d.TgZ(0,"span"),d.YNc(1,w,2,0,"p",39),d.qZA()),2&n){const n=t.ngIf;d.xp6(1),d.Q6J("ngIf",n.required)}}const x=function(n){return{closed:n}},v=function(){return["/home"]},b=function(){return["/privacy"]},q=function(){return["/contact"]},A=function(){return["/faq"]},y=[{path:"",component:(()=>{class n{constructor(n,t,e){this.createContactMessageGraphQLSrv=n,this.toastController=t,this.gqlRequestSrv=e,this.subSink=new r,this.env=p.N}ngOnInit(){this.initForm()}onSubmit(){if(this.contactMessageForm.invalid)return;const{value:{name:n,email:t,message:e}}=this.contactMessageForm;this.subSink.sink=this.gqlRequestSrv.sendContactMessage({senderName:n,contactEmail:t,message:e}).subscribe(n=>(0,i.mG)(this,void 0,void 0,function*(){n.id&&(this.contactMessageForm.reset(),yield this.displayMessage("Message sent"))}))}displayMessage(n){return(0,i.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:n,duration:5e3,position:"top"})).present()})}initForm(){this.contactMessageForm=new g.cw({name:new g.NI(null,g.kI.required),email:new g.NI(null,g.kI.compose([g.kI.required,g.kI.email])),message:new g.NI(null,g.kI.required)})}ngOnDestroy(){this.subSink.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(d.Y36(c.Rx),d.Y36(_.yF),d.Y36(s.$))},n.\u0275cmp=d.Xpm({type:n,selectors:[["syncspace-crypto-analysis-contact"]],decls:80,vars:27,consts:[[3,"fullscreen"],[1,"page-container","full-width",3,"ngClass"],[3,"userAppUrl","closeNavbar"],[1,"full-width"],[1,"nav-lg","full-width"],[1,"nav-section-widget"],[1,"h5"],[1,"nav-section-widget","text-right","hidden-md-down"],[1,"no-margin","no-padding"],[3,"routerLink","routerLinkActive"],[1,"btn","btn-danger",3,"href"],[1,"nav-section-widget","text-right","visible-flex-md-down"],["syncspaceCryptoAnalysisToggle","",1,"hamburger-menu","full-width","text-right","open-sidebar"],["ref","syncspaceCryptoAnalysisToggle"],[1,"top"],[1,"middle"],[1,"bottom"],[1,"page-content"],[1,"page-widget","questions-section"],[1,"active"],[1,"no-padding"],[1,"fa","fa-map-marker"],[1,"fa","fa-envelope-o"],["href",""],[1,"fa","fa-phone"],[1,"page-widget","answers-section"],[1,"text-danger","no-padding"],[1,"no-margin","page-subcaption"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name",1,"form-control",3,"formControlName"],[4,"ngIf"],["for","email"],["type","email","id","email",1,"form-control",3,"formControlName"],["for","message"],["id","message","cols","30","rows","10",1,"form-textarea",3,"formControlName"],["type","submit",1,"btn-block","btn","btn-danger",3,"disabled"],[3,"userAppUrl"],["class","form-helper danger",4,"ngIf"],[1,"form-helper","danger"]],template:function(n,t){if(1&n){const n=d.EpF();d.TgZ(0,"ion-content",0),d._UZ(1,"syncspace-crypto-analysis-theme-toggle"),d.TgZ(2,"section",1),d.TgZ(3,"syncspace-crypto-analysis-nav-sidebar",2),d.NdJ("closeNavbar",function(){return d.CHM(n),d.MAs(28).isOpen=!1}),d.qZA(),d.TgZ(4,"header",3),d.TgZ(5,"nav",4),d.TgZ(6,"div",5),d.TgZ(7,"h1",6),d._uU(8,"SYNCSPACE"),d.qZA(),d.qZA(),d.TgZ(9,"div",7),d.TgZ(10,"ul",8),d.TgZ(11,"li"),d.TgZ(12,"a",9),d._uU(13,"Home"),d.qZA(),d.qZA(),d.TgZ(14,"li"),d.TgZ(15,"a",9),d._uU(16,"Privacy"),d.qZA(),d.qZA(),d.TgZ(17,"li"),d.TgZ(18,"a",9),d._uU(19,"Contact"),d.qZA(),d.qZA(),d.TgZ(20,"li"),d.TgZ(21,"a",9),d._uU(22,"FAQ"),d.qZA(),d.qZA(),d.TgZ(23,"li"),d.TgZ(24,"a",10),d._uU(25,"Sign up"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(26,"div",11),d.TgZ(27,"p",12,13),d._UZ(29,"span",14),d._UZ(30,"span",15),d._UZ(31,"span",16),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(32,"main",17),d.TgZ(33,"div",18),d.TgZ(34,"ul",8),d.TgZ(35,"li",19),d.TgZ(36,"h5",20),d._UZ(37,"i",21),d._uU(38," Address "),d.qZA(),d.TgZ(39,"p"),d._uU(40," No. 50 Rodi road, Enugu "),d.qZA(),d.TgZ(41,"p"),d._uU(42," No. 50 Rodi road, Enugu "),d.qZA(),d.qZA(),d.TgZ(43,"li",19),d.TgZ(44,"h5",20),d._UZ(45,"i",22),d._uU(46," Email "),d.qZA(),d.TgZ(47,"a",23),d._uU(48," gini@gmail.com "),d.qZA(),d.qZA(),d.TgZ(49,"li",19),d.TgZ(50,"h5",20),d._UZ(51,"i",24),d._uU(52," Phone "),d.qZA(),d.TgZ(53,"a",23),d._uU(54," 09484884 "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(55,"div",25),d.TgZ(56,"h1",26),d._uU(57," Contact "),d.qZA(),d.TgZ(58,"p",27),d._uU(59," Looking for technical support or want to give us feedback? Feel free to contact us via message, & we'll try to get back to you as soon as possible "),d.qZA(),d.TgZ(60,"form",28),d.NdJ("ngSubmit",function(){return t.onSubmit()}),d.TgZ(61,"div",29),d.TgZ(62,"label",30),d._uU(63,"Name*"),d.qZA(),d._UZ(64,"input",31),d.YNc(65,P,2,1,"span",32),d.qZA(),d.TgZ(66,"div",29),d.TgZ(67,"label",33),d._uU(68,"Email*"),d.qZA(),d._UZ(69,"input",34),d.YNc(70,Z,3,2,"span",32),d.qZA(),d.TgZ(71,"div",29),d.TgZ(72,"label",35),d._uU(73,"Message*"),d.qZA(),d._UZ(74,"textarea",36),d.YNc(75,h,2,1,"span",32),d.qZA(),d.TgZ(76,"div",29),d.TgZ(77,"button",37),d._uU(78," Submit "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(79,"syncspace-crypto-analysis-footer",38),d.qZA(),d.qZA()}if(2&n){const n=d.MAs(28);d.Q6J("fullscreen",!0),d.xp6(2),d.Q6J("ngClass",d.VKq(21,x,n.isOpen)),d.xp6(1),d.Q6J("userAppUrl",t.env.userAppUrl),d.xp6(9),d.Q6J("routerLink",d.DdM(23,v))("routerLinkActive","active"),d.xp6(3),d.Q6J("routerLink",d.DdM(24,b))("routerLinkActive","active"),d.xp6(3),d.Q6J("routerLink",d.DdM(25,q))("routerLinkActive","active"),d.xp6(3),d.Q6J("routerLink",d.DdM(26,A))("routerLinkActive","active"),d.xp6(3),d.MGl("href","",t.env.userAppUrl,"/sign-up",d.LSH),d.xp6(36),d.Q6J("formGroup",t.contactMessageForm),d.xp6(4),d.Q6J("formControlName","name"),d.xp6(1),d.Q6J("ngIf",t.contactMessageForm.get("name").touched&&t.contactMessageForm.get("name").errors),d.xp6(4),d.Q6J("formControlName","email"),d.xp6(1),d.Q6J("ngIf",t.contactMessageForm.get("email").touched&&t.contactMessageForm.get("email").errors),d.xp6(4),d.Q6J("formControlName","message"),d.xp6(1),d.Q6J("ngIf",t.contactMessageForm.get("message").touched&&t.contactMessageForm.get("message").errors),d.xp6(2),d.Q6J("disabled",t.contactMessageForm.invalid),d.xp6(2),d.Q6J("userAppUrl",t.env.userAppUrl)}},directives:[_.W2,u.Q,o.mk,l.e,a.yS,_.YI,a.Od,M.m,g._Y,g.JL,g.sg,g.Fj,g.JJ,g.u,o.O5,C.c],styles:[".page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{width:100%}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%;background:var(--bg-secondary);box-shadow:var(--box-shadow-md);padding:10px 20px;position:fixed;z-index:99;top:0;display:flex;flex-direction:row;flex:1 1;justify-content:center;align-items:center}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]{width:100%}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:1px;width:40px;display:block;margin-left:calc(100% - 40px);transition:all .2s ease;background:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{margin-bottom:7px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){margin-top:7px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:10px 5px;letter-spacing:10px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;display:inline;padding:0 8px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:var(--font-size);color:var(--secondary-text-color);text-decoration:none;letter-spacing:1.5px}.page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-section-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:80%;margin:0 auto;padding:100px 0 60px;display:flex;flex:1 1;justify-content:center}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget[_ngcontent-%COMP%]{width:70%;padding:10px 15px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]{width:30%;padding-top:0}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:10px 20px 15px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:1.5px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(li:last-of-type){border-bottom:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:var(--font-size);color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{box-shadow:var(--box-shadow-md);background:var(--bg-secondary);border-left:5px solid var(--danger-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]{background:var(--bg-secondary);box-shadow:var(--box-shadow-md);padding:30px 20px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]{padding:20px 0 10px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]:not(.answer-widget:last-of-type){border-bottom:1px solid var(--border-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{letter-spacing:1.5px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .page-subcaption[_ngcontent-%COMP%]{padding:10px 0}@media (max-width:992px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:90%}}@media (max-width:768px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:100%;flex-direction:column;padding:100px 20px 60px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget[_ngcontent-%COMP%]{width:100%;padding:10px 15px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]{width:100%;padding:0 0 30px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:10px 15px 15px 10px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{letter-spacing:1px}}@media (max-width:576px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:100%;flex-direction:column;padding:100px 20px 60px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget[_ngcontent-%COMP%]{width:100%;padding:10px 15px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]{width:100%;padding:0 0 30px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.questions-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:10px 15px 15px 10px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .page-widget.answers-section[_ngcontent-%COMP%]   .answer-widget[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{letter-spacing:1px}}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),n})();var U=e(7365);let k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[o.ez,U.m,T]]}),n})()}}]);