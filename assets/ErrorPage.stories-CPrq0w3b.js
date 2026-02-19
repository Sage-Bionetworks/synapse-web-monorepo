import{E as s,S as a}from"./ErrorPage-92SXHMNE.js";import"./iframe-05B79XZ4.js";import"./index-Chi_LkuB.js";import"./useDOI-wqSYxCsy.js";import"./waitForAsyncResult-CJtXQwKI.js";import"./useMessage-CMY-T1XU.js";import"./useUserBundle-xFwWr3d6.js";import"./useSuspenseQuery-DXOpFrh-.js";import"./ConfirmationDialog-Bn0uFIx_.js";import"./DialogBase-DuQ9TKuQ.js";import"./Close-DqDldpZI.js";import"./HelpPopover-CaC791WE.js";import"./MarkdownPopover-DBcqFb8R.js";import"./LightTooltip-DHbNXpmV.js";import"./MarkdownSynapse-9V8zeGJ5.js";import"./SkeletonButton-DSpQmtG3.js";import"./SkeletonInlineBlock-DysL0dN-.js";import"./SkeletonTable-CUmGP5q5.js";import"./SkeletonParagraph-CCYsd3b9.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
