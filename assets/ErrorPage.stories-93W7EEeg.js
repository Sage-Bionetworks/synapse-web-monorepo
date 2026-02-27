import{E as s,S as o}from"./ErrorPage-BtBtw9Ne.js";import"./iframe-RNQ9FFfL.js";import"./index-Chi_LkuB.js";import"./useDOI-5x_nq15i.js";import"./waitForAsyncResult-CppJjLU6.js";import"./useMessage-BMdPT4oz.js";import"./useUserBundle-DBFUriey.js";import"./ConfirmationDialog-B3HKAPXk.js";import"./DialogBase-obsFT4U8.js";import"./Close-D12ceDGd.js";import"./HelpPopover-Bu2Wm8fE.js";import"./MarkdownPopover-Dg5ZNl7W.js";import"./LightTooltip-DXhNzA7Y.js";import"./MarkdownSynapse-DBaSEh29.js";import"./SkeletonButton-D0L_5F4L.js";import"./SkeletonInlineBlock-Bh2U8Vk5.js";import"./SkeletonTable-CWFE2ocy.js";import"./SkeletonParagraph-TNDyKrCR.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
