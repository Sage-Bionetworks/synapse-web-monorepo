import{c as Ie,j as E,g as he,s as ee,h as me,_ as be,b as H,a as Ue,k as je}from"./styled-01bfb76d.js";import{r as a,R as A}from"./index-76fb7be0.js";import{j as I,a as ze}from"./jsx-runtime-9dc53467.js";import{k as te}from"./emotion-react.browser.esm-04dee135.js";import{_ as Oe}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{_ as Ke}from"./assertThisInitialized-081f9914.js";import{_ as Xe}from"./inheritsLoose-c82a83d4.js";import{T as le,u as W}from"./TransitionGroupContext-1474f578.js";import{u as ue}from"./useForkRef-8feb2ebf.js";import{u as Ye}from"./useIsFocusVisible-e5f6c995.js";function ne(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Ae(e,r){e=e||{},r=r||{};function s(d){return d in r?r[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function w(e,r,s){return s[r]!=null?s[r]:e.props[r]}function We(e,r){return ne(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:w(s,"appear",e),enter:w(s,"enter",e),exit:w(s,"exit",e)})})}function He(e,r,s){var l=ne(e.children),n=Ae(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:w(o,"exit",e),enter:w(o,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:w(o,"exit",e),enter:w(o,"enter",e)}))}}),n}var Ge=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},qe={component:"div",childFactory:function(r){return r}},oe=function(e){Xe(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Ke(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?We(n,c):He(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=ne(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Oe({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=Ie(n,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?A.createElement(le.Provider,{value:u},p):A.createElement(le.Provider,{value:u},A.createElement(t,c,p))},r}(A.Component);oe.propTypes={};oe.defaultProps=qe;const Je=oe;function Qe(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=E(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),x={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),I("span",{className:b,style:x,children:I("span",{className:h})})}const Ze=he("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Ze,et=["center","classes","className"];let G=e=>e,ce,pe,fe,de;const Z=550,tt=80,nt=te(ce||(ce=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ot=te(pe||(pe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),it=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),rt=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=ee(Qe,{name:"MuiTouchRipple",slot:"Ripple"})(de||(de=G`
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
`),m.rippleVisible,nt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ot,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,it,({theme:e})=>e.transitions.easing.easeInOut),at=a.forwardRef(function(r,s){const l=me({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=be(l,et),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),x=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const U=a.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:k,rippleSize:_,cb:z}=f;p(y=>[...y,I(st,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:T,rippleY:k,rippleSize:_},d.current)]),d.current+=1,g.current=z},[t]),F=a.useCallback((f={},M={},T=()=>{})=>{const{pulsate:k=!1,center:_=n||M.pulsate,fakeElement:z=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=z?null:R.current,P=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,S,$;if(_||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:D,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(D-P.left),S=Math.round(v-P.top)}if(_)$=Math.sqrt((2*P.width**2+P.height**2)/3),$%2===0&&($+=1);else{const D=Math.max(Math.abs((y?y.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((y?y.clientHeight:0)-S),S)*2+2;$=Math.sqrt(D**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:k,rippleX:V,rippleY:S,rippleSize:$,cb:T})},x.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},tt)):U({pulsate:k,rippleX:V,rippleY:S,rippleSize:$,cb:T})},[n,U]),j=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,M)=>{if(clearTimeout(x.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,x.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:j,start:F,stop:N}),[j,F,N]),I(rt,H({className:E(m.root,t.root,o),ref:R},c,{children:I(Je,{component:null,exit:!0,children:u})}))}),lt=at;function ut(e){return Ue("MuiButtonBase",e)}const ct=he("MuiButtonBase",["root","disabled","focusVisible"]),pt=ct,ft=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],dt=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=je({root:["root",r&&"disabled",s&&"focusVisible"]},ut,n);return s&&l&&(o.root+=` ${l}`),o},ht=ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=a.forwardRef(function(r,s){const l=me({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:F,onFocus:j,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:k,onMouseUp:_,onTouchEnd:z,onTouchMove:y,onTouchStart:P,tabIndex:V=0,TouchRippleProps:S,touchRippleRef:$,type:D}=l,v=be(l,ft),O=a.useRef(null),C=a.useRef(null),ge=ue(C,$),{isFocusVisibleRef:ie,onFocus:Re,onBlur:Me,ref:Te}=Ye(),[L,X]=a.useState(!1);p&&L&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Ce=q&&!d&&!p;a.useEffect(()=>{L&&b&&!d&&q&&C.current.pulsate()},[d,b,L,q]);function B(i,se,_e=g){return W(ae=>(se&&se(ae),!_e&&C.current&&C.current[i](ae),!0))}const Ee=B("start",T),xe=B("stop",U),Ve=B("stop",F),ve=B("stop",_),Be=B("stop",i=>{L&&i.preventDefault(),k&&k(i)}),Pe=B("start",P),Se=B("stop",z),$e=B("stop",y),ke=B("stop",i=>{Me(i),ie.current===!1&&X(!1),h&&h(i)},!1),De=W(i=>{O.current||(O.current=i.currentTarget),Re(i),ie.current===!0&&(X(!0),N&&N(i)),j&&j(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),Le=W(i=>{b&&!Q.current&&L&&C.current&&i.key===" "&&(Q.current=!0,C.current.stop(i,()=>{C.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),f&&f(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),we=W(i=>{b&&i.key===" "&&C.current&&L&&!i.defaultPrevented&&(Q.current=!1,C.current.stop(i,()=>{C.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let Y=u;Y==="button"&&(v.href||v.to)&&(Y=x);const K={};Y==="button"?(K.type=D===void 0?"button":D,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ue(s,Te,O),re=H({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:L}),Ne=dt(re);return ze(ht,H({as:Y,className:E(Ne.root,c),ownerState:re,onBlur:ke,onClick:R,onContextMenu:xe,onFocus:De,onKeyDown:Le,onKeyUp:we,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:$e,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:V,type:D},K,v,{children:[o,Ce?I(lt,H({ref:ge,center:t},S)):null]}))}),Bt=mt;export{Bt as B,Je as T};
//# sourceMappingURL=ButtonBase-f3be4fb1.js.map
