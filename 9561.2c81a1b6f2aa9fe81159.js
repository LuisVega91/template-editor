(self.webpackChunktemplate_editor=self.webpackChunktemplate_editor||[]).push([[9561],{9561:(t,o,a)=>{"use strict";a.r(o),a.d(o,{ion_backdrop:()=>e});var r=a(2322),s=a(7505),i=a(6953);const e=class{constructor(t){(0,r.r)(this,t),this.ionBackdropTap=(0,r.e)(this,"ionBackdropTap",7),this.blocker=i.G.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onMouseDown(t){this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const t=(0,s.b)(this);return(0,r.h)(r.H,{tabindex:"-1","aria-hidden":"true",class:{[t]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};e.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);