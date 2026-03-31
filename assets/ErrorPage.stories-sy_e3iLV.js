import{E as s,S as o}from"./ErrorPage-Cpv83JqL.js";import"./iframe-DGtd-eZ6.js";import"./index-Chi_LkuB.js";import"./useDOI-D165_ZP3.js";import"./waitForAsyncResult-D1IxOnOp.js";import"./useMessage-CxKt9rTR.js";import"./useUserBundle-17T_kydg.js";import"./ConfirmationDialog-GQl5NATU.js";import"./DialogBase-CMc4lLby.js";import"./Close-B_IJwyX4.js";import"./HelpPopover-Bexa4l-J.js";import"./MarkdownPopover-DFLb2Nun.js";import"./LightTooltip-DPmJZKdH.js";import"./MarkdownSynapse-Ck3-QFfE.js";import"./SkeletonButton-Dv9p8gRu.js";import"./SkeletonInlineBlock-BeCQqojL.js";import"./SkeletonTable-If1Q4Zg-.js";import"./SkeletonParagraph-B4bRIlqn.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
