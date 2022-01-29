"use strict";(self.webpackChunksocket_client=self.webpackChunksocket_client||[]).push([[845],{5845:(_,g,s)=>{s.r(g),s.d(g,{AuthModule:()=>q});var l=s(9808),a=s(5955),n=s(2382),e=s(5e3),d=s(5397);function p(t,i){1&t&&(e.TgZ(0,"div",19),e._uU(1,"Este campo es requerido"),e.qZA())}function c(t,i){1&t&&(e.TgZ(0,"div",19),e._uU(1,"No puedes superar los 20 caracteres"),e.qZA())}function f(t,i){1&t&&(e.TgZ(0,"div",19),e._uU(1,"Este campo es requerido"),e.qZA())}function Z(t,i){1&t&&(e.TgZ(0,"div",19),e._uU(1,"No puedes superar los 20 caracteres"),e.qZA())}function v(t,i){if(1&t&&(e.TgZ(0,"p",20),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.errorMsg)}}function b(t,i){if(1&t&&(e.TgZ(0,"button",21),e._uU(1,"Ingresar"),e.qZA()),2&t){const o=e.oxw();e.Q6J("disabled",!o.form.valid)}}function h(t,i){1&t&&(e.TgZ(0,"button",22),e._uU(1,"Ingresando..."),e.qZA())}const m=function(t,i){return{"is-valid":t,"is-invalid":i}},T=[{path:"login",component:(()=>{class t{constructor(o,r,u){this.fb=o,this.authService=r,this.router=u,this.sending=!1,this.errorMsg="",this.form=this.fb.group({username:["",[n.kI.required,n.kI.maxLength(20)]],password:["",[n.kI.required,n.kI.maxLength(20)]]})}ngOnInit(){}login(){this.authService.login(this.form.value).subscribe(o=>{this.router.navigate(["/"])},o=>this.errorMsg=o.error.msg)}get f(){return this.form.controls}isValid(o){return this.f[o].touched&&this.f[o].valid}isInvalid(o){return this.f[o].touched&&this.f[o].invalid}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(n.qu),e.Y36(d.e),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login-page"]],decls:28,vars:16,consts:[[1,"login","p-fixed","d-flex","text-center","common-img-bg"],[1,"auth-fluid"],[1,"row"],[1,"col-sm-12"],[1,"login-card","card-body","auth-body"],[1,"md-float-material",3,"formGroup","submit"],[1,"auth-box"],[1,"row","m-b-20"],[1,"col-md-12"],[1,"text-left","txt-primary"],[1,"input-group"],["type","text","formControlName","username","placeholder","Ingrese Usuario",1,"form-control",3,"ngClass"],["class","invalid-feedback text-left",4,"ngIf"],[1,"md-line"],["type","password","formControlName","password","placeholder","Ingrese Contrase\xf1a",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"row","m-t-30"],["type","submit","class","btn btn-primary btn-md btn-block waves-effect m-b-20",3,"disabled",4,"ngIf"],["type","button","disabled","","class","btn btn-primary btn-md btn-block waves-effect m-b-20",4,"ngIf"],[1,"invalid-feedback","text-left"],[1,"text-danger"],["type","submit",1,"btn","btn-primary","btn-md","btn-block","waves-effect","m-b-20",3,"disabled"],["type","button","disabled","",1,"btn","btn-primary","btn-md","btn-block","waves-effect","m-b-20"]],template:function(o,r){1&o&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"form",5),e.NdJ("submit",function(){return r.login()}),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.TgZ(9,"h3",9),e._uU(10,"Iniciar sesi\xf3n"),e.qZA(),e.qZA(),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"div",10),e._UZ(13,"input",11),e.YNc(14,p,2,0,"div",12),e.YNc(15,c,2,0,"div",12),e._UZ(16,"span",13),e.qZA(),e.TgZ(17,"div",10),e._UZ(18,"input",14),e.YNc(19,f,2,0,"div",12),e.YNc(20,Z,2,0,"div",12),e._UZ(21,"span",13),e.qZA(),e.YNc(22,v,2,1,"p",15),e.TgZ(23,"div",16),e.TgZ(24,"div",8),e.YNc(25,b,2,1,"button",17),e.YNc(26,h,2,0,"button",18),e.qZA(),e.qZA(),e._UZ(27,"hr"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.form),e.xp6(8),e.Q6J("ngClass",e.WLB(10,m,r.isValid("username"),r.isInvalid("username"))),e.xp6(1),e.Q6J("ngIf",null==r.f.username.errors?null:r.f.username.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.f.username.errors?null:r.f.username.errors.maxlength),e.xp6(3),e.Q6J("ngClass",e.WLB(13,m,r.isValid("password"),r.isInvalid("password"))),e.xp6(1),e.Q6J("ngIf",null==r.f.password.errors?null:r.f.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==r.f.username.errors?null:r.f.username.errors.maxlength),e.xp6(2),e.Q6J("ngIf",r.errorMsg),e.xp6(3),e.Q6J("ngIf",!r.sending),e.xp6(1),e.Q6J("ngIf",r.sending))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,l.mk,l.O5],styles:[""]}),t})()},{path:"registro",component:(()=>{class t{constructor(o){this.fb=o,this.form=this.fb.group({cedula:["",n.kI.required],password:["",n.kI.required],nombres:["",n.kI.required],apellidos:["",n.kI.required],licencia:["",n.kI.required],categoria:[""]})}ngOnInit(){}register(){console.log(this.form.value)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(n.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register-page"]],decls:44,vars:1,consts:[[1,"login","p-fixed","d-flex","text-center","bg-primary","common-img-bg"],[1,"auth-fluid"],[1,"row"],[1,"col-sm-12"],[1,"login-card","card-body","auth-body"],[1,"md-float-material",3,"formGroup","submit"],[1,"auth-box"],[1,"row","m-b-20"],[1,"col-md-12"],[1,"text-left","txt-primary"],[1,"input-group"],["formControlName","cedula","type","text","placeholder","Usuario",1,"form-control"],[1,"md-line"],["formControlName","password","type","password","placeholder","Contrase\xf1a",1,"form-control"],["formControlName","nombres","type","text","placeholder","Nombres",1,"form-control"],["formControlName","apellidos","type","text","placeholder","Apellidos",1,"form-control"],["formControlName","licencia","type","text","placeholder","Licencia",1,"form-control"],["formControlName","categoria","type","text","placeholder","Categoria",1,"form-control"],[1,"row","m-t-25","text-left"],[1,"col-sm-7","col-xs-12"],[1,"checkbox-fade","fade-in-primary"],[1,"text-inverse"],[1,"col-sm-5","col-xs-12","forgot-phone","text-right"],["routerLink","/auth/login",1,"text-right","f-w-600","text-inverse"],[1,"row","m-t-30"],["type","submit",1,"btn","btn-primary","btn-md","btn-block","waves-effect","text-center","m-b-20"]],template:function(o,r){1&o&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"form",5),e.NdJ("submit",function(){return r.register()}),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"div",8),e.TgZ(9,"h3",9),e._uU(10,"Registro"),e.qZA(),e.qZA(),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"div",10),e._UZ(13,"input",11),e._UZ(14,"span",12),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"input",13),e._UZ(17,"span",12),e.qZA(),e.TgZ(18,"div",10),e._UZ(19,"input",14),e._UZ(20,"span",12),e.qZA(),e.TgZ(21,"div",10),e._UZ(22,"input",15),e._UZ(23,"span",12),e.qZA(),e.TgZ(24,"div",10),e._UZ(25,"input",16),e._UZ(26,"span",12),e.qZA(),e.TgZ(27,"div",10),e._UZ(28,"input",17),e._UZ(29,"span",12),e.qZA(),e.TgZ(30,"div",18),e.TgZ(31,"div",19),e.TgZ(32,"div",20),e.TgZ(33,"label"),e.TgZ(34,"span",21),e._uU(35,"\xbfYa tienes una cuenta?"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",22),e.TgZ(37,"a",23),e._uU(38,"Ingresar"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(39,"div",24),e.TgZ(40,"div",8),e.TgZ(41,"button",25),e._uU(42,"Registro"),e.qZA(),e.qZA(),e.qZA(),e._UZ(43,"hr"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.form))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,a.yS],styles:[""]}),t})()},{path:"",redirectTo:"login",pathMatch:"full"}];let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(T)],a.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,A,n.UX]]}),t})()}}]);