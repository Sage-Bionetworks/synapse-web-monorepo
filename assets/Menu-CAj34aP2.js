import{a as G,g as W,_,b as l,d as $}from"./createTheme-CWLQ-DuD.js";import{r as i}from"./index-Cu9bd8lq.js";import{s as x,r as H,u as V,c as q}from"./styled-BNZh1-oq.js";import{u as B}from"./index-fnC48NPc.js";import{j as w}from"./jsx-runtime-DoxjgJx5.js";import{P as J,a as Q}from"./Popover-CnbLQcIR.js";import{M as X}from"./MenuList-BNT0Hd0h.js";import{u as E}from"./Grow-Bq_CDIHS.js";function Y(o){return G("MuiMenu",o)}W("MuiMenu",["root","paper","list"]);const Z=["onEntering"],oo=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],so={vertical:"top",horizontal:"right"},to={vertical:"top",horizontal:"left"},eo=o=>{const{classes:t}=o;return q({root:["root"],paper:["paper"],list:["list"]},Y,t)},ro=x(J,{shouldForwardProp:o=>H(o)||o==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(o,t)=>t.root})({}),no=x(Q,{name:"MuiMenu",slot:"Paper",overridesResolver:(o,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ao=x(X,{name:"MuiMenu",slot:"List",overridesResolver:(o,t)=>t.list})({outline:0}),Mo=i.forwardRef(function(t,R){var g,y;const e=V({props:t,name:"MuiMenu"}),{autoFocus:p=!0,children:S,className:N,disableAutoFocusItem:u=!1,MenuListProps:c={},onClose:m,open:T,PaperProps:b={},PopoverClasses:j,transitionDuration:C="auto",TransitionProps:{onEntering:P}={},variant:d="selectedMenu",slots:f={},slotProps:L={}}=e,F=_(e.TransitionProps,Z),D=_(e,oo),M=B(),r=l({},e,{autoFocus:p,disableAutoFocusItem:u,MenuListProps:c,onEntering:P,PaperProps:b,transitionDuration:C,TransitionProps:F,variant:d}),h=eo(r),O=p&&!u&&T,v=i.useRef(null),U=(s,a)=>{v.current&&v.current.adjustStyleForScrollbar(s,{direction:M?"rtl":"ltr"}),P&&P(s,a)},z=s=>{s.key==="Tab"&&(s.preventDefault(),m&&m(s,"tabKeyDown"))};let n=-1;i.Children.map(S,(s,a)=>{i.isValidElement(s)&&(s.props.disabled||(d==="selectedMenu"&&s.props.selected||n===-1)&&(n=a))});const I=(g=f.paper)!=null?g:no,A=(y=L.paper)!=null?y:b,K=E({elementType:f.root,externalSlotProps:L.root,ownerState:r,className:[h.root,N]}),k=E({elementType:I,externalSlotProps:A,ownerState:r,className:h.paper});return w.jsx(ro,l({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:M?"right":"left"},transformOrigin:M?so:to,slots:{paper:I,root:f.root},slotProps:{root:K,paper:k},open:T,ref:R,transitionDuration:C,TransitionProps:l({onEntering:U},F),ownerState:r},D,{classes:j,children:w.jsx(ao,l({onKeyDown:z,actions:v,autoFocus:p&&(n===-1||u),autoFocusItem:O,variant:d},c,{className:$(h.list,c.className),children:S}))}))});export{Mo as M};