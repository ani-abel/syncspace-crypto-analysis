(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[8025],{8025:(n,t,e)=>{"use strict";e.r(t),e.d(t,{EditAnalysisModule:()=>l});var o=e(1511),i=e(8859),a=e(6002),c=e(5947),g=e(883),r=e(3695);const s=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["syncspace-crypto-analysis-edit-analysis"]],decls:38,vars:0,consts:[[1,"page-container","full-width"],[1,"page-content"],[1,"form-section"],[1,"no-padding","text-danger","text-center"],[1,"form-group"],["for","analysis-image"],["accept","image/*","type","file","id","analysis-image",1,"display-none"],["fileUploadEl",""],[1,"btn","btn-danger","slim-button",3,"click"],[1,"image-preview","mt-20","full-width"],["src","/assets/images/financial-analysis-pic1.jpg","alt","Analysis image"],["for","title"],["type","text","id","title",1,"form-control"],["for","analysis-content"],["id","analysis-content","cols","30","rows","10",1,"form-textarea"],["for","last-name"],["id","market",1,"form-control"],["value",""],[1,"btn","btn-danger","btn-block"]],template:function(n,t){if(1&n){const n=c.EpF();c._UZ(0,"syncspace-crypto-analysis-theme-toggle"),c.TgZ(1,"section",0),c.TgZ(2,"main",1),c.TgZ(3,"div",2),c.TgZ(4,"h2",3),c._uU(5,"Edit Analysis"),c.qZA(),c.TgZ(6,"form"),c.TgZ(7,"div",4),c.TgZ(8,"label",5),c._uU(9,"Image*"),c.qZA(),c._uU(10,"\xa0 "),c._UZ(11,"input",6,7),c.TgZ(13,"button",8),c.NdJ("click",function(){return c.CHM(n),c.MAs(12).click()}),c._uU(14," Select Image "),c.qZA(),c.ynx(15),c.TgZ(16,"div",9),c._UZ(17,"img",10),c.qZA(),c.BQk(),c.qZA(),c.TgZ(18,"div",4),c.TgZ(19,"label",11),c._uU(20,"Title*"),c.qZA(),c._UZ(21,"input",12),c.qZA(),c.TgZ(22,"div",4),c.TgZ(23,"label",13),c._uU(24,"Content*"),c.qZA(),c._UZ(25,"textarea",14),c.qZA(),c.ynx(26),c.TgZ(27,"div",4),c.TgZ(28,"label",15),c._uU(29,"Package*"),c.qZA(),c.TgZ(30,"select",16),c.TgZ(31,"option",17),c._uU(32,"DIAMOND"),c.qZA(),c.TgZ(33,"option",17),c._uU(34,"GOLD"),c.qZA(),c.qZA(),c.qZA(),c.BQk(),c.TgZ(35,"div",4),c.TgZ(36,"button",18),c._uU(37," Submit "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}},directives:[g.Q,r._Y,r.JL,r.F,r.YN,r.Kr],styles:[".page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:50%;margin:0 auto;padding:50px 0 80px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{width:100%;padding:20px;background:var(--bg-secondary);box-shadow:var(--box-shadow-md)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .page-subcaption[_ngcontent-%COMP%]{padding:10px 0}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;flex:1 1}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;list-style:none}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:1px}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:var(--font-size);font-weight:700;letter-spacing:1.5px;color:var(--primary-text-color)}.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--secondary-text-color)}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{height:300px}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;box-shadow:var(--box-shadow-md)}.page-container[_ngcontent-%COMP%]   .slim-button[_ngcontent-%COMP%]{height:30px;--font-size:14px;font-size:var(--font-size)}@media (max-width:992px){.image-preview[_ngcontent-%COMP%]{height:200px}}@media (max-width:768px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:80%;padding:30px 0 80px}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{height:200px}}@media (max-width:576px){.page-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:100%;padding:30px 0 80px}.page-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{height:150px}}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[a.Bz.forChild(s)],a.Bz]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,i.s,p]]}),n})()}}]);