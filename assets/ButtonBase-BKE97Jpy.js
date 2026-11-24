import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-DNOQmUAz.js";import{_ as r,b as i,g as a,h as o,it as s,st as c,v as l,y as u}from"./createTheme-CSYc7DMj.js";import{t as d}from"./jsx-runtime-BB9-612F.js";import{b as f,d as p,n as m,o as h,t as g}from"./DefaultPropsProvider-b0crMAyn.js";import{n as _,t as v}from"./useForkRef-Cs6VMKPo.js";import{n as y,t as ee}from"./useEventCallback-BE7zlEFZ.js";import{a as te,c as b,f as x,i as S,l as C,n as ne,o as w,r as re,s as ie}from"./useTimeout-C00rC1Z8.js";import{n as ae}from"./isFocusVisible-B4yKpSyb.js";function T(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function E(){return(E=e((()=>{})))()}function D(e,t){var n=function(e){return t&&(0,j.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&j.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function oe(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function O(e,t,n){return n[t]==null?e.props[t]:n[t]}function k(e,t){return D(e.children,function(n){return(0,j.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:O(n,`appear`,e),enter:O(n,`enter`,e),exit:O(n,`exit`,e)})})}function A(e,t,n){var r=D(e.children),i=oe(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,j.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,j.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,j.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:O(o,`exit`,e),enter:O(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,j.cloneElement)(o,{in:!1}):c&&s&&(0,j.isValidElement)(l)&&(i[a]=(0,j.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:O(o,`exit`,e),enter:O(o,`enter`,e)}))}}),i}var j;function M(){return(M=e((()=>{j=n()})))()}var N,P,F,I;function L(){return(L=e((()=>{C(),N=t(n()),ie(),M(),P=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},F={component:`div`,childFactory:function(e){return e}},I=function(e){b(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(T(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?k(e,r):A(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=D(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=c({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=x(e,[`component`,`childFactory`]),i=this.state.contextValue,a=P(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?N.createElement(w.Provider,{value:i},a):N.createElement(w.Provider,{value:i},N.createElement(t,r,a))},t}(N.Component),I.propTypes={},I.defaultProps=F})))()}function se(){return z.use()}function ce(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var R,z;function B(){return(B=e((()=>{R=t(n()),S(),z=class e{static create(){return new e}static use(){let t=te(e.create).current,[n,r]=R.useState(!1);return t.shouldMount=n,t.setShouldMount=r,R.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=ce(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}})))()}function le(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:c,timeout:l}=e,[d,f]=V.useState(!1),p=u(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},h=u(n.child,d&&n.childLeaving,r&&n.childPulsate);return!s&&!d&&f(!0),V.useEffect(()=>{if(!s&&c!=null){let e=setTimeout(c,l);return()=>{clearTimeout(e)}}},[c,s,l]),(0,H.jsx)(`span`,{className:p,style:m,children:(0,H.jsx)(`span`,{className:h})})}var V,H;function U(){return(U=e((()=>{V=t(n()),i(),H=d()})))()}var W;function G(){return(G=e((()=>{a(),W=o(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`])})))()}var K,q,J,Y,ue,X,de,fe,pe;function me(){return(me=e((()=>{K=t(n()),L(),i(),ne(),h(),g(),U(),G(),q=d(),J=550,Y=s`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,ue=s`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,X=s`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,de=p(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),fe=p(le,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${W.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Y};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${W.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${W.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${W.childLeaving} {
    opacity: 0;
    animation-name: ${ue};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${W.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${X};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,pe=K.forwardRef(function(e,t){let{center:n=!1,classes:r={},className:i,...a}=m({props:e,name:`MuiTouchRipple`}),[o,s]=K.useState([]),c=K.useRef(0),l=K.useRef(null);K.useEffect(()=>{l.current&&=(l.current(),null)},[o]);let d=K.useRef(!1),f=re(),p=K.useRef(null),h=K.useRef(null),g=K.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:i,rippleSize:a,cb:o}=e;s(e=>[...e,(0,q.jsx)(fe,{classes:{ripple:u(r.ripple,W.ripple),rippleVisible:u(r.rippleVisible,W.rippleVisible),ripplePulsate:u(r.ripplePulsate,W.ripplePulsate),child:u(r.child,W.child),childLeaving:u(r.childLeaving,W.childLeaving),childPulsate:u(r.childPulsate,W.childPulsate)},timeout:J,pulsate:t,rippleX:n,rippleY:i,rippleSize:a},c.current)]),c.current+=1,l.current=o},[r]),_=K.useCallback((e={},t={},r=()=>{})=>{let{pulsate:i=!1,center:a=n||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&d.current){d.current=!1;return}e?.type===`touchstart`&&(d.current=!0);let s=o?null:h.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,u,m;if(a||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(a)m=Math.sqrt((2*c.width**2+c.height**2)/3),m%2==0&&(m+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-u),u)*2+2;m=Math.sqrt(e**2+t**2)}e?.touches?p.current===null&&(p.current=()=>{g({pulsate:i,rippleX:l,rippleY:u,rippleSize:m,cb:r})},f.start(80,()=>{p.current&&=(p.current(),null)})):g({pulsate:i,rippleX:l,rippleY:u,rippleSize:m,cb:r})},[n,g,f]),v=K.useCallback(()=>{_({},{pulsate:!0})},[_]),y=K.useCallback((e,t)=>{f.clear(),e?.type===`touchend`&&p.current?(p.current(),p.current=null,f.start(0,()=>{y(e,t)})):(p.current=null,s(e=>e.length>0?e.slice(1):e),l.current=t)},[f]);return K.useImperativeHandle(t,()=>({pulsate:v,start:_,stop:y}),[v,_,y]),(0,q.jsx)(de,{className:u(W.root,r.root,i),ref:h,...a,children:(0,q.jsx)(I,{component:null,exit:!0,children:o})})})})))()}function he(e){return r(`MuiButtonBase`,e)}var ge;function _e(){return(_e=e((()=>{a(),l(),ge=o(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`])})))()}function Z(e,t,n,r=!1){return y(i=>(n&&n(i),r||e[t](i),!0))}var Q,$,ve,ye,be;function xe(){return(xe=e((()=>{Q=t(n()),i(),h(),g(),v(),ee(),B(),me(),_e(),$=d(),ve=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,a=f({root:[`root`,t&&`disabled`,n&&`focusVisible`]},he,i);return n&&r&&(a.root+=` ${r}`),a},ye=p(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${ge.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),be=Q.forwardRef(function(e,t){let n=m({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:o,component:s=`button`,disabled:c=!1,disableRipple:l=!1,disableTouchRipple:d=!1,focusRipple:f=!1,focusVisibleClassName:p,LinkComponent:h=`a`,onBlur:g,onClick:v,onContextMenu:ee,onDragLeave:te,onFocus:b,onFocusVisible:x,onKeyDown:S,onKeyUp:C,onMouseDown:ne,onMouseLeave:w,onMouseUp:re,onTouchEnd:ie,onTouchMove:T,onTouchStart:E,tabIndex:D=0,TouchRippleProps:oe,touchRippleRef:O,type:k,...A}=n,j=Q.useRef(null),M=se(),N=_(M.ref,O),[P,F]=Q.useState(!1);c&&P&&F(!1),Q.useImperativeHandle(r,()=>({focusVisible:()=>{F(!0),j.current.focus()}}),[]);let I=M.shouldMount&&!l&&!c;Q.useEffect(()=>{P&&f&&!l&&M.pulsate()},[l,f,P,M]);let L=Z(M,`start`,ne,d),ce=Z(M,`stop`,ee,d),R=Z(M,`stop`,te,d),z=Z(M,`stop`,re,d),B=Z(M,`stop`,e=>{P&&e.preventDefault(),w&&w(e)},d),le=Z(M,`start`,E,d),V=Z(M,`stop`,ie,d),H=Z(M,`stop`,T,d),U=Z(M,`stop`,e=>{ae(e.target)||F(!1),g&&g(e)},!1),W=y(e=>{j.current||=e.currentTarget,ae(e.target)&&(F(!0),x&&x(e)),b&&b(e)}),G=()=>{let e=j.current;return e?e.tagName!==`BUTTON`&&!(e.tagName===`A`&&e.href):s&&s!==`button`},K=y(e=>{f&&!e.repeat&&P&&e.key===` `&&M.stop(e,()=>{M.start(e)}),e.target===e.currentTarget&&G()&&e.key===` `&&e.preventDefault(),S&&S(e),e.target===e.currentTarget&&G()&&e.key===`Enter`&&!c&&(e.preventDefault(),v&&v(e))}),q=y(e=>{f&&e.key===` `&&P&&!e.defaultPrevented&&M.stop(e,()=>{M.pulsate(e)}),C&&C(e),v&&e.target===e.currentTarget&&G()&&e.key===` `&&!e.defaultPrevented&&!c&&v(e)}),J=s;J===`button`&&(A.href||A.to)&&(J=h);let Y={};if(J===`button`){let e=!!A.formAction;Y.type=k===void 0&&!e?`button`:k,Y.disabled=c}else!A.href&&!A.to&&(Y.role=`button`),c&&(Y[`aria-disabled`]=c);let ue=_(t,j),X={...n,centerRipple:i,component:s,disabled:c,disableRipple:l,disableTouchRipple:d,focusRipple:f,tabIndex:D,focusVisible:P},de=ve(X);return(0,$.jsxs)(ye,{as:J,className:u(de.root,o),ownerState:X,onBlur:U,onClick:v,onContextMenu:ce,onFocus:W,onKeyDown:K,onKeyUp:q,onMouseDown:L,onMouseLeave:B,onMouseUp:z,onDragLeave:R,onTouchEnd:V,onTouchMove:H,onTouchStart:le,ref:ue,tabIndex:c?-1:D,type:k,...Y,...A,children:[a,I?(0,$.jsx)(pe,{ref:N,center:i,...oe}):null]})})})))()}export{T as a,L as i,xe as n,E as o,I as r,be as t};