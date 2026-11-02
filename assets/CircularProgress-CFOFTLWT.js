import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{t as n}from"./react-DNOQmUAz.js";import{_ as r,at as i,b as a,g as o,nt as s,v as c,x as l,y as u}from"./createTheme-CL4c-Jqh.js";import{t as d}from"./jsx-runtime-BB9-612F.js";import{b as f,c as p,d as m,i as h,l as g,n as _,o as v,r as y,t as b}from"./DefaultPropsProvider-DWZA7hHC.js";import{n as x,t as S}from"./createSimplePaletteValueFilter-BZ8R_unU.js";function C(e){return c(`MuiCircularProgress`,e)}function w(){return(w=e((()=>{r(),u(),o(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDeterminate`,`circleIndeterminate`,`circleDisableShrink`])})))()}var T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{T=t(n()),l(),v(),y(),b(),g(),x(),w(),E=d(),D=44,O=i`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,k=i`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,A=typeof O==`string`?null:s`
        animation: ${O} 1.4s linear infinite;
      `,j=typeof k==`string`?null:s`
        animation: ${k} 1.4s ease-in-out infinite;
      `,M=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e,a={root:[`root`,n,`color${p(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,`circle${p(n)}`,i&&`circleDisableShrink`]};return f(a,C,t)},N=m(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${p(n.color)}`]]}})(h(({theme:e})=>({display:`inline-block`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`transform`)}},{props:{variant:`indeterminate`},style:A||{animation:`${O} 1.4s linear infinite`}},...Object.entries(e.palette).filter(S()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),P=m(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),F=m(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,t[`circle${p(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(h(({theme:e})=>({stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:j||{animation:`${k} 1.4s ease-in-out infinite`}}]}))),I=m(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(h(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),L=T.forwardRef(function(e,t){let n=_({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:o=!1,enableTrackSlot:s=!1,size:c=40,style:l,thickness:u=3.6,value:d=0,variant:f=`indeterminate`,...p}=n,m={...n,color:i,disableShrink:o,size:c,thickness:u,value:d,variant:f,enableTrackSlot:s},h=M(m),g={},v={},y={};if(f===`determinate`){let e=2*Math.PI*((D-u)/2);g.strokeDasharray=e.toFixed(3),y[`aria-valuenow`]=Math.round(d),g.strokeDashoffset=`${((100-d)/100*e).toFixed(3)}px`,v.transform=`rotate(-90deg)`}return(0,E.jsx)(N,{className:a(h.root,r),style:{width:c,height:c,...v,...l},ownerState:m,ref:t,role:`progressbar`,...y,...p,children:(0,E.jsxs)(P,{className:h.svg,ownerState:m,viewBox:`${D/2} ${D/2} ${D} ${D}`,children:[s?(0,E.jsx)(I,{className:h.track,ownerState:m,cx:D,cy:D,r:(D-u)/2,fill:`none`,strokeWidth:u,"aria-hidden":`true`}):null,(0,E.jsx)(F,{className:h.circle,style:g,ownerState:m,cx:D,cy:D,r:(D-u)/2,fill:`none`,strokeWidth:u})]})})})})))()}export{R as n,L as t};