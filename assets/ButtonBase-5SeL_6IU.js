import{_ as A}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{_ as ee,b as C,g as me,k as te,a as Ie}from"./createTheme-CwlmBDro.js";import{r as a,R as W}from"./index-Dl6G-zuu.js";import{s as ne,u as be,c as _e}from"./styled-OgyJf9MH.js";import{j as F}from"./jsx-runtime-Du8NFWEI.js";import{a as ue,b as Ue,u as H}from"./TransitionGroupContext-DGN18uA0.js";import{_ as ze}from"./assertThisInitialized-B9jnkVVz.js";import{_ as Oe}from"./inheritsLoose-B7h9gheN.js";import{u as ce}from"./useForkRef-CEBgoE3Z.js";import{u as Ke}from"./useIsFocusVisible-DHYsnH_Q.js";function oe(e,s){var r=function(t){return s&&a.isValidElement(t)?s(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Ae(e,s){e=e||{},s=s||{};function r(d){return d in s?s[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in s?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in s){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function $(e,s,r){return r[s]!=null?r[s]:e.props[s]}function Xe(e,s){return oe(e.children,function(r){return a.cloneElement(r,{onExited:s.bind(null,r),in:!0,appear:$(r,"appear",e),enter:$(r,"enter",e),exit:$(r,"exit",e)})})}function Ye(e,s,r){var l=oe(e.children),n=Ae(s,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in s,u=t in l,p=s[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:$(o,"exit",e),enter:$(o,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:$(o,"exit",e),enter:$(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(s){return e[s]})},He={component:"div",childFactory:function(s){return s}},ie=function(e){Oe(s,e);function s(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(ze(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var r=s.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Xe(n,c):Ye(n,o,c),firstRender:!1}},r.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},s}(W.Component);ie.propTypes={};ie.defaultProps=He;const Ge=ie;function qe(e){const{className:s,classes:r,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=C(s,r.ripple,r.rippleVisible,l&&r.ripplePulsate),E={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=C(r.child,d&&r.childLeaving,l&&r.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),F.jsx("span",{className:b,style:E,children:F.jsx("span",{className:h})})}const m=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Je=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,Qe=80,Ze=te(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),et=te(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),tt=te(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),nt=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ot=ne(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,tt,({theme:e})=>e.transitions.easing.easeInOut),it=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Je),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=Ue(),h=a.useRef(null),R=a.useRef(null),_=a.useCallback(f=>{const{pulsate:M,rippleX:x,rippleY:S,rippleSize:I,cb:z}=f;p(y=>[...y,F.jsx(ot,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:x,rippleY:S,rippleSize:I},d.current)]),d.current+=1,g.current=z},[t]),N=a.useCallback((f={},M={},x=()=>{})=>{const{pulsate:S=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=z?null:R.current,P=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,D,L;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),D=Math.round(P.height/2);else{const{clientX:k,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(k-P.left),D=Math.round(V-P.top)}if(I)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((y?y.clientHeight:0)-D),D)*2+2;L=Math.sqrt(k**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:S,rippleX:v,rippleY:D,rippleSize:L,cb:x})},E.start(Qe,()=>{h.current&&(h.current(),h.current=null)})):_({pulsate:S,rippleX:v,rippleY:D,rippleSize:L,cb:x})},[n,_,E]),U=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((f,M)=>{if(E.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,E.start(0,()=>{j(f,M)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=M},[E]);return a.useImperativeHandle(r,()=>({pulsate:U,start:N,stop:j}),[U,N,j]),F.jsx(nt,A({className:C(m.root,t.root,o),ref:R},c,{children:F.jsx(Ge,{component:null,exit:!0,children:u})}))}),st=it;function rt(e){return Ie("MuiButtonBase",e)}const at=me("MuiButtonBase",["root","disabled","focusVisible"]),lt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ut=e=>{const{disabled:s,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=_e({root:["root",s&&"disabled",r&&"focusVisible"]},rt,n);return r&&l&&(o.root+=` ${l}`),o},ct=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${at.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),pt=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:N,onFocus:U,onFocusVisible:j,onKeyDown:f,onKeyUp:M,onMouseDown:x,onMouseLeave:S,onMouseUp:I,onTouchEnd:z,onTouchMove:y,onTouchStart:P,tabIndex:v=0,TouchRippleProps:D,touchRippleRef:L,type:k}=l,V=ee(l,lt),O=a.useRef(null),T=a.useRef(null),ge=ce(T,L),{isFocusVisibleRef:se,onFocus:Re,onBlur:Me,ref:xe}=Ke(),[w,X]=a.useState(!1);p&&w&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Te=q&&!d&&!p;a.useEffect(()=>{w&&b&&!d&&q&&T.current.pulsate()},[d,b,w,q]);function B(i,ae,je=g){return H(le=>(ae&&ae(le),!je&&T.current&&T.current[i](le),!0))}const Ce=B("start",x),Ee=B("stop",_),ve=B("stop",N),Ve=B("stop",I),Be=B("stop",i=>{w&&i.preventDefault(),S&&S(i)}),Pe=B("start",P),De=B("stop",z),Le=B("stop",y),Se=B("stop",i=>{Me(i),se.current===!1&&X(!1),h&&h(i)},!1),ke=H(i=>{O.current||(O.current=i.currentTarget),Re(i),se.current===!0&&(X(!0),j&&j(i)),U&&U(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),we=H(i=>{b&&!Q.current&&w&&T.current&&i.key===" "&&(Q.current=!0,T.current.stop(i,()=>{T.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),f&&f(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),$e=H(i=>{b&&i.key===" "&&T.current&&w&&!i.defaultPrevented&&(Q.current=!1,T.current.stop(i,()=>{T.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let Y=u;Y==="button"&&(V.href||V.to)&&(Y=E);const K={};Y==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(r,xe,O),re=A({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:w}),Ne=ut(re);return F.jsxs(ct,A({as:Y,className:C(Ne.root,c),ownerState:re,onBlur:Se,onClick:R,onContextMenu:Ee,onFocus:ke,onKeyDown:we,onKeyUp:$e,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:De,onTouchMove:Le,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:v,type:k},K,V,{children:[o,Te?F.jsx(st,A({ref:ge,center:t},D)):null]}))}),Ct=pt;export{Ct as B,Ge as T};
