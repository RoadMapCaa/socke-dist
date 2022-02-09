"use strict";(self.webpackChunksocket_pwa=self.webpackChunksocket_pwa||[]).push([[119],{6119:(Y,g,l)=>{l.r(g),l.d(g,{PublicModule:()=>$});var a=l(9808),Z=l(9539),e=l(5e3);let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-public"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},directives:[Z.lC],styles:[""]}),n})();var m=l(3722);const T=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],c=(()=>{const n=T[0],i={};for(const t of T)if((null==t?void 0:t[1])in document){for(const[o,u]of t.entries())i[n[o]]=u;return i}return!1})(),A={change:c.fullscreenchange,error:c.fullscreenerror};let s={request:(n=document.documentElement,i)=>new Promise((t,r)=>{const o=()=>{s.off("change",o),t()};s.on("change",o);const u=n[c.requestFullscreen](i);u instanceof Promise&&u.then(o).catch(r)}),exit:()=>new Promise((n,i)=>{if(!s.isFullscreen)return void n();const t=()=>{s.off("change",t),n()};s.on("change",t);const r=document[c.exitFullscreen]();r instanceof Promise&&r.then(t).catch(i)}),toggle:(n,i)=>s.isFullscreen?s.exit():s.request(n,i),onchange(n){s.on("change",n)},onerror(n){s.on("error",n)},on(n,i){const t=A[n];t&&document.addEventListener(t,i,!1)},off(n,i){const t=A[n];t&&document.removeEventListener(t,i,!1)},raw:c};Object.defineProperties(s,{isFullscreen:{get:()=>Boolean(document[c.fullscreenElement])},element:{enumerable:!0,get:()=>{var n;return null!=(n=document[c.fullscreenElement])?n:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[c.fullscreenEnabled])}}),c||(s={isEnabled:!1});const p=s;let f=(()=>{class n{onClick(){p.isEnabled&&p.toggle()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","fullscreen",""]],hostBindings:function(t,r){1&t&&e.NdJ("click",function(){return r.onClick()})}}),n})();var d=l(9444);function _(n,i){if(1&n&&(e.TgZ(0,"tr",8),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8,"1 hora"),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.Oqu(t.truck.plaque),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(t.arrivalTime)}}function U(n,i){if(1&n&&(e.TgZ(0,"tr",8),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8,"1 hora"),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.Oqu(t.truck.plaque),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(t.arrivalTime)}}function x(n,i){if(1&n&&(e.TgZ(0,"tr",8),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8,"1 hora"),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(2),e.Oqu(t.truck.plaque),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(t.arrivalTime)}}const b=function(){return["fas","expand"]};let F=(()=>{class n{constructor(t){this.wsService=t,this.arrivalTrucks=[],this.trucksUnload=[],this.loadTrucks=[]}ngOnInit(){this.arrivalSubscription$=this.getArrivalTrucks(),this.unloadSubscription$=this.getTruckUnload(),this.loadSubscription$=this.getLoadTrucks(),this.getData()}getArrivalTrucks(){return this.wsService.listen("arrival-trucks").subscribe(t=>{console.log("LLegada de camiones",t),this.arrivalTrucks=t})}getTruckUnload(){return this.wsService.listen("unload-trucks").subscribe(t=>{console.log("Descarga de camiones",t),this.trucksUnload=t})}getLoadTrucks(){return this.wsService.listen("load-trucks").subscribe(t=>{console.log("carga de camiones",t),this.loadTrucks=t})}getData(){this.wsService.emit("tv-arrival"),this.wsService.emit("tv-unload"),this.wsService.emit("tv-load")}ngOnDestroy(){this.arrivalSubscription$.unsubscribe(),this.unloadSubscription$.unsubscribe(),this.loadSubscription$.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.i))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tv"]],decls:54,vars:5,consts:[[1,"d-flex","flex-row-reverse","p-2"],["href","javascript:;","fullscreen",""],[3,"icon"],[1,"container-fluid","mt-5"],[1,"text-center","font-weight-bold"],[1,"table"],["scope","col"],["class","table-warning",4,"ngFor","ngForOf"],[1,"table-warning"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"a",1),e._UZ(2,"fa-icon",2),e.qZA(),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"div"),e.TgZ(5,"h3",4),e._uU(6," LLEGADA DE CAMIONES "),e.qZA(),e.TgZ(7,"table",5),e.TgZ(8,"thead"),e.TgZ(9,"tr"),e.TgZ(10,"th",6),e._uU(11,"PLACA"),e.qZA(),e.TgZ(12,"th",6),e._uU(13,"CONDUCTOR"),e.qZA(),e.TgZ(14,"th",6),e._uU(15,"HORA DE LLEGADA"),e.qZA(),e.TgZ(16,"th",6),e._uU(17,"HORA DE ESPERA"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"tbody"),e.YNc(19,_,9,4,"tr",7),e.qZA(),e.qZA(),e.qZA(),e._UZ(20,"hr"),e.TgZ(21,"div"),e.TgZ(22,"h3",4),e._uU(23," CAMIONES EN DESCARGA "),e.qZA(),e.TgZ(24,"table",5),e.TgZ(25,"thead"),e.TgZ(26,"tr"),e.TgZ(27,"th",6),e._uU(28,"PLACA"),e.qZA(),e.TgZ(29,"th",6),e._uU(30,"CONDUCTOR"),e.qZA(),e.TgZ(31,"th",6),e._uU(32,"MONTACARGUISTA"),e.qZA(),e.TgZ(33,"th",6),e._uU(34,"TIEMPO TRANSCURRIDO"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"tbody"),e.YNc(36,U,9,4,"tr",7),e.qZA(),e.qZA(),e.qZA(),e._UZ(37,"hr"),e.TgZ(38,"div"),e.TgZ(39,"h3",4),e._uU(40," CAMIONES EN CARGA "),e.qZA(),e.TgZ(41,"table",5),e.TgZ(42,"thead"),e.TgZ(43,"tr"),e.TgZ(44,"th",6),e._uU(45,"PLACA"),e.qZA(),e.TgZ(46,"th",6),e._uU(47,"CONDUCTOR"),e.qZA(),e.TgZ(48,"th",6),e._uU(49,"MONTACARGUISTA"),e.qZA(),e.TgZ(50,"th",6),e._uU(51,"TIEMPO TRANSCURRIDO"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"tbody"),e.YNc(53,x,9,4,"tr",7),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("icon",e.DdM(4,b)),e.xp6(17),e.Q6J("ngForOf",r.arrivalTrucks),e.xp6(17),e.Q6J("ngForOf",r.trucksUnload),e.xp6(17),e.Q6J("ngForOf",r.loadTrucks))},directives:[f,d.BN,a.sg],styles:[""]}),n})();var C=l(2340),O=l(520);const{endpoint:q}=C.N;let k=(()=>{class n{constructor(t){this.http=t}getBays(){return this.http.get(`${q}/public/bays`)}getTrucks(){return this.http.get(`${q}/public/registries`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(O.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var E=l(7893);function S(n,i){if(1&n&&(e.TgZ(0,"div",20),e._UZ(1,"app-timer",21),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("start",!0)("action","DESCARGANDO...")("startTime",t.registry.unloadStartTime)("maxMin",t.registry.truck.type.maxTimeUnload)}}function N(n,i){if(1&n&&(e.TgZ(0,"div",20),e._UZ(1,"app-timer",21),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("start",!0)("action","CARGANDO...")("startTime",t.registry.loadStartTime)("maxMin",t.registry.truck.type.maxTimeLoad)}}function D(n,i){1&n&&(e.TgZ(0,"div",20),e.TgZ(1,"p",22),e._uU(2,"ESPERANDO VEHICULO"),e.qZA(),e._UZ(3,"app-timer"),e.TgZ(4,"h4",23),e._uU(5,"00:00:00"),e.qZA(),e.qZA())}function w(n,i){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"small"),e._uU(4,"Veh\xedculo"),e.qZA(),e.TgZ(5,"h4"),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"div",2),e.TgZ(8,"small"),e._uU(9,"Montacarga"),e.qZA(),e.TgZ(10,"h5"),e._uU(11),e.qZA(),e.qZA(),e.qZA(),e.YNc(12,S,2,4,"div",19),e.YNc(13,N,2,4,"div",19),e.YNc(14,D,6,0,"div",19),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(6),e.Oqu(t.registry.truck.plaque),e.xp6(5),e.Oqu(t.registry.lift.name),e.xp6(1),e.Q6J("ngIf","DESCARGANDO"===t.registry.state),e.xp6(1),e.Q6J("ngIf","CARGANDO"===t.registry.state),e.xp6(1),e.Q6J("ngIf","DESCARGA"===t.registry.state||"CARGA"===t.registry.state)}}function I(n,i){1&n&&(e.TgZ(0,"div",24),e.TgZ(1,"small"),e._uU(2,"Veh\xedculo"),e.qZA(),e.TgZ(3,"h4"),e._uU(4,"-------"),e.qZA(),e.TgZ(5,"small"),e._uU(6,"Estado"),e.qZA(),e.TgZ(7,"h2",25),e.TgZ(8,"small"),e._uU(9,"LIBRE"),e.qZA(),e.qZA(),e._UZ(10,"app-timer"),e.qZA())}function H(n,i){if(1&n&&(e.TgZ(0,"div",13),e.TgZ(1,"div"),e.TgZ(2,"div",14),e.TgZ(3,"h5",15),e._uU(4),e.qZA(),e._UZ(5,"hr",16),e.YNc(6,w,15,5,"div",17),e.YNc(7,I,11,0,"div",18),e.qZA(),e.qZA(),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Gre("card mb-3 ",t.isFree?"bg-success-1":"bg-warning",""),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",!t.isFree),e.xp6(1),e.Q6J("ngIf",t.isFree)}}function y(n,i){1&n&&(e.TgZ(0,"span",30),e._uU(1,"*"),e.qZA())}function M(n,i){1&n&&(e.TgZ(0,"span",31),e._uU(1,"*"),e.qZA())}function R(n,i){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"th",26),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,y,2,0,"span",27),e.YNc(5,M,2,0,"span",28),e._uU(6," \xa0 "),e.TgZ(7,"strong"),e._uU(8),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"small"),e._uU(11),e.qZA(),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td",20),e._uU(15),e.ALo(16,"date"),e.qZA(),e.TgZ(17,"td",20),e._uU(18),e.ALo(19,"date"),e.qZA(),e.TgZ(20,"td",29),e._uU(21),e.qZA(),e.TgZ(22,"td",20),e._uU(23),e.ALo(24,"date"),e.qZA(),e.TgZ(25,"td",20),e._uU(26),e.ALo(27,"date"),e.qZA(),e.TgZ(28,"td",29),e._uU(29),e.qZA(),e.TgZ(30,"td",20),e._uU(31),e.ALo(32,"date"),e.qZA(),e.TgZ(33,"td",20),e._uU(34),e.ALo(35,"date"),e.qZA(),e.TgZ(36,"td",29),e._uU(37),e.qZA(),e.qZA()),2&n){const t=i.$implicit,r=i.index,o=e.oxw();e.xp6(2),e.Oqu(r+1),e.xp6(2),e.Q6J("ngIf","SALIDA"!==t.state),e.xp6(1),e.Q6J("ngIf","SALIDA"===t.state),e.xp6(3),e.Oqu(t.truck.plaque),e.xp6(3),e.hij("\xa0 \xa0 \xa0",t.truck.type.name,""),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(e.xi3(16,16,t.arrival,"HH:mm a")),e.xp6(3),e.Oqu(e.xi3(19,19,t.checkInTime,"HH:mm a")),e.xp6(3),e.Oqu(o.diff(t.checkInTime,t.arrival)),e.xp6(2),e.Oqu(e.xi3(24,22,t.unloadStartTime,"HH:mm a")),e.xp6(3),e.Oqu(e.xi3(27,25,t.unloadEndTime,"HH:mm a")),e.xp6(3),e.Oqu(o.diff(t.unloadEndTime,t.unloadStartTime)),e.xp6(2),e.Oqu(e.xi3(32,28,t.loadStartTime,"HH:mm a")),e.xp6(3),e.Oqu(e.xi3(35,31,t.loadEndTime,"HH:mm a")),e.xp6(3),e.Oqu(o.diff(t.loadEndTime,t.loadStartTime))}}const L=function(){return["fas","expand"]},P=function(){return["fas","sync-alt"]},J=[{path:"",component:v,children:[{path:"home",component:(()=>{class n{constructor(t,r){this.tvAPI=t,this.wsService=r,this.today=new Date,this.bays=[],this.trucks=[]}ngOnInit(){this.loadBays(),this.wsService.listen("hello2").subscribe(t=>this.loadBays())}loadBays(){this.tvAPI.getBays().subscribe(t=>{this.loadTrucks(),this.bays=t.map(r=>{var o;return r.isFree=!r.unload,r.unload&&"DESCARGADO"===r.unload.state&&(r.isFree=!0),r.isFree&&(r.isFree=!r.load,r.load&&"CARGADO"===r.load.state&&(r.isFree=!0)),r.isFree||(r.unload?(r.registry=r.unload,r.startTime=r.unload.unloadStartTime):(r.registry=r.load,r.startTime=r.load.loadStartTime),r.registry.lift=(null===(o=r.unload)||void 0===o?void 0:o.unloadLift)?r.unload.unloadLift:r.load.loadLift),r})})}loadTrucks(){this.tvAPI.getTrucks().subscribe(t=>this.trucks=t)}diff(t,r){const o=new Date(t).valueOf()-new Date(r).valueOf();return`${Math.floor(o%864e5/36e5)||0}:${Math.floor(o%36e5/6e4)||0}`}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k),e.Y36(m.i))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:54,vars:11,consts:[[1,"container-fluid","mt-3"],[1,"row"],[1,"col"],[1,"col","text-end"],["href","javascript:;","fullscreen","",1,"btn","btn-outline-warning"],[3,"icon"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-outline-dark","float-end","btn-rounded","me-2",3,"click"],[1,"table-responsive"],[1,"table"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],[1,"col-md-3"],[1,"card-body"],[1,"card-title"],[1,"m-0"],[4,"ngIf"],["class","text-center text-success",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"text-center"],[3,"start","action","startTime","maxMin"],[1,"text-danger","mb-1"],[1,"text-danger","fw-bold"],[1,"text-center","text-success"],[1,"text-muted"],["scope","row"],["class","badge rounded-pill","style","background-color: rgb(4, 251, 31);",4,"ngIf"],["class","badge rounded-pill bg-dark",4,"ngIf"],[1,"bg-secondary","text-white","text-center"],[1,"badge","rounded-pill",2,"background-color","rgb(4, 251, 31)"],[1,"badge","rounded-pill","bg-dark"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h4"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"a",4),e._UZ(8,"fa-icon",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",1),e.YNc(10,H,8,6,"div",6),e.qZA(),e.TgZ(11,"button",7),e.NdJ("click",function(){return r.loadBays()}),e._UZ(12,"fa-icon",5),e.qZA(),e.TgZ(13,"h5"),e._uU(14),e.qZA(),e.TgZ(15,"div",8),e.TgZ(16,"table",9),e.TgZ(17,"thead"),e.TgZ(18,"tr"),e.TgZ(19,"th",10),e._uU(20,"#"),e.qZA(),e.TgZ(21,"th",10),e._uU(22,"Veh\xedculo"),e.qZA(),e.TgZ(23,"th",10),e._uU(24,"Conductor"),e.qZA(),e.TgZ(25,"th",11),e.TgZ(26,"small"),e._uU(27,"Hora llegada"),e.qZA(),e.qZA(),e.TgZ(28,"th",11),e.TgZ(29,"small"),e._uU(30,"Hora Ingreso"),e.qZA(),e.qZA(),e.TgZ(31,"th",11),e.TgZ(32,"small"),e._uU(33,"DIFF"),e.qZA(),e.qZA(),e.TgZ(34,"th",11),e.TgZ(35,"small"),e._uU(36,"Inicio descarga"),e.qZA(),e.qZA(),e.TgZ(37,"th",11),e.TgZ(38,"small"),e._uU(39,"Fin descarga"),e.qZA(),e.qZA(),e.TgZ(40,"th",11),e.TgZ(41,"small"),e._uU(42,"DIFF"),e.qZA(),e.qZA(),e.TgZ(43,"th",11),e.TgZ(44,"small"),e._uU(45,"Inicio carga"),e.qZA(),e.qZA(),e.TgZ(46,"th",11),e.TgZ(47,"small"),e._uU(48,"Fin carga"),e.qZA(),e.qZA(),e.TgZ(49,"th",11),e.TgZ(50,"small"),e._uU(51,"DIFF"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"tbody"),e.YNc(53,R,38,34,"tr",12),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Oqu(e.xi3(5,6,r.today,"dd/MM/yyyy")),e.xp6(4),e.Q6J("icon",e.DdM(9,L)),e.xp6(2),e.Q6J("ngForOf",r.bays),e.xp6(2),e.Q6J("icon",e.DdM(10,P)),e.xp6(2),e.hij("",r.trucks.length," Camiones en cola"),e.xp6(39),e.Q6J("ngForOf",r.trucks))},directives:[f,d.BN,a.sg,a.O5,E.K],pipes:[a.uU],styles:[".bg-success-1[_ngcontent-%COMP%]{background-color:#5fff5f}"]}),n})()},{path:"tv",component:F},{path:"",redirectTo:"home",pathMatch:"full"}]}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[Z.Bz.forChild(J)],Z.Bz]}),n})();var G=l(6802),h=l(801);let $=(()=>{class n{constructor(t){t.addIcons(h.TL5,h.d8e)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(d.by))},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.ez,B,G.m,d.uH]]}),n})()}}]);