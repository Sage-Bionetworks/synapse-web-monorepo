import{E as s,S as o}from"./ErrorPage-CmtQgCS8.js";import"./iframe-HR5efO_6.js";import"./index-Chi_LkuB.js";import"./useDOI-CB-rcnhn.js";import"./waitForAsyncResult-BnHFOVB7.js";import"./useMessage-BM0ULJhG.js";import"./useUserBundle-B64ZgZGa.js";import"./ConfirmationDialog-BDKUD8yD.js";import"./DialogBase-CheFJngv.js";import"./Close-DAks8q53.js";import"./HelpPopover-C2dZwoeG.js";import"./MarkdownPopover-DV3WT5Oj.js";import"./LightTooltip-DgluAXFh.js";import"./MarkdownSynapse-BD_kELiG.js";import"./SkeletonButton-CpPX_nit.js";import"./SkeletonInlineBlock-pMLRfvW-.js";import"./SkeletonTable-Bm63jMKW.js";import"./SkeletonParagraph-BGy70kQG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
