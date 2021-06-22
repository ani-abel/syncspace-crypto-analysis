(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[4460],{4460:(n,t,e)=>{"use strict";e.r(t),e.d(t,{AddAnalysisModule:()=>C});var o=e(1511),i=e(8859),a=e(6002),c=e(5947),r=e(3695),s=e(4762),g=e(3710),p=e(3431);function l(n,t){if(1&n&&c._UZ(0,"img",2),2&n){const n=c.oxw();c.Udp("width",n.width)("height",n.height),c.Q6J("src",n._src,c.LSH)}}function d(n,t){1&n&&c._UZ(0,"ion-skeleton-text",3)}const{Filesystem:_}=g.Vn;let m=(()=>{class n{constructor(){this.spinner=!1,this.width="100%",this.height="100%",this._src=""}set src(n){const t=n.split("/").pop(),e=t.split(".").pop();_.readFile({directory:g.QT.Cache,path:`CACHED-IMG/${t}`}).then(({data:n})=>{this._src=`data:image/${e};base64,${n}`}).catch(o=>(0,s.mG)(this,void 0,void 0,function*(){yield this.storeImage(n,t),_.readFile({directory:g.QT.Cache,path:`CACHED-IMG/${t}`}).then(({data:n})=>{this._src=`data:image/${e};base64,${n}`})}))}storeImage(n,t){return(0,s.mG)(this,void 0,void 0,function*(){const e=n.startsWith("http")?yield fetch(`https://http-cors-proxy.herokuapp.com/${n}`):yield fetch(n),o=yield e.blob(),i=yield this.convertBlobToBase64(o);return yield _.writeFile({path:`CACHED-IMG/${t}`,data:i,directory:g.QT.Cache})})}convertBlobToBase64(n){return new Promise((t,e)=>{const o=new FileReader;o.onerror=e,o.onload=()=>{t(o.result)},o.readAsDataURL(n)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["syncspace-crypto-analysis-cached-image"]],inputs:{spinner:"spinner",width:"width",height:"height",src:"src"},decls:3,vars:2,consts:[[3,"src","width","height",4,"ngIf","ngIfElse"],["loading",""],[3,"src"],["animated",""]],template:function(n,t){if(1&n&&(c.YNc(0,l,1,5,"img",0),c.YNc(1,d,1,0,"ng-template",null,1,c.W1O)),2&n){const n=c.MAs(2);c.Q6J("ngIf",""!==t._src)("ngIfElse",n)}},directives:[o.O5,p.CK],styles:["ion-skeleton-text[_ngcontent-%COMP%]{width:100%;height:100%;margin:0 auto}"]}),n})();const h=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["syncspace-crypto-analysis-add-analysis"]],decls:52,vars:1,consts:[[1,"page-container","full-width"],[1,"page-content"],[1,"form-section"],[1,"no-padding","text-danger","text-center"],[1,"form-group"],["for","analysis-image"],["accept","image/*","type","file","id","analysis-image",1,"display-none"],["fileUploadEl",""],[1,"btn","btn-danger","slim-button",3,"click"],[1,"image-preview","mt-20","full-width"],[3,"src"],["for","title"],["type","text","id","title",1,"form-control"],["for","analysis-content"],["id","analysis-content","cols","30","rows","10",1,"form-textarea"],["for","visible-to"],[1,"radio"],["id","radio-1","name","visible-to","type","radio","checked",""],["for","radio-1",1,"radio-label","cursor-pointer"],["id","radio-2","name","visible-to","type","radio"],["for","radio-2",1,"radio-label","cursor-pointer"],["id","radio-3","name","visible-to","type","radio"],["for","radio-3",1,"radio-label","cursor-pointer"],["for","last-name"],["id","market",1,"form-control"],["value",""],[1,"btn","btn-danger","btn-block"]],template:function(n,t){if(1&n){const n=c.EpF();c.TgZ(0,"section",0),c.TgZ(1,"main",1),c.TgZ(2,"div",2),c.TgZ(3,"h2",3),c._uU(4,"Add Analysis"),c.qZA(),c.TgZ(5,"form"),c.TgZ(6,"div",4),c.TgZ(7,"label",5),c._uU(8,"Image*"),c.qZA(),c._uU(9,"\xa0 "),c._UZ(10,"input",6,7),c.TgZ(12,"button",8),c.NdJ("click",function(){return c.CHM(n),c.MAs(11).click()}),c._uU(13," Select Image "),c.qZA(),c.ynx(14),c.TgZ(15,"div",9),c._UZ(16,"syncspace-crypto-analysis-cached-image",10),c.qZA(),c.BQk(),c.qZA(),c.TgZ(17,"div",4),c.TgZ(18,"label",11),c._uU(19,"Title*"),c.qZA(),c._UZ(20,"input",12),c.qZA(),c.TgZ(21,"div",4),c.TgZ(22,"label",13),c._uU(23,"Content*"),c.qZA(),c._UZ(24,"textarea",14),c.qZA(),c.TgZ(25,"div",4),c.TgZ(26,"label",15),c._uU(27,"Visible to*"),c.qZA(),c.TgZ(28,"div",16),c._UZ(29,"input",17),c.TgZ(30,"label",18),c._uU(31,"Public"),c.qZA(),c.qZA(),c.TgZ(32,"div",16),c._UZ(33,"input",19),c.TgZ(34,"label",20),c._uU(35,"Only Subscribers"),c.qZA(),c.qZA(),c.TgZ(36,"div",16),c._UZ(37,"input",21),c.TgZ(38,"label",22),c._uU(39,"Specific Package"),c.qZA(),c.qZA(),c.qZA(),c.ynx(40),c.TgZ(41,"div",4),c.TgZ(42,"label",23),c._uU(43,"Package*"),c.qZA(),c.TgZ(44,"select",24),c.TgZ(45,"option",25),c._uU(46,"DIAMOND"),c.qZA(),c.TgZ(47,"option",25),c._uU(48,"GOLD"),c.qZA(),c.qZA(),c.qZA(),c.BQk(),c.TgZ(49,"div",4),c.TgZ(50,"button",26),c._uU(51," Submit "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}2&n&&(c.xp6(16),c.Q6J("src","https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"))},directives:[r._Y,r.JL,r.F,m,r.YN,r.Kr],styles:[".page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:50%;margin:0 auto;padding:50px 0 80px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{width:100%;padding:20px;background:var(--bg-secondary);box-shadow:var(--box-shadow-md)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-subcaption[_ngcontent-%COMP%]{padding:10px 0}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;flex:1 1}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;list-style:none}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:1px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:var(--font-size);font-weight:700;letter-spacing:1.5px;color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--secondary-text-color)}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{height:300px}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;box-shadow:var(--box-shadow-md)}.page-container[_ngcontent-%COMP%]   .slim-button[_ngcontent-%COMP%]{height:30px;--font-size:14px;font-size:var(--font-size)}@media (max-width:992px){.image-preview[_ngcontent-%COMP%]{height:200px}}@media (max-width:768px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:80%;padding:30px 0 80px}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{height:200px}}@media (max-width:576px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:100%;padding:30px 0 80px}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{height:150px}}"]}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,i.s,u]]}),n})()}}]);