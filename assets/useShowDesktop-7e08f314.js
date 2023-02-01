import{r as s}from"./index-f1f749bf.js";const d=768;function u(r){let e=r??d;const[t,i]=s.useState(window.innerWidth>e);return s.useEffect(()=>{const n=()=>{const o=window.innerWidth>e;o!==t&&i(o)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),t}export{u};
//# sourceMappingURL=useShowDesktop-7e08f314.js.map
