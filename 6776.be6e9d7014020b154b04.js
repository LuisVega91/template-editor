(self.webpackChunktemplate_editor=self.webpackChunktemplate_editor||[]).push([[6776],{6776:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createSwipeBackGesture:()=>s});var a=r(1843),n=r(8520);r(6953);const s=(e,t,r,s,o)=>{const i=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{s(e.deltaX/i.innerWidth)},onEnd:e=>{const t=i.innerWidth,r=e.deltaX/t,n=e.velocityX,s=n>=0&&(n>.2||e.deltaX>t/2),c=(s?1-r:r)*t;let l=0;if(c>5){const e=c/Math.abs(n);l=Math.min(e,540)}o(s,r<=0?.01:(0,a.j)(0,r,.9999),l)}})}}}]);