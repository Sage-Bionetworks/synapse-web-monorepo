import{j as w}from"./jsx-runtime-670450c2.js";import{r as d,R as x}from"./index-f1f749bf.js";import{F as Re}from"./FullWidthAlert-10bb9b65.js";import{_ as K}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as ce}from"./extends-98964cd2.js";import{_ as Me}from"./assertThisInitialized-081f9914.js";import{_ as ee}from"./inheritsLoose-d541526f.js";import{a as Pe,r as Ie}from"./removeClass-164fd327.js";import{R as X}from"./index-96c5f47c.js";import{u as ke}from"./uniqueId-9feaf103.js";let $e={data:""},Ue=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||$e,Fe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Le=/\/\*[^]*?\*\/|  +/g,ae=/\n+/g,S=(e,t)=>{let o="",n="",r="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?o=i+" "+a+";":n+=i[1]=="f"?S(a,i):i+"{"+S(a,i[1]=="k"?"":t)+"}":typeof a=="object"?n+=S(a,t?t.replace(/([^,])+/g,s=>i.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,s):s?s+" "+u:u)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=S.p?S.p(i,a):i+":"+a+";")}return o+(t&&r?t+"{"+r+"}":r)+n},M={},de=e=>{if(typeof e=="object"){let t="";for(let o in e)t+=o+de(e[o]);return t}return e},Ve=(e,t,o,n,r)=>{let i=de(e),a=M[i]||(M[i]=(s=>{let u=0,l=11;for(;u<s.length;)l=101*l+s.charCodeAt(u++)>>>0;return"go"+l})(i));if(!M[a]){let s=i!==e?e:(u=>{let l,c,f=[{}];for(;l=Fe.exec(u.replace(Le,""));)l[4]?f.shift():l[3]?(c=l[3].replace(ae," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][l[1]]=l[2].replace(ae," ").trim();return f[0]})(e);M[a]=S(r?{["@keyframes "+a]:s}:s,o?"":"."+a)}return((s,u,l)=>{u.data.indexOf(s)==-1&&(u.data=l?s+u.data:u.data+s)})(M[a],t,n),a},ze=(e,t,o)=>e.reduce((n,r,i)=>{let a=t[i];if(a&&a.call){let s=a(o),u=s&&s.props&&s.props.className||/^go/.test(s)&&s;a=u?"."+u:s&&typeof s=="object"?s.props?"":S(s,""):s===!1?"":s}return n+r+(a??"")},"");function W(e){let t=this||{},o=e.call?e(t.p):e;return Ve(o.unshift?o.raw?ze(o,[].slice.call(arguments,1),t.p):o.reduce((n,r)=>Object.assign(n,r&&r.call?r(t.p):r),{}):o,Ue(t.target),t.g,t.o,t.k)}let fe,Y,Z;W.bind({g:1});let T=W.bind({k:1});function Ge(e,t,o,n){S.p=t,fe=e,Y=o,Z=n}function _(e,t){let o=this||{};return function(){let n=arguments;function r(i,a){let s=Object.assign({},i),u=s.className||r.className;o.p=Object.assign({theme:Y&&Y()},s),o.o=/ *go\d+/.test(u),s.className=W.apply(o,n)+(u?" "+u:""),t&&(s.ref=a);let l=e;return e[0]&&(l=s.as||e,delete s.as),Z&&l[0]&&Z(s),fe(l,s)}return t?t(r):r}}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p.apply(this,arguments)}function g(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Be=function(t){return typeof t=="function"},G=function(t,o){return Be(t)?t(o):t},We=function(){var e=0;return function(){return(++e).toString()}}(),He=function(t){return function(o){o&&setTimeout(function(){var n=o.getBoundingClientRect();t(n)})}},pe=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),qe=20,v;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(v||(v={}));var L=new Map,ie=function(t){if(!L.has(t)){var o=setTimeout(function(){L.delete(t),N({type:v.REMOVE_TOAST,toastId:t})},1e3);L.set(t,o)}},Xe=function(t){var o=L.get(t);o&&clearTimeout(o)},Qe=function e(t,o){switch(o.type){case v.ADD_TOAST:return p({},t,{toasts:[o.toast].concat(t.toasts).slice(0,qe)});case v.UPDATE_TOAST:return o.toast.id&&Xe(o.toast.id),p({},t,{toasts:t.toasts.map(function(a){return a.id===o.toast.id?p({},a,o.toast):a})});case v.UPSERT_TOAST:var n=o.toast;return t.toasts.find(function(a){return a.id===n.id})?e(t,{type:v.UPDATE_TOAST,toast:n}):e(t,{type:v.ADD_TOAST,toast:n});case v.DISMISS_TOAST:var r=o.toastId;return r?ie(r):t.toasts.forEach(function(a){ie(a.id)}),p({},t,{toasts:t.toasts.map(function(a){return a.id===r||r===void 0?p({},a,{visible:!1}):a})});case v.REMOVE_TOAST:return o.toastId===void 0?p({},t,{toasts:[]}):p({},t,{toasts:t.toasts.filter(function(a){return a.id!==o.toastId})});case v.START_PAUSE:return p({},t,{pausedAt:o.time});case v.END_PAUSE:var i=o.time-(t.pausedAt||0);return p({},t,{pausedAt:void 0,toasts:t.toasts.map(function(a){return p({},a,{pauseDuration:a.pauseDuration+i})})})}},V=[],z={toasts:[],pausedAt:void 0},N=function(t){z=Qe(z,t),V.forEach(function(o){o(z)})},Ye={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ze=function(t){t===void 0&&(t={});var o=d.useState(z),n=o[0],r=o[1];d.useEffect(function(){return V.push(r),function(){var a=V.indexOf(r);a>-1&&V.splice(a,1)}},[n]);var i=n.toasts.map(function(a){var s,u,l;return p({},t,t[a.type],a,{duration:a.duration||((s=t[a.type])==null?void 0:s.duration)||((u=t)==null?void 0:u.duration)||Ye[a.type],style:p({},t.style,(l=t[a.type])==null?void 0:l.style,a.style)})});return p({},n,{toasts:i})},Je=function(t,o,n){return o===void 0&&(o="blank"),p({createdAt:Date.now(),visible:!0,type:o,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||We()})},I=function(t){return function(o,n){var r=Je(o,t,n);return N({type:v.UPSERT_TOAST,toast:r}),r.id}},E=function(t,o){return I("blank")(t,o)};E.error=I("error");E.success=I("success");E.loading=I("loading");E.custom=I("custom");E.dismiss=function(e){N({type:v.DISMISS_TOAST,toastId:e})};E.remove=function(e){return N({type:v.REMOVE_TOAST,toastId:e})};E.promise=function(e,t,o){var n=E.loading(t.loading,p({},o,o==null?void 0:o.loading));return e.then(function(r){return E.success(G(t.success,r),p({id:n},o,o==null?void 0:o.success)),r}).catch(function(r){E.error(G(t.error,r),p({id:n},o,o==null?void 0:o.error))}),e};var Ke=function(t){var o=Ze(t),n=o.toasts,r=o.pausedAt;d.useEffect(function(){if(!r){var a=Date.now(),s=n.map(function(u){if(u.duration!==1/0){var l=(u.duration||0)+u.pauseDuration-(a-u.createdAt);if(l<0){u.visible&&E.dismiss(u.id);return}return setTimeout(function(){return E.dismiss(u.id)},l)}});return function(){s.forEach(function(u){return u&&clearTimeout(u)})}}},[n,r]);var i=d.useMemo(function(){return{startPause:function(){N({type:v.START_PAUSE,time:Date.now()})},endPause:function(){r&&N({type:v.END_PAUSE,time:Date.now()})},updateHeight:function(s,u){return N({type:v.UPDATE_TOAST,toast:{id:s,height:u}})},calculateOffset:function(s,u){var l,c=u||{},f=c.reverseOrder,m=f===void 0?!1:f,h=c.gutter,k=h===void 0?8:h,$=c.defaultPosition,R=n.filter(function(b){return(b.position||$)===(s.position||$)&&b.height}),H=R.findIndex(function(b){return b.id===s.id}),U=R.filter(function(b,q){return q<H&&b.visible}).length,we=(l=R.filter(function(b){return b.visible})).slice.apply(l,m?[U+1]:[0,U]).reduce(function(b,q){return b+(q.height||0)+k},0);return we}}},[n,r]);return{toasts:n,handlers:i}};function me(){var e=g([`
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
`]);return me=function(){return e},e}function ve(){var e=g([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return ve=function(){return e},e}function he(){var e=g([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return he=function(){return e},e}function ge(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return ge=function(){return e},e}var et=T(ge()),tt=T(he()),nt=T(ve()),rt=_("div")(me(),function(e){return e.primary||"#ff4b4b"},et,tt,function(e){return e.secondary||"#fff"},nt);function Ee(){var e=g([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return Ee=function(){return e},e}function xe(){var e=g([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return xe=function(){return e},e}var at=T(xe()),it=_("div")(Ee(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},at);function be(){var e=g([`
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
`]);return be=function(){return e},e}function Te(){var e=g([`
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
}`]);return Te=function(){return e},e}function ye(){var e=g([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return ye=function(){return e},e}var ot=T(ye()),st=T(Te()),ut=_("div")(be(),function(e){return e.primary||"#61d345"},ot,st,function(e){return e.secondary||"#fff"});function Se(){var e=g([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return Se=function(){return e},e}function _e(){var e=g([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return _e=function(){return e},e}function Ce(){var e=g([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return Ce=function(){return e},e}function Oe(){var e=g([`
  position: absolute;
`]);return Oe=function(){return e},e}var lt=_("div")(Oe()),ct=_("div")(Ce()),dt=T(_e()),ft=_("div")(Se(),dt),pt=function(t){var o=t.toast,n=o.icon,r=o.type,i=o.iconTheme;return n!==void 0?typeof n=="string"?d.createElement(ft,null,n):n:r==="blank"?null:d.createElement(ct,null,d.createElement(it,Object.assign({},i)),r!=="loading"&&d.createElement(lt,null,r==="error"?d.createElement(rt,Object.assign({},i)):d.createElement(ut,Object.assign({},i))))};function Ae(){var e=g([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return Ae=function(){return e},e}function Ne(){var e=g([`
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
`]);return Ne=function(){return e},e}var mt=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},vt=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},ht="0%{opacity:0;} 100%{opacity:1;}",gt="0%{opacity:1;} 100%{opacity:0;}",Et=_("div",d.forwardRef)(Ne()),xt=_("div")(Ae()),bt=function(t,o){var n=t.includes("top"),r=n?1:-1,i=pe()?[ht,gt]:[mt(r),vt(r)],a=i[0],s=i[1];return{animation:o?T(a)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":T(s)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},je=d.memo(function(e){var t=e.toast,o=e.position,n=e.style,r=e.children,i=t!=null&&t.height?bt(t.position||o||"top-center",t.visible):{opacity:0},a=d.createElement(pt,{toast:t}),s=d.createElement(xt,Object.assign({},t.ariaProps),G(t.message,t));return d.createElement(Et,{className:t.className,style:p({},i,n,t.style)},typeof r=="function"?r({icon:a,message:s}):d.createElement(d.Fragment,null,a,s))});function De(){var e=g([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return De=function(){return e},e}Ge(d.createElement);var Tt=function(t,o){var n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return p({left:0,right:0,display:"flex",position:"absolute",transition:pe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+o*(n?1:-1)+"px)"},r,i)},yt=W(De()),F=16,St=function(t){var o=t.reverseOrder,n=t.position,r=n===void 0?"top-center":n,i=t.toastOptions,a=t.gutter,s=t.children,u=t.containerStyle,l=t.containerClassName,c=Ke(i),f=c.toasts,m=c.handlers;return d.createElement("div",{style:p({position:"fixed",zIndex:9999,top:F,left:F,right:F,bottom:F,pointerEvents:"none"},u),className:l,onMouseEnter:m.startPause,onMouseLeave:m.endPause},f.map(function(h){var k=h.position||r,$=m.calculateOffset(h,{reverseOrder:o,gutter:a,defaultPosition:r}),R=Tt(k,$),H=h.height?void 0:He(function(U){m.updateHeight(h.id,U.height)});return d.createElement("div",{ref:H,className:h.visible?yt:"",key:h.id,style:R},h.type==="custom"?G(h.message,h):s?s(h):d.createElement(je,{toast:h,position:k}))}))};const oe={disabled:!1},B=x.createContext(null);var P="unmounted",C="exited",O="entering",D="entered",J="exiting",y=function(e){ee(t,e);function t(n,r){var i;i=e.call(this,n,r)||this;var a=r,s=a&&!a.isMounting?n.enter:n.appear,u;return i.appearStatus=null,n.in?s?(u=C,i.appearStatus=O):u=D:n.unmountOnExit||n.mountOnEnter?u=P:u=C,i.state={status:u},i.nextCallback=null,i}t.getDerivedStateFromProps=function(r,i){var a=r.in;return a&&i.status===P?{status:C}:null};var o=t.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(r){var i=null;if(r!==this.props){var a=this.state.status;this.props.in?a!==O&&a!==D&&(i=O):(a===O||a===D)&&(i=J)}this.updateStatus(!1,i)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var r=this.props.timeout,i,a,s;return i=a=s=r,r!=null&&typeof r!="number"&&(i=r.exit,a=r.enter,s=r.appear!==void 0?r.appear:a),{exit:i,enter:a,appear:s}},o.updateStatus=function(r,i){r===void 0&&(r=!1),i!==null?(this.cancelNextCallback(),i===O?this.performEnter(r):this.performExit()):this.props.unmountOnExit&&this.state.status===C&&this.setState({status:P})},o.performEnter=function(r){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:r,u=this.props.nodeRef?[s]:[X.findDOMNode(this),s],l=u[0],c=u[1],f=this.getTimeouts(),m=s?f.appear:f.enter;if(!r&&!a||oe.disabled){this.safeSetState({status:D},function(){i.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:O},function(){i.props.onEntering(l,c),i.onTransitionEnd(m,function(){i.safeSetState({status:D},function(){i.props.onEntered(l,c)})})})},o.performExit=function(){var r=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:X.findDOMNode(this);if(!i||oe.disabled){this.safeSetState({status:C},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:J},function(){r.props.onExiting(s),r.onTransitionEnd(a.exit,function(){r.safeSetState({status:C},function(){r.props.onExited(s)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(r,i){i=this.setNextCallback(i),this.setState(r,i)},o.setNextCallback=function(r){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,r(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},o.onTransitionEnd=function(r,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],l=u[0],c=u[1];this.props.addEndListener(l,c)}r!=null&&setTimeout(this.nextCallback,r)},o.render=function(){var r=this.state.status;if(r===P)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=K(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(B.Provider,{value:null},typeof a=="function"?a(r,s):x.cloneElement(x.Children.only(a),s))},t}(x.Component);y.contextType=B;y.propTypes={};function j(){}y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j};y.UNMOUNTED=P;y.EXITED=C;y.ENTERING=O;y.ENTERED=D;y.EXITING=J;const _t=y;var Ct=function(t,o){return t&&o&&o.split(" ").forEach(function(n){return Pe(t,n)})},Q=function(t,o){return t&&o&&o.split(" ").forEach(function(n){return Ie(t,n)})},te=function(e){ee(t,e);function t(){for(var n,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(s,u){var l=n.resolveArguments(s,u),c=l[0],f=l[1];n.removeClasses(c,"exit"),n.addClass(c,f?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(s,u)},n.onEntering=function(s,u){var l=n.resolveArguments(s,u),c=l[0],f=l[1],m=f?"appear":"enter";n.addClass(c,m,"active"),n.props.onEntering&&n.props.onEntering(s,u)},n.onEntered=function(s,u){var l=n.resolveArguments(s,u),c=l[0],f=l[1],m=f?"appear":"enter";n.removeClasses(c,m),n.addClass(c,m,"done"),n.props.onEntered&&n.props.onEntered(s,u)},n.onExit=function(s){var u=n.resolveArguments(s),l=u[0];n.removeClasses(l,"appear"),n.removeClasses(l,"enter"),n.addClass(l,"exit","base"),n.props.onExit&&n.props.onExit(s)},n.onExiting=function(s){var u=n.resolveArguments(s),l=u[0];n.addClass(l,"exit","active"),n.props.onExiting&&n.props.onExiting(s)},n.onExited=function(s){var u=n.resolveArguments(s),l=u[0];n.removeClasses(l,"exit"),n.addClass(l,"exit","done"),n.props.onExited&&n.props.onExited(s)},n.resolveArguments=function(s,u){return n.props.nodeRef?[n.props.nodeRef.current,s]:[s,u]},n.getClassNames=function(s){var u=n.props.classNames,l=typeof u=="string",c=l&&u?u+"-":"",f=l?""+c+s:u[s],m=l?f+"-active":u[s+"Active"],h=l?f+"-done":u[s+"Done"];return{baseClassName:f,activeClassName:m,doneClassName:h}},n}var o=t.prototype;return o.addClass=function(r,i,a){var s=this.getClassNames(i)[a+"ClassName"],u=this.getClassNames("enter"),l=u.doneClassName;i==="appear"&&a==="done"&&l&&(s+=" "+l),a==="active"&&r&&r.scrollTop,s&&(this.appliedClasses[i][a]=s,Ct(r,s))},o.removeClasses=function(r,i){var a=this.appliedClasses[i],s=a.base,u=a.active,l=a.done;this.appliedClasses[i]={},s&&Q(r,s),u&&Q(r,u),l&&Q(r,l)},o.render=function(){var r=this.props;r.classNames;var i=K(r,["classNames"]);return x.createElement(_t,ce({},i,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(x.Component);te.defaultProps={classNames:""};te.propTypes={};const Ot=te;function ne(e,t){var o=function(i){return t&&d.isValidElement(i)?t(i):i},n=Object.create(null);return e&&d.Children.map(e,function(r){return r}).forEach(function(r){n[r.key]=o(r)}),n}function At(e,t){e=e||{},t=t||{};function o(c){return c in t?t[c]:e[c]}var n=Object.create(null),r=[];for(var i in e)i in t?r.length&&(n[i]=r,r=[]):r.push(i);var a,s={};for(var u in t){if(n[u])for(a=0;a<n[u].length;a++){var l=n[u][a];s[n[u][a]]=o(l)}s[u]=o(u)}for(a=0;a<r.length;a++)s[r[a]]=o(r[a]);return s}function A(e,t,o){return o[t]!=null?o[t]:e.props[t]}function Nt(e,t){return ne(e.children,function(o){return d.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:A(o,"appear",e),enter:A(o,"enter",e),exit:A(o,"exit",e)})})}function jt(e,t,o){var n=ne(e.children),r=At(t,n);return Object.keys(r).forEach(function(i){var a=r[i];if(d.isValidElement(a)){var s=i in t,u=i in n,l=t[i],c=d.isValidElement(l)&&!l.props.in;u&&(!s||c)?r[i]=d.cloneElement(a,{onExited:o.bind(null,a),in:!0,exit:A(a,"exit",e),enter:A(a,"enter",e)}):!u&&s&&!c?r[i]=d.cloneElement(a,{in:!1}):u&&s&&d.isValidElement(l)&&(r[i]=d.cloneElement(a,{onExited:o.bind(null,a),in:l.props.in,exit:A(a,"exit",e),enter:A(a,"enter",e)}))}}),r}var Dt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},wt={component:"div",childFactory:function(t){return t}},re=function(e){ee(t,e);function t(n,r){var i;i=e.call(this,n,r)||this;var a=i.handleExited.bind(Me(i));return i.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},i}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var a=i.children,s=i.handleExited,u=i.firstRender;return{children:u?Nt(r,s):jt(r,a,s),firstRender:!1}},o.handleExited=function(r,i){var a=ne(this.props.children);r.key in a||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(s){var u=ce({},s.children);return delete u[r.key],{children:u}}))},o.render=function(){var r=this.props,i=r.component,a=r.childFactory,s=K(r,["component","childFactory"]),u=this.state.contextValue,l=Dt(this.state.children).map(a);return delete s.appear,delete s.enter,delete s.exit,i===null?x.createElement(B.Provider,{value:u},l):x.createElement(B.Provider,{value:u},x.createElement(i,s,l))},t}(x.Component);re.propTypes={};re.defaultProps=wt;const Rt=re,se=({text:e,show:t,autohide:o})=>w(Rt,{children:t&&w(Ot,{classNames:"SRC-card",timeout:o?{enter:500,exit:300}:{},children:w("div",{className:"SRC-modal",children:e})})}),ue=()=>w(St,{containerClassName:"SynapseToastContainer bootstrap-4-backport",position:"bottom-center",children:e=>w(je,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),le=(e,t,o={})=>{const n=ke("synToast-"),r=()=>{E.dismiss(n)},{title:i=void 0,primaryButtonConfig:a=void 0,secondaryButtonConfig:s=void 0,dismissOnPrimaryButtonClick:u=!1,dismissOnSecondaryButtonClick:l=!1}=o;if(a&&"onClick"in a&&u){const f=a.onClick;a.onClick=m=>{f(m),r()}}if(s&&"onClick"in s&&l){const f=s.onClick;s.onClick=m=>{f(m),r()}}let{autoCloseInMs:c=15e3}=o;c===0&&(c=1/0),E(w(Re,{isGlobal:!1,onClose:r,variant:t??"info",show:!0,title:i,description:e,primaryButtonConfig:a,secondaryButtonConfig:s}),{id:n,className:"SynapseToastMessage",duration:c})};try{se.displayName="ToastMessage",se.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}}}catch{}try{ue.displayName="SynapseToastContainer",ue.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}}}catch{}try{le.displayName="displayToast",le.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}}}catch{}export{Ot as C,ue as S,se as T,le as d};
//# sourceMappingURL=ToastMessage-8fc96da8.js.map
