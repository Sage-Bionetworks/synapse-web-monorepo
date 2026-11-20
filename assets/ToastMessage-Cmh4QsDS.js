import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-DNOQmUAz.js";import{ct as r}from"./createTheme-CL4c-Jqh.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{n as a,t as o}from"./useMediaQuery-C-CcZUbQ.js";import{d as s,m as c,u as l}from"./useTimeout-C0GQjZSD.js";import{c as u,l as ee,o as te,s as ne}from"./utils-hdypP88c.js";import{i as re,r as ie}from"./ButtonBase-BQI37tTe.js";import{n as ae,t as oe}from"./FullWidthAlert-CisGSDHf.js";import{n as se,t as ce}from"./toString-Dly9LWZo.js";function le(e,t){return e.classList?!!t&&e.classList.contains(t):(` `+(e.className.baseVal||e.className)+` `).indexOf(` `+t+` `)!==-1}function ue(e,t){e.classList?e.classList.add(t):le(e,t)||(typeof e.className==`string`?e.className=e.className+` `+t:e.setAttribute(`class`,(e.className&&e.className.baseVal||``)+` `+t))}function d(){return(d=e((()=>{})))()}function de(e,t){return e.replace(RegExp(`(^|\\s)`+t+`(?:\\s|$)`,`g`),`$1`).replace(/\s+/g,` `).replace(/^\s*|\s*$/g,``)}function fe(e,t){e.classList?e.classList.remove(t):typeof e.className==`string`?e.className=de(e.className,t):e.setAttribute(`class`,de(e.className&&e.className.baseVal||``,t))}function pe(){return(pe=e((()=>{})))()}var f,me,p,m;function h(){return(h=e((()=>{s(),d(),pe(),f=t(n()),ne(),ee(),me=function(e,t){return e&&t&&t.split(` `).forEach(function(t){return ue(e,t)})},p=function(e,t){return e&&t&&t.split(` `).forEach(function(t){return fe(e,t)})},m=function(e){l(t,e);function t(){var t,n=[...arguments];return t=e.call.apply(e,[this].concat(n))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1];t.removeClasses(i,`exit`),t.addClass(i,a?`appear`:`enter`,`base`),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1]?`appear`:`enter`;t.addClass(i,a,`active`),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],a=r[1]?`appear`:`enter`;t.removeClasses(i,a),t.addClass(i,a,`done`),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,`appear`),t.removeClasses(n,`enter`),t.addClass(n,`exit`,`base`),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,`exit`,`active`),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,`exit`),t.addClass(n,`exit`,`done`),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r=typeof n==`string`,i=r&&n?n+`-`:``,a=r?``+i+e:n[e];return{baseClassName:a,activeClassName:r?a+`-active`:n[e+`Active`],doneClassName:r?a+`-done`:n[e+`Done`]}},t}var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+`ClassName`],i=this.getClassNames(`enter`).doneClassName;t===`appear`&&n===`done`&&i&&(r+=` `+i),n===`active`&&e&&u(e),r&&(this.appliedClasses[t][n]=r,me(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,a=n.done;this.appliedClasses[t]={},r&&p(e,r),i&&p(e,i),a&&p(e,a)},n.render=function(){var e=this.props;e.classNames;var t=c(e,[`classNames`]);return f.createElement(te,r({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(f.Component),m.defaultProps={classNames:``},m.propTypes={}})))()}function he(e){var t=++ge;return se(e)+t}var ge;function g(){return(g=e((()=>{ce(),ge=0})))()}function _(e){let t=this||{},n=e.call?e(t.p):e;return be(n.unshift?n.raw?xe(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,y(t.target),t.g,t.o,t.k)}function _e(e,t,n,r){S.p=t,Se=e,T=n,E=r}function v(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),c=s.className||i.className;n.p=Object.assign({theme:T&&T()},s),n.o=/go\d/.test(c),s.className=_.apply(n,r)+(c?` `+c:``),t&&(s.ref=o);let l=e;return e[0]&&(l=s.as||e,delete s.as),E&&l[0]&&E(s),Se(l,s)}return t?t(i):i}}var ve,y,b,ye,x,S,C,w,be,xe,Se,T,E,D;function O(){return(O=e((()=>{ve={data:``},y=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ve},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ye=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,S=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?S(o,a):a+`{`+S(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=S(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=a[1]==`-`?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=S.p?S.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},C={},w=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+w(e[n]);return t}return e},be=(e,t,n,r,i)=>{let a=w(e),o=C[a]||(C[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!C[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=b.exec(e.replace(ye,``));)t[4]?r.shift():t[3]?(n=t[3].replace(x,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(x,` `).trim();return r[0]})(e):e;C[o]=S(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&C.g;return n&&(C.g=C[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(C[o],t,r,s),o},xe=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:S(e,``):!1===e?``:e}return e+r+(a??``)},``),_.bind({g:1}),D=_.bind({k:1})})))()}var k,A,j,M,N,P,F,I,Ce,L,R,z,B,V,H,U,we,W,Te,Ee,De,G,K,Oe,ke,q,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,J,Xe,Ze,Qe,Y,$e;function et(){return(et=e((()=>{k=n(),A=t(n(),1),O(),j=t(n(),1),M=t(n(),1),N=e=>typeof e==`function`,P=(e,t)=>N(e)?e(t):e,F=(()=>{let e=0;return()=>(++e).toString()})(),I=(()=>{let e;return()=>{if(e===void 0&&typeof window<`u`){let t=matchMedia(`(prefers-reduced-motion: reduce)`);e=!t||t.matches}return e}})(),Ce=20,L=`default`,R=(e,t)=>{let{toastLimit:n}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,n)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return R(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||i===void 0?{...e,dismissed:!0,visible:!1}:e)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},z=[],B={toasts:[],pausedAt:void 0,settings:{toastLimit:Ce}},V={},H=(e,t=L)=>{V[t]=R(V[t]||B,e),z.forEach(([e,n])=>{e===t&&n(V[t])})},U=e=>Object.keys(V).forEach(t=>H(e,t)),we=e=>Object.keys(V).find(t=>V[t].toasts.some(t=>t.id===e)),W=(e=L)=>t=>{H(t,e)},Te={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ee=(e={},t=L)=>{let[n,r]=(0,k.useState)(V[t]||B),i=(0,k.useRef)(V[t]);(0,k.useEffect)(()=>(i.current!==V[t]&&r(V[t]),z.push([t,r]),()=>{let e=z.findIndex(([e])=>e===t);e>-1&&z.splice(e,1)}),[t]);let a=n.toasts.map(t=>({...e,...e[t.type],...t,removeDelay:t.removeDelay||e[t.type]?.removeDelay||e?.removeDelay,duration:t.duration||e[t.type]?.duration||e?.duration||Te[t.type],style:{...e.style,...e[t.type]?.style,...t.style}}));return{...n,toasts:a}},De=(e,t=`blank`,n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:`status`,"aria-live":`polite`},message:e,pauseDuration:0,...n,id:n?.id||F()}),G=e=>(t,n)=>{let r=De(t,e,n);return W(r.toasterId||we(r.id))({type:2,toast:r}),r.id},K=(e,t)=>G(`blank`)(e,t),K.error=G(`error`),K.success=G(`success`),K.loading=G(`loading`),K.custom=G(`custom`),K.dismiss=(e,t)=>{let n={type:3,toastId:e};t?W(t)(n):U(n)},K.dismissAll=e=>K.dismiss(void 0,e),K.remove=(e,t)=>{let n={type:4,toastId:e};t?W(t)(n):U(n)},K.removeAll=e=>K.remove(void 0,e),K.promise=(e,t,n)=>{let r=K.loading(t.loading,{...n,...n?.loading});return typeof e==`function`&&(e=e()),e.then(e=>{let i=t.success?P(t.success,e):void 0;return i?K.success(i,{id:r,...n,...n?.success}):K.dismiss(r),e}).catch(e=>{let i=t.error?P(t.error,e):void 0;i?K.error(i,{id:r,...n,...n?.error}):K.dismiss(r)}),e},Oe=1e3,ke=(e,t=`default`)=>{let{toasts:n,pausedAt:r}=Ee(e,t),i=(0,k.useRef)(new Map).current,a=(0,k.useCallback)((e,t=Oe)=>{if(i.has(e))return;let n=setTimeout(()=>{i.delete(e),o({type:4,toastId:e})},t);i.set(e,n)},[]);(0,k.useEffect)(()=>{if(r)return;let e=Date.now(),i=n.map(n=>{if(n.duration===1/0)return;let r=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(r<0)n.visible&&K.dismiss(n.id);else return setTimeout(()=>K.dismiss(n.id,t),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[n,r,t]);let o=(0,k.useCallback)(W(t),[t]),s=(0,k.useCallback)(()=>{o({type:5,time:Date.now()})},[o]),c=(0,k.useCallback)((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),l=(0,k.useCallback)(()=>{r&&o({type:6,time:Date.now()})},[r,o]),u=(0,k.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:a}=t||{},o=n.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=o.findIndex(t=>t.id===e.id),c=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+i,0)},[n]);return(0,k.useEffect)(()=>{n.forEach(e=>{if(e.dismissed)a(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[n,a]),{toasts:n,handlers:{updateHeight:c,startPause:s,endPause:l,calculateOffset:u}}},q=D`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ae=D`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,je=D`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Me=v(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#ff4b4b`};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ae} 0.15s ease-out forwards;
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
    animation: ${je} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ne=D`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Pe=v(`div`)`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||`#e0e0e0`};
  border-right-color: ${e=>e.primary||`#616161`};
  animation: ${Ne} 1s linear infinite;
`,Fe=D`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ie=D`
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
}`,Le=v(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#61d345`};
  position: relative;
  transform: rotate(45deg);

  animation: ${Fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ie} 0.2s ease-out forwards;
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
`,Re=v(`div`)`
  position: absolute;
`,ze=v(`div`)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Be=D`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ve=v(`div`)`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,He=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t===void 0?n===`blank`?null:j.createElement(ze,null,j.createElement(Pe,{...r}),n!==`loading`&&j.createElement(Re,null,n===`error`?j.createElement(Me,{...r}):j.createElement(Le,{...r}))):typeof t==`string`?j.createElement(Ve,null,t):t},Ue=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,We=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ge=`0%{opacity:0;} 100%{opacity:1;}`,Ke=`0%{opacity:1;} 100%{opacity:0;}`,qe=v(`div`)`
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
`,Je=v(`div`)`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ye=(e,t)=>{let n=e.includes(`top`)?1:-1,[r,i]=I()?[Ge,Ke]:[Ue(n),We(n)];return{animation:t?`${D(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${D(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},J=A.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?Ye(e.position||t||`top-center`,e.visible):{opacity:0},a=A.createElement(He,{toast:e}),o=A.createElement(Je,{...e.ariaProps},P(e.message,e));return A.createElement(qe,{className:e.className,style:{...i,...n,...e.style}},typeof r==`function`?r({icon:a,message:o}):A.createElement(A.Fragment,null,a,o))}),_e(M.createElement),Xe=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let a=M.useCallback(t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return M.createElement(`div`,{ref:a,className:t,style:n},i)},Ze=(e,t)=>{let n=e.includes(`top`),r=n?{top:0}:{bottom:0},i=e.includes(`center`)?{justifyContent:`center`}:e.includes(`right`)?{justifyContent:`flex-end`}:{};return{left:0,right:0,display:`flex`,position:`absolute`,transition:I()?void 0:`all 230ms cubic-bezier(.21,1.02,.73,1)`,transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},Qe=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=16,$e=({reverseOrder:e,position:t=`top-center`,toastOptions:n,gutter:r,children:i,toasterId:a,containerStyle:o,containerClassName:s})=>{let{toasts:c,handlers:l}=ke(n,a);return M.createElement(`div`,{"data-rht-toaster":a||``,style:{position:`fixed`,zIndex:9999,top:Y,left:Y,right:Y,bottom:Y,pointerEvents:`none`,...o},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(n=>{let a=n.position||t,o=Ze(a,l.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return M.createElement(Xe,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?Qe:``,style:o},n.type===`custom`?P(n.message,n):i?i(n):M.createElement(J,{toast:n,position:a}))}))}})))()}function X({text:e,show:t,autohide:n}){let r=(0,tt.useRef)(null);return(0,Q.jsx)(ie,{children:t&&(0,Q.jsx)(m,{nodeRef:r,classNames:`SRC-card`,timeout:n?{enter:500,exit:300}:{},children:(0,Q.jsx)(`div`,{className:`SRC-modal`,ref:r,children:e})})})}function Z(){let e=a(e=>e.breakpoints.down(`sm`));return(0,Q.jsx)($e,{containerClassName:`${nt} ${e?rt:it}`,position:e?`top-center`:`bottom-center`,children:t=>(0,Q.jsx)(J,{toast:t,style:{...t.style,animation:t.visible?`${e?`fadeInDown`:`fadeInUp`} 0.5s ease`:`${e?`fadeOutUp`:`fadeOutDown`} 1s ease`}})})}var tt,Q,nt,rt,it,$;function at(){return(at=e((()=>{g(),tt=t(n(),1),o(),et(),h(),re(),ae(),Q=i(),nt=`SynapseToastContainer`,rt=`SynapseToastContainerTop`,it=`SynapseToastContainerBottom`,$=(e,t,n={})=>{let r=he(`synToast-`),i=()=>{K.dismiss(r)},{title:a=void 0,primaryButtonConfig:o=void 0,secondaryButtonConfig:s=void 0,dismissOnPrimaryButtonClick:c=!1,dismissOnSecondaryButtonClick:l=!1}=n??{};if(o&&`onClick`in o&&c){let e=o.onClick;o.onClick=t=>{e(t),i()}}if(s&&`onClick`in s&&l){let e=s.onClick;s.onClick=t=>{e(t),i()}}let{autoCloseInMs:u=15e3}=n??{};return u===0&&(u=1/0),K((0,Q.jsx)(oe,{isGlobal:!1,onClose:i,variant:t??`info`,show:!0,title:a,description:e,primaryButtonConfig:o,secondaryButtonConfig:s}),{id:r,className:`SynapseToastMessage`,duration:u}),i};try{X.displayName=`ToastMessage`,X.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:`ToastMessage`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`text`,required:!0,tags:{},type:{name:`string`}},show:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`show`,required:!0,tags:{},type:{name:`boolean`}},autohide:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,name:`TypeLiteral`}],description:``,name:`autohide`,required:!0,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{Z.displayName=`SynapseToastContainer`,Z.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:`SynapseToastContainer`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{},tags:{}}}catch{}try{$.displayName=`displayToast`,$.__docgenInfo={description:`Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.`,displayName:`displayToast`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/ToastMessage/ToastMessage.tsx`,methods:[],props:{},tags:{param:`message - The description of the toast message.
variant - The type of toast message to display. Default 'info'.

In ToastMessageOptions:
autoCloseInMs - The amount of time in milliseconds to wait before automatically closing the toast. To prevent autoclose, set to 0 or Infinity. Default 15000.

The rest of the options params are undefined by default.`}}}catch{}})))()}export{g as a,h as c,at as i,X as n,he as o,$ as r,m as s,Z as t};