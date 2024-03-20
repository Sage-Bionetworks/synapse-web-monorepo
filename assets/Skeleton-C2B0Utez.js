import{a as y,g as w,k as b,i as u,_ as R,b as _}from"./createTheme-CwlmBDro.js";import{_ as r}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{r as S}from"./index-Dl6G-zuu.js";import{s as $,u as U,c as M}from"./styled-OgyJf9MH.js";import{j}from"./jsx-runtime-Du8NFWEI.js";import{a as A}from"./colorManipulator-CXx1BTzE.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(t){return parseFloat(t)}function B(t){return y("MuiSkeleton",t)}w("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const E=["animation","className","component","height","style","variant","width"];let s=t=>t,p,m,g,f;const F=t=>{const{classes:a,variant:e,animation:i,hasChildren:o,width:l,height:n}=t;return M({root:["root",e,i,o&&"withChildren",o&&!l&&"fitContent",o&&!n&&"heightAuto"]},B,a)},K=b(p||(p=s`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),P=b(m||(m=s`
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
`)),T=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=X(t.shape.borderRadius)||"px",i=N(t.shape.borderRadius);return r({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:A(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(g||(g=s`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:a})=>t.animation==="wave"&&u(f||(f=s`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),P,(a.vars||a).palette.action.hover)),W=S.forwardRef(function(a,e){const i=U({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:l,component:n="span",height:h,style:v,variant:k="text",width:C}=i,d=R(i,E),c=r({},i,{animation:o,component:n,variant:k,hasChildren:!!d.children}),x=F(c);return j.jsx(T,r({as:n,ref:e,className:_(x.root,l),ownerState:c},d,{style:r({width:C,height:h},v)}))}),G=W;export{G as S};
