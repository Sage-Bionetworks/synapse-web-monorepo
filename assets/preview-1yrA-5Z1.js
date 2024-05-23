function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-C5u_UkEc.js","./iframe-CH3snAyG.js","./index-Dl6G-zuu.js","./react-18-Bamk9FSf.js","./index-D1_ZHIBm.js","./index-DMoHWj5j.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js","./_commonjs-dynamic-modules-TDtrdbi3.js","./index-Bw8VTzHM.js","./assertThisInitialized-B9jnkVVz.js","./inheritsLoose-B7h9gheN.js","./isNativeReflectConstruct-CnNQtDHK.js","./mapValues-BliEdlJP.js","./uniq-0oAaZ0Sl.js","./index-BhaQ_E1E.js","./util-79FwwIvO.js","./index-DCjY2C6i.js","./index-DZ7m19C4.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-CH3snAyG.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-C5u_UkEc.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
