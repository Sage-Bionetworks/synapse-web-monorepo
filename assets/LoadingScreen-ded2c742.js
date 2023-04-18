import{a as h,j as t,F as B}from"./jsx-runtime-ad672792.js";import{r as z}from"./index-f1f749bf.js";import{M as j}from"./Modal-6ffa84ac.js";import{T as y}from"./Typography-f5dd8748.js";import{B as U}from"./Button-7d415009.js";import{_ as w}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as l}from"./extends-98964cd2.js";import{g as O,a as A,s as v,x as n,u as K,c as E,b as F,Q as X,R as H}from"./styled-8837a0b3.js";import{u as Q}from"./useTheme-c4678cf9.js";import{k as _,c as k}from"./emotion-react.browser.esm-a8a50fc7.js";function W(r){return O("MuiLinearProgress",r)}A("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const G=["className","color","value","valueBuffer","variant"];let d=r=>r,N,q,I,T,S,M;const C=4,J=_(N||(N=d`
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
`)),Y=_(q||(q=d`
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
`)),Z=_(I||(I=d`
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
`)),rr=r=>{const{classes:e,variant:a,color:o}=r,c={root:["root",`color${n(o)}`,a],dashed:["dashed",`dashedColor${n(o)}`],bar1:["bar",`barColor${n(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${n(o)}`,a==="buffer"&&`color${n(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return F(c,W,e)},x=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?X(r.palette[e].main,.62):H(r.palette[e].main,.5),er=v("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${n(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),ar=v("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${n(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=x(e,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},k(T||(T=d`
    animation: ${0} 3s infinite linear;
  `),Z)),tr=v("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${C}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${C}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(S||(S=d`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),J)),or=v("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(e,r.color),transition:`transform .${C}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(M||(M=d`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Y)),nr=z.forwardRef(function(e,a){const o=K({props:e,name:"MuiLinearProgress"}),{className:c,color:m="primary",value:u,valueBuffer:$,variant:s="indeterminate"}=o,D=w(o,G),f=l({},o,{color:m,variant:s}),p=rr(f),L=Q(),b={},g={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&u!==void 0){b["aria-valuenow"]=Math.round(u),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let i=u-100;L.direction==="rtl"&&(i=-i),g.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&$!==void 0){let i=($||0)-100;L.direction==="rtl"&&(i=-i),g.bar2.transform=`translateX(${i}%)`}return h(er,l({className:E(p.root,c),ownerState:f,role:"progressbar"},b,{ref:a},D,{children:[s==="buffer"?t(ar,{className:p.dashed,ownerState:f}):null,t(tr,{className:p.bar1,ownerState:f,style:g.bar1}),s==="determinate"?null:t(or,{className:p.bar2,ownerState:f,style:g.bar2})]}))}),V=nr;const gr=t("div",{className:"bar-loader",children:t(V,{classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"}})}),P=({size:r=20})=>t("div",{className:"spinner",style:{height:`${r}px`,width:`${r}px`,backgroundSize:`${r}px`}}),R=({show:r,currentProgress:e,onCancel:a,totalProgress:o,headlineText:c,hintText:m})=>{z.useEffect(()=>(document.body.style.cursor=r?"wait":"default",()=>{document.body.style.cursor="default"}),[r]);const u=h(B,{children:[t("div",{className:"bar-loader",children:t(V,{"data-testid":"progress-bar",variant:"determinate",classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"},value:e/o*100})}),t(y,{variant:"headline3",children:c}),t(y,{variant:"hintText",children:m})]});return t(j,{className:"bootstrap-4-backport BlockingLoader",backdrop:!1,animation:!1,show:r,size:"sm",centered:!0,onHide:()=>{},children:h("div",{className:"SpinnerContainer","data-testid":"spinner-container",children:[o?u:h(B,{children:[t(P,{size:40}),t(y,{variant:"headline3","data-testid":"spinner-hint-text",children:m})]}),a&&t(U,{variant:"default",onClick:a,children:"Cancel"})]})})};try{P.displayName="SynapseSpinner",P.__docgenInfo={description:"",displayName:"SynapseSpinner",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}try{R.displayName="BlockingLoader",R.__docgenInfo={description:"",displayName:"BlockingLoader",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},currentProgress:{defaultValue:null,description:"",name:"currentProgress",required:!1,type:{name:"number"}},totalProgress:{defaultValue:null,description:"",name:"totalProgress",required:!1,type:{name:"number"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},headlineText:{defaultValue:null,description:"",name:"headlineText",required:!1,type:{name:"string"}}}}}catch{}export{R as B,P as S,gr as l};
//# sourceMappingURL=LoadingScreen-ded2c742.js.map
