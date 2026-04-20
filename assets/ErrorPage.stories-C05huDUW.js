import{S as a,E as s}from"./ErrorPage-ejkylwKA.js";import"./iframe-CyTUL3rw.js";import"./index-Chi_LkuB.js";import"./useDOI-CD4KtpEO.js";import"./waitForAsyncResult-qpmmSR8g.js";import"./useMessage-DiQQuy0W.js";import"./useUserBundle-B9ypisaf.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-BSxA4EpL.js";import"./DialogBase-BmPd6gFD.js";import"./Close-Cs5OhkJ0.js";import"./HelpPopover-Di3M7oAV.js";import"./MarkdownPopover-C7H_W_vs.js";import"./LightTooltip-Br9ozYpY.js";import"./MarkdownSynapse-C3mcPF1h.js";import"./SkeletonButton-DChDzo9i.js";import"./SkeletonInlineBlock-B96TZts7.js";import"./SkeletonTable-BzEL_yMf.js";import"./SkeletonParagraph-D3EKUoCV.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
