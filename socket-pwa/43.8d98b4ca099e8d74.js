"use strict";(self.webpackChunksocket_pwa=self.webpackChunksocket_pwa||[]).push([[43],{2043:(E,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>_});var f=a(9808),l=a(9539),t=a(5e3);let A=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],decls:3,vars:0,consts:[[1,"vh-100"],[1,"container","py-5","h-100"]],template:function(e,r){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t._UZ(2,"router-outlet"),t.qZA(),t.qZA())},directives:[l.lC],styles:[""]}),o})();var n=a(2382),h=a(7423),v=a(2290);let T=(()=>{class o{constructor(e,r,s,u){this.fb=e,this.authService=r,this.toastrService=s,this.router=u,this.form=this.fb.group({username:["",n.kI.required],password:["",n.kI.required]})}ngOnInit(){}login(){this.form.invalid||this.authService.login(this.form.value).subscribe(e=>{e.user.isDriver?(this.saveRoute("driver"),this.router.navigateByUrl("/admin/driver")):e.user.isControl?(this.saveRoute("control"),this.router.navigateByUrl("/admin/control")):e.user.isAssistant?(this.saveRoute("warehouse"),this.router.navigateByUrl("/admin/warehouse")):e.user.isOperator&&(this.saveRoute("forklift"),this.router.navigateByUrl("/admin/forklift"))},e=>{this.toastrService.error(e.error.error,"Error")})}saveRoute(e){localStorage.setItem("route",e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(h.e),t.Y36(v._W),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:2,consts:[[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"card",2,"border-radius","1rem"],[1,"card-body","p-md-5","text-center"],[1,"mb-md-5","mt-md-4","pb-3"],[1,"mb-3"],["src","../../../../assets/images/logo.png",1,"img-fluid","mb-2",2,"width","85px"],[1,"fw-bold","mb-2"],[3,"formGroup","submit"],[1,"form-floating","mb-4"],["formControlName","username","type","text","placeholder","Usuario",1,"form-control"],[1,"label"],["formControlName","password","type","password","placeholder","Contrase\xf1a","name","password","autocomplete","on",1,"form-control"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-outline-primary","btn-lg","px-5",3,"disabled"],[1,"mb-0"],["routerLink","/auth/registration",1,"text-primary-50","fw-bold"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"h4",7),t._uU(8,"Sistema de colas"),t.qZA(),t.TgZ(9,"h5",5),t._uU(10,"Ingresar"),t.qZA(),t.TgZ(11,"form",8),t.NdJ("submit",function(){return r.login()}),t.TgZ(12,"div",9),t._UZ(13,"input",10),t.TgZ(14,"label",11),t._uU(15,"Usuario"),t.qZA(),t.qZA(),t.TgZ(16,"div",9),t._UZ(17,"input",12),t.TgZ(18,"label",11),t._uU(19,"Contrase\xf1a"),t.qZA(),t.qZA(),t.TgZ(20,"div",13),t.TgZ(21,"button",14),t._uU(22,"Ingresar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div"),t.TgZ(24,"p",15),t._uU(25," \xbfNo tienes cuenta todav\xeda? "),t.TgZ(26,"a",16),t._uU(27," Registrarme "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(11),t.Q6J("formGroup",r.form),t.xp6(10),t.Q6J("disabled",r.form.invalid))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,l.yS],styles:[""]}),o})();var m=a(1134),c=a(9444);const Z=function(o){return["fas",o]};let b=(()=>{class o{constructor(e,r){this.bsModalRef=e,this.router=r}ngOnInit(){}navigate(){this.bsModalRef.hide(),this.router.navigateByUrl(this.link)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.UZ),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-modal-confirm"]],decls:11,vars:15,consts:[[1,"p-3"],[1,"text-center"],["size","2x",3,"icon"],[1,"mb-3"],[1,"d-grid","gap-2"],[1,"btn","btn-primary",3,"click"],[3,"icon"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h3"),t._uU(3),t.qZA(),t._UZ(4,"fa-icon",2),t.TgZ(5,"p",3),t._uU(6),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"button",5),t.NdJ("click",function(){return r.navigate()}),t._UZ(9,"fa-icon",6),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Tol(r.color),t.xp6(1),t.Oqu(r.title),t.xp6(1),t.Gre("",r.colorIcon," mb-3"),t.Q6J("icon",t.VKq(11,Z,r.icon)),t.xp6(2),t.hij(" ",r.message," "),t.xp6(3),t.Q6J("icon",t.VKq(13,Z,r.iconBtn)),t.xp6(1),t.hij(" ",r.textBtn," "))},directives:[c.BN],encapsulation:2}),o})();var C=a(2340),x=a(9646),y=a(5963),q=a(3900),U=a(4004),N=a(520);const{endpoint:I}=C.N;let M=(()=>{class o{constructor(e,r){this.http=e,this.modalService=r}validate(){return e=>e.pristine?(0,x.of)(null):(0,y.H)(500).pipe((0,q.w)(()=>this.validateCedula(e.value)),(0,U.U)(r=>r?(this.openModalConfirm(r),{documentAlreadyExists:!0}):null))}validateCedula(e){return this.http.get(`${I}/auth/exist-user?document=${e}`)}openModalConfirm(e){this.bsModalRef=this.modalService.show(b,this.itIsRegistered(e)),this.bsModalRef.content.closeBtnName="Close"}itIsRegistered(e){const{firstName:r,lastName:s}=e;return{class:"modal-dialog-centered",initialState:{title:"\xa1Ya est\xe1 registrado!",color:"text-danger",colorIcon:"text-warning",message:`Sr. ${r} ${s}, usted ya esta registrado en el sistema de colas "WMS".Proceda a iniciar sesi\xf3n o registrarse desde el control.`,icon:"exclamation-triangle",iconBtn:"arrow-alt-circle-right",link:"/auth/login",textBtn:"Iniciar sesi\xf3n"}}}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(N.eN),t.LFG(m.tT))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function R(o,i){if(1&o&&(t.TgZ(0,"span",21),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.documentErrorMsg," ")}}function S(o,i){1&o&&(t.TgZ(0,"span",21),t._uU(1," Nombres es requerido "),t.qZA())}function J(o,i){1&o&&(t.TgZ(0,"span",21),t._uU(1," Apellidos es requerido "),t.qZA())}const F=function(){return["fas","book"]};function B(o,i){if(1&o&&(t.TgZ(0,"button",22),t._UZ(1,"fa-icon",23),t._uU(2," Registrarme "),t.qZA()),2&o){const e=t.oxw();t.Q6J("disabled",e.form.invalid),t.xp6(1),t.Q6J("icon",t.DdM(2,F))}}const Y=function(){return["fas","spinner"]};function w(o,i){1&o&&(t.TgZ(0,"button",24),t._UZ(1,"fa-icon",23),t._uU(2," Espere... "),t.qZA()),2&o&&(t.xp6(1),t.Q6J("icon",t.DdM(1,Y)))}const L=[{path:"",component:A,children:[{path:"login",component:T},{path:"registration",component:(()=>{class o{constructor(e,r,s,u,g){this.modalService=e,this.fb=r,this.cedulaValidator=s,this.authService=u,this.toastrService=g,this.loading=!1,this.form=this.fb.group({document:["",[n.kI.required,n.kI.minLength(8),n.kI.pattern("^[0-9]*$")],[this.cedulaValidator.validate()]],firstName:["",[n.kI.required]],lastName:["",[n.kI.required]],licence:[""],category:[""],isDriver:[!0]})}ngOnInit(){}openModalConfirm(e){this.bsModalRef=this.modalService.show(b,this.isRegistered(e)),this.bsModalRef.content.closeBtnName="Close"}isRegistered(e){const{firstName:r,lastName:s,username:u,password:g}=e;return{class:"modal-dialog-centered",keyboard:!1,ignoreBackdropClick:!0,initialState:{title:"\xa1\xa1\xa1Registro exitoso!!!",color:"text-success",colorIcon:"text-success",message:`Bienvenido Sr. ${r} ${s}, sea registrado correctamente en el sistema de colas "WMS". \n          \n Usuario: ${u} \n          \n Contrase\xf1a: ${g}`,icon:"check",iconBtn:"arrow-alt-circle-right",link:"/auth/login",textBtn:"Adelante"}}}get documentErrorMsg(){var e;const r=null===(e=this.form.get("document"))||void 0===e?void 0:e.errors;return(null==r?void 0:r.required)?"Dni es requerido":r.documentAlreadyExists?"Ya existe usuario con ese documento":(null==r?void 0:r.minlength)?"DNI debe tener al menos 8 caracteres":(null==r?void 0:r.pattern)?"Solo se acepta n\xfameros":""}invalidField(e){var r,s;return(null===(r=this.form.get(e))||void 0===r?void 0:r.invalid)&&(null===(s=this.form.get(e))||void 0===s?void 0:s.touched)}register(){this.form.invalid||(this.loading=!0,this.authService.register(this.form.value).subscribe(e=>{this.openModalConfirm(e),this.loading=!1},e=>{this.loading=!1,this.toastrService.error(e.error.error,"Error")}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.tT),t.Y36(n.qu),t.Y36(M),t.Y36(h.e),t.Y36(v._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registration"]],decls:32,vars:6,consts:[[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"card",2,"border-radius","1rem"],[1,"card-body","p-md-5"],[1,"mb-md-5","mt-md-2","pb-2"],[1,"text-center"],[1,"mb-3"],["src","../../../../assets/images/logo.png",1,"img-fluid","mb-2",2,"width","85px"],[1,"fw-bold","mb-3"],[3,"formGroup","submit"],["formControlName","document","type","text","placeholder","Ced\xfala/DNI",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["formControlName","firstName","type","text","placeholder","Nombres",1,"form-control"],["formControlName","lastName","type","text","placeholder","Apellidos",1,"form-control"],["formControlName","licence","type","text","placeholder","Licencia de conducir",1,"form-control"],["formControlName","category","type","text","placeholder","Categoria",1,"form-control"],[1,"d-grid","gap-2"],["class","btn btn-outline-primary  px-5","type","submit",3,"disabled",4,"ngIf"],["class","btn btn-outline-primary  px-5","disabled","",4,"ngIf"],[1,"mb-0"],["routerLink","/auth/login",1,"text-primary-50","fw-bold"],[1,"form-text","text-danger"],["type","submit",1,"btn","btn-outline-primary","px-5",3,"disabled"],[3,"icon"],["disabled","",1,"btn","btn-outline-primary","px-5"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t._UZ(7,"img",7),t.qZA(),t.TgZ(8,"h4",8),t._uU(9,"Me registrar\xe9"),t.qZA(),t.qZA(),t.TgZ(10,"form",9),t.NdJ("submit",function(){return r.register()}),t.TgZ(11,"div",6),t._UZ(12,"input",10),t.YNc(13,R,2,1,"span",11),t.qZA(),t.TgZ(14,"div",6),t._UZ(15,"input",12),t.YNc(16,S,2,0,"span",11),t.qZA(),t.TgZ(17,"div",6),t._UZ(18,"input",13),t.YNc(19,J,2,0,"span",11),t.qZA(),t.TgZ(20,"div",6),t._UZ(21,"input",14),t.qZA(),t.TgZ(22,"div",6),t._UZ(23,"input",15),t.qZA(),t.TgZ(24,"div",16),t.YNc(25,B,3,3,"button",17),t.YNc(26,w,3,2,"button",18),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",5),t.TgZ(28,"p",19),t._uU(29," \xbfYa tienes cuenta? "),t.TgZ(30,"a",20),t._uU(31," Ingresar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("formGroup",r.form),t.xp6(3),t.Q6J("ngIf",r.invalidField("document")),t.xp6(3),t.Q6J("ngIf",r.invalidField("firstName")),t.xp6(3),t.Q6J("ngIf",r.invalidField("lastName")),t.xp6(6),t.Q6J("ngIf",!r.loading),t.xp6(1),t.Q6J("ngIf",r.loading))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,f.O5,c.BN,l.yS],styles:[""]}),o})()},{path:"",redirectTo:"login",pathMatch:"full"}]}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(L)],l.Bz]}),o})();var d=a(801),k=a(3596);let _=(()=>{class o{constructor(e){e.addIcons(d.FL8,d.eHv,d.JYN,d.LEp,d.LM3)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(c.by))},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,Q,c.uH,k.N,n.UX]]}),o})()}}]);