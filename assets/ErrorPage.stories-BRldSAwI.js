import{S as a,E as s}from"./ErrorPage-BUdpON05.js";import"./iframe-DI_DW6I7.js";import"./index-Chi_LkuB.js";import"./useDOI-KXDaLMSo.js";import"./waitForAsyncResult-CFX1n-Lj.js";import"./useMessage-BCJ-O5Ei.js";import"./useUserBundle-sgovs3e8.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-BT2-p3SP.js";import"./DialogBase-vDTKWkBt.js";import"./Close-BlF01rCL.js";import"./HelpPopover-D9eTDHf2.js";import"./MarkdownPopover-3GY4ND-o.js";import"./LightTooltip-BJTLvyTt.js";import"./MarkdownSynapse-CFMaEATT.js";import"./SkeletonButton-VuyYmUxo.js";import"./SkeletonInlineBlock-2jyq21QW.js";import"./SkeletonTable-B1K8a5wm.js";import"./SkeletonParagraph-iVrUoPVl.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
