import{E as s,S as o}from"./ErrorPage-BlPlqIDL.js";import"./iframe-C0ar5Nzr.js";import"./index-Chi_LkuB.js";import"./useDOI-eRNxUcdc.js";import"./waitForAsyncResult-C0f983bN.js";import"./useMessage-C4QyRP2x.js";import"./useUserBundle-DBMlukq6.js";import"./ConfirmationDialog-BnyJh5PO.js";import"./DialogBase-DIEXoqBk.js";import"./Close-BRs0EfFH.js";import"./HelpPopover-CqP6r1FP.js";import"./MarkdownPopover-BkLUE7Bg.js";import"./LightTooltip-2r7pM-Zn.js";import"./MarkdownSynapse-DSVPTxPU.js";import"./SkeletonButton-DLomeGvI.js";import"./SkeletonInlineBlock-sY9elCWZ.js";import"./SkeletonTable-4Tdh8Kss.js";import"./SkeletonParagraph-Cu2Z5Jdt.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
