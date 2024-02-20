import{_ as X}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as ee,e as E,g as me,s as te,c as be,a as _e,f as Ue}from"./styled-3c6f4d83.js";import{r as a,R as W}from"./index-76fb7be0.js";import{j as _,a as ze}from"./jsx-runtime-9dc53467.js";import{k as ne}from"./emotion-react.browser.esm-5fddd3df.js";import{a as ue,b as je,u as H}from"./TransitionGroupContext-e6fd87c7.js";import{_ as Oe}from"./assertThisInitialized-081f9914.js";import{_ as Ke}from"./inheritsLoose-c82a83d4.js";import{u as ce}from"./useForkRef-8feb2ebf.js";import{u as Xe}from"./useIsFocusVisible-18cd238e.js";function oe(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Ye(e,r){e=e||{},r=r||{};function s(f){return f in r?r[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function w(e,r,s){return s[r]!=null?s[r]:e.props[r]}function Ae(e,r){return oe(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:w(s,"appear",e),enter:w(s,"enter",e),exit:w(s,"exit",e)})})}function We(e,r,s){var l=oe(e.children),n=Ye(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:w(o,"exit",e),enter:w(o,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:w(o,"exit",e),enter:w(o,"enter",e)}))}}),n}var He=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},Ge={component:"div",childFactory:function(r){return r}},ie=function(e){Ke(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ae(n,c):We(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=He(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},r}(W.Component);ie.propTypes={};ie.defaultProps=Ge;const qe=ie;function Je(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=E(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),x={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(s.child,f&&s.childLeaving,l&&s.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),_("span",{className:b,style:x,children:_("span",{className:h})})}const Qe=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Qe,Ze=["center","classes","className"];let G=e=>e,pe,de,fe,he;const Z=550,et=80,tt=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),nt=ne(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=ne(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),it=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),rt=te(Je,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
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
`),m.rippleVisible,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,nt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),st=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Ze),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),x=je(),h=a.useRef(null),R=a.useRef(null),U=a.useCallback(d=>{const{pulsate:M,rippleX:y,rippleY:k,rippleSize:I,cb:j}=d;p(C=>[...C,_(rt,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:y,rippleY:k,rippleSize:I},f.current)]),f.current+=1,g.current=j},[t]),F=a.useCallback((d={},M={},y=()=>{})=>{const{pulsate:k=!1,center:I=n||M.pulsate,fakeElement:j=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const C=j?null:R.current,P=C?C.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,S,D;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)V=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:L,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;V=Math.round(L-P.left),S=Math.round(v-P.top)}if(I)D=Math.sqrt((2*P.width**2+P.height**2)/3),D%2===0&&(D+=1);else{const L=Math.max(Math.abs((C?C.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((C?C.clientHeight:0)-S),S)*2+2;D=Math.sqrt(L**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:k,rippleX:V,rippleY:S,rippleSize:D,cb:y})},x.start(et,()=>{h.current&&(h.current(),h.current=null)})):U({pulsate:k,rippleX:V,rippleY:S,rippleSize:D,cb:y})},[n,U,x]),z=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((d,M)=>{if(x.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,x.start(0,()=>{N(d,M)});return}h.current=null,p(y=>y.length>0?y.slice(1):y),g.current=M},[x]);return a.useImperativeHandle(s,()=>({pulsate:z,start:F,stop:N}),[z,F,N]),_(it,X({className:E(m.root,t.root,o),ref:R},c,{children:_(qe,{component:null,exit:!0,children:u})}))}),at=st;function lt(e){return _e("MuiButtonBase",e)}const ut=me("MuiButtonBase",["root","disabled","focusVisible"]),ct=ut,pt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],dt=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=Ue({root:["root",r&&"disabled",s&&"focusVisible"]},lt,n);return s&&l&&(o.root+=` ${l}`),o},ft=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ht=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:F,onFocus:z,onFocusVisible:N,onKeyDown:d,onKeyUp:M,onMouseDown:y,onMouseLeave:k,onMouseUp:I,onTouchEnd:j,onTouchMove:C,onTouchStart:P,tabIndex:V=0,TouchRippleProps:S,touchRippleRef:D,type:L}=l,v=ee(l,pt),O=a.useRef(null),T=a.useRef(null),ge=ce(T,D),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:ye}=Xe(),[$,Y]=a.useState(!1);p&&$&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,Ce]=a.useState(!1);a.useEffect(()=>{Ce(!0)},[]);const Te=q&&!f&&!p;a.useEffect(()=>{$&&b&&!f&&q&&T.current.pulsate()},[f,b,$,q]);function B(i,ae,Ie=g){return H(le=>(ae&&ae(le),!Ie&&T.current&&T.current[i](le),!0))}const Ee=B("start",y),xe=B("stop",U),Ve=B("stop",F),ve=B("stop",I),Be=B("stop",i=>{$&&i.preventDefault(),k&&k(i)}),Pe=B("start",P),Se=B("stop",j),De=B("stop",C),ke=B("stop",i=>{Me(i),re.current===!1&&Y(!1),h&&h(i)},!1),Le=H(i=>{O.current||(O.current=i.currentTarget),Re(i),re.current===!0&&(Y(!0),N&&N(i)),z&&z(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),$e=H(i=>{b&&!Q.current&&$&&T.current&&i.key===" "&&(Q.current=!0,T.current.stop(i,()=>{T.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),we=H(i=>{b&&i.key===" "&&T.current&&$&&!i.defaultPrevented&&(Q.current=!1,T.current.stop(i,()=>{T.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let A=u;A==="button"&&(v.href||v.to)&&(A=x);const K={};A==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(s,ye,O),se=X({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:$}),Ne=dt(se);return ze(ft,X({as:A,className:E(Ne.root,c),ownerState:se,onBlur:ke,onClick:R,onContextMenu:xe,onFocus:Le,onKeyDown:$e,onKeyUp:we,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:De,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:V,type:L},K,v,{children:[o,Te?_(at,X({ref:ge,center:t},S)):null]}))}),vt=ht;export{vt as B,qe as T};
