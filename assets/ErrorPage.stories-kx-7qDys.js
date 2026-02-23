import{E as s,S as a}from"./ErrorPage-CohUtQ_8.js";import"./iframe-DUgvw_e1.js";import"./index-Chi_LkuB.js";import"./useDOI-Dc5CN1h2.js";import"./waitForAsyncResult-_thx4bZ_.js";import"./useMessage-YlUwjan-.js";import"./useUserBundle-DplDm6GV.js";import"./useSuspenseQuery-ox9OnZJk.js";import"./ConfirmationDialog-Bvq2Xms7.js";import"./DialogBase-0-bDisQA.js";import"./Close-BEr3H63z.js";import"./HelpPopover-BS0U5Svz.js";import"./MarkdownPopover-8PnwzX9y.js";import"./LightTooltip-pkrnltrn.js";import"./MarkdownSynapse-C3JndqNi.js";import"./SkeletonButton-CHYteE0_.js";import"./SkeletonInlineBlock-C0f092qz.js";import"./SkeletonTable-wy_brudp.js";import"./SkeletonParagraph-zF20ua7-.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
