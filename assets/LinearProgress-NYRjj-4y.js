import{b as j,g as q,_ as M,a as s,c as D,h as t,l as h,m as z,n as U,o as C}from"./createTheme-DKmxwRcy.js";import{r as O}from"./index-BbtDhika.js";import{u as T}from"./index-CmWQNtGo.js";import{u as A,s as m,c as K}from"./DefaultPropsProvider-cSSWhC_N.js";import{j as b}from"./jsx-runtime-BShfRpSZ.js";function E(r){return j("MuiLinearProgress",r)}q("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const X=["className","color","value","valueBuffer","variant"];let l=r=>r,$,k,L,_,B,I;const v=4,W=C($||($=l`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),F=C(k||(k=l`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),G=C(L||(L=l`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),H=r=>{const{classes:a,variant:e,color:o}=r,p={root:["root",`color${t(o)}`,e],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${t(o)}`,e==="buffer"&&`color${t(o)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return K(p,E,a)},y=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?z(r.palette[a].main,.62):U(r.palette[a].main,.5),J=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${t(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:y(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),Q=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${t(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=y(a,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},h(_||(_=l`
    animation: ${0} 3s infinite linear;
  `),G)),V=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${v}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&h(B||(B=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),W)),Y=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:y(a,r.color),transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&h(I||(I=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),F)),er=O.forwardRef(function(a,e){const o=A({props:a,name:"MuiLinearProgress"}),{className:p,color:R="primary",value:g,valueBuffer:x,variant:i="indeterminate"}=o,N=M(o,X),c=s({},o,{color:R,variant:i}),f=H(c),P=T(),u={},d={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&g!==void 0){u["aria-valuenow"]=Math.round(g),u["aria-valuemin"]=0,u["aria-valuemax"]=100;let n=g-100;P&&(n=-n),d.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&x!==void 0){let n=(x||0)-100;P&&(n=-n),d.bar2.transform=`translateX(${n}%)`}return b.jsxs(J,s({className:D(f.root,p),ownerState:c,role:"progressbar"},u,{ref:e},N,{children:[i==="buffer"?b.jsx(Q,{className:f.dashed,ownerState:c}):null,b.jsx(V,{className:f.bar1,ownerState:c,style:d.bar1}),i==="determinate"?null:b.jsx(Y,{className:f.bar2,ownerState:c,style:d.bar2})]}))});export{er as L};
