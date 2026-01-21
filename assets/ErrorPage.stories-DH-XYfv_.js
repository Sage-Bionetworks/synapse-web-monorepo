import{E as s,S as a}from"./ErrorPage-DScTJywT.js";import"./iframe-BVXHJH4u.js";import"./index-Chi_LkuB.js";import"./useDOI-dEO3WI8X.js";import"./waitForAsyncResult-q8hB3PB9.js";import"./useMessage-NjvtcKa-.js";import"./useUserBundle-BoxU-Q5V.js";import"./useSuspenseQuery-D29r270q.js";import"./ConfirmationDialog-Dd8pw4WU.js";import"./DialogBase-CcwXDs7D.js";import"./Close-CqljNwDC.js";import"./HelpPopover-BbvqYo6O.js";import"./MarkdownPopover-BAO6UTFT.js";import"./LightTooltip-Ds1uGQMo.js";import"./MarkdownSynapse-C6WRwt-e.js";import"./SkeletonButton-B31ULBiJ.js";import"./SkeletonInlineBlock-DtRriEan.js";import"./SkeletonTable-DQbZ0dw9.js";import"./SkeletonParagraph-CPzN7Agp.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
