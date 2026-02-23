import{E as s,S as a}from"./ErrorPage-BNrQUcrm.js";import"./iframe-D6-EgIYn.js";import"./index-Chi_LkuB.js";import"./useDOI-Ck-s4OtH.js";import"./waitForAsyncResult-DHwSVMDx.js";import"./useMessage-i0jjc9-O.js";import"./useUserBundle-CyWCEqcm.js";import"./useSuspenseQuery-CDWRAkW_.js";import"./ConfirmationDialog-BievdrGA.js";import"./DialogBase-jhwmtm1u.js";import"./Close-CB4RDINp.js";import"./HelpPopover-6jNO7rXC.js";import"./MarkdownPopover-63--326B.js";import"./LightTooltip-ByM4QqbN.js";import"./MarkdownSynapse-BOOvENLm.js";import"./SkeletonButton-BgAZzTmz.js";import"./SkeletonInlineBlock-CkGbAtvq.js";import"./SkeletonTable-Cw1xCxvL.js";import"./SkeletonParagraph-DzfgVu65.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
