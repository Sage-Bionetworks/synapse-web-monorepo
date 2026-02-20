import{E as s,S as a}from"./ErrorPage-W7AwBEMo.js";import"./iframe-4beS0gqZ.js";import"./index-Chi_LkuB.js";import"./useDOI-Cdnci8JE.js";import"./waitForAsyncResult-Vq5YD577.js";import"./useMessage-CvSlNNci.js";import"./useUserBundle-CsgmO8pI.js";import"./useSuspenseQuery-DcbESSKQ.js";import"./ConfirmationDialog-DiR-POnZ.js";import"./DialogBase-EyEbalB9.js";import"./Close-Di6LJuIZ.js";import"./HelpPopover-CrWRb3n8.js";import"./MarkdownPopover-DsiU9Oei.js";import"./LightTooltip-Bs_25L1-.js";import"./MarkdownSynapse-D_Ohq5Ke.js";import"./SkeletonButton-C4MVharh.js";import"./SkeletonInlineBlock-DJy2BwKW.js";import"./SkeletonTable-BUzuull8.js";import"./SkeletonParagraph-D8WDF9hI.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
