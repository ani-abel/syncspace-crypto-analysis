(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[2791],{397:(t,e,n)=>{"use strict";n.r(e),n.d(e,{MyProfileModule:()=>d});var o=n(1511),i=n(4770),c=n(9086),s=n(1572),a=n(4989);const r=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["syncspace-crypto-analysis-my-profile"]],decls:2,vars:1,consts:[[1,"page-container"],[3,"canEdit"]],template:function(t,e){1&t&&(s.TgZ(0,"main",0),s._UZ(1,"syncspace-crypto-analysis-user-profile-card",1),s.qZA()),2&t&&(s.xp6(1),s.Q6J("canEdit",!0))},directives:[a.E],styles:[".page-container[_ngcontent-%COMP%]{width:50%;margin:0 auto;padding:20px 0 50px}@media (max-width:768px){.page-container[_ngcontent-%COMP%]{width:70%}}@media (max-width:576px){.page-container[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.Bz.forChild(r)],c.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,i.s9,l]]}),t})()},6595:(t,e,n)=>{"use strict";n.d(e,{h:()=>m});var o=n(4762),i=n(3710),c=n(1572),s=n(1511),a=n(447);let r=(()=>{class t{constructor(){this.closeModal=new c.vpe}ngOnInit(){console.log(this.imagePath),console.log(this.altText)}onClose(){this.closeModal.emit(!0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["syncspace-crypto-analysis-image-preview"]],inputs:{imagePath:"imagePath",altText:"altText"},outputs:{closeModal:"closeModal"},decls:7,vars:5,consts:[["id","myModal",1,"modal"],[1,"close",3,"click"],["id","img01",1,"modal-content",3,"src","alt"],["id","caption"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"span",1),c.NdJ("click",function(){return e.onClose()}),c._uU(2,"\xd7"),c.qZA(),c._UZ(3,"img",2),c.TgZ(4,"div",3),c._uU(5),c.ALo(6,"uppercase"),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Q6J("src",e.imagePath,c.LSH)("alt",e.altText),c.xp6(2),c.Oqu(c.lcZ(6,3,e.altText)))},pipes:[s.gd],styles:[".modal[_ngcontent-%COMP%]{display:block;position:fixed;z-index:99999;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.9)}.modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80vw;height:60vh;object-fit:cover}#caption[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]{margin:auto;display:block;width:80%;max-width:700px}#caption[_ngcontent-%COMP%]{text-align:center;color:#ccc;padding:10px 0;height:150px}#caption[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]{animation-name:zoom;animation-duration:.6s}@keyframes zoom{0%{transform:scale(0)}to{transform:scale(1)}}.close[_ngcontent-%COMP%]{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close[_ngcontent-%COMP%]:focus, .close[_ngcontent-%COMP%]:hover{color:#bbb;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content[_ngcontent-%COMP%]{width:100%}}@media (max-width:576px){.modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90vw;height:70vh}}"]}),t})();const l=function(t){return{"rounder-img":t}};function d(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"img",3),c.NdJ("click",function(){c.CHM(t);const e=c.oxw();return e.openModal(e._src)}),c.qZA()}if(2&t){const t=c.oxw();c.Udp("width",t.width)("height",t.height),c.Q6J("src",t._src,c.LSH)("alt",t._alt)("ngClass",c.VKq(7,l,t.isRounded))}}function p(t,e){1&t&&c._UZ(0,"ion-skeleton-text",4)}function g(t,e){if(1&t){const t=c.EpF();c.ynx(0),c.TgZ(1,"syncspace-crypto-analysis-image-preview",5),c.NdJ("closeModal",function(){return c.CHM(t),c.oxw().closeModal()}),c.qZA(),c.BQk()}if(2&t){const t=c.oxw();c.xp6(1),c.Q6J("altText",t._alt)("imagePath",t._src)}}const{Filesystem:h}=i.Vn;let m=(()=>{class t{constructor(){this.spinner=!1,this.width="100%",this.height="100%",this.isImagePreviewed=!1,this._src="",this._alt=""}set alt(t){this._alt=t}set src(t){const e=t.split("/").pop(),n=e.split(".").pop();h.readFile({directory:i.QT.Cache,path:`CACHED-IMG/${e}`}).then(({data:t})=>{this._src=`data:image/${n};base64,${t}`}).catch(c=>(0,o.mG)(this,void 0,void 0,function*(){yield this.storeImage(t,e),h.readFile({directory:i.QT.Cache,path:`CACHED-IMG/${e}`}).then(({data:t})=>{this._src=`data:image/${n};base64,${t}`})}))}storeImage(t,e){return(0,o.mG)(this,void 0,void 0,function*(){const n=t.startsWith("http")?yield fetch(`https://http-cors-proxy.herokuapp.com/${t}`):yield fetch(t),o=yield n.blob(),c=yield this.convertBlobToBase64(o);return yield h.writeFile({path:`CACHED-IMG/${e}`,data:c,directory:i.QT.Cache})})}openModal(t){this.isImagePreviewed=!0}closeModal(){this.isImagePreviewed=!1}convertBlobToBase64(t){return new Promise((e,n)=>{const o=new FileReader;o.onerror=n,o.onload=()=>{e(o.result)},o.readAsDataURL(t)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["syncspace-crypto-analysis-cached-image"]],inputs:{spinner:"spinner",width:"width",height:"height",isRounded:"isRounded",alt:"alt",src:"src"},decls:4,vars:3,consts:[["class","cursor-pointer",3,"src","alt","ngClass","width","height","click",4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"cursor-pointer",3,"src","alt","ngClass","click"],["animated",""],[3,"altText","imagePath","closeModal"]],template:function(t,e){if(1&t&&(c.YNc(0,d,1,9,"img",0),c.YNc(1,p,1,0,"ng-template",null,1,c.W1O),c.YNc(3,g,2,2,"ng-container",2)),2&t){const t=c.MAs(2);c.Q6J("ngIf",""!==e._src)("ngIfElse",t),c.xp6(3),c.Q6J("ngIf",e.isImagePreviewed)}},directives:[s.O5,s.mk,a.CK,r],styles:["ion-skeleton-text[_ngcontent-%COMP%]{width:100%;height:100%;margin:0 auto}img[_ngcontent-%COMP%]{object-fit:cover;vertical-align:middle}.rounder-img[_ngcontent-%COMP%]{border-radius:100%}"]}),t})()},1133:(t,e,n)=>{"use strict";n.d(e,{e:()=>c});var o=n(9729),i=n(1572);let c=(()=>{class t{transform(t){if(t){const e=t.split(".").map(t=>t.trim());if((null==e?void 0:e.length)>1){const t=[];for(const n of e){const e=(0,o.KN)(n);t.push(e)}return t.join(". ").trim()}return(0,o.KN)(t)}return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Yjl({name:"capitalize",type:t,pure:!0}),t})()}}]);