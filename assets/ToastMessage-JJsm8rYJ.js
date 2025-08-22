import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DsA_Gkw7.js";import{F as B}from"./FullWidthAlert-L08Yz2at.js";import{u as H}from"./uniqueId-BnQ2DVyE.js";import{T as L}from"./ButtonBase-vDOhooW8.js";import{C as U}from"./CSSTransition-CZBNTGEE.js";let V={data:""},G=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||V,W=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Y=/\/\*[^]*?\*\/|  +/g,O=/\n+/g,b=(e,t)=>{let s="",o="",n="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?s=a+" "+i+";":o+=a[1]=="f"?b(i,a):a+"{"+b(i,a[1]=="k"?"":t)+"}":typeof i=="object"?o+=b(i,t?t.replace(/([^,])+/g,r=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,r):r?r+" "+l:l)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(a,i):a+":"+i+";")}return s+(t&&n?t+"{"+n+"}":n)+o},g={},M=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+M(e[s]);return t}return e},Z=(e,t,s,o,n)=>{let a=M(e),i=g[a]||(g[a]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(a));if(!g[i]){let l=a!==e?e:(c=>{let p,f,m=[{}];for(;p=W.exec(c.replace(Y,""));)p[4]?m.shift():p[3]?(f=p[3].replace(O," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][p[1]]=p[2].replace(O," ").trim();return m[0]})(e);g[i]=b(n?{["@keyframes "+i]:l}:l,s?"":"."+i)}let r=s&&g.g?g.g:null;return s&&(g.g=g[i]),((l,c,p,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(g[i],t,o,r),i},J=(e,t,s)=>e.reduce((o,n,a)=>{let i=t[a];if(i&&i.call){let r=i(s),l=r&&r.props&&r.props.className||/^go/.test(r)&&r;i=l?"."+l:r&&typeof r=="object"?r.props?"":b(r,""):r===!1?"":r}return o+n+(i??"")},"");function $(e){let t=this||{},s=e.call?e(t.p):e;return Z(s.unshift?s.raw?J(s,[].slice.call(arguments,1),t.p):s.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):s,G(t.target),t.g,t.o,t.k)}let P,S,D;$.bind({g:1});let h=$.bind({k:1});function K(e,t,s,o){b.p=t,P=e,S=s,D=o}function v(e,t){let s=this||{};return function(){let o=arguments;function n(a,i){let r=Object.assign({},a),l=r.className||n.className;s.p=Object.assign({theme:S&&S()},r),s.o=/ *go\d+/.test(l),r.className=$.apply(s,o)+(l?" "+l:"");let c=e;return e[0]&&(c=r.as||e,delete r.as),D&&c[0]&&D(r),P(c,r)}return t?t(n):n}}var X=e=>typeof e=="function",N=(e,t)=>X(e)?e(t):e,Q=(()=>{let e=0;return()=>(++e).toString()})(),R=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ee=20,F=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ee)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:s}=t;return F(e,{type:e.toasts.find(a=>a.id===s.id)?1:0,toast:s});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},T=[],x={toasts:[],pausedAt:void 0},w=e=>{x=F(x,e),T.forEach(t=>{t(x)})},te={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ae=(e={})=>{let[t,s]=d.useState(x),o=d.useRef(x);d.useEffect(()=>(o.current!==x&&s(x),T.push(s),()=>{let a=T.indexOf(s);a>-1&&T.splice(a,1)}),[]);let n=t.toasts.map(a=>{var i,r,l;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((i=e[a.type])==null?void 0:i.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((r=e[a.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||te[a.type],style:{...e.style,...(l=e[a.type])==null?void 0:l.style,...a.style}}});return{...t,toasts:n}},se=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Q()}),k=e=>(t,s)=>{let o=se(t,e,s);return w({type:2,toast:o}),o.id},u=(e,t)=>k("blank")(e,t);u.error=k("error");u.success=k("success");u.loading=k("loading");u.custom=k("custom");u.dismiss=e=>{w({type:3,toastId:e})};u.remove=e=>w({type:4,toastId:e});u.promise=(e,t,s)=>{let o=u.loading(t.loading,{...s,...s==null?void 0:s.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let a=t.success?N(t.success,n):void 0;return a?u.success(a,{id:o,...s,...s==null?void 0:s.success}):u.dismiss(o),n}).catch(n=>{let a=t.error?N(t.error,n):void 0;a?u.error(a,{id:o,...s,...s==null?void 0:s.error}):u.dismiss(o)}),e};var re=(e,t)=>{w({type:1,toast:{id:e,height:t}})},oe=()=>{w({type:5,time:Date.now()})},_=new Map,ie=1e3,ne=(e,t=ie)=>{if(_.has(e))return;let s=setTimeout(()=>{_.delete(e),w({type:4,toastId:e})},t);_.set(e,s)},le=e=>{let{toasts:t,pausedAt:s}=ae(e);d.useEffect(()=>{if(s)return;let a=Date.now(),i=t.map(r=>{if(r.duration===1/0)return;let l=(r.duration||0)+r.pauseDuration-(a-r.createdAt);if(l<0){r.visible&&u.dismiss(r.id);return}return setTimeout(()=>u.dismiss(r.id),l)});return()=>{i.forEach(r=>r&&clearTimeout(r))}},[t,s]);let o=d.useCallback(()=>{s&&w({type:6,time:Date.now()})},[s]),n=d.useCallback((a,i)=>{let{reverseOrder:r=!1,gutter:l=8,defaultPosition:c}=i||{},p=t.filter(y=>(y.position||c)===(a.position||c)&&y.height),f=p.findIndex(y=>y.id===a.id),m=p.filter((y,j)=>j<f&&y.visible).length;return p.filter(y=>y.visible).slice(...r?[m+1]:[0,m]).reduce((y,j)=>y+(j.height||0)+l,0)},[t]);return d.useEffect(()=>{t.forEach(a=>{if(a.dismissed)ne(a.id,a.removeDelay);else{let i=_.get(a.id);i&&(clearTimeout(i),_.delete(a.id))}})},[t]),{toasts:t,handlers:{updateHeight:re,startPause:oe,endPause:o,calculateOffset:n}}},ce=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,pe=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ue=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${pe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,me=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,fe=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${me} 1s linear infinite;
`,ye=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ge=h`
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
}`,he=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ye} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ge} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,be=v("div")`
  position: absolute;
`,ve=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xe=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,we=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ce=({toast:e})=>{let{icon:t,type:s,iconTheme:o}=e;return t!==void 0?typeof t=="string"?d.createElement(we,null,t):t:s==="blank"?null:d.createElement(ve,null,d.createElement(fe,{...o}),s!=="loading"&&d.createElement(be,null,s==="error"?d.createElement(ue,{...o}):d.createElement(he,{...o})))},_e=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ke=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",Te="0%{opacity:1;} 100%{opacity:0;}",Ne=v("div")`
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
`,$e=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,je=(e,t)=>{let s=e.includes("top")?1:-1,[o,n]=R()?[Ee,Te]:[_e(s),ke(s)];return{animation:t?`${h(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},q=d.memo(({toast:e,position:t,style:s,children:o})=>{let n=e.height?je(e.position||t||"top-center",e.visible):{opacity:0},a=d.createElement(Ce,{toast:e}),i=d.createElement($e,{...e.ariaProps},N(e.message,e));return d.createElement(Ne,{className:e.className,style:{...n,...s,...e.style}},typeof o=="function"?o({icon:a,message:i}):d.createElement(d.Fragment,null,a,i))});K(d.createElement);var Se=({id:e,className:t,style:s,onHeightUpdate:o,children:n})=>{let a=d.useCallback(i=>{if(i){let r=()=>{let l=i.getBoundingClientRect().height;o(e,l)};r(),new MutationObserver(r).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return d.createElement("div",{ref:a,className:t,style:s},n)},De=(e,t)=>{let s=e.includes("top"),o=s?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...o,...n}},Oe=$`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:o,children:n,containerStyle:a,containerClassName:i})=>{let{toasts:r,handlers:l}=le(s);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},r.map(c=>{let p=c.position||t,f=l.calculateOffset(c,{reverseOrder:e,gutter:o,defaultPosition:t}),m=De(p,f);return d.createElement(Se,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Oe:"",style:m},c.type==="custom"?N(c.message,c):n?n(c):d.createElement(q,{toast:c,position:p}))}))};function I({text:e,show:t,autohide:s}){const o=d.useRef(null);return C.jsx(L,{children:t&&C.jsx(U,{nodeRef:o,classNames:"SRC-card",timeout:s?{enter:500,exit:300}:{},children:C.jsx("div",{className:"SRC-modal",ref:o,children:e})})})}function z(){return C.jsx(Ie,{containerClassName:"SynapseToastContainer",position:"bottom-center",children:e=>C.jsx(q,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})})}const A=(e,t,s={})=>{const o=H("synToast-"),n=()=>{u.dismiss(o)},{title:a=void 0,primaryButtonConfig:i=void 0,secondaryButtonConfig:r=void 0,dismissOnPrimaryButtonClick:l=!1,dismissOnSecondaryButtonClick:c=!1}=s;if(i&&"onClick"in i&&l){const f=i.onClick;i.onClick=m=>{f(m),n()}}if(r&&"onClick"in r&&c){const f=r.onClick;r.onClick=m=>{f(m),n()}}let{autoCloseInMs:p=15e3}=s;return p===0&&(p=1/0),u(C.jsx(B,{isGlobal:!1,onClose:n,variant:t??"info",show:!0,title:a,description:e,primaryButtonConfig:i,secondaryButtonConfig:r}),{id:o,className:"SynapseToastMessage",duration:p}),n};try{I.displayName="ToastMessage",I.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}}}catch{}try{z.displayName="SynapseToastContainer",z.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}}}catch{}try{A.displayName="displayToast",A.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}}}catch{}export{z as S,I as T,u as c,A as d};
