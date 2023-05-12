import{a as y,j as o,F as L}from"./jsx-runtime-095bf462.js";import{r as M}from"./index-8db94870.js";import{B as j}from"./Backdrop-0957daa2.js";import{B as U}from"./Box-13f1aabd.js";import{T as C}from"./Typography-0933b2f6.js";import{B as w}from"./Button-891a522f.js";import{_ as O}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as l}from"./extends-98964cd2.js";import{g as A,a as F,s as v,x as n,u as K,b as E,e as X,F as G,G as W}from"./styled-f64e11ba.js";import{u as H}from"./utils-b5103c3b.js";import{k as _,c as k}from"./emotion-react.browser.esm-4b1ddfee.js";function J(r){return A("MuiLinearProgress",r)}F("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Q=["className","color","value","valueBuffer","variant"];let d=r=>r,I,q,N,T,z,S;const x=4,Y=_(I||(I=d`
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
`)),Z=_(q||(q=d`
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
`)),rr=_(N||(N=d`
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
`)),er=r=>{const{classes:e,variant:a,color:t}=r,c={root:["root",`color${n(t)}`,a],dashed:["dashed",`dashedColor${n(t)}`],bar1:["bar",`barColor${n(t)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${n(t)}`,a==="buffer"&&`color${n(t)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return X(c,J,e)},$=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?G(r.palette[e].main,.62):W(r.palette[e].main,.5),ar=v("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${n(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:$(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),or=v("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${n(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=$(e,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},k(T||(T=d`
    animation: ${0} 3s infinite linear;
  `),rr)),tr=v("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${x}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${x}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(z||(z=d`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Y)),nr=v("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:$(e,r.color),transition:`transform .${x}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(S||(S=d`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Z)),ir=M.forwardRef(function(e,a){const t=K({props:e,name:"MuiLinearProgress"}),{className:c,color:f="primary",value:u,valueBuffer:p,variant:s="indeterminate"}=t,D=O(t,Q),m=l({},t,{color:f,variant:s}),b=er(m),B=H(),g={},h={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&u!==void 0){g["aria-valuenow"]=Math.round(u),g["aria-valuemin"]=0,g["aria-valuemax"]=100;let i=u-100;B.direction==="rtl"&&(i=-i),h.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&p!==void 0){let i=(p||0)-100;B.direction==="rtl"&&(i=-i),h.bar2.transform=`translateX(${i}%)`}return y(ar,l({className:E(b.root,c),ownerState:m,role:"progressbar"},g,{ref:a},D,{children:[s==="buffer"?o(or,{className:b.dashed,ownerState:m}):null,o(tr,{className:b.bar1,ownerState:m,style:h.bar1}),s==="determinate"?null:o(nr,{className:b.bar2,ownerState:m,style:h.bar2})]}))}),V=ir;const yr=o("div",{className:"bar-loader",children:o(V,{classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"}})}),P=({size:r=20,margin:e="auto"})=>o("div",{className:"spinner",style:{height:`${r}px`,width:`${r}px`,backgroundSize:`${r}px`,margin:`${e}`}}),R=({show:r,currentProgress:e,onCancel:a,totalProgress:t,headlineText:c,hintText:f})=>{M.useEffect(()=>(document.body.style.cursor=r?"wait":"default",()=>{document.body.style.cursor="default"}),[r]);const u=y(L,{children:[o("div",{className:"bar-loader",children:o(V,{"data-testid":"progress-bar",variant:"determinate",classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"},value:e/t*100})}),o(C,{variant:"headline3",mb:2,children:c}),o(C,{variant:"hintText",mb:2,children:f})]});return o(j,{open:r,onClick:()=>{},"aria-hidden":!1,sx:{backgroundColor:"rgba(255, 255, 255, 0.9)",zIndex:p=>p.zIndex.modal+1},children:y(U,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:[t?u:y(L,{children:[o(P,{size:40,margin:"16px"}),o(C,{variant:"headline3","data-testid":"spinner-hint-text",mb:2,children:f})]}),a&&o(w,{variant:"outlined",color:"primary",onClick:a,children:"Cancel"})]})})};try{P.displayName="SynapseSpinner",P.__docgenInfo={description:"",displayName:"SynapseSpinner",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}},margin:{defaultValue:{value:"auto"},description:"",name:"margin",required:!1,type:{name:"string"}}}}}catch{}try{R.displayName="BlockingLoader",R.__docgenInfo={description:"",displayName:"BlockingLoader",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},currentProgress:{defaultValue:null,description:"",name:"currentProgress",required:!1,type:{name:"number"}},totalProgress:{defaultValue:null,description:"",name:"totalProgress",required:!1,type:{name:"number"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},headlineText:{defaultValue:null,description:"",name:"headlineText",required:!1,type:{name:"string"}}}}}catch{}export{R as B,P as S,yr as l};
//# sourceMappingURL=LoadingScreen-339f6bfd.js.map
