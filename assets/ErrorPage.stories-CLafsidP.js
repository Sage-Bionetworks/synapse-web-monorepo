import{E as s,S as a}from"./ErrorPage-CXzLzCBA.js";import"./iframe-xmmb_I0l.js";import"./index-Chi_LkuB.js";import"./useDOI-B0aomRCK.js";import"./waitForAsyncResult-CQfpvd8p.js";import"./useMessage-CgG0ECcz.js";import"./useUserBundle-CiacMnau.js";import"./useSuspenseQuery-B2gu81Lt.js";import"./ConfirmationDialog-Ct05-ZlH.js";import"./DialogBase-BYsOjz7L.js";import"./Close-Cnr5zUVu.js";import"./HelpPopover-BMEIvn42.js";import"./MarkdownPopover-DGXe5vs0.js";import"./LightTooltip-D9ucYA3A.js";import"./MarkdownSynapse-DiGGFE3_.js";import"./SkeletonButton-9FRcX2_1.js";import"./SkeletonInlineBlock-CLZ8B174.js";import"./SkeletonTable-jOb-G6tL.js";import"./SkeletonParagraph-BjPCkGoh.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
