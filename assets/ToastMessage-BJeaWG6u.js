import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{nr as r,or as i,tr as a}from"./TextField-DshmLCH7.js";import{t as o}from"./jsx-runtime-l3w3GfrB.js";import{i as s,t as c}from"./esm-XhthoL2B.js";import{l,t as u}from"./lodash-5EZjp2uK.js";import{n as d,t as ee}from"./FullWidthAlert-DUD2Gc_K.js";function f(e){let t=this||{},n=e.call?e(t.p):e;return y(n.unshift?n.raw?b(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,m(t.target),t.g,t.o,t.k)}function te(e,t,n,r){g.p=t,x=e,S=n,C=r}function p(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),c=s.className||i.className;n.p=Object.assign({theme:S&&S()},s),n.o=/go\d/.test(c),s.className=f.apply(n,r)+(c?` `+c:``),t&&(s.ref=o);let l=e;return e[0]&&(l=s.as||e,delete s.as),C&&l[0]&&C(s),x(l,s)}return t?t(i):i}}var ne,m,re,ie,h,g,_,v,y,b,x,S,C,w,ae=e((()=>{ne={data:``},m=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ne},re=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ie=/\/\*[^]*?\*\/|  +/g,h=/\n+/g,g=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?g(o,a):a+`{`+g(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=g(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=a[1]==`-`?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=g.p?g.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},_={},v=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+v(e[n]);return t}return e},y=(e,t,n,r,i)=>{let a=v(e),o=_[a]||(_[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!_[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=re.exec(e.replace(ie,``));)t[4]?r.shift():t[3]?(n=t[3].replace(h,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(h,` `).trim();return r[0]})(e):e;_[o]=g(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&_.g;return n&&(_.g=_[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(_[o],t,r,s),o},b=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:g(e,``):!1===e?``:e}return e+r+(a??``)},``),f.bind({g:1}),w=f.bind({k:1})})),T,E,D,O,k,A,j,oe,M,se,N,P,F,I,L,R,z,B,V,H,U,W,G,K,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,q,je,Me,J,Y,Ne,Pe=e((()=>{T=t(n(),1),E=t(n(),1),D=t(n(),1),ae(),O=t(n(),1),k=t(n(),1),A=e=>typeof e==`function`,j=(e,t)=>A(e)?e(t):e,oe=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(e===void 0&&typeof window<`u`){let t=matchMedia(`(prefers-reduced-motion: reduce)`);e=!t||t.matches}return e}})(),se=20,N=`default`,P=(e,t)=>{let{toastLimit:n}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,n)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return P(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||i===void 0?{...e,dismissed:!0,visible:!1}:e)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},F=[],I={toasts:[],pausedAt:void 0,settings:{toastLimit:se}},L={},R=(e,t=N)=>{L[t]=P(L[t]||I,e),F.forEach(([e,n])=>{e===t&&n(L[t])})},z=e=>Object.keys(L).forEach(t=>R(e,t)),B=e=>Object.keys(L).find(t=>L[t].toasts.some(t=>t.id===e)),V=(e=N)=>t=>{R(t,e)},H={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},U=(e={},t=N)=>{let[n,r]=(0,T.useState)(L[t]||I),i=(0,T.useRef)(L[t]);(0,T.useEffect)(()=>(i.current!==L[t]&&r(L[t]),F.push([t,r]),()=>{let e=F.findIndex(([e])=>e===t);e>-1&&F.splice(e,1)}),[t]);let a=n.toasts.map(t=>({...e,...e[t.type],...t,removeDelay:t.removeDelay||e[t.type]?.removeDelay||e?.removeDelay,duration:t.duration||e[t.type]?.duration||e?.duration||H[t.type],style:{...e.style,...e[t.type]?.style,...t.style}}));return{...n,toasts:a}},W=(e,t=`blank`,n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:`status`,"aria-live":`polite`},message:e,pauseDuration:0,...n,id:n?.id||oe()}),G=e=>(t,n)=>{let r=W(t,e,n);return V(r.toasterId||B(r.id))({type:2,toast:r}),r.id},K=(e,t)=>G(`blank`)(e,t),K.error=G(`error`),K.success=G(`success`),K.loading=G(`loading`),K.custom=G(`custom`),K.dismiss=(e,t)=>{let n={type:3,toastId:e};t?V(t)(n):z(n)},K.dismissAll=e=>K.dismiss(void 0,e),K.remove=(e,t)=>{let n={type:4,toastId:e};t?V(t)(n):z(n)},K.removeAll=e=>K.remove(void 0,e),K.promise=(e,t,n)=>{let r=K.loading(t.loading,{...n,...n?.loading});return typeof e==`function`&&(e=e()),e.then(e=>{let i=t.success?j(t.success,e):void 0;return i?K.success(i,{id:r,...n,...n?.success}):K.dismiss(r),e}).catch(e=>{let i=t.error?j(t.error,e):void 0;i?K.error(i,{id:r,...n,...n?.error}):K.dismiss(r)}),e},ce=1e3,le=(e,t=`default`)=>{let{toasts:n,pausedAt:r}=U(e,t),i=(0,E.useRef)(new Map).current,a=(0,E.useCallback)((e,t=ce)=>{if(i.has(e))return;let n=setTimeout(()=>{i.delete(e),o({type:4,toastId:e})},t);i.set(e,n)},[]);(0,E.useEffect)(()=>{if(r)return;let e=Date.now(),i=n.map(n=>{if(n.duration===1/0)return;let r=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(r<0){n.visible&&K.dismiss(n.id);return}return setTimeout(()=>K.dismiss(n.id,t),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[n,r,t]);let o=(0,E.useCallback)(V(t),[t]),s=(0,E.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),c=(0,E.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),l=(0,E.useCallback)(()=>{r&&o({type:6,time:Date.now()})},[r,o]),u=(0,E.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:a}=t||{},o=n.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=o.findIndex(t=>t.id===e.id),c=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+i,0)},[n]);return(0,E.useEffect)(()=>{n.forEach(e=>{if(e.dismissed)a(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[n,a]),{toasts:n,handlers:{updateHeight:c,startPause:s,endPause:l,calculateOffset:u}}},ue=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pe=p(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#ff4b4b`};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||`#fff`};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${fe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,me=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,he=p(`div`)`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||`#e0e0e0`};
  border-right-color: ${e=>e.primary||`#616161`};
  animation: ${me} 1s linear infinite;
`,ge=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,_e=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ve=p(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#61d345`};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_e} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||`#fff`};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ye=p(`div`)`
  position: absolute;
`,be=p(`div`)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xe=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Se=p(`div`)`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ce=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t===void 0?n===`blank`?null:O.createElement(be,null,O.createElement(he,{...r}),n!==`loading`&&O.createElement(ye,null,n===`error`?O.createElement(pe,{...r}):O.createElement(ve,{...r}))):typeof t==`string`?O.createElement(Se,null,t):t},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Te=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee=`0%{opacity:0;} 100%{opacity:1;}`,De=`0%{opacity:1;} 100%{opacity:0;}`,Oe=p(`div`)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ke=p(`div`)`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let n=e.includes(`top`)?1:-1,[r,i]=M()?[Ee,De]:[we(n),Te(n)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},q=D.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?Ae(e.position||t||`top-center`,e.visible):{opacity:0},a=D.createElement(Ce,{toast:e}),o=D.createElement(ke,{...e.ariaProps},j(e.message,e));return D.createElement(Oe,{className:e.className,style:{...i,...n,...e.style}},typeof r==`function`?r({icon:a,message:o}):D.createElement(D.Fragment,null,a,o))}),te(k.createElement),je=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let a=k.useCallback(t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return k.createElement(`div`,{ref:a,className:t,style:n},i)},Me=(e,t)=>{let n=e.includes(`top`),r=n?{top:0}:{bottom:0},i=e.includes(`center`)?{justifyContent:`center`}:e.includes(`right`)?{justifyContent:`flex-end`}:{};return{left:0,right:0,display:`flex`,position:`absolute`,transition:M()?void 0:`all 230ms cubic-bezier(.21,1.02,.73,1)`,transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},J=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=16,Ne=({reverseOrder:e,position:t=`top-center`,toastOptions:n,gutter:r,children:i,toasterId:a,containerStyle:o,containerClassName:s})=>{let{toasts:c,handlers:l}=le(n,a);return k.createElement(`div`,{"data-rht-toaster":a||``,style:{position:`fixed`,zIndex:9999,top:Y,left:Y,right:Y,bottom:Y,pointerEvents:`none`,...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(n=>{let a=n.position||t,o=Me(a,l.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return k.createElement(je,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?J:``,style:o},n.type===`custom`?j(n.message,n):i?i(n):k.createElement(q,{toast:n,position:a}))}))}}));function X({text:e,show:t,autohide:n}){let a=(0,Fe.useRef)(null);return(0,Q.jsx)(r,{children:t&&(0,Q.jsx)(i,{nodeRef:a,classNames:`SRC-card`,timeout:n?{enter:500,exit:300}:{},children:(0,Q.jsx)(`div`,{className:`SRC-modal`,ref:a,children:e})})})}function Z(){let e=s(e=>e.breakpoints.down(`sm`));return(0,Q.jsx)(Ne,{containerClassName:`${Ie} ${e?Le:Re}`,position:e?`top-center`:`bottom-center`,children:t=>(0,Q.jsx)(q,{toast:t,style:{...t.style,animation:t.visible?`${e?`fadeInDown`:`fadeInUp`} 0.5s ease`:`${e?`fadeOutUp`:`fadeOutDown`} 1s ease`}})})}var Fe,Q,Ie,Le,Re,$,ze=e((()=>{u(),Fe=t(n(),1),c(),Pe(),a(),d(),Q=o(),Ie=`SynapseToastContainer`,Le=`SynapseToastContainerTop`,Re=`SynapseToastContainerBottom`,$=(e,t,n={})=>{let r=l(`synToast-`),i=()=>{K.dismiss(r)},{title:a=void 0,primaryButtonConfig:o=void 0,secondaryButtonConfig:s=void 0,dismissOnPrimaryButtonClick:c=!1,dismissOnSecondaryButtonClick:u=!1}=n??{};if(o&&`onClick`in o&&c){let e=o.onClick;o.onClick=t=>{e(t),i()}}if(s&&`onClick`in s&&u){let e=s.onClick;s.onClick=t=>{e(t),i()}}let{autoCloseInMs:d=15e3}=n??{};return d===0&&(d=1/0),K((0,Q.jsx)(ee,{isGlobal:!1,onClose:i,variant:t??`info`,show:!0,title:a,description:e,primaryButtonConfig:o,secondaryButtonConfig:s}),{id:r,className:`SynapseToastMessage`,duration:d}),i};try{X.displayName=`ToastMessage`,X.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:`ToastMessage`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`text`,required:!0,tags:{},type:{name:`string`}},show:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`show`,required:!0,tags:{},type:{name:`boolean`}},autohide:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`autohide`,required:!0,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{Z.displayName=`SynapseToastContainer`,Z.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:`SynapseToastContainer`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{},tags:{}}}catch{}try{$.displayName=`displayToast`,$.__docgenInfo={description:`Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.`,displayName:`displayToast`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{},tags:{param:`message - The description of the toast message.
variant - The type of toast message to display. Default 'info'.

In ToastMessageOptions:
autoCloseInMs - The amount of time in milliseconds to wait before automatically closing the toast. To prevent autoclose, set to 0 or Infinity. Default 15000.

The rest of the options params are undefined by default.`}}}catch{}}));export{Pe as a,ze as i,X as n,K as o,$ as r,Z as t};