import{E as s,S as o}from"./ErrorPage-BvWXxi8J.js";import"./iframe-CpfV3NOk.js";import"./index-Chi_LkuB.js";import"./useDOI-CsfdD0Xg.js";import"./waitForAsyncResult-DeNh9gY4.js";import"./useMessage-Bow1rb1N.js";import"./useUserBundle-C27HsRJe.js";import"./ConfirmationDialog-DY31ZGPr.js";import"./DialogBase-CPT43OGP.js";import"./Close-C1wfyqfV.js";import"./HelpPopover-D1HFzEEY.js";import"./MarkdownPopover-SqpB0xea.js";import"./LightTooltip-Nh7QLXl8.js";import"./MarkdownSynapse-D21W3bY-.js";import"./SkeletonButton-AQOmCgu3.js";import"./SkeletonInlineBlock-DUNC2gO4.js";import"./SkeletonTable-DOJ0zD5O.js";import"./SkeletonParagraph-D5apqSdK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
