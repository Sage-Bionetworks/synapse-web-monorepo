import{j as x}from"./jsx-runtime-Du8NFWEI.js";import{r as d}from"./index-Dl6G-zuu.js";import{F as pe}from"./FullWidthAlert-xeBFwHL5.js";import{T as me}from"./ButtonBase-5SeL_6IU.js";import{C as ve}from"./CSSTransition-Bd10BpAY.js";import{u as ge}from"./uniqueId-DePWDRrE.js";let ye={data:""},he=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ye,be=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Te=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,_=(e,t)=>{let n="",a="",o="";for(let s in e){let r=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+r+";":a+=s[1]=="f"?_(r,s):s+"{"+_(r,s[1]=="k"?"":t)+"}":typeof r=="object"?a+=_(r,t?t.replace(/([^,])+/g,i=>s.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,i):i?i+" "+u:u)):s):r!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=_.p?_.p(s,r):s+":"+r+";")}return n+(t&&o?t+"{"+o+"}":o)+a},A={},W=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+W(e[n]);return t}return e},_e=(e,t,n,a,o)=>{let s=W(e),r=A[s]||(A[s]=(i=>{let u=0,c=11;for(;u<i.length;)c=101*c+i.charCodeAt(u++)>>>0;return"go"+c})(s));if(!A[r]){let i=s!==e?e:(u=>{let c,v,m=[{}];for(;c=be.exec(u.replace(Te,""));)c[4]?m.shift():c[3]?(v=c[3].replace(L," ").trim(),m.unshift(m[0][v]=m[0][v]||{})):m[0][c[1]]=c[2].replace(L," ").trim();return m[0]})(e);A[r]=_(o?{["@keyframes "+r]:i}:i,n?"":"."+r)}return((i,u,c)=>{u.data.indexOf(i)==-1&&(u.data=c?i+u.data:u.data+i)})(A[r],t,a),r},Se=(e,t,n)=>e.reduce((a,o,s)=>{let r=t[s];if(r&&r.call){let i=r(n),u=i&&i.props&&i.props.className||/^go/.test(i)&&i;r=u?"."+u:i&&typeof i=="object"?i.props?"":_(i,""):i===!1?"":i}return a+o+(r??"")},"");function M(e){let t=this||{},n=e.call?e(t.p):e;return _e(n.unshift?n.raw?Se(n,[].slice.call(arguments,1),t.p):n.reduce((a,o)=>Object.assign(a,o&&o.call?o(t.p):o),{}):n,he(t.target),t.g,t.o,t.k)}let G,z,F;M.bind({g:1});let T=M.bind({k:1});function Oe(e,t,n,a){_.p=t,G=e,z=n,F=a}function S(e,t){let n=this||{};return function(){let a=arguments;function o(s,r){let i=Object.assign({},s),u=i.className||o.className;n.p=Object.assign({theme:z&&z()},i),n.o=/ *go\d+/.test(u),i.className=M.apply(n,a)+(u?" "+u:""),t&&(i.ref=r);let c=e;return e[0]&&(c=i.as||e,delete i.as),F&&c[0]&&F(i),G(c,i)}return t?t(o):o}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var xe=function(t){return typeof t=="function"},N=function(t,n){return xe(t)?t(n):t},je=function(){var e=0;return function(){return(++e).toString()}}(),Ae=function(t){return function(n){n&&setTimeout(function(){var a=n.getBoundingClientRect();t(a)})}},Q=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),Ee=20,f;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(f||(f={}));var I=new Map,B=function(t){if(!I.has(t)){var n=setTimeout(function(){I.delete(t),O({type:f.REMOVE_TOAST,toastId:t})},1e3);I.set(t,n)}},we=function(t){var n=I.get(t);n&&clearTimeout(n)},Ce=function e(t,n){switch(n.type){case f.ADD_TOAST:return l({},t,{toasts:[n.toast].concat(t.toasts).slice(0,Ee)});case f.UPDATE_TOAST:return n.toast.id&&we(n.toast.id),l({},t,{toasts:t.toasts.map(function(r){return r.id===n.toast.id?l({},r,n.toast):r})});case f.UPSERT_TOAST:var a=n.toast;return t.toasts.find(function(r){return r.id===a.id})?e(t,{type:f.UPDATE_TOAST,toast:a}):e(t,{type:f.ADD_TOAST,toast:a});case f.DISMISS_TOAST:var o=n.toastId;return o?B(o):t.toasts.forEach(function(r){B(r.id)}),l({},t,{toasts:t.toasts.map(function(r){return r.id===o||o===void 0?l({},r,{visible:!1}):r})});case f.REMOVE_TOAST:return n.toastId===void 0?l({},t,{toasts:[]}):l({},t,{toasts:t.toasts.filter(function(r){return r.id!==n.toastId})});case f.START_PAUSE:return l({},t,{pausedAt:n.time});case f.END_PAUSE:var s=n.time-(t.pausedAt||0);return l({},t,{pausedAt:void 0,toasts:t.toasts.map(function(r){return l({},r,{pauseDuration:r.pauseDuration+s})})})}},R=[],k={toasts:[],pausedAt:void 0},O=function(t){k=Ce(k,t),R.forEach(function(n){n(k)})},Pe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},De=function(t){t===void 0&&(t={});var n=d.useState(k),a=n[0],o=n[1];d.useEffect(function(){return R.push(o),function(){var r=R.indexOf(o);r>-1&&R.splice(r,1)}},[a]);var s=a.toasts.map(function(r){var i,u,c;return l({},t,t[r.type],r,{duration:r.duration||((i=t[r.type])==null?void 0:i.duration)||((u=t)==null?void 0:u.duration)||Pe[r.type],style:l({},t.style,(c=t[r.type])==null?void 0:c.style,r.style)})});return l({},a,{toasts:s})},Ie=function(t,n,a){return n===void 0&&(n="blank"),l({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},a,{id:(a==null?void 0:a.id)||je()})},E=function(t){return function(n,a){var o=Ie(n,t,a);return O({type:f.UPSERT_TOAST,toast:o}),o.id}},y=function(t,n){return E("blank")(t,n)};y.error=E("error");y.success=E("success");y.loading=E("loading");y.custom=E("custom");y.dismiss=function(e){O({type:f.DISMISS_TOAST,toastId:e})};y.remove=function(e){return O({type:f.REMOVE_TOAST,toastId:e})};y.promise=function(e,t,n){var a=y.loading(t.loading,l({},n,n==null?void 0:n.loading));return e.then(function(o){return y.success(N(t.success,o),l({id:a},n,n==null?void 0:n.success)),o}).catch(function(o){y.error(N(t.error,o),l({id:a},n,n==null?void 0:n.error))}),e};var Re=function(t){var n=De(t),a=n.toasts,o=n.pausedAt;d.useEffect(function(){if(!o){var r=Date.now(),i=a.map(function(u){if(u.duration!==1/0){var c=(u.duration||0)+u.pauseDuration-(r-u.createdAt);if(c<0){u.visible&&y.dismiss(u.id);return}return setTimeout(function(){return y.dismiss(u.id)},c)}});return function(){i.forEach(function(u){return u&&clearTimeout(u)})}}},[a,o]);var s=d.useMemo(function(){return{startPause:function(){O({type:f.START_PAUSE,time:Date.now()})},endPause:function(){o&&O({type:f.END_PAUSE,time:Date.now()})},updateHeight:function(i,u){return O({type:f.UPDATE_TOAST,toast:{id:i,height:u}})},calculateOffset:function(i,u){var c,v=u||{},m=v.reverseOrder,h=m===void 0?!1:m,g=v.gutter,w=g===void 0?8:g,C=v.defaultPosition,j=a.filter(function(b){return(b.position||C)===(i.position||C)&&b.height}),$=j.findIndex(function(b){return b.id===i.id}),P=j.filter(function(b,U){return U<$&&b.visible}).length,fe=(c=j.filter(function(b){return b.visible})).slice.apply(c,h?[P+1]:[0,P]).reduce(function(b,U){return b+(U.height||0)+w},0);return fe}}},[a,o]);return{toasts:a,handlers:s}};function Y(){var e=p([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: `,`;
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`]);return Y=function(){return e},e}function Z(){var e=p([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return Z=function(){return e},e}function J(){var e=p([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return J=function(){return e},e}function K(){var e=p([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return K=function(){return e},e}var ke=T(K()),Ne=T(J()),Me=T(Z()),$e=S("div")(Y(),function(e){return e.primary||"#ff4b4b"},ke,Ne,function(e){return e.secondary||"#fff"},Me);function X(){var e=p([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return X=function(){return e},e}function ee(){var e=p([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return ee=function(){return e},e}var Ue=T(ee()),ze=S("div")(X(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},Ue);function te(){var e=p([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: `,` 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: `,`;
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`]);return te=function(){return e},e}function ne(){var e=p([`
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
}`]);return ne=function(){return e},e}function re(){var e=p([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return re=function(){return e},e}var Fe=T(re()),Le=T(ne()),Be=S("div")(te(),function(e){return e.primary||"#61d345"},Fe,Le,function(e){return e.secondary||"#fff"});function ae(){var e=p([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return ae=function(){return e},e}function oe(){var e=p([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return oe=function(){return e},e}function ie(){var e=p([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return ie=function(){return e},e}function se(){var e=p([`
  position: absolute;
`]);return se=function(){return e},e}var Ve=S("div")(se()),qe=S("div")(ie()),He=T(oe()),We=S("div")(ae(),He),Ge=function(t){var n=t.toast,a=n.icon,o=n.type,s=n.iconTheme;return a!==void 0?typeof a=="string"?d.createElement(We,null,a):a:o==="blank"?null:d.createElement(qe,null,d.createElement(ze,Object.assign({},s)),o!=="loading"&&d.createElement(Ve,null,o==="error"?d.createElement($e,Object.assign({},s)):d.createElement(Be,Object.assign({},s))))};function ue(){var e=p([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return ue=function(){return e},e}function ce(){var e=p([`
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
`]);return ce=function(){return e},e}var Qe=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},Ye=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},Ze="0%{opacity:0;} 100%{opacity:1;}",Je="0%{opacity:1;} 100%{opacity:0;}",Ke=S("div",d.forwardRef)(ce()),Xe=S("div")(ue()),et=function(t,n){var a=t.includes("top"),o=a?1:-1,s=Q()?[Ze,Je]:[Qe(o),Ye(o)],r=s[0],i=s[1];return{animation:n?T(r)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":T(i)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},le=d.memo(function(e){var t=e.toast,n=e.position,a=e.style,o=e.children,s=t!=null&&t.height?et(t.position||n||"top-center",t.visible):{opacity:0},r=d.createElement(Ge,{toast:t}),i=d.createElement(Xe,Object.assign({},t.ariaProps),N(t.message,t));return d.createElement(Ke,{className:t.className,style:l({},s,a,t.style)},typeof o=="function"?o({icon:r,message:i}):d.createElement(d.Fragment,null,r,i))});function de(){var e=p([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return de=function(){return e},e}Oe(d.createElement);var tt=function(t,n){var a=t.includes("top"),o=a?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return l({left:0,right:0,display:"flex",position:"absolute",transition:Q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(a?1:-1)+"px)"},o,s)},nt=M(de()),D=16,rt=function(t){var n=t.reverseOrder,a=t.position,o=a===void 0?"top-center":a,s=t.toastOptions,r=t.gutter,i=t.children,u=t.containerStyle,c=t.containerClassName,v=Re(s),m=v.toasts,h=v.handlers;return d.createElement("div",{style:l({position:"fixed",zIndex:9999,top:D,left:D,right:D,bottom:D,pointerEvents:"none"},u),className:c,onMouseEnter:h.startPause,onMouseLeave:h.endPause},m.map(function(g){var w=g.position||o,C=h.calculateOffset(g,{reverseOrder:n,gutter:r,defaultPosition:o}),j=tt(w,C),$=g.height?void 0:Ae(function(P){h.updateHeight(g.id,P.height)});return d.createElement("div",{ref:$,className:g.visible?nt:"",key:g.id,style:j},g.type==="custom"?N(g.message,g):i?i(g):d.createElement(le,{toast:g,position:w}))}))};const V=({text:e,show:t,autohide:n})=>x.jsx(me,{children:t&&x.jsx(ve,{classNames:"SRC-card",timeout:n?{enter:500,exit:300}:{},children:x.jsx("div",{className:"SRC-modal",children:e})})}),q=()=>x.jsx(rt,{containerClassName:"SynapseToastContainer",position:"bottom-center",children:e=>x.jsx(le,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),H=(e,t,n={})=>{const a=ge("synToast-"),o=()=>{y.dismiss(a)},{title:s=void 0,primaryButtonConfig:r=void 0,secondaryButtonConfig:i=void 0,dismissOnPrimaryButtonClick:u=!1,dismissOnSecondaryButtonClick:c=!1}=n;if(r&&"onClick"in r&&u){const m=r.onClick;r.onClick=h=>{m(h),o()}}if(i&&"onClick"in i&&c){const m=i.onClick;i.onClick=h=>{m(h),o()}}let{autoCloseInMs:v=15e3}=n;return v===0&&(v=1/0),y(x.jsx(pe,{isGlobal:!1,onClose:o,variant:t??"info",show:!0,title:s,description:e,primaryButtonConfig:r,secondaryButtonConfig:i}),{id:a,className:"SynapseToastMessage",duration:v}),o};try{V.displayName="ToastMessage",V.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}}}catch{}try{q.displayName="SynapseToastContainer",q.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}}}catch{}try{H.displayName="displayToast",H.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}}}catch{}export{q as S,V as T,H as d};
