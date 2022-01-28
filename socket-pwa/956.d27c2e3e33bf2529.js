"use strict";(self.webpackChunksocket_pwa=self.webpackChunksocket_pwa||[]).push([[956],{4956:(E,Z,r)=>{r.r(Z),r.d(Z,{WarehouseModule:()=>W});var h=r(9808),u=r(9539),t=r(5e3),T=r(2340),f=r(520);const{endpoint:b}=T.N,g=`${b}/control`;let m=(()=>{class o{constructor(e){this.http=e}getBahias(){return this.http.get(`${g}/bay/withregistry`)}getTrucks(){return this.http.get(`${g}/registry/arrivals`)}getOperator(){return this.http.get(`${g}/lift/list?isFree=true&isActive=true`)}downloadBahia(e,a){return this.http.put(`${g}/registry/${a}/update`,e)}loadBahia(e,a){return this.http.put(`${g}/registry/${a}/update`,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(f.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var d=r(9444);const v=function(o){return{bahia:o}};function A(o,i){if(1&o&&(t.TgZ(0,"div",11),t.TgZ(1,"div",12),t.TgZ(2,"div",13),t.TgZ(3,"div",14),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"div",15),t.TgZ(7,"div"),t.TgZ(8,"strong",16),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"div",17),t.GkF(12,18),t.qZA(),t.qZA(),t.qZA()),2&o){const e=i.$implicit;t.oxw();const a=t.MAs(17),s=t.MAs(15);t.xp6(5),t.hij(" ",e.name," "),t.xp6(4),t.hij(" ",e.type," "),t.xp6(3),t.Q6J("ngTemplateOutlet",e.registro?a:s)("ngTemplateOutletContext",t.VKq(4,v,e))}}const x=function(o,i,e){return["/admin/warehouse/bahia",o,i,e]};function q(o,i){if(1&o&&(t.TgZ(0,"div",19),t._uU(1," LIBRE "),t.qZA(),t.TgZ(2,"div",20),t.TgZ(3,"a",21),t._uU(4,"Asignar cami\xf3n"),t.qZA(),t.qZA()),2&o){const e=i.bahia;t.xp6(3),t.Q6J("routerLink",t.kEZ(1,x,e._id,e.name,e.type))}}function k(o,i){if(1&o&&(t.TgZ(0,"div",22),t._uU(1," OCUPADO "),t.qZA(),t.TgZ(2,"div"),t._uU(3),t.qZA()),2&o){const e=i.bahia;t.xp6(3),t.hij(" Camion: ",e.registro.truck.plaque," ")}}const y=function(){return["fas","home"]};let B=(()=>{class o{constructor(e,a){this.router=e,this.warehouseService=a,this.bahias=[]}ngOnInit(){this.getBahias()}navigate(){this.router.navigateByUrl("/admin/warehouse/trucks")}getBahias(){this.warehouseService.getBahias().subscribe(e=>{console.log(e),this.bahias=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.F0),t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-bahias"]],decls:18,vars:3,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"icon"],[1,"d-flex","bd-highlight","mb-2"],[1,"p-2","flex-grow-1","bd-highlight"],[1,"p-2","bd-highlight"],[1,"row"],["class","col-12 col-md-4",4,"ngFor","ngForOf"],["free",""],["occupied",""],[1,"col-12","col-md-4"],[1,"card-bahia","mb-3"],[1,"d-flex","bd-highlight"],[1,"flex-grow-1","bd-highlight"],[1,"bd-highlight"],[1,"text-uppercase"],[1,"text-center"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"text-success","fw-bold","mb-2"],[1,"d-grid","gap-2"],[1,"btn","btn-secondary",3,"routerLink"],[1,"text-danger","fw-bold","mb-2"]],template:function(e,a){1&e&&(t.TgZ(0,"nav",0),t.TgZ(1,"ol",1),t.TgZ(2,"li",2),t._UZ(3,"fa-icon",3),t._uU(4," Inicio "),t.qZA(),t.qZA(),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"strong"),t._uU(9," Bahias activas "),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t._uU(11," 25 Ene, 2022 "),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t.YNc(13,A,13,6,"div",8),t.qZA(),t.YNc(14,q,5,5,"ng-template",null,9,t.W1O),t.YNc(16,k,4,1,"ng-template",null,10,t.W1O)),2&e&&(t.xp6(3),t.Q6J("icon",t.DdM(2,y)),t.xp6(10),t.Q6J("ngForOf",a.bahias))},directives:[d.BN,h.sg,h.tP,u.yS],styles:[""]}),o})();var c=r(2382),_=r(1134),U=r(2290);function C(o,i){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.unloadBay.name," ")}}function w(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,n=t.oxw(),p=t.MAs(35);return n.showBahia(p,s)}),t._uU(2,"Asignar"),t.qZA(),t.BQk()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled","DESCARGA"!==e.type)}}function O(o,i){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.loadBay.name," ")}}function F(o,i){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,n=t.oxw(),p=t.MAs(35);return n.showBahia(p,s)}),t._uU(2,"Asignar"),t.qZA(),t.BQk()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled","CARGA"!==e.type)}}function J(o,i){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"th",13),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t.YNc(10,C,2,1,"ng-container",14),t.YNc(11,w,3,1,"ng-container",14),t.qZA(),t.TgZ(12,"td"),t.YNc(13,O,2,1,"ng-container",14),t.YNc(14,F,3,1,"ng-container",14),t.qZA(),t.qZA()),2&o){const e=i.$implicit,a=i.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.arrivalTime),t.xp6(2),t.Oqu(e.truck.plaque),t.xp6(2),t.Oqu(e.truck.type),t.xp6(2),t.Q6J("ngIf",e.unloadBay),t.xp6(1),t.Q6J("ngIf",!e.unloadBay),t.xp6(2),t.Q6J("ngIf",e.loadBay),t.xp6(1),t.Q6J("ngIf",!e.loadBay)}}function S(o,i){if(1&o&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e._id),t.xp6(1),t.Oqu(e.name)}}const Q=function(){return["fas","check"]};function Y(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",16),t.TgZ(1,"div",17),t._uU(2),t.qZA(),t._UZ(3,"hr"),t.TgZ(4,"div",18),t.TgZ(5,"label"),t._uU(6," Cami\xf3n: "),t.TgZ(7,"span"),t.TgZ(8,"strong"),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"select",19),t.TgZ(11,"option",20),t._uU(12,"Selccione montacarga"),t.qZA(),t.YNc(13,S,2,2,"option",21),t.qZA(),t.TgZ(14,"div",22),t.TgZ(15,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().save()}),t._UZ(16,"fa-icon",4),t._uU(17," Asignar cami\xf3n "),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.hij(" Asignar cami\xf3n a ",e.bahia," "),t.xp6(7),t.Oqu(e.registry.truck.plaque),t.xp6(1),t.Q6J("formControl",e.montacarga),t.xp6(3),t.Q6J("ngForOf",e.operators),t.xp6(2),t.Q6J("disabled",e.montacarga.invalid),t.xp6(1),t.Q6J("icon",t.DdM(6,Q))}}const M=function(){return["fas","home"]},N=[{path:"bahias",component:B},{path:"bahia/:id/:name/:type",component:(()=>{class o{constructor(e,a,s,n,p,I){this.modalService=e,this.router=a,this.route=s,this.warehouseService=n,this.fb=p,this.toastrService=I,this.bahia="",this.idBahia="",this.type="",this.trucks=[],this.operators=[],this.registry={},this.montacarga=this.fb.control("",c.kI.required),this.route.params.subscribe(({name:R,id:j,type:D})=>{this.bahia=R,this.idBahia=j,this.type=D})}ngOnInit(){this.getTrucks(),this.getOperator()}showBahia(e,a){this.registry=a,this.modalRef=this.modalService.show(e,{class:"modal-dialog-centered"})}navigate(){var e;this.router.navigateByUrl("/admin/warehouse/bahias"),null===(e=this.modalRef)||void 0===e||e.hide()}getTrucks(){this.warehouseService.getTrucks().subscribe(e=>{console.log(e),this.trucks=e})}getOperator(){this.warehouseService.getOperator().subscribe(e=>{this.operators=e,console.log("operadores",e)})}save(){const a={loadBay:this.idBahia,loadLift:this.montacarga.value};"DESCARGA"==this.type?this.warehouseService.downloadBahia({unloadBay:this.idBahia,unloadLift:this.montacarga.value},this.registry._id).subscribe(s=>{var n;console.log(s),this.getTrucks(),null===(n=this.modalRef)||void 0===n||n.hide(),this.toastrService.success("Se asign\xf3")}):(console.log("cargaaa"),this.warehouseService.loadBahia(a,this.registry._id).subscribe(s=>{var n;console.log(s),this.getTrucks(),this.toastrService.success("Se asign\xf3"),null===(n=this.modalRef)||void 0===n||n.hide()}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.tT),t.Y36(u.F0),t.Y36(u.gz),t.Y36(m),t.Y36(c.qu),t.Y36(U._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-trucks"]],decls:36,vars:6,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/admin/warehouse/bahias"],[3,"icon"],[1,"d-flex","bd-highlight","mb-2"],[1,"p-2","flex-grow-1","bd-highlight"],[1,"p-2","bd-highlight"],[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["bahiaTemplate",""],["scope","row"],[4,"ngIf"],[1,"btn","btn-secondary","btn-sm",3,"disabled","click"],[1,"p-3"],[1,"fw-bold"],[1,"text-center","mb-3"],["aria-label","Default select example",1,"form-select","mb-3",3,"formControl"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"d-grid","gap-2"],[1,"btn","btn-secondary",3,"disabled","click"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"nav",0),t.TgZ(1,"ol",1),t.TgZ(2,"li",2),t.TgZ(3,"a",3),t._UZ(4,"fa-icon",4),t._uU(5," Inicio "),t.qZA(),t.qZA(),t.TgZ(6,"li",2),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t._UZ(8,"hr"),t.TgZ(9,"div",5),t.TgZ(10,"div",6),t.TgZ(11,"h4"),t.TgZ(12,"strong"),t._uU(13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",7),t._uU(15),t.qZA(),t.qZA(),t.TgZ(16,"div",8),t.TgZ(17,"table",9),t.TgZ(18,"thead"),t.TgZ(19,"tr"),t.TgZ(20,"th",10),t._uU(21,"#"),t.qZA(),t.TgZ(22,"th",10),t._uU(23,"Hora"),t.qZA(),t.TgZ(24,"th",10),t._uU(25,"Placa"),t.qZA(),t.TgZ(26,"th",10),t._uU(27,"Tipo"),t.qZA(),t.TgZ(28,"th",10),t._uU(29,"Descarga"),t.qZA(),t.TgZ(30,"th",10),t._uU(31,"Carga"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"tbody"),t.YNc(33,J,15,8,"tr",11),t.qZA(),t.qZA(),t.qZA(),t.YNc(34,Y,18,7,"ng-template",null,12,t.W1O)),2&e&&(t.xp6(4),t.Q6J("icon",t.DdM(5,M)),t.xp6(3),t.hij(" ",a.bahia," "),t.xp6(6),t.hij(" ",a.bahia," "),t.xp6(2),t.hij(" ",a.type," "),t.xp6(18),t.Q6J("ngForOf",a.trucks))},directives:[u.yS,d.BN,h.sg,h.O5,c.EJ,c.JJ,c.oH,c.YN,c.Kr],styles:[""]}),o})()},{path:"",redirectTo:"bahias",pathMatch:"full"}];let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(N)],u.Bz]}),o})();var l=r(801);let W=(()=>{class o{constructor(e){e.addIcons(l.r6l,l.J9Y,l.Xcf,l.zVD,l.LEp,l.LM3)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.by))},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.ez,$,d.uH,_.zk.forRoot(),c.UX]]}),o})()}}]);