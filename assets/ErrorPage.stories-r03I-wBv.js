import{S as o,E as s}from"./ErrorPage-qL4ndaen.js";import"./iframe-CtlQt718.js";import"./index-Chi_LkuB.js";import"./useDOI-DM7rIKp1.js";import"./waitForAsyncResult-D3W_MmPK.js";import"./useMessage-C91sq0Mk.js";import"./useUserBundle-DrrIAhkW.js";import"./ConfirmationDialog-Dh4tlHv0.js";import"./DialogBase-DOt-OwDb.js";import"./Close-DmDKZefQ.js";import"./HelpPopover-Gion91DD.js";import"./MarkdownPopover-CoOreYFS.js";import"./LightTooltip-D8qugsOL.js";import"./MarkdownSynapse-BuD1xjPB.js";import"./SkeletonButton-i4oTWqaB.js";import"./SkeletonInlineBlock-BaHv_pCV.js";import"./SkeletonTable-DCMQwvPd.js";import"./SkeletonParagraph-CUgZcOgo.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
