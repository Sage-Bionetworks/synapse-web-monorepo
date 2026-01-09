import{E as s,S as a}from"./ErrorPage-jO_lPtms.js";import"./iframe-DvdBRTAM.js";import"./index-Chi_LkuB.js";import"./useDOI-D1sN8nlK.js";import"./waitForAsyncResult-CXdIYbFM.js";import"./useMessage-CcuSXlb1.js";import"./useUserBundle-DBtVzZkD.js";import"./useSuspenseQuery-0rL7Zkrv.js";import"./ConfirmationDialog-CaQzY7SE.js";import"./DialogBase-D0NAWliG.js";import"./Close-DIuhwt4I.js";import"./HelpPopover-BVLYNmZ9.js";import"./MarkdownPopover-DgZvY7up.js";import"./LightTooltip-4pv9jmqt.js";import"./MarkdownSynapse-BLTNNvla.js";import"./SkeletonButton-Bf60llvE.js";import"./SkeletonInlineBlock-DETlLR5h.js";import"./SkeletonTable-ChN7ZUgX.js";import"./SkeletonParagraph-CljYlKAw.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
