"use strict";(self.webpackChunksocket_pwa=self.webpackChunksocket_pwa||[]).push([[119],{6119:(B,g,s)=>{s.r(g),s.d(g,{PublicModule:()=>y});var a=s(9808),Z=s(9539),e=s(5e3);let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-public"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},directives:[Z.lC],styles:[""]}),n})();var m=s(3722);const T=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],c=(()=>{const n=T[0],o={};for(const t of T)if((null==t?void 0:t[1])in document){for(const[i,u]of t.entries())o[n[i]]=u;return o}return!1})(),A={change:c.fullscreenchange,error:c.fullscreenerror};let l={request:(n=document.documentElement,o)=>new Promise((t,r)=>{const i=()=>{l.off("change",i),t()};l.on("change",i);const u=n[c.requestFullscreen](o);u instanceof Promise&&u.then(i).catch(r)}),exit:()=>new Promise((n,o)=>{if(!l.isFullscreen)return void n();const t=()=>{l.off("change",t),n()};l.on("change",t);const r=document[c.exitFullscreen]();r instanceof Promise&&r.then(t).catch(o)}),toggle:(n,o)=>l.isFullscreen?l.exit():l.request(n,o),onchange(n){l.on("change",n)},onerror(n){l.on("error",n)},on(n,o){const t=A[n];t&&document.addEventListener(t,o,!1)},off(n,o){const t=A[n];t&&document.removeEventListener(t,o,!1)},raw:c};Object.defineProperties(l,{isFullscreen:{get:()=>Boolean(document[c.fullscreenElement])},element:{enumerable:!0,get:()=>{var n;return null!=(n=document[c.fullscreenElement])?n:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[c.fullscreenEnabled])}}),c||(l={isEnabled:!1});const f=l;let q=(()=>{class n{onClick(){f.isEnabled&&f.toggle()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","fullscreen",""]],hostBindings:function(t,r){1&t&&e.NdJ("click",function(){return r.onClick()})}}),n})();var d=s(9444);function _(n,o){if(1&n&&(e.TgZ(0,"tr",8),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8,"1 hora"),e.qZA(),e.qZA()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.truck.plaque),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(t.arrivalTime)}}function U(n,o){if(1&n&&(e.TgZ(0,"tr",8),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8,"1 hora"),e.qZA(),e.qZA()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.truck.plaque),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(t.arrivalTime)}}function x(n,o){if(1&n&&(e.TgZ(0,"tr",8),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8,"1 hora"),e.qZA(),e.qZA()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.truck.plaque),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(t.arrivalTime)}}const F=function(){return["fas","expand"]};let b=(()=>{class n{constructor(t){this.wsService=t,this.arrivalTrucks=[],this.trucksUnload=[],this.loadTrucks=[]}ngOnInit(){this.arrivalSubscription$=this.getArrivalTrucks(),this.unloadSubscription$=this.getTruckUnload(),this.loadSubscription$=this.getLoadTrucks(),this.getData()}getArrivalTrucks(){return this.wsService.listen("arrival-trucks").subscribe(t=>{console.log("LLegada de camiones",t),this.arrivalTrucks=t})}getTruckUnload(){return this.wsService.listen("unload-trucks").subscribe(t=>{console.log("Descarga de camiones",t),this.trucksUnload=t})}getLoadTrucks(){return this.wsService.listen("load-trucks").subscribe(t=>{console.log("carga de camiones",t),this.loadTrucks=t})}getData(){this.wsService.emit("tv-arrival"),this.wsService.emit("tv-unload"),this.wsService.emit("tv-load")}ngOnDestroy(){this.arrivalSubscription$.unsubscribe(),this.unloadSubscription$.unsubscribe(),this.loadSubscription$.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.i))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tv"]],decls:54,vars:5,consts:[[1,"d-flex","flex-row-reverse","p-2"],["href","javascript:;","fullscreen",""],[3,"icon"],[1,"container-fluid","mt-5"],[1,"text-center","font-weight-bold"],[1,"table"],["scope","col"],["class","table-warning",4,"ngFor","ngForOf"],[1,"table-warning"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"a",1),e._UZ(2,"fa-icon",2),e.qZA(),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"div"),e.TgZ(5,"h3",4),e._uU(6," LLEGADA DE CAMIONES "),e.qZA(),e.TgZ(7,"table",5),e.TgZ(8,"thead"),e.TgZ(9,"tr"),e.TgZ(10,"th",6),e._uU(11,"PLACA"),e.qZA(),e.TgZ(12,"th",6),e._uU(13,"CONDUCTOR"),e.qZA(),e.TgZ(14,"th",6),e._uU(15,"HORA DE LLEGADA"),e.qZA(),e.TgZ(16,"th",6),e._uU(17,"HORA DE ESPERA"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"tbody"),e.YNc(19,_,9,4,"tr",7),e.qZA(),e.qZA(),e.qZA(),e._UZ(20,"hr"),e.TgZ(21,"div"),e.TgZ(22,"h3",4),e._uU(23," CAMIONES EN DESCARGA "),e.qZA(),e.TgZ(24,"table",5),e.TgZ(25,"thead"),e.TgZ(26,"tr"),e.TgZ(27,"th",6),e._uU(28,"PLACA"),e.qZA(),e.TgZ(29,"th",6),e._uU(30,"CONDUCTOR"),e.qZA(),e.TgZ(31,"th",6),e._uU(32,"MONTACARGUISTA"),e.qZA(),e.TgZ(33,"th",6),e._uU(34,"TIEMPO TRANSCURRIDO"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"tbody"),e.YNc(36,U,9,4,"tr",7),e.qZA(),e.qZA(),e.qZA(),e._UZ(37,"hr"),e.TgZ(38,"div"),e.TgZ(39,"h3",4),e._uU(40," CAMIONES EN CARGA "),e.qZA(),e.TgZ(41,"table",5),e.TgZ(42,"thead"),e.TgZ(43,"tr"),e.TgZ(44,"th",6),e._uU(45,"PLACA"),e.qZA(),e.TgZ(46,"th",6),e._uU(47,"CONDUCTOR"),e.qZA(),e.TgZ(48,"th",6),e._uU(49,"MONTACARGUISTA"),e.qZA(),e.TgZ(50,"th",6),e._uU(51,"TIEMPO TRANSCURRIDO"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"tbody"),e.YNc(53,x,9,4,"tr",7),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("icon",e.DdM(4,F)),e.xp6(17),e.Q6J("ngForOf",r.arrivalTrucks),e.xp6(17),e.Q6J("ngForOf",r.trucksUnload),e.xp6(17),e.Q6J("ngForOf",r.loadTrucks))},directives:[q,d.BN,a.sg],styles:[""]}),n})();var O=s(2340),C=s(520);const{endpoint:p}=O.N;let E=(()=>{class n{constructor(t){this.http=t}getBays(){return this.http.get(`${p}/public/bays`)}getTrucks(){return this.http.get(`${p}/public/registries`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function k(n,o){if(1&n&&(e.TgZ(0,"div",22),e.TgZ(1,"small"),e._uU(2,"Hora inicio"),e.qZA(),e.TgZ(3,"h6",21),e._uU(4),e.ALo(5,"date"),e.qZA(),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(4),e.Oqu(e.xi3(5,1,t.startTime,"HH:mm"))}}function S(n,o){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"small"),e._uU(4,"Veh\xedculo"),e.qZA(),e.TgZ(5,"h4"),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"div",2),e.TgZ(8,"small"),e._uU(9,"Montacarga"),e.qZA(),e.TgZ(10,"h5"),e._uU(11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",1),e.YNc(13,k,6,4,"div",19),e.TgZ(14,"div",20),e.TgZ(15,"small"),e._uU(16,"Estado"),e.qZA(),e.TgZ(17,"h6",21),e.TgZ(18,"small"),e._uU(19),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(6),e.Oqu(t.registry.truck.plaque),e.xp6(5),e.Oqu(t.registry.lift.name),e.xp6(2),e.Q6J("ngIf","CARGANDO"===t.registry.state||"DESCARGANDO"===t.registry.state),e.xp6(6),e.AsE("",t.registry.state,"","CARGANDO"===t.registry.state||"DESCARGANDO"===t.registry.state?"...":"","")}}function w(n,o){1&n&&(e.TgZ(0,"div",23),e.TgZ(1,"small"),e._uU(2,"Veh\xedculo"),e.qZA(),e.TgZ(3,"h4"),e._uU(4,"-------"),e.qZA(),e.TgZ(5,"small"),e._uU(6,"Estado"),e.qZA(),e.TgZ(7,"h6",24),e.TgZ(8,"small"),e._uU(9,"LIBRE"),e.qZA(),e.qZA(),e.qZA())}function D(n,o){if(1&n&&(e.TgZ(0,"div",13),e.TgZ(1,"div"),e.TgZ(2,"div",14),e.TgZ(3,"h5",15),e._uU(4),e.qZA(),e._UZ(5,"hr",16),e.YNc(6,S,20,5,"div",17),e.YNc(7,w,10,0,"div",18),e.qZA(),e.qZA(),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Gre("card mb-3 ",t.isFree?"bg-success-1":"bg-warning",""),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",!t.isFree),e.xp6(1),e.Q6J("ngIf",t.isFree)}}function N(n,o){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"th",25),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e._UZ(5,"br"),e.TgZ(6,"small"),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td",26),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"td",26),e._uU(14),e.ALo(15,"date"),e.qZA(),e.TgZ(16,"td",27),e._uU(17),e.qZA(),e.TgZ(18,"td",26),e._uU(19),e.ALo(20,"date"),e.qZA(),e.TgZ(21,"td",26),e._uU(22),e.ALo(23,"date"),e.qZA(),e.TgZ(24,"td",27),e._uU(25),e.qZA(),e.TgZ(26,"td",26),e._uU(27),e.ALo(28,"date"),e.qZA(),e.TgZ(29,"td",26),e._uU(30),e.ALo(31,"date"),e.qZA(),e.TgZ(32,"td",27),e._uU(33),e.qZA(),e.qZA()),2&n){const t=o.$implicit,r=o.index,i=e.oxw();e.xp6(2),e.Oqu(r+1),e.xp6(2),e.hij("",t.truck.plaque," "),e.xp6(3),e.Oqu(t.truck.type.name),e.xp6(2),e.AsE("",t.driver.firstName," ",t.driver.lastName,""),e.xp6(2),e.Oqu(e.xi3(12,14,t.arrival,"HH:mm a")),e.xp6(3),e.Oqu(e.xi3(15,17,t.checkInTime,"HH:mm")),e.xp6(3),e.Oqu(i.diff(t.arrival,t.checkInTime)),e.xp6(2),e.Oqu(e.xi3(20,20,t.unloadStartTime,"HH:mm")),e.xp6(3),e.Oqu(e.xi3(23,23,t.unloadEndTime,"HH:mm")),e.xp6(3),e.Oqu(i.diff(t.unloadStartTime,t.unloadEndTime)),e.xp6(2),e.Oqu(e.xi3(28,26,t.loadStartTime,"HH:mm")),e.xp6(3),e.Oqu(e.xi3(31,29,t.loadEndTime,"HH:mm")),e.xp6(3),e.Oqu(i.diff(t.loadStartTime,t.loadEndTime))}}const H=function(){return["fas","expand"]},I=function(){return["fas","sync-alt"]},M=[{path:"",component:v,children:[{path:"home",component:(()=>{class n{constructor(t,r){this.tvAPI=t,this.wsService=r,this.today=new Date,this.bays=[],this.trucks=[]}ngOnInit(){this.loadBays(),this.wsService.listen("hello2").subscribe(t=>this.loadBays())}loadBays(){this.tvAPI.getBays().subscribe(t=>{this.loadTrucks(),this.bays=t.map(r=>{var i;return r.isFree=!r.unload,r.unload&&"DESCARGADO"===r.unload.state&&(r.isFree=!0),r.isFree&&(r.isFree=!r.load,r.load&&"CARGADO"===r.load.state&&(r.isFree=!0)),r.isFree||(r.unload?(r.registry=r.unload,r.startTime=r.unload.unloadStartTime):(r.registry=r.load,r.startTime=r.load.loadStartTime),r.registry.lift=(null===(i=r.unload)||void 0===i?void 0:i.unloadLift)?r.unload.unloadLift:r.load.loadLift),r})})}loadTrucks(){this.tvAPI.getTrucks().subscribe(t=>this.trucks=t)}diff(t,r){const i=new Date(r).valueOf()-new Date(t).valueOf();return`${Math.floor(i%864e5/36e5)||0}:${Math.floor(i%36e5/6e4)||0}`}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(E),e.Y36(m.i))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:54,vars:11,consts:[[1,"container-fluid","mt-3"],[1,"row"],[1,"col"],[1,"col","text-end"],["href","javascript:;","fullscreen","",1,"btn","btn-outline-warning"],[3,"icon"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-outline-dark","float-end","btn-rounded","me-2",3,"click"],[1,"table-responsive"],[1,"table"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],[1,"col-md-3"],[1,"card-body"],[1,"card-title"],[1,"m-0"],[4,"ngIf"],["class","text-center text-success",4,"ngIf"],["class","col-md-4 text-center",4,"ngIf"],[1,"col-md-8","text-center"],[1,"text-danger"],[1,"col-md-4","text-center"],[1,"text-center","text-success"],[1,"text-muted"],["scope","row"],[1,"text-center"],[1,"bg-secondary","text-white","text-center"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h4"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"a",4),e._UZ(8,"fa-icon",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",1),e.YNc(10,D,8,6,"div",6),e.qZA(),e.TgZ(11,"button",7),e.NdJ("click",function(){return r.loadBays()}),e._UZ(12,"fa-icon",5),e.qZA(),e.TgZ(13,"h5"),e._uU(14),e.qZA(),e.TgZ(15,"div",8),e.TgZ(16,"table",9),e.TgZ(17,"thead"),e.TgZ(18,"tr"),e.TgZ(19,"th",10),e._uU(20,"#"),e.qZA(),e.TgZ(21,"th",10),e._uU(22,"Veh\xedculo"),e.qZA(),e.TgZ(23,"th",10),e._uU(24,"Conductor"),e.qZA(),e.TgZ(25,"th",11),e.TgZ(26,"small"),e._uU(27,"Hora llegada"),e.qZA(),e.qZA(),e.TgZ(28,"th",11),e.TgZ(29,"small"),e._uU(30,"Hora Ingreso"),e.qZA(),e.qZA(),e.TgZ(31,"th",11),e.TgZ(32,"small"),e._uU(33,"DIFF"),e.qZA(),e.qZA(),e.TgZ(34,"th",11),e.TgZ(35,"small"),e._uU(36,"Inicio descarga"),e.qZA(),e.qZA(),e.TgZ(37,"th",11),e.TgZ(38,"small"),e._uU(39,"Fin descarga"),e.qZA(),e.qZA(),e.TgZ(40,"th",11),e.TgZ(41,"small"),e._uU(42,"DIFF"),e.qZA(),e.qZA(),e.TgZ(43,"th",11),e.TgZ(44,"small"),e._uU(45,"Inicio carga"),e.qZA(),e.qZA(),e.TgZ(46,"th",11),e.TgZ(47,"small"),e._uU(48,"Fin carga"),e.qZA(),e.qZA(),e.TgZ(49,"th",11),e.TgZ(50,"small"),e._uU(51,"DIFF"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(52,"tbody"),e.YNc(53,N,34,32,"tr",12),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Oqu(e.xi3(5,6,r.today,"dd/MM/yyyy")),e.xp6(4),e.Q6J("icon",e.DdM(9,H)),e.xp6(2),e.Q6J("ngForOf",r.bays),e.xp6(2),e.Q6J("icon",e.DdM(10,I)),e.xp6(2),e.hij("",r.trucks.length," Camiones en cola"),e.xp6(39),e.Q6J("ngForOf",r.trucks))},directives:[q,d.BN,a.sg,a.O5],pipes:[a.uU],styles:[".bg-success-1[_ngcontent-%COMP%]{background-color:#a0ffa0}"]}),n})()},{path:"tv",component:b},{path:"",redirectTo:"home",pathMatch:"full"}]}];let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[Z.Bz.forChild(M)],Z.Bz]}),n})();var P=s(6802),h=s(801);let y=(()=>{class n{constructor(t){t.addIcons(h.TL5,h.d8e)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(d.by))},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.ez,R,P.m,d.uH]]}),n})()}}]);