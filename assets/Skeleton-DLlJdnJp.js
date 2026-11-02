import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-DNOQmUAz.js";import{_ as r,at as i,b as a,g as o,nt as s,v as c,x as l,y as u}from"./createTheme-CL4c-Jqh.js";import{t as d}from"./jsx-runtime-BB9-612F.js";import{b as f,d as p,i as m,n as h,o as g,r as _,t as v}from"./DefaultPropsProvider-DWZA7hHC.js";function y(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function b(e){return parseFloat(e)}function x(e){return c(`MuiSkeleton`,e)}function S(){return(S=e((()=>{r(),u(),o(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`])})))()}var C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{C=t(n()),l(),g(),_(),v(),S(),w=d(),T=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return f({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},x,t)},E=i`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,D=i`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,O=typeof E==`string`?null:s`
        animation: ${E} 2s ease-in-out 0.5s infinite;
      `,k=typeof D==`string`?null:s`
        &::after {
          animation: ${D} 2s linear 0.5s infinite;
        }
      `,A=p(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(m(({theme:e})=>{let t=y(e.shape.borderRadius)||`px`,n=b(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:O||{animation:`${E} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:k||{"&::after":{animation:`${D} 2s linear 0.5s infinite`}}}]}})),j=C.forwardRef(function(e,t){let n=h({props:e,name:`MuiSkeleton`}),{animation:r=`pulse`,className:i,component:o=`span`,height:s,style:c,variant:l=`text`,width:u,...d}=n,f={...n,animation:r,component:o,variant:l,hasChildren:!!d.children},p=T(f);return(0,w.jsx)(A,{as:o,ref:t,className:a(p.root,i),ownerState:f,...d,style:{width:u,height:s,...c}})})})))()}export{M as n,j as t};