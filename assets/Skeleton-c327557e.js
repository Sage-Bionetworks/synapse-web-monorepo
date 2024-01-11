import{a as y,g as x,s as R,b as s,f as _,h as S,_ as $,j as U,k as M}from"./styled-01bfb76d.js";import{r as j}from"./index-76fb7be0.js";import{j as A}from"./jsx-runtime-9dc53467.js";import{k as b,c as u}from"./emotion-react.browser.esm-04dee135.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(t){return parseFloat(t)}function B(t){return y("MuiSkeleton",t)}x("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const F=["animation","className","component","height","style","variant","width"];let r=t=>t,p,m,g,f;const K=t=>{const{classes:a,variant:e,animation:i,hasChildren:n,width:l,height:o}=t;return M({root:["root",e,i,n&&"withChildren",n&&!l&&"fitContent",n&&!o&&"heightAuto"]},B,a)},P=b(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),T=b(m||(m=r`
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
`)),W=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=X(t.shape.borderRadius)||"px",i=N(t.shape.borderRadius);return s({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:_(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(g||(g=r`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),P),({ownerState:t,theme:a})=>t.animation==="wave"&&u(f||(f=r`
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
    `),T,(a.vars||a).palette.action.hover)),E=j.forwardRef(function(a,e){const i=S({props:a,name:"MuiSkeleton"}),{animation:n="pulse",className:l,component:o="span",height:h,style:v,variant:k="text",width:C}=i,d=$(i,F),c=s({},i,{animation:n,component:o,variant:k,hasChildren:!!d.children}),w=K(c);return A(W,s({as:o,ref:e,className:U(w.root,l),ownerState:c},d,{style:s({width:C,height:h},v)}))}),z=E;export{z as S};
//# sourceMappingURL=Skeleton-c327557e.js.map
