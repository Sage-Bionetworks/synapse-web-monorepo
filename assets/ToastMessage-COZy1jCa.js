import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{nr as r,or as i,tr as a}from"./TextField-DshmLCH7.js";import{t as o}from"./jsx-runtime-l3w3GfrB.js";import{l as s,t as c}from"./lodash-5EZjp2uK.js";import{n as l,t as ee}from"./FullWidthAlert-7TFD2Ied.js";function u(e){let t=this||{},n=e.call?e(t.p):e;return v(n.unshift?n.raw?ie(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,p(t.target),t.g,t.o,t.k)}function d(e,t,n,r){h.p=t,ae=e,y=n,b=r}function f(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),c=s.className||i.className;n.p=Object.assign({theme:y&&y()},s),n.o=/go\d/.test(c),s.className=u.apply(n,r)+(c?` `+c:``),t&&(s.ref=o);let l=e;return e[0]&&(l=s.as||e,delete s.as),b&&l[0]&&b(s),ae(l,s)}return t?t(i):i}}var te,p,ne,re,m,h,g,_,v,ie,ae,y,b,x,oe=e((()=>{te={data:``},p=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||te},ne=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,re=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,h=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?h(o,a):a+`{`+h(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=h(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=a[1]==`-`?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=h.p?h.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},g={},_=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+_(e[n]);return t}return e},v=(e,t,n,r,i)=>{let a=_(e),o=g[a]||(g[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!g[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=ne.exec(e.replace(re,``));)t[4]?r.shift():t[3]?(n=t[3].replace(m,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(m,` `).trim();return r[0]})(e):e;g[o]=h(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&g.g;return n&&(g.g=g[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(g[o],t,r,s),o},ie=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:h(e,``):!1===e?``:e}return e+r+(a??``)},``),u.bind({g:1}),x=u.bind({k:1})})),S,C,w,T,E,se,D,O,k,ce,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,le,ue,de,fe,q,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,J,Oe,ke,Ae,Y,je,Me=e((()=>{S=t(n(),1),C=t(n(),1),w=t(n(),1),oe(),T=t(n(),1),E=t(n(),1),se=e=>typeof e==`function`,D=(e,t)=>se(e)?e(t):e,O=(()=>{let e=0;return()=>(++e).toString()})(),k=(()=>{let e;return()=>{if(e===void 0&&typeof window<`u`){let t=matchMedia(`(prefers-reduced-motion: reduce)`);e=!t||t.matches}return e}})(),ce=20,A=`default`,j=(e,t)=>{let{toastLimit:n}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,n)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||i===void 0?{...e,dismissed:!0,visible:!1}:e)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},M=[],N={toasts:[],pausedAt:void 0,settings:{toastLimit:ce}},P={},F=(e,t=A)=>{P[t]=j(P[t]||N,e),M.forEach(([e,n])=>{e===t&&n(P[t])})},I=e=>Object.keys(P).forEach(t=>F(e,t)),L=e=>Object.keys(P).find(t=>P[t].toasts.some(t=>t.id===e)),R=(e=A)=>t=>{F(t,e)},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},B=(e={},t=A)=>{let[n,r]=(0,S.useState)(P[t]||N),i=(0,S.useRef)(P[t]);(0,S.useEffect)(()=>(i.current!==P[t]&&r(P[t]),M.push([t,r]),()=>{let e=M.findIndex(([e])=>e===t);e>-1&&M.splice(e,1)}),[t]);let a=n.toasts.map(t=>({...e,...e[t.type],...t,removeDelay:t.removeDelay||e[t.type]?.removeDelay||e?.removeDelay,duration:t.duration||e[t.type]?.duration||e?.duration||z[t.type],style:{...e.style,...e[t.type]?.style,...t.style}}));return{...n,toasts:a}},V=(e,t=`blank`,n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:`status`,"aria-live":`polite`},message:e,pauseDuration:0,...n,id:n?.id||O()}),H=e=>(t,n)=>{let r=V(t,e,n);return R(r.toasterId||L(r.id))({type:2,toast:r}),r.id},U=(e,t)=>H(`blank`)(e,t),U.error=H(`error`),U.success=H(`success`),U.loading=H(`loading`),U.custom=H(`custom`),U.dismiss=(e,t)=>{let n={type:3,toastId:e};t?R(t)(n):I(n)},U.dismissAll=e=>U.dismiss(void 0,e),U.remove=(e,t)=>{let n={type:4,toastId:e};t?R(t)(n):I(n)},U.removeAll=e=>U.remove(void 0,e),U.promise=(e,t,n)=>{let r=U.loading(t.loading,{...n,...n?.loading});return typeof e==`function`&&(e=e()),e.then(e=>{let i=t.success?D(t.success,e):void 0;return i?U.success(i,{id:r,...n,...n?.success}):U.dismiss(r),e}).catch(e=>{let i=t.error?D(t.error,e):void 0;i?U.error(i,{id:r,...n,...n?.error}):U.dismiss(r)}),e},W=1e3,G=(e,t=`default`)=>{let{toasts:n,pausedAt:r}=B(e,t),i=(0,C.useRef)(new Map).current,a=(0,C.useCallback)((e,t=W)=>{if(i.has(e))return;let n=setTimeout(()=>{i.delete(e),o({type:4,toastId:e})},t);i.set(e,n)},[]);(0,C.useEffect)(()=>{if(r)return;let e=Date.now(),i=n.map(n=>{if(n.duration===1/0)return;let r=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(r<0){n.visible&&U.dismiss(n.id);return}return setTimeout(()=>U.dismiss(n.id,t),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[n,r,t]);let o=(0,C.useCallback)(R(t),[t]),s=(0,C.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),c=(0,C.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),l=(0,C.useCallback)(()=>{r&&o({type:6,time:Date.now()})},[r,o]),ee=(0,C.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:a}=t||{},o=n.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=o.findIndex(t=>t.id===e.id),c=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+i,0)},[n]);return(0,C.useEffect)(()=>{n.forEach(e=>{if(e.dismissed)a(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[n,a]),{toasts:n,handlers:{updateHeight:c,startPause:s,endPause:l,calculateOffset:ee}}},K=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,le=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ue=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,de=f(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#ff4b4b`};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${le} 0.15s ease-out forwards;
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
    animation: ${ue} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,fe=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,q=f(`div`)`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||`#e0e0e0`};
  border-right-color: ${e=>e.primary||`#616161`};
  animation: ${fe} 1s linear infinite;
`,pe=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=x`
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
}`,he=f(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#61d345`};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
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
`,ge=f(`div`)`
  position: absolute;
`,_e=f(`div`)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ve=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ye=f(`div`)`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ve} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,be=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t===void 0?n===`blank`?null:T.createElement(_e,null,T.createElement(q,{...r}),n!==`loading`&&T.createElement(ge,null,n===`error`?T.createElement(de,{...r}):T.createElement(he,{...r}))):typeof t==`string`?T.createElement(ye,null,t):t},xe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Se=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ce=`0%{opacity:0;} 100%{opacity:1;}`,we=`0%{opacity:1;} 100%{opacity:0;}`,Te=f(`div`)`
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
`,Ee=f(`div`)`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,De=(e,t)=>{let n=e.includes(`top`)?1:-1,[r,i]=k()?[Ce,we]:[xe(n),Se(n)];return{animation:t?`${x(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},J=w.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?De(e.position||t||`top-center`,e.visible):{opacity:0},a=w.createElement(be,{toast:e}),o=w.createElement(Ee,{...e.ariaProps},D(e.message,e));return w.createElement(Te,{className:e.className,style:{...i,...n,...e.style}},typeof r==`function`?r({icon:a,message:o}):w.createElement(w.Fragment,null,a,o))}),d(E.createElement),Oe=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let a=E.useCallback(t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return E.createElement(`div`,{ref:a,className:t,style:n},i)},ke=(e,t)=>{let n=e.includes(`top`),r=n?{top:0}:{bottom:0},i=e.includes(`center`)?{justifyContent:`center`}:e.includes(`right`)?{justifyContent:`flex-end`}:{};return{left:0,right:0,display:`flex`,position:`absolute`,transition:k()?void 0:`all 230ms cubic-bezier(.21,1.02,.73,1)`,transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},Ae=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=16,je=({reverseOrder:e,position:t=`top-center`,toastOptions:n,gutter:r,children:i,toasterId:a,containerStyle:o,containerClassName:s})=>{let{toasts:c,handlers:l}=G(n,a);return E.createElement(`div`,{"data-rht-toaster":a||``,style:{position:`fixed`,zIndex:9999,top:Y,left:Y,right:Y,bottom:Y,pointerEvents:`none`,...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(n=>{let a=n.position||t,o=ke(a,l.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return E.createElement(Oe,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?Ae:``,style:o},n.type===`custom`?D(n.message,n):i?i(n):E.createElement(J,{toast:n,position:a}))}))}}));function X({text:e,show:t,autohide:n}){let a=(0,Ne.useRef)(null);return(0,Q.jsx)(r,{children:t&&(0,Q.jsx)(i,{nodeRef:a,classNames:`SRC-card`,timeout:n?{enter:500,exit:300}:{},children:(0,Q.jsx)(`div`,{className:`SRC-modal`,ref:a,children:e})})})}function Z(){return(0,Q.jsx)(je,{containerClassName:`SynapseToastContainer`,position:`bottom-center`,children:e=>(0,Q.jsx)(J,{toast:e,style:{...e.style,animation:e.visible?`fadeInUp 0.5s ease`:`fadeOutDown 1s ease`}})})}var Ne,Q,$,Pe=e((()=>{c(),Ne=t(n(),1),Me(),a(),l(),Q=o(),$=(e,t,n={})=>{let r=s(`synToast-`),i=()=>{U.dismiss(r)},{title:a=void 0,primaryButtonConfig:o=void 0,secondaryButtonConfig:c=void 0,dismissOnPrimaryButtonClick:l=!1,dismissOnSecondaryButtonClick:u=!1}=n??{};if(o&&`onClick`in o&&l){let e=o.onClick;o.onClick=t=>{e(t),i()}}if(c&&`onClick`in c&&u){let e=c.onClick;c.onClick=t=>{e(t),i()}}let{autoCloseInMs:d=15e3}=n??{};return d===0&&(d=1/0),U((0,Q.jsx)(ee,{isGlobal:!1,onClose:i,variant:t??`info`,show:!0,title:a,description:e,primaryButtonConfig:o,secondaryButtonConfig:c}),{id:r,className:`SynapseToastMessage`,duration:d}),i};try{X.displayName=`ToastMessage`,X.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:`ToastMessage`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`text`,required:!0,tags:{},type:{name:`string`}},show:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`show`,required:!0,tags:{},type:{name:`boolean`}},autohide:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`autohide`,required:!0,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{Z.displayName=`SynapseToastContainer`,Z.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:`SynapseToastContainer`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{},tags:{}}}catch{}try{$.displayName=`displayToast`,$.__docgenInfo={description:`Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.`,displayName:`displayToast`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{},tags:{param:`message - The description of the toast message.
variant - The type of toast message to display. Default 'info'.

In ToastMessageOptions:
autoCloseInMs - The amount of time in milliseconds to wait before automatically closing the toast. To prevent autoclose, set to 0 or Infinity. Default 15000.

The rest of the options params are undefined by default.`}}}catch{}}));export{Me as a,Pe as i,X as n,U as o,$ as r,Z as t};