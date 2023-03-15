import{j as w}from"./jsx-runtime-670450c2.js";import{r as d,R as x}from"./index-f1f749bf.js";import{F as Re}from"./FullWidthAlert-8227c0a5.js";import{_ as ce,a as Me}from"./assertThisInitialized-3be3daa4.js";import{_ as K}from"./isArray-035e79ba.js";import{a as Pe,r as Ie}from"./removeClass-164fd327.js";import{R as X}from"./index-96c5f47c.js";import{u as ke}from"./uniqueId-1138dcf4.js";let $e={data:""},Ue=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||$e,Fe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Le=/\/\*[^]*?\*\/|  +/g,ae=/\n+/g,S=(e,t)=>{let o="",n="",r="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?o=a+" "+i+";":n+=a[1]=="f"?S(i,a):a+"{"+S(i,a[1]=="k"?"":t)+"}":typeof i=="object"?n+=S(i,t?t.replace(/([^,])+/g,s=>a.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,s):s?s+" "+u:u)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=S.p?S.p(a,i):a+":"+i+";")}return o+(t&&r?t+"{"+r+"}":r)+n},M={},de=e=>{if(typeof e=="object"){let t="";for(let o in e)t+=o+de(e[o]);return t}return e},Ve=(e,t,o,n,r)=>{let a=de(e),i=M[a]||(M[a]=(s=>{let u=0,l=11;for(;u<s.length;)l=101*l+s.charCodeAt(u++)>>>0;return"go"+l})(a));if(!M[i]){let s=a!==e?e:(u=>{let l,c,f=[{}];for(;l=Fe.exec(u.replace(Le,""));)l[4]?f.shift():l[3]?(c=l[3].replace(ae," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][l[1]]=l[2].replace(ae," ").trim();return f[0]})(e);M[i]=S(r?{["@keyframes "+i]:s}:s,o?"":"."+i)}return((s,u,l)=>{u.data.indexOf(s)==-1&&(u.data=l?s+u.data:u.data+s)})(M[i],t,n),i},ze=(e,t,o)=>e.reduce((n,r,a)=>{let i=t[a];if(i&&i.call){let s=i(o),u=s&&s.props&&s.props.className||/^go/.test(s)&&s;i=u?"."+u:s&&typeof s=="object"?s.props?"":S(s,""):s===!1?"":s}return n+r+(i??"")},"");function W(e){let t=this||{},o=e.call?e(t.p):e;return Ve(o.unshift?o.raw?ze(o,[].slice.call(arguments,1),t.p):o.reduce((n,r)=>Object.assign(n,r&&r.call?r(t.p):r),{}):o,Ue(t.target),t.g,t.o,t.k)}let fe,Y,Z;W.bind({g:1});let T=W.bind({k:1});function Ge(e,t,o,n){S.p=t,fe=e,Y=o,Z=n}function _(e,t){let o=this||{};return function(){let n=arguments;function r(a,i){let s=Object.assign({},a),u=s.className||r.className;o.p=Object.assign({theme:Y&&Y()},s),o.o=/ *go\d+/.test(u),s.className=W.apply(o,n)+(u?" "+u:""),t&&(s.ref=i);let l=e;return e[0]&&(l=s.as||e,delete s.as),Z&&l[0]&&Z(s),fe(l,s)}return t?t(r):r}}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p.apply(this,arguments)}function g(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Be=function(t){return typeof t=="function"},G=function(t,o){return Be(t)?t(o):t},We=function(){var e=0;return function(){return(++e).toString()}}(),He=function(t){return function(o){o&&setTimeout(function(){var n=o.getBoundingClientRect();t(n)})}},pe=function(){var e=void 0;return function(){if(e===void 0&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),qe=20,v;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(v||(v={}));var L=new Map,ie=function(t){if(!L.has(t)){var o=setTimeout(function(){L.delete(t),N({type:v.REMOVE_TOAST,toastId:t})},1e3);L.set(t,o)}},Xe=function(t){var o=L.get(t);o&&clearTimeout(o)},Qe=function e(t,o){switch(o.type){case v.ADD_TOAST:return p({},t,{toasts:[o.toast].concat(t.toasts).slice(0,qe)});case v.UPDATE_TOAST:return o.toast.id&&Xe(o.toast.id),p({},t,{toasts:t.toasts.map(function(i){return i.id===o.toast.id?p({},i,o.toast):i})});case v.UPSERT_TOAST:var n=o.toast;return t.toasts.find(function(i){return i.id===n.id})?e(t,{type:v.UPDATE_TOAST,toast:n}):e(t,{type:v.ADD_TOAST,toast:n});case v.DISMISS_TOAST:var r=o.toastId;return r?ie(r):t.toasts.forEach(function(i){ie(i.id)}),p({},t,{toasts:t.toasts.map(function(i){return i.id===r||r===void 0?p({},i,{visible:!1}):i})});case v.REMOVE_TOAST:return o.toastId===void 0?p({},t,{toasts:[]}):p({},t,{toasts:t.toasts.filter(function(i){return i.id!==o.toastId})});case v.START_PAUSE:return p({},t,{pausedAt:o.time});case v.END_PAUSE:var a=o.time-(t.pausedAt||0);return p({},t,{pausedAt:void 0,toasts:t.toasts.map(function(i){return p({},i,{pauseDuration:i.pauseDuration+a})})})}},V=[],z={toasts:[],pausedAt:void 0},N=function(t){z=Qe(z,t),V.forEach(function(o){o(z)})},Ye={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ze=function(t){t===void 0&&(t={});var o=d.useState(z),n=o[0],r=o[1];d.useEffect(function(){return V.push(r),function(){var i=V.indexOf(r);i>-1&&V.splice(i,1)}},[n]);var a=n.toasts.map(function(i){var s,u,l;return p({},t,t[i.type],i,{duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||((u=t)==null?void 0:u.duration)||Ye[i.type],style:p({},t.style,(l=t[i.type])==null?void 0:l.style,i.style)})});return p({},n,{toasts:a})},Je=function(t,o,n){return o===void 0&&(o="blank"),p({createdAt:Date.now(),visible:!0,type:o,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n,{id:(n==null?void 0:n.id)||We()})},I=function(t){return function(o,n){var r=Je(o,t,n);return N({type:v.UPSERT_TOAST,toast:r}),r.id}},E=function(t,o){return I("blank")(t,o)};E.error=I("error");E.success=I("success");E.loading=I("loading");E.custom=I("custom");E.dismiss=function(e){N({type:v.DISMISS_TOAST,toastId:e})};E.remove=function(e){return N({type:v.REMOVE_TOAST,toastId:e})};E.promise=function(e,t,o){var n=E.loading(t.loading,p({},o,o==null?void 0:o.loading));return e.then(function(r){return E.success(G(t.success,r),p({id:n},o,o==null?void 0:o.success)),r}).catch(function(r){E.error(G(t.error,r),p({id:n},o,o==null?void 0:o.error))}),e};var Ke=function(t){var o=Ze(t),n=o.toasts,r=o.pausedAt;d.useEffect(function(){if(!r){var i=Date.now(),s=n.map(function(u){if(u.duration!==1/0){var l=(u.duration||0)+u.pauseDuration-(i-u.createdAt);if(l<0){u.visible&&E.dismiss(u.id);return}return setTimeout(function(){return E.dismiss(u.id)},l)}});return function(){s.forEach(function(u){return u&&clearTimeout(u)})}}},[n,r]);var a=d.useMemo(function(){return{startPause:function(){N({type:v.START_PAUSE,time:Date.now()})},endPause:function(){r&&N({type:v.END_PAUSE,time:Date.now()})},updateHeight:function(s,u){return N({type:v.UPDATE_TOAST,toast:{id:s,height:u}})},calculateOffset:function(s,u){var l,c=u||{},f=c.reverseOrder,m=f===void 0?!1:f,h=c.gutter,k=h===void 0?8:h,$=c.defaultPosition,R=n.filter(function(b){return(b.position||$)===(s.position||$)&&b.height}),H=R.findIndex(function(b){return b.id===s.id}),U=R.filter(function(b,q){return q<H&&b.visible}).length,we=(l=R.filter(function(b){return b.visible})).slice.apply(l,m?[U+1]:[0,U]).reduce(function(b,q){return b+(q.height||0)+k},0);return we}}},[n,r]);return{toasts:n,handlers:a}};function me(){var e=g([`
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
`]);return Oe=function(){return e},e}var lt=_("div")(Oe()),ct=_("div")(Ce()),dt=T(_e()),ft=_("div")(Se(),dt),pt=function(t){var o=t.toast,n=o.icon,r=o.type,a=o.iconTheme;return n!==void 0?typeof n=="string"?d.createElement(ft,null,n):n:r==="blank"?null:d.createElement(ct,null,d.createElement(it,Object.assign({},a)),r!=="loading"&&d.createElement(lt,null,r==="error"?d.createElement(rt,Object.assign({},a)):d.createElement(ut,Object.assign({},a))))};function Ae(){var e=g([`
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
`},ht="0%{opacity:0;} 100%{opacity:1;}",gt="0%{opacity:1;} 100%{opacity:0;}",Et=_("div",d.forwardRef)(Ne()),xt=_("div")(Ae()),bt=function(t,o){var n=t.includes("top"),r=n?1:-1,a=pe()?[ht,gt]:[mt(r),vt(r)],i=a[0],s=a[1];return{animation:o?T(i)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":T(s)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},je=d.memo(function(e){var t=e.toast,o=e.position,n=e.style,r=e.children,a=t!=null&&t.height?bt(t.position||o||"top-center",t.visible):{opacity:0},i=d.createElement(pt,{toast:t}),s=d.createElement(xt,Object.assign({},t.ariaProps),G(t.message,t));return d.createElement(Et,{className:t.className,style:p({},a,n,t.style)},typeof r=="function"?r({icon:i,message:s}):d.createElement(d.Fragment,null,i,s))});function De(){var e=g([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return De=function(){return e},e}Ge(d.createElement);var Tt=function(t,o){var n=t.includes("top"),r=n?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return p({left:0,right:0,display:"flex",position:"absolute",transition:pe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+o*(n?1:-1)+"px)"},r,a)},yt=W(De()),F=16,St=function(t){var o=t.reverseOrder,n=t.position,r=n===void 0?"top-center":n,a=t.toastOptions,i=t.gutter,s=t.children,u=t.containerStyle,l=t.containerClassName,c=Ke(a),f=c.toasts,m=c.handlers;return d.createElement("div",{style:p({position:"fixed",zIndex:9999,top:F,left:F,right:F,bottom:F,pointerEvents:"none"},u),className:l,onMouseEnter:m.startPause,onMouseLeave:m.endPause},f.map(function(h){var k=h.position||r,$=m.calculateOffset(h,{reverseOrder:o,gutter:i,defaultPosition:r}),R=Tt(k,$),H=h.height?void 0:He(function(U){m.updateHeight(h.id,U.height)});return d.createElement("div",{ref:H,className:h.visible?yt:"",key:h.id,style:R},h.type==="custom"?G(h.message,h):s?s(h):d.createElement(je,{toast:h,position:k}))}))};function ee(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}const oe={disabled:!1},B=x.createContext(null);var P="unmounted",C="exited",O="entering",D="entered",J="exiting",y=function(e){K(t,e);function t(n,r){var a;a=e.call(this,n,r)||this;var i=r,s=i&&!i.isMounting?n.enter:n.appear,u;return a.appearStatus=null,n.in?s?(u=C,a.appearStatus=O):u=D:n.unmountOnExit||n.mountOnEnter?u=P:u=C,a.state={status:u},a.nextCallback=null,a}t.getDerivedStateFromProps=function(r,a){var i=r.in;return i&&a.status===P?{status:C}:null};var o=t.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(r){var a=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==O&&i!==D&&(a=O):(i===O||i===D)&&(a=J)}this.updateStatus(!1,a)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var r=this.props.timeout,a,i,s;return a=i=s=r,r!=null&&typeof r!="number"&&(a=r.exit,i=r.enter,s=r.appear!==void 0?r.appear:i),{exit:a,enter:i,appear:s}},o.updateStatus=function(r,a){r===void 0&&(r=!1),a!==null?(this.cancelNextCallback(),a===O?this.performEnter(r):this.performExit()):this.props.unmountOnExit&&this.state.status===C&&this.setState({status:P})},o.performEnter=function(r){var a=this,i=this.props.enter,s=this.context?this.context.isMounting:r,u=this.props.nodeRef?[s]:[X.findDOMNode(this),s],l=u[0],c=u[1],f=this.getTimeouts(),m=s?f.appear:f.enter;if(!r&&!i||oe.disabled){this.safeSetState({status:D},function(){a.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:O},function(){a.props.onEntering(l,c),a.onTransitionEnd(m,function(){a.safeSetState({status:D},function(){a.props.onEntered(l,c)})})})},o.performExit=function(){var r=this,a=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:X.findDOMNode(this);if(!a||oe.disabled){this.safeSetState({status:C},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:J},function(){r.props.onExiting(s),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:C},function(){r.props.onExited(s)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(r,a){a=this.setNextCallback(a),this.setState(r,a)},o.setNextCallback=function(r){var a=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,a.nextCallback=null,r(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(r,a){this.setNextCallback(a);var i=this.props.nodeRef?this.props.nodeRef.current:X.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],l=u[0],c=u[1];this.props.addEndListener(l,c)}r!=null&&setTimeout(this.nextCallback,r)},o.render=function(){var r=this.state.status;if(r===P)return null;var a=this.props,i=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var s=ee(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(B.Provider,{value:null},typeof i=="function"?i(r,s):x.cloneElement(x.Children.only(i),s))},t}(x.Component);y.contextType=B;y.propTypes={};function j(){}y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j};y.UNMOUNTED=P;y.EXITED=C;y.ENTERING=O;y.ENTERED=D;y.EXITING=J;const _t=y;var Ct=function(t,o){return t&&o&&o.split(" ").forEach(function(n){return Pe(t,n)})},Q=function(t,o){return t&&o&&o.split(" ").forEach(function(n){return Ie(t,n)})},te=function(e){K(t,e);function t(){for(var n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,[this].concat(a))||this,n.appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(s,u){var l=n.resolveArguments(s,u),c=l[0],f=l[1];n.removeClasses(c,"exit"),n.addClass(c,f?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(s,u)},n.onEntering=function(s,u){var l=n.resolveArguments(s,u),c=l[0],f=l[1],m=f?"appear":"enter";n.addClass(c,m,"active"),n.props.onEntering&&n.props.onEntering(s,u)},n.onEntered=function(s,u){var l=n.resolveArguments(s,u),c=l[0],f=l[1],m=f?"appear":"enter";n.removeClasses(c,m),n.addClass(c,m,"done"),n.props.onEntered&&n.props.onEntered(s,u)},n.onExit=function(s){var u=n.resolveArguments(s),l=u[0];n.removeClasses(l,"appear"),n.removeClasses(l,"enter"),n.addClass(l,"exit","base"),n.props.onExit&&n.props.onExit(s)},n.onExiting=function(s){var u=n.resolveArguments(s),l=u[0];n.addClass(l,"exit","active"),n.props.onExiting&&n.props.onExiting(s)},n.onExited=function(s){var u=n.resolveArguments(s),l=u[0];n.removeClasses(l,"exit"),n.addClass(l,"exit","done"),n.props.onExited&&n.props.onExited(s)},n.resolveArguments=function(s,u){return n.props.nodeRef?[n.props.nodeRef.current,s]:[s,u]},n.getClassNames=function(s){var u=n.props.classNames,l=typeof u=="string",c=l&&u?u+"-":"",f=l?""+c+s:u[s],m=l?f+"-active":u[s+"Active"],h=l?f+"-done":u[s+"Done"];return{baseClassName:f,activeClassName:m,doneClassName:h}},n}var o=t.prototype;return o.addClass=function(r,a,i){var s=this.getClassNames(a)[i+"ClassName"],u=this.getClassNames("enter"),l=u.doneClassName;a==="appear"&&i==="done"&&l&&(s+=" "+l),i==="active"&&r&&r.scrollTop,s&&(this.appliedClasses[a][i]=s,Ct(r,s))},o.removeClasses=function(r,a){var i=this.appliedClasses[a],s=i.base,u=i.active,l=i.done;this.appliedClasses[a]={},s&&Q(r,s),u&&Q(r,u),l&&Q(r,l)},o.render=function(){var r=this.props;r.classNames;var a=ee(r,["classNames"]);return x.createElement(_t,ce({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(x.Component);te.defaultProps={classNames:""};te.propTypes={};const Ot=te;function ne(e,t){var o=function(a){return t&&d.isValidElement(a)?t(a):a},n=Object.create(null);return e&&d.Children.map(e,function(r){return r}).forEach(function(r){n[r.key]=o(r)}),n}function At(e,t){e=e||{},t=t||{};function o(c){return c in t?t[c]:e[c]}var n=Object.create(null),r=[];for(var a in e)a in t?r.length&&(n[a]=r,r=[]):r.push(a);var i,s={};for(var u in t){if(n[u])for(i=0;i<n[u].length;i++){var l=n[u][i];s[n[u][i]]=o(l)}s[u]=o(u)}for(i=0;i<r.length;i++)s[r[i]]=o(r[i]);return s}function A(e,t,o){return o[t]!=null?o[t]:e.props[t]}function Nt(e,t){return ne(e.children,function(o){return d.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:A(o,"appear",e),enter:A(o,"enter",e),exit:A(o,"exit",e)})})}function jt(e,t,o){var n=ne(e.children),r=At(t,n);return Object.keys(r).forEach(function(a){var i=r[a];if(d.isValidElement(i)){var s=a in t,u=a in n,l=t[a],c=d.isValidElement(l)&&!l.props.in;u&&(!s||c)?r[a]=d.cloneElement(i,{onExited:o.bind(null,i),in:!0,exit:A(i,"exit",e),enter:A(i,"enter",e)}):!u&&s&&!c?r[a]=d.cloneElement(i,{in:!1}):u&&s&&d.isValidElement(l)&&(r[a]=d.cloneElement(i,{onExited:o.bind(null,i),in:l.props.in,exit:A(i,"exit",e),enter:A(i,"enter",e)}))}}),r}var Dt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},wt={component:"div",childFactory:function(t){return t}},re=function(e){K(t,e);function t(n,r){var a;a=e.call(this,n,r)||this;var i=a.handleExited.bind(Me(a));return a.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},a}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,a){var i=a.children,s=a.handleExited,u=a.firstRender;return{children:u?Nt(r,s):jt(r,i,s),firstRender:!1}},o.handleExited=function(r,a){var i=ne(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(a),this.mounted&&this.setState(function(s){var u=ce({},s.children);return delete u[r.key],{children:u}}))},o.render=function(){var r=this.props,a=r.component,i=r.childFactory,s=ee(r,["component","childFactory"]),u=this.state.contextValue,l=Dt(this.state.children).map(i);return delete s.appear,delete s.enter,delete s.exit,a===null?x.createElement(B.Provider,{value:u},l):x.createElement(B.Provider,{value:u},x.createElement(a,s,l))},t}(x.Component);re.propTypes={};re.defaultProps=wt;const Rt=re,se=({text:e,show:t,autohide:o})=>w(Rt,{children:t&&w(Ot,{classNames:"SRC-card",timeout:o?{enter:500,exit:300}:{},children:w("div",{className:"SRC-modal",children:e})})}),ue=()=>w(St,{containerClassName:"SynapseToastContainer bootstrap-4-backport",position:"bottom-center",children:e=>w(je,{toast:e,style:{...e.style,animation:e.visible?"fadeInUp 0.5s ease":"fadeOutDown 1s ease"}})}),le=(e,t,o={})=>{const n=ke("synToast-"),r=()=>{E.dismiss(n)},{title:a=void 0,primaryButtonConfig:i=void 0,secondaryButtonConfig:s=void 0,dismissOnPrimaryButtonClick:u=!1,dismissOnSecondaryButtonClick:l=!1}=o;if(i&&"onClick"in i&&u){const f=i.onClick;i.onClick=m=>{f(m),r()}}if(s&&"onClick"in s&&l){const f=s.onClick;s.onClick=m=>{f(m),r()}}let{autoCloseInMs:c=15e3}=o;c===0&&(c=1/0),E(w(Re,{isGlobal:!1,onClose:r,variant:t??"info",show:!0,title:a,description:e,primaryButtonConfig:i,secondaryButtonConfig:s}),{id:n,className:"SynapseToastMessage",duration:c})};try{se.displayName="ToastMessage",se.__docgenInfo={description:`Generalization of a Material-style toast message used in a couple of places. This component is simple and
cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}`,displayName:"ToastMessage",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},autohide:{defaultValue:null,description:"",name:"autohide",required:!0,type:{name:"boolean"}}}}}catch{}try{ue.displayName="SynapseToastContainer",ue.__docgenInfo={description:`Customized ToastContainer for using react-toastify.

Note that this will collide with other notification systems, such as the BootstrapNotify notifications
in SWC.`,displayName:"SynapseToastContainer",props:{}}}catch{}try{le.displayName="displayToast",le.__docgenInfo={description:"Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.",displayName:"displayToast",props:{}}}catch{}export{Ot as C,ue as S,se as T,ee as _,le as d};
//# sourceMappingURL=ToastMessage-200a60a9.js.map
