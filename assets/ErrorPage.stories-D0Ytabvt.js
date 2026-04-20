import{S as a,E as s}from"./ErrorPage-x_5H_X4p.js";import"./iframe-BnuiMoX_.js";import"./index-Chi_LkuB.js";import"./useDOI-BDCswZae.js";import"./waitForAsyncResult-bGj7IFB6.js";import"./useMessage-bvrMwdqb.js";import"./useUserBundle-MQOAsYfr.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-trKeO__a.js";import"./DialogBase-ZChlIQOE.js";import"./Close-DJ29z905.js";import"./HelpPopover-x83RozMQ.js";import"./MarkdownPopover-Cm0YthTk.js";import"./LightTooltip-DUGbboAh.js";import"./MarkdownSynapse-DkYu3x07.js";import"./SkeletonButton-CgoQvaBi.js";import"./SkeletonInlineBlock-DxCr7zGd.js";import"./SkeletonTable-B_UPgtXl.js";import"./SkeletonParagraph-BQZp8fCk.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
