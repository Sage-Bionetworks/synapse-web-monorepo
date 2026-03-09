import{E as s,S as o}from"./ErrorPage-BQcqqkir.js";import"./iframe-yrc_qHyu.js";import"./index-Chi_LkuB.js";import"./useDOI-5Bhl2Fei.js";import"./waitForAsyncResult-DBtgi6LB.js";import"./useMessage-yNj1RWow.js";import"./useUserBundle-Di1cjl0z.js";import"./ConfirmationDialog-BGe5VYMN.js";import"./DialogBase-BjJleq3r.js";import"./Close-Di02zrOW.js";import"./HelpPopover-BqXpmNFE.js";import"./MarkdownPopover-CKXXZDMn.js";import"./LightTooltip-N83Bwt9b.js";import"./MarkdownSynapse-Bx8fIbL4.js";import"./SkeletonButton-qQeUX2b-.js";import"./SkeletonInlineBlock-A6wMEVyL.js";import"./SkeletonTable-Cb2oJXC7.js";import"./SkeletonParagraph-BFGPUajO.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...a.parameters?.docs?.source}}};const U=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,U as __namedExportsOrder,f as default};
