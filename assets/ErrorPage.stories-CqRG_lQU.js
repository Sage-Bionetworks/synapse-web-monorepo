import{E as s,S as a}from"./ErrorPage-Bn_0L9lx.js";import"./iframe-C1Apx41K.js";import"./index-Chi_LkuB.js";import"./useDOI-BM3rokmE.js";import"./waitForAsyncResult-DABSMdA5.js";import"./useMessage-DT5KqdvQ.js";import"./useUserBundle-nFsfxXQU.js";import"./useSuspenseQuery-CWXsXeM-.js";import"./ConfirmationDialog-BvosZqG2.js";import"./DialogBase-D25MustV.js";import"./Close-BYfoF0T4.js";import"./HelpPopover-B8LQHL_b.js";import"./MarkdownPopover-DHmJN8ko.js";import"./LightTooltip-Dd6uBPZU.js";import"./MarkdownSynapse-CjERrYjm.js";import"./SkeletonButton-D8PmJqDh.js";import"./SkeletonInlineBlock-CfPdCjit.js";import"./SkeletonTable-4nPmJRNn.js";import"./SkeletonParagraph-D2VtG1zT.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
