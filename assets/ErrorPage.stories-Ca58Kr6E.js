import{E as s,S as o}from"./ErrorPage-BbCj1epN.js";import"./iframe-BmEDGyjb.js";import"./index-Chi_LkuB.js";import"./useDOI-DjunIkjo.js";import"./waitForAsyncResult-DNrsP9s3.js";import"./useMessage-2pbVNjBd.js";import"./useUserBundle-Cd1kVc-i.js";import"./ConfirmationDialog-CSeFQT8P.js";import"./DialogBase--Z6amcCK.js";import"./Close-Ba6rPhRO.js";import"./HelpPopover-BBG0qokF.js";import"./MarkdownPopover-w2dEOi0v.js";import"./LightTooltip-D4z_e32b.js";import"./MarkdownSynapse-DScTNbQ4.js";import"./SkeletonButton-Dqpl9ltR.js";import"./SkeletonInlineBlock-gJQ0GVFi.js";import"./SkeletonTable-DO7dretU.js";import"./SkeletonParagraph-BB_2QaC-.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
