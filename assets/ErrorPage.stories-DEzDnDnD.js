import{E as s,S as a}from"./ErrorPage-pUepIYDs.js";import"./iframe-CKkRwo5v.js";import"./index-Chi_LkuB.js";import"./useDOI-xAPgx5p9.js";import"./waitForAsyncResult-SEQY2n53.js";import"./useMessage-C50aTZnu.js";import"./useUserBundle-Biq_JT-q.js";import"./useSuspenseQuery-vP5ehhR0.js";import"./ConfirmationDialog-CVuhYKmi.js";import"./DialogBase-DdQNaVTV.js";import"./Close-CVsFjIhS.js";import"./HelpPopover-DZFuhU9d.js";import"./MarkdownPopover-niMIJG4k.js";import"./LightTooltip-Bt97fi6r.js";import"./MarkdownSynapse-COK-Gxgq.js";import"./SkeletonButton-DLboZNuU.js";import"./SkeletonInlineBlock-DfpGMDXv.js";import"./SkeletonTable-bRkZRSb0.js";import"./SkeletonParagraph-DGFhmrY6.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
