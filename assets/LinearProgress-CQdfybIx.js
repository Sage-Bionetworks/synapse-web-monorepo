import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-DNOQmUAz.js";import{_ as r,at as i,b as a,g as o,nt as s,v as c,x as l,y as u}from"./createTheme-CL4c-Jqh.js";import{t as d}from"./jsx-runtime-BB9-612F.js";import{b as f,c as p,d as m,i as h,l as g,n as _,o as v,r as y,t as b}from"./DefaultPropsProvider-DWZA7hHC.js";import{n as x,r as S}from"./RtlProvider-OcPdhS-_.js";import{n as C,t as w}from"./createSimplePaletteValueFilter-BZ8R_unU.js";function T(e){return c(`MuiLinearProgress`,e)}function E(){return(E=e((()=>{r(),u(),o(`MuiLinearProgress`,[`root`,`colorPrimary`,`colorSecondary`,`determinate`,`indeterminate`,`buffer`,`query`,`dashed`,`dashedColorPrimary`,`dashedColorSecondary`,`bar`,`bar1`,`bar2`,`barColorPrimary`,`barColorSecondary`,`bar1Indeterminate`,`bar1Determinate`,`bar1Buffer`,`bar2Indeterminate`,`bar2Buffer`])})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{D=t(n()),l(),x(),v(),y(),C(),b(),g(),E(),O=d(),k=4,A=i`
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
`,j=typeof A==`string`?null:s`
        animation: ${A} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `,M=i`
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
`,N=typeof M==`string`?null:s`
        animation: ${M} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `,P=i`
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
`,F=typeof P==`string`?null:s`
        animation: ${P} 3s infinite linear;
      `,I=e=>{let{classes:t,variant:n,color:r}=e,i={root:[`root`,`color${p(r)}`,n],dashed:[`dashed`,`dashedColor${p(r)}`],bar1:[`bar`,`bar1`,`barColor${p(r)}`,(n===`indeterminate`||n===`query`)&&`bar1Indeterminate`,n===`determinate`&&`bar1Determinate`,n===`buffer`&&`bar1Buffer`],bar2:[`bar`,`bar2`,n!==`buffer`&&`barColor${p(r)}`,n===`buffer`&&`color${p(r)}`,(n===`indeterminate`||n===`query`)&&`bar2Indeterminate`,n===`buffer`&&`bar2Buffer`]};return f(i,T,t)},L=(e,t)=>e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode===`light`?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.5),R=m(`span`,{name:`MuiLinearProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${p(n.color)}`],t[n.variant]]}})(h(({theme:e})=>({position:`relative`,overflow:`hidden`,display:`block`,height:4,zIndex:0,"@media print":{colorAdjust:`exact`},variants:[...Object.entries(e.palette).filter(w()).map(([t])=>({props:{color:t},style:{backgroundColor:L(e,t)}})),{props:({ownerState:e})=>e.color===`inherit`&&e.variant!==`buffer`,style:{"&::before":{content:`""`,position:`absolute`,left:0,top:0,right:0,bottom:0,backgroundColor:`currentColor`,opacity:.3}}},{props:{variant:`buffer`},style:{backgroundColor:`transparent`}},{props:{variant:`query`},style:{transform:`rotate(180deg)`}}]}))),z=m(`span`,{name:`MuiLinearProgress`,slot:`Dashed`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.dashed,t[`dashedColor${p(n.color)}`]]}})(h(({theme:e})=>({position:`absolute`,marginTop:0,height:`100%`,width:`100%`,backgroundSize:`10px 10px`,backgroundPosition:`0 -23px`,variants:[{props:{color:`inherit`},style:{opacity:.3,backgroundImage:`radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`}},...Object.entries(e.palette).filter(w()).map(([t])=>{let n=L(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),F||{animation:`${P} 3s infinite linear`}),B=m(`span`,{name:`MuiLinearProgress`,slot:`Bar1`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.bar,t.bar1,t[`barColor${p(n.color)}`],(n.variant===`indeterminate`||n.variant===`query`)&&t.bar1Indeterminate,n.variant===`determinate`&&t.bar1Determinate,n.variant===`buffer`&&t.bar1Buffer]}})(h(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[{props:{color:`inherit`},style:{backgroundColor:`currentColor`}},...Object.entries(e.palette).filter(w()).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}})),{props:{variant:`determinate`},style:{transition:`transform .${k}s linear`}},{props:{variant:`buffer`},style:{zIndex:1,transition:`transform .${k}s linear`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:j||{animation:`${A} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),V=m(`span`,{name:`MuiLinearProgress`,slot:`Bar2`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.bar,t.bar2,t[`barColor${p(n.color)}`],(n.variant===`indeterminate`||n.variant===`query`)&&t.bar2Indeterminate,n.variant===`buffer`&&t.bar2Buffer]}})(h(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[...Object.entries(e.palette).filter(w()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}})),{props:({ownerState:e})=>e.variant!==`buffer`&&e.color!==`inherit`,style:{backgroundColor:`var(--LinearProgressBar2-barColor, currentColor)`}},{props:({ownerState:e})=>e.variant!==`buffer`&&e.color===`inherit`,style:{backgroundColor:`currentColor`}},{props:{color:`inherit`},style:{opacity:.3}},...Object.entries(e.palette).filter(w()).map(([t])=>({props:{color:t,variant:`buffer`},style:{backgroundColor:L(e,t),transition:`transform .${k}s linear`}})),{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:N||{animation:`${M} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),H=D.forwardRef(function(e,t){let n=_({props:e,name:`MuiLinearProgress`}),{className:r,color:i=`primary`,value:o,valueBuffer:s,variant:c=`indeterminate`,...l}=n,u={...n,color:i,variant:c},d=I(u),f=S(),p={},m={bar1:{},bar2:{}};if((c===`determinate`||c===`buffer`)&&o!==void 0){p[`aria-valuenow`]=Math.round(o),p[`aria-valuemin`]=0,p[`aria-valuemax`]=100;let e=o-100;f&&(e=-e),m.bar1.transform=`translateX(${e}%)`}if(c===`buffer`&&s!==void 0){let e=(s||0)-100;f&&(e=-e),m.bar2.transform=`translateX(${e}%)`}return(0,O.jsxs)(R,{className:a(d.root,r),ownerState:u,role:`progressbar`,...p,ref:t,...l,children:[c===`buffer`?(0,O.jsx)(z,{className:d.dashed,ownerState:u}):null,(0,O.jsx)(B,{className:d.bar1,ownerState:u,style:m.bar1}),c===`determinate`?null:(0,O.jsx)(V,{className:d.bar2,ownerState:u,style:m.bar2})]})})})))()}export{U as n,H as t};