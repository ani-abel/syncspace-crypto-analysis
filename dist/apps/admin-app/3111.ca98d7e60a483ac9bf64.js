(self.webpackChunksyncspace_crypto_analysis=self.webpackChunksyncspace_crypto_analysis||[]).push([[3111],{3111:(e,t,s)=>{"use strict";s.r(t),s.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>D,keyboardDidClose:()=>l,keyboardDidOpen:()=>b,keyboardDidResize:()=>g,resetKeyboardAssist:()=>r,setKeyboardClose:()=>y,setKeyboardOpen:()=>c,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),b()||g(e)?c(e):l(e)&&y(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>y(e))},c=(e,t)=>{w(e,t),n=!0},y=e=>{f(e),n=!1},b=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,g=e=>n&&!l(e),l=e=>n&&d.height===e.innerHeight,w=(e,t)=>{const s=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(s)},f=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);