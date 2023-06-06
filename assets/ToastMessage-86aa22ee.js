import{j as S}from"./jsx-runtime-095bf462.js";import{R as B,r as p}from"./index-8db94870.js";import{F as he}from"./FullWidthAlert-81b4d296.js";import{T as be}from"./ButtonBase-808eaa85.js";import{_ as ye}from"./extends-98964cd2.js";import{_ as _e}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as Te}from"./inheritsLoose-c82a83d4.js";import{h as xe}from"./hasClass-ec9efd32.js";import{f as Ee,T as Se}from"./utils-fc362ac6.js";import{u as Ce}from"./uniqueId-4d05949d.js";function Oe(e,t){e.classList?e.classList.add(t):xe(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function q(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Ae(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=q(e.className,t):e.setAttribute("class",q(e.className&&e.className.baseVal||"",t))}var je=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Oe(t,n)})},L=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Ae(t,n)})},V=function(e){Te(t,e);function t(){for(var n,s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return n=e.call.apply(e,[this].concat(c))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(a,o){var u=n.resolveArguments(a,o),d=u[0],l=u[1];n.removeClasses(d,"exit"),n.addClass(d,l?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(a,o)},n.onEntering=function(a,o){var u=n.resolveArguments(a,o),d=u[0],l=u[1],v=l?"appear":"enter";n.addClass(d,v,"active"),n.props.onEntering&&n.props.onEntering(a,o)},n.onEntered=function(a,o){var u=n.resolveArguments(a,o),d=u[0],l=u[1],v=l?"appear":"enter";n.removeClasses(d,v),n.addClass(d,v,"done"),n.props.onEntered&&n.props.onEntered(a,o)},n.onExit=function(a){var o=n.resolveArguments(a),u=o[0];n.removeClasses(u,"appear"),n.removeClasses(u,"enter"),n.addClass(u,"exit","base"),n.props.onExit&&n.props.onExit(a)},n.onExiting=function(a){var o=n.resolveArguments(a),u=o[0];n.addClass(u,"exit","active"),n.props.onExiting&&n.props.onExiting(a)},n.onExited=function(a){var o=n.resolveArguments(a),u=o[0];n.removeClasses(u,"exit"),n.addClass(u,"exit","done"),n.props.onExited&&n.props.onExited(a)},n.resolveArguments=function(a,o){return n.props.nodeRef?[n.props.nodeRef.current,a]:[a,o]},n.getClassNames=function(a){var o=n.props.classNames,u=typeof o=="string",d=u&&o?o+"-":"",l=u?""+d+a:o[a],v=u?l+"-active":o[a+"Active"],g=u?l+"-done":o[a+"Done"];return{baseClassName:l,activeClassName:v,doneClassName:g}},n}var r=t.prototype;return r.addClass=function(s,c,i){var a=this.getClassNames(c)[i+"ClassName"],o=this.getClassNames("enter"),u=o.doneClassName;c==="appear"&&i==="done"&&u&&(a+=" "+u),i==="active"&&s&&Ee(s),a&&(this.appliedClasses[c][i]=a,je(s,a))},r.removeClasses=function(s,c){var i=this.appliedClasses[c],a=i.base,o=i.active,u=i.done;this.appliedClasses[c]={},a&&L(s,a),o&&L(s,o),u&&L(s,u)},r.render=function(){var s=this.props;s.classNames;var c=_e(s,["classNames"]);return B.createElement(Se,ye({},c,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(B.Component);V.defaultProps={classNames:""};V.propTypes={};const we=V;let Ne={data:""},$e=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ne,Pe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,De=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,T=(e,t)=>{let r="",n="",s="";for(let c in e){let i=e[c];c[0]=="@"?c[1]=="i"?r=c+" "+i+";":n+=c[1]=="f"?T(i,c):c+"{"+T(i,c[1]=="k"?"":t)+"}":typeof i=="object"?n+=T(i,t?t.replace(/([^,])+/g,a=>c.replace(/(^:.*)|([^,])+/g,o=>/&/.test(o)?o.replace(/&/g,a):a?a+" "+o:o)):c):i!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=T.p?T.p(c,i):c+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+n},O={},Z=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Z(e[r]);return t}return e},Re=(e,t,r,n,s)=>{let c=Z(e),i=O[c]||(O[c]=(a=>{let o=0,u=11;for(;o<a.length;)u=101*u+a.charCodeAt(o++)>>>0;return"go"+u})(c));if(!O[i]){let a=c!==e?e:(o=>{let u,d,l=[{}];for(;u=Pe.exec(o.replace(De,""));)u[4]?l.shift():u[3]?(d=u[3].replace(H," ").trim(),l.unshift(l[0][d]=l[0][d]||{})):l[0][u[1]]=u[2].replace(H," ").trim();return l[0]})(e);O[i]=T(s?{["@keyframes "+i]:a}:a,r?"":"."+i)}return((a,o,u)=>{o.data.indexOf(a)==-1&&(o.data=u?a+o.data:o.data+a)})(O[i],t,n),i},Ie=(e,t,r)=>e.reduce((n,s,c)=>{let i=t[c];if(i&&i.call){let a=i(r),o=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=o?"."+o:a&&typeof a=="object"?a.props?"":T(a,""):a===!1?"":a}return n+s+(i??"")},"");function M(e){let t=this||{},r=e.call?e(t.p):e;return Re(r.unshift?r.raw?Ie(r,[].slice.call(arguments,1),t.p):r.reduce((n,s)=>Object.assign(n,s&&s.call?s(t.p):s),{}):r,$e(t.target),t.g,t.o,t.k)}let J,z,F;M.bind({g:1});let _=M.bind({k:1});function Me(e,t,r,n){T.p=t,J=e,z=r,F=n}function x(e,t){let r=this||{};return function(){let n=arguments;function s(c,i){let a=Object.assign({},c),o=a.className||s.className;r.p=Object.assign({theme:z&&z()},a),r.o=/ *go\d+/.test(o),a.className=M.apply(r,n)+(o?" "+o:""),t&&(a.ref=i);let u=e;return e[0]&&(u=a.as||e,delete a.as),F&&u[0]&&F(a),J(u,a)}return t?t(s):s}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function h(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ke=function(t){return typeof t=="function"},I=function(t,r){return ke(t)?t(r):t},Ue=function(){var e=0;return function(){return(++e).toString()}}(),Le=function(t){return function(r){r&&setTimeout(function(){var n=r.getBoundingClientRect();t(n)})}},K=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),ze=20,m;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(m||(m={}));var P=new Map,W=function(t){if(!P.has(t)){var r=setTimeout(function(){P.delete(t),E({type:m.REMOVE_TOAST,toastId:t})},1e3);P.set(t,r)}},Fe=function(t){var r=P.get(t);r&&clearTimeout(r)},Ve=function e(t,r){switch(r.type){case m.ADD_TOAST:return f({},t,{toasts:[r.toast].concat(t.toasts).slice(0,ze)});case m.UPDATE_TOAST:return r.toast.id&&Fe(r.toast.id),f({},t,{toasts:t.toasts.map(function(i){return i.id===r.toast.id?f({},i,r.toast):i})});case m.UPSERT_TOAST:var n=r.toast;return t.toasts.find(function(i){return i.id===n.id})?e(t,{type:m.UPDATE_TOAST,toast:n}):e(t,{type:m.ADD_TOAST,toast:n});case m.DISMISS_TOAST:var s=r.toastId;return s?W(s):t.toasts.forEach(function(i){W(i.id)}),f({},t,{toasts:t.toasts.map(function(i){return i.id===s||s===void 0?f({},i,{visible:!1}):i})});case m.REMOVE_TOAST:return r.toastId===void 0?f({},t,{toasts:[]}):f({},t,{toasts:t.toasts.filter(function(i){return i.id!==r.toastId})});case m.START_PAUSE:return f({},t,{pausedAt:r.time});case m.END_PAUSE:var c=r.time-(t.pausedAt||0);return f({},t,{pausedAt:void 0,toasts:t.toasts.map(function(i){return f({},i,{pauseDuration:i.pauseDuration+c})})})}},D=[],R={toasts:[],pausedAt:void 0},E=function(t){R=Ve(R,t),D.forEach(function(r){r(R)})},Be={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},qe=function(t){t===void 0&&(t={});var r=p.useState(R),n=r[0],s=r[1];p.useEffect(function(){return D.push(s),function(){var i=D.indexOf(s);i>-1&&D.splice(i,1)}},[n]);var c=n.toasts.map(function(i){var a,o,u;return f({},t,t[i.type],i,{duration:i.duration||((a=t[i.type])==null?void 0:a.duration)||((o=t)==null?void 0:o.duration)||Be[i.type],style:f({},t.style,(u=t[i.type])==null?void 0:u.style,i.style)})});return f({},n,{toasts:c})},He=function(t,r,n){return r===void 0&&(r="blank"),f({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||Ue()})},A=function(t){return function(r,n){var s=He(r,t,n);return E({type:m.UPSERT_TOAST,toast:s}),s.id}},b=function(t,r){return A("blank")(t,r)};b.error=A("error");b.success=A("success");b.loading=A("loading");b.custom=A("custom");b.dismiss=function(e){E({type:m.DISMISS_TOAST,toastId:e})};b.remove=function(e){return E({type:m.REMOVE_TOAST,toastId:e})};b.promise=function(e,t,r){var n=b.loading(t.loading,f({},r,r==null?void 0:r.loading));return e.then(function(s){return b.success(I(t.success,s),f({id:n},r,r==null?void 0:r.success)),s}).catch(function(s){b.error(I(t.error,s),f({id:n},r,r==null?void 0:r.error))}),e};var We=function(t){var r=qe(t),n=r.toasts,s=r.pausedAt;p.useEffect(function(){if(!s){var i=Date.now(),a=n.map(function(o){if(o.duration!==1/0){var u=(o.duration||0)+o.pauseDuration-(i-o.createdAt);if(u<0){o.visible&&b.dismiss(o.id);return}return setTimeout(function(){return b.dismiss(o.id)},u)}});return function(){a.forEach(function(o){return o&&clearTimeout(o)})}}},[n,s]);var c=p.useMemo(function(){return{startPause:function(){E({type:m.START_PAUSE,time:Date.now()})},endPause:function(){s&&E({type:m.END_PAUSE,time:Date.now()})},updateHeight:function(a,o){return E({type:m.UPDATE_TOAST,toast:{id:a,height:o}})},calculateOffset:function(a,o){var u,d=o||{},l=d.reverseOrder,v=l===void 0?!1:l,g=d.gutter,j=g===void 0?8:g,w=d.defaultPosition,C=n.filter(function(y){return(y.position||w)===(a.position||w)&&y.height}),k=C.findIndex(function(y){return y.id===a.id}),N=C.filter(function(y,U){return U<k&&y.visible}).length,ge=(u=C.filter(function(y){return y.visible})).slice.apply(u,v?[N+1]:[0,N]).reduce(function(y,U){return y+(U.height||0)+j},0);return ge}}},[n,s]);return{toasts:n,handlers:c}};function X(){var e=h([`
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
`]);return X=function(){return e},e}function ee(){var e=h([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return ee=function(){return e},e}function te(){var e=h([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return te=function(){return e},e}function ne(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return ne=function(){return e},e}var Ge=_(ne()),Qe=_(te()),Ye=_(ee()),Ze=x("div")(X(),function(e){return e.primary||"#ff4b4b"},Ge,Qe,function(e){return e.secondary||"#fff"},Ye);function re(){var e=h([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return re=function(){return e},e}function ae(){var e=h([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return ae=function(){return e},e}var Je=_(ae()),Ke=x("div")(re(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},Je);function ie(){var e=h([`
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
`]);return ie=function(){return e},e}function oe(){var e=h([`
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
}`]);return oe=function(){return e},e}function se(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return se=function(){return e},e}var Xe=_(se()),et=_(oe()),tt=x("div")(ie(),function(e){return e.primary||"#61d345"},Xe,et,function(e){return e.secondary||"#fff"});function ce(){var e=h([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return ce=function(){return e},e}function ue(){var e=h([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return ue=function(){return e},e}function le(){var e=h([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return le=function(){return e},e}function de(){var e=h([`
  position: absolute;
`]);return de=function(){return e},e}var nt=x("div")(de()),rt=x("div")(le()),at=_(ue()),it=x("div")(ce(),at),ot=function(t){var r=t.toast,n=r.icon,s=r.type,c=r.iconTheme;return n!==void 0?typeof n=="string"?p.createElement(it,null,n):n:s==="blank"?null:p.createElement(rt,null,p.createElement(Ke,Object.assign({},c)),s!=="loading"&&p.createElement(nt,null,s==="error"?p.createElement(Ze,Object.assign({},c)):p.createElement(tt,Object.assign({},c))))};function fe(){var e=h([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return fe=function(){return e},e}function pe(){var e=h([`
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
`]);return pe=function(){return e},e}var st=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},ct=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},ut="0%{opacity:0;} 100%{opacity:1;}",lt="0%{opacity:1;} 100%{opacity:0;}",dt=x("div",p.forwardRef)(pe()),ft=x("div")(fe()),pt=function(t,r){var n=t.includes("top"),s=n?1:-1,c=K()?[ut,lt]:[st(s),ct(s)],i=c[0],a=c[1];return{animation:r?_(i)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":_(a)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},me=p.memo(function(e){var t=e.toast,r=e.position,n=e.style,s=e.children,c=t!=null&&t.height?pt(t.position||r||"top-center",t.visible):{opacity:0},i=p.createElement(ot,{toast:t}),a=p.createElement(ft,Object.assign({},t.ariaProps),I(t.message,t));return p.createElement(dt,{className:t.className,style:f({},c,n,t.style)},typeof s=="function"?s({icon:i,message:a}):p.createElement(p.Fragment,null,i,a))});function ve(){var e=h([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return ve=function(){return e},e}Me(p.createElement);var mt=function(t,r){var n=t.includes("top"),s=n?{top:0}:{bottom:0},c=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return f({left:0,right:0,display:"flex",position:"absolute",transition:K()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+r*(n?1:-1)+"px)"},s,c)},vt=M(ve()),$=16,gt=function(t){var r=t.reverseOrder,n=t.position,s=n===void 0?"top-center":n,c=t.toastOptions,i=t.gutter,a=t.children,o=t.containerStyle,u=t.containerClassName,d=We(c),l=d.toasts,v=d.handlers;return p.createElement("div",{style:f({position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none"},o),className:u,onMouseEnter:v.startPause,onMouseLeave:v.endPause},l.map(function(g){var j=g.position||s,w=v.calculateOffset(g,{reverseOrder:r,gutter:i,defaultPosition:s}),C=mt(j,w),k=g.height?void 0:Le(function(N){v.updateHeight(g.id,N.height)});return p.createElement("div",{ref:k,className:g.visible?vt:"",key:g.id,style:C},g.type==="custom"?I(g.message,g):a?a(g):p.createElement(me,{toast:g,position:j}))}))};const G=({text:e,show:t,autohide:r})=>S(be,{children:t&&S(we,{classNames:"SRC-card",timeout:r?{enter:500,exit:300}:{},children:S("div",{className:"SRC-modal",children:e})})}),Q=()=>S(gt,{containerClassName:"SynapseToastContainer",position:"bottom-center",children:e=>S(me,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),Y=(e,t,r={})=>{const n=Ce("synToast-"),s=()=>{b.dismiss(n)},{title:c=void 0,primaryButtonConfig:i=void 0,secondaryButtonConfig:a=void 0,dismissOnPrimaryButtonClick:o=!1,dismissOnSecondaryButtonClick:u=!1}=r;if(i&&"onClick"in i&&o){const l=i.onClick;i.onClick=v=>{l(v),s()}}if(a&&"onClick"in a&&u){const l=a.onClick;a.onClick=v=>{l(v),s()}}let{autoCloseInMs:d=15e3}=r;d===0&&(d=1/0),b(S(he,{isGlobal:!1,onClose:s,variant:t??"info",show:!0,title:c,description:e,primaryButtonConfig:i,secondaryButtonConfig:a}),{id:n,className:"SynapseToastMessage",duration:d})};try{G.displayName="ToastMessage",G.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}}}catch{}try{Q.displayName="SynapseToastContainer",Q.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}}}catch{}try{Y.displayName="displayToast",Y.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}}}catch{}export{we as C,Q as S,G as T,Y as d};
//# sourceMappingURL=ToastMessage-86aa22ee.js.map
