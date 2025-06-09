import{w as m,x as R,b as _,g as S,_ as M,a as o,c as j,l as b,o as C}from"./createTheme-DVbiGJ67.js";import{r as U}from"./index-BsJQi6Dk.js";import{u as A,s as E,c as X}from"./DefaultPropsProvider-yqsgBtMO.js";import{j as F}from"./jsx-runtime-CnC__bFg.js";function h(t,e=0,a=1){return R(t,e,a)}function I(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let a=t.match(e);return a&&a[0].length===1&&(a=a.map(s=>s+s)),a?`rgb${a.length===4?"a":""}(${a.map((s,n)=>n<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function u(t){if(t.type)return t;if(t.charAt(0)==="#")return u(I(t));const e=t.indexOf("("),a=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(m(9,t));let s=t.substring(e+1,t.length-1),n;if(a==="color"){if(s=s.split(" "),n=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n)===-1)throw new Error(m(10,n))}else s=s.split(",");return s=s.map(i=>parseFloat(i)),{type:a,values:s,colorSpace:n}}function p(t){const{type:e,colorSpace:a}=t;let{values:s}=t;return e.indexOf("rgb")!==-1?s=s.map((n,i)=>i<3?parseInt(n,10):n):e.indexOf("hsl")!==-1&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),e.indexOf("color")!==-1?s=`${a} ${s.join(" ")}`:s=`${s.join(", ")}`,`${e}(${s})`}function N(t,e){return t=u(t),e=h(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,p(t)}function J(t,e){if(t=u(t),e=h(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)t.values[a]*=1-e;return p(t)}function Q(t,e){if(t=u(t),e=h(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let a=0;a<3;a+=1)t.values[a]+=(255-t.values[a])*e;else if(t.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)t.values[a]+=(1-t.values[a])*e;return p(t)}function W(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function B(t){return parseFloat(t)}function K(t){return _("MuiSkeleton",t)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const P=["animation","className","component","height","style","variant","width"];let l=t=>t,c,v,x,y;const T=t=>{const{classes:e,variant:a,animation:s,hasChildren:n,width:i,height:r}=t;return X({root:["root",a,s,n&&"withChildren",n&&!i&&"fitContent",n&&!r&&"heightAuto"]},K,e)},D=C(c||(c=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),L=C(v||(v=l`
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
`)),V=E("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=W(t.shape.borderRadius)||"px",s=B(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:N(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&b(x||(x=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),D),({ownerState:t,theme:e})=>t.animation==="wave"&&b(y||(y=l`
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
    `),L,(e.vars||e).palette.action.hover)),Y=U.forwardRef(function(e,a){const s=A({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:i,component:r="span",height:d,style:k,variant:w="text",width:$}=s,f=M(s,P),g=o({},s,{animation:n,component:r,variant:w,hasChildren:!!f.children}),O=T(g);return F.jsx(V,o({as:r,ref:a,className:j(O.root,i),ownerState:g},f,{style:o({width:$,height:d},k)}))});export{Y as S,N as a,J as d,Q as l};
