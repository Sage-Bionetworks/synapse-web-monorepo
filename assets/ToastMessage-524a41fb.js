import{j as O}from"./jsx-runtime-ad672792.js";import{r as d,R as C}from"./index-f1f749bf.js";import{F as xe}from"./FullWidthAlert-7708c4df.js";import{_ as K}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as ee}from"./extends-98964cd2.js";import{_ as Se}from"./assertThisInitialized-081f9914.js";import{_ as te}from"./inheritsLoose-d541526f.js";import{T as Ce,a as H}from"./divWithClassName-1aeead00.js";import{a as Oe,r as Ae}from"./removeClass-164fd327.js";import{u as je}from"./uniqueId-4d05949d.js";let we={data:""},Ne=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||we,Pe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,De=/\/\*[^]*?\*\/|  +/g,Q=/\n+/g,T=(e,t)=>{let r="",n="",o="";for(let u in e){let a=e[u];u[0]=="@"?u[1]=="i"?r=u+" "+a+";":n+=u[1]=="f"?T(a,u):u+"{"+T(a,u[1]=="k"?"":t)+"}":typeof a=="object"?n+=T(a,t?t.replace(/([^,])+/g,i=>u.replace(/(^:.*)|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,i):i?i+" "+s:s)):u):a!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=T.p?T.p(u,a):u+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},j={},ne=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+ne(e[r]);return t}return e},$e=(e,t,r,n,o)=>{let u=ne(e),a=j[u]||(j[u]=(i=>{let s=0,l=11;for(;s<i.length;)l=101*l+i.charCodeAt(s++)>>>0;return"go"+l})(u));if(!j[a]){let i=u!==e?e:(s=>{let l,c,f=[{}];for(;l=Pe.exec(s.replace(De,""));)l[4]?f.shift():l[3]?(c=l[3].replace(Q," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][l[1]]=l[2].replace(Q," ").trim();return f[0]})(e);j[a]=T(o?{["@keyframes "+a]:i}:i,r?"":"."+a)}return((i,s,l)=>{s.data.indexOf(i)==-1&&(s.data=l?i+s.data:s.data+i)})(j[a],t,n),a},Me=(e,t,r)=>e.reduce((n,o,u)=>{let a=t[u];if(a&&a.call){let i=a(r),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&typeof i=="object"?i.props?"":T(i,""):i===!1?"":i}return n+o+(a??"")},"");function U(e){let t=this||{},r=e.call?e(t.p):e;return $e(r.unshift?r.raw?Me(r,[].slice.call(arguments,1),t.p):r.reduce((n,o)=>Object.assign(n,o&&o.call?o(t.p):o),{}):r,Ne(t.target),t.g,t.o,t.k)}let re,L,B;U.bind({g:1});let E=U.bind({k:1});function Re(e,t,r,n){T.p=t,re=e,L=r,B=n}function _(e,t){let r=this||{};return function(){let n=arguments;function o(u,a){let i=Object.assign({},u),s=i.className||o.className;r.p=Object.assign({theme:L&&L()},i),r.o=/ *go\d+/.test(s),i.className=U.apply(r,n)+(s?" "+s:""),t&&(i.ref=a);let l=e;return e[0]&&(l=i.as||e,delete i.as),B&&l[0]&&B(i),re(l,i)}return t?t(o):o}}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function g(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Ie=function(t){return typeof t=="function"},k=function(t,r){return Ie(t)?t(r):t},ke=function(){var e=0;return function(){return(++e).toString()}}(),Ue=function(t){return function(r){r&&setTimeout(function(){var n=r.getBoundingClientRect();t(n)})}},ae=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),Fe=20,m;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(m||(m={}));var M=new Map,Y=function(t){if(!M.has(t)){var r=setTimeout(function(){M.delete(t),S({type:m.REMOVE_TOAST,toastId:t})},1e3);M.set(t,r)}},Ve=function(t){var r=M.get(t);r&&clearTimeout(r)},ze=function e(t,r){switch(r.type){case m.ADD_TOAST:return p({},t,{toasts:[r.toast].concat(t.toasts).slice(0,Fe)});case m.UPDATE_TOAST:return r.toast.id&&Ve(r.toast.id),p({},t,{toasts:t.toasts.map(function(a){return a.id===r.toast.id?p({},a,r.toast):a})});case m.UPSERT_TOAST:var n=r.toast;return t.toasts.find(function(a){return a.id===n.id})?e(t,{type:m.UPDATE_TOAST,toast:n}):e(t,{type:m.ADD_TOAST,toast:n});case m.DISMISS_TOAST:var o=r.toastId;return o?Y(o):t.toasts.forEach(function(a){Y(a.id)}),p({},t,{toasts:t.toasts.map(function(a){return a.id===o||o===void 0?p({},a,{visible:!1}):a})});case m.REMOVE_TOAST:return r.toastId===void 0?p({},t,{toasts:[]}):p({},t,{toasts:t.toasts.filter(function(a){return a.id!==r.toastId})});case m.START_PAUSE:return p({},t,{pausedAt:r.time});case m.END_PAUSE:var u=r.time-(t.pausedAt||0);return p({},t,{pausedAt:void 0,toasts:t.toasts.map(function(a){return p({},a,{pauseDuration:a.pauseDuration+u})})})}},R=[],I={toasts:[],pausedAt:void 0},S=function(t){I=ze(I,t),R.forEach(function(r){r(I)})},Le={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Be=function(t){t===void 0&&(t={});var r=d.useState(I),n=r[0],o=r[1];d.useEffect(function(){return R.push(o),function(){var a=R.indexOf(o);a>-1&&R.splice(a,1)}},[n]);var u=n.toasts.map(function(a){var i,s,l;return p({},t,t[a.type],a,{duration:a.duration||((i=t[a.type])==null?void 0:i.duration)||((s=t)==null?void 0:s.duration)||Le[a.type],style:p({},t.style,(l=t[a.type])==null?void 0:l.style,a.style)})});return p({},n,{toasts:u})},We=function(t,r,n){return r===void 0&&(r="blank"),p({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||ke()})},w=function(t){return function(r,n){var o=We(r,t,n);return S({type:m.UPSERT_TOAST,toast:o}),o.id}},b=function(t,r){return w("blank")(t,r)};b.error=w("error");b.success=w("success");b.loading=w("loading");b.custom=w("custom");b.dismiss=function(e){S({type:m.DISMISS_TOAST,toastId:e})};b.remove=function(e){return S({type:m.REMOVE_TOAST,toastId:e})};b.promise=function(e,t,r){var n=b.loading(t.loading,p({},r,r==null?void 0:r.loading));return e.then(function(o){return b.success(k(t.success,o),p({id:n},r,r==null?void 0:r.success)),o}).catch(function(o){b.error(k(t.error,o),p({id:n},r,r==null?void 0:r.error))}),e};var qe=function(t){var r=Be(t),n=r.toasts,o=r.pausedAt;d.useEffect(function(){if(!o){var a=Date.now(),i=n.map(function(s){if(s.duration!==1/0){var l=(s.duration||0)+s.pauseDuration-(a-s.createdAt);if(l<0){s.visible&&b.dismiss(s.id);return}return setTimeout(function(){return b.dismiss(s.id)},l)}});return function(){i.forEach(function(s){return s&&clearTimeout(s)})}}},[n,o]);var u=d.useMemo(function(){return{startPause:function(){S({type:m.START_PAUSE,time:Date.now()})},endPause:function(){o&&S({type:m.END_PAUSE,time:Date.now()})},updateHeight:function(i,s){return S({type:m.UPDATE_TOAST,toast:{id:i,height:s}})},calculateOffset:function(i,s){var l,c=s||{},f=c.reverseOrder,v=f===void 0?!1:f,h=c.gutter,N=h===void 0?8:h,P=c.defaultPosition,A=n.filter(function(y){return(y.position||P)===(i.position||P)&&y.height}),F=A.findIndex(function(y){return y.id===i.id}),D=A.filter(function(y,V){return V<F&&y.visible}).length,_e=(l=A.filter(function(y){return y.visible})).slice.apply(l,v?[D+1]:[0,D]).reduce(function(y,V){return y+(V.height||0)+N},0);return _e}}},[n,o]);return{toasts:n,handlers:u}};function ie(){var e=g([`
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
`]);return ie=function(){return e},e}function oe(){var e=g([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return oe=function(){return e},e}function se(){var e=g([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return se=function(){return e},e}function ue(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return ue=function(){return e},e}var Ge=E(ue()),He=E(se()),Qe=E(oe()),Ye=_("div")(ie(),function(e){return e.primary||"#ff4b4b"},Ge,He,function(e){return e.secondary||"#fff"},Qe);function le(){var e=g([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return le=function(){return e},e}function ce(){var e=g([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return ce=function(){return e},e}var Ze=E(ce()),Je=_("div")(le(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},Ze);function de(){var e=g([`
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
`]);return de=function(){return e},e}function fe(){var e=g([`
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
}`]);return fe=function(){return e},e}function pe(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return pe=function(){return e},e}var Xe=E(pe()),Ke=E(fe()),et=_("div")(de(),function(e){return e.primary||"#61d345"},Xe,Ke,function(e){return e.secondary||"#fff"});function me(){var e=g([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return me=function(){return e},e}function ve(){var e=g([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return ve=function(){return e},e}function he(){var e=g([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return he=function(){return e},e}function ge(){var e=g([`
  position: absolute;
`]);return ge=function(){return e},e}var tt=_("div")(ge()),nt=_("div")(he()),rt=E(ve()),at=_("div")(me(),rt),it=function(t){var r=t.toast,n=r.icon,o=r.type,u=r.iconTheme;return n!==void 0?typeof n=="string"?d.createElement(at,null,n):n:o==="blank"?null:d.createElement(nt,null,d.createElement(Je,Object.assign({},u)),o!=="loading"&&d.createElement(tt,null,o==="error"?d.createElement(Ye,Object.assign({},u)):d.createElement(et,Object.assign({},u))))};function be(){var e=g([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return be=function(){return e},e}function ye(){var e=g([`
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
`]);return ye=function(){return e},e}var ot=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},st=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},ut="0%{opacity:0;} 100%{opacity:1;}",lt="0%{opacity:1;} 100%{opacity:0;}",ct=_("div",d.forwardRef)(ye()),dt=_("div")(be()),ft=function(t,r){var n=t.includes("top"),o=n?1:-1,u=ae()?[ut,lt]:[ot(o),st(o)],a=u[0],i=u[1];return{animation:r?E(a)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":E(i)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},Ee=d.memo(function(e){var t=e.toast,r=e.position,n=e.style,o=e.children,u=t!=null&&t.height?ft(t.position||r||"top-center",t.visible):{opacity:0},a=d.createElement(it,{toast:t}),i=d.createElement(dt,Object.assign({},t.ariaProps),k(t.message,t));return d.createElement(ct,{className:t.className,style:p({},u,n,t.style)},typeof o=="function"?o({icon:a,message:i}):d.createElement(d.Fragment,null,a,i))});function Te(){var e=g([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return Te=function(){return e},e}Re(d.createElement);var pt=function(t,r){var n=t.includes("top"),o=n?{top:0}:{bottom:0},u=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return p({left:0,right:0,display:"flex",position:"absolute",transition:ae()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+r*(n?1:-1)+"px)"},o,u)},mt=U(Te()),$=16,vt=function(t){var r=t.reverseOrder,n=t.position,o=n===void 0?"top-center":n,u=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,l=t.containerClassName,c=qe(u),f=c.toasts,v=c.handlers;return d.createElement("div",{style:p({position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none"},s),className:l,onMouseEnter:v.startPause,onMouseLeave:v.endPause},f.map(function(h){var N=h.position||o,P=v.calculateOffset(h,{reverseOrder:r,gutter:a,defaultPosition:o}),A=pt(N,P),F=h.height?void 0:Ue(function(D){v.updateHeight(h.id,D.height)});return d.createElement("div",{ref:F,className:h.visible?mt:"",key:h.id,style:A},h.type==="custom"?k(h.message,h):i?i(h):d.createElement(Ee,{toast:h,position:N}))}))},ht=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Oe(t,n)})},z=function(t,r){return t&&r&&r.split(" ").forEach(function(n){return Ae(t,n)})},W=function(e){te(t,e);function t(){for(var n,o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return n=e.call.apply(e,[this].concat(u))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(i,s){var l=n.resolveArguments(i,s),c=l[0],f=l[1];n.removeClasses(c,"exit"),n.addClass(c,f?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(i,s)},n.onEntering=function(i,s){var l=n.resolveArguments(i,s),c=l[0],f=l[1],v=f?"appear":"enter";n.addClass(c,v,"active"),n.props.onEntering&&n.props.onEntering(i,s)},n.onEntered=function(i,s){var l=n.resolveArguments(i,s),c=l[0],f=l[1],v=f?"appear":"enter";n.removeClasses(c,v),n.addClass(c,v,"done"),n.props.onEntered&&n.props.onEntered(i,s)},n.onExit=function(i){var s=n.resolveArguments(i),l=s[0];n.removeClasses(l,"appear"),n.removeClasses(l,"enter"),n.addClass(l,"exit","base"),n.props.onExit&&n.props.onExit(i)},n.onExiting=function(i){var s=n.resolveArguments(i),l=s[0];n.addClass(l,"exit","active"),n.props.onExiting&&n.props.onExiting(i)},n.onExited=function(i){var s=n.resolveArguments(i),l=s[0];n.removeClasses(l,"exit"),n.addClass(l,"exit","done"),n.props.onExited&&n.props.onExited(i)},n.resolveArguments=function(i,s){return n.props.nodeRef?[n.props.nodeRef.current,i]:[i,s]},n.getClassNames=function(i){var s=n.props.classNames,l=typeof s=="string",c=l&&s?s+"-":"",f=l?""+c+i:s[i],v=l?f+"-active":s[i+"Active"],h=l?f+"-done":s[i+"Done"];return{baseClassName:f,activeClassName:v,doneClassName:h}},n}var r=t.prototype;return r.addClass=function(o,u,a){var i=this.getClassNames(u)[a+"ClassName"],s=this.getClassNames("enter"),l=s.doneClassName;u==="appear"&&a==="done"&&l&&(i+=" "+l),a==="active"&&o&&o.scrollTop,i&&(this.appliedClasses[u][a]=i,ht(o,i))},r.removeClasses=function(o,u){var a=this.appliedClasses[u],i=a.base,s=a.active,l=a.done;this.appliedClasses[u]={},i&&z(o,i),s&&z(o,s),l&&z(o,l)},r.render=function(){var o=this.props;o.classNames;var u=K(o,["classNames"]);return C.createElement(Ce,ee({},u,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(C.Component);W.defaultProps={classNames:""};W.propTypes={};const gt=W;function q(e,t){var r=function(u){return t&&d.isValidElement(u)?t(u):u},n=Object.create(null);return e&&d.Children.map(e,function(o){return o}).forEach(function(o){n[o.key]=r(o)}),n}function bt(e,t){e=e||{},t=t||{};function r(c){return c in t?t[c]:e[c]}var n=Object.create(null),o=[];for(var u in e)u in t?o.length&&(n[u]=o,o=[]):o.push(u);var a,i={};for(var s in t){if(n[s])for(a=0;a<n[s].length;a++){var l=n[s][a];i[n[s][a]]=r(l)}i[s]=r(s)}for(a=0;a<o.length;a++)i[o[a]]=r(o[a]);return i}function x(e,t,r){return r[t]!=null?r[t]:e.props[t]}function yt(e,t){return q(e.children,function(r){return d.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:x(r,"appear",e),enter:x(r,"enter",e),exit:x(r,"exit",e)})})}function Et(e,t,r){var n=q(e.children),o=bt(t,n);return Object.keys(o).forEach(function(u){var a=o[u];if(d.isValidElement(a)){var i=u in t,s=u in n,l=t[u],c=d.isValidElement(l)&&!l.props.in;s&&(!i||c)?o[u]=d.cloneElement(a,{onExited:r.bind(null,a),in:!0,exit:x(a,"exit",e),enter:x(a,"enter",e)}):!s&&i&&!c?o[u]=d.cloneElement(a,{in:!1}):s&&i&&d.isValidElement(l)&&(o[u]=d.cloneElement(a,{onExited:r.bind(null,a),in:l.props.in,exit:x(a,"exit",e),enter:x(a,"enter",e)}))}}),o}var Tt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},_t={component:"div",childFactory:function(t){return t}},G=function(e){te(t,e);function t(n,o){var u;u=e.call(this,n,o)||this;var a=u.handleExited.bind(Se(u));return u.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},u}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,u){var a=u.children,i=u.handleExited,s=u.firstRender;return{children:s?yt(o,i):Et(o,a,i),firstRender:!1}},r.handleExited=function(o,u){var a=q(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(u),this.mounted&&this.setState(function(i){var s=ee({},i.children);return delete s[o.key],{children:s}}))},r.render=function(){var o=this.props,u=o.component,a=o.childFactory,i=K(o,["component","childFactory"]),s=this.state.contextValue,l=Tt(this.state.children).map(a);return delete i.appear,delete i.enter,delete i.exit,u===null?C.createElement(H.Provider,{value:s},l):C.createElement(H.Provider,{value:s},C.createElement(u,i,l))},t}(C.Component);G.propTypes={};G.defaultProps=_t;const xt=G,Z=({text:e,show:t,autohide:r})=>O(xt,{children:t&&O(gt,{classNames:"SRC-card",timeout:r?{enter:500,exit:300}:{},children:O("div",{className:"SRC-modal",children:e})})}),J=()=>O(vt,{containerClassName:"SynapseToastContainer bootstrap-4-backport",position:"bottom-center",children:e=>O(Ee,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),X=(e,t,r={})=>{const n=je("synToast-"),o=()=>{b.dismiss(n)},{title:u=void 0,primaryButtonConfig:a=void 0,secondaryButtonConfig:i=void 0,dismissOnPrimaryButtonClick:s=!1,dismissOnSecondaryButtonClick:l=!1}=r;if(a&&"onClick"in a&&s){const f=a.onClick;a.onClick=v=>{f(v),o()}}if(i&&"onClick"in i&&l){const f=i.onClick;i.onClick=v=>{f(v),o()}}let{autoCloseInMs:c=15e3}=r;c===0&&(c=1/0),b(O(xe,{isGlobal:!1,onClose:o,variant:t??"info",show:!0,title:u,description:e,primaryButtonConfig:a,secondaryButtonConfig:i}),{id:n,className:"SynapseToastMessage",duration:c})};try{Z.displayName="ToastMessage",Z.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}}}catch{}try{J.displayName="SynapseToastContainer",J.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}}}catch{}try{X.displayName="displayToast",X.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}}}catch{}export{gt as C,J as S,Z as T,X as d};
//# sourceMappingURL=ToastMessage-524a41fb.js.map
