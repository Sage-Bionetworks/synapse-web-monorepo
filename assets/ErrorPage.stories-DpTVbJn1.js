import{E as s,S as a}from"./ErrorPage-6cKzFvSy.js";import"./iframe-CjPdK8o3.js";import"./index-Chi_LkuB.js";import"./useDOI-sZc5dohm.js";import"./waitForAsyncResult-Dwd4JuvU.js";import"./useMessage-CDcGccHW.js";import"./useUserBundle-Bny1QVf1.js";import"./useSuspenseQuery-B-tj7iZo.js";import"./ConfirmationDialog-7KWUNYWE.js";import"./DialogBase-A1jvQwLe.js";import"./Close-CHM8bqMs.js";import"./HelpPopover-CCy_vrhC.js";import"./MarkdownPopover-C1vGDBes.js";import"./LightTooltip-DIhtsuRB.js";import"./MarkdownSynapse-CzOnyM4H.js";import"./SkeletonButton-DVgZ4_7g.js";import"./SkeletonInlineBlock-CpcOQN65.js";import"./SkeletonTable-Dem7Lpfl.js";import"./SkeletonParagraph-BeVZ-sFG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
