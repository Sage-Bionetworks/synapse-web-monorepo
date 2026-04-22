import{S as a,E as s}from"./ErrorPage-BqI7l1YJ.js";import"./iframe-Bq2Ob2aK.js";import"./index-Chi_LkuB.js";import"./useDOI-BTRKvHmH.js";import"./waitForAsyncResult-y_r7E1uG.js";import"./useMessage-Dl7EtJM_.js";import"./useUserBundle-BEHCcl1q.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-Bu-Eb5tt.js";import"./DialogBase-94P046rC.js";import"./Close-UeiWMwwR.js";import"./HelpPopover-CG_-BC6G.js";import"./MarkdownPopover-CtjBz5l1.js";import"./LightTooltip-CzYg_hTr.js";import"./MarkdownSynapse-Dhzef1qm.js";import"./SkeletonButton-BGK0wFQC.js";import"./SkeletonInlineBlock-CmYjNg7h.js";import"./SkeletonTable-BBXhhxxV.js";import"./SkeletonParagraph-LdyaQqI_.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
