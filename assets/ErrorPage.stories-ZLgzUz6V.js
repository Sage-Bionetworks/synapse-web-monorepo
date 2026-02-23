import{E as s,S as a}from"./ErrorPage-CHmJ53OV.js";import"./iframe-D92BdoG9.js";import"./index-Chi_LkuB.js";import"./useDOI-ExvZ_8ve.js";import"./waitForAsyncResult-BVOeial9.js";import"./useMessage-C6kk3dge.js";import"./useUserBundle-BBzdm9g8.js";import"./useSuspenseQuery-B_1ZDlRS.js";import"./ConfirmationDialog--5BBCv73.js";import"./DialogBase-7QNHfM8i.js";import"./Close-CMNaFelZ.js";import"./HelpPopover-DwSVnQpf.js";import"./MarkdownPopover-DYuidQle.js";import"./LightTooltip-DHXuYbNh.js";import"./MarkdownSynapse-BXkVd7Pm.js";import"./SkeletonButton-DkZdiJnq.js";import"./SkeletonInlineBlock-BoREPhEN.js";import"./SkeletonTable-DmBSaFM1.js";import"./SkeletonParagraph-BlcJcRxn.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
