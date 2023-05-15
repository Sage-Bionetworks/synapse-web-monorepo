import{j as O}from"./jsx-runtime-095bf462.js";import{r as d,R as C}from"./index-8db94870.js";import{F as Se}from"./FullWidthAlert-93fbddb4.js";import{_ as ee}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as te}from"./extends-98964cd2.js";import{_ as Ce}from"./assertThisInitialized-081f9914.js";import{_ as ne}from"./inheritsLoose-c82a83d4.js";import{T as Oe,a as H}from"./Alert-fbdd8ab9.js";import{h as Ae}from"./hasClass-ec9efd32.js";import{u as je}from"./uniqueId-4d05949d.js";function Ne(e,t){e.classList?e.classList.add(t):Ae(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Q(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function we(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Q(e.className,t):e.setAttribute("class",Q(e.className&&e.className.baseVal||"",t))}let Pe={data:""},$e=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Pe,De=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Re=/\/\*[^]*?\*\/|  +/g,Y=/\n+/g,T=(e,t)=>{let r="",n="",o="";for(let u in e){let a=e[u];u[0]=="@"?u[1]=="i"?r=u+" "+a+";":n+=u[1]=="f"?T(a,u):u+"{"+T(a,u[1]=="k"?"":t)+"}":typeof a=="object"?n+=T(a,t?t.replace(/([^,])+/g,i=>u.replace(/(^:.*)|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,i):i?i+" "+s:s)):u):a!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=T.p?T.p(u,a):u+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},j={},re=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+re(e[r]);return t}return e},Me=(e,t,r,n,o)=>{let u=re(e),a=j[u]||(j[u]=(i=>{let s=0,c=11;for(;s<i.length;)c=101*c+i.charCodeAt(s++)>>>0;return"go"+c})(u));if(!j[a]){let i=u!==e?e:(s=>{let c,l,f=[{}];for(;c=De.exec(s.replace(Re,""));)c[4]?f.shift():c[3]?(l=c[3].replace(Y," ").trim(),f.unshift(f[0][l]=f[0][l]||{})):f[0][c[1]]=c[2].replace(Y," ").trim();return f[0]})(e);j[a]=T(o?{["@keyframes "+a]:i}:i,r?"":"."+a)}return((i,s,c)=>{s.data.indexOf(i)==-1&&(s.data=c?i+s.data:s.data+i)})(j[a],t,n),a},Ie=(e,t,r)=>e.reduce((n,o,u)=>{let a=t[u];if(a&&a.call){let i=a(r),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&typeof i=="object"?i.props?"":T(i,""):i===!1?"":i}return n+o+(a??"")},"");function U(e){let t=this||{},r=e.call?e(t.p):e;return Me(r.unshift?r.raw?Ie(r,[].slice.call(arguments,1),t.p):r.reduce((n,o)=>Object.assign(n,o&&o.call?o(t.p):o),{}):r,$e(t.target),t.g,t.o,t.k)}let ae,z,B;U.bind({g:1});let E=U.bind({k:1});function ke(e,t,r,n){T.p=t,ae=e,z=r,B=n}function _(e,t){let r=this||{};return function(){let n=arguments;function o(u,a){let i=Object.assign({},u),s=i.className||o.className;r.p=Object.assign({theme:z&&z()},i),r.o=/ *go\d+/.test(s),i.className=U.apply(r,n)+(s?" "+s:""),t&&(i.ref=a);let c=e;return e[0]&&(c=i.as||e,delete i.as),B&&c[0]&&B(i),ae(c,i)}return t?t(o):o}}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function g(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Ue=function(t){return typeof t=="function"},k=function(t,r){return Ue(t)?t(r):t},Ve=function(){var e=0;return function(){return(++e).toString()}}(),Fe=function(t){return function(r){r&&setTimeout(function(){var n=r.getBoundingClientRect();t(n)})}},ie=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),Le=20,m;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(m||(m={}));var R=new Map,Z=function(t){if(!R.has(t)){var r=setTimeout(function(){R.delete(t),S({type:m.REMOVE_TOAST,toastId:t})},1e3);R.set(t,r)}},ze=function(t){var r=R.get(t);r&&clearTimeout(r)},Be=function e(t,r){switch(r.type){case m.ADD_TOAST:return p({},t,{toasts:[r.toast].concat(t.toasts).slice(0,Le)});case m.UPDATE_TOAST:return r.toast.id&&ze(r.toast.id),p({},t,{toasts:t.toasts.map(function(a){return a.id===r.toast.id?p({},a,r.toast):a})});case m.UPSERT_TOAST:var n=r.toast;return t.toasts.find(function(a){return a.id===n.id})?e(t,{type:m.UPDATE_TOAST,toast:n}):e(t,{type:m.ADD_TOAST,toast:n});case m.DISMISS_TOAST:var o=r.toastId;return o?Z(o):t.toasts.forEach(function(a){Z(a.id)}),p({},t,{toasts:t.toasts.map(function(a){return a.id===o||o===void 0?p({},a,{visible:!1}):a})});case m.REMOVE_TOAST:return r.toastId===void 0?p({},t,{toasts:[]}):p({},t,{toasts:t.toasts.filter(function(a){return a.id!==r.toastId})});case m.START_PAUSE:return p({},t,{pausedAt:r.time});case m.END_PAUSE:var u=r.time-(t.pausedAt||0);return p({},t,{pausedAt:void 0,toasts:t.toasts.map(function(a){return p({},a,{pauseDuration:a.pauseDuration+u})})})}},M=[],I={toasts:[],pausedAt:void 0},S=function(t){I=Be(I,t),M.forEach(function(r){r(I)})},We={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},qe=function(t){t===void 0&&(t={});var r=d.useState(I),n=r[0],o=r[1];d.useEffect(function(){return M.push(o),function(){var a=M.indexOf(o);a>-1&&M.splice(a,1)}},[n]);var u=n.toasts.map(function(a){var i,s,c;return p({},t,t[a.type],a,{duration:a.duration||((i=t[a.type])==null?void 0:i.duration)||((s=t)==null?void 0:s.duration)||We[a.type],style:p({},t.style,(c=t[a.type])==null?void 0:c.style,a.style)})});return p({},n,{toasts:u})},Ge=function(t,r,n){return r===void 0&&(r="blank"),p({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||Ve()})},N=function(t){return function(r,n){var o=Ge(r,t,n);return S({type:m.UPSERT_TOAST,toast:o}),o.id}},b=function(t,r){return N("blank")(t,r)};b.error=N("error");b.success=N("success");b.loading=N("loading");b.custom=N("custom");b.dismiss=function(e){S({type:m.DISMISS_TOAST,toastId:e})};b.remove=function(e){return S({type:m.REMOVE_TOAST,toastId:e})};b.promise=function(e,t,r){var n=b.loading(t.loading,p({},r,r==null?void 0:r.loading));return e.then(function(o){return b.success(k(t.success,o),p({id:n},r,r==null?void 0:r.success)),o}).catch(function(o){b.error(k(t.error,o),p({id:n},r,r==null?void 0:r.error))}),e};var He=function(t){var r=qe(t),n=r.toasts,o=r.pausedAt;d.useEffect(function(){if(!o){var a=Date.now(),i=n.map(function(s){if(s.duration!==1/0){var c=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(c<0){s.visible&&b.dismiss(s.id);return}return setTimeout(function(){return b.dismiss(s.id)},c)}});return function(){i.forEach(function(s){return s&&clearTimeout(s)})}}},[n,o]);var u=d.useMemo(function(){return{startPause:function(){S({type:m.START_PAUSE,time:Date.now()})},endPause:function(){o&&S({type:m.END_PAUSE,time:Date.now()})},updateHeight:function(i,s){return S({type:m.UPDATE_TOAST,toast:{id:i,height:s}})},calculateOffset:function(i,s){var c,l=s||{},f=l.reverseOrder,v=f===void 0?!1:f,h=l.gutter,w=h===void 0?8:h,P=l.defaultPosition,A=n.filter(function(y){return(y.position||P)===(i.position||P)&&y.height}),V=A.findIndex(function(y){return y.id===i.id}),$=A.filter(function(y,F){return F<V&&y.visible}).length,xe=(c=A.filter(function(y){return y.visible})).slice.apply(c,v?[$+1]:[0,$]).reduce(function(y,F){return y+(F.height||0)+w},0);return xe}}},[n,o]);return{toasts:n,handlers:u}};function oe(){var e=g([`
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
`]);return oe=function(){return e},e}function se(){var e=g([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return se=function(){return e},e}function ue(){var e=g([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return ue=function(){return e},e}function ce(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return ce=function(){return e},e}var Qe=E(ce()),Ye=E(ue()),Ze=E(se()),Je=_("div")(oe(),function(e){return e.primary||"#ff4b4b"},Qe,Ye,function(e){return e.secondary||"#fff"},Ze);function le(){var e=g([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return le=function(){return e},e}function de(){var e=g([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return de=function(){return e},e}var Xe=E(de()),Ke=_("div")(le(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},Xe);function fe(){var e=g([`
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
`]);return fe=function(){return e},e}function pe(){var e=g([`
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
}`]);return pe=function(){return e},e}function me(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return me=function(){return e},e}var et=E(me()),tt=E(pe()),nt=_("div")(fe(),function(e){return e.primary||"#61d345"},et,tt,function(e){return e.secondary||"#fff"});function ve(){var e=g([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return ve=function(){return e},e}function he(){var e=g([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return he=function(){return e},e}function ge(){var e=g([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return ge=function(){return e},e}function be(){var e=g([`
  position: absolute;
`]);return be=function(){return e},e}var rt=_("div")(be()),at=_("div")(ge()),it=E(he()),ot=_("div")(ve(),it),st=function(t){var r=t.toast,n=r.icon,o=r.type,u=r.iconTheme;return n!==void 0?typeof n=="string"?d.createElement(ot,null,n):n:o==="blank"?null:d.createElement(at,null,d.createElement(Ke,Object.assign({},u)),o!=="loading"&&d.createElement(rt,null,o==="error"?d.createElement(Je,Object.assign({},u)):d.createElement(nt,Object.assign({},u))))};function ye(){var e=g([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return ye=function(){return e},e}function Ee(){var e=g([`
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
`]);return Ee=function(){return e},e}var ut=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},ct=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},lt="0%{opacity:0;} 100%{opacity:1;}",dt="0%{opacity:1;} 100%{opacity:0;}",ft=_("div",d.forwardRef)(Ee()),pt=_("div")(ye()),mt=function(t,r){var n=t.includes("top"),o=n?1:-1,u=ie()?[lt,dt]:[ut(o),ct(o)],a=u[0],i=u[1];return{animation:r?E(a)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":E(i)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},Te=d.memo(function(e){var t=e.toast,r=e.position,n=e.style,o=e.children,u=t!=null&&t.height?mt(t.position||r||"top-center",t.visible):{opacity:0},a=d.createElement(st,{toast:t}),i=d.createElement(pt,Object.assign({},t.ariaProps),k(t.message,t));return d.createElement(ft,{className:t.className,style:p({},u,n,t.style)},typeof o=="function"?o({icon:a,message:i}):d.createElement(d.Fragment,null,a,i))});function _e(){var e=g([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return _e=function(){return e},e}ke(d.createElement);var vt=function(t,r){var n=t.includes("top"),o=n?{top:0}:{bottom:0},u=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return p({left:0,right:0,display:"flex",position:"absolute",transition:ie()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+r*(n?1:-1)+"px)"},o,u)},ht=U(_e()),D=16,gt=function(t){var r=t.reverseOrder,n=t.position,o=n===void 0?"top-center":n,u=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,c=t.containerClassName,l=He(u),f=l.toasts,v=l.handlers;return d.createElement("div",{style:p({position:"fixed",zIndex:9999,top:D,left:D,right:D,bottom:D,pointerEvents:"none"},s),className:c,onMouseEnter:v.startPause,onMouseLeave:v.endPause},f.map(function(h){var w=h.position||o,P=v.calculateOffset(h,{reverseOrder:r,gutter:a,defaultPosition:o}),A=vt(w,P),V=h.height?void 0:Fe(function($){v.updateHeight(h.id,$.height)});return d.createElement("div",{ref:V,className:h.visible?ht:"",key:h.id,style:A},h.type==="custom"?k(h.message,h):i?i(h):d.createElement(Te,{toast:h,position:w}))}))},bt=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Ne(t,n)})},L=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return we(t,n)})},W=function(e){ne(t,e);function t(){for(var n,o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return n=e.call.apply(e,[this].concat(u))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(i,s){var c=n.resolveArguments(i,s),l=c[0],f=c[1];n.removeClasses(l,"exit"),n.addClass(l,f?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(i,s)},n.onEntering=function(i,s){var c=n.resolveArguments(i,s),l=c[0],f=c[1],v=f?"appear":"enter";n.addClass(l,v,"active"),n.props.onEntering&&n.props.onEntering(i,s)},n.onEntered=function(i,s){var c=n.resolveArguments(i,s),l=c[0],f=c[1],v=f?"appear":"enter";n.removeClasses(l,v),n.addClass(l,v,"done"),n.props.onEntered&&n.props.onEntered(i,s)},n.onExit=function(i){var s=n.resolveArguments(i),c=s[0];n.removeClasses(c,"appear"),n.removeClasses(c,"enter"),n.addClass(c,"exit","base"),n.props.onExit&&n.props.onExit(i)},n.onExiting=function(i){var s=n.resolveArguments(i),c=s[0];n.addClass(c,"exit","active"),n.props.onExiting&&n.props.onExiting(i)},n.onExited=function(i){var s=n.resolveArguments(i),c=s[0];n.removeClasses(c,"exit"),n.addClass(c,"exit","done"),n.props.onExited&&n.props.onExited(i)},n.resolveArguments=function(i,s){return n.props.nodeRef?[n.props.nodeRef.current,i]:[i,s]},n.getClassNames=function(i){var s=n.props.classNames,c=typeof s=="string",l=c&&s?s+"-":"",f=c?""+l+i:s[i],v=c?f+"-active":s[i+"Active"],h=c?f+"-done":s[i+"Done"];return{baseClassName:f,activeClassName:v,doneClassName:h}},n}var r=t.prototype;return r.addClass=function(o,u,a){var i=this.getClassNames(u)[a+"ClassName"],s=this.getClassNames("enter"),c=s.doneClassName;u==="appear"&&a==="done"&&c&&(i+=" "+c),a==="active"&&o&&o.scrollTop,i&&(this.appliedClasses[u][a]=i,bt(o,i))},r.removeClasses=function(o,u){var a=this.appliedClasses[u],i=a.base,s=a.active,c=a.done;this.appliedClasses[u]={},i&&L(o,i),s&&L(o,s),c&&L(o,c)},r.render=function(){var o=this.props;o.classNames;var u=ee(o,["classNames"]);return C.createElement(Oe,te({},u,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(C.Component);W.defaultProps={classNames:""};W.propTypes={};const yt=W;function q(e,t){var r=function(u){return t&&d.isValidElement(u)?t(u):u},n=Object.create(null);return e&&d.Children.map(e,function(o){return o}).forEach(function(o){n[o.key]=r(o)}),n}function Et(e,t){e=e||{},t=t||{};function r(l){return l in t?t[l]:e[l]}var n=Object.create(null),o=[];for(var u in e)u in t?o.length&&(n[u]=o,o=[]):o.push(u);var a,i={};for(var s in t){if(n[s])for(a=0;a<n[s].length;a++){var c=n[s][a];i[n[s][a]]=r(c)}i[s]=r(s)}for(a=0;a<o.length;a++)i[o[a]]=r(o[a]);return i}function x(e,t,r){return r[t]!=null?r[t]:e.props[t]}function Tt(e,t){return q(e.children,function(r){return d.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:x(r,"appear",e),enter:x(r,"enter",e),exit:x(r,"exit",e)})})}function _t(e,t,r){var n=q(e.children),o=Et(t,n);return Object.keys(o).forEach(function(u){var a=o[u];if(d.isValidElement(a)){var i=u in t,s=u in n,c=t[u],l=d.isValidElement(c)&&!c.props.in;s&&(!i||l)?o[u]=d.cloneElement(a,{onExited:r.bind(null,a),in:!0,exit:x(a,"exit",e),enter:x(a,"enter",e)}):!s&&i&&!l?o[u]=d.cloneElement(a,{in:!1}):s&&i&&d.isValidElement(c)&&(o[u]=d.cloneElement(a,{onExited:r.bind(null,a),in:c.props.in,exit:x(a,"exit",e),enter:x(a,"enter",e)}))}}),o}var xt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},St={component:"div",childFactory:function(t){return t}},G=function(e){ne(t,e);function t(n,o){var u;u=e.call(this,n,o)||this;var a=u.handleExited.bind(Ce(u));return u.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},u}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,u){var a=u.children,i=u.handleExited,s=u.firstRender;return{children:s?Tt(o,i):_t(o,a,i),firstRender:!1}},r.handleExited=function(o,u){var a=q(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(u),this.mounted&&this.setState(function(i){var s=te({},i.children);return delete s[o.key],{children:s}}))},r.render=function(){var o=this.props,u=o.component,a=o.childFactory,i=ee(o,["component","childFactory"]),s=this.state.contextValue,c=xt(this.state.children).map(a);return delete i.appear,delete i.enter,delete i.exit,u===null?C.createElement(H.Provider,{value:s},c):C.createElement(H.Provider,{value:s},C.createElement(u,i,c))},t}(C.Component);G.propTypes={};G.defaultProps=St;const Ct=G,J=({text:e,show:t,autohide:r})=>O(Ct,{children:t&&O(yt,{classNames:"SRC-card",timeout:r?{enter:500,exit:300}:{},children:O("div",{className:"SRC-modal",children:e})})}),X=()=>O(gt,{containerClassName:"SynapseToastContainer bootstrap-4-backport",position:"bottom-center",children:e=>O(Te,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),K=(e,t,r={})=>{const n=je("synToast-"),o=()=>{b.dismiss(n)},{title:u=void 0,primaryButtonConfig:a=void 0,secondaryButtonConfig:i=void 0,dismissOnPrimaryButtonClick:s=!1,dismissOnSecondaryButtonClick:c=!1}=r;if(a&&"onClick"in a&&s){const f=a.onClick;a.onClick=v=>{f(v),o()}}if(i&&"onClick"in i&&c){const f=i.onClick;i.onClick=v=>{f(v),o()}}let{autoCloseInMs:l=15e3}=r;l===0&&(l=1/0),b(O(Se,{isGlobal:!1,onClose:o,variant:t??"info",show:!0,title:u,description:e,primaryButtonConfig:a,secondaryButtonConfig:i}),{id:n,className:"SynapseToastMessage",duration:l})};try{J.displayName="ToastMessage",J.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}}}catch{}try{X.displayName="SynapseToastContainer",X.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}}}catch{}try{K.displayName="displayToast",K.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}}}catch{}export{yt as C,X as S,J as T,Ne as a,K as d,we as r};
//# sourceMappingURL=ToastMessage-def67892.js.map
