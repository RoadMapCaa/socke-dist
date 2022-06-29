"use strict";(self.webpackChunkwms_admin=self.webpackChunkwms_admin||[]).push([[669],{6669:(Tt,z,g)=>{g.r(z),g.d(z,{AuthModule:()=>It});var x=g(6895),O=g(5263),u=g(4006),h=g(4650),lt=g(384),f=g(4055);const ht=[{path:"login",component:(()=>{class r{constructor(e,i,s,n){this.router=e,this.fb=i,this.authService=s,this.toastrService=n,this.images=[],this.sending=!1,this.errorMsg="",this.form=this.fb.group({username:["",[u.kI.required,u.kI.maxLength(20)]],password:["",[u.kI.required,u.kI.maxLength(20)]],admin:[!0]})}ngOnInit(){}loadBackgroundImage(){return this.images=["bg1"],{background:`url(assets/images/${this.images[Math.floor(Math.random()*this.images.length)]}.png) no-repeat center center fixed`}}login(){this.sending=!0,this.authService.login(this.form.value).subscribe(e=>{this.toastrService.show(`Bienvenido ${e.user.firstName}: Iniciaste sessi\xf3n correctamente`,"Bienvenido",{status:"success"}),this.router.navigateByUrl("/pages")},e=>{this.toastrService.show(e.error.error,"Error",{status:"danger"})})}get f(){return this.form.controls}isValid(e){return this.f[e].touched&&this.f[e].valid}isInvalid(e){return this.f[e].touched&&this.f[e].invalid}}return r.\u0275fac=function(e){return new(e||r)(h.Y36(O.F0),h.Y36(u.qu),h.Y36(lt.e),h.Y36(f.quB))},r.\u0275cmp=h.Xpm({type:r,selectors:[["app-login"]],decls:15,vars:3,consts:[[1,"d-flex","align-items-center","justify-content-center","p-0",3,"ngStyle"],[1,"py-4","px-2",2,"border-radius","10px"],[2,"max-width","98%","width","400px"],[1,"text-center"],[1,"my-4"],[1,"d-flex","flex-column","gap-4",3,"formGroup"],["type","text","formControlName","username","nbInput","","fullWidth","","status","primary","placeholder","Ingrese Usuario","shape","semi-round"],["type","password","formControlName","password","nbInput","","fullWidth","","status","primary","placeholder","Ingrese Contrase\xf1a","shape","semi-round"],["nbButton","","status","primary","fullWidth","","shape","semi-round",3,"disabled","click"],["icon","unlock-outline"]],template:function(e,i){1&e&&(h.TgZ(0,"nb-layout")(1,"nb-layout-column",0)(2,"nb-card",1)(3,"nb-card-body",2)(4,"h2",3),h._uU(5,"WMS ADMIN"),h.qZA(),h.TgZ(6,"h5",4),h._uU(7,"Iniciar Sesi\xf3n"),h.qZA(),h._UZ(8,"hr"),h.TgZ(9,"form",5),h._UZ(10,"input",6)(11,"input",7),h.TgZ(12,"button",8),h.NdJ("click",function(){return i.login()}),h._UZ(13,"nb-icon",9),h._uU(14,"Ingresar"),h.qZA()()()()()()),2&e&&(h.xp6(1),h.Q6J("ngStyle",i.loadBackgroundImage()),h.xp6(8),h.Q6J("formGroup",i.form),h.xp6(3),h.Q6J("disabled",i.form.invalid))},dependencies:[x.PC,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,f.Aqw,f.dP_,f.Asz,f.yKW,f.h8i,f.DPz,f.fMN]}),r})()},{path:"",redirectTo:"login",pathMatch:"full"}];let ct=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[O.Bz.forChild(ht),O.Bz]}),r})();var B=g(6270),b=g(3353),m=g(1281),V=g(2687),p=g(7579),y=g(727),dt=g(7445),gt=g(6406),pt=g(8306),ut=g(6451),_t=g(2722);function A(r,t,e){for(let i in t)if(t.hasOwnProperty(i)){const s=t[i];s?r.setProperty(i,s,e?.has(i)?"important":""):r.removeProperty(i)}return r}function P(r,t){const e=t?"":"none";A(r.style,{"touch-action":t?"":"none","-webkit-user-drag":t?"":"none","-webkit-tap-highlight-color":t?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Z(r,t,e){A(r.style,{position:t?"":"fixed",top:t?"":"0",opacity:t?"":"0",left:t?"":"-999em"},e)}function I(r,t){return t&&"none"!=t?r+" "+t:r}function K(r){const t=r.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(r)*t}function M(r,t){return r.getPropertyValue(t).split(",").map(i=>i.trim())}function H(r){const t=r.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y}}function F(r,t,e){const{top:i,bottom:s,left:n,right:o}=r;return e>=i&&e<=s&&t>=n&&t<=o}function C(r,t,e){r.top+=t,r.bottom=r.top+r.height,r.left+=e,r.right=r.left+r.width}function U(r,t,e,i){const{top:s,right:n,bottom:o,left:a,width:l,height:c}=r,d=l*t,_=c*t;return i>s-_&&i<o+_&&e>a-d&&e<n+d}class j{constructor(t){this._document=t,this.positions=new Map}clear(){this.positions.clear()}cache(t){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),t.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:H(e)})})}handleScroll(t){const e=(0,b.sA)(t),i=this.positions.get(e);if(!i)return null;const s=i.scrollPosition;let n,o;if(e===this._document){const c=this.getViewportScrollPosition();n=c.top,o=c.left}else n=e.scrollTop,o=e.scrollLeft;const a=s.top-n,l=s.left-o;return this.positions.forEach((c,d)=>{c.clientRect&&e!==d&&e.contains(d)&&C(c.clientRect,a,l)}),s.top=n,s.left=o,{top:a,left:l}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}}function W(r){const t=r.cloneNode(!0),e=t.querySelectorAll("[id]"),i=r.nodeName.toLowerCase();t.removeAttribute("id");for(let s=0;s<e.length;s++)e[s].removeAttribute("id");return"canvas"===i?Q(r,t):("input"===i||"select"===i||"textarea"===i)&&Y(r,t),$("canvas",r,t,Q),$("input, textarea, select",r,t,Y),t}function $(r,t,e,i){const s=t.querySelectorAll(r);if(s.length){const n=e.querySelectorAll(r);for(let o=0;o<s.length;o++)i(s[o],n[o])}}let mt=0;function Y(r,t){"file"!==t.type&&(t.value=r.value),"radio"===t.type&&t.name&&(t.name=`mat-clone-${t.name}-${mt++}`)}function Q(r,t){const e=t.getContext("2d");if(e)try{e.drawImage(r,0,0)}catch{}}const J=(0,b.i$)({passive:!0}),k=(0,b.i$)({passive:!1}),G=new Set(["position"]);class vt{constructor(t,e,i,s,n,o){this._config=e,this._document=i,this._ngZone=s,this._viewportRuler=n,this._dragDropRegistry=o,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._hasStartedDragging=!1,this._moveEvents=new p.x,this._pointerMoveSubscription=y.w0.EMPTY,this._pointerUpSubscription=y.w0.EMPTY,this._scrollSubscription=y.w0.EMPTY,this._resizeSubscription=y.w0.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new p.x,this.started=new p.x,this.released=new p.x,this.ended=new p.x,this.entered=new p.x,this.exited=new p.x,this.dropped=new p.x,this.moved=this._moveEvents,this._pointerDown=a=>{if(this.beforeStarted.next(),this._handles.length){const l=this._getTargetHandle(a);l&&!this._disabledHandles.has(l)&&!this.disabled&&this._initializeDragSequence(l,a)}else this.disabled||this._initializeDragSequence(this._rootElement,a)},this._pointerMove=a=>{const l=this._getPointerPositionOnPage(a);if(!this._hasStartedDragging){if(Math.abs(l.x-this._pickupPositionOnPage.x)+Math.abs(l.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const w=Date.now()>=this._dragStartTime+this._getDragStartDelay(a),S=this._dropContainer;if(!w)return void this._endDragSequence(a);(!S||!S.isDragging()&&!S.isReceiving())&&(a.preventDefault(),this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(a)))}return}a.preventDefault();const c=this._getConstrainedPointerPosition(l);if(this._hasMoved=!0,this._lastKnownPointerPosition=l,this._updatePointerDirectionDelta(c),this._dropContainer)this._updateActiveDropContainer(c,l);else{const d=this._activeTransform;d.x=c.x-this._pickupPositionOnPage.x+this._passiveTransform.x,d.y=c.y-this._pickupPositionOnPage.y+this._passiveTransform.y,this._applyRootElementTransform(d.x,d.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:c,event:a,distance:this._getDragDistance(c),delta:this._pointerDirectionDelta})})},this._pointerUp=a=>{this._endDragSequence(a)},this._nativeDragStart=a=>{if(this._handles.length){const l=this._getTargetHandle(a);l&&!this._disabledHandles.has(l)&&!this.disabled&&a.preventDefault()}else this.disabled||a.preventDefault()},this.withRootElement(t).withParent(e.parentDragRef||null),this._parentPositions=new j(i),o.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(t){const e=(0,m.Ig)(t);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(i=>P(i,e)))}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(t){this._handles=t.map(i=>(0,m.fI)(i)),this._handles.forEach(i=>P(i,this.disabled)),this._toggleNativeDragInteractions();const e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){const e=(0,m.fI)(t);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{e.addEventListener("mousedown",this._pointerDown,k),e.addEventListener("touchstart",this._pointerDown,J),e.addEventListener("dragstart",this._nativeDragStart,k)}),this._initialTransform=void 0,this._rootElement=e),typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(t){return this._boundaryElement=t?(0,m.fI)(t):null,this._resizeSubscription.unsubscribe(),t&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(t){return this._parentDragRef=t,this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&this._rootElement?.remove(),this._anchor?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=this._parentDragRef=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(t){!this._disabledHandles.has(t)&&this._handles.indexOf(t)>-1&&(this._disabledHandles.add(t),P(t,!0))}enableHandle(t){this._disabledHandles.has(t)&&(this._disabledHandles.delete(t),P(t,this.disabled))}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){const t=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:t.x,y:t.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}withPreviewContainer(t){return this._previewContainer=t,this}_sortFromLastPointerPosition(){const t=this._lastKnownPointerPosition;t&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(t),t)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview?.remove(),this._previewRef?.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(t){if(this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging))if(this.released.next({source:this}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;const e=this._getPointerPositionOnPage(t);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(t){E(t)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const e=this._dropContainer;if(e){const i=this._rootElement,s=i.parentNode,n=this._placeholder=this._createPlaceholderElement(),o=this._anchor=this._anchor||this._document.createComment(""),a=this._getShadowRoot();s.insertBefore(o,i),this._initialTransform=i.style.transform||"",this._preview=this._createPreviewElement(),Z(i,!1,G),this._document.body.appendChild(s.replaceChild(n,i)),this._getPreviewInsertionPoint(s,a).appendChild(this._preview),this.started.next({source:this}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(t,e){this._parentDragRef&&e.stopPropagation();const i=this.isDragging(),s=E(e),n=!s&&0!==e.button,o=this._rootElement,a=(0,b.sA)(e),l=!s&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now(),c=s?(0,V.yG)(e):(0,V.X6)(e);if(a&&a.draggable&&"mousedown"===e.type&&e.preventDefault(),i||n||l||c)return;if(this._handles.length){const v=o.style;this._rootElementTapHighlight=v.webkitTapHighlightColor||"",v.webkitTapHighlightColor="transparent"}this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(v=>this._updateOnScroll(v)),this._boundaryElement&&(this._boundaryRect=H(this._boundaryElement));const d=this._previewTemplate;this._pickupPositionInElement=d&&d.template&&!d.matchSize?{x:0,y:0}:this._getPointerPositionInElement(t,e);const _=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:_.x,y:_.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){Z(this._rootElement,!0,G),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{const e=this._dropContainer,i=e.getItemIndex(this),s=this._getPointerPositionOnPage(t),n=this._getDragDistance(s),o=e._isOverContainer(s.x,s.y);this.ended.next({source:this,distance:n,dropPoint:s}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:o,distance:n,dropPoint:s}),e.drop(this,i,this._initialIndex,this._initialContainer,o,n,s),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e},{x:i,y:s}){let n=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!n&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(n=this._initialContainer),n&&n!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=n,this._dropContainer.enter(this,t,e,n===this._initialContainer&&n.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:n,currentIndex:n.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,s),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this._applyPreviewTransform(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_createPreviewElement(){const t=this._previewTemplate,e=this.previewClass,i=t?t.template:null;let s;if(i&&t){const n=t.matchSize?this._rootElement.getBoundingClientRect():null,o=t.viewContainer.createEmbeddedView(i,t.context);o.detectChanges(),s=X(o,this._document),this._previewRef=o,t.matchSize?tt(s,n):s.style.transform=T(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else{const n=this._rootElement;s=W(n),tt(s,n.getBoundingClientRect()),this._initialTransform&&(s.style.transform=this._initialTransform)}return A(s.style,{"pointer-events":"none",margin:"0",position:"fixed",top:"0",left:"0","z-index":`${this._config.zIndex||1e3}`},G),P(s,!1),s.classList.add("cdk-drag-preview"),s.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(n=>s.classList.add(n)):s.classList.add(e)),s}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const t=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._applyPreviewTransform(t.left,t.top);const e=function ft(r){const t=getComputedStyle(r),e=M(t,"transition-property"),i=e.find(a=>"transform"===a||"all"===a);if(!i)return 0;const s=e.indexOf(i),n=M(t,"transition-duration"),o=M(t,"transition-delay");return K(n[s])+K(o[s])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{const s=o=>{(!o||(0,b.sA)(o)===this._preview&&"transform"===o.propertyName)&&(this._preview?.removeEventListener("transitionend",s),i(),clearTimeout(n))},n=setTimeout(s,1.5*e);this._preview.addEventListener("transitionend",s)}))}_createPlaceholderElement(){const t=this._placeholderTemplate,e=t?t.template:null;let i;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),this._placeholderRef.detectChanges(),i=X(this._placeholderRef,this._document)):i=W(this._rootElement),i.style.pointerEvents="none",i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(t,e){const i=this._rootElement.getBoundingClientRect(),s=t===this._rootElement?null:t,n=s?s.getBoundingClientRect():i,o=E(e)?e.targetTouches[0]:e,a=this._getViewportScrollPosition();return{x:n.left-i.left+(o.pageX-n.left-a.left),y:n.top-i.top+(o.pageY-n.top-a.top)}}_getPointerPositionOnPage(t){const e=this._getViewportScrollPosition(),i=E(t)?t.touches[0]||t.changedTouches[0]||{pageX:0,pageY:0}:t,s=i.pageX-e.left,n=i.pageY-e.top;if(this._ownerSVGElement){const o=this._ownerSVGElement.getScreenCTM();if(o){const a=this._ownerSVGElement.createSVGPoint();return a.x=s,a.y=n,a.matrixTransform(o.inverse())}}return{x:s,y:n}}_getConstrainedPointerPosition(t){const e=this._dropContainer?this._dropContainer.lockAxis:null;let{x:i,y:s}=this.constrainPosition?this.constrainPosition(t,this):t;if("x"===this.lockAxis||"x"===e?s=this._pickupPositionOnPage.y:("y"===this.lockAxis||"y"===e)&&(i=this._pickupPositionOnPage.x),this._boundaryRect){const{x:n,y:o}=this._pickupPositionInElement,a=this._boundaryRect,{width:l,height:c}=this._getPreviewRect(),d=a.top+o,_=a.bottom-(c-o);i=q(i,a.left+n,a.right-(l-n)),s=q(s,d,_)}return{x:i,y:s}}_updatePointerDirectionDelta(t){const{x:e,y:i}=t,s=this._pointerDirectionDelta,n=this._pointerPositionAtLastDirectionChange,o=Math.abs(e-n.x),a=Math.abs(i-n.y);return o>this._config.pointerDirectionChangeThreshold&&(s.x=e>n.x?1:-1,n.x=e),a>this._config.pointerDirectionChangeThreshold&&(s.y=i>n.y?1:-1,n.y=i),s}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const t=this._handles.length>0||!this.isDragging();t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,P(this._rootElement,t))}_removeRootElementListeners(t){t.removeEventListener("mousedown",this._pointerDown,k),t.removeEventListener("touchstart",this._pointerDown,J),t.removeEventListener("dragstart",this._nativeDragStart,k)}_applyRootElementTransform(t,e){const i=T(t,e),s=this._rootElement.style;null==this._initialTransform&&(this._initialTransform=s.transform&&"none"!=s.transform?s.transform:""),s.transform=I(i,this._initialTransform)}_applyPreviewTransform(t,e){const i=this._previewTemplate?.template?void 0:this._initialTransform,s=T(t,e);this._preview.style.transform=I(s,i)}_getDragDistance(t){const e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:t,y:e}=this._passiveTransform;if(0===t&&0===e||this.isDragging()||!this._boundaryElement)return;const i=this._boundaryElement.getBoundingClientRect(),s=this._rootElement.getBoundingClientRect();if(0===i.width&&0===i.height||0===s.width&&0===s.height)return;const n=i.left-s.left,o=s.right-i.right,a=i.top-s.top,l=s.bottom-i.bottom;i.width>s.width?(n>0&&(t+=n),o>0&&(t-=o)):t=0,i.height>s.height?(a>0&&(e+=a),l>0&&(e-=l)):e=0,(t!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:t})}_getDragStartDelay(t){const e=this.dragStartDelay;return"number"==typeof e?e:E(t)?e.touch:e?e.mouse:0}_updateOnScroll(t){const e=this._parentPositions.handleScroll(t);if(e){const i=(0,b.sA)(t);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&C(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=(0,b.kV)(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(t,e){const i=this._previewContainer||"global";if("parent"===i)return t;if("global"===i){const s=this._document;return e||s.fullscreenElement||s.webkitFullscreenElement||s.mozFullScreenElement||s.msFullscreenElement||s.body}return(0,m.fI)(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=(this._preview||this._rootElement).getBoundingClientRect()),this._previewRect}_getTargetHandle(t){return this._handles.find(e=>t.target&&(t.target===e||e.contains(t.target)))}}function T(r,t){return`translate3d(${Math.round(r)}px, ${Math.round(t)}px, 0)`}function q(r,t,e){return Math.max(t,Math.min(e,r))}function E(r){return"t"===r.type[0]}function X(r,t){const e=r.rootNodes;if(1===e.length&&e[0].nodeType===t.ELEMENT_NODE)return e[0];const i=t.createElement("div");return e.forEach(s=>i.appendChild(s)),i}function tt(r,t){r.style.width=`${t.width}px`,r.style.height=`${t.height}px`,r.style.transform=T(t.left,t.top)}function R(r,t){return Math.max(0,Math.min(t,r))}class Pt{constructor(t,e,i,s,n){this._dragDropRegistry=e,this._ngZone=s,this._viewportRuler=n,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new p.x,this.entered=new p.x,this.exited=new p.x,this.dropped=new p.x,this.sorted=new p.x,this._isDragging=!1,this._itemPositions=[],this._previousSwap={drag:null,delta:0,overlaps:!1},this._draggables=[],this._siblings=[],this._orientation="vertical",this._activeSiblings=new Set,this._direction="ltr",this._viewportScrollSubscription=y.w0.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new p.x,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),(0,dt.F)(0,gt.Z).pipe((0,_t.R)(this._stopScrollTimers)).subscribe(()=>{const o=this._scrollNode,a=this.autoScrollStep;1===this._verticalScrollDirection?o.scrollBy(0,-a):2===this._verticalScrollDirection&&o.scrollBy(0,a),1===this._horizontalScrollDirection?o.scrollBy(-a,0):2===this._horizontalScrollDirection&&o.scrollBy(a,0)})},this.element=(0,m.fI)(t),this._document=i,this.withScrollableParents([this.element]),e.registerDropContainer(this),this._parentPositions=new j(i)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(t,e,i,s){let n;this._draggingStarted(),null==s?(n=this.sortingDisabled?this._draggables.indexOf(t):-1,-1===n&&(n=this._getItemIndexFromPointerPosition(t,e,i))):n=s;const o=this._activeDraggables,a=o.indexOf(t),l=t.getPlaceholderElement();let c=o[n];if(c===t&&(c=o[n+1]),!c&&(null==n||-1===n||n<o.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(c=o[0]),a>-1&&o.splice(a,1),c&&!this._dragDropRegistry.isDragging(c)){const d=c.getRootElement();d.parentElement.insertBefore(l,d),o.splice(n,0,t)}else(0,m.fI)(this.element).appendChild(l),o.push(t);l.style.transform="",this._cacheItemPositions(),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,i,s,n,o,a){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i,container:this,previousContainer:s,isPointerOverContainer:n,distance:o,dropPoint:a})}withItems(t){const e=this._draggables;return this._draggables=t,t.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(s=>s.isDragging()).every(s=>-1===t.indexOf(s))?this._reset():this._cacheItems()),this}withDirection(t){return this._direction=t,this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){return this._orientation=t,this}withScrollableParents(t){const e=(0,m.fI)(this.element);return this._scrollableElements=-1===t.indexOf(e)?[e,...t]:t.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(t){return this._isDragging?("horizontal"===this._orientation&&"rtl"===this._direction?this._itemPositions.slice().reverse():this._itemPositions).findIndex(i=>i.drag===t):this._draggables.indexOf(t)}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,i,s){if(this.sortingDisabled||!this._clientRect||!U(this._clientRect,.05,e,i))return;const n=this._itemPositions,o=this._getItemIndexFromPointerPosition(t,e,i,s);if(-1===o&&n.length>0)return;const a="horizontal"===this._orientation,l=n.findIndex(D=>D.drag===t),c=n[o],_=c.clientRect,v=l>o?1:-1,w=this._getItemOffsetPx(n[l].clientRect,_,v),S=this._getSiblingOffsetPx(l,n,v),rt=n.slice();(function bt(r,t,e){const i=R(t,r.length-1),s=R(e,r.length-1);if(i===s)return;const n=r[i],o=s<i?-1:1;for(let a=i;a!==s;a+=o)r[a]=r[a+o];r[s]=n})(n,l,o),this.sorted.next({previousIndex:l,currentIndex:o,container:this,item:t}),n.forEach((D,kt)=>{if(rt[kt]===D)return;const ot=D.drag===t,N=ot?w:S,at=ot?t.getPlaceholderElement():D.drag.getRootElement();D.offset+=N,a?(at.style.transform=I(`translate3d(${Math.round(D.offset)}px, 0, 0)`,D.initialTransform),C(D.clientRect,0,N)):(at.style.transform=I(`translate3d(0, ${Math.round(D.offset)}px, 0)`,D.initialTransform),C(D.clientRect,N,0))}),this._previousSwap.overlaps=F(_,e,i),this._previousSwap.drag=c.drag,this._previousSwap.delta=a?s.x:s.y}_startScrollingIfNecessary(t,e){if(this.autoScrollDisabled)return;let i,s=0,n=0;if(this._parentPositions.positions.forEach((o,a)=>{a===this._document||!o.clientRect||i||U(o.clientRect,.05,t,e)&&([s,n]=function wt(r,t,e,i){const s=st(t,i),n=nt(t,e);let o=0,a=0;if(s){const l=r.scrollTop;1===s?l>0&&(o=1):r.scrollHeight-l>r.clientHeight&&(o=2)}if(n){const l=r.scrollLeft;1===n?l>0&&(a=1):r.scrollWidth-l>r.clientWidth&&(a=2)}return[o,a]}(a,o.clientRect,t,e),(s||n)&&(i=a))}),!s&&!n){const{width:o,height:a}=this._viewportRuler.getViewportSize(),l={width:o,height:a,top:0,right:o,bottom:a,left:0};s=st(l,e),n=nt(l,t),i=window}i&&(s!==this._verticalScrollDirection||n!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=s,this._horizontalScrollDirection=n,this._scrollNode=i,(s||n)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const t=(0,m.fI)(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=t.msScrollSnapType||t.scrollSnapType||"",t.scrollSnapType=t.msScrollSnapType="none",this._cacheItems(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const t=(0,m.fI)(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(t).clientRect}_cacheItemPositions(){const t="horizontal"===this._orientation;this._itemPositions=this._activeDraggables.map(e=>{const i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:H(i)}}).sort((e,i)=>t?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_reset(){this._isDragging=!1;const t=(0,m.fI)(this.element).style;t.scrollSnapType=t.msScrollSnapType=this._initialScrollSnap,this._activeDraggables.forEach(e=>{const i=e.getRootElement();if(i){const s=this._itemPositions.find(n=>n.drag===e)?.initialTransform;i.style.transform=s||""}}),this._siblings.forEach(e=>e._stopReceiving(this)),this._activeDraggables=[],this._itemPositions=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1,this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_getSiblingOffsetPx(t,e,i){const s="horizontal"===this._orientation,n=e[t].clientRect,o=e[t+-1*i];let a=n[s?"width":"height"]*i;if(o){const l=s?"left":"top",c=s?"right":"bottom";-1===i?a-=o.clientRect[l]-n[c]:a+=n[l]-o.clientRect[c]}return a}_getItemOffsetPx(t,e,i){const s="horizontal"===this._orientation;let n=s?e.left-t.left:e.top-t.top;return-1===i&&(n+=s?e.width-t.width:e.height-t.height),n}_shouldEnterAsFirstChild(t,e){if(!this._activeDraggables.length)return!1;const i=this._itemPositions,s="horizontal"===this._orientation;if(i[0].drag!==this._activeDraggables[0]){const o=i[i.length-1].clientRect;return s?t>=o.right:e>=o.bottom}{const o=i[0].clientRect;return s?t<=o.left:e<=o.top}}_getItemIndexFromPointerPosition(t,e,i,s){const n="horizontal"===this._orientation,o=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===t)return!1;if(s){const c=n?s.x:s.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return n?e>=Math.floor(l.left)&&e<Math.floor(l.right):i>=Math.floor(l.top)&&i<Math.floor(l.bottom)});return-1!==o&&this.sortPredicate(o,t,this)?o:-1}_cacheItems(){this._activeDraggables=this._draggables.slice(),this._cacheItemPositions(),this._cacheParentPositions()}_isOverContainer(t,e){return null!=this._clientRect&&F(this._clientRect,t,e)}_getSiblingContainerFromPosition(t,e,i){return this._siblings.find(s=>s._canReceive(t,e,i))}_canReceive(t,e,i){if(!this._clientRect||!F(this._clientRect,e,i)||!this.enterPredicate(t,this))return!1;const s=this._getShadowRoot().elementFromPoint(e,i);if(!s)return!1;const n=(0,m.fI)(this.element);return s===n||n.contains(s)}_startReceiving(t,e){const i=this._activeSiblings;!i.has(t)&&e.every(s=>this.enterPredicate(s,this)||this._draggables.indexOf(s)>-1)&&(i.add(t),this._cacheParentPositions(),this._listenToScrollEvents())}_stopReceiving(t){this._activeSiblings.delete(t),this._viewportScrollSubscription.unsubscribe()}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(t=>{if(this.isDragging()){const e=this._parentPositions.handleScroll(t);e&&(this._itemPositions.forEach(({clientRect:i})=>{C(i,e.top,e.left)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()}))}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const t=(0,b.kV)((0,m.fI)(this.element));this._cachedShadowRoot=t||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const t=this._activeDraggables.filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,t))}}function st(r,t){const{top:e,bottom:i,height:s}=r,n=.05*s;return t>=e-n&&t<=e+n?1:t>=i-n&&t<=i+n?2:0}function nt(r,t){const{left:e,right:i,width:s}=r,n=.05*s;return t>=e-n&&t<=e+n?1:t>=i-n&&t<=i+n?2:0}const L=(0,b.i$)({passive:!1,capture:!0});let St=(()=>{class r{constructor(e,i){this._ngZone=e,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=s=>s.isDragging(),this.pointerMove=new p.x,this.pointerUp=new p.x,this.scroll=new p.x,this._preventDefaultWhileDragging=s=>{this._activeDragInstances.length>0&&s.preventDefault()},this._persistentTouchmoveListener=s=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&s.preventDefault(),this.pointerMove.next(s))},this._document=i}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,L)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,L)}startDragging(e,i){if(!(this._activeDragInstances.indexOf(e)>-1)&&(this._activeDragInstances.push(e),1===this._activeDragInstances.length)){const s=i.type.startsWith("touch");this._globalListeners.set(s?"touchend":"mouseup",{handler:n=>this.pointerUp.next(n),options:!0}).set("scroll",{handler:n=>this.scroll.next(n),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:L}),s||this._globalListeners.set("mousemove",{handler:n=>this.pointerMove.next(n),options:L}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((n,o)=>{this._document.addEventListener(o,n.handler,n.options)})})}}stopDragging(e){const i=this._activeDragInstances.indexOf(e);i>-1&&(this._activeDragInstances.splice(i,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(e){return this._activeDragInstances.indexOf(e)>-1}scrolled(e){const i=[this.scroll];return e&&e!==this._document&&i.push(new pt.y(s=>this._ngZone.runOutsideAngular(()=>{const o=a=>{this._activeDragInstances.length&&s.next(a)};return e.addEventListener("scroll",o,!0),()=>{e.removeEventListener("scroll",o,!0)}}))),(0,ut.T)(...i)}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((e,i)=>{this._document.removeEventListener(i,e.handler,e.options)}),this._globalListeners.clear()}}return r.\u0275fac=function(e){return new(e||r)(h.LFG(h.R0b),h.LFG(x.K0))},r.\u0275prov=h.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const yt={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let Ct=(()=>{class r{constructor(e,i,s,n){this._document=e,this._ngZone=i,this._viewportRuler=s,this._dragDropRegistry=n}createDrag(e,i=yt){return new vt(e,i,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(e){return new Pt(e,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}}return r.\u0275fac=function(e){return new(e||r)(h.LFG(x.K0),h.LFG(h.R0b),h.LFG(B.rL),h.LFG(St))},r.\u0275prov=h.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const Rt=[x.ez,u.u5,u.UX,(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({providers:[Ct],imports:[B.ZD]}),r})(),u.UX],xt=[f.BW0,f.zyh,f.nKr,f.T2N,f.KdK];let It=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[Rt,xt,ct]}),r})()}}]);