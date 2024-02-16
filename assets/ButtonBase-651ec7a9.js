import{_ as X}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as ee,e as E,g as me,s as te,c as be,a as _e,f as Ue}from"./styled-87b6157a.js";import{r as a,R as W}from"./index-76fb7be0.js";import{j as _,a as ze}from"./jsx-runtime-9dc53467.js";import{k as ne}from"./emotion-react.browser.esm-6130a288.js";import{_ as je}from"./assertThisInitialized-081f9914.js";import{_ as Oe}from"./inheritsLoose-c82a83d4.js";import{T as ue,u as H}from"./TransitionGroupContext-1474f578.js";import{u as ce}from"./useForkRef-8feb2ebf.js";import{u as Ke}from"./useIsFocusVisible-e5f6c995.js";function oe(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Xe(e,r){e=e||{},r=r||{};function s(d){return d in r?r[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function w(e,r,s){return s[r]!=null?s[r]:e.props[r]}function Ye(e,r){return oe(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:w(s,"appear",e),enter:w(s,"enter",e),exit:w(s,"exit",e)})})}function Ae(e,r,s){var l=oe(e.children),n=Xe(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:w(o,"exit",e),enter:w(o,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:w(o,"exit",e),enter:w(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},He={component:"div",childFactory:function(r){return r}},ie=function(e){Oe(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(je(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ye(n,c):Ae(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},r}(W.Component);ie.propTypes={};ie.defaultProps=He;const Ge=ie;function qe(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=E(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),x={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),_("span",{className:b,style:x,children:_("span",{className:h})})}const Je=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Je,Qe=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,Ze=80,et=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=te(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
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
`),m.rippleVisible,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),rt=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Qe),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),x=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const U=a.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:k,rippleSize:I,cb:j}=f;p(y=>[...y,_(it,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:T,rippleY:k,rippleSize:I},d.current)]),d.current+=1,g.current=j},[t]),F=a.useCallback((f={},M={},T=()=>{})=>{const{pulsate:k=!1,center:I=n||M.pulsate,fakeElement:j=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=j?null:R.current,P=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,S,D;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:L,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(L-P.left),S=Math.round(v-P.top)}if(I)D=Math.sqrt((2*P.width**2+P.height**2)/3),D%2===0&&(D+=1);else{const L=Math.max(Math.abs((y?y.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((y?y.clientHeight:0)-S),S)*2+2;D=Math.sqrt(L**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:k,rippleX:V,rippleY:S,rippleSize:D,cb:T})},x.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Ze)):U({pulsate:k,rippleX:V,rippleY:S,rippleSize:D,cb:T})},[n,U]),z=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,M)=>{if(clearTimeout(x.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,x.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:z,start:F,stop:N}),[z,F,N]),_(ot,X({className:E(m.root,t.root,o),ref:R},c,{children:_(Ge,{component:null,exit:!0,children:u})}))}),st=rt;function at(e){return _e("MuiButtonBase",e)}const lt=me("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=Ue({root:["root",r&&"disabled",s&&"focusVisible"]},at,n);return s&&l&&(o.root+=` ${l}`),o},ft=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:F,onFocus:z,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:k,onMouseUp:I,onTouchEnd:j,onTouchMove:y,onTouchStart:P,tabIndex:V=0,TouchRippleProps:S,touchRippleRef:D,type:L}=l,v=ee(l,ct),O=a.useRef(null),C=a.useRef(null),ge=ce(C,D),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:Te}=Ke(),[$,Y]=a.useState(!1);p&&$&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Ce=q&&!d&&!p;a.useEffect(()=>{$&&b&&!d&&q&&C.current.pulsate()},[d,b,$,q]);function B(i,ae,Ie=g){return H(le=>(ae&&ae(le),!Ie&&C.current&&C.current[i](le),!0))}const Ee=B("start",T),xe=B("stop",U),Ve=B("stop",F),ve=B("stop",I),Be=B("stop",i=>{$&&i.preventDefault(),k&&k(i)}),Pe=B("start",P),Se=B("stop",j),De=B("stop",y),ke=B("stop",i=>{Me(i),re.current===!1&&Y(!1),h&&h(i)},!1),Le=H(i=>{O.current||(O.current=i.currentTarget),Re(i),re.current===!0&&(Y(!0),N&&N(i)),z&&z(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),$e=H(i=>{b&&!Q.current&&$&&C.current&&i.key===" "&&(Q.current=!0,C.current.stop(i,()=>{C.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),f&&f(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),we=H(i=>{b&&i.key===" "&&C.current&&$&&!i.defaultPrevented&&(Q.current=!1,C.current.stop(i,()=>{C.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let A=u;A==="button"&&(v.href||v.to)&&(A=x);const K={};A==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(s,Te,O),se=X({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:$}),Ne=pt(se);return ze(ft,X({as:A,className:E(Ne.root,c),ownerState:se,onBlur:ke,onClick:R,onContextMenu:xe,onFocus:Le,onKeyDown:$e,onKeyUp:we,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:De,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:V,type:L},K,v,{children:[o,Ce?_(st,X({ref:ge,center:t},S)):null]}))}),Vt=dt;export{Vt as B,Ge as T};
