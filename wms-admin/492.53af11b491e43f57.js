"use strict";(self.webpackChunkwms_admin=self.webpackChunkwms_admin||[]).push([[492],{7492:($,p,r)=>{r.r(p),r.d(p,{PickingModule:()=>q});var d=r(6895),g=r(5263),c=r(4006),f=r(1748),e=r(4650),i=r(4055),h=r(2900),x=r(5954),b=r(384),v=r(743),Z=r(5016),_=r(5401);function C(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"th"),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"td")(9,"button",14),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw(3);return e.KtG(m.confirmDelete(l))}),e._UZ(10,"nb-icon",15),e.qZA()()()}if(2&o){const t=a.$implicit,n=a.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(e.xi3(7,3,t.date,"dd/MM/yyyy"))}}function y(o,a){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,C,11,6,"tr",13),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.pickings)}}function T(o,a){if(1&o&&(e.TgZ(0,"div",9)(1,"div",10)(2,"table",11)(3,"thead")(4,"tr")(5,"th"),e._uU(6,"#"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Fecha"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Opci\xf3n"),e.qZA()()(),e.YNc(13,y,2,1,"tbody",12),e.qZA()()()),2&o){const t=e.oxw();e.xp6(13),e.Q6J("ngIf",t.pickings.length>0)}}function A(o,a){if(1&o&&(e.TgZ(0,"nb-option",35),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.code),e.xp6(1),e.lnq("",t.code," - ",t.name," - ",t.region," ")}}function I(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"nb-card",16)(1,"nb-card-header")(2,"div",17),e._UZ(3,"app-header-info",18),e.TgZ(4,"button",19),e.NdJ("click",function(){const l=e.CHM(t).dialogRef;return e.KtG(l.close())}),e._UZ(5,"nb-icon",20),e.qZA()()(),e.TgZ(6,"nb-card-body")(7,"div",21)(8,"div",22)(9,"label",23),e._uU(10,"Fecha"),e.TgZ(11,"small"),e._uU(12," *"),e.qZA()(),e.TgZ(13,"nb-form-field"),e._UZ(14,"input",24)(15,"nb-icon",25)(16,"nb-datepicker",26,27),e.qZA(),e._UZ(18,"app-error-message",28),e.qZA(),e.TgZ(19,"div",22)(20,"label",23),e._uU(21,"CD "),e.TgZ(22,"small"),e._uU(23," *"),e.qZA()(),e.TgZ(24,"nb-select",29),e.YNc(25,A,2,4,"nb-option",30),e.qZA()(),e.TgZ(26,"div",22)(27,"label",23),e._uU(28,"Archivo"),e.TgZ(29,"small"),e._uU(30," *"),e.qZA()(),e.TgZ(31,"input",31),e.NdJ("change",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.onFileChange(s))}),e.qZA(),e._UZ(32,"app-error-message",32),e.qZA()()(),e.TgZ(33,"nb-card-footer",33)(34,"button",34),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.uploadFile())}),e._uU(35,"Subir Archivo"),e.qZA()()()}if(2&o){const t=e.MAs(17),n=e.oxw();e.xp6(7),e.Q6J("formGroup",n.formHeader),e.xp6(7),e.Q6J("nbDatepicker",t),e.xp6(11),e.Q6J("ngForOf",n.campus),e.xp6(9),e.Q6J("disabled",!n.formHeader.valid)}}const{picking:u,account:k}=f.b;let E=(()=>{class o{constructor(t,n,s,l,m,H,P){this.dialogService=t,this.toastr=n,this.fb=s,this.generalService=l,this.common=m,this.datePipe=H,this.authService=P,this.loading=!1,this.file=null,this.campus=[],this.pickings=[]}ngOnInit(){this.reactiveFields()}reactiveFields(){this.formHeader=this.fb.group({campus:["",[c.kI.required]],file:["",[c.kI.required]],fileSource:["",[c.kI.required]],date:["",[c.kI.required]]}),this.getCampus(),this.getPickings()}getCampus(){this.generalService.filtersList$(`${k}/campus`).subscribe(t=>this.campus=t)}getPickings(){this.loading=!0,this.generalService.paramList$(`${u}/picking-date`,{campus:this.authService.user.campus}).subscribe(n=>{this.pickings=n||[],console.log(this.pickings),this.loading=!1})}delete(t){this.loading=!0,this.generalService.delete$(`${u}/${t}`).subscribe(()=>{this.toastr.success(`Archivo Excel ${t} eliminado correctamente!`,"\xa1\xc9xito!"),this.getPickings(),this.loading=!1})}confirmDelete(t){const n=this;this.common.showConfirm("\xa1CUIDADO!",`Est\xe1s a punto de eliminar el archivo "${t.name}". \xbfEst\xe1s segur@?`,function(l){l.isConfirmed&&n.delete(t.date)})}openModal(t){this.formHeader.reset(),this.formHeader.controls.date.patchValue(new Date);const{campus:n}=this.authService.user;this.formHeader.get("campus")?.patchValue(n),this.modalRef=this.dialogService.open(t,{dialogClass:"dialog-limited-height",context:{},closeOnBackdropClick:!0,closeOnEsc:!0})}onFileChange(t){t.target.files.length>0&&this.formHeader.controls.fileSource.patchValue(t.target.files[0])}uploadFile(){this.loading=!0,this.formatedDate=this.datePipe.transform(this.formHeader.controls.date.value,"yyyy-MM-dd");const t=this.formHeader.controls.fileSource.value,n=new FormData;n.append("file",t),n.append("date",this.formatedDate),n.append("campus",this.formHeader.controls.campus.value),n.append("name",t.name),console.log(n),this.generalService.addData$(u,n).subscribe({next:()=>{this.toastr.success(`Archivo Excel ${t.name} importado correctamente!`,"\xa1\xc9xito!"),this.finalAction()},error:s=>{this.toastr.danger(s.error.message,"\xa1Error!"),this.finalAction()}})}finalAction(){this.loading=!1,this.formHeader.reset(),this.modalRef.close(),this.getPickings()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.Gln),e.Y36(i.quB),e.Y36(c.qu),e.Y36(h.m),e.Y36(x.v),e.Y36(d.uU),e.Y36(b.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-import-excel"]],decls:13,vars:1,consts:[[1,"border-0","shadow-sm"],[1,"d-flex","justify-content-between","align-items-center"],["title","PICKING","description","Importar excel","status","primary","icon","cloud-upload-outline"],[1,"row","justify-content-md-center","float-end","g-1"],[1,"col-auto"],["nbButton","","fullWidth","","shape","semi-round","status","primary",3,"click"],["icon","plus-outline"],["style","overflow-x: auto",4,"ngIf"],["dialog",""],[2,"overflow-x","auto"],[1,"table-responsive"],[1,"table","align-middle"],[4,"ngIf"],[4,"ngFor","ngForOf"],["nbTooltip","Eliminar","nbTooltipStatus","danger","nbButton","","status","danger","size","small","outline","",3,"click"],["icon","trash-2-outline"],["appWindow","","widthSize","tn"],[1,"d-flex","align-items-center","justify-content-between"],["title","Importar excel","status","primary","icon","cloud-upload-outline"],["nbButton","","ghost","","status","basic","shape","semi-round",3,"click"],["icon","close-outline"],[1,"row","g-3",3,"formGroup"],[1,"col-md-12"],[1,"label"],["nbInput","","placeholder","Escoga una fecha","fullWidth","","formControlName","date","shape","semi-round",3,"nbDatepicker"],["nbSuffix","","icon","calendar","status","primary","size","small","pack","eva"],["format","dd/MM/yyyy"],["date",""],["controlName","date"],["formControlName","campus","placeholder","Seleccione sede","shape","semi-round","fullWidth",""],[3,"value",4,"ngFor","ngForOf"],["nbInput","","type","file","formControlName","file","shape","semi-round","fullWidth","",1,"form-control-file",3,"change"],["controlName","file"],[1,"text-end"],["nbButton","","status","primary","shape","semi-round",3,"disabled","click"],[3,"value"]],template:function(t,n){if(1&t){const s=e.EpF();e.TgZ(0,"nb-card",0)(1,"nb-card-header")(2,"div",1),e._UZ(3,"app-header-info",2),e.TgZ(4,"div",3)(5,"div",4)(6,"button",5),e.NdJ("click",function(){e.CHM(s);const m=e.MAs(12);return e.KtG(n.openModal(m))}),e._UZ(7,"nb-icon",6),e._uU(8," Nuevo "),e.qZA()()()()(),e.TgZ(9,"nb-card-body"),e.YNc(10,T,14,1,"div",7),e.qZA()(),e.YNc(11,I,36,4,"ng-template",null,8,e.W1O)}2&t&&(e.xp6(10),e.Q6J("ngIf",!n.loading))},dependencies:[d.sg,d.O5,c.Fj,c.JJ,c.JL,c.sg,c.u,i.Asz,i.yKW,i.XWE,i.ndF,i.DPz,i.fMN,i.h8i,i.rs,i.q51,i.jNv,i.jBG,i.yyc,i.$kf,i.B4C,v.w,Z.K,_.H,d.uU]}),o})();var U=r(3947);const{picking:w}=f.b,S=[{path:"importar-excel",component:E},{path:"descargar-excel",component:(()=>{class o{constructor(t,n){this.generalService=t,this.fileSaverService=n,this.loading=!1}ngOnInit(){}uuid(){return"_"+Math.random().toString(36).substr(2,9)}download(){this.loading=!0,this.generalService.file$(`${w}/download`).subscribe(t=>{this.fileSaverService.save(t,this.uuid()),this.loading=!1})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.m),e.Y36(U.m9))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-download-excel"]],decls:7,vars:0,consts:[[1,"border-0","shadow-sm"],["title","PICKING","description","Descargar excel","status","primary","icon","cloud-download-outline"],[1,"text-center"],["nbButton","","shape","semi-round","status","primary",3,"click"],["icon","download-outline"]],template:function(t,n){1&t&&(e.TgZ(0,"nb-card",0)(1,"nb-card-header"),e._UZ(2,"app-header-info",1),e.qZA(),e.TgZ(3,"nb-card-body",2)(4,"button",3),e.NdJ("click",function(){return n.download()}),e._UZ(5,"nb-icon",4),e._uU(6,"Descargar"),e.qZA()()())},dependencies:[i.Asz,i.yKW,i.ndF,i.DPz,i.fMN,v.w]}),o})()},{path:"",redirectTo:"importar-excel",pathMatch:"full"}];let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(S),g.Bz]}),o})();var M=r(1765),D=r(798),N=r(328),J=r(8542);let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,F,J.Y,D.j,N.y,M.s]}),o})()}}]);