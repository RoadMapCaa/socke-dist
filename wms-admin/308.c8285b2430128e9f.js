"use strict";(self.webpackChunkwms_admin=self.webpackChunkwms_admin||[]).push([[308],{5308:(D,C,u)=>{u.r(C),u.d(C,{MaintenanceModule:()=>z});var m=u(6895),d=u(5263),p=u(1748),i=u(4006),e=u(4650),g=u(2900),r=u(4055),U=u(384),T=u(5954),h=u(743),b=u(4333);function k(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"button",28),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw();return e.KtG(a.confirmDelete(s))}),e._UZ(1,"nb-icon",29),e.qZA()}}const x=function(n){return["../usuario",n]};function N(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"strong",23),e._uU(5),e.qZA()(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td")(11,"nb-checkbox",24),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).$implicit;return e.KtG(l.isDriver=s)})("ngModelChange",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.update(a))}),e.qZA()(),e.TgZ(12,"td")(13,"nb-checkbox",24),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).$implicit;return e.KtG(l.isControl=s)})("ngModelChange",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.update(a))}),e.qZA()(),e.TgZ(14,"td")(15,"nb-checkbox",24),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).$implicit;return e.KtG(l.isOperator=s)})("ngModelChange",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.update(a))}),e.qZA()(),e.TgZ(16,"td")(17,"nb-checkbox",24),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).$implicit;return e.KtG(l.isAssistant=s)})("ngModelChange",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.update(a))}),e.qZA()(),e.TgZ(18,"td")(19,"nb-checkbox",24),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).$implicit;return e.KtG(l.isSorter=s)})("ngModelChange",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.update(a))}),e.qZA()(),e.TgZ(20,"td")(21,"nb-checkbox",24),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).$implicit;return e.KtG(l.isPicking=s)})("ngModelChange",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.update(a))}),e.qZA()(),e.TgZ(22,"td")(23,"nb-checkbox",24),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).$implicit;return e.KtG(l.isActive=s)})("ngModelChange",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.update(a))}),e.qZA()(),e.TgZ(24,"td")(25,"button",25),e._UZ(26,"nb-icon",26),e.qZA(),e.YNc(27,k,2,0,"button",27),e.qZA()()}if(2&n){const t=c.$implicit,o=c.index,s=e.oxw();e.xp6(2),e.Oqu((s.page-1)*s.perPage.value+o+1),e.xp6(2),e.Q6J("routerLink",e.VKq(14,x,t.uid)),e.xp6(1),e.Oqu(t.firstName),e.xp6(2),e.Oqu(t.lastName),e.xp6(2),e.Oqu(t.document),e.xp6(2),e.Q6J("ngModel",t.isDriver),e.xp6(2),e.Q6J("ngModel",t.isControl),e.xp6(2),e.Q6J("ngModel",t.isOperator),e.xp6(2),e.Q6J("ngModel",t.isAssistant),e.xp6(2),e.Q6J("ngModel",t.isSorter),e.xp6(2),e.Q6J("ngModel",t.isPicking),e.xp6(2),e.Q6J("ngModel",t.isActive),e.xp6(2),e.Q6J("routerLink",e.VKq(16,x,t.uid)),e.xp6(2),e.Q6J("ngIf",t.uid!==s.currentUser)}}const y=function(n,c,t){return{id:"users",itemsPerPage:n,currentPage:c,totalItems:t}},{account:f}=p.b;let S=(()=>{class n{constructor(t,o,s,a,l,Z){this.generalService=t,this.fb=o,this.toastrService=s,this.authService=a,this.toastr=l,this.common=Z,this.loading=!1,this.currentUser=this.authService.user.uid,this.forma=this.fb.group({field:["document"],query:["",[i.kI.required]]}),this.users=[],this.totalUsers=0,this.perPage=this.fb.control("10"),this.page=1,this.params={page:this.page,pageSize:this.perPage.value,campus:this.authService.user.campus},this.field=this.fb.control("firstName"),this.query=this.fb.control("")}ngOnInit(){this.list(1)}list(t){this.page=t,this.params.page=this.page,this.generalService.paramList$(`${f}/users`,this.params).subscribe(o=>{this.users=o.results,this.totalUsers=o.total})}filter(){delete this.params.firstName,delete this.params.lastName,delete this.params.document;const t=this.forma.value;this.params={...this.params,[t.field]:t.query},console.log(this.params),this.list(1)}update(t){this.generalService.updateUrl$(`${f}/${t.uid}/update`,t).subscribe(o=>{this.toastrService.show("Privilegios actualizados","Actualizado",{status:"success"})})}deleteUser(t){this.loading=!0,this.generalService.delete$(`${f}/${t.uid}/delete`).subscribe(()=>{this.toastr.success(`Usuario ${t.firstName} eliminado correctamente!`,"\xa1\xc9xito!"),this.list(1),this.loading=!1})}confirmDelete(t){const o=this;this.common.showConfirm("\xbfEst\xe1s seguro?",`Al eliminar al usuario ${t.firstName}, podr\xedas perder informaci\xf3n que est\xe9 relacionada, si est\xe1s seguro continue por favor.`,function(a){a.isConfirmed&&o.deleteUser(t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.m),e.Y36(i.qu),e.Y36(r.quB),e.Y36(U.e),e.Y36(r.quB),e.Y36(T.v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-users"]],decls:61,vars:12,consts:[[1,"border-0","shadow-sm"],[1,"row","align-items-center","g-0"],[1,"col-lg-3","align-self-center"],["title","USUARIOS","description","Administrar personal","status","primary","icon","people-outline"],[1,"col-lg-9","text-end"],[1,"row","justify-content-md-center","float-end","g-2"],[1,"col-auto",3,"formGroup"],["formControlName","field","shape","semi-round",2,"width","120px"],["value","document"],["value","firstName"],["value","lastName"],["formControlName","query","type","search","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese datos"],[1,"col-auto"],["nbButton","","fullWidth","","shape","semi-round","status","info",3,"click"],["icon","eye-outline"],["nbButton","","fullWidth","","shape","semi-round","status","primary","routerLink","/pages/mantenimiento/usuario/create"],["icon","plus"],[1,"table-responsive"],[1,"table","align-middle"],[4,"ngFor","ngForOf"],[1,"text-center"],["previousLabel","","nextLabel","","id","users",3,"directionLinks","pageChange"],[1,"text-start"],[1,"name",3,"routerLink"],["status","basic",3,"ngModel","ngModelChange"],["nbTooltip","Editar","nbTooltipStatus","primary","nbButton","","status","primary","size","small","outline","",3,"routerLink"],["icon","edit-outline"],["class","ms-2","nbTooltip","Eliminar","nbTooltipStatus","danger","nbButton","","status","danger","size","small","outline","",3,"click",4,"ngIf"],["nbTooltip","Eliminar","nbTooltipStatus","danger","nbButton","","status","danger","size","small","outline","",1,"ms-2",3,"click"],["icon","trash-2-outline"]],template:function(t,o){1&t&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header")(2,"div",1)(3,"div",2),e._UZ(4,"app-header-info",3),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"nb-select",7)(9,"nb-option",8),e._uU(10,"C\xe9dula"),e.qZA(),e.TgZ(11,"nb-option",9),e._uU(12,"Nombres"),e.qZA(),e.TgZ(13,"nb-option",10),e._uU(14,"Apellidos"),e.qZA()()(),e.TgZ(15,"div",6),e._UZ(16,"input",11),e.qZA(),e.TgZ(17,"div",12)(18,"button",13),e.NdJ("click",function(){return o.filter()}),e._UZ(19,"nb-icon",14),e._uU(20," VISUALIZAR "),e.qZA()(),e.TgZ(21,"div",12)(22,"button",15),e._UZ(23,"nb-icon",16),e.qZA()()()()()(),e.TgZ(24,"nb-card-body")(25,"div",17)(26,"table",18)(27,"thead")(28,"tr")(29,"th"),e._uU(30,"#"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Nombres"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"Apellidos"),e.qZA(),e.TgZ(35,"th"),e._uU(36,"C\xe9dula"),e.qZA(),e.TgZ(37,"th"),e._uU(38,"Conductor"),e.qZA(),e.TgZ(39,"th"),e._uU(40,"Control"),e.qZA(),e.TgZ(41,"th"),e._uU(42,"Operador"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"Asistente"),e.qZA(),e.TgZ(45,"th"),e._uU(46,"Clasificador"),e.qZA(),e.TgZ(47,"th"),e._uU(48,"Picking"),e.qZA(),e.TgZ(49,"th"),e._uU(50,"Activo"),e.qZA(),e.TgZ(51,"th"),e._uU(52,"Opci\xf3n"),e.qZA()()(),e.TgZ(53,"tbody"),e.YNc(54,N,28,18,"tr",19),e.ALo(55,"paginate"),e.qZA()()()(),e.TgZ(56,"nb-card-footer")(57,"div",20)(58,"pagination-controls",21),e.NdJ("pageChange",function(a){return o.list(a)}),e.qZA()(),e.TgZ(59,"small",22),e._uU(60),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("formGroup",o.forma),e.xp6(8),e.Q6J("formGroup",o.forma),e.xp6(39),e.Q6J("ngForOf",e.xi3(55,5,o.users,e.kEZ(8,y,o.perPage.value,o.page,o.totalUsers))),e.xp6(4),e.Q6J("directionLinks",!0),e.xp6(2),e.hij("",o.totalUsers," Usuarios"))},dependencies:[m.sg,m.O5,d.rH,i.Fj,i.JJ,i.JL,i.sg,i.u,r.Asz,r.yKW,r.XWE,r.ndF,r.DPz,r.fMN,r.h8i,r.rs,r.q51,r.NTf,r.jNv,h.w,i.On,b.LS,b._s]}),n})();var I=u(5016),v=u(5401);const{account:A}=p.b;let J=(()=>{class n{constructor(t,o,s,a){this.dialogRef=t,this.fb=o,this.generalService=s,this.toastr=a,this.title="Nueva Sede",this.loading=!1,this.isValid=!1,this.form=this.fb.group({name:["",i.kI.required],code:["",[i.kI.required,i.kI.maxLength(4),i.kI.minLength(4)]],goalSorting:[315,i.kI.required],goalPicking:[215,i.kI.required],goalControl:[59,i.kI.required],region:[""],_id:[]})}ngOnInit(){this.data&&(this.form.patchValue(this.data),this.title="Editar Sede")}closeModal(){this.dialogRef.close()}submit(){const{_id:t,...o}=this.form.value;t?this.generalService.updateUrl$(`${A}/${t}/campus/update`,o).subscribe(()=>{this.toastr.success("Sede fue actualizado correctamente!","\xa1\xc9xito!"),this.dialogRef.close({load:!0})}):this.generalService.addData$(`${A}/campus/create`,o).subscribe(()=>{this.toastr.success("Sede fue creado correctamente!","\xa1\xc9xito!"),this.dialogRef.close({load:!0})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.X4l),e.Y36(i.qu),e.Y36(g.m),e.Y36(r.quB))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-campus-form"]],inputs:{data:"data"},decls:57,vars:3,consts:[["appWindow","","widthSize","sm",1,"scrollModal"],[1,"d-flex","align-items-center","justify-content-between"],["status","primary","icon","people-outline",3,"title"],["nbButton","","ghost","","status","basic",3,"click"],["icon","close-outline"],[1,"row","g-3",3,"formGroup"],[1,"col-md-12"],[1,"label"],["type","text","formControlName","code","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese BK"],["controlName","code"],["type","text","formControlName","name","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese nombre CD"],["controlName","name"],[1,"col-md-6"],["type","number","formControlName","goalSorting","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese meta sorting"],["controlName","goalSorting"],["type","number","formControlName","goalPicking","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese meta picking"],["controlName","goalPicking"],["type","number","formControlName","goalControl","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese meta control"],["controlName","goalControl"],["type","text","formControlName","region","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese regi\xf3n"],["controlName","region"],[1,"text-end"],["nbButton","","shape","semi-round","status","danger",3,"click"],["icon","arrow-back-outline"],["nbButton","","shape","semi-round","status","primary",1,"ms-2",3,"disabled","click"],["icon","save-outline"]],template:function(t,o){1&t&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header")(2,"div",1),e._UZ(3,"app-header-info",2),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.closeModal()}),e._UZ(5,"nb-icon",4),e.qZA()()(),e.TgZ(6,"nb-card-body")(7,"form",5)(8,"div",6)(9,"label",7),e._uU(10,"BK"),e.TgZ(11,"small"),e._uU(12," *"),e.qZA()(),e._UZ(13,"input",8)(14,"app-error-message",9),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17,"CD"),e.TgZ(18,"small"),e._uU(19," *"),e.qZA()(),e._UZ(20,"input",10)(21,"app-error-message",11),e.qZA(),e.TgZ(22,"div",12)(23,"label",7),e._uU(24,"Meta sorting (cjs/hora)"),e.TgZ(25,"small"),e._uU(26," *"),e.qZA()(),e._UZ(27,"input",13)(28,"app-error-message",14),e.qZA(),e.TgZ(29,"div",12)(30,"label",7),e._uU(31,"Meta picking (cjs/hora)"),e.TgZ(32,"small"),e._uU(33," *"),e.qZA()(),e._UZ(34,"input",15)(35,"app-error-message",16),e.qZA(),e.TgZ(36,"div",12)(37,"label",7),e._uU(38,"Meta control (minutos)"),e.TgZ(39,"small"),e._uU(40," *"),e.qZA()(),e._UZ(41,"input",17)(42,"app-error-message",18),e.qZA(),e.TgZ(43,"div",6)(44,"label",7),e._uU(45,"Regi\xf3n"),e.TgZ(46,"small"),e._uU(47," *"),e.qZA()(),e._UZ(48,"input",19)(49,"app-error-message",20),e.qZA()()(),e.TgZ(50,"nb-card-footer",21)(51,"button",22),e.NdJ("click",function(){return o.closeModal()}),e._UZ(52,"nb-icon",23),e._uU(53," Cancelar "),e.qZA(),e.TgZ(54,"button",24),e.NdJ("click",function(){return o.submit()}),e._UZ(55,"nb-icon",25),e._uU(56," Guardar "),e.qZA()()()),2&t&&(e.xp6(3),e.s9C("title",o.title),e.xp6(4),e.Q6J("formGroup",o.form),e.xp6(47),e.Q6J("disabled",o.form.invalid))},dependencies:[i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,r.Asz,r.yKW,r.XWE,r.ndF,r.DPz,r.fMN,r.h8i,h.w,I.K,v.H]}),n})();function $(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"button",13),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.openModal(a))}),e._UZ(17,"nb-icon",14),e.qZA(),e.TgZ(18,"button",15),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.confirmDelete(a))}),e._UZ(19,"nb-icon",16),e.qZA()()()}if(2&n){const t=c.$implicit,o=c.index;e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.code),e.xp6(2),e.hij("",t.goalSorting," cjs/hora"),e.xp6(2),e.hij("",t.goalPicking," cjs/hora"),e.xp6(2),e.hij("",t.goalControl," minutos"),e.xp6(2),e.Oqu(t.region)}}const{account:q}=p.b;let F=(()=>{class n{constructor(t,o,s,a){this.dialogService=t,this.generalService=o,this.toastr=s,this.common=a,this.loading=!1,this.campus=[]}ngOnInit(){this.all()}all(){this.generalService.filtersList$(`${q}/campus`).subscribe(t=>this.campus=t)}openModal(t){this.dialogService.open(J,{dialogClass:"dialog-limited-height",context:{data:t},closeOnBackdropClick:!0,closeOnEsc:!0}).onClose.subscribe(s=>{s&&this.all()})}deleteSede(t){this.loading=!0,this.generalService.delete$(`${q}/${t._id}/campus/delete`).subscribe(()=>{this.toastr.success(`Sede ${t.name} eliminado correctamente!`,"\xa1\xc9xito!"),this.all(),this.loading=!1})}confirmDelete(t){const o=this;this.common.showConfirm("\xbfEst\xe1s seguro?",`Al eliminar ${t.name}, podr\xedas perder informaci\xf3n que est\xe9 relacionada, si est\xe1s seguro continue por favor.`,function(a){a.isConfirmed&&o.deleteSede(t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.Gln),e.Y36(g.m),e.Y36(r.quB),e.Y36(T.v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-campus"]],decls:36,vars:1,consts:[[1,"border-0","shadow-sm"],[1,"row","align-items-center","g-0"],[1,"col-lg-3","align-self-center"],["title","SEDES","description","Administrar sedes","status","primary","icon","people-outline"],[1,"col-lg-9","text-end"],[1,"row","justify-content-md-center","float-end","g-2"],[1,"col-auto"],["type","search","nbInput","","shape","semi-round","fullWidth","","placeholder","Buscar sede"],["nbButton","","fullWidth","","shape","semi-round","status","primary",3,"click"],["icon","plus-outline"],[1,"table-responsive"],[1,"table","align-middle"],[4,"ngFor","ngForOf"],["nbTooltip","Editar","nbTooltipStatus","primary","nbButton","","status","primary","size","small","outline","",3,"click"],["icon","edit-outline"],["nbTooltip","Eliminar","nbTooltipStatus","danger","nbButton","","status","danger","size","small","outline","",1,"ms-2",3,"click"],["icon","trash-2-outline"]],template:function(t,o){1&t&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header")(2,"div",1)(3,"div",2),e._UZ(4,"app-header-info",3),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6),e._UZ(8,"input",7),e.qZA(),e.TgZ(9,"div",6)(10,"button",8),e.NdJ("click",function(){return o.openModal()}),e._UZ(11,"nb-icon",9),e._uU(12," Nuevo "),e.qZA()()()()()(),e.TgZ(13,"nb-card-body")(14,"div",10)(15,"table",11)(16,"thead")(17,"tr")(18,"th"),e._uU(19,"#"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"CD"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"BK"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Meta sorting"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Meta picking"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Meta control"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Regi\xf3n"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Opci\xf3n"),e.qZA()()(),e.TgZ(34,"tbody"),e.YNc(35,$,20,7,"tr",12),e.qZA()()()()()),2&t&&(e.xp6(35),e.Q6J("ngForOf",o.campus))},dependencies:[m.sg,r.Asz,r.yKW,r.ndF,r.DPz,r.fMN,r.h8i,r.jNv,h.w]}),n})();function w(n,c){if(1&n&&(e.TgZ(0,"nb-option",33),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.code),e.xp6(1),e.lnq("",t.code," - ",t.name," - ",t.region," ")}}const{account:_}=p.b,O=[{path:"usuarios",component:S},{path:"usuario/:id",component:(()=>{class n{constructor(t,o,s,a,l,Z){this.fb=t,this.authService=o,this.generalService=s,this.route=a,this.router=l,this.toastr=Z,this.campus=[],this.title="Nuevo usuario",this.form=this.fb.group({uid:[""],firstName:["",[i.kI.required,i.kI.maxLength(50)]],lastName:["",[i.kI.required,i.kI.maxLength(60)]],campus:["",[i.kI.required]],document:["",[i.kI.required,i.kI.maxLength(15)]],licence:["",[i.kI.maxLength(12)]],category:["",[i.kI.maxLength(12)]],isDriver:[!1],isControl:[!1],isOperator:[!1],isAssistant:[!1],isSorter:[!1],isPicking:[!1],isActive:[!0],isAdmin:[!1]}),this.route.params.subscribe(({id:M})=>{"create"!=M&&this.get(M)});const{campus:W}=this.authService.user;this.form.get("campus")?.patchValue(W)}ngOnInit(){this.getCampus()}get(t){this.title="Editar usuario",this.generalService.filtersList$(`${_}/${t}/retrieve`).subscribe(o=>{this.form.patchValue(o)})}getCampus(){this.generalService.filtersList$(`${_}/campus`).subscribe(t=>this.campus=t)}submit(){const{uid:t,...o}=this.form.value;t?this.generalService.updateUrl$(`${_}/${t}/update`,o).subscribe(()=>{this.toastr.success("Usuario fue actualizado correctamente!","\xa1\xc9xito!"),this.router.navigateByUrl("/pages/mantenimiento/usuarios")}):this.generalService.addData$(`${_}/create`,o).subscribe(()=>{this.toastr.success("Usuario fue creado correctamente!","\xa1\xc9xito!"),this.router.navigateByUrl("/pages/mantenimiento/usuarios")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(U.e),e.Y36(g.m),e.Y36(d.gz),e.Y36(d.F0),e.Y36(r.quB))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-form"]],decls:80,vars:4,consts:[[1,"border-0","shadow-sm"],[1,"row","align-items-center","g-0"],[1,"col-lg-3","align-self-center"],["status","primary","icon","person-outline",3,"title"],[1,"col-lg-9","text-end"],["nbButton","","shape","semi-round","ghost","","routerLink","/pages/mantenimiento/usuarios"],["icon","arrow-back-outline","status","primary"],[1,"row","g-3",3,"formGroup"],[1,"col-md-6"],[1,"label"],["type","text","formControlName","document","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese c\xe9dula/DNI"],["controlName","document"],["formControlName","campus","placeholder","Seleccione sede","shape","semi-round","fullWidth",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","firstName","type","text","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese nombres"],["controlName","firstName"],["formControlName","lastName","type","text","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese apellidos"],["controlName","lastName"],[1,"row","mt-4"],[1,"col"],["formControlName","isDriver","status","basic"],["formControlName","isControl","status","basic"],["formControlName","isOperator","status","basic"],["formControlName","isAssistant","status","basic"],["formControlName","isSorter","status","basic"],["formControlName","isPicking","status","basic"],["formControlName","isAdmin","status","basic"],["formControlName","licence","type","text","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese n\xfamero de licencia"],["formControlName","category","type","text","nbInput","","shape","semi-round","fullWidth","","placeholder","Ingrese categor\xeda de licencia"],[1,"text-end"],["nbButton","","shape","semi-round","status","primary",3,"disabled","click"],["icon","save-outline"],["nbButton","","shape","semi-round","status","danger","routerLink","/pages/mantenimiento/usuarios",1,"ms-2"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header")(2,"div",1)(3,"div",2),e._UZ(4,"app-header-info",3),e.qZA(),e.TgZ(5,"div",4)(6,"button",5),e._UZ(7,"nb-icon",6),e.qZA()()()(),e.TgZ(8,"nb-card-body")(9,"form",7)(10,"div",8)(11,"label",9),e._uU(12,"C\xe9dula "),e.TgZ(13,"small"),e._uU(14," *"),e.qZA()(),e._UZ(15,"input",10)(16,"app-error-message",11),e.qZA(),e.TgZ(17,"div",8)(18,"label",9),e._uU(19,"CD "),e.TgZ(20,"small"),e._uU(21," *"),e.qZA()(),e.TgZ(22,"nb-select",12),e.YNc(23,w,2,4,"nb-option",13),e.qZA()(),e.TgZ(24,"div",8)(25,"label",9),e._uU(26,"Nombres "),e.TgZ(27,"small"),e._uU(28," *"),e.qZA()(),e._UZ(29,"input",14)(30,"app-error-message",15),e.qZA(),e.TgZ(31,"div",8)(32,"label",9),e._uU(33,"Apellidos "),e.TgZ(34,"small"),e._uU(35," *"),e.qZA()(),e._UZ(36,"input",16)(37,"app-error-message",17),e.qZA(),e.TgZ(38,"div",18)(39,"div",19)(40,"nb-checkbox",20),e._uU(41,"Es conductor"),e.qZA()(),e.TgZ(42,"div",19)(43,"nb-checkbox",21),e._uU(44,"Es control"),e.qZA()(),e.TgZ(45,"div",19)(46,"nb-checkbox",22),e._uU(47,"Operador "),e.TgZ(48,"small"),e._uU(49,"(montacarga)"),e.qZA()()(),e.TgZ(50,"div",19)(51,"nb-checkbox",23),e._uU(52,"Asistente"),e.qZA()(),e.TgZ(53,"div",19)(54,"nb-checkbox",24),e._uU(55,"Sorting"),e.qZA()(),e.TgZ(56,"div",19)(57,"nb-checkbox",25),e._uU(58,"Picking"),e.qZA()(),e.TgZ(59,"div",19)(60,"nb-checkbox",26),e._uU(61,"Admin"),e.qZA()()(),e.TgZ(62,"div",8)(63,"label",9),e._uU(64,"Licencia "),e.TgZ(65,"small"),e._uU(66,"(Opcional)"),e.qZA()(),e._UZ(67,"input",27),e.qZA(),e.TgZ(68,"div",8)(69,"label",9),e._uU(70,"Categor\xeda "),e.TgZ(71,"small"),e._uU(72,"(Opcional)"),e.qZA()(),e._UZ(73,"input",28),e.qZA()()(),e.TgZ(74,"nb-card-footer",29)(75,"button",30),e.NdJ("click",function(){return o.submit()}),e._UZ(76,"nb-icon",31),e._uU(77," Guardar "),e.qZA(),e.TgZ(78,"button",32),e._uU(79,"Cancelar"),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("title",o.title),e.xp6(5),e.Q6J("formGroup",o.form),e.xp6(14),e.Q6J("ngForOf",o.campus),e.xp6(52),e.Q6J("disabled",o.form.invalid))},dependencies:[m.sg,d.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,r.Asz,r.yKW,r.XWE,r.ndF,r.DPz,r.fMN,r.h8i,r.rs,r.q51,r.NTf,h.w,v.H]}),n})()},{path:"sedes",component:F},{path:"",redirectTo:"usuarios",pathMatch:"full"}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(O),d.Bz]}),n})();var L=u(798),E=u(8542);let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez]}),n})();var K=u(328),Y=u(1765);let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,B,E.Y,L.j,d.Bz,G,K.y,i.u5,b.JX,Y.s]}),n})()}}]);