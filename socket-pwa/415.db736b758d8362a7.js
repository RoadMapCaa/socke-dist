"use strict";(self.webpackChunksocket_pwa=self.webpackChunksocket_pwa||[]).push([[415],{7893:(F,x,v)=>{v.d(x,{K:()=>e});var t=v(5e3),g=v(1465),u=v(9808);const n=function(i){return{blink:i}};function s(i,o){if(1&i&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.qZA(),t.qZA()),2&i){const _=t.oxw();t.Q6J("ngClass",t.VKq(4,n,!_.running)),t.xp6(3),t.hij("",_.hours,":"),t.xp6(2),t.hij("",_.minutes,":"),t.xp6(2),t.Oqu(_.seconds)}}let e=(()=>{class i{constructor(){this.hours="00",this.minutes="00",this.seconds="00",this.milliseconds="00",this.progress=0,this.action="",this.maxMin=0,this.laps=[],this.running=!1,this.startText="Empezar",this.start=!0,this.typeProg="success"}ngOnChanges(_){console.log(_.start),_.start.currentValue?this.startTimer():this.clearTimer()}setProgress(_,T){T>0&&(_+=60*T),this.progress=Math.floor(100*_/this.maxMin),this.progress>50&&(this.typeProg="info"),this.progress>75&&(this.typeProg="warning"),this.progress>92&&(this.typeProg="danger")}startTimer(){if(this.running=!this.running,this.running){this.startText="Stop";const _=new Date(this.startTime).valueOf()-(this.counter||0);this.timerRef=setInterval(()=>{this.counter=Date.now()-_,this.hours=Math.floor(this.counter%864e5/36e5),this.minutes=Math.floor(this.counter%36e5/6e4),this.setProgress(this.minutes,this.hours),this.seconds=Math.floor(this.counter%6e4/1e3),this.minutes=Number(this.minutes)<10?"0"+this.minutes:""+this.minutes,this.milliseconds=Number(this.milliseconds)<10?"0"+this.milliseconds:""+this.milliseconds,this.seconds=Number(this.seconds)<10?"0"+this.seconds:""+this.seconds})}else this.startText="Resume",clearInterval(this.timerRef)}lapTimeSplit(){this.laps.push(this.minutes+":"+this.seconds+":"+this.milliseconds)}clearTimer(){this.running=!1,this.startText="Empezar",this.counter=void 0,this.milliseconds="00",this.seconds="00",this.minutes="00",this.hours="00",this.laps=[],clearInterval(this.timerRef)}ngOnDestroy(){clearInterval(this.timerRef)}}return i.\u0275fac=function(_){return new(_||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-timer"]],inputs:{start:"start",action:"action",showTimerControls:"showTimerControls",startTime:"startTime",maxMin:"maxMin"},features:[t.TTD],decls:7,vars:8,consts:[[1,"mb-1"],[3,"max","value","type","striped","animate"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"h3","fw-bold","my-1"]],template:function(_,T){1&_&&(t.TgZ(0,"section"),t.TgZ(1,"p",0),t._uU(2),t.qZA(),t.TgZ(3,"progressbar",1),t.TgZ(4,"i"),t._uU(5),t.qZA(),t.qZA(),t.YNc(6,s,8,6,"div",2),t.qZA()),2&_&&(t.xp6(2),t.Oqu(T.action),t.xp6(1),t.Q6J("max",100)("value",T.progress)("type",T.typeProg)("striped",!0)("animate",!0),t.xp6(2),t.hij("",T.progress,"%"),t.xp6(1),t.Q6J("ngIf",T.startTime))},directives:[g.O1,u.O5,u.mk],styles:[""]}),i})()},3722:(F,x,v)=>{v.d(x,{i:()=>u});var t=v(5e3),g=v(5898);let u=(()=>{class n{constructor(e){this.socket=e,this.socketStatus=!1,this.checkStatus()}checkStatus(){this.socket.on("connect",()=>{console.log("Conectado al servidor"),this.socketStatus=!0}),this.socket.on("disconnect",()=>{console.log("Desconectado del servidor"),this.socketStatus=!1})}emit(e,i,o){this.socket.emit(e,i,o)}listen(e){return this.socket.fromEvent(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g.sk))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},6802:(F,x,v)=>{v.d(x,{m:()=>m});var t=v(9808),g=v(2216),u=v(520),n=v(8274),s=v(5e3),e=v(5197),i=v(9062);let b=(()=>{class y{static forRoot(){return{ngModule:y,providers:[i.oj,e.sA]}}}return y.\u0275fac=function(d){return new(d||y)},y.\u0275mod=s.oAB({type:y}),y.\u0275inj=s.cJS({imports:[[t.ez]]}),y})();var p=v(1465);let m=(()=>{class y{}return y.\u0275fac=function(d){return new(d||y)},y.\u0275mod=s.oAB({type:y}),y.\u0275inj=s.cJS({imports:[[t.ez,u.JF,g.Fx,n.mr.forRoot(),b.forRoot(),p.HC.forRoot()],t.ez]}),y})()},2216:(F,x,v)=>{v.d(x,{Ao:()=>z,Fx:()=>K});var t=v(5e3),g=v(9808),u=v(3561),n=v(4482),s=v(5403),i=v(4004),o=v(520);function _(l,c){if(1&l){const r=t.EpF();t.TgZ(0,"img",3),t.NdJ("error",function(){return t.CHM(r),t.oxw().fetchAvatarSource()}),t.qZA()}if(2&l){const r=t.oxw();t.Q6J("src",r.avatarSrc,t.LSH)("width",r.size)("height",r.size)("ngStyle",r.avatarStyle)}}function T(l,c){if(1&l&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&l){const r=t.oxw(2);t.Q6J("ngStyle",r.avatarStyle),t.xp6(1),t.hij(" ",r.avatarText," ")}}function E(l,c){if(1&l&&t.YNc(0,T,2,2,"div",4),2&l){const r=t.oxw();t.Q6J("ngIf",r.avatarText)}}class M{constructor(c){this.sourceId=c}}var a=(()=>{return(l=a||(a={})).FACEBOOK="facebook",l.GOOGLE="google",l.TWITTER="twitter",l.INSTAGRAM="instagram",l.VKONTAKTE="vkontakte",l.SKYPE="skype",l.GRAVATAR="gravatar",l.GITHUB="github",l.CUSTOM="custom",l.INITIALS="initials",l.VALUE="value",a;var l})();class b{constructor(c){this.sourceId=c,this.sourceType=a.FACEBOOK}getAvatar(c){return`https://graph.facebook.com/${this.sourceId}/picture?width=${c}&height=${c}`}}class p{constructor(c){this.sourceId=c,this.sourceType=a.TWITTER}getAvatar(c){const r=this.getImageSize(c);return`https://twitter.com/${this.sourceId}/profile_image?size=${r}`}getImageSize(c){return c<=24?"mini":c<=48?"normal":c<=73?"bigger":"original"}}class m extends M{constructor(c){super(c),this.sourceType=a.GOOGLE}getAvatar(){return`https://picasaweb.google.com/data/entry/api/user/${this.sourceId}?alt=json`}processResponse(c,r){const f=c.entry.gphoto$thumbnail.$t;return f?f.replace("s64","s"+r):null}}class y extends M{constructor(c){super(c),this.sourceType=a.INSTAGRAM}getAvatar(){return`https://www.instagram.com/${this.sourceId}/?__a=1`}processResponse(c,r){return`${c.graphql.user.profile_pic_url_hd}&s=${r}`}}class I{constructor(c){this.sourceId=c,this.sourceType=a.CUSTOM}getAvatar(){return this.sourceId}}class d{constructor(c){this.sourceId=c,this.sourceType=a.INITIALS}getAvatar(c){return this.getInitials(this.sourceId,c)}getInitials(c,r){if(!(c=c.trim()))return"";const f=c.split(" ");return this.constructInitials(r&&r<f.length?f.slice(0,r):f)}constructInitials(c){return c&&c.length?c.filter(r=>r&&r.length>0).map(r=>r[0].toUpperCase()).join(""):""}}class h{constructor(c){this.value=c,this.sourceType=a.GRAVATAR,this.sourceId=c.match("^[a-f0-9]{32}$")?c:u.V.hashStr(c).toString()}getAvatar(c){const r=function w(){if("undefined"!=typeof window&&null!==window){if(window.devicePixelRatio>1.25)return!0;const l="(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)";if(window.matchMedia&&window.matchMedia(l).matches)return!0}return!1}()?2*c:c;return`https://secure.gravatar.com/avatar/${this.sourceId}?s=${r}&d=404`}}class C{constructor(c){this.sourceId=c,this.sourceType=a.SKYPE}getAvatar(){return`https://api.skype.com/users/${this.sourceId}/profile/avatar`}}class D{constructor(c){this.sourceId=c,this.sourceType=a.VALUE}getAvatar(){return this.sourceId}}class R extends M{constructor(c){super(c),this.sourceType=a.VKONTAKTE}getAvatar(c){const r=this.getImageSize(c);return`https://api.vk.com/method/users.get?user_id=${this.sourceId}&v=5.8&fields=${r}`}processResponse(c){const r=Object.keys(c.response[0]).pop();return r&&c.response[0][r]||null}getImageSize(c){return c<=50?"photo_50":c<=100?"photo_100":c<=200?"photo_200":"photo_max"}}class B extends M{constructor(c){super(c),this.sourceType=a.GITHUB}getAvatar(){return`https://api.github.com/users/${this.sourceId}`}processResponse(c,r){return r?`${c.avatar_url}&s=${r}`:c.avatar_url}}let S=(()=>{class l{constructor(){this.sources={},this.sources[a.FACEBOOK]=b,this.sources[a.TWITTER]=p,this.sources[a.GOOGLE]=m,this.sources[a.INSTAGRAM]=y,this.sources[a.SKYPE]=C,this.sources[a.GRAVATAR]=h,this.sources[a.CUSTOM]=I,this.sources[a.INITIALS]=d,this.sources[a.VALUE]=D,this.sources[a.VKONTAKTE]=R,this.sources[a.GITHUB]=B}newInstance(r,f){return new this.sources[r](f)}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})();const L=new t.OlP("avatar.config");let k=(()=>{class l{constructor(r){this.userConfig=r}getAvatarSources(r){if(this.userConfig&&this.userConfig.sourcePriorityOrder&&this.userConfig.sourcePriorityOrder.length){const O=[...new Set(this.userConfig.sourcePriorityOrder)].filter(P=>r.includes(P));return[...O,...r.filter(P=>!O.includes(P))]}return r}getAvatarColors(r){return this.userConfig&&this.userConfig.colors&&this.userConfig.colors.length&&this.userConfig.colors||r}}return l.\u0275fac=function(r){return new(r||l)(t.LFG(L,8))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})();const N=[a.FACEBOOK,a.GOOGLE,a.TWITTER,a.INSTAGRAM,a.VKONTAKTE,a.SKYPE,a.GRAVATAR,a.GITHUB,a.CUSTOM,a.INITIALS,a.VALUE],U=["#1abc9c","#3498db","#f1c40f","#8e44ad","#e74c3c","#d35400","#2c3e50","#7f8c8d"];let Y=(()=>{class l{constructor(r,f){this.http=r,this.avatarConfigService=f,this.avatarSources=N,this.avatarColors=U,this.failedSources=new Map,this.overrideAvatarSources(),this.overrideAvatarColors()}fetchAvatar(r){return this.http.get(r)}getRandomColor(r){if(!r)return"transparent";const f=this.calculateAsciiCode(r);return this.avatarColors[f%this.avatarColors.length]}compareSources(r,f){return this.getSourcePriority(r)-this.getSourcePriority(f)}isSource(r){return this.avatarSources.includes(r)}isTextAvatar(r){return[a.INITIALS,a.VALUE].includes(r)}buildSourceKey(r){return r.sourceType+"-"+r.sourceId}sourceHasFailedBefore(r){return this.failedSources.has(this.buildSourceKey(r))}markSourceAsFailed(r){this.failedSources.set(this.buildSourceKey(r),r)}overrideAvatarSources(){this.avatarSources=this.avatarConfigService.getAvatarSources(N)}overrideAvatarColors(){this.avatarColors=this.avatarConfigService.getAvatarColors(U)}calculateAsciiCode(r){return r.split("").map(f=>f.charCodeAt(0)).reduce((f,O)=>f+O)}getSourcePriority(r){return this.avatarSources.indexOf(r)}}return l.\u0275fac=function(r){return new(r||l)(t.LFG(o.eN),t.LFG(k))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),z=(()=>{class l{constructor(r,f){this.sourceFactory=r,this.avatarService=f,this.round=!0,this.size=50,this.textSizeRatio=3,this.fgColor="#FFF",this.style={},this.cornerRadius=0,this.initialsSize=0,this.clickOnAvatar=new t.vpe,this.isAlive=!0,this.avatarSrc=null,this.avatarText=null,this.avatarStyle={},this.hostStyle={},this.currentIndex=-1,this.sources=[]}onAvatarClicked(){this.clickOnAvatar.emit(this.sources[this.currentIndex])}ngOnChanges(r){for(const f in r)if(this.avatarService.isSource(f)){const O=a[f.toUpperCase()],P=r[f].currentValue;P&&"string"==typeof P?this.addSource(O,P):this.removeSource(O)}this.initializeAvatar()}fetchAvatarSource(){const r=this.sources[this.currentIndex];r&&this.avatarService.markSourceAsFailed(r);const f=this.findNextSource();!f||(this.avatarService.isTextAvatar(f.sourceType)?(this.buildTextAvatar(f),this.avatarSrc=null):this.buildImageAvatar(f))}findNextSource(){for(;++this.currentIndex<this.sources.length;){const r=this.sources[this.currentIndex];if(r&&!this.avatarService.sourceHasFailedBefore(r))return r}return null}ngOnDestroy(){this.isAlive=!1}initializeAvatar(){this.currentIndex=-1,this.sources.length>0&&(this.sortAvatarSources(),this.fetchAvatarSource(),this.hostStyle={width:this.size+"px",height:this.size+"px"})}sortAvatarSources(){this.sources.sort((r,f)=>this.avatarService.compareSources(r.sourceType,f.sourceType))}buildTextAvatar(r){this.avatarText=r.getAvatar(+this.initialsSize),this.avatarStyle=this.getInitialsStyle(r.sourceId)}buildImageAvatar(r){this.avatarStyle=this.getImageStyle(),r instanceof M?this.fetchAndProcessAsyncAvatar(r):this.avatarSrc=r.getAvatar(+this.size)}getInitialsStyle(r){return Object.assign({textAlign:"center",borderRadius:this.round?"100%":this.cornerRadius+"px",border:this.borderColor?"1px solid "+this.borderColor:"",textTransform:"uppercase",color:this.fgColor,backgroundColor:this.bgColor?this.bgColor:this.avatarService.getRandomColor(r),font:Math.floor(+this.size/this.textSizeRatio)+"px Helvetica, Arial, sans-serif",lineHeight:this.size+"px"},this.style)}getImageStyle(){return Object.assign({maxWidth:"100%",borderRadius:this.round?"50%":this.cornerRadius+"px",border:this.borderColor?"1px solid "+this.borderColor:"",width:this.size+"px",height:this.size+"px"},this.style)}fetchAndProcessAsyncAvatar(r){this.avatarService.sourceHasFailedBefore(r)||this.avatarService.fetchAvatar(r.getAvatar(+this.size)).pipe(function e(l,c=!1){return(0,n.e)((r,f)=>{let O=0;r.subscribe(new s.Q(f,P=>{const j=l(P,O++);(j||c)&&f.next(P),!j&&f.complete()}))})}(()=>this.isAlive),(0,i.U)(f=>r.processResponse(f,+this.size))).subscribe(f=>this.avatarSrc=f,f=>{this.fetchAvatarSource()})}addSource(r,f){const O=this.sources.find(P=>P.sourceType===r);O?O.sourceId=f:this.sources.push(this.sourceFactory.newInstance(r,f))}removeSource(r){this.sources=this.sources.filter(f=>f.sourceType!==r)}}return l.\u0275fac=function(r){return new(r||l)(t.Y36(S),t.Y36(Y))},l.\u0275cmp=t.Xpm({type:l,selectors:[["ngx-avatar"]],inputs:{round:"round",size:"size",textSizeRatio:"textSizeRatio",fgColor:"fgColor",style:"style",cornerRadius:"cornerRadius",initialsSize:"initialsSize",bgColor:"bgColor",borderColor:"borderColor",facebook:["facebookId","facebook"],twitter:["twitterId","twitter"],google:["googleId","google"],instagram:["instagramId","instagram"],vkontakte:["vkontakteId","vkontakte"],skype:["skypeId","skype"],gravatar:["gravatarId","gravatar"],github:["githubId","github"],custom:["src","custom"],initials:["name","initials"],value:"value",placeholder:"placeholder"},outputs:{clickOnAvatar:"clickOnAvatar"},features:[t.TTD],decls:4,vars:3,consts:[[1,"avatar-container",3,"ngStyle","click"],["class","avatar-content","loading","lazy",3,"src","width","height","ngStyle","error",4,"ngIf","ngIfElse"],["textAvatar",""],["loading","lazy",1,"avatar-content",3,"src","width","height","ngStyle","error"],["class","avatar-content",3,"ngStyle",4,"ngIf"],[1,"avatar-content",3,"ngStyle"]],template:function(r,f){if(1&r&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return f.onAvatarClicked()}),t.YNc(1,_,1,4,"img",1),t.YNc(2,E,1,1,"ng-template",null,2,t.W1O),t.qZA()),2&r){const O=t.MAs(3);t.Q6J("ngStyle",f.hostStyle),t.xp6(1),t.Q6J("ngIf",f.avatarSrc)("ngIfElse",O)}},directives:[g.PC,g.O5],styles:["[_nghost-%COMP%] {\n        border-radius: 50%;\n      }"]}),l})(),K=(()=>{class l{static forRoot(r){return{ngModule:l,providers:[{provide:L,useValue:r||{}}]}}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[S,Y,k],imports:[[g.ez]]}),l})()},3561:(F,x)=>{var t=function(){function g(){this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return g.hashStr=function(u,n){return void 0===n&&(n=!1),this.onePassHasher.start().appendStr(u).end(n)},g.hashAsciiStr=function(u,n){return void 0===n&&(n=!1),this.onePassHasher.start().appendAsciiStr(u).end(n)},g._hex=function(u){var e,i,o,_,n=g.hexChars,s=g.hexOut;for(_=0;_<4;_+=1)for(i=8*_,e=u[_],o=0;o<8;o+=2)s[i+1+o]=n.charAt(15&e),s[i+0+o]=n.charAt(15&(e>>>=4)),e>>>=4;return s.join("")},g._md5cycle=function(u,n){var s=u[0],e=u[1],i=u[2],o=u[3];e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&i|~e&o)+n[0]-680876936|0)<<7|s>>>25)+e|0)&e|~s&i)+n[1]-389564586|0)<<12|o>>>20)+s|0)&s|~o&e)+n[2]+606105819|0)<<17|i>>>15)+o|0)&o|~i&s)+n[3]-1044525330|0)<<22|e>>>10)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&i|~e&o)+n[4]-176418897|0)<<7|s>>>25)+e|0)&e|~s&i)+n[5]+1200080426|0)<<12|o>>>20)+s|0)&s|~o&e)+n[6]-1473231341|0)<<17|i>>>15)+o|0)&o|~i&s)+n[7]-45705983|0)<<22|e>>>10)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&i|~e&o)+n[8]+1770035416|0)<<7|s>>>25)+e|0)&e|~s&i)+n[9]-1958414417|0)<<12|o>>>20)+s|0)&s|~o&e)+n[10]-42063|0)<<17|i>>>15)+o|0)&o|~i&s)+n[11]-1990404162|0)<<22|e>>>10)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&i|~e&o)+n[12]+1804603682|0)<<7|s>>>25)+e|0)&e|~s&i)+n[13]-40341101|0)<<12|o>>>20)+s|0)&s|~o&e)+n[14]-1502002290|0)<<17|i>>>15)+o|0)&o|~i&s)+n[15]+1236535329|0)<<22|e>>>10)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&o|i&~o)+n[1]-165796510|0)<<5|s>>>27)+e|0)&i|e&~i)+n[6]-1069501632|0)<<9|o>>>23)+s|0)&e|s&~e)+n[11]+643717713|0)<<14|i>>>18)+o|0)&s|o&~s)+n[0]-373897302|0)<<20|e>>>12)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&o|i&~o)+n[5]-701558691|0)<<5|s>>>27)+e|0)&i|e&~i)+n[10]+38016083|0)<<9|o>>>23)+s|0)&e|s&~e)+n[15]-660478335|0)<<14|i>>>18)+o|0)&s|o&~s)+n[4]-405537848|0)<<20|e>>>12)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&o|i&~o)+n[9]+568446438|0)<<5|s>>>27)+e|0)&i|e&~i)+n[14]-1019803690|0)<<9|o>>>23)+s|0)&e|s&~e)+n[3]-187363961|0)<<14|i>>>18)+o|0)&s|o&~s)+n[8]+1163531501|0)<<20|e>>>12)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e&o|i&~o)+n[13]-1444681467|0)<<5|s>>>27)+e|0)&i|e&~i)+n[2]-51403784|0)<<9|o>>>23)+s|0)&e|s&~e)+n[7]+1735328473|0)<<14|i>>>18)+o|0)&s|o&~s)+n[12]-1926607734|0)<<20|e>>>12)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e^i^o)+n[5]-378558|0)<<4|s>>>28)+e|0)^e^i)+n[8]-2022574463|0)<<11|o>>>21)+s|0)^s^e)+n[11]+1839030562|0)<<16|i>>>16)+o|0)^o^s)+n[14]-35309556|0)<<23|e>>>9)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e^i^o)+n[1]-1530992060|0)<<4|s>>>28)+e|0)^e^i)+n[4]+1272893353|0)<<11|o>>>21)+s|0)^s^e)+n[7]-155497632|0)<<16|i>>>16)+o|0)^o^s)+n[10]-1094730640|0)<<23|e>>>9)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e^i^o)+n[13]+681279174|0)<<4|s>>>28)+e|0)^e^i)+n[0]-358537222|0)<<11|o>>>21)+s|0)^s^e)+n[3]-722521979|0)<<16|i>>>16)+o|0)^o^s)+n[6]+76029189|0)<<23|e>>>9)+i|0,e=((e+=((i=((i+=((o=((o+=((s=((s+=(e^i^o)+n[9]-640364487|0)<<4|s>>>28)+e|0)^e^i)+n[12]-421815835|0)<<11|o>>>21)+s|0)^s^e)+n[15]+530742520|0)<<16|i>>>16)+o|0)^o^s)+n[2]-995338651|0)<<23|e>>>9)+i|0,e=((e+=((o=((o+=(e^((s=((s+=(i^(e|~o))+n[0]-198630844|0)<<6|s>>>26)+e|0)|~i))+n[7]+1126891415|0)<<10|o>>>22)+s|0)^((i=((i+=(s^(o|~e))+n[14]-1416354905|0)<<15|i>>>17)+o|0)|~s))+n[5]-57434055|0)<<21|e>>>11)+i|0,e=((e+=((o=((o+=(e^((s=((s+=(i^(e|~o))+n[12]+1700485571|0)<<6|s>>>26)+e|0)|~i))+n[3]-1894986606|0)<<10|o>>>22)+s|0)^((i=((i+=(s^(o|~e))+n[10]-1051523|0)<<15|i>>>17)+o|0)|~s))+n[1]-2054922799|0)<<21|e>>>11)+i|0,e=((e+=((o=((o+=(e^((s=((s+=(i^(e|~o))+n[8]+1873313359|0)<<6|s>>>26)+e|0)|~i))+n[15]-30611744|0)<<10|o>>>22)+s|0)^((i=((i+=(s^(o|~e))+n[6]-1560198380|0)<<15|i>>>17)+o|0)|~s))+n[13]+1309151649|0)<<21|e>>>11)+i|0,e=((e+=((o=((o+=(e^((s=((s+=(i^(e|~o))+n[4]-145523070|0)<<6|s>>>26)+e|0)|~i))+n[11]-1120210379|0)<<10|o>>>22)+s|0)^((i=((i+=(s^(o|~e))+n[2]+718787259|0)<<15|i>>>17)+o|0)|~s))+n[9]-343485551|0)<<21|e>>>11)+i|0,u[0]=s+u[0]|0,u[1]=e+u[1]|0,u[2]=i+u[2]|0,u[3]=o+u[3]|0},g.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(g.stateIdentity),this},g.prototype.appendStr=function(u){var i,o,n=this._buffer8,s=this._buffer32,e=this._bufferLength;for(o=0;o<u.length;o+=1){if((i=u.charCodeAt(o))<128)n[e++]=i;else if(i<2048)n[e++]=192+(i>>>6),n[e++]=63&i|128;else if(i<55296||i>56319)n[e++]=224+(i>>>12),n[e++]=i>>>6&63|128,n[e++]=63&i|128;else{if((i=1024*(i-55296)+(u.charCodeAt(++o)-56320)+65536)>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");n[e++]=240+(i>>>18),n[e++]=i>>>12&63|128,n[e++]=i>>>6&63|128,n[e++]=63&i|128}e>=64&&(this._dataLength+=64,g._md5cycle(this._state,s),e-=64,s[0]=s[16])}return this._bufferLength=e,this},g.prototype.appendAsciiStr=function(u){for(var i,n=this._buffer8,s=this._buffer32,e=this._bufferLength,o=0;;){for(i=Math.min(u.length-o,64-e);i--;)n[e++]=u.charCodeAt(o++);if(e<64)break;this._dataLength+=64,g._md5cycle(this._state,s),e=0}return this._bufferLength=e,this},g.prototype.appendByteArray=function(u){for(var i,n=this._buffer8,s=this._buffer32,e=this._bufferLength,o=0;;){for(i=Math.min(u.length-o,64-e);i--;)n[e++]=u[o++];if(e<64)break;this._dataLength+=64,g._md5cycle(this._state,s),e=0}return this._bufferLength=e,this},g.prototype.getState=function(){var u=this,n=u._state;return{buffer:String.fromCharCode.apply(null,u._buffer8),buflen:u._bufferLength,length:u._dataLength,state:[n[0],n[1],n[2],n[3]]}},g.prototype.setState=function(u){var i,n=u.buffer,s=u.state,e=this._state;for(this._dataLength=u.length,this._bufferLength=u.buflen,e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],i=0;i<n.length;i+=1)this._buffer8[i]=n.charCodeAt(i)},g.prototype.end=function(u){void 0===u&&(u=!1);var o,n=this._bufferLength,s=this._buffer8,e=this._buffer32,i=1+(n>>2);if(this._dataLength+=n,s[n]=128,s[n+1]=s[n+2]=s[n+3]=0,e.set(g.buffer32Identity.subarray(i),i),n>55&&(g._md5cycle(this._state,e),e.set(g.buffer32Identity)),(o=8*this._dataLength)<=4294967295)e[14]=o;else{var _=o.toString(16).match(/(.*?)(.{0,8})$/);if(null===_)return;var T=parseInt(_[2],16),E=parseInt(_[1],16)||0;e[14]=T,e[15]=E}return g._md5cycle(this._state,e),u?this._state:g._hex(this._state)},g.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),g.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),g.hexChars="0123456789abcdef",g.hexOut=[],g.onePassHasher=new g,g}();x.V=t,"5d41402abc4b2a76b9719d911017c592"!==t.hashStr("hello")&&console.error("Md5 self test failed.")},8274:(F,x,v)=>{v.d(x,{TO:()=>p,Hz:()=>m,mr:()=>I,Mq:()=>y});var t=v(5e3),g=v(9300),u=v(7691),n=v(1777),s=v(9808),e=v(9062),i=v(5197);const o=function(d){return{dropdown:d}},_=["*"],E=[(0,n.oB)({height:0,overflow:"hidden"}),(0,n.jt)("220ms cubic-bezier(0, 0, 0.2, 1)",(0,n.oB)({height:"*",overflow:"hidden"}))];let M=(()=>{class d{constructor(){this.direction="down",this.autoClose=!0,this.insideClick=!1,this.isAnimated=!1,this.stopOnClickPropagation=!1,this.isOpenChange=new t.vpe,this.isDisabledChange=new t.vpe,this.toggleClick=new t.vpe,this.counts=0,this.dropdownMenu=new Promise(h=>{this.resolveDropdownMenu=h})}}return d.\u0275fac=function(h){return new(h||d)},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"platform"}),d})(),a=(()=>{class d{constructor(h,C,D,A,R){this._state=h,this.cd=C,this._renderer=D,this._element=A,this.isOpen=!1,this._factoryDropDownAnimation=R.build(E),this._subscription=h.isOpenChange.subscribe(B=>{this.isOpen=B;const S=this._element.nativeElement.querySelector(".dropdown-menu");this._renderer.addClass(this._element.nativeElement.querySelector("div"),"open"),S&&!(0,u.XA)()&&(this._renderer.addClass(S,"show"),(S.classList.contains("dropdown-menu-right")||S.classList.contains("dropdown-menu-end"))&&(this._renderer.setStyle(S,"left","auto"),this._renderer.setStyle(S,"right","0")),"up"===this.direction&&(this._renderer.setStyle(S,"top","auto"),this._renderer.setStyle(S,"transform","translateY(-101%)"))),S&&this._state.isAnimated&&this._factoryDropDownAnimation.create(S).play(),this.cd.markForCheck(),this.cd.detectChanges()})}get direction(){return this._state.direction}_contains(h){return this._element.nativeElement.contains(h)}ngOnDestroy(){this._subscription.unsubscribe()}}return d.\u0275fac=function(h){return new(h||d)(t.Y36(M),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(n._j))},d.\u0275cmp=t.Xpm({type:d,selectors:[["bs-dropdown-container"]],hostAttrs:[2,"display","block","position","absolute","z-index","1040"],ngContentSelectors:_,decls:2,vars:9,consts:[[3,"ngClass"]],template:function(h,C){1&h&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&h&&(t.ekj("dropup","up"===C.direction)("show",C.isOpen)("open",C.isOpen),t.Q6J("ngClass",t.VKq(7,o,"down"===C.direction)))},directives:[s.mk],encapsulation:2,changeDetection:0}),d})(),b=(()=>{class d{constructor(){this.autoClose=!0,this.insideClick=!1,this.isAnimated=!1,this.stopOnClickPropagation=!1}}return d.\u0275fac=function(h){return new(h||d)},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),p=(()=>{class d{constructor(h,C,D,A,R,B,S){this._elementRef=h,this._renderer=C,this._viewContainerRef=D,this._cis=A,this._state=R,this._config=B,this.dropup=!1,this._isInlineOpen=!1,this._isDisabled=!1,this._subscriptions=[],this._isInited=!1,this._state.autoClose=this._config.autoClose,this._state.insideClick=this._config.insideClick,this._state.isAnimated=this._config.isAnimated,this._state.stopOnClickPropagation=this._config.stopOnClickPropagation,this._factoryDropDownAnimation=S.build(E),this._dropdown=this._cis.createLoader(this._elementRef,this._viewContainerRef,this._renderer).provide({provide:M,useValue:this._state}),this.onShown=this._dropdown.onShown,this.onHidden=this._dropdown.onHidden,this.isOpenChange=this._state.isOpenChange}set autoClose(h){this._state.autoClose=h}get autoClose(){return this._state.autoClose}set isAnimated(h){this._state.isAnimated=h}get isAnimated(){return this._state.isAnimated}set insideClick(h){this._state.insideClick=h}get insideClick(){return this._state.insideClick}set isDisabled(h){this._isDisabled=h,this._state.isDisabledChange.emit(h),h&&this.hide()}get isDisabled(){return this._isDisabled}get isOpen(){return this._showInline?this._isInlineOpen:this._dropdown.isShown}set isOpen(h){h?this.show():this.hide()}get isBs4(){return!(0,u.XA)()}get _showInline(){return!this.container}ngOnInit(){this._isInited||(this._isInited=!0,this._dropdown.listen({outsideClick:!1,triggers:this.triggers,show:()=>this.show()}),this._subscriptions.push(this._state.toggleClick.subscribe(h=>this.toggle(h))),this._subscriptions.push(this._state.isDisabledChange.pipe((0,g.h)(h=>h)).subscribe(()=>this.hide())))}show(){if(!this.isOpen&&!this.isDisabled){if(this._showInline)return this._inlinedMenu||this._state.dropdownMenu.then(h=>{this._dropdown.attachInline(h.viewContainer,h.templateRef),this._inlinedMenu=this._dropdown._inlineViewRef,this.addBs4Polyfills(),this._inlinedMenu&&this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode,"open"),this.playAnimation()}).catch(),this.addBs4Polyfills(),this._isInlineOpen=!0,this.onShown.emit(!0),this._state.isOpenChange.emit(!0),void this.playAnimation();this._state.dropdownMenu.then(h=>{const C=this.dropup||void 0!==this.dropup&&this.dropup;this._state.direction=C?"up":"down";const D=this.placement||(C?"top start":"bottom start");this._dropdown.attach(a).to(this.container).position({attachment:D}).show({content:h.templateRef,placement:D}),this._state.isOpenChange.emit(!0)}).catch()}}hide(){!this.isOpen||(this._showInline?(this.removeShowClass(),this.removeDropupStyles(),this._isInlineOpen=!1,this.onHidden.emit(!0)):this._dropdown.hide(),this._state.isOpenChange.emit(!1))}toggle(h){return this.isOpen||!h?this.hide():this.show()}_contains(h){return this._elementRef.nativeElement.contains(h.target)||this._dropdown.instance&&this._dropdown.instance._contains(h.target)}navigationClick(h){const C=this._elementRef.nativeElement.querySelector(".dropdown-menu");if(!C)return;const D=this._elementRef.nativeElement.ownerDocument.activeElement,A=C.querySelectorAll(".dropdown-item");switch(h.keyCode){case 38:this._state.counts>0&&A[--this._state.counts].focus();break;case 40:this._state.counts+1<A.length&&(D.classList!==A[this._state.counts].classList?A[this._state.counts].focus():A[++this._state.counts].focus())}h.preventDefault()}ngOnDestroy(){for(const h of this._subscriptions)h.unsubscribe();this._dropdown.dispose()}addBs4Polyfills(){(0,u.XA)()||(this.addShowClass(),this.checkRightAlignment(),this.addDropupStyles())}playAnimation(){this._state.isAnimated&&this._inlinedMenu&&setTimeout(()=>{this._inlinedMenu&&this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play()})}addShowClass(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&this._renderer.addClass(this._inlinedMenu.rootNodes[0],"show")}removeShowClass(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&this._renderer.removeClass(this._inlinedMenu.rootNodes[0],"show")}checkRightAlignment(){if(this._inlinedMenu&&this._inlinedMenu.rootNodes[0]){const h=this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-right")||this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-end");this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"left",h?"auto":"0"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"right",h?"0":"auto")}}addDropupStyles(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&(this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"top",this.dropup?"auto":"100%"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"transform",this.dropup?"translateY(-101%)":"translateY(0)"),this._renderer.setStyle(this._inlinedMenu.rootNodes[0],"bottom","auto"))}removeDropupStyles(){this._inlinedMenu&&this._inlinedMenu.rootNodes[0]&&(this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"top"),this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"transform"),this._renderer.removeStyle(this._inlinedMenu.rootNodes[0],"bottom"))}}return d.\u0275fac=function(h){return new(h||d)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.s_b),t.Y36(e.oj),t.Y36(M),t.Y36(b),t.Y36(n._j))},d.\u0275dir=t.lG2({type:d,selectors:[["","bsDropdown",""],["","dropdown",""]],hostVars:6,hostBindings:function(h,C){1&h&&t.NdJ("keydown.arrowDown",function(A){return C.navigationClick(A)})("keydown.arrowUp",function(A){return C.navigationClick(A)}),2&h&&t.ekj("dropup",C.dropup)("open",C.isOpen)("show",C.isOpen&&C.isBs4)},inputs:{placement:"placement",triggers:"triggers",container:"container",dropup:"dropup",autoClose:"autoClose",isAnimated:"isAnimated",insideClick:"insideClick",isDisabled:"isDisabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange",onShown:"onShown",onHidden:"onHidden"},exportAs:["bs-dropdown"],features:[t._Bn([M])]}),d})(),m=(()=>{class d{constructor(h,C,D){h.resolveDropdownMenu({templateRef:D,viewContainer:C})}}return d.\u0275fac=function(h){return new(h||d)(t.Y36(M),t.Y36(t.s_b),t.Y36(t.Rgc))},d.\u0275dir=t.lG2({type:d,selectors:[["","bsDropdownMenu",""],["","dropdownMenu",""]],exportAs:["bs-dropdown-menu"]}),d})(),y=(()=>{class d{constructor(h,C,D,A,R){this._changeDetectorRef=h,this._dropdown=C,this._element=D,this._renderer=A,this._state=R,this.isOpen=!1,this._subscriptions=[],this._subscriptions.push(this._state.isOpenChange.subscribe(B=>{this.isOpen=B,B?(this._documentClickListener=this._renderer.listen("document","click",S=>{this._state.autoClose&&2!==S.button&&!this._element.nativeElement.contains(S.target)&&(!this._state.insideClick||!this._dropdown._contains(S))&&(this._state.toggleClick.emit(!1),this._changeDetectorRef.detectChanges())}),this._escKeyUpListener=this._renderer.listen(this._element.nativeElement,"keyup.esc",()=>{this._state.autoClose&&(this._state.toggleClick.emit(!1),this._changeDetectorRef.detectChanges())})):(this._documentClickListener&&this._documentClickListener(),this._escKeyUpListener&&this._escKeyUpListener())})),this._subscriptions.push(this._state.isDisabledChange.subscribe(B=>this.isDisabled=B||void 0))}onClick(h){this._state.stopOnClickPropagation&&h.stopPropagation(),!this.isDisabled&&this._state.toggleClick.emit(!0)}ngOnDestroy(){this._documentClickListener&&this._documentClickListener(),this._escKeyUpListener&&this._escKeyUpListener();for(const h of this._subscriptions)h.unsubscribe()}}return d.\u0275fac=function(h){return new(h||d)(t.Y36(t.sBO),t.Y36(p),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(M))},d.\u0275dir=t.lG2({type:d,selectors:[["","bsDropdownToggle",""],["","dropdownToggle",""]],hostVars:3,hostBindings:function(h,C){1&h&&t.NdJ("click",function(A){return C.onClick(A)}),2&h&&t.uIk("aria-haspopup",!0)("disabled",C.isDisabled)("aria-expanded",C.isOpen)},exportAs:["bs-dropdown-toggle"]}),d})(),I=(()=>{class d{static forRoot(){return{ngModule:d,providers:[e.oj,i.sA,M]}}}return d.\u0275fac=function(h){return new(h||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[[s.ez]]}),d})()},1465:(F,x,v)=>{v.d(x,{O1:()=>E,HC:()=>M});var t=v(5e3),g=v(7691),u=v(9808);const n=["*"];function s(a,b){1&a&&t.GkF(0)}function e(a,b){if(1&a&&(t.TgZ(0,"bar",3),t.Hsn(1),t.qZA()),2&a){const p=t.oxw();t.Q6J("type",p.type)("value",p._value)("max",p.max)("animate",p.animate)("striped",p.striped)}}function i(a,b){if(1&a&&(t.TgZ(0,"bar",3),t._uU(1),t.qZA()),2&a){const p=b.$implicit,m=t.oxw(2);t.Q6J("type",p.type)("value",p.value)("max",p.max||m.max)("animate",m.animate)("striped",m.striped),t.xp6(1),t.Oqu(p.label)}}function o(a,b){if(1&a&&t.YNc(0,i,2,6,"bar",4),2&a){const p=t.oxw();t.Q6J("ngForOf",p._values)}}let _=(()=>{class a{constructor(p,m){this.el=p,this.renderer=m,this.max=100,this.value=0,this.animate=!1,this.striped=!1,this.type="info",this.percent=100}get isBs3(){return(0,g.XA)()}ngOnChanges(p){var m,y;(p.value||p.max)&&(this.percent=Number((null===(m=p.value)||void 0===m?void 0:m.currentValue)||this.value)/Number((null===(y=p.max)||void 0===y?void 0:y.currentValue)||this.max||100)*100),p.type&&this.applyTypeClasses()}applyTypeClasses(){if(this._prevType){const m=`bg-${this._prevType}`;this.renderer.removeClass(this.el.nativeElement,`progress-bar-${this._prevType}`),this.renderer.removeClass(this.el.nativeElement,m),this._prevType=void 0}if(this.type){const m=`bg-${this.type}`;this.renderer.addClass(this.el.nativeElement,`progress-bar-${this.type}`),this.renderer.addClass(this.el.nativeElement,m),this._prevType=this.type}}}return a.\u0275fac=function(p){return new(p||a)(t.Y36(t.SBq),t.Y36(t.Qsj))},a.\u0275cmp=t.Xpm({type:a,selectors:[["bar"]],hostAttrs:["role","progressbar","aria-valuemin","0"],hostVars:15,hostBindings:function(p,m){2&p&&(t.uIk("aria-valuenow",m.value)("aria-valuetext",m.percent?m.percent.toFixed(0)+"%":"")("aria-valuemax",m.max),t.Udp("height","100","%")("width",m.percent,"%"),t.ekj("progress-bar",!0)("progress-bar-animated",!m.isBs3&&m.animate)("progress-bar-striped",m.striped)("active",m.isBs3&&m.animate))},inputs:{max:"max",value:"value",animate:"animate",striped:"striped",type:"type"},features:[t.TTD],ngContentSelectors:n,decls:1,vars:0,template:function(p,m){1&p&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),a})(),T=(()=>{class a{constructor(){this.animate=!1,this.max=100}}return a.\u0275fac=function(p){return new(p||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),E=(()=>{class a{constructor(p){this.max=100,this.animate=!1,this.striped=!1,this.isStacked=!1,this._value=0,Object.assign(this,p)}set value(p){this.isStacked=Array.isArray(p),"number"==typeof p?(this._value=p,this._values=void 0):(this._value=void 0,this._values=p)}}return a.\u0275fac=function(p){return new(p||a)(t.Y36(T))},a.\u0275cmp=t.Xpm({type:a,selectors:[["progressbar"]],hostVars:3,hostBindings:function(p,m){2&p&&(t.uIk("max",m.max),t.ekj("progress",!0))},inputs:{max:"max",animate:"animate",striped:"striped",type:"type",value:"value"},ngContentSelectors:n,decls:5,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["NotStacked",""],["Stacked",""],[3,"type","value","max","animate","striped"],[3,"type","value","max","animate","striped",4,"ngFor","ngForOf"]],template:function(p,m){if(1&p&&(t.F$t(),t.YNc(0,s,1,0,"ng-container",0),t.YNc(1,e,2,5,"ng-template",null,1,t.W1O),t.YNc(3,o,1,1,"ng-template",null,2,t.W1O)),2&p){const y=t.MAs(2),I=t.MAs(4);t.Q6J("ngIf",!m.isStacked)("ngIfThen",y)("ngIfElse",I)}},directives:[_,u.O5,u.sg],styles:["[_nghost-%COMP%]{width:100%;display:flex}"],changeDetection:0}),a})(),M=(()=>{class a{static forRoot(){return{ngModule:a,providers:[]}}}return a.\u0275fac=function(p){return new(p||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[u.ez]]}),a})()}}]);