"use strict";(self.webpackChunksocket_pwa=self.webpackChunksocket_pwa||[]).push([[928],{7928:(J,u,c)=>{c.r(u),c.d(u,{ForkliftModule:()=>z});var p=c(9808),r=c(9539),t=c(5e3),A=c(2340),f=c(520);const{endpoint:T}=A.N,Z=`${T}/control`;let h=(()=>{class i{constructor(n){this.http=n}getUnloadTruck(){return this.http.get(`${Z}/registry/unload-truck`)}getLoadTruck(){return this.http.get(`${Z}/registry/load-truck`)}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(f.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var g=c(1134),l=c(9444);function v(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"div",16),t.TgZ(1,"p"),t._uU(2,"Confirmar inicio de carga"),t.qZA(),t.TgZ(3,"button",17),t.NdJ("click",function(){return t.CHM(n),t.oxw().confirm()}),t._uU(4,"Si"),t.qZA(),t.TgZ(5,"button",18),t.NdJ("click",function(){return t.CHM(n),t.oxw().decline()}),t._uU(6,"No"),t.qZA(),t.qZA()}}const b=function(){return["fas","home"]},q=function(){return["fas","truck"]},U=function(){return["fas","check"]};function C(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"div",20),t.TgZ(1,"p"),t._uU(2,"\xbfQuieres confirmar?"),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){return t.CHM(n),t.oxw().confirm()}),t._uU(4,"Si"),t.qZA(),t.TgZ(5,"button",22),t.NdJ("click",function(){return t.CHM(n),t.oxw().decline()}),t._uU(6,"No"),t.qZA(),t.qZA()}}const x=function(){return["fas","home"]},F=function(){return["fas","check"]},m=function(){return["fas","check-square"]};function y(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"p"),t._uU(2,"\xbfFinalizar carga?"),t.qZA(),t.TgZ(3,"button",8),t.NdJ("click",function(){return t.CHM(n),t.oxw().confirm()}),t._uU(4,"Si"),t.qZA(),t.TgZ(5,"button",9),t.NdJ("click",function(){return t.CHM(n),t.oxw().decline()}),t._uU(6,"No"),t.qZA(),t.qZA()}}const N=function(){return["fas","check"]},B=[{path:"assigned-truck",component:(()=>{class i{constructor(n,o,a){this.forkliftService=n,this.modalService=o,this.router=a}ngOnInit(){this.getLoadTruck()}getUnloadTruck(){this.forkliftService.getUnloadTruck().subscribe(n=>{console.log("gaaaaaaaaaaaaaaaaaaaaaaaaaaa",n)})}getLoadTruck(){this.forkliftService.getLoadTruck().subscribe(n=>{console.log("holllllllllllllllllllllll",n)})}confirmModal(n){this.modalRef=this.modalService.show(n,{class:"modal-sm modal-dialog-centered"})}confirm(){var n;this.router.navigateByUrl("/admin/forklift/finalize"),null===(n=this.modalRef)||void 0===n||n.hide()}decline(){var n;null===(n=this.modalRef)||void 0===n||n.hide()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(h),t.Y36(g.tT),t.Y36(r.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-assigned-truck"]],decls:28,vars:6,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"icon"],[1,"d-flex","bd-highlight","mb-3"],[1,"p-2","flex-grow-1","bd-highlight"],[1,"p-2","bd-highlight"],[1,"text-center"],[1,"mb-2"],["size","3x",1,"text-primary",3,"icon"],[1,"fw-bold","text-secondary"],[1,"fw-bold"],[1,"mb-4"],[1,"d-grid","gap-2"],[1,"btn","btn-primary",3,"click"],["template",""],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"nav",0),t.TgZ(1,"ol",1),t.TgZ(2,"li",2),t._UZ(3,"fa-icon",3),t._uU(4," Inicio "),t.qZA(),t.qZA(),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"strong"),t._uU(9," Cami\xf3n asignado "),t.qZA(),t.qZA(),t._UZ(10,"div",6),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"div",8),t._UZ(13,"fa-icon",9),t.qZA(),t.TgZ(14,"div",8),t.TgZ(15,"span",10),t._uU(16," YRT-786 "),t.qZA(),t.TgZ(17,"span",11),t._uU(18," T1 "),t.qZA(),t.qZA(),t.TgZ(19,"div",12),t.TgZ(20,"span",11),t._uU(21," Bahia 101 DESCARGA "),t.qZA(),t.qZA(),t.TgZ(22,"div",13),t.TgZ(23,"button",14),t.NdJ("click",function(){t.CHM(a);const d=t.MAs(27);return o.confirmModal(d)}),t._UZ(24,"fa-icon",3),t._uU(25," Iniciar carga "),t.qZA(),t.qZA(),t.qZA(),t.YNc(26,v,7,0,"ng-template",null,15,t.W1O)}2&n&&(t.xp6(3),t.Q6J("icon",t.DdM(3,b)),t.xp6(10),t.Q6J("icon",t.DdM(4,q)),t.xp6(11),t.Q6J("icon",t.DdM(5,U)))},directives:[l.BN],styles:[""]}),i})()},{path:"bahias",component:(()=>{class i{constructor(n,o){this.router=n,this.modalService=o}ngOnInit(){}navigate(){this.router.navigateByUrl("/admin/forklift/finalize")}confirmModal(n){this.modalRef=this.modalService.show(n,{class:"modal-sm modal-dialog-centered"})}confirm(){var n;this.message="Confirmed!",null===(n=this.modalRef)||void 0===n||n.hide(),this.navigate()}decline(){var n;this.message="Declined!",null===(n=this.modalRef)||void 0===n||n.hide()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.F0),t.Y36(g.tT))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-assignedg-bahias"]],decls:69,vars:8,consts:[["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"icon"],[1,"d-flex","bd-highlight","mb-2"],[1,"p-2","flex-grow-1","bd-highlight"],[1,"p-2","bd-highlight"],[1,"row"],[1,"col-12","col-md-4"],[1,"card-bahia","mb-3"],[1,"d-flex","bd-highlight"],[1,"flex-grow-1","bd-highlight"],[1,"bd-highlight"],[1,"text-center"],[1,"text-danger","fw-bold","mb-2"],[1,"d-grid","gap-2"],[1,"btn","btn-secondary",3,"click"],[1,"text-success","mb-2"],[1,"text-success","fw-bold","mb-2"],["template",""],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"nav",0),t.TgZ(1,"ol",1),t.TgZ(2,"li",2),t._UZ(3,"fa-icon",3),t._uU(4," Inicio "),t.qZA(),t.qZA(),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"strong"),t._uU(9," Bahia asignada "),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t._uU(11," 25 Ene, 2022 "),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"div",8),t.TgZ(14,"div",9),t.TgZ(15,"div",10),t.TgZ(16,"div",11),t.TgZ(17,"strong"),t._uU(18," Bahia 1 "),t.qZA(),t.qZA(),t.TgZ(19,"div",12),t.TgZ(20,"div"),t.TgZ(21,"strong"),t._uU(22," CARGA "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"hr"),t.TgZ(24,"div",13),t.TgZ(25,"div",14),t._uU(26," CAMI\xd3N: YRT-786 "),t.qZA(),t.TgZ(27,"div",15),t.TgZ(28,"button",16),t.NdJ("click",function(){t.CHM(a);const d=t.MAs(68);return o.confirmModal(d)}),t._UZ(29,"fa-icon",3),t._uU(30," Iniciar carga "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",8),t.TgZ(32,"div",9),t.TgZ(33,"div",10),t.TgZ(34,"div",11),t.TgZ(35,"strong"),t._uU(36," Bahia 1 "),t.qZA(),t.qZA(),t.TgZ(37,"div",12),t.TgZ(38,"div"),t.TgZ(39,"strong"),t._uU(40," CARGA "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(41,"hr"),t.TgZ(42,"div",13),t.TgZ(43,"div",17),t._uU(44," CAMI\xd3N: TYU-783 "),t.qZA(),t.TgZ(45,"div",18),t.TgZ(46,"h3"),t._UZ(47,"fa-icon",3),t._uU(48," CARGADO "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",8),t.TgZ(50,"div",9),t.TgZ(51,"div",10),t.TgZ(52,"div",11),t.TgZ(53,"strong"),t._uU(54," Bahia 1 "),t.qZA(),t.qZA(),t.TgZ(55,"div",12),t.TgZ(56,"div"),t.TgZ(57,"strong"),t._uU(58," CARGA "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(59,"hr"),t.TgZ(60,"div",13),t.TgZ(61,"div",17),t._uU(62," CAMI\xd3N: ZXG-783 "),t.qZA(),t.TgZ(63,"div",18),t.TgZ(64,"h3"),t._UZ(65,"fa-icon",3),t._uU(66," CARGADO "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(67,C,7,0,"ng-template",null,19,t.W1O)}2&n&&(t.xp6(3),t.Q6J("icon",t.DdM(4,x)),t.xp6(26),t.Q6J("icon",t.DdM(5,F)),t.xp6(18),t.Q6J("icon",t.DdM(6,m)),t.xp6(18),t.Q6J("icon",t.DdM(7,m)))},directives:[l.BN],styles:[""]}),i})()},{path:"finalize",component:(()=>{class i{constructor(n,o){this.router=n,this.modalService=o}ngOnInit(){}navigate(){this.router.navigateByUrl("/admin/forklift/assigned-truck")}confirmModal(n){this.modalRef=this.modalService.show(n,{class:"modal-sm modal-dialog-centered"})}confirm(){var n;this.message="Confirmed!",null===(n=this.modalRef)||void 0===n||n.hide(),this.navigate()}decline(){var n;this.message="Declined!",null===(n=this.modalRef)||void 0===n||n.hide()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.F0),t.Y36(g.tT))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-finalize"]],decls:35,vars:2,consts:[[1,"text-center"],[1,"fw-bold"],[1,"text-danger"],[1,"d-grid","gap-2"],[1,"btn","btn-primary","px-5",3,"click"],[3,"icon"],["template",""],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default",3,"click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div"),t._uU(2," Cami\xf3n seleccionado "),t.qZA(),t.TgZ(3,"div",1),t._uU(4," XRS-565 "),t.qZA(),t.TgZ(5,"div"),t._uU(6," Modelo de camion zys "),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"div"),t._uU(9," Conductor "),t.qZA(),t.TgZ(10,"div"),t._uU(11," JUAN PEREZ MENDOZA "),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"div"),t._uU(14," Montacarga 1 "),t.qZA(),t.TgZ(15,"div"),t._uU(16," Operador: ALAN PEREZ GARCIA "),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"div",2),t._uU(19," Carga iniciada "),t.TgZ(20,"h4"),t.TgZ(21,"strong"),t._uU(22," 09:35:56 "),t.qZA(),t.qZA(),t.qZA(),t._UZ(23,"br"),t.TgZ(24,"div",2),t._uU(25," Tiempo transcurrido "),t.TgZ(26,"h4"),t.TgZ(27,"strong"),t._uU(28," 00:35:56 "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",3),t.TgZ(30,"button",4),t.NdJ("click",function(){t.CHM(a);const d=t.MAs(34);return o.confirmModal(d)}),t._UZ(31,"fa-icon",5),t._uU(32," Finalizar carga "),t.qZA(),t.qZA(),t.qZA(),t.YNc(33,y,7,0,"ng-template",null,6,t.W1O)}2&n&&(t.xp6(31),t.Q6J("icon",t.DdM(1,N)))},directives:[l.BN],styles:[""]}),i})()},{path:"",redirectTo:"assigned-truck",pathMatch:"full"}];let R=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.Bz.forChild(B)],r.Bz]}),i})();var s=c(801);let z=(()=>{class i{constructor(n){n.addIcons(s.J9Y,s.LEp,s.a3n,s.$KU,s.iMS)}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(l.by))},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,R,l.uH,g.zk.forRoot()]]}),i})()}}]);